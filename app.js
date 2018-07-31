var express = require('express');

var logger = require('morgan');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
require('./routes')(app);
require('./sevices/erorrHandler')(app);



module.exports = app;
