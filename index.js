const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()


// imports
const routes = require('./routes');
const helpers = require('./helpers/helpers')

const port = 5000;


// DB
const sequelize = require('./config/db');
require('./models/Projects');

sequelize.sync()
    .then(()=> console.log("*** Database Conected ***"))
    .catch(err => console.log("=== Database not Connected ===", err));

// template engine
app.use(express.static('public'));
app.set('view engine', 'pug');  
app.set('views', path.join(__dirname, './views'));

//middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

// routes
app.use('/', routes());


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});