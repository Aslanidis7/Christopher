import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-lg mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We'd love to hear from you. Get in touch with us for any inquiries.
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-800"><span className="font-semibold">Address:</span> 123 Brick Lane, Addis Ababa, Ethiopia</p>
          <p className="text-lg text-gray-800"><span className="font-semibold">Phone:</span> +251 123 456 789</p>
          <p className="text-lg text-gray-800"><span className="font-semibold">Email:</span> info@georgenikolas.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
