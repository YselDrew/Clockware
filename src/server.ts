import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { connection } from './config/typeorm.config';

import { Client } from './entity/Client';
import { getRepository } from 'typeorm';

// import { router as clientRoutes } from './modules/client/client.routes';
// import { router as cityRoutes } from './modules/city/city.routes';
// import { router as clockSizeRoutes } from './modules/clockSize/clockSize.routes';
// import { router as employeeRoutes } from './modules/employee/employee.routes';

// import { errorHandler } from './common/middlewares/error.middleware';

import * as dotenv from 'dotenv';
dotenv.config();

connection
  .connect()
  .then(() => {
    const app: express.Express = express();
    app.use(bodyParser.json({ limit: '25mb' }));

      app.get('/clients', async (req, res, next) => {
      try {
        const clients = await getRepository(Client).find();
        res.json(clients);
      } catch (e) {
        next(e);
      }
    });
    app.use(cors());

    const PORT: number = +process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
// import './modules/models';

// import { initDatabase, sequelize } from './database';

// initDatabase(sequelize)
//   .then(() => {
//     const app: express.Express = express();
//     app.use(bodyParser.json({ limit: '100mb' }));

//     app.use(cors());

//     app.use('/clients', clientRoutes);
//     app.use('/cities', cityRoutes);
//     app.use('/clockSizes', clockSizeRoutes);
//     app.use('/employees', employeeRoutes);

//     app.use(errorHandler);

//     const PORT: number = +process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server is running in http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.log(err))
