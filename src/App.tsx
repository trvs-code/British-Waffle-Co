import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { MenuSection } from './components/MenuSection';
import { FoodShowcase } from './components/FoodShowcase';
import { SpecialOffers } from './components/SpecialOffers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { OrderModal } from './components/OrderModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { MenuItem, CustomOrderItem } from './types';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [pendingCustomOrder, setPendingCustomOrder] = useState<CustomOrderItem | null>(null);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseItemModal = () => {
    setSelectedItem(null);
  };

  const handleOrderDirectFromItem = (
    item: MenuItem,
    base: string,
    toppings: string[],
    quantity: number,
    instructions: string
  ) => {
    setPendingCustomOrder({
      item,
      base,
      extraToppings: toppings,
      quantity,
      specialInstructions: instructions
    });
    setSelectedItem(null);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#2b1810] selection:bg-[#c67d3e] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />
        <About />
        <WhyUs />
        <MenuSection 
          onSelectItem={handleSelectItem}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />
        <FoodShowcase />
        <SpecialOffers onOpenOrderModal={() => setIsOrderModalOpen(true)} />
        <Gallery />
        <Testimonials />
        <LocationContact onOpenOrderModal={() => setIsOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Item Customization & Detail Modal */}
      <ItemModal
        item={selectedItem}
        onClose={handleCloseItemModal}
        onOrderDirect={handleOrderDirectFromItem}
      />

      {/* Dedicated Ordering Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        pendingCustomOrder={pendingCustomOrder}
        onClearPendingOrder={() => setPendingCustomOrder(null)}
      />
    </div>
  );
}
