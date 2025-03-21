import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Shop = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="w-full h-52 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-full w-full rounded-lg hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{product.name}</h3>
            <p className="text-gray-700 text-lg mt-2 text-center font-medium">₹{product.price}</p>
            <button
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-5 rounded-lg font-semibold text-lg shadow-md hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
