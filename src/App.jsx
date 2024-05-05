import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Projects/Project'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
    </>
  )
}

export default App
