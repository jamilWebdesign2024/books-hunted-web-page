import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    // const data = use(booksPromise);
    // console.log(data);

    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher, bookId}=singleBook;
    
    return (
        
          <Link to={`/bookDetails/${bookId}`}>
                    <div className="card bg-white p-5 shadow-sm rounded-lg">
                        <figure className=' bg-gray-100 rounded-lg'>
                            <img
                            src={image}
                            alt="Shoes" className='w-6/12 h-48 p-6 rounded-lg'/>
                        </figure>
                        <div className="card-body">
                            <div className='flex justify-center gap-10'>
                                        {
                                            tags.map(tag=><button>{tag}</button>)
                                        }
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="card-title">
                                {bookName} </h2>
                                <div className="badge badge-secondary">{yearOfPublishing}</div>
                            </div>
                            <p>Published By {publisher}</p>

                            <div className='border-t-2 border-dashed border-gray-200'>

                            </div>
                        
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
                            </div>
                        </div>
                    </div>
          </Link>
        
    );
};

export default Book;