'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Zap, Wrench, Send } from 'lucide-react';

export const BottomNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-40 pb-safe bg-white/95 backdrop-blur-xl border-t border-[#dce9f2] shadow-[0_-2px_12px_rgba(0,77,109,0.08)]">
      <div className="flex items-center justify-around h-16 px-4">
        {/* Home */}
        <Link
          href="/#hero"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#0098da] font-title transition-colors"
        >
          <Home className="w-5 h-5 text-[#0098da]" />
          <span className="font-title text-[10px] font-bold">Home</span>
        </Link>

        {/* Products */}
        <Link
          href="/#products-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#3e5261] hover:text-[#0098da] transition-colors"
        >
          <Zap className="w-5 h-5" />
          <span className="font-title text-[10px] font-medium">Products</span>
        </Link>

        {/* Floating Action Button: Send Message */}
        <Link
          href="/#contact-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#0098da] transition-transform active:scale-95 -mt-3"
          aria-label="Send Message"
        >
          <div className="w-12 h-12 rounded-full bg-[#0098da] text-white flex items-center justify-center shadow-lg border-2 border-white">
            <Send className="w-5 h-5 text-white" />
          </div>
        </Link>

        {/* Services */}
        <Link
          href="/#services-section"
          className="min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-0.5 text-[#3e5261] hover:text-[#0098da] transition-colors"
        >
          <Wrench className="w-5 h-5" />
          <span className="font-title text-[10px] font-medium">Services</span>
        </Link>
      </div>
    </nav>
  );
};

