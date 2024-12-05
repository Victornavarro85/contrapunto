import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
          Contrapunto
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-gray-200" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
};