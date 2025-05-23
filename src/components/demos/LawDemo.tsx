import React, { useState } from 'react';
import { 
  Scale, 
  Clock, 
  Phone, 
  Calendar,
  Star,
  ArrowRight,
  Briefcase,
  Building2,
  Users,
  FileText,
  MessageSquare,
  Award
} from 'lucide-react';

const LawDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const practiceAreas = [
    { icon: Building2, name: 'Drept Comercial', description: 'Asistență juridică pentru companii' },
    { icon: Users, name: 'Dreptul Muncii', description: 'Relații de muncă și litigii' },
    { icon: FileText, name: 'Drept Civil', description: 'Contracte și proprietăți' },
    { icon: Scale, name: 'Litigii', description: 'Reprezentare în instanță' }
  ];

  const attorneys = [
    {
      id: '1',
      name: 'Av. Alexandru Popescu',
      specialization: 'Drept Comercial',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      experience: '15 ani experiență',
      rating: 4.9,
      reviews: 87
    },
    {
      id: '2',
      name: 'Av. Maria Ionescu',
      specialization: 'Drept Civil',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      experience: '12 ani experiență',
      rating: 4.8,
      reviews: 64
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-slate-50 font-sans text-sm">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white p-3 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold flex items-center">
            <Scale className="mr-1.5" size={18} />
            LexPro
          </h1>
          <div className="flex space-x-2 text-xs">
            <button 
              onClick={() => setActiveTab('home')}
              className={`${activeTab === 'home' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Acasă
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`${activeTab === 'services' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Servicii
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-48 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Expertiză Juridică de Încredere</h2>
            <p className="text-slate-300 text-sm">Soluții legale personalizate pentru succesul dumneavoastră</p>
            <button className="mt-4 bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors flex items-center mx-auto">
              Programează Consultație
              <Calendar size={14} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 p-4">
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-slate-900 font-semibold">20+</div>
          <div className="text-slate-600 text-xs">Ani Experiență</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-slate-900 font-semibold">500+</div>
          <div className="text-slate-600 text-xs">Cazuri Câștigate</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-slate-900 font-semibold">98%</div>
          <div className="text-slate-600 text-xs">Clienți Mulțumiți</div>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900 mb-3">
          Arii de Practică
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <div className="flex items-center">
                <div className="bg-slate-100 p-2 rounded-full">
                  <area.icon size={16} className="text-slate-700" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium text-slate-900 text-sm">{area.name}</h4>
                  <p className="text-slate-500 text-xs line-clamp-1">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attorneys */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-slate-900">Avocații Noștri</h3>
          <button className="text-slate-600 text-xs flex items-center">
            Vezi toți
            <ArrowRight size={12} className="ml-0.5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
              <div className="relative h-32">
                <img 
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <h4 className="text-white font-medium text-sm">{attorney.name}</h4>
                  <p className="text-slate-200 text-xs">{attorney.specialization}</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-slate-700 text-xs">{attorney.rating}</span>
                    <span className="ml-1 text-slate-500 text-xs">({attorney.reviews} recenzii)</span>
                  </div>
                  <div className="text-slate-600 text-xs">
                    {attorney.experience}
                  </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-1.5 rounded text-xs flex items-center justify-center">
                  Programează Consultație
                  <MessageSquare size={12} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="p-4 bg-white">
        <h3 className="text-base font-semibold text-slate-900 mb-3">
          De Ce Să Ne Alegeți
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-slate-100 p-2 rounded-full mr-3">
              <Award size={16} className="text-slate-700" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">Expertiză Dovedită</h4>
              <p className="text-slate-500 text-xs">Peste 20 de ani de experiență în domeniul juridic</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-slate-100 p-2 rounded-full mr-3">
              <Users size={16} className="text-slate-700" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">Abordare Personalizată</h4>
              <p className="text-slate-500 text-xs">Soluții adaptate nevoilor fiecărui client</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-slate-100 p-2 rounded-full mr-3">
              <Briefcase size={16} className="text-slate-700" />
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">Rezultate Demonstrate</h4>
              <p className="text-slate-500 text-xs">Rata de succes ridicată în cazurile noastre</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="p-4">
        <div className="space-y-3">
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
            <Phone size={16} className="text-slate-700" />
            <div className="ml-3">
              <div className="text-xs text-slate-600">Programări consultații</div>
              <div className="text-sm font-medium text-slate-900">0800 123 456</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
            <Clock size={16} className="text-slate-700" />
            <div className="ml-3">
              <div className="text-xs text-slate-600">Program consultații</div>
              <div className="text-sm font-medium text-slate-900">L-V: 09:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white p-3 text-center text-xs mt-4">
        © 2025 LexPro. Toate drepturile rezervate.
      </footer>
    </div>
  );
};

export default LawDemo;