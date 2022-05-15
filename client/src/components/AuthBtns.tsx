import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { logoutUser } from '../actions/authActions'
import s from '../styles/navbar.module.scss'

interface Props {
   clickHandler(): void
}

const AuthBtns: React.FC<Props> = ({ clickHandler }) => {
   const currentUrl = useLocation()
   const dispatch = useDispatch()
   const { isAuthenticated, user } = useSelector((state: any) => state.auth)

   const onLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(logoutUser() as any)
   }

   const userLinks = (
      <>
         <li onClick={clickHandler}>
            <Link to='/profile'>
               <button>{user.login}</button>
            </Link>
         </li>
         <li onClick={clickHandler}>
            <button onClick={onLogoutClick}>Logout</button>
         </li>
      </>
   )
   const guestLinks = (
      <>
         {currentUrl.pathname !== '/login' && (
            <li onClick={clickHandler}>
               <Link to='/login'>
                  <button>Sign In</button>
               </Link>
            </li>
         )}
         {currentUrl.pathname !== '/register' && (
            <li onClick={clickHandler}>
               <Link to='/register'>
                  <button>Sign Up</button>
               </Link>
            </li>
         )}
      </>
   )

   return <ul className={s.authBtns}>{isAuthenticated ? userLinks : guestLinks}</ul>
}

export default AuthBtns
