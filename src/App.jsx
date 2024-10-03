// import { useNavigate } from 'react-router-dom'
import React from 'react'
import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Provider } from 'react-redux'
import { Header, Footer } from './components'
import { BrowserRouter, Outlet } from 'react-router-dom'
import MainRoutes from './components/Routes/MainRoutes'
import { useAutoAnimate } from '@formkit/auto-animate/react'




function App() {
  const [animationParent] = useAutoAnimate()
  
  return (
    <div ref={animationParent}>
        <BrowserRouter>
        <Header />
        <MainRoutes />
        <Outlet />
        <Footer />
        </BrowserRouter>
      </div>
  );

}

export default App
