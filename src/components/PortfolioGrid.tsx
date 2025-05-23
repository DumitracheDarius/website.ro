import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Portfolio {
  id: string;
  url: string;
}

const portfolios: Portfolio[] = [
  {
    id: 'stilclas',
    url: 'https://stilclas.ro'
  },
  {
    id: 'mentalist',
    url: 'https://mentalistapp.com'
  },
  {
    id: 'globalrecords',
    url: 'https://global-records-casting.replit.app'
  },
  {
    id: 'smokareala',
    url: 'https://smokareala-wesite-design.replit.app'
  }
];

const PortfolioGrid: React.FC = () => {
  const [activeIframe, setActiveIframe] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      {portfolios.map((portfolio, index) => (
        <div 
          key={index} 
          className="flex flex-col bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-primary">
            {activeIframe !== index && (
              <button
                onClick={() => setActiveIframe(index)}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white text-sm px-6 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
                  {t('portfolio.interact')}
                  <ExternalLink size={16} />
                </span>
              </button>
            )}
            <div 
              className={`absolute inset-0 z-10 ${activeIframe === index ? 'pointer-events-none' : 'pointer-events-auto'}`}
              onClick={() => activeIframe === index && setActiveIframe(null)}
            />
            <iframe
              src={portfolio.url}
              title={t(`portfolio.${portfolio.id}.title`)}
              className="w-full h-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              style={{ pointerEvents: activeIframe === index ? 'auto' : 'none' }}
            />
          </div>
          
          <div className="p-4 md:p-6 flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              {t(`portfolio.${portfolio.id}.title`)}
            </h3>
            <p className="text-textSecondary mb-4 md:mb-6 flex-1 text-sm md:text-base">
              {t(`portfolio.${portfolio.id}.description`)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              {activeIframe === index && (
                <button
                  onClick={() => setActiveIframe(null)}
                  className="inline-flex items-center justify-center px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors text-sm"
                >
                  {t('portfolio.exitInteractive')}
                </button>
              )}
              <a
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors group text-sm"
              >
                {t('portfolio.visitWebsite')}
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;