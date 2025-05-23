import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-textPrimary border-t border-accent/10 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-accent mb-4">
              WeSite
            </h3>
            <p className="text-textSecondary mb-4">
              {t('footer.about')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-textPrimary">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {[
                { to: '/blog', text: t('footer.resources.blog') },
                { to: '/faq', text: t('footer.resources.faq') },
                { to: '/terms', text: t('footer.resources.terms') }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-textSecondary hover:text-accent transition-colors inline-block relative z-20"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-textPrimary">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@wesite.ro"
                  className="flex items-center justify-center md:justify-start group relative z-20"
                >
                  <Mail size={18} className="text-accent mr-2" />
                  <span className="text-textSecondary group-hover:text-accent transition-colors">
                    info@wesite.ro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+40769245781"
                  className="flex items-center justify-center md:justify-start group relative z-20"
                >
                  <Phone size={18} className="text-accent mr-2" />
                  <span className="text-textSecondary group-hover:text-accent transition-colors">
                    +40 769 245 781
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/10 mt-12 pt-8 text-center">
          <p className="text-textSecondary">© 2025 WeSite. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;