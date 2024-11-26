
import React from 'react';
import LoginForm from '@/components/organisms/LoginForm';

type AuthTemplateProps = {}; // You can define props if needed

const AuthTemplate = (props: AuthTemplateProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Italian Restaurant</h2>
        <LoginForm />
        <footer className="text-center text-sm text-gray-500">© 2025 Backend for Frontend (BFF)</footer>
      </div>
    </div>
  );
};

export default AuthTemplate;