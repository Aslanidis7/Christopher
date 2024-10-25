import React, { useEffect, useState } from 'react';
import randomImage from '../images/Random.JPG';

const Contact = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const hours = [
    { day: 'Monday', time: '8:30 AM–5 PM' },
    { day: 'Tuesday', time: '8:30 AM–5 PM' },
    { day: 'Wednesday', time: '8:30 AM–5 PM' },
    { day: 'Thursday', time: '8:30 AM–5 PM' },
    { day: 'Friday', time: '8:30 AM–5 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center py-8 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative bg-white bg-opacity-90 shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-xl mx-auto transform transition-all duration-500 hover:scale-105 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${randomImage})`,
            filter: 'blur(5px)',
            pointerEvents: 'none'
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-blue-900 text-center">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center">
            We'd love to hear from you. Get in touch with us for any inquiries.
          </p>
          <div className="space-y-4 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-800"><span className="font-semibold">Address:</span> Ambo Rd, Addis Ababa, Ethiopia</p>
          </div>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-900">Business Hours</h2>
            <div className="grid grid-cols-2 gap-2">
              {hours.map(({ day, time }) => (
                <React.Fragment key={day}>
                  <p className="text-gray-800 font-semibold">{day}</p>
                  <p className="text-gray-700">{time}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
