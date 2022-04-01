import React from 'react';
import { Link } from 'react-router-dom';


const CartEmpty = () => {
    return (
        <div className='mt-28 mb-80 space-y-12 text-center'>
            <h2 className='text-4xl font-bold capitalize tracking-widest'>your cart is empty</h2>
            <div>
                <Link to='/products' className='uppercase text-xl text-white bg-primary rounded-lg shadow-lg px-8 py-4'>
                    fill it
                </Link>
            </div>
        </div>
    );
};


export default CartEmpty;