import { Router } from 'express';
import { reservationController } from './reservation.controller';

export const router: Router = Router();

router.get('/', reservationController.findMany);
router.get('/:id', reservationController.findOneById);
