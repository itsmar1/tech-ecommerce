import React from 'react';

import ProductItem from './ProductItem';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useSelector } from 'react-redux';


const UpdateProducts = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <div>
            <div className="flex items-center mx-4 my-8 p-8 bg-white shadow-2xl drop-shadow-md">
                <span className="text-4xl text-primary mr-6">
                    <AiOutlineUnorderedList />
                </span>
                <h2 className="uppercase text-4xl tracking-widest font-semibold">
                    Update Products
                </h2>
            </div>
            <div className='bg-white mx-4 p-8 shadow-lg space-y-12'>
                {products.map((product) => {
                    return <ProductItem key={product.id} product={product} update={true} />
                })}
                
            </div>
        </div>
    );
};


export default UpdateProducts;