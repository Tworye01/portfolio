import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="fixed inset-0 h-screen flex">
       <div className="absolute top-0 -z-10 h-full w-full bg-cream-100">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px] transform rotate-[20deg]"></div>
      </div>

       <div className="flex flex-1 justify-center items-center">
          <div className="text-center">
            <p className="text-8xl font-bold text-darkgreen-100 drop-shadow-2xl font-rubik">
              hi, i'm natan
            </p>
            <p className="text-4xl font-bold text-darkgreen-100 drop-shadow-2xls font-rubik">
              current student at rhul
            </p>
          </div>
       </div>
       <NavigationBarComponent />
    </main>
  );
};
