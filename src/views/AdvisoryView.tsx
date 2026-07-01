/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Compass, Users, Layers, Award, ArrowRight } from 'lucide-react';

interface AdvisoryViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function AdvisoryView({ onPageChange, onSelectConsultation }: AdvisoryViewProps) {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Practice Overview
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Strategic Advisory for Healthcare AI and Digital Health Transformation
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            We help healthcare leaders design and implement responsible AI-enabled transformation programmes that strengthen data systems, improve clinical decision-making and create measurable institutional value.
          </p>
        </div>
      </section>

      {/* Core Philosophies (Key Message) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="bg-[#F5F7FA] border-l-4 border-[#C79A32] p-8 md:p-10 rounded-r-xl">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#071B33] font-bold block mb-2">
            The Transformative Truth
          </span>
          <p className="text-lg md:text-2xl font-serif text-[#071B33] italic leading-relaxed">
            “Technology does not transform healthcare on its own. Transformation requires leadership, governance, data readiness, clinical alignment and disciplined implementation.”
          </p>
        </div>
      </section>

      {/* Why Advisory Matters Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
                The Gap We Bridge
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] tracking-tight">
                Why Advisory Matters
              </h2>
              <div className="text-gray-600 text-xs md:text-sm space-y-4 leading-relaxed">
                <p>
                  Deploying Artificial Intelligence in clinical settings is vastly different from introducing software in conventional sectors. In healthcare, algorithmic suggestions alter medical decisions, affect patient outcomes, and raise critical data-security and ethical considerations.
                </p>
                <p>
                  Most institutions fail to capture the potential of AI because they treat it as an IT infrastructure spend. They overlook the crucial operational restructuring, clinical training, bias audits, and physician workflow adaptations required for genuine value creation.
                </p>
                <p>
                  Durotimi AI Advisory acts as a neutral, trusted institutional guide. We bridge the communication gap between clinical executives, regulatory officers, and technical developer teams to translate raw algorithms into safe, institutional assets.
                </p>
              </div>
            </div>

            {/* Visual Callout Cards */}
            <div className="space-y-4">
              <div className="border border-gray-100 p-5 rounded-xl bg-[#F5F7FA] flex gap-4">
                <div className="w-10 h-10 rounded bg-[#E8F3FB] flex items-center justify-center text-[#1B75BB] shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#071B33] text-sm md:text-base">De-Risking Clinical Deployments</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">We audit algorithms, data inputs, and safety protocols to protect patient welfare and defend against organizational liability.</p>
                </div>
              </div>

              <div className="border border-gray-100 p-5 rounded-xl bg-[#F5F7FA] flex gap-4">
                <div className="w-10 h-10 rounded bg-[#E8F3FB] flex items-center justify-center text-[#0F9D58] shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#071B33] text-sm md:text-base">Guiding National Strategies</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">We help public ministries define robust cancer data guidelines and coordinate unified interoperability programs.</p>
                </div>
              </div>

              <div className="border border-gray-100 p-5 rounded-xl bg-[#F5F7FA] flex gap-4">
                <div className="w-10 h-10 rounded bg-[#E8F3FB] flex items-center justify-center text-[#C79A32] shrink-0">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#071B33] text-sm md:text-base">Unlocking Data Portability</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">We architect modern cancer data registries using international HL7 FHIR standards for multi-institutional translation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role in the Durotimi AI Ecosystem */}
      <section className="py-16 bg-[#F5F7FA] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
              Ecosystem Positioning
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] mt-2">
              Our Role in the Durotimi AI Ecosystem
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
              Durotimi AI Advisory operates as the strategic transformation and advisory division of Durotimi AI Technologies Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
              <span className="text-[10px] font-mono uppercase text-gray-400 block">Division 1</span>
              <h3 className="text-lg font-serif font-bold text-[#071B33] mt-1">Durotimi AI Technologies Ltd</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
                The core technology division focused on advanced software systems, oncology registry development, and federated machine-learning research. This division focuses on constructing the foundational pipelines and data engines.
              </p>
            </div>
            
            <div className="bg-white border-2 border-[#1B75BB]/30 p-6 rounded-xl shadow-md relative">
              <div className="absolute top-3 right-3 bg-[#C79A32]/10 text-[#C79A32] font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded">
                Active Strategic Practice
              </div>
              <span className="text-[10px] font-mono uppercase text-[#1B75BB] block">Division 2</span>
              <h3 className="text-lg font-serif font-bold text-[#071B33] mt-1">Durotimi AI Advisory</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
                The strategic advisory division translating software engines into public sector roadmaps, corporate AI charters, and clinician adoption playbooks. We focus on structural alignment, clinical workflow governance, and organizational implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Advisory Themes & Engagement Models */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left column: Signature Advisory Themes */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
                  Focused Directives
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#071B33] mt-1">
                  Signature Advisory Themes
                </h3>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm text-gray-600">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-[#071B33] font-serif">National Cancer Registry Overhauls</h4>
                  <p className="text-gray-500 mt-1">Structuring modern, FHIR-compliant cancer registries that enable early identification, tracking, and clinical research matching.</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-[#071B33] font-serif">Board-Level AI Risk Mapping</h4>
                  <p className="text-gray-500 mt-1">Advising board members on ethical and liability models when purchasing or deploying clinical AI software.</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-[#071B33] font-serif">Interoperability Standards Setup</h4>
                  <p className="text-gray-500 mt-1">Crafting custom HL7 integration frameworks that synchronize patient feeds between diagnostic tools and EHRs.</p>
                </div>
              </div>
            </div>

            {/* Right column: Engagement Models */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
                  Collaboration Models
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#071B33] mt-1">
                  Our Engagement Models
                </h3>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-gray-600">
                <div className="border-l-2 border-[#1B75BB] pl-4">
                  <h4 className="font-semibold text-[#071B33] font-serif">Fixed-Scope Strategic Sprints</h4>
                  <p className="text-gray-500 mt-1">4 to 8 week diagnostic engagements focusing on localized readiness checks or regional data gap assessments.</p>
                </div>
                <div className="border-l-2 border-[#0F9D58] pl-4">
                  <h4 className="font-semibold text-[#071B33] font-serif">Transformation Program Governance</h4>
                  <p className="text-gray-500 mt-1">Multi-month partnerships providing structural oversight, vendor vetting, and validation audit setups.</p>
                </div>
                <div className="border-l-2 border-[#C79A32] pl-4">
                  <h4 className="font-semibold text-[#071B33] font-serif">Retained Fractional Executive Support</h4>
                  <p className="text-gray-500 mt-1">Ongoing monthly fractional executive services directly supporting CIOs, CEOs, or Ministers with peer vetting and strategy.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet Leadership CTA & Final CTA */}
      <section className="bg-[#071B33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Partner With Us
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Ready to design a responsible transformation program?
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            Discuss your clinical or system goals with senior experts who understand the medical, technical, and regulatory nuances of health AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
            <button
              onClick={() => {
                onSelectConsultation('Executive Strategy Consultation');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-5 py-3 rounded transition-colors cursor-pointer"
            >
              Book an Executive Strategy Consultation
            </button>
            <button
              onClick={() => onPageChange('leadership')}
              className="bg-white/5 hover:bg-white/10 text-white border border-[#A0AEC0]/30 text-xs font-semibold px-5 py-3 rounded transition-colors cursor-pointer"
            >
              Meet Practice Leadership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
