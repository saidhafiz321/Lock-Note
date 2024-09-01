import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>
      <div className="bg-gray-900 shadow-md rounded-lg p-6">
        <p className="text-lg mb-4 text-gray-300">
          For any inquiries, feedback, or support, please reach out to us through the following channels:
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Developer Information</h2>
            <p className="text-gray-400">Said Hafiz</p>
            <p className="text-gray-400">Tech Studio</p>
            <p className="text-gray-400">Phone: <a href="tel:081360917101" className="text-blue-400 hover:underline">0813-6091-7101</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
