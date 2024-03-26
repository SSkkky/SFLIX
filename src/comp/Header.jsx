import { Link } from 'react-router-dom';
import React from 'react';

function Header(props) {
    return (
        <header>
            <Link to="/"><h1>SFLIX</h1></Link>
            <nav>
                <Link to="/" className='active'>Home</Link>
                <Link to="/">Movies</Link>
                <Link to="/">TV Series</Link>
            </nav>
        </header>
    );
}

export default Header;