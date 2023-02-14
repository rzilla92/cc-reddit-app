import React from "react";
import { FaReddit } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <FaReddit className='logo-icon' />
                <h1 className="logo-text">r/memes</h1>
            </div>
        </header>
    )
}

export default Header