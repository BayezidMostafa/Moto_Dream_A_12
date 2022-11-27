import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProduct from './MyProduct';

const MyAllProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
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
                <p className='text-center text-xl font-bold mt-5'>You Have Total {myProducts.length} {
                        myProducts.length === 1 ? 'Items' : 'Item'
                    }
                </p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:w-3/4 mx-auto gap-4'>
                {
                    myProducts.map(myProduct => <MyProduct refetch={refetch} key={myProduct._id} myProduct={myProduct} />)
                }
            </div>
        </div>
    );
};

export default MyAllProducts;