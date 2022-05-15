import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './actions/authActions'
import jwtDecode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'

import Footer from './components/Footer'
import Login from './components/authPage/Login'
import Navbar from './components/Navbar'
import Register from './components/authPage/Register'
import Home from './pages/Home'
import Team from './pages/Team'
import Tokens from './pages/Tokens'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Error404 from './pages/Error404'

const App: React.FC = () => {
   useEffect(() => {
      if (localStorage.jwtToken) {
         setAuthToken(localStorage.jwtToken)
         const decoded = jwtDecode(localStorage.jwtToken)
         store.dispatch(setCurrentUser(decoded))
      }
   }, [])

   return (
      <Provider store={store}>
         <BrowserRouter>
            <div className='overflow-hidden min-h-screen flex flex-col tracking-wide'>
               <Navbar />
               <Routes>
                  <Route path='*' element={<Error404 />} />
                  <Route path='/' element={<Home />} />
                  <Route path='/tokens' element={<Tokens />} />
                  <Route path='/team' element={<Team />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />
               </Routes>
               <Footer />
               <div className='bottomBg'></div>
            </div>
         </BrowserRouter>
      </Provider>
   )
}

export default App
