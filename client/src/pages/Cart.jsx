import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PageHero from '../layout/PageHero';
import CartSummary from '../components/cart/CartSummary';
import CartItem from '../components/cart/CartItem';


const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <div>
            <PageHero title='cart' />
            <div className='w-[90%] mx-auto'>
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
        </div>
    );
};

export default Cart;