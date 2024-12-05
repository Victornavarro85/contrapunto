import React from 'react';
import { Debate } from '../types/debate';
import { ArgumentCard } from './ArgumentCard';

interface DebateLayoutProps {
  debate: Debate;
}

export const DebateLayout: React.FC<DebateLayoutProps> = ({ debate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">{debate.title}</h1>
        <p className="text-gray-600 text-center mb-8">{debate.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Argumentos a favor */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Argumentos a favor</h2>
            {debate.proArguments.map((arg) => (
              <ArgumentCard key={arg.id} argument={arg} variant="pro" />
            ))}
          </div>

          {/* Argumentos en contra */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-rose-700 mb-4">Argumentos en contra</h2>
            {debate.conArguments.map((arg) => (
              <ArgumentCard key={arg.id} argument={arg} variant="con" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};