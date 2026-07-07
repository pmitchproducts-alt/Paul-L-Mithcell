export function renderProductDetail(state, getProductBySku) {
  const product = getProductBySku(state.selectedSku);
  const isFav = state.favorites.includes(product.sku);
  
  // Cart state
  const cartItem = state.cart.find(item => item.sku === product.sku);
  const currentQuantity = cartItem ? cartItem.quantity : 1;
  const isInCart = !!cartItem;

  const productImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1610348725531-843dff147e2c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1579613832125-5d34a13fe2a1?auto=format&fit=crop&w=400&q=80"
  ];

  // Pick related products (slice first 3 in stock, excluding self)
  const related = state.fruitsAndVegetables.filter(p => p.sku !== product.sku).slice(0, 3);

  return `
    <div class="flex-1 flex flex-col bg-[#F3F4F6] relative animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <button onclick="navigate('checkout')" class="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
             <i data-lucide="shopping-bag" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             <span class="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-brand-blue rounded-full ring-1 ring-white"></span>
          </button>
       </header>

       <!-- Main Scroll Container -->
       <div class="flex-1 overflow-y-auto no-scrollbar pb-10">
          
          <!-- Image Carousel Area -->
          <div class="relative px-6 mb-6">
             <span class="bg-blue-50 text-brand-blue text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide absolute top-0 left-6 z-10">
                ${product.inStock ? 'In Stock' : 'Out of Stock'}
             </span>
             
             <button onclick="toggleFavorite('${product.sku}')" class="absolute top-0 right-6 text-brand-blue z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-brand-blue text-brand-blue' : 'text-slate-400'}" stroke-width="2.5"></i>
             </button>

             <!-- Large Image -->
             <div class="h-60 w-full flex items-center justify-center my-4 bg-white/40 rounded-3xl p-4">
                <img src="${product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80'}" alt="${product.productName}" class="h-44 object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300" />
             </div>
          </div>

          <!-- Details Container -->
          <div class="bg-white rounded-t-[40px] px-6 py-8 shadow-sm space-y-6">
             <!-- Title & Price -->
             <div>
                <span class="text-[10px] font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md uppercase tracking-wider mb-3 inline-block">${product.subCategory}</span>
                <h1 class="text-2xl font-black text-slate-900 leading-tight mb-1">${product.productName}</h1>
                <p class="text-slate-400 text-sm font-bold mb-4">${product.unit} Unit</p>
                
                <div class="flex items-center justify-between">
                   <span class="text-3xl font-black text-brand-blue">$${product.price.toFixed(2)}</span>
                   
                   <!-- Reviews summary click -->
                   <button onclick="navigate('reviews')" class="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 rounded-xl px-3 py-1.5 transition-all">
                      <span class="text-xs font-black text-slate-800">4.5</span>
                      <div class="flex text-amber-400">
                         <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
                      </div>
                      <span class="text-[10px] text-slate-400 font-bold ml-0.5">(98 Reviews)</span>
                   </button>
                </div>
             </div>

             <!-- Quantity Selector & Cart Button -->
             <div class="flex gap-4">
                <div class="flex items-center justify-between bg-slate-50 rounded-2xl p-2 shrink-0 border border-slate-100">
                   <button onclick="setDetailQuantity(Math.max(1, ${currentQuantity} - 1))" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-brand-blue transition-colors">
                      <i data-lucide="minus" class="w-4 h-4 font-black" stroke-width="3"></i>
                   </button>
                   <span id="detailQty" class="font-black text-slate-900 text-base w-8 text-center">${currentQuantity}</span>
                   <button onclick="setDetailQuantity(${currentQuantity} + 1)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-brand-blue transition-colors">
                      <i data-lucide="plus" class="w-4 h-4 font-black" stroke-width="3"></i>
                   </button>
                </div>

                <button onclick="addDetailToCart('${product.sku}')" class="flex-1 bg-brand-blue hover:bg-blue-600 text-white font-black text-sm py-4 rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-95">
                   ${isInCart ? 'Update Basket' : 'Add to basket'} 
                   <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                </button>
             </div>

             <!-- Description Accordion (Simplified visual style) -->
             <div class="space-y-3">
                <div class="bg-slate-50/50 rounded-2xl p-4 border border-slate-100/50">
                   <div class="flex justify-between items-center mb-2">
                      <h3 class="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Product Description</h3>
                      <i data-lucide="chevron-up" class="w-4 h-4 text-brand-blue"></i>
                   </div>
                   <p class="text-xs text-slate-500 leading-relaxed font-semibold">
                      ${product.longDescription || product.shortDescription}
                   </p>
                </div>

                <div class="bg-slate-50/50 rounded-2xl p-4 border border-slate-100/50">
                   <div class="flex justify-between items-center">
                      <h3 class="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Specifications</h3>
                      <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
                   </div>
                   <div class="grid grid-cols-2 gap-y-2.5 gap-x-4 mt-3 text-xs">
                      <div>
                         <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">Features</span>
                         <span class="font-bold text-slate-700">${product.features?.join(', ') || 'Freshly Sourced'}</span>
                      </div>
                      <div>
                         <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">SKU</span>
                         <span class="font-mono text-slate-500 font-bold">${product.sku}</span>
                      </div>
                   </div>
                </div>
             </div>

             <!-- Frequently Bought Together Related Products -->
             <div class="pt-2">
                <h3 class="font-black text-slate-800 text-sm mb-4">Frequently Bought Together</h3>
                <div class="grid grid-cols-3 gap-3">
                   ${related.map(r => `
                      <div onclick="navigate('productDetail', { sku: '${r.sku}' })" class="bg-slate-50 p-2.5 rounded-2xl border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:bg-slate-100 transition-colors">
                         <img src="${r.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=120&q=80'}" alt="${r.productName}" class="h-14 object-contain mix-blend-multiply mb-1.5" />
                         <span class="text-[10px] font-black text-slate-800 leading-tight truncate w-full">${r.productName}</span>
                         <span class="text-[10px] font-black text-brand-blue mt-0.5">$${r.price.toFixed(2)}</span>
                      </div>
                   `).join('')}
                </div>
             </div>
          </div>
       </div>
    </div>
  `;
}

export function renderReviews(state) {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Reviews & Ratings</h1>
          <button onclick="navigate('review')" class="w-10 h-10 flex items-center justify-center bg-brand-blue rounded-xl shadow-md text-white hover:bg-blue-600 transition-colors">
             <i data-lucide="plus" class="w-5 h-5" stroke-width="2.5"></i>
          </button>
       </header>

       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 space-y-6">
          
          <!-- Rating Stats Breakdown -->
          <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
             <div class="text-center space-y-1">
                <h2 class="text-4xl font-black text-slate-800">4.5</h2>
                <div class="flex text-amber-400 justify-center">
                   <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
                </div>
                <span class="text-[10px] text-slate-400 font-bold block">98 total ratings</span>
             </div>
             
             <!-- Histogram bars -->
             <div class="flex-1 ml-6 space-y-1.5 text-[10px] text-slate-400 font-bold">
                <div class="flex items-center gap-2">
                   <span class="w-2 shrink-0">5</span>
                   <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="bg-brand-blue h-full rounded-full" style="width: 70%"></div>
                   </div>
                   <span class="w-6 shrink-0 text-right">72%</span>
                </div>
                <div class="flex items-center gap-2">
                   <span class="w-2 shrink-0">4</span>
                   <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="bg-brand-blue h-full rounded-full" style="width: 20%"></div>
                   </div>
                   <span class="w-6 shrink-0 text-right">18%</span>
                </div>
                <div class="flex items-center gap-2">
                   <span class="w-2 shrink-0">3</span>
                   <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="bg-brand-blue h-full rounded-full" style="width: 5%"></div>
                   </div>
                   <span class="w-6 shrink-0 text-right">5%</span>
                </div>
                <div class="flex items-center gap-2">
                   <span class="w-2 shrink-0">2</span>
                   <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="bg-brand-blue h-full rounded-full" style="width: 2%"></div>
                   </div>
                   <span class="w-6 shrink-0 text-right">2%</span>
                </div>
                <div class="flex items-center gap-2">
                   <span class="w-2 shrink-0">1</span>
                   <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="bg-brand-blue h-full rounded-full" style="width: 1%"></div>
                   </div>
                   <span class="w-6 shrink-0 text-right">1%</span>
                </div>
             </div>
          </div>

          <!-- Reviews List -->
          <div class="space-y-4">
             <div class="flex justify-between items-center">
                <h3 class="font-black text-slate-800 text-sm">Customer Feedback</h3>
                <span class="text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer">Sort: Newest</span>
             </div>

             <div class="space-y-4">
                ${state.reviews.map(rev => `
                   <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                      <div class="flex justify-between items-start">
                         <div>
                            <h4 class="font-black text-slate-800 text-sm leading-tight">${rev.name}</h4>
                            <span class="text-[10px] text-slate-400 font-bold">${rev.date}</span>
                         </div>
                         
                         <!-- Star indicator -->
                         <div class="flex items-center bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg gap-1">
                            <span class="text-xs font-black text-slate-800">${rev.rating}</span>
                            <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
                         </div>
                      </div>
                      
                      <p class="text-xs text-slate-500 leading-relaxed font-medium">
                         ${rev.text}
                      </p>
                      
                      ${(rev.positive?.length || rev.negative?.length) ? `
                         <div class="flex flex-wrap gap-1.5 pt-1">
                            ${rev.positive?.map(tag => `<span class="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide border border-emerald-100/50">${tag}</span>`).join('')}
                            ${rev.negative?.map(tag => `<span class="bg-rose-50 text-rose-600 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide border border-rose-100/50">${tag}</span>`).join('')}
                         </div>
                      ` : ''}
                   </div>
                `).join('')}
             </div>
          </div>

          <!-- Add custom floating review helper banner -->
          <div class="bg-blue-50/50 border border-brand-blue/10 p-4 rounded-2xl flex items-center justify-between">
             <div class="flex-1">
                <h4 class="font-black text-slate-800 text-xs uppercase mb-0.5">Write a smart review!</h4>
                <p class="text-[10px] text-slate-500 font-semibold leading-relaxed">Let our built-in Gemini Assistant co-write your feedback instantly based on tags!</p>
             </div>
             <button onclick="navigate('review')" class="bg-brand-blue hover:bg-blue-600 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md shrink-0 ml-4">Write Now</button>
          </div>
       </div>
    </div>
  `;
}

export function renderAddReview(state) {
  const currentRating = state.tempRating || 5;
  const currentCategory = state.tempCategory || 'Shopping';
  
  // Tag sectional list
  const positives = ["Freshness", "Friendly Support", "Fast Shipping", "Affordable", "Great Quality", "Secure Packing"];
  const negatives = ["Late Delivery", "Damaged Items", "Wrong Item", "Overpriced", "Poor Quality", "Bad Support"];

  const activePositives = state.tempPositives || [];
  const activeNegatives = state.tempNegatives || [];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Add Review</h1>
          <div class="w-10"></div>
       </header>

       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 pt-4 space-y-6">
          <!-- Star selectors -->
          <div class="text-center space-y-3">
             <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">How was your overall experience?</h3>
             <div class="flex justify-center gap-3">
                ${[1, 2, 3, 4, 5].map(star => `
                   <button onclick="setReviewRating(${star})" class="w-12 h-12 rounded-full ${star <= currentRating ? 'bg-amber-50 text-amber-500 scale-105' : 'bg-slate-50 text-slate-300'} flex items-center justify-center transition-all duration-300">
                      <i data-lucide="star" class="w-6 h-6 ${star <= currentRating ? 'fill-amber-500' : ''}" stroke-width="2.5"></i>
                   </button>
                `).join('')}
             </div>
          </div>

          <!-- Review Category -->
          <div class="space-y-2">
             <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">Review Category</h3>
             <div class="flex gap-3">
                <button onclick="setReviewCategory('Shopping')" class="flex-1 py-3 px-4 rounded-xl border font-bold text-xs ${currentCategory === 'Shopping' ? 'bg-blue-50 border-brand-blue text-brand-blue' : 'bg-white border-slate-100 text-slate-500'}">
                   Shopping Experience
                </button>
                <button onclick="setReviewCategory('Delivery')" class="flex-1 py-3 px-4 rounded-xl border font-bold text-xs ${currentCategory === 'Delivery' ? 'bg-blue-50 border-brand-blue text-brand-blue' : 'bg-white border-slate-100 text-slate-500'}">
                   Delivery Service
                </button>
             </div>
          </div>

          <!-- Positive Tags -->
          <div class="space-y-2">
             <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">What went well? (Select multiple)</h3>
             <div class="flex flex-wrap gap-2">
                ${positives.map(tag => {
                  const isActive = activePositives.includes(tag);
                  return `
                     <button onclick="toggleReviewTag('positive', '${tag}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${isActive ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'}">
                        + ${tag}
                     </button>
                  `;
                }).join('')}
             </div>
          </div>

          <!-- Negative Tags -->
          <div class="space-y-2">
             <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">What could be improved?</h3>
             <div class="flex flex-wrap gap-2">
                ${negatives.map(tag => {
                  const isActive = activeNegatives.includes(tag);
                  return `
                     <button onclick="toggleReviewTag('negative', '${tag}')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${isActive ? 'bg-rose-50 border-rose-300 text-rose-700' : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'}">
                        - ${tag}
                     </button>
                  `;
                }).join('')}
             </div>
          </div>

          <!-- Drag and drop photo simulator -->
          <div class="space-y-2">
             <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">Upload Product Photos</h3>
             <div id="dropZone" class="border-2 border-dashed border-slate-200 bg-white rounded-2xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-all flex flex-col items-center justify-center space-y-1">
                <i data-lucide="camera" class="w-8 h-8 text-slate-400 mb-1"></i>
                <span class="text-xs font-bold text-slate-700">Drag or click to upload photos</span>
                <span class="text-[10px] text-slate-400 font-medium">JPEG, PNG formats up to 5MB</span>
             </div>
          </div>

          <!-- Review Text Block with AI Writer -->
          <div class="space-y-3">
             <div class="flex justify-between items-center">
                <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">Review Details</h3>
                
                <!-- AI WRITER TRIGGER -->
                <button onclick="generateAIReview()" id="aiWriterBtn" class="bg-blue-50 hover:bg-blue-100 text-brand-blue font-black text-[10px] py-2 px-3.5 rounded-xl flex items-center gap-1 shadow-sm border border-brand-blue/10 transition-colors">
                   <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                   AI Writer Co-pilot
                </button>
             </div>
             
             <div class="relative">
                <textarea id="reviewTextArea" placeholder="Explain your feedback or let the AI writer construct a professional review automatically based on your selected tags..." class="w-full h-32 p-4 bg-white border border-slate-100 rounded-2xl text-xs font-medium text-slate-700 placeholder-slate-300 resize-none focus:outline-none focus:border-brand-blue shadow-sm leading-relaxed"></textarea>
                
                <!-- Loading overlays -->
                <div id="aiLoader" class="absolute inset-0 bg-white/85 backdrop-blur-xs rounded-2xl flex items-center justify-center gap-2.5 hidden">
                   <div class="w-5 h-5 rounded-full border-2 border-brand-blue border-t-transparent animate-spin"></div>
                   <span class="text-xs font-black text-slate-800">Gemini AI co-pilot writing review...</span>
                </div>
             </div>
          </div>

          <!-- Submit button -->
          <button onclick="submitReview()" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all transform active:scale-95 text-lg">
             Submit Review
          </button>
       </div>
    </div>
  `;
}
