import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { debates } from '../data/debates';
import { DebateLayout } from '../components/debate/DebateLayout';

export const DebatePage: React.FC = () => {
  const { id } = useParams();
  const debate = debates.find(d => d.id === id);

  if (!debate) {
    return <Navigate to="/" replace />;
  }

  return <DebateLayout debate={debate} />;
};