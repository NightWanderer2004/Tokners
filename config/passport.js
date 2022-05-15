require('dotenv').config()
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

const opts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.ACCESS_TOKEN_KEY,
}

module.exports = passport => {
   passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
         User.findById(jwt_payload.id)
            .then(user => {
               if (user) return done(null, user)
               return done(null, false)
            })
            .catch(err => {
               console.error(err._message)
               return done(err, false)
            })
      })
   )
}
