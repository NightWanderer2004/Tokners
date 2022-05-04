import React from 'react'
import Auth from './Auth'

const Login: React.FC = () => {
   return (
      <Auth>
         <h4>Sign In</h4>
         <form>
            <input type='login' name='login' placeholder='login:' />
            <input type='password' name='password' placeholder='password:' />
            <input type='submit' value='Login' />
         </form>
      </Auth>
   )
}

export default Login
