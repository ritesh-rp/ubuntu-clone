import { useEffect } from 'react'
import React from 'react'
import './App.css'
import { useState } from 'react'
import { Header, Footer } from './components'
import { BrowserRouter, Outlet } from 'react-router-dom'
import MainRoutes from './components/Routes/MainRoutes'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { createContext } from 'react'
import { account } from "../src/lib/appwrite"


export const authUserContext = createContext()

function App() {
  const [animationParent] = useAutoAnimate()
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    try {
      account.get().then(user => {
        if (user) {
          setLoggedInUser(user);
        }
      });
    } catch (err) {
      setLoggedInUser(null)
    }
  }, [])

  return (
    <div ref={animationParent}>
      <authUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <BrowserRouter>
          <Header />
          <MainRoutes />
          <Outlet />
          <Footer />
        </BrowserRouter>
      </authUserContext.Provider>
    </div>
  );

}

export default App
