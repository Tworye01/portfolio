import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCardComponent: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 md:w-80 outline outline-5 h-auto overflow-hidden outline-darkgreen-100 bg-cream-100 rounded-lg shadow-xl transition-transform transform hover:scale-105"
    >
     
      <div className="w-full h-64 md:h-80">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-2xl drop-shadow-2xl font-bold text-darkgreen-100 mb-2 font-rubik">
          {title}
        </h3>
        <p className="text-gray-700 font-semibold text-sm md:text-lg">{description}</p>
      </div>
    </a>
  );
};
