import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions/authActions'
import Auth from '../../pages/Auth'
import s from '../../styles/authPage/form.module.scss'

const Login: React.FC = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const { errors, auth } = useSelector((state: any) => state)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const formSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const userData = {
         login,
         password,
      }

      dispatch(loginUser(userData, navigate) as any)
   }

   useEffect(() => {
      if (auth.isAuthenticated) navigate('/profile')
   })

   return (
      <Auth>
         <h4>Sign In</h4>
         <form onSubmit={formSubmit}>
            <input
               className={errors.login ? s.invalid : ''}
               type='login'
               name='login'
               placeholder='login:'
               value={login}
               onChange={e => setLogin(e.target.value)}
            />
            {errors.login ? <span className={s.error}>{errors.login}</span> : ''}
            <input
               className={errors.password ? s.invalid : ''}
               type='password'
               name='password'
               placeholder='password:'
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            {errors.password ? <span className={s.error}>{errors.password}</span> : ''}
            <input type='submit' value='Login' />
         </form>
      </Auth>
   )
}

export default Login
