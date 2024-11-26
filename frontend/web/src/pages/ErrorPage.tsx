import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Go back to Home
            </a>
        </div>
    );
};

export default ErrorPage;
