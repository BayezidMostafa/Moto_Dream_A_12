import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import SecondhandProducts from '../SecondhandProducts.js/SecondhandProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className=''>
                <div className='md:col-span-1'>
                    <AdvertisedItems />
                </div>
                <div className='md:col-span-2'>
                    <SecondhandProducts />
                </div>
            </div>
        </div>
    );
};

export default Home;