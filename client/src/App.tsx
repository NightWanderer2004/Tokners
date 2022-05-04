import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/authPage/Login'
import Navbar from './components/Navbar'
import Register from './components/authPage/Register'
import Home from './pages/Home'
import Team from './pages/Team'
import Tokens from './pages/Tokens'

const App: React.FC = () => {
   return (
      <div className='wrapper flex flex-col tracking-wide'>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tokens' element={<Tokens />} />
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
         </Routes>
         <Footer />
         <div className='bottomBg'></div>
      </div>
   )
}

export default App
