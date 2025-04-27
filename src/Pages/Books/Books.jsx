import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks]=useState([]);

    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
            
    //     })
    // }, [])

    // const booksPromise = fetch('./booksData.json')
    // .then(res=>res.json())

    return (
        <div className='text-black mb-10'>
            <h3 className='text-5xl text-center p-6 font-bold'>hello ami</h3>
            <Suspense fallback={<h3>Books Loading......</h3>}>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full mx-auto p-5 lg:p-0'>
                        {
                            data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                        }
                  </div>
            </Suspense>
        </div>
    );
};

export default Books;