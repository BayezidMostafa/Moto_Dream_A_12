import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/myorders/${user?.email}`, {
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