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
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  const { t } = useLanguage();

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
      {portfolios.map((portfolio, index) => (
        <div 
          key={index} 
          className="flex flex-col bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="relative h-[400px] sm:h-[600px] md:h-[700px] bg-primary">
            {/* Loading Indicator */}
            {iframeLoading && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-primary">
                <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Interaction Overlay */}
            {activeIframe !== index && (
              <button
                onClick={() => setActiveIframe(index)}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer backdrop-blur-[2px]"
              >
                <span className="text-white text-sm px-6 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
                  {t('portfolio.interact')}
                  <ExternalLink size={16} />
                </span>
              </button>
            )}

            {/* Click Capture Layer */}
            <div 
              className={`absolute inset-0 z-10 ${activeIframe === index ? 'pointer-events-none' : 'pointer-events-auto'}`}
              onClick={() => activeIframe === index && setActiveIframe(null)}
            />

            {/* Iframe */}
            <iframe
              src={portfolio.url}
              title={t(`portfolio.${portfolio.id}.title`)}
              className="w-full h-full border-0"
              loading="lazy"
              onLoad={handleIframeLoad}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              style={{ 
                pointerEvents: activeIframe === index ? 'auto' : 'none'
              }}
            />
          </div>
          
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              {t(`portfolio.${portfolio.id}.title`)}
            </h3>
            <p className="text-textSecondary mb-6 md:mb-8 flex-1 text-sm md:text-base">
              {t(`portfolio.${portfolio.id}.description`)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              {activeIframe === index && (
                <button
                  onClick={() => setActiveIframe(null)}
                  className="inline-flex items-center justify-center px-5 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors text-sm md:text-base"
                >
                  {t('portfolio.exitInteractive')}
                </button>
              )}
              <a
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors group text-sm md:text-base"
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