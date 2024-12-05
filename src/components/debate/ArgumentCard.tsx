import React, { useState, useRef, useEffect } from 'react';
import { ThumbsUp, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Argument } from '../../types/debate';
import { cn } from '../../utils/cn';

interface ArgumentCardProps {
  argument: Argument;
  variant: 'pro' | 'con';
}

export const ArgumentCard: React.FC<ArgumentCardProps> = ({ argument, variant }) => {
  const [showSources, setShowSources] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const shouldShow = contentRef.current.scrollHeight > 100;
      setShouldShowButton(shouldShow);
    }
  }, [argument.content]);

  return (
    <div className={cn(
      'p-4 rounded-lg shadow-md mb-4 transition-all hover:shadow-lg h-[280px] relative flex flex-col',
      variant === 'pro' 
        ? 'dark:bg-emerald-950 dark:hover:bg-emerald-900 bg-emerald-50 hover:bg-emerald-100' 
        : 'dark:bg-rose-950 dark:hover:bg-rose-900 bg-rose-50 hover:bg-rose-100'
    )}>
      <div className="flex-1 overflow-y-auto mb-4 pr-2 scrollbar-thin">
        <div>
          <p 
            ref={contentRef} 
            className="text-gray-800 dark:text-gray-200 mb-3"
          >
            {argument.content}
          </p>

          {showSources && argument.sources.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold mb-2 dark:text-gray-200">Fuentes:</h4>
              <ul className="space-y-2">
                {argument.sources.map((source) => (
                  <li key={source.id} className="text-sm">
                    <p className="font-medium dark:text-gray-200">
                      {source.url ? (
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {source.title}
                        </a>
                      ) : (
                        source.title
                      )}
                    </p>
                    {(source.authors || source.year) && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {source.authors && <span>{source.authors}</span>}
                        {source.authors && source.year && <span> - </span>}
                        {source.year && <span>{source.year}</span>}
                      </p>
                    )}
                    {source.description && (
                      <p className="text-gray-500 dark:text-gray-500">{source.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-inherit pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
              <ThumbsUp size={18} />
              <span>{argument.votes}</span>
            </button>
            <button 
              onClick={() => setShowSources(!showSources)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <BookOpen size={18} />
              <span>{argument.sources.length} fuentes</span>
            </button>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {argument.comments.length} comentarios
          </span>
        </div>
      </div>
    </div>
  );
};