import React, { useState } from 'react';
import { 
  GraduationCap,
  Book,
  Users,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  PlayCircle,
  Award,
  BookOpen,
  MessageSquare,
  BrainCircuit
} from 'lucide-react';

const EducationDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const courses = [
    {
      id: '1',
      title: 'Programare Web',
      instructor: 'Prof. Elena Popescu',
      level: 'Intermediar',
      duration: '12 săptămâni',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      id: '2',
      title: 'Marketing Digital',
      instructor: 'Dr. Andrei Ionescu',
      level: 'Avansat',
      duration: '8 săptămâni',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    }
  ];

  const features = [
    {
      icon: BrainCircuit,
      title: 'Învățare Adaptivă',
      description: 'Sistem personalizat bazat pe progresul tău'
    },
    {
      icon: Users,
      title: 'Învățare Colaborativă',
      description: 'Proiecte de grup și discuții interactive'
    },
    {
      icon: PlayCircle,
      title: 'Conținut Video',
      description: 'Lecții video de înaltă calitate'
    },
    {
      icon: Award,
      title: 'Certificare',
      description: 'Certificate recunoscute în industrie'
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-white font-sans text-sm">
      {/* Navigation */}
      <nav className="bg-indigo-600 text-white p-3 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold flex items-center">
            <GraduationCap className="mr-1.5" size={18} />
            EduPro
          </h1>
          <div className="flex space-x-2 text-xs">
            <button 
              onClick={() => setActiveTab('home')}
              className={`${activeTab === 'home' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Acasă
            </button>
            <button 
              onClick={() => setActiveTab('courses')}
              className={`${activeTab === 'courses' ? 'bg-white/20' : ''} px-2.5 py-1 rounded-full`}
            >
              Cursuri
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)]" style={{ backgroundSize: '24px 24px' }}></div>
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Învață. Crește. Reușește.</h2>
            <p className="text-indigo-100 text-sm">Platformă de învățare modernă pentru viitorul tău</p>
            <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors flex items-center mx-auto">
              Începe Gratuit
              <ArrowRight size={14} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 p-4">
        <div className="bg-indigo-50 p-3 rounded-lg text-center">
          <div className="text-indigo-600 font-semibold">50+</div>
          <div className="text-indigo-900 text-xs">Cursuri</div>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg text-center">
          <div className="text-indigo-600 font-semibold">1000+</div>
          <div className="text-indigo-900 text-xs">Studenți</div>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg text-center">
          <div className="text-indigo-600 font-semibold">4.9</div>
          <div className="text-indigo-900 text-xs">Rating</div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-gray-900">Cursuri Populare</h3>
          <button className="text-indigo-600 text-xs flex items-center">
            Vezi toate
            <ArrowRight size={12} className="ml-0.5" />
          </button>
        </div>
        
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-32">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <h4 className="text-white font-medium text-sm">{course.title}</h4>
                  <p className="text-gray-200 text-xs">{course.instructor}</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    <span className="ml-1 text-gray-700 text-xs">{course.rating}</span>
                    <span className="ml-1 text-gray-500 text-xs">({course.reviews} recenzii)</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <Clock size={12} className="mr-1" />
                    {course.duration}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-indigo-600 font-medium text-sm">199 RON</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-1.5 rounded text-xs flex items-center justify-center">
                  Înscrie-te Acum
                  <ArrowRight size={12} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="p-4 bg-indigo-50">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          De Ce Să Înveți cu Noi
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <feature.icon size={16} className="text-indigo-600" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-4 text-white text-center">
          <h3 className="font-semibold mb-2">Începe Să Înveți Astăzi</h3>
          <p className="text-indigo-100 text-xs mb-3">
            Primele 7 zile gratuite, fără obligații
          </p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors">
            Creează Cont Gratuit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-3 text-center text-xs mt-4">
        © 2025 EduPro. Toate drepturile rezervate.
      </footer>
    </div>
  );
};

export default EducationDemo;