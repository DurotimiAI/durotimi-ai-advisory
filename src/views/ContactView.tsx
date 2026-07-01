/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Globe, Linkedin, CheckCircle2, AlertCircle, Sparkles, Building, MapPin } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactViewProps {
  selectedConsultation: string;
  onClearConsultation: () => void;
}

export default function ContactView({ selectedConsultation, onClearConsultation }: ContactViewProps) {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    organisation: '',
    role: '',
    email: '',
    country: '',
    areaOfInterest: '',
    message: '',
    consultationType: selectedConsultation || 'Executive Strategy Consultation'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync state if selectedConsultation prop changes
  useEffect(() => {
    if (selectedConsultation) {
      setFormData(prev => ({
        ...prev,
        consultationType: selectedConsultation
      }));
    }
  }, [selectedConsultation]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.organisation.trim()) errors.organisation = 'Organisation is required';
    if (!formData.role.trim()) errors.role = 'Role / Title is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid corporate email';
    }
    if (!formData.country.trim()) errors.country = 'Country is required';
    if (!formData.message.trim()) errors.message = 'Please provide brief details of your request';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorEl = document.getElementById('contact-form-section');
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onClearConsultation();
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      organisation: '',
      role: '',
      email: '',
      country: '',
      areaOfInterest: '',
      message: '',
      consultationType: 'Executive Strategy Consultation'
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  const consultationTypes = [
    'Executive Strategy Consultation',
    'AI Transformation Diagnostic',
    'AI Readiness Assessment',
    'Cancer Data Transformation Programme',
    'Fractional Chief AI Officer',
    'Investor or Partner Advisory'
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#071B33] text-white py-12 md:py-16 border-b border-[#1b314d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">
            Practice Intake
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#E8F3FB] mt-2 max-w-4xl leading-tight">
            Start a Strategic Conversation
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-3xl leading-relaxed">
            Whether you are developing an AI strategy, modernizing cancer data systems, preparing for clinical AI implementation or evaluating a healthcare innovation opportunity, Durotimi AI Advisory can help you move from ambition to implementation.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Practice info and geographic hubs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">Office Protocols</span>
              <h3 className="text-xl font-serif font-bold text-[#071B33]">Intake Process & Scoping</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Our strategic advisory intake is managed directly by our senior leadership team. Following submission, a practice director will contact you within 24 business hours to arrange a confidential diagnostic scoping session.
              </p>
            </div>

            {/* Geographic Hubs list */}
            <div className="space-y-4 border-t border-gray-200/60 pt-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C79A32] font-semibold block">Geographical Practices</span>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#1B75BB] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#071B33]">Dublin, Ireland</h4>
                    <p className="text-xs text-gray-400">European & Regulatory Affairs Hub</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#0F9D58] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#071B33]">United States</h4>
                    <p className="text-xs text-gray-400">Strategic Partner Operations</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#C79A32] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#071B33]">Lagos, Nigeria</h4>
                    <p className="text-xs text-gray-400">West African Strategy & Cancer Modernisation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice channels */}
            <div className="border-t border-gray-200/60 pt-6 space-y-3 text-xs">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B75BB] font-bold block">Direct Channels</span>
              <p className="text-gray-500">For generic corporate inquires or press releases:</p>
              <div className="space-y-2 font-mono">
                <p>Email: <a href="mailto:advisory@durotimi.ai" className="text-[#1B75BB] hover:underline">advisory@durotimi.ai</a></p>
                <p>Website: <a href="https://www.durotimi.ai" target="_blank" rel="noreferrer" className="text-[#1B75BB] hover:underline">www.durotimi.ai</a></p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-sm relative">
            
            {/* COMMENT EXPLANATION */}
            {/* IN PRODUCTION: Connect this Form handleSubmit trigger to:
                1. HubSpot API (/forms/v2/submission)
                2. Salesforce / Pardot Lead Capture
                3. Google Forms Webhook or Node.js backend endpoint */}
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-3 mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block">Intake Form</span>
                  <h3 className="text-lg font-serif font-bold text-[#071B33]">Confidential Consultation Brief</h3>
                </div>

                {/* Consultation Type Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-700">Preferred Consultation Type</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 rounded-lg border border-gray-200 bg-gray-50 text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors"
                  >
                    {consultationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full text-xs p-3 rounded-lg border ${formErrors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                      placeholder="e.g. Dr. John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Corporate Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full text-xs p-3 rounded-lg border ${formErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                      placeholder="name@organisation.com"
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Organisation & Role Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Organisation / Practice <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      className={`w-full text-xs p-3 rounded-lg border ${formErrors.organisation ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                      placeholder="e.g. National Cancer Institute"
                    />
                    {formErrors.organisation && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.organisation}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Role / Executive Title <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full text-xs p-3 rounded-lg border ${formErrors.role ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                      placeholder="e.g. Chief Medical Officer"
                    />
                    {formErrors.role && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.role}</p>
                    )}
                  </div>
                </div>

                {/* Country & Area of Interest Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Country <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full text-xs p-3 rounded-lg border ${formErrors.country ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                      placeholder="e.g. Ireland"
                    />
                    {formErrors.country && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.country}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Specific Area of Interest</label>
                    <input
                      type="text"
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 rounded-lg border border-gray-200 bg-gray-50 text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors"
                      placeholder="e.g. Oncology registry modernization"
                    />
                  </div>
                </div>

                {/* Message / Strategic Detail */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-700">Strategic Details & Goals <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full text-xs p-3 rounded-lg border ${formErrors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'} text-[#071B33] focus:outline-none focus:border-[#1B75BB] focus:bg-white transition-colors`}
                    placeholder="Briefly describe your clinical systems context, current timeline, and target objectives..."
                  />
                  {formErrors.message && (
                    <p className="text-[10px] text-red-600 flex items-center gap-1 mt-1"><AlertCircle className="h-3 w-3" /> {formErrors.message}</p>
                  )}
                </div>

                {/* Form submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1B75BB] hover:bg-[#1B75BB]/95 text-white text-xs font-semibold py-3.5 rounded transition-all tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <span>Submit Inquiry</span>
                    )}
                  </button>
                  <span className="block text-[10px] text-gray-400 font-mono mt-3 text-center">
                    Confidential &bull; Fully compliant with global EMR security best practices.
                  </span>
                </div>
              </form>
            ) : (
              /* Success Card */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-[#0F9D58]">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#C79A32] font-semibold block">Intake Confirmed</span>
                  <h3 className="text-2xl font-serif font-bold text-[#071B33]">Briefing Transmitted Successfully</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
                    Thank you. Your confidential consultation request has been routed to our practice directors. We will contact you at your business email to schedule a diagnostics call.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] border border-gray-100 rounded-lg p-4 text-left max-w-sm mx-auto space-y-2.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#1B75BB] font-bold block">Summary of Action</span>
                  <div className="text-xs text-gray-600 space-y-1 leading-normal">
                    <p><strong>Practice:</strong> Durotimi AI Advisory</p>
                    <p><strong>Intake Selection:</strong> {formData.consultationType}</p>
                    <p><strong>Lead Name:</strong> {formData.name}</p>
                    <p><strong>Organisation:</strong> {formData.organisation}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="text-xs font-semibold text-[#1B75BB] hover:underline"
                  >
                    ← Submit another consultation inquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
