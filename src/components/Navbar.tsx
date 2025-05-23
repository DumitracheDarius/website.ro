import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'showcase', label: t('nav.work') },
    { id: 'pricing', label: t('nav.services') },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-accent">
            WeSite
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                activeSection === link.id ? 'text-accent' : 'text-textPrimary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <LanguageToggle />
          <button 
            onClick={() => scrollToSection('pricing')}
            className="btn-primary text-sm uppercase tracking-wider"
          >
            {t('nav.getStarted')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <button className="text-textPrimary" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-sm font-medium uppercase tracking-wider py-2 transition-colors hover:text-accent ${
                  activeSection === link.id ? 'text-accent' : 'text-textPrimary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                scrollToSection('pricing');
                setIsMenuOpen(false);
              }}
              className="btn-primary text-sm uppercase tracking-wider"
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;