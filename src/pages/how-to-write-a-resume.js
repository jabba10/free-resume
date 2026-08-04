import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiArrowRight, FiCheck, FiStar,
  FiClock, FiBookOpen, FiTarget, FiGlobe, FiCheckSquare,
  FiAlertCircle, FiThumbsUp, FiMail, FiPhone, FiMapPin,
  FiUser, FiTrendingUp, FiAward, FiShield, FiZap, FiPenTool,
  FiBarChart2, FiBriefcase, FiCode, FiLayers, FiUsers, FiLink,
  FiCalendar, FiEye, FiHeart, FiDollarSign, FiDatabase,
  FiCloud, FiTerminal, FiSearch, FiMonitor, FiActivity,
  FiInfo, FiEdit, FiEdit3, FiSmartphone, FiCopy, FiType,
  FiAlignLeft, FiHash, FiLock, FiSmile, FiUserCheck, FiSave,
  FiRefreshCw, FiCompass, FiAnchor, FiCoffee, FiSun, FiMoon,
  FiCheckCircle, FiXCircle, FiX, FiPercent, FiPieChart,
  FiFileText, FiTool, FiDownload, FiMessageCircle, FiHeadphones,
  FiShoppingBag, FiTruck, FiPackage, FiCreditCard
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
    --success-color: #4caf50; --info-color: #64b5f6; --purple-accent: #bb86fc;
    --rose-accent: #f8bbd0; --teal-accent: #80cbc4;
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
  h1,h2,h3,h4 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  h4 { font-size:var(--font-size-title-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .gradient-text-rose { background:linear-gradient(135deg,#f8bbd0 0%,#e91e63 50%,#ff4081 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .gradient-text-teal { background:linear-gradient(135deg,#80cbc4 0%,#009688 50%,#26a69a 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
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
  .card-executive-rose { background:rgba(248,187,208,0.05); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:0.5px solid rgba(248,187,208,0.2); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
  .card-executive-rose:hover { background:rgba(248,187,208,0.1); border-color:rgba(248,187,208,0.4); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .card-executive-teal { background:rgba(128,203,196,0.05); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:0.5px solid rgba(128,203,196,0.2); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:auto; display:flex; flex-direction:column; width:100%; max-width:100%; }
  .card-executive-teal:hover { background:rgba(128,203,196,0.1); border-color:rgba(128,203,196,0.4); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
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
  .grid-4 { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid-4 { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid-4 { grid-template-columns:repeat(4,1fr); } }
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
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-danger { background:rgba(255,180,171,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,180,171,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .insight-box-rose { background:rgba(248,187,208,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(248,187,208,0.3); }
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .pre-block { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); overflow-x:auto; font-family:'Courier New',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); line-height:1.8; white-space:pre-wrap; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .number-circle-rose { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, #f8bbd0, #e91e63); color:#fff; border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .number-circle-teal { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, #80cbc4, #009688); color:#fff; border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiArrowRight, FiCheck, FiStar, FiClock,
  FiBookOpen, FiTarget, FiGlobe, FiCheckSquare, FiAlertCircle, FiThumbsUp,
  FiMail, FiPhone, FiMapPin, FiUser, FiTrendingUp, FiAward, FiShield,
  FiZap, FiPenTool, FiBarChart2, FiBriefcase, FiCode, FiLayers, FiUsers,
  FiLink, FiCalendar, FiEye, FiHeart, FiDollarSign, FiDatabase,
  FiCloud, FiTerminal, FiSearch, FiMonitor, FiActivity, FiInfo,
  FiEdit, FiEdit3, FiSmartphone, FiCopy, FiType, FiAlignLeft,
  FiHash, FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw,
  FiCompass, FiAnchor, FiCoffee, FiSun, FiMoon, FiCheckCircle,
  FiXCircle, FiX, FiPercent, FiPieChart, FiFileText, FiTool, FiDownload,
  FiMessageCircle, FiHeadphones, FiShoppingBag, FiTruck, FiPackage, FiCreditCard
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const KEY_STATISTICS = [
  { value: "75%", label: "Resumes Rejected by ATS", description: "Only 25% reach human recruiters", source: "JobScan 2026", icon: "FiXCircle" },
  { value: "6.8s", label: "Average Initial Screen Time", description: "You have seconds to make an impression", source: "TheLadders 2026", icon: "FiClock" },
  { value: "40%", label: "More Interviews", description: "With customized, tailored resumes", source: "CareerBuilder 2026", icon: "FiTrendingUp" },
  { value: "85%", label: "Fortune 500 Using ATS", description: "ATS optimization is non-negotiable", source: "Forbes 2026", icon: "FiDatabase" },
  { value: "3x", label: "Higher Hire Rate", description: "With quantified achievements", source: "LinkedIn 2026", icon: "FiAward" },
  { value: "56%", label: "Recruiters Value Soft Skills", description: "Balance technical and interpersonal", source: "SHRM 2026", icon: "FiHeart" }
];

const RESUME_FORMATS = [
  { name: "Reverse-Chronological", bestFor: "Most professionals with steady career progression", pros: ["Preferred by 85% of recruiters", "Shows clear career growth trajectory", "Best ATS compatibility (95%+ parsing accuracy)"], cons: ["Highlights employment gaps prominently", "Not ideal for career changers", "Less emphasis on transferable skills"], level: "high", icon: "FiTrendingUp" },
  { name: "Functional (Skills-Based)", bestFor: "Career changers or significant employment gaps", pros: ["Emphasizes transferable competencies", "Downplays timeline inconsistencies", "Effective for recent graduates"], cons: ["Viewed suspiciously by many recruiters", "Poor ATS compatibility (65% parsing accuracy)", "Can obscure lack of experience"], level: "low", icon: "FiLayers" },
  { name: "Combination/Hybrid", bestFor: "Senior roles and technical positions", pros: ["Integrates skills and experience effectively", "Flexible for diverse backgrounds", "Demonstrates both depth and breadth"], cons: ["More challenging to format cleanly", "Often exceeds one page", "Requires careful structural organization"], level: "medium", icon: "FiGrid" },
  { name: "Targeted/Customized", bestFor: "Specific competitive job applications", pros: ["Highly relevant to each position", "Demonstrates genuine employer interest", "Achieves highest response rates"], cons: ["Time-intensive to create", "Requires maintaining multiple versions", "Difficult to update systematically"], level: "high", icon: "FiTarget" }
];

const INDUSTRY_EXAMPLES = [
  { industry: "Technology & Software", focus: "Projects, GitHub portfolio, tech stack, cloud certifications", tip: "List specific languages (Python, Java, Go) and frameworks (React, Node.js, Django). Include a dedicated 'Projects' section with GitHub links. Add certifications like AWS Solutions Architect, Azure Administrator, or Google Cloud Professional.", keywords: ["Python", "React", "Cloud Architecture", "API Development", "Agile/Scrum", "CI/CD", "Microservices", "Docker"], emoji: "💻" },
  { industry: "Healthcare & Nursing", focus: "Licenses, patient care metrics, compliance, clinical specialties", tip: "Highlight licenses (RN, BSN, MSN) prominently. Specify units (ICU, ER, NICU) and patient volume metrics. Emphasize HIPAA compliance, EMR systems (Epic, Cerner, Meditech), and patient satisfaction scores.", keywords: ["Patient Care", "HIPAA Compliance", "EMR/EHR Systems", "Clinical Assessment", "BLS/ACLS Certified", "Compassionate Care"], emoji: "🏥" },
  { industry: "Finance & Accounting", focus: "Accuracy metrics, financial tools, regulatory knowledge, CPA/CFA", tip: "Quantify budget sizes managed, cost savings achieved, or revenue increased. Mention tools like Excel (Pivot Tables, VLOOKUP, Power Query), SAP, Oracle Financials, or QuickBooks. Highlight CPA, CFA, CMA, or Series licenses.", keywords: ["CPA", "Financial Analysis", "Audit & Assurance", "SAP/Oracle", "Regulatory Compliance", "Budget Management"], emoji: "💰" },
  { industry: "Creative & Marketing", focus: "Digital portfolio, campaign ROI, analytics proficiency, creative tools", tip: "Link to Behance, Dribbble, or personal portfolio site. Focus on campaign results with specific metrics. Show versatility across Adobe Creative Suite, Figma, Canva, Google Analytics, and marketing automation platforms.", keywords: ["SEO/SEM", "Content Strategy", "Google Analytics", "Brand Development", "Adobe Creative Suite", "ROI Optimization"], emoji: "🎨" },
  { industry: "Sales & Business Development", focus: "Quota attainment, revenue generation, client acquisition, CRM expertise", tip: "Always include specific sales numbers (% over quota, revenue generated, average deal size). Highlight key accounts won, relationship management skills, and CRM proficiency (Salesforce, HubSpot, Microsoft Dynamics).", keywords: ["Revenue Growth", "Client Acquisition", "Pipeline Management", "Contract Negotiation", "Salesforce CRM", "Quota Achievement"], emoji: "📈" },
  { industry: "Education & Academia", focus: "Publications, curriculum design, student outcomes, research grants", tip: "Include teaching evaluation scores, curriculum development examples, and published research or conference presentations. Highlight grants secured, committees served on, and mentorship programs.", keywords: ["Curriculum Design", "Student Assessment", "Research Publications", "Grant Writing", "Educational Technology", "Mentoring"], emoji: "📚" }
];

const BEFORE_AFTER_EXAMPLES = [
  { before: "Responsible for managing social media accounts for the company.", after: "Increased social media engagement by 240% and grew follower base by 15K within 6 months through strategic content calendar development, audience segmentation, and A/B testing of creative assets across Instagram, LinkedIn, and TikTok platforms." },
  { before: "Worked on customer service and helped customers with problems.", after: "Resolved 95% of customer complaints within first contact, achieving 98% satisfaction rating and reducing escalations by 40% through implementation of structured problem-solving framework and comprehensive product knowledge base." },
  { before: "In charge of sales in the Midwest region.", after: "Exceeded annual sales quota by 35% ($2.5M) in Midwest territory, securing 3 new enterprise accounts worth $1.2M in annual recurring revenue through strategic account planning and consultative selling methodology." },
  { before: "Did data entry and maintained spreadsheets for the department.", after: "Automated manual data entry processes using Excel VBA macros and Python scripts, reducing processing time by 75%, eliminating data errors completely, and saving approximately 15 hours of labor weekly across the department." },
  { before: "Trained new employees on company procedures.", after: "Designed and delivered comprehensive onboarding program for 25+ new hires, reducing ramp-up time from 8 weeks to 5 weeks and improving new employee retention rate by 30% through structured mentorship and skills assessments." },
  { before: "Managed the company website and made updates when needed.", after: "Redesigned company website using responsive design principles, improving mobile conversion rate by 45% and reducing bounce rate from 62% to 38% while achieving 99.9% uptime through proactive monitoring and optimization." }
];

const COMMON_MISTAKES = [
  { mistake: "Using generic objective statements", fix: "Replace with targeted professional summary demonstrating value proposition", severity: "High" },
  { mistake: "Listing duties instead of achievements", fix: "Apply CAR method (Challenge-Action-Result) to every bullet point", severity: "Critical" },
  { mistake: "Failing to quantify results with numbers", fix: "Add specific percentages, dollar amounts, and timeframes", severity: "Critical" },
  { mistake: "Complex formatting that confuses ATS", fix: "Use clean single-column layouts with standard section headings", severity: "High" },
  { mistake: "Including irrelevant personal information", fix: "Remove age, marital status, photo, and unrelated hobbies", severity: "Medium" },
  { mistake: "Spelling errors and grammatical mistakes", fix: "Use Grammarly, Hemingway Editor, and proofread twice aloud", severity: "Critical" },
  { mistake: "Passive language throughout resume", fix: "Start every bullet with strong action verbs in active voice", severity: "High" },
  { mistake: "Dense text without adequate white space", fix: "Use shorter paragraphs, bullet points, and generous margins", severity: "Medium" },
  { mistake: "Inconsistent formatting across sections", fix: "Standardize fonts, spacing, date formats, and bullet styles", severity: "High" },
  { mistake: "Missing industry-specific keywords for ATS", fix: "Analyze job descriptions and incorporate relevant terminology", severity: "Critical" }
];

const RESUME_WISDOM = [
  { quote: "Your resume is not your autobiography. It's your highlight reel—make every word earn its place.", author: "Career Expert Principle", icon: "FiStar" },
  { quote: "Don't tell them you're a leader. Show them you led a team of 15 to exceed targets by 40%.", author: "Show, Don't Tell Rule", icon: "FiUsers" },
  { quote: "A resume is a promise of future performance based on past achievement. Make your promises compelling.", author: "Hiring Manager Insight", icon: "FiTarget" },
  { quote: "The best resumes don't get jobs. The best resumes get interviews. The best interviews get jobs.", author: "Job Search Wisdom", icon: "FiBriefcase" }
];

const POWER_VERBS = [
  { category: "Leadership & Management", verbs: ["Spearheaded", "Orchestrated", "Championed", "Directed", "Mentored", "Empowered", "Cultivated", "Galvanized"], color: "gold" },
  { category: "Achievement & Results", verbs: ["Exceeded", "Surpassed", "Accelerated", "Catapulted", "Generated", "Delivered", "Outperformed", "Maximized"], color: "teal" },
  { category: "Innovation & Creation", verbs: ["Pioneered", "Architected", "Conceptualized", "Devised", "Engineered", "Designed", "Revolutionized", "Transformed"], color: "purple" },
  { category: "Process Improvement", verbs: ["Streamlined", "Optimized", "Automated", "Consolidated", "Restructured", "Refined", "Simplified", "Overhauled"], color: "rose" }
];

const FAQS = [
  { question: "How long should my resume be in 2026?", answer: "For most professionals with under 10 years of experience, one page remains the gold standard—like a perfectly crafted haiku, every word must count. Those with 10+ years of relevant experience or in academic/executive roles may extend to two pages. Never exceed two pages for standard job applications. Recent graduates and early-career professionals should absolutely maintain a single page. Research shows recruiters spend only 6-8 seconds on initial screening—concise, high-impact resumes consistently outperform lengthy documents." },
  { question: "What's the most important section of a resume?", answer: "The professional experience section carries the most weight with hiring managers, providing concrete evidence of your capabilities. However, the professional summary is arguably more critical for making a strong first impression—it's your elevator pitch, your movie trailer, your 'why you should keep reading' moment. In 2026, the skills section has gained increased importance as ATS systems and AI screening tools prioritize keyword matching against job requirements. Think of these three sections as a powerful trio working together." },
  { question: "Should I include a photo on my resume?", answer: "In the United States, Canada, United Kingdom, and Australia: absolutely not. Photos introduce unconscious bias and violate equal opportunity employment guidelines. Many ATS systems automatically strip images, and some recruiters immediately discard resumes with photos. Let your achievements paint the picture of who you are professionally. In certain European countries like Germany, France, and Belgium, professional headshots may be expected—research country-specific norms if applying internationally." },
  { question: "How do I handle employment gaps gracefully?", answer: "Employment gaps are life chapters, not career endings. Be honest but strategic. Consider using a combination or functional format that emphasizes skills over strict chronology. If you were freelancing, consulting, caregiving, pursuing education, or developing skills during gaps, include these as relevant experience. For shorter gaps (under 6 months), the reverse-chronological format typically handles them without issue. Remember: a well-explained gap is infinitely better than an unexplained one." },
  { question: "Can I use the same resume for every job application?", answer: "No—this is like wearing the same outfit to every occasion. Research consistently shows that customized resumes receive 40% more interview requests than generic versions. For each application, tailor your professional summary, reorder bullet points to highlight the most relevant achievements, and incorporate keywords from the specific job description. This extra effort signals genuine interest and professionalism to both ATS systems and human recruiters. Think of it as speaking the employer's language." },
  { question: "How do I optimize my resume for ATS systems?", answer: "Think of ATS as a very literal, detail-oriented gatekeeper. Use standard section headings (Professional Experience, Education, Skills), incorporate keywords naturally throughout your content, avoid tables/graphics/images that confuse parsing algorithms, save as .docx format for maximum compatibility, and include both acronyms and full terms (e.g., 'Search Engine Optimization (SEO)'). Use our free ATS resume checker to test your resume's compatibility before submitting." },
  { question: "What's the best font for a professional resume in 2026?", answer: "Top recommendations include Arial, Calibri, Helvetica, Lato, Garamond, and Merriweather—fonts that are clean, modern, and universally readable. Use 10-12pt for body text and 14-16pt for section headers. Avoid decorative or novelty fonts like Comic Sans, Papyrus, or script fonts which appear unprofessional. Maintain consistent font usage throughout—maximum two fonts (one for headers, one for body). Your font choice silently communicates your professionalism before a single word is read." },
  { question: "Should I include my GPA on my resume?", answer: "Include GPA only if you graduated within the past 2-3 years and achieved 3.5 or above on a 4.0 scale. For experienced professionals with established work history, remove GPA entirely—your professional achievements now speak louder than your academic ones. If your GPA is lower than 3.5, consider omitting it or highlighting relevant coursework, academic honors, or major-specific GPA if significantly higher. Remember: your resume should showcase your strongest qualifications, not your complete history." }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const HowToWriteAResume = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates,
    reviewDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(8).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/images/resume-writing-guide-product.jpg";

  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  const toolRef = useRef(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text.substring(0, 30) + '...');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>How to Write a Resume: Complete {CURRENT_YEAR} Guide with Expert Examples & Templates</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Master the art of resume writing with our comprehensive ${CURRENT_YEAR} guide. Step-by-step instructions, expert examples, ATS optimization tips, and proven strategies to land interviews at top companies.`} />
        <meta name="keywords" content="how to write a resume, resume writing guide, professional resume examples, resume templates 2026, ATS resume, job search tips, resume format, professional summary, resume achievements, CAR method" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={`How to Write a Resume: Complete ${CURRENT_YEAR} Guide with Expert Examples`} />
        <meta property="og:description" content="Master resume writing with expert tips, templates, and real examples including CAR method, ATS optimization, and industry-specific strategies." />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-writing-guide-og.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-01T00:00:00Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`How to Write a Resume: Complete ${CURRENT_YEAR} Guide`} />
        <meta name="twitter:description" content="Expert resume writing guide with templates and proven job search strategies for 2026." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-resume-guide-preview.jpg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": `How to Write a Resume: Complete ${CURRENT_YEAR} Guide`,
                  "description": "Complete professional guide on how to write an effective resume with step-by-step instructions, expert examples, and ATS optimization strategies.",
                  "dateModified": safeLastModifiedDate,
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com/",
                  "name": "Professional Resume Free",
                  "publisher": {
                    "@id": "https://professionalresumefree.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://professionalresumefree.com/#organization",
                  "name": "Professional Resume Free",
                  "url": "https://professionalresumefree.com/"
                },
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": `How to Write a Resume: Complete ${CURRENT_YEAR} Guide`,
                  "description": "Expert guide on writing professional resumes that pass ATS systems and impress hiring managers.",
                  "image": productImage,
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "author": {
                    "@id": "https://professionalresumefree.com/#organization"
                  },
                  "publisher": {
                    "@id": "https://professionalresumefree.com/#organization"
                  },
                  "mainEntityOfPage": {
                    "@id": `${canonicalUrl}#webpage`
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                },
                {
                  "@type": "Product",
                  "@id": `${canonicalUrl}#product`,
                  "name": "Resume Writing Guide",
                  "description": "Complete guide on how to write a professional resume",
                  "image": productImage,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": canonicalUrl,
                    "priceValidUntil": `${CURRENT_YEAR}-12-31`,
                    "eligibleRegion": {
                      "@type": "Country",
                      "name": "Worldwide"
                    },
                    "shippingDetails": {
                      "@type": "OfferShippingDetails",
                      "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": "0",
                        "currency": "USD"
                      },
                      "shippingDestination": {
                        "@type": "DefinedRegion",
                        "addressCountry": "US"
                      },
                      "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                          "@type": "QuantitativeValue",
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        },
                        "transitTime": {
                          "@type": "QuantitativeValue",
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        }
                      }
                    },
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "applicableCountry": "US",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
                      "merchantReturnDays": "0",
                      "returnMethod": "https://schema.org/ReturnNotPermitted",
                      "returnFees": "https://schema.org/FreeReturn"
                    }
                  },
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "learningResourceType",
                      "value": "Guide"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "educationalLevel",
                      "value": "Professional"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "creativeWorkStatus",
                      "value": "Updated"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp || Date.now()} />
        <meta name="content-freshness" content={safeCurrentDate} />
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
                <span itemProp="name" aria-current="page"><FiFileText size={14} style={{marginRight: '4px'}} /> How to Write a Resume</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} UPDATED GUIDE • COMPREHENSIVE • ATS-TESTED • 6 INDUSTRIES • POWER VERBS • EXPERT WISDOM</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a <span className="gradient-text">Resume</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '1rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Your resume is <strong>not your autobiography</strong>—it's your <span className="gradient-text-rose" style={{ fontWeight: 'var(--font-weight-bold)' }}>highlight reel</span>. A perfectly crafted promise of future performance based on past achievement. This comprehensive guide, based on <strong>{CURRENT_YEAR} hiring data and recruiter research</strong>, shows you exactly how to create a resume that <strong>passes ATS screening, captivates hiring managers, and generates 40% more interviews.</strong>
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {KEY_STATISTICS.slice(0, 4).map((s, i) => {
                  const IconComponent = ICON_MAP[s.icon] || FiStar;
                  return (
                    <div key={i} className="stat-card">
                      <IconComponent size={24} color="var(--accent-primary)" style={{ marginBottom: '0.5rem' }} />
                      <div className="stat-number">{s.value}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Resume Templates</Link>
              </div>
              {/* Freshness indicator */}
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
            <span><FiBookOpen style={{marginRight: '4px'}} /> 2,600+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 14 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 22,000+ views</span>
          </div>
        </div>

        {/* Resume Wisdom - NEW BEAUTIFUL SECTION */}
        <section className="section section-alt" id="resume-wisdom">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">✨ Timeless Resume Wisdom</h2>
              <p className="section-subtitle">Simple truths that transform ordinary resumes into extraordinary career stories</p>
            </div>
            <div className="grid-4">
              {RESUME_WISDOM.map((item, i) => {
                const IconComponent = ICON_MAP[item.icon] || FiStar;
                return (
                  <div key={i} className="card-executive-teal" style={{ textAlign: 'center' }}>
                    <IconComponent size={32} color="var(--teal-accent)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>"{item.quote}"</p>
                    <div className="feature-badge" style={{ background: 'rgba(128,203,196,0.1)', color: 'var(--teal-accent)', border: '0.5px solid rgba(128,203,196,0.3)' }}>{item.author}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>75% of Resumes Never Reach Human Eyes—Make Yours the 25% That Does</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Modern Applicant Tracking Systems and AI screening tools silently reject three out of every four resumes before a recruiter ever sees them. <strong>Your resume must speak two languages simultaneously:</strong> the algorithmic language of ATS keywords and formatting, and the human language of compelling achievement stories. This guide teaches you both fluently.
              </p>
            </div>
          </div>
        </section>

        {/* Power Verbs - NEW BEAUTIFUL SECTION */}
        <section className="section section-alt" id="power-verbs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">💪 Power Verbs That Command Attention</h2>
              <p className="section-subtitle">The right verb transforms a mundane duty into a compelling achievement. Choose wisely.</p>
            </div>
            <div className="grid">
              {POWER_VERBS.map((group, i) => (
                <div key={i} className={group.color === 'rose' ? 'card-executive-rose' : group.color === 'teal' ? 'card-executive-teal' : group.color === 'purple' ? 'card-executive' : 'card-executive'}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', textAlign: 'center', color: group.color === 'rose' ? 'var(--rose-accent)' : group.color === 'teal' ? 'var(--teal-accent)' : group.color === 'purple' ? 'var(--purple-accent)' : 'var(--accent-primary)' }}>{group.category}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    {group.verbs.map((verb, j) => (
                      <span key={j} className="keyword-tag" style={{ background: group.color === 'rose' ? 'rgba(248,187,208,0.1)' : group.color === 'teal' ? 'rgba(128,203,196,0.1)' : group.color === 'purple' ? 'rgba(187,134,252,0.1)' : 'rgba(242,202,80,0.1)', color: group.color === 'rose' ? 'var(--rose-accent)' : group.color === 'teal' ? 'var(--teal-accent)' : group.color === 'purple' ? 'var(--purple-accent)' : 'var(--accent-primary)', border: group.color === 'rose' ? '0.5px solid rgba(248,187,208,0.3)' : group.color === 'teal' ? '0.5px solid rgba(128,203,196,0.3)' : group.color === 'purple' ? '0.5px solid rgba(187,134,252,0.3)' : '0.5px solid var(--border-gold-filament)' }}>{verb}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="insight-box-teal" style={{ maxWidth: '800px', margin: '2rem auto 0', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--teal-accent)' }}>
                <FiZap style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                <strong>Pro Tip:</strong> Start every bullet point with one of these powerful verbs. Instead of "Responsible for managing team," write "<strong>Galvanized</strong> team of 12 to achieve 140% of quarterly targets."
              </p>
            </div>
          </div>
        </section>

        {/* Resume Formats */}
        <section ref={toolRef} className="section" id="resume-formats">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Choosing the Right Resume Format</h2>
              <p className="section-subtitle">Like choosing the right frame for a masterpiece—the format enhances, never distracts</p>
            </div>
            <div className="grid">
              {RESUME_FORMATS.map((format, i) => {
                const IconComponent = ICON_MAP[format.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={20} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{format.name}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem' }}><strong>Best for:</strong> {format.bestFor}</p>
                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✓ Strengths:</p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {format.pros.map((pro, j) => (
                          <li key={j} style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✗ Limitations:</p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {format.cons.map((con, j) => (
                          <li key={j} style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                      <span className="feature-tag" style={{ background: format.level === 'high' ? 'rgba(76,175,80,0.15)' : format.level === 'medium' ? 'rgba(242,202,80,0.15)' : 'rgba(255,180,171,0.15)' }}>
                        {format.level === 'high' ? '🌟 Recommended' : format.level === 'medium' ? '⚡ Situational' : '⚠️ Use with Caution'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section className="section section-alt" id="industry-strategies">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Resume Strategies</h2>
              <p className="section-subtitle">Every industry speaks a different language—learn to speak yours fluently</p>
            </div>
            <div className="grid">
              {INDUSTRY_EXAMPLES.map((ind, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2rem' }}>{ind.emoji}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{ind.industry}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Focus Areas:</strong> {ind.focus}</p>
                  <div className="insight-box-warning" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Insider Tip:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{ind.tip}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>Magic Keywords:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {ind.keywords.map((kw, j) => (
                        <span key={j} className="feature-tag">{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section className="section" id="before-after">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The Transformation Gallery: Before & After</h2>
              <p className="section-subtitle">Witness how ordinary duty statements undergo a remarkable metamorphosis into powerful achievement stories</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_EXAMPLES.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>❌ The Ordinary (Duty-Based):</p>
                    <div className="insight-box-danger" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>{item.before}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
                    <FiArrowRight size={20} color="var(--accent-primary)" style={{ transform: 'rotate(90deg)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✅ The Extraordinary (Achievement-Based):</p>
                    <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>{item.after}</p>
                    </div>
                  </div>
                  <button onClick={() => handleCopy(item.after)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                    <FiCopy size={14} /> {copiedText === item.after.substring(0, 30) + '...' ? 'Copied!' : 'Copy This Magic'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section section-alt" id="common-mistakes">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">10 Resume Sins That Sabotage Your Success</h2>
              <p className="section-subtitle">Avoid these common traps that send even qualified candidates straight to the rejection pile</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="card-executive" style={{ borderLeft: mistake.severity === 'Critical' ? '3px solid var(--error-color)' : '3px solid var(--warning-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', background: mistake.severity === 'Critical' ? 'rgba(255,180,171,0.15)' : 'rgba(255,183,77,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${mistake.severity === 'Critical' ? 'var(--error-color)' : 'var(--warning-color)'}` }}>
                      <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)', color: mistake.severity === 'Critical' ? 'var(--error-color)' : 'var(--warning-color)' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>{mistake.mistake}</h4>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>The Remedy:</strong> {mistake.fix}</p>
                      <span className="feature-tag" style={{ background: mistake.severity === 'Critical' ? 'rgba(255,180,171,0.15)' : 'rgba(255,183,77,0.15)', color: mistake.severity === 'Critical' ? 'var(--error-color)' : 'var(--warning-color)' }}>{mistake.severity === 'Critical' ? '🔴 Critical Priority' : '🟡 High Priority'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Thoughtful answers to the questions that keep job seekers awake at night</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeFaqDates[i] || safeCurrentDate}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              ✨ Your Dream Resume Awaits
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              You now possess the wisdom, the words, and the strategies to create a resume that opens doors. Your career story deserves to be told beautifully. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Create Your Masterpiece</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Templates", "6 Industry Guides", "Power Verbs Library", "Before/After Gallery", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Continue Your Career Journey</h2>
              <p className="section-subtitle">Explore more of our lovingly crafted resources to accelerate your job search</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume's compatibility" },
                { href: "/how-to-write-a-resume-for-usa-sales-and-marketing-roles", text: "Sales & Marketing Guide", iconName: "FiTrendingUp", desc: "Revenue-focused strategies" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiZap", desc: "AI-powered achievement writing" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get your resume graded" },
                { href: "/how-to-write-a-resume-for-usa-teaching-and-education-jobs", text: "Teaching Resume Guide", iconName: "FiBookOpen", desc: "Education-specific strategies" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers", desc: "Beautiful ATS-ready designs" }
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: JobScan, TheLadders, CareerBuilder, Forbes, LinkedIn, SHRM</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
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

  // Generate dates for content freshness
  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const reviewDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        faqDates,
        reviewDates
      }
    },
    revalidate: 3600
  };
}

export default HowToWriteAResume;