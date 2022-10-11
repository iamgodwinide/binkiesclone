import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <p>
                ALL RIGHTS RESERVED ATAMO ASCENSION 2022
            </p>
            <img src='/logo.png' />
            <hr />
            <ul className='links'>
                <li>
                    <a href='/'>
                        <i className='fab fa-twitter' />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src={require("./assets/social-media-icons/Logomark-Blue.png")} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer