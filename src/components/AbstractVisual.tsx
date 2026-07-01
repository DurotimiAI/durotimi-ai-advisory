/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function AbstractVisual() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'data', cx: 120, cy: 150, r: 8, color: '#1B75BB', label: 'Heterogeneous Clinical Data', desc: 'EMRs, genomic feeds, pathology logs, imaging metadata' },
    { id: 'governance', cx: 280, cy: 150, r: 10, color: '#C79A32', label: 'Governance & Security Shield', desc: 'De-identification, clinical validation, regulatory guardrails' },
    { id: 'integration', cx: 440, cy: 150, r: 8, color: '#0F9D58', label: 'Interoperable Oncology Schema', desc: 'FHIR profiles, oncology data models, cancer registry alignment' },
    { id: 'delivery', cx: 600, cy: 150, r: 12, color: '#1B75BB', label: 'Responsible AI Implementation', desc: 'Physician workflow integration, automated clinical metrics' }
  ];

  return (
    <div className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#091d37] border border-[#1b314d]/60 shadow-2xl shadow-black/40">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-15" 
           style={{ 
             backgroundImage: 'radial-gradient(#1B75BB 1px, transparent 1px), linear-gradient(0deg, transparent 24%, rgba(27, 117, 187, 0.05) 25%, rgba(27, 117, 187, 0.05) 26%, transparent 27%, transparent 74%, rgba(27, 117, 187, 0.05) 75%, rgba(27, 117, 187, 0.05) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(27, 117, 187, 0.05) 25%, rgba(27, 117, 187, 0.05) 26%, transparent 27%, transparent 74%, rgba(27, 117, 187, 0.05) 75%, rgba(27, 117, 187, 0.05) 76%, transparent 77%)',
             backgroundSize: '30px 30px, 120px 120px, 120px 120px'
           }} 
      />

      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#1B75BB]/20 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full bg-[#C79A32]/10 blur-[60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#0F9D58]/10 blur-[80px] pointer-events-none" />

      {/* Main SVG Graphic */}
      <svg viewBox="0 0 720 350" className="w-full h-full max-w-[650px] relative z-10 px-4" aria-label="Abstract Strategic Healthcare AI Pathway Graphic">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1B75BB" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#C79A32" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#0F9D58" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1B75BB" stopOpacity="0.8" />
          </linearGradient>

          {/* Glowing Shadow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Pulse animation for pathways */}
          <style>
            {`
              @keyframes dash {
                to {
                  stroke-dashoffset: -40;
                }
              }
              .animated-flow-line {
                stroke-dasharray: 8, 12;
                animation: dash 4s linear infinite;
              }
              .pulse-ring {
                animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.2;
                }
                50% {
                  transform: scale(1.4);
                  opacity: 0.6;
                }
              }
            `}
          </style>
        </defs>

        {/* Ambient Grid Guidelines */}
        <line x1="120" y1="50" x2="120" y2="300" stroke="#1b314d" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="280" y1="50" x2="280" y2="300" stroke="#1b314d" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="440" y1="50" x2="440" y2="300" stroke="#1b314d" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="600" y1="50" x2="600" y2="300" stroke="#1b314d" strokeWidth="1" strokeDasharray="4,4" />

        <line x1="50" y1="150" x2="670" y2="150" stroke="#1b314d" strokeWidth="1.5" />

        {/* The Core Care Pathway (S-Curve connecting cancer data pipeline) */}
        <path d="M 120 150 C 200 150, 200 80, 280 80 C 360 80, 360 220, 440 220 C 520 220, 520 150, 600 150" 
              fill="none" 
              stroke="url(#pathGradient)" 
              strokeWidth="3.5" 
              className="drop-shadow-lg" />

        {/* Moving data packet flow along curve */}
        <path d="M 120 150 C 200 150, 200 80, 280 80 C 360 80, 360 220, 440 220 C 520 220, 520 150, 600 150" 
              fill="none" 
              stroke="#E8F3FB" 
              strokeWidth="2.5" 
              className="animated-flow-line opacity-80" />

        {/* Secondary governance containment ring */}
        <circle cx="280" cy="150" r="50" fill="none" stroke="#C79A32" strokeWidth="1" strokeDasharray="3,6" className="origin-center" style={{ transformOrigin: '280px 150px' }} />
        <circle cx="440" cy="150" r="40" fill="none" stroke="#0F9D58" strokeWidth="1" strokeDasharray="5,3" className="origin-center" style={{ transformOrigin: '440px 150px' }} />

        {/* Pulsing Glow Rings behind major nodes */}
        {nodes.map(node => (
          <g key={`ring-${node.id}`} className="origin-center" style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}>
            <circle cx={node.cx} cy={node.cy} r={node.r * 2.2} fill={node.color} opacity="0.1" className="pulse-ring" />
          </g>
        ))}

        {/* SVG Interactive Nodes */}
        {nodes.map(node => (
          <g key={node.id} 
             className="cursor-pointer group"
             onMouseEnter={() => setHoveredNode(node.id)}
             onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Outermost selection hitbox */}
            <circle cx={node.cx} cy={node.cy} r="25" fill="transparent" />

            {/* Glowing ring on hover */}
            <circle cx={node.cx} 
                    cy={node.cy} 
                    r={node.r + 4} 
                    fill="none" 
                    stroke={node.color} 
                    strokeWidth="1.5" 
                    className="transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-125"
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />

            {/* Core Node Circle */}
            <circle cx={node.cx} 
                    cy={node.cy} 
                    r={node.r} 
                    fill={hoveredNode === node.id ? '#FFFFFF' : node.color} 
                    stroke="#071B33" 
                    strokeWidth="2" 
                    className="transition-all duration-300 drop-shadow" 
            />

            {/* Mini internal indicator */}
            {hoveredNode === node.id && (
              <circle cx={node.cx} cy={node.cy} r="3" fill={node.color} />
            )}

            {/* Labels under nodes */}
            <text x={node.cx} 
                  y={node.cy + (node.id === 'governance' ? -25 : 30)} 
                  textAnchor="middle" 
                  fill={hoveredNode === node.id ? '#FFFFFF' : '#A0AEC0'} 
                  fontSize="11" 
                  fontWeight={hoveredNode === node.id ? '600' : '500'}
                  className="transition-colors duration-200 font-sans tracking-wide select-none"
            >
              {node.id === 'data' && 'Cancer Data'}
              {node.id === 'governance' && 'Governance Shield'}
              {node.id === 'integration' && 'Interoperability Schema'}
              {node.id === 'delivery' && 'Responsible Delivery'}
            </text>
          </g>
        ))}

        {/* Connection flows from curve endpoints */}
        <path d="M 50 150 Q 85 150, 120 150" fill="none" stroke="#1B75BB" strokeWidth="1.5" strokeDasharray="2,2" />
        <path d="M 600 150 Q 635 150, 670 150" fill="none" stroke="#0F9D58" strokeWidth="1.5" strokeDasharray="2,2" />
      </svg>

      {/* Real-time Dynamic Status/Detail panel at the bottom of the card */}
      <div className="absolute bottom-3 left-3 right-3 bg-[#0d2543]/90 border border-[#1c385d] p-3 rounded-lg backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-300">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[#C79A32] block">Advisory Paradigm System</span>
          <span className="text-xs font-semibold text-white">
            {hoveredNode 
              ? nodes.find(n => n.id === hoveredNode)?.label 
              : "Hover over clinical milestone nodes to trace transformation pathways"}
          </span>
          <p className="text-[11px] text-[#A0AEC0] mt-0.5 max-w-[420px]">
            {hoveredNode 
              ? nodes.find(n => n.id === hoveredNode)?.desc 
              : "Structured frameworks that bridge national cancer control strategies, institutional workflows, and enterprise artificial intelligence."}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F9D58] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F9D58]"></span>
          </span>
          <span className="text-[10px] font-mono text-[#A0AEC0]">Pathway Active</span>
        </div>
      </div>
    </div>
  );
}
