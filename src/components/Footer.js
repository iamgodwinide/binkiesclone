import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <p>
                ALL RIGHTS RESERVED BINKIES 2022
            </p>
            <hr />
            <ul className='links'>
                <li>
                    <a href='/'>
                        <i className='fab fa-facebook' />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='fab fa-twitter' />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <i className='fab fa-discord' />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer