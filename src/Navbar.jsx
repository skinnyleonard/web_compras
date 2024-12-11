import React, { useState } from 'react'
import { useEffect } from 'react';
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../pngs/image2.svg'

function Navbar({ back }) {
  return createPortal(
    <nav className='navbar'>
        <h1>katalogo.com</h1>
        <ul className='links'>
            {/* <li><Link to={`/`}><img src={logo} alt="" /></Link></li> */}
            <li><Link to={`/`}>Casita</Link></li>
            {/* <li><a href="#">Sirve</a></li> */}
            <li><Link to={`/products`}>Productos</Link></li>
            <li><Link to={'/about-us'}>Nosotros</Link></li>
            <li><a href="/products">{back}</a></li>
        </ul>
        <ul className='icons'>
            {/* <li><i className="fa-solid fa-wrench"></i></li> */}
            {/* <li><i className="fa-solid fa-motorcycle"></i></li> */}
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-discord"></i></li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <hr />
            <li><Link to={'/cart'} className='fa-solid fa-cart-shopping'></Link></li>
            {/* <span>{getLocal}</span> */}
        </ul>
        <br />
    </nav>, document.getElementById("navbar")
  )
}

export default Navbar