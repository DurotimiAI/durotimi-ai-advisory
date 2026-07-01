/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, Cpu, Activity, ShieldCheck, Database, 
  Workflow, Stethoscope, Globe, Building, Shield, 
  Award, TrendingUp, BookOpen, Download, HelpCircle,
  FileText, Briefcase, CheckCircle2, AlertTriangle, AlertCircle
} from 'lucide-react';
import AbstractVisual from '../components/AbstractVisual';
import InteractiveAssessment from '../components/InteractiveAssessment';
import { SERVICES_DATA, SECTORS_DATA, PATHWAY_DATA, ENGAGEMENT_THEMES } from '../data';
import doyinHeadshot from '../assets/images/doyin_headshot_1782835452085.png';

interface HomeViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function HomeView({ onPageChange, onSelectConsultation }: HomeViewProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [notification, setNotification] = useState<string | null>(null);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadState('downloading');
    setTimeout(() => {
      setDownloadState('completed');
      setNotification('Executive Briefing Download Simulation: "AI Readiness in Healthcare: A Board-Level Checklist" downloaded successfully. In production, this trigger connects to a secure file CDN, HubSpot form, or corporate CRM capture endpoint.');
      setTimeout(() => {
        setNotification(null);
        setDownloadState('idle');
      }, 7000);
    }, 1500);
  };

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="h-5 w-5 text-[#1B75BB]" />,
    Activity: <Activity className="h-5 w-5 text-[#1B75BB]" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-[#C79A32]" />,
    Database: <Database className="h-5 w-5 text-[#1B75BB]" />,
    Workflow: <Workflow className="h-5 w-5 text-[#0F9D58]" />,
    Stethoscope: <Stethoscope className="h-5 w-5 text-[#1B75BB]" />,
    Globe: <Globe className="h-5 w-5 text-[#1B75BB]" />,
    Building: <Building className="h-5 w-5 text-[#1B75BB]" />,
    Shield: <Shield className="h-5 w-5 text-[#1B75BB]" />,
    Award: <Award className="h-5 w-5 text-[#0F9D58]" />,
    TrendingUp: <TrendingUp className="h-5 w-5 text-[#C79A32]" />,
    BookOpen: <BookOpen className="h-5 w-5 text-[#1B75BB]" />,
    Briefcase: <Briefcase className="h-5 w-5 text-[#1B75BB]" />
  };

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-[#071B33] text-white py-16 md:py-24 border-b border-[#1b314d] relative overflow-hidden">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1B75BB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B75BB]/10 border border-[#1B75BB]/30">
                <span className="w-2 h-2 rounded-full bg-[#C79A32]" />
                <span className="text-xs uppercase tracking-wider font-mono text-[#C79A32] font-semibold">
                  Strategic Practice
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-white leading-tight">
                Durotimi AI Advisory
              </h1>
              
              <h2 className="text-xl md:text-2xl font-serif text-[#E8F3FB] leading-relaxed max-w-2xl font-light">
                Helping healthcare leaders move from AI ambition to responsible implementation.
              </h2>
              
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
                Durotimi AI Advisory partners with governments, health systems, insurers, investors, research institutions and development partners to design and implement AI-enabled healthcare transformation programmes that strengthen cancer data systems, improve clinical decision-making and create measurable institutional value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <button
                  onClick={() => {
                    onSelectConsultation('Executive Strategy Consultation');
                    onPageChange('contact');
                  }}
                  className="bg-[#1B75BB] hover:bg-[#1B75BB]/95 text-white text-xs md:text-sm font-semibold px-6 py-3.5 rounded transition-all tracking-wide shadow-lg shadow-[#1B75BB]/15 text-center cursor-pointer"
                >
                  Book an Executive Strategy Consultation
                </button>
                <button
                  onClick={() => {
                    onPageChange('insights');
                  }}
                  className="border border-[#A0AEC0]/40 hover:border-white text-white text-xs md:text-sm font-semibold px-6 py-3.5 rounded transition-all tracking-wide text-center bg-white/5 hover:bg-white/10 cursor-pointer"
                >
                  Download Capability Statement
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5">
              <AbstractVisual />
            </div>

          </div>
        </div>

        {/* Credibility Strip */}
        <div className="bg-[#041122]/80 border-t border-[#1b314d]/40 mt-16 md:mt-20 py-4.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-6 text-[11px] md:text-xs uppercase font-mono tracking-widest text-[#A0AEC0] text-center">
              <span className="hover:text-white transition-colors">Strategic Advisory</span>
              <span className="text-[#C79A32]">•</span>
              <span className="hover:text-white transition-colors">AI Readiness</span>
              <span className="text-[#C79A32]">•</span>
              <span className="hover:text-white transition-colors">Cancer Data Modernization</span>
              <span className="text-[#C79A32]">•</span>
              <span className="hover:text-white transition-colors">Digital Health Transformation</span>
              <span className="text-[#C79A32]">•</span>
              <span className="hover:text-white transition-colors">Clinical AI Implementation</span>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: PROBLEM */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
                The Leadership Imperative
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#071B33] tracking-tight mt-2 leading-tight">
                Healthcare AI is no longer a technology question. It is a leadership challenge.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                Healthcare organisations are under pressure to improve outcomes, reduce delays, strengthen data systems and deploy artificial intelligence responsibly. Yet many institutions are not structurally ready for AI adoption.
              </p>
              <p className="font-medium text-[#202A36]">
                Fragmented data, weak governance, unclear operating models, limited interoperability and poor clinical workflow integration can prevent promising AI initiatives from delivering measurable impact.
              </p>
              <p>
                Durotimi AI Advisory helps leaders build the strategic, operational and governance foundations required for AI-enabled transformation.
              </p>
            </div>
          </div>

          {/* Three Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="border border-gray-100 rounded-xl p-6 bg-[#F5F7FA] hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-red-100/50 flex items-center justify-center mb-5 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#071B33] mb-2">
                  1. Fragmented Data
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  Limits insight, reporting, early detection and AI readiness. Patient records locked in siloed legacy structures choke transformation efforts before they start.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200/50">
                <span className="text-[10px] uppercase font-mono tracking-wider text-red-700 font-semibold block">Risk Profile: Architectural</span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 bg-[#F5F7FA] hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#C79A32]/10 flex items-center justify-center mb-5 text-[#C79A32]">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#071B33] mb-2">
                  2. Weak Governance
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  Increases ethical, clinical, regulatory and operational risk. Lacking interdisciplinary checks triggers liability and threatens clinical accuracy.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200/50">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block">Risk Profile: Operational</span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 bg-[#F5F7FA] hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-blue-100/50 flex items-center justify-center mb-5 text-[#1B75BB]">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#071B33] mb-2">
                  3. Poor Implementation
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  Prevents AI from moving beyond pilots into measurable impact. Isolated dashboard sandboxes fail to align with native physician workflows.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200/50">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#1B75BB] font-semibold block">Risk Profile: Adoption</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3: WHAT WE DO */}
      <section className="bg-[#F5F7FA] py-16 md:py-24 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
              Our Advisory Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#071B33] mt-2 tracking-tight">
              Strategic advisory for healthcare transformation.
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
              We support healthcare leaders across six priority areas.
            </p>
          </div>

          {/* Six Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <div 
                key={service.id} 
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#1B75BB]/20 transition-all group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual Top Ribbon Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#1B75BB] transition-colors" />
                
                <div>
                  <div className="w-10 h-10 rounded bg-[#E8F3FB] flex items-center justify-center mb-5 group-hover:bg-[#1B75BB]/10 transition-colors">
                    {iconMap[service.iconName] || <Cpu className="h-5 w-5 text-[#1B75BB]" />}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#071B33] group-hover:text-[#1B75BB] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                  <button 
                    onClick={() => onPageChange('services')}
                    className="text-xs font-semibold text-[#1B75BB] group-hover:text-[#071B33] flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    View Framework <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 font-medium">Practice 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onPageChange('services')}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#1B75BB] hover:text-[#071B33] transition-colors focus:outline-none group hover:underline"
            >
              Explore all our custom transformation services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>


      {/* INTERACTIVE COMPONENT ANCHOR */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-bold block">
              Assessment Portal
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#071B33] mt-2">
              Assess Your Organisational AI Maturity
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Answer 4 strategic questions mapped to institutional standards for an instant high-level readiness verdict.
            </p>
          </div>
          <InteractiveAssessment onNavigateToContact={(type) => {
            onSelectConsultation(type);
            onPageChange('contact');
            setTimeout(() => {
              const el = document.getElementById('contact-form-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} />
        </div>
      </section>


      {/* SECTION 4: WHO WE SERVE */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
              Our Target Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#071B33] mt-2 tracking-tight">
              Built for leaders shaping the future of healthcare.
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
              We guide key stakeholders across six core segments to design and launch highly integrated transformation pathways.
            </p>
          </div>

          {/* Six Segment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SECTORS_DATA.map((sector, idx) => (
              <div 
                key={sector.id}
                className="border border-gray-100 rounded-xl p-6 bg-white hover:shadow-md hover:border-gray-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#F5F7FA] flex items-center justify-center mb-5 text-[#1B75BB] group-hover:bg-[#1B75BB]/10 group-hover:text-[#1B75BB] transition-colors">
                    {iconMap[sector.iconName] || <Building className="h-5 w-5" />}
                  </div>
                  <h3 className="text-base md:text-lg font-serif font-semibold text-[#071B33] mb-2 group-hover:text-[#1B75BB] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4">
                  <button 
                    onClick={() => onPageChange('sectors')}
                    className="text-xs font-semibold text-[#1B75BB] hover:text-[#071B33] flex items-center gap-1 transition-colors"
                  >
                    Explore Sectors <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5: ADVISORY PATHWAY */}
      <section className="bg-[#071B33] text-white py-16 md:py-24 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
              The Implementation Pathway
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mt-2 tracking-tight">
              From ambition to implementation.
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-3">
              Our structured, clinical-grade methodology ensures projects stay on track, safe, and value-focused.
            </p>
          </div>

          {/* Process Diagram Stages (1-4, matching home requirements, let's list 4 matching home but referencing our 5 methods nicely) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            
            {/* Visual connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#1B75BB] via-[#C79A32] to-[#0F9D58] opacity-40 pointer-events-none z-0" />
            
            {PATHWAY_DATA.slice(0, 4).map((stage, idx) => (
              <div key={stage.number} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-[#0d2543] border-2 border-[#1b314d] flex items-center justify-center mb-5 group-hover:border-[#1B75BB] transition-colors relative">
                  <span className="text-base font-serif font-bold text-[#C79A32]">0{stage.number}</span>
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#1B75BB] flex items-center justify-center text-[8px] text-white font-bold">
                    ✓
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-serif font-semibold text-white group-hover:text-[#C79A32] transition-colors mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs px-2">
                  {stage.description}
                </p>
              </div>
            ))}

          </div>

          <div className="text-center mt-16 pt-8 border-t border-[#1b314d]/60">
            <button
              onClick={() => onPageChange('approach')}
              className="bg-white/5 hover:bg-white/10 text-white border border-[#A0AEC0]/30 hover:border-white text-xs font-semibold px-5 py-3 rounded transition-all cursor-pointer"
            >
              Learn More About Our Transformation Method
            </button>
          </div>

        </div>
      </section>


      {/* SECTION 6: FEATURED ENGAGEMENT THEMES */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
              Engagement Models
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#071B33] mt-2 tracking-tight">
              Advisory themes with immediate institutional relevance.
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
              Flexible, results-oriented entry points designed to address specific governance, strategy, or registry challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ENGAGEMENT_THEMES.map((theme, idx) => (
              <div 
                key={theme.id}
                className="border border-gray-200/60 rounded-xl p-6 bg-[#F5F7FA] hover:bg-white hover:border-[#1B75BB]/20 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-[#1B75BB] px-2 py-0.5 rounded bg-[#1B75BB]/5 border border-[#1B75BB]/10">
                      {theme.scope}
                    </span>
                    <span className="text-xs font-mono text-gray-400 font-semibold">{theme.duration}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-serif font-semibold text-[#071B33] mb-2.5">
                    {theme.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/40 mt-4">
                  <button 
                    onClick={() => {
                      onSelectConsultation(theme.title);
                      onPageChange('contact');
                    }}
                    className="text-xs font-semibold text-[#1B75BB] group-hover:text-[#071B33] flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    Discuss Theme <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 7: LEADERSHIP */}
      <section className="bg-[#F5F7FA] py-16 md:py-24 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Leadership Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">
                Practice Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#071B33] tracking-tight leading-tight">
                Led by healthcare transformation and AI leadership experience.
              </h2>
              
              <div className="text-gray-600 text-sm md:text-base space-y-4 leading-relaxed">
                <p>
                  Durotimi AI Advisory is led by <strong>Doyin Bademosi</strong>, Founder and CEO of Durotimi AI Technologies and Executive Director of Durotimi AI Advisory.
                </p>
                <p>
                  Doyin brings more than 25 years of leadership experience across healthcare innovation, enterprise technology, artificial intelligence and public sector transformation. He advises governments, healthcare executives, investors, researchers and development organisations on leveraging AI, cancer data modernization and digital health to improve healthcare delivery and create sustainable institutional value.
                </p>
                <p>
                  He currently serves as <strong>Chair of the Cancer Data, AI and Digital Health Subcommittee</strong> within Nigeria’s National Cancer Control Programme Technical Working Group, where he contributes to national strategy development for cancer data modernization and responsible AI adoption in oncology.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onPageChange('leadership')}
                  className="bg-[#071B33] hover:bg-[#071B33]/90 text-white text-xs font-semibold px-5 py-3 rounded transition-all cursor-pointer"
                >
                  Meet Our Leadership
                </button>
              </div>
            </div>

            {/* Leadership Profile Blocks */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8F3FB] rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border border-gray-200 shrink-0">
                    <img 
                      src={doyinHeadshot} 
                      alt="Doyin Bademosi" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#071B33]">Doyin Bademosi</h3>
                    <p className="text-xs text-gray-500 font-mono">Executive Director, Durotimi AI Advisory</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A32] shrink-0 mt-2" />
                    <span>Founder and CEO, Durotimi AI Technologies</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A32] shrink-0 mt-2" />
                    <span>Executive Director, Durotimi AI Advisory</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A32] shrink-0 mt-2" />
                    <span>Chair, Cancer Data, AI and Digital Health Subcommittee, NCCP-TWG</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A32] shrink-0 mt-2" />
                    <span>Healthcare AI and digital transformation strategist</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A32] shrink-0 mt-2" />
                    <span>Experience across Africa, Europe and North America</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 8: INSIGHTS LEAD MAGNET */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#071B33] text-white rounded-2xl p-6 md:p-10 shadow-xl border border-[#1b314d]/60 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Visual background patterns */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#1B75BB]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 md:max-w-xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
                Featured Executive Publication
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight">
                Executive insight for healthcare leaders.
              </h2>
              
              <div className="border border-[#C79A32]/30 rounded-lg p-4 bg-white/5 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#C79A32]/15 text-[#C79A32] text-[10px] font-mono uppercase font-bold">
                  PDF Checklist Briefing
                </span>
                <h3 className="text-lg font-serif font-medium text-[#E8F3FB]">
                  AI Readiness in Healthcare: A Board-Level Checklist
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  A concise executive brief helping healthcare leaders understand the strategic, governance, data and implementation conditions required for responsible AI adoption.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto text-center md:text-left space-y-4">
              {/* Fake form input to mimic high fidelity capture as requested */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-mono text-[#A0AEC0] uppercase tracking-wide">Enter Business Email</label>
                <input 
                  type="email" 
                  placeholder="name@organisation.com" 
                  className="w-full text-xs p-2.5 rounded bg-[#092241] border border-[#1b314d] text-white focus:outline-none focus:border-[#1B75BB]" 
                />
              </div>
              <button
                onClick={handleDownload}
                disabled={downloadState === 'downloading'}
                className="w-full md:w-auto bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-6 py-3.5 rounded transition-all tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {downloadState === 'idle' && (
                  <>
                    <Download className="h-4 w-4 text-[#C79A32]" />
                    <span>Download Executive Brief</span>
                  </>
                )}
                {downloadState === 'downloading' && (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    <span>Preparing Document...</span>
                  </>
                )}
                {downloadState === 'completed' && (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-[#0F9D58]" />
                    <span>Check Your Download Folder</span>
                  </>
                )}
              </button>
              <span className="block text-[10px] text-gray-400 font-mono text-center">
                {/* COMMENT EXPLANATION */}
                {/* Note: In production, this should connect to HubSpot, CRM forms, or email marketing automation */}
                Institutional briefing &bull; Secure PDF delivery
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 9: FINAL CTA */}
      <section className="bg-[#071B33] text-white py-20 relative overflow-hidden">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1B75BB_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Start Your Transformation Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-tight text-[#E8F3FB]">
            Build the future of healthcare with confidence.
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are beginning your AI journey, modernizing cancer data infrastructure, developing a national digital health programme or evaluating a strategic healthcare investment, Durotimi AI Advisory provides the strategic leadership and implementation expertise required to move from vision to measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onSelectConsultation('Executive Strategy Consultation');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs md:text-sm font-semibold px-6 py-3.5 rounded transition-colors cursor-pointer"
            >
              Book an Executive Strategy Consultation
            </button>
            <button
              onClick={() => {
                onSelectConsultation('AI Readiness Assessment');
                onPageChange('contact');
              }}
              className="bg-white/5 hover:bg-white/10 text-white border border-[#A0AEC0]/30 hover:border-white text-xs md:text-sm font-semibold px-6 py-3.5 rounded transition-colors cursor-pointer"
            >
              Request an AI Readiness Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Premium Notification Toast */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 max-w-md bg-[#071B33] border-l-4 border-[#C79A32] text-white p-4.5 rounded-r-lg shadow-2xl flex gap-3 animate-pulse">
          <div className="w-5 h-5 rounded-full bg-[#C79A32]/15 flex items-center justify-center shrink-0 text-[#C79A32] mt-0.5">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C79A32] font-semibold">Institutional System Action</h4>
            <p className="text-xs text-gray-200 leading-relaxed">{notification}</p>
            <button 
              onClick={() => setNotification(null)}
              className="text-[10px] text-gray-400 hover:text-white font-semibold underline mt-1.5 block cursor-pointer"
            >
              Dismiss Notification
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
