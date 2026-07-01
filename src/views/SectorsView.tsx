/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Globe, Building, Shield, Award, TrendingUp, BookOpen, 
  Check, ArrowRight, Server, ShieldAlert, Cpu 
} from 'lucide-react';
import { SECTORS_DATA } from '../data';

interface SectorsViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function SectorsView({ onPageChange, onSelectConsultation }: SectorsViewProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="h-6 w-6 text-[#1B75BB]" />,
    Building: <Building className="h-6 w-6 text-[#1B75BB]" />,
    Shield: <Shield className="h-6 w-6 text-[#1B75BB]" />,
    Award: <Award className="h-6 w-6 text-[#0F9D58]" />,
    TrendingUp: <TrendingUp className="h-6 w-6 text-[#C79A32]" />,
    BookOpen: <BookOpen className="h-6 w-6 text-[#1B75BB]" />
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Target Jurisdictions
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Advisory for Governments, Health Systems, Insurers and Healthcare Investors
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            We provide deep domain and strategic expertise designed specifically for institutional operators shaping clinical pathways and capital portfolios.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
            Practice Integration
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] mt-1">
            Who We Support & Core Use Cases
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Explore our specialized use-case frameworks mapped to specific healthcare industry stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {SECTORS_DATA.map((sector) => (
            <div 
              key={sector.id}
              className="border border-gray-200/80 rounded-xl p-6 md:p-8 hover:border-[#1B75BB]/20 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4 mb-5">
                  <div className="w-12 h-12 rounded bg-[#F5F7FA] flex items-center justify-center shrink-0">
                    {iconMap[sector.iconName] || <Building className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#071B33]">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-normal mt-0.5">
                      {sector.description}
                    </p>
                  </div>
                </div>

                {/* Use Cases Bullet Panel */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block">Signature Use Cases</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {sector.useCases.map((useCase, uIdx) => (
                      <div key={uIdx} className="flex items-start gap-2 text-xs text-gray-600 leading-normal">
                        <div className="w-4 h-4 rounded-full bg-[#E8F3FB] flex items-center justify-center shrink-0 mt-0.5 text-[#1B75BB]">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400">Framework Sector</span>
                <button
                  onClick={() => {
                    onSelectConsultation(`Advisory for ${sector.title}`);
                    onPageChange('contact');
                  }}
                  className="text-xs font-semibold text-[#1B75BB] hover:text-[#071B33] flex items-center gap-1 focus:outline-none"
                >
                  <span>Request sectoral brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector Case Callout */}
      <section className="bg-[#F5F7FA] py-16 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#0F9D58] font-bold block">Coordinated System Care</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#071B33] leading-tight">
                National Cancer Control Strategy alignment
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xl">
                We frequently coordinate cross-sector programmes designed to link hospital registries with national policy frameworks, driving cohesive, system-wide diagnostics and resource scaling.
              </p>
            </div>
            <button
              onClick={() => onPageChange('leadership')}
              className="bg-[#071B33] hover:bg-[#071B33]/90 text-white text-xs font-semibold px-5 py-3 rounded shrink-0 cursor-pointer"
            >
              View Our National Roles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
