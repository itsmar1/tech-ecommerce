import React from 'react';

import ListView from './ListView';
import GridView from './GridView';
import { useSelector } from 'react-redux';
import TheSpinner from '../../layout/TheSpinner';


const ProductsList = () => {
    const gridView = useSelector((state) => state.ui.gridView);
    const products = useSelector((state) => state.products.filteredProducts);
    const loading = useSelector((state) => state.ui.productsLoading);

    if (loading) {
        return <TheSpinner />
    } else if (products.length < 1) {
        return (
            <div className='w-full'>
                <p className='mx-auto'>Sorry, no products matched your search.</p>
            </div>
        );
    }


    if(gridView) {
        return <GridView products={products} />
    }
    return <ListView products={products} />
};


export default ProductsList;