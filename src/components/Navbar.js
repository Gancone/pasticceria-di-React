import React, { useState, useEffect, useRef } from 'react';
import { links } from "../utils/links";
import logo from "../media/image/logo.png";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";


const Navbar = ({ children }) => {

    const [show, setShow] = useState(false);
    const linkContainerRef = useRef(null);
    const linkListRef = useRef(null);


    const closeMenu = () => {
        setShow(false);
    }
    useEffect(() => {
        const linkListHeight = linkListRef.current.getBoundingClientRect().height;
        if (show) {
            linkContainerRef.current.style.height = `${linkListHeight}px`;
        } else {
            linkContainerRef.current.style.height = "0px";
        }

    }, [show]);
    return (
        <nav className='nav'>
            <div>
                <Link to="/" alt="home"><img className='nav-image' src={logo} alt='logo' /></Link>
            </div>
            <p className='nav-toggler' onClick={() => setShow(!show)}>
                <FaBars />

            </p>
            <div className={`nav-links ${show ? "links-container show" : "links-container"}`} ref={linkContainerRef}>
                <ul ref={linkListRef}>
                    {
                        links.map(el => {
                            const { id, url, text } = el;
                            return <li key={id}><h3><Link to={url} alt={text} onClick={closeMenu} className='nav-a'>{text.toUpperCase()}</Link></h3></li>
                        })
                    }
                </ul>
            </div>
            {children}

        </nav>
    )
}

export default Navbar
