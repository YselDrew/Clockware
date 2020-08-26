import { Router } from 'express';
import { employeeController } from './employee.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import {
  createEmployeeDto,
  updateEmployeeDto,
  getEmployeesDto,
  employeeIdDto,
} from './employee.dtos';

export const router: Router = Router();

router.get('/', createValidator(getEmployeesDto, 'query'), employeeController.findMany);
router.get('/:id', createValidator(employeeIdDto, 'params'), employeeController.findOneById);

router.post('/', createValidator(createEmployeeDto), employeeController.createOne);

router.put('/:id', createValidator(updateEmployeeDto), employeeController.updateOne);

router.delete('/:id', createValidator(employeeIdDto, 'params'), employeeController.deleteOne);
