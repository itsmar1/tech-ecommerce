import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import CartIcon from "./CartIcon";

const NavCartButton = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const buttonVariants = {
        hover: {
          scale: 1.1,
          textShadow: "0px 0px 2px #ffffff",
          boxShadow: "0px 0px 4px #243E8B",
          transition: {
            duration: 0.3,
          },
        },
      };
    
    return (
        <motion.button className='rounded-3xl font-bold py-2 px-3 bg-primary shadow-lg text-white'
            variants={buttonVariants}
            whileHover="hover"
        >
            <Link to="/cart" className="flex justify-between items-center ">
                {/* <span className="w-[1.35rem] h-[1.35rem] mr-2"> */}
                <span className="w-4 h-2 mr-2">
                    <CartIcon />
                </span>
                <span className='text-white font-bold mr-2'>Cart</span>
                {/* <span className="bg-orange-800 rounded-[50%]  px-2 font-bold">0</span> */}
                <span className="bg-secondary-200 text-primary rounded-[50%]  px-2 font-bold">{totalQuantity}</span>
            </Link>
        </motion.button>
    );
};

export default NavCartButton;