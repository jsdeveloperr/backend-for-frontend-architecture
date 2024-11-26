import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RecipeDetailPage from '@/pages/RecipeDetailPage';
import ErrorPage from '@/pages/ErrorPage';
import { PrivateRoute, PublicRoute } from './RouteGuards';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/recipes/:id" element={<RecipeDetailPage />} />
                </Route>

                {/* Catch-all route */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
