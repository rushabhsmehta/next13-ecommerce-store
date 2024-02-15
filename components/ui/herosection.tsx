'use client'
import { useState } from 'react';
import styles from './Hero.module.css';
import { FaBus, FaHotel, FaBinoculars, FaPlane, FaStar } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import { useRouter } from 'next/navigation';

export default function HeroSection() {

  const router = useRouter(); // Initialize the useRouter hook

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const lowerCaseSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');

    router.push(`/locations/${lowerCaseSearchQuery}`); // Pass the search query as a parameter to the URL
    setSearchQuery('');
  };

  return (
    <div
      className={
        styles.heroBackground +
        ' h-screen flex flex-col justify-center text-white text-center relative'
      }
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-jump">
          Unleash Your Wanderlust
        </h1>
        <p className="text-lg md:text-2xl animate-slide-up">
          Embark on extraordinary adventures worldwide
        </p>
        <button className="mt-6 md:mt-8 bg-white text-blue-500 px-4 md:px-6 py-2 rounded-full font-bold text-md md:text-xl hover:bg-blue-500 hover:text-white transition duration-200 animate-scale-up">
          Start Your Journey
        </button>

        <form onSubmit={handleSearch} className="mt-8 mb-8">
          <input
            type="text"
            className="w-40 md:w-auto bg-black bg-opacity-80 rounded-md border-2 border-gray-600 py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="what's in your mind"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" className="text-white ml-2">
            <FiSearch className="text-white" />
          </button>
        </form>


        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 mt-6 md:mt-8">
          {/* Display 3 symbols in a row for mobile devices */}
          <div className="flex flex-col items-center bg-opacity-80 p-1 md:p-2 rounded-full">
            <FaBus className="text-3xl md:text-4xl text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-white">Transportation</span>
          </div>
          <div className="flex flex-col items-center bg-opacity-80 p-1 md:p-2 rounded-full">
            <FaHotel className="text-3xl md:text-4xl text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-white">Hotels</span>
          </div>
          <div className="flex flex-col items-center bg-opacity-80 p-1 md:p-2 rounded-full">
            <FaBinoculars className="text-3xl md:text-4xl text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-white">Sightseeing</span>
          </div>

          {/* Display 2 symbols below the 3 symbols for mobile devices */}
          <div className="col-span-3 md:hidden"></div>
          <div className="col-span-3 md:hidden"></div>
          <div className="flex flex-col items-center bg-opacity-80 p-1 md:p-2 rounded-full">
            <FaPlane className="text-3xl md:text-4xl text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-white">Flights</span>
          </div>
          <div className="flex flex-col items-center bg-opacity-80 p-1 md:p-2 rounded-full">
            <FaStar className="text-3xl md:text-4xl text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-white">5 Star Ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
