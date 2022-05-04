const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const { route } = require('express/lib/router')
const res = require('express/lib/response')

const hashPassword = newUser => {
   bcrypt.genSalt((err, salt) => {
      if (err) console.error(err)
      else {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error(err)
            else {
               newUser.password = hash
               newUser.save().catch(err => console.error(err))
            }
         })
      }
   })
}
const login = user => {
   const payload = {
      id: user.id,
      name: user.name,
   }
   jwt.sign(payload, 'key', (err, token) => res.json({ success: true, token: 'Bearer ' + token }))
}

router.post('/register', (req, res) => {
   User.findOne({ login: req.body.login }).then(user => {
      if (user)
         res.status(400).json({
            login: 'User is already exist',
         })
      else
         res.status(200).send(
            hashPassword(
               new User({
                  login: req.body.login,
                  email: req.body.email,
                  password: req.body.password,
               })
            )
         )
   })
})
router.post('/login', (req, res) => {
   User.findOne({ login }).then(user => {
      if (!user)
         res.status(400).json({
            login: 'User not found',
         })
      else
         bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) login(user)
         })
   })
})

module.exports = router
