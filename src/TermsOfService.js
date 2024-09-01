import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Terms of Service</h1>
      <div className="bg-gray-900 shadow-md rounded-lg p-6">
        <p className="mb-4 text-gray-300">
          By using this application, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Use of Application</h2>
        <p className="mb-4 text-gray-300">
          This app is provided for your personal, non-commercial use only. You agree not to use the app for any illegal or unauthorized purpose.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Account Security</h2>
        <p className="mb-4 text-gray-300">
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-white">Termination</h2>
        <p className="text-gray-300">
          We reserve the right to terminate your access to the application at any time without notice, for conduct that we believe violates these terms or is harmful to other users of the app.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
