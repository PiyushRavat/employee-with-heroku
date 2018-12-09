require('./models/db');

const express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir:__dirname +'/views/layouts/'}));
app.set("view engine","hbs");

app.use('/public',express.static(path.join(__dirname, 'public')));

//app.engine()

const employeeC = require('./controllers/employController');

//app.use('/employee', employeeC);

app.listen(3000, ()=>{
	console.log("express server started...at 3000");
});

app.use('/employee/', employeeC);