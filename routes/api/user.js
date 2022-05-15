require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const passport = require('passport')

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
   const errors = {}
   User.findOne({ login: req.body.login }).then(user => {
      if (user) {
         errors.login = 'Login is already exist'
         res.status(400).json(errors)
      } else
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
   const { login, password } = req.body
   User.findOne({ login }).then(user => {
      if (!user)
         res.status(400).json({
            login: 'User not found',
         })
      else
         bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) loginUser(user, res)
         })
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
   res.json({
      id: req.user.id,
      login: req.user.login,
      email: req.user.email,
   })
})

module.exports = router
