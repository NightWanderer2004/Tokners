import React, { useState } from 'react'
import axios from 'axios'
import Auth from './Auth'

const Register: React.FC = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')

   const formSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const newUser = {
         login,
         email,
         password,
      }

      axios.post('/api/users/register', newUser).catch(err => console.error(err.response.data))
   }
   return (
      <Auth>
         <h4>Sign Up</h4>
         <form onSubmit={formSubmit}>
            <input
               type='text'
               name='login'
               placeholder='login:'
               value={login}
               onChange={e => setLogin(e.target.value)}
            />
            <input
               type='email'
               name='email'
               placeholder='email:'
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <input
               type='password'
               name='password'
               placeholder='password:'
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            <input type='submit' value='Register' />
         </form>
      </Auth>
   )
}

export default Register
