/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, FileText, Check, Download, CheckCircle2 } from 'lucide-react';
import { INSIGHTS_DATA } from '../data';

interface InsightsViewProps {
  onPageChange: (pageId: string) => void;
  onSelectConsultation: (type: string) => void;
}

export default function InsightsView({ onPageChange, onSelectConsultation }: InsightsViewProps) {
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [notification, setNotification] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadState('downloading');
    setTimeout(() => {
      setDownloadState('completed');
      setNotification(`Executive Briefing Download Simulation: "${title}" downloaded successfully. In production, this trigger connects to a secure PDF CDN, HubSpot email capture, or client CRM database.`);
      setTimeout(() => {
        setNotification(null);
        setDownloadState('idle');
      }, 7000);
    }, 1200);
  };

  const activeInsight = INSIGHTS_DATA.find(i => i.id === selectedInsight);

  // Helper to parse bold markdown tags and return React nodes
  const parseBoldText = (text: string) => {
    if (!text.includes('**')) return text;
    const parts = text.split('**');
    return parts.map((part, idx) => {
      if (idx % 2 === 1) {
        return <strong key={idx} className="font-semibold text-[#071B33]">{part}</strong>;
      }
      return part;
    });
  };

  // Helper to parse custom simplified markdown content into beautiful React elements
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      const trimmed = line.trim();
      
      // Headers
      if (trimmed.startsWith('## ')) {
        const headerText = trimmed.substring(3).replace(/^\*\*|\*\*$/g, '').trim();
        return (
          <h2 key={index} className="text-xl font-serif font-bold text-[#071B33] mt-8 mb-3.5 border-b border-gray-100 pb-1.5">
            {parseBoldText(headerText)}
          </h2>
        );
      }
      
      if (trimmed.startsWith('### ')) {
        const headerText = trimmed.substring(4).replace(/^\*\*|\*\*$/g, '').trim();
        return (
          <h3 key={index} className="text-base md:text-lg font-serif font-semibold text-[#071B33] mt-6 mb-2.5">
            {parseBoldText(headerText)}
          </h3>
        );
      }

      // Checklists
      if (trimmed.startsWith('*   [ ]') || trimmed.startsWith('* [ ]')) {
        const textOnly = trimmed.replace(/^\*[ \t]+\[[ ]\]/, '').trim();
        return (
          <div key={index} className="flex items-start gap-3 my-2.5 pl-1">
            <div className="w-5 h-5 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700 leading-relaxed">{parseBoldText(textOnly)}</span>
          </div>
        );
      }

      // Standard lists
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const textOnly = trimmed.substring(2).trim();
        return (
          <div key={index} className="flex items-start gap-2.5 my-2 pl-2">
            <span className="text-[#1B75BB] font-bold text-sm shrink-0 mt-0.5">&bull;</span>
            <span className="text-sm text-gray-700 leading-relaxed">{parseBoldText(textOnly)}</span>
          </div>
        );
      }

      // Ordered list items
      const orderedMatch = trimmed.match(/^(\d+)\.[ \t]+(.*)/);
      if (orderedMatch) {
        const num = orderedMatch[1];
        const textOnly = orderedMatch[2];
        return (
          <div key={index} className="flex items-start gap-3 my-3 pl-1">
            <span className="font-mono font-bold text-xs text-[#1B75BB] bg-[#1B75BB]/5 px-2 py-0.5 rounded mt-0.5">{num}</span>
            <span className="text-sm text-gray-700 leading-relaxed">{parseBoldText(textOnly)}</span>
          </div>
        );
      }

      // Empty spacing
      if (trimmed === '') {
        return <div key={index} className="h-2" />;
      }

      // Standard paragraphs
      return (
        <p key={index} className="text-sm text-gray-600 leading-relaxed my-2">
          {parseBoldText(line)}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Practice Publications
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Healthcare AI, Cancer Data and Digital Health Insights
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Concise executive briefs and strategic checklists helping boards, health systems, and development agencies govern and deploy healthcare AI safely.
          </p>
        </div>
      </section>

      {/* Featured Lead Magnet Box */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 shadow-sm max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#1B75BB]" />
          <div className="space-y-3 md:max-w-xl">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#C79A32]/10 text-[#C79A32] text-[10px] font-mono uppercase font-bold">
              Featured Board Checklist
            </span>
            <h3 className="text-xl font-serif font-bold text-[#071B33]">
              AI Readiness in Healthcare: A Board-Level Checklist
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              A comprehensive executive blueprint mapping out the specific data compliance pipelines, ethical committees, and EMR integration milestones required for secure deployment.
            </p>
          </div>
          <button
            onClick={() => handleDownload('AI Readiness in Healthcare: A Board-Level Checklist')}
            className="w-full md:w-auto bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-5 py-3 rounded flex items-center justify-center gap-1.5 shrink-0 transition-all cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF Checklist</span>
          </button>
        </div>

        {/* Insights Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xs uppercase font-mono tracking-widest text-gray-400 mb-4 block">Executive Briefings Index</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSIGHTS_DATA.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-gray-200/60 rounded-xl p-6 hover:shadow-md hover:border-[#1B75BB]/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] uppercase font-mono text-[#1B75BB] px-2 py-0.5 rounded bg-[#1B75BB]/5 border border-[#1B75BB]/10">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-serif font-bold text-[#071B33] group-hover:text-[#1B75BB] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedInsight(item.id)}
                    className="text-xs font-semibold text-[#1B75BB] group-hover:text-[#071B33] flex items-center gap-1 focus:outline-none"
                  >
                    <span>Read Full Briefing</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={() => handleDownload(item.title)}
                    className="text-gray-400 hover:text-[#1B75BB] focus:outline-none"
                    title="Download Briefing PDF"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Document Reader Modal */}
      {selectedInsight && activeInsight && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-gray-100 flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#071B33] text-white rounded-t-2xl">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#C79A32] block font-bold">Durotimi Publications Group</span>
                <h3 className="text-lg md:text-xl font-serif font-semibold mt-1 max-w-[550px] leading-snug">{activeInsight.title}</h3>
                <div className="flex gap-4 text-[10px] font-mono text-gray-300 mt-2">
                  <span>{activeInsight.category}</span>
                  <span>&bull;</span>
                  <span>{activeInsight.date}</span>
                  <span>&bull;</span>
                  <span>{activeInsight.readTime}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedInsight(null)}
                className="text-gray-300 hover:text-white p-1 rounded-full border border-gray-100/20 bg-white/5 cursor-pointer focus:outline-none"
                aria-label="Close brief"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed font-sans">
              
              {/* Actual briefing text rendered beautifully */}
              <div className="prose max-w-none space-y-2">
                {renderContent(activeInsight.content)}
              </div>

              {/* End Note */}
              <div className="border-t border-gray-100 pt-5 mt-6 bg-[#F5F7FA] p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Publication Citation</span>
                  <p className="text-xs text-gray-500 font-medium">Durotimi AI Advisory Briefings Group &bull; Ireland | USA | Nigeria</p>
                </div>
                <button
                  onClick={() => handleDownload(activeInsight.title)}
                  disabled={downloadState === 'downloading'}
                  className="bg-[#071B33] hover:bg-[#071B33]/90 text-white text-xs font-semibold px-4.5 py-2.5 rounded transition-all flex items-center gap-1.5 shrink-0 focus:outline-none cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Local PDF</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between rounded-b-2xl gap-3">
              <span className="text-[10px] text-gray-400 font-mono italic">Document Curated securely for healthcare leaders.</span>
              <button
                onClick={() => {
                  onSelectConsultation(activeInsight.title);
                  setSelectedInsight(null);
                  onPageChange('contact');
                }}
                className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-5 py-2 rounded transition-colors cursor-pointer"
              >
                Discuss with Advisory Team
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Publications Action Strip */}
      <section className="bg-[#071B33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Custom Research
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Commission a bespoke study or gap assessment
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            We author private whitepapers and diagnostic audits for governments, investment syndicates, and health system boards.
          </p>
          <div className="pt-3">
            <button
              onClick={() => {
                onSelectConsultation('Fractional Chief AI Officer');
                onPageChange('contact');
              }}
              className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-6 py-3.5 rounded transition-colors cursor-pointer"
            >
              Discuss a Transformation Programme
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
