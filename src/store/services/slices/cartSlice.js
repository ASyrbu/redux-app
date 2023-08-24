import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const cryptoToAdd = action.payload;
            state.cart.push(cryptoToAdd);
        },
        removeFromCart(state, action) {
            const cryptoToRemove = action.payload;
            state.cart = state.cart.filter(item => item.uuid !== cryptoToRemove.uuid);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;