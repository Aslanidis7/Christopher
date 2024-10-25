import React, { useEffect, useState } from 'react';
import secondVisitImage from '../images/2nd_visit.JPG';
import nikolaosImage from '../images/Nikolaos.png';

const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={secondVisitImage} 
                alt="Second Visit to George Nikolaos Brick Factory" 
                className="w-full h-auto transition-transform duration-500 transform group-hover:scale-110"
                style={{ pointerEvents: 'none' }}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              Founded in the early 19th century, George Nikolaos Brick Factory has played a key role in Ethiopia's industrialization. We have been at the forefront of producing high-quality bricks for over a century.
            </p>
            <p className="text-lg text-gray-700">
              We continue to be a leader in the industry, providing high-quality products while committing to sustainability, community development, and innovation.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative group w-48 h-48 overflow-hidden rounded-full">
            <img 
              src={nikolaosImage} 
              alt="George Nikolaos" 
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              style={{ pointerEvents: 'none' }}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
