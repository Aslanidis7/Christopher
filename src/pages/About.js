import React, { useEffect, useState } from 'react';

const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent flex items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-900 text-center">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Founded in the early 19th century, George Nikolaos Brick Factory has played a key role in Ethiopia's industrialization. We have been at the forefront of producing high-quality bricks for over a century.
        </p>
        <p className="text-lg text-gray-700 text-center">
          We continue to be a leader in the industry, providing high-quality products while committing to sustainability, community development, and innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
