import React from 'react';

import { formatPrice } from '../../utils/helpers';


const CheckoutContent = ({ totalPrice }) => {
    return (
        <div>
            <div className="w-[50%] mx-auto px-8 py-12 shadow-lg rounded-xl">
                <h2 className="capitalize text-2xl font-bold tracking-wider mb-6">Hello, User</h2>
                <p className="text-lg capitalize mb-4">Your total : <span className="italic">{formatPrice(totalPrice)}</span> </p>
                <p className="text-left capitalize">Test card number: <span className="italic">4242 4242 4242 4242</span></p>
            </div>
            <div className="w-[50%] mx-auto mt-12 px-8 py-12 shadow-lg rounded-xl">
                <div className="w-[80%] m-auto border rounded">
                    <div>
                        <input type="text" placeholder="Card Number" className="form-input w-full" />
                    </div>
                    <button className="capitalize py-3 text-xl font-bold tracking-widest text-primary bg-secondary-100 w-full">Pay</button>
                </div>
            </div>
        </div>
    );
};


export default CheckoutContent;