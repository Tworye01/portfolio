import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavigationBarComponent = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-transparent w-full fixed z-10 font-rubik">
      <div className="container mx-auto py-4 flex justify-center items-center">
        <div className="font-bold flex space-x-6 md:space-x-12">
          <Link
            to="/"
            className={`text-darkgreen-100 text-lg md:text-3xl p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300 ${
              isActive('/') ? 'text-cream-100 bg-darkgreen-100 ' : 'hover:bg-darkgreen-100 hover:text-cream-100'
            }`}
          >
            home
          </Link>
          <Link
            to="/projects"
            className={`text-darkgreen-100 text-lg md:text-3xl p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300 ${
              isActive('/projects') ? 'bg-darkgreen-100 text-cream-100' : 'hover:bg-darkgreen-100 hover:text-cream-100'
            }`}
          >
            projects
          </Link>
          <Link
            to="/contact"
            className={`text-darkgreen-100 text-lg md:text-3xl p-3 md:p-3 shadow-md bg-cream-100 rounded-full border-4 border-darkgreen-100 transition-colors duration-300 ${
              isActive('/contact') ? 'bg-darkgreen-100 text-cream-100' : 'hover:bg-darkgreen-100 hover:text-cream-100'
            }`}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
