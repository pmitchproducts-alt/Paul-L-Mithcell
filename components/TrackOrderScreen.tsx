import React from 'react';
import { ChevronLeft, ShoppingBag, Phone, Home, MapPin, Clock, Star } from 'lucide-react';

interface TrackOrderScreenProps {
  onBack: () => void;
}

const TrackOrderScreen: React.FC<TrackOrderScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans relative overflow-hidden">
      
      {/* --- Simulated Map Background --- */}
      <div className="absolute inset-0 z-0 bg-[#F3F4F6] overflow-hidden">
          {/* Map Blocks (Simulating Buildings/Roads) */}
          <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[30%] bg-white border border-gray-200 transform rotate-12"></div>
          <div className="absolute top-[5%] right-[-10%] w-[50%] h-[20%] bg-white border border-gray-200 transform -rotate-6"></div>
          <div className="absolute top-[30%] left-[-5%] w-[30%] h-[20%] bg-white border border-gray-200 transform rotate-3"></div>
          <div className="absolute top-[25%] right-[20%] w-[20%] h-[15%] bg-white border border-gray-200"></div>
          <div className="absolute top-[40%] right-[-5%] w-[40%] h-[25%] bg-white border border-gray-200 transform -rotate-3"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[25%] h-[15%] bg-white border border-gray-200 transform rotate-12"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[20%] bg-white border border-gray-200 transform -rotate-6"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[15%] bg-white border border-gray-200"></div>
          
          {/* Road/Path Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
              <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
                  </filter>
              </defs>
              
              {/* Path Segment 1: Store (Blue) -> Midpoint */}
              {/* Starting at roughly 80% width, 20% height */}
              <path 
                d="M320 180 C 320 250, 200 250, 200 350" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="5" 
                strokeLinecap="round"
                filter="url(#shadow)"
              />
              
              {/* Path Segment 2: Midpoint -> Home (Orange) */}
              <path 
                d="M200 350 C 200 450, 60 450, 60 580" 
                fill="none" 
                stroke="#F97316" 
                strokeWidth="5" 
                strokeLinecap="round"
                filter="url(#shadow)"
              />

              {/* Pulsing effect rings under markers */}
              <circle cx="320" cy="180" r="20" fill="#3B82F6" opacity="0.2" className="animate-ping" />
              <circle cx="60" cy="580" r="20" fill="#F97316" opacity="0.2" className="animate-ping" />
          </svg>

          {/* Markers */}
          
          {/* Store Marker (Blue) */}
          <div className="absolute top-[180px] left-[320px] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-[#3B82F6]">
                  <ShoppingBag className="w-5 h-5 text-[#3B82F6]" strokeWidth={2.5} />
              </div>
          </div>

          {/* Current Location Badge (Midpoint) */}
          <div className="absolute top-[350px] left-[200px] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#2D1B4E] text-white px-4 py-2 rounded-full shadow-lg flex flex-col items-center relative">
                  <span className="text-xs font-bold whitespace-nowrap"><span className="text-lg">35</span> min away</span>
                  {/* Triangle Pointer */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2D1B4E] rotate-45"></div>
              </div>
              {/* Car/Bike Icon Circle */}
              <div className="w-4 h-4 bg-gray-300 rounded-full border-2 border-white absolute -bottom-5 left-1/2 -translate-x-1/2 shadow-sm"></div>
          </div>

          {/* Home Marker (Orange) */}
          <div className="absolute top-[580px] left-[60px] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center shadow-md border-4 border-white ring-4 ring-orange-100">
                  <Home className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
          </div>
      </div>


      {/* --- Header --- */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Track Order</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Notification Dot - Orange */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>


      {/* --- Bottom Card --- */}
      <div className="absolute bottom-6 left-5 right-5 z-40">
          <div className="bg-white rounded-[32px] p-6 shadow-2xl shadow-gray-200/50">
              
              {/* Driver Info Header */}
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&q=80" alt="Driver" className="w-full h-full object-cover" />
                      </div>
                      <div>
                          <h3 className="text-gray-900 font-bold text-lg">Josef Macwan</h3>
                          <p className="text-gray-400 text-xs font-medium mb-1">Courier</p>
                          <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
                              <span className="text-xs font-bold text-gray-800">4.5</span>
                              <span className="text-xs text-gray-400">(254)</span>
                          </div>
                      </div>
                  </div>
                  {/* Call Button - Orange */}
                  <button className="w-12 h-12 bg-[#F97316] hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-200 transition-transform active:scale-95">
                      <Phone className="w-5 h-5 fill-white" />
                  </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-6"></div>

              {/* Delivery Details */}
              <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#F43F5E] fill-[#F43F5E]" />
                      </div>
                      <div>
                          <h4 className="text-gray-900 font-bold text-sm">A/234, Kigs Plazaa, Mithakhali</h4>
                          <p className="text-gray-400 text-xs font-medium">Delivery Address</p>
                      </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#F97316]" strokeWidth={2.5} />
                      </div>
                      <div>
                          <h4 className="text-gray-900 font-bold text-sm">35-40 min</h4>
                          <p className="text-gray-400 text-xs font-medium">Estimated Delivery Time</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>

    </div>
  );
};

export default TrackOrderScreen;