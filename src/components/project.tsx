import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
  }

  export const ProjectCardComponent: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
    return (
      <a href={link} target="_blank" className="w-80 outline outline-5 h-96 outline-darkgreen-100 bg-cream-100 rounded-lg shadow-xl transition-transform transform hover:scale-105">
        <div className="w-full h-48">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-bold text-darkgreen-100 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </a>
    );
  };
  