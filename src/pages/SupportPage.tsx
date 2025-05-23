import React from 'react';
import { Mail, Phone, MessageSquare, Clock, FileText, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Pentru întrebări generale și asistență non-urgentă',
      action: 'Trimite Email',
      link: 'mailto:support@wesite.com'
    },
    {
      icon: Phone,
      title: 'Telefonic',
      description: 'Asistență telefonică pentru probleme urgente',
      action: 'Sună Acum',
      link: 'tel:+40769245781'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat în timp real cu echipa noastră de suport',
      action: 'Începe Chat',
      link: '#'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentație',
      description: 'Ghiduri detaliate și tutoriale pentru utilizarea platformei',
      link: '#'
    },
    {
      icon: HelpCircle,
      title: 'Întrebări Frecvente',
      description: 'Răspunsuri la cele mai comune întrebări',
      link: '/faq'
    },
    {
      icon: Clock,
      title: 'Status Sistem',
      description: 'Verifică starea serviciilor noastre',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col">
      <Navbar activeSection="" scrollToSection={() => {}} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Suport Tehnic</h1>
          <p className="text-textSecondary max-w-2xl">
            Suntem aici să te ajutăm. Alege metoda preferată de contact sau consultă resursele disponibile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <channel.icon size={24} className="text-accent" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-textSecondary mb-4">{channel.description}</p>
              
              <a
                href={channel.link}
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                {channel.action}
                <ArrowLeft size={16} className="ml-2 rotate-180" />
              </a>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Program Suport</h2>
          <div className="bg-secondary rounded-lg p-6 border border-accent/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Zile Lucrătoare</h3>
                <p className="text-textSecondary">Luni - Vineri: 09:00 - 18:00</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Weekend</h3>
                <p className="text-textSecondary">Suport limitat prin email</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Resurse Utile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-secondary rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <resource.icon size={24} className="text-accent" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-textSecondary">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;