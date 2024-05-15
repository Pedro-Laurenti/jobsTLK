import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css'

const App = () => {
  return (
  <>
    <Navbar />
      <div className="min-h-screen bg-appWhite-300">
        <Outlet /> c
      </div>
    <Footer />
  </>
  )
}

export default App
