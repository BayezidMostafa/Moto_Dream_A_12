import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaTripadvisor } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex justify-center flex-col items-center'>
                <FaTripadvisor className='text-8xl md:text-[150px] text-red-600 animate-bounce' />
                <p className='text-xl md:text-5xl mb-5 font-extrabold text-red-600'>Oops!</p>
                <p className='text-xl md:text-5xl mb-5 font-extrabold uppercase text-red-600'>looks like you are lost!</p>
                <p className='text-3xl md:text-8xl uppercase font-extrabold mb-5'>{error.status} {error.statusText}</p>
                <Link to='/'><Button variant='gradient' size='lg' color='teal' className='mt-5'>Go Back To Home Page</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;