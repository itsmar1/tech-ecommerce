import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import CartSummary from './CartSummary';


const CartContent = ({ cart, totalPrice }) => {
    return (
        <div>
            <h2 className='uppercase text-3xl tracking-wide text-center my-8'>Your Bag</h2>
            <div className='flex justify-between'>
                <div>
                    <Link to='/products' className='text-primary bg-secondary-200 uppercase px-4 py-2 rounded-md shadow'>
                        continue shopping
                    </Link>
                </div>
                <div>
                    <button className='text-primary bg-secondary-200 uppercase px-4 py-2'>
                        clear cart
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <CartItem cart={cart} />
                </div>
                <div className='col-span-1'>
                    <CartSummary totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};


export default CartContent;