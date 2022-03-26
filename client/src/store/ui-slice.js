import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gridView: true
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleView(state) {
            state.gridView = !state.gridView;
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;