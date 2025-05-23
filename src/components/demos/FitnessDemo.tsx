import React, { useState } from 'react';
import { Dumbbell, Calendar, Clock, Users, ArrowRight, Star } from 'lucide-react';

const FitnessDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const classes = [
    { name: 'HIIT Workout', time: '6:00 AM', duration: '45 min', trainer: 'Alex', intensity: 'High' },
    { name: 'Yoga Flow', time: '8:00 AM', duration: '60 min', trainer: 'Sarah', intensity: 'Medium' },
    { name: 'Spin Class', time: '5:30 PM', duration: '45 min', trainer: 'Mike', intensity: 'High' },
    { name: 'Strength Training', time: '7:00 PM', duration: '60 min', trainer: 'Jessica', intensity: 'High' }
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-900 font-sans text-white">
      {/* Mobile Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <Dumbbell className="mr-2" size={20} />
            PowerFit
          </h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('classes')}
              className={`${activeTab === 'classes' ? 'text-white' : 'text-white/70'} text-sm font-bold`}
            >
              CLASSES
            </button>
            <button 
              onClick={() => setActiveTab('trainers')}
              className={`${activeTab === 'trainers' ? 'text-white' : 'text-white/70'} text-sm font-bold`}
            >
              TRAINERS
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'home' && (
          <div>
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Transform Your Body</h2>
                  <p className="text-lg">Achieve your fitness goals with us</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-1">30+</h3>
                <p className="text-sm text-blue-100">Weekly Classes</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg text-center">
                <h3 className="font-bold text-2xl mb-1">10+</h3>
                <p className="text-sm text-purple-100">Expert Trainers</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock size={18} className="text-blue-400 mr-2" />
                  <h4 className="font-bold">Today's Schedule</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• HIIT Workout - 6:00 AM</p>
                  <p>• Yoga Flow - 8:00 AM</p>
                  <p>• Spin Class - 5:30 PM</p>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-blue-400 mr-2" />
                  <h4 className="font-bold">Hours</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Mon-Fri: 5am - 10pm</p>
                  <p>Sat: 7am - 8pm</p>
                  <p>Sun: 8am - 6pm</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold flex items-center justify-center">
              Start Free Trial
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        )}

        {activeTab === 'classes' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Today's Classes</h2>
            
            <div className="space-y-4">
              {classes.map((cls, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-blue-400">{cls.name}</h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Clock size={14} className="mr-1" />
                        <span>{cls.time} • {cls.duration}</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Trainer: {cls.trainer}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      cls.intensity === 'High' ? 'bg-red-400/20 text-red-400' : 
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {cls.intensity}
                    </span>
                  </div>
                  <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded text-sm font-medium">
                    Book Class
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Class Packages</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Single Class</span>
                  <span className="font-medium">$20</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>10 Class Pack</span>
                  <span className="font-medium">$180</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Unlimited Monthly</span>
                  <span className="font-medium">$150/month</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trainers' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Our Trainers</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    AP
                  </div>
                  <div>
                    <h3 className="font-bold">Alex Popescu</h3>
                    <p className="text-sm text-gray-400">HIIT & Functional Training</p>
                    <div className="flex items-center mt-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <span className="text-sm text-gray-400 ml-1">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded text-sm font-medium">
                  Book Session
                </button>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    MI
                  </div>
                  <div>
                    <h3 className="font-bold">Maria Ionescu</h3>
                    <p className="text-sm text-gray-400">Yoga & Pilates</p>
                    <div className="flex items-center mt-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <span className="text-sm text-gray-400 ml-1">4.8 (98 reviews)</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded text-sm font-medium">
                  Book Session
                </button>
              </div>
            </div>

            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Personal Training</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Single Session</span>
                  <span className="font-medium">$65</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>5 Session Pack</span>
                  <span className="font-medium">$300</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>10 Session Pack</span>
                  <span className="font-medium">$550</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 mt-4 border-t border-gray-800">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Dumbbell size={16} className="mr-2" />
            <span className="font-bold">PowerFit</span>
          </div>
          <p className="text-xs text-gray-400">© 2025 PowerFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FitnessDemo;