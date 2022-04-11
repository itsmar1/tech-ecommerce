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
            newItem.price = Number(newItem.price);
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
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity++;

            existingItem.quantity++;
            existingItem.totalPrice += existingItem.price;
            state.totalPrice += existingItem.price;
            
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
        clearCart(state) {
            
            Object.assign(state, initialState);
        }
    }
});



export const cartActions = cartSlice.actions;

export default cartSlice;