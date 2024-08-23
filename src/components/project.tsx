import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
  }

  export const ProjectCardComponent: React.FC<ProjectCardProps> = ({ image, title, description }) => {
    return (
      <div className="w-80 h-96 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-bold text-darkgreen-100 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  