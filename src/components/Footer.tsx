/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Globe, Linkedin, ArrowUp, Activity } from 'lucide-react';
import DurotimiLogo from './DurotimiLogo';

interface FooterProps {
  onPageChange: (pageId: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { id: 'advisory', label: 'Advisory' },
    { id: 'services', label: 'Services' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'approach', label: 'Approach' },
    { id: 'insights', label: 'Insights' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#071B33] border-t border-[#1b314d] text-[#A0AEC0] font-sans text-sm relative overflow-hidden">
      {/* Visual Gold/Navy Accenting Bar */}
      <div className="h-1 bg-gradient-to-r from-[#1B75BB] via-[#C79A32] to-[#0F9D58]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Logo & Narrative Column */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => { onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center focus:outline-none cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Durotimi AI Advisory Home"
            >
              <DurotimiLogo className="h-10 md:h-12 w-auto" light={false} />
            </button>
            
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-sm">
              Durotimi AI Advisory is a strategic advisory practice of Durotimi AI Technologies Ltd. We help healthcare leaders design and implement responsible AI-enabled transformation programmes that strengthen cancer data systems, improve clinical decision-making, and create measurable institutional value.
            </p>

            <div className="pt-2">
              <span className="block text-[10px] uppercase font-mono tracking-wider text-[#C79A32]">Geographical Practices</span>
              <p className="text-xs text-gray-400 mt-1">
                Ireland &nbsp;•&nbsp; United States &nbsp;•&nbsp; Nigeria
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-semibold text-xs uppercase tracking-wider">Practice Areas</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => { onPageChange(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors text-xs text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-serif font-semibold text-xs uppercase tracking-wider">Contact Practice</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#1B75BB]" />
                <a href="mailto:advisory@durotimi.ai" className="hover:text-white transition-colors">
                  advisory@durotimi.ai
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-[#0F9D58]" />
                <a href="https://www.durotimi.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.durotimi.ai
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin className="h-4 w-4 text-[#C79A32]" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn: Durotimi AI Advisory
                </a>
              </li>
            </ul>

            <div className="pt-2 bg-[#091d37] border border-[#1b314d]/50 p-3 rounded">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white block">Institutional Document</span>
              <p className="text-[11px] text-gray-400 mt-0.5">
                You can download our Capability Statement to understand our frameworks and track record.
              </p>
              <button 
                onClick={() => onPageChange('insights')}
                className="text-[11px] text-[#C79A32] hover:text-[#C79A32]/90 font-semibold underline mt-2 block"
              >
                Download Capability Statement
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Copyright Row */}
        <div className="mt-12 pt-8 border-t border-[#1b314d]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} Durotimi AI Technologies Ltd. All rights reserved.</p>
            <p className="mt-1 text-[10px]">
              Durotimi AI Advisory &bull; Strategic Advisory for AI, Cancer Data and Digital Health Transformation &bull; Ireland | United States | Nigeria
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <button
              onClick={scrollToTop}
              className="ml-2 bg-[#1b314d] hover:bg-[#1B75BB] text-white p-2 rounded transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
