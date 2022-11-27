import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const [admin, adminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || adminLoading) {
        return <div className='min-w-[60vh] flex justify-center items-center'><Loading/></div>
    }
    if (admin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default AdminRoute;