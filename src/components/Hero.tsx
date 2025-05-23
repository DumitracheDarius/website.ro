import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LawDemo from './demos/LawDemo';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-start pt-32">
      <div className="absolute inset-0 bg-primary z-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-accent mr-2" />
              <span className="text-sm text-accent">{t('hero.tagline')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-textSecondary mb-10 max-w-xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="btn-primary flex items-center justify-center group"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="btn-secondary group"
              >
                {t('hero.cta.secondary')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">100+</div>
                <div className="text-sm text-textSecondary">{t('hero.stats.clients')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-textSecondary">{t('hero.stats.satisfaction')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-textSecondary">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Website Preview */}
          <div className="relative hidden lg:block">
            <div 
              className="absolute z-30 -right-12 transform animate-float"
              style={{ 
                animationDelay: '0.2s',
                top: '25px'
              }}
            >
              <div className="relative">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-purple-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="absolute -inset-4 bg-gradient-to-b from-accent/20 via-purple-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-75 animate-pulse"></div>
                
                {/* Device frame */}
                <div 
                  className="relative w-[280px] h-[580px] overflow-hidden rounded-[2rem] shadow-2xl shadow-accent/20 transform rotate-[5deg] transition-transform duration-500 hover:rotate-[3deg]"
                  style={{
                    border: '10px solid #1e293b',
                    boxShadow: '0 0 0 2px rgba(56, 189, 248, 0.1), inset 0 0 30px rgba(56, 189, 248, 0.05)'
                  }}
                >
                  {/* Demo content */}
                  <div className="w-full h-full transform scale-[0.45] origin-top-left" style={{ width: '222%', height: '222%' }}>
                    <LawDemo />
                  </div>
                  
                  {/* Screen overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Floating dots */}
            <div className="absolute top-[10%] right-[30%] w-2 h-2 bg-accent rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-[20%] right-[20%] w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute bottom-[30%] right-[40%] w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-[20%] right-[25%] w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Connecting lines */}
            <div className="absolute top-[15%] right-[25%] w-[100px] h-[1px] bg-gradient-to-r from-accent to-transparent transform rotate-45"></div>
            <div className="absolute bottom-[25%] right-[30%] w-[150px] h-[1px] bg-gradient-to-r from-purple-500 to-transparent transform -rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center text-textSecondary">
        <span className="text-sm mb-2">{t('hero.scroll')}</span>
        <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textSecondary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;