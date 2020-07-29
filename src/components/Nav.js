import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return <nav>
        <Link to='/'>
            <h3>Home</h3>
        </Link>
        <Link to='/items'>
            <h3>Items</h3>
        </Link>
        <Link to='/addItem'>
            <h3>New Item</h3>
        </Link>
    </nav>
}

export default Nav;