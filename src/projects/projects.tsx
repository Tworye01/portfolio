import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';

export default function Projects() {
  return (
    <main className="overflow-y-auto relative flex flex-col items-center bg-cream-100 h-screen">
       <div className="absolute top-1/2 left-1/2 h-[600px] w-[90%] md:h-[1000px] md:w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]"></div>

      <div className="flex-grow mt-32 flex flex-col items-center">
        <h3 className="p-2 text-2xl drop-shadow-2xl font-bold font-rubik text-darkgreen-100 mb-2 text-center">
          Click projects to find out more!
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-64">
        <ProjectCardComponent
          image={'./assets/tuner.PNG'}
          title={'Tuner'}
          description={'Spotify API multiplayer guessing game'}
          link={'https://github.com/j3-n/tuner'}
        />
        <ProjectCardComponent
          image={'./assets/cordle.PNG'}
          title={'Cordle'}
          description={'A competitive Wordle Discord bot'}
          link={'https://github.com/JPadley18/hackaway-v6'}
        />
        <ProjectCardComponent
          image={'./assets/robot.PNG'}
          title={'EV3 Hangman Robot'}
          description={'Robot that draws out a game of hangman from the users input'}
          link={'https://github.com/joseph-beck/hangman-robot'}
        />
        <ProjectCardComponent
          image={'./assets/N.PNG'}
          title={'This Website!'}
          description={'Cool website written in ReactTS with TailwindCSS'}
          link={''}
        />
        
      </div>

      <NavigationBarComponent />
    </main>
  );
}