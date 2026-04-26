
import React from 'react';
import { ChevronLeft, Camera, Search, X, SlidersHorizontal, Mic } from 'lucide-react';

interface SearchScreenProps {
  onBack: () => void;
  onNavigateToFilter?: () => void;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ onBack, onNavigateToFilter }) => {
  const historyTags = [
    { label: 'Fresh apricots', active: false },
    { label: 'Fresh apples', active: true }, // Active state: Blue
    { label: 'Biscuit cake', active: false },
    { label: 'Amul chocolate', active: false },
    { label: 'Bingo mad angles', active: false },
    { label: 'Apples', active: false },
  ];

  const discoverTags = [
    '50% Off Items', 'Discount Products', 'Cookies', 'Nescafe', 'Masalas & Spices', 'Fresh Vegetable'
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
       {/* Header */}
       <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Search</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
           {/* Notification Dot - Blue */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3B82F6] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="px-5 mt-2 flex-1">
         {/* Search Bar & Filter */}
         <div className="flex gap-3 mb-8">
            <div className="flex-1 bg-white rounded-xl shadow-sm flex items-center px-4 py-3.5">
                <Search className="w-5 h-5 text-gray-400 mr-3" strokeWidth={2} />
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="flex-1 bg-transparent text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none"
                  defaultValue="Fresh"
                />
                <button 
                  onClick={() => {}} // Clear action placeholder
                  className="bg-gray-100 rounded-full p-0.5"
                >
                   <X className="w-3 h-3 text-gray-500" />
                </button>
            </div>
            {/* Filter Button - Blue */}
            <button 
                onClick={onNavigateToFilter}
                className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 hover:bg-blue-600 transition-colors flex-shrink-0"
            >
                <SlidersHorizontal className="w-6 h-6 text-white" />
            </button>
         </div>

         {/* Search History */}
         <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-base">Search History</h3>
                <button className="text-xs font-medium text-gray-400 hover:text-gray-600 underline decoration-gray-300">Clear</button>
            </div>
            <div className="flex flex-wrap gap-3">
                {historyTags.map((tag, idx) => (
                    <button 
                        key={idx}
                        className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                            tag.active 
                            ? 'bg-[#3B82F6] text-white shadow-md shadow-blue-200' 
                            : 'bg-white text-gray-500 hover:bg-gray-100 shadow-sm'
                        }`}
                    >
                        {tag.label}
                    </button>
                ))}
            </div>
         </div>

         {/* Discover More */}
         <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-base">Discover More</h3>
                <button className="text-xs font-medium text-gray-400 hover:text-gray-600 underline decoration-gray-300">Refresh</button>
            </div>
            <div className="flex flex-wrap gap-3">
                {discoverTags.map((tag, idx) => (
                    <button 
                        key={idx}
                        className="px-4 py-2.5 rounded-lg text-xs font-medium bg-white text-gray-500 hover:bg-gray-100 shadow-sm transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>
         </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-5 pb-8 flex gap-4 mt-auto">
         {/* Image Search - Icon Blue */}
         <button className="flex-1 bg-white rounded-2xl p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow active:scale-95 border border-transparent hover:border-blue-50">
             <Camera className="w-5 h-5 text-[#3B82F6]" strokeWidth={2.5} />
             <span className="text-sm font-bold text-gray-700">Image Search</span>
         </button>
         
         {/* Voice Search - Icon Blue */}
         <button className="flex-1 bg-white rounded-2xl p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow active:scale-95 border border-transparent hover:border-blue-50">
             <Mic className="w-5 h-5 text-[#3B82F6]" strokeWidth={2.5} />
             <span className="text-sm font-bold text-gray-700">Voice Search</span>
         </button>
      </div>

    </div>
  );
};

export default SearchScreen;
