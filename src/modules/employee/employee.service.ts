import { Employee } from './employee.model';
import { NotFound } from '../../common/exceptions';

class EmployeeService {
  public async findMany(): Promise<Employee[]> {
    return Employee.findAll();
  }

  public async findOneById(id: number): Promise<Employee> {
    const employee: Employee = await Employee.findOne({ where: { id } });
    if (!employee) {
      throw new NotFound(`There is no employee with id ${id}`);
    }
    return employee;
  }
}

export const employeeService = new EmployeeService();
