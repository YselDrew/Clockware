import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';
import 'reflect-metadata';

import { createConnection } from 'typeorm';

import { router as clientRoutes } from './modules/client/client.routes';
import { router as cityRoutes } from './modules/city/city.routes';
import { router as clockSizeRoutes } from './modules/clockSize/clockSize.routes';
import { router as employeeRoutes } from './modules/employee/employee.routes';
import { router as reservationRoutes } from './modules/reservation/reservation.routes';

import { errorHandler } from './common/middlewares/error.middleware';
createConnection()
  .then((connection) => {
    const app: express.Express = express();
    app.use(bodyParser.json({ limit: '5mb' }));
    app.use(cors());

    app.use('/clients', clientRoutes);
    app.use('/cities', cityRoutes);
    app.use('/clockSizes', clockSizeRoutes);
    app.use('/employees', employeeRoutes);
    app.use('/reservations', reservationRoutes);

    app.use(errorHandler);

    // @ts-ignore
    const PORT: number = +process.env.SERVER_PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
