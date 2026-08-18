import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ShoppingBag, ExternalLink, ShieldCheck } from 'lucide-react';

interface LocationContactProps {
  onOpenOrderModal: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenOrderModal }) => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const openMinutes = 14 * 60; // 2:00 PM
    const closeMinutes = 23 * 60 + 30; // 11:30 PM
    setIsOpenNow(totalMinutes >= openMinutes && totalMinutes <= closeMinutes);
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=British+Waffle+Co+Shop+6+Vastu+Tower+Film+City+Road+Opposite+Oberoi+Mall+Malad+East+Mumbai+400097";

  return (
    <section id="location" className="py-20 bg-[#f5efe6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ede4d8] text-[#78350f] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#c67d3e]" />
            <span>Malad East Destination</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2b1810]">
            Visit British Waffle Co.
          </h2>

          <p className="text-sm sm:text-base text-[#5a3623]">
            Located conveniently opposite Oberoi Mall on Film City Road. Drop in for fresh hot waffles or grab a quick takeaway!
          </p>
        </div>

        {/* Two-Column Grid: Contact Cards & Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Timing */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Pill Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#ede4d8] shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className={`w-3.5 h-3.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2b1810]">
                    {isOpenNow ? 'Currently Open' : 'Opens at 2:00 PM'}
                  </h3>
                  <p className="text-xs text-[#5a3623]">
                    Daily 02:00 PM – 11:30 PM
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                100% Pure Veg
              </span>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#ede4d8] shadow-sm space-y-3">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] flex items-center justify-center text-[#c67d3e] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2b1810] mb-1">
                    Outlet Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a2e1b] leading-relaxed">
                    Shop No. 6, Vastu Tower,<br />
                    General Arun Kumar Vaidya Marg, Film City Road,<br />
                    <strong>Opposite Oberoi Mall</strong>,<br />
                    Malad East, Mumbai – 400097
                  </p>
                </div>
              </div>
            </div>

            {/* Timings & Contact Info */}
            <div className="bg-white p-6 rounded-3xl border border-[#ede4d8] shadow-sm space-y-4">
              
              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] flex items-center justify-center text-[#c67d3e] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350f]">
                    Operating Hours
                  </h4>
                  <p className="text-sm font-semibold text-[#2b1810]">
                    Monday – Sunday: 02:00 PM – 11:30 PM
                  </p>
                  <p className="text-xs text-[#5a3623]">
                    Late night dessert takeout available
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5 border-t border-[#f5efe6] pt-3">
                <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] flex items-center justify-center text-[#c67d3e] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350f]">
                    Direct Phone / WhatsApp
                  </h4>
                  <a 
                    href="tel:+917900031156" 
                    className="text-sm font-bold text-[#2b1810] hover:text-[#c67d3e] transition-colors"
                  >
                    +91 79000 31156
                  </a>
                  <p className="text-xs text-[#5a3623]">
                    Call for instant table pickup or bulk orders
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 border-t border-[#f5efe6] pt-3">
                <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] flex items-center justify-center text-[#c67d3e] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#78350f]">
                    Official Email
                  </h4>
                  <a 
                    href="mailto:british.malad@gmail.com" 
                    className="text-sm font-medium text-[#2b1810] hover:text-[#c67d3e] transition-colors"
                  >
                    british.malad@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b1810] hover:bg-[#c67d3e] text-white p-3 rounded-2xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-[#e6ca65]" />
                <span>DIRECTIONS</span>
              </a>

              <a
                href="tel:+917900031156"
                className="border-2 border-[#2b1810] text-[#2b1810] hover:bg-[#2b1810] hover:text-white p-3 rounded-2xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="bg-[#c67d3e] hover:bg-[#a35d25] text-white p-3 rounded-2xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition-colors cursor-pointer text-center"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#e6ca65]" />
                <span>ORDER ONLINE</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Frame & Landmark Guide */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="bg-white p-4 rounded-3xl border border-[#ede4d8] shadow-sm overflow-hidden">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#ede4d8]">
                {/* Embedded Google Map */}
                <iframe
                  title="British Waffle Co Location Malad East Mumbai"
                  src="https://maps.google.com/maps?q=British%20Waffle%20Co%20Shop%20No%206%20Vastu%20Tower%20Film%20City%20Road%20Opposite%20Oberoi%20Mall%20Malad%20East%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Map Label Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#ede4d8] shadow-md flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#c67d3e]"></span>
                  <span className="text-xs font-bold text-[#2b1810]">Opp. Oberoi Mall, Malad East</span>
                </div>
              </div>

              {/* Landmark Guidance Footer */}
              <div className="mt-4 p-3 bg-[#faf7f2] rounded-xl text-xs text-[#5a3623] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-[#2b1810]">Landmark:</strong> Just 2 minutes walking distance from Oberoi Mall main exit, next to Vastu Tower.
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#a35d25] hover:underline flex items-center space-x-1 shrink-0"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
