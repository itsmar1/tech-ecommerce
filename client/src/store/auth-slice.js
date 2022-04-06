import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false,
    user: null,
    isAdmin: false,
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const user = action.payload.user;
            state.user = user;
            state.token = action.payload.token;
            state.isAuthenticated = true
            if (user.role === 'admin') {
                state.isAdmin = true
            }
        },
        register(state, action) {
            const user = action.payload;
            state.user = user;
            if (user.role === 'admin') {
                state.isAuthenticated = true;
                state.isAdmin = true;
            }
            else {
                state.isAuthenticated = true;
                state.isAdmin = false;
            }
        }
    }
});



export const authActions = authSlice.actions;

export default authSlice;