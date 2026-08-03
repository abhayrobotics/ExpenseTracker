
import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import { useEffect } from 'react';
import Signin from './components/Signin';
import { authencicateUser } from './services/expenseServices';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {

    verifyUser()
  }, [])


  const verifyUser = async () => {
    if (!!localStorage.getItem("token")) {

      const token = localStorage.getItem("token")
      const isvalidated = await authencicateUser(token)
      setIsAuthenticated(isvalidated)
    }
    else{
      setIsAuthenticated(false)
    }
  }

  const handleLogout =()=>{
    localStorage.removeItem("token")
    setIsAuthenticated(false)
  }

  return (
    <>
      {isAuthenticated ?
        <Home handleLogout={handleLogout} /> :
        <Signin signInStatus={setIsAuthenticated} />
      }
    </>
  )
}

export default App
