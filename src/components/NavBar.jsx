import React from 'react';
import CartWidget from './CartWidget';
import './styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <header className='header'>

            <div className="header-container">

                <div className="menu-button">
                    <a href="/"><FontAwesomeIcon icon={faBars} size="lg" color="white" /></a>
                    <span className='menu'>Menu</span>
                </div>

                <nav>
                    <ul className="nav-container">
                         <li className="products-item">
                            <a href="/" className="lista">Inicio</a>
                        </li>
                        <li className="products-item">
                            <a href="/" className="lista"> Productos </a>
                        </li>
                         <li className="products-item">
                            <a href="/" className="lista">Blog</a>
                        </li>
                         <li className="products-item">
                            <a href="/" className="lista">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}


export default NavBar;