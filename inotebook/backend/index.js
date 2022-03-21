// Boiler code from expressjs.com/starter/installing.html
const express = require('express');
const connectTOMongo = require('./db');
var cors = require('cors')

connectTOMongo();
const app = express()
const port = 5000  // can be custom
app.use(cors())

app.use(express.json()) //! Middleware

// Availabel Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
    console.log(`iNotebook backend @ port ${port}`)
})