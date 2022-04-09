import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const LoginRedirect = () => {
    const { isAdmin } = useSelector((state) => state.auth);

    return (
        isAdmin ?  <Navigate to='/admin/dashboard' replace /> : <Outlet />
    );

};


export default LoginRedirect;