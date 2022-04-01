import React from 'react';
import { useSelector } from 'react-redux';

import PageHero from '../layout/PageHero';
import CartContent from '../components/cart/CartContent';
import CartEmpty from '../components/cart/CartEmpty';


const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <div>
            <PageHero title='cart' />
            <div className='w-[90%] mx-auto'>
                {cart.length < 1 && <CartEmpty />}
                {cart.length > 0 && <CartContent cart={cart} totalPrice={totalPrice} />}
            </div>
        </div>
    );
};

export default Cart;