import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      {/* Privacy Policy Header */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="mt-2 text-gray-600">Your privacy is important to us. This policy explains how we handle and use your data.</p>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 lg:px-20">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. The data collected includes:
          </p>
          <ul className="list-disc ml-5 mb-6 text-gray-700 space-y-2">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Payment information (credit card details, billing address, etc.)</li>
            <li>Browser cookies and usage data</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            The information we collect is used in the following ways:
          </p>
          <ul className="list-disc ml-5 mb-6 text-gray-700 space-y-2">
            <li>To personalize your experience on our site</li>
            <li>To process transactions and manage your orders</li>
            <li>To send periodic emails regarding your order or other products and services</li>
            <li>To improve our website through feedback and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
          <p className="text-gray-700 mb-6">
            We implement a variety of security measures to ensure the safety of your personal information when you enter, submit, or access your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p className="text-gray-700 mb-6">
            Our site may use cookies to enhance user experience. Cookies are small files placed on your computer that help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            We may share your information with third-party service providers to help us operate our website and fulfill your orders. These parties are obligated to keep your information confidential.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to update or change our privacy policy at any time. You should check this page periodically for any changes. Your continued use of the service after we post any modifications to the privacy policy on this page will constitute your acknowledgment of the modifications.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> privacy@ecommerce.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (800) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
