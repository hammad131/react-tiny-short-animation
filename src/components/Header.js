import React from 'react'

import './Header.css'


function Header() {
    return (
        <header>
            
            <nav>
                <ul>
                    <a className='tags' to="/">Home</a>
                    <a className='tags' to="products">Products</a>
                    <a className='tags' to="contact">Contact Us</a>
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;