import React from 'react';
import { ChevronLeft, Camera, Mic, Plus } from 'lucide-react';

interface LiveChatScreenProps {
  onBack: () => void;
}

const LiveChatScreen: React.FC<LiveChatScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Live Chat</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 px-5 py-4 overflow-y-auto no-scrollbar flex flex-col gap-6">
        
        {/* Date Separator */}
        <div className="flex justify-center mb-2">
            <span className="bg-white px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 shadow-sm">
                Today, 10:20 AM
            </span>
        </div>

        {/* Message: Received */}
        <div className="flex items-end gap-3 max-w-[85%]">
            {/* Avatar - Changed Green to Orange */}
            <div className="w-10 h-10 rounded-full bg-[#F97316] flex-shrink-0 relative">
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#F97316] border-2 border-white rounded-full"></span>
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Hi, How can I help you today?
                </p>
            </div>
        </div>

        {/* Message: Sent (Text) - Blue */}
        <div className="flex flex-col items-end self-end max-w-[85%] gap-1">
            <div className="bg-[#3B82F6] p-4 rounded-2xl rounded-br-sm shadow-md shadow-blue-200">
                <p className="text-sm text-white leading-relaxed">
                    Hello, i'have received some wrong items with my orders. I didn't order Amul Butter Cookies.
                </p>
            </div>
        </div>

        {/* Message: Sent (Image) - Blue background/placeholder */}
        <div className="flex flex-col items-end self-end max-w-[85%] gap-1">
            <div className="bg-[#3B82F6] p-2 rounded-2xl rounded-br-sm shadow-md shadow-blue-200 w-48 h-48 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" 
                    alt="Wrong item" 
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </div>

        {/* Message: Received */}
        <div className="flex items-end gap-3 max-w-[85%]">
             {/* Avatar - Changed Green to Orange */}
             <div className="w-10 h-10 rounded-full bg-[#F97316] flex-shrink-0 relative">
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#F97316] border-2 border-white rounded-full"></span>
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm">
                <p className="text-sm text-gray-600 leading-relaxed">
                   Sorry for the wrong item. we will check about it first and get back to you as soon as possible.
                </p>
            </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-5 sticky bottom-0 bg-gray-50 z-40">
          <div className="bg-white rounded-full shadow-lg p-2 pl-4 flex items-center gap-3">
              {/* Mic Icon - Blue */}
              <button className="text-[#3B82F6] hover:bg-blue-50 p-2 rounded-full transition-colors">
                  <Mic className="w-5 h-5" />
              </button>
              
              <input 
                type="text" 
                placeholder="Say something..." 
                className="flex-1 bg-transparent text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none py-2"
              />

              {/* Plus Button - Changed Green to Orange */}
              <button className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white shadow-md hover:bg-orange-600 transition-colors active:scale-95">
                  <Plus className="w-6 h-6" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default LiveChatScreen;