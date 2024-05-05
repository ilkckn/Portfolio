import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
      <div className="navbar">

        <div className="logo">
          <Link to="home"><img src={logo} alt="" /></Link>
        </div>

        <ul>
          <li><Link to="home" className='link'>Home</Link></li>
          <li><Link to="about" className='link'>About Me</Link></li>
          <li><Link to="projects" className='link'>Projects</Link></li>
          <li><Link to="contact" className='link'>Contact</Link></li>
        </ul>
        
      </div>
    </>
  )
}

export default Navbar