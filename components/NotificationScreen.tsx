import React from 'react';
import { ChevronLeft, Camera } from 'lucide-react';

interface NotificationScreenProps {
  onBack: () => void;
}

const NotificationScreen: React.FC<NotificationScreenProps> = ({ onBack }) => {
  const notifications = [
    {
      id: 1,
      title: "Hurry! Apple is now in shop",
      desc: "Simply dummy text of the printingxt of the and types setting when...",
      time: "Today, 12:00 AM",
      color: "bg-[#FFF1F2]" // Light pink
    },
    {
        id: 2,
        title: "75% Discount On Floor Cleaner",
        desc: "Text of the printi Simply dummy text of the and types setting when...",
        time: "Today, 08:30 AM",
        color: "bg-[#EFF6FF]" // Light blue
    },
    {
        id: 3,
        title: "Last change to grab Vegetables",
        desc: "Types setting when Simply dummy text of the printing hrty of the lovely...",
        time: "Today, 05:30 PM",
        color: "bg-[#F0FDF4]" // Light green
    },
     {
        id: 4,
        title: "Get 80% Off on First Purchase",
        desc: "Types setting when Simply dummy text of the printing hrty of the lovely...",
        time: "Yesterday, 02:45 PM",
        color: "bg-[#FDF2F8]" // Pink
    },
     {
        id: 5,
        title: "Get your Baby for next step",
        desc: "Types setting when Simply dummy text of the printing hrty of the lovely...",
        time: "2 Days ago",
        color: "bg-[#FEFCE8]" // Yellow
    },
     {
        id: 6,
        title: "80% Off on Online Grocery",
        desc: "Types setting when Simply dummy text of the printing hrty of the lovely...",
        time: "2 Days ago",
        color: "bg-[#F0FDF4]" // Green
    },
     {
        id: 7,
        title: "52% Off on Cosmetics",
        desc: "Types setting when Simply dummy text of the printing hrty of the lovely...",
        time: "2 Days ago",
        color: "bg-[#FFF7ED]" // Orange/Beige
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-24">
       {/* Header */}
       <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Notification</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          {/* Notification Dot - Changed Red to Blue */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3B82F6] rounded-full ring-1 ring-white"></span>
        </button>
      </header>
      
      <div className="px-6 flex justify-end mb-2">
         <button className="text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors">Clear All</button>
      </div>

      <div className="px-5 space-y-4 overflow-y-auto no-scrollbar pb-6 flex-1">
         {notifications.map((item) => (
             <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-4">
                 <div className={`w-16 h-16 rounded-full flex-shrink-0 ${item.color}`}></div>
                 <div className="flex-1 pt-1">
                     <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{item.title}</h3>
                     <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">{item.desc}</p>
                     <span className="text-xs font-bold text-gray-800">{item.time}</span>
                 </div>
             </div>
         ))}
      </div>
    </div>
  )
}

export default NotificationScreen;