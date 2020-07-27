import React from 'react';
import OwO from '../../assets/img/OwO.png';
import './menu.css'
import Button from '../Button/Button'


const Menu = () => {
    return (
        <nav className="Menu">
            <a href='/'>
          <img src={OwO} alt="logo" />
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                N o v o  - p i k a c h u
            </Button>
        </nav>
    );
}

export default Menu;