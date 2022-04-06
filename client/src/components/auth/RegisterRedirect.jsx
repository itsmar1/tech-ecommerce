import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const LoginRedirect = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        user ? <Navigate to='/products' replace /> : <Outlet />
    );

};


export default LoginRedirect;