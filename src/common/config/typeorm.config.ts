import * as dotenv from 'dotenv';
dotenv.config();

import { Admin } from '../../modules/admin/admin.entity';
import { City } from '../../modules/city/city.entity';
import { Client } from '../../modules/client/client.entity';
import { ClockSize } from '../../modules/clockSize/clockSize.entity';
import { Employee } from '../../modules/employee/employee.entity';
import { Reservation } from '../../modules/reservation/reservation.entity';

export = {
  host: process.env.HOST,
  type: process.env.TYPE,
  port: process.env.PORT,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  entities: [Admin, City, Client, ClockSize, Employee, Reservation],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    entitiesDir: 'src/entity',
    subscribersDir: 'src/subscriber',
  },
};
