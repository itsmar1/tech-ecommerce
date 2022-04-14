import React from 'react';

import swal from 'sweetalert';

import { FaCcVisa } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const CheckoutContent = ({ totalPrice, name }) => {
    const dispatch = useDispatch();

    const payInvoice = () => {
        dispatch(cartActions.clearCart());
        swal({
            title: "Invoice Paid!",
            text: `You paid ${formatPrice(totalPrice)}`,
            icon: "success",
            button: "OK!",
          });
    };

    return (
        <div>
            <div className="w-[95%] sm:w-[80%] lg:w-[50%] mx-auto px-8 py-12 shadow-lg rounded-xl">
                <h2 className="capitalize text-3xl font-bold tracking-wider mb-10 leading-relaxed">Hello, {name}</h2>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">Subtotal : </p>
                    <span className="italic font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">estimated shipping : </p>
                    <span className="italic font-semibold">{formatPrice(5.99)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-lg capitalize mb-4">shipping discount : </p>
                    <span className="italic font-semibold">{formatPrice(-5.99)}</span>
                </div>
                <hr className='my-6' />
                <div className='flex justify-between items-center'>
                    <p className="text-xl capitalize mb-4 font-bold">Total : </p>
                    <span className="italic font-bold">{formatPrice(totalPrice)}</span>
                </div>
            </div>
            <div className="w-[95%] sm:w-[80%] lg:w-[50%] mx-auto mt-12 px-8 py-12 shadow-lg rounded-xl">
                <div className="w-[80%] m-auto border rounded">
                    <div className='flex'>
                        <span className="text-3xl flex items-center justify-center rounded-l border border-gray-100 border-r-0 py-1 px-2 bg-gray-300  text-black">
                            <FaCcVisa />
                        </span>
                        <input type="text" placeholder="4532 5480 0703 8026" className="form-input w-full rounded-r" disabled />
                    </div>
                    <button className="capitalize py-3 text-xl font-bold tracking-widest text-primary bg-secondary-100 w-full drop-shadow-2xl" onClick={payInvoice}>Pay</button>
                </div>
            </div>
        </div>
    );
};


export default CheckoutContent;