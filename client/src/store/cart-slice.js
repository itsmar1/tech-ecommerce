import { createSlice } from '@reduxjs/toolkit';


// const getLocaleStorage = () => {
//     let cart = localStorage.getItem('cart');
//     if (cart) {
//         return JSON.parse(localStorage.getItem('cart'));
//     } else {
//         return []
//     }
// };

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push(newItem);
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.totalPrice;
            }
            state.totalPrice += newItem.totalPrice;
            state.totalQuantity += newItem.quantity;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
            state.totalPrice += newItem.price;
            
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalPrice -= existingItem.price;
            state.totalQuantity--;
        },
        clearCart(state, action) {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});



export const cartActions = cartSlice.actions;

export default cartSlice;