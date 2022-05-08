import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import Auth from './Auth'

const Login: React.FC = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   // const {errors, auth} = useSelector((state:any) => state);
   const dispatch = useDispatch()

   const formSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      e.preventDefault()
      const userData = {
         login,
         password,
      }

      dispatch(loginUser(userData) as any)
   }
   return (
      <Auth>
         <h4>Sign In</h4>
         <form onSubmit={formSubmit}>
            <input
               type='login'
               name='login'
               placeholder='login:'
               value={login}
               onChange={e => setLogin(e.target.value)}
            />
            <input
               type='password'
               name='password'
               placeholder='password:'
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            <input type='submit' value='Login' />
         </form>
      </Auth>
   )
}

export default Login
