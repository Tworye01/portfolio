// Home.jsx
import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden relative bg-cream-100">
      <div className="absolute top-1/2 left-1/2 h-96 w-4/5 md:h-[2000px] md:w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]">
      </div>
      <div className="flex flex-1 justify-center items-center z-10">
        <div className="text-left">
          <div className="inline-block">
            <p className="text-5xl sm:text-8xl md:text-9xl font-bold overflow-hidden whitespace-nowrap text-darkgreen-100 font-rubik animate-typingFirst border-r-4 border-r-darkgreen-100">
            hi, i'm natan
            </p>
          </div>
          <div className="h-16 sm:h-20 md:h-24 relative">
            <div className="inline-block absolute">
              <p className="sm:text-3xl md:text-4xl font-bold overflow-hidden whitespace-nowrap text-darkgreen-100 ml-1.5 font-rubik animate-typingSecond border-r-4 border-r-darkgreen-100">
              graduate student at rhul
              </p>
            </div>
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
