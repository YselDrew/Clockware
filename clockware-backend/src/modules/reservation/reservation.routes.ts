import { Router } from 'express';
import { reservationController } from './reservation.controller';

import { createValidator } from '../../common/middlewares/createValidator';
import { createReservationDto, updateReservationDto, reservationIdDto } from './reservation.dtos';

export const router: Router = Router();

router.get('/', reservationController.findMany);
router.get('/:id', createValidator(reservationIdDto, 'params'), reservationController.findOneById);

router.post('/', createValidator(createReservationDto), reservationController.createOne);

router.put('/:id', createValidator(updateReservationDto), reservationController.updateOne);

router.delete('/:id', createValidator(reservationIdDto, 'params'), reservationController.deleteOne);
