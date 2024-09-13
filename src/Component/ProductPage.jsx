import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main product page wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section: Product Image */}
        <div className="lg:col-span-1 flex justify-center lg:block">
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-full"
            src="https://via.placeholder.com/600"
            alt="Product"
          />
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {/* Thumbnail images */}
            <img className="w-12 h-12 md:w-16 md:h-16 object-cover border" src="https://via.placeholder.com/100" alt="Product Thumbnail 1" />
            <img className="w-12 h-12 md:w-16 md:h-16 object-cover border" src="https://via.placeholder.com/100" alt="Product Thumbnail 2" />
            <img className="w-12 h-12 md:w-16 md:h-16 object-cover border" src="https://via.placeholder.com/100" alt="Product Thumbnail 3" />
          </div>
        </div>

        {/* Middle Section: Product Information */}
        <div className="lg:col-span-2 space-y-4">
          {/* Product Title */}
          <h1 className="text-xl md:text-2xl font-semibold">Product Title Here</h1>

          {/* Product Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <p className="text-sm md:text-base">(1200 ratings & 450 reviews)</p>
          </div>

          {/* Product Price */}
          <div className="text-2xl md:text-3xl font-semibold text-red-600">
            ₹2,999 <span className="text-gray-500 line-through text-base md:text-lg">₹3,999</span>
          </div>
          <p className="text-green-600 font-semibold text-sm md:text-base">You save ₹1000 (25%)</p>

         

          {/* Product Description */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <p className="text-gray-700 text-sm md:text-base">
              This is a detailed description of the product that highlights its features, functionality, and usage. It explains the material, size, and specifications in a clear manner.
            </p>
          </div>

          {/* Add to Cart / Wishlist */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
              Add to Cart
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Additional Information</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-sm md:text-base">
          <p><strong>Brand:</strong> XYZ Brand</p>
          <p><strong>Dimensions:</strong> 15 x 10 x 5 cm</p>
          <p><strong>Weight:</strong> 500 grams</p>
          <p><strong>Material:</strong> Cotton</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
