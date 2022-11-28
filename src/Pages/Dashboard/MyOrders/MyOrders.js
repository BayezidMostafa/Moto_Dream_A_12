import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import MyOrder from './MyOrder';

const MyOrders = () => {
    useTitle('My Orders')
    const { user } = useContext(AuthContext)

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axios.get(`https://a-12-server-side.vercel.app/myorders/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                }
            })
            return res.data
        }
    })

    return (
        <div>
            <div>
                <p style={{textShadow: '0 0 2px teal'}} className='text-xl font-bold text-center mt-8'>
                    {
                        orders.length === 0 ? 'Please Order At least 1 Product' : 'Please Proceed To Payment For Grab Your Product!'
                    }
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-4/5 ml-auto'>
                {
                    orders.map(order => <MyOrder refetch={refetch} key={order._id} order={order} />)
                }
            </div>
        </div>
    );
};

export default MyOrders;