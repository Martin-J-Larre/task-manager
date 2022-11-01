const express = require('express')
const app = express();
const path = require('path');
const port = 5000

// imports
const routes = require('./routes');

app.use(express.static('public'));

// template engine
app.set('view engine', 'pug');  
app.set('views', path.join(__dirname, './views'));

// routes
app.use('/api/1.0', routes());



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});