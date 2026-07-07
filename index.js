import { fruitsAndVegetables } from './products.js';

// Import all screens
import { renderOnboarding, renderSignIn, renderForgotPassword, renderPhoneVerification, renderPasswordResetSuccess } from './src/screens/onboarding.js';
import { renderHome, renderCategories, renderCategoryProducts, renderSearch, renderFilter } from './src/screens/home.js';
import { renderProductDetail, renderReviews, renderAddReview } from './src/screens/product.js';
import { renderCheckout, renderCreditCards, renderAddCard, renderDeliveryAddress, renderAddAddress, renderOrderSuccess, renderOrderDecline, renderTrackOrder } from './src/screens/checkout.js';
import { renderSideMenu, renderAboutMe, renderChangePassword, renderFollowers, renderMyFavourite, renderLiveChat } from './src/screens/profile.js';
import { renderScanQr, renderNotification, renderPromocode } from './src/screens/misc.js';

// Global application state
const state = {
  currentScreen: 'onboarding',
  screenHistory: [],
  fruitsAndVegetables: fruitsAndVegetables,
  
  cart: [], // { sku, quantity }
  favorites: ['PROD-FV-001', 'PROD-FV-013'], // pre-fav some items (Avocado, Strawberries)
  selectedSku: 'PROD-FV-001', // default selected product
  selectedCategory: 'Fresh Fruit',
  searchQuery: '',
  
  user: {
    name: 'Lucy Martin',
    email: 'lucymartin@gmail.com',
    phone: '+91 234 567 8900',
    username: 'lucy_martin',
    followers: 124,
    following: 82,
    posts: 15
  },
  
  addresses: [
    { id: 1, type: 'Home', address: 'A/234, Kigs Plazaa, Mithakhali, Ahmedabad, Gujarat', phone: '+91 234 567 8900', isDefault: true },
    { id: 2, type: 'Work', address: 'B/405, Tech Hub, S.G. Highway, Ahmedabad, Gujarat', phone: '+91 987 654 3210', isDefault: false }
  ],
  
  cards: [
    { id: 1, type: 'VISA', number: '•••• •••• •••• 1234', expiry: '12/28', name: 'LUCY MARTIN', isDefault: true },
    { id: 2, type: 'PayPal', number: 'lucymartin@gmail.com', expiry: 'N/A', name: 'LUCY MARTIN', isDefault: false }
  ],
  
  orders: [
    { id: '#OD2204', date: 'Jan 26, 2021', total: 100.00, items: 4, status: 'Completed' },
    { id: '#OD1902', date: 'Nov 12, 2020', total: 45.50, items: 2, status: 'Completed' }
  ],
  
  reviews: [
    { name: 'John Doe', rating: 5, date: '2 days ago', text: 'These oranges are incredibly fresh and sweet! Best quality ever.', category: 'Shopping', positive: ['Freshness', 'Sweetness'], negative: [] },
    { name: 'Sarah Smith', rating: 4, date: '1 week ago', text: 'Very juicy, but shipping took a day longer than expected.', category: 'Delivery', positive: ['Juicy'], negative: ['Late Delivery'] }
  ],
  
  appliedPromo: 'nfresh50',
  filterOpts: {
    sortBy: 'popularity',
    organicOnly: false,
    inStockOnly: false
  },
  
  chatMessages: [
    { sender: 'bot', text: 'Hello! I am your SmartBag assistant. How can I help you today?', time: '12:30' }
  ],

  // Temp form states
  tempRating: 5,
  tempCategory: 'Shopping',
  tempPositives: [],
  tempNegatives: [],
  tempAddrType: 'Home',

  // Detail view temp state
  detailQty: 1
};

// Expose state for troubleshooting / console inspection
window.__app_state__ = state;

// Navigational router helpers
window.navigate = (screen, data = {}) => {
  if (state.currentScreen !== screen) {
    state.screenHistory.push(state.currentScreen);
  }
  
  state.currentScreen = screen;
  
  // Apply contextual inputs
  if (data.sku) {
    state.selectedSku = data.sku;
    state.detailQty = 1; // reset details qty counter
  }
  if (data.category) {
    state.selectedCategory = data.category;
  }
  if (data.query !== undefined) {
    state.searchQuery = data.query;
  }
  
  renderApp();
};

window.goBack = () => {
  if (state.screenHistory.length > 0) {
    state.currentScreen = state.screenHistory.pop();
  } else {
    state.currentScreen = 'home';
  }
  renderApp();
};

// Image utility mapping
function getPlaceholderImage(product) {
  const images = {
    "PROD-FV-001": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&q=80", // Avocado
    "PROD-FV-002": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80", // Apple
    "PROD-FV-003": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80", // Spinach
    "PROD-FV-004": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80", // Watermelon
    "PROD-FV-005": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=300&q=80", // Onion
    "PROD-FV-006": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80", // Bananas
    "PROD-FV-007": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80", // Broccoli
    "PROD-FV-008": "https://images.unsplash.com/photo-1563565087-9917300c1441?auto=format&fit=crop&w=300&q=80", // Peppers
    "PROD-FV-009": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80", // Carrots
    "PROD-FV-013": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80"  // Strawberries
  };
  return images[product.sku] || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80";
}

function getProductBySku(sku) {
  return state.fruitsAndVegetables.find(p => p.sku === sku) || state.fruitsAndVegetables[0];
}

// Global mutations exposed to HTML template onclicks
window.addToCart = (sku) => {
  const item = state.cart.find(c => c.sku === sku);
  if (item) {
    item.quantity++;
  } else {
    state.cart.push({ sku, quantity: 1 });
  }
  renderApp();
};

window.updateCartQuantity = (sku, quantity) => {
  if (quantity <= 0) {
    state.cart = state.cart.filter(item => item.sku !== sku);
  } else {
    const item = state.cart.find(c => c.sku === sku);
    if (item) item.quantity = quantity;
  }
  renderApp();
};

window.toggleFavorite = (sku) => {
  if (state.favorites.includes(sku)) {
    state.favorites = state.favorites.filter(id => id !== sku);
  } else {
    state.favorites.push(sku);
  }
  renderApp();
};

// Product detail selectors
window.setDetailQuantity = (qty) => {
  state.detailQty = qty;
  const qtyEl = document.getElementById('detailQty');
  if (qtyEl) qtyEl.textContent = qty;
};

window.addDetailToCart = (sku) => {
  const existing = state.cart.find(item => item.sku === sku);
  if (existing) {
    existing.quantity = state.detailQty;
  } else {
    state.cart.push({ sku, quantity: state.detailQty });
  }
  navigate('checkout');
};

// Review screen mutations
window.setReviewRating = (rating) => {
  state.tempRating = rating;
  renderApp();
};

window.setReviewCategory = (category) => {
  state.tempCategory = category;
  renderApp();
};

window.toggleReviewTag = (type, tag) => {
  if (type === 'positive') {
    if (state.tempPositives.includes(tag)) {
      state.tempPositives = state.tempPositives.filter(t => t !== tag);
    } else {
      state.tempPositives.push(tag);
    }
  } else {
    if (state.tempNegatives.includes(tag)) {
      state.tempNegatives = state.tempNegatives.filter(t => t !== tag);
    } else {
      state.tempNegatives.push(tag);
    }
  }
  renderApp();
};

// Gemini AI reviews co-pilot
window.generateAIReview = async () => {
  const btn = document.getElementById('aiWriterBtn');
  const loader = document.getElementById('aiLoader');
  const textArea = document.getElementById('reviewTextArea');

  if (loader) loader.classList.remove('hidden');

  try {
    const response = await fetch('/api/generate-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: state.tempRating,
        category: state.tempCategory,
        positiveTags: state.tempPositives,
        negativeTags: state.tempNegatives
      })
    });
    
    if (!response.ok) throw new Error('Failed response');
    const data = await response.json();
    
    if (textArea) {
      textArea.value = data.text;
    }
  } catch (error) {
    console.error('Error generating AI review:', error);
    if (textArea) {
      textArea.value = `This is a highly recommended organic product. The quality is exceptional, very fresh and delicious! Delivery was also quick and prompt. Recommended to buy.`;
    }
  } finally {
    if (loader) loader.classList.add('hidden');
  }
};

window.submitReview = () => {
  const textVal = document.getElementById('reviewTextArea')?.value || 'Great product, highly fresh!';
  const newRev = {
    name: state.user.name,
    rating: state.tempRating,
    date: 'Just now',
    text: textVal,
    category: state.tempCategory,
    positive: [...state.tempPositives],
    negative: [...state.tempNegatives]
  };

  state.reviews.unshift(newRev);
  state.user.posts++;
  
  // reset temp review states
  state.tempRating = 5;
  state.tempPositives = [];
  state.tempNegatives = [];
  
  navigate('reviews');
};

// Address Mutations
window.setTempAddrType = (type) => {
  state.tempAddrType = type;
  const btnHome = document.getElementById('btnTypeHome');
  const btnWork = document.getElementById('btnTypeWork');
  if (type === 'Home') {
    btnHome?.classList.replace('bg-white', 'bg-blue-50');
    btnHome?.classList.replace('text-slate-500', 'text-brand-blue');
    btnHome?.classList.replace('border-slate-100', 'border-brand-blue');
    btnWork?.classList.replace('bg-blue-50', 'bg-white');
    btnWork?.classList.replace('text-brand-blue', 'text-slate-500');
    btnWork?.classList.replace('border-brand-blue', 'border-slate-100');
  } else {
    btnWork?.classList.replace('bg-white', 'bg-blue-50');
    btnWork?.classList.replace('text-slate-500', 'text-brand-blue');
    btnWork?.classList.replace('border-slate-100', 'border-brand-blue');
    btnHome?.classList.replace('bg-blue-50', 'bg-white');
    btnHome?.classList.replace('text-brand-blue', 'text-slate-500');
    btnHome?.classList.replace('border-brand-blue', 'border-slate-100');
  }
};

window.submitNewAddress = () => {
  const addrText = document.getElementById('addressInput')?.value || '';
  const phoneText = document.getElementById('phoneInput')?.value || state.user.phone;
  const isDefault = document.getElementById('addrDefaultCheck')?.checked;

  if (!addrText) return;

  const newAddr = {
    id: Date.now(),
    type: state.tempAddrType,
    address: addrText,
    phone: phoneText,
    isDefault: isDefault
  };

  if (isDefault) {
    state.addresses.forEach(a => a.isDefault = false);
  }

  state.addresses.push(newAddr);
  navigate('deliveryAddress');
};

window.setDefaultAddress = (id) => {
  state.addresses.forEach(a => a.isDefault = (a.id === id));
  renderApp();
};

window.deleteAddress = (id) => {
  state.addresses = state.addresses.filter(a => a.id !== id);
  renderApp();
};

// Cards Mutations
window.submitNewCard = () => {
  const holder = document.getElementById('cardNameInput')?.value || 'LUCY MARTIN';
  const num = document.getElementById('cardNumberInput')?.value || '•••• •••• •••• 9999';
  const exp = document.getElementById('cardExpiryInput')?.value || '06/29';
  const isDefault = document.getElementById('cardDefaultCheck')?.checked;

  const newCard = {
    id: Date.now(),
    type: num.startsWith('4') ? 'VISA' : 'MASTER',
    number: num,
    expiry: exp,
    name: holder,
    isDefault: isDefault
  };

  if (isDefault) {
    state.cards.forEach(c => c.isDefault = false);
  }

  state.cards.push(newCard);
  navigate('creditCards');
};

window.setDefaultCard = (id) => {
  state.cards.forEach(c => c.isDefault = (c.id === id));
  renderApp();
};

// Checkout place order
window.placeOrder = () => {
  // Clear cart and add to order list
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = state.cart.reduce((sum, item) => {
    const prod = getProductBySku(item.sku);
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);
  
  const discount = state.appliedPromo ? 10.00 : 0.00;
  const totalBill = Math.max(0, subTotal - discount);

  const orderNum = `#OD${Math.floor(1000 + Math.random() * 9000)}`;
  
  state.orders.unshift({
    id: orderNum,
    date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
    total: totalBill,
    items: totalItems,
    status: 'In Warehouse'
  });

  state.cart = []; // empty cart
  navigate('orderSuccess');
};

// Coupon and promo handlers
window.selectPromocode = (code) => {
  state.appliedPromo = code;
  navigate('checkout');
};

window.simulateQrScanSuccess = () => {
  state.appliedPromo = 'green20';
  alert('Simulated Scan QR Code success! Added coupon code "green20" for 20% Off Salad Greens.');
  navigate('checkout');
};

window.clearSearch = () => {
  state.searchQuery = '';
  renderApp();
};

window.resetFilters = () => {
  state.filterOpts = {
    sortBy: 'popularity',
    organicOnly: false,
    inStockOnly: false
  };
  renderApp();
};

window.setSortOption = (opt) => {
  state.filterOpts.sortBy = opt;
  renderApp();
};

window.toggleFilterOption = (optKey) => {
  state.filterOpts[optKey] = !state.filterOpts[optKey];
  renderApp();
};

// Password mutations
window.submitChangePassword = () => {
  alert('Password saved successfully!');
  navigate('passwordResetSuccess');
};

// Chat Messages mutations
window.submitChatMessage = () => {
  const input = document.getElementById('chatInputField');
  const textVal = input?.value?.trim();
  if (!textVal) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
  // Add user message
  state.chatMessages.push({ sender: 'user', text: textVal, time: timeStr });
  
  if (input) input.value = '';
  renderApp();

  // Scroll to bottom
  const msgList = document.getElementById('chatMessageList');
  if (msgList) msgList.scrollTop = msgList.scrollHeight;

  // Simulate helper bot response
  setTimeout(() => {
    let botReply = "Thank you for contacting SmartBag. A support agent will be with you shortly.";
    if (textVal.toLowerCase().includes('coupon') || textVal.toLowerCase().includes('promo')) {
      botReply = "You have an active coupon: 'nfresh50' for $10 off your order! You can apply it on checkout.";
    } else if (textVal.toLowerCase().includes('status') || textVal.toLowerCase().includes('order')) {
      botReply = "Your current active order is #OD2204, currently out for local delivery. It should arrive shortly!";
    } else if (textVal.toLowerCase().includes('delivery') || textVal.toLowerCase().includes('shipping')) {
      botReply = "We provide free organic delivery for all orders above $20. Our average delivery time is less than 2 hours.";
    }

    state.chatMessages.push({ sender: 'bot', text: botReply, time: timeStr });
    renderApp();

    const nestedMsgList = document.getElementById('chatMessageList');
    if (nestedMsgList) nestedMsgList.scrollTop = nestedMsgList.scrollHeight;
  }, 1000);
};


// Product Card renderer helper passed to screens
function renderProductCard(product) {
  const isFav = state.favorites.includes(product.sku);
  const cartItem = state.cart.find(item => item.sku === product.sku);
  const qty = cartItem ? cartItem.quantity : 0;
  
  return `
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-50 flex flex-col relative group transition-all duration-300 hover:shadow-md animate-pop-in">
       <div class="flex justify-between items-center mb-1.5 z-10">
          ${product.sku === 'PROD-FV-013' || product.sku === 'PROD-FV-001' ? `
             <span class="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Hot</span>
          ` : '<div></div>'}
          <button onclick="event.stopPropagation(); toggleFavorite('${product.sku}')" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
             <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-brand-blue text-brand-blue' : 'text-slate-400'}" stroke-width="2.5"></i>
          </button>
       </div>
       
       <!-- Clickable body to open details -->
       <div onclick="navigate('productDetail', { sku: '${product.sku}' })" class="cursor-pointer flex-1 flex flex-col items-center">
          <div class="h-28 w-full flex items-center justify-center mb-3 p-1">
             <img src="${product.image || getPlaceholderImage(product)}" alt="${product.productName}" class="h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span class="text-[9px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-1 self-start">${product.subCategory}</span>
          <h4 class="text-sm font-black text-slate-800 leading-tight w-full truncate mb-0.5">${product.productName}</h4>
          <p class="text-xs text-slate-400 font-bold mb-3 self-start">${product.unit}</p>
       </div>
       
       <div class="flex justify-between items-center mt-auto">
          <span class="text-base font-black text-brand-blue">$${product.price.toFixed(2)}</span>
          
          ${qty > 0 ? `
             <div class="flex items-center bg-slate-50 border border-slate-100 rounded-xl p-0.5 shadow-sm">
                <button onclick="event.stopPropagation(); updateCartQuantity('${product.sku}', ${qty - 1})" class="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-brand-blue transition-colors">
                   <i data-lucide="minus" class="w-3.5 h-3.5" stroke-width="3"></i>
                </button>
                <span class="font-black text-slate-800 text-xs px-2.5">${qty}</span>
                <button onclick="event.stopPropagation(); updateCartQuantity('${product.sku}', ${qty + 1})" class="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-brand-blue transition-colors">
                   <i data-lucide="plus" class="w-3.5 h-3.5" stroke-width="3"></i>
                </button>
             </div>
          ` : `
             <button onclick="event.stopPropagation(); addToCart('${product.sku}')" class="w-8 h-8 rounded-xl bg-brand-blue hover:bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-100 transition-all hover:scale-105 active:scale-95">
                <i data-lucide="plus" class="w-4 h-4" stroke-width="3"></i>
             </button>
          `}
       </div>
    </div>
  `;
}

// Layout wrapper for tabs and top bar highlights
function withLayout(contentHtml, activeTab) {
  return `
    <div class="flex-1 flex flex-col relative pb-20 animate-slide-up bg-[#F8F9FB]">
       ${contentHtml}
       ${renderBottomNav(activeTab)}
    </div>
  `;
}

function renderBottomNav(activeTab) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Home', action: "navigate('home')" },
    { id: 'categories', icon: 'grid', label: 'Category', action: "navigate('categories')" },
    { id: 'checkout', icon: 'shopping-bag', label: 'Basket', action: "navigate('checkout')" },
    { id: 'orders', icon: 'clipboard', label: 'Orders', action: "navigate('orders')" },
    { id: 'profile', icon: 'user', label: 'Account', action: "navigate('sideMenu')" }
  ];

  return `
    <nav class="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-2 z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] rounded-t-3xl shrink-0 select-none">
       ${tabs.map(tab => {
         const isActive = activeTab === tab.id;
         if (tab.id === 'checkout') {
           const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
           return `
             <button onclick="${tab.action}" class="relative -translate-y-5 w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all transform active:scale-95 shrink-0">
                <i data-lucide="${tab.icon}" class="w-6 h-6" stroke-width="2.5"></i>
                ${cartCount > 0 ? `
                   <span class="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                      ${cartCount}
                   </span>
                ` : ''}
             </button>
           `;
         }
         return `
           <button onclick="${tab.action}" class="flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}">
              <i data-lucide="${tab.icon}" class="w-5 h-5" stroke-width="${isActive ? '2.5' : '2'}"></i>
              <span class="text-[10px] font-black mt-1 tracking-tight leading-none">${tab.label}</span>
           </button>
         `;
       }).join('')}
    </nav>
  `;
}

// Global Order History templates
function renderMyOrders(state) {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">My Orders</h1>
          <div class="w-10"></div>
       </header>

       <!-- Orders List -->
       <div class="flex-1 px-6 py-4 overflow-y-auto no-scrollbar space-y-4 pb-24">
          <p class="text-slate-400 font-bold text-sm">Review order receipts, check dispatch logs, or file live support queries.</p>
          
          <div class="space-y-3.5 pt-2">
             ${state.orders.map(ord => `
                <div onclick="navigate('trackOrder')" class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4 cursor-pointer hover:shadow-md transition-all">
                   <div class="flex justify-between items-center pb-2.5 border-b border-slate-50">
                      <div>
                         <h4 class="font-black text-slate-800 text-sm leading-tight">${ord.id}</h4>
                         <span class="text-[10px] text-slate-400 font-bold">${ord.date}</span>
                      </div>
                      
                      <span class="text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-md ${ord.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-brand-blue'}">
                         ${ord.status}
                      </span>
                   </div>
                   
                   <div class="flex justify-between items-center text-xs font-bold text-slate-500">
                      <span>${ord.items} Grocery Items</span>
                      <span class="text-slate-800 font-black">Total: <span class="text-brand-blue">$${ord.total.toFixed(2)}</span></span>
                   </div>
                </div>
             `).join('')}
          </div>
       </div>
    </div>
  `;
}

// Orchestrator Dynamic Router Mounting
function renderApp() {
  const container = document.getElementById('root');
  if (!container) return;

  let screenContent = '';

  switch (state.currentScreen) {
    case 'onboarding':
      screenContent = renderOnboarding();
      break;
    case 'signIn':
      screenContent = renderSignIn();
      break;
    case 'forgotPassword':
      screenContent = renderForgotPassword();
      break;
    case 'phoneVerification':
      screenContent = renderPhoneVerification();
      break;
    case 'passwordResetSuccess':
      screenContent = renderPasswordResetSuccess();
      break;
    
    // Bottom Nav screens
    case 'home':
      screenContent = withLayout(renderHome(state, renderProductCard), 'home');
      break;
    case 'categories':
      screenContent = withLayout(renderCategories(state), 'categories');
      break;
    case 'categoryProducts':
      screenContent = withLayout(renderCategoryProducts(state, renderProductCard), 'categories');
      break;
    case 'checkout':
      screenContent = withLayout(renderCheckout(state), 'checkout');
      break;
    case 'orders':
      screenContent = withLayout(renderMyOrders(state), 'orders');
      break;
    case 'sideMenu':
      screenContent = withLayout(renderSideMenu(state), 'profile');
      break;
    case 'aboutMe':
      screenContent = withLayout(renderAboutMe(state), 'profile');
      break;
    case 'changePassword':
      screenContent = withLayout(renderChangePassword(), 'profile');
      break;
    case 'followers':
      screenContent = withLayout(renderFollowers(state), 'profile');
      break;
    case 'myFavourite':
      screenContent = withLayout(renderMyFavourite(state, renderProductCard), 'profile');
      break;
    
    // Independent overlay screens
    case 'search':
      screenContent = renderSearch(state, renderProductCard);
      break;
    case 'filter':
      screenContent = renderFilter(state);
      break;
    case 'productDetail':
      screenContent = renderProductDetail(state, getProductBySku);
      break;
    case 'reviews':
      screenContent = renderReviews(state);
      break;
    case 'review':
      screenContent = renderAddReview(state);
      break;
    case 'addCard':
      screenContent = renderAddCard();
      break;
    case 'creditCards':
      screenContent = renderCreditCards(state);
      break;
    case 'deliveryAddress':
      screenContent = renderDeliveryAddress(state);
      break;
    case 'addAddress':
      screenContent = renderAddAddress();
      break;
    case 'orderSuccess':
      screenContent = renderOrderSuccess();
      break;
    case 'orderDecline':
      screenContent = renderOrderDecline();
      break;
    case 'trackOrder':
      screenContent = renderTrackOrder();
      break;
    case 'scanQr':
      screenContent = renderScanQr();
      break;
    case 'notification':
      screenContent = renderNotification();
      break;
    case 'promocode':
      screenContent = renderPromocode();
      break;
    case 'liveChat':
      screenContent = renderLiveChat(state);
      break;
    default:
      screenContent = withLayout(renderHome(state, renderProductCard), 'home');
  }

  // Mount HTML in view
  container.innerHTML = screenContent;

  // Process Lucide vector glyph replacements
  try {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  } catch (error) {
    console.error('Error replacement Lucide icons:', error);
  }

  // Post mount special binding triggers
  // 1. If we are in the Search Screen, bind real-time input filtering
  if (state.currentScreen === 'search') {
    const inputEl = document.getElementById('searchBarInput');
    if (inputEl) {
      inputEl.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderApp();
        // Maintain selection focus at the end of text
        const newlyRenderedInput = document.getElementById('searchBarInput');
        if (newlyRenderedInput) {
          newlyRenderedInput.focus();
          newlyRenderedInput.setSelectionRange(newlyRenderedInput.value.length, newlyRenderedInput.value.length);
        }
      });
    }
  }

  // 2. If we are in the chat room, keep viewport at the bottom
  if (state.currentScreen === 'liveChat') {
    const chatContainer = document.getElementById('chatMessageList');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    // Bind Enter key trigger on chat input field
    const chatInput = document.getElementById('chatInputField');
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          window.submitChatMessage();
        }
      });
    }
  }

  // 3. Set up drag-and-drop simulated file uploads on ReviewScreen
  if (state.currentScreen === 'review') {
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('bg-slate-100', 'border-brand-blue');
      });
      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('bg-slate-100', 'border-brand-blue');
      });
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('bg-slate-100', 'border-brand-blue');
        alert('Simulated file upload complete! Successfully scanned photo metadata.');
      });
      dropZone.addEventListener('click', () => {
        alert('Simulating camera gallery roll. Select your photo...');
        setTimeout(() => {
          alert('Successfully uploaded: avocado_bag.jpg (420 KB)');
        }, 1000);
      });
    }
  }
}

// Initial application boot
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// Immediately boot just in case DOMContentLoaded already fired
renderApp();
