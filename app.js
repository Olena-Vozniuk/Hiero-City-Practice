const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();


dotenv.config();

const {authRouter} = require('./routes/api');
const {ordersRouter} = require('./routes/api');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

//Fehlerbehandler
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message, })
})

module.exports = app;