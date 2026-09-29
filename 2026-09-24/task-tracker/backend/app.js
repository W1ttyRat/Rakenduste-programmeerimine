const express = require('express');
//import cors from 'cors';
const dotenv = require('dotenv');

dotenv.config();


const app = express();

//app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/task.route');
app.use('/api', taskRoutes);

module.exports = app;