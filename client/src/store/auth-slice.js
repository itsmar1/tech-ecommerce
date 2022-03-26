import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: true
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {},
        logout(state, action) {}
    }
});



export const authActions = authSlice.actions;

export default authSlice;