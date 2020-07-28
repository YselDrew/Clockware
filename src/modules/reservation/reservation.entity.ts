import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Client } from '../client/client.entity';
import { Employee } from '../employee/employee.entity';
import { City } from '../city/city.entity';
import { ClockSize } from '../clockSize/clockSize.entity';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @ManyToOne((type) => Client, (client) => client.reservations)
  @JoinColumn({ name: 'clientId' })
  client!: Client;

  @ManyToOne((type) => Employee, (employee) => employee.reservations)
  @JoinColumn({ name: 'employeeId' })
  employee!: Employee;

  @ManyToOne((type) => City, (city) => city.reservations)
  @JoinColumn({ name: 'cityId' })
  city!: City;

  @ManyToOne((type) => ClockSize, (clockSize) => clockSize.reservations)
  @JoinColumn({ name: 'clockSizeId' })
  clockSize!: ClockSize;
}
