import React from 'react';

import PageHero from '../layout/PageHero';
import Filters from '../components/products/Filters';
import Sort from '../components/products/Sort'
import ProductsList from '../components/products/ProductsList';


const Products = () => {
    return (
        <main>
            <PageHero title="products" />
            <div className='flex w-[85vw] my-16 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-12'>
                    <div className='sticky '>
                        <Filters />
                    </div>
                    <div className='mb-[50rem] md:col-span-2 lg:col-span-3'>
                        <Sort />
                        <ProductsList />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;