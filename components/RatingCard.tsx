
import React from 'react';
import { ReviewCategory } from '../types';
import { Star, ShoppingBag, Truck } from 'lucide-react';

interface RatingCardProps {
  rating: number;
  category: ReviewCategory;
  onRatingChange: (rating: number) => void;
  onCategoryChange: (category: ReviewCategory) => void;
}

const RatingCard: React.FC<RatingCardProps> = ({
  rating,
  category,
  onRatingChange,
  onCategoryChange,
}) => {
  const renderStarRow = (starCount: number, widthPercent: string) => {
    const isSelected = rating === starCount;

    return (
      <button
        key={starCount}
        onClick={() => onRatingChange(starCount)}
        className={`w-full flex items-center gap-3 py-2 group transition-all duration-300 ease-out ${
          isSelected ? 'scale-105' : 'hover:scale-[1.02]'
        }`}
      >
        <div className="w-20 text-right flex items-center justify-end gap-1.5">
          <span className={`text-white transition-all duration-300 ${
            isSelected ? 'text-sm font-bold drop-shadow-md' : 'text-xs font-medium opacity-75'
          }`}>
            {starCount} Star{starCount > 1 ? 's' : ''}
          </span>
          <Star 
             className={`w-3.5 h-3.5 text-white transition-all duration-300 ${
               isSelected ? 'opacity-100 fill-white rotate-0' : 'opacity-0 -rotate-90 w-0'
             }`}
          />
        </div>
        
        <div className={`flex-1 rounded-full overflow-hidden transition-all duration-300 border border-white/10 ${
            isSelected ? 'bg-white/20 h-5 shadow-inner' : 'bg-white/10 h-3 group-hover:bg-white/15'
        }`}>
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out relative ${
              isSelected ? 'opacity-100 shadow-[0_2px_4px_rgba(0,0,0,0.1)]' : 'opacity-50 group-hover:opacity-70'
            }`}
            style={{ 
              width: widthPercent,
              backgroundColor: '#F97316'
            }}
          >
             {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             )}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="bg-[#3B82F6] rounded-xl p-5 shadow-lg shadow-blue-200 mb-4 overflow-hidden relative transition-colors duration-500">
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex flex-col items-center mb-6 relative z-10">
        <h2 className="text-white text-lg font-bold mb-5 tracking-tight">Rate your experience</h2>
        
        {/* Custom Toggle */}
        <div className="flex items-center p-1.5 bg-black/20 rounded-full backdrop-blur-md border border-white/10 relative">
           <button 
             onClick={() => onCategoryChange('Shopping')}
             className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ease-out active:scale-95 ${
               category === 'Shopping' 
                 ? 'bg-white text-[#3B82F6] shadow-lg scale-100' 
                 : 'text-white/80 hover:bg-white/10 hover:text-white'
             }`}
           >
              <ShoppingBag className={`w-4 h-4 ${category === 'Shopping' ? 'fill-[#3B82F6]/20' : ''}`} strokeWidth={2.5} />
              <span className="text-xs font-bold tracking-wide">
                Shopping
              </span>
           </button>

           <button 
             onClick={() => onCategoryChange('Delivery')}
             className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ease-out active:scale-95 ${
               category === 'Delivery' 
                 ? 'bg-white text-[#3B82F6] shadow-lg scale-100' 
                 : 'text-white/80 hover:bg-white/10 hover:text-white'
             }`}
           >
              <Truck className={`w-4 h-4 ${category === 'Delivery' ? 'fill-[#3B82F6]/20' : ''}`} strokeWidth={2.5} />
              <span className="text-xs font-bold tracking-wide">
                Delivery
              </span>
           </button>
        </div>
      </div>

      <div className="space-y-1 relative z-10">
        {renderStarRow(5, '100%')}
        {renderStarRow(4, '80%')}
        {renderStarRow(3, '60%')}
        {renderStarRow(2, '40%')}
        {renderStarRow(1, '20%')}
      </div>
    </div>
  );
};

export default RatingCard;
