import React from 'react';

interface DebateHeaderProps {
  title: string;
  description: string;
}

export const DebateHeader: React.FC<DebateHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};