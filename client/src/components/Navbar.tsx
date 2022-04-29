import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/navbar.module.scss'

const Navbar: React.FC = () => {
   return (
      <header>
         <nav>
            <ul className={s.navbar}>
               <li>
                  <Link to='/'>
                     <img src='/assets/icons/full-logo.svg' alt='Tokners' />
                  </Link>
               </li>
               <li className='flex items-center justify-end md:justify-between w-full'>
                  <ul className={s.links}>
                     <li>
                        <Link to='/team'>Our team</Link>
                     </li>
                     <li>
                        <Link to='/tokens'>Tokens</Link>
                     </li>
                  </ul>
                  <ul className={s.authBtns}>
                     <li>
                        <button>Sign In</button>
                     </li>
                     <li>
                        <button>Sign Up</button>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Navbar
