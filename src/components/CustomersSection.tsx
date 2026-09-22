'use client';

import React from 'react';
import {
  Building2,
  Hotel,
  Tv,
  Newspaper,
  CupSoda,
  IceCream,
  Shirt,
  Droplets,
  Factory,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Cpu,
  CheckCircle2,
  Building,
  Wrench,
  Beaker,
  Truck,
  GraduationCap,
} from 'lucide-react';

interface ClientItem {
  name: string;
  category?: string;
}

// Complete list of clients extracted from client documents (Screenshots 3 & 4)
const CLIENTS_ROW_1: ClientItem[] = [
  { name: 'Gourmet Foods' },
  { name: 'Wateen Telecom' },
  { name: 'Jubilee Corporation' },
  { name: 'Brighto Paints' },
  { name: 'ATS Synthetic' },
  { name: 'PC Hotel' },
  { name: 'Express News' },
  { name: 'Dunya News' },
  { name: 'Pepsi – Sukkur Beverages' },
  { name: 'Walls Ice Cream' },
  { name: 'Master Textiles' },
  { name: 'KSB Pumps' },
  { name: 'Sundar Industrial Estates (SIE)' },
  { name: 'Buhler Pakistan (Pvt) Ltd.' },
  { name: 'TN Pharma' },
  { name: 'Khan Brothers' },
  { name: 'Kohat Cement' },
  { name: 'Bestway Cement' },
  { name: 'Shahtaj Sugar Mills' },
  { name: 'Bunny’s Bread' },
  { name: 'Shahkam Industries' },
  { name: 'Intelligent Metering (Pvt) Ltd.' },
  { name: 'Innovative Biscuits' },
  { name: 'Faraz Juice' },
  { name: 'Aziz Engineering' },
  { name: 'Transfo Power Industries' },
  { name: 'Asian Consultants' },
  { name: 'Wire Manufacturing' },
  { name: 'Al-Mateen Associates' },
  { name: 'HiTek Engineering' },
  { name: 'WIB Engineering' },
  { name: 'Water Remedy (Pvt) Ltd.' },
  { name: '3B Water Engineering' },
  { name: 'Techno Energy ONE' },
  { name: 'WEMS (Water Eng. Mgt. Services)' },
  { name: 'Chemtronics Water Engineering' },
  { name: 'Ittehad Chemicals' },
  { name: 'Fletti’s Express Hotel' },
];

const CLIENTS_ROW_2: ClientItem[] = [
  { name: 'Elemech Pakistan (Pvt) Ltd. (EPL)' },
  { name: 'Guard Filter' },
  { name: 'Techno Solutions' },
  { name: 'R & K Engineering' },
  { name: 'Crescent Bahuman (CBL)' },
  { name: 'Streamline Enggg & Services' },
  { name: 'Emam Engineering' },
  { name: 'Multilinks' },
  { name: 'PCAL Systems' },
  { name: 'S.A Hamid & Co.' },
  { name: 'R.S Traders' },
  { name: 'Master Tiles' },
  { name: 'Fazal Elahi & Sons' },
  { name: 'ORA-HRL' },
  { name: 'Unifoam' },
  { name: 'Hew Automation' },
  { name: 'Nimir Chemicals' },
  { name: 'Al-Shaheer Foods' },
  { name: 'Babar Medicine Company (BMC)' },
  { name: 'Al-Fouz Technologies' },
  { name: 'H.A Fiber' },
  { name: 'Ayesha Spinning Mills' },
  { name: 'Norson Chemicals' },
  { name: 'Reliance Mill Multan' },
  { name: 'Mubarik Traders' },
  { name: 'Traffic Network Management (TNM)' },
  { name: 'Sarina Thermoplastics' },
  { name: 'US Denim (Pvt) Ltd.' },
  { name: 'RA Associates' },
  { name: 'MIA Energy' },
  { name: 'Faire Tech Engineering' },
  { name: 'Dar-e-Arqam School (Johar Abad)' },
  { name: 'ECS' },
  { name: 'Samad Apparel' },
  { name: 'Mohsin Associates' },
  { name: 'ICT Integrators' },
  { name: 'HBL' },
  { name: 'Fatima Fertilizer' },
];

const COMPANY_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA';

export const CustomersSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#f2f8fc] relative overflow-hidden" id="customers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-white p-0.5 border border-[#0098da]/30 shadow-sm flex items-center justify-center">
              <img src={COMPANY_LOGO_URL} alt="EM Switchgear Logo" className="w-full h-full object-contain" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0098da]/10 text-[#0098da] rounded-full font-title text-[11px] font-bold tracking-widest uppercase border border-[#0098da]/20">
              OUR VALUED CLIENTS
            </span>
          </div>
          <h2 className="font-title text-[#00283d] text-[26px] sm:text-[36px] font-extrabold tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-[#0098da] rounded-full my-1" />
          <p className="font-body text-[#3e5261] text-[15px] leading-relaxed max-w-2xl">
            We are proud to power leading commercial enterprises, industrial plants, telecom giants, educational institutions, and public utilities across Pakistan.
          </p>
        </div>
      </div>

      {/* Marquee Showcase Container */}
      <div className="mt-8 relative w-full overflow-hidden py-4 flex flex-col gap-5">
        {/* Fade overlays on left and right for seamless gradient mask */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f2f8fc] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f2f8fc] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track 1: Moving Left */}
        <div className="overflow-hidden flex w-full">
          <div className="animate-marquee-left flex items-center gap-4">
            {/* First Set */}
            {CLIENTS_ROW_1.map((client, idx) => (
              <ClientBadge key={`r1-1-${idx}`} name={client.name} />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {CLIENTS_ROW_1.map((client, idx) => (
              <ClientBadge key={`r1-2-${idx}`} name={client.name} />
            ))}
          </div>
        </div>

        {/* Marquee Track 2: Moving Right */}
        <div className="overflow-hidden flex w-full">
          <div className="animate-marquee-right flex items-center gap-4">
            {/* First Set */}
            {CLIENTS_ROW_2.map((client, idx) => (
              <ClientBadge key={`r2-1-${idx}`} name={client.name} />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {CLIENTS_ROW_2.map((client, idx) => (
              <ClientBadge key={`r2-2-${idx}`} name={client.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <div className="mt-8 flex items-center justify-center px-4">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-[#e1f0f8] rounded-full shadow-sm text-[#003850] font-title text-[13px] font-bold">
          <div className="w-5 h-5 rounded bg-white flex items-center justify-center border border-slate-200">
            <img src={COMPANY_LOGO_URL} alt="Electrical Masters Logo" className="w-full h-full object-contain" />
          </div>
          <span className="w-2 h-2 rounded-full bg-[#0098da] animate-pulse" />
          <span>Over 75+ Major Industrial & Commercial Clients Nationwide</span>
        </div>
      </div>
    </section>
  );
};

// Subcomponent for individual client pills in marquee
const ClientBadge: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-white border border-[#e1f0f8] rounded-xl shadow-[0_2px_8px_rgba(0,77,109,0.04)] hover:shadow-md hover:border-[#0098da] transition-all cursor-default group flex-shrink-0">
      <div className="w-8 h-8 rounded-lg bg-[#e1f2fb] p-1 border border-[#0098da]/15 group-hover:bg-[#0098da]/10 flex items-center justify-center transition-colors flex-shrink-0">
        <img src={COMPANY_LOGO_URL} alt="EM Switchgear Logo" className="w-full h-full object-contain" />
      </div>
      <span className="font-title text-[#00283d] text-[13px] sm:text-[14px] font-semibold whitespace-nowrap group-hover:text-[#0098da] transition-colors">
        {name}
      </span>
    </div>
  );
};
