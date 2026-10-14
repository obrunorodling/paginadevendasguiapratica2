import React, { useEffect } from 'react';
import { MockupProvider } from './context/MockupContext';
import { Hero } from './components/Hero';
import { WhatIsSection } from './components/WhatIsSection';
import { IncludesSection } from './components/IncludesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { BonusesSection } from './components/BonusesSection';
import { LostReadingSection } from './components/LostReadingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { WarrantySection } from './components/WarrantySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MockupUploaderModal } from './components/MockupUploaderModal';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function SalesPageContent() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href*="pay.kiwify.com"]');
      if (target && typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Guía Práctica para Comprender la Biblia - Método MAPA 5D',
          content_type: 'product',
          value: 6.90,
          currency: 'USD',
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#100D0B] text-[#2C2926] flex flex-col font-sans selection:bg-[#18A957]/30 selection:text-emerald-900">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What is this Guide */}
        <WhatIsSection />

        {/* 3. Included Toolkit */}
        <IncludesSection />

        {/* 4. Benefits */}
        <BenefitsSection />

        {/* 5. Who Is It For */}
        <WhoIsItForSection />

        {/* 6. Exclusive Bonuses */}
        <BonusesSection />

        {/* 7. Key Philosophy / Reflection */}
        <LostReadingSection />

        {/* 8. Real Testimonials */}
        <TestimonialsSection />

        {/* 9. Offer & Pricing Box */}
        <PricingOfferSection />

        {/* 10. 7-Day Unconditional Warranty */}
        <WarrantySection />

        {/* 11. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mockup Uploader Modal */}
      <MockupUploaderModal />
    </div>
  );
}

export default function App() {
  return (
    <MockupProvider>
      <SalesPageContent />
    </MockupProvider>
  );
}
