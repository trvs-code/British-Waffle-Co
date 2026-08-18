import React, { useState } from 'react';
import { X, ShoppingBag, Phone, MessageCircle, ExternalLink, Sparkles, Check, ArrowRight } from 'lucide-react';
import { MenuItem, CustomOrderItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingCustomOrder?: CustomOrderItem | null;
  onClearPendingOrder?: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  pendingCustomOrder,
  onClearPendingOrder
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway');

  const swiggyUrl = "https://www.swiggy.com/city/mumbai/british-waffle-co-malad-east-rest74384";
  const zomatoUrl = "https://www.zomato.com/mumbai/british-waffle-co-malad-east";
  const phoneNumber = "+917900031156";

  const handleWhatsAppOrder = () => {
    let message = `*Hi British Waffle Co!* 👋%0A%0AI would like to place an order from your Malad East outlet:%0A`;

    if (customerName) {
      message += `• *Name:* ${encodeURIComponent(customerName)}%0A`;
    }
    if (customerPhone) {
      message += `• *Phone:* ${encodeURIComponent(customerPhone)}%0A`;
    }
    message += `• *Order Type:* ${orderType === 'takeaway' ? 'Takeaway Pickup' : 'Dine-In Table'}%0A%0A`;

    if (pendingCustomOrder) {
      message += `*Items Ordered:*%0A`;
      message += `• ${pendingCustomOrder.quantity}x *${encodeURIComponent(pendingCustomOrder.item.name)}* (Base: ${encodeURIComponent(pendingCustomOrder.base)})%0A`;
      if (pendingCustomOrder.extraToppings.length > 0) {
        message += `  - Extra: ${encodeURIComponent(pendingCustomOrder.extraToppings.join(', '))}%0A`;
      }
      if (pendingCustomOrder.specialInstructions) {
        message += `  - Notes: ${encodeURIComponent(pendingCustomOrder.specialInstructions)}%0A`;
      }
      message += `%0APlease confirm the total amount and estimated preparation time!`;
    } else {
      message += `Please share today's menu availability or accept my takeaway order!`;
    }

    const whatsappLink = `https://wa.me/917900031156?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-[#faf7f2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#ede4d8] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-[#2b1810] text-[#f5efe6] relative">
          <button
            onClick={onClose}
            aria-label="Close Order Modal"
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-[#e6ca65] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>British Waffle Co. Malad East</span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-white">
            Ready for Something Delicious?
          </h3>
          <p className="text-xs text-[#dfd4c4] mt-1">
            Your next warm waffle or thick shake is just one click away.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* If there's an item customized from the menu */}
          {pendingCustomOrder && (
            <div className="bg-[#f5efe6] p-4 rounded-2xl border border-[#ede4d8] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78350f]">
                  Your Customized Selection
                </span>
                {onClearPendingOrder && (
                  <button
                    onClick={onClearPendingOrder}
                    className="text-[11px] text-[#a35d25] hover:underline"
                  >
                    Change Item
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2b1810]">
                    {pendingCustomOrder.quantity}x {pendingCustomOrder.item.name}
                  </h4>
                  <p className="text-[11px] text-[#5a3623]">
                    Base: {pendingCustomOrder.base}
                    {pendingCustomOrder.extraToppings.length > 0 && ` • Extra: ${pendingCustomOrder.extraToppings.join(', ')}`}
                  </p>
                </div>
                {pendingCustomOrder.item.price && (
                  <span className="text-sm font-bold text-[#c67d3e]">
                    ₹{pendingCustomOrder.item.price * pendingCustomOrder.quantity}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Quick Direct Order Channels */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#78350f] block">
              Choose How You’d Like to Order:
            </label>

            {/* Option 1: WhatsApp Direct Order / Pickup */}
            <div className="bg-white p-4 rounded-2xl border border-[#ede4d8] shadow-xs space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#2b1810]">
                    WhatsApp Direct Order & Pickup
                  </h4>
                  <p className="text-xs text-[#5a3623]">
                    Zero extra platform fees, custom requests & fresh table prep
                  </p>
                </div>
              </div>

              {/* Optional Quick Fields for WhatsApp */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#f5efe6]">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="p-2 text-xs rounded-lg border border-[#dfd4c4] bg-[#faf7f2]"
                />
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as 'takeaway' | 'dinein')}
                  className="p-2 text-xs rounded-lg border border-[#dfd4c4] bg-[#faf7f2]"
                >
                  <option value="takeaway">Takeaway Pickup</option>
                  <option value="dinein">Dine-In Table</option>
                </select>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Order via WhatsApp (+91 79000 31156)</span>
              </button>
            </div>

            {/* Option 2: Online Food Delivery Apps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Swiggy */}
              <a
                href={swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-orange-50/50 p-4 rounded-2xl border border-[#ede4d8] shadow-xs flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                      Swiggy
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-600" />
                  </div>
                  <h5 className="font-serif font-bold text-sm text-[#2b1810]">
                    Order on Swiggy
                  </h5>
                  <p className="text-[11px] text-[#5a3623] mt-0.5">
                    Fast doorstep delivery in Malad & suburbs
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-orange-600 flex items-center space-x-1">
                  <span>Go to Swiggy</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Zomato */}
              <a
                href={zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-red-50/50 p-4 rounded-2xl border border-[#ede4d8] shadow-xs flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      Zomato
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-600" />
                  </div>
                  <h5 className="font-serif font-bold text-sm text-[#2b1810]">
                    Order on Zomato
                  </h5>
                  <p className="text-[11px] text-[#5a3623] mt-0.5">
                    Live tracking & instant delivery
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-red-600 flex items-center space-x-1">
                  <span>Go to Zomato</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

            </div>

            {/* Option 3: Phone Direct Dial */}
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white hover:bg-[#ede4d8] p-3.5 rounded-2xl border border-[#ede4d8] shadow-xs flex items-center justify-between text-xs font-semibold text-[#2b1810] transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c67d3e]" />
                <span>Call Outlet Counter: +91 79000 31156</span>
              </div>
              <span className="text-[#a35d25] font-bold">Call Now</span>
            </a>

          </div>

        </div>

        {/* Footer Note */}
        <div className="p-4 bg-[#f5efe6] border-t border-[#ede4d8] text-center text-[11px] text-[#78350f]">
          Open Daily: 02:00 PM – 11:30 PM • 100% Pure Vegetarian
        </div>
      </div>
    </div>
  );
};
