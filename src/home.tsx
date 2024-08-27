import React from 'react';
import { NavigationBarComponent } from './components/navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

export default function Home() {
  return (
    <main className="fixed inset-0 h-screen flex">
      
      <div className="absolute top-0 -z-10 h-full w-full bg-cream-100">
        <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]"></div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="text-center">
          <p className="text-9xl font-bold text-darkgreen-100 drop-shadow-2xl font-rubik">
            hi, i'm natan
          </p>
          <p className="text-5xl font-bold text-darkgreen-100 drop-shadow-2xl font-rubik p-2">
            current student at rhul
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <a href="https://github.com/Tworye01" target="_blank" className="text-darkgreen-100 hover:text-darkgreen-200 text-6xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/natan-wojcik/" target="_blank" className="text-darkgreen-100 hover:text-darkgreen-200 text-6xl">
          <FaLinkedin />
        </a>
        <a href="mailto:natanwojcik15@gmail.com" className="text-darkgreen-100 hover:text-darkgreen-200 text-6xl">
          <FaEnvelope />
        </a>
      </div>

      <NavigationBarComponent />
    </main>
  );
}

