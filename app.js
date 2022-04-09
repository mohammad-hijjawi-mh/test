const express = require("express");
const app = express();
const hbs=require('hbs');
const path = require('path');
const port = 5000;
const bodyParser = require("body-parser"); 
const session = require('express-session');
const flash = require('connect-flash');

var exphbs = require("express-handlebars");
const { engine } = require('express-handlebars');
const User = require('./models/User');
const { connect } = require("http2");

//app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized:true
}));
app.use(flash());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routers
app.use("/",require("./routes/index"));
app.use("/users",require('./routes/users'));

const pathh = path.join(__dirname,'./public');
app.use(express.static(pathh));

//dashboard page

app.listen(port, () => {
    console.log('The server started at port', {port});
});