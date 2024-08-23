import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="h-screen flex flex-col ">
       <NavigationBarComponent />
       <div className="absolute top-0 -z-10 h-full w-full bg-cream-100">
          <div className="absolute top-1/2 left-1/2 h-[900px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px] transform rotate-[45deg]"></div>
      </div>

       <div className="flex flex-1 justify-center items-center">
          <div className="text-center">
            <p className="text-8xl font-bold text-darkgreen-100 font-rubik">
              hi, i'm natan
            </p>
            <p className="text-4xl font-bold text-darkgreen-100 font-rubik">
              current student at rhul
            </p>
          </div>
       </div>
    </main>
  );
};
