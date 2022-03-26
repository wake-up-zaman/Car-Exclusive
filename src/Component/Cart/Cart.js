import React, { useState } from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart)
    const {name}=props.cart;
    const [cartItems,setcartItems]=useState([])
    const Name=[name];
    return (
        <div className='cart-info'>
            <p> {name}</p>
        </div>
    );
};

export default Cart;