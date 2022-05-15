require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const users = require('./routes/api/user')
const db = process.env.MONGO_URL
const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)

mongoose
   .connect(db)
   .then(console.log('Connected'))
   .catch(err => console.error(err))

app.listen(port, () => {
   console.log('Server running at: http://127.0.0.1:5000')
})
