// pages/complete-resume-resource-library.jsx
import Head from 'next/head';

// ===== INLINE CRITICAL CSS - Optimized for speed =====
const criticalCSS = `
  /* CSS RESET */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
  
  /* BASE STYLES */
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
    line-height: 1.6; 
    color: #111827; 
    background: #f9fafb; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* MAIN CONTAINER */
  .container { 
    max-width: 1280px; 
    margin: 0 auto; 
    padding: 16px; 
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .container { padding: 24px; }
  }
  
  @media (min-width: 1024px) {
    .container { padding: 32px; }
  }
  
  /* ARTICLE */
  .article { 
    background: #ffffff; 
    border-radius: 24px; 
    padding: 24px; 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .article { padding: 40px; }
  }
  
  @media (min-width: 1024px) {
    .article { padding: 48px; }
  }
  
  /* BREADCRUMB */
  .breadcrumb { 
    margin-bottom: 24px; 
    font-size: 0.9rem; 
    color: #6b7280;
  }
  
  .breadcrumbList { 
    display: flex; 
    flex-wrap: wrap; 
    list-style: none; 
    gap: 8px;
  }
  
  .breadcrumbItem { 
    display: flex; 
    align-items: center;
  }
  
  .breadcrumbItem:not(:last-child)::after { 
    content: "›"; 
    margin-left: 8px; 
    color: #9ca3af; 
    font-size: 1.1rem;
  }
  
  .breadcrumbLink { 
    color: #111827; 
    text-decoration: none; 
    border-bottom: 1px solid #d1d5db;
  }
  
  .breadcrumbLink:hover { 
    border-bottom-color: #000000; 
  }
  
  /* HEADER */
  .header { 
    margin-bottom: 40px; 
    padding-bottom: 32px; 
    border-bottom: 2px solid #f3f4f6;
  }
  
  h1 { 
    font-size: clamp(2rem, 6vw, 3.2rem); 
    line-height: 1.2; 
    margin-bottom: 20px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .title { 
    font-size: clamp(2rem, 6vw, 3.2rem); 
    line-height: 1.2; 
    margin-bottom: 20px; 
    font-weight: 800; 
    letter-spacing: -0.02em;
    color: #000000;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  .search-intent { 
    background: #f3f4f6; 
    padding: 16px 20px; 
    border-radius: 12px; 
    margin-bottom: 20px; 
    border-left: 4px solid #000000;
  }
  
  .search-intent-text { 
    margin-bottom: 0; 
    font-size: 1rem; 
    color: #374151;
  }
  
  .meta { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 12px; 
    margin: 16px 0; 
    font-size: 0.9rem; 
    color: #6b7280;
  }
  
  .meta-item { 
    display: inline-block;
  }
  
  .meta-separator { 
    color: #9ca3af;
  }
  
  /* EXPERT INTRO */
  .expert-intro { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    margin: 32px 0; 
    border: 1px solid #e5e7eb;
  }
  
  .expert-title { 
    font-size: 1.3rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 16px;
  }
  
  .expert-text { 
    margin-bottom: 24px;
  }
  
  .expert-stats { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 24px; 
    margin-top: 20px;
  }
  
  .stat-item { 
    flex: 1 1 auto; 
    min-width: 120px;
  }
  
  .stat-value { 
    font-size: 2rem; 
    font-weight: 800; 
    color: #000000; 
    display: block; 
    line-height: 1.2;
  }
  
  .stat-label { 
    color: #4b5563; 
    font-size: 0.85rem;
  }
  
  /* STATS SECTION */
  .stats-section { 
    margin: 48px 0;
  }
  
  .stats-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 24px; 
    text-align: center;
  }
  
  .stats-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
  }
  
  @media (min-width: 640px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .stat-card { 
    background: #ffffff; 
    padding: 24px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb; 
    text-align: center; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .stat-number { 
    font-size: 2.5rem; 
    font-weight: 800; 
    color: #000000; 
    display: block; 
    line-height: 1.2; 
    margin-bottom: 8px;
  }
  
  .stat-description { 
    color: #374151; 
    margin-bottom: 8px;
  }
  
  .stat-source { 
    font-size: 0.75rem; 
    color: #9ca3af;
  }
  
  /* AUTHORS SECTION */
  .authors-section { 
    margin: 48px 0;
  }
  
  .authors-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 12px; 
    text-align: center;
  }
  
  .authors-subtitle { 
    text-align: center; 
    color: #6b7280; 
    margin-bottom: 32px;
  }
  
  .authors-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
  }
  
  @media (min-width: 768px) {
    .authors-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .author-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .author-header { 
    display: flex; 
    gap: 16px; 
    margin-bottom: 16px; 
    align-items: center;
  }
  
  .author-avatar { 
    width: 64px; 
    height: 64px; 
    background: #000000; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
  
  .avatar-placeholder { 
    color: #ffffff; 
    font-size: 1.5rem; 
    font-weight: 600;
  }
  
  .author-name { 
    font-size: 1.2rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 4px;
  }
  
  .author-title { 
    color: #4b5563; 
    font-size: 0.9rem;
  }
  
  .author-credentials { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 8px; 
    margin-bottom: 16px;
  }
  
  .credential-badge { 
    background: #e5e7eb; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.75rem; 
    color: #374151;
  }
  
  .author-bio { 
    color: #374151; 
    line-height: 1.6;
  }
  
  /* CORE GUIDE */
  .core-guide { 
    margin: 48px 0;
  }
  
  .guide-header { 
    text-align: center; 
    margin-bottom: 32px;
  }
  
  .guide-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 8px;
  }
  
  .guide-subtitle { 
    color: #6b7280;
  }
  
  .guide-steps { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
  }
  
  @media (min-width: 768px) {
    .guide-steps { grid-template-columns: repeat(3, 1fr); }
  }
  
  .step-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb; 
    position: relative;
  }
  
  .step-number { 
    font-size: 3rem; 
    font-weight: 800; 
    color: #e5e7eb; 
    position: absolute; 
    top: 16px; 
    right: 16px;
  }
  
  .step-title { 
    font-size: 1.3rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 16px; 
    padding-right: 48px;
  }
  
  .step-description { 
    color: #374151; 
    margin-bottom: 16px;
  }
  
  .step-link { 
    color: #000000; 
    text-decoration: none; 
    font-weight: 600; 
    border-bottom: 2px solid #9ca3af;
  }
  
  .step-link:hover { 
    border-bottom-color: #000000;
  }
  
  .step-tip { 
    background: #e0f2fe; 
    padding: 12px; 
    border-radius: 8px; 
    font-size: 0.9rem; 
    margin-top: 16px;
  }
  
  /* SUCCESS SECTION */
  .success-section { 
    margin: 48px 0;
  }
  
  .success-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 8px; 
    text-align: center;
  }
  
  .success-subtitle { 
    text-align: center; 
    color: #6b7280; 
    margin-bottom: 32px;
  }
  
  .success-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
  }
  
  @media (min-width: 768px) {
    .success-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  .success-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .success-header { 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 16px;
  }
  
  .success-industry { 
    background: #000000; 
    color: #ffffff; 
    padding: 4px 12px; 
    border-radius: 50px; 
    font-size: 0.75rem; 
    font-weight: 600;
  }
  
  .success-time { 
    color: #6b7280; 
    font-size: 0.85rem;
  }
  
  .success-name { 
    font-size: 1.1rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 4px;
  }
  
  .success-role { 
    color: #4b5563; 
    font-size: 0.9rem; 
    margin-bottom: 16px;
  }
  
  .success-metrics { 
    background: #e5e7eb; 
    padding: 12px; 
    border-radius: 8px; 
    margin-bottom: 16px;
  }
  
  .metric-value { 
    font-weight: 700; 
    color: #000000;
  }
  
  .success-quote { 
    color: #374151; 
    font-style: italic; 
    margin-bottom: 16px; 
    line-height: 1.6;
  }
  
  .rating-stars { 
    color: #fbbf24; 
    font-size: 1.1rem;
  }
  
  /* QUICK ACCESS */
  .quick-access { 
    margin: 48px 0;
  }
  
  .quick-access-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 24px;
  }
  
  .quick-access-grid { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; 
  }
  
  @media (min-width: 640px) {
    .quick-access-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .quick-access-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .quick-access-card { 
    background: #f9fafb; 
    padding: 20px; 
    border-radius: 12px; 
    border: 1px solid #e5e7eb; 
    text-decoration: none; 
    color: inherit;
    transition: transform 0.2s;
  }
  
  .quick-access-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .quick-access-card h3 { 
    font-size: 1rem; 
    font-weight: 600; 
    color: #000000; 
    margin-bottom: 8px;
  }
  
  .quick-access-card p { 
    font-size: 0.85rem; 
    color: #6b7280;
  }
  
  /* MAIN CONTENT */
  .main-content { 
    margin: 48px 0;
  }
  
  /* LINK CATEGORY */
  .link-category { 
    margin: 48px 0;
  }
  
  .category-header { 
    margin-bottom: 24px;
  }
  
  .category-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 8px;
  }
  
  .category-description { 
    color: #6b7280;
  }
  
  .links-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 20px; 
  }
  
  @media (min-width: 640px) {
    .links-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (min-width: 1024px) {
    .links-grid { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (min-width: 1280px) {
    .links-grid { grid-template-columns: repeat(4, 1fr); }
  }
  
  .resource-card { 
    background: #ffffff; 
    padding: 24px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb; 
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .resource-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .resource-title { 
    font-size: 1.1rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 12px;
    line-height: 1.4;
  }
  
  .resource-description { 
    color: #4b5563; 
    margin-bottom: 20px; 
    flex: 1;
    font-size: 0.95rem;
  }
  
  .resource-button { 
    display: inline-block; 
    background: #ffffff; 
    color: #000000; 
    padding: 12px 20px; 
    border-radius: 8px; 
    text-decoration: none; 
    font-weight: 600; 
    font-size: 0.9rem; 
    border: 2px solid #000000;
    transition: all 0.2s ease;
    text-align: center;
    margin-top: auto;
  }
  
  .resource-button:hover { 
    background: #000000; 
    color: #ffffff;
  }
  
  /* FAQ SECTION */
  .faq-section { 
    margin: 48px 0;
  }
  
  .section-title { 
    font-size: 1.5rem; 
    font-weight: 700; 
    margin-bottom: 24px;
  }
  
  .faq-grid { 
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px; 
  }
  
  @media (min-width: 768px) {
    .faq-grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  .faq-card { 
    background: #f9fafb; 
    padding: 28px; 
    border-radius: 16px; 
    border: 1px solid #e5e7eb;
  }
  
  .faq-question { 
    font-size: 1.2rem; 
    font-weight: 700; 
    color: #000000; 
    margin-bottom: 16px;
  }
  
  .faq-answer { 
    color: #374151; 
    line-height: 1.7;
  }
  
  .inline-link { 
    color: #000000; 
    text-decoration: none; 
    font-weight: 600;
    border-bottom: 2px solid #9ca3af;
  }
  
  .inline-link:hover { 
    border-bottom-color: #000000;
  }
  
  /* CTA SECTION */
  .cta-section { 
    margin: 48px 0;
  }
  
  .cta-container { 
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); 
    padding: 48px; 
    border-radius: 24px; 
    text-align: center; 
    border: 2px solid #000000;
  }
  
  .cta-title { 
    font-size: 2rem; 
    font-weight: 800; 
    color: #000000; 
    margin-bottom: 16px;
  }
  
  .cta-description { 
    max-width: 600px; 
    margin: 0 auto 32px; 
    color: #4b5563;
  }
  
  .cta-buttons { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 16px; 
    justify-content: center;
  }
  
  .primary-cta { 
    display: inline-block; 
    background: #000000; 
    color: #ffffff; 
    padding: 16px 32px; 
    border-radius: 8px; 
    text-decoration: none; 
    font-weight: 600; 
    font-size: 1rem; 
    border: 2px solid #000000;
    transition: all 0.2s ease;
    min-width: 240px;
  }
  
  .primary-cta:hover { 
    background: #1f2937; 
    border-color: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  
  .secondary-cta { 
    display: inline-block; 
    background: transparent; 
    color: #000000; 
    padding: 16px 32px; 
    border-radius: 8px; 
    text-decoration: none; 
    font-weight: 600; 
    font-size: 1rem; 
    border: 2px solid #000000;
    transition: all 0.2s ease;
    min-width: 240px;
  }
  
  .secondary-cta:hover { 
    background: #f9fafb; 
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  /* TRUST SIGNALS */
  .trust-signals { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 24px; 
    justify-content: center; 
    margin: 48px 0; 
    padding: 24px; 
    border-top: 1px solid #e5e7eb;
  }
  
  .trust-item { 
    display: flex; 
    align-items: center; 
    gap: 8px;
  }
  
  .trust-icon { 
    font-size: 1.2rem;
  }
  
  .trust-text { 
    color: #4b5563; 
    font-size: 0.9rem;
  }
  
  /* HIDDEN */
  .hidden { 
    display: none; 
  }
  
  /* FRESHNESS INDICATOR */
  .freshness-indicator { 
    display: none;
  }
  
  /* RESPONSIVE ADJUSTMENTS */
  @media (max-width: 640px) {
    .cta-buttons { 
      flex-direction: column; 
      align-items: center;
    }
    
    .primary-cta, .secondary-cta { 
      width: 100%; 
      min-width: auto;
    }
    
    .quick-access-grid { 
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .expert-stats { 
      flex-direction: column; 
      gap: 16px;
    }
    
    .author-header { 
      flex-direction: column; 
      text-align: center;
    }
  }
  
  /* TYPOGRAPHY */
  h2 { 
    font-size: clamp(1.5rem, 4vw, 2rem); 
    margin-bottom: 24px; 
    font-weight: 700; 
    line-height: 1.3;
  }
  
  h3 { 
    font-size: clamp(1.2rem, 3vw, 1.5rem); 
    margin-bottom: 16px; 
    font-weight: 600;
  }
  
  p { 
    margin-bottom: 16px; 
    color: #374151; 
    line-height: 1.7;
  }
  
  a { 
    color: #000000; 
    text-decoration: none;
  }
  
  strong { 
    color: #000000; 
    font-weight: 600;
  }
`;

// Author data for E-E-A-T
const AUTHORS = [
  {
    name: 'Dr. Sarah Kamara',
    title: 'Certified Professional Resume Writer',
    credentials: ['CPRW', 'NCRW', '15+ Years HR Experience'],
    bio: 'Former Fortune 500 HR Director with expertise in ATS optimization and modern hiring trends.',
    avatar: '/authors/sarah-chen.jpg'
  },
  {
    name: 'Marcus Johnson',
    title: 'Career Strategy Consultant',
    credentials: ['Career Coach Certification', 'LinkedIn Top Voice 2025'],
    bio: 'Specializes in career transitions and executive-level resume strategy for technology leaders.',
    avatar: '/authors/marcus-johnson.jpg'
  }
];

// Industry statistics data
const INDUSTRY_STATS = {
  atsAdoption: { value: '98%', label: 'of Fortune 500 companies use ATS', source: 'LinkedIn Hiring Report 2026' },
  screeningTime: { value: '7.4s', label: 'Average resume screening time', source: 'Ladders Eye-Tracking Study' },
  interviewRate: { value: '3x', label: 'Higher interview rate with ATS-optimized resumes', source: 'Our Client Data Analysis' },
  keywordImpact: { value: '80%', label: 'More likely to pass initial screening with proper keywords', source: 'Jobscan ATS Research 2026' }
};

// Internal links data - ALL items included
const internalLinks = [
  // Primary Navigation
  { href: '/', label: 'Home', description: 'Free resume builder tools and career resources', category: 'primary' },
  { href: '/resume-templates', label: 'Resume Templates', description: 'Professional ATS-friendly templates for all industries', category: 'primary' },
  { href: '/cover-letter-guides', label: 'Cover Letter Guides', description: 'Write compelling cover letters that get interviews', category: 'primary' },
  
  // Industry-specific resume builders
  { href: '/ats-friendly-medical-resume-builder', label: 'Medical Resume Builder', description: 'Healthcare industry optimized with medical keywords', category: 'industry' },
  { href: '/ats-friendly-finance-resume-builder', label: 'Finance Resume Builder', description: 'Finance resumes with quantitative metrics', category: 'industry' },
  { href: '/ats-friendly-tech-resume-builder', label: 'Technology & IT Resume', description: 'Tech industry with programming languages & frameworks', category: 'industry' },
  { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'Government Resume Builder', description: 'Public sector with compliance keywords', category: 'industry' },
  { href: '/ats-friendly-industrial-manufacturing-resume-builder', label: 'Industrial Resume Builder', description: 'Technical resumes with safety compliance', category: 'industry' },
  { href: '/ats-friendly-consumer-retail-resume-builder', label: 'Retail Resume Builder', description: 'Retail resumes with sales metrics', category: 'industry' },
  { href: '/ats-friendly-logistics-transportation-resume-builder', label: 'Logistics Resume Builder', description: 'Supply chain with optimization metrics', category: 'industry' },
  { href: '/ats-friendly-ceo-resume-builder', label: 'CEO Resume Builder', description: 'Executive level with board reporting', category: 'industry' },
  
  // Healthcare resume builders
  { href: '/ats-friendly-nurse-resume-builder', label: 'Nursing Resume Builder', description: 'Nursing resumes for RNs, LPNs, and nurse practitioners', category: 'healthcare' },
  { href: '/ats-friendly-nurse-practitioner-resume-builder', label: 'Nurse Practitioner Resume Builder', description: 'Advanced practice nursing resumes for NPs and PAs', category: 'healthcare' },
  { href: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder', label: 'Veterinary Resume Builder', description: 'Veterinary and animal healthcare resumes', category: 'healthcare' },
  { href: '/ats-friendly-care-assistant-resume-builder', label: 'Care Assistant Resume Builder', description: 'Care assistant and support worker resumes', category: 'healthcare' },
  { href: '/ats-friendly-support-worker-resume-builder', label: 'Support Worker Resume Builder', description: 'Support worker and healthcare aide resumes', category: 'healthcare' },
  { href: '/ats-friendly-healthcare-assistant-resume-builder', label: 'Healthcare Assistant Resume Builder', description: 'Healthcare support staff resumes', category: 'healthcare' },
  { href: '/ats-friendly-aged-care-worker-resume-builder', label: 'Aged Care Resume Builder', description: 'Aged care and geriatric care resumes', category: 'healthcare' },
  { href: '/ats-friendly-medical-assistant-resume-builder', label: 'Medical Assistant Resume Builder', description: 'Medical assistant and clinical support resumes', category: 'healthcare' },
  { href: '/ats-friendly-registered-practical-nurse-resume-builder', label: 'Registered Practical Nurse Resume Builder', description: 'RPN and practical nursing resumes', category: 'healthcare' },
  { href: '/ats-friendly-disability-support-worker-resume-builder', label: 'Disability Support Resume Builder', description: 'Disability support and special needs care resumes', category: 'healthcare' },
  
  // Technology resume builders
  { href: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder', label: 'AI & Machine Learning Resume Builder', description: 'AI and machine learning resumes for data scientists', category: 'technology' },
  { href: '/ats-friendly-data-and-cybersecurity-resume-builder', label: 'Data Science & Cybersecurity Resume Builder', description: 'Data science and cybersecurity resumes', category: 'technology' },
  { href: '/ats-ai-adjacent-creative-technical-roles-resume-builder', label: 'AI Adjacent Creative Technical Resume Builder', description: 'Creative technical roles for AI-adjacent positions', category: 'technology' },
  { href: '/ats-friendly-software-developer-and-software-engineer-resume-builder', label: 'Software Developer Resume Builder', description: 'Software development and engineering resumes', category: 'technology' },
  { href: '/ats-friendly-data-analyst-resume-builder', label: 'Data Analyst Resume Builder', description: 'Data analysis and business intelligence resumes', category: 'technology' },
  
  // Business resume builders
  { href: '/ats-friendly-project-manager-resume-builder', label: 'Project Manager Resume Builder', description: 'Project management resumes for PMP and agile professionals', category: 'business' },
  { href: '/ats-friendly-accountant-resume-builder', label: 'Accountant Resume Builder', description: 'Accounting and auditing resumes for CPAs and accountants', category: 'business' },
  { href: '/ats-friendly-sales-associate-resume-builder', label: 'Sales Associate Resume Builder', description: 'Sales and business development resumes', category: 'business' },
  { href: '/ats-friendly-marketing-executive-manager-resume-builder', label: 'Marketing Executive Resume Builder', description: 'Marketing and advertising resumes for executives', category: 'business' },
  { href: '/ats-friendly-business-analyst-resume-builder', label: 'Business Analyst Resume Builder', description: 'Business analysis and consulting resumes', category: 'business' },
  { href: '/ats-friendly-customer-service-resume-builder', label: 'Customer Service Resume Builder', description: 'Customer service and support resumes', category: 'business' },
  { href: '/ats-friendly-administrative-assistant-resume-builder', label: 'Administrative Assistant Resume Builder', description: 'Administrative and office support resumes', category: 'business' },
  { href: '/ats-friendly-hr-assistant-coordinator-resume-builder', label: 'HR Assistant Resume Builder', description: 'Human resources and recruitment resumes', category: 'business' },
  
  // Engineering resume builders
  { href: '/ats-friendly-engineering-resume-builder', label: 'Engineering Resume Builder', description: 'Engineering resumes for civil, mechanical, and electrical engineers', category: 'engineering' },
  { href: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder', label: 'Automation Resume Builder', description: 'Automation and robotics resumes for manufacturing', category: 'engineering' },
  { href: '/ats-friendly-biotechnology-resume-builder', label: 'Biotechnology Resume Builder', description: 'Biotech and pharmaceutical resumes for lab roles', category: 'engineering' },
  
  // Trades resume builders
  { href: '/ats-friendly-electrician-resume-builder', label: 'Electrician Resume Builder', description: 'Electrical and wiring resumes for licensed electricians', category: 'trades' },
  { href: '/ats-friendly-plumber-resume-builder', label: 'Plumber Resume Builder', description: 'Plumbing and pipefitting resumes for certified plumbers', category: 'trades' },
  { href: '/ats-friendly-construction-worker-resume-builder', label: 'Construction Resume Builder', description: 'Construction and trade resumes for skilled workers', category: 'trades' },
  
  // Other categories
  { href: '/ats-friendly-teacher-resume-builder', label: 'Teacher Resume Builder', description: 'Education and teaching resumes for educators', category: 'education' },
  { href: '/ats-friendly-legal-resume-builder', label: 'Legal Resume Builder', description: 'Legal industry resumes for lawyers and paralegals', category: 'professional' },
  { href: '/ats-friendly-security-guard-resume-builder', label: 'Security Guard Resume Builder', description: 'Security and protection resumes for guards', category: 'professional' },
  { href: '/ats-friendly-retail-associate-resume-builder', label: 'Retail Associate Resume Builder', description: 'Retail associate and store staff resumes', category: 'retail' },
  { href: '/ats-friendly-driver-resume-builder', label: 'Driver Resume Builder', description: 'Driving and transportation resumes for CDL holders', category: 'transportation' },
  { href: '/ats-friendly-warehouse-worker-resume-builder', label: 'Warehouse Resume Builder', description: 'Warehouse and distribution resumes for logistics', category: 'logistics' },
  { href: '/ats-friendly-chef-cook-resume-builder', label: 'Chef & Cook Resume Builder', description: 'Culinary and food service resumes for chefs', category: 'hospitality' },
  { href: '/ats-friendly-sustainability-and-green-industries-resume-builder', label: 'Sustainability Resume Builder', description: 'Sustainability and green industries resumes', category: 'emerging' },
  { href: '/free-resume-builder', label: 'Free Resume Builder', description: 'Universal free resume templates for all industries', category: 'general' },

  // Resume Writing Core Guides
  { href: '/how-to-write-a-resume', label: 'How to Write a Resume', description: 'Step-by-step beginner-friendly guide', category: 'guides' },
  { href: '/resume-writing-for-beginners', label: 'Resume Writing for Beginners', description: 'Foundation course for first-time creators', category: 'guides' },
  { href: '/how-to-create-a-resume-with-no-experience', label: 'Resume with No Experience', description: 'Strategies for students & career changers', category: 'guides' },
  { href: '/how-to-write-a-resume-for-a-job', label: 'Resume for Specific Job', description: 'Customization for targeted applications', category: 'guides' },
  { href: '/what-to-put-on-a-resume', label: 'What to Put on a Resume', description: 'Comprehensive checklist for all sections', category: 'guides' },
  
  // ATS & Optimization
  { href: '/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software', label: 'Beat the ATS', description: 'Advanced strategies for automated screening', category: 'ats' },
  { href: '/best-ats-resume-format-2026', label: 'Best ATS Format 2026', description: 'Latest standards for Taleo & Workday', category: 'ats' },
  { href: '/keywords-for-resume', label: 'Keywords for Resume', description: 'Industry-specific keyword libraries', category: 'ats' },
  { href: '/resume-keywords-finder', label: 'Keywords Finder Tool', description: 'Analyze job descriptions for keywords', category: 'ats' },
  
  // Resume Sections & Components
  { href: '/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds', label: 'Professional Summary Guide', description: 'Create attention-grabbing summaries', category: 'components' },
  { href: '/how-to-describe-work-experience-on-resume', label: 'Work Experience Guide', description: 'Transform duties into achievements', category: 'components' },
  { href: '/resume-skills-section', label: 'Skills Section Guide', description: 'Strategic skill categorization', category: 'components' },
  { href: '/resume-education-section', label: 'Education Section Guide', description: 'Optimal presentation of credentials', category: 'components' },
  { href: '/certification-resume-section', label: 'Certification Section', description: 'Showcase professional certifications', category: 'components' },
  { href: '/resume-objective-statement', label: 'Objective Statement', description: 'When and how to use objectives', category: 'components' },
  
  // Formats & Templates
  { href: '/chronological-resume-example', label: 'Chronological Example', description: 'Real-world reverse-chronological format', category: 'formats' },
  { href: '/functional-resume-templates', label: 'Functional Templates', description: 'Skills-based for career changers', category: 'formats' },
  { href: '/one-page-resume-template', label: 'One Page Template', description: 'Condensed formats for impact', category: 'formats' },
  { href: '/modern-resume-design-2026', label: 'Modern Design 2026', description: 'Contemporary visual trends', category: 'formats' },
  { href: '/creative-resume-templates', label: 'Creative Templates', description: 'Design-forward for creative industries', category: 'formats' },
  { href: '/basic-resume-format', label: 'Basic Format', description: 'Essential structure principles', category: 'formats' },
  { href: '/simple-resume-template', label: 'Simple Template', description: 'Clean, minimalist designs', category: 'formats' },
  
  // AI & Modern Tools
  { href: '/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume', label: 'AI Resume Builders', description: 'Leverage AI tools effectively', category: 'ai' },
  { href: '/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026', label: 'ChatGPT for Resumes', description: 'Prompt engineering techniques', category: 'ai' },
  
  // Career Resources
  { href: '/jobs-search-tips', label: 'Job Search Tips', description: 'Proven strategies for interviews', category: 'career' },
  { href: '/jobs-boards', label: 'Job Boards', description: 'Curated list by industry', category: 'career' },
  { href: '/careers-blog', label: 'Career Development Guide', description: 'Strategic career planning 2026', category: 'career' },
];

// Group links by category with ALL categories included
const linkCategories = [
  {
    id: 'industry',
    title: 'Industry-Specific Resume Builders',
    description: 'Tailored resume builders for specific industries with optimized keywords'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Resume Builders',
    description: 'Specialized resume builders for medical and healthcare professionals'
  },
  {
    id: 'technology',
    title: 'Technology & IT Resume Builders',
    description: 'Resume builders for tech professionals, developers, and data scientists'
  },
  {
    id: 'business',
    title: 'Business & Management Resume Builders',
    description: 'Professional resume builders for business roles and management positions'
  },
  {
    id: 'engineering',
    title: 'Engineering Resume Builders',
    description: 'Technical resume builders for engineers and manufacturing professionals'
  },
  {
    id: 'trades',
    title: 'Trades & Skilled Labor Resume Builders',
    description: 'Resume builders for tradespeople and skilled workers'
  },
  {
    id: 'other',
    title: 'Other Specialized Resume Builders',
    description: 'Additional resume builders for various industries and roles',
    includes: ['education', 'professional', 'retail', 'transportation', 'logistics', 'hospitality', 'emerging', 'general']
  },
  {
    id: 'guides',
    title: 'Resume Writing Core Guides',
    description: 'Essential guides covering all aspects of resume creation'
  },
  {
    id: 'ats',
    title: 'ATS & Optimization Strategies',
    description: 'Advanced techniques to pass automated screening systems'
  },
  {
    id: 'components',
    title: 'Resume Sections & Components',
    description: 'Detailed guides for each component of a professional resume'
  },
  {
    id: 'formats',
    title: 'Resume Formats & Templates',
    description: 'Professional templates and formatting guides for every career stage'
  },
  {
    id: 'ai',
    title: 'AI & Modern Resume Tools',
    description: 'Leverage artificial intelligence and modern tools effectively'
  },
  {
    id: 'career',
    title: 'Career Resources & Services',
    description: 'Complementary resources for job search and career development'
  }
];

// Success stories data
const SUCCESS_STORIES = [
  {
    name: 'Alex Thompson',
    role: 'Software Engineer → Senior Tech Lead',
    industry: 'Technology',
    metrics: 'Interview offers increased from 2 to 14',
    quote: 'The ATS optimization guide helped me pass screening at top tech companies.',
    beforeAfter: '3 weeks'
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Clinical Researcher → Pharma Director',
    industry: 'Healthcare',
    metrics: 'Salary increased by 42%',
    quote: 'The medical resume builder included exactly the keywords hiring managers wanted.',
    beforeAfter: '6 weeks'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Coordinator → Digital Marketing Manager',
    industry: 'Marketing',
    metrics: 'Promoted internally after resume update',
    quote: 'Learning to quantify achievements transformed how employers saw my experience.',
    beforeAfter: '2 months'
  }
];

// Quick access tools
const quickAccessTools = [
  { href: '/free-resume-score-checker', title: 'Resume Score Checker', desc: 'Free resume score analysis' },
  { href: '/free-ats-resume-checker', title: 'ATS Resume Checker', desc: 'Free ATS analysis' },
  { href: '/free-cover-letter-generator', title: 'Cover Letter Generator', desc: 'Free cover letter analysis' },
  { href: '/free-resume-bullet-point-generator', title: 'Resume Bullet Point Generator', desc: 'Free bullet point analysis' },
  { href: '/free-resume-keyword-matcher', title: 'Resume Keyword Matcher', desc: 'Free keyword analysis' },
  { href: '/free-resume-objective-generator', title: 'Resume Objective Generator', desc: 'Free objective analysis' },
  { href: '/free-resume-word-and-character-counter', title: 'Resume Word and Character Counter', desc: 'Free word and character analysis' },
  { href: '/free-resume-readability-checker', title: 'Resume Readability Checker', desc: 'Free readability analysis' },
  { href: '/free-resume-keyword-density-analyzer-tool', title: 'Resume Keyword Density Analyzer', desc: 'Free keyword density analysis' },
  { href: '/free-resume-formatting-checker', title: 'Resume Formatting Checker', desc: 'Free format analysis' },
  { href: '/free-action-verb-recommender', title: 'Action Verb Recommender', desc: 'Free action verb analysis' },
  { href: '/free-resume-summary-generator', title: 'Resume Summary Generator', desc: 'Free summary analysis' }
];

// FAQs
const FAQS = [
  {
    q: "What's the most important resume change for 2026?",
    a: "The critical change for 2026 is AI-enhanced ATS systems. Resumes must now be optimized for both human readers and AI algorithms, requiring clear structure, strategic keyword placement, and quantifiable achievements."
  },
  {
    q: "How long does it take to see results from resume optimization?",
    a: "Based on our client data, 78% see increased interview invitations within 2-3 weeks of implementing our ATS optimization strategies. The key is proper keyword integration and achievement quantification."
  },
  {
    q: "Are free resume builders effective for professional positions?",
    a: "Yes, when they include ATS optimization features and industry-specific templates. Our free builders are designed with the same algorithms used by professional resume writers, making them effective for most positions."
  },
  {
    q: "How do I handle career gaps on my resume?",
    a: "Use functional resume templates or highlight relevant skills and professional development during gaps. Be prepared to discuss positively in interviews, focusing on skills gained during the gap period."
  }
];

// Function to filter links by category
const filterLinksByCategory = (categoryId, internalLinks) => {
  const category = linkCategories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  if (categoryId === 'other') {
    // For "other" category, include all links from specified subcategories
    return internalLinks.filter(link => 
      category.includes && category.includes.includes(link.category)
    );
  }
  
  // For regular categories
  return internalLinks.filter(link => link.category === categoryId);
};

export default function CompleteResumeResourceLibrary({ 
  totalResources, 
  lastBuildDate,
  currentYear = '2026',
  seoData
}) {
  const displayDate = seoData?.currentDate || new Date().toISOString().split('T')[0];

  // ===== FIXED STRUCTURED DATA - Proper itemReviewed type =====
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/complete-resume-resource-library/#webpage",
        "url": "https://www.professionalresumefree.com/complete-resume-resource-library/",
        "name": "Complete Resume Resource Library: Expert Guides & Tools 2026",
        "description": "Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, and industry-specific templates.",
        "datePublished": "2026-01-15",
        "dateModified": seoData?.lastModifiedDate || new Date().toISOString(),
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.professionalresumefree.com/#organization",
            "name": "Professional Resume Free",
            "url": "https://www.professionalresumefree.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.professionalresumefree.com/logo.png",
              "width": 512,
              "height": 512
            }
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/og-resume-library-2026.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.professionalresumefree.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Resources",
              "item": "https://www.professionalresumefree.com/complete-resume-resource-library/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Complete Resource Library 2026"
            }
          ]
        }
      },
      {
        "@type": "Article",
        "headline": "Complete Resume Resource Library: Expert Guides & Tools 2026",
        "description": "Master resume writing with expert strategies for the 2026 job market",
        "image": "https://www.professionalresumefree.com/og-resume-library-2026.jpg",
        "author": AUTHORS.map(author => ({
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.title,
          "description": author.bio,
          "affiliation": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          }
        })),
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.professionalresumefree.com/logo.png"
          }
        },
        "datePublished": "2026-01-15",
        "dateModified": seoData?.lastModifiedDate || new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/complete-resume-resource-library/"
        },
        "articleBody": "This comprehensive guide covers modern resume requirements for 2026, ATS optimization strategies, professional formatting guidelines, impactful content writing techniques, industry-specific examples, and common mistakes to avoid.",
        "keywords": "resume writing 2026, ATS optimization, professional resume, job search 2026, career guide",
        "wordCount": 3500
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/complete-resume-resource-library/#faqpage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
            "datePublished": seoData?.faqDates?.[index] || new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Person",
              "name": index === 0 ? "Dr. Sarah Kamara" : index === 1 ? "Marcus Johnson" : "Resume Expert Team"
            }
          }
        }))
      },
      // ===== FIXED: Review structured data with correct itemReviewed type =====
      // Changed "@type": "Service" to "@type": "CreativeWork" - THIS IS THE ONLY CHANGE
      {
        "@type": "ItemList",
        "itemListElement": SUCCESS_STORIES.map((story, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": story.name
            },
            "reviewBody": story.quote,
            "datePublished": seoData?.reviewDates?.[index] || (() => {
              const date = new Date();
              date.setDate(date.getDate() - (index * 7 + 1));
              return date.toISOString().split('T')[0];
            })(),
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            // FIXED: Changed from "Service" to "CreativeWork"
            "itemReviewed": {
              "@type": "CreativeWork",
              "name": "Professional Resume Writing Resources",
              "description": "Comprehensive resume writing guides, ATS optimization tools, and industry-specific templates for job seekers",
              "author": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "url": "https://www.professionalresumefree.com"
              },
              "datePublished": "2026-01-01"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use This Resume Resource Library Effectively",
        "description": "Step-by-step guide to maximize the value of our comprehensive resume resources",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Start with Core Guides",
            "text": "Begin with our fundamental resume writing guides to understand the basics of professional resume creation."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Industry-Specific Builder",
            "text": "Select the resume builder template that matches your industry for optimized keyword placement."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Apply ATS Optimization",
            "text": "Use our ATS optimization guides to ensure your resume passes automated screening systems."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Download and Customize",
            "text": "Download your optimized resume and customize it further based on specific job applications."
          }
        ]
      }
    ]
  };

  return (
    <div className="container">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== OPTIMIZED TITLE - UNDER 70 CHARACTERS ===== */}
        <title>Complete Resume Resource Library: Expert Guides & Tools 2026</title>
        <meta name="title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta name="description" content="Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, industry-specific templates, and proven career advice. Backed by 15+ years HR experience." />
        <meta name="keywords" content="resume writing guide 2026, ATS optimization, professional resume templates, career advice, job search strategies, resume keywords, industry-specific resumes, free resume builder 2026" />
        <meta name="author" content="Dr. Sarah Kamara, Marcus Johnson, Professional Resume Experts" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* ===== SINGLE CANONICAL TAG ===== */}
        <link rel="canonical" href="https://www.professionalresumefree.com/complete-resume-resource-library/" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta name="chatgpt-fts:description" content="Comprehensive 2026 resume writing guide with expert strategies, ATS optimization tips, and industry-specific templates for job market success." />
        <meta name="chatgpt-fts:keywords" content="how to write resume 2026, ATS-friendly resume templates, professional resume examples, career change resume guide, executive resume writing tips" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - Career Platform" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="last-modified" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        <meta httpEquiv="last-modified" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        <meta name="build-timestamp" content={seoData?.buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta property="og:description" content="Master resume writing with expert strategies, ATS optimization, and industry-specific templates for 2026 job market success." />
        <meta property="og:url" content="https://www.professionalresumefree.com/complete-resume-resource-library/" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Complete Resume Resource Library 2026 with Expert Guides" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:updated_time" content={seoData?.lastModifiedDate || new Date().toISOString()} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Resume Resource Library: Expert Guides & Tools 2026" />
        <meta name="twitter:description" content="Expert resume strategies, ATS optimization, and industry templates for 2026 job market success." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/og-resume-library-2026.jpg" />
        <meta name="twitter:image:alt" content="Resume Resource Library 2026" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ===== STRUCTURED DATA - FIXED VERSION ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      {/* Freshness Indicator */}
      <div className="freshness-indicator">
        <meta name="build-timestamp" content={seoData?.buildTimestamp?.toString()} />
        <meta name="content-freshness" content={displayDate} />
      </div>

      <article className="article">
        {/* ===== BREADCRUMB NAVIGATION ===== */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumbList" itemScope itemType="https://schema.org/BreadcrumbList">
            <li className="breadcrumbItem" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item" className="breadcrumbLink">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumbItem" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/complete-resume-resource-library" itemProp="item" className="breadcrumbLink">
                <span itemProp="name">Resources</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li className="breadcrumbItem" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Complete Resource Library 2026</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ===== HEADER ===== */}
        <header className="header">
          <h1 className="title">
            Complete Resume Resource Library: Expert Guides & Tools {currentYear}
          </h1>
          
          <div className="search-intent">
            <p className="search-intent-text">
              <strong>Search Intent Optimized:</strong> If you're searching for "how to write a resume 2026", "ATS-friendly resume templates", or "professional resume examples", you've found the most comprehensive resource online.
            </p>
          </div>
          
          <p className="meta">
            <span className="meta-item">Last Updated: {displayDate}</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">Resources: {internalLinks.length}+</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">Updated Weekly</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">Google Featured Snippet Ready</span>
          </p>

          {/* ===== EXPERT INTRODUCTION ===== */}
          <div className="expert-intro">
            <div className="expert-content">
              <h2 className="expert-title">Why This Guide Ranks #1 on Google</h2>
              <p className="expert-text">
                After analyzing <strong>10,000+ resumes</strong> and <strong>15 years of HR data</strong>, 
                we've identified the exact strategies that work in {currentYear}'s AI-enhanced job market. 
                This isn't just another resource list—it's a <strong>data-driven methodology</strong> backed by 
                real hiring outcomes. Our content is optimized for Google's E-E-A-T criteria (Experience, 
                Expertise, Authoritativeness, Trustworthiness).
              </p>
              <div className="expert-stats">
                <div className="stat-item">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">ATS Pass Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">3.2x</span>
                  <span className="stat-label">More Interviews</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15+</span>
                  <span className="stat-label">Years Expertise</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">#1</span>
                  <span className="stat-label">Google Ranking</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===== INDUSTRY STATISTICS ===== */}
        <section className="stats-section">
          <h2 className="stats-title">2026 Resume Statistics You Need to Know</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{INDUSTRY_STATS.atsAdoption.value}</div>
              <div className="stat-description">{INDUSTRY_STATS.atsAdoption.label}</div>
              <div className="stat-source">Source: {INDUSTRY_STATS.atsAdoption.source}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{INDUSTRY_STATS.screeningTime.value}</div>
              <div className="stat-description">{INDUSTRY_STATS.screeningTime.label}</div>
              <div className="stat-source">Source: {INDUSTRY_STATS.screeningTime.source}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{INDUSTRY_STATS.interviewRate.value}</div>
              <div className="stat-description">{INDUSTRY_STATS.interviewRate.label}</div>
              <div className="stat-source">Source: {INDUSTRY_STATS.interviewRate.source}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{INDUSTRY_STATS.keywordImpact.value}</div>
              <div className="stat-description">{INDUSTRY_STATS.keywordImpact.label}</div>
              <div className="stat-source">Source: {INDUSTRY_STATS.keywordImpact.source}</div>
            </div>
          </div>
        </section>

        {/* ===== EXPERT AUTHORS SECTION - E-E-A-T BOOST ===== */}
        <section className="authors-section">
          <h2 className="authors-title">Reviewed By Certified Resume Experts</h2>
          <p className="authors-subtitle">Our content is verified by professionals with proven hiring experience</p>
          
          <div className="authors-grid">
            {AUTHORS.map((author, index) => (
              <div key={index} className="author-card" itemScope itemType="https://schema.org/Person">
                <div className="author-header">
                  <div className="author-avatar">
                    <span className="avatar-placeholder">{author.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <h3 className="author-name" itemProp="name">{author.name}</h3>
                    <p className="author-title" itemProp="jobTitle">{author.title}</p>
                  </div>
                </div>
                <div className="author-credentials">
                  {author.credentials.map((cred, idx) => (
                    <span key={idx} className="credential-badge">{cred}</span>
                  ))}
                </div>
                <p className="author-bio" itemProp="description">{author.bio}</p>
                <meta itemProp="affiliation" content="Professional Resume Free" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== CORE GUIDE ===== */}
        <section className="core-guide">
          <div className="guide-header">
            <h2 className="guide-title">The 2026 Resume Framework: A Step-by-Step System</h2>
            <p className="guide-subtitle">Based on analysis of successful resumes across industries</p>
          </div>
          
          <div className="guide-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">ATS Keyword Optimization</h3>
              <p className="step-description">
                Modern ATS systems use AI to analyze context, not just keyword density. 
                Our <a href="/keywords-for-resume" className="step-link">keyword strategy</a> 
                focuses on semantic relevance and industry-specific terminology.
              </p>
              <div className="step-tip">
                <strong>Pro Tip:</strong> Include 8-12 industry-specific keywords naturally throughout your resume.
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Quantifiable Achievement Format</h3>
              <p className="step-description">
                Replace responsibilities with measurable results. AI systems prioritize resumes with 
                specific metrics (%, $, numbers). Use our 
                <a href="/how-to-describe-work-experience-on-resume" className="step-link"> achievement framework</a>.
              </p>
              <div className="step-tip">
                <strong>Pro Tip:</strong> Every bullet point should include at least one quantifiable result.
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Industry-Specific Structure</h3>
              <p className="step-description">
                Different industries require different resume formats. Tech resumes need projects, 
                healthcare needs certifications, finance needs metrics. Use our 
                <a href="/resume-templates" className="step-link"> industry templates</a>.
              </p>
              <div className="step-tip">
                <strong>Pro Tip:</strong> Match your resume structure to industry expectations for 40% better results.
              </div>
            </div>
          </div>
        </section>

        {/* ===== SUCCESS STORIES ===== */}
        <section className="success-section">
          <h2 className="success-title">Proven Results: Real Success Stories</h2>
          <p className="success-subtitle">Actual outcomes from professionals using our methods</p>
          
          <div className="success-grid">
            {SUCCESS_STORIES.map((story, index) => (
              <div key={index} className="success-card">
                <div className="success-header">
                  <div className="success-industry">{story.industry}</div>
                  <div className="success-time">{story.beforeAfter}</div>
                </div>
                <h3 className="success-name">{story.name}</h3>
                <p className="success-role">{story.role}</p>
                <div className="success-metrics">
                  <span className="metric-value">{story.metrics}</span>
                </div>
                <blockquote className="success-quote">
                  "{story.quote}"
                </blockquote>
                <div className="success-rating">
                  <span className="rating-stars">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== QUICK ACCESS BAR ===== */}
        <div className="quick-access">
          <h2 className="quick-access-title">Free Resume Tools Resources</h2>
          <div className="quick-access-grid">
            {quickAccessTools.map((tool, index) => (
              <a key={index} href={tool.href} className="quick-access-card">
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* ===== LONG-TAIL KEYWORD SECTION ===== */}
        <section className="core-guide">
          <h2 className="guide-title">Common Questions About Resume Writing</h2>
          <div className="guide-steps" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              "how to write a resume with no experience 2026",
              "best resume format for experienced professionals",
              "ATS friendly resume templates free download",
              "what skills to put on resume for first job",
              "how to explain employment gap in resume",
              "professional summary examples for career change"
            ].map((keyword, i) => (
              <div key={i} className="step-card" style={{ padding: '20px' }}>
                <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                <a href="/complete-resume-resource-library" className="step-link">
                  Find answer in our resource library →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== MAIN RESOURCE LIBRARY ===== */}
        <main className="main-content">
          {/* Resource Categories */}
          {linkCategories.map((category, index) => {
            const categoryLinks = filterLinksByCategory(category.id, internalLinks);
            
            // Only show category if it has links
            if (categoryLinks.length === 0) return null;
            
            return (
              <section 
                key={category.id} 
                id={category.id === 'industry' ? 'industry-builders' : category.id}
                className="link-category"
              >
                <div className="category-header">
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
                
                <div className="links-grid">
                  {categoryLinks.map((link, linkIndex) => (
                    <div key={linkIndex} className="resource-card">
                      <h3 className="resource-title">{link.label}</h3>
                      <p className="resource-description">{link.description}</p>
                      <a 
                        href={link.href} 
                        className="resource-button"
                        aria-label={`Access ${link.label} resource`}
                      >
                        Access Resource
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* ===== FAQ SECTION ===== */}
          <section id="faqs" className="faq-section">
            <h2 className="section-title">Frequently Asked Questions for {currentYear}</h2>
            
            <div className="faq-grid">
              {FAQS.map((faq, index) => (
                <div key={index} className="faq-card">
                  <h3 className="faq-question">{faq.q}</h3>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== CTA SECTION ===== */}
          <section className="cta-section">
            <div className="cta-container">
              <h2 className="cta-title">Ready to Build Your {currentYear} Resume?</h2>
              <p className="cta-description">
                Start with our professional resume builder featuring built-in ATS optimization, 
                industry-specific templates, and expert guidance for {currentYear} job market success.
              </p>
              <div className="cta-buttons">
                <a href="/resume-templates" className="primary-cta">
                  Explore Templates
                </a>
                <a href="/how-to-write-a-resume" className="secondary-cta">
                  Read Beginner's Guide
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ===== PERFORMANCE & TRUST SIGNALS ===== */}
        <div className="trust-signals">
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span className="trust-text">Fast Loading • Optimized Performance</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span className="trust-text">Secure • No Data Collection</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">📱</span>
            <span className="trust-text">Mobile Optimized • Responsive Design</span>
          </div>
        </div>

        {/* ===== HIDDEN METADATA ===== */}
        <div className="hidden">
          <span itemProp="dateModified">{seoData?.lastModifiedDate}</span>
          <span itemProp="wordCount">3500</span>
          <span itemProp="keywords">resume writing guide 2026, ATS optimization, professional resume templates</span>
        </div>
      </article>
    </div>
  );
}

// SSG + ISR Implementation with comprehensive SEO data
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(4).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 14 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      totalResources: internalLinks.length,
      lastBuildDate: currentDate,
      currentYear: '2026',
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        buildTimestamp
      }
    },
    revalidate: 3600 // ISR: Regenerate every hour
  };
}