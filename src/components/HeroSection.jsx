import React from 'react';

const HeroSection = ({ openModal }) => {
  return (
    <div className="hero bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">Refer & Earn</h1>
      <p className="text-xl mb-8 max-w-lg mx-auto">
        Refer a friend and earn rewards! Join us in spreading the word about our amazing courses.
      </p>
      <button 
        className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
        onClick={openModal}
      >
        Refer Now
      </button>
    </div>
  );
};

export default HeroSection;
