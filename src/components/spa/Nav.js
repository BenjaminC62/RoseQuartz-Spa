import React from 'react'
import img1 from './../../images/logo.png'

function Nav() {
  return (
    <div>
      <header>
          <nav className='navbar'>
              <menu className='sous-nav'>
                <div className='left-content'>
                  <svg width='50px'  clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
                  <span>SEARCH</span>
                </div>
                <ul className='liste-nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <a href='/'><img className='image-logo' src={img1} alt='logo' width='100px' height='100px' /></a>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className='right-content'>
                  <p>CART</p>
                </div>
              </menu>
          </nav>
        </header>      
    </div>
  )
}

export default Nav
