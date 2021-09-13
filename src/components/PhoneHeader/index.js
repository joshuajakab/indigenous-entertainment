import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const PhoneHeader = props => {

    return (
        <div className='phone-header'>
            <Link to='/' className='title-container'>
                <h2>indigenous entertainment</h2>
            </Link>
        </div>
    )
};

export default PhoneHeader;
