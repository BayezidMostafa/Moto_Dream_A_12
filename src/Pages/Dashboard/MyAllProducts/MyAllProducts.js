import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProduct from './MyProduct';

const MyAllProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/myProducts/${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                }
            })
            return res.data
        }
    })
    console.log(myProducts);
    return (
        <div>
            <div>
                <p className='text-center'>You Have Total {myProducts.length} {
                        myProducts.length === 1 ? 'Items' : 'Item'
                    }
                </p>
            </div>
            <div className='flex justify-center flex-col gap-5 md:max-w-[600px] mx-auto'>
                {
                    myProducts.map(myProduct => <MyProduct key={myProduct._id} myProduct={myProduct} />)
                }
            </div>
        </div>
    );
};

export default MyAllProducts;