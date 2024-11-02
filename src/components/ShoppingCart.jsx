// src/components/ShoppingCart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleIncrement = (name) => {
        const item = cartItems.find(item => item.name === name);
        dispatch(updateQuantity({ name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (name) => {
        const item = cartItems.find(item => item.name === name);
        if (item.quantity === 1) {
            dispatch(removeItem(name));
        } else {
            dispatch(updateQuantity({ name, quantity: item.quantity - 1 }));
        }
    };

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.map(item => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => handleIncrement(item.name)}>+</button>
                    <button onClick={() => handleDecrement(item.name)}>-</button>
                    <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
                </div>
            ))}
            <h2>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
        </div>
    );
};

export default ShoppingCart;
