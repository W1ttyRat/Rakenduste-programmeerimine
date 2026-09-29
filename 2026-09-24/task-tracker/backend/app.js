const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error.middleware');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/task.route');
app.use('/api', taskRoutes);

app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.statusCode = 404;
    next(error);
});

app.use(errorHandler);

module.exports = app;