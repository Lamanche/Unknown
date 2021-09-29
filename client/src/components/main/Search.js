import React from "react";

const Search = () => {
  return (
    <div className='w-72'>
      <input
        type='text'
        placeholder='search...'
        className='w-full p-4 rounded-bl-2xl rounded-tr-2xl bg-gray-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 focus:outline-none transition-shadow duration-100 ease-in-out hover:shadow'
      />
    </div>
  );
};

export default Search;
