export function renderScanQr() {
  return `
    <div class="flex-1 flex flex-col bg-slate-950 text-white animate-slide-up justify-between relative">
       <!-- Upper bar -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-transparent shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-850">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-100" stroke-width="2.5"></i>
          </button>
          <h1 class="text-sm font-black text-slate-300 uppercase tracking-widest">Simulated Scanner</h1>
          <button onclick="alert('Camera torch toggled!')" class="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-850">
             <i data-lucide="zap" class="w-5 h-5 text-slate-100"></i>
          </button>
       </header>

       <!-- Scanning area box -->
       <div class="flex flex-col items-center justify-center my-auto px-6 relative">
          <p class="text-xs text-slate-400 font-bold mb-8 text-center max-w-xs leading-relaxed">Align the QR code on your coupon flyer or bag tag inside the frame to scan automatically.</p>
          
          <div class="w-64 h-64 border-4 border-slate-800 rounded-[32px] relative flex items-center justify-center overflow-hidden bg-slate-900/40 shadow-2xl">
             <!-- Scanner corner lasers -->
             <div class="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-brand-lightBlue rounded-tl-lg"></div>
             <div class="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-brand-lightBlue rounded-tr-lg"></div>
             <div class="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-brand-lightBlue rounded-bl-lg"></div>
             <div class="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-brand-lightBlue rounded-br-lg"></div>
             
             <!-- Red scanning animated beam -->
             <div class="absolute left-6 right-6 h-[2px] bg-rose-500 shadow-md shadow-rose-400 animate-bounce"></div>
             
             <!-- Mock QR pattern SVG -->
             <svg class="w-36 h-36 opacity-30 fill-white" viewBox="0 0 24 24">
                <path d="M3 3h6v6H3zm2 2v2h2V5zm8-2h8v8h-8zm2 2v4h4V5zm-9 8h6v6H3zm2 2v2h2v-2zm12-2h4v2h-4zm-2 2h2v4h-2zm4 2h2v2h-2zm-2 2h2v2h-2zm-4-4h2v2h-2zm2 2h2v2h-2zm-6-2h2v2H9zm2-2h2v2h-2zm0 4h2v2h-2z" />
             </svg>
          </div>
          
          <button onclick="simulateQrScanSuccess()" class="bg-brand-blue hover:bg-blue-600 text-white font-black text-xs py-3 px-6 rounded-xl mt-8 shadow-lg shadow-blue-900/35 transition-all">Simulate Scan Coupon</button>
       </div>

       <div class="p-8 text-center text-slate-500 font-semibold text-xs leading-relaxed shrink-0">
          Interactive scanner uses camera sandbox permissions if configured.
       </div>
    </div>
  `;
}

export function renderNotification() {
  const list = [
     { title: 'Promo Code Applied!', desc: 'Enjoy $10 discount automatically applied with code nfresh50!', time: '10 mins ago', read: false },
     { title: 'Restock Alert!', desc: 'Organic Fresh Strawberries from Ooty farm are back in stock!', time: '2 hours ago', read: true },
     { title: 'Order Completed', desc: 'Your shipment #OD1902 has been delivered. Leave a review to help others!', time: 'Yesterday', read: true }
  ];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Notifications</h1>
          <button onclick="alert('All notifications cleared!')" class="text-xs font-black text-slate-400 hover:text-slate-600 transition-colors">Clear</button>
       </header>

       <!-- Notifications Scrollable Lists -->
       <div class="flex-1 px-6 py-4 overflow-y-auto no-scrollbar space-y-3 pb-10">
          ${list.map(notif => `
             <div class="bg-white p-4 rounded-2xl border border-slate-50 shadow-sm flex gap-3 relative transition-all hover:shadow-md">
                ${!notif.read ? `
                   <span class="absolute top-4 right-4 w-2 h-2 bg-brand-blue rounded-full"></span>
                ` : ''}
                
                <div class="w-10 h-10 rounded-xl ${notif.read ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-brand-blue'} flex items-center justify-center shrink-0">
                   <i data-lucide="bell" class="w-5 h-5"></i>
                </div>
                
                <div class="space-y-0.5 pr-4">
                   <h4 class="font-black text-slate-800 text-xs leading-none mb-1">${notif.title}</h4>
                   <p class="text-slate-500 text-[11px] font-bold leading-relaxed">${notif.desc}</p>
                   <span class="text-[9px] text-slate-300 font-extrabold block pt-1 uppercase">${notif.time}</span>
                </div>
             </div>
          `).join('')}
       </div>
    </div>
  `;
}

export function renderPromocode() {
  const codes = [
     { code: 'nfresh50', title: '$10 Off First Basket', desc: 'Valid on orders above $20 for new users', active: true },
     { code: 'green20', title: '20% Off Salad Greens', desc: 'Applicable on Leafy Greens catalog', active: false }
  ];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Coupon Codes</h1>
          <div class="w-10"></div>
       </header>

       <!-- Coupon Cards -->
       <div class="flex-1 px-6 py-4 overflow-y-auto no-scrollbar space-y-4 pb-10">
          <p class="text-slate-400 font-bold text-sm">Select an active discount code from the list to apply immediately</p>
          
          <div class="space-y-3 pt-2">
             ${codes.map(c => `
                <div onclick="selectPromocode('${c.code}')" class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-all group">
                   <div class="space-y-1 pr-4">
                      <span class="bg-blue-50 text-brand-blue text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">${c.code}</span>
                      <h4 class="font-black text-slate-800 text-sm leading-tight">${c.title}</h4>
                      <p class="text-slate-400 text-[10px] font-bold leading-relaxed">${c.desc}</p>
                   </div>
                   
                   <button class="bg-brand-blue text-white font-extrabold text-[10px] py-2 px-4 rounded-xl group-hover:bg-blue-600 transition-all shrink-0">
                      Apply
                   </button>
                </div>
             `).join('')}
          </div>
       </div>
    </div>
  `;
}
