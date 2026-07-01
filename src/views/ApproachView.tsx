/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Compass, Eye, Clipboard, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { PATHWAY_DATA } from '../data';

interface ApproachViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function ApproachView({ onPageChange, onSelectConsultation }: ApproachViewProps) {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stageIcons: Record<number, React.ReactNode> = {
    1: <Compass className="h-5 w-5 text-[#1B75BB]" />,
    2: <Clipboard className="h-5 w-5 text-[#C79A32]" />,
    3: <Eye className="h-5 w-5 text-[#0F9D58]" />,
    4: <Activity className="h-5 w-5 text-[#1B75BB]" />,
    5: <ShieldCheck className="h-5 w-5 text-[#1B75BB]" />
  };

  const selectedStage = PATHWAY_DATA.find(s => s.number === activeStage) || PATHWAY_DATA[0];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Transformation Methodology
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Healthcare AI Transformation Methodology | Durotimi AI Advisory
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            We employ a rigorous, clinical-grade 5-phase transformation protocol designed to eliminate strategic ambiguity and secure continuous safety across healthcare systems.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
            The Transformation Method
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] mt-1">
            The Durotimi AI Advisory Transformation Method
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Click on any of the five stages below to review detailed audits, alignment workshops, and typical institutional milestones.
          </p>
        </div>

        {/* Timeline Stage Selectors (Horizontal or Vertical depending on screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Stage Selector Column */}
          <div className="lg:col-span-5 space-y-3.5">
            {PATHWAY_DATA.map((stage) => {
              const isActive = activeStage === stage.number;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStage(stage.number)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-center justify-between gap-4 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'border-[#1B75BB] bg-[#E8F3FB]/50 shadow-sm relative' 
                      : 'border-gray-100 bg-[#F5F7FA] hover:bg-[#E8F3FB]/20'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1B75BB] rounded-l-xl" />
                  )}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-sm ${
                      isActive ? 'bg-[#1B75BB] text-white' : 'bg-[#071B33] text-white'
                    }`}>
                      0{stage.number}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-serif font-semibold text-[#071B33]">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-mono uppercase mt-0.5">Stage Framework</p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {stageIcons[stage.number]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details Panel */}
          <div className="lg:col-span-7 bg-[#F5F7FA] border border-gray-200/50 rounded-2xl p-6 md:p-8 relative min-h-[350px] flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-wider bg-[#1B75BB]/10 text-[#1B75BB] px-2.5 py-0.5 rounded font-bold">
                  Active Audit Block
                </span>
                <span className="text-xs font-mono text-gray-400">Phase 0{selectedStage.number} Specification</span>
              </div>

              <div>
                <h4 className="text-xl font-serif font-bold text-[#071B33] leading-tight">
                  {selectedStage.title} Stage
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-2 leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>

              {/* Sub-items/Details list */}
              <div className="space-y-3.5 pt-3">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block">Core Deliverables & Activities</span>
                <div className="grid grid-cols-1 gap-3">
                  {selectedStage.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-normal">
                      <div className="w-5 h-5 rounded-full bg-white border border-[#0F9D58]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#0F9D58]">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-gray-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-gray-400 italic">Robust governance mapped to clinical safety.</span>
              <button
                onClick={() => {
                  onSelectConsultation(`Discuss Method: ${selectedStage.title}`);
                  onPageChange('contact');
                }}
                className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-4.5 py-2.5 rounded transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>Scoping Strategic Discussion</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Methodology Impact */}
      <section className="bg-[#071B33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Methodology Rigour
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Standardised on clinical-grade interoperability pathways.
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            Our methodologies sync with HL7 FHIR (Fast Healthcare Interoperability Resources) data structures and clinical safety guidelines of international accreditation bodies.
          </p>
          <div className="pt-3">
            <button
              onClick={() => {
                onSelectConsultation('AI Readiness Assessment');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-5 py-3 rounded transition-colors cursor-pointer"
            >
              Request an AI Readiness Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
