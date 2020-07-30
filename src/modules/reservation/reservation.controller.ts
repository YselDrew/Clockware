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

  public async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdReservation: Reservation = await reservationService.createOne(req.body);
      res.json(createdReservation);
    } catch (e) {
      next(e);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedReservation: Reservation = await reservationService.updateOne(id, req.body);
      res.json(updatedReservation);
    } catch (e) {
      next(e);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedReservationId: number = await reservationService.deleteOne(id);
      res.json({ id: deletedReservationId });
    } catch (e) {
      next(e);
    }
  }
}

export const reservationController = new ReservationController();
