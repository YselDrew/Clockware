import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';

import { router as clientRoutes } from './modules/client/client.routes';
import { router as cityRoutes } from './modules/city/city.routes';

import './database';

const app: express.Express = express();
app.use(bodyParser.json({limit: '100mb'}));

app.use(cors());

app.use('/clients', clientRoutes);
app.use('/cities', cityRoutes);

const PORT: number = +process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})
