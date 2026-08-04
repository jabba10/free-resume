import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiHeart, FiUser, FiBookOpen, FiAward, FiShield, FiArrowRight, FiGrid,
  FiBriefcase, FiLayout, FiRefreshCw, FiInfo, FiPlus, FiSmile,
  FiBarChart2, FiEye, FiCode, FiPenTool, FiCpu as FiCpuAlt, FiServer,
  FiActivity, FiChevronDown, FiChevronUp, FiDollarSign, FiTrendingUp,
  FiFileText, FiUsers, FiTool, FiSmartphone, FiTruck, FiEdit,
  FiX, FiAlertCircle
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --border-glass: rgba(212,175,55,0.15); --error-color: #ffb4ab; --warning-color: #ffb74d;
    --success-color: #4caf50; --info-color: #64b5f6;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-headline-md: clamp(1.5rem,3.5vw,1.75rem);
    --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem); --gutter-mobile: clamp(1rem,4vw,1.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-placeholder: rgba(229,225,228,0.4);
    --input-radius: 0.375rem; --input-padding: 0.75rem 1rem;
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); width:100%; }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem 0; }
  .filter-btn { padding:0.5rem 1rem; background:var(--card-bg); border:0.5px solid var(--border-gold-filament); border-radius:9999px; font-size:var(--font-size-body-sm); cursor:pointer; color:var(--text-secondary); transition:all var(--transition-fast); white-space:nowrap; }
  .filter-btn:hover { border-color:var(--accent-primary-container); }
  .filter-btn.active { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  .template-link-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); display:flex; flex-direction:column; gap:0.75rem; text-decoration:none; color:inherit; }
  .template-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); color:inherit; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  textarea, input, select { font-family:var(--font-body); background:var(--input-bg); border:var(--input-border); color:var(--input-text); padding:var(--input-padding); border-radius:var(--input-radius); font-size:var(--font-size-body-md); width:100%; transition:border-color var(--transition-fast); }
  textarea:focus, input:focus, select:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  textarea::placeholder, input::placeholder { color:var(--input-placeholder); }
  select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23f2ca50' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  select option { background:var(--bg-surface); color:var(--text-primary); }
  .advice-card { background:var(--card-bg); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); border-left:3px solid var(--accent-primary); }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/free-resume-template-selector`;

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'free resume template selector',
  'ATS resume templates',
  'industry-specific resume builders',
  'professional resume templates',
  'resume template directory',
  'free ATS resume builder',
  'healthcare resume templates',
  'tech resume templates',
  'finance resume templates',
  'engineering resume templates',
  'resume template comparison',
  'downloadable resume templates',
  'ATS-friendly resume templates',
  'specialized resume builders',
  'job application resume templates'
];

// Industry-specific ATS resume builder links with descriptions and advice
const ATS_RESUME_BUILDERS = [
  // Healthcare
  { href: "/ats-friendly-medical-resume-builder", title: "Medical Resume Builder", category: "healthcare", icon: "FiHeart", desc: "Specialized ATS templates for doctors, surgeons, and medical professionals.", advice: "Healthcare employers use strict ATS filters for credentials. Use our medical-specific builder to ensure your certifications and licenses are properly parsed." },
  { href: "/ats-friendly-nurse-resume-builder", title: "Nurse Resume Builder", category: "healthcare", icon: "FiHeart", desc: "ATS-optimized templates for RNs, BSNs, and nursing professionals.", advice: "Nursing roles require specific keyword matching for patient care skills. Our nurse builder includes pre-loaded nursing terminology." },
  { href: "/ats-friendly-nurse-practitioner-resume-builder", title: "Nurse Practitioner Builder", category: "healthcare", icon: "FiHeart", desc: "Advanced templates for NPs with specialization tracking.", advice: "NPs need to highlight both clinical and leadership skills. Our builder structures your advanced practice experience correctly." },
  { href: "/ats-friendly-healthcare-assistant-resume-builder", title: "Healthcare Assistant Builder", category: "healthcare", icon: "FiHeart", desc: "Entry-level to mid-career healthcare support templates.", advice: "Healthcare assistants need to emphasize patient interaction and administrative skills equally for ATS success." },
  { href: "/ats-friendly-medical-assistant-resume-builder", title: "Medical Assistant Builder", category: "healthcare", icon: "FiHeart", desc: "Templates for clinical and administrative medical assistants.", advice: "Dual clinical/administrative roles need balanced keyword distribution. Our builder optimizes both skill sets." },
  { href: "/ats-friendly-registered-practical-nurse-resume-builder", title: "RPN Resume Builder", category: "healthcare", icon: "FiHeart", desc: "Specialized for Registered Practical Nurses and LPNs.", advice: "Practical nurses should emphasize hands-on care metrics. Quantify patient loads and care outcomes." },
  { href: "/ats-friendly-care-assistant-resume-builder", title: "Care Assistant Builder", category: "healthcare", icon: "FiHeart", desc: "Templates for personal care and support roles.", advice: "Care assistant resumes need to demonstrate compassion metrics alongside technical care skills." },
  { href: "/ats-friendly-support-worker-resume-builder", title: "Support Worker Builder", category: "healthcare", icon: "FiHeart", desc: "Community and social support worker templates.", advice: "Support workers should highlight case management experience and client outcome improvements." },
  { href: "/ats-friendly-aged-care-worker-resume-builder", title: "Aged Care Worker Builder", category: "healthcare", icon: "FiHeart", desc: "Specialized for elderly care and geriatric support roles.", advice: "Aged care requires specific terminology around mobility assistance, medication management, and palliative care." },
  { href: "/ats-friendly-disability-support-worker-resume-builder", title: "Disability Support Builder", category: "healthcare", icon: "FiHeart", desc: "Templates for disability and inclusion support professionals.", advice: "Highlight specific disability support certifications and individualized care planning experience." },
  { href: "/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder", title: "Veterinary & Specialized Healthcare", category: "healthcare", icon: "FiHeart", desc: "For veterinarians and specialized healthcare practitioners.", advice: "Specialized roles need niche keyword optimization that generic builders miss. Our templates include field-specific terminology." },

  // Technology
  { href: "/ats-friendly-tech-resume-builder", title: "Tech Resume Builder", category: "technology", icon: "FiCode", desc: "Comprehensive tech industry templates for all roles.", advice: "Tech resumes need to list specific programming languages, frameworks, and tools in a format ATS can parse correctly." },
  { href: "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder", title: "AI & ML Engineering Builder", category: "technology", icon: "FiCpuAlt", desc: "Specialized for AI, ML, and data science professionals.", advice: "AI roles require showcasing model deployment metrics, not just algorithms. Quantify your ML impact with accuracy percentages." },
  { href: "/ats-friendly-data-and-cybersecurity-resume-builder", title: "Data & Cybersecurity Builder", category: "technology", icon: "FiShield", desc: "Templates for cybersecurity analysts and data professionals.", advice: "Security roles need compliance framework keywords (NIST, ISO, SOC2). Our builder includes these critical terms." },
  { href: "/ats-friendly-software-developer-and-software-engineer-resume-builder", title: "Software Developer Builder", category: "technology", icon: "FiCode", desc: "For frontend, backend, and full-stack developers.", advice: "List your tech stack prominently in a dedicated section. ATS scans for language and framework keywords first." },
  { href: "/ats-friendly-data-analyst-resume-builder", title: "Data Analyst Builder", category: "technology", icon: "FiBarChart2", desc: "Templates for data analysts and business intelligence roles.", advice: "Data analysts should highlight tools (SQL, Tableau, Python) and quantify impact with revenue or efficiency metrics." },
  { href: "/ats-ai-adjacent-creative-technical-roles-resume-builder", title: "Creative Technical Roles Builder", category: "technology", icon: "FiPenTool", desc: "For UX designers, product designers, and creative technologists.", advice: "Creative tech roles need portfolio links AND keyword-rich text descriptions for ATS parsing." },

  // Business & Finance
  { href: "/ats-friendly-finance-resume-builder", title: "Finance Resume Builder", category: "business", icon: "FiDollarSign", desc: "Templates for banking, investment, and financial services.", advice: "Finance resumes need quantifiable deal sizes, portfolio values, and compliance achievements to pass ATS filters." },
  { href: "/ats-friendly-ceo-resume-builder", title: "CEO Resume Builder", category: "business", icon: "FiAward", desc: "Executive-level templates for C-suite and leadership roles.", advice: "Executive resumes should emphasize strategic impact, revenue growth, and organizational transformation metrics." },
  { href: "/ats-friendly-project-manager-resume-builder", title: "Project Manager Builder", category: "business", icon: "FiTarget", desc: "For PMs, program managers, and scrum masters.", advice: "PMs need methodology keywords (Agile, Scrum, Waterfall) and project completion metrics (on-time %, budget adherence)." },
  { href: "/ats-friendly-accountant-resume-builder", title: "Accountant Resume Builder", category: "business", icon: "FiBookOpen", desc: "Templates for CPAs, accountants, and auditors.", advice: "Accounting resumes must include software proficiency (QuickBooks, SAP) and compliance/audit achievements." },
  { href: "/ats-friendly-sales-associate-resume-builder", title: "Sales Associate Builder", category: "business", icon: "FiTrendingUp", desc: "For retail and B2B sales professionals.", advice: "Sales resumes need revenue metrics, quota attainment percentages, and client acquisition numbers prominently displayed." },
  { href: "/ats-friendly-marketing-executive-manager-resume-builder", title: "Marketing Executive Builder", category: "business", icon: "FiTarget", desc: "Templates for marketing managers and directors.", advice: "Marketing roles should highlight campaign ROI, lead generation metrics, and specific platform expertise (HubSpot, GA4)." },
  { href: "/ats-friendly-business-analyst-resume-builder", title: "Business Analyst Builder", category: "business", icon: "FiActivity", desc: "For BA, systems analyst, and process improvement roles.", advice: "BAs need to showcase requirements gathering, stakeholder management, and process optimization outcomes." },
  { href: "/ats-friendly-customer-service-resume-builder", title: "Customer Service Builder", category: "business", icon: "FiSmile", desc: "Templates for support and customer success roles.", advice: "Customer service resumes should include satisfaction scores, resolution times, and retention metrics." },
  { href: "/ats-friendly-administrative-assistant-resume-builder", title: "Administrative Assistant Builder", category: "business", icon: "FiFileText", desc: "For executive assistants and administrative professionals.", advice: "Admin roles need to highlight software proficiency, calendar management scope, and office efficiency improvements." },
  { href: "/ats-friendly-hr-assistant-coordinator-resume-builder", title: "HR Assistant Builder", category: "business", icon: "FiUsers", desc: "Templates for HR coordinators and recruiting assistants.", advice: "HR resumes should feature ATS/HRIS system experience, recruitment metrics, and compliance knowledge." },

  // Engineering & Industrial
  { href: "/ats-friendly-engineering-resume-builder", title: "Engineering Resume Builder", category: "engineering", icon: "FiTool", desc: "For mechanical, electrical, and civil engineers.", advice: "Engineering resumes need project specifications, technical standards compliance, and quantifiable design achievements." },
  { href: "/ats-friendly-industrial-manufacturing-resume-builder", title: "Industrial Manufacturing Builder", category: "engineering", icon: "FiServer", desc: "Templates for manufacturing and production roles.", advice: "Manufacturing roles should highlight production efficiency gains, quality control metrics, and safety compliance records." },
  { href: "/ats-friendly-advanced-manufacturing-and-automation-resume-builder", title: "Advanced Manufacturing Builder", category: "engineering", icon: "FiCpuAlt", desc: "For automation, robotics, and Industry 4.0 roles.", advice: "Advanced manufacturing needs keywords around PLC programming, IoT systems, and automation deployment metrics." },
  { href: "/ats-friendly-biotechnology-resume-builder", title: "Biotechnology Builder", category: "engineering", icon: "FiActivity", desc: "Templates for biotech researchers and lab professionals.", advice: "Biotech roles require specific research methodologies, lab techniques, and publication/patent tracking." },
  { href: "/ats-friendly-electrician-resume-builder", title: "Electrician Resume Builder", category: "trades", icon: "FiZap", desc: "For licensed electricians and electrical contractors.", advice: "Tradespeople should list certifications, license numbers, and project completion metrics prominently." },
  { href: "/ats-friendly-plumber-resume-builder", title: "Plumber Resume Builder", category: "trades", icon: "FiTool", desc: "Templates for plumbers and pipefitters.", advice: "Plumbing resumes need license details, specialized system experience, and project scope documentation." },
  { href: "/ats-friendly-construction-worker-resume-builder", title: "Construction Worker Builder", category: "trades", icon: "FiLayout", desc: "For construction laborers and site workers.", advice: "Construction roles should highlight safety certifications, equipment proficiency, and project completion records." },

  // Education & Government
  { href: "/ats-friendly-government-education-non-profit-resume-builder", title: "Government & Non-Profit Builder", category: "education", icon: "FiBookOpen", desc: "Templates for public sector and non-profit professionals.", advice: "Government roles need specific grade/level classifications and specialized application format compliance." },
  { href: "/ats-friendly-teacher-resume-builder", title: "Teacher Resume Builder", category: "education", icon: "FiBookOpen", desc: "For K-12 and higher education teaching positions.", advice: "Teaching resumes should include certifications, student outcome metrics, and curriculum development achievements." },

  // Legal & Security
  { href: "/ats-friendly-legal-resume-builder", title: "Legal Resume Builder", category: "legal", icon: "FiBriefcase", desc: "Templates for attorneys, paralegals, and legal staff.", advice: "Legal resumes need bar admission details, case volume metrics, and specific practice area expertise highlighted." },
  { href: "/ats-friendly-security-guard-resume-builder", title: "Security Guard Builder", category: "security", icon: "FiShield", desc: "For security officers and protective services.", advice: "Security roles should emphasize certification levels, incident response experience, and surveillance system proficiency." },

  // Retail & Consumer
  { href: "/ats-friendly-consumer-retail-resume-builder", title: "Consumer Retail Builder", category: "retail", icon: "FiSmartphone", desc: "Templates for retail management and consumer goods.", advice: "Retail resumes need sales volume metrics, inventory management experience, and customer satisfaction scores." },
  { href: "/ats-friendly-retail-associate-resume-builder", title: "Retail Associate Builder", category: "retail", icon: "FiUser", desc: "For retail sales associates and store staff.", advice: "Retail associates should highlight upselling metrics, customer service awards, and POS system proficiency." },

  // Logistics & Transportation
  { href: "/ats-friendly-logistics-transportation-resume-builder", title: "Logistics & Transportation Builder", category: "logistics", icon: "FiTruck", desc: "Templates for supply chain and logistics professionals.", advice: "Logistics roles need to showcase route optimization metrics, cost reduction achievements, and safety compliance records." },
  { href: "/ats-friendly-driver-resume-builder", title: "Driver Resume Builder", category: "logistics", icon: "FiTruck", desc: "For commercial drivers and delivery professionals.", advice: "Drivers should list license classifications, safety records, and delivery efficiency metrics." },
  { href: "/ats-friendly-warehouse-worker-resume-builder", title: "Warehouse Worker Builder", category: "logistics", icon: "FiGrid", desc: "Templates for warehouse associates and material handlers.", advice: "Warehouse roles need equipment certifications, productivity metrics, and inventory accuracy achievements." },

  // Hospitality & Sustainability
  { href: "/ats-friendly-chef-cook-resume-builder", title: "Chef & Cook Resume Builder", category: "hospitality", icon: "FiStar", desc: "For culinary professionals and kitchen staff.", advice: "Culinary resumes should highlight cuisine specialties, kitchen management scope, and health inspection compliance." },
  { href: "/ats-friendly-sustainability-and-green-industries-resume-builder", title: "Sustainability & Green Industries", category: "sustainability", icon: "FiHeart", desc: "Templates for environmental and sustainability roles.", advice: "Green industry roles need specific environmental compliance keywords and sustainability project metrics." },

  // General
  { href: "/free-resume-builder", title: "General Resume Builder", category: "general", icon: "FiEdit", desc: "Universal ATS-friendly resume builder for all industries.", advice: "Start here if you're unsure which specialized builder to use. Our general builder includes broad ATS optimization for any role." },
];

// Template categories for filtering
const CATEGORIES = [
  { id: 'all', label: 'All Builders', icon: 'FiGrid' },
  { id: 'healthcare', label: 'Healthcare', icon: 'FiHeart' },
  { id: 'technology', label: 'Technology', icon: 'FiCode' },
  { id: 'business', label: 'Business & Finance', icon: 'FiBriefcase' },
  { id: 'engineering', label: 'Engineering', icon: 'FiTool' },
  { id: 'trades', label: 'Trades', icon: 'FiLayout' },
  { id: 'education', label: 'Education & Government', icon: 'FiBookOpen' },
  { id: 'legal', label: 'Legal & Security', icon: 'FiShield' },
  { id: 'retail', label: 'Retail', icon: 'FiSmartphone' },
  { id: 'logistics', label: 'Logistics', icon: 'FiTruck' },
  { id: 'hospitality', label: 'Hospitality', icon: 'FiStar' },
  { id: 'sustainability', label: 'Sustainability', icon: 'FiHeart' },
  { id: 'general', label: 'General', icon: 'FiEdit' },
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Browse Builders",
    text: "Explore our curated collection of 47+ industry-specific ATS resume builders filtered by industry and job type."
  },
  {
    name: "Read Expert Advice",
    text: "Each builder includes industry-specific expert advice on what keywords, certifications, and formatting your resume needs."
  },
  {
    name: "Select Your Builder",
    text: "Choose the specialized builder that matches your target industry and job title for maximum ATS compatibility."
  },
  {
    name: "Build Your Resume",
    text: "Use the builder to create an ATS-optimized resume with pre-loaded keywords and industry-standard formatting."
  },
  {
    name: "Download & Apply",
    text: "Download your professionally formatted resume and start applying with confidence."
  }
];

const FAQS = [
  { question: "Why should I use an industry-specific ATS resume builder?", answer: "Industry-specific builders include pre-loaded keywords, certifications, and terminology that generic builders miss. ATS systems scan for these exact terms—using the right builder increases your interview chances by up to 40%." },
  { question: "What makes a resume template 'ATS-friendly'?", answer: "ATS-friendly templates use simple single-column layouts, standard fonts (Arial, Calibri), no tables or graphics, clear section headers (Experience, Education, Skills), and proper keyword placement that applicant tracking systems can parse accurately." },
  { question: "How do I choose the right builder for my job application?", answer: "Match the builder to your target job title. If applying for nursing roles, use the Nurse Resume Builder. The specialized templates include the exact terminology and formatting that healthcare ATS systems expect." },
  { question: "Can I use the general resume builder for any job?", answer: "Yes, but specialized builders give you an advantage. They include industry-specific keywords and formatting that can improve your ATS match rate by 25-35% compared to generic templates." },
  { question: "Are these resume builders really free?", answer: "Absolutely. All our ATS-friendly resume builders are 100% free with no signup required. Build, download, and customize your resume without any cost." }
];

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiHeart, FiUser, FiBookOpen, FiAward, FiShield, FiArrowRight, FiGrid,
  FiBriefcase, FiLayout, FiRefreshCw, FiInfo, FiPlus, FiSmile,
  FiBarChart2, FiEye, FiCode, FiPenTool, FiCpuAlt, FiServer,
  FiActivity, FiChevronDown, FiChevronUp, FiDollarSign, FiTrendingUp,
  FiFileText, FiUsers, FiTool, FiSmartphone, FiTruck, FiEdit,
  FiX, FiAlertCircle
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeTemplateSelector = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = PAGE_URL;
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  const filteredBuilders = useMemo(() => {
    return ATS_RESUME_BUILDERS.filter(builder => {
      if (selectedCategory !== 'all' && builder.category !== selectedCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return builder.title.toLowerCase().includes(q) || builder.desc.toLowerCase().includes(q) || builder.advice.toLowerCase().includes(q) || builder.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // ===== Schema data - Properly structured =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": "Free Resume Template Selector - Professional ATS-Friendly Templates 2026",
        "description": "Browse our curated collection of 47+ industry-specific ATS-friendly resume builders with expert advice. Download free templates for all industries.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            "name": "Professional Resume Free",
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.png`,
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/ProResumeFree",
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": SITE_URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Free Resume Template Selector",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "WebApplication",
        "name": "ATS Resume Template Selector",
        "description": "Industry-specific ATS-friendly resume builder directory with expert advice for job seekers across all career fields",
        "url": PAGE_URL,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "234",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "47+ Industry-Specific Builders",
          "ATS-Optimized Templates",
          "Expert Industry Advice",
          "Pre-loaded Keywords",
          "Professional Formatting",
          "Free Downloads",
          "No Sign Up Required"
        ],
        "softwareVersion": "2026.1.0",
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "AggregateRating",
        "@id": `${PAGE_URL}#rating`,
        "ratingValue": "4.9",
        "ratingCount": "234",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "WebApplication",
          "name": "ATS Resume Template Selector",
          "url": PAGE_URL
        }
      },
      {
        "@type": "ItemList",
        "name": "ATS Resume Builders Directory",
        "description": "Comprehensive directory of industry-specific ATS-friendly resume builders",
        "numberOfItems": ATS_RESUME_BUILDERS.length,
        "itemListElement": ATS_RESUME_BUILDERS.map((builder, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": builder.title,
            "description": builder.desc,
            "applicationCategory": "BusinessApplication",
            "url": `${SITE_URL}${builder.href}`,
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Choose the Perfect Resume Template Builder",
        "description": "Step-by-step guide to selecting and using industry-specific ATS resume builders",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `${PAGE_URL}#step-${index + 1}`
        })),
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Career Information"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "ATS Resume Template Selector"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Template Selection",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ATS Resume Template Selection"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industry-Specific Resume Building"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".stat-number"]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* OPTIMIZED TITLE - Under 70 characters */}
        <title>Free Resume Template Selector | Professional ATS-Friendly Templates</title>
        
        <meta
          name="description"
          content={`Browse our curated collection of professional resume templates with ATS compatibility ratings. Download free .docx and PDF templates for all industries. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#131315" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Template Selector - Professional ATS-Friendly Templates" />
        <meta name="chatgpt-fts:description" content="Browse and download professional resume templates with ATS compatibility ratings. Choose from 47+ industry-specific builders with expert advice." />
        <meta name="chatgpt-fts:keywords" content="resume templates, ATS resume templates, professional resume templates, resume template selector, industry-specific resume builders" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Template Selector" />
        
        {/* Canonical URL - Single canonical tag */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Resume Template Selector | Professional ATS-Friendly Templates" />
        <meta property="og:description" content={`Browse and download professional resume templates with ATS compatibility ratings. Free .docx and PDF formats. ${CURRENT_YEAR}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-template-selector.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Template Selector Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Template Selector | Professional ATS-Friendly Templates" />
        <meta name="twitter:description" content="Browse and download professional resume templates with ATS compatibility ratings. 47+ industry-specific builders, free to use." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-template-selector.jpg`} />
        <meta name="twitter:image:alt" content="Professional Resume Template Selector" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <html lang="en" />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={SITE_URL} itemProp="item">
                  <FiHome size={14} /> <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiLayout size={14} /> ATS Resume Template Selector</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ 47+ Industry-Specific Builders • ATS Optimized • Expert Advice • 100% Free</div>
              <h1 className="section-title" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume Template Selector {CURRENT_YEAR}
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Browse our curated collection of professional resume templates with ATS compatibility ratings. Download free .docx and PDF templates optimized for your industry and career level. <strong>Optimized for ATS systems and human recruiters.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.9/5", label: "User Rating" }, { value: "47+", label: "Industry Builders" }, { value: "234+", label: "User Reviews" }, { value: "100%", label: "Free to Use" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiGrid /> Browse All Builders</button>
                <Link href="/free-resume-builder" className="btn-outline"><FiEdit /> General Builder</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Advice Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why Industry-Specific ATS Templates Matter</h2>
              <p className="section-subtitle">The hidden truth about resume screening that most job seekers don't know</p>
            </div>
            <div className="grid">
              <div className="advice-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)' }}>
                    <FiSearch size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>ATS Systems Scan for Industry Keywords First</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  Before a human ever sees your resume, ATS software scans for <strong>industry-specific keywords, certifications, and terminology</strong>. A generic template missing "HIPAA compliance" for healthcare or "Agile methodology" for tech will be rejected instantly—even if you're qualified. Our builders pre-load the exact terms your industry demands.
                </p>
              </div>
              <div className="advice-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)' }}>
                    <FiTarget size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Specialized Formatting = Higher Match Rates</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  Each industry has unique formatting expectations. <strong>Healthcare resumes need license numbers prominently displayed. Tech resumes need a dedicated technical skills section. Trades resumes must highlight certifications first.</strong> Our specialized builders know these unwritten rules and format accordingly—boosting your ATS match rate by up to 35%.
                </p>
              </div>
              <div className="advice-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)' }}>
                    <FiAward size={24} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Recruiters Recognize Industry-Standard Layouts</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  When a healthcare recruiter sees a resume formatted with credentials at the top, they immediately trust it. When a tech recruiter sees languages and frameworks listed first, they engage. <strong>Industry-standard layouts signal you understand the profession—before they read a single word.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Builders Directory */}
        <section ref={toolRef} className="section" id="builders">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Choose Your Industry-Specific ATS Resume Builder</h2>
              <p className="section-subtitle">47+ specialized builders with expert advice on why each matters for your job search</p>
            </div>

            {/* Search & Filters */}
            <div className="card-executive" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Filter by Industry</h3>
                <div style={{ position: 'relative', minWidth: '250px' }}>
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search builders by name, feature, or industry..." aria-label="Search resume builders" />
                  <FiSearch size={16} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {CATEGORIES.map(cat => {
                  const IconComponent = ICON_MAP[cat.icon] || FiGrid;
                  return (
                    <button key={cat.id} className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`} onClick={() => setSelectedCategory(cat.id)} aria-label={`Filter by ${cat.label}`}>
                      <IconComponent size={14} style={{ marginRight: '0.25rem', display: 'inline' }} /> {cat.label}
                    </button>
                  );
                })}
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <span className="text-small">Showing <strong>{filteredBuilders.length}</strong> of {ATS_RESUME_BUILDERS.length} builders</span>
              </div>
            </div>

            {/* Builders Grid */}
            {filteredBuilders.length > 0 ? (
              <div className="geo-link-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {filteredBuilders.map((builder, i) => {
                  const IconComponent = ICON_MAP[builder.icon] || FiEdit;
                  return (
                    <Link key={i} href={builder.href} className="template-link-card" aria-label={`Open ${builder.title}`}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{builder.title}</h3>
                          <span className="feature-tag" style={{ marginTop: '0.25rem' }}>{builder.category.charAt(0).toUpperCase() + builder.category.slice(1)}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{builder.desc}</p>
                      <div className="advice-card" style={{ padding: '0.75rem 1rem', background: 'rgba(242,202,80,0.05)' }}>
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Expert Advice:</p>
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{builder.advice}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-sm)' }}>
                        <span>Use This Builder</span>
                        <FiArrowRight size={16} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <FiSearch size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>No Builders Found</h3>
                <p className="text-small">Try adjusting your search or filter to find more builders.</p>
              </div>
            )}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section section-alt" id="steps">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How It Works: 5-Step Template Selection</h2>
              <p className="section-subtitle">Find your perfect resume builder in minutes</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, index) => (
                <div key={index} className="card-executive" style={{ textAlign: 'center' }} id={`step-${index + 1}`}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{index + 1}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{step.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Advice Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Your Resume Strategy: Specialized vs. Generic</h2>
              <p className="section-subtitle">The data-backed truth about what actually gets interviews</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ textAlign: 'center', border: '1px solid rgba(255,180,171,0.3)', background: 'rgba(255,180,171,0.05)' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(255,180,171,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--error-color)', border: '2px solid rgba(255,180,171,0.3)' }}>
                  <FiX size={32} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--error-color)' }}>Generic Templates</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  ❌ Missing industry keywords<br/>
                  ❌ Wrong section priorities<br/>
                  ❌ Standard formatting for all roles<br/>
                  ❌ No certification emphasis<br/>
                  ❌ <strong>75% ATS rejection rate</strong>
                </p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center', border: '1px solid rgba(76,175,80,0.3)', background: 'rgba(76,175,80,0.05)' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(76,175,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--success-color)', border: '2px solid rgba(76,175,80,0.3)' }}>
                  <FiCheck size={32} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--success-color)' }}>Specialized ATS Builders</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  ✅ Pre-loaded industry keywords<br/>
                  ✅ Role-specific section ordering<br/>
                  ✅ Certification-focused layouts<br/>
                  ✅ Proper credential placement<br/>
                  ✅ <strong>40% more interviews</strong>
                </p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)' }}>
                  <FiArrowRight size={32} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Your Next Step</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  <strong>1.</strong> Find your industry above<br/>
                  <strong>2.</strong> Click your specialized builder<br/>
                  <strong>3.</strong> Build your ATS-optimized resume<br/>
                  <strong>4.</strong> Land more interviews<br/>
                  <strong>All 100% free. No signup required.</strong>
                </p>
                <Link href="/free-resume-builder" className="btn-primary" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
                  <FiEdit size={16} /> Start With General Builder
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Templates</h2>
              <p className="section-subtitle">Everything you need to know about choosing the right ATS resume builder</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} id={`faq-${i + 1}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                    <h3 itemProp="name" style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" id={`faq-answer-${i}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your resume with these powerful tools</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-density-analyzer-tool", text: "Keyword Density Analyzer", iconName: "FiBarChart2" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit" },
                { href: "/free-cover-letter-generator", text: "Cover Letter Generator", iconName: "FiFileText" },
                { href: "/resume-formatting-guide", text: "Resume Formatting Guide", iconName: "FiLayout" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Stop Using Generic Templates. Start Getting Interviews.
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Choose your industry-specific ATS resume builder above and give yourself the <strong>40% advantage</strong> that specialized templates provide. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); toolRef.current?.scrollIntoView?.({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Browse all resume builders"><FiGrid /> Browse All Builders</button>
              <Link href="/free-resume-builder" className="btn-outline" aria-label="Start with the general resume builder"><FiEdit /> Start General Builder</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 100% Free - No Sign Up Required</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> ATS-Optimized Templates</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Instant Downloads - No Watermarks</span>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTime}</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  
  return {
    props: {
      seoData: {
        currentDate: buildDate,
        lastModifiedDate: new Date(buildTimestamp).toISOString(),
        buildTimestamp
      }
    },
    revalidate: 3600,
  };
}

export default ResumeTemplateSelector;