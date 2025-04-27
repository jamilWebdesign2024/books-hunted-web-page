import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../../Utilities/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId=parseInt(id)
    const data = useLoaderData();
    
    const singleBook = data.find(book=>book.bookId === bookId)
    
    const {bookName, image, author, review, totalPages,
        rating, category, publisher, yearOfPublishing
    }=singleBook;

    const handleMarkAsRead = id =>{
        addToStoredDB(id);
    }

    return (
        <div>
           <div className='flex items-center justify-between gap-7 text-black mb-10'>
                <div>
                    <img src={image} alt=""  className='w-8/12'/>
                </div>
                <div className='w-8/12 space-y-2'>
                    <h4>{bookName}</h4>
                    <p><small>By: {author}</small></p>
                    <div className='border-t-2 border-gray-200'></div>
                    <p>{category}</p>
                    <div className='border-t-2 border-gray-200'></div>
                    <p><span className='font-bold'>Review:</span> {review}</p>
                    <div className='border-t-2 border-gray-200'></div>
                    <p><small>Number of pages: {totalPages}</small></p>
                    <p><small>Publisher: {publisher}</small></p>
                    <p><small>Year of Publishing {yearOfPublishing}</small></p>
                    <p><small>Rating: {rating}</small></p>
                    <div className='flex gap-5'>
                        <button onClick={()=>handleMarkAsRead(id)} className='px-4 py-1 border-black border-1 rounded-lg'>Read</button>
                        <button className='bg-cyan-600 text-white px-5 py-3'>Wishlist</button>
                    </div>
                </div>
           </div>
           
        </div>
    );
};

export default BookDetails;


