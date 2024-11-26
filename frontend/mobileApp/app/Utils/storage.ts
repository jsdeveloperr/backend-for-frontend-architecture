import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const saveToken = (key: string, value: string) => {
    try {
        storage.set(key, value);
    } catch (error) {
        console.error('Failed to save token:', error);
    }
};

export const getToken = (key: string): string | null => {
    try {
        return storage.getString(key) || null;
    } catch (error) {
        console.error('Failed to get token:', error);
        return null;
    }
};

export const removeToken = (key: string) => {
    try {
        storage.delete(key);
    } catch (error) {
        console.error('Failed to delete token:', error);
    }
};
