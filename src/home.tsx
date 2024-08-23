import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="h-screen flex flex-col ">
       <NavigationBarComponent />
       <div className="absolute top-0 -z-10 h-full w-full bg-cream-100"><div className="absolute bottom-auto left-auto top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-darkgreen-100 opacity-20 blur-[80px]"></div></div>
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
