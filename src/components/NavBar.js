import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <Link to={'/'}>
                Saved Bookmarks
            </Link>
            {' '}
            <Link to={'/add-bookmark'}>
                Add Bookmark
            </Link>
        </nav>
    )
}

export default NavBar;
