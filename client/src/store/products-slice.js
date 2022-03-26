import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    totalProducts: 0
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        replaceProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});



export const productsActions = productsSlice.actions;

export default productsSlice;