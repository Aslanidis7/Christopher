import React, { useEffect, useState } from 'react';

const Home = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 text-center">Welcome to George Nikolaos Brick Factory</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We are a leading manufacturer of high-quality bricks in Ethiopia, serving the construction industry for over a century.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Founded in the early 19th century, George Nikolaos Brick Factory has been at the forefront of Ethiopia's industrialization. Our commitment to quality and innovation has made us a trusted name in the industry.
        </p>
      </div>
    </div>
  );
};

export default Home;
