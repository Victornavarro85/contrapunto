import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Argument } from '../types/debate';
import { cn } from '../utils/cn';

interface ArgumentCardProps {
  argument: Argument;
  variant: 'pro' | 'con';
}

export const ArgumentCard: React.FC<ArgumentCardProps> = ({ argument, variant }) => {
  return (
    <div className={cn(
      'p-4 rounded-lg shadow-md mb-4 transition-all hover:shadow-lg',
      variant === 'pro' ? 'bg-emerald-50 hover:bg-emerald-100' : 'bg-rose-50 hover:bg-rose-100'
    )}>
      <p className="text-gray-800 mb-3">{argument.content}</p>
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ThumbsUp size={18} />
          <span>{argument.votes}</span>
        </button>
        <span className="text-sm text-gray-500">
          {argument.comments.length} comentarios
        </span>
      </div>
    </div>
  );
};