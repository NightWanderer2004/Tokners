import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Auth from '../../pages/Auth'
import { registerUser } from '../../actions/authActions'
import s from '../../styles/authPage/form.module.scss'

const Register: React.FC = () => {
   const errors = useSelector((state: any) => state.errors)
   const dispatch = useDispatch()
   const navigate = useNavigate()

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

      dispatch(registerUser(newUser, navigate) as any)
   }

   useEffect(() => {
      return () => {
         dispatch({ type: 'CLEAR_ERRORS' })
      }
   }, [dispatch])

   return (
      <Auth>
         <h4>Sign Up</h4>
         <form onSubmit={formSubmit}>
            <input
               className={errors.login ? s.invalid : ''}
               type='text'
               name='login'
               placeholder='login:'
               value={login}
               onChange={e => setLogin(e.target.value)}
            />
            {errors.login ? <span className={s.error}>{errors.login}</span> : ''}
            <input
               className={errors.email ? s.invalid : ''}
               type='email'
               name='email'
               placeholder='email:'
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            {errors.email ? <span className={s.error}>{errors.email}</span> : ''}
            <input
               className={errors.password ? s.invalid : ''}
               type='password'
               name='password'
               placeholder='password:'
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            {errors.password ? <span className={s.error}>{errors.password}</span> : ''}
            <input type='submit' value='Register' />
         </form>
      </Auth>
   )
}

export default Register
