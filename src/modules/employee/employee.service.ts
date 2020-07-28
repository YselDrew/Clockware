import { getRepository } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Employee } from './employee.entity';

class EmployeeService {
  public async findMany(): Promise<Employee[]> {
    return getRepository(Employee).find();
  }

  public async findOneById(id: number): Promise<Employee> {
    const employee: Employee | undefined = await getRepository(Employee).findOne(id);
    if (!employee) {
      throw new NotFound(`There is no employee with id ${id}`);
    }
    return employee;
  }
}

export const employeeService = new EmployeeService();
