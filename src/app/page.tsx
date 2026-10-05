'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Hero } from '@/components/Hero';
import { ProductsSection } from '@/components/ProductsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CustomersSection } from '@/components/CustomersSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0">
      {/* Sticky Header */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />

      {/* Slide-over Mobile Navigation */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Landing Sections */}
      <main className="flex-1 w-full pt-16">
        <Hero />
        <ProductsSection />
        <ServicesSection />
        <CustomersSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Bar Navigation */}
      <BottomNav />
    </div>
  );
}
