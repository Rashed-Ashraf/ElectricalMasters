'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sliders,
  ShieldCheck,
  Zap,
  FileText,
  Send,
  PhoneCall,
  Mail,
  ChevronRight,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { ProductItem } from '@/data/products';
import { Header } from '@/components/Header';
import { MobileDrawer } from '@/components/MobileDrawer';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';
import { sendEmail } from '@/app/actions/send-email';

interface ProductDetailClientProps {
  product: ProductItem;
  otherProducts: ProductItem[];
}

export function ProductDetailClient({ product, otherProducts }: ProductDetailClientProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: `Interested in ${product.title} (${product.spec}). Please send technical datasheet and price quotation.`,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const result = await sendEmail({
        ...formData,
        productTitle: product.title,
      });

      if (result.success) {
        setStatus('success');
        setFeedbackMsg(result.message || "Thank you! We'll contact you soon.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: `Interested in ${product.title} (${product.spec}). Please send technical datasheet and price quotation.`,
        });
      } else {
        setStatus('error');
        setFeedbackMsg(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err: any) {
      console.error('[Product Inquiry Error]:', err);
      setStatus('error');
      setFeedbackMsg('An unexpected network error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fbfd] flex flex-col justify-between font-body antialiased relative pb-16 md:pb-0">
      {/* Header with Mobile Drawer trigger */}
      <Header onOpenDrawer={() => setDrawerOpen(true)} />

      {/* Slide-over Mobile Navigation Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-1 pb-16 pt-16">
        {/* Breadcrumb & Navigation Bar */}
        <div className="bg-[#001c2b] text-white py-4 px-4 sm:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-[13px] text-[#98cded] font-title">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <Link href="/#products-section" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
                {product.title}
              </span>
            </nav>

            <Link
              href="/#products-section"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-title text-[12px] font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalog</span>
            </Link>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="bg-gradient-to-b from-[#00283d] to-[#003c5a] text-white py-12 px-4 sm:px-8 border-b border-[#004d6d]/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#0098da] text-white rounded-full font-title text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {product.badge}
                </span>
                <span className="text-[#98cded] font-technical text-[11px] font-semibold">
                  {product.spec}
                </span>
              </div>

              <h1 className="font-title text-[28px] sm:text-[40px] font-extrabold leading-tight tracking-tight text-white">
                {product.title}
              </h1>

              <p className="font-body text-[#d1ebf9] text-[16px] sm:text-[18px] font-medium leading-relaxed">
                {product.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[14px] font-bold rounded-xl shadow-md active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Technical Quote</span>
                </a>
              </div>
            </div>

            {/* Right Product Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#001d2b] group">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001d2b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-[#d1ebf9]">
                  <span className="font-technical font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0098da]" /> Tested & Certified
                  </span>
                  <span className="font-title font-bold text-white">EM Switchgear</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description & Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 flex flex-col gap-12">
          {/* Overview & Key Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Product Overview Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_16px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-[#edf4f8] pb-4">
                  <FileText className="w-5 h-5 text-[#0098da]" />
                  <h2 className="font-title text-[#00283d] text-[20px] font-bold">
                    Product Description & Overview
                  </h2>
                </div>
                <p className="font-body text-[#3e5261] text-[15px] sm:text-[16px] leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Special Component Cards if present (e.g. PLC Cards) */}
              {product.cardTypes && product.cardTypes.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_16px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col gap-6">
                  <div className="flex items-center gap-2 border-b border-[#edf4f8] pb-4">
                    <Sliders className="w-5 h-5 text-[#0098da]" />
                    <h2 className="font-title text-[#00283d] text-[20px] font-bold">
                      Control Architecture & Card Modules
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.cardTypes.map((card, i) => (
                      <div
                        key={i}
                        className="bg-[#f0f8fd] p-4 rounded-xl border border-[#d2ebf9] flex flex-col gap-1.5"
                      >
                        <span className="font-title text-[#00283d] text-[15px] font-bold">
                          {card.title}
                        </span>
                        <p className="font-body text-[#3e5261] text-[13px] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_16px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col gap-6">
                <div className="flex items-center gap-2 border-b border-[#edf4f8] pb-4">
                  <Zap className="w-5 h-5 text-[#0098da]" />
                  <h2 className="font-title text-[#00283d] text-[20px] font-bold">
                    Key Features & Technical Advantages
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-3.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#f7fbfd] border border-[#e8f4fa]">
                      <CheckCircle2 className="w-5 h-5 text-[#0098da] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[#00283d] text-[14px] sm:text-[15px] leading-relaxed font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section if available */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-[#eaf5fc] p-6 sm:p-8 rounded-2xl border border-[#bce0f5] flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#0098da]" />
                    <h2 className="font-title text-[#00283d] text-[20px] font-bold">
                      Operational Benefits
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#d5ecf9] shadow-2xs">
                        <div className="w-2 h-2 rounded-full bg-[#0098da]" />
                        <span className="font-title text-[#003850] text-[13px] font-bold">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specifications & Quick Contact Form */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Technical Specifications Table */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_16px_rgba(0,77,109,0.06)] border border-[#e1f0f8] flex flex-col gap-4">
                <h3 className="font-title text-[#00283d] text-[18px] font-bold border-b border-[#edf4f8] pb-3">
                  Technical Specifications
                </h3>
                <div className="flex flex-col divide-y divide-[#edf4f8]">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="py-2.5 flex flex-col gap-1">
                      <span className="font-technical text-[11px] text-[#0098da] uppercase font-bold tracking-wider">
                        {spec.label}
                      </span>
                      <span className="font-title text-[#00283d] text-[13px] font-semibold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Inquiry Form Container */}
              <div id="inquiry-form" className="bg-[#00283d] text-white p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-[#004d6d]">
                <div className="flex flex-col gap-1">
                  <span className="font-technical text-[#98cded] text-[11px] font-bold uppercase tracking-wider">
                    FAST INQUIRY
                  </span>
                  <h3 className="font-title text-white text-[18px] font-bold">
                    Inquire About {product.title}
                  </h3>
                  <p className="font-body text-[#d1ebf9] text-[13px] leading-relaxed">
                    Submit your requirements for custom dimensions, busbar ratings, or site deployment.
                  </p>
                </div>

                {/* Feedback Notifications */}
                {status === 'success' && (
                  <div className="p-3.5 bg-emerald-950/80 border border-emerald-500 rounded-lg text-emerald-100 text-[13px] flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-emerald-300">Inquiry Sent!</strong>
                      <span>{feedbackMsg}</span>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 bg-rose-950/80 border border-rose-500 rounded-lg text-rose-100 text-[13px] flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-rose-300">Submission Error</strong>
                      <span>{feedbackMsg}</span>
                    </div>
                  </div>
                )}

                <form className="flex flex-col gap-3 mt-1" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[11px] font-title font-semibold text-[#98cded] uppercase mb-1">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Engr. Ahmad Khan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0098da] focus:ring-1 focus:ring-[#0098da] transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-title font-semibold text-[#98cded] uppercase mb-1">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ahmad@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0098da] focus:ring-1 focus:ring-[#0098da] transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-title font-semibold text-[#98cded] uppercase mb-1">
                      Phone / Mobile Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0098da] focus:ring-1 focus:ring-[#0098da] transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-title font-semibold text-[#98cded] uppercase mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Bestway Cement / Industrial Plant"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0098da] focus:ring-1 focus:ring-[#0098da] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-title font-semibold text-[#98cded] uppercase mb-1">
                      Project Details / Specs Required <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Specify busbar rating, brand preference, or site requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#0098da] focus:ring-1 focus:ring-[#0098da] resize-none transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-2 w-full py-3 bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white font-title text-[13px] font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Product Inquiry</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-[#98cded]">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-[#0098da]" />
                    <span>+92 300 4466489 / +92 333 4466489</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0098da]" />
                    <a href="mailto:emswitchgears@gmail.com" className="hover:text-white transition-colors">
                      emswitchgears@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Other Products Carousel/Grid */}
          <div className="pt-8 border-t border-[#edf4f8] flex flex-col gap-6">
            <h3 className="font-title text-[#00283d] text-[22px] font-bold">
              Explore Other Switchgear Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="bg-white p-4 rounded-xl border border-[#e1f0f8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
                >
                  <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#00283d]">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-technical text-[10px] text-[#0098da] font-bold uppercase">
                      {p.badge}
                    </span>
                    <h4 className="font-title text-[#00283d] text-[15px] font-bold group-hover:text-[#0098da] transition-colors leading-snug">
                      {p.title}
                    </h4>
                  </div>
                  <span className="font-title text-[12px] text-[#0098da] font-bold flex items-center gap-1">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

