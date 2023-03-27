import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // console.log('products', products);  //this line is jst for check 
        const storedCart = getShoppingCart();
        const savedCart = [];
        
        //Step-1: Get id
        for (const id in storedCart){
            //Step-2: Get the product by using id 
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){
                //step-3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step-4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('product added', addedProduct);
        }
        //step-5 : set the cart
        setCart(savedCart);
    } ,  [products])



    const handleAddToCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;