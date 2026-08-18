import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, ShieldCheck, Instagram, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#180d07] text-[#f5efe6] pt-16 pb-12 border-t border-[#3e2216] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#3e2216]">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c67d3e] to-[#78350f] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md">
                BW
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                  BRITISH WAFFLE CO.
                </h3>
                <span className="text-[10px] tracking-widest text-[#e6ca65] uppercase font-semibold">
                  Pure Veg • Waffles & Shakes
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#dfd4c4] leading-relaxed max-w-sm">
              Pure vegetarian waffles, shakes and sweet memories. Freshly ironed crisp Belgian grids, artisanal chocolate ganaches, and refreshing cold shakes crafted to satisfy every craving.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-600/40 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100% Pure Vegetarian Outlet</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#e6ca65]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#dfd4c4]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Our Story & Tribe</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Waffles & Shakes Menu</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors">Special Offers & Deals</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Dessert Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Visit & Timings</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlet Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#e6ca65]">
              Malad East Outlet
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#dfd4c4]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c67d3e] shrink-0 mt-0.5" />
                <span>
                  Shop No. 6, Vastu Tower, General Arun Kumar Vaidya Marg, Film City Road, <strong>Opposite Oberoi Mall</strong>, Malad East, Mumbai – 400097
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#c67d3e] shrink-0" />
                <span>Daily 02:00 PM – 11:30 PM</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c67d3e] shrink-0" />
                <a href="tel:+917900031156" className="hover:text-white transition-colors font-medium">
                  +91 79000 31156
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c67d3e] shrink-0" />
                <a href="mailto:british.malad@gmail.com" className="hover:text-white transition-colors">
                  british.malad@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full bg-[#c67d3e] hover:bg-[#a35d25] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                ORDER NOW (SWIGGY / WHATSAPP / ZOMATO)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3795b]">
          <p>
            © {new Date().getFullYear()} British Waffle Co. All Rights Reserved. Pure vegetarian waffle & dessert outlet.
          </p>

          <div className="flex items-center space-x-4">
            <a 
              href="https://britishwaffleco.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#dfd4c4] transition-colors flex items-center space-x-1"
            >
              <span>Official Reference: britishwaffleco.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-[#2b1810] hover:bg-[#3e2216] text-[#dfd4c4] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
