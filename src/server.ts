import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';

import { router as clientRoutes } from './modules/client/client.routes';
import { router as cityRoutes } from './modules/city/city.routes';
import { router as clockSizeRoutes } from './modules/clockSize/clockSize.routes';
import { router as employeeRoutes } from './modules/employee/employee.routes';

import { errorHandler } from './common/middlewares/error.middleware';

import './database';

const app: express.Express = express();
app.use(bodyParser.json({limit: '100mb'}));

app.use(cors());

app.use('/clients', clientRoutes);
app.use('/cities', cityRoutes);
app.use('/clockSizes', clockSizeRoutes);
app.use('/employees', employeeRoutes);

app.use(errorHandler);

const PORT: number = +process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})
