import React from 'react'
import './nav.css'

const Navbar = () => {
    return (
        <nav>
            <div className='logo-wrap'>
                <h3>Binkies</h3>
            </div>
            <ul>
                <li>
                    <a>
                        <i className='fab fa-discord fa-2x' />
                    </a>
                </li>
                <li>
                    <a>
                        <i className='fab fa-twitter fa-2x' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar