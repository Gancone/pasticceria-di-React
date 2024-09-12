import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <header>
            <Link to="/lista" alt="scopri di più" className='btn-home'>
                <p>Scopri di più</p></Link>
        </header>
    )
}

export default Home
