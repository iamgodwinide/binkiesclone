import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import newcontract from './Newcontract.json';
import './mint.css'
import { useAlert } from 'react-alert';

const newcontractAddress = "0x17cC48c7e5C2D76b371cC4FbB96C2F91470fEe41";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [freemintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    const alert = useAlert();

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.005 * (mintAmount - 1)).toString())
                });
                console.log('response: ', response);
            } catch (err) {
                alert.error(err?.reason);
                console.log("error: ", err)
            };
        };
    };

    async function handlefreeMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            try {
                const value = ethers.utils.parseEther((0).toString())
                console.log(value);
                const response = await contract.mint(BigNumber.from(freemintAmount), {
                    value
                });
                console.log('response: ', response);
            } catch (err) {
                alert.error(err?.reason);
                console.log("error: ", err)
            };
        };
    };


    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    const handleClick = () => {
        if (mintAmount > 1) {
            handleMint();
        } else {
            handlefreeMint();
        }
    }

    return (
        <div>
            {isConnected ? (
                <div className='mint-container'>
                    <div className="mintwrap">
                        <button className='btn btn-danger' onClick={handleDecrement}>-</button>
                        <input className="form-control" type='number' value={mintAmount} />
                        <button className='btn btn-success' onClick={handleIncrement}>+</button>
                    </div>
                    <button className='btn btn-primary mint' onClick={handleClick}>{mintAmount === 1 ? "Mint Free Now" : "Mint Now"}</button>
                </div>
            ) : (
                <p className='mint-text text-dark'>Please Connect <p>Metamask!</p></p>
            )
            }
        </div>
    )
};

export default MainMint;