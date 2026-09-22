'use client';

import React from 'react';

interface HeaderProps {
  onOpenDrawer?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,40,61,0.08)] border-b border-slate-200/80">
      <div className="h-16 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 min-w-0">
          <a href="#hero" className="flex items-center gap-2.5 min-w-0 group">
            <div className="w-10 h-10 rounded-lg bg-[#004d6d]/5 border border-[#0098da]/20 p-1 flex-shrink-0 shadow-sm flex items-center justify-center group-hover:border-[#0098da] transition-colors">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
                alt="Electrical Masters Switchgear Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="font-title text-[#002b40] truncate uppercase tracking-wider text-[12px] sm:text-[14px] font-extrabold group-hover:text-[#0098da] transition-colors">
                Electrical Masters
              </span>
              <span className="font-technical text-[#0076a8] text-[9px] sm:text-[10px] uppercase truncate font-bold tracking-wide">
                Switchgear Pvt. Ltd.
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-title text-[13px] font-bold text-[#003850]">
          <a href="#hero" className="hover:text-[#0098da] transition-colors py-1 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098da] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#products-section" className="hover:text-[#0098da] transition-colors py-1 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098da] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#services-section" className="hover:text-[#0098da] transition-colors py-1 relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098da] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contact-section" className="hover:text-[#0098da] transition-colors py-1 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0098da] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right Actions: Phone + Contact Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a
            aria-label="Call Electrical Masters Switchgear"
            href="tel:+923004466489"
            className="w-10 h-10 sm:w-11 sm:h-11 min-w-[40px] min-h-[40px] flex items-center justify-center text-[#004d6d] hover:text-white transition-colors rounded-full bg-[#e1f0f8] hover:bg-[#0098da] shadow-sm"
            title="Call +92 300 4466489"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">phone_in_talk</span>
          </a>
          <a
            href="#contact-section"
            className="h-9 sm:h-10 px-4 sm:px-5 inline-flex items-center justify-center bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white font-title text-[12px] sm:text-[13px] font-bold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

