import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Privacy Policy</h1>
      <div className="bg-gray-900 shadow-md rounded-lg p-6">
        <p className="mb-4 text-gray-300">
          Your privacy is important to us. This privacy statement explains the personal data our application processes, how we process it, and for what purposes.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Information We Collect</h2>
        <p className="mb-4 text-gray-300">
          We collect data to provide the best experience for our users. The data we collect includes information like name, email address, and any other details provided by you.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">How We Use Your Information</h2>
        <p className="mb-4 text-gray-300">
          The information we collect is used to personalize your experience, improve our application, and communicate with you about updates and features.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Your Consent</h2>
        <p className="text-gray-300">
          By using our site or app, you consent to our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
