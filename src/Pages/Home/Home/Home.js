import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
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
                <div>
                    <Review/>
                </div>
            </div>
        </div>
    );
};

export default Home;