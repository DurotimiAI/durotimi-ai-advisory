/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface Question {
  id: string;
  category: string;
  text: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 'gov',
    category: 'Clinical & Ethical Governance',
    text: 'How does your organisation currently vet and govern AI algorithms before clinical or administrative deployment?',
    options: [
      {
        text: 'Ad-hoc reviews or vendor-led validations with no formal internal safety committee.',
        score: 1,
        feedback: 'High regulatory, clinical and operational risk. Establish an internal Clinical AI Safety Board immediately.'
      },
      {
        text: 'Standard IT security review exists, but lacks representation from clinical, medical ethics, or legal departments.',
        score: 2,
        feedback: 'Incomplete protection. Integrate interdisciplinary teams and outline explicit human-in-the-loop validation parameters.'
      },
      {
        text: 'Formal interdisciplinary AI Safety Committee reviews all clinical tools with structured, continuous risk evaluation.',
        score: 3,
        feedback: 'Excellent foundational governance. Next step is creating automated performance dashboards to monitor clinical model drift.'
      }
    ]
  },
  {
    id: 'data',
    category: 'Data Maturity & Interoperability',
    text: 'What is the current state of your healthcare data pipelines and standardisation?',
    options: [
      {
        text: 'Highly fragmented data siloed in legacy EMRs with unstructured pathology and imaging files.',
        score: 1,
        feedback: 'Poor AI readiness. Standardise data structures using open schemas (like HL7 FHIR or mCODE) before investing in complex models.'
      },
      {
        text: 'Partially consolidated data lakes are present, but lack consistent oncological terminology or real-time clinical API sync.',
        score: 2,
        feedback: 'Moderate data readiness. Modernise data mapping structures and registries to automate secure longitudinal record ingestion.'
      },
      {
        text: 'Consolidated, HL7 FHIR-compliant clinical pipelines with active oncology registries and secure data governance models.',
        score: 3,
        feedback: 'High data readiness. Your environment is structurally prepared for secure, federated clinical AI deployment and translational research.'
      }
    ]
  },
  {
    id: 'workflow',
    category: 'Clinical Workflow Integration',
    text: 'How are AI recommendations delivered to frontline clinicians or practitioners?',
    options: [
      {
        text: 'Clinicians must switch to secondary standalone browser dashboards or review printed results.',
        score: 1,
        feedback: 'High friction. Standalone screens create user fatigue and guarantee poor clinician adoption.'
      },
      {
        text: 'AI recommendations are fed directly into the EMR as static text notes, but do not support in-workflow feedback.',
        score: 2,
        feedback: 'Partial workflow integration. Upgrade systems to offer direct click-to-validate or feedback mechanics inside existing panels.'
      },
      {
        text: 'AI insights are fully integrated into native PACS or EMR viewing layers, preserving clinical decision flow.',
        score: 3,
        feedback: 'Superior clinical workflow design. Focus on monitoring practitioner adherence and analyzing care pathway outcomes.'
      }
    ]
  },
  {
    id: 'strategy',
    category: 'Leadership Alignment & Strategy',
    text: 'Does your executive team or Board have a defined healthcare AI investment and risk roadmap?',
    options: [
      {
        text: 'No defined healthcare AI roadmap; investments are reactionary and driven by technology hype.',
        score: 1,
        feedback: 'High strategic ambiguity. Convene board workshops to define actual healthcare outcomes and create an objective roadmap.'
      },
      {
        text: 'A high-level digital strategy exists, but lacks specific clinical use-case prioritization or risk mitigation blueprints.',
        score: 2,
        feedback: 'Strategic gap. Establish clear priority matrices, capital allocation formulas, and institutional safety mandates.'
      },
      {
        text: 'Comprehensive executive roadmap aligned with cancer control programs, financial plans, and clinical priorities.',
        score: 3,
        feedback: 'Strong leadership alignment. Consider securing a Fractional Chief AI Officer to provide ongoing oversight and peer review.'
      }
    ]
  }
];

interface InteractiveAssessmentProps {
  onNavigateToContact: (consultationType: string) => void;
}

export default function InteractiveAssessment({ onNavigateToContact }: InteractiveAssessmentProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, { score: number; text: string; feedback: string }>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (score: number, text: string, feedback: string) => {
    const question = ASSESSMENT_QUESTIONS[currentStep];
    setAnswers(prev => ({
      ...prev,
      [question.id]: { score, text, feedback }
    }));

    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const restartAssessment = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const answerValues = Object.values(answers) as { score: number; text: string; feedback: string }[];
  const totalScore = answerValues.reduce((sum, item) => sum + item.score, 0);
  const maxScore = ASSESSMENT_QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let statusLabel = '';
  let statusColor = '';
  let statusSummary = '';

  if (percentage <= 45) {
    statusLabel = 'Emerging AI Foundations (Immediate Structural Risks)';
    statusColor = 'text-[#C79A32] border-[#C79A32]/40 bg-[#C79A32]/5';
    statusSummary = 'Your health system has critical gaps across data standardization, clinical safety governance, and strategic alignment. Deploying complex AI under these conditions creates severe regulatory, clinical, and reputational risk.';
  } else if (percentage <= 80) {
    statusLabel = 'Developing AI Infrastructure (Strategic Friction Detected)';
    statusColor = 'text-[#1B75BB] border-[#1B75BB]/40 bg-[#1B75BB]/5';
    statusSummary = 'You have established key technical or clinical pillars, but suffer from silos or governance gaps that prevent pilots from transitioning into scalable, measurable clinical transformation.';
  } else {
    statusLabel = 'Advanced Digital Health Readiness (Implementation Prepared)';
    statusColor = 'text-[#0F9D58] border-[#0F9D58]/40 bg-[#0F9D58]/5';
    statusSummary = 'Your organization possesses the core architectural and governance foundations for scaling responsible AI. Focus should shift to longitudinal model-drift oversight and evaluating multi-site clinical trials.';
  }

  const q = ASSESSMENT_QUESTIONS[currentStep];

  return (
    <div className="bg-white border border-[#202A36]/10 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden" id="readiness-assessment-tool">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#1B75BB]" />
      
      {!isCompleted ? (
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#1B75BB]">Self-Service Executive Diagnostic</span>
              <h3 className="text-xl font-serif font-semibold text-[#071B33]">AI Readiness Assessment</h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-500">Step {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}</span>
              <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="h-full bg-[#1B75BB] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question Category */}
          <div className="mb-4">
            <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded bg-[#E8F3FB] text-[#1B75BB]">
              {q.category}
            </span>
          </div>

          {/* Question Text */}
          <h4 className="text-base md:text-lg font-sans font-semibold text-gray-800 mb-6 leading-relaxed">
            {q.text}
          </h4>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.score, opt.text, opt.feedback)}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#1B75BB] hover:bg-[#E8F3FB]/40 transition-all duration-200 group flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-[#1B75BB] group-hover:bg-[#1B75BB]/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#1B75BB] transition-colors" />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-medium group-hover:text-gray-900">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 italic">This diagnostic evaluates structural readiness across clinical standards and FHIR pathways.</span>
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="text-xs font-semibold text-[#1B75BB] hover:underline"
              >
                Back to previous step
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* Diagnostic Result */}
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] block">Diagnostic Summary Report</span>
            <h3 className="text-2xl font-serif font-semibold text-[#071B33] mt-1">Your AI Readiness Diagnostic</h3>
            
            <div className="inline-flex items-center justify-center mt-4">
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-gray-100 bg-[#F5F7FA]">
                <div className="text-center">
                  <span className="text-3xl font-serif font-bold text-[#071B33]">{percentage}%</span>
                  <span className="block text-[10px] text-gray-500 font-mono">Readiness Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`border rounded-lg p-4 text-center mb-6 font-sans ${statusColor}`}>
            <span className="text-xs font-mono uppercase tracking-wider block">Classification Status</span>
            <span className="text-base font-bold mt-1 block">{statusLabel}</span>
            <p className="text-xs text-gray-700 mt-2 leading-relaxed max-w-2xl mx-auto">
              {statusSummary}
            </p>
          </div>

          {/* Detailed Feedback List */}
          <div className="mb-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#071B33] mb-3">Key Structural Gaps & Actions</h4>
            <div className="space-y-3.5">
              {ASSESSMENT_QUESTIONS.map(item => {
                const ans = answers[item.id];
                return (
                  <div key={item.id} className="p-3.5 rounded-lg bg-[#F5F7FA] border border-gray-100 flex gap-3">
                    <div className="shrink-0 mt-1">
                      {ans.score === 1 && (
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-700 text-xs font-extrabold font-mono">!</span>
                        </div>
                      )}
                      {ans.score === 2 && (
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <span className="text-yellow-700 text-xs font-extrabold font-mono">!</span>
                        </div>
                      )}
                      {ans.score === 3 && (
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-emerald-700 text-xs font-extrabold font-mono">✓</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-500">{item.category}</span>
                      <p className="text-xs font-medium text-gray-800 leading-normal">{ans.text}</p>
                      <p className="text-xs text-[#1B75BB] font-semibold mt-1 leading-normal">{ans.feedback}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic CTAs */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <button
              onClick={restartAssessment}
              className="text-xs font-semibold text-gray-500 hover:text-[#071B33] font-sans hover:underline flex items-center gap-1"
            >
              ← Restart Diagnostic
            </button>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigateToContact('AI Readiness Assessment')}
                className="flex-1 sm:flex-none text-center bg-[#1B75BB] hover:bg-[#1B75BB]/90 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm font-sans"
              >
                Request an AI Readiness Assessment
              </button>
              <button
                onClick={() => onNavigateToContact('Executive Strategy Consultation')}
                className="flex-1 sm:flex-none text-center bg-[#071B33] hover:bg-[#071B33]/90 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm font-sans"
              >
                Book Strategy Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
