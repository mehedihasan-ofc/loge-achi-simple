import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    // calculate tax
    const tax = totalPrice * 5 / 100;

    // calculate grand total
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(0)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(0)}</h6>
        </div>
    );
};

export default Cart;