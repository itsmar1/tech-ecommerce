import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    filteredProducts: [],
    totalProducts: 0,
    minPrice: 0,
    maxPrice: 0
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        replaceProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
            state.totalProducts = action.payload.length;
            // set min and max prices
            let prices = state.products.map((product) => product.price);
            state.maxPrice = Math.max(...prices);
            state.minPrice = Math.min(...prices);
        },
        filterProducts: (state, action) => {
            const { search, category, company, price, shipping } = action.payload;
            let tempProducts = state.products;
            if (search) {
                tempProducts = tempProducts.filter((product) => 
                    product.name.toLowerCase().includes(search)
                );
            }
            if (category !== 'all') {
                tempProducts = tempProducts.filter(
                    (product) => product.category === category
                )
            }
            if (company !== 'all') {
                tempProducts = tempProducts.filter(
                    (product) => product.brand === company
                )
            }
            if (shipping) {
                tempProducts = tempProducts.filter(
                    (product) => product.shipping === true
                )
            }
            tempProducts = tempProducts.filter(
                (product) => product.price <= price
            )
            state.filteredProducts = tempProducts;
            state.totalProducts = tempProducts.length;
        },
        clearFilter: (state, action) => {
            state.filteredProducts = state.products;
            state.totalProducts = state.products.length;
        },
        // setMinPrice: (state, action) => {
        //     state.minPrice = action.payload;
        // },
        // setMaxPrice: (state, action) => {
        //     state.maxPrice = action.payload;
        // }
    }
});



export const productsActions = productsSlice.actions;

export default productsSlice;