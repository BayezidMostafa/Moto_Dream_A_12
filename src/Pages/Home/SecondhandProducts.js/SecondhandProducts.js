import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const SecondhandProducts = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/category')
        .then(res => res.data)
        .then(data => {
            setCategories(data);
        })
    }, [])
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