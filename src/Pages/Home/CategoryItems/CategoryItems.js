import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        <div className='min-h-[70vh] flex justify-center items-center'>
            <Loading />
        </div>
    }
    const products = useLoaderData()
    return (
        <div className='my-10'>
            {
                products?.map(product => <CategoryItem key={product._id} product={product} />)
            }
        </div>
    );
};

export default CategoryItems;

// const time = new Date().toLocaleString()
    // console.log(time);