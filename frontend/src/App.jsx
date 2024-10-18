import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
      <Navbar />
      <Outlet/>
      <Footer/>
      </AuthProvider>
    </>
  )
}

export default App
