import React from 'react'

import './Header.css'


function Header() {
    return (
        <header>
            
            <nav>
                <ul>
                    <a  className='tags' href="/" >Home</a>
                    <a  className='tags'href="/" >Products</a>
                    <a  className='tags'href="/" >Contact Us</a>
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;