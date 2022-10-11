import React from "react";
import Opensea from './assets/social-media-icons/Logomark-Blue.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import Etherscan from './assets/social-media-icons/etherscan-logo-circle.png';
import './nav.css'
import { Button } from "reactstrap";

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <nav>
            <div className='logo-wrap'>
                <img src="/LOGO.png" />
            </div>
            <ul>
                {/*   Connect */}
                {isConnected ? (
                    <p>Connected</p>
                ) : (
                    <Button color="primary" onClick={connectAccount}>Connect</Button>
                )

                }
                <li className="hide-mobile">
                    <a href="https://opensea.io">
                        <img src={Opensea} />
                    </a>
                </li>
                <li className="hide-mobile">
                    <a href="https://twitter.com/home">
                        <i className="fab fa-2x fa-twitter" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
