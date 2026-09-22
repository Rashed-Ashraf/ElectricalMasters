'use client';

import React from 'react';
import {
  Layers,
  ShieldCheck,
  Zap,
  Lightbulb,
  Cpu,
  Lamp,
  CheckCircle2,
  Headphones,
  ArrowRight,
} from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Cable Tray and Cable Ladder',
    description:
      'Complete design and installation of cable management systems, including trays and ladder systems for efficient and organized electrical routing.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Earthing of all Types',
    description:
      'Professional installation of various earthing systems to ensure electrical safety and compliance with industry standards and regulations.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Lightening Protection System',
    description:
      'Expert design and installation of lightning protection systems to safeguard buildings and electrical infrastructure from lightning damage.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Cabling and Lighting',
    description:
      'Comprehensive cabling and lighting installation services, including commercial, industrial, and specialized lighting systems.',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Power House Installation',
    description:
      'Complete setup of power houses with all necessary electrical equipment and systems for reliable power distribution and management.',
  },
  {
    icon: <Lamp className="w-5 h-5" />,
    title: 'Lighting Poles',
    description:
      'Installation of various types of lighting poles for outdoor areas, roadways, and industrial facilities with energy-efficient lighting solutions.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'Installation, Testing, Commissioning of Low Voltage Switchgear',
    description:
      'Expert installation, comprehensive testing, and professional commissioning of low voltage switchgear systems for optimal performance and safety.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#002b40] relative overflow-hidden" id="services-section">
      {/* Background Gradient & Overlay to match Hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002b40] via-[#002233] to-[#001c2b] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="font-title text-[#38bdf8] uppercase tracking-widest font-bold text-[12px]">
            OUR SERVICES
          </span>
          <h2 className="font-title text-white text-[24px] sm:text-[32px] font-bold">
            Comprehensive Electrical Services
          </h2>
          <div className="w-16 h-1 bg-[#0098da] rounded-full my-1.5" />
          <p className="font-body text-[#c3e8ff] text-[15px] leading-relaxed max-w-2xl">
            We provide a complete range of services for electrical systems and infrastructure, from installation and maintenance to testing and commissioning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#003850]/80 border border-white/10 backdrop-blur-md rounded-xl shadow-lg flex items-start gap-4 hover:border-[#0098da]/60 hover:bg-[#00425e] transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#0098da]/20 text-[#38bdf8] group-hover:bg-[#0098da] group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                {srv.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-title text-white text-[15px] font-bold leading-snug group-hover:text-[#38bdf8] transition-colors">
                  {srv.title}
                </h3>
                <p className="font-body text-[#d5eefc]/90 text-[13px] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Callout */}
        <div className="p-6 bg-[#001926] border border-white/10 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#0098da]/20 text-[#38bdf8] flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <p className="font-title text-white text-[15px] font-bold">
              Need a custom service package or specialized installation?
            </p>
          </div>
          <a
            href="#contact-section"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0098da] hover:bg-[#0084bd] text-white font-title text-[13px] font-bold rounded-lg shadow-md active:scale-95 transition-all whitespace-nowrap"
          >
            <span>Contact Our Service Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
