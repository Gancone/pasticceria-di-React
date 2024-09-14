import React from 'react'
import Lottie from 'lottie-react';
import pageNotFound from "../utils/pageNotFound.json"
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='wrapper-error-page'>
            <Lottie animationData={pageNotFound} />
            <Link to="/" alt="Home" className='btn-error-page'>Homepage</Link>
        </div>
    )
}

export default ErrorPage
