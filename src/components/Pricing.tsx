import React, { useState, useRef } from 'react';
import { Check, ArrowRight, Package, Zap, Rocket, X, Percent } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_nzx34mh',
        'template_aghlwtm',
        formRef.current!,
        'D8si53hwoTHAo5mZ7'
      );

      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('A apărut o eroare la trimiterea formularului. Vă rugăm încercați din nou.');
      console.error('Email sending error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePackageSelect = (packageName: string, price: string) => {
    const message = `Sunt interesat de pachetul ${packageName} (${price}). Vă rog să îmi oferiți mai multe detalii.`;
    setFormData(prev => ({ ...prev, message }));
    
    // Scroll to form
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: t('pricing.packages.start.name'),
      icon: Package,
      originalPrice: '1249$',
      price: '499$',
      description: t('pricing.packages.start.description'),
      features: t('pricing.packages.start.features').split('|'),
      notIncluded: t('pricing.packages.start.notIncluded').split('|')
    },
    {
      name: t('pricing.packages.professional.name'),
      icon: Zap,
      originalPrice: '2499$',
      price: '999$',
      description: t('pricing.packages.professional.description'),
      features: t('pricing.packages.professional.features').split('|'),
      notIncluded: t('pricing.packages.professional.notIncluded').split('|')
    },
    {
      name: t('pricing.packages.business.name'),
      icon: Rocket,
      originalPrice: '5000$',
      price: '1999$',
      description: t('pricing.packages.business.description'),
      features: t('pricing.packages.business.features').split('|'),
      notIncluded: []
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t('pricing.title')} <span className="gradient-text">{t('pricing.titleHighlight')}</span>
        </h2>
        <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto px-4">
          {t('pricing.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-colors flex flex-col relative">
            <div className="absolute -right-8 top-6 bg-accent text-white py-1 px-8 transform rotate-45 shadow-lg z-10">
              <div className="flex items-center justify-center text-sm font-bold">
                <Percent size={14} className="mr-1" />
                40% OFF
              </div>
            </div>
            
            <div className="p-6 border-b border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <pkg.icon size={24} className="text-accent" />
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                <span className="ml-2 text-textSecondary text-sm line-through">{pkg.originalPrice}</span>
                <span className="ml-2 text-textSecondary text-sm">{t('pricing.oneTime')}</span>
              </div>
              <p className="text-sm text-textSecondary">{pkg.description}</p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex-grow">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">{t('pricing.includes')}:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={20} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-textSecondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-red-400 mb-3">{t('pricing.notIncludes')}:</h4>
                    <ul className="space-y-3">
                      {pkg.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <X size={20} className="text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-textSecondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => handlePackageSelect(pkg.name, pkg.price)}
                className="w-full bg-accent hover:bg-sky-600 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center group mt-auto"
              >
                {t('pricing.choosePackage')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="max-w-2xl mx-auto bg-secondary rounded-lg overflow-hidden border border-accent/20">
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">{t('pricing.form.title')}</h3>
          <p className="text-textSecondary mb-6">
            {t('pricing.form.description')}
          </p>
          
          {formSubmitted ? (
            <div className="bg-accent/10 border border-accent/20 text-accent p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t('pricing.form.success.title')}</h4>
              <p className="text-textSecondary">{t('pricing.form.success.message')}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-1">
                  {t('pricing.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-textPrimary"
                  placeholder={t('pricing.form.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-1">
                  {t('pricing.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-textPrimary"
                  placeholder={t('pricing.form.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-textSecondary mb-1">
                  {t('pricing.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-textPrimary"
                  placeholder={t('pricing.form.phonePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-textSecondary mb-1">
                  {t('pricing.form.businessType')}
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-textPrimary"
                >
                  <option value="">{t('pricing.form.businessTypePlaceholder')}</option>
                  <option value="restaurant">{t('pricing.form.businessTypes.restaurant')}</option>
                  <option value="fitness">{t('pricing.form.businessTypes.fitness')}</option>
                  <option value="retail">{t('pricing.form.businessTypes.retail')}</option>
                  <option value="professional">{t('pricing.form.businessTypes.professional')}</option>
                  <option value="other">{t('pricing.form.businessTypes.other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-1">
                  {t('pricing.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-primary border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-textPrimary"
                  placeholder={t('pricing.form.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-sky-600 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Se trimite...' : t('pricing.form.submit')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;