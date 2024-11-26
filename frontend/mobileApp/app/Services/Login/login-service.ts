import axios from 'axios';
import { saveToken, getToken, removeToken } from '@/Utils/storage';

const API_BASE_URL = 'http://localhost:5000';

export const login = async (email: string, password: string): Promise<boolean> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        const { token } = response.data;

        saveToken('authToken', token);

        return true;
    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
};

export const logout = (): void => {
    try {
        removeToken('authToken');
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

export const getAuthToken = (): string | null => {
    try {
        return getToken('authToken');
    } catch (error) {
        console.error('Failed to retrieve auth token:', error);
        return null;
    }
};

export const isAuthenticated = (): boolean => {
    const token = getAuthToken();
    return token !== null;
};
