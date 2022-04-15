import React from 'react';

import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import AdminIcon from '../../assets/admin.png';
import { logout } from '../../store/actions/auth-actions';


const DashboardNavbar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const logoutUser = async () => {
        await dispatch(logout(token));
    };

    return (
        <div className='w-full h-[60px] shadow bg-white'>
            <div className='flex items-center justify-between w-full h-full px-10 mb-8'>
                <div className='flex items-center space-x-2'>
                    <img src={AdminIcon} alt="admin icon" />
                    <h3 className='font-semibold'>Administrator.</h3>
                </div>
                <div className='ml-auto'>
                    <button className='px-3 py-2 font-semibold text-white bg-primary rounded-lg shadow-lg flex items-center' onClick={logoutUser}>
                        <span className='inline-flex mr-3 font-bold'><BiLogOutCircle /></span>
                        logout
                    </button>
                </div>
            </div>
        </div>
    );
};


export default DashboardNavbar;