var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash')
var session = require('express-session');
var mysql = require('mysql')

var connection = require('./database/database')




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var namesRouter = require('./routes/names');
var quesRouter = require('./routes/ques')
var HisRouter = require("./routes/his")
// var data = require('./routes/data')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', namesRouter);
app.use('/', quesRouter);
app.use('/', HisRouter);





module.exports = app;