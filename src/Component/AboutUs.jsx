import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About <span className="text-blue-600">Us</span>
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          We are an e-commerce platform committed to providing the best products and services to our customers. 
          Our mission is to simplify shopping and deliver a great user experience, offering a wide range of 
          products that cater to different tastes and preferences.
        </p>
      </div>

      {/* Image Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="flex justify-center">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://via.placeholder.com/600x400"
            alt="Our Mission"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Mission
          </h3>
          <p className="mt-4 text-gray-600">
            Our mission is to provide top-quality products at competitive prices while delivering 
            excellent customer service. We strive to continuously innovate and bring our customers 
            a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h4>
          <p className="mt-2 text-gray-600">
            We value our customers and work tirelessly to meet and exceed their expectations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-800">Quality Products</h4>
          <p className="mt-2 text-gray-600">
            We offer only the best, ensuring that all our products are of the highest quality.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
          <p className="mt-2 text-gray-600">
            We are constantly evolving, bringing new ideas and solutions to make online shopping easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
