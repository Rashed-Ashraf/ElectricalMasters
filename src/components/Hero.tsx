'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#03364f]" id="hero">
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] flex flex-col justify-center">
        {/* Background Video - Muted Ambient Presentation */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCwl1_Vut92Af4j_fIIv6EsB5tDz0csU3rGQ73CH-5cpwt2Uw533v3rmQEElPREtS83KEWK41PvV6rQxZM14miC6CRL_vuqoBU07jOfYWO6OlSpGhuNFDPcau0DOf5M3gMS9VfMMyFT4lomovJt6KOpb1DKavVHxifCaMcJrY09MlRyVGSeyZ58ZDDH9sXYhTvuTnBaQ6yNWL9_fzb_AvPkvyAUJaYnAGHwqyk7z_Zx3KuEFXM-xsbb"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video is not supported */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwl1_Vut92Af4j_fIIv6EsB5tDz0csU3rGQ73CH-5cpwt2Uw533v3rmQEElPREtS83KEWK41PvV6rQxZM14miC6CRL_vuqoBU07jOfYWO6OlSpGhuNFDPcau0DOf5M3gMS9VfMMyFT4lomovJt6KOpb1DKavVHxifCaMcJrY09MlRyVGSeyZ58ZDDH9sXYhTvuTnBaQ6yNWL9_fzb_AvPkvyAUJaYnAGHwqyk7z_Zx3KuEFXM-xsbb"
            alt="High Voltage Switchgear and Power Distribution System"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Gradient Overlay: Balanced backdrop with reduced opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(2, 44, 66, 0.45) 0%, rgba(3, 56, 82, 0.30) 45%, rgba(4, 72, 104, 0.10) 75%, rgba(6, 85, 120, 0) 100%), linear-gradient(180deg, rgba(2, 44, 66, 0.10) 0%, transparent 40%, rgba(2, 44, 66, 0.30) 100%)',
          }}
        />

        {/* Hero Content Container - Constrained to Left Side */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-8 pt-24 pb-14 z-10">
          <div className="max-w-xl lg:max-w-2xl flex flex-col gap-5">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-full font-title text-[11px] font-semibold tracking-wider uppercase border border-white/20 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0098da]" />
                Since 2004
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-full font-title text-[11px] font-semibold tracking-wider uppercase border border-white/20 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0098da]" />
                Technical Excellence
              </span>
            </div>

            {/* Headlines */}
            <div className="flex flex-col">
              <h1 className="font-title text-[32px] sm:text-[44px] lg:text-[50px] leading-tight text-white font-extrabold tracking-tight">
                Electrical Masters
              </h1>
              <span className="font-title text-[24px] sm:text-[32px] lg:text-[38px] text-[#38bdf8] font-bold leading-tight mt-1">
                Switchgear Private Limited.
              </span>
            </div>

            {/* Paragraph Description */}
            <p className="font-body text-[14px] sm:text-[16px] text-[#d5eefc] leading-relaxed">
              Established in 2004, we provide cutting-edge switching and protection solutions for electrical distribution systems. Specializing in both ground and pole mounted switchgear, we design, manufacture and supply advanced systems for utility, industrial, commercial and residential sectors.
            </p>

            {/* Action CTAs - Left Aligned, Clean Proportionate Size */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#products-section"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#0098da] hover:bg-[#0084bd] active:bg-[#006f9e] text-white font-title text-[14px] font-bold rounded-lg shadow-lg active:scale-95 transition-all"
              >
                <span>Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact-section"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-title text-[14px] font-bold rounded-lg backdrop-blur-md active:scale-95 transition-all"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="w-full bg-[#012538] px-4 sm:px-8 py-3.5 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#0098da]/25 text-[#0098da] flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-[#0098da]" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <span className="font-title text-white text-[13px] font-bold">
              Professional Switchgear Solutions
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <p className="font-body text-[#c3e8ff] text-[12px] italic">
              “Staying ahead with technical excellence and responsive after-sales care”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


