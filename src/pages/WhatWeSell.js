import React, { useEffect, useState } from 'react';

const WhatWeSell = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900 text-center">Our Products</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We offer a wide range of brick products suitable for various construction needs. Our bricks are known for their durability, aesthetic appeal, and consistent quality.
        </p>
        <p className="text-lg text-gray-700 text-center">
          We also supply tennis red sand, ideal for creating high-quality sports surfaces and other construction applications.
        </p>
      </div>
    </div>
  );
};

export default WhatWeSell;
