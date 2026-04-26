
import React from 'react';
import DesktopHeader from './DesktopHeader';
import BottomNav from './BottomNav';

interface AppLayoutProps {
  children: React.ReactNode;
  onNavigate: (screen: string) => void;
  activeTab: string;
  hideBottomNav?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, onNavigate, activeTab, hideBottomNav }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      {/* Desktop Navigation */}
      <DesktopHeader onNavigate={onNavigate} activeTab={activeTab} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      {!hideBottomNav && (
        <div className="md:hidden">
          <BottomNav onNavigate={onNavigate} activeTab={activeTab} />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
