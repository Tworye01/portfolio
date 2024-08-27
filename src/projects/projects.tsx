import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Projects() {
  return (
    <main className="h-screen overflow-hidden relative flex flex-col items-center bg-cream-100">
      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-15 blur-[80px] transform "></div>
     
      <div className="flex-grow mt-32">
          <h3 className="p-2 text-2xl drop-shadow-2xl font-bold font-rubik text-darkgreen-100 mb-2">Click projects to find out more!</h3>
      </div>
      
      <div className="flex flex-row gap-8  mb-64">
        <ProjectCardComponent image={'./assets/tuner.PNG'} title={'Tuner'} description={'Spotify API multiplayer guessing'} link={'https://github.com/j3-n/tuner'}/>
        <ProjectCardComponent image={'./assets/cordle.PNG'} title={'Cordle'} description={'A Competative Worlde discord bot'} link={'https://github.com/JPadley18/hackaway-v6'}/>
        <ProjectCardComponent image={'./assets/robot.PNG'} title={'EV3 Hangman Robot'} description={'Robot that draws out a game of hangman from the users input'} link={'https://github.com/joseph-beck/hangman-robot'}/>
      </div>

      <NavigationBarComponent />
    </main>
  );
};