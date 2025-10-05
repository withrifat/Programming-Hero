import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadBooks = data.filter((book) => ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadBooks);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type == 'pages') {
      const sortedBooks = [...readList].sort((a, b) => b.totalPages - a.totalPages);
      setReadList(sortedBooks);
    }
    if (type == 'ratings') {
      const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedBooks);
    }
  };
  return (
    <div>
      <div className=" flex flex-col gap-2 items-center mx-auto container p-6">
        <h2 className="text-4xl font-extrabold p-3 text-center my-3">Books</h2>
        <details className="dropdown">
          <summary className="btn m-1">sort by: {sort ? sort : '0'}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort('pages')}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort('ratings')}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      {/* ------------------------------- */}
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Your Read Books {readList.length} </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Your Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
