import React from 'react'
import s from '../styles/authPage/form.module.scss'

interface Props {
   children: React.ReactChild[]
}

const Auth: React.FC<Props> = ({ children }) => {
   return (
      <main className='flex-1'>
         <div className={`${s.main} container mx-auto px-2`}>{children}</div>
      </main>
   )
}

export default Auth
