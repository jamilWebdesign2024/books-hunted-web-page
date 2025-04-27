import React from 'react';

import bookimage from '../../assets/books2.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 w-full mx-auto'>
            <div>
                <h1 >Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img className='' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;