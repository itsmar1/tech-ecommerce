import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';


const CartSummary = ({ totalPrice }) => {
    return (
        <div className='border-2 border-solid border-gray-700 rounded-xl text-center h-[50vh] p-5'>
            <h2 className='uppercase text-2xl tracking-wide'>order summary</h2>
            <div className='my-4 flex justify-between'>
                <span className='capitalize text-lg'>subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className='my-4 flex justify-between'>
                <span className='capitalize text-lg'>estimated shipping</span>
                <span>{formatPrice(5.99)}</span>
            </div>
            <div className='my-4 flex justify-between'>
                <span className='capitalize text-lg'>shipping discount</span>
                <span>{formatPrice(-5.99)}</span>
            </div>
            <div className='my-4 flex justify-between'>
                <span className='capitalize text-xl font-bold'>total</span>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <Link to='/checkout' className='block w-full uppercase p-3 text-white bg-black font-semibold'>
                Checkout now
            </Link>
        </div>
    );
};


export default CartSummary;