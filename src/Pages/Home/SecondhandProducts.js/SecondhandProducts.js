import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../../Components/Loading/Loading';

import CategoryCard from './CategoryCard';

const SecondhandProducts = () => {


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://a-12-server-side.vercel.app/category', {
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('moto-token')}`
                }
            });
            return res.data
        }
    })

    if (isLoading) {
        return <div className='min-h-[30vh] flex justify-center items-center'><Loading /></div>
    }
    return (
        <div className='my-10'>
            <p style={{textShadow:"0 0 3px teal"}} className='text-3xl text-center font-bold mb-10 dark:text-gray-300'>Select Your Category</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default SecondhandProducts;  