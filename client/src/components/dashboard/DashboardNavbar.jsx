import React from 'react';

import { BiLogOutCircle } from 'react-icons/bi';


const DashboardNavbar = () => {
    return (
        <div className='w-full h-[60px] shadow'>
            <div className='flex items-center w-full h-full px-10 mb-8'>
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