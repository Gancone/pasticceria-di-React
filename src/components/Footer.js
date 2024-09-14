import React from 'react';
import { SocialBar } from '../utils/links';

const Footer = () => {
    return (
        <footer className='container-footer'>
            <div className='footer-social'>
                <SocialBar />
            </div>
            <h3 className='footer-reserved'>all &copy; reserved to <span className='reserved-name'>Pasticceria React</span></h3>

        </footer>
    )
}

export default Footer;
