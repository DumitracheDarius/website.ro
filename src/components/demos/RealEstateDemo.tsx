import React, { useState } from 'react';
import { Search, MapPin, Home, BedDouble, Bath, Square, Heart, ArrowRight } from 'lucide-react';

const RealEstateDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('search');
  
  const properties = [
    {
      id: 1,
      title: 'Apartament Modern',
      location: 'Centru, București',
      price: '€189,000',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
      beds: 2,
      baths: 1,
      area: '75m²',
      type: 'Apartament'
    },
    {
      id: 2,
      title: 'Vilă cu Piscină',
      location: 'Pipera, București',
      price: '€450,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      beds: 4,
      baths: 3,
      area: '220m²',
      type: 'Vilă'
    },
    {
      id: 3,
      title: 'Penthouse Exclusivist',
      location: 'Floreasca, București',
      price: '€395,000',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      beds: 3,
      baths: 2,
      area: '150m²',
      type: 'Penthouse'
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-100 font-sans">
      {/* Mobile Navigation */}
      <nav className="bg-white text-gray-900 p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center text-blue-600">
            <Home className="mr-2" size={24} />
            LuxEstate
          </h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('search')}
              className={`${activeTab === 'search' ? 'text-blue-600' : 'text-gray-600'} text-sm font-bold`}
            >
              SEARCH
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`${activeTab === 'saved' ? 'text-blue-600' : 'text-gray-600'} text-sm font-bold`}
            >
              SAVED
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="p-4 bg-white border-b">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Properties</h2>
          <button className="text-blue-600 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
                  <Heart size={20} className="text-red-500" />
                </button>
                <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                  <span className="text-blue-600 font-bold">{property.price}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {property.location}
                </div>
                <div className="flex items-center justify-between text-gray-600 text-sm border-t pt-4">
                  <div className="flex items-center">
                    <BedDouble size={16} className="mr-1" />
                    {property.beds}
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    {property.baths}
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    {property.area}
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
                  View Details
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-600 p-4 mt-4 border-t">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Home size={16} className="mr-2 text-blue-600" />
            <span className="font-bold text-gray-900">LuxEstate</span>
          </div>
          <p className="text-xs">© 2025 LuxEstate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateDemo;