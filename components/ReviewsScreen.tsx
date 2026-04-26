
import React from 'react';
import { ChevronLeft, Edit, Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface ReviewsScreenProps {
  onBack: () => void;
}

const ReviewsScreen: React.FC<ReviewsScreenProps> = ({ onBack }) => {
  const reviews = [
    {
      id: 1,
      name: 'Mikey Lecon',
      stats: '978 Reviews, 250 Followers',
      rating: 3.0,
      text: "Simply dummy text of the printing and types etting when an unknown industry but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing randomised words which don't look even slightly believable.\n\nMany desktop publishing packages and web page editors now use search for 'lorem ipsum' will uncover many web sites.",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      photos: [
         'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80',
         'https://images.unsplash.com/photo-1582979512210-99b6a53385f9?auto=format&fit=crop&w=150&q=80',
         'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=150&q=80',
         'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=150&q=80'
      ]
    },
    {
      id: 2,
      name: 'Roboto kale',
      stats: '124 Reviews, 45 Followers',
      rating: 3.0,
      text: 'Printing and types etting Simply dummy text of the pwhen an unknown industry...',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      photos: []
    },
    {
      id: 3,
      name: 'Lily Rojar',
      stats: '56 Reviews, 12 Followers',
      rating: 3.0,
      text: 'The printing and Simply dummy text of t types etting when an unknown industry...',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      photos: []
    },
    {
      id: 4,
      name: 'Malang Nane',
      stats: '34 Reviews, 8 Followers',
      rating: 3.0,
      text: 'When an unknown industry Simply dummy text of the printing and types editing...',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80',
      photos: []
    },
    {
      id: 5,
      name: 'karla Mokon',
      stats: '89 Reviews, 120 Followers',
      rating: 3.0,
      text: 'Dummy text of the printing and types etwhen an unknown industrying when an unknown',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      photos: []
    },
  ];

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-[#F3F4F6]/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Reviews</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Edit className="w-5 h-5 text-[#F97316]" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 pb-8 flex-1 overflow-y-auto no-scrollbar space-y-4">
        {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-[24px] p-6 shadow-sm">
               {/* User Header */}
               <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                     {/* Avatar */}
                     <div className="w-14 h-14 rounded-full bg-pink-50 p-0.5 shadow-sm overflow-hidden">
                        <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover rounded-full"
                        />
                     </div>
                     <div>
                        <h3 className="text-gray-900 font-bold text-base leading-tight">{review.name}</h3>
                        <p className="text-gray-400 text-[10px] font-medium mt-1">{review.stats}</p>
                     </div>
                  </div>
                  {/* Follow Button - Red to Orange (#F97316) */}
                  <button className="px-5 py-2 rounded-full border border-[#F97316] text-[#F97316] text-[10px] font-bold hover:bg-orange-50 transition-colors active:scale-95">
                     Follow
                  </button>
               </div>
    
               {/* Rating & Actions Row */}
               <div className="flex items-center justify-between mb-6 pb-2">
                  <div className="flex items-center gap-2">
                     <div className="flex gap-1">
                        {[1, 2, 3].map((star) => (
                            <Star 
                               key={star} 
                               className="w-4 h-4 fill-[#F97316] text-[#F97316]" 
                            />
                        ))}
                         {[4, 5].map((star) => (
                            <Star 
                               key={star} 
                               className="w-4 h-4 fill-gray-100 text-gray-200" 
                            />
                        ))}
                     </div>
                     <span className="text-gray-400 font-bold text-sm ml-1">{review.rating.toFixed(1)}</span>
                  </div>
                  
                  <div className="flex gap-3">
                     {/* Thumbs Up - Red to Orange (#F97316) */}
                     <button className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-white shadow-md shadow-orange-200 hover:bg-orange-600 transition-colors">
                        <ThumbsUp className="w-5 h-5" strokeWidth={2.5} />
                     </button>
                     {/* Comment - Green to Blue (#3B82F6) */}
                     <button className="w-10 h-10 rounded-xl bg-[#3B82F6] flex items-center justify-center text-white shadow-md shadow-blue-200 hover:bg-blue-600 transition-colors">
                        <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                     </button>
                  </div>
               </div>
    
               {/* Text */}
               <div className="mb-6 space-y-4">
                  {review.text.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-500 text-xs leading-relaxed font-medium">
                          {paragraph}
                      </p>
                  ))}
               </div>

               {/* Photos Grid */}
               {review.photos && review.photos.length > 0 && (
                   <div className="grid grid-cols-4 gap-3">
                       {review.photos.map((photo, index) => (
                           <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-pink-50">
                               <img src={photo} alt="Review attachment" className="w-full h-full object-cover" />
                           </div>
                       ))}
                   </div>
               )}
            </div>
        ))}
      </div>

    </div>
  );
};

export default ReviewsScreen;
