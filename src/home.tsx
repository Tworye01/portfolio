import React from 'react';
import { NavigationBarComponent } from './components/navbar';

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-cream-100">
       <NavigationBarComponent />
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
