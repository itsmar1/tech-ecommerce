import React from 'react';


const Error = () => {
    return (
        <div className='h-screen w-full bg-secondary-200'>
            <div className='h-full flex flex-col justify-center items-center text-center my-auto mx-auto'>
                <h1 className='text-[11rem] text-primary tracking-widest font-extrabold'>404</h1>
                <h2 className='text-4xl font-semibold text-primary'>Ooops! Sorry, Page Not Found</h2>
            </div>
        </div>
    );
};


export default Error;