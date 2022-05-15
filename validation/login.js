const validator = require('validator')
const isEmpty = require('./isEmpty')

const validateLoginInput = data => {
   const errors = {}

   data.login = !isEmpty(data.login) ? data.login : ''
   data.password = !isEmpty(data.password) ? data.password : ''

   if (validator.isEmpty(data.login)) errors.login = 'Login field is required'
   else if (!validator.isLength(data.login, { min: 3, max: 12 }))
      errors.login = 'Login must be between 3 and 12 characters'

   if (validator.isEmpty(data.password)) errors.password = 'Password field is required'

   return {
      errors,
      isValid: isEmpty(errors),
   }
}
module.exports = validateLoginInput
