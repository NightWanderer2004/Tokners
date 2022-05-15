import React from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/profilePage/profile.module.scss'

const Profile: React.FC = () => {
   const { user } = useSelector((state: any) => state.auth)
   return (
      <main className='flex-1'>
         <div className='container mx-auto px-2'>
            <h4 className={s.title}>Hello, {user.login}!</h4>
            <p className={s.infoText}>This is your profile page</p>
         </div>
      </main>
   )
}

export default Profile
