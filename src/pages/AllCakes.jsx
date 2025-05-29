import React, { useEffect } from 'react';
import { useCakeStore } from '../store/CakeStore';

const AllCakes = () => {
  const allCakes = useCakeStore((state) => state.cakes);
  const getCakesApi = useCakeStore((state) => state.getCakesApi);

  useEffect(() => {
    getCakesApi();
  }, []);

  if (!Array.isArray(allCakes)) {
    return (
      <p className="text-center mt-5 text-red-500">
        Failed to load cakes. Data is not in expected format.
      </p>
    );
  }

  if (allCakes.length === 0) {
    return (
      <p className="text-center mt-5 text-gray-700 dark:text-white">
        Loading cakes...
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5 px-4">
      {allCakes.map((cake) => (
        <div
          key={cake.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="p-4 rounded-t-lg w-full h-48 object-cover"
            src={cake.image}
            alt={cake.name}
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {cake.name}
            </h5>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${cake.price}
              </span>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCakes;
