import { getRepository, getManager } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Reservation } from './reservation.entity';

class ReservationService {
  public async findMany(): Promise<Reservation[]> {
    return getRepository(Reservation).find({
      relations: ['client', 'employee', 'city', 'clockSize'],
    });
  }

  public async findOneById(id: number): Promise<Reservation> {
    const reservation: Reservation | undefined = await getRepository(Reservation).findOne({
      where: { id },
      relations: ['client', 'employee', 'city', 'clockSize'],
    });
    if (!reservation) {
      throw new NotFound(`There is no reservation with id ${id}`);
    }
    return reservation;
  }

  public async createOne(newReservation: Reservation): Promise<Reservation> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const createdReservation: Reservation = await transactionalEntityManager
        .getRepository(Reservation)
        .create(newReservation);
      await transactionalEntityManager.getRepository(Reservation).save(createdReservation);
      return createdReservation;
    });
  }

  public async updateOne(id: number, updates: Reservation): Promise<Reservation> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const reservation: Reservation | undefined = await transactionalEntityManager
        .getRepository(Reservation)
        .findOne(id);
      if (!reservation) {
        throw new NotFound(`There is no reservation with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Reservation).update(id, updates);

      const updatedReservation: Reservation = await transactionalEntityManager
        .getRepository(Reservation)
        .findOneOrFail(id);
      return updatedReservation;
    });
  }

  public async deleteOne(id: number): Promise<number> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const reservation: Reservation | undefined = await transactionalEntityManager
        .getRepository(Reservation)
        .findOne(id);
      if (!reservation) {
        throw new NotFound(`There is no reservation with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Reservation).remove(reservation);
      return id;
    });
  }
}

export const reservationService = new ReservationService();
