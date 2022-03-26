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
        <div className='container'>
                <div className='shop-container row flex-column-reverse flex-md-row  gx-2'>
                    <div className="products-container col-sm-12 col-md-12 col-lg-6">
                        {
                        products.map(product=><Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                         }
                    </div>

                    <div className='cart-container col-sm-12 col-md-12 col-lg-6  align-content-center flex-wrap '>
                    <h3 className='d-flex justify-content-center'>Order-List</h3>
                        {
                            cart.map(cart=><Cart
                            key={cart.id}
                            cart={cart}></Cart>)
                         }
                        <button onClick={()=>randomFromCart(cart)}  className='btn-choose-the-best-one'>CHOOSE THE BEST ONE</button>
                        <button className='reset'>RESET</button>
                    </div>

                </div>
        </div>

    );
};

export default Shop;