import React from 'react';
import { Link } from 'react-router-dom';
import OwO from '../../assets/img/OwO.png';
import './menu.css'
import Button from '../Button/Button'


const Menu = () => {
    return (
        <nav className="Menu">
            <Link to='/'>
          <img src={OwO} alt="logo" />
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/pokemon'>
                N o v o  - p i k a c h u
            </Button>
        </nav>
    );
}

export default Menu;