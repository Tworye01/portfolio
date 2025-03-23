import React from 'react';
import { NavigationBarComponent } from '../components/navbar';
import { ProjectCardComponent } from '../components/project';

export default function Projects() {
  return (
    <main className="overflow-y-auto relative flex flex-col items-center bg-cream-100 h-screen">
       <div className="absolute top-1/2 left-1/2 h-[600px] w-[90%] md:h-[2000px] md:w-[1700px] -translate-x-1/2 
       -translate-y-1/2 rounded-full bg-darkgreen-100 opacity-20 blur-[80px]"></div>

      <div className="flex-grow mt-32 flex flex-col items-center">
        <h3 className="p-2 text-2xl drop-shadow-2xl font-bold font-rubik text-darkgreen-100 mb-8 text-center">
          Projects I have worked on, Click to find out more! 
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-64 max-w-[90%]">
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
          link={'https://tworye01.github.io/portfolio/#/'}
        />
        <ProjectCardComponent
          image={'./assets/Oaxaca.PNG'}
          title={'Oaxaca web app'}
          description={'Restaurant web application for Customers and Staff written in React, GoLang and PostgreSQL'}
          link={'https://github.com/Tworye01/Oaxaca-Restaurant-App'}
        />
      </div>

      <NavigationBarComponent />

      <footer className="w-full text-left py-3 pl-12 text-white text bg-darkgreen-100 bg-opacity-50">
        © 2024-25 Natan Wojcik
      </footer>
    </main>
  );
}
