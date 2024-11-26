import React from 'react';

interface FormProps {
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
    return <form>{children}</form>;
};

export default Form;
