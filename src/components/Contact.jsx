import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">📞 Contact Us</h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Email:</strong> contact@example.com
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition transform hover:scale-105">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
