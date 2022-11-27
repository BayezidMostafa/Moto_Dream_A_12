import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const products = useLoaderData()
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        <div className='min-h-[70vh] flex justify-center items-center'>
            <Loading />
        </div>
    }
    const filteredProducts = products.filter(product => product.product_status !== 'sold')
    console.log(filteredProducts);
    return (
        <div className='my-10'>
            {
                filteredProducts.map(product => <CategoryItem key={product._id} product={product} />)
            }
        </div>
    );
};

export default CategoryItems;

// const time = new Date().toLocaleString()
    // console.log(time);