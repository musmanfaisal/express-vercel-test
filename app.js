const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const bidsRouter = require('./routes/bids');
const api = require('./src/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', api());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(res.status(404).send('Path not found.'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('*', function(req, res) {
  
// });

module.exports = app;
