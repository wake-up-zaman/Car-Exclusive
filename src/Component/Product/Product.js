import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {name,price,ratings,img}=props.product;
    const{handleAddToCart,product}=props;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-price'>Price: ${price}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <div className='btn'>
                <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
};

export default Product;