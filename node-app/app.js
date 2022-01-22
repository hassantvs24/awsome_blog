require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')


var indexRouter = require('./routes/index');
var blogPost = require('./routes/BlogPostRoutes');
var usersRouter = require('./routes/UserRoutes');
var db = require('./config/db');

var app = express();

db.connect();
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogPost);
app.use('/users', usersRouter);

module.exports = app;
