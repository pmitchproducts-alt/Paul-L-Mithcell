import React from 'react';
import { ChevronLeft, Camera, Search, X, SlidersHorizontal } from 'lucide-react';

interface FollowersScreenProps {
  onBack: () => void;
}

const FollowersScreen: React.FC<FollowersScreenProps> = ({ onBack }) => {
  const followers = [
    { id: 1, name: 'Mikey Lecon', handle: '@mikeylecon', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80' },
    { id: 2, name: 'Roboto kale', handle: '@roboto', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
    { id: 3, name: 'Lily Rojar', handle: '@lily_R', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    { id: 4, name: 'Malang Nane', handle: '@malangN', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80' },
    { id: 5, name: 'karla Mokon', handle: '@karla_mkn', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' },
    { id: 6, name: 'Merry Sui', handle: '@merry_i', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
    { id: 7, name: 'Braly Lou', handle: '@braly_L', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80' },
    { id: 8, name: 'Emma Ova', handle: '@emmaO', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
  ];

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col font-sans pb-28">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-[#F3F4F6]/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Friends</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      {/* Search & Filter */}
      <div className="px-5 mb-6 flex gap-3">
        <div className="flex-1 bg-white rounded-xl shadow-sm flex items-center px-4 py-3">
           <Search className="w-5 h-5 text-gray-400 mr-3" strokeWidth={2} />
           <input 
             type="text" 
             placeholder="Search for products..." 
             className="flex-1 bg-transparent text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none"
           />
           <button className="bg-gray-100 rounded-full p-0.5">
              <X className="w-3 h-3 text-gray-500" />
           </button>
        </div>
        {/* Filter Button - Changed Red to Blue */}
        <button className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 hover:bg-blue-600 transition-colors flex-shrink-0">
           <SlidersHorizontal className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Grid List */}
      <div className="px-5 grid grid-cols-2 gap-4 pb-4">
         {followers.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-3 border-2 border-white shadow-sm">
                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-0.5">{user.name}</h3>
                <p className="text-gray-400 text-xs font-medium mb-4">{user.handle}</p>
                
                {/* Follow Button - Changed Red to Blue */}
                <button className="w-24 py-1.5 rounded-full bg-white border border-[#3B82F6] text-[#3B82F6] text-xs font-bold hover:bg-[#3B82F6] hover:text-white transition-all shadow-sm">
                  Follow
                </button>
            </div>
         ))}
      </div>
    </div>
  );
};

export default FollowersScreen;