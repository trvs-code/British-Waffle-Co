import React from 'react';
import { Flame, Sparkles, Coffee, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f5efe6] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Split Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Large Image */}
              <div className="col-span-8 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-[#ede4d8]">
                  <img
                    src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
                    alt="British Waffle Co. Waffles and Shakes Preparation"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating pill badge */}
                <div className="absolute -bottom-4 left-4 bg-[#2b1810] text-[#f5efe6] px-4 py-2 rounded-xl shadow-lg border border-[#c67d3e]/30 flex items-center space-x-2 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Eggless Pure Veg</span>
                </div>
              </div>

              {/* Secondary Supporting Image & Quote Card */}
              <div className="col-span-4 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-square bg-[#ede4d8]">
                  <img
                    src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80"
                    alt="Nutella Milkshake"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="bg-[#2b1810] text-[#f5efe6] p-4 rounded-2xl shadow-md border border-[#4a2e1b] flex flex-col justify-center">
                  <Users className="w-5 h-5 text-[#e6ca65] mb-2" />
                  <p className="text-xs font-serif font-semibold italic text-[#e6ca65] leading-snug">
                    “Vibe with your tribe!!”
                  </p>
                  <p className="text-[10px] text-[#dfd4c4] mt-1">Malad East Hangout</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Narrative Copy & 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#a35d25] uppercase">
                <HeartHandshake className="w-4 h-4" />
                <span>Our Heritage & Passion</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810] leading-tight">
                A Little More Than Just Waffles
              </h2>
            </div>

            <div className="space-y-4 text-[#4a2e1b] text-base leading-relaxed">
              <p>
                Born out of an uncompromising love for hot waffles, chilled shakes, and warm conversations, 
                <strong className="text-[#2b1810] font-semibold"> British Waffle Co.</strong> is Mumbai’s dedicated 100% pure vegetarian dessert destination located in the heart of Malad East.
              </p>
              <p>
                Whether you’re catching up with friends after an evening at Oberoi Mall, celebrating a sweet milestone, or grabbing a late-night dessert fix, our cozy dessert sanctuary invites you to <em>“vibe with your tribe”</em> over freshly pressed Belgian grids and handcrafted cold shakes.
              </p>
            </div>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Card 1: Pure Veg */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#ede4d8] hover:border-[#c67d3e]/50 hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="w-4 h-4 border-2 border-emerald-600 rounded-sm flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[#2b1810] text-base mb-1">Pure Veg</h3>
                <p className="text-xs text-[#5a3623] leading-normal">
                  100% vegetarian dessert experience with premium eggless batters.
                </p>
              </div>

              {/* Card 2: Hot Waffles */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#ede4d8] hover:border-[#c67d3e]/50 hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5 text-[#c67d3e]" />
                </div>
                <h3 className="font-serif font-bold text-[#2b1810] text-base mb-1">Hot Waffles</h3>
                <p className="text-xs text-[#5a3623] leading-normal">
                  Freshly prepared waffles with delicious toppings & Belgian chocolates.
                </p>
              </div>

              {/* Card 3: Cold Shakes */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#ede4d8] hover:border-[#c67d3e]/50 hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Coffee className="w-5 h-5 text-[#a35d25]" />
                </div>
                <h3 className="font-serif font-bold text-[#2b1810] text-base mb-1">Cold Shakes</h3>
                <p className="text-xs text-[#5a3623] leading-normal">
                  Creamy and indulgent shakes & cold brews to pair with your waffles.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
