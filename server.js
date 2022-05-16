require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')

const users = require('./routes/api/user')
const db = process.env.MONGO_URL
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/client/build')))
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
   })
}

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
