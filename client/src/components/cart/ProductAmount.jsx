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
        <div className='w-[70px] lg:w-[100px] xl:w-[150px] grid grid-cols-3 justify-center items-center ml-auto'>
            <button type='button' onClick={decrease} className='lg:w-4 lg:h-3 xl:py-2 xl:w-6 xl:h-3 flex justify-center items-center'>
                <FaMinus />
            </button>
            <h2 className='text-sm lg:text-lg xl:text-2xl font-bold text-gray-700'>{quantity}</h2>
            <button type='button' onClick={increase} className='lg:w-4 lg:h-3 xl:py-2 xl:w-6 xl:h-3 flex justify-center items-center'>
                <FaPlus />
            </button>
        </div>
    );
};


export default ProductAmount;