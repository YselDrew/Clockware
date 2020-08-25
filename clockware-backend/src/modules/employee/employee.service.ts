import { getRepository, getManager, LessThanOrEqual } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Employee } from './employee.entity';

import { paginationService } from '../pagination/pagination.service';
import { IOffset, IPaginatedData } from '../../common/interfaces/pagination.interfaces';
import { IEmployeeUpdates } from '../../common/interfaces/employee.interfaces';

class EmployeeService {
  public async findMany(query: qs.ParsedQs): Promise<IPaginatedData<Employee[]>> {
    const time = query.time;
    const cityId = Number(query.cityId);

    const page = Number(query.page);
    const limit = Number(query.limit);

    return getManager().transaction(async (transactionalEntityManager) => {
      const total: number = await transactionalEntityManager.getRepository(Employee).count({
        where: { cityId, availableFrom: LessThanOrEqual(time) },
      });

      const { offset, currentPage }: IOffset = paginationService.getOffset(page, limit, total);

      const employees: Employee[] = await transactionalEntityManager.getRepository(Employee).find({
        relations: ['city'],
        order: { id: 'ASC' },
        where: { cityId, availableFrom: LessThanOrEqual(time) },
        skip: offset,
        take: limit,
      });

      return {
        data: employees,
        pagination: {
          page: currentPage,
          total,
          limit,
        },
      };
    });
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

  public async updateOne(id: number, updates: IEmployeeUpdates): Promise<Employee> {
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
