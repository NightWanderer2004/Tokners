const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const users = require('./routes/api/user')
const db = 'mongodb://localhost:27017/my_DB'

const app = express()
app.use(express.json())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)

mongoose
   .connect(db)
   .then(console.log('Connected'))
   .catch(err => console.error(err))

app.listen(5000, () => {
   console.log('Server running at: http://127.0.0.1:5000')
})
