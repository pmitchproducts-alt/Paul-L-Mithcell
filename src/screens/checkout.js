export function renderCheckout(state) {
  // Compute totals
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = state.cart.reduce((sum, item) => {
    const prod = state.fruitsAndVegetables.find(p => p.sku === item.sku);
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);
  const discount = subTotal > 0 ? (state.appliedPromo ? 10.00 : 0.00) : 0;
  const finalTotal = Math.max(0, subTotal - discount);

  // Active address
  const activeAddr = state.addresses.find(a => a.isDefault) || state.addresses[0] || { type: 'No Address Set', address: 'Please add a delivery address' };
  
  // Active card
  const activeCard = state.cards.find(c => c.isDefault) || state.cards[0] || { type: 'CASH', number: 'Cash on Delivery' };

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up pb-10">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Checkout</h1>
          <button onclick="navigate('scanQr')" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="qr-code" class="w-5 h-5 text-slate-800"></i>
          </button>
       </header>

       <!-- Main Area -->
       <div class="px-5 space-y-4 overflow-y-auto no-scrollbar flex-1 pb-16">
          
          <!-- Order ID Banner -->
          <div class="bg-brand-blue rounded-2xl px-5 py-4 flex justify-between items-center text-white shadow-lg shadow-blue-100">
             <span class="font-extrabold text-sm">Active Cart</span>
             <span class="font-black tracking-wide">#OD2204</span>
          </div>

          <!-- Empty basket state -->
          ${totalItems === 0 ? `
             <div class="bg-white p-8 rounded-2xl border border-slate-100 text-center space-y-3">
                <i data-lucide="shopping-bag" class="w-12 h-12 text-slate-300 mx-auto stroke-1"></i>
                <h3 class="font-black text-slate-800 text-sm">Your basket is empty</h3>
                <p class="text-xs text-slate-400 font-medium">Add some farm-fresh items to your cart from the Home dashboard to proceed!</p>
                <button onclick="navigate('home')" class="bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition-all inline-block mt-2">Go Shopping</button>
             </div>
          ` : `
             <!-- Delivery Address Card -->
             <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-3">
                   <h3 class="text-slate-800 font-black text-xs uppercase tracking-wider">Delivery Address</h3>
                   <button onclick="navigate('deliveryAddress')" class="text-xs font-black text-brand-blue hover:underline">Change</button>
                </div>
                <div class="space-y-1">
                   <h4 class="font-black text-slate-800 text-sm">${activeAddr.type}</h4>
                   <p class="text-slate-500 text-xs font-semibold leading-relaxed">${activeAddr.address}</p>
                   ${activeAddr.phone ? `<p class="text-slate-400 text-xs font-semibold mt-1">Mobile: ${activeAddr.phone}</p>` : ''}
                </div>
             </div>

             <!-- Delivery Slot selection -->
             <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 class="text-slate-800 font-black text-xs uppercase tracking-wider">Delivery Settings</h3>
                <div class="grid grid-cols-2 gap-3">
                   <button onclick="alert('Time Slot selections: Morning (8 AM - 12 PM), Afternoon (12 PM - 4 PM), Evening (4 PM - 8 PM)')" class="bg-slate-50 hover:bg-slate-100 text-left py-3 px-4 rounded-xl flex items-center justify-between text-xs font-bold text-slate-500 border border-slate-100/50">
                      <span>Morning Slot</span>
                      <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
                   </button>
                   <button onclick="alert('Date selection: Tomorrow')" class="bg-slate-50 hover:bg-slate-100 text-left py-3 px-4 rounded-xl flex items-center justify-between text-xs font-bold text-slate-500 border border-slate-100/50">
                      <span>Tomorrow</span>
                      <i data-lucide="calendar" class="w-4 h-4 text-slate-400"></i>
                   </button>
                </div>
             </div>

             <!-- Promocode Apply block -->
             <div onclick="navigate('promocode')" class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-all">
                <span class="text-slate-800 font-black text-xs uppercase tracking-wider">Apply Coupon Code</span>
                <div class="flex items-center gap-2">
                   <span class="font-black text-brand-blue text-sm lowercase">${state.appliedPromo || 'Select Code'}</span>
                   <i data-lucide="check-circle-2" class="w-5 h-5 text-brand-blue"></i>
                </div>
             </div>

             <!-- Order Bill totals -->
             <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h3 class="text-slate-800 font-black text-xs uppercase tracking-wider">Order Receipt</h3>
                
                <div class="space-y-2.5 text-xs text-slate-500 font-bold">
                   <div class="flex justify-between">
                      <span>Basket Subtotal</span>
                      <span class="text-slate-800">$${subTotal.toFixed(2)}</span>
                   </div>
                   <div class="flex justify-between">
                      <span>Items Count</span>
                      <span class="text-slate-800">${totalItems} items</span>
                   </div>
                   <div class="flex justify-between">
                      <span>Delivery Surcharge</span>
                      <span class="text-emerald-600 uppercase text-[10px]">Free Shipping</span>
                   </div>
                   ${state.appliedPromo ? `
                      <div class="flex justify-between text-brand-blue">
                         <span>Promo Discount</span>
                         <span>-$10.00</span>
                      </div>
                   ` : ''}
                </div>
                
                <div class="border-t border-slate-100 pt-3 flex justify-between items-center text-base font-black text-slate-800">
                   <span>Order Total</span>
                   <span class="text-brand-blue text-lg">$${finalTotal.toFixed(2)}</span>
                </div>
             </div>

             <!-- Payment Method Selection -->
             <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-4">
                   <h3 class="text-slate-800 font-black text-xs uppercase tracking-wider">Payment Method</h3>
                   <button onclick="navigate('creditCards')" class="text-xs font-black text-brand-blue hover:underline">Change</button>
                </div>
                
                <div class="flex items-center justify-between cursor-pointer">
                   <div class="flex items-center gap-3">
                      <div class="w-10 h-7 bg-slate-900 rounded flex items-center justify-center text-white text-[9px] font-black italic shadow-sm tracking-tight">
                         ${activeCard.type || 'CASH'}
                      </div>
                      <span class="text-xs text-slate-500 font-bold">${activeCard.number || 'Cash on Delivery'}</span>
                   </div>
                   <div class="w-4 h-4 rounded-full border-2 border-brand-blue flex items-center justify-center p-0.5">
                      <div class="w-full h-full bg-brand-blue rounded-full"></div>
                   </div>
                </div>
             </div>

             <!-- Place Order trigger buttons -->
             <div class="pt-2">
                <button onclick="placeOrder()" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all transform active:scale-95 text-lg">
                   Confirm & Place Order
                </button>
             </div>
          `}
       </div>
    </div>
  `;
}

export function renderCreditCards(state) {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Saved Cards</h1>
          <button onclick="navigate('addCard')" class="w-10 h-10 flex items-center justify-center bg-brand-blue rounded-xl shadow-md text-white hover:bg-blue-600 transition-colors">
             <i data-lucide="plus" class="w-5 h-5" stroke-width="2.5"></i>
          </button>
       </header>

       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 space-y-4">
          <p class="text-slate-400 font-bold text-sm">Select card to use as default payment method</p>
          
          <div class="space-y-3 pt-2">
             ${state.cards.map(card => `
                <div onclick="setDefaultCard(${card.id})" class="bg-gradient-to-r from-slate-800 to-slate-950 p-6 rounded-3xl text-white relative shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all ${card.isDefault ? 'ring-4 ring-offset-2 ring-brand-blue' : ''}">
                   <div class="absolute right-0 bottom-0 opacity-10 text-9xl font-black -mr-10 -mb-10 select-none">
                      ${card.type}
                   </div>
                   <div class="flex justify-between items-start mb-6">
                      <div class="space-y-0.5">
                         <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Credit Card</span>
                         <h3 class="font-black text-base italic tracking-tight leading-none">${card.type}</h3>
                      </div>
                      ${card.isDefault ? `
                         <span class="bg-brand-blue text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">Default</span>
                      ` : ''}
                   </div>
                   
                   <p class="text-lg font-mono font-bold tracking-widest mb-6">${card.number}</p>
                   
                   <div class="flex justify-between items-end text-xs font-semibold">
                      <div>
                         <span class="text-[8px] font-black text-slate-500 uppercase block leading-none mb-1">Card Holder</span>
                         <span class="font-bold tracking-wide uppercase text-slate-200">${card.name}</span>
                      </div>
                      <div class="text-right">
                         <span class="text-[8px] font-black text-slate-500 uppercase block leading-none mb-1">Expiry Date</span>
                         <span class="font-bold tracking-wide text-slate-200">${card.expiry}</span>
                      </div>
                   </div>
                </div>
             `).join('')}
          </div>
       </div>
    </div>
  `;
}

export function renderAddCard() {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up justify-between">
       <div>
          <!-- Header -->
          <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
             <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
                <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             </button>
             <h1 class="text-lg font-black text-slate-800">Add New Card</h1>
             <div class="w-10"></div>
          </header>

          <!-- Input Fields -->
          <form onsubmit="event.preventDefault(); submitNewCard()" class="p-6 space-y-5" id="addCardForm">
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Card Holder Name</label>
                <input type="text" id="cardNameInput" required placeholder="LUCY MARTIN" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 px-4 text-xs font-extrabold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm uppercase" />
             </div>
             
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Card Number</label>
                <div class="relative flex items-center">
                   <i data-lucide="credit-card" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="text" id="cardNumberInput" required placeholder="4321 8765 2412 1234" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 pl-12 pr-4 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" />
                </div>
             </div>

             <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                   <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Expiry Date</label>
                   <input type="text" id="cardExpiryInput" required placeholder="MM/YY" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 px-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm text-center" />
                </div>
                <div class="space-y-2">
                   <label class="text-xs font-black text-slate-400 uppercase tracking-wider">CVV Code</label>
                   <input type="password" maxlength="3" required placeholder="•••" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 px-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm text-center" />
                </div>
             </div>
             
             <div class="flex items-center gap-2 pt-2">
                <input type="checkbox" id="cardDefaultCheck" checked class="w-4 h-4 text-brand-blue border-slate-200 rounded focus:ring-brand-blue" />
                <label for="cardDefaultCheck" class="text-xs font-bold text-slate-500">Save as default credit card</label>
             </div>
          </form>
       </div>

       <div class="p-6 shrink-0 bg-white border-t border-slate-100">
          <button type="submit" form="addCardForm" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all transform active:scale-95 text-lg">
             Save Credit Card
          </button>
       </div>
    </div>
  `;
}

export function renderDeliveryAddress(state) {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Addresses</h1>
          <button onclick="navigate('addAddress')" class="w-10 h-10 flex items-center justify-center bg-brand-blue rounded-xl shadow-md text-white hover:bg-blue-600 transition-colors">
             <i data-lucide="plus" class="w-5 h-5" stroke-width="2.5"></i>
          </button>
       </header>

       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 space-y-4">
          <p class="text-slate-400 font-bold text-sm">Select delivery location for your orders</p>
          
          <div class="space-y-3 pt-2">
             ${state.addresses.map(addr => `
                <div onclick="setDefaultAddress(${addr.id})" class="bg-white p-5 rounded-2xl border ${addr.isDefault ? 'border-brand-blue bg-blue-50/10' : 'border-slate-100'} shadow-sm space-y-3 cursor-pointer relative transition-all hover:shadow-md">
                   <div class="flex justify-between items-center">
                      <div class="flex items-center gap-2">
                         <span class="w-2.5 h-2.5 rounded-full ${addr.type === 'Home' ? 'bg-brand-blue' : 'bg-brand-orange'}"></span>
                         <h4 class="font-black text-slate-800 text-sm">${addr.type}</h4>
                      </div>
                      ${addr.isDefault ? `
                         <span class="bg-brand-blue text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Active</span>
                      ` : ''}
                   </div>
                   
                   <p class="text-slate-500 text-xs font-semibold leading-relaxed">${addr.address}</p>
                   
                   <div class="flex justify-between items-center text-xs font-bold text-slate-400">
                      <span>Phone: ${addr.phone || 'N/A'}</span>
                      <button onclick="event.stopPropagation(); deleteAddress(${addr.id})" class="text-slate-300 hover:text-rose-500 transition-colors">
                         <i data-lucide="trash-2" class="w-4 h-4"></i>
                      </button>
                   </div>
                </div>
             `).join('')}
          </div>
       </div>
    </div>
  `;
}

export function renderAddAddress() {
  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up justify-between">
       <div>
          <!-- Header -->
          <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
             <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
                <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
             </button>
             <h1 class="text-lg font-black text-slate-800">Add New Location</h1>
             <div class="w-10"></div>
          </header>

          <form onsubmit="event.preventDefault(); submitNewAddress()" class="p-6 space-y-5" id="addAddressForm">
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Address Tag Type</label>
                <div class="flex gap-3">
                   <button type="button" onclick="setTempAddrType('Home')" id="btnTypeHome" class="flex-1 py-3 px-4 rounded-xl border font-bold text-xs bg-blue-50 border-brand-blue text-brand-blue">Home</button>
                   <button type="button" onclick="setTempAddrType('Work')" id="btnTypeWork" class="flex-1 py-3 px-4 rounded-xl border font-bold text-xs bg-white border-slate-100 text-slate-500">Work</button>
                </div>
             </div>

             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Street / building address</label>
                <textarea id="addressInput" required placeholder="A/234, Kigs Plazaa, Mithakhali..." class="w-full h-24 p-4 bg-white border border-slate-100 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-300 resize-none focus:outline-none focus:border-brand-blue shadow-sm leading-relaxed"></textarea>
             </div>

             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Mobile Number</label>
                <input type="text" id="phoneInput" required placeholder="+91 234 567 8900" class="w-full bg-white border border-slate-100 rounded-xl py-3.5 px-4 text-xs font-extrabold text-slate-800 focus:outline-none focus:border-brand-blue shadow-sm" />
             </div>
             
             <div class="flex items-center gap-2 pt-2">
                <input type="checkbox" id="addrDefaultCheck" checked class="w-4 h-4 text-brand-blue border-slate-200 rounded focus:ring-brand-blue" />
                <label for="addrDefaultCheck" class="text-xs font-bold text-slate-500">Save as default shipping address</label>
             </div>
          </form>
       </div>

       <div class="p-6 shrink-0 bg-white border-t border-slate-100">
          <button type="submit" form="addAddressForm" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-100 transition-all transform active:scale-95 text-lg">
             Save Shipping Location
          </button>
       </div>
    </div>
  `;
}

export function renderOrderSuccess() {
  return `
    <div class="flex-1 flex flex-col items-center justify-between px-6 py-12 bg-white text-center animate-slide-up">
       <div></div>
       
       <div class="flex flex-col items-center my-auto space-y-4">
          <div class="w-24 h-24 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shadow-sm">
             <i data-lucide="check-circle" class="w-14 h-14" stroke-width="2.5"></i>
          </div>
          <h2 class="text-3xl font-black text-slate-800 leading-tight">Order Success!</h2>
          <p class="text-slate-400 font-bold max-w-sm leading-relaxed text-xs">
             Thank you for shopping with SmartBag! Your order #OD2204 is confirmed and being packed at our local organic fulfillment warehouse.
          </p>
       </div>
       
       <div class="w-full space-y-3 pt-6">
          <button onclick="navigate('trackOrder')" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-sm">
             Track Order Shipment
          </button>
          <button onclick="navigate('home')" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-extrabold py-4 rounded-xl transition-all text-sm">
             Back to Catalog
          </button>
       </div>
    </div>
  `;
}

export function renderOrderDecline() {
  return `
    <div class="flex-1 flex flex-col items-center justify-between px-6 py-12 bg-white text-center animate-slide-up">
       <div></div>
       
       <div class="flex flex-col items-center my-auto space-y-4">
          <div class="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shadow-sm">
             <i data-lucide="x-circle" class="w-14 h-14" stroke-width="2.5"></i>
          </div>
          <h2 class="text-3xl font-black text-slate-800 leading-tight">Payment Declined</h2>
          <p class="text-slate-400 font-bold max-w-sm leading-relaxed text-xs">
             We couldn't authorize the funds for your order #OD2204 on your current credit card. Please verify card details or retry.
          </p>
       </div>
       
       <div class="w-full space-y-3 pt-6">
          <button onclick="navigate('checkout')" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-sm">
             Try Checkout Again
          </button>
          <button onclick="navigate('home')" class="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-extrabold py-4 rounded-xl transition-all text-sm">
             Back to Catalog
          </button>
       </div>
    </div>
  `;
}

export function renderTrackOrder() {
  const steps = [
    { label: 'Order Confirmed', desc: 'Jan 26, 2021 - 12:30 PM', active: true, icon: 'check-circle' },
    { label: 'Packed & Dispatched', desc: 'Jan 26, 2021 - 02:45 PM', active: true, icon: 'package' },
    { label: 'On The Way', desc: 'Out for local delivery', active: true, icon: 'truck' },
    { label: 'Delivered', desc: 'Expecting delivery today', active: false, icon: 'home' }
  ];

  return `
    <div class="flex-1 flex flex-col bg-[#F8F9FB] animate-slide-up">
       <!-- Header -->
       <header class="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-[#F8F9FB]/95 backdrop-blur-sm shrink-0 border-b border-slate-100">
          <button onclick="goBack()" class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-slate-50 border border-slate-50 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          <h1 class="text-lg font-black text-slate-800">Track Order</h1>
          <div class="w-10"></div>
       </header>

       <div class="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 pt-4 space-y-6">
          <!-- Order ID card -->
          <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
             <div>
                <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-0.5">Shipment Code</span>
                <span class="font-black text-slate-800 text-base">#OD2204</span>
             </div>
             <span class="bg-blue-50 text-brand-blue text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">Out For Delivery</span>
          </div>

          <!-- Vertical Shipment timeline -->
          <div class="relative pl-8 space-y-8 py-2">
             <!-- Vertical guide line -->
             <div class="absolute left-[15px] top-4 bottom-4 w-[2px] bg-slate-200"></div>

             ${steps.map((step, idx) => `
                <div class="relative flex gap-4">
                   <!-- Bullet point -->
                   <div class="absolute -left-8 w-8 h-8 rounded-full border-2 ${step.active ? 'bg-brand-blue border-brand-blue text-white shadow-md shadow-blue-100' : 'bg-slate-100 border-slate-200 text-slate-400'} flex items-center justify-center z-10">
                      <i data-lucide="${step.icon}" class="w-4 h-4"></i>
                   </div>
                   
                   <div class="space-y-0.5 pt-0.5">
                      <h4 class="font-black text-sm ${step.active ? 'text-slate-800' : 'text-slate-400'}">${step.label}</h4>
                      <p class="text-xs font-bold ${step.active ? 'text-slate-500' : 'text-slate-300'}">${step.desc}</p>
                   </div>
                </div>
             `).join('')}
          </div>

          <!-- Delivery agent info card -->
          <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
             <div class="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Delivery agent" class="w-full h-full object-cover" />
             </div>
             <div class="flex-1">
                <h4 class="font-black text-slate-800 text-sm">Rakesh Kumar</h4>
                <p class="text-slate-400 text-xs font-bold leading-none">SmartBag Express Rider</p>
             </div>
             <button onclick="navigate('liveChat')" class="w-10 h-10 bg-blue-50 rounded-xl hover:bg-blue-100 text-brand-blue flex items-center justify-center transition-colors">
                <i data-lucide="message-square-text" class="w-5 h-5"></i>
             </button>
          </div>
       </div>
    </div>
  `;
}
