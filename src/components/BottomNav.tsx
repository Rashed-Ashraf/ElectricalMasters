'use client';

import React from 'react';

export const BottomNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-40 pb-safe bg-white/95 backdrop-blur-xl border-t border-[#dce9f2] shadow-[0_-2px_12px_rgba(0,77,109,0.08)]">
      <div className="flex items-center justify-around h-16 px-4">
        {/* Home */}
        <a
          href="#hero"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#0098da] font-title transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="font-title text-[10px] font-bold">Home</span>
        </a>

        {/* Products */}
        <a
          href="#products-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#3e5261] hover:text-[#0098da] transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">bolt</span>
          <span className="font-title text-[10px] font-medium">Products</span>
        </a>

        {/* Floating Action Button: Send Message */}
        <a
          href="#contact-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#0098da] transition-transform active:scale-95 -mt-3"
          aria-label="Send Message"
        >
          <div className="w-12 h-12 rounded-full bg-[#0098da] text-white flex items-center justify-center shadow-lg border-2 border-white">
            <span className="material-symbols-outlined text-[22px]">send</span>
          </div>
        </a>

        {/* Services */}
        <a
          href="#services-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#3e5261] hover:text-[#0098da] transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">build</span>
          <span className="font-title text-[10px] font-medium">Services</span>
        </a>
      </div>
    </nav>
  );
};
