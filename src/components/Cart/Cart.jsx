import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; //Option : 1
    const {cart} = props;    //Option - 2; both option are working well
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;