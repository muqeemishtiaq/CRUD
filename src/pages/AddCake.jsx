import React from 'react';

const AddCake = () => {
  return (
    <div className='flex justify-center items-center h-screen mt-2'>               
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-3 p-4">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
          Create a New Cake
        </h2>

        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="cakeName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input 
              type="text" 
              id="cakeName" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
              placeholder="Chocolate Delight" 
              required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="cakePrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input 
              type="number" 
              id="cakePrice" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
              required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="cakeImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
            <input 
              type="text" 
              id="cakeImage" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
              placeholder="https://example.com/cake.jpg" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>                              
    </div>
  );
};

export default AddCake;
