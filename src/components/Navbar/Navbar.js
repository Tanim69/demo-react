import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

export const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo"/>
      </a>
      <button
      data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
       className="navbar-toggler"

       type="button" 
        
        
        aria-expanded="false" aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto  ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Service</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Price</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Blog</a>
          </li>
        </ul>

        <div className="nav-button">
          <a href="#"><button>Contact Us</button></a>

        </div>

      </div>
    </div>
  </nav>  )
}
