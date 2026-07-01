import React from 'react';

interface DurotimiLogoProps {
  className?: string;
  light?: boolean; // If true, optimized for light backgrounds (dark text). If false, optimized for dark backgrounds (light text).
}

export default function DurotimiLogo({ className = "h-10", light = false }: DurotimiLogoProps) {
  const textColor = light ? "#071B33" : "#FFFFFF";
  
  return (
    <svg 
      viewBox="0 0 350 90" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="durotimi-brand-logo-svg"
    >
      <defs>
        {/* Blue Node Gradient - matching the premium tech blue in the brand asset */}
        <linearGradient id="logoBlueNodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B75BB" />
          <stop offset="100%" stopColor="#125386" />
        </linearGradient>
        
        {/* Gold Metallic Gradient - matching the gold texture in the brand asset */}
        <linearGradient id="logoGoldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A4781E" />
          <stop offset="30%" stopColor="#C79A32" />
          <stop offset="70%" stopColor="#E2C175" />
          <stop offset="100%" stopColor="#9C731A" />
        </linearGradient>
      </defs>
      
      {/* Network Emblem on the Left (exact replica of the attached corporate brand mark) */}
      <g transform="translate(15, 5)">
        {/* Connection Bridges (rendered underneath the nodes) */}
        <g stroke="url(#logoBlueNodeGrad)" strokeWidth="4.8" strokeLinecap="round" opacity="1">
          {/* Vertical: Col 3 Row 1 to Row 2 */}
          <line x1="40" y1="8" x2="40" y2="24" />
          {/* Horizontal: Col 2 Row 2 to Col 3 Row 2 */}
          <line x1="24" y1="24" x2="40" y2="24" />
          {/* Vertical: Col 4 Row 2 to Row 3 */}
          <line x1="56" y1="24" x2="56" y2="40" />
          {/* Horizontal: Col 1 Row 3 to Col 2 Row 3 */}
          <line x1="8" y1="40" x2="24" y2="40" />
          {/* Vertical: Col 2 Row 3 to Row 4 */}
          <line x1="24" y1="40" x2="24" y2="56" />
          {/* Horizontal: Col 4 Row 3 to Col 5 Row 3 */}
          <line x1="56" y1="40" x2="72" y2="40" />
          {/* Horizontal: Col 3 Row 4 to Col 4 Row 4 */}
          <line x1="40" y1="56" x2="56" y2="56" />
          {/* Vertical: Col 3 Row 4 to Row 5 */}
          <line x1="40" y1="56" x2="40" y2="72" />
        </g>

        {/* Nodes (Circles and Squircles) */}
        <g fill="url(#logoBlueNodeGrad)">
          {/* Row 1 (y = 8) */}
          <circle cx="24" cy="8" r="5.2" />
          <circle cx="40" cy="8" r="5.6" />
          <rect x="50.4" y="2.4" width="11.2" height="11.2" rx="3.6" />

          {/* Row 2 (y = 24) */}
          <circle cx="8" cy="24" r="5.2" />
          <circle cx="24" cy="24" r="5.6" />
          <circle cx="40" cy="24" r="5.6" />
          <rect x="50.4" y="18.4" width="11.2" height="11.2" rx="3.6" />
          <rect x="66.4" y="18.4" width="11.2" height="11.2" rx="3.6" />

          {/* Row 3 (y = 40) */}
          <circle cx="8" cy="40" r="5.6" />
          <circle cx="24" cy="40" r="5.6" />
          <circle cx="40" cy="40" r="5.2" />
          <rect x="50.4" y="34.4" width="11.2" height="11.2" rx="3.6" />
          <rect x="66.4" y="34.4" width="11.2" height="11.2" rx="3.6" />

          {/* Row 4 (y = 56) */}
          <circle cx="8" cy="56" r="5.2" />
          <circle cx="24" cy="56" r="5.6" />
          <circle cx="40" cy="56" r="5.6" />
          <rect x="50.4" y="50.4" width="11.2" height="11.2" rx="3.6" />
          <rect x="66.4" y="50.4" width="11.2" height="11.2" rx="3.6" />

          {/* Row 5 (y = 72) */}
          <circle cx="24" cy="72" r="5.2" />
          <circle cx="40" cy="72" r="5.6" />
          <rect x="50.4" y="66.4" width="11.2" height="11.2" rx="3.6" />
        </g>
      </g>
      
      {/* Brand Text: Durotimi AI */}
      <text 
        x="112" 
        y="41" 
        fill={textColor} 
        fontSize="34" 
        fontWeight="600" 
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        letterSpacing="-0.02em"
      >
        Durotimi AI
      </text>
      
      {/* Brand Sub-Text: Advisory */}
      <text 
        x="114" 
        y="75" 
        fill="url(#logoGoldGrad)" 
        fontSize="32" 
        fontWeight="500" 
        fontFamily="Playfair Display, Georgia, serif"
        letterSpacing="0.04em"
      >
        Advisory
      </text>
    </svg>
  );
}
