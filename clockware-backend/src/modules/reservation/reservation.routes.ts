import { Router } from 'express';
import { reservationController } from './reservation.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createReservationDto, updateReservationDto } from './reservation.dtos';

export const router: Router = Router();

router.get('/', reservationController.findMany);
router.get('/:id', reservationController.findOneById);

router.post('/', createValidator(createReservationDto), reservationController.createOne);

router.put('/:id', createValidator(updateReservationDto), reservationController.updateOne);

router.delete('/:id', reservationController.deleteOne);
