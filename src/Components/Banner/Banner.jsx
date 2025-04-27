import React from 'react';

import bookimage from '../assets/'

const Banner = () => {
    return (
        <div>
            <div>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nam ut dolor sint aut. Similique quae neque qui. Eum totam unde libero atque? Eligendi ea, iste delectus voluptates rerum ut.</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;