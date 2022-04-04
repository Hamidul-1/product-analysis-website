import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* <h1>Header</h1> */}
            <nav className='header-menu'>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/reviews">Review</Link>
                <Link className='link' to="/dashboard">Dashboard</Link>
                <Link className='link' to="/blogs">Blogs</Link>
                <Link className='link' to="/about">About</Link>  
            </nav>
        </div>
    );
};

export default Header;
