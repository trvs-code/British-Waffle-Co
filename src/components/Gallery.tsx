import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex === 0 ? filteredItems.length - 1 : selectedItemIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>Visual Dessert Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810]">
            Snapshots of Sweetness
          </h2>

          <p className="text-sm sm:text-base text-[#5a3623]">
            A peek at our fresh waffle bakes, overloaded chocolate creations, and vibrant café moments.
          </p>
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex items-center justify-center space-x-2 mb-10 overflow-x-auto pb-2">
          {['all', 'bubble', 'waffles', 'shakes', 'hangout'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#2b1810] text-white shadow-xs'
                  : 'bg-white border border-[#ede4d8] text-[#5a3623] hover:bg-[#f5efe6]'
              }`}
            >
              {cat === 'all' ? 'All Snaps' : cat === 'hangout' ? 'Café Vibe' : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => {
            // Give the first item or specific items extra visual weight
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl group bg-[#ede4d8] cursor-pointer transition-all duration-300 border border-[#ede4d8] ${
                  isFeatured ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 sm:p-6 text-white">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#e6ca65]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Container */}
          <div 
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedItemIndex].image}
              alt={filteredItems[selectedItemIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#e6ca65] font-semibold">
                {filteredItems[selectedItemIndex].categoryLabel}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {filteredItems[selectedItemIndex].title}
              </h3>
              {filteredItems[selectedItemIndex].description && (
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  {filteredItems[selectedItemIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
