import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface Props {
   component: React.ReactElement
}

const PrivateRoute: React.FC<Props> = ({ component }) => {
   const { auth } = useSelector((state: any) => state)

   if (auth.isAuthenticated) return component
   return <Navigate to='/login' />
}

export default PrivateRoute
