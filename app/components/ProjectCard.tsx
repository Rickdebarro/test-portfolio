import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  liveUrl?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl, imageUrl, liveUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col">

      <div className="mb-4">

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md overflow-hidden group" 
          >
  
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
              <img
                src={imageUrl}
                alt={`Imagem do projeto ${title}`}
                className="w-full h-56 object-cover" 
              />
            </div>
          </a>
        ) : (

          <img
            src={imageUrl}
            alt={`Imagem do projeto ${title}`}
            className="rounded-md w-full h-56 object-cover" 
          />
        )}
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Ver Código no GitHub
        </a>
        {liveUrl && (
           <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Ver Site Ao Vivo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;