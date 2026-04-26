import React, { useState } from 'react';
import { ChevronLeft, Camera, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';

interface MyOrdersScreenProps {
  onBack: () => void;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ onBack }) => {
  const [expandedOrderId, setExpandedOrderId] = useState<string>('OD2204');

  const toggleExpand = (id: string) => {
    setExpandedOrderId(prev => prev === id ? '' : id);
  };

  const orders = [
    {
      id: 'OD2204',
      date: 'Jan 26, 2021',
      items: 15,
      total: 100.00,
      isTimeline: true,
      timeline: [
        { title: 'Order Placed', date: '26 Jan, 2021', completed: true },
        { title: 'Order Confirmed', date: '26 Jan, 2021', completed: true },
        { title: 'Order Shipped', date: '26 Jan, 2021', completed: true },
        { title: 'Out Of Delivery', date: 'Pending', completed: false },
        { title: 'Order Delivered', date: 'Pending', completed: false },
      ]
    },
    {
      id: 'OD2203',
      date: 'Jan 15, 2021',
      items: 24,
      total: 500.00,
      deliveredDate: 'Jan 15, 2021'
    },
    {
      id: 'OD2202',
      date: 'Jan 08, 2021',
      items: 9,
      total: 215.00,
      deliveredDate: 'Jan 08, 2021'
    },
    {
      id: 'OD2201',
      date: 'Dec 28, 2020',
      items: 16,
      total: 685.00,
      deliveredDate: 'Dec 28, 2020'
    },
     {
      id: 'OD2200',
      date: 'Dec 16, 2020',
      items: 20,
      total: 325.00,
      deliveredDate: 'Dec 16, 2020'
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
        <h1 className="text-lg font-bold text-gray-900">My Orders</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="flex-1 px-5 pt-2 overflow-y-auto no-scrollbar space-y-4">
        {orders.map((order) => {
          const isExpanded = expandedOrderId === order.id;
          // Theme logic: Active/Timeline = Orange, Delivered = Blue
          const isOrangeTheme = !!order.isTimeline; 
          
          return (
            <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                   {/* Icon Box - Changed Green->Blue and Red->Orange */}
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${isOrangeTheme ? 'bg-orange-50 text-[#F97316]' : 'bg-blue-50 text-[#3B82F6]'}`}>
                      <ShoppingBag className="w-7 h-7" strokeWidth={1.5} />
                   </div>
                   
                   {/* Info */}
                   <div>
                      <h3 className="font-bold text-gray-900 text-base">Order ID: #{order.id}</h3>
                      <p className="text-gray-400 text-xs font-medium mt-1">Placed on {order.date}</p>
                      <p className="text-gray-500 text-xs font-medium mt-2">
                        <span className="font-bold text-gray-900">Items: {order.items}</span>
                        <span className="mx-2">Total: <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span></span>
                      </p>
                   </div>
                </div>

                {/* Toggle Button */}
                <button 
                  onClick={() => toggleExpand(order.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                </button>
              </div>

              {/* Collapsed View - Status Line - Changed Green to Blue */}
              {!isExpanded && !order.timeline && (
                 <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                       <span className="text-[#3B82F6] font-bold text-xs">Order Delivered</span>
                    </div>
                    <span className="text-gray-400 text-xs font-medium">{order.deliveredDate}</span>
                 </div>
              )}

              {/* Expanded View - Timeline - Changed Red to Orange */}
              {isExpanded && order.timeline && (
                <div className="pt-2 pl-4 relative">
                   <div className="space-y-0 relative">
                      {order.timeline.map((step, index) => {
                         const isLast = index === (order.timeline?.length || 0) - 1;
                         const nextStepCompleted = !isLast && order.timeline && order.timeline[index + 1].completed;
                         
                         return (
                            <div key={index} className={`relative flex justify-between items-start ${!isLast ? 'pb-8' : ''}`}>
                               {/* Connecting Line */}
                               {!isLast && (
                                  <div className={`absolute left-[5px] top-[14px] w-[2px] h-full ${
                                      step.completed && nextStepCompleted ? 'bg-[#F97316]' : 'bg-gray-200'
                                  }`}></div>
                               )}
                               
                               <div className="flex gap-4 items-start relative z-10">
                                  {/* Dot */}
                                  <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${step.completed ? 'bg-[#F97316] ring-4 ring-orange-50' : 'bg-gray-200'}`}></div>
                                  <span className={`text-sm font-medium ${step.completed ? 'text-[#F97316]' : 'text-gray-400'}`}>
                                     {step.title}
                                  </span>
                               </div>
                               <span className="text-xs text-gray-400 font-medium whitespace-nowrap ml-2">{step.date}</span>
                            </div>
                         );
                      })}
                   </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrdersScreen;