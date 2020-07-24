import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Reservation } from './Reservation';

@Entity({ name: 'clockSizes' })
export class ClockSize {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 25 })
  size!: string;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @OneToMany((type) => Reservation, (reservation) => reservation.clockSize)
  reservations!: Reservation[];
}
