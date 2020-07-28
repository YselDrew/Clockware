import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { City } from '../city/city.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 25 })
  firstName!: string;

  @Column({ type: 'varchar', length: 25 })
  lastName!: string;

  @Column({ type: 'float' })
  rate!: number;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @ManyToOne((type) => City, (city) => city.employees)
  @JoinColumn({ name: 'cityId' })
  city?: City;

  @OneToMany((type) => Reservation, (reservation) => reservation.client)
  reservations?: Reservation[];
}
