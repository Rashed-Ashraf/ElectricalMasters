'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Zap,
  Wrench,
  FileCheck,
  PhoneCall,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'products' | 'services' | 'orders';
}

const FAQS: FaqItem[] = [
  {
    category: 'products',
    question: 'What types of switchgear and control panels do you manufacture?',
    answer:
      'We manufacture a comprehensive range of electrical panels including Low Voltage Switchboards (LVS), Power Factor Improvement (PFI) Plant, Motor Control Centers (MCC), Distribution Boards, Automatic Transfer Switches (ATS / AMF), Synchronization Panels, and custom PLC Automation & SCADA Control Panels.',
  },
  {
    category: 'general',
    question: 'Are your switchgear solutions certified and compliant with international standards?',
    answer:
      'Yes. All our switchboards, cubicles, and assemblies are engineered and tested in accordance with international IEC standards (such as IEC 61439-1/2), IEEE, and local DISCO / WAPDA technical specifications, ensuring maximum operator safety, ingress protection (IP ratings), and short-circuit withstand capabilities.',
  },
  {
    category: 'services',
    question: 'Do you provide on-site installation, commissioning, and testing services?',
    answer:
      'Absolutely. Our field engineering team handles turnkey deployment including cable tray & ladder installation, earthing and lightning protection, power house setup, substation testing, and on-site commissioning to guarantee zero-defect operational handovers.',
  },
  {
    category: 'orders',
    question: 'How can I request a technical quote or submit Single Line Diagrams (SLD)?',
    answer:
      'You can submit your Single Line Diagrams (SLD), bill of quantities (BOQ), or technical requirements directly through our online quote form, via email at emswitchgears@gmail.com, or by calling our engineering hotline at +92 300 4466489.',
  },
  {
    category: 'general',
    question: 'Which industries and clients do you serve across Pakistan?',
    answer:
      'Since 2004, we have served major industrial, commercial, and utility clients including cement plants (e.g. Bestway Cement), textile mills, food & beverage facilities, high-rise plazas, hospitals, power generation plants, and residential housing developments.',
  },
  {
    category: 'services',
    question: 'What warranty and after-sales support do you provide?',
    answer:
      'We provide full warranty coverage on all manufactured switchgear systems alongside responsive after-sales care, scheduled preventative maintenance contracts, emergency breakdown troubleshooting, and genuine replacement spare parts.',
  },
  {
    category: 'products',
    question: 'Can you customize switchgear enclosures for specific site dimensions and harsh environments?',
    answer:
      'Yes. We offer fully custom sheet-metal fabrication with electro-galvanized or cold-rolled steel, specialized powder coating (RAL 7032/7035 and custom colors), compartmentalized Form 2/3/4 segregation, and outdoor weatherproof IP55/IP65 ratings.',
  },
];

type CategoryFilter = 'all' | 'products' | 'services' | 'orders' | 'general';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq-section"
      className="py-16 sm:py-24 bg-[#f4f9fd] border-t border-[#e2eff7] relative overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0098da]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004d6d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004d6d]/10 border border-[#0098da]/30 text-[#004d6d]">
            <HelpCircle className="w-4 h-4 text-[#0098da]" />
            <span className="font-technical text-[11px] font-bold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-title text-[28px] sm:text-[38px] font-extrabold text-[#00283d] tracking-tight leading-tight">
            Got Questions? We Have Answers.
          </h2>

          <p className="font-body text-[#4a6375] text-[15px] sm:text-[16px] leading-relaxed">
            Find quick answers about our switchgear manufacturing capabilities, technical standards, project delivery, and after-sales support.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'products', label: 'Switchgear & Panels' },
            { id: 'services', label: 'Installation & Services' },
            { id: 'orders', label: 'Quotes & Inquiries' },
            { id: 'general', label: 'Company & Standards' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id as CategoryFilter);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl font-title text-[13px] font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#004d6d] text-white shadow-md'
                  : 'bg-white text-[#4a6375] hover:bg-[#e1f0f8] hover:text-[#00283d] border border-[#d6e8f4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#0098da]/40 shadow-[0_4px_20px_rgba(0,152,218,0.08)]'
                    : 'bg-white/80 hover:bg-white border-[#dcecf6] hover:border-[#b8dcf0] shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className="font-title text-[15px] sm:text-[17px] font-bold text-[#00283d] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0098da] text-white rotate-180'
                        : 'bg-[#eaf4fb] text-[#004d6d]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 pt-1 text-[#4a6375] font-body text-[14px] sm:text-[15px] leading-relaxed border-t border-[#f0f6fa]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Support Box */}
        <div className="mt-12 bg-gradient-to-r from-[#00283d] to-[#004d6d] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
              <MessageSquare className="w-6 h-6 text-[#38bdf8]" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-title text-[18px] sm:text-[20px] font-bold">
                Have a specialized project requirement?
              </h3>
              <p className="font-body text-[#cde6f7] text-[13px] sm:text-[14px]">
                Speak directly with our electrical engineering consultants today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/#contact-section"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white font-title text-[13px] font-bold shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+923004466489"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-title text-[13px] font-bold border border-white/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
              <span>+92 300 4466489</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
