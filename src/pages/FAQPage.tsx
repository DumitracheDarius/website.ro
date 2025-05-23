import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: '1',
      category: 'general',
      question: 'Cât durează realizarea unui website?',
      answer: 'Durata de realizare a unui website variază în funcție de complexitatea proiectului. Un website de prezentare simplu poate fi gata în 2-3 săptămâni, în timp ce un proiect complex poate dura 2-3 luni sau mai mult. Factori precum funcționalitățile dorite, design-ul personalizat și integrările necesare influențează timpul de dezvoltare.'
    },
    {
      id: '2',
      category: 'general',
      question: 'Ce este inclus în prețul unui website?',
      answer: 'Prețul include design-ul personalizat, dezvoltarea website-ului, optimizare pentru dispozitive mobile, optimizare SEO de bază, integrare cu rețele sociale și găzduire pentru primul an. Pachetele noastre sunt detaliate în secțiunea de prețuri, iar fiecare include diferite funcționalități în funcție de necesitățile afacerii tale.'
    },
    {
      id: '3',
      category: 'technical',
      question: 'Cum se face optimizarea SEO?',
      answer: 'Optimizarea SEO include mai multe aspecte: optimizarea tehnică a website-ului (viteză de încărcare, structură URL-uri, etc.), optimizarea conținutului (keywords, meta descrieri, etc.) și optimizarea off-page (link building, prezență în social media). Oferim servicii SEO de bază în toate pachetele noastre și servicii avansate la cerere.'
    },
    {
      id: '4',
      category: 'technical',
      question: 'Site-ul va fi optimizat pentru mobile?',
      answer: 'Da, toate website-urile noastre sunt dezvoltate folosind principiul "mobile-first" și sunt complet responsive. Aceasta înseamnă că site-ul se va adapta automat la orice dimensiune de ecran, oferind o experiență optimă utilizatorilor, indiferent de dispozitivul folosit.'
    },
    {
      id: '5',
      category: 'support',
      question: 'Ce fel de suport tehnic oferiti?',
      answer: 'Oferim suport tehnic prin email și telefon pe toată durata dezvoltării proiectului. După lansare, perioada de suport variază în funcție de pachetul ales (30, 60 sau 90 de zile). Pentru suport extins, oferim pachete de mentenanță lunară care includ actualizări, backup-uri și asistență tehnică continuă.'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toate' },
    { id: 'general', name: 'Generale' },
    { id: 'technical', name: 'Tehnice' },
    { id: 'support', name: 'Suport' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col">
      <Navbar activeSection="" scrollToSection={() => {}} />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Întrebări Frecvente</h1>
          <p className="text-textSecondary max-w-2xl">
            Găsește răspunsuri la cele mai comune întrebări despre serviciile noastre de web design și dezvoltare.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
            <input
              type="text"
              placeholder="Caută întrebări..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-accent/20 rounded-lg focus:outline-none focus:border-accent text-textPrimary placeholder-textSecondary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-secondary text-textSecondary hover:bg-accent/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-secondary rounded-lg border border-accent/20"
            >
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                {activeId === faq.id ? (
                  <ChevronUp size={20} className="text-accent" />
                ) : (
                  <ChevronDown size={20} className="text-accent" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  activeId === faq.id ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-textSecondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;