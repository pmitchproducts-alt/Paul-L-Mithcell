export function renderSideMenu(state) {
  const menuItems = [
     { label: 'My Orders', icon: 'clipboard', screen: 'orders' },
     { label: 'My Favourites', icon: 'heart', screen: 'myFavourite' },
     { label: 'Live Assistance Chat', icon: 'message-square-text', screen: 'liveChat' },
     { label: 'Saved Credit Cards', icon: 'credit-card', screen: 'creditCards' },
     { label: 'Delivery Locations', icon: 'map-pin', screen: 'deliveryAddress' },
     { label: 'About Me Profile', icon: 'user', screen: 'aboutMe' }
  ];

  return `
    <div class="flex-1 flex flex-col bg-slate-900 text-white animate-slide-up justify-between">
       <!-- Upper drawer links -->
       <div>
          <!-- Close button header -->
          <header class="flex justify-between items-center px-6 py-5 shrink-0">
             <button onclick="navigate('home')" class="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700/50">
                <i data-lucide="x" class="w-5 h-5 text-slate-200" stroke-width="2.5"></i>
             </button>
             <h1 class="text-sm font-black text-slate-400 uppercase tracking-widest">Navigation</h1>
             <div class="w-10"></div>
          </header>

          <!-- Drawer user card -->
          <div onclick="navigate('aboutMe')" class="px-6 py-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800/40 rounded-3xl mx-3 transition-colors">
             <div class="w-14 h-14 rounded-2xl bg-slate-800 overflow-hidden border-2 border-slate-700 shadow-lg flex items-center justify-center shrink-0">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Avatar" class="w-full h-full object-cover" />
             </div>
             <div>
                <h3 class="font-black text-base text-slate-100 leading-tight">${state.user.name}</h3>
                <p class="text-slate-400 text-xs font-bold">${state.user.email}</p>
             </div>
          </div>

          <!-- Menu Links -->
          <div class="px-3 pt-6 space-y-1">
             ${menuItems.map(item => `
                <button onclick="navigate('${item.screen}')" class="w-full flex items-center gap-4 py-4 px-6 hover:bg-slate-800/50 rounded-2xl transition-all font-black text-sm text-slate-300 hover:text-white group">
                   <i data-lucide="${item.icon}" class="w-5 h-5 text-slate-500 group-hover:text-brand-lightBlue transition-colors"></i>
                   <span>${item.label}</span>
                </button>
             `).join('')}
          </div>
       </div>

       <!-- Log out button -->
       <div class="p-6 shrink-0 border-t border-slate-800">
          <button onclick="navigate('signIn')" class="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
             <i data-lucide="log-out" class="w-4 h-4 text-rose-400"></i>
             Sign Out Account
          </button>
       </div>
    </div>
  `;
}

export function renderAboutMe(state) {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Profile Details</h1>
          <div class="w-10"></div>
       </header>

       <div class="flex-1 overflow-y-auto no-scrollbar pb-10">
          
          <!-- Profile image container with metrics -->
          <div class="bg-white px-6 py-8 flex flex-col items-center border-b border-slate-100">
             <div class="relative mb-4">
                <div class="w-24 h-24 rounded-3xl bg-blue-50 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Avatar" class="w-full h-full object-cover" />
                </div>
                <button onclick="alert('Profile photo updates coming soon!')" class="absolute -bottom-1 -right-1 bg-brand-blue hover:bg-blue-600 text-white w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-md transition-all">
                   <i data-lucide="camera" class="w-3.5 h-3.5"></i>
                </button>
             </div>

             <h2 class="font-black text-slate-800 text-lg leading-tight mb-0.5">${state.user.name}</h2>
             <p class="text-slate-400 text-xs font-bold mb-6">@${state.user.username}</p>

             <!-- Grid stats metrics -->
             <div class="grid grid-cols-3 gap-6 w-full max-w-xs text-center border-t border-slate-100 pt-5">
                <div onclick="navigate('followers')" class="cursor-pointer space-y-0.5 group">
                   <span class="block font-black text-slate-800 group-hover:text-brand-blue transition-colors">${state.user.followers}</span>
                   <span class="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Followers</span>
                </div>
                <div onclick="navigate('followers')" class="cursor-pointer space-y-0.5 group">
                   <span class="block font-black text-slate-800 group-hover:text-brand-blue transition-colors">${state.user.following}</span>
                   <span class="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Following</span>
                </div>
                <div class="space-y-0.5">
                   <span class="block font-black text-slate-800">${state.user.posts}</span>
                   <span class="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Review Posts</span>
                </div>
             </div>
          </div>

          <!-- User Coordinates Fields details -->
          <div class="p-6 space-y-4">
             <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div class="flex justify-between items-center text-xs pb-1 border-b border-slate-50">
                   <span class="font-black text-slate-400 uppercase tracking-wider">Account Details</span>
                   <button onclick="navigate('changePassword')" class="font-black text-brand-blue hover:underline">Edit password</button>
                </div>
                
                <div class="grid grid-cols-2 gap-y-4 text-xs">
                   <div>
                      <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">Email Address</span>
                      <span class="font-bold text-slate-800">${state.user.email}</span>
                   </div>
                   <div>
                      <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">Mobile Contact</span>
                      <span class="font-bold text-slate-800">${state.user.phone}</span>
                   </div>
                   <div>
                      <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">Username</span>
                      <span class="font-bold text-slate-800">@${state.user.username}</span>
                   </div>
                   <div>
                      <span class="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">Country</span>
                      <span class="font-bold text-slate-800">India</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  `;
}

export function renderChangePassword() {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up justify-between">
       <div>
          <!-- Header -->
          <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
             <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
                <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             </button>
             <h1 class="text-lg font-black text-slate-800">Change Password</h1>
             <div class="w-10"></div>
          </header>

          <form onsubmit="event.preventDefault(); submitChangePassword()" class="p-6 space-y-5" id="changePassForm">
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Current Password</label>
                <div class="relative flex items-center">
                   <i data-lucide="lock" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="password" required placeholder="••••••••••••" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" />
                </div>
             </div>

             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">New Password</label>
                <div class="relative flex items-center">
                   <i data-lucide="lock" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="password" required placeholder="Min 8 characters" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" />
                </div>
             </div>

             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Confirm New Password</label>
                <div class="relative flex items-center">
                   <i data-lucide="lock" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="password" required placeholder="Repeat new password" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" />
                </div>
             </div>
          </form>
       </div>

       <div class="p-6 shrink-0 bg-white border-t border-slate-100">
          <button type="submit" form="changePassForm" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all transform active:scale-95 text-lg">
             Save New Password
          </button>
       </div>
    </div>
  `;
}

export function renderFollowers(state) {
  const users = [
     { name: 'Sarah Smith', username: 'sarah_smith', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', mutual: 12 },
     { name: 'John Doe', username: 'johndoe_fresh', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', mutual: 3 },
     { name: 'Arjun Mehta', username: 'arjun_organic', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', mutual: 18 }
  ];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Connections</h1>
          <div class="w-10"></div>
       </header>

       <!-- Tab Header links -->
       <div class="flex border-b border-slate-100 bg-white sticky top-0 z-10 shrink-0 text-center">
          <button class="flex-1 py-4 font-black text-xs text-brand-blue border-b-2 border-brand-blue uppercase tracking-wider">Followers (${state.user.followers})</button>
          <button class="flex-1 py-4 font-black text-xs text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider">Following (${state.user.following})</button>
       </div>

       <!-- Connections Lists scrollable -->
       <div class="flex-1 px-6 py-4 overflow-y-auto no-scrollbar space-y-3 pb-10">
          ${users.map(u => `
             <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center hover:shadow-md transition-all">
                <div class="flex items-center gap-3">
                   <div class="w-11 h-11 bg-slate-100 rounded-xl overflow-hidden shadow-sm flex items-center justify-center shrink-0">
                      <img src="${u.image}" alt="${u.name}" class="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 class="font-black text-slate-800 text-xs leading-none mb-0.5">${u.name}</h4>
                      <p class="text-slate-400 text-[10px] font-bold">@${u.username}</p>
                      <p class="text-slate-300 text-[9px] font-bold mt-1">${u.mutual} mutual grocery lovers</p>
                   </div>
                </div>
                
                <button onclick="alert('Connection toggled!')" class="bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-700 font-extrabold text-[10px] px-3.5 py-2 rounded-xl transition-all">
                   Following
                </button>
             </div>
          `).join('')}
       </div>
    </div>
  `;
}

export function renderMyFavourite(state, renderProductCard) {
  // Filter products matching active favorites array list
  const favItems = state.fruitsAndVegetables.filter(p => state.favorites.includes(p.sku));

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">My Favourites</h1>
          <div class="w-10"></div>
       </header>

       <!-- Product List Wrapper -->
       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-24 space-y-4">
          <p class="text-slate-400 font-bold text-sm">Review your saved grocery picks. Easily move items to cart.</p>
          
          ${favItems.length === 0 ? `
             <div class="flex flex-col items-center justify-center py-20 text-center text-slate-400 bg-white rounded-3xl border border-slate-100 p-8">
                <i data-lucide="heart" class="w-16 h-16 stroke-1 text-slate-200 mb-4 animate-pulse"></i>
                <h3 class="font-black text-slate-800 mb-1">No Favourites Yet</h3>
                <p class="text-sm">Click the heart icon on any product card in the home catalog to save items here.</p>
                <button onclick="navigate('home')" class="bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition-all inline-block mt-4">Go Shopping</button>
             </div>
          ` : `
             <div class="grid grid-cols-2 gap-4 pb-4 pt-2">
                ${favItems.map(p => renderProductCard(p)).join('')}
             </div>
          `}
       </div>
    </div>
  `;
}

export function renderLiveChat(state) {
  return `
    <div class="flex-1 flex flex-col bg-white animate-slide-up h-full">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-4 border-b border-slate-100 shrink-0">
          <div class="flex items-center gap-3">
             <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl hover:bg-slate-100 border border-slate-100 transition-colors">
                <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             </button>
             <div class="relative">
                <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue font-black font-sans shadow-sm">
                   SB
                </div>
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
             </div>
             <div>
                <h3 class="font-black text-sm text-slate-800 leading-tight">SmartBag Assitant</h3>
                <p class="text-[10px] font-bold text-emerald-500">Always online</p>
             </div>
          </div>
          
          <button onclick="alert('Calling support line...')" class="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl hover:bg-slate-100 border border-slate-100 transition-colors">
             <i data-lucide="phone" class="w-4.5 h-4.5 text-slate-700"></i>
          </button>
       </header>

       <!-- Message Area Lists -->
       <div class="flex-1 px-5 py-4 overflow-y-auto no-scrollbar space-y-4 bg-slate-50/50" id="chatMessageList">
          ${state.chatMessages.map(msg => `
             <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-pop-in">
                <div class="max-w-xs ${msg.sender === 'user' ? 'bg-brand-blue text-white rounded-t-2xl rounded-l-2xl' : 'bg-white text-slate-700 border border-slate-100 rounded-t-2xl rounded-r-2xl shadow-sm'} p-3.5 space-y-1">
                   <p class="text-xs font-semibold leading-relaxed">${msg.text}</p>
                   <span class="text-[9px] block text-right font-bold ${msg.sender === 'user' ? 'text-white/60' : 'text-slate-300'}">${msg.time}</span>
                </div>
             </div>
          `).join('')}
       </div>

       <!-- Footer Chat input console -->
       <div class="p-4 bg-white border-t border-slate-100 flex items-center gap-3 shrink-0">
          <div class="flex-1 bg-slate-50 rounded-xl px-4 py-2 flex items-center border border-slate-100">
             <input type="text" id="chatInputField" placeholder="Ask about delivery, active coupons, order status..." class="w-full bg-transparent text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none" />
          </div>
          
          <button onclick="submitChatMessage()" class="w-11 h-11 bg-brand-blue hover:bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 transition-all transform active:scale-95 shrink-0">
             <i data-lucide="send" class="w-5 h-5" stroke-width="2.5"></i>
          </button>
       </div>
    </div>
  `;
}
