import React from 'react'
import s from '../styles/errorPage/error.module.scss'

const Error404: React.FC = () => {
   return (
      <main className='flex-1'>
         <div className='container mx-auto px-2 text-center'>
            <h2 className={s.title}>Page not found :(</h2>
            <p className={s.infoText}>error 404</p>
         </div>
      </main>
   )
}

export default Error404
