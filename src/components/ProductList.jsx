// src/components/ProductList.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsArray = [
    { name: 'Snake Plant', price: 20, image: 'snake-plant.jpg', description: 'Low maintenance.' },
    { name: 'Fiddle Leaf Fig', price: 50, image: 'fiddle-leaf-fig.jpg', description: 'Loves bright light.' },
    // Add more plants as needed
];

const ProductList = () => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem({ ...plant, quantity: 1 }));
        setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
    };

    return (
        <div className="product-grid">
            {plantsArray.map(plant => (
                <div key={plant.name} className="product-card">
                    <img src={plant.image} alt={plant.name} />
                    <h2>{plant.name}</h2>
                    <p>{plant.description}</p>
                    <p>${plant.price}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
