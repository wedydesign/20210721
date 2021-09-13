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
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
       }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
  });
});

/* about.html 라우터 */
app.get('/about', (request, response) => {
  fs.readFile ('./views/about.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
       }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
  });
});

/* service.html 라우터 */
app.get('/service', (request, response) => {
  fs.readFile ('./views/service.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
       }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
  });
});

/* portfolio.html 라우터 */
app.get('/portfolio', (request, response) => {
  fs.readFile ('./views/portfolio.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
        }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
  });
});


/* portfolio_read.html 라우터 */
app.get ('/portfolio_read', (request, response) => {
  fs.readFile ('./views/portfolio_read.html', 'utf-8', (error, results) => {
    let output = ejs.render (data, {
      data: results
    }); //<% %>을 html로 변환
    response.send (output); //웹서버에 전송
  });
})

/*
  portfolio_read.html
  <form method="post">
    <input type="text" name="id"/>
    <input type="text" name="name"/>
    <input type="submit"/>
  </form>
*/
app.post('/portfolio_read', (request, response) => {
  let body = request.body; //요청
  client.query ('insert into portfolio (id, name) values (?,?)', [body.id, body.name], (error,results) => {
    response.redirect ('/');
  });
});

/* contact.html 라우터 */
app.get('/contact', (request, response) => {
  fs.readFile ('./views/contact.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
       }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
  });
});

/* reminder.html 라우터 */
app.get('/reminder', (request, response) => {
  fs.readFile ('./views/reminder.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
    client.query ('SELECT * from portfolio', (error, results) => { //데이터 조회
        let output = ejs.render (data, {
          data: results
       }); //<% %>을 html로 변환
        response.send (output); //웹서버에 전송
    });
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
