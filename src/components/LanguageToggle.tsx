import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ro' ? 'en' : 'ro')}
      className="flex items-center space-x-1 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-full transition-colors"
    >
      <Languages size={14} />
      <span>{language === 'ro' ? 'EN' : 'RO'}</span>
    </button>
  );
};

export default LanguageToggle;