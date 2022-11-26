import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../../Components/Loading/Loading';

import CategoryCard from './CategoryCard';

const SecondhandProducts = () => {


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/category', {
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
            <p>Product Category: {categories.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default SecondhandProducts;  