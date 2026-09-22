'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#002233] text-white px-4 sm:px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Grid: Logo + Quick Links + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & Overview (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white p-1 flex-shrink-0 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD80lxeopYP8nyNXBExjvtJVNdzQFJqhfSAEDnZMbUMysdYK2eJmOzpML-ELoe4ffVEkyet8duA4JdVWKpg_znOkam2tSMd6n8pvYqFAUbDD_kbs2gDOfeyrIj8Fxs_QUcSsL-oAzqtda00I9NGzE_jpJzZbYdeSbNu2yLYKTNCaoeNd4V3yn9ETAZ9uduru7pK7w59KXIBBvnMMFmXMEQ_2Vccv5PbTd5t1Gcs9_F3in8CdvYNIvxqY6VemOuW0zdOGg"
                  alt="Electrical Masters Switchgear Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-title text-white text-[14px] font-bold uppercase tracking-wider">
                  Electrical Masters
                </span>
                <span className="font-technical text-[#c3e8ff] text-[10px] uppercase font-medium">
                  Switchgear Private Limited
                </span>
              </div>
            </div>
            <p className="font-body text-[#d5eefc] text-[13px] leading-relaxed max-w-md">
              Leading provider of industrial electrical switchgear and services with over 20 years of technical excellence, safety compliance, and power distribution engineering.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0098da] transition-colors text-[14px] font-bold"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0098da] transition-colors text-[14px] font-bold"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0098da] transition-colors text-[14px] font-bold"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0098da] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-3 font-title">
            <span className="text-white uppercase text-[12px] tracking-wider font-bold text-[#98cded]">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2 text-[13px] text-[#c3e8ff]">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#products-section" className="hover:text-white transition-colors">Products Catalog</a>
              <a href="#services-section" className="hover:text-white transition-colors">Electrical Services</a>
              <a href="#customers-section" className="hover:text-white transition-colors">Valued Clients</a>
              <a href="#contact-section" className="hover:text-white transition-colors">Contact Engineering</a>
            </nav>
          </div>

          {/* Contact Details (4 Cols) with NEW ADDRESS */}
          <div className="md:col-span-4 flex flex-col gap-3 font-title">
            <span className="text-white uppercase text-[12px] tracking-wider font-bold text-[#98cded]">
              Contact Details
            </span>
            <div className="flex flex-col gap-2 text-[13px] text-[#c3e8ff] font-body">
              <span className="text-[#e1f0f8] leading-relaxed font-medium">
                Nawab Mashkoor Town Kahna Kacha Road Kahna Nou Lahore- Pakistan
              </span>
              <a href="tel:+923004466489" className="hover:text-white transition-colors font-medium">
                +92 300 4466489
              </a>
              <a href="tel:+923334466489" className="hover:text-white transition-colors font-medium">
                +92 333 4466489
              </a>
              <a
                href="mailto:shahid.iqbal@emswitchgear.com"
                className="hover:text-white transition-colors font-medium underline underline-offset-4 text-[#0098da] break-all"
              >
                shahid.iqbal@emswitchgear.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-technical text-[#98cded] text-[12px] text-center sm:text-left">
            © 2004–2026 Electrical Masters Switchgear Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-[#c3e8ff] font-body">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
