import React from 'react';
import { ChevronLeft, ShoppingBag, Search, X, SlidersHorizontal, Heart, Apple, Salad } from 'lucide-react';

interface CategoryProductsScreenProps {
  onBack: () => void;
  onProductClick?: () => void;
}

const CategoryProductsScreen: React.FC<CategoryProductsScreenProps> = ({ onBack, onProductClick }) => {
  const products = [
    { id: 1, name: 'Orange', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=300&q=80', isNew: true },
    { id: 2, name: 'Broccoli', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1459411621453-7edd0c4b7cb0?auto=format&fit=crop&w=300&q=80', isNew: true },
    { id: 3, name: 'Tomato', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80', isNew: false },
    { id: 4, name: 'Pomegranate', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80', isNew: true },
    { id: 5, name: 'Green Peas', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1592323603562-b9e69c36297d?auto=format&fit=crop&w=300&q=80', isNew: true },
    { id: 6, name: 'Lemon', weight: '1 kg', price: '$35.00', image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=300&q=80', isNew: true },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans relative">
      {/* Header Background - Blue */}
      <div className="bg-[#3B82F6] h-[280px] w-full absolute top-0 left-0 rounded-b-[40px] z-0 shadow-lg shadow-blue-200"></div>

      {/* Header Content */}
      <header className="flex justify-between items-center px-6 py-5 relative z-10">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
        <div className="text-center">
            <h1 className="text-xl font-bold text-white leading-tight">Fruits &<br/>Vegetables</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-colors relative">
          <ShoppingBag className="w-5 h-5 text-white" strokeWidth={2.5} />
          {/* Notification Dot - Changed Red to Orange */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full border border-white"></span>
        </button>
      </header>

      {/* Hero Icon Circle */}
      <div className="relative z-10 flex justify-center mt-2 mb-6">
         <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center relative">
             <div className="absolute inset-2 border-2 border-dashed border-gray-100 rounded-full"></div>
             {/* Icon - Blue */}
             <Apple className="w-12 h-12 text-[#3B82F6]" strokeWidth={1.5} />
             <div className="absolute -bottom-1 -right-1">
                <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                   <Salad className="w-4 h-4 text-white" />
                </div>
             </div>
         </div>
      </div>

      {/* Search & Filter */}
      <div className="px-5 mb-6 relative z-10 flex gap-3">
        <div className="flex-1 bg-white rounded-xl shadow-sm flex items-center px-4 py-3.5">
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
        {/* Filter Button - Changed Red to Orange */}
        <button className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex-shrink-0">
           <SlidersHorizontal className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Product Grid */}
      <div className="flex-1 px-5 pb-24 overflow-y-auto no-scrollbar z-10">
         <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
                <div key={product.id} onClick={onProductClick} className="cursor-pointer">
                    <ProductCard {...product} />
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

const ProductCard = ({ name, weight, price, image, isNew }: any) => (
  <div className="bg-white rounded-2xl p-3 shadow-sm flex flex-col relative group hover:shadow-md transition-shadow h-64">
    <div className="flex justify-between items-start mb-2">
       {isNew ? (
           <span className="bg-[#FEF3C7] text-[#D97706] text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">New</span>
       ) : <div></div>}
       {/* Heart - Blue */}
       <button className="text-[#3B82F6] hover:text-blue-600">
          <Heart className="w-5 h-5 fill-[#3B82F6]" /> 
       </button>
    </div>

    <div className="flex-1 w-full flex items-center justify-center mb-2 p-2">
       <img src={image} alt={name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
    </div>

    <div className="mt-auto">
        <span className="text-[10px] text-gray-400 font-medium block mb-0.5">Fruits & Vegetables</span>
        <h3 className="text-gray-900 font-bold text-sm leading-tight mb-1 truncate">{name}</h3>
        <p className="text-gray-400 text-xs font-medium mb-3">{weight}</p>
        
        <div className="flex justify-between items-center">
             {/* Price - Blue */}
            <span className="text-[#3B82F6] font-bold text-base">{price}</span>
            {/* Add Button - Changed Red to Orange */}
            <button className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-white shadow-md shadow-orange-100 hover:bg-orange-600 transition-colors">
                <ShoppingBag className="w-3.5 h-3.5" />
            </button>
        </div>
    </div>
  </div>
);

export default CategoryProductsScreen;