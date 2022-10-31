const express = require('express')
const app = express()
const port = 5000

// imports
const routes = require('./routes');

// routes
app.use('/api/1.0', routes());



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});