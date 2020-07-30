import { Request, Response, NextFunction } from 'express';

import { Employee } from './employee.entity';
import { employeeService } from './employee.service';

import { IPaginatedData } from '../../common/interfaces/pagination.interfaces';

class EmployeeController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const employees: IPaginatedData<Employee[]> = await employeeService.findMany(req.query);
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

  public async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdEmployee: Employee = await employeeService.createOne(req.body);
      res.json(createdEmployee);
    } catch (e) {
      next(e);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedEmployee: Employee = await employeeService.updateOne(id, req.body);
      res.json(updatedEmployee);
    } catch (e) {
      next(e);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedEmployeeId: number = await employeeService.deleteOne(id);
      res.json({ id: deletedEmployeeId });
    } catch (e) {
      next(e);
    }
  }
}

export const employeeController = new EmployeeController();
