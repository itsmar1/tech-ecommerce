import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center text-center h-20 bg-[#222] text-white md:tracking-widest leading-tight font-semibold'>
            <h4>
                &copy; {new Date().getFullYear()}
                <span className='text-secondary-200'> TECHSHOP </span>
            </h4>
            <h4 className='ml-3'>All rights reserved</h4>
        </div>
    );
};

export default Footer;