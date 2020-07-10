import { Employee } from './employee.model';

class EmployeeService {
    public async findMany(): Promise<Employee[]> {
        return Employee.findAll();
    }

    public async findOneById(id): Promise<Employee> {
        return Employee.findOne({ where: { id } });
    }
}

export const employeeService = new EmployeeService();
