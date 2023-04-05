import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart , handleClearCart}) => {
    // const cart = props.cart; //Option : 1
    // const {cart} = props;    //Option - 2; both option are working well

    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity == 0){
        //     product.quantity = 1
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7/100;
    const grandTotal = totalPrice + tax + totalShipping;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
            <br />
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
            <FontAwesomeIcon  icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;