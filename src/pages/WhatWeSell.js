import React, { useEffect, useState } from 'react';
import Bricks1 from '../images/Bricks1.jpg';
import Bricks2 from '../images/Bricks2.jpg';
import ClayCourtImage from '../images/Clay_court.jpeg';
import Bricks4 from '../images/Bricks4.jpg';
import Bricks5 from '../images/Bricks5.jpg';
import Brick6 from '../images/Brick6.jpg';

const ProductImage = ({ src, alt }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
      style={{ pointerEvents: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
    />
    <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500 flex items-center justify-center">
      <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {alt}
      </span>
    </div>
  </div>
);

const WhatWeSell = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent py-16 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 w-full max-w-6xl mx-auto transform transition-all duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold mb-8 text-blue-900 text-center">Our Products</h1>
          <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We offer a wide range of brick products suitable for various construction needs, as well as premium tennis red sand. Our products are known for their durability, aesthetic appeal, and consistent quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProductImage src={Bricks1} alt="Classic Red Bricks" />
            <ProductImage src={Bricks2} alt="Textured Facade Bricks" />
            <ProductImage src={ClayCourtImage} alt="Tennis Red Sand" />
            <ProductImage src={Bricks4} alt="Interlocking Bricks" />
            <ProductImage src={Bricks5} alt="Decorative Bricks" />
            <ProductImage src={Brick6} alt="Specialty Bricks" />
          </div>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Our tennis red sand is ideal for creating high-quality sports surfaces, particularly for tennis courts. It provides excellent playing conditions and is also suitable for various other construction applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeSell;
