import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, Star, Check } from 'lucide-react';

interface FilterScreenProps {
  onBack?: () => void;
}

const SORT_OPTIONS = [
  'Popularity',
  'Lowest First',
  'Highest First',
  'Discount',
  'Free Shipping',
  'Same Day Delivery',
];

const CATEGORIES = [
  'Fruits & Vegetables',
  'Dairy & Bakery',
  'Staples',
  'Snacks & Branded Foods',
  'Beverages',
  'Personal Care',
  'Home Care',
  'Baby Care',
  'Home & Kitchen',
  'Pet Care',
];

const FilterScreen: React.FC<FilterScreenProps> = ({ onBack }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 400]);
  const [rating, setRating] = useState<number>(3);
  const [selectedSort, setSelectedSort] = useState<string>('Popularity');
  const [selectedCategory, setSelectedCategory] = useState<string>('Dairy & Bakery');

  // Simple Dual Slider Visual Logic
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const val = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      if (index === 0) {
        newRange[0] = Math.min(val, newRange[1] - 10);
      } else {
        newRange[1] = Math.max(val, newRange[0] + 10);
      }
      return newRange;
    });
  };

  const maxPrice = 500;
  const leftPercent = (priceRange[0] / maxPrice) * 100;
  const rightPercent = (priceRange[1] / maxPrice) * 100;

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-brand-blue">Apply Filters</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-brand-orange">
          <RotateCcw className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </header>

      <div className="p-4 space-y-4">
        
        {/* Price Range */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="text-brand-blue font-semibold text-sm mb-6">Price Range</h3>
          
          <div className="flex justify-between text-brand-blue font-bold text-sm mb-4">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>

          <div className="relative h-2 w-full mt-2 mb-6">
            {/* Track Background */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200 rounded-full"></div>
            {/* Active Range */}
            <div 
              className="absolute top-0 h-2 bg-brand-orange rounded-full"
              style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}
            ></div>

            {/* Range Inputs (Invisible but interactive) */}
            <input 
              type="range" min="0" max={maxPrice} value={priceRange[0]}
              onChange={(e) => handleRangeChange(e, 0)}
              className="absolute top-0 w-full h-2 opacity-0 pointer-events-none z-20 cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6"
            />
             <input 
              type="range" min="0" max={maxPrice} value={priceRange[1]}
              onChange={(e) => handleRangeChange(e, 1)}
              className="absolute top-0 w-full h-2 opacity-0 pointer-events-none z-20 cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6"
            />

            {/* Visual Handles */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-[3px] border-brand-orange rounded-full shadow pointer-events-none z-10"
              style={{ left: `calc(${leftPercent}% - 10px)` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
            </div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-[3px] border-brand-orange rounded-full shadow pointer-events-none z-10"
              style={{ left: `calc(${rightPercent}% - 10px)` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="text-brand-blue font-semibold text-sm mb-4">Star Rating</h3>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star 
                    className={`w-7 h-7 ${star <= rating ? 'fill-brand-orange text-brand-orange' : 'text-gray-300'}`} 
                  />
                </button>
              ))}
            </div>
            <span className="text-brand-blue font-semibold text-sm">{rating} Stars</span>
          </div>
        </div>

        {/* Sort Options */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="text-brand-blue font-semibold text-sm mb-2">Sort Options</h3>
          <div className="divide-y divide-gray-50">
            {SORT_OPTIONS.map((option) => {
              const isSelected = selectedSort === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedSort(option)}
                  className="w-full flex items-center justify-between py-3.5 group"
                >
                  <span className={`text-sm ${isSelected ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                    {option}
                  </span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-brand-orange border-brand-orange' : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="text-brand-blue font-semibold text-sm mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="px-4 mt-2 mb-6">
        <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all duration-200 transform active:scale-[0.98]">
          Apply Filters
        </button>
      </div>

    </div>
  );
};

export default FilterScreen;