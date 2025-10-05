import React from "react";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 m-4 max-w-xl mx-auto">
      {/* Image Section */}
      <figure className="w-full h-64 md:h-72 overflow-hidden">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body p-6 space-y-3">
        <div className="flex flex-wrap justify-between items-start">
          <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
            {bookName}
          </h2>
          <span className="text-sm text-gray-500 font-medium">#{bookId}</span>
        </div>

        <p className="text-gray-600 font-medium">by {author}</p>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full border border-green-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Extra Info */}
        <div className="text-sm text-gray-600 space-y-1 mt-3">
          <p>
            <span className="font-medium text-gray-800">Category:</span> {category}
          </p>
          <p>
            <span className="font-medium text-gray-800">Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-medium text-gray-800">Rating:</span>{" "}
            ⭐ {rating}/5
          </p>
          <p>
            <span className="font-medium text-gray-800">Publisher:</span>{" "}
            {publisher}
          </p>
          <p>
            <span className="font-medium text-gray-800">Published:</span>{" "}
            {yearOfPublishing}
          </p>
        </div>

        {/* Action Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary px-6">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
