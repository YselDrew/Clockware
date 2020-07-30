import { Router } from 'express';
import { employeeController } from './employee.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createEmployeeDto, updateEmployeeDto } from './employee.dtos';

export const router: Router = Router();

router.get('/', employeeController.findMany);
router.get('/:id', employeeController.findOneById);

router.post('/', createValidator(createEmployeeDto), employeeController.createOne);

router.put('/:id', createValidator(updateEmployeeDto), employeeController.updateOne);

router.delete('/:id', employeeController.deleteOne);
