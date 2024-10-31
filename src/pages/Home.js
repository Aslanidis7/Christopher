import React, { useEffect, useState } from 'react';
import firstVisitImage from '../images/1st_visit.JPG';
import secondVisitImage from '../images/2nd_visit.JPG';
import Footer from '../components/Footer';

const AnimatedImage = ({ src, alt, caption }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto transition-transform duration-700 transform group-hover:scale-110"
          style={{ pointerEvents: 'none' }}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <p className="absolute bottom-0 left-0 right-0 text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {caption}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent py-16 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-900 text-center">Welcome to George Nikolas Brick Factory</h1>
          <p className="text-xl text-gray-700 mb-8 text-center">
            We are a leading manufacturer of high-quality bricks in Ethiopia, serving the construction industry for over a century. With a legacy of excellence and a commitment to innovation, we pride ourselves on producing durable, aesthetically appealing bricks that meet the diverse needs of our clients.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Legacy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in the early 19th century, George Nikolas Brick Factory has been instrumental in Ethiopia's industrialization. Our factory, located on the historically significant Ambo Road in Addis Ababa, has been a cornerstone in the construction of homes, schools, and commercial buildings throughout Ethiopia. With over a century of experience, our factory is known for producing bricks that stand the test of time.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Products</h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer a wide range of brick products suitable for various construction needs, whether for residential homes, large-scale infrastructure projects, or commercial properties. Additionally, we supply premium tennis red sand, used for creating high-quality sports surfaces and other construction applications.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Commitment to Excellence</h2>
          <p className="text-lg text-gray-700 mb-8">
            At George Nikolas Brick Factory, we are dedicated to sustainable manufacturing practices. Our processes are designed to minimize waste and reduce our environmental footprint, ensuring that our legacy endures for future generations.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Historical Moments</h2>
          <p className="text-lg text-gray-700 mb-6">
            Throughout the years, George Nikolas Brick Factory has been a landmark for industrial progress in Ethiopia. Here are some key moments from our history:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AnimatedImage 
              src={firstVisitImage} 
              alt="Emperor Haile Selassie's first visit to George Nikolas Brick Factory" 
              caption="Haile Selassie's First Visit: During the opening of the first bricks factory."
            />
            <AnimatedImage 
              src={secondVisitImage} 
              alt="Haile Selassie's Second Visit" 
              caption="Haile Selassie's Second Visit: A second visit by Emperor Haile Selassie, signifying the factory's importance in Ethiopia's growth."
            />
          </div>

          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Key Facts</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Founded: Early 19th century</li>
              <li>Location: Ambo Road, Addis Ababa, Ethiopia</li>
              <li>Founders: Nicola Aslanidis & Vassilis Aslanidis</li>
              <li>Core Products: High-quality bricks, tennis red sand</li>
              <li>Notable Milestone: Two visits by Emperor Haile Selassie</li>
              <li>Sustainability Focus: Committed to eco-friendly manufacturing practices</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
