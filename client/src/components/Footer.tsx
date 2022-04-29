import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/footer.module.scss'

const Footer: React.FC = () => {
   const socialLinksIcons = ['twitter', 'telegram', 'instagram', 'medium', 'github', 'reddit']
   return (
      <footer className={s.main}>
         <ul className={s.links}>
            <li>
               <Link to='/team'>OUR TEAM</Link>
            </li>
            <li className='opacity-[0.5]'>/</li>
            <li>
               <Link to='/tokens'>TOKENS</Link>
            </li>
         </ul>
         <div>
            <Link to='/'>
               <img
                  className={s.logo}
                  src='assets/icons/full-logo.svg'
                  loading='lazy'
                  alt='Tokners'
               />
            </Link>
            <ul className={s.socialLinks}>
               {socialLinksIcons.map((el, i) => (
                  <li key={i}>
                     <a href='/'>
                        <img
                           className='truncate text-white'
                           src={`/assets/icons/${el}.svg`}
                           loading='lazy'
                           alt={el}
                        />
                     </a>
                  </li>
               ))}
            </ul>
            <p>
               © 2021 Tokners. All rights reserved.
               <span>Design by Oleg Kulik</span>
            </p>
         </div>
      </footer>
   )
}

export default Footer
