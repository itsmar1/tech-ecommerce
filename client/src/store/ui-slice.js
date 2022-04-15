import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gridView: true,
    productDetailLoading: false,
    productsLoading: false,
    loginLoading: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleView(state) {
            state.gridView = !state.gridView;
        },
        pDetailLoading(state) {
            state.productDetailLoading = !state.productDetailLoading;
        },
        productsLoading(state) {
            state.productsLoading = !state.productsLoading;
        },
        loginLoading(state) {
            state.loginLoading = !state.loginLoading;
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;