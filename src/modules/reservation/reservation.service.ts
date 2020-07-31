import { getRepository, getManager } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Reservation } from './reservation.entity';
import { ClockSize } from '../clockSize/clockSize.entity';

import { clientService } from '../client/client.service';
import { employeeService } from '../employee/employee.service';
import { cityService } from '../city/city.service';
import { clockSizeService } from '../clockSize/clockSize.service';

import { IEmployeeUpdates } from '../../common/interfaces/employee.interfaces';

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
    const { clientId, employeeId, cityId, clockSizeId, date }: Reservation = newReservation;

    return getManager().transaction(async (transactionalEntityManager) => {
      await clientService.findOneById(clientId);
      await cityService.findOneById(cityId);

      const { amountOfHours }: ClockSize = await clockSizeService.findOneById(clockSizeId);
      const endTime: Date = this.incrementTime(date, amountOfHours);

      const employeeUpdateTime: IEmployeeUpdates = { availableFrom: endTime };
      await employeeService.updateOne(employeeId, employeeUpdateTime);

      const createdReservation: Reservation = await transactionalEntityManager
        .getRepository(Reservation)
        .create(newReservation);
      await transactionalEntityManager.getRepository(Reservation).save(createdReservation);

      return createdReservation;
    });
  }

  private incrementTime(date: Date, amountOfHours: number): Date {
    const startTime: number = Date.parse(date.toString());
    const timeInterval: number = 1000 * 60 * 60 * amountOfHours;
    const endTime = new Date(startTime + timeInterval);
    return endTime;
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
