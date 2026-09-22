'use client';

import React from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div
        className={`relative z-10 w-4/5 max-w-xs h-full bg-[#004d6d] text-white flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(0,40,61,0.5)] pt-safe pb-safe transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 flex flex-col gap-6">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-white p-0.5 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0IDbXVWChRnpQQ5UmgA79bxCObRqnAaIKtYh7TNd5hZgWmZQu2ZT3LZ-gp6HZnxcMxiV5fny12legDIo_LsABc-VVto6mWD6jVlPCOGY4sUIt2C3vEqlvkIDLb-5GiqQeVwf2qVKKcpKFrJxeURQleacBLDCGH6BljXR53C0xVhhMtonPaWGW2LNE2V3tCv3kWH_PPIe_jaXZub1jMcf9LaTjHR_c2yAkGm705IbMLGn8kiaIlsBzl_-CW4g5qnxebg"
                  alt="EM Switchgear Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-title text-white text-[12px] font-bold">ELECTRICAL MASTERS</span>
                <span className="text-[9px] text-[#c3e8ff] uppercase tracking-wider">Switchgear Pvt. Ltd.</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close Navigation Menu"
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-[#c3e8ff] hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 font-title">
            <a
              href="#hero"
              onClick={onClose}
              className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-white bg-white/10 font-semibold text-[14px]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#0098da]">home</span>
              Home
            </a>
            <a
              href="#products-section"
              onClick={onClose}
              className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-[#c3e8ff] hover:text-white hover:bg-white/5 transition-colors font-medium text-[14px]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#0098da]">bolt</span>
              Our Products
            </a>
            <a
              href="#services-section"
              onClick={onClose}
              className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-[#c3e8ff] hover:text-white hover:bg-white/5 transition-colors font-medium text-[14px]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#0098da]">build</span>
              Our Services
            </a>
            <a
              href="#contact-section"
              onClick={onClose}
              className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-[#c3e8ff] hover:text-white hover:bg-white/5 transition-colors font-medium text-[14px]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#0098da]">contact_phone</span>
              Contact Us
            </a>
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-5 flex flex-col gap-3 bg-[#003850]">
          <a
            href="#contact-section"
            onClick={onClose}
            className="w-full h-11 flex items-center justify-center gap-2 bg-[#0098da] text-white font-title text-[14px] font-bold rounded-lg shadow-md hover:bg-[#0084bd] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            Request Quote
          </a>
          <p className="font-technical text-[#98cded] text-center text-[10px] uppercase tracking-widest">
            Est. 2004 • Lahore, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};
