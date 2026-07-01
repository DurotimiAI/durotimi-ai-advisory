/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, SectorItem, InsightItem, ProcessStage, EngagementTheme } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'executive-strategy',
    title: 'Executive AI Strategy',
    description: 'Helping boards, ministries and executive teams define practical AI priorities aligned with health system objectives.',
    buyerProblem: 'Boards and executive teams often have high AI ambition but lack a clear, actionable roadmap aligned with health systems, regulatory pathways, and patient outcomes.',
    whatWeDo: 'We support leadership teams in defining high-value use cases, analyzing resource trade-offs, establishing clinical AI charters, and aligning investment portfolios with healthcare strategies.',
    deliverables: [
      'Institutional AI Strategic Roadmap',
      'Use-Case Prioritization Matrix',
      'Executive AI Governance Charter',
      'Investment & Resourcing Plan'
    ],
    bestSuitedFor: 'Boards, hospital CEOs, health system operators, and public sector health leaders.',
    iconName: 'Cpu'
  },
  {
    id: 'transformation-diagnostic',
    title: 'AI Transformation Diagnostic',
    description: 'A rapid diagnostic for organisations seeking clarity on AI opportunities, risks and next steps.',
    buyerProblem: 'Leadership teams need rapid, objective clarity on where they stand, what immediate opportunities exist, and where structural bottlenecks lie.',
    whatWeDo: 'We conduct a rapid, high-impact clinical, technological, and operational scan to identify immediate low-hanging fruit and long-term priority areas.',
    deliverables: [
      'Transformation Maturity Scorecard',
      'Friction Point Audit Map',
      'Short-term High-Impact Recommendations',
      'Diagnostic Executive Briefing'
    ],
    bestSuitedFor: 'Regional health authorities, medium-to-large hospital groups, payers, and healthcare private equity funds.',
    iconName: 'Activity'
  },
  {
    id: 'readiness-assessment',
    title: 'AI Readiness Assessment',
    description: 'Assessing governance, data maturity, infrastructure, clinical workflows, cybersecurity and implementation capability.',
    buyerProblem: 'Organizations risk failing or causing harm by adopting complex AI systems before their data, security, clinical workflows, and staff are ready.',
    whatWeDo: 'We perform a structured, multi-disciplinary assessment across five dimensions: data governance, technical infrastructure, clinical safety, workflow integration, and workforce capability.',
    deliverables: [
      'Comprehensive AI Readiness Audit Report',
      'Technical & Data Infrastructure Gap Analysis',
      'Workforce Skill Assessment Matrix',
      'Risk & Compliance Mitigation Blueprint'
    ],
    bestSuitedFor: 'Cancer centres, clinical networks, digital health developers, and healthcare operators.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cancer-data',
    title: 'Cancer Data Transformation',
    description: 'Designing modern cancer data systems, registry modernization frameworks and data governance models.',
    buyerProblem: 'Oncology data is severely fragmented, unstructured, locked in legacy siloes, and prone to formatting inconsistencies, hindering early detection and research.',
    whatWeDo: 'We design modern cancer data schemas, registry modernization frameworks, secure interoperability standards, and multi-institutional data governance models.',
    deliverables: [
      'National Cancer Registry Modernization Blueprint',
      'Interoperable Oncology Data Schema (HL7 FHIR compliant)',
      'Multi-institutional Data Exchange Protocols',
      'Cancer Data Governance & Security Framework'
    ],
    bestSuitedFor: 'Ministries of Health, National Cancer Institutes, oncology centres, and academic research hubs.',
    iconName: 'Database'
  },
  {
    id: 'digital-health',
    title: 'Digital Health Strategy',
    description: 'Building practical transformation roadmaps for health systems, public agencies, insurers and development partners.',
    buyerProblem: 'Digital health solutions are frequently deployed in isolated, unintegrated siloes, limiting system-level efficiency and patient care quality.',
    whatWeDo: 'We formulate comprehensive digital health blueprints, national health architecture frameworks, and realistic, phased implementation roadmaps.',
    deliverables: [
      'Enterprise Digital Health Blueprint',
      'National Health Architecture Mapping',
      'Interoperability & Standards Guideline',
      'Implementation Phasing & Budgeting Model'
    ],
    bestSuitedFor: 'Ministries of Health, health insurance agencies, development partners, and development finance institutions.',
    iconName: 'Workflow'
  },
  {
    id: 'clinical-implementation',
    title: 'Clinical AI Implementation',
    description: 'Supporting responsible deployment of AI into clinical workflows through governance, adoption planning and performance measurement.',
    buyerProblem: 'Proven clinical AI tools often fail to deliver value because they disrupt physician workflows, trigger alert fatigue, or lack ongoing performance monitoring.',
    whatWeDo: 'We assist clinical leaders in designing human-in-the-loop workflows, setting up local safety committees, managing user adoption, and building metrics to measure actual clinical utility.',
    deliverables: [
      'Clinical Integration Protocol',
      'Human-in-the-loop Safety Framework',
      'Clinical Adoption & Training Playbook',
      'AI Clinical Performance Dashboard Specifications'
    ],
    bestSuitedFor: 'Chief Medical Officers, hospital CIOs, clinical leads, and health technology developers.',
    iconName: 'Stethoscope'
  },
  {
    id: 'fractional-caio',
    title: 'Fractional Chief AI Officer',
    description: 'Ongoing executive advisory support for organisations requiring senior AI leadership without full-time hiring.',
    buyerProblem: 'Mid-sized systems, growing insurers, and research groups require executive-level AI direction, strategy, and risk mitigation but do not yet require a full-time, permanent CAIO.',
    whatWeDo: 'We provide ongoing, fractional executive-level advisory, vetting vendors, representing the organization on strategic panels, and providing clinical and technical AI leadership.',
    deliverables: [
      'Regular strategic reviews and leadership briefings',
      'Vendor vetting & technical due diligence reviews',
      'Ad-hoc advisory for emerging clinical AI issues',
      'Board-level reporting and representation'
    ],
    bestSuitedFor: 'Growing health insurers, mid-sized hospital networks, healthcare scale-ups, and specialized clinical research institutes.',
    iconName: 'Briefcase'
  },
  {
    id: 'investment-advisory',
    title: 'Investment and Commercial Advisory',
    description: 'Supporting investors, healthcare innovators and development partners with due diligence, market strategy and scale-up planning.',
    buyerProblem: 'Investors and private equity firms struggle to separate real healthcare AI capabilities, data assets, and clinical values from deceptive marketing hype.',
    whatWeDo: 'We provide clinical-grade technical audits, evaluate proprietary datasets, map regulatory and adoption barriers, and advise on commercial scale-up strategies.',
    deliverables: [
      'Commercial & Technical Due Diligence Report',
      'Proprietary Data Asset Assessment',
      'Healthcare Market Entry Blueprint',
      'Portfolio AI Synergies Matrix'
    ],
    bestSuitedFor: 'Venture capital funds, private equity firms, development finance institutions (DFIs), and digital health entrepreneurs.',
    iconName: 'TrendingUp'
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'governments',
    title: 'Governments and Ministries of Health',
    description: 'National AI strategy, cancer control modernization, digital health roadmaps and public-private partnership design.',
    useCases: [
      'National AI Strategy Development',
      'Cancer Control & Cancer Data Registry Modernization',
      'Digital Health Infrastructure Roadmaps',
      'Public-Private Partnership (PPP) Program Design',
      
    ],
    iconName: 'Globe'
  },
  {
    id: 'hospitals',
    title: 'Hospital Systems and Cancer Centres',
    description: 'AI readiness, clinical workflow transformation, governance and implementation planning.',
    useCases: [
      'Clinical AI Safety Governance Frameworks',
      'Oncology Workflow Optimization & Care Pathway Integration',
      'Electronic Health Record (EHR) Data Modernization',
      'AI Adoption and Clinical Change Management',
      'AI Performance Tracking and Safety Audits'
    ],
    iconName: 'Building'
  },
  {
    id: 'insurers',
    title: 'Health Insurers and Payers',
    description: 'Population health, early detection strategy, care pathway intelligence and AI-enabled operating models.',
    useCases: [
      'AI-enabled Early Detection Strategies (Oncology focus)',
      'Predictive Risk Stratification Models',
      'Population Health Analytics Integration',
      'Payer Operating Model Modernization',
      'Clinical Claim Validity and Care Quality Intelligence'
    ],
    iconName: 'Shield'
  },
  {
    id: 'development-partners',
    title: 'Development Partners & DFIs',
    description: 'Programme design, implementation architecture, monitoring and evaluation frameworks and investment cases.',
    useCases: [
      'Large-scale Digital Health Program Architecture',
      'Monitoring and Evaluation (M&E) Framework Design',
      'Investment Case Development for Health AI Infrastructure',
      'Cross-border Health Data Exchange Frameworks',
      'Global Health Fund Program Structuring'
    ],
    iconName: 'Award'
  },
  {
    id: 'investors',
    title: 'Investors & Healthcare Innovators',
    description: 'Commercial diligence, market entry, investment readiness and strategic partnership development.',
    useCases: [
      'Clinical and Technical Target Due Diligence',
      'Health AI Intellectual Property (IP) Audits',
      'Market Entry and Scale-up Blueprints',
      'Investment Readiness for Digital Health Founders',
      'Strategic Commercial Partnership Development'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'research',
    title: 'Research Institutions & Academics',
    description: 'Clinical validation strategy, data governance, implementation science and translation planning.',
    useCases: [
      'Translational Oncology AI Guidelines',
      'Federated Learning & Secure Data Sharing Protocols',
      'Ethical AI Clinical Validation Strategies',
      'Implementation Science Grant Design',
      'Multi-center Research Data Harmonization'
    ],
    iconName: 'BookOpen'
  }
];

export const PATHWAY_DATA: ProcessStage[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'We assess priorities, current capabilities, data maturity, stakeholder expectations and transformation constraints.',
    details: [
      'Strategic executive alignment workshops',
      'Baseline institutional priority mapping',
      'Data asset inventory and high-level tech scan',
      'Regulatory, financial, and timeline constraint analysis'
    ]
  },
  {
    number: 2,
    title: 'Diagnose',
    description: 'We evaluate readiness across governance, technology, data, clinical workflows, risk, regulation and workforce capability.',
    details: [
      'Clinical workflow and practitioner friction audit',
      'Deep-dive data architecture & governance analysis',
      'Ethical, security, and clinical risk evaluation',
      'Comprehensive readiness reporting across 5 core pillars'
    ]
  },
  {
    number: 3,
    title: 'Design',
    description: 'We develop implementation-ready roadmaps, governance models, operating structures and KPI frameworks.',
    details: [
      'Phased implementation masterplan development',
      'Target clinical and technical architecture blueprints',
      'Custom safety guardrails and governance processes',
      'Comprehensive clinical and operational KPI matrix'
    ]
  },
  {
    number: 4,
    title: 'Deliver',
    description: 'We support executive alignment, programme governance, implementation oversight and performance measurement.',
    details: [
      'Vendor evaluations and technical specification vetting',
      'Clinical safety oversight committee formation',
      'Workforce capacity building and clinical change management',
      'Implementation quality assurance and KPI monitoring'
    ]
  },
  {
    number: 5,
    title: 'Demonstrate',
    description: 'We measure, audit, and showcase tangible clinical, operational, and financial impact for institutional stakeholders.',
    details: [
      'Clinical outcome comparison against baseline',
      'User adoption & practitioner satisfaction surveys',
      'Post-deployment safety and bias audits',
      'Strategic transformation impact case publication'
    ]
  }
];

export const ENGAGEMENT_THEMES: EngagementTheme[] = [
  {
    id: 'theme-diagnostic',
    title: 'AI Transformation Diagnostic',
    description: 'A rapid, 4-week engagement providing executive clarity on immediate opportunities, structural bottlenecks, and prioritized entry points for AI adoption.',
    duration: '4 Weeks',
    scope: 'Institutional-wide scan'
  },
  {
    id: 'theme-strategy-intensive',
    title: 'Executive AI Strategy Intensive',
    description: 'A structured advisory sprint culminating in a fully defined strategic roadmap, governance charter, and resourcing plan reportable to the Board.',
    duration: '6-8 Weeks',
    scope: 'Board & Executive Alignment'
  },
  {
    id: 'theme-readiness-assessment',
    title: 'AI Readiness Assessment',
    description: 'A rigorous multi-disciplinary audit of clinical, data, technical, regulatory, and workforce readiness before clinical deployment.',
    duration: '8 Weeks',
    scope: 'Technical & Clinical Systems'
  },
  {
    id: 'theme-cancer-modernization',
    title: 'Cancer Data Modernization Programme',
    description: 'A comprehensive oncology data infrastructure audit, data registry restructuring design, and FHIR-compliant standards blueprint.',
    duration: '3-6 Months',
    scope: 'Oncology Data Ecosystem'
  },
  {
    id: 'theme-fractional-caio',
    title: 'Fractional Chief AI Officer',
    description: 'Retained executive advisory offering continuous senior clinical AI leadership, vendor vetting, and strategic representation without permanent hire overheads.',
    duration: '6+ Months Retainer',
    scope: 'On-demand Executive Advisory'
  }
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'board-checklist',
    title: 'AI Readiness in Healthcare: A Board-Level Checklist',
    description: 'A concise executive brief helping healthcare leaders understand the strategic, governance, data and implementation conditions required for responsible AI adoption.',
    category: 'Executive Strategy',
    readTime: '8 min read',
    date: 'June 2026',
    content: `## **Executive Overview**

Artificial Intelligence represents a generational shift in how care can be analyzed, targeted, and delivered. However, boards must recognize that AI adoption is not fundamentally a technology acquisition problem. It is a strategic leadership and institutional governance challenge.

This executive brief outlines the crucial checklist that hospital boards, ministerial cabinets, and corporate executives must satisfy before committing to capital-intensive AI initiatives.

### **The 4 Pillars of Responsible AI Readiness**

1. **Strategic Alignment**: Is the clinical or operational problem well-defined, or is the organization deploying AI as a marketing asset? Every AI deployment must tie directly to clinical quality metrics, workflow efficiencies, or financial sustainability.
2. **Clinical Governance**: Who bears ultimate responsibility when a validated AI algorithm provides a recommendation? Your clinical risk matrices must specify physician-in-the-loop validation, automated model-drift reporting, and safety escalation paths.
3. **Data Maturity**: Do you have clean, harmonized, longitudinal patient records, or is your data locked inside disparate, unstructured EHR siloes? Machine learning models depend on high-quality input; training on fractured data compromises safety.
4. **Workforce and Adoption**: Have physicians, nurses, and technicians been consulted in the workflow design, or is the technology being dictated by administrative teams? User friction is the number one killer of digital transformation.

### **Immediate Action Checklist for Boards**

*   [ ] **Establish a Clinical AI Safety Committee**: Create an interdisciplinary board comprising clinicians, medical ethicists, legal advisors, and security architects.
*   [ ] **Define the Accountability Matrix**: Explicitly document that AI tools act as clinical decision *support* systems, maintaining final human clinical authority.
*   [ ] **Audit Data Pipelines**: Conduct a comprehensive privacy and readiness audit of data silos, mapping them against HL7 FHIR standards.
*   [ ] **Build Model Monitoring Routines**: Formulate protocols to continuously evaluate model inputs and outputs to prevent diagnostic drift over time.`
  },
  {
    id: 'cancer-modernization',
    title: 'Why Cancer Data Modernization Is a National Health Priority',
    description: 'An analysis of how unstructured oncological data hinders clinical trials and patient care, and how modern registries can change the paradigm.',
    category: 'Cancer Data',
    readTime: '12 min read',
    date: 'May 2026',
    content: `## **The Modernization Imperative**

Oncology is uniquely data-dependent. Cancer care requires tracking thousands of genetic variations, staging classifications, histopathological markers, and multi-year systemic therapies. Yet, globally, cancer registries remain retrospective, flat-file repositories with manual entry backlogs of up to 18 months.

Retrospective data prevents real-time population monitoring, slows clinical trial enrollment, and leaves regional policy-makers blind to emerging geographic oncological patterns.

### **Transitioning to Longitudinal Cancer Registries**

A modern cancer registry must transition from a passive database to an active, interoperable data platform. This requires:

*   **Real-time EHR Ingestion**: Automating extraction of pathology reports and systemic therapy records using natural language processing (NLP) to convert unstructured text to structured clinical data.
*   **Standards-Based Exchange**: Mandating HL7 FHIR structures with specific oncology profiles (like mCODE) to enable frictionless cross-border and multi-institutional data research.
*   **Active Governance Protocols**: Securing patient records with pseudonymization and role-based access while allowing clinical researchers to run aggregate queries safely.

### **The Institutional and National Dividends**

By modernizing cancer data systems, national health authorities can optimize oncology medication supply chains, identify high-risk regional clusters early, and reduce the average timeline for clinical trial matches from months to minutes.`
  },
  {
    id: 'pilots-to-implementation',
    title: 'From AI Pilots to Implementation: What Healthcare Leaders Must Get Right',
    description: 'The operational playbook for scaling health AI solutions out of sandbox environments into daily clinical workflows.',
    category: 'Digital Health',
    readTime: '10 min read',
    date: 'April 2026',
    content: `## **Overcoming the "Pilot Trap"**

Approximately 80% of validated AI algorithms in healthcare never successfully scale beyond pilot status. They remain "academic showcase items" because designers fail to account for the operational complexity of real-world clinical environments.

To move from ambition to scalable implementation, healthcare leaders must execute three operational changes:

### **1. Unified Integration Architecture**

AI tools cannot survive as separate dashboards. A radiologist will not switch to a separate browser tab to view an AI chest scan analysis. The AI output must be natively integrated directly into their existing PACS or EHR viewing screen.

### **2. Standardized Procurement Standards**

Before purchasing AI solutions, build a strict procurement matrix. This matrix must demand:
*   Vendor clinical validation studies conducted on diverse populations.
*   Transparent documentation of model inputs, assumptions, and training data.
*   Open API standards for seamless local system integration.

### **3. Change Management and Workflow Restructuring**

Do not simply drop an AI tool on clinical teams. Co-design the updated care pathway with frontline clinicians. Clearly define what the AI does (e.g., initial triage, alert generation) and what requires senior clinician sign-off.`
  },
  {
    id: 'responsible-oncology',
    title: 'Responsible AI in Oncology: Governance Before Deployment',
    description: 'How to set up institutional boards, ethical guardrails, and quality assurance loops to monitor clinical AI model drift.',
    category: 'Clinical AI',
    readTime: '9 min read',
    date: 'March 2026',
    content: `## **The High Stakes of Oncological AI**

In oncology, clinical choices carry life-or-death implications. AI models designed to suggest therapy plans or outline radiation targets are incredibly powerful, but their use requires unparalleled clinical precision.

Governance is not a bureaucratic hurdle; it is the core foundation that guarantees patient safety and maintains public trust in AI technologies.

### **Establishing an Ethical & Safety Governance Model**

A clinical AI governance framework requires three structural circles of assurance:

1.  **Clinical Trust Board**: Comprising oncologists, clinical pharmacists, and patient advocates who review and approve all AI tools before clinical introduction.
2.  **Model QA Protocols**: Routine data engineering checks that audit input data for bias and monitor output accuracy over time.
3.  **Continuous Bias Assessment**: Ongoing studies to ensure the AI behaves equitably across patients of varying ages, socioeconomic statuses, and ethnic backgrounds.`
  },
  {
    id: 'emerging-systems',
    title: 'Digital Health Transformation in Emerging Health Systems',
    description: 'Lessons learned from digital health implementation and data modernization programs across sub-Saharan Africa and developing markets.',
    category: 'Health Policy',
    readTime: '15 min read',
    date: 'February 2026',
    content: `## **Contextual Challenges and Leapfrogging Opportunities**

Emerging health systems operate under unique operational conditions: severe healthcare workforce shortages, fragmented regional infrastructure, and heavily constrained capital resources. 

However, because these systems are not bound by massive legacy mainframe networks, they possess an extraordinary opportunity to leapfrog directly to modern, mobile-first, interoperable cloud architectures.

### **Key Implementation Principles**

*   **Offline-First and Resilient Systems**: Digital tools must operate securely even during temporary internet connectivity drops.
*   **Frictionless Mobile-First Designs**: Creating highly accessible user interfaces tailored for community health workers on standard smartphones.
*   **Incremental, Agile Investment Phasing**: Focusing initial capital on high-yield, foundational assets (like national client registries and uniform terminologies) before financing complex machine-learning tools.`
  }
];
