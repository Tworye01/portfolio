import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBarComponent = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10 font-rubik">
      <div className="container mx-auto py-4 flex justify-center items-center">
        <div className="font-bold flex space-x-6 md:space-x-12">
          <Link to="/" className="text-darkgreen-100 text-lg md:text-3xl hover:bg-darkgreen-100 hover:text-cream-100 p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300">
            home
          </Link>
          <Link to="/projects" className="text-darkgreen-100 text-lg md:text-3xl hover:bg-darkgreen-100 hover:text-cream-100 p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300">
            projects
          </Link>
          <Link to="/contact" className="text-darkgreen-100 text-lg md:text-3xl hover:bg-darkgreen-100 hover:text-cream-100 p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300">
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

