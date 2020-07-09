// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const sequelize = require('./database');
import express = require('express');
import cors = require('cors');
import * as bodyParser from 'body-parser';

// import * as dotenv from 'dotenv';
// dotenv.config();

import './database';


const app: express.Express = express();
app.use(bodyParser.json({limit: '100mb'}));

app.use(cors());

const PORT: number = +process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})
