import React, { useEffect, useState } from 'react';
import nikolasImage from '../images/Nikolas.png';

const AnimatedFounderImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      <div className="w-64 h-64 mx-auto relative overflow-hidden rounded-full shadow-lg group">
        <img 
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
          style={{ pointerEvents: 'none' }}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className={`min-h-screen bg-transparent py-16 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-900 text-center">About George Nikolas Brick Factory</h1>
          <p className="text-2xl text-gray-700 mb-8 text-center italic">
            A Legacy of Craftsmanship, Innovation, and Industrialization
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Roots</h2>
          <p className="text-lg text-gray-700 mb-6">
            George Nikolas Brick Factory was founded in the early 19th century by visionary brothers Nicola Aslanidis and Vassilis Aslanidis. These Greek pioneers were among the first to introduce high-quality brick manufacturing to Ethiopia, and they played a crucial role in shaping the nation's infrastructure. Our factory, located on Ambo Road, Addis Ababa, has stood as a symbol of industrial excellence for over a century.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Historical Significance</h2>
          <p className="text-lg text-gray-700 mb-6">
            The factory has been pivotal in Ethiopia's growth, providing bricks for many of the country's most iconic buildings. From homes and schools to commercial and government structures, the legacy of George Nikolas Brick Factory is etched into the very fabric of Ethiopia's architecture.
          </p>

          <AnimatedFounderImage src={nikolasImage} alt="Nicola Aslanidis" />
          <p className="text-center text-gray-600 italic mb-8 mt-4">
            One of our founders, Nicola Aslanidis, was instrumental in establishing Ethiopia's brick industry.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">A Royal Visit</h2>
          <p className="text-lg text-gray-700 mb-6">
            In recognition of our contributions to Ethiopia's industrial growth, Emperor Haile Selassie honored the factory with not one, but two royal visits. His support was a testament to the factory's significance in the country's path toward modernization.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Sustainability and Innovation</h2>
          <p className="text-lg text-gray-700 mb-6">
            Today, we continue the tradition of excellence established by our founders, with a focus on sustainability and innovation. Our goal is to reduce environmental impact while maintaining the highest standards in brick production. By embracing new technologies, we ensure that our products are not only durable but also eco-friendly.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            Looking ahead, George Nikolas Brick Factory aims to be a leader in Ethiopia's construction industry, contributing to the nation's development while staying true to our commitment to quality and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
