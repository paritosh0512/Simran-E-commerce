import React, { useState } from "react";

const products = [
  {
    id: 1,
    category: "Nightwear",
    title: "Green Checkered Rose Nightwear",
    price: "₹2,339",
    originalPrice: "₹3,599",
    imgUrl: "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17550.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid", // Update the image URL
  },
  {
    id: 2,
    category: "Nightwear",
    title: "Pink Checkered Rose Nightwear",
    price: "₹2,339",
    originalPrice: "₹3,599",
    imgUrl: "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid",
  },
  {
    id: 3,
    category: "Nightwear",
    title: "Sky Blue Nightwear with Lace Detail",
    price: "₹2,599",
    originalPrice: "₹3,799",
    imgUrl: "https://img.freepik.com/free-photo/stylish-woman-summer-fashion-trend-dress-posing-red_285396-799.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid",
  },
  {
    id: 4,
    category: "Co-ords",
    title: "Black & White Checkered Pyjama Set",
    price: "₹2,599",
    originalPrice: "₹3,799",
    imgUrl: "https://img.freepik.com/free-photo/close-up-beauty-portrait-perfect-blond-woman-with-full-lips-natural-make-up-posing-amazing-luxury-red-dress-with-sequins-wide-sleeves-hands-near-face_273443-1716.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid",
  },
  {
    id: 5,
    category: "Co-ords",
    title: "Black & White Checkered Pyjama Set",
    price: "₹2,599",
    originalPrice: "₹3,799",
    imgUrl: "https://img.freepik.com/premium-psd/indian-fashion-textile-printed-apparel-mockup-psd-template_676152-5015.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid",
  },
  {
    id: 6,
    category: "Dresses",
    title: "Black & White Checkered Pyjama Set",
    price: "₹2,599",
    originalPrice: "₹3,799",
    imgUrl: "https://img.freepik.com/free-photo/dark-haired-good-humored-girl-relaxed-posing-red-wall-woman-bright-summer-outfit-smiling_197531-14339.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid",
  },
  // Add more products for dresses, etc.
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("Nightwear");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="container mx-auto p-4">
      {/* View All Button */}
      <div className="flex justify-center mb-6">
        <button className="px-4 py-2 bg-black text-white rounded-lg">View All</button>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${selectedCategory === "Nightwear" ? "text-black" : "text-gray-500"}`}
          onClick={() => setSelectedCategory("Nightwear")}
        >
          Nightwear
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === "Dresses" ? "text-black" : "text-gray-500"}`}
          onClick={() => setSelectedCategory("Dresses")}
        >
          Dresses
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === "Co-ords" ? "text-black" : "text-gray-500"}`}
          onClick={() => setSelectedCategory("Co-ords")}
        >
          Co-ords
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.imgUrl}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-red-500">{product.price}</p>
            <p className="line-through text-gray-400">{product.originalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
