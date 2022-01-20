import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const LoginRoute = ({ children }) => {
    const { user, loading} = useAuth();
    if (loading) return (
        <div className="centered">
            <img src="https://media0.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47ir7zwi5os6y7s4kc5ow4bglx9z035b0jn9m6uvor&rid=giphy.gif&ct=g" alt="Loading" />
        </div>
    );
    return (!user?.providerId) ? children :<Navigate to="/dash" />;
};

export default LoginRoute;