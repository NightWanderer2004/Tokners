import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import s from '../styles/navbar.module.scss'

interface Props {
   clickHandler(): void
}

const AuthBtns: React.FC<Props> = ({ clickHandler }) => {
   const currentUrl = useLocation()

   return (
      <ul className={s.authBtns}>
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
      </ul>
   )
}

export default AuthBtns
