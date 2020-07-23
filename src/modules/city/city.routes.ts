import { Router } from 'express';
import { cityController } from './city.controller';

export const router: Router = Router();

router.get('/', cityController.findMany);
router.get('/:id', cityController.findOneById);
