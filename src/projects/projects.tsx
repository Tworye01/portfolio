import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';

export default function Projects() {
  return (
    <main className="h-screen flex flex-col items-center bg-cream-100">
      <div className="flex flex-row gap-8 mt-32 mb-8">
        <ProjectCardComponent image={'src/assets/tuner.png'} title={'Tuner'} description={'Spotify API multiplayer guessing'} />
        <ProjectCardComponent image={'src/assets/cordle.png'} title={'Crodle'} description={'A Competative Worlde discord bot'} />
        <ProjectCardComponent image={'src/assets/robot.png'} title={'LegoEV3 Hangman Robot'} description={'Robot that draws out a game of hangman from the users input'} />
      </div>
      
      <NavigationBarComponent />
    </main>
  );
};