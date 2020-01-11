import React from 'react'
import '../styles/navbar.scss'


const Navbar = () => {
  return(
    <>
      <nav className="nav navbar">
        <a className="navbar-item">Home</a>
        <a className="navit navbar-item">Mission</a>
        <a className="navbar-item">Vission</a>
        <a className="navbar-item">Projects</a>
        <a className="navbar-item">About Us</a>
      </nav>
    </>
  )
}

export default Navbar