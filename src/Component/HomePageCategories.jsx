import React from 'react';


const categories = [
  {
    name: 'OVERSIZED T-SHIRTS',
    gender: 'MEN',
    image: 'https://img.freepik.com/premium-photo/white-t-shirt-with-fish-it-is-hanging-hanger_1270664-1119.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    name: 'OVERSIZED T-SHIRTS',
    gender: 'WOMEN',
    image: 'https://img.freepik.com/premium-photo/shirt-with-picture-man-it-that-says-fisherman_1270664-1101.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    name: 'HOODIES',
    gender: 'MEN',
    image: 'https://img.freepik.com/premium-photo/shirt-with-fish-it-that-says-fish-it_1270664-1103.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    name: 'HOODIES',
    gender: 'WOMEN',
    image: 'https://img.freepik.com/premium-photo/white-color-blank-hoodie-sweatshirt-long-sleeve_1024356-202.jpg?size=626&ext=jpg&uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    name: 'SWEATSHIRTS',
    gender: 'MEN',
    image: 'https://img.freepik.com/premium-photo/christmas-green-hoodie-mockup_776894-66476.jpg?size=626&ext=jpg&uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
  {
    name: 'SWEATSHIRTS',
    gender: 'WOMEN',
    image: 'https://img.freepik.com/premium-photo/free-photo-trending-design-hoodie-mockup_1124573-50842.jpg?size=626&ext=jpg&uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', // Replace with actual image URL
  },
];

const HomePageCategories = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Circle Background */}
            <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden flex justify-center items-center">
              {/* Image Fully Inside Circle */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product and Category Name */}
            <h3 className="text-lg font-bold text-center">{category.name}</h3>

            {/* Gender Button */}
            <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-200">
              {category.gender}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageCategories;
