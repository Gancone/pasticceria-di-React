import React from 'react';
import { links, SocialBar } from "../utils/links";
import logo from "../media/image/logo.png";
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <nav className='nav'>
            <div>
                <img className='nav-image' src={logo} />
            </div>
            <div className='nav-links'>
                <ul>
                    {
                        links.map(el => {
                            const { id, url, text } = el;
                            return <li key={id}><h3><Link to={url} alt={text}>{text.toUpperCase()}</Link></h3></li>
                        })
                    }
                </ul>
            </div>
            <div className='nav-social'>
                <SocialBar />
            </div>
            {children}

        </nav>
    )
}

export default Navbar
