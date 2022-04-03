import React from 'react';

import { BiLogOutCircle } from 'react-icons/bi';
import AdminIcon from '../../assets/admin.png';


const DashboardNavbar = () => {
    return (
        <div className='w-full h-[60px] shadow bg-white'>
            <div className='flex items-center justify-between w-full h-full px-10 mb-8'>
                <div className='flex items-center space-x-2'>
                    <img src={AdminIcon} alt="admin icon" />
                    <h3 className='font-semibold'>Administrator.</h3>
                </div>
                <div className='ml-auto'>
                    <button className='px-4 py-2 bg-gray-400 rounded-md flex items-center'>
                        <span className='inline-flex mr-3 font-bold'><BiLogOutCircle /></span>
                        logout
                    </button>
                </div>
            </div>
        </div>
    );
};


export default DashboardNavbar;