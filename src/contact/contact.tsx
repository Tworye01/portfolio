import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 


export default function Contacts() {
  return (
    <main className="h-screen flex flex-col items-center bg-cream-100 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 h-[1000px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px] transform "></div>
    
      <div className="flex flex-col items-center text-center mt-64">
        <h1 className="text-4xl font-bold text-darkgreen-100 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-lg">
          I'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
        </p>

      
        <div className="mt-10 flex space-x-8">
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
      </div>

      <NavigationBarComponent />
    </main>
  );
}
