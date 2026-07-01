/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Activity } from 'lucide-react';
import DurotimiLogo from './DurotimiLogo';

interface HeaderProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'advisory', label: 'Advisory' },
    { id: 'services', label: 'Services' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'approach', label: 'Approach' },
    { id: 'insights', label: 'Insights' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro bar for Premium Strategic Credibility */}
      <div className="bg-[#041122] border-b border-[#1b314d]/30 text-white py-1 px-4 text-[10px] uppercase font-mono tracking-widest text-center relative z-50">
        <span className="opacity-70">Ireland</span>
        <span className="mx-2 text-[#C79A32]">•</span>
        <span className="opacity-70">United States</span>
        <span className="mx-2 text-[#C79A32]">•</span>
        <span className="opacity-70">Nigeria</span>
        <span className="mx-2 text-[#C79A32]">•</span>
        <span className="text-[#C79A32] font-semibold">Strategic Healthcare AI Transformation Practice</span>
      </div>

      <header 
        id="app-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#071B33]/95 backdrop-blur-md border-b border-[#1b314d] py-3 shadow-lg shadow-black/10' 
            : 'bg-[#071B33] border-b border-[#1b314d]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo text */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center focus:outline-none cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Durotimi AI Advisory Home"
            >
              <DurotimiLogo className="h-10 md:h-12 w-auto" light={false} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-sm font-sans font-medium tracking-wide transition-colors relative py-1.5 focus:outline-none cursor-pointer ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#A0AEC0] hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C79A32]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Primary CTA button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-4.5 py-2.5 rounded transition-all tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 transform cursor-pointer"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#A0AEC0] hover:text-white p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-[#1B75BB]"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#071B33] border-b border-[#1b314d] shadow-2xl z-50">
            <div className="px-4 pt-3 pb-6 space-y-2">
              <button
                onClick={() => handleLinkClick('home')}
                className={`w-full text-left py-2.5 px-3 rounded text-sm font-medium block transition-colors ${
                  activePage === 'home' 
                    ? 'bg-[#1b314d] text-white' 
                    : 'text-[#A0AEC0] hover:bg-[#1b314d]/50 hover:text-white'
                }`}
              >
                Home
              </button>
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-2.5 px-3 rounded text-sm font-medium block transition-colors ${
                      isActive 
                        ? 'bg-[#1b314d] text-white' 
                        : 'text-[#A0AEC0] hover:bg-[#1b314d]/50 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#1b314d]/60 px-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full bg-[#1B75BB] text-center hover:bg-[#1B75BB]/90 text-white text-xs font-semibold py-3 rounded block transition-all tracking-wide"
                >
                  Book an Executive Strategy Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
