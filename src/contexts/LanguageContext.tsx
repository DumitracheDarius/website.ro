import React, { createContext, useContext, useState } from 'react';

type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.work': 'Portofoliu',
    'nav.services': 'Servicii',
    'nav.getStarted': 'Începe Proiectul',
    
    // Hero Section
    'hero.tagline': 'Transformăm viziunea ta în realitate digitală',
    'hero.title': 'Website-uri Profesionale pentru Afacerea Ta',
    'hero.description': 'Creăm site-uri web elegante și eficiente care îți pun în valoare brandul — simple, profesionale și construite pentru impact.',
    'hero.cta.primary': 'Începe Proiectul Tău',
    'hero.cta.secondary': 'Vezi Portofoliul',
    'hero.stats.clients': 'Clienți Mulțumiți',
    'hero.stats.satisfaction': 'Rata de Satisfacție',
    'hero.stats.support': 'Suport Tehnic',
    'hero.scroll': 'Descoperă mai multe',

    // Showcase Section
    'showcase.title': 'Ce îți putem oferi?',
    'showcase.description': 'Explorează demo-urile noastre interactive și descoperă cum putem crea website-ul perfect pentru afacerea ta. Fiecare demo este personalizat pentru industria ta specifică.',
    'showcase.demo.interactive': 'Demo Interactiv - Click și scroll pentru a explora',
    
    // Demo Types
    'demo.restaurant.title': 'Website Restaurant',
    'demo.restaurant.description': 'Design elegant pentru meniu și locație',
    'demo.fitness.title': 'Website Sală de Fitness',
    'demo.fitness.description': 'Layout energic cu informații dinamice despre antrenamente',
    'demo.realestate.title': 'Website Imobiliar',
    'demo.realestate.description': 'Prezentare elegantă a proprietăților cu funcții avansate de căutare',
    'demo.medical.title': 'Website Clinică Medicală',
    'demo.medical.description': 'Interfață profesională cu sistem de programări online',
    'demo.law.title': 'Website Cabinet Avocatură',
    'demo.law.description': 'Design profesional cu accent pe expertiză și servicii',
    'demo.education.title': 'Website Educațional',
    'demo.education.description': 'Platformă interactivă pentru cursuri și evenimente',

    // Footer
    'footer.about': 'Creăm website-uri elegante și eficiente care îți pun în valoare brandul—simple, profesionale și construite pentru impact.',
    'footer.services': 'Servicii',
    'footer.services.restaurant': 'Website-uri Restaurant',
    'footer.services.fitness': 'Website-uri Săli de Fitness',
    'footer.services.retail': 'Website-uri Magazine Online',
    'footer.services.professional': 'Servicii Profesionale',
    'footer.services.custom': 'Design Web Personalizat',
    'footer.resources': 'Resurse',
    'footer.resources.portfolio': 'Portofoliu',
    'footer.resources.blog': 'Blog',
    'footer.resources.faq': 'Întrebări Frecvente',
    'footer.resources.support': 'Suport',
    'footer.resources.terms': 'Termeni și Condiții',
    'footer.contact': 'Contact',
    'footer.rights': 'Toate drepturile rezervate.',

    // Pricing Section
    'pricing.title': 'Pachete și',
    'pricing.titleHighlight': 'Prețuri',
    'pricing.description': 'Alegerea perfectă pentru afacerea ta. Pachete complete de web design la prețuri competitive.',
    'pricing.oneTime': 'o singură plată',
    'pricing.includes': 'Include',
    'pricing.notIncludes': 'Nu include',
    'pricing.choosePackage': 'Alege Pachetul',

    'pricing.packages.start.name': 'Start',
    'pricing.packages.start.description': 'Perfect pentru afaceri mici care au nevoie de o prezență online de bază',
    'pricing.packages.start.features': 'Până la 5 pagini|Design Responsive|Optimizare SEO de bază|Formular de contact|Integrare Social Media|Găzduire inclusă 1 an|Suport tehnic 30 zile|Panou de administrare basic',
    'pricing.packages.start.notIncluded': 'Funcționalități e-commerce|Blog integrat|Sistem de rezervări',

    'pricing.packages.professional.name': 'Professional',
    'pricing.packages.professional.description': 'Ideal pentru afaceri în creștere care au nevoie de mai multe funcționalități',
    'pricing.packages.professional.features': 'Până la 10 pagini|Tot ce include pachetul Start|Design personalizat premium|Optimizare SEO avansată|Blog integrat|Sistem de administrare conținut|Integrare Google Analytics|Suport tehnic 60 zile|Optimizare pentru viteză',
    'pricing.packages.professional.notIncluded': 'Funcționalități e-commerce|Sistem de rezervări online',

    'pricing.packages.business.name': 'Business',
    'pricing.packages.business.description': 'Soluția completă pentru afaceri care au nevoie de funcționalități avansate',
    'pricing.packages.business.features': 'Până la 15 pagini|Tot ce include pachetul Professional|Magazin online complet|Sistem de plăți integrat|Gestionare produse și stoc|Sistem de rezervări/programări|Rapoarte și statistici|Optimizare pentru conversie|Suport tehnic 90 zile|Consultanță marketing digital',

    'pricing.form.title': 'Solicită o Ofertă Personalizată',
    'pricing.form.description': 'Completează formularul și te vom contacta în maxim 24 de ore pentru a discuta despre proiectul tău.',
    'pricing.form.name': 'Numele Tău',
    'pricing.form.namePlaceholder': 'John Doe',
    'pricing.form.email': 'Email',
    'pricing.form.emailPlaceholder': 'john@example.com',
    'pricing.form.phone': 'Telefon',
    'pricing.form.phonePlaceholder': '+40 123 456 789',
    'pricing.form.businessType': 'Tipul Afacerii',
    'pricing.form.businessTypePlaceholder': 'Selectează tipul afacerii',
    'pricing.form.businessTypes.restaurant': 'Restaurant / Cafenea',
    'pricing.form.businessTypes.fitness': 'Sală de Sport / Fitness',
    'pricing.form.businessTypes.retail': 'Magazin Online',
    'pricing.form.businessTypes.professional': 'Servicii Profesionale',
    'pricing.form.businessTypes.other': 'Altele',
    'pricing.form.message': 'Mesajul Tău',
    'pricing.form.messagePlaceholder': 'Descrie pe scurt proiectul tău...',
    'pricing.form.submit': 'Trimite Solicitarea',
    'pricing.form.success.title': 'Mulțumim pentru mesaj!',
    'pricing.form.success.message': 'Am primit solicitarea ta și te vom contacta în curând.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.tagline': 'Transforming your vision into digital reality',
    'hero.title': 'Professional Websites for Your Business',
    'hero.description': 'We create elegant and effective websites that showcase your brand—simple, professional, and built for impact.',
    'hero.cta.primary': 'Start Your Project',
    'hero.cta.secondary': 'View Portfolio',
    'hero.stats.clients': 'Happy Clients',
    'hero.stats.satisfaction': 'Satisfaction Rate',
    'hero.stats.support': 'Technical Support',
    'hero.scroll': 'Discover more',

    // Showcase Section
    'showcase.title': 'What can we offer?',
    'showcase.description': 'Explore our interactive demos and discover how we can create the perfect website for your business. Each demo is customized for your specific industry.',
    'showcase.demo.interactive': 'Interactive Demo - Click and scroll to explore',
    
    // Demo Types
    'demo.restaurant.title': 'Restaurant Website',
    'demo.restaurant.description': 'Elegant design for menu and location',
    'demo.fitness.title': 'Fitness Center Website',
    'demo.fitness.description': 'Energetic layout with dynamic workout information',
    'demo.realestate.title': 'Real Estate Website',
    'demo.realestate.description': 'Elegant property showcase with advanced search features',
    'demo.medical.title': 'Medical Clinic Website',
    'demo.medical.description': 'Professional interface with online appointment system',
    'demo.law.title': 'Law Firm Website',
    'demo.law.description': 'Professional design focusing on expertise and services',
    'demo.education.title': 'Educational Website',
    'demo.education.description': 'Interactive platform for courses and events',

    // Footer
    'footer.about': 'We create elegant and effective websites that showcase your brand—simple, professional, and built for impact.',
    'footer.services': 'Services',
    'footer.services.restaurant': 'Restaurant Websites',
    'footer.services.fitness': 'Fitness Center Websites',
    'footer.services.retail': 'Retail Websites',
    'footer.services.professional': 'Professional Services',
    'footer.services.custom': 'Custom Web Design',
    'footer.resources': 'Resources',
    'footer.resources.portfolio': 'Portfolio',
    'footer.resources.blog': 'Blog',
    'footer.resources.faq': 'FAQs',
    'footer.resources.support': 'Support',
    'footer.resources.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // Pricing Section
    'pricing.title': 'Packages and',
    'pricing.titleHighlight': 'Pricing',
    'pricing.description': 'The perfect choice for your business. Complete web design packages at competitive prices.',
    'pricing.oneTime': 'one-time',
    'pricing.includes': 'Includes',
    'pricing.notIncludes': 'Does not include',
    'pricing.choosePackage': 'Choose Package',

    'pricing.packages.start.name': 'Start',
    'pricing.packages.start.description': 'Perfect for small businesses that need a basic online presence',
    'pricing.packages.start.features': 'Up to 5 pages|Responsive Design|Basic SEO Optimization|Contact Form|Social Media Integration|1 year hosting included|30 days technical support|Basic admin panel',
    'pricing.packages.start.notIncluded': 'E-commerce functionality|Integrated blog|Booking system',

    'pricing.packages.professional.name': 'Professional',
    'pricing.packages.professional.description': 'Ideal for growing businesses that need more functionality',
    'pricing.packages.professional.features': 'Up to 10 pages|Everything in Start package|Premium custom design|Advanced SEO optimization|Integrated blog|Content management system|Google Analytics integration|60 days technical support|Speed optimization',
    'pricing.packages.professional.notIncluded': 'E-commerce functionality|Online booking system',

    'pricing.packages.business.name': 'Business',
    'pricing.packages.business.description': 'Complete solution for businesses that need advanced functionality',
    'pricing.packages.business.features': 'Up to 15 pages|Everything in Professional package|Complete online store|Integrated payment system|Product and inventory management|Booking/appointment system|Reports and statistics|Conversion optimization|90 days technical support|Digital marketing consulting',

    'pricing.form.title': 'Request a Custom Quote',
    'pricing.form.description': 'Fill out the form and we will contact you within 24 hours to discuss your project.',
    'pricing.form.name': 'Your Name',
    'pricing.form.namePlaceholder': 'John Doe',
    'pricing.form.email': 'Email',
    'pricing.form.emailPlaceholder': 'john@example.com',
    'pricing.form.phone': 'Phone',
    'pricing.form.phonePlaceholder': '+40 123 456 789',
    'pricing.form.businessType': 'Business Type',
    'pricing.form.businessTypePlaceholder': 'Select business type',
    'pricing.form.businessTypes.restaurant': 'Restaurant / Cafe',
    'pricing.form.businessTypes.fitness': 'Gym / Fitness Center',
    'pricing.form.businessTypes.retail': 'Online Store',
    'pricing.form.businessTypes.professional': 'Professional Services',
    'pricing.form.businessTypes.other': 'Other',
    'pricing.form.message': 'Your Message',
    'pricing.form.messagePlaceholder': 'Briefly describe your project...',
    'pricing.form.submit': 'Send Request',
    'pricing.form.success.title': 'Thank you for your message!',
    'pricing.form.success.message': 'We have received your request and will contact you soon.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ro']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};