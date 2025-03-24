import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

export default function Contacts() {
  return (
    <main className="min-h-screen flex flex-col bg-cream-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[90%] md:h-[1000px] md:w-[1700px] 
        -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]">
      </div>

      <div className="flex-grow flex flex-col items-center">
        <div className="flex flex-col shadow-md bg-cream-100 rounded-lg p-8 sm:p-14 items-center 
          text-center mt-32 sm:mt-48 font-rubik z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-darkgreen-100 mb-6 sm:mb-8">Get in Touch</h1>
          <p className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-lg">
            It would be cool to hear from you, feel free to reach out using one of the methods below.
          </p>

          <div className="flex space-x-4 animate-pulse sm:space-x-8">
            <a href="https://github.com/Tworye01" target="_blank" rel="noopener noreferrer" 
              className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/natan-wojcik/" target="_blank" rel="noopener noreferrer" 
              className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
              <FaLinkedin />
            </a>
            <a href="mailto:natanwojcik15@gmail.com" 
              className="text-darkgreen-100 hover:text-darkgreen-200 text-5xl sm:text-7xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <NavigationBarComponent />

      <footer className="w-full text-left py-3 pl-12 text-white text bg-darkgreen-100 bg-opacity-50">
        © 2024-25 Natan Wojcik
      </footer>
    </main>
  );
}
