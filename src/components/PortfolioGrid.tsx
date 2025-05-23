import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Portfolio {
  title: string;
  url: string;
  description: string;
}

const portfolios: Portfolio[] = [
  {
    title: 'StilClas.ro',
    url: 'https://stilclas.ro',
    description: 'StilClas.ro is an elegant e-commerce platform specializing in formal menswear. It offers a wide range of products including suits, coats, shoes, and accessories, catering to the modern gentleman seeking quality and style.'
  },
  {
    title: 'MentalistApp.com',
    url: 'https://mentalistapp.com',
    description: 'Mentalist is a personal wellness companion app designed to help users set goals, track emotions, and reconnect with themselves. It serves as a comprehensive tool for managing mental well-being.'
  },
  {
    title: 'Global Records Casting',
    url: 'https://global-records-casting.replit.app',
    description: 'This is a casting platform developed for Global Records, aimed at discovering new musical talents. It allows aspiring artists to apply for auditions and showcases the label\'s commitment to nurturing fresh talent.'
  },
  {
    title: 'Smokareala Design',
    url: 'https://smokareala-wesite-design.replit.app',
    description: 'A creative and modern website design project that emphasizes unique aesthetics and user-friendly navigation, tailored for the Smokareala brand.'
  }
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {portfolios.map((portfolio, index) => (
        <div key={index} className="bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300">
          <div className="relative h-[400px] bg-primary">
            <iframe
              src={portfolio.url}
              title={portfolio.title}
              className="w-full h-full border-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{portfolio.title}</h3>
            <p className="text-textSecondary mb-4">{portfolio.description}</p>
            
            <a
              href={portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              Visit Website
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;