import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div className='NavbarContainer'>
        <div className='navbarLeftCont'><h1>Furniture</h1></div>
        <div className='navbarRightCont'>
          <Link to={"/home"}>
            <p>Home</p>
         </Link> 
         <Link to={'/services'}>
            <p>Services</p>
            </Link> 
            <Link to={"/doctor"}>
            <p>Doctors</p>
            </Link>
            <Link to={"/product"}>
            <p>Products</p>
            </Link>
            <Link to={'/galery'}>
            <p>Gallery</p>\
            </Link>
        </div>
        
    </div>
  )
}

export default NavbarComponent