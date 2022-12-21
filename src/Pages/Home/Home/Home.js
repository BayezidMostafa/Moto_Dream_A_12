import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import { Contact } from '../Contact/Contact';
import Review from '../Review/Review';
import SecondhandProducts from '../SecondhandProducts.js/SecondhandProducts';

const Home = () => {
    useTitle('HOME')
    return (
        <div>
            <Banner />
            <div className=''>
                <div>
                    <AdvertisedItems />
                </div>
                <div>
                    <SecondhandProducts />
                </div>
                <div>
                    <Review/>
                </div>
                <div>
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default Home;