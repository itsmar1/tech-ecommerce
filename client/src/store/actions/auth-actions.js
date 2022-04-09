// import axios from "axios";
import api from "../../utils/api";
import { authActions } from '../auth-slice';


export const login = (payload) => {
    return async dispatch => {
        const csrf = await api.get('/sanctum/csrf-cookie');
        console.log('csrf = ', csrf);

        const postData = async () => {
            const response = await api.post("/api/login", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            console.log(user);
            await dispatch(authActions.login(user));
        } catch (error) {
            console.log(error);
        }
    }
};




export const register = (payload) => {
    return async dispatch => {
        const csrf = await api.get('/sanctum/csrf-cookie');
        console.log('csrf = ', csrf);

        const postData = async () => {
            const response = await api.post("/api/register", payload);

            const data = await response.data;
            return data;
        };

        try {
            const user = await postData();
            console.log(user);
            dispatch(authActions.register(user));
        } catch (error) {
            console.log(error);
        }
    }
};


export const logout = (token) => {
    return async dispatch => {
        console.log(token);
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
            const message = await logout();
            console.log('Logout message : ', message);
            dispatch(authActions.logout());
            
        } catch (error) {
            console.log(error);
        }

    }
};
