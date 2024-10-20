import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

export default function Contacts() {
  return (
    <main className="h-screen flex flex-col items-center bg-cream-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-15 blur-[80px] transform z-0"></div>
      
      <div className="flex flex-col shadow-md bg-cream-100 rounded-lg p-8 sm:p-14 items-center text-center mt-32 sm:mt-64 font-rubik z-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-darkgreen-100 mb-6 sm:mb-8">Get in Touch</h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-lg">
          It would be cool to hear from you, feel free to reach out using one of the methods below.
        </p>

        <div className="flex space-x-4 sm:space-x-8">
          <a href="https://github.com/Tworye01" target="_blank" rel="noopener noreferrer" className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/natan-wojcik/" target="_blank" rel="noopener noreferrer" className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
            <FaLinkedin />
          </a>
          <a href="mailto:natanwojcik15@gmail.com" className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <NavigationBarComponent />
    </main>
  );
}
