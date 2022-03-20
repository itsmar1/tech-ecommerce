import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { XIcon } from '@heroicons/react/solid';

import HambergurMenu from '../assets/HambergurMenu.svg';
import Logo from '../assets/logo.svg';
import NavCartButton from '../components/cart/NavCartButton';

const MainNavigation = () => {
    const [showNav, setShowNav] = useState(false);
    
    const navHandler = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="w-screen h-[80px] shadow-md">
            <div className="flex  justify-between items-center w-full h-full px-8 sm:mb-6">
                <div className="flex">
                    <div className='flex items-center'>
                        <div className='w-[50px] h-[50px]'>
                            <NavLink to='/'><img src={Logo} alt="" /></NavLink>
                        </div>
                        <div>
                            <NavLink to='/'>
                                <h1 className='text-3xl font-bold ml-2 select-none'>
                                    <span className='text-primary'>TECH</span>
                                    <span className='text-secondary-200'>SHOP.</span>
                                </h1>
                            </NavLink>
                        </div>
                    </div>
                    <ul className="hidden md:flex items-center lg:ml-8">
                        <li>
                            <NavLink className='ml-4 p-2 lg:text-lg font-semibold' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-2 p-2 lg:text-lg font-semibold' to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-2 p-2 lg:text-lg font-semibold' to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink className='ml-2 p-2 lg:text-lg font-semibold' to="/checkout">Checkout</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <NavCartButton />
                    <NavLink className='bg-primary text-white font-bold px-4 py-2 ml-2 rounded-full shadow-lg' to="/login">Login</NavLink>
                </div>
                <div className="md:hidden cursor-pointer" onClick={navHandler}>
                    {!showNav ? <img src={HambergurMenu} alt="" /> : <XIcon className='w-5' />}
                </div>
            </div>

        <ul className={!showNav ? 'hidden' : "md:hidden px-8 py-4 bg-white w-full h-[20rem] relative z-20"}>
            <li className='border-b-2 border-zinc-300 w-full text-lg font-semibold text-gray-600'>
                <NavLink to='/' onClick={navHandler}>Home</NavLink>
            </li>
            <li className='border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600'>
                <NavLink to="/about" onClick={navHandler}>About</NavLink>
            </li>
            <li className='border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600'>
                <NavLink to="/products" onClick={navHandler}>Products</NavLink>
            </li>
            <li className='border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600'>
                <NavLink to="/checkout" onClick={navHandler}>Checkout</NavLink>
            </li>
            <div className='flex flex-col items-center m-4 space-y-4'>
                <div onClick={navHandler}><NavCartButton /></div>
                <NavLink  onClick={navHandler} to="/login" className='bg-primary text-white font-bold px-9 py-2 ml-2 rounded-full shadow-lg'>Login</NavLink>
            </div>
        </ul>
            

        </div>

            );
};

export default MainNavigation;