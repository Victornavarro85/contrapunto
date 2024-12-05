import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MessageSquare, Users2 } from 'lucide-react';
import { debates } from '../data/debates';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Bienvenido a Contrapunto
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Un espacio para el diálogo constructivo y el análisis racional de los debates más relevantes de nuestro tiempo.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <Scale className="w-12 h-12 mx-auto mb-4 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Argumentos Balanceados
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Presentamos perspectivas equilibradas para cada tema, permitiéndote formar tu propia opinión.
          </p>
        </div>
        <div className="text-center p-6">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Diálogo Respetuoso
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fomentamos conversaciones constructivas basadas en el respeto y la comprensión mutua.
          </p>
        </div>
        <div className="text-center p-6">
          <Users2 className="w-12 h-12 mx-auto mb-4 text-emerald-600 dark:text-emerald-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Comunidad Diversa
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Una plataforma donde diferentes voces y perspectivas son bienvenidas y valoradas.
          </p>
        </div>
      </section>

      {/* Debates Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Debates Actuales
        </h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {debates.map((debate) => (
            <Link
              key={debate.id}
              to={`/debates/${debate.id}`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {debate.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{debate.description}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{debate.proArguments.length} argumentos a favor</span>
                <span>{debate.conArguments.length} argumentos en contra</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};