'use client';

import React, { useState } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

interface ProductItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  spec: string;
  imageUrl: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'lvs',
    category: 'lvs',
    badge: 'LOW VOLTAGE SWITCHGEAR',
    title: 'Low Voltage Switchgear (LVS)',
    description:
      'Advanced low voltage switchgear solutions for safe and reliable power distribution, designed with high short-circuit capacity and compact footprint.',
    spec: 'Custom Busbar & Breakers',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVlTtyg4GeLo789zTLszXzpKzZc8KWD9aGa07OyJYIFEDE3R7uQlAh4hdVeG6AXgX6EWfu1C6qOFdxv0hZYYu7-5RlAPaETK5GjPEE6p4aR5EaAgJ3SnX9f96WU0ODcCNFb6Rys7dX-TvbapdwKWUeAKYIw1oPEsrrltsDx-iVXxg-ri7Zvs4H2poXBKZ-j_UGRLvhqlsWnDZzmX0O3CEq1P7bl4fbahH3QH0oTxH_wtW96oX8yuRF',
  },
  {
    id: 'pfi',
    category: 'pfi',
    badge: 'POWER FACTOR IMPROVEMENT',
    title: 'Automatic Power Factor Improvement (PFI) Panels',
    description:
      'Energy-efficient PFI panels that automatically adjust power factors to optimize electrical systems and reduce utility bills.',
    spec: 'Microprocessor Relays',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCivHbK7JWSs9dczwxbXKQTpHJGZXixkc_4FzJe3S6qqzhfzJqehPOQBib2a8RQVw2GHPYxvzkj2U7_ApAnlkPWyCqESGPbP6l1e44sI7t8LgFDEE3eZtIc_D39bnge-u7Cfb1_PlZ-Sp10b4G1k8fXwqKamM65jvtIwhNc29hs-I-B27H9Y0B29ZRTvZ3dYx4gEBn2ZUvTq0ORHaZKcPTKp0Kocu5udXdOBDFCBbA7K_ityC87Gm9N',
  },
  {
    id: 'mcc',
    category: 'mcc',
    badge: 'MOTOR CONTROL CENTRE',
    title: 'Motor Control Centre (MCC) Panel',
    description:
      'Comprehensive motor control center panels with protection features, monitoring capabilities, and centralized control for industrial applications.',
    spec: 'Drawout & Fixed Tiers',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl_D9GNWkupV_p43Dw3210OHnQ7GKJLLdwUsPaMM3-5laGawqQsIjahv2dJL2Y8mirvMXh-oNlaSA4zkJYtVYpqzUHqJAk_FyZUMxOjP-JDct2EmwKBqpjMTB8XYTJGyo3lvkXYe0ThqBlPO8AoVrAJ49xTuNzjRaHv47RLUG0uHKOlz4QbsfAQ46iWp2hUpR-59sGIU7qBez8lFnD_BL5NvXDIET-5ohCepQDJ2REH8KvpNFc0De5',
  },
  {
    id: 'plc',
    category: 'plc',
    badge: 'PLC SYSTEM PANELS',
    title: 'PLC System Panels',
    description:
      'Programmable logic controller panels engineered for automation, precision process control, and real-time supervisory data monitoring across modern industrial lines.',
    spec: 'SCADA / HMI Integrated',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCImpIjX6xHwa5vbELAbertL3BsWL4bAf1yaYGK4hRa04HhK-Epkev-wLaJVGtXnh9un1hRdaYo78phL8ucEa5g9NrYJhMebz8mKnbovs_O8_04ROBReTUdD_u-HdfjM4td58m_s-btnxHDArds9bmPB5oNn1K0we2_mDw6zmED3ifFe0tLhYcXeUMKgbHWrIhvmRy5wg4wCQSAI4VTrvz0hg7fgokiUHDDdJMw5TXqYLkOFWQIeBux',
  },
  {
    id: 'amf',
    category: 'amf',
    badge: 'AMF / ATS PANELS',
    title: 'AMF / ATS Panels',
    description:
      'Automatic Mains Failure (AMF) and Automatic Transfer Switch (ATS) panels designed for seamless, uninterrupted changeover between grid utility and standby power generators.',
    spec: 'Fast Generator Sync',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDedoK3ll3qjD8HqdXPQksib2te8LSWhKP3-WRxH5ZWQsZL-3QmGZsqJpllm0HNPRdmGu-e8G1-qFK4lv9ghQokAKGEaH38qy17cGyYYuNs3l1wI_nRB0nXnsPyBCIEuRIyfuxag90IwjMoGjjJMSzbeMwSg58heeeMLu5_TBPTtpBcW0MANp9fycHIB_WhYLs5aZjuij3wQV78gKGjbFAxNS5ryvw4aIPtjr29Cc9AS-0heTDs3oND',
  },
  {
    id: 'db',
    category: 'db',
    badge: 'LIGHTING & POWER DBS',
    title: 'Lighting & Power DBs',
    description:
      'Robust distribution boards for lighting and sub-power applications, engineered for maximum personal safety, clean circuit division, and modular breaker expansion.',
    spec: 'IP54 / IP65 Weatherproof',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvOBFscQkj5gJlNxOUOz_aErpvoYciQFkvv4546b67BqTwQdgRHsbmjnKfJ2gu_2j7qaKD45eK5SQIubWFBapn0Ka4lcPwVR4tks8PSKUx_EG9i7ZSR3LPHmfzrJ1PB2xn4bQGQ44PYVIuvzytJ9RzbsQvJkDEL6t1p-w1gRKOyEcKKbzW621TuiF3F1e3iTqmevi1UYeGBLYbw9CPNH_sZiur7T2l-VNlIkiG1bqsPOfNC4LHKevB',
  },
  {
    id: 'cables',
    category: 'cables',
    badge: 'CABLE SYSTEMS',
    title: 'Cable Tray and Cable Ladder Systems',
    description:
      'Precision-formed galvanized steel and aluminum cable trays, ladders, and trunking systems built for organized, heavy-load industrial cable routing.',
    spec: 'Hot-Dip Galvanized / GI',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR2WtRSQVfm4KiSS6M3O34pQJJgA0fNrT0p7DeoCJwlZKSnSw-g0EtJZDeZUo40lkJj2ZZ20-MCvMyNTlkqofCDs8Rit4OwuGHd4WWSHsiScmZLVCnVpPLSJ8nvu-eZFJp_nVme2TcQudzE3QleNOryRmhezYILoZ8lezHlGrXGOGWlLnDkkhJTh4svPcWu_00LyXNufU3FQV8QPD_hFsG95hWMxnb0ptyKfhTkMmITFuncR2C1Nfo',
  },
];

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
            OUR PRODUCTS
          </span>
          <h2 className="font-title text-[#00283d] text-[24px] sm:text-[32px] font-bold">
            High-Quality Electrical Switchgear
          </h2>
          <div className="w-16 h-1 bg-[#0098da] rounded-full my-1.5" />
          <p className="font-body text-[#3e5261] text-[15px] leading-relaxed max-w-2xl">
            We design and manufacture a comprehensive range of electrical switchgear and distribution equipment that meets the highest quality and safety standards.
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
              className="bg-white p-5 rounded-xl shadow-[0_2px_12px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#003d57]">
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#004d6d]/90 text-white font-technical text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider backdrop-blur-xs">
                    {prod.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-title text-[#00283d] text-[17px] font-bold leading-snug">
                    {prod.title}
                  </h3>
                  <p className="font-body text-[#3e5261] text-[13px] leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#edf4f8]">
                <span className="font-technical text-[11px] text-[#0098da] font-semibold">
                  {prod.spec}
                </span>
                <a
                  href="#contact-section"
                  className="inline-flex items-center gap-1 font-title text-[13px] text-[#0098da] font-bold hover:text-[#0076a8] transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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
