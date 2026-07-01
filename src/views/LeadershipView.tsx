/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Briefcase, ChevronRight, CheckCircle2, Star, ShieldCheck, Mail } from 'lucide-react';
import doyinHeadshot from '../assets/images/doyin_headshot_1782835452085.png';

interface LeadershipViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function LeadershipView({ onPageChange, onSelectConsultation }: LeadershipViewProps) {
  const credibilityBlocks = [
    { title: "Founder and CEO", desc: "Durotimi AI Technologies Ltd" },
    { title: "Executive Director", desc: "Durotimi AI Advisory" },
    { title: "Subcommittee Chair", desc: "Cancer Data, AI and Digital Health Subcommittee within Nigeria’s National Cancer Control Programme Technical Working Group (NCCP-TWG)" },
    { title: "Advisory Strategy", desc: "Healthcare AI and digital transformation strategist advising global boards and ministries" },
    { title: "Global Footprint", desc: "Over 25 years of clinical and enterprise transformation experience across Africa, Europe and North America" }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Practice Leadership
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Strategic leadership at the intersection of AI, healthcare transformation and cancer data modernization.
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Durotimi AI Advisory is led by senior clinical innovation executives with active government and technical advisory mandates.
          </p>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual avatar placeholder & Credibility Quick List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-gray-200 p-8 rounded-2xl bg-[#F5F7FA] text-center relative overflow-hidden flex flex-col items-center">
              {/* Real Headshot */}
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white mb-4 shrink-0">
                <img 
                  src={doyinHeadshot} 
                  alt="Doyin Bademosi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#071B33]">Doyin Bademosi</h3>
              <p className="text-xs text-gray-500 font-mono">Founder & CEO, Durotimi AI Technologies<br/>Executive Director, Durotimi AI Advisory</p>
              
              <div className="w-full mt-6 pt-5 border-t border-gray-200 space-y-3.5 text-left">
                <div>
                  <span className="text-[9px] uppercase font-mono text-gray-400 block">Current Focus</span>
                  <p className="text-xs font-semibold text-[#071B33] leading-relaxed">National oncology registry modernization and responsible clinical algorithm adoption.</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono text-gray-400 block">Committees</span>
                  <p className="text-xs font-semibold text-[#1B75BB] leading-relaxed">Chair of the Cancer Data, AI and Digital Health Subcommittee, NCCP-TWG.</p>
                </div>
              </div>
            </div>

            {/* Micro contact card */}
            <div className="bg-[#E8F3FB] p-5 rounded-xl border border-[#1B75BB]/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#1B75BB] block">Strategic Channels</span>
                <p className="text-xs text-gray-700 font-medium mt-0.5">Request a speaking engagement or ministerial consultation.</p>
              </div>
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white p-2.5 rounded transition-all focus:outline-none shrink-0"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Credentials List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">Executive Biography</span>
              <p className="font-medium text-[#071B33]">
                Doyin Bademosi is Founder and Chief Executive Officer of Durotimi AI Technologies and Executive Director of Durotimi AI Advisory. He is a healthcare innovation executive, AI strategist and technology entrepreneur with more than 25 years of leadership experience across healthcare innovation, enterprise technology, artificial intelligence and public sector transformation.
              </p>
              <p>
                He advises governments, healthcare executives, investors, researchers and development organisations on leveraging AI, cancer data modernization and digital health to improve healthcare delivery and create sustainable institutional value.
              </p>
              <p>
                Doyin's work bridges clinical execution with legislative guidelines. His unique mandate in emerging economies focuses on building modern oncological structures that capture and curate longitudinal cancer cases, giving local clinical groups equal standing on the global research stage.
              </p>
            </div>

            {/* Credibility blocks */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">Practice Credentials</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {credibilityBlocks.map((block, idx) => (
                  <div key={idx} className="border border-gray-100 p-4.5 rounded-lg bg-[#F5F7FA] flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1B75BB]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1B75BB]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-[#071B33]">{block.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-normal">{block.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership CTA */}
      <section className="bg-[#071B33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Executive Consultation
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Engage Doyin for strategic advisory or speaking.
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            Contact Durotimi AI Advisory to organize a dedicated board workshop, ministerial strategic briefing, or technology review.
          </p>
          <div className="pt-3">
            <button
              onClick={() => {
                onSelectConsultation('Executive Strategy Consultation');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors cursor-pointer"
            >
              Book an Executive Strategy Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
