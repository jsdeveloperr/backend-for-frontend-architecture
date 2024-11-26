import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { login, logout, isAuthenticated, getAuthToken } from '@/Services/Login/login-service';
import axios from 'axios';

type AuthContextType = {
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuthenticated());
    const [token, setToken] = useState<string | null>(getAuthToken());

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    const handleLogin = async (email: string, password: string): Promise<boolean> => {
        const success = await login(email, password);
        if (success) {
            setToken(getAuthToken());
            setIsLoggedIn(true);
        }
        return success;
    };

    const handleLogout = () => {
        logout();
        setToken(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login: handleLogin,
                logout: handleLogout,
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
