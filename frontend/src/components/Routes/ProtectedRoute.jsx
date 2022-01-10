import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {isAuth, user} = useSelector((state) => state.auth);

    return !isAuth
        ? <Navigate to="/authenticate"/>
        : (
            isAuth && !user.activated
                ? <Navigate to="/activate"/>
                : children
        );
}

export default ProtectedRoute;
