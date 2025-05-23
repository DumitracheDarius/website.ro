import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceShowcase from '../components/ServiceShowcase';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'showcase', 'pricing'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
          <div className="absolute inset-0 rounded-full animate-spin">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                stroke="url(#gradient)" 
                strokeWidth="8"
                fill="none"
                strokeDasharray="60 180"
                strokeLinecap="round"
                className="origin-center"
              />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col relative overflow-hidden">
      {/* Custom cursor */}
      <div 
        id="custom-cursor"
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 will-change-transform hidden md:block"
        style={{ 
          opacity: 0.6,
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`
        }}
      ></div>
      
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="flex-grow relative z-10">
        <section id="home" className="min-h-screen px-4 md:px-8">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="showcase" className="py-24 md:py-32 bg-secondary relative">
          <ServiceShowcase />
        </section>
        
        <section id="pricing" className="py-24 md:py-32 bg-primary relative">
          <Pricing />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;