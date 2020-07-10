import { Router } from 'express';
import { employeeController } from './employee.controller';

export const router: Router = Router();

router.get('/', employeeController.findMany);
router.get('/:id', employeeController.findOneById);
