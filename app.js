var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const ejs = require ('ejs');
const fs = require ('fs');

var app = express(); //익스프레스 객체 생성

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public/')));
app.use('/views', express.static(path.join(__dirname, 'views/')));

/* index.html 라우터 */
app.get('/', (request, response) => {
  fs.readFile ('./views/index.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    let output = ejs.render (data); //<% %>을 html로 변환
    response.send (output); //웹서버에 전송
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
