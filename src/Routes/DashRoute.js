import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// Used for shared loading screen
// import Loading from '../shared/Loading';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';

const DashRoute = ({ children }) => {
    const { user, loading, userDetails } = useAuth();
    if (loading) return (
        <div className="centered">
            <Loading></Loading>
        </div>
    );
    return (user?.providerId && userDetails.adminStatus)? <AdminDashboard></AdminDashboard> : (user?.providerId && !userDetails.adminStatus) ? children :<Navigate to="/join" />;
};

export default DashRoute;