import React, { useState } from 'react';
import { Menu, MapPin, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const RestaurantDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const menuItems = [
    {
      category: 'Signature BBQ',
      items: [
        { name: 'Smoked Brisket', description: 'Slow-smoked for 14 hours with our house rub', price: '$18' },
        { name: 'Pulled Pork', description: 'Tender pork shoulder with Carolina sauce', price: '$16' }
      ]
    },
    {
      category: 'Sandwiches',
      items: [
        { name: 'The Pitmaster', description: 'Brisket, pulled pork, slaw, pickles, special sauce', price: '$15' },
        { name: 'Smoked Chicken', description: 'Pulled chicken, Alabama white sauce, pickled onions', price: '$14' }
      ]
    },
    {
      category: 'Sides',
      items: [
        { name: 'Mac & Cheese', description: 'Creamy three-cheese blend with crispy top', price: '$6' },
        { name: 'Collard Greens', description: 'Slow-cooked with smoked ham hock', price: '$5' }
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-black font-sans text-white">
      {/* Mobile Navigation */}
      <nav className="bg-black text-white p-4 sticky top-0 z-10 border-b border-red-600">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-600">SMOKE & BONES</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setActiveTab('menu')}
              className={`${activeTab === 'menu' ? 'text-red-600' : 'text-white'} text-sm font-bold`}
            >
              MENU
            </button>
            <button 
              onClick={() => setActiveTab('location')}
              className={`${activeTab === 'location' ? 'text-red-600' : 'text-white'} text-sm font-bold`}
            >
              LOCATION
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'home' && (
          <div>
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="BBQ spread" 
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-black text-white uppercase tracking-wider">Real Wood. Real Smoke.</h2>
                  <p className="text-red-600 font-bold mt-2">AUTHENTIC BBQ SINCE 2018</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold uppercase text-red-600 mb-4">Today's Specials</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-white">Brisket Plate</h4>
                  <p className="text-sm text-gray-400">Served with two sides</p>
                  <p className="text-red-600 font-bold mt-2">$22</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-white">Pulled Pork Sandwich</h4>
                  <p className="text-sm text-gray-400">With slaw and pickles</p>
                  <p className="text-red-600 font-bold mt-2">$14</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock size={18} className="text-red-600 mr-2" />
                  <h4 className="font-bold text-white">Hours</h4>
                </div>
                <p className="text-sm text-gray-300">Wed-Sun: 11am - 9pm</p>
                <p className="text-sm text-gray-300">Mon-Tue: Closed</p>
                <p className="text-sm text-gray-300 italic mt-1">*Or until sold out</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Phone size={18} className="text-red-600 mr-2" />
                  <h4 className="font-bold text-white">Contact</h4>
                </div>
                <p className="text-sm text-gray-300">Phone: (555) 123-4567</p>
                <p className="text-sm text-gray-300">Email: info@smokeandbones.com</p>
              </div>
            </div>
            
            <button className="bg-red-600 text-white py-3 px-4 w-full hover:bg-red-700 transition-colors uppercase font-bold tracking-wider rounded-lg">
              Order Now
            </button>
          </div>
        )}
        
        {activeTab === 'menu' && (
          <div>
            <h2 className="text-2xl font-black text-red-600 mb-6 text-center uppercase tracking-wider">Our Menu</h2>
            
            <div className="mb-4 bg-gray-900 p-3 text-center rounded-lg">
              <p className="text-sm text-gray-300">
                All meats smoked daily. We're open until we sell out!
              </p>
            </div>
            
            <div className="space-y-6">
              {menuItems.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold uppercase text-red-600 border-b border-red-600 pb-2 mb-4">{section.category}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-gray-900 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-white">{item.name}</h4>
                            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                          </div>
                          <span className="font-bold text-red-600 ml-4">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-900 p-4 mb-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-white uppercase mb-2">Sauces</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>• House BBQ - Sweet & tangy tomato-based</p>
                <p>• Carolina Gold - Mustard-based with a kick</p>
                <p>• Alabama White - Creamy, peppery mayo-based</p>
                <p>• Spicy Habanero - Not for the faint of heart</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'location' && (
          <div>
            <h2 className="text-2xl font-black text-red-600 mb-6 text-center uppercase tracking-wider">Find Us</h2>
            
            <div className="bg-gray-900 h-48 mb-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-2 text-red-600" />
                <p className="text-gray-300">Map View</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold uppercase mb-2 flex items-center">
                  <MapPin size={18} className="text-red-600 mr-2" />
                  Address
                </h3>
                <p className="text-gray-300">
                  123 Smoke Street<br />
                  Barbecue City, TX 75001
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold uppercase mb-2 text-red-600">Parking</h3>
                <p className="text-gray-300">
                  Free parking available in our lot. Additional street parking available on weekends.
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold uppercase mb-2 text-red-600">Catering</h3>
                <p className="text-gray-300 mb-4">
                  We offer full-service catering for events of all sizes. Contact us for a custom quote.
                </p>
                <button className="w-full border border-red-600 text-red-600 py-2 px-4 rounded-lg hover:bg-red-600 hover:text-white transition-colors uppercase font-bold tracking-wider">
                  Catering Inquiry
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white p-4 mt-4 border-t border-red-600">
        <div className="flex justify-center space-x-4 mb-2">
          <Facebook size={20} className="text-red-600 hover:text-white transition-colors" />
          <Instagram size={20} className="text-red-600 hover:text-white transition-colors" />
          <Twitter size={20} className="text-red-600 hover:text-white transition-colors" />
        </div>
        <p className="text-center text-sm text-gray-500">© 2025 SMOKE & BONES BBQ. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default RestaurantDemo;