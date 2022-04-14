import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gridView: true,
    productDetailLoading: false
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
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;