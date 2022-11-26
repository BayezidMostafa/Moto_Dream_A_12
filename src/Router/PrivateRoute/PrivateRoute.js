import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='min-w-[60vh] flex justify-center items-center'><Loading/></div>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoute;