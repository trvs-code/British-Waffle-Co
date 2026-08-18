import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const FoodShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const showcaseItems = [
    {
      title: 'Molten Belgian Ganache',
      subtitle: 'Warm 54% Dark Chocolate Flow',
      image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=800&q=80',
      tag: 'PURE CHOCOLATE'
    },
    {
      title: 'Crisp Bubble Waffle Cones',
      subtitle: 'Signature Ice Cream & Gems Filling',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
      tag: 'CHEF SIGNATURE'
    },
    {
      title: 'Nutella Almond Thick Shake',
      subtitle: 'Double Cream & Toasted Nuts',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
      tag: 'THICK SHAKES'
    },
    {
      title: 'Red Velvet Cream Cheese',
      subtitle: 'Artisanal Ruby Cocoa Waffle',
      image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
      tag: 'RED VELVET'
    },
    {
      title: 'Lotus Biscoff Speculoos',
      subtitle: 'Caramelized Belgian Cookie Butter',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW CRUNCH'
    },
    {
      title: 'Vibe with Your Tribe',
      subtitle: 'Warm Hangout Spot in Malad East',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      tag: 'CAFÉ VIBE'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="py-20 bg-[#211109] text-[#faf7f2] overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#c67d3e]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#e6ca65] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sensory Dessert Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Crafted For Sweet Cravings
            </h2>
            <p className="text-xs sm:text-sm text-[#dfd4c4] max-w-md">
              A visual glimpse into our pure-vegetarian dessert laboratory where warm chocolate meets freshly ironed waffles.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-[#5a3623] hover:border-[#c67d3e] bg-[#2b1810] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-[#5a3623] hover:border-[#c67d3e] bg-[#2b1810] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Cinematic Scroll Track */}
      <div 
        ref={scrollRef}
        className="flex space-x-5 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-4 cursor-grab active:cursor-grabbing"
      >
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="flex-none w-72 sm:w-80 md:w-96 rounded-3xl overflow-hidden relative aspect-[3/4] group bg-[#2b1810] border border-[#3e2216] shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* Tag Badge Top */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#e6ca65] px-3 py-1 rounded-full border border-white/10">
                {item.tag}
              </span>
            </div>

            {/* Overlay Text Bottom */}
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight group-hover:text-[#e6ca65] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#dfd4c4]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
