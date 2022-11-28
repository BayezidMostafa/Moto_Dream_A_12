import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='inline'>
            <MoonLoader color="#008080" />
        </div>
    );
};

export default Loading;