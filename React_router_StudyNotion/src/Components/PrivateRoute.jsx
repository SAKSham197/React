import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) => {

    const navigate=useNavigate()
    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute