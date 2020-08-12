import { Router } from 'express';
import { clockSizeController } from './clockSize.controller';

export const router: Router = Router();

router.get('/', clockSizeController.findMany);
router.get('/:id', clockSizeController.findOneById);
