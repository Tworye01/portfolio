import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col overflow-y-auto">
      <div className="fixed top-0 left-0 h-full w-full bg-cream-100 z-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[90%] md:h-[1000px] md:w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]"></div>
      </div>

      <div className="flex flex-1 justify-center items-center z-10 pt-32">
        <div className="text-center">
          <p className="text-5xl sm:text-8xl md:text-9xl font-bold text-darkgreen-100 drop-shadow-2xl font-rubik">
            hi, i'm natan
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkgreen-100 drop-shadow-2xl font-rubik p-2">
            current student at rhul
          </p>
        </div>
      </div>

      <div className="flex-grow" />

      <NavigationBarComponent />
    </main>
  );
}
