import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import DashboardNavbar from '../../components/dashboard/DashboardNavbar';
import TheSidebar from '../../components/dashboard/TheSidebar';
import DashboardContent from '../../components/dashboard/DashboardContent';


const Dashboard = () => {
    const { pathname } = useLocation();

    console.log(pathname);
    return (
        <div className='w-full flex'>
            <div className='w-[300px] h-screen top-0 left-0 sticky bg-gradient-to-tr from-green-200 to-primary'>
                <TheSidebar />
            </div>
            <div className='w-full bg-gray-200'>
                <DashboardNavbar />
                <div>
                    {pathname === '/admin/dashboard' && <DashboardContent />}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


export default Dashboard;