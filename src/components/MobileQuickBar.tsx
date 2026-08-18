import React from 'react';
import { ShoppingBag, Phone, MapPin, Sparkles } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenOrderModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenOrderModal }) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=British+Waffle+Co+Shop+6+Vastu+Tower+Film+City+Road+Opposite+Oberoi+Mall+Malad+East+Mumbai+400097";

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2b1810]/95 backdrop-blur-md border-t border-[#4a2e1b] px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      {/* Call button */}
      <a
        href="tel:+917900031156"
        aria-label="Call Outlet"
        className="flex flex-col items-center justify-center w-14 h-11 rounded-xl bg-[#1a0c06] text-[#dfd4c4] hover:text-white border border-[#3e2216] text-[10px] font-semibold"
      >
        <Phone className="w-4 h-4 text-[#c67d3e]" />
        <span>Call</span>
      </a>

      {/* Directions button */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions"
        className="flex flex-col items-center justify-center w-14 h-11 rounded-xl bg-[#1a0c06] text-[#dfd4c4] hover:text-white border border-[#3e2216] text-[10px] font-semibold"
      >
        <MapPin className="w-4 h-4 text-[#c67d3e]" />
        <span>Map</span>
      </a>

      {/* Main Order CTA */}
      <button
        onClick={onOpenOrderModal}
        className="flex-1 h-11 rounded-xl bg-[#c67d3e] hover:bg-[#a35d25] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg active:scale-98 transition-all"
      >
        <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
        <span className="tracking-wide">ORDER NOW (Pure Veg)</span>
      </button>
    </div>
  );
};
