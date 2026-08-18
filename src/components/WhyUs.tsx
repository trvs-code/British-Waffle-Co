import React from 'react';
import { Leaf, Sparkles, Layers, Coffee, Award, Heart } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      title: 'Pure Vegetarian',
      subtitle: '100% Eggless Quality',
      description: 'Crafted with premium eggless recipes, rich whole dairy milk, and authentic European chocolates so everyone can indulge freely.',
      icon: (
        <span className="w-6 h-6 border-2 border-emerald-600 rounded-sm flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
        </span>
      ),
      badge: 'Certified Pure Veg',
      accent: 'border-emerald-200'
    },
    {
      title: 'Freshly Prepared',
      subtitle: 'Made-To-Order Crispness',
      description: 'Every single waffle is cast hot upon your order on seasoned irons, delivering that golden crunch on the outside and warm fluff inside.',
      icon: <Sparkles className="w-6 h-6 text-[#c67d3e]" />,
      badge: 'Cast Iron Baked',
      accent: 'border-amber-200'
    },
    {
      title: 'Loaded With Goodness',
      subtitle: 'Generous Artisanal Toppings',
      description: 'Never holding back on luxury: from authentic 54% dark Belgian ganache and real Nutella to wild blueberries and Biscoff crumbs.',
      icon: <Layers className="w-6 h-6 text-[#a35d25]" />,
      badge: 'No Compromise',
      accent: 'border-amber-300'
    },
    {
      title: 'Perfect Hangout',
      subtitle: 'Vibe With Your Tribe',
      description: 'A warm, inviting café vibe opposite Oberoi Mall in Malad East. The ideal sweet haven for evening hangouts and late-night cravings.',
      icon: <Coffee className="w-6 h-6 text-[#78350f]" />,
      badge: 'Malad East Spot',
      accent: 'border-[#dfd4c4]'
    }
  ];

  return (
    <section className="py-20 bg-[#faf7f2] border-t border-b border-[#ede4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>The British Waffle Co. Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2b1810]">
            Why Mumbai Loves British Waffle Co.
          </h2>
          <p className="text-[#5a3623] text-sm sm:text-base">
            From uncompromising pure-vegetarian ingredients to our cozy café ambiance, every detail is crafted for your delight.
          </p>
        </div>

        {/* Four Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white p-7 rounded-3xl border ${pillar.accent} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf7f2] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#78350f] bg-[#f5efe6] px-2.5 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2b1810] mb-1">
                  {pillar.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#a35d25] mb-3">
                  {pillar.subtitle}
                </h4>
                <p className="text-xs text-[#5a3623] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f5efe6] flex items-center justify-between text-[11px] text-[#78350f] font-medium">
                <span>British Waffle Co. Promise</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c67d3e]"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
