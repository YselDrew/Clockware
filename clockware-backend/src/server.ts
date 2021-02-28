import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';

import { createConnection, ConnectionOptions } from 'typeorm';
import { connectionOptions } from './common/config/typeorm.config';
import * as dotenv from 'dotenv';
dotenv.config();

import { router as clientRoutes } from './modules/client/client.routes';
import { router as cityRoutes } from './modules/city/city.routes';
import { router as clockSizeRoutes } from './modules/clockSize/clockSize.routes';
import { router as employeeRoutes } from './modules/employee/employee.routes';
import { router as reservationRoutes } from './modules/reservation/reservation.routes';

import { errorHandler } from './common/middlewares/error.middleware';

class Server {
  private initDatabase(options: any) {
    return createConnection(options);
  }

  private initExpress() {
    const app: express.Express = express();
    app.use(bodyParser.json({ limit: '5mb' }));
    app.use(cors());

    app.use('/clients', clientRoutes);
    app.use('/all-cities', cityRoutes);
    app.use('/clockSizes', clockSizeRoutes);
    app.use('/employees', employeeRoutes);
    app.use('/reservations', reservationRoutes);

    app.use(errorHandler);

    const PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 5000;

    return new Promise((resolve) => {
      app.listen(PORT, () => {
        console.log(`Server is running in http://localhost:${PORT}`);
        resolve();
      });
    });
  }

  async start() {
    await this.initDatabase(connectionOptions);
    console.log('database connection has been established');

    await this.initExpress();
  }
}

const server = new Server();
server.start().catch((err) => {
  console.log(err);
});
