import { Request, Response, NextFunction } from 'express';

import { Reservation } from './reservation.entity';
import { reservationService } from './reservation.service';

class ReservationController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const reservations: Reservation[] = await reservationService.findMany();
      res.json(reservations);
    } catch (e) {
      next(e);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const reservation: Reservation = await reservationService.findOneById(id);
      res.json(reservation);
    } catch (e) {
      next(e);
    }
  }
}

export const reservationController = new ReservationController();
