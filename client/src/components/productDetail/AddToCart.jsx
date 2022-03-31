import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';


const AddToCart = ({ product }) => {
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount((prevAmount) => {
            return prevAmount + 1;
        })
    };

    const decrease = () => {
        setAmount((prevAmount) => {
            if (prevAmount === 1) {
                return 1;
            }
            return prevAmount - 1;
        })
    };

    return (
        <div className='flex flex-col space-y-6'>
            <div className='w-[140px] grid grid-cols-3 justify-center items-center'>
                <button type='button' onClick={decrease} className='py-4 w-8 h-4 flex justify-center items-center'>
                    <FaMinus />
                </button>
                <h2 className='text-6xl font-bold text-gray-700'>{amount}</h2>
                <button type='button' onClick={increase} className='py-4 w-8 h-4 flex justify-center items-center'>
                    <FaPlus />
                </button>
            </div>
            <Link to='/cart' className='w-[140px] uppercase text-primary bg-secondary-100 rounded-md px-4 py-3 shadow-md flex justify-center items-center'>
                add to cart
            </Link>
        </div>
    );
};


export default AddToCart;