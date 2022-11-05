const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000

// imports
const routes = require('./routes');

app.use(express.static('public'));

// template engine
app.set('view engine', 'pug');  
app.set('views', path.join(__dirname, './views'));

//middlewares
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/', routes());



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});