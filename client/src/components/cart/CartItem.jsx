import React from 'react';
import ProductAmount from './ProductAmount';

import { formatPrice } from '../../utils/helpers';


const CartItem = ({ cart }) => {
    return (
        <>
        {cart.map((product) => (
            <div key={product.id} className='flex justify-between mb-6 pb-6 border-b-2 border-gray-200'>
                <div className='flex flex-2'>
                    <img src={product.images[0].image} alt="" className='w-[200px] h-[150px] object-contain' />
                    <div className='flex flex-col justify-around'>
                        <div>
                            <span className='font-bold'>Product: </span>
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Brand: </span>
                            <span className='uppercase'>{product.brand}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Price: </span>
                            <span className='italic'>{formatPrice(product.price)}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col ml-auto'>
                    <ProductAmount quantity={product.quantity} id={product.id} />
                    <div className='w-[150px] text-center mt-auto ml-auto'>
                        <span className='text-secondary-100 font-bold italic'>{formatPrice(product.totalPrice)}</span>
                    </div>
                </div>
                <hr className='my-4' />
            </div>
        ))}
        </>
    );
};


export default CartItem;