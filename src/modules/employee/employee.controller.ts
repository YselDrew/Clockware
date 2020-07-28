import { Request, Response, NextFunction } from 'express';

import { Employee } from './employee.entity';
import { employeeService } from './employee.service';

class EmployeeController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const employees: Employee[] = await employeeService.findMany();
      res.json(employees);
    } catch (e) {
      next(e);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const employee: Employee = await employeeService.findOneById(id);
      res.json(employee);
    } catch (e) {
      next(e);
    }
  }
}

export const employeeController = new EmployeeController();