import React from 'react';
import { ChevronLeft, Camera, ShoppingBag, Trash2 } from 'lucide-react';

interface MyFavouriteScreenProps {
  onBack: () => void;
}

const MyFavouriteScreen: React.FC<MyFavouriteScreenProps> = ({ onBack }) => {
  const items = [
    { id: 1, name: 'Orange', price: 35.00, quantity: 2, weight: '1 kg' },
    { id: 2, name: 'Pomegranate', price: 25.00, quantity: 2, weight: '1 kg', showDelete: true },
    { id: 3, name: 'Broccoli', price: 10.00, quantity: 1, weight: '1 kg' },
    { id: 4, name: 'Cherry Tomato', price: 20.00, quantity: 2, weight: '1 kg' },
    { id: 5, name: 'Green Peas', price: 10.00, quantity: 1, weight: '1 kg' },
    { id: 6, name: 'Corn Cobs', price: 20.00, quantity: 2, weight: '1 kg' },
    { id: 7, name: 'Leaves', price: 10.00, quantity: 1, weight: '1 kg' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">My Favourite</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="flex-1 px-5 pt-2 overflow-y-auto no-scrollbar space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-stretch gap-3 min-h-[100px]">
            {/* Main Card */}
            <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between transition-all">
               <div>
                  {/* Price - Changed Green to Orange (#F97316) */}
                  <div className="text-[#F97316] text-sm font-bold mb-1">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-xs font-medium">{item.weight}</p>
               </div>
               
               {/* Bag Button - Changed Red to Blue (#3B82F6) */}
               <button className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-md shadow-blue-200 hover:bg-blue-600 transition-colors active:scale-95">
                  <ShoppingBag className="w-4 h-4" />
               </button>
            </div>

            {/* Delete Action (Condition based) - Changed Red to Blue (#3B82F6) */}
            {item.showDelete && (
                <button className="w-24 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-white shadow-md shadow-blue-200 hover:bg-blue-600 transition-colors active:scale-95">
                   <Trash2 className="w-6 h-6" />
                </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavouriteScreen;