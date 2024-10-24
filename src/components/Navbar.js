import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import backgroundImage from '../images/Background.png';

const Navbar = () => {
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.6)'
        }}
      />
      <nav className="sticky top-0 bg-blue-900 bg-opacity-80 shadow-lg z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative group mb-4">
              <img 
                src={logo} 
                alt="George Nikolaos Bricks Factory Logo" 
                className="h-20 w-auto transition-transform duration-300 transform group-hover:scale-110 filter drop-shadow-lg"
                style={{ pointerEvents: 'none' }}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="text-white text-3xl font-bold text-center font-serif tracking-wide">
              George Nikolaos Bricks Factory
            </div>
          </div>
          <ul className="flex justify-center space-x-8 text-white text-lg font-semibold font-serif">
            {['Home', 'What We Sell', 'About', 'Contact'].map((item) => (
              <li key={item} className="relative group">
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white transition-all duration-300 hover:text-gray-300 py-2 px-4 rounded-lg hover:bg-blue-700 hover:bg-opacity-50"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
