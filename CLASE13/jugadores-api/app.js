const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const jugadoresRouter = require('./routes/jugadores');

const app = express();

app.use(logger('dev'));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use('/', indexRouter);
app.use('/jugadores', jugadoresRouter);

module.exports = app;
