import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Eye, ShoppingBag, Filter } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, MenuCategory } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'bestseller' | 'signature'>('all');

  const categories: { id: MenuCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Delights', count: MENU_ITEMS.length },
    { id: 'waffles', label: 'Belgian & Classic Waffles', count: MENU_ITEMS.filter(i => i.category === 'waffles').length },
    { id: 'bubble', label: 'Bubble Waffles', count: MENU_ITEMS.filter(i => i.category === 'bubble').length },
    { id: 'red-velvet-fruit', label: 'Red Velvet & Fruit', count: MENU_ITEMS.filter(i => i.category === 'red-velvet-fruit').length },
    { id: 'shakes', label: 'Shakes & Beverages', count: MENU_ITEMS.filter(i => i.category === 'shakes').length },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      // Search query filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

      // Secondary filter
      let matchesType = true;
      if (filterType === 'bestseller') matchesType = !!item.isBestSeller;
      if (filterType === 'signature') matchesType = !!item.isSignature;

      return matchesCategory && matchesSearch && matchesType;
    });
  }, [activeCategory, searchQuery, filterType]);

  return (
    <section id="menu" className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>Handcrafted Daily in Malad East</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810]">
            Something Sweet Is Waiting
          </h2>

          <p className="text-sm sm:text-base text-[#5a3623] max-w-xl mx-auto">
            100% pure vegetarian waffles prepared fresh on heavy cast irons, dripping with Belgian chocolate, and paired with thick cold shakes.
          </p>
        </div>

        {/* Search & Secondary Filter Controls */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#78350f] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search waffles, shakes, chocolate..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#dfd4c4] text-xs text-[#2b1810] focus:outline-none focus:ring-2 focus:ring-[#c67d3e] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78350f] hover:text-[#2b1810]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#2b1810] text-white shadow-xs'
                  : 'bg-white border border-[#dfd4c4] text-[#5a3623] hover:bg-[#ede4d8]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterType('bestseller')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center space-x-1 ${
                filterType === 'bestseller'
                  ? 'bg-[#c67d3e] text-white shadow-xs'
                  : 'bg-white border border-[#dfd4c4] text-[#5a3623] hover:bg-[#ede4d8]'
              }`}
            >
              <span>★</span>
              <span>Best Sellers</span>
            </button>
            <button
              onClick={() => setFilterType('signature')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterType === 'signature'
                  ? 'bg-[#78350f] text-white shadow-xs'
                  : 'bg-white border border-[#dfd4c4] text-[#5a3623] hover:bg-[#ede4d8]'
              }`}
            >
              Chef's Signatures
            </button>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-10 border-b border-[#ede4d8]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center space-x-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#2b1810] text-white shadow-md'
                    : 'bg-white text-[#4a2e1b] border border-[#ede4d8] hover:border-[#c67d3e] hover:bg-[#f5efe6]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[#c67d3e] text-white' : 'bg-[#ede4d8] text-[#78350f]'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#ede4d8] max-w-md mx-auto p-8 space-y-3">
            <p className="text-lg font-serif font-bold text-[#2b1810]">No sweet matches found</p>
            <p className="text-xs text-[#5a3623]">Try adjusting your search query or switching category tabs.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterType('all');
              }}
              className="mt-2 bg-[#2b1810] text-white text-xs px-4 py-2 rounded-xl font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-[#ede4d8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Zoom Effect */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#ede4d8] cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity"></div>

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {/* Pure Veg Badge */}
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-white/95 text-emerald-800 text-[10px] font-bold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>PURE VEG</span>
                    </span>

                    {item.isBestSeller && (
                      <span className="px-2 py-0.5 rounded-full bg-[#c67d3e] text-white text-[10px] font-bold shadow-xs">
                        BESTSELLER
                      </span>
                    )}

                    {item.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <span className="bg-white text-[#2b1810] text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#c67d3e]" />
                      <span>Customize & Details</span>
                    </span>
                  </div>

                  {/* Category Pill Tag on Image Bottom */}
                  <div className="absolute bottom-2.5 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-200">
                    {item.categoryName}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 
                        onClick={() => onSelectItem(item)}
                        className="font-serif font-bold text-base text-[#2b1810] group-hover:text-[#a35d25] transition-colors leading-snug cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="text-base font-bold text-[#2b1810] shrink-0 font-serif">
                          ₹{item.price}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#5a3623] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 border-t border-[#f5efe6] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs font-semibold text-[#78350f] hover:text-[#2b1810] py-1.5 px-2.5 rounded-lg hover:bg-[#ede4d8] transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-[#c67d3e]" />
                      <span>Quick View</span>
                    </button>

                    <button
                      onClick={() => onSelectItem(item)}
                      className="bg-[#2b1810] hover:bg-[#c67d3e] text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center space-x-1.5 active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-[#e6ca65]" />
                      <span>Add / Order</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Full Menu & Ordering Helper Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#2b1810] text-[#f5efe6] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#4a2e1b]">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Craving something custom or placing a bulk order?
            </h3>
            <p className="text-xs sm:text-sm text-[#dfd4c4]">
              We customize waffle gift boxes, birthday platters, and party shakes for Malad and suburban Mumbai.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenOrderModal}
              className="bg-[#c67d3e] hover:bg-[#a35d25] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center space-x-2 shadow-md transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#e6ca65]" />
              <span>ORDER ONLINE NOW</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
