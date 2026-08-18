import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderDirect: (item: MenuItem, base: string, toppings: string[], qty: number, instructions: string) => void;
}

const EXTRA_TOPPINGS = [
  { name: 'Extra Belgian Chocolate Ganache', price: 35 },
  { name: 'Scoop of Vanilla Ice Cream', price: 40 },
  { name: 'Scoop of Chocolate Ice Cream', price: 45 },
  { name: 'Roasted Almond Slivers', price: 25 },
  { name: 'Lotus Biscoff Biscuit Crumble', price: 30 },
  { name: 'Extra Nutella Drizzle', price: 40 },
  { name: 'Oreo Cookie Crumbs', price: 25 }
];

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onOrderDirect }) => {
  if (!item) return null;

  const defaultBase = item.waffleBaseOptions?.[0] || 'Standard';
  const [selectedBase, setSelectedBase] = useState<string>(defaultBase);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [instructions, setInstructions] = useState<string>('');

  const toggleTopping = (toppingName: string) => {
    if (selectedToppings.includes(toppingName)) {
      setSelectedToppings(selectedToppings.filter(t => t !== toppingName));
    } else {
      setSelectedToppings([...selectedToppings, toppingName]);
    }
  };

  const extraToppingsCost = selectedToppings.reduce((acc, curr) => {
    const found = EXTRA_TOPPINGS.find(t => t.name === curr);
    return acc + (found ? found.price : 0);
  }, 0);

  const basePrice = item.price || 0;
  const totalPrice = (basePrice + extraToppingsCost) * quantity;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-[#faf7f2] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#ede4d8] max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="relative aspect-[16/9] w-full bg-[#ede4d8] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-semibold backdrop-blur-xs border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>100% Pure Veg</span>
            </span>
            {item.isBestSeller && (
              <span className="px-3 py-1 rounded-full bg-[#c67d3e] text-white text-xs font-bold shadow-xs">
                BEST SELLER
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase tracking-wider text-[#e6ca65] font-semibold">
              {item.categoryName}
            </span>
            <h3 className="text-2xl font-serif font-bold leading-tight">
              {item.name}
            </h3>
            {item.price && (
              <span className="text-xl font-bold text-[#e6ca65] mt-1 inline-block">
                ₹{item.price}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#2b1810]">
          
          {/* Description */}
          <div className="space-y-1">
            <p className="text-sm text-[#4a2e1b] leading-relaxed">
              {item.description}
            </p>
            {item.calories && (
              <span className="text-[11px] text-[#78350f] font-medium block">
                Approx. {item.calories} • Handcrafted fresh per order
              </span>
            )}
          </div>

          {/* Included Toppings */}
          {item.toppingsIncluded && item.toppingsIncluded.length > 0 && (
            <div className="space-y-2 bg-[#f5efe6] p-3.5 rounded-2xl border border-[#ede4d8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350f] flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c67d3e]" />
                <span>What's Inside</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.toppingsIncluded.map((top, idx) => (
                  <span key={idx} className="text-xs bg-white text-[#4a2e1b] px-2.5 py-1 rounded-lg border border-[#ede4d8] font-medium">
                    {top}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Waffle Base Selection if applicable */}
          {item.waffleBaseOptions && item.waffleBaseOptions.length > 0 && (
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#78350f] block">
                Select Your Waffle Base:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.waffleBaseOptions.map((base) => (
                  <button
                    key={base}
                    type="button"
                    onClick={() => setSelectedBase(base)}
                    className={`text-left p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      selectedBase === base
                        ? 'border-[#2b1810] bg-[#2b1810] text-white shadow-xs'
                        : 'border-[#dfd4c4] bg-white text-[#2b1810] hover:border-[#c67d3e]'
                    }`}
                  >
                    <span>{base}</span>
                    {selectedBase === base && <Check className="w-4 h-4 text-[#e6ca65]" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-on extra toppings */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#78350f] block">
              Add Extra Indulgence (Optional):
            </label>
            <div className="space-y-1.5">
              {EXTRA_TOPPINGS.map((top) => {
                const isSelected = selectedToppings.includes(top.name);
                return (
                  <button
                    key={top.name}
                    type="button"
                    onClick={() => toggleTopping(top.name)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#c67d3e] bg-amber-50/60 font-semibold text-[#2b1810]'
                        : 'border-[#ede4d8] bg-white hover:border-[#dfd4c4] text-[#4a2e1b]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${isSelected ? 'border-[#c67d3e] bg-[#c67d3e] text-white' : 'border-[#dfd4c4]'}`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <span>{top.name}</span>
                    </div>
                    <span className="text-[#a35d25] font-bold">+₹{top.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Chef Notes */}
          <div className="space-y-1.5">
            <label htmlFor="modal-instructions" className="text-xs font-bold uppercase tracking-wider text-[#78350f] block">
              Special Instructions (e.g. Extra hot, separate sauce):
            </label>
            <input
              id="modal-instructions"
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Any sweet preferences..."
              className="w-full text-xs p-3 rounded-xl border border-[#dfd4c4] bg-white focus:outline-none focus:ring-2 focus:ring-[#c67d3e]"
            />
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-[#f5efe6] border-t border-[#ede4d8] flex items-center justify-between gap-4">
          
          {/* Quantity Counter */}
          <div className="flex items-center space-x-2 bg-white border border-[#dfd4c4] rounded-xl p-1 shadow-xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2b1810] hover:bg-[#ede4d8] transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-bold text-[#2b1810]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2b1810] hover:bg-[#ede4d8] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Order Action Button */}
          <button
            onClick={() => onOrderDirect(item, selectedBase, selectedToppings, quantity, instructions)}
            className="flex-1 bg-[#2b1810] hover:bg-[#c67d3e] text-white py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
              <span>Order on WhatsApp / Pickup</span>
            </div>
            <span className="font-bold text-[#e6ca65]">
              ₹{totalPrice}
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};
