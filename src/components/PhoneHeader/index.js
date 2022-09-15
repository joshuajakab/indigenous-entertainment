import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../MenuIcon';
import './phoneHeader.css';

const PhoneHeader = props => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    return (
        <div className='phone-header'>
            <Link to='/' className='title-container' onClick={props.click}>
                <h2 className='title'>indigenous entertainment</h2>

            </Link>
            
        </div>
    )
};

export default PhoneHeader;
