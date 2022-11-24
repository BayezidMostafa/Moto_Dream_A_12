import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-[71.2vh] flex justify-center items-center'>
            <MoonLoader color="#008080" />
        </div>
    );
};

export default Loading;