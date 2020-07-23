import { getRepository } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Reservation } from '../../entity/Reservation';

class ReservationService {
  public async findMany(): Promise<Reservation[]> {
    return getRepository(Reservation).find();
  }

  public async findOneById(id: number): Promise<Reservation> {
    const reservation: Reservation | undefined = await getRepository(Reservation).findOne(id);
    if (!reservation) {
      throw new NotFound(`There is no reservation with id ${id}`);
    }
    return reservation;
  }
}

export const reservationService = new ReservationService();
