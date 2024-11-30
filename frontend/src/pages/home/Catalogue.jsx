import React, { useState } from 'react';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["All", "Business", "Fiction", "Horror", "Adventure"];

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [rowsToShow, setRowsToShow] = useState(3);
  const [showAll, setShowAll] = useState(false); // State to track if all books are displayed

  const { data: books = [] } = useFetchAllBooksQuery();

  // Filter books based on category and search text
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory.toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const booksPerRow = 3;
  const itemsToShow = showAll ? filteredBooks.length : rowsToShow * booksPerRow;

  // Books to display based on current state
  const booksToDisplay = filteredBooks.slice(0, itemsToShow);

  // Handle "Load More" button
  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 3); // Add 3 more rows
  };

  // Handle "Load All" button
  const handleLoadAll = () => {
    setShowAll(true); // Display all books
  };

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Our Catalogue</h2>

      {/* Filters */}
      <div className='mb-8 flex items-center gap-4'>
        {/* Category dropdown */}
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search books..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none w-full md:w-1/3"
        />
      </div>

      {/* Grid of book cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {booksToDisplay.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {/* Buttons */}
      <div className='mt-8 flex justify-center gap-4'>
        {!showAll && itemsToShow < filteredBooks.length && (
          <>
            <button
              onClick={handleLoadMore}
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold'
            >
              Load More
            </button>
            <button
              onClick={handleLoadAll}
              className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold'
            >
              Load All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
