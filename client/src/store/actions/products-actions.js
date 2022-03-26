import axios from 'axios';
import { productsActions } from '../products-slice';


export const getProducts = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/products');

            const data = await response.data;
            return data;
        };

        try {
            const products = await fetchData();
            console.log(products);
            dispatch(productsActions.replaceProducts(products));
            
        } catch (error) {
            console.log('error');
        }
    }
};