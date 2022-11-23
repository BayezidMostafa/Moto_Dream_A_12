import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import SecondhandProducts from '../SecondhandProducts.js/SecondhandProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <SecondhandProducts />
                </div>
                <div className='col-span-1'>
                    <AdvertisedItems />
                </div>
            </div>
        </div>
    );
};

export default Home;