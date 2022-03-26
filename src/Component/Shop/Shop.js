import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const[cart2,setCart2]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
        // console.log(newCart)

 
    }; 
    const randomFromCart=(cart)=>{
        // console.log(cart);
        const newCart2=[...cart2,cart]
        setCart2(newCart2)
        console.log(newCart2[0])
    }
    return (
        <div className='shop-container'>
                <div className="products-container">
                {
                        products.map(product=><Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>

                <div className='cart-container'>
                    <h2>Order List</h2>
                    {
                        cart.map(cart=><Cart
                            key={cart.id}
                            cart={cart}></Cart>)
                    }
                    <button onClick={()=>randomFromCart(cart)}  className='btn-choose-the-best-one'>CHOOSE THE BEST ONE</button>
                    <button className='reset'>RESET</button>
                </div>

        </div>
    );
};

export default Shop;