import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Footer from './components/Footer'
import Login from './components/authPage/Login'
import Navbar from './components/Navbar'
import Register from './components/authPage/Register'
import Home from './pages/Home'
import Team from './pages/Team'
import Tokens from './pages/Tokens'
import PrivateRoute from './components/PrivateRoute'

const App: React.FC = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <div className='overflow-hidden min-h-screen flex flex-col tracking-wide'>
               <Navbar />
               <Routes>
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
