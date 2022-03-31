import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    filteredProducts: [],
    productDetails: [],
    totalProducts: 0,
    minPrice: 0,
    maxPrice: 0,
    sort: 'price-lowest',
    filters: {
        search: '',
        category: 'all',
        company: 'all',
        price: 0,
        shipping: false
    }
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
            state.filters.price = Math.max(...prices);
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        sortProducts: (state, action) => {
            const value = action.payload;
            let tempProducts = [];
            if (value === 'price-lowest') {
                tempProducts = state.filteredProducts.sort((a, b) => {
                    return a.price - b.price;
                })
            }
            if (value === 'price-highest') {
                tempProducts = state.filteredProducts.sort((a, b) => {
                    return b.price - a.price;
                })
            }
            if (value === 'name-a') {
                tempProducts = state.filteredProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if (value === 'name-z') {
                tempProducts = state.filteredProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }
            state.filteredProducts = tempProducts;
            state.sort = value;
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
                    (product) => product.shipping == true
                )
            }
            tempProducts = tempProducts.filter(
                (product) => product.price <= price
            )
            state.filteredProducts = tempProducts;
            state.totalProducts = tempProducts.length;
        },
        clearFilter: (state, action) => {
            // state.filteredProducts = state.products;
            // state.totalProducts = state.products.length;
            state.filters = {
                ...state.filters,
                search: '',
                category: 'all',
                company: 'all',
                price: state.maxPrice,
                shipping: false
            }
            console.log(state.filters);
        },
        setProductDetails: (state, action) => {
            state.productDetails = action.payload;
        }
    }
});



export const productsActions = productsSlice.actions;

export default productsSlice;