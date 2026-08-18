import React from 'react';
import { ShoppingBag, Sparkles, ChevronDown, UtensilsCrossed, Star, Award, Heart } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[86vh] flex items-center bg-[#faf7f2] overflow-hidden pt-4 pb-16">
      {/* Subtle dessert-themed background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ede4d8] rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f5efe6] rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Brand CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Brand Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2b1810] text-[#f5efe6] text-xs font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#e6ca65]" />
                <span>BRITISH WAFFLE CO.</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>100% Pure Vegetarian</span>
              </div>

              <div className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#ede4d8] text-[#4a2e1b] text-xs font-medium">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>4.4★ (1,500+ Mumbai Foodies)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#2b1810] tracking-tight leading-[1.12]">
                Hot Waffles. <br className="hidden sm:inline" />
                <span className="text-[#a35d25] italic font-normal">Cold Shakes.</span> <br />
                Sweet Memories.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#5a3623] max-w-xl font-normal leading-relaxed">
                Pure vegetarian waffles, indulgent desserts and refreshing shakes made to satisfy every sweet craving.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenOrderModal}
                id="hero-order-cta"
                className="bg-[#2b1810] hover:bg-[#c67d3e] text-white px-7 py-4 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-3 group active:scale-98 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#e6ca65] group-hover:rotate-12 transition-transform" />
                <span className="tracking-wider">ORDER NOW</span>
              </button>

              <a
                href="#menu"
                id="hero-explore-menu-cta"
                className="border-2 border-[#2b1810] text-[#2b1810] hover:bg-[#2b1810] hover:text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center space-x-2 text-center"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>EXPLORE MENU</span>
              </a>
            </div>

            {/* Quick Micro Value Props */}
            <div className="pt-4 border-t border-[#ede4d8] grid grid-cols-3 gap-4 text-center sm:text-left">
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#2b1810]">100%</div>
                <div className="text-xs text-[#78350f] font-medium">Pure Veg Kitchen</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#2b1810]">25+</div>
                <div className="text-xs text-[#78350f] font-medium">Waffles & Shakes</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#2b1810]">Fresh</div>
                <div className="text-xs text-[#78350f] font-medium">Cast Iron Baked</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Food Photo with Luxury Border Framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ede4d8] aspect-[4/5] bg-[#ede4d8] group">
                <img
                  src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85"
                  alt="Belgian Bubble Waffle with Chocolate Ice Cream and Drizzle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c06]/80 via-transparent to-black/10 pointer-events-none"></div>

                {/* Floating caption tag on image */}
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#e6ca65] font-semibold">Chef's Signature</span>
                      <h2 className="font-serif text-lg font-bold leading-tight">Chocolate Bubble Burst</h2>
                    </div>
                    <span className="text-base font-bold bg-[#c67d3e] text-white px-2.5 py-1 rounded-lg">
                      ₹220
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#ede4d8] flex items-center space-x-3 hidden sm:flex animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-[#2b1810]">Mumbai's Pure Veg Haven</p>
                </div>
              </div>

              {/* Floating Vibe with Tribe Tag */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#2b1810] text-[#f5efe6] px-4 py-2.5 rounded-2xl shadow-xl border border-[#c67d3e]/40 flex items-center space-x-2 hidden sm:flex">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span className="text-xs font-semibold tracking-wide">“Vibe with your tribe!!”</span>
              </div>

            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center space-y-1 text-xs text-[#78350f] hover:text-[#2b1810] transition-colors group"
          >
            <span className="font-medium tracking-wider uppercase text-[10px]">Discover Our Story</span>
            <ChevronDown className="w-4 h-4 text-[#c67d3e] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
