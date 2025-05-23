import React, { useState } from 'react';
import { 
  Stethoscope, 
  Calendar, 
  Clock, 
  Phone, 
  Search,
  Star,
  ArrowRight,
  User,
  Heart,
  Activity,
  Brain,
  Bone,
  Eye,
  Bluetooth as Tooth
} from 'lucide-react';

const MedicalDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const specialties = [
    { icon: Heart, name: 'Cardiologie', description: 'Diagnostic și tratament pentru afecțiuni cardiace' },
    { icon: Brain, name: 'Neurologie', description: 'Tratamente pentru sistemul nervos' },
    { icon: Bone, name: 'Ortopedie', description: 'Specialiști în probleme musculo-scheletice' },
    { icon: Eye, name: 'Oftalmologie', description: 'Îngrijirea completă a ochilor' },
    { icon: Activity, name: 'Medicină Internă', description: 'Diagnostic și tratament general' },
    { icon: Tooth, name: 'Stomatologie', description: 'Servicii dentare complete' }
  ];

  const doctors = [
    {
      id: '1',
      name: 'Dr. Maria Popescu',
      specialty: 'Cardiologie',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      reviews: 127,
      nextAvailable: 'Mâine, 14:00'
    },
    {
      id: '2',
      name: 'Dr. Alexandru Ionescu',
      specialty: 'Neurologie',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      reviews: 98,
      nextAvailable: 'Azi, 16:30'
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-white font-sans text-sm">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-3 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold flex items-center">
            <Stethoscope className="mr-1.5" size={18} />
            MedCare
          </h1>
          <div className="flex space-x-2 text-xs">
            <button 
              onClick={() => setActiveTab('home')}
              className={`${activeTab === 'home' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Acasă
            </button>
            <button 
              onClick={() => setActiveTab('doctors')}
              className={`${activeTab === 'doctors' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Medici
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
        <div className="bg-white rounded-lg shadow p-2 flex items-center">
          <Search size={16} className="text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Caută medic sau specialitate..."
            className="w-full px-2 py-1 text-sm outline-none"
          />
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs flex items-center">
            Caută
            <ArrowRight size={12} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-gray-50">
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 font-semibold">15+</div>
          <div className="text-gray-600 text-xs">Specialități</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 font-semibold">30+</div>
          <div className="text-gray-600 text-xs">Medici</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 font-semibold">4.9</div>
          <div className="text-gray-600 text-xs">Rating</div>
        </div>
      </div>

      {/* Specialties */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          Specialități Medicale
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="bg-blue-50 p-2 rounded-full">
                  <specialty.icon size={16} className="text-blue-600" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium text-gray-800 text-sm">{specialty.name}</h4>
                  <p className="text-gray-500 text-xs line-clamp-1">{specialty.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-gray-800">Medici Disponibili</h3>
          <button className="text-blue-600 text-xs flex items-center">
            Vezi toți
            <ArrowRight size={12} className="ml-0.5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-32">
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <h4 className="text-white font-medium text-sm">{doctor.name}</h4>
                  <p className="text-blue-100 text-xs">{doctor.specialty}</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-gray-700 text-xs">{doctor.rating}</span>
                    <span className="ml-1 text-gray-500 text-xs">({doctor.reviews})</span>
                  </div>
                  <div className="flex items-center text-green-600 text-xs">
                    <Clock size={12} className="mr-1" />
                    {doctor.nextAvailable}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-1.5 rounded text-xs flex items-center justify-center">
                  Programează Consultație
                  <Calendar size={12} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-4 bg-gray-50">
        <div className="space-y-3">
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
            <Phone size={16} className="text-blue-600" />
            <div className="ml-3">
              <div className="text-xs text-gray-600">Programări telefonice</div>
              <div className="text-sm font-medium">0800 123 456</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
            <Clock size={16} className="text-blue-600" />
            <div className="ml-3">
              <div className="text-xs text-gray-600">Program clinică</div>
              <div className="text-sm font-medium">L-V: 08:00 - 20:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-3 text-center text-xs">
        © 2025 MedCare. Toate drepturile rezervate.
      </footer>
    </div>
  );
};

export default MedicalDemo;