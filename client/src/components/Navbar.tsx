import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowDimentions'
import s from '../styles/navbar.module.scss'
import AuthBtns from './AuthBtns'

const Navbar: React.FC = () => {
   const { width } = useWindowDimensions()
   const [isMenuActive, setIsMenuActive] = useState(false)
   const linksClickHandler = () => {
      setIsMenuActive(false)
      document.body.classList.remove('noScroll')
   }
   const menuClickHandler = () => {
      setIsMenuActive(!isMenuActive)
      document.body.classList.toggle('noScroll')
   }

   return (
      <header>
         <nav>
            <ul className={s.navbar}>
               <li onClick={linksClickHandler}>
                  <Link to='/'>
                     <img src='/assets/icons/full-logo.svg' alt='Tokners' />
                  </Link>
               </li>
               <li className={s.burger} onClick={menuClickHandler}>
                  <button>
                     <svg
                        width='20'
                        height='14'
                        viewBox='0 0 20 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           fillRule='evenodd'
                           clipRule='evenodd'
                           d='M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H19C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12H1Z'
                           fill='white'
                        />
                     </svg>
                  </button>
               </li>
               <li className={`${s.navLinks} ${isMenuActive && width < 640 ? s.activeMenu : ''}`}>
                  <ul className={s.links}>
                     <li onClick={linksClickHandler}>
                        <Link to='/team'>Our team</Link>
                     </li>
                     <li onClick={linksClickHandler}>
                        <Link to='/tokens'>Tokens</Link>
                     </li>
                  </ul>
                  {width > 640 && width < 1024 ? (
                     <div className='text-white font-bold pointer-events-none'>|</div>
                  ) : (
                     ''
                  )}
                  <AuthBtns clickHandler={linksClickHandler} />
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Navbar
