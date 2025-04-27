import React from 'react';

import bookImage from '../../assets/books2.png'

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center p-16 w-full mx-auto bg-gray-200 mb-10 rounded-2xl'>
            <div className='w-6/12'>
                <h1 className='text-6xl font-bold mb-6 text-black'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='' src={bookImage} alt="" />
            </div>
        </div>
    );
};
        
export default Banner;