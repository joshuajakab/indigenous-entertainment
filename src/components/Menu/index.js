import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = props => {

    return (
        <div className='menu-container'>
            <Link to='/about'><h1 className='menu-link'>about</h1></Link>
            <Link to='/shows' onClick={props.click}><h1 className='menu-link'>shows</h1></Link>
            <Link to='/merch'><h1 className='menu-link'>merch</h1></Link>
            <Link to='/contact'><h1 className='menu-link'>contact</h1></Link>
        </div>
    )
};

export default Menu;
