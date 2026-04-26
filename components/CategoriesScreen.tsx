import React from 'react';
import { ChevronLeft, Camera, Apple, Croissant, Wheat, Pizza, Wine, Sparkles, SprayCan, Baby, CookingPot, Dog } from 'lucide-react';

interface CategoriesScreenProps {
  onBack: () => void;
}

interface CategoryData {
  id: string;
  title: string;
  color: string;
  icon: React.ElementType;
}

const CATEGORIES: CategoryData[] = [
  { id: '1', title: 'Fruits & Vegetables', color: '#43A047', icon: Apple },
  { id: '2', title: 'Dairy & Bakery', color: '#E69838', icon: Croissant },
  { id: '3', title: 'Staples', color: '#82774E', icon: Wheat },
  { id: '4', title: 'Snacks & Branded Foods', color: '#B94A2D', icon: Pizza },
  { id: '5', title: 'Beverages', color: '#5D647B', icon: Wine },
  { id: '6', title: 'Personal Care', color: '#95609B', icon: Sparkles },
  { id: '7', title: 'Home Care', color: '#2082BA', icon: SprayCan },
  { id: '8', title: 'Baby Care', color: '#F05788', icon: Baby },
  { id: '9', title: 'Home & Kitchen', color: '#786D5F', icon: CookingPot },
  { id: '10', title: 'Pet Foods', color: '#BA893D', icon: Dog },
];

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-28">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Categories</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="flex-1 px-5 pt-8 overflow-y-auto no-scrollbar">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-12">
            {CATEGORIES.map((category) => (
               <CategoryCard 
                  key={category.id}
                  title={category.title}
                  color={category.color}
                  Icon={category.icon}
               />
            ))}
         </div>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  color: string;
  Icon: React.ElementType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, color, Icon }) => {
  return (
    <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white transform transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer">
       {/* Top Half */}
       <div className="h-[55%] bg-white flex items-start justify-center pt-5 px-3 text-center">
          <span className="font-bold text-sm leading-tight" style={{ color: color }}>
            {title}
          </span>
       </div>
       
       {/* Bottom Half */}
       <div className="h-[45%]" style={{ backgroundColor: color }}></div>
       
       {/* Icon Overlay */}
       <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div 
             className="w-20 h-20 rounded-full border-[5px] border-white flex items-center justify-center shadow-sm" 
             style={{ backgroundColor: color }}
          >
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
       </div>
    </div>
  );
};

export default CategoriesScreen;