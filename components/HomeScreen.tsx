
import React from 'react';
import { MapPin, Bell, Search, Heart, Plus, Minus, ArrowRight, ShoppingBag, X } from 'lucide-react';

interface HomeScreenProps {
  onNavigateToProduct?: () => void;
  onSearchClick?: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToProduct, onSearchClick }) => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans">
      {/* Search Bar - Hidden on Desktop as it's in the header */}
      <div className="md:hidden px-5 mt-4 mb-6">
         <div 
           className="bg-white rounded-xl shadow-sm flex items-center px-4 py-3.5 cursor-pointer active:scale-[0.99] transition-transform"
           onClick={onSearchClick}
         >
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <span className="flex-1 text-sm font-medium text-gray-400">Search for products...</span>
            <div className="bg-gray-100 rounded-full p-1">
               <X className="w-3 h-3 text-gray-500" />
            </div>
         </div>
      </div>

      <div className="space-y-12">
        
        {/* Hero Banner - Desktop Optimized */}
        <section>
           <div className="w-full h-[300px] md:h-[450px] bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl flex items-center justify-between relative overflow-hidden shadow-2xl shadow-blue-200 px-8 md:px-16">
               <div className="z-10 w-full md:w-1/2">
                   <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-bold w-fit mb-6 uppercase tracking-widest">Summer Sale 2026</div>
                   <h2 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">Get 50% Off <br/><span className="text-blue-200">On Fresh Stock</span></h2>
                   <p className="text-blue-100 text-lg md:text-xl font-medium mb-8 max-w-md">On your first order. Use code: <span className="text-white font-extrabold bg-white/10 px-2 py-1 rounded">FRESH50</span></p>
                   <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:bg-gray-50 active:scale-95 transition-all">
                      Shop Now
                   </button>
               </div>
               
               {/* Hero Image */}
               <div className="absolute right-12 bottom-12 w-[300px] h-[300px] md:w-[500px] md:h-[500px] transform rotate-[-5deg] hidden md:block">
                   <div className="relative w-full h-full">
                     <img 
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                        alt="Grocery Basket" 
                        className="w-full h-full object-cover rounded-[40px] shadow-2xl border-8 border-white/20"
                     />
                     <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl animate-bounce">
                        <div className="text-blue-600 font-black text-2xl">50%</div>
                        <div className="text-gray-400 text-xs font-bold">OFFER</div>
                     </div>
                   </div>
               </div>

               {/* Decorative dots */}
               <div className="absolute top-10 right-10 flex gap-2 opacity-40">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
               
               {/* Circles */}
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
           </div>
        </section>

        {/* Explore by Category */}
        <section>
           <SectionHeader title="Explore Category" onSeeAll={() => {}} />
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              <CategoryBox 
                color="bg-white" 
                label="Vegetables" 
                image="https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=300&q=80"
              />
              <CategoryBox 
                color="bg-white" 
                label="Meat" 
                image="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80"
              />
              <CategoryBox 
                color="bg-white" 
                label="Bread" 
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"
              />
              <CategoryBox 
                color="bg-white" 
                label="Fruits" 
                image="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=300&q=80"
              />
              <CategoryBox 
                color="bg-white" 
                label="Water" 
                image="https://images.unsplash.com/photo-1523362628408-3c2601a0d057?auto=format&fit=crop&w=300&q=80"
              />
              <CategoryBox 
                color="bg-white" 
                label="Snacks" 
                image="https://images.unsplash.com/photo-1599490659223-ef37659c9ba6?auto=format&fit=crop&w=300&q=80"
              />
           </div>
        </section>

        {/* Exclusive Offer */}
        <section>
           <SectionHeader title="Exclusive Offers" onSeeAll={() => {}} />
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     isNew 
                     price="$165.00" 
                     name="India Gate Mogra Basmati Rice" 
                     weight="750 G"
                     image="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     discount="-15%" 
                     price="$98.00" 
                     name="Fresh Pomegranate" 
                     weight="Each Pcs"
                     image="https://images.unsplash.com/photo-1599527622879-1976219199f1?auto=format&fit=crop&w=300&q=80"
                     inCart
                     quantity={2}
                  />
              </div>
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     isNew
                     price="$165.00" 
                     name="Delight Nuts Raw Seeds Pumpkin" 
                     weight="750 G"
                     image="https://images.unsplash.com/photo-1605618645884-187515321356?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
              <div onClick={onNavigateToProduct} className="hidden lg:block">
                  <ProductCard 
                     discount="-20%" 
                     price="$45.00" 
                     name="Organic Baby Spinach" 
                     weight="200 G"
                     image="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
              <div onClick={onNavigateToProduct} className="hidden xl:block">
                  <ProductCard 
                     isNew
                     price="$12.00" 
                     name="Fresh Farm Eggs" 
                     weight="12 Pcs"
                     image="https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
           </div>
        </section>

        {/* Shop by Offer - Grid Layout */}
        <section className="bg-brand-blue rounded-[40px] p-12 text-center shadow-2xl shadow-blue-100">
           <h2 className="text-white text-3xl font-bold mb-12">Shop by Offers</h2>
           
           <div className="flex flex-wrap justify-center gap-12 mb-12">
              <OfferCircle 
                 gradient="from-[#FF4B4B] to-[#FF9E9E]" 
                 topText="FLAT" 
                 mainText="30%" 
                 subText="OFF" 
              />
              <OfferCircle 
                 gradient="from-[#14B8A6] to-[#5EEAD4]" 
                 topText="FLAT" 
                 mainText="40%" 
                 subText="OFF" 
              />
              <OfferCircle 
                 gradient="from-[#F59E0B] to-[#FCD34D]" 
                 topText="FLAT" 
                 mainText="50%" 
                 subText="OFF" 
              />
              <OfferCircle 
                 gradient="from-[#6366F1] to-[#818CF8]" 
                 title="BUY 1 GET 1"
                 titleLarge
                 subText="FREE" 
              />
              <OfferCircle 
                 gradient="from-[#84CC16] to-[#A3E635]" 
                 title="PICKS"
                 subText="MONTH"
                 midText="OF THE"
              />
              <OfferCircle 
                 gradient="from-[#D946EF] to-[#F0ABFC]" 
                 topText="UNDER" 
                 mainText="$99" 
              />
           </div>

           <button className="bg-white text-brand-blue font-bold py-4 px-12 rounded-2xl hover:scale-105 transition-all shadow-xl active:scale-95">
              Explore All Offers
           </button>
        </section>

        {/* Get Before Gone - Grid Layout */}
        <section>
           <SectionHeader title="Flash Deals" onSeeAll={() => {}} />
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <DealCard 
                 bgColor="bg-blue-50" 
                 accentColor="bg-blue-600" 
                 category="Home Cleaning" 
                 offer="Flat 32% Off" 
                 image="https://images.unsplash.com/photo-1584622050910-2486a42167d6?auto=format&fit=crop&w=300&q=80"
              />
              <DealCard 
                 bgColor="bg-rose-50" 
                 accentColor="bg-rose-600" 
                 category="Personal Care" 
                 offer="Flat 25% Off" 
                 image="https://images.unsplash.com/photo-1628198751509-3224b4231908?auto=format&fit=crop&w=300&q=80"
              />
              <DealCard 
                 bgColor="bg-emerald-50" 
                 accentColor="bg-emerald-600" 
                 category="Body Care" 
                 offer="Flat 15% Off" 
                 image="https://m.media-amazon.com/images/I/61s8-LqK4AL._AC_UF1000,1000_QL80_.jpg"
              />
              <DealCard 
                 bgColor="bg-amber-50" 
                 accentColor="bg-amber-600" 
                 category="Pantry Staples" 
                 offer="Flat 20% Off" 
                 image="https://m.media-amazon.com/images/I/81x-Z12nBVL._AC_UF1000,1000_QL80_.jpg"
              />
           </div>
        </section>

        {/* Best Selling - Full width Grid */}
        <section className="bg-gray-50 rounded-[40px] px-8 py-12">
           <SectionHeader title="Best Sellers" onSeeAll={() => {}} />
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     discount="-15%" 
                     price="$85.00" 
                     name="Colgate Vedshakti Toothpaste" 
                     weight="200 G"
                     image="https://images.unsplash.com/photo-1559591937-d2e8b28416d8?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     isNew
                     price="$165.00" 
                     name="Bingo Yumitos Salt Potato Chips" 
                     weight="100 G"
                     image="https://images.unsplash.com/photo-1621447504864-d8497512a868?auto=format&fit=crop&w=300&q=80"
                  />
              </div>
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     discount="-15%"
                     price="$85.00" 
                     name="Fortune Kachi Ghani Mustard Oil" 
                     weight="5 Ltr"
                     image="https://m.media-amazon.com/images/I/61i+0b2+D+L._AC_UF1000,1000_QL80_.jpg"
                  />
              </div>
              <div onClick={onNavigateToProduct}>
                  <ProductCard 
                     isNew
                     price="$191.00" 
                     name="Britannia Cheese Block" 
                     weight="400 G"
                     image="https://m.media-amazon.com/images/I/61-g+D+L._AC_UF1000,1000_QL80_.jpg"
                  />
              </div>
              <div onClick={onNavigateToProduct} className="hidden xl:block">
                  <ProductCard 
                     discount="-10%"
                     price="$42.00" 
                     name="Kissan Mixed Fruit Jam" 
                     weight="500 G"
                     image="https://m.media-amazon.com/images/I/71u9+8X1qUL._AC_UF1000,1000_QL80_.jpg"
                  />
              </div>
              <div onClick={onNavigateToProduct} className="hidden xl:block">
                  <ProductCard 
                     isNew
                     price="$155.00" 
                     name="Cadbury Dairy Milk Silk" 
                     weight="150 G"
                     image="https://m.media-amazon.com/images/I/61y8B3q9fLL._AC_UF1000,1000_QL80_.jpg"
                  />
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

/* --- Subcomponents --- */

const SectionHeader = ({ title, onSeeAll }: { title: string, onSeeAll?: () => void }) => (
  <div className="flex justify-between items-center px-5 mb-4">
    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    {onSeeAll && (
      <button onClick={onSeeAll} className="text-gray-900 hover:text-gray-600">
        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
      </button>
    )}
  </div>
);

const CategoryBox = ({ color, label, image }: { color: string, label: string, image: string }) => (
   <div className="flex flex-col gap-3 items-center w-full cursor-pointer group">
      <div className="w-full aspect-[5/4] rounded-2xl bg-white shadow-sm flex items-center justify-center relative overflow-hidden transition-all group-hover:shadow-lg border border-gray-100 group-hover:-translate-y-1">
         <img src={image} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <span className="text-sm font-bold text-gray-800 group-hover:text-brand-blue transition-colors">{label}</span>
   </div>
);

const ProductCard = ({ 
  isNew, 
  discount, 
  price, 
  name, 
  weight, 
  image, 
  inCart,
  quantity = 1
}: { 
  isNew?: boolean, 
  discount?: string, 
  price: string, 
  name: string, 
  weight: string, 
  image: string, 
  inCart?: boolean, 
  quantity?: number
}) => (
  <div className="w-full bg-white rounded-3xl p-5 shadow-sm flex flex-col relative border border-gray-100 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    {/* Tags */}
    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
      {isNew && <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider w-fit shadow-lg shadow-red-100">NEW</span>}
      {discount && <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-lg w-fit shadow-lg shadow-emerald-100">{discount}</span>}
    </div>
    
    <button className="absolute top-4 right-4 text-gray-300 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-full transition-all z-10">
      <Heart className="w-5 h-5" strokeWidth={2} />
    </button>

    {/* Image */}
    <div className="aspect-square w-full flex items-center justify-center mb-6 p-4">
       <img src={image} alt={name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
    </div>

    {/* Info */}
    <div className="mt-auto">
      <div className="text-emerald-600 font-black text-xl mb-2">{price}</div>
      <h3 className="text-gray-900 font-bold text-sm leading-snug mb-2 line-clamp-2 min-h-[40px] group-hover:text-brand-blue transition-colors">{name}</h3>
      <p className="text-gray-400 text-xs font-bold mb-6">{weight}</p>
      
      {/* Action */}
      {inCart ? (
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl h-12 px-2 border border-gray-100">
           <button className="w-10 h-10 flex items-center justify-center text-emerald-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"><Minus className="w-5 h-5" /></button>
           <span className="text-base font-black text-gray-900">{quantity}</span>
           <button className="w-10 h-10 flex items-center justify-center text-emerald-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"><Plus className="w-5 h-5" /></button>
        </div>
      ) : (
        <button className="w-full flex items-center justify-center gap-3 bg-gray-50 text-gray-500 font-bold text-xs py-4 rounded-2xl hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-100 transition-all">
          <ShoppingBag className="w-4 h-4" /> Add to Bag
        </button>
      )}
    </div>
  </div>
);

const OfferCircle = ({ 
   gradient, 
   topText, 
   mainText, 
   subText, 
   title, 
   titleLarge, 
   midText 
}: { 
   gradient: string, 
   topText?: string, 
   mainText?: string, 
   subText?: string,
   title?: string, 
   titleLarge?: boolean, 
   midText?: string
}) => (
  <div className={`w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center text-white text-center p-1 shadow-lg relative bg-gradient-to-br ${gradient} border-2 border-white/20 transition-transform hover:scale-105 cursor-pointer`}>
     {title && (
        <span className={`font-bold leading-none ${titleLarge ? 'text-sm mb-0.5' : 'text-xs'}`}>
           {title.split(' ').map((word, i) => <div key={i}>{word}</div>)}
        </span>
     )}
     
     {topText && <span className="text-[8px] font-medium opacity-90 leading-tight">{topText}</span>}
     {mainText && <span className="text-xl font-bold leading-none my-0.5 drop-shadow-sm">{mainText}</span>}
     {midText && <span className="text-[6px] font-bold uppercase tracking-wider">{midText}</span>}
     {subText && <span className="text-[8px] font-bold uppercase tracking-wider opacity-90">{subText}</span>}
  </div>
);

const DealCard = ({ bgColor, accentColor, category, offer, image }: { bgColor: string, accentColor: string, category: string, offer: React.ReactNode, image: string }) => (
   <div className={`${bgColor} w-full rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center h-48 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="relative z-10 w-2/3">
         <h3 className="text-gray-500 font-bold text-sm mb-2 uppercase tracking-widest">{category}</h3>
         <div className="text-gray-900 font-black text-3xl leading-tight">
             {typeof offer === 'string' ? (
                 <>
                   {offer.split(' ').slice(0, -1).join(' ')} <br/>
                   <span className="text-4xl text-brand-blue">{offer.split(' ').pop()}</span>
                 </>
             ) : offer}
         </div>
      </div>
      
      {/* Image */}
      <div className="absolute right-[-20px] bottom-[-20px] w-44 h-44 rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
          <img src={image} alt={category} className="w-full h-full object-contain mix-blend-multiply opacity-90" />
      </div>

      <button className={`absolute bottom-6 right-6 w-12 h-12 rounded-2xl ${accentColor} flex items-center justify-center text-white shadow-xl z-20 hover:scale-110 active:scale-95 transition-all`}>
         <ArrowRight className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Decorative Blur */}
      <div className={`absolute -right-10 -bottom-10 w-48 h-48 rounded-full ${accentColor} opacity-10 blur-3xl pointer-events-none`}></div>
   </div>
);

export default HomeScreen;
