import React from 'react'
import './loader.css'

const Loader = ({ setIsOpended }) => {
    return (
        <div className="loader-bg">
            <img
                src="https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif" />
            <button onClick={() => setIsOpended(true)}>Click to open</button>
        </div>

    )
}

export default Loader