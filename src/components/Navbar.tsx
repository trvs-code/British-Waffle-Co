import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Clock, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check operating hours: 02:00 PM (14:00) to 11:30 PM (23:30)
    const checkHours = () => {
      const now = new Date();
      // Indian Standard Time offset if needed, or local
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      const openMinutes = 14 * 60; // 14:00 = 2:00 PM
      const closeMinutes = 23 * 60 + 30; // 23:30 = 11:30 PM
      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes <= closeMinutes);
    };
    checkHours();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top micro-bar for quick details */}
      <div id="top-announcement-bar" className="bg-[#211109] text-[#f5efe6] text-xs py-1.5 px-4 hidden md:block border-b border-[#3e2216]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-[#dfd4c4]">
              <MapPin className="w-3.5 h-3.5 text-[#c67d3e]" />
              <span>Opposite Oberoi Mall, Malad East, Mumbai</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[#dfd4c4]">
              <Clock className="w-3.5 h-3.5 text-[#c67d3e]" />
              <span>Open Daily: 02:00 PM – 11:30 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              {/* Pure Veg mark */}
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-emerald-600 rounded-sm bg-emerald-950/40 p-0.5" title="100% Pure Vegetarian">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium text-[11px] tracking-wide uppercase">100% Pure Vegetarian</span>
            </div>
            <span className="text-[#5a3623]">|</span>
            <a 
              href="tel:+917900031156" 
              className="flex items-center space-x-1 text-[#e6ca65] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+91 79000 31156</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf7f2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#ede4d8]'
            : 'bg-[#faf7f2]/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#c67d3e] rounded-md px-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b1810] to-[#150a05] text-[#f5efe6] flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-md border border-[#c67d3e]/30 group-hover:border-[#c67d3e] transition-colors">
              BW
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2b1810] group-hover:text-[#a35d25] transition-colors">
                  BRITISH WAFFLE CO.
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 border border-emerald-600 rounded-xs p-0.5" title="Pure Veg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-[#78350f] uppercase font-semibold">
                Pure Veg • Waffles & Shakes
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="text-sm font-medium text-[#4a2e1b] hover:text-[#c67d3e] transition-colors relative py-1 hover:font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Live open status pill */}
            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#ede4d8]/70 border border-[#dfd4c4] text-xs font-medium text-[#4a2e1b]">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span>{isOpenNow ? 'Open Now' : 'Opens 2:00 PM'}</span>
            </div>

            {/* Primary Order CTA */}
            <button
              onClick={onOpenOrderModal}
              id="navbar-order-btn"
              className="bg-[#2b1810] hover:bg-[#c67d3e] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-2 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
              <span className="tracking-wide">ORDER NOW</span>
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-[#2b1810] hover:bg-[#ede4d8] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-[#faf7f2] border-b border-[#ede4d8] px-4 pt-3 pb-6 mt-3 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between py-2 border-b border-[#ede4d8] mb-3">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-emerald-600 rounded-sm p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-800 uppercase">100% Pure Vegetarian</span>
              </div>
              <span className="text-xs text-[#78350f] font-medium">Malad East, Mumbai</span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-[#2b1810] hover:bg-[#ede4d8] text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#ede4d8] flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full bg-[#2b1810] text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 shadow"
              >
                <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
                <span>ORDER NOW (Swiggy / WhatsApp / Zomato)</span>
              </button>
              
              <a
                href="tel:+917900031156"
                className="w-full text-center py-2.5 border border-[#dfd4c4] rounded-xl text-xs font-semibold text-[#4a2e1b] flex items-center justify-center space-x-2 hover:bg-[#ede4d8]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c67d3e]" />
                <span>Call Outlet: +91 79000 31156</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
