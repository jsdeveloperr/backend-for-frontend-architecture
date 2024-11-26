import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// PrivateRoute
export const PrivateRoute: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// PublicRoute
export const PublicRoute: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
