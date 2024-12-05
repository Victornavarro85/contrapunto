import React from 'react';
import { Debate } from '../../types/debate';
import { ArgumentList } from './ArgumentList';
import { DebateHeader } from './DebateHeader';

interface DebateLayoutProps {
  debate: Debate;
}

export const DebateLayout: React.FC<DebateLayoutProps> = ({ debate }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DebateHeader 
          title={debate.title}
          description={debate.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ArgumentList
            title="Argumentos a favor"
            arguments={debate.proArguments}
            variant="pro"
          />
          <ArgumentList
            title="Argumentos en contra"
            arguments={debate.conArguments}
            variant="con"
          />
        </div>
      </div>
    </div>
  );
};