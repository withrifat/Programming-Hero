import React from 'react';
import Book from '../Books/Book';

const Books = ({data}) => {

    
    return (
        <div>
            <h2 className="text-4xl font-extrabold p-3 text-center my-3">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map(singleBook => <Book key={singleBook.id} singleBook={singleBook}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;