import React from 'react';
import { Link } from 'react-router-dom';



export const NavigationBarComponent = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10 font-rubik ">
      <div className="container mx-auto py-4 flex justify-center items-center">
        <div className="text-3xl space-x-12 font-bold flex rounded-full px-6 py-1">
          <Link to="/" className="text-darkgreen-100 hover:bg-darkgreen-100  hover:text-cream-100 p-3 shadow-md bg-cream-100 rounded-full transition-colors duration-300">home</Link>
          <Link to="/projects" className="text-darkgreen-100 hover:bg-darkgreen-100 hover:text-cream-100 p-3 shadow-md bg-cream-100  rounded-full transition-colors duration-300">projects</Link>
          <Link to="/contact" className="text-darkgreen-100 hover:bg-darkgreen-100 hover:text-cream-100 p-3 shadow-md bg-cream-100 rounded-full transition-colors duration-300">contact</Link>
        </div>
      </div>
    </nav>
  );
}