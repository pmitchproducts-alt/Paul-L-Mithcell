export function renderHome(state, renderProductCard) {
  const currentCategory = state.selectedCategory;
  
  // Quick promo banner slides
  const promos = [
    { title: 'Fresh Strawberries', desc: 'Get 50% discount this week!', bg: 'from-blue-500 to-indigo-600', text: 'text-white', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80' },
    { title: 'Organic Avocado', desc: 'Rich in healthy fats - $5.99 bag', bg: 'from-emerald-500 to-teal-600', text: 'text-white', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&q=80' }
  ];

  // Distinct subcategories for quick horizontal chips
  const categoryChips = [
    { name: 'Fresh Fruit', icon: '🍎' },
    { name: 'Fresh Vegetables', icon: '🥦' },
    { name: 'Leafy Greens', icon: '🥬' },
    { name: 'Berries', icon: '🍓' },
    { name: 'Root Vegetables', icon: '🥔' }
  ];

  // Pick top 6 popular products for home page grid
  const popularProducts = state.fruitsAndVegetables.slice(0, 6);

  return `
    <div class="flex-1 flex flex-col px-5 pt-4 pb-20 overflow-y-auto no-scrollbar bg-[#F8F9FB]">
       <!-- Welcome Header -->
       <header class="flex justify-between items-center mb-6 shrink-0">
          <div class="flex items-center gap-3">
             <div class="w-11 h-11 rounded-full bg-blue-100 overflow-hidden border border-white shadow-sm flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Avatar" class="w-full h-full object-cover" />
             </div>
             <div>
                <div class="flex items-center gap-1 text-slate-400">
                   <span class="text-xs font-bold">Deliver to</span>
                   <i data-lucide="map-pin" class="w-3 h-3 text-brand-blue" stroke-width="2.5"></i>
                </div>
                <h3 class="text-sm font-black text-slate-800 flex items-center gap-1 leading-tight">
                   Home, Ahmedabad 
                   <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400"></i>
                </h3>
             </div>
          </div>
          
          <button onclick="navigate('notification')" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 relative transition-colors border border-slate-50">
             <i data-lucide="bell" class="w-5 h-5 text-slate-700"></i>
             <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-orange rounded-full ring-2 ring-white"></span>
          </button>
       </header>

       <!-- Big Title -->
       <div class="mb-5 shrink-0">
          <h2 class="text-2xl font-light text-slate-500 leading-tight">Good Morning!</h2>
          <h1 class="text-3xl font-black text-slate-800 leading-none">Lucy Martin</h1>
       </div>

       <!-- Search Bar trigger -->
       <div onclick="navigate('search')" class="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-center justify-between text-slate-400 mb-6 cursor-pointer shadow-sm hover:shadow-md transition-all shrink-0">
          <div class="flex items-center gap-3">
             <i data-lucide="search" class="w-5 h-5 text-slate-400"></i>
             <span class="text-sm font-semibold text-slate-400">Search fruits, vegetables, salad...</span>
          </div>
          <button onclick="event.stopPropagation(); navigate('filter')" class="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center hover:bg-slate-100 transition-colors">
             <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
          </button>
       </div>

       <!-- Promo Banners Carousel (Simple Swipe indicator) -->
       <div class="mb-6 shrink-0 relative overflow-hidden rounded-3xl bg-gradient-to-r ${promos[0].bg} p-6 flex justify-between items-center text-white shadow-xl shadow-blue-100 min-h-36">
          <div class="flex-1 space-y-2 pr-2">
             <span class="bg-white/20 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">Weekly Offer</span>
             <h3 class="text-xl font-black leading-tight">${promos[0].title}</h3>
             <p class="text-xs font-semibold text-white/80">${promos[0].desc}</p>
          </div>
          <div class="w-24 h-24 flex items-center justify-center">
             <img src="${promos[0].image}" alt="Strawberries" class="h-24 w-24 object-contain mix-blend-multiply drop-shadow-md rounded-2xl" />
          </div>
       </div>

       <!-- Categories Horizontal List -->
       <div class="mb-6 shrink-0">
          <div class="flex justify-between items-center mb-4">
             <h3 class="font-black text-slate-800 text-lg">Categories</h3>
             <button onclick="navigate('categories')" class="text-brand-blue font-black text-sm hover:underline flex items-center gap-1">
                View All 
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
             </button>
          </div>
          
          <div class="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5">
             ${categoryChips.map(chip => `
                <button onclick="navigate('categoryProducts', { category: '${chip.name}' })" class="flex items-center gap-2.5 bg-white border border-slate-50 rounded-2xl px-5 py-3.5 shadow-sm whitespace-nowrap hover:bg-slate-50 transition-colors shrink-0">
                   <span class="text-lg">${chip.icon}</span>
                   <span class="text-xs font-extrabold text-slate-700">${chip.name}</span>
                </button>
             `).join('')}
          </div>
       </div>

       <!-- Popular Items Grid -->
       <div class="flex-1">
          <div class="flex justify-between items-center mb-4">
             <h3 class="font-black text-slate-800 text-lg">Featured Organics</h3>
             <button onclick="navigate('categoryProducts', { category: 'Fresh Fruit' })" class="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">See Fresh Stock</button>
          </div>
          
          <div class="grid grid-cols-2 gap-4 pb-4">
             ${popularProducts.map(p => renderProductCard(p)).join('')}
          </div>
       </div>
    </div>
  `;
}

export function renderCategories(state) {
  // Available product subcategories in fruitsAndVegetables
  const categories = [
    { name: 'Fresh Fruit', icon: '🍎', count: '12 items', bg: 'bg-red-50 text-red-600 border-red-100' },
    { name: 'Fresh Vegetables', icon: '🥦', count: '15 items', bg: 'bg-green-50 text-green-600 border-green-100' },
    { name: 'Leafy Greens', icon: '🥬', count: '6 items', bg: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { name: 'Exotic Fruit', icon: '🥑', count: '5 items', bg: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
    { name: 'Berries', icon: '🍓', count: '6 items', bg: 'bg-pink-50 text-pink-600 border-pink-100' },
    { name: 'Root Vegetables', icon: '🥔', count: '6 items', bg: 'bg-amber-50 text-amber-600 border-amber-100' }
  ];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Categories</h1>
          <button onclick="navigate('search')" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="search" class="w-5 h-5 text-slate-800" stroke-width="2"></i>
          </button>
       </header>

       <!-- Main Grid -->
       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-24 space-y-4">
          <p class="text-slate-400 font-bold text-sm">Select a category to browse our organic farm fresh stock</p>
          
          <div class="grid grid-cols-2 gap-4 pt-2">
             ${categories.map(cat => `
                <div onclick="navigate('categoryProducts', { category: '${cat.name}' })" class="bg-white rounded-3xl p-5 border border-slate-50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center text-center group">
                   <div class="w-16 h-16 rounded-2xl ${cat.bg.split(' ')[0]} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                      ${cat.icon}
                   </div>
                   <h3 class="font-black text-slate-800 text-sm mb-1 leading-tight">${cat.name}</h3>
                   <span class="text-[10px] font-bold text-slate-400">${cat.count}</span>
                </div>
             `).join('')}
          </div>
       </div>
    </div>
  `;
}

export function renderCategoryProducts(state, renderProductCard) {
  const categoryName = state.selectedCategory || 'Fresh Fruit';
  
  // Filter products matching categoryName
  const filtered = state.fruitsAndVegetables.filter(p => p.subCategory === categoryName);

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800 truncate max-w-xs">${categoryName}</h1>
          <button onclick="navigate('filter')" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="sliders-horizontal" class="w-5 h-5 text-slate-800" stroke-width="2"></i>
          </button>
       </header>

       <!-- Product List Wrapper -->
       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-24 space-y-4">
          <div class="flex justify-between items-center text-xs text-slate-400 font-bold">
             <span>Showing ${filtered.length} Fresh items</span>
             <div class="flex items-center gap-1 cursor-pointer hover:text-brand-blue" onclick="navigate('filter')">
                <span>Filter & Sort</span>
                <i data-lucide="arrow-down-wide-narrow" class="w-3.5 h-3.5"></i>
             </div>
          </div>
          
          ${filtered.length === 0 ? `
             <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
                <i data-lucide="shopping-bag" class="w-16 h-16 stroke-1 mb-4"></i>
                <h3 class="font-black text-slate-800 mb-1">No items found</h3>
                <p class="text-sm">We are restocking this category shortly.</p>
             </div>
          ` : `
             <div class="grid grid-cols-2 gap-4 pb-4">
                ${filtered.map(p => renderProductCard(p)).join('')}
             </div>
          `}
       </div>
    </div>
  `;
}

export function renderSearch(state, renderProductCard) {
  const query = state.searchQuery || '';
  
  // Apply search query filter
  let results = state.fruitsAndVegetables;
  if (query) {
     results = results.filter(p => 
        p.productName.toLowerCase().includes(query.toLowerCase()) || 
        p.subCategory.toLowerCase().includes(query.toLowerCase())
     );
  } else {
     // Default search suggestions
     results = state.fruitsAndVegetables.slice(0, 4);
  }

  // Apply filters if set
  if (state.filterOpts.organicOnly) {
     results = results.filter(p => p.features?.some(f => f.toLowerCase().includes('organic')));
  }
  if (state.filterOpts.inStockOnly) {
     results = results.filter(p => p.inStock);
  }
  if (state.filterOpts.sortBy === 'price-low') {
     results.sort((a, b) => a.price - b.price);
  } else if (state.filterOpts.sortBy === 'price-high') {
     results.sort((a, b) => b.price - a.price);
  }

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header Search Input -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm gap-4 shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors shrink-0">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          
          <div class="flex-1 relative flex items-center">
             <i data-lucide="search" class="w-4.5 h-4.5 text-slate-400 absolute left-4"></i>
             <input type="text" id="searchBarInput" placeholder="Search vegetables, fruits..." value="${query}" class="w-full bg-white border border-slate-100 rounded-xl py-3 pl-11 pr-10 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" autofocus />
             ${query ? `
                <button onclick="clearSearch()" class="absolute right-4 text-slate-400 hover:text-slate-600">
                   <i data-lucide="x" class="w-4 h-4"></i>
                </button>
             ` : ''}
          </div>
          
          <button onclick="navigate('filter')" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors shrink-0">
             <i data-lucide="sliders-horizontal" class="w-5 h-5 text-slate-800" stroke-width="2"></i>
          </button>
       </header>

       <!-- Results scroll area -->
       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-6 space-y-4">
          <div class="flex justify-between items-center text-xs text-slate-400 font-bold mb-2">
             <span>${query ? `Search results for "${query}"` : 'Recommended for you'}</span>
             <span>${results.length} items</span>
          </div>

          ${results.length === 0 ? `
             <div class="flex flex-col items-center justify-center py-16 text-center text-slate-400">
                <i data-lucide="search-code" class="w-16 h-16 stroke-1 mb-4"></i>
                <h3 class="font-black text-slate-800 mb-1">No matches found</h3>
                <p class="text-sm">Try searching for other words like "apple", "spinach", "organic".</p>
             </div>
          ` : `
             <div class="grid grid-cols-2 gap-4 pb-4 animate-pop-in">
                ${results.map(p => renderProductCard(p)).join('')}
             </div>
          `}
       </div>
    </div>
  `;
}

export function renderFilter(state) {
  const currentSort = state.filterOpts.sortBy;
  const organicOnly = state.filterOpts.organicOnly;
  const inStockOnly = state.filterOpts.inStockOnly;

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up justify-between">
       <!-- Upper Section -->
       <div>
          <!-- Header -->
          <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
             <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
                <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             </button>
             <h1 class="text-lg font-black text-slate-800">Filter & Sort</h1>
             <button onclick="resetFilters()" class="text-xs font-black text-brand-blue hover:underline">Reset</button>
          </header>

          <div class="p-6 space-y-6">
             <!-- Sort Options -->
             <div class="space-y-3">
                <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">Sort Products By</h3>
                <div class="space-y-2">
                   <button onclick="setSortOption('popularity')" class="w-full flex justify-between items-center py-3.5 px-4 rounded-xl ${currentSort === 'popularity' ? 'bg-blue-50/50 border border-brand-blue/20 text-brand-blue' : 'bg-white border border-slate-100 text-slate-600'} font-bold text-sm text-left">
                      <span>Popularity</span>
                      ${currentSort === 'popularity' ? '<i data-lucide="check" class="w-4 h-4 text-brand-blue" stroke-width="3"></i>' : ''}
                   </button>
                   <button onclick="setSortOption('price-low')" class="w-full flex justify-between items-center py-3.5 px-4 rounded-xl ${currentSort === 'price-low' ? 'bg-blue-50/50 border border-brand-blue/20 text-brand-blue' : 'bg-white border border-slate-100 text-slate-600'} font-bold text-sm text-left">
                      <span>Price: Low to High</span>
                      ${currentSort === 'price-low' ? '<i data-lucide="check" class="w-4 h-4 text-brand-blue" stroke-width="3"></i>' : ''}
                   </button>
                   <button onclick="setSortOption('price-high')" class="w-full flex justify-between items-center py-3.5 px-4 rounded-xl ${currentSort === 'price-high' ? 'bg-blue-50/50 border border-brand-blue/20 text-brand-blue' : 'bg-white border border-slate-100 text-slate-600'} font-bold text-sm text-left">
                      <span>Price: High to Low</span>
                      ${currentSort === 'price-high' ? '<i data-lucide="check" class="w-4 h-4 text-brand-blue" stroke-width="3"></i>' : ''}
                   </button>
                </div>
             </div>

             <!-- Toggle Preferences -->
             <div class="space-y-3">
                <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider">Item Filters</h3>
                <div class="space-y-2">
                   <!-- Organic Only toggle -->
                   <div class="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-xl">
                      <div class="flex flex-col">
                         <span class="text-sm font-bold text-slate-800">USDA Certified Organic</span>
                         <span class="text-[10px] text-slate-400 font-semibold">Show only chemical-free foods</span>
                      </div>
                      <button onclick="toggleFilterOption('organicOnly')" class="w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${organicOnly ? 'bg-brand-blue justify-end' : 'bg-slate-200 justify-start'}">
                         <div class="bg-white w-4 h-4 rounded-full shadow-md"></div>
                      </button>
                   </div>

                   <!-- In stock toggle -->
                   <div class="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-xl">
                      <div class="flex flex-col">
                         <span class="text-sm font-bold text-slate-800">In Stock Only</span>
                         <span class="text-[10px] text-slate-400 font-semibold">Hide unavailable or seasonal out-of-stock</span>
                      </div>
                      <button onclick="toggleFilterOption('inStockOnly')" class="w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${inStockOnly ? 'bg-brand-blue justify-end' : 'bg-slate-200 justify-start'}">
                         <div class="bg-white w-4 h-4 rounded-full shadow-md"></div>
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </div>

       <!-- Apply Button -->
       <div class="p-6 shrink-0 border-t border-slate-100 bg-white">
          <button onclick="goBack()" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-lg">
             Apply Filters & Sort
          </button>
       </div>
    </div>
  `;
}
