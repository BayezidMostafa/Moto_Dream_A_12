import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const AdvertisedItems = () => {

    const { data: advertisedData = [], isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await axios.get(`https://a-12-server-side.vercel.app/advertised`)
            return res.data
        }

    })
    console.log(advertisedData);



    return (
        <div className='my-24 w-2/3 rounded-xl mx-auto'>
            {
                advertisedData.length !== 0 &&
                <>
                    <div className='text-center mb-9'>
                        <span style={{textShadow:'0 0 3px teal'}} className='text-3xl font-bold'>Trending Right Now</span>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {
                            advertisedData.map(data => <SwiperSlide className='rounded-xl' key={data._id}><Link className='w-full' to={`/category/${data.category_name}`}><img className='rounded-xl' src={data.picture} alt="" /></Link></SwiperSlide>)
                        }
                    </Swiper>
                </>

            }
        </div>
    );
};

export default AdvertisedItems;
// https://a-12-server-side.vercel.app/category/${params.category_name}