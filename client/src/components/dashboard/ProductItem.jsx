import React from 'react';

import { formatPrice } from '../../utils/helpers';


const ProductItem = ({ product }) => {
    return (
        <div className='flex space-x-6 border border-white rounded-lg shadow-lg p-4'>
            <div>
                <img className='w-[300px] h-[200px] object-contain rounded' src={product.thumbnail} alt={product.name} />
            </div>
            <div className='flex flex-col'>
                <h2 className='font-semibold text-lg tracking-widest my-4'>{product.name}</h2>
                <span className='block text-secondary-100 font-bold text-sm'>{formatPrice(product.price)}</span>
                <p className='text-gray-500 mt-6'>{product.description.substring(0, 150)}...</p>
            </div>
        </div>
    );
};


export default ProductItem;