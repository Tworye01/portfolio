import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';

export default function Projects() {
  return (
    <main className="h-screen flex flex-col items-center bg-cream-100">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px] transform rotate-[20deg]"></div>
      <div className="flex flex-row gap-8 mt-32 mb-8">
        <ProjectCardComponent image={'src/assets/tuner.png'} title={'Tuner'} description={'Spotify API multiplayer guessing'} link={'https://github.com/j3-n/tuner'}/>
        <ProjectCardComponent image={'src/assets/cordle.png'} title={'Crodle'} description={'A Competative Worlde discord bot'} link={'https://github.com/j3-n/tuner'}/>
        <ProjectCardComponent image={'src/assets/robot.png'} title={'LegoEV3 Hangman Robot'} description={'Robot that draws out a game of hangman from the users input'} link={'https://github.com/j3-n/tuner'}/>
      </div>
      
      <NavigationBarComponent />
    </main>
  );
};