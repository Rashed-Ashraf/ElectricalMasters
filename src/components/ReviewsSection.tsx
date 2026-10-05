'use client';

import React, { useState } from 'react';
import {
  Star,
  Quote,
  Building2,
  CheckCircle2,
  Sparkles,
  Filter,
} from 'lucide-react';

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: 'Food & Beverage' | 'Telecom' | 'Manufacturing' | 'Commercial' | 'Energy & Utilities';
  rating: number;
  date: string;
  project: string;
  comment: string;
  verified: boolean;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Engr. Tariq Mahmood',
    role: 'General Manager Engineering',
    company: 'Gourmet Foods',
    industry: 'Food & Beverage',
    rating: 5,
    date: 'August 2026',
    project: 'Main Low Voltage Switchboard & Substation Upgrade',
    comment:
      'Electrical Masters Switchgear delivered top-tier LV panels for our central processing facility. The build quality, busbar assembly, and adherence to IEC safety standards exceeded our expectations. Exceptional technical support throughout.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Muhammad Usman Chaudhry',
    role: 'Director of Infrastructure',
    company: 'Wateen Telecom',
    industry: 'Telecom',
    rating: 5,
    date: 'July 2026',
    project: 'Data Center Power Distribution & ATS Panels',
    comment:
      'We contracted EM Switchgear for our main data center Automatic Transfer Switch (ATS) and power distribution units. Their turn-key execution from engineering design to commissioning was seamless, ensuring zero downtime.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Khurram Shahzad',
    role: 'Chief Engineer',
    company: 'Bestway Cement Works',
    industry: 'Manufacturing',
    rating: 5,
    date: 'June 2026',
    project: 'Heavy Duty Motor Control Center (MCC) & PFI Panels',
    comment:
      'Heavy industrial environments demand rugged, dependable switchgear. The Motor Control Center panels fabricated by Electrical Masters have operated continuously under full load without a single failure. Highly reliable team!',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Salman Farooq',
    role: 'Project Manager',
    company: 'Fletti’s Express Hotel',
    industry: 'Commercial',
    rating: 5,
    date: 'May 2026',
    project: 'Commercial Building Main Distribution Board (MDB)',
    comment:
      'Timely delivery, precise compliance with building electrical codes, and sleek panel finishes. Their engineers were available on-site during full energization and load testing. Highly recommend their services.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Asif Raza',
    role: 'Plant Electrical Lead',
    company: 'Pepsi – Sukkur Beverages',
    industry: 'Food & Beverage',
    rating: 5,
    date: 'April 2026',
    project: 'Automatic Load Sharing & Synchronizing Panel',
    comment:
      'Extremely impressed with the synchronizing panel efficiency during peak industrial operations. Electrical Masters Switchgear is our go-to partner for custom switchboard fabrication and earthing systems.',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Zia-ur-Rehman',
    role: 'Technical Director',
    company: 'Sundar Industrial Estate',
    industry: 'Energy & Utilities',
    rating: 5,
    date: 'March 2026',
    project: 'Lightning Protection & Substation Earthing',
    comment:
      'The earthing and lightning protection installations provided for our industrial unit met all international safety benchmarks. Excellent engineering craftsmanship and professional execution.',
    verified: true,
  },
];

const CATEGORIES = [
  'All Reviews',
  'Food & Beverage',
  'Telecom',
  'Manufacturing',
  'Commercial',
  'Energy & Utilities',
] as const;

export const ReviewsSection: React.FC = () => {
  const [reviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Reviews');

  const filteredReviews =
    selectedCategory === 'All Reviews'
      ? reviews
      : reviews.filter((r) => r.industry === selectedCategory);

  return (
    <section
      className="w-full py-16 bg-gradient-to-b from-[#ffffff] via-[#f4f9fd] to-[#eaf4fa] relative overflow-hidden border-t border-[#e1f0f8]"
      id="reviews-section"
    >
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0098da_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0098da]/10 text-[#0098da] rounded-full font-title text-[11px] font-bold tracking-widest uppercase border border-[#0098da]/20">
              <Sparkles className="w-3.5 h-3.5" />
              CLIENT REVIEWS & TESTIMONIALS
            </span>
          </div>

          <h2 className="font-title text-[#00283d] text-[26px] sm:text-[38px] font-extrabold tracking-tight leading-tight">
            Trusted Words from Industry Leaders
          </h2>

          <div className="w-16 h-1 bg-[#0098da] rounded-full" />

          <p className="font-body text-[#3e5261] text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
            Discover how Electrical Masters Switchgear powers top industrial plants, telecom infrastructure, and commercial complexes with precision and safety.
          </p>

          {/* Aggregate Rating Summary Pill */}
          <div className="mt-2 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 bg-white border border-[#0098da]/20 rounded-2xl shadow-sm text-[#00283d]">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-title text-[14px] font-extrabold text-[#003850]">4.9 out of 5.0</span>
            <span className="text-slate-300">•</span>
            <span className="font-body text-[13px] text-[#0098da] font-bold">75+ Major Industrial Clients</span>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center border-b border-[#d8eaf5] pb-6">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none justify-center">
            <Filter className="w-4 h-4 text-[#0098da] flex-shrink-0 hidden sm:block" />
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-[13px] font-title font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#0098da] text-white shadow-md'
                      : 'bg-white text-[#3e5261] border border-[#e1f0f8] hover:bg-[#eaf4fa] hover:text-[#0098da]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#e1f0f8] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,40,61,0.05)] hover:shadow-xl hover:border-[#0098da]/40 transition-all flex flex-col justify-between relative group"
            >
              {/* Top Quote Decor */}
              <div className="absolute top-5 right-5 text-[#0098da]/10 group-hover:text-[#0098da]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Header Info: Stars & Industry Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#f0f7fc] text-[#0076a8] border border-[#d3e7f5] rounded-md font-title text-[11px] font-bold uppercase tracking-wider">
                    {rev.industry}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-body text-[#2c3e4c] text-[14px] leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>

                {/* Project Badge */}
                <div className="mb-4 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[12px] font-body text-[#475569] flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#0098da] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-title font-bold text-[#00283d]">Project: </span>
                    <span>{rev.project}</span>
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#edf4f9] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0098da] to-[#003850] text-white font-title text-[14px] font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-title text-[#00283d] text-[14px] font-bold truncate">
                        {rev.name}
                      </span>
                      {rev.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0098da] flex-shrink-0" />
                        </span>
                      )}
                    </div>
                    <span className="font-body text-[#5b7385] text-[12px] truncate">
                      {rev.role} • <strong className="text-[#003850]">{rev.company}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
