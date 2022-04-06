import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const LoginRedirect = () => {
    const { isAdmin, user } = useSelector((state) => state.auth);
    // const navigate = useNavigate();

    // if (isAdmin) {
    //     navigate('/admin/dashboard', { replace: true });
    // } else if (user) {
    //     navigate('/products', {replace: true});
    // } else {
    //     <Outlet />
    // }

    return (
        // isAdmin ? navigate('/admin/dashboard', { replace: true }) : <Outlet />
        isAdmin ? <Navigate to='/admin/dashboard' replace /> : user ? <Navigate to='/products' replace /> : <Outlet />
    );

};


export default LoginRedirect;