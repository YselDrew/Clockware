import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Reservation } from '../reservation/reservation.entity';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 25 })
  name!: string;

  @Column({ type: 'varchar', length: 50 })
  email!: string;

  @Column({ type: 'varchar', length: 25 })
  city!: string;

  @CreateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', default: () => 'NOW()' })
  updatedAt!: Date;

  @OneToMany((type) => Reservation, (reservation) => reservation.client)
  reservations?: Reservation[];
}
