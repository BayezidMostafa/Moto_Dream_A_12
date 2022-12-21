import React from 'react';

const Review = () => {
    return (
        <div className='mb-10'>
            <div>
                <p style={{ textShadow: "0 0 3px teal" }} className='text-3xl text-center font-bold mb-10 dark:text-gray-300'>Here some reviews from our buyers</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="container flex flex-col w-full shadow hover:shadow-lg duration-300 rounded-xl max-w-lg p-6 mx-auto divide-y bg-gray-100 dark:bg-teal-400 dark:text-gray-200">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/bmrLyZg/photo-1597223557154-721c1cecc4b0.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs">7 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <span className="text-xl font-bold">5.0</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm">
                        <p><span className='text-xl'>Excellent </span><br />
                            Exactly what I ordered, arrived within a week and I live in Australia. Will use again for hard to get products here. Notably though, it was cheaper to order it through ChromeBurner than locally

                        </p>
                        <p className='font-semibold'>Date of experience: November 20, 2022</p>
                    </div>
                </div>
                <div className="container flex flex-col w-full shadow hover:shadow-lg duration-300 max-w-lg p-6 mx-auto divide-y rounded-md  bg-gray-100 dark:bg-teal-400 dark:text-gray-200">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/D4tgqc3/istockphoto-1264106963-170667a.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs">5 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <span className="text-xl font-bold">4.2</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm">
                        <p><span className='text-xl'>Great pricing n customer service </span><br />
                        Best pricing option across all equivalent sites. Messed up delivery and payment address at check out but then the customer service was excellent in having it corrected with FedEx. Overall highly recommended.

                        </p>
                        <p className='font-semibold'>Date of experience: November 22, 2022</p>
                    </div>
                </div>
                <div className="container flex flex-col w-full shadow hover:shadow-lg duration-300 max-w-lg p-6 mx-auto divide-y rounded-md  bg-gray-100 dark:bg-teal-400 dark:text-gray-200">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/XzDHyvd/photo-1554151228-14d9def656e4.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs">1 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <span className="text-xl font-bold">4.8</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm">
                        <p><span className='text-xl'>Highly Recommended </span><br />
                        Great motorcycle shop. I bought about 5 motorcycles from here and I'm still looking for updates from this shop. Their sellers are trusted and the management system is quite good. Recommended
                        </p>
                        <p className='font-semibold'>Date of experience: November 25, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;