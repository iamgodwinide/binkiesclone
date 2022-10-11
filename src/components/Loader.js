import React, { useRef, useState } from 'react'
import './loader.css'

const Loader = ({ setIsOpended }) => {
    const [imgClass, setimgClass] = useState("");
    const videoplayer = useRef();


    const handleClick = () => {
        setimgClass("animate-up");
        setTimeout(() => {
            videoplayer.current.style.zIndex = 10;
            videoplayer.current.play();
        }, 2000)
    }

    const handleEnded = () => {
        setIsOpended(true);
    }

    return (
        <div className={"loader-bg"}>
            <video className="video-bg" src='/stars.mp4' autoPlay muted />
            <video onEnded={handleEnded} ref={videoplayer} className="video-bg-full" src='/Elevator elevated_3.mp4' preload='true' />
            <img
                className={imgClass}
                src="/rocket.gif" />
            <div className="platform" />
            <button onClick={handleClick}>Ascend
                <i className='fas fa-rocket' />
            </button>

        </div>

    )
}

export default Loader