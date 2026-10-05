'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, SlidersHorizontal, Info, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/products';

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'lvs', label: 'Low Voltage Switchgear' },
  { id: 'pfi', label: 'Power Factor Improvement' },
  { id: 'mcc', label: 'Motor Control Centre' },
  { id: 'plc', label: 'PLC System Panels' },
  { id: 'amf', label: 'AMF / ATS Panels' },
  { id: 'db', label: 'Lighting & Power DBs' },
  { id: 'cables', label: 'Cable Systems' },
];

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#f2f8fc]" id="products-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="font-title text-[#0098da] uppercase tracking-widest font-bold text-[12px]">
            OUR PRODUCTS CATALOG
          </span>
          <h2 className="font-title text-[#00283d] text-[24px] sm:text-[32px] font-bold">
            High-Quality Electrical Switchgear
          </h2>
          <div className="w-16 h-1 bg-[#0098da] rounded-full my-1.5" />
          <p className="font-body text-[#3e5261] text-[15px] leading-relaxed max-w-2xl">
            We design and manufacture a comprehensive range of low voltage switchgear, PFI panels, motor control centers, PLC automation, and cable management systems. Click any product to explore full specifications & features.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-title text-[11px] sm:text-[12px] whitespace-nowrap transition-all shadow-sm flex-shrink-0 ${
                  isActive
                    ? 'bg-[#0098da] text-white font-bold'
                    : 'bg-[#e1f2fb] text-[#004d6d] font-semibold hover:bg-[#d0ebf9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white p-5 rounded-xl shadow-[0_2px_12px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col justify-between gap-4 hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col gap-3">
                <Link href={`/products/${prod.id}`} className="relative w-full h-48 rounded-lg overflow-hidden bg-[#003d57] block">
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#004d6d]/90 text-white font-technical text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider backdrop-blur-xs">
                    {prod.badge}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001d2b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-[12px] font-title font-bold flex items-center gap-1">
                      <Info className="w-4 h-4 text-[#0098da]" /> Click to view full features & specs
                    </span>
                  </div>
                </Link>
                
                <div className="flex flex-col gap-1.5">
                  <Link href={`/products/${prod.id}`}>
                    <h3 className="font-title text-[#00283d] text-[17px] font-bold leading-snug hover:text-[#0098da] transition-colors">
                      {prod.title}
                    </h3>
                  </Link>
                  <p className="font-body text-[#3e5261] text-[13px] leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-3 border-t border-[#edf4f8]">
                <div className="flex items-center justify-between">
                  <span className="font-technical text-[11px] text-[#0098da] font-semibold truncate max-w-[200px]">
                    {prod.spec}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Link
                    href={`/products/${prod.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#e1f2fb] hover:bg-[#0098da] text-[#004d6d] hover:text-white font-title text-[12px] font-bold rounded-lg transition-all"
                  >
                    <span>View Features</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="#contact-section"
                    className="inline-flex items-center justify-center px-3 py-2 border border-[#e1f0f8] hover:border-[#0098da] text-[#3e5261] hover:text-[#0098da] font-title text-[12px] font-semibold rounded-lg transition-all"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <div className="bg-[#d6e8f4] p-6 rounded-xl border border-[#a8d2ed] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#0098da]/15 text-[#0098da] flex items-center justify-center flex-shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-[#0098da]" />
            </div>
            <p className="font-title text-[#00283d] text-[15px] font-bold">
              Need a custom switchgear solution for your specific requirements?
            </p>
          </div>
          <a
            href="#contact-section"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-lg shadow-sm active:scale-95 transition-all whitespace-nowrap"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
