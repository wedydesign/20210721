var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const ejs = require ('ejs');
const fs = require ('fs');

let client = mysql.createConnection ({
  host: 'wedydesign.cafe24app.com', //원래는 localhost
  user: 'wedydesign', //카페24 아이디
  password: 'dyanf846@', //비밀번호
  database: 'wedydesign' //카페24 아이디
}); //mysql 객체 생성

client.connect(); //database run...

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); //익스프레스 객체 생성

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.get('/', (request, response) => {
  response.send ('./views/index.html');
} );
app.use('/users', usersRouter);

app.get ('/views', function(request, response, next ) { //라우터
  fs.readFile ('./views/webdesign_portfolio.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
      client.query ('SELECT * from portfolio', (error, results, fields) => { //데이터 조회
          let output = ejs.render (data, {
              data: results
          }); //<% %>을 html로 변환
          response.send (output); //웹서버에 전송
      } );
  });
});

app.listen(8001); //server run...

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
