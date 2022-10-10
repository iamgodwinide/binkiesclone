import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import newcontract from './Newcontract.json';
import './mint.css'

const newcontractAddress = "0xf8d31CB2a4d34b212E112aF3D0E88Ac08F3d4C82";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

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
                    value: ethers.utils.parseEther((0.005 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            };
        };
    };




    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    };
    return (
        <div>
            {isConnected ? (
                <div className='mint-container'>
                    <div className="mintwrap">
                        <button className='btn btn-danger' onClick={handleDecrement}>-</button>
                        <input className="form-control" type='number' value={mintAmount} />
                        <button className='btn btn-success' onClick={handleIncrement}>+</button>
                    </div>
                    <button className='btn btn-primary' onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p className='mint-text'>Please Connect Metamask</p>
            )
            }
        </div>
    )
};

export default MainMint;