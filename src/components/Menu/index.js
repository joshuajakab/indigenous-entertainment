import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Menu = props => {

    const [subMenu, setSubMenu] = useState(false);

    const subMenuToggle = () => {
        setSubMenu(subMenu => !subMenu)
      }

    return (
        <div className='menu-container'>
            {!subMenu &&
            <Link onClick={subMenuToggle}><h1 className='menu-link'>about v</h1></Link>
            }
            {subMenu &&
            <div className='about-container' >
            
                <Link onClick={subMenuToggle}><h1 className='menu-link'>about ^</h1></Link>
                
                
                <div className='sub-menu'>
                    <Link to='/cuzinit'><h2 className='sub-menu-link'>Cuzin' It</h2></Link>
                    <Link to='/acoustikruckus'><h2 className='sub-menu-link'>Acoustik Ruckus</h2></Link>
                    <Link to='/fiddlewitch'><h2 className='sub-menu-link'>Fiddle Witch</h2></Link>
                    <Link to='/silas'><h2 className='sub-menu-link'>Silas</h2></Link>
                </div>
            </div>
            }
            
            <Link to='/shows' onClick={props.click}><h1 className='menu-link'>shows</h1></Link>
            <Link to='/merch'><h1 className='menu-link-2'>mesh lab</h1></Link>
            <Link to='/contact'><h1 className='menu-link'>contact</h1></Link>
        </div>
    )
};

export default Menu;
