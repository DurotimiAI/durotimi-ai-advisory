/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Cpu, Activity, ShieldCheck, 
  Database, Workflow, Stethoscope, Briefcase, TrendingUp, 
  ArrowRight, FileText, CheckCircle2 
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function ServicesView({ onPageChange, onSelectConsultation }: ServicesViewProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>('executive-strategy');

  const toggleCard = (cardId: string) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="h-5 w-5 text-[#1B75BB]" />,
    Activity: <Activity className="h-5 w-5 text-[#1B75BB]" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-[#C79A32]" />,
    Database: <Database className="h-5 w-5 text-[#1B75BB]" />,
    Workflow: <Workflow className="h-5 w-5 text-[#0F9D58]" />,
    Stethoscope: <Stethoscope className="h-5 w-5 text-[#1B75BB]" />,
    Briefcase: <Briefcase className="h-5 w-5 text-[#1B75BB]" />,
    TrendingUp: <TrendingUp className="h-5 w-5 text-[#C79A32]" />
  };

  return (
    <div className="bg-[#F5F7FA]">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Practice Frameworks
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            AI Readiness, Cancer Data Modernization and Digital Health Advisory Services
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            We operate across eight high-impact service lines designed to move health ministries, clinical chains, and private equity sponsors from abstract ambition to measurable clinical value.
          </p>
        </div>
      </section>

      {/* Services Grid with Interactive Accordion Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
            Institutional Solutions
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] mt-1">
            Our Transformation Services
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Click on any of our strategic services to expand structural details, deliverables, and buyer problems.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {SERVICES_DATA.map((service, idx) => {
            const isExpanded = expandedCard === service.id;
            return (
              <div 
                key={service.id}
                className="bg-white border border-gray-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleCard(service.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#F5F7FA] flex items-center justify-center shrink-0">
                      {iconMap[service.iconName] || <Cpu className="h-5 w-5 text-[#1B75BB]" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Service {idx + 1}</span>
                      <h3 className="text-base md:text-lg font-serif font-bold text-[#071B33] hover:text-[#1B75BB] transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden md:inline-block text-xs font-mono text-[#A0AEC0]">
                      {isExpanded ? 'Collapse specifications' : 'Expand specifications'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 text-gray-600">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded specifications */}
                {isExpanded && (
                  <div className="p-6 md:p-8 bg-[#F5F7FA]/40 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 transition-all">
                    
                    {/* Left Column: Context & What We Do */}
                    <div className="md:col-span-7 space-y-5">
                      {/* Buyer Problem */}
                      <div className="bg-white border border-gray-100 p-4 rounded-lg relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-400 rounded-l-lg" />
                        <span className="text-[10px] uppercase font-mono tracking-wider text-red-600 font-bold block">The Challenge We Solve</span>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed italic">
                          "{service.buyerProblem}"
                        </p>
                      </div>

                      {/* What We Do */}
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#1B75BB] font-bold block">Our Intervention</span>
                        <p className="text-xs md:text-sm text-gray-700 mt-1.5 leading-relaxed">
                          {service.whatWeDo}
                        </p>
                      </div>

                      {/* Best Suited For */}
                      <div className="pt-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block">Best Suited For</span>
                        <p className="text-xs font-semibold text-[#071B33] mt-1">
                          {service.bestSuitedFor}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Deliverables & CTA */}
                    <div className="md:col-span-5 bg-white border border-gray-200/80 p-5 rounded-lg flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block mb-3">Typical Deliverables</span>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-700 leading-normal">
                              <CheckCircle2 className="h-4 w-4 text-[#0F9D58] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
                        <button
                          onClick={() => {
                            onSelectConsultation(service.title);
                            onPageChange('contact');
                          }}
                          className="w-full bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold py-2.5 rounded transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Discuss transformation programme</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            onSelectConsultation('AI Readiness Assessment');
                            onPageChange('contact');
                          }}
                          className="w-full bg-[#071B33] hover:bg-[#071B33]/90 text-white text-xs font-semibold py-2.5 rounded transition-all text-center cursor-pointer"
                        >
                          Request diagnostic audit
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Footnote */}
      <section className="bg-[#071B33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Tailored Scoping
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Not sure which framework matches your objectives?
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            We provide custom scoping workshops to map your technical, operational, or policy requirements into an executable pilot framework.
          </p>
          <div className="pt-3">
            <button
              onClick={() => {
                onSelectConsultation('Executive Strategy Consultation');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors cursor-pointer"
            >
              Discuss a Transformation Programme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
