import React from 'react';

import ListView from './ListView';
import GridView from './GridView';
import { useSelector } from 'react-redux';


const ProductsList = () => {
    const gridView = useSelector((state) => state.ui.gridView);
    const products = useSelector((state) => state.products.filteredProducts);


    if(gridView) {
        return <GridView products={products} />
    }
    return <ListView products={products} />
};


export default ProductsList;