import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { cartActions } from '../../store/cart-slice';


const CartContent = ({ cart, totalPrice }) => {
    const dispatch = useDispatch();


    const clearCart = () => {
        dispatch(cartActions.clearCart());
    };


    return (
        <div className='mb-40'>
            <h2 className='uppercase text-3xl tracking-wide text-center my-8'>Your Bag</h2>
            <div className='flex justify-between my-12'>
                <div>
                    <Link to='/products' className='text-primary bg-secondary-200 uppercase px-4 py-2 rounded-md shadow-lg'>
                        continue shopping
                    </Link>
                </div>
                <div>
                    <button onClick={clearCart} className='text-primary bg-secondary-200 uppercase px-4 py-2 rounded-md shadow-lg'>
                        clear cart
                    </button>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-4 lg:gap-6'>
                <div className='lg:col-span-3 lg:pr-6'>
                    <CartItem cart={cart} />
                </div>
                <div className='lg:col-span-1 mb-10'>
                    <CartSummary totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    );
};


export default CartContent;