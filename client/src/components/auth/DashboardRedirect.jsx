import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const LoginRedirect = () => {
    const { isAdmin } = useSelector((state) => state.auth);

    return (
        isAdmin ?  <Outlet /> : <Navigate to='/' replace />
    );

};


export default LoginRedirect;