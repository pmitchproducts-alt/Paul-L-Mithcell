export function renderOnboarding() {
  return `
    <div class="flex-1 flex flex-col items-center justify-between px-6 py-12 bg-white text-center animate-slide-up">
       <div class="w-full flex justify-end">
          <button onclick="navigate('signIn')" class="text-slate-400 font-bold hover:text-slate-600 text-sm transition-colors">Skip</button>
       </div>
       
       <div class="flex flex-col items-center my-auto">
          <div class="w-64 h-64 flex items-center justify-center mb-8 relative">
             <div class="absolute inset-0 bg-blue-50 rounded-full scale-95 animate-pulse"></div>
             <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" alt="SmartBag" class="w-48 h-48 object-contain rounded-3xl shadow-lg relative z-10" />
          </div>
          
          <h1 class="text-3xl font-black text-slate-800 mb-4 leading-tight tracking-tight">
             Welcome to <span class="text-brand-blue">SmartBag</span>
          </h1>
          <p class="text-slate-500 font-medium max-w-sm leading-relaxed">
             Get organic fresh fruits, vegetables, and pantry essentials delivered directly to your doorstep with smart reviews and automated suggestions.
          </p>
       </div>
       
       <button onclick="navigate('signIn')" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 flex items-center justify-center gap-2 text-lg">
          Get Started
          <i data-lucide="arrow-right" class="w-5 h-5"></i>
       </button>
    </div>
  `;
}

export function renderSignIn() {
  return `
    <div class="flex-1 flex flex-col justify-between px-6 py-10 bg-white animate-slide-up">
       <div>
          <button onclick="navigate('onboarding')" class="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-xl mb-8 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800"></i>
          </button>
          
          <h2 class="text-3xl font-black text-slate-800 mb-2">Sign In</h2>
          <p class="text-slate-400 font-bold mb-8">Welcome back! Please enter your details.</p>
          
          <form onsubmit="event.preventDefault(); navigate('home')" class="space-y-6">
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                <div class="relative flex items-center">
                   <i data-lucide="mail" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="email" value="lucymartin@gmail.com" required class="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-all" />
                </div>
             </div>
             
             <div class="space-y-2">
                <div class="flex justify-between items-center">
                   <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Password</label>
                   <button type="button" onclick="navigate('forgotPassword')" class="text-xs font-black text-brand-blue hover:underline">Forgot?</button>
                </div>
                <div class="relative flex items-center">
                   <i data-lucide="lock" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="password" value="••••••••••••" required class="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-all" />
                </div>
             </div>
             
             <div class="flex items-center gap-2 pt-2">
                <input type="checkbox" id="remember" checked class="w-4 h-4 text-brand-blue border-slate-300 rounded focus:ring-brand-blue" />
                <label for="remember" class="text-xs font-bold text-slate-500">Remember me for 30 days</label>
             </div>
             
             <button type="submit" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-lg mt-4">
                Sign In
             </button>
          </form>
       </div>
       
       <div class="text-center mt-8">
          <p class="text-sm font-bold text-slate-400">
             Don't have an account? 
             <button onclick="navigate('home')" class="text-brand-blue font-black hover:underline ml-1">Sign Up</button>
          </p>
       </div>
    </div>
  `;
}

export function renderForgotPassword() {
  return `
    <div class="flex-1 flex flex-col justify-between px-6 py-10 bg-white animate-slide-up">
       <div>
          <button onclick="navigate('signIn')" class="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-xl mb-8 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          
          <h2 class="text-3xl font-black text-slate-800 mb-2">Forgot Password</h2>
          <p class="text-slate-400 font-bold mb-8">Enter your registered email address below to receive instructions to reset your password.</p>
          
          <form onsubmit="event.preventDefault(); navigate('phoneVerification')" class="space-y-6">
             <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                <div class="relative flex items-center">
                   <i data-lucide="mail" class="w-5 h-5 text-slate-400 absolute left-4"></i>
                   <input type="email" placeholder="Enter your email" required class="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-all" />
                </div>
             </div>
             
             <button type="submit" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-lg">
                Send OTP Verification
             </button>
          </form>
       </div>
       
       <div class="text-center mt-8">
          <p class="text-sm font-bold text-slate-400">
             Remember password? 
             <button onclick="navigate('signIn')" class="text-brand-blue font-black hover:underline ml-1">Go back</button>
          </p>
       </div>
    </div>
  `;
}

export function renderPhoneVerification() {
  return `
    <div class="flex-1 flex flex-col justify-between px-6 py-10 bg-white animate-slide-up">
       <div>
          <button onclick="navigate('forgotPassword')" class="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-xl mb-8 transition-colors">
             <i data-lucide="chevron-left" class="w-5 h-5 text-slate-800" stroke-width="2.5"></i>
          </button>
          
          <h2 class="text-3xl font-black text-slate-800 mb-2">Phone Verification</h2>
          <p class="text-slate-400 font-bold mb-8">We have sent a 4-digit OTP code to <span class="text-slate-800 font-extrabold">+91 *** *** 8900</span></p>
          
          <form onsubmit="event.preventDefault(); navigate('passwordResetSuccess')" class="space-y-8">
             <div class="flex justify-between gap-4 max-w-xs mx-auto">
                <input type="text" maxlength="1" required class="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-800 font-black text-2xl text-center rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all" value="4" />
                <input type="text" maxlength="1" required class="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-800 font-black text-2xl text-center rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all" value="2" />
                <input type="text" maxlength="1" required class="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-800 font-black text-2xl text-center rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all" value="0" />
                <input type="text" maxlength="1" required class="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-800 font-black text-2xl text-center rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all" value="4" />
             </div>
             
             <button type="submit" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-lg">
                Verify & Continue
             </button>
          </form>
       </div>
       
       <div class="text-center mt-8 space-y-4">
          <p class="text-sm font-bold text-slate-400">
             Didn't receive the code? 
             <button onclick="alert('Resending OTP code...')" class="text-brand-blue font-black hover:underline ml-1">Resend code</button>
          </p>
       </div>
    </div>
  `;
}

export function renderPasswordResetSuccess() {
  return `
    <div class="flex-1 flex flex-col items-center justify-between px-6 py-12 bg-white text-center animate-slide-up">
       <div></div>
       
       <div class="flex flex-col items-center my-auto">
          <div class="w-24 h-24 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-8 shadow-sm">
             <i data-lucide="check-circle" class="w-14 h-14" stroke-width="2.5"></i>
          </div>
          <h2 class="text-3xl font-black text-slate-800 mb-3 leading-tight">Verification Success!</h2>
          <p class="text-slate-400 font-bold max-w-sm leading-relaxed">
             Your password and phone details have been verified successfully. Welcome to the SmartBag catalog.
          </p>
       </div>
       
       <button onclick="navigate('home')" class="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-lg">
          Explore Grocery
       </button>
    </div>
  `;
}
