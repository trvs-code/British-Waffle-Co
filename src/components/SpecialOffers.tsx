import React, { useState } from 'react';
import { Tag, Copy, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/offersData';

interface SpecialOffersProps {
  onOpenOrderModal: () => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onOpenOrderModal }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="py-20 bg-[#f5efe6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>Exclusive Outlet Privileges</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810]">
            Sweet Deals, Better Moments
          </h2>

          <p className="text-sm sm:text-base text-[#5a3623]">
            Enjoy special combo perks and direct pickup savings crafted for your next hangout with your tribe.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl p-7 border border-[#ede4d8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-2 bg-[#c67d3e] group-hover:h-2.5 transition-all"
              ></div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#78350f] bg-[#f5efe6] px-3 py-1 rounded-full">
                    {offer.tag}
                  </span>
                  <span className="text-sm font-serif font-extrabold text-[#c67d3e] bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                    {offer.discount}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl font-bold text-[#2b1810]">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a3623] leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {offer.terms && (
                  <p className="text-[11px] text-[#78350f] italic border-t border-[#f5efe6] pt-3">
                    * {offer.terms}
                  </p>
                )}
              </div>

              {/* Bottom Coupon & CTA */}
              <div className="mt-6 pt-4 border-t border-[#ede4d8] flex items-center justify-between gap-3">
                {offer.code ? (
                  <button
                    onClick={() => copyCoupon(offer.code!)}
                    className="flex-1 bg-[#faf7f2] hover:bg-[#ede4d8] border border-dashed border-[#c67d3e] text-[#2b1810] py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                    title="Click to copy promo code"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#c67d3e]" />
                        <span>CODE: {offer.code}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-[#78350f]">
                    {offer.validUntil}
                  </span>
                )}

                <button
                  onClick={onOpenOrderModal}
                  className="bg-[#2b1810] hover:bg-[#c67d3e] text-white p-2.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                  title="Claim Offer & Order"
                >
                  <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Big ORDER NOW CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center space-x-3 bg-[#2b1810] hover:bg-[#c67d3e] text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#e6ca65]" />
            <span>ORDER NOW & APPLY OFFERS</span>
          </button>
        </div>

      </div>
    </section>
  );
};
