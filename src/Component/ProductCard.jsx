import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, price, oldPrice, discount }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* Discount Badge */}
        <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {discount}
        </span>
        {/* Image with Zoom Effect */}
        <div className="overflow-hidden rounded-lg">
         
          <img
            src={image}
            alt={title}
            className="transform transition-transform duration-500 hover:scale-105 w-full h-auto"
          />
        
        </div>
      </div>
      {/* Product Info */}
      <div className="text-center mt-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-red-500 font-bold text-lg">₹{price}</p>
        <p className="text-gray-400 line-through">₹{oldPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
