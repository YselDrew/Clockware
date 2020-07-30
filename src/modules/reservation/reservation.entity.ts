import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
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

  @Column({ type: 'integer' })
  clientId!: number;

  @Column({ type: 'integer' })
  employeeId!: number;

  @Column({ type: 'integer' })
  cityId!: number;

  @Column({ type: 'integer' })
  clockSizeId!: number;

  @Column({ type: 'timestamp with time zone' })
  date!: Date;

  @ManyToOne((type) => Client, (client) => client.reservations, { onDelete: 'CASCADE' })
  client!: Client;

  @ManyToOne((type) => Employee, (employee) => employee.reservations, { onDelete: 'CASCADE' })
  employee!: Employee;

  @ManyToOne((type) => City, (city) => city.reservations, { onDelete: 'CASCADE' })
  city!: City;

  @ManyToOne((type) => ClockSize, (clockSize) => clockSize.reservations, { onDelete: 'CASCADE' })
  clockSize!: ClockSize;
}
