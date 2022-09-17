const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//  Import routes
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

//  Create app and connect usefull middlewares
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//  Connect routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
