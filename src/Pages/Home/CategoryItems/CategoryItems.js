import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='my-10'>
            {
                products.map(product => <CategoryItem key={product._id} product={product} />)
            }
        </div>
    );
};

export default CategoryItems;

// const time = new Date().toLocaleString()
    // console.log(time);