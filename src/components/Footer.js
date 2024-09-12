import React from 'react';
import { SocialBar } from '../utils/links';

const Footer = () => {
    return (
        <footer className='container-footer'>
            <div className='footer-social'>
                <SocialBar />
            </div>
            <h3 className='footer'>all &copy; reserved to Pasticceria React</h3>

        </footer>
    )
}

export default Footer;
