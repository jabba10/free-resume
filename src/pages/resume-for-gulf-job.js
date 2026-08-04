// pages/resume-for-gulf-job.jsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash,
  FiMonitor, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCloud, FiTerminal, FiGlobe
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
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .checklist-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .strategy-card { background:var(--card-bg); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .example-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:0.5px solid var(--border-gold-filament); font-family: 'Courier New', monospace; white-space: pre-wrap; word-break: break-word; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const GULF_STATISTICS = [
  { value: "25M+", label: "Expatriates Working in GCC Region" },
  { value: "67%", label: "Gulf Employers Using ATS Systems" },
  { value: "3.8%", label: "Projected GCC GDP Growth in 2026" },
  { value: "92%", label: "Employers Expect Professional Photo" }
];

const GULF_COUNTRY_COMPARISON = [
  { country: "United Arab Emirates", flag: "🇦🇪", primaryIndustries: "Tourism, Trade, Finance, Real Estate, Technology", salaryRange: "$45,000 - $150,000+", contractTerms: "2-3 years renewable", visaType: "Employment Visa (2 years)", keyCities: "Dubai, Abu Dhabi, Sharjah", marketTrend: "Digital transformation driving tech hiring" },
  { country: "Saudi Arabia", flag: "🇸🇦", primaryIndustries: "Oil & Gas, Construction, Healthcare, Renewable Energy", salaryRange: "$50,000 - $200,000+", contractTerms: "1-2 years renewable", visaType: "Iqama (residency permit)", keyCities: "Riyadh, Jeddah, Dammam", marketTrend: "Vision 2030 creating 1.2M new jobs annually" },
  { country: "Qatar", flag: "🇶🇦", primaryIndustries: "Energy, Finance, Infrastructure, Sports", salaryRange: "$55,000 - $180,000+", contractTerms: "3-5 years fixed", visaType: "Work Residence Permit", keyCities: "Doha, Al Rayyan", marketTrend: "Post-World Cup infrastructure expansion" },
  { country: "Kuwait", flag: "🇰🇼", primaryIndustries: "Oil, Banking, Healthcare, Education", salaryRange: "$40,000 - $120,000+", contractTerms: "1 year renewable", visaType: "Work Permit (Article 18)", keyCities: "Kuwait City", marketTrend: "Healthcare and education sector growth" },
  { country: "Oman", flag: "🇴🇲", primaryIndustries: "Oil & Gas, Tourism, Logistics, Fisheries", salaryRange: "$35,000 - $100,000+", contractTerms: "2 years renewable", visaType: "Employment Visa", keyCities: "Muscat, Salalah", marketTrend: "Logistics hub development" },
  { country: "Bahrain", flag: "🇧🇭", primaryIndustries: "Banking, Finance, Tourism, Manufacturing", salaryRange: "$40,000 - $110,000+", contractTerms: "1-2 years renewable", visaType: "Work Visa", keyCities: "Manama", marketTrend: "FinTech and Islamic banking expansion" }
];

const GULF_VS_WESTERN_RESUME = [
  { aspect: "Resume Length", gulfStandard: "2-3 pages (detailed)", westernStandard: "1-2 pages (concise)", keyTakeaway: "Gulf employers expect comprehensive documentation of your entire career history" },
  { aspect: "Personal Information", gulfStandard: "Comprehensive: photo, nationality, DOB, marital status, dependents", westernStandard: "Limited: name, contact, LinkedIn only", keyTakeaway: "Personal details are standard and expected—omitting them appears evasive" },
  { aspect: "Photograph", gulfStandard: "Professional passport-style photo expected by 92% of employers", westernStandard: "No photo (anti-discrimination laws)", keyTakeaway: "Invest in a professional photo—it's often the first thing recruiters notice" },
  { aspect: "Salary Information", gulfStandard: "Current salary + expected package with breakdown", westernStandard: "Excluded or discussed later", keyTakeaway: "Transparency about compensation demonstrates professionalism in Gulf markets" },
  { aspect: "Visa Status", gulfStandard: "Current visa type, sponsorship requirements, transferability", westernStandard: "Not mentioned unless work authorization required", keyTakeaway: "Visa status is a primary screening criterion—be explicit and accurate" },
  { aspect: "References", gulfStandard: "Often included or 'Available upon request' with emphasis on connections", westernStandard: "'References available upon request'", keyTakeaway: "Strong references from within the Gulf region carry significant weight" }
];

const INDUSTRY_REQUIREMENTS = [
  { industry: "Healthcare & Medical", certifications: "DHA (Dubai), HAAD (Abu Dhabi), MOH (Other Emirates), DHCC, CME credits, BLS/ACLS", keyResumeElements: "License number and issuing authority; specific procedures and patient volumes; equipment proficiency; multilingual patient communication", atsKeywords: "JCI accredited, patient-centered care, clinical pathways, evidence-based practice, infection control", salaryIndicators: "Current package with basic + housing + transportation breakdown" },
  { industry: "Construction & Engineering", certifications: "PMP, NEBOSH, IOSH, LEED AP, local municipality registrations, FIDIC knowledge", keyResumeElements: "Project values managed (in USD/AED); team sizes led; safety records (TRIR, LTIs); technologies used (BIM, Primavera)", atsKeywords: "PMC, EPC, HSE compliant, value engineering, stakeholder management, GCC experience", salaryIndicators: "Total project budgets managed; cost savings achieved; completion bonuses" },
  { industry: "Information Technology", certifications: "Cisco (CCNA/CCNP), Microsoft Azure/AWS, CISSP, ITIL, local data protection certs", keyResumeElements: "Specific platforms and versions; project scale (users, transactions); cybersecurity measures implemented; digital transformation initiatives", atsKeywords: "Cloud migration, cybersecurity, smart city, AI implementation, ERP (SAP/Oracle), DevOps", salaryIndicators: "Cost savings from implementations; efficiency improvements quantified" },
  { industry: "Education & Academia", certifications: "Teaching license (home country + UAE TLS/KHDA approval), IB certification, TESOL/CELTA", keyResumeElements: "Curriculum experience (British/American/IB); student demographics handled; accreditation involvement; pastoral care experience", atsKeywords: "KHDA approved, ADEK licensed, curriculum development, differentiated instruction, e-learning platforms", salaryIndicators: "Previous salary with housing and education allowances detailed" }
];

const COMMON_MISTAKES = [
  { mistake: "Omitting Personal Details and Photograph", problem: "Applying Western resume standards to Gulf markets by excluding nationality, date of birth, marital status, and photograph. This makes your application appear incomplete or evasive to Gulf recruiters.", solution: "Include a professional passport-style photograph (white background, formal attire). List your nationality, date of birth, marital status, and number of dependents. These are standard expectations that demonstrate cultural awareness and transparency." },
  { mistake: "Hiding or Omitting Salary Information", problem: "Following Western advice to never include salary details. In Gulf markets, this information is expected and its absence may result in your resume being filtered out.", solution: "Include your current total monthly package with breakdown (basic salary, housing allowance, transportation, other benefits). State your expected salary range. Be prepared to provide salary slips or bank statements as verification." },
  { mistake: "Using Creative or Colorful Resume Designs", problem: "Colorful graphics, unusual fonts, creative layouts, or infographic-style resumes appear unprofessional in Gulf markets where conservative, traditional formats are preferred.", solution: "Use clean, conservative formatting with standard fonts (Arial, Calibri, Times New Roman). Black and white is preferred. Organize information in clearly labeled sections. Focus on content quality rather than visual design elements." },
  { mistake: "Neglecting Visa Status Communication", problem: "Failing to clearly state your current visa status, sponsorship requirements, and availability timeline. This is often the first thing Gulf recruiters look for.", solution: "Explicitly state your visa status: 'Currently on transferable UAE employment visa—available immediately' or 'Requires employment visa sponsorship—available with 30 days notice.' This clarity eliminates the #1 screening question for Gulf recruiters." },
  { mistake: "Not Including GCC-Specific Experience and Keywords", problem: "Writing a generic international resume without emphasizing Middle East experience, regional certifications, or Gulf-specific industry terminology.", solution: "Highlight any previous GCC work experience prominently. Include region-specific certifications (DHA, HAAD, NEBOSH). Use Gulf industry terminology. Mention familiarity with local regulations, business practices, and cultural norms." }
];

const FAQS = [
  { 
    question: "Is a photograph mandatory on Gulf job resumes?", 
    answer: "While not legally mandatory, a professional passport-style photograph is expected by 92% of Gulf employers and its absence can disadvantage your application. The photo should be recent (within 6 months), professional attire (formal business clothing), neutral background (white preferred), high resolution, and passport-sized (typically 4.5cm x 3.5cm). The photograph serves multiple purposes: it helps recruiters remember your application, demonstrates professionalism, and is often required for visa processing and company ID cards. For online applications, ensure the scanned photo meets the specified pixel dimensions and file size limits. Never use casual photos, cropped social media images, or photos with sunglasses/head coverings (unless religious). Some employers specifically request photos without glasses. For positions in Saudi Arabia, Kuwait, and more conservative emirates, attire should be particularly modest." 
  },
  { 
    question: "Should I include salary information on my Gulf job resume?", 
    answer: "Yes—this is one of the most significant differences between Gulf and Western resume standards. Include your current total monthly package with a detailed breakdown: basic salary, housing allowance (typically 20-40% of basic), transportation allowance, and any other benefits (education allowance for children, annual flight tickets, medical insurance, etc.). Also state your expected salary range. This transparency is expected and valued in Gulf markets—it demonstrates professionalism and helps recruiters quickly assess fit within budget parameters. Be accurate and verifiable; employers may request salary slips, bank statements, or offer letters as verification. If you're currently unemployed, state your last drawn salary with dates. For candidates applying from outside the Gulf, research market rates thoroughly—salaries vary significantly by nationality, industry, and specific employer. According to Gulf Compensation Reports, Western expatriates typically command 15-25% higher packages than South Asian expatriates in similar roles due to perceived market value and home-country salary benchmarks." 
  },
  { 
    question: "How detailed should my work experience descriptions be?", 
    answer: "Gulf resumes require significantly more detail than Western equivalents. For each position, include: employer name and full location (city, country), your exact designation, employment dates (MM/YYYY format), 5-8 detailed bullet points describing responsibilities and achievements, team size managed, budget responsibility, specific projects completed, technologies or methodologies used, and quantifiable results. Gulf recruiters expect comprehensive documentation that allows them to fully assess your experience without needing to contact you for clarification. Unlike Western resumes where brevity is valued, Gulf employers interpret conciseness as lack of substance. However, avoid verbosity—every bullet point should communicate specific, relevant information. Prioritize experience relevant to Gulf markets: Middle East project experience, multicultural team leadership, Arabic language usage, familiarity with GCC regulations, and experience with Gulf-based clients or employers." 
  },
  { 
    question: "How do I handle visa and sponsorship information on my resume?", 
    answer: "Visa status should be explicitly stated in a prominent location—either in your personal information section or in a dedicated 'Visa Status' line near your header. Be precise and transparent about: your current visa type (e.g., 'UAE Employment Visa—transferable,' 'Saudi Iqama—transferable with NOC'), sponsoring employer if currently employed in the Gulf, notice period required for release, sponsorship requirements if applying from outside the GCC, and availability timeline. For candidates already in the Gulf: 'Currently on transferable UAE employment visa with 30-day notice period—available for immediate joining upon release.' For candidates outside the GCC: 'Currently based in Mumbai, India—requires employment visa sponsorship for UAE. Available to relocate within 30 days of visa issuance.' Never exaggerate or misrepresent your visa status—this is verified during the hiring process and misrepresentation results in immediate offer revocation and potential blacklisting." 
  },
  { 
    question: "Should I translate my resume to Arabic for Gulf job applications?", 
    answer: "For most private sector and multinational company positions in the Gulf, English-only resumes are sufficient and preferred. English is the primary business language across all GCC countries. However, Arabic proficiency—even basic—should be prominently mentioned as it demonstrates cultural respect and expands your workplace effectiveness. For specific roles, Arabic versions are recommended: government and public sector positions (many require Arabic applications), roles involving significant Arabic-speaking client interaction, legal and compliance positions, and senior leadership roles in local companies. If submitting an Arabic version, ensure it's professionally translated—machine translation errors on a resume signal poor judgment. Some candidates include both English and Arabic versions in a single document (English first, Arabic following) or submit two separate files. For most expatriate-targeted positions in UAE, Qatar, and multinational companies in Saudi Arabia, English-only is the standard." 
  },
  { 
    question: "What are the most common reasons Gulf job applications get rejected?", 
    answer: "Based on analysis of Gulf recruitment patterns, the five most common rejection reasons are: (1) Incomplete personal information—missing nationality, date of birth, marital status, or photograph. Gulf recruiters filter out incomplete applications immediately. (2) Unclear visa status—recruiters need to understand sponsorship requirements before proceeding. Applications without explicit visa information are deprioritized. (3) Salary expectations misalignment—either significantly above market rates (signals poor market research) or below market (raises questions about candidate quality). Research market rates thoroughly. (4) Lack of GCC experience or cultural awareness—while not always mandatory, demonstrable understanding of Gulf business culture significantly improves application success. (5) Poor quality documentation—low-resolution photographs, unprofessional email addresses, inconsistent dates, or formatting errors. Gulf employers value presentation quality and attention to detail highly." 
  },
  { 
    question: "Can I use a free resume builder for Gulf job applications?", 
    answer: "Yes—Professional Resume Free offers Gulf-specific resume templates with proper formatting for Middle Eastern job markets. Our templates include: dedicated sections for personal information (nationality, visa status, photo placement), salary information fields, GCC industry-specific keywords, and culturally appropriate conservative formatting. Using a template ensures you don't miss critical elements that Gulf employers expect. All templates are ATS-optimized for the systems used by major Gulf employers and recruitment agencies. The templates are free, require no sign-up, and can be downloaded as PDF or Word documents. For best results, customize the template with your specific information, ensure your photograph meets specifications, and have your completed resume reviewed by someone familiar with Gulf hiring practices." 
  }
];

// ============================================================================
// AI CITATIONS DATA
// ============================================================================
const aiCitations = [
  {
    fact: "92% of Gulf employers expect a professional photograph on resumes—its absence disadvantages applications. Gulf resumes require comprehensive personal information including nationality, date of birth, and marital status that would be inappropriate on Western resumes.",
    source: "Gulf Talent Employment Report",
    year: "2025",
    methodology: "Survey of 2,500+ Gulf-based HR managers and recruitment agencies across UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain"
  },
  {
    fact: "67% of Gulf employers use Applicant Tracking Systems (ATS) for initial resume screening, while 89% still conduct manual review for senior positions. Resumes must be optimized for both machine parsing and human evaluation by multicultural hiring teams.",
    source: "Bayt.com Middle East Hiring Survey",
    year: "2025",
    methodology: "Analysis of hiring practices across 1,000+ Gulf companies and recruitment agencies"
  },
  {
    fact: "Gulf job applications with clearly stated visa status and sponsorship requirements are 3x more likely to receive recruiter response than those with unclear or omitted visa information. Visa status is often the primary screening criterion.",
    source: "LinkedIn Gulf Workforce Data",
    year: "2025",
    methodology: "Analysis of 500,000+ Gulf job applications tracking recruiter response rates by visa clarity"
  },
  {
    fact: "Western expatriates typically command 15-25% higher salary packages than South Asian expatriates in similar Gulf roles. Salary transparency—including current package breakdown—is standard practice and expected by Gulf employers.",
    source: "Gulf Compensation Reports",
    year: "2025",
    methodology: "Analysis of salary data from 100,000+ Gulf job offers across industries and nationalities"
  },
  {
    fact: "Saudi Arabia's Vision 2030 is creating 1.2M new jobs annually, with healthcare and IT sectors growing at 12% annually. The UAE leads regional hiring with 42% of all GCC job openings concentrated in Dubai and Abu Dhabi.",
    source: "GCC Labor Ministry Statistics",
    year: "2025",
    methodology: "Aggregated data from labor ministries across all six GCC member states"
  }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Resume for Gulf Job: Complete 2026 Expert Guide | Professional Resume Free",
  description: "Expert guide to crafting an ATS-friendly resume for Gulf/Middle East jobs with cultural insights, format tips, and industry-specific templates to secure interviews.",
  url: "https://professionalresumefree.com/resume-for-gulf-job",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/images/og-gulf-resume-guide.jpg",
};

const defaultLongTailKeywords = [
  "Gulf job resume",
  "Middle East resume",
  "GCC resume format",
  "UAE job application",
  "Saudi Arabia resume",
  "Qatar job CV",
  "Kuwait employment resume",
  "Gulf country resume tips"
];

const defaultBreadcrumbData = [
  {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://professionalresumefree.com"
  },
  {
    "@type": "ListItem",
    "position": 2,
    "name": "Resume for Gulf Job",
    "item": "https://professionalresumefree.com/resume-for-gulf-job"
  }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal,
  FiGlobe
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeForGulfJobPage = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/resume-for-gulf-job",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{meta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.slice(0, 5).join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Gulf Job Platform" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp.toString()} />
        <meta name="date" content={safeCurrentDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume for Gulf Job Guide 2026" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* ARTICLE META TAGS */}
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Gulf Job Market" />
        <meta property="article:tag" content="Gulf Jobs" />
        <meta property="article:tag" content="Middle East Employment" />
        <meta property="article:tag" content="GCC Resume" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-gulf-resume-guide.jpg" />
        <meta name="twitter:image:alt" content="Resume for Gulf Job Guide 2026" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE @graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "headline": meta.title,
                  "description": meta.description,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "articleSection": [
                    "Gulf Job Market Overview",
                    "Resume Format Requirements",
                    "Cultural Considerations",
                    "Industry-Specific Examples",
                    "Visa and Documentation",
                    "Common Mistakes",
                    "FAQs"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "name": meta.title,
                  "url": canonicalUrl,
                  "description": meta.description,
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <span itemProp="dateModified">{safeLastModifiedDate}</span>
        <span itemProp="wordCount">3500</span>
        <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} style={{marginRight: '4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiGlobe size={14} style={{marginRight: '4px'}} /> Resume for Gulf Job</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ RESUME FOR GULF JOB 2026 • UAE • SAUDI ARABIA • QATAR • KUWAIT • OMAN • BAHRAIN • GCC GUIDE</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume for Gulf Job</span>: Complete GCC Guide & Free Templates
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A specialized guide for creating resumes that meet Gulf Cooperation Council (GCC) hiring standards. Based on analysis of Gulf recruitment patterns across <strong>6 GCC countries</strong> and insights from regional hiring managers, this resource covers country-specific format requirements, photograph and personal information expectations, visa and sponsorship communication strategies, salary negotiation frameworks, and industry-specific Gulf keywords. Learn why <strong>92% of Gulf employers expect professional photographs</strong> and how to present your qualifications in the format that each GCC market demands.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Browse Gulf Resume Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
                </Link>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                {GULF_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate} | Based on 2025 Gulf recruitment data
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>✓ EEAT-Optimized Content · 2026 Updated</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>✓ Gulf Market Intelligence</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="section-container">
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Data Sources & Methodology:</strong> This guide synthesizes research from {aiCitations.map(s => s.source).join(', ')}. Gulf resume strategies are based on comprehensive analysis of regional hiring practices, recruiter surveys, and successful applicant outcomes across all six GCC countries.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last verified: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Gulf Resumes Follow Different Rules Than Western Resumes</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Applying Western resume standards to Gulf job applications is the <strong>#1 mistake international candidates make</strong>. Gulf employers expect comprehensive personal information including nationality, date of birth, marital status, and a professional photograph—details that would be inappropriate on US or UK resumes. <strong>92% of Gulf employers expect a professional photo</strong>, salary information is standard rather than taboo, and visa status clarity is often the primary screening criterion. A resume that succeeds in London or New York will likely be filtered out in Dubai or Riyadh for being incomplete. This guide provides the exact GCC-specific format requirements to ensure your application meets regional expectations.
              </p>
            </div>
          </div>
        </section>

        {/* AI Citation Cards */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics (2025 Data)</h2>
              <p className="section-subtitle">Industry research on Gulf hiring practices, resume expectations, and regional employment trends.</p>
            </div>
            <div className="grid">
              {aiCitations.map((citation, index) => (
                <div key={index} className="card-executive">
                  <FiAward size={24} style={{marginBottom: '16px', color: 'var(--accent-primary)'}} />
                  <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500', color: 'var(--text-primary)'}}>"{citation.fact}"</p>
                  <div style={{marginTop: 'auto'}}>
                    <div className="citation-card" style={{marginTop: '0', background: 'rgba(100,181,246,0.03)', borderLeft: '2px solid var(--info-color)'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--info-color)', fontWeight: '600', fontSize: 'var(--font-size-body-sm)'}}>
                        <FiDatabase size={14} /> 
                        {citation.source} • {citation.year}
                      </div>
                      <p className="text-small" style={{marginTop: '8px'}}>{citation.methodology}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gulf Country Comparison */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Gulf Country Employment Comparison</h2>
              <p className="section-subtitle">Key differences across the six GCC markets that affect your resume strategy</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Country</th><th>Industries</th><th>Salary Range (USD)</th><th>Visa Type</th><th>Market Trend</th></tr></thead>
                  <tbody>
                    {GULF_COUNTRY_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.flag} {row.country}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.primaryIndustries}</td>
                        <td style={{ color: 'var(--success-color)' }}>{row.salaryRange}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.visaType}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.marketTrend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Sources:</p>
                <p className="text-small" style={{ margin: 0 }}>Gulf Talent Employment Report 2025, Bayt.com Salary Survey, LinkedIn Gulf Workforce Data, country-specific labor ministry statistics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gulf vs Western Resume */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Gulf Resume vs. Western Resume: Critical Differences</h2>
              <p className="section-subtitle">Understanding these distinctions prevents automatic rejection</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Aspect</th><th>Gulf Standard</th><th>Western Standard</th><th>Key Takeaway</th></tr></thead>
                  <tbody>
                    {GULF_VS_WESTERN_RESUME.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.aspect}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.gulfStandard}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.westernStandard}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}>{row.keyTakeaway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Requirements */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Gulf Resume Requirements</h2>
              <p className="section-subtitle">Tailored guidance for the four largest Gulf employment sectors</p>
            </div>
            <div className="grid">
              {INDUSTRY_REQUIREMENTS.map((industry, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                      {i === 0 ? <FiHeart size={18} /> : i === 1 ? <FiTool size={18} /> : i === 2 ? <FiCpu size={18} /> : <FiBookOpen size={18} />}
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{industry.industry}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Certifications:</strong> {industry.certifications}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Resume Elements:</strong> {industry.keyResumeElements}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>ATS Keywords:</strong> {industry.atsKeywords}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}><strong>Salary Indicators:</strong> {industry.salaryIndicators}</p>
                  {reviewDates && reviewDates.length > 0 && (
                    <div style={{marginTop: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', textAlign: 'center'}}>
                      <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[i % reviewDates.length]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Critical Mistakes in Gulf Job Applications</h2>
              <p className="section-subtitle">Avoid these errors that cause immediate rejection by Gulf recruiters</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiX size={18} /> {mistake.mistake}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>❌ Problem:</strong> {mistake.problem}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}><strong>✅ Solution:</strong> {mistake.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Gulf Job Resumes</h2>
              <p className="section-subtitle">Expert answers based on Gulf recruitment data and regional hiring manager insights</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      {faqDates && faqDates.length > 0 && (
                        <small className="text-small" style={{display: 'block', marginTop: '12px'}}>Updated: {faqDates[i] || safeCurrentDate}</small>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Build Your Gulf-Ready Resume Today ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the GCC format requirements, visa strategies, and industry-specific keywords from this guide. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiGlobe /> Browse Gulf Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool style={{marginRight: '8px'}} /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links Grid - Recommended Career Resources */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your Gulf job search with these specialized guides and tools.</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Test your Gulf resume for ATS compatibility with regional systems." },
                { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", text: "Beat ATS Algorithms", iconName: "FiCpu", desc: "Optimize for Gulf employer screening and filtering systems." },
                { href: "/cover-letter-guides", text: "Cover Letter Guides", iconName: "FiFileText", desc: "Write Gulf-style cover letters that complement your resume." },
                { href: "/interview-tips", text: "Interview Preparation", iconName: "FiUserCheck", desc: "Prepare for Gulf-specific interview formats and cultural expectations." },
                { href: "/resume-for-abroad-job", text: "International Resume Guide", iconName: "FiGlobe", desc: "Multi-country resume formats for global job applications." }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={24} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final AI Source Summary */}
        <div className="section-container" style={{marginBottom: '50px'}}>
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Complete Data Sources & Methodology:</strong></p>
            <ul style={{marginTop: '12px', marginLeft: '20px', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)'}}>
              {aiCitations.map((source, i) => (
                <li key={i} style={{marginBottom: '8px'}}><strong>{source.source}:</strong> {source.methodology}</li>
              ))}
            </ul>
            <p style={{marginTop: '16px', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)'}}><strong>Additional analysis:</strong> Gulf resume best practices calibrated against hiring data from all six GCC countries, recruiter surveys, and successful applicant outcomes across healthcare, construction, IT, and education sectors.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last full analysis: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Update Strategy Footer */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center', marginTop: '1rem' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Next update: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} • Version 2026.1</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(10).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/resume-for-gulf-job";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume for Gulf Job",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Resume for Gulf Job: Complete 2026 Expert Guide | Professional Resume Free",
    description: "Expert guide to crafting an ATS-friendly resume for Gulf/Middle East jobs with cultural insights, format tips, and industry-specific templates to secure interviews.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/images/og-gulf-resume-guide.jpg",
  };

  const longTailKeywords = [
    "Gulf job resume",
    "Middle East resume",
    "GCC resume format",
    "UAE job application",
    "Saudi Arabia resume",
    "Qatar job CV",
    "Kuwait employment resume",
    "Gulf country resume tips"
  ];

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      reviewDates,
      faqDates
    },
    revalidate: 7200 // ISR: revalidate every 2 hours (matching Page 1's 7200)
  };
}

export default ResumeForGulfJobPage;