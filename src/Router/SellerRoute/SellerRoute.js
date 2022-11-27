import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../Hooks/useSeller';



const SellerRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const [seller, sellerLoading] = useSeller(user?.email);
    const location = useLocation()

    if (loading || sellerLoading) {
        return <div className='min-w-[60vh] flex justify-center items-center'><Loading/></div>
    }
    if (seller) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default SellerRoute;