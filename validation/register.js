const validator = require('validator')
const isEmpty = require('./isEmpty')

const validateRegisterInput = data => {
   const errors = {}

   data.login = !isEmpty(data.login) ? data.login : ''
   data.email = !isEmpty(data.email) ? data.email : ''
   data.password = !isEmpty(data.password) ? data.password : ''

   if (validator.isEmpty(data.login)) errors.login = 'Login field is required'
   else if (!validator.isLength(data.login, { min: 3, max: 12 }))
      errors.login = 'Login must be between 3 and 12 characters'

   if (validator.isEmpty(data.email)) errors.email = 'Email field is required'
   else if (!validator.isEmail(data.email)) errors.email = 'Email is invalid'

   if (validator.isEmpty(data.password)) errors.password = 'Password field is required'
   else if (!validator.isLength(data.password, { min: 8, max: 30 }))
      errors.password = 'Password must be between 8 and 30 characters'

   return {
      errors,
      isValid: isEmpty(errors),
   }
}
module.exports = validateRegisterInput
