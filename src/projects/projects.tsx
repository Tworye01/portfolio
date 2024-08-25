import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';

export default function Projects() {
  return (
    <main className="h-screen overflow-hidden relative flex flex-col items-center bg-cream-100">
      <div className="absolute top-1/2 left-1/2 h-[800px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-15 blur-[80px] transform "></div>
     
      <div className="flex-grow mt-32">
          <h3 className="p-2 text-2xl drop-shadow-2xl font-bold font-rubik text-darkgreen-100 mb-2">Click projects to find out more!</h3>
      </div>
      <div className="flex flex-row gap-8  mb-64">
        <ProjectCardComponent image={'src/assets/tuner.png'} title={'Tuner'} description={'Spotify API multiplayer guessing'} link={'https://github.com/j3-n/tuner'}/>
        <ProjectCardComponent image={'src/assets/cordle.png'} title={'Crodle'} description={'A Competative Worlde discord bot'} link={'https://github.com/j3-n/tuner'}/>
        <ProjectCardComponent image={'src/assets/robot.png'} title={'EV3 Hangman Robot'} description={'Robot that draws out a game of hangman from the users input'} link={'https://github.com/j3-n/tuner'}/>
      </div>
     
      <NavigationBarComponent />
    </main>
  );
};