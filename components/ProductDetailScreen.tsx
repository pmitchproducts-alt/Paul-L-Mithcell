import React, { useState } from 'react';
import { ChevronLeft, ShoppingBag, Heart, Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductDetailScreenProps {
  onBack: () => void;
  onNavigateToReviews?: () => void;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ onBack, onNavigateToReviews }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1582979512210-99b6a53385f9?auto=format&fit=crop&w=400&q=80"
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        {/* Notification Icon */}
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Dot: Red -> Blue */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3B82F6] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-6 md:px-0">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:max-w-6xl md:mx-auto md:mt-12">
          {/* Product Image Area */}
          <div className="relative mb-6 md:mb-0">
             {/* In Stock Badge: Green -> Orange */}
             <span className="bg-orange-50 text-[#F97316] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide absolute top-0 left-0 z-10 md:top-4 md:left-4">
               In Stock
             </span>
             
             {/* Heart Icon: Green -> Orange */}
             <button className="absolute top-0 right-0 text-[#F97316] z-10 md:top-4 md:right-4">
                <Heart className="w-8 h-8 fill-[#F97316] md:w-10 md:h-10 transition-transform hover:scale-110" />
             </button>

             {/* Image Carousel / Main Image */}
             <div className="md:bg-white md:rounded-[40px] md:p-8 md:shadow-xl md:border md:border-gray-100">
               <div 
                 className="h-64 md:h-[500px] w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar my-4"
                 onScroll={handleScroll}
               >
                  {productImages.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex items-center justify-center snap-center">
                        <img 
                            src={img} 
                            alt={`Product View ${index + 1}`} 
                            className="h-full object-contain mix-blend-multiply scale-110 md:scale-100" 
                        />
                    </div>
                  ))}
               </div>

               {/* Pagination Dots */}
               <div className="flex justify-center gap-1.5 mb-2 mt-4 md:mt-8">
                  {productImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'bg-[#F97316] w-6' : 'bg-gray-200'
                      }`}
                    />
                  ))}
               </div>
               
               {/* Desktop Thumbnails */}
               <div className="hidden md:flex gap-4 justify-center mt-8">
                  {productImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-20 rounded-2xl border-2 overflow-hidden transition-all ${currentImageIndex === idx ? 'border-[#F97316] scale-110' : 'border-gray-100 hover:border-gray-300'}`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
             </div>
          </div>

          {/* Details Container */}
          <div className="bg-white rounded-t-[40px] md:rounded-[40px] px-6 py-8 md:p-12 shadow-sm min-h-[500px] md:border md:border-gray-100 md:shadow-xl">
             {/* Title & Price */}
             <div className="mb-8">
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg mb-4 inline-block uppercase tracking-wider">Fruits & Vegetables</span>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2">Fresh Orange</h1>
                <p className="text-gray-400 text-lg font-bold mb-6">1 kg Unit</p>
                
                <div className="flex items-center justify-between md:justify-start md:gap-12 md:bg-gray-50 md:p-6 md:rounded-[30px]">
                   <div className="flex items-center gap-4">
                      {/* Price: Green -> Orange */}
                      <span className="text-3xl md:text-5xl font-black text-[#F97316]">$35.00</span>
                      <span className="text-xl font-bold text-orange-200 line-through tracking-wider">$42.00</span>
                   </div>
                   {/* Reviews - Clickable to navigate */}
                   <button 
                      onClick={onNavigateToReviews}
                      className="flex items-center gap-2 hover:bg-white hover:shadow-sm rounded-2xl px-4 py-2 transition-all border border-transparent md:bg-white"
                   >
                      <span className="text-lg font-black text-gray-800">4.5</span>
                      <div className="flex text-[#F97316]">
                         <Star className="w-4 h-4 fill-[#F97316]" />
                         <Star className="w-4 h-4 fill-[#F97316]" />
                         <Star className="w-4 h-4 fill-[#F97316]" />
                         <Star className="w-4 h-4 fill-[#F97316]" />
                         <Star className="w-4 h-4 fill-[#F97316] text-opacity-50" />
                      </div>
                      <span className="text-sm text-gray-400 font-bold ml-1">(98 Reviews)</span>
                   </button>
                </div>
             </div>

             {/* Action Section */}
             <div className="flex flex-col md:flex-row gap-6 mb-10">
                {/* Quantity Selector */}
                <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-2xl p-4 md:p-6">
                   <span className="font-bold text-gray-900 text-lg mr-4">Quantity</span>
                   <div className="flex items-center gap-6 bg-white rounded-xl shadow-sm px-4 py-2 border border-gray-100">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#F97316] transition-colors">
                         <Minus className="w-6 h-6 font-black" />
                      </button>
                      <span className="font-black text-gray-900 text-xl w-6 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#F97316] transition-colors">
                         <Plus className="w-6 h-6 font-black" />
                      </button>
                   </div>
                </div>

                {/* Add to Cart Button */}
                <button className="flex-[1.5] bg-[#F97316] text-white font-black text-lg py-5 rounded-3xl shadow-2xl shadow-orange-100 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-[0.98] hover:bg-orange-600">
                   Add to cart <ShoppingBag className="w-6 h-6" />
                </button>
             </div>

             {/* Tabs or Sections */}
             <div className="space-y-4">
               {/* Description */}
               <div className="bg-gray-50 rounded-3xl p-6">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">Description</h3>
                     <ChevronUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                     Orange comes from the Citrus family that is low on Calories and is highly nutritious. It is rich in Vitamin C that prevents Cancer, Diabetes, Heart diseases, controls Blood pressure and enhances skin health. Apart from Vitamin C, phosphorus and magnesium, it contains several minerals too.
                  </p>
               </div>

               {/* Product Information */}
               <div className="bg-gray-50 rounded-3xl p-6">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">Specifications</h3>
                     <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] items-center text-gray-400 font-black uppercase tracking-widest leading-none">Brand</span>
                        <span className="font-black text-gray-800 text-sm">Loose Product</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] items-center text-gray-400 font-black uppercase tracking-widest leading-none">Origin</span>
                        <span className="font-black text-gray-800 text-sm">India Local Farm</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] items-center text-gray-400 font-black uppercase tracking-widest leading-none">Food Type</span>
                        <div className="flex items-center gap-2">
                          <div className="border-2 border-[#F97316] p-0.5 rounded-md w-5 h-5 flex items-center justify-center">
                             <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                          </div>
                          <span className="font-black text-gray-800 text-sm">Vegetarian</span>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] items-center text-gray-400 font-black uppercase tracking-widest leading-none">Category</span>
                        <span className="font-black text-gray-800 text-sm">Fresh Produce</span>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Related Products - Full Width Grid for Desktop */}
        <div className="md:max-w-6xl md:mx-auto mt-16 md:mt-24 px-6 md:px-0">
           <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-black text-2xl md:text-4xl text-gray-900 mb-2">Frequently Bought Together</h3>
                <p className="text-gray-400 font-bold">Related products you might like</p>
              </div>
              <button className="text-brand-blue font-black hover:underline px-6 py-2 rounded-xl bg-blue-50">View All</button>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              <MiniProductCard 
                 name="Fresh Strawberry" 
                 weight="500 gm" 
                 price="$25.00" 
                 image="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80"
                 isNew 
              />
              <MiniProductCard 
                 name="Green Kiwifruit" 
                 weight="6 Pcs" 
                 price="$18.99" 
                 image="https://images.unsplash.com/photo-1585059895524-72359e06138a?auto=format&fit=crop&w=400&q=80"
                 isNew 
              />
              <MiniProductCard 
                 name="Sweet Pomegranate" 
                 weight="1 kg" 
                 price="$37.00" 
                 image="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80"
                 isNew 
              />
              <MiniProductCard 
                 name="Red Cherry" 
                 weight="250 gm" 
                 price="$12.00" 
                 image="https://images.unsplash.com/photo-1528821128474-27f9e78e57ff?auto=format&fit=crop&w=400&q=80"
                 isNew 
              />
              <MiniProductCard 
                 name="Blueberry" 
                 weight="125 gm" 
                 price="$15.00" 
                 image="https://images.unsplash.com/photo-1497534446932-c946e7316ad1?auto=format&fit=crop&w=400&q=80"
                 isNew 
              />
           </div>
        </div>
      </div>

    </div>
  );
};

// Mini Product Card Component
const MiniProductCard = ({ name, weight, price, image, isNew }: any) => (
  <div className="min-w-[140px] bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col relative">
     <div className="flex justify-between mb-2">
        {isNew && <span className="bg-[#FEF3C7] text-[#D97706] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>}
        {/* Heart: Green -> Orange */}
        <Heart className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
     </div>
     <div className="h-20 w-full flex items-center justify-center mb-2">
        <img src={image} alt={name} className="h-full object-contain mix-blend-multiply" />
     </div>
     <span className="text-[9px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded w-fit mb-1">Fruits & Vegetables</span>
     <h4 className="text-xs font-bold text-gray-900 truncate mb-0.5">{name}</h4>
     <p className="text-[10px] text-gray-400 font-medium mb-2">{weight}</p>
     <div className="flex justify-between items-center mt-auto">
        {/* Price: Green -> Orange */}
        <span className="text-sm font-bold text-[#F97316]">{price}</span>
        {/* Add Button: Red/Pink -> Blue */}
        <button className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-sm hover:bg-blue-600 transition-colors">
           <ShoppingBag className="w-3 h-3" />
        </button>
     </div>
  </div>
);

export default ProductDetailScreen;