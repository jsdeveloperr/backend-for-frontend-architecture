import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-700"
  >
    {children}
  </button>
);

export default Button;
