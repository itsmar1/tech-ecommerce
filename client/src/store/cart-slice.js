import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    totalItems: 0,
    totalQuantity: 0,
    totalPrice: 0
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {},
        removeItemFromCart(state, action) {}
    }
});



export const cartActions = cartSlice.actions;

export default cartSlice;