
import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import BottomNav from './components/BottomNav';
import FilterScreen from './components/FilterScreen';
import ReviewScreen from './components/ReviewScreen';
import CheckoutScreen from './components/CheckoutScreen';
import AddCardScreen from './components/AddCardScreen';
import AddAddressScreen from './components/AddAddressScreen';
import AboutMeScreen from './components/AboutMeScreen';
import CategoriesScreen from './components/CategoriesScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import DeliveryAddressScreen from './components/DeliveryAddressScreen';
import CreditCardsScreen from './components/CreditCardsScreen';
import HomeScreen from './components/HomeScreen';
import FollowersScreen from './components/FollowersScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import CategoryProductsScreen from './components/CategoryProductsScreen';
import LiveChatScreen from './components/LiveChatScreen';
import MyFavouriteScreen from './components/MyFavouriteScreen';
import MyOrdersScreen from './components/MyOrdersScreen';
import MyPaymentScreen from './components/MyPaymentScreen';
import NotificationScreen from './components/NotificationScreen';
import OrderDeclineScreen from './components/OrderDeclineScreen';
import OrderSuccessScreen from './components/OrderSuccessScreen';
import TrackOrderScreen from './components/TrackOrderScreen';
import PhoneVerificationScreen from './components/PhoneVerificationScreen';
import SideMenuScreen from './components/SideMenuScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import PromocodeDetailsScreen from './components/PromocodeDetailsScreen';
import PromocodeScreen from './components/PromocodeScreen';
import PasswordResetSuccessScreen from './components/PasswordResetSuccessScreen';
import ReviewsScreen from './components/ReviewsScreen';
import ScanQrScreen from './components/ScanQrScreen';
import SearchScreen from './components/SearchScreen';

const App: React.FC = () => {
  // Simple view state to switch between screens for demonstration
  // Set default to 'home'
  const [currentScreen, setCurrentScreen] = useState<'home' | 'filter' | 'review' | 'checkout' | 'addCard' | 'addAddress' | 'aboutMe' | 'categories' | 'changePassword' | 'deliveryAddress' | 'creditCards' | 'followers' | 'forgotPassword' | 'categoryProducts' | 'liveChat' | 'myFavourite' | 'orders' | 'myPayment' | 'notification' | 'orderDecline' | 'orderSuccess' | 'trackOrder' | 'phoneVerification' | 'sideMenu' | 'productDetail' | 'promocodeDetails' | 'promocode' | 'passwordResetSuccess' | 'reviews' | 'scanQr' | 'search'>('home');

  const navigateToHome = () => setCurrentScreen('home');
  const navigateToReview = () => setCurrentScreen('review');
  const navigateToFilter = () => setCurrentScreen('filter');
  const navigateToCheckout = () => setCurrentScreen('checkout');
  const navigateToAddCard = () => setCurrentScreen('addCard');
  const navigateToAddAddress = () => setCurrentScreen('addAddress');
  const navigateToAboutMe = () => setCurrentScreen('aboutMe');
  const navigateToCategories = () => setCurrentScreen('categories');
  const navigateToChangePassword = () => setCurrentScreen('changePassword');
  const navigateToDeliveryAddress = () => setCurrentScreen('deliveryAddress');
  const navigateToCreditCards = () => setCurrentScreen('creditCards');
  const navigateToFollowers = () => setCurrentScreen('followers');
  const navigateToForgotPassword = () => setCurrentScreen('forgotPassword');
  const navigateToCategoryProducts = () => setCurrentScreen('categoryProducts');
  const navigateToLiveChat = () => setCurrentScreen('liveChat');
  const navigateToMyFavourite = () => setCurrentScreen('myFavourite');
  const navigateToOrders = () => setCurrentScreen('orders');
  const navigateToMyPayment = () => setCurrentScreen('myPayment');
  const navigateToNotification = () => setCurrentScreen('notification');
  const navigateToOrderDecline = () => setCurrentScreen('orderDecline');
  const navigateToOrderSuccess = () => setCurrentScreen('orderSuccess');
  const navigateToTrackOrder = () => setCurrentScreen('trackOrder');
  const navigateToPhoneVerification = () => setCurrentScreen('phoneVerification');
  const navigateToSideMenu = () => setCurrentScreen('sideMenu');
  const navigateToProductDetail = () => setCurrentScreen('productDetail');
  const navigateToPromocodeDetails = () => setCurrentScreen('promocodeDetails');
  const navigateToPromocode = () => setCurrentScreen('promocode');
  const navigateToPasswordResetSuccess = () => setCurrentScreen('passwordResetSuccess');
  const navigateToReviews = () => setCurrentScreen('reviews');
  const navigateToScanQr = () => setCurrentScreen('scanQr');
  const navigateToSearch = () => setCurrentScreen('search');

  // Handle generic navigation from Side Menu
  const handleMenuNavigation = (target: string) => {
    switch (target) {
      case 'aboutMe': setCurrentScreen('aboutMe'); break;
      case 'orders': setCurrentScreen('orders'); break;
      case 'myPayment': setCurrentScreen('myPayment'); break;
      case 'myFavourite': setCurrentScreen('myFavourite'); break;
      case 'deliveryAddress': setCurrentScreen('deliveryAddress'); break;
      case 'notification': setCurrentScreen('notification'); break;
      case 'liveChat': setCurrentScreen('liveChat'); break;
      case 'promocodeDetails': setCurrentScreen('promocodeDetails'); break;
      case 'promocode': setCurrentScreen('promocode'); break;
      case 'home': setCurrentScreen('home'); break;
      default: setCurrentScreen('home');
    }
  };

  // Handle bottom nav navigation
  const handleNavNavigation = (screen: string) => {
    if (screen === 'profile') {
      setCurrentScreen('sideMenu');
    } else if (screen === 'checkout') {
      setCurrentScreen('checkout');
    } else if (screen === 'categories') {
      setCurrentScreen('categories');
    } else if (screen === 'home') {
      setCurrentScreen('home');
    } else if (screen === 'orders') {
      setCurrentScreen('orders');
    } else {
      console.log('Navigate to', screen);
    }
  };

  const getActiveTab = () => {
    if (currentScreen === 'aboutMe' || currentScreen === 'sideMenu' || currentScreen === 'changePassword' || currentScreen === 'followers' || currentScreen === 'forgotPassword' || currentScreen === 'liveChat' || currentScreen === 'myFavourite' || currentScreen === 'myPayment' || currentScreen === 'notification' || currentScreen === 'orderDecline' || currentScreen === 'orderSuccess' || currentScreen === 'trackOrder' || currentScreen === 'phoneVerification' || currentScreen === 'promocodeDetails' || currentScreen === 'promocode' || currentScreen === 'passwordResetSuccess' || currentScreen === 'reviews' || currentScreen === 'scanQr' || currentScreen === 'search') return 'profile';
    if (currentScreen === 'checkout' || currentScreen === 'deliveryAddress' || currentScreen === 'addAddress' || currentScreen === 'addCard' || currentScreen === 'creditCards') return 'checkout';
    if (currentScreen === 'categories' || currentScreen === 'categoryProducts' || currentScreen === 'productDetail') return 'categories';
    if (currentScreen === 'orders') return 'orders';
    return 'home';
  };

  return (
    <AppLayout 
      onNavigate={handleNavNavigation} 
      activeTab={getActiveTab()}
      hideBottomNav={currentScreen === 'sideMenu' || currentScreen === 'passwordResetSuccess' || currentScreen === 'reviews' || currentScreen === 'scanQr' || currentScreen === 'search'}
    >
      {currentScreen === 'filter' ? (
        <FilterScreen onBack={navigateToSearch} />
      ) : currentScreen === 'review' ? (
        <ReviewScreen onBack={navigateToCheckout} />
      ) : currentScreen === 'checkout' ? (
        <CheckoutScreen 
          onBack={navigateToFilter} 
          onAddCard={navigateToAddCard} 
          onManageAddress={navigateToDeliveryAddress} 
          onManageCards={navigateToCreditCards}
        />
      ) : currentScreen === 'addCard' ? (
        <AddCardScreen onBack={navigateToCheckout} />
      ) : currentScreen === 'creditCards' ? (
        <CreditCardsScreen onBack={navigateToCheckout} />
      ) : currentScreen === 'addAddress' ? (
        <AddAddressScreen onBack={navigateToCheckout} />
      ) : currentScreen === 'aboutMe' ? (
        <AboutMeScreen 
          onBack={navigateToSideMenu} 
          onNavigateToChangePassword={navigateToChangePassword}
        />
      ) : currentScreen === 'changePassword' ? (
        <ChangePasswordScreen onBack={navigateToAboutMe} onNavigateToSuccess={navigateToPasswordResetSuccess} />
      ) : currentScreen === 'forgotPassword' ? (
        <ForgotPasswordScreen onBack={navigateToAboutMe} />
      ) : currentScreen === 'deliveryAddress' ? (
        <DeliveryAddressScreen 
          onBack={navigateToSideMenu}
          onConfirm={navigateToCheckout}
        />
      ) : currentScreen === 'categories' ? (
        <CategoriesScreen onBack={navigateToHome} />
      ) : currentScreen === 'categoryProducts' ? (
        <CategoryProductsScreen onBack={navigateToCategories} onProductClick={navigateToProductDetail} />
      ) : currentScreen === 'followers' ? (
        <FollowersScreen onBack={navigateToAboutMe} />
      ) : currentScreen === 'liveChat' ? (
        <LiveChatScreen onBack={navigateToSideMenu} />
      ) : currentScreen === 'myFavourite' ? (
        <MyFavouriteScreen onBack={navigateToSideMenu} />
      ) : currentScreen === 'orders' ? (
        <MyOrdersScreen onBack={navigateToSideMenu} />
      ) : currentScreen === 'myPayment' ? (
        <MyPaymentScreen onBack={navigateToSideMenu} />
      ) : currentScreen === 'notification' ? (
        <NotificationScreen onBack={navigateToSideMenu} />
      ) : currentScreen === 'orderDecline' ? (
        <OrderDeclineScreen onBack={navigateToHome} />
      ) : currentScreen === 'orderSuccess' ? (
        <OrderSuccessScreen onBack={navigateToHome} onTrackOrder={navigateToTrackOrder} />
      ) : currentScreen === 'trackOrder' ? (
        <TrackOrderScreen onBack={navigateToHome} />
      ) : currentScreen === 'phoneVerification' ? (
        <PhoneVerificationScreen onBack={navigateToHome} />
      ) : currentScreen === 'sideMenu' ? (
        <SideMenuScreen onNavigate={handleMenuNavigation} onSignOut={navigateToHome} />
      ) : currentScreen === 'productDetail' ? (
        <ProductDetailScreen onBack={navigateToCategoryProducts} onNavigateToReviews={navigateToReviews} />
      ) : currentScreen === 'promocodeDetails' ? (
        <PromocodeDetailsScreen onBack={navigateToPromocode} />
      ) : currentScreen === 'promocode' ? (
        <PromocodeScreen onBack={navigateToSideMenu} onNavigateToDetails={navigateToPromocodeDetails} />
      ) : currentScreen === 'passwordResetSuccess' ? (
        <PasswordResetSuccessScreen onDone={navigateToHome} />
      ) : currentScreen === 'reviews' ? (
        <ReviewsScreen onBack={navigateToProductDetail} />
      ) : currentScreen === 'scanQr' ? (
        <ScanQrScreen onBack={navigateToHome} />
      ) : currentScreen === 'search' ? (
        <SearchScreen onBack={navigateToHome} onNavigateToFilter={navigateToFilter} />
      ) : (
        <HomeScreen onNavigateToProduct={navigateToProductDetail} onSearchClick={navigateToSearch} />
      )}

      {/* Dev Helper to navigate between screens */}
      <div className="fixed top-24 right-0 z-50 flex flex-col items-end gap-1 p-2 pointer-events-none">
         <div className="pointer-events-auto flex flex-col gap-1 bg-black/10 backdrop-blur-md rounded-l-lg p-1">
            <button onClick={navigateToHome} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'home' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Home</button>
            <button onClick={navigateToSearch} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'search' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Search</button>
            <button onClick={navigateToScanQr} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'scanQr' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Scan QR</button>
            <button onClick={navigateToSideMenu} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'sideMenu' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Side Menu</button>
            <button onClick={navigateToPromocode} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'promocode' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Promo List</button>
            <button onClick={navigateToPromocodeDetails} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'promocodeDetails' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Promo Detail</button>
            <button onClick={navigateToProductDetail} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'productDetail' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Product Detail</button>
            <button onClick={navigateToReviews} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'reviews' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Reviews</button>
            <button onClick={navigateToPhoneVerification} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'phoneVerification' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Phone Verify</button>
            <button onClick={navigateToTrackOrder} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'trackOrder' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Track Order</button>
            <button onClick={navigateToOrderSuccess} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'orderSuccess' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Order Success</button>
            <button onClick={navigateToOrderDecline} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'orderDecline' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Order Decline</button>
            <button onClick={navigateToNotification} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'notification' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Notifications</button>
            <button onClick={navigateToMyPayment} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'myPayment' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>My Payment</button>
            <button onClick={navigateToOrders} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'orders' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>My Orders</button>
            <button onClick={navigateToMyFavourite} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'myFavourite' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>My Favourites</button>
            <button onClick={navigateToCheckout} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'checkout' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Checkout</button>
            <button onClick={navigateToCreditCards} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'creditCards' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Credit Cards</button>
            <button onClick={navigateToDeliveryAddress} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'deliveryAddress' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Address List</button>
            <button onClick={navigateToCategories} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'categories' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Categories</button>
            <button onClick={navigateToCategoryProducts} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'categoryProducts' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Fruits & Veg</button>
            <button onClick={navigateToAboutMe} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'aboutMe' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Profile</button>
            <button onClick={navigateToFollowers} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'followers' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Followers</button>
            <button onClick={navigateToLiveChat} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'liveChat' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Live Chat</button>
            <button onClick={navigateToChangePassword} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'changePassword' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Password</button>
            <button onClick={navigateToForgotPassword} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'forgotPassword' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Forgot Pass</button>
            <button onClick={navigateToAddAddress} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'addAddress' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Add Address</button>
            <button onClick={navigateToAddCard} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'addCard' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Add Card</button>
            <button onClick={navigateToFilter} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'filter' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Filter</button>
            <button onClick={navigateToReview} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'review' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Add Review</button>
            <button onClick={navigateToPasswordResetSuccess} className={`px-2 py-1 text-[10px] rounded ${currentScreen === 'passwordResetSuccess' ? 'bg-white text-black font-bold' : 'text-white hover:bg-white/20'}`}>Pass Reset</button>
         </div>
      </div>
    </AppLayout>
  );
};

export default App;
