import express from 'express'
import path from 'path'
require('dotenv').load()
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bodyParser from 'body-parser'
const app = express();
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
/*
 *  Using database config ( mongodb )
 */
import databaseConfig from './config/mongodb';
databaseConfig();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
