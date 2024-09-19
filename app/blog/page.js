import React from 'react';
import { portfolioData } from '@/utils/data/portfoliodata';

const Portfolio = () => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center my-5">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            My Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {portfolioData.map((item, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a href={item.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                See Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
