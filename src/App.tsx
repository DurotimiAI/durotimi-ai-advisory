/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AdvisoryView from './views/AdvisoryView';
import ServicesView from './views/ServicesView';
import SectorsView from './views/SectorsView';
import ApproachView from './views/ApproachView';
import LeadershipView from './views/LeadershipView';
import InsightsView from './views/InsightsView';
import ContactView from './views/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedConsultation, setSelectedConsultation] = useState<string>('');

  // Handle browser back/forward buttons and hash navigation smoothly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'advisory', 'services', 'sectors', 'approach', 'leadership', 'insights', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial load check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update active page and URL hash
  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO Optimization & Metadata Updates dynamically on page transition
  useEffect(() => {
    let title = 'Durotimi AI Advisory | AI, Cancer Data and Digital Health Transformation';
    let description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';

    switch (activePage) {
      case 'home':
        title = 'Durotimi AI Advisory | AI, Cancer Data and Digital Health Transformation';
        description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';
        break;
      case 'advisory':
        title = 'Strategic Advisory for Healthcare AI and Digital Health Transformation';
        description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';
        break;
      case 'services':
        title = 'AI Readiness, Cancer Data Modernization and Digital Health Advisory Services';
        description = 'Explore Durotimi AI Advisory services including executive AI strategy, AI readiness assessment, cancer data transformation, clinical AI implementation and healthcare innovation advisory.';
        break;
      case 'sectors':
        title = 'Advisory for Governments, Health Systems, Insurers and Healthcare Investors';
        description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';
        break;
      case 'approach':
        title = 'Healthcare AI Transformation Methodology | Durotimi AI Advisory';
        description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';
        break;
      case 'leadership':
        title = 'Leadership | Doyin Bademosi | Durotimi AI Advisory';
        description = 'Durotimi AI Advisory helps governments, health systems, insurers, investors and development partners design and implement responsible AI, cancer data and digital health transformation programmes.';
        break;
      case 'insights':
        title = 'Healthcare AI, Cancer Data and Digital Health Insights';
        description = 'Explore Durotimi AI Advisory insights including executive checklists, cancer data whitepapers, and digital health playbook guidelines.';
        break;
      case 'contact':
        title = 'Contact Durotimi AI Advisory';
        description = 'Start a strategic conversation with Durotimi AI Advisory on AI readiness, cancer data modernization, digital health strategy or clinical AI implementation.';
        break;
    }

    // Set Document Title
    document.title = title;

    // Set Meta Description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', description);
  }, [activePage]);

  // Handle direct scoping target Selection
  const handleSelectConsultation = (type: string) => {
    setSelectedConsultation(type);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#202A36] selection:bg-[#1B75BB]/20 selection:text-[#071B33]">
      {/* Premium Header */}
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Page View Router */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomeView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'advisory' && (
          <AdvisoryView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'services' && (
          <ServicesView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'sectors' && (
          <SectorsView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'approach' && (
          <ApproachView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'leadership' && (
          <LeadershipView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'insights' && (
          <InsightsView 
            onPageChange={handlePageChange} 
            onSelectConsultation={handleSelectConsultation} 
          />
        )}
        {activePage === 'contact' && (
          <ContactView 
            selectedConsultation={selectedConsultation} 
            onClearConsultation={() => setSelectedConsultation('')} 
          />
        )}
      </main>

      {/* Premium Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
