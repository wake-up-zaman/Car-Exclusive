import React, { useState } from 'react';
import './Cart.css';
const Cart = (props) => {
    const {name}=props.cart;
    return (
        <div className='cart-info'>
            <p className='para'> {name}</p>
        </div>
    );
};

export default Cart;