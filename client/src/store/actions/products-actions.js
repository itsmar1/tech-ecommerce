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
            // let prices = products.map((product) => product.price);
            // const maxPrice = Math.max(...prices);
            // const minPrice = Math.min(...prices);
            dispatch(productsActions.replaceProducts(products));
            // dispatch(productsActions.setMaxPrice(maxPrice));
            // dispatch(productsActions.setMinPrice(minPrice));
            
        } catch (error) {
            console.log('error');
        }
    }
};