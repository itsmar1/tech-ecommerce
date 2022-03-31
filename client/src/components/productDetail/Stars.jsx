import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'


const Stars = () => {
    return (
        <div className='flex items-center'>
            <div className='flex text-[#ffb900] space-x-1'>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarHalf /></span>
            </div>
            <p className='ml-2 inline-block'>124 customer reviews</p>
        </div>
    );
};


export default Stars;