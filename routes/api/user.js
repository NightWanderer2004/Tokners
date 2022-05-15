require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const passport = require('passport')

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

const loginUser = user => {
   const payload = {
      id: user.id,
      name: user.name,
   }

   jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, (err, token) => {
      if (err) console.error(err)
      else res.json({ success: true, token: 'Bearer ' + token })
   })
}

router.post('/register', (req, res) => {
   const { errors, isValid } = validateRegisterInput(req.body)

   if (!isValid) res.status(400).json(errors)
   else {
      User.findOne({ login: req.body.login }).then(user => {
         if (user) {
            errors.login = 'Login is already exist'
            res.status(400).json(errors)
         } else {
            const newUser = new User({
               login: req.body.login,
               email: req.body.email,
               password: req.body.password,
            })
            bcrypt.genSalt((err, salt) => {
               bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) console.error(err)
                  else {
                     newUser.password = hash
                     newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.error(err._message))
                  }
               })
            })
         }
      })
   }
})
router.post('/login', (req, res) => {
   const { errors, isValid } = validateLoginInput(req.body)

   if (!isValid) res.status(400).json(errors)
   else {
      const { login, password } = req.body
      User.findOne({ login }).then(user => {
         if (!user) {
            errors.login = 'User not found'
            res.status(400).json(errors)
         } else
            bcrypt.compare(password, user.password).then(isMatch => {
               if (isMatch) {
                  const payload = {
                     id: user.id,
                     login: user.login,
                  }

                  jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, (err, token) => {
                     if (err) console.error(err)
                     else res.json({ success: true, token: 'Bearer ' + token })
                  })
               } else {
                  errors.password = 'Password incorrect'
                  res.status(400).json(errors)
               }
            })
      })
   }
})
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
   res.json({
      id: req.user.id,
      login: req.user.login,
      email: req.user.email,
   })
})

module.exports = router
