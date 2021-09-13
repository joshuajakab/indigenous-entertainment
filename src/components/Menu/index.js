import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = props => {

    return (
        <div className='menu-container'>
            <Link to='/about'><h1>about</h1></Link>
            <Link to='/shows'><h1>shows</h1></Link>
            <Link to='/merch'><h1>merch</h1></Link>
            <Link to='/contact'><h1>contact</h1></Link>
        </div>
    )
};

export default Menu;
