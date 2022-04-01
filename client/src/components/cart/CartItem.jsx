import React from 'react';
import ProductAmount from './ProductAmount';


const CartItem = ({ cart }) => {
    return (
        <>
        {cart.map((product) => (
            <div className='flex justify-between'>
                <div className='flex flex-2'>
                    <img src={product.images[0].image} alt="" className='w-[200px] h-[150px] object-contain' />
                    <div className='flex flex-col justify-around'>
                        <div>
                            <span className='font-bold'>Product: </span>
                            <span>{product.name}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Brand: </span>
                            <span>{product.brand}</span>
                        </div>
                        <div>
                            <span className='font-bold'>Price: </span>
                            <span>{product.price}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ProductAmount quantity={product.quantity} id={product.id} />
                    <div className='w-[150px] text-center'>
                        <span>{product.totalPrice}</span>
                    </div>
                </div>
                <hr className='my-4' />
            </div>
        ))}
        </>
    );
};


export default CartItem;