import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../media/home-icon.svg'
import './styles.css';

const Header = props => {

    return (
        <div className='header-container'>
            <Link to='/About' className='header-link'><h2 className='header-link-text'>About</h2></Link>
            <Link to ='/shows' className='header-link'><h2 className='header-link-text'>Shows</h2></Link>
            <Link to='/' className='home-link'><img src={HomeIcon} className='home-icon' alt='home-icon' /></Link>
            <Link to='/merch' className='header-link'><h2 className='header-link-text'>Merch</h2></Link>
            <Link to='/contact' className='header-link'><h2 className='header-link-text'>Contact</h2></Link>
        </div>

    )
};

export default Header;
