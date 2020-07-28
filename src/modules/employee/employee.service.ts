import { getRepository, getManager } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Employee } from './employee.entity';

import { paginationService } from '../pagination/pagination.service';

class EmployeeService {
  public async findMany(query: any): Promise<any> {
    let { page, limit } = query;
    const total: number = await getRepository(Employee).count();
    const { offset, actualPage } = paginationService.getOffset(page, limit, total);
    page = actualPage;

    const employees: Employee[] = await getRepository(Employee).find({
      relations: ['city'],
      order: { id: 'ASC' },
      skip: offset,
      take: limit,
    });

    return {
      data: employees,
      pagination: {
        page,
        total,
        limit,
      },
    };
  }

  public async findOneById(id: number): Promise<Employee> {
    const employee: Employee | undefined = await getRepository(Employee).findOne({
      where: { id },
      relations: ['city'],
    });
    if (!employee) {
      throw new NotFound(`There is no employee with id ${id}`);
    }
    return employee;
  }

  public async createOne(newEmployee: Employee): Promise<Employee> {
    const createdEmployee: Employee = await getRepository(Employee).create(newEmployee);
    await getRepository(Employee).save(createdEmployee);
    return createdEmployee;
  }

  public async updateOne(id: number, updates: Employee): Promise<Employee> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const employee: Employee | undefined = await transactionalEntityManager
        .getRepository(Employee)
        .findOne(id);
      if (!employee) {
        throw new NotFound(`There is no employee with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Employee).update(id, updates);

      const updatedEmployee: Employee = await transactionalEntityManager
        .getRepository(Employee)
        .findOneOrFail(id);
      return updatedEmployee;
    });
  }

  public async deleteOne(id: number): Promise<number> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const employee: Employee | undefined = await transactionalEntityManager
        .getRepository(Employee)
        .findOne(id);
      if (!employee) {
        throw new NotFound(`There is no employee with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Employee).remove(employee);
      return id;
    });
  }
}

export const employeeService = new EmployeeService();
