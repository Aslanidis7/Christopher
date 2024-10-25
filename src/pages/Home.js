import React, { useEffect, useState } from 'react';
import firstVisitImage from '../images/1st_visit.JPG';

const Home = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 text-center">Welcome to George Nikolaos Brick Factory</h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={firstVisitImage} 
                alt="First Visit to George Nikolaos Brick Factory" 
                className="w-full h-auto transition-transform duration-500 transform group-hover:scale-110"
                style={{ pointerEvents: 'none' }}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              We are a leading manufacturer of high-quality bricks in Ethiopia, serving the construction industry for over a century.
            </p>
            <p className="text-lg text-gray-700">
              Founded in the early 19th century, George Nikolaos Brick Factory has been at the forefront of Ethiopia's industrialization. Our commitment to quality and innovation has made us a trusted name in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
