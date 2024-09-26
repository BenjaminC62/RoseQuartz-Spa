import React from 'react'
import img1 from './../../images/logo.png'

function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <a href='/'><img className='image-logo' src={img1} alt='logo' width='100px' height='100px' /></a>
            <menu>
                <ul className='liste-nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </menu>
        </nav>      
    </div>
  )
}

export default Nav
