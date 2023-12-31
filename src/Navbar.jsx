import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ back }) {
  return (
    <nav className='navbar'>
        <h1>katalogo.com</h1>
        <ul className='links'>
            <li><Link to={`/`}>Casita</Link></li>
            <li><a href="#">Sirve</a></li>
            <li><a href="#">Esta</a></li>
            <li><Link to={`/products`}>Productos</Link></li>
            <li><Link to={'/products'}>{back}</Link></li>
        </ul>
        <ul className='icons'>
            <li><i className="fa-solid fa-wrench"></i></li>
            <li><i className="fa-solid fa-motorcycle"></i></li>
            <li><Link to={'/cart'} className='fa-solid fa-cart-shopping'></Link></li>
        </ul>
        <br />
    </nav>
  )
}

export default Navbar