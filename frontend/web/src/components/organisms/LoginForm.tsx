import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LabeledInput from "@/components/molecules/LabeledInput";
import axios from 'axios';

type LoginFormProps = {}; // You can define props if needed

const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = useState('jane@example.com');
    const [password, setPassword] = useState('password1');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });

            const { token } = response.data;

            if (token) {
                localStorage.setItem('token', token);
                login();
                navigate('/');
            } else {
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid credentials');
        }
    };

  return (
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <LabeledInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
  );
};

export default LoginForm;