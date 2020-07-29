import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
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

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  availableFrom!: Date;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @Column({ type: 'integer' })
  cityId!: number;

  @ManyToOne((type) => City, (city) => city.employees)
  city?: City;

  @OneToMany((type) => Reservation, (reservation) => reservation.client)
  reservations?: Reservation[];
}
