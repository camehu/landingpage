/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NavBar.module.css'
import '../../index'

const NavBar = () => {
  return (

    <div className="wrapper">
    <header>
       <nav>
          <div className="menu-icon">
             <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
             LOGO
          </div>
          <div className="menu">
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Contact</a></li>
             </ul>
          </div>
       </nav>
    </header>
    </div>
    
      
        
  )
}

export default NavBar