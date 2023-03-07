import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/CartWidget.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="carrito-container">
            <FontAwesomeIcon icon={faShoppingCart}     color="white" className='carrito'/>
            <p className='numero'>3</p>
        </div>
    );
};


export default CartWidget;