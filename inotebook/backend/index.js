// Boiler code from expressjs.com/starter/installing.html

const connectTOMongo = require('./db');
const express = require('express');

connectTOMongo();
const app = express()
const port = 5000  // can be custom

app.use(express.json()) //! Middleware

// Availabel Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})