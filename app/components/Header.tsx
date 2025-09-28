import React, { useEffect, useState } from 'react';

interface GitHubUser {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const githubUsername = 'rickdebarro'; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
  if (!user) {
    return <div className="text-center p-8 text-white">Carregando perfil do GitHub...</div>;
  }

  return (
    <header className="bg-gray-800 text-white p-8 text-center">
      <img
        src={user.avatar_url}
        alt={`Avatar de ${user.name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600"
      />
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <p className="text-lg mt-2 max-w-2xl mx-auto">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-4 inline-block"
      >
        Ver Perfil no GitHub
      </a>
    </header>
  );
};

export default Header;