import React from 'react';
import { AuthProvider } from './app/Context/AuthContext';
import AppNavigator from './app/Navigation/AppNavigator';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
};

export default App;
