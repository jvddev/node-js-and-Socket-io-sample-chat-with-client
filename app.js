var express = require('express');


var app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(expressValidator());
app.use(express.static('public'));
require('./routes')(app);
require('./sevices/erorrHandler')(app);



module.exports = app;
