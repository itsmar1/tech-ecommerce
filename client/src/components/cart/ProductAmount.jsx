import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const ProductAmount = ({ quantity, id }) => {
    const dispatch = useDispatch();

    const decrease = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    const increase = () => {
        dispatch(cartActions.addItemToCart(id));
    };

    return (
        <div className='w-[150px] grid grid-cols-3 justify-center items-center'>
            <button type='button' onClick={decrease} className='py-2 w-6 h-3 flex justify-center items-center'>
                <FaMinus />
            </button>
            <h2 className='text-2xl font-bold text-gray-700'>{quantity}</h2>
            <button type='button' onClick={increase} className='py-2 w-6 h-3 flex justify-center items-center'>
                <FaPlus />
            </button>
        </div>
    );
};


export default ProductAmount;