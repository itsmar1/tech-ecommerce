// import axios from "axios";
import api from "../../utils/api";
import { authActions } from '../auth-slice';
import { uiActions } from "../ui-slice";


export const login = (payload) => {
    return async dispatch => {
        dispatch(uiActions.loginLoading());
        await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/api/login", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            await dispatch(authActions.login(user));
            dispatch(uiActions.loginLoading());
        } catch (error) {
            console.log(error);
        }
    }
};




export const register = (payload) => {
    return async dispatch => {
        await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await api.post("/api/register", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            dispatch(authActions.register(user));
        } catch (error) {
            console.log(error);
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        await api.get('/sanctum/csrf-cookie');

        const logout = async () => {
            const response = await api.post('/api/logout', null, {
                headers: {
                    Authorization: 'Bearer ' + token
                },
                // withCredentials: true
            });
            const message = response.data;
            return message;
        };

        try {
            await logout();
            dispatch(authActions.logout());
            
        } catch (error) {
            console.log(error);
        }

    }
};
