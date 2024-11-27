import React from 'react';

const Banner = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-12">
      {/* Left Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Next Adventure Awaits
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Step into a world of endless possibilities. From gripping tales to enlightening reads, explore our collection and find your next obsession.
        </p>
       
      </div>

      {/* Right Accent Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-white to-blue-200 rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default Banner;
