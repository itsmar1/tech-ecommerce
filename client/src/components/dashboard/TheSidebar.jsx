import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai'
import { MdAddCircle, MdUpdate, MdViewList } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi'


const TheSidebar = () => {
    return (
        <div className='flex flex-col h-full px-6'>
            <div className='mb-12 mt-8 flex flex-col justify-center items-center'>
                <span className='block text-6xl text-white'><AiFillDashboard /></span>
                <h1 className='uppercase text-3xl tracking-wider font-extrabold text-center'>
                    <span className='text-primary'>tech</span>
                    <span className='text-secondary-200'>shop</span>
                </h1>
            </div>
            <div className='flex flex-col text-gray-200 font-semibold tracking-wider text-lg space-y-3'>
                <Link to='/admin/dashboard' className='border-b-2 pb-3 border-gray-500'>
                    <span className='inline-flex mr-3 text-primary'><AiFillDashboard /> </span>
                    Dashboard
                </Link>
                <Link to='/admin/dashboard/products' className='border-b-2 pb-3 border-gray-500'>
                    <span className='inline-flex mr-3 text-primary'><MdViewList /> </span>
                    List Products
                </Link>
                <Link to='/admin/dashboard/addproduct' className='border-b-2 pb-3 border-gray-500'>
                    <span className='inline-flex mr-3 text-primary'><MdAddCircle /> </span>
                    Add Product
                </Link>
                <Link to='/admin/dashboard/updateproducts' className='border-b-2 pb-3 border-gray-500'>
                    <span className='inline-flex mr-3 text-primary'><MdUpdate /> </span>
                    Update Product
                </Link>
            </div>
            <div className='mt-auto mb-8'>
                    <button className='px-4 py-2 bg-gray-400 rounded-md flex items-center shadow-lg'>
                        <span className='inline-flex mr-3 font-bold'><BiLogOutCircle /></span>
                        logout
                    </button>
            </div>
            {/* <ul>
                <li>
                    <Link to='/admin/dashboard/main'>Test</Link>
                </li>
            </ul> */}
        </div>
    );
};


export default TheSidebar;