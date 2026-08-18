import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>Community Love</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810]">
            Loved by Mumbai Foodies
          </h2>

          <p className="text-sm sm:text-base text-[#5a3623]">
            Here’s what our guests in Malad East and across suburban Mumbai say about our pure veg waffles and thick shakes.
          </p>
        </div>

        {/* Carousel Container with Hover Pause */}
        <div 
          className="max-w-4xl mx-auto relative bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-[#ede4d8]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="w-12 h-12 text-[#c67d3e]/20 absolute top-8 right-8 pointer-events-none" />

          {/* Active Review Content */}
          <div className="space-y-6">
            
            {/* Star Rating */}
            <div className="flex items-center space-x-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < REVIEWS[currentIndex].rating
                      ? 'text-amber-500 fill-amber-500'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs font-bold text-[#78350f] ml-2">
                5.0 / 5.0 Rating
              </span>
            </div>

            {/* Highlight Title */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2b1810]">
              “{REVIEWS[currentIndex].highlight}”
            </h3>

            {/* Review Body */}
            <p className="text-sm sm:text-base text-[#4a2e1b] leading-relaxed italic">
              "{REVIEWS[currentIndex].review}"
            </p>

            {/* Reviewer Details & Source Badge */}
            <div className="pt-4 border-t border-[#f5efe6] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#2b1810] text-[#f5efe6] font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                  {REVIEWS[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2b1810]">
                    {REVIEWS[currentIndex].name}
                  </h4>
                  <p className="text-[11px] text-[#78350f]">
                    Verified Guest • {REVIEWS[currentIndex].date}
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-[#5a3623] bg-[#f5efe6] px-3 py-1 rounded-full border border-[#ede4d8]">
                Review via {REVIEWS[currentIndex].source}
              </span>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#ede4d8]">
            <div className="flex items-center space-x-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#c67d3e]' : 'w-2 bg-[#dfd4c4]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#dfd4c4] hover:bg-[#ede4d8] text-[#2b1810] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#dfd4c4] hover:bg-[#ede4d8] text-[#2b1810] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
