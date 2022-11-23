import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
            className="min-h-[50vh] mt-10 rounded-xl relative bg-[url(https://i.ibb.co/jRgkXCs/banner-cover.jpg)] bg-cover bg-center bg-no-repeat shadow-[#009688] shadow-md"
        >
            <div
                className="rounded-xl absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
            >
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl text-gray-100 font-extrabold sm:text-3xl md:text-4xl uppercase">
                        Let grab your Dream
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-100">
                        Everything looks better from the inside of a motorcycle helmet.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            className="block w-full rounded sm:w-auto"
                        >
                            <Button variant='gradient' color='amber'>Get Started</Button>
                        </Link>
                        <Link
                            className="block w-full rounded sm:w-auto"
                        >
                            <Button variant='gradient' color='amber'>Learn More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;