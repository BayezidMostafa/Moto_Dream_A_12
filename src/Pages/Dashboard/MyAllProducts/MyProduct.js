import { Avatar } from '@material-tailwind/react';
import React from 'react';

const MyProduct = ({ myProduct }) => {
    const { picture, name, re_sell_price, product_status } = myProduct;
    return (
        <div className='bg-teal-100 rounded-2xl flex items-center'>
            <div className='md:flex items-center'>
                <Avatar src={picture} alt="avatar" size="xxl" />
                <div className='ml-5'>
                    <p className='md:text-xl font-bold mb-3'>{name}</p>
                    <p>Price ${re_sell_price}</p>
                </div>
            </div>
            <div>
                <p>Status : {product_status}</p>
            </div>
        </div>
    );
};

export default MyProduct;