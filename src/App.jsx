import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css'

const App = () => {
  return (
  <>
    <Navbar />
      <div className="min-h-[150vh] bg-appWhite-300">
        <Outlet />
      </div>
    <Footer />
  </>
  )
}

export default App
