import React from 'react';
import { Argument } from '../../types/debate';
import { ArgumentCard } from './ArgumentCard';

interface ArgumentListProps {
  title: string;
  arguments: Argument[];
  variant: 'pro' | 'con';
}

export const ArgumentList: React.FC<ArgumentListProps> = ({
  title,
  arguments: args,
  variant
}) => {
  return (
    <div className="space-y-4">
      <h2 className={`text-xl font-semibold mb-4 ${
        variant === 'pro' ? 'text-emerald-700' : 'text-rose-700'
      }`}>
        {title}
      </h2>
      {args.map((arg) => (
        <ArgumentCard key={arg.id} argument={arg} variant={variant} />
      ))}
    </div>
  );
};