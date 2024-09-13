import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Contact Us Title */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">We'd love to hear from you! Get in touch with us.</p>
      </div>

      {/* Contact Details and Form Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@ecommerce.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 E-Commerce Street, City, Country
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091843!2d144.95373531531648!3d-37.81627917975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a3d56b51bb0e!2sGoogle!5e0!3m2!1sen!2sus!4v1632793876312!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
