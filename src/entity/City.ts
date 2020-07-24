import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Employee } from './Employee';
import { Reservation } from './Reservation';

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @OneToMany((type) => Employee, (employee) => employee.city)
  employees?: Employee[];

  @OneToMany((type) => Reservation, (reservation) => reservation.city)
  reservations?: Reservation[];
}
