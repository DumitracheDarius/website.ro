import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RestaurantDemo from './demos/RestaurantDemo';
import FitnessDemo from './demos/FitnessDemo';
import RealEstateDemo from './demos/RealEstateDemo';
import MedicalDemo from './demos/MedicalDemo';
import LawDemo from './demos/LawDemo';
import EducationDemo from './demos/EducationDemo';
import PortfolioGrid from './PortfolioGrid';

const ServiceShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleDemo = (demoId: string) => {
    setActiveDemo(activeDemo === demoId ? null : demoId);
  };

  const demos = [
    {
      id: 'restaurant',
      title: t('demo.restaurant.title'),
      description: t('demo.restaurant.description'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      component: RestaurantDemo
    },
    {
      id: 'fitness',
      title: t('demo.fitness.title'),
      description: t('demo.fitness.description'),
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      component: FitnessDemo
    },
    {
      id: 'realestate',
      title: t('demo.realestate.title'),
      description: t('demo.realestate.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      component: RealEstateDemo
    },
    {
      id: 'medical',
      title: t('demo.medical.title'),
      description: t('demo.medical.description'),
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      component: MedicalDemo
    },
    {
      id: 'law',
      title: t('demo.law.title'),
      description: t('demo.law.description'),
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      component: LawDemo
    },
    {
      id: 'education',
      title: t('demo.education.title'),
      description: t('demo.education.description'),
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      component: EducationDemo
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">{t('showcase.title')}</span>
        </h2>
        <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto px-4">
          {t('showcase.description')}
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Portfolio</h3>
        <PortfolioGrid />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {demos.map((demo) => (
          <div 
            key={demo.id}
            className="bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
          >
            <div 
              className="h-48 sm:h-56 bg-cover bg-center relative cursor-pointer"
              style={{ backgroundImage: `url('${demo.image}')` }}
              onClick={() => toggleDemo(demo.id)}
            >
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center group-hover:bg-primary/60 transition-all duration-300">
                <div className="text-center text-textPrimary p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{demo.title}</h3>
                  <p className="mb-4 text-textSecondary text-sm sm:text-base">{demo.description}</p>
                  <button className="flex items-center mx-auto text-accent border border-accent rounded-full p-2 hover:bg-accent/10 transition-colors">
                    {activeDemo === demo.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeDemo === demo.id ? 'max-h-[600px]' : 'max-h-0'
            }`}>
              <div className="p-4">
                <div className="bg-secondary rounded-lg p-2 mb-4 flex items-center justify-between">
                  <p className="text-sm text-textSecondary">{t('showcase.demo.interactive')}</p>
                  <ExternalLink size={16} className="text-accent" />
                </div>
                <div className="h-[500px] overflow-hidden rounded-lg border border-secondary shadow-inner">
                  <demo.component />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceShowcase;