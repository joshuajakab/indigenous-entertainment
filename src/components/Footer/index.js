import React from 'react';
import { Link } from 'react-router-dom';
import FBIcon from '../../media/facebook.svg';
import InstaIcon from '../../media/instagram.svg';
import './footer.css';

const Footer = props => {
    return (
        <div className='footer'>
            <div className='social-links-container'>
            <a href='https://www.facebook.com/IndigenousEntertainment' className='social-links'><img src={FBIcon}  alt='fb' /></a>
            <a href='https://www.instagram.com/indigenous.entertainment/' className='social-links'><img src={InstaIcon}  alt='insta' /></a>
            </div>
            <p className='gmas-tag'>site by give me a sign designs llc</p>
        </div>
    )
};

export default Footer;
