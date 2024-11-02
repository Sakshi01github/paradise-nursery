// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice'; // Adjust the path if needed

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
