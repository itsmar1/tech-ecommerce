import React from "react";
import { useSelector } from "react-redux";

import PageHero from "../layout/PageHero";
import CheckoutContent from "../components/cart/CheckoutContent";
import CartEmpty from '../components/cart/CartEmpty';


const Checkout = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const cart = useSelector((state) => state.cart.items);
    const { name } = useSelector((state) => state.auth.user);

    return (
        <div>
            <PageHero title='checkout' />
            <div className="w-[80%] mx-auto mb-40 mt-24">
                {cart.length < 1 && <CartEmpty />}
                {cart.length > 0 && <CheckoutContent totalPrice={totalPrice} name={name} />}
            </div>
        </div>
    );
};

export default Checkout;