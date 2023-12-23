import React from 'react'
import '../navbar.css'
import '../images/brand_logo.png'

export default function Navbar() {
  return (
    <>
        <nav className="nav">
            <div className="logo">
              <img src={require("../images/brand_logo.png")} alt="Logo" />
            </div>
            <div className="navItems">
                <ul>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">LOCATION</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
            <div className="btn">
              <button>Login</button>
            </div>
        </nav>
    </>
  )
}
