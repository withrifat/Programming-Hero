import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId) || {};

  const { bookName, author, image, rating, category, tags, yearOfPublishing, publisher, review, totalPages } =
    singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
    //  store with id
    //  where to store ?
    //  now local storage
    // array or collection of objects
    // if book already exist the show a alart
    //  if book not exist then push in the collection or array
    Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-green-100 rounded-2xl shadow-lg overflow-hidden">
        {/* Left side image */}
        <div className="md:w-2/5 w-full h-72 md:h-auto">
          <img src={image} alt={bookName} className="w-full h-full object-cover" />
        </div>

        {/* Right side details */}
        <div className="md:w-3/5 w-full p-6 flex flex-col justify-between space-y-4 transition-all duration-300">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">{bookName}</h1>
            <h2 className="text-xl md:text-2xl text-green-700 mt-2">Author: {author}</h2>

            <div className="mt-4 space-y-1 text-green-800">
              <p>
                <span className="font-semibold">Rating:</span> {rating}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Pages:</span> {totalPages}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {yearOfPublishing}
              </p>
              <p>
                <span className="font-semibold">Publisher:</span> {publisher}
              </p>
            </div>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 text-green-900">
              <h3 className="text-lg md:text-xl font-semibold mb-1">Review:</h3>
              <p>{review}</p>
            </div>
          </div>
          <div className=" flex flex-row justify-between items-center">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="mt-4 md:mt-6 border-1 border-gray-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-xl w-full md:w-1/3 transition-all"
            >
              Mark as Read
            </button>
            <button className="mt-4 md:mt-6 bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl w-full md:w-1/3 transition-all">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
