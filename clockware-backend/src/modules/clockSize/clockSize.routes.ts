import { Router } from 'express';
import { clockSizeController } from './clockSize.controller';
import { createValidator } from '../../common/middlewares/createValidator';
import { clockSizeIdDto } from './clockSize.dtos';

export const router: Router = Router();

router.get('/', clockSizeController.findMany);
router.get('/:id', createValidator(clockSizeIdDto, 'params'), clockSizeController.findOneById);
