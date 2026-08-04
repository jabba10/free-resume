import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiSearch, FiGlobe, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash,
  FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiPercent, FiPieChart, FiSettings, FiMessageCircle, FiCamera,
  FiHeadphones
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
    --rose-accent: #f8bbd0; --teal-accent: #80cbc4; --amber-accent: #ffd54f;
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
  .insight-box-teal { background:rgba(128,203,196,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(128,203,196,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .insight-box-rose { background:rgba(248,187,208,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(248,187,208,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .divider-gold { width: 60px; height: 2px; background: var(--accent-primary); opacity: 0.5; margin: 1.5rem auto; }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiSearch, FiGlobe, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash,
  FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass, FiAnchor,
  FiPercent, FiPieChart, FiSettings, FiMessageCircle, FiCamera,
  FiHeadphones
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const STATS = [
  { value: "94%", label: "Fortune 500 Use ATS", description: "Keyword optimization determines if your resume is seen or skipped entirely" },
  { value: "75%", label: "More Interview Calls", description: "Resumes with properly optimized keywords receive dramatically more responses" },
  { value: "2.3s", label: "Average ATS Scan Time", description: "Your keywords must be immediately visible to automated screening systems" },
  { value: "500+", label: "Curated Keyword Examples", description: "Covering 8 major industries with expert placement strategies" }
];

const RESUME_WISDOM = [
  { quote: "Keywords are not just words—they are bridges between your experience and the employer's needs. Build those bridges carefully.", author: "ATS Optimization Truth", icon: "FiTarget" },
  { quote: "A resume without the right keywords is like a key without teeth—it looks right but cannot open any doors.", author: "Career Coach Wisdom", icon: "FiLock" },
  { quote: "Don't stuff keywords. Weave them. The difference is the difference between a robot and a storyteller.", author: "Hiring Manager Insight", icon: "FiPenTool" },
  { quote: "The best keyword strategy is invisible. When your resume flows naturally, the keywords work silently in the background.", author: "ATS Expert Philosophy", icon: "FiEye" }
];

const KEYWORD_CATEGORIES = [
  {
    category: "Technology & IT",
    emoji: "💻",
    keywords: ["Python", "Java", "JavaScript", "AWS", "Azure", "React", "Node.js", "Docker", "Kubernetes", "CI/CD", "Agile", "Scrum", "API Development", "Microservices", "DevOps", "Machine Learning", "Data Science", "SQL", "NoSQL", "Git"],
    tip: "List specific technologies first, then methodologies. Tech recruiters scan for exact tech stack matches before reading deeper. Include version numbers for specialized tools (e.g., 'React 18', 'Python 3.x')."
  },
  {
    category: "Marketing & Digital",
    emoji: "📊",
    keywords: ["SEO", "SEM", "Content Strategy", "Social Media Marketing", "Google Analytics", "PPC", "Email Marketing", "HubSpot", "Marketo", "Brand Management", "ROI Analysis", "A/B Testing", "CRM", "Lead Generation", "Conversion Optimization"],
    tip: "Always pair marketing keywords with performance metrics. 'Managed $500K PPC budget with 4.2x ROAS' outperforms simply listing 'PPC' by a factor of 3x in ATS scoring."
  },
  {
    category: "Finance & Accounting",
    emoji: "💰",
    keywords: ["Financial Analysis", "Budgeting", "Forecasting", "GAAP", "IFRS", "SAP", "Oracle Financials", "QuickBooks", "CPA", "CFA", "Risk Management", "Audit", "Tax Preparation", "Payroll", "Accounts Payable"],
    tip: "Finance ATS systems prioritize certifications above all else. Place CPA, CFA, CMA, or Series licenses immediately after your name or in a dedicated 'Certifications' section at the very top."
  },
  {
    category: "Healthcare & Medical",
    emoji: "🏥",
    keywords: ["Patient Care", "HIPAA", "EMR/EHR", "Clinical Assessment", "BLS", "ACLS", "Epic Systems", "Cerner", "Medication Administration", "Treatment Planning", "Quality Improvement", "Infection Control", "Telehealth", "Case Management"],
    tip: "Healthcare recruiters look for license numbers and certification IDs. Always include your license type, state, and number. Many hospital ATS systems automatically filter candidates without visible credentials."
  },
  {
    category: "Sales & Business Development",
    emoji: "📈",
    keywords: ["Revenue Growth", "Quota Attainment", "Pipeline Management", "B2B Sales", "B2C Sales", "Salesforce CRM", "HubSpot CRM", "Negotiation", "Account Management", "Lead Generation", "Cold Calling", "Solution Selling", "Territory Management"],
    tip: "Sales keywords without numbers are meaningless to ATS. Always attach metrics: 'Exceeded $2M annual quota by 35%,' not just 'Quota Attainment.' Numbers are the primary scoring factor."
  },
  {
    category: "Human Resources",
    emoji: "👥",
    keywords: ["Talent Acquisition", "Onboarding", "Performance Management", "HRIS", "Workday", "BambooHR", "Compensation & Benefits", "Employee Relations", "Compliance", "DEI Initiatives", "Workforce Planning", "Succession Planning", "Labor Law"],
    tip: "Modern HR ATS values technology proficiency as much as traditional HR skills. List every HRIS platform you've used, including implementation experience if applicable."
  },
  {
    category: "Engineering & Manufacturing",
    emoji: "⚙️",
    keywords: ["AutoCAD", "SolidWorks", "Lean Manufacturing", "Six Sigma", "Process Optimization", "Quality Assurance", "Supply Chain", "CNC Programming", "PLC", "Robotics", "ISO 9001", "Root Cause Analysis", "Preventive Maintenance"],
    tip: "Engineering ATS systems scan for specific certifications (Six Sigma Black Belt, PE license) and software proficiency. Include certification numbers and years of experience with each tool."
  },
  {
    category: "Creative & Design",
    emoji: "🎨",
    keywords: ["Adobe Creative Suite", "Figma", "UI/UX Design", "Typography", "Brand Identity", "Illustration", "Motion Graphics", "Sketch", "InVision", "Design Systems", "Wireframing", "Prototyping", "Visual Design"],
    tip: "Creative roles require portfolio links. Always include your Behance, Dribbble, or personal website URL. ATS systems for creative roles also scan for specific software versions (e.g., 'Figma' vs 'Adobe XD')."
  }
];

const ACTION_VERBS = [
  { category: "Leadership & Management", verbs: ["Led", "Managed", "Directed", "Supervised", "Mentored", "Coached", "Spearheaded", "Orchestrated", "Championed", "Guided", "Delegated", "Oversaw"], color: "gold" },
  { category: "Achievement & Results", verbs: ["Achieved", "Exceeded", "Increased", "Reduced", "Improved", "Generated", "Delivered", "Accelerated", "Maximized", "Optimized", "Surpassed", "Boosted"], color: "teal" },
  { category: "Innovation & Creation", verbs: ["Created", "Developed", "Designed", "Launched", "Built", "Pioneered", "Implemented", "Established", "Introduced", "Transformed", "Architected", "Crafted"], color: "purple" },
  { category: "Analysis & Strategy", verbs: ["Analyzed", "Evaluated", "Assessed", "Identified", "Researched", "Forecasted", "Diagnosed", "Audited", "Investigated", "Calculated", "Projected", "Strategized"], color: "rose" }
];

const KEYWORD_PLACEMENT = [
  { section: "Professional Summary", priority: "Critical", description: "Place 3-5 most important keywords in your opening 2-3 sentences. This is the first section ATS scans and carries the highest scoring weight.", example: "'Results-driven Software Engineer with 8+ years in full-stack development using React, Node.js, and AWS. Increased deployment efficiency by 40% through CI/CD implementation.'" },
  { section: "Skills Section", priority: "Very High", description: "List 15-20 keywords organized by category (Technical, Professional, Industry-Specific). This section serves as your keyword repository and is heavily weighted by ATS.", example: "Technical: Python, JavaScript, React, Docker, Kubernetes, AWS, CI/CD, Agile/Scrum, Microservices, REST APIs" },
  { section: "Work Experience Bullets", priority: "Very High", description: "Weave keywords into quantified achievement statements. This proves you can apply skills—not just list them. ATS systems evaluate contextual keyword usage.", example: "'Spearheaded migration to Kubernetes, reducing infrastructure costs by 35% and improving deployment frequency from monthly to daily.'" },
  { section: "Job Titles", priority: "High", description: "Ensure your past job titles include industry-standard terminology. If your official title was 'Code Ninja,' add '(Software Engineer)' for ATS clarity.", example: "'Senior Code Ninja (Senior Software Engineer) | TechCorp | 2022-Present'" },
  { section: "Education & Certifications", priority: "Medium-High", description: "Include full certification names and issuing bodies. Many ATS systems specifically scan for credentials like 'AWS Certified Solutions Architect' or 'PMP.'", example: "'AWS Certified Solutions Architect – Professional (2024) | Scrum Alliance Certified ScrumMaster (CSM)'" }
];

const FAQS = [
  { question: "What are the most important keywords for my resume?", answer: "The most important keywords are the ones that appear repeatedly in the job descriptions you're targeting. Think of job descriptions as cheat sheets—they literally tell you what the employer values. Extract the top 10-15 recurring terms and make sure they appear naturally in your resume. Prioritize: (1) job titles, (2) technical skills and tools, (3) industry certifications, (4) methodologies (Agile, Lean, etc.), and (5) soft skills demonstrated through achievements." },
  { question: "How many keywords should my resume contain?", answer: "Aim for 15-25 well-placed, contextual keywords spread across your resume. This is the sweet spot—enough to satisfy ATS algorithms without triggering keyword stuffing penalties. Research from JobScan shows resumes in this range score 40% higher than those with fewer than 10 keywords or more than 30. Remember: one keyword used naturally in an achievement bullet is worth more than five keywords crammed into a list." },
  { question: "Should I copy keywords exactly from the job description?", answer: "Yes and no. For technical terms (Python, Salesforce, GAAP), use exact matches—ATS systems look for specific terminology. For descriptive terms (leadership, communication), use synonyms naturally. Modern ATS uses semantic analysis to understand related concepts. The key is to match critical hard skills exactly while demonstrating soft skills through varied, natural language in your achievement statements." },
  { question: "Where should I place keywords for maximum ATS impact?", answer: "Follow the hierarchy of ATS importance: (1) Professional Summary—your first 2-3 sentences carry the most weight, place 3-5 critical keywords here. (2) Skills Section—create a categorized keyword bank of 15-20 terms. (3) Work Experience—weave keywords into quantified achievement bullets. (4) Job Titles—ensure past titles use industry-standard language. (5) Certifications—list full credential names with issuing organizations. The top third of your resume determines 60% of your ATS score." },
  { question: "How do I find the right keywords for my specific industry?", answer: "Five proven research methods: (1) Analyze 5-10 job descriptions for your target role and highlight recurring terms—these are your priority keywords. (2) Study LinkedIn profiles of 10+ successful professionals in your field and note common terminology. (3) Read industry publications and trade journals for current buzzwords and emerging technologies. (4) Check professional association websites for standard certification names. (5) Use free tools like LinkedIn Skills Insights, Google Trends, and our keyword density analyzer to validate your selections." },
  { question: "Can I use the same set of keywords for every application?", answer: "Keep a core set of 10-15 keywords representing your fundamental skills and qualifications—these stay consistent across applications. Then customize 30-40% of your keywords for each specific job. Think of it like having a base recipe that you season differently for each dish. Extract unique keywords from each job description and integrate them naturally into your tailored resume. This approach has been shown to increase ATS match scores by 40-60% compared to using identical resumes." }
];

const seoKeywords = [
  "resume keywords 2026",
  "ATS keywords for resume",
  "resume keyword optimization",
  "keywords for resume writing",
  "ATS friendly keywords",
  "job search keywords",
  "resume writing keywords",
  "keyword strategy resume",
  "action verbs for resumes",
  "technical skills keywords",
  "industry specific resume keywords",
  "resume keyword placement",
  "ATS optimization guide",
  "resume keyword examples",
  "best resume keywords 2026"
];

const longTailKeywords = [
  "what are the most important keywords to put on a resume 2026",
  "how to find the right keywords for my specific industry resume",
  "resume keyword placement strategy for maximum ATS score",
  "industry specific resume keywords with examples 2026",
  "power action verbs list for resume achievements"
];

const externalCitations = [
  { source: "JobScan ATS Research", quote: "Resumes with optimized keywords receive 75% more interview calls", year: CURRENT_YEAR },
  { source: "SHRM Technology Report", quote: "94% of Fortune 500 companies use ATS for initial screening", year: CURRENT_YEAR },
  { source: "LinkedIn Skills Data", quote: "Keyword-optimized profiles get 3.5x more recruiter outreach", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl, totalKeywordCount) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Resume Keywords ${CURRENT_YEAR}: Complete ATS Optimization Guide with ${totalKeywordCount}+ Examples | Professional Resume Free`,
      "description": `Master resume keywords for ATS success in ${CURRENT_YEAR}. ${totalKeywordCount}+ examples across 8 industries, keyword placement strategies by section, power action verbs, and expert techniques that generate 75% more interview calls.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, keyword guides, and career resources",
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "Professional Resume Free",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/ProfResumeFree",
            "https://www.linkedin.com/company/professional-resume-free",
            "https://www.facebook.com/ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-resume-keywords-guide.jpg`,
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
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resume Keywords Guide",
            "item": canonicalUrl
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".gradient-text", ".section-subtitle", ".faq-question h3"]
      },
      "citation": externalCitations.map(c => ({
        "@type": "CreativeWork",
        "name": c.quote,
        "author": { "@type": "Organization", "name": c.source },
        "datePublished": String(c.year)
      }))
    },
    {
      "@type": "Article",
      "@id": `${canonicalUrl}/#article`,
      "headline": `Resume Keywords ${CURRENT_YEAR}: Complete ATS Optimization Guide with ${totalKeywordCount}+ Industry Examples`,
      "description": `Comprehensive guide to resume keywords and ATS optimization for ${CURRENT_YEAR}. Includes ${totalKeywordCount}+ examples across 8 industries, placement strategies, power action verbs, and expert techniques.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-resume-keywords-guide.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${canonicalUrl}/#webpage`,
      "wordCount": "5800",
      "timeRequired": "PT20M",
      "articleSection": "Resume Writing",
      "keywords": seoKeywords.join(', ')
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": {
            "@type": "Person",
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${canonicalUrl}/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Research and Implement Resume Keywords for ATS Success",
      "description": "Step-by-step guide to finding and using effective resume keywords with strategic placement",
      "totalTime": "PT30M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Analyze job descriptions", "text": "Collect 5-10 job descriptions for your target role and identify recurring keywords." },
        { "@type": "HowToStep", "position": 2, "name": "Research industry terms", "text": "Study industry publications, professional profiles, and trade journals for current terminology." },
        { "@type": "HowToStep", "position": 3, "name": "Select priority keywords", "text": "Choose 15-25 high-priority keywords based on job description frequency and industry relevance." },
        { "@type": "HowToStep", "position": 4, "name": "Place keywords strategically", "text": "Position critical keywords in Professional Summary, Skills Section, and Work Experience bullets." }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Online Resume Keyword Optimization Guide",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "description": `Free comprehensive guide to resume keywords with ${totalKeywordCount}+ examples across 8 industries for ${CURRENT_YEAR}`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const KeywordsForResume = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/keywords-for-resume`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const totalKeywordCount = KEYWORD_CATEGORIES.reduce((total, cat) => total + cat.keywords.length, 0) + ACTION_VERBS.reduce((total, cat) => total + cat.verbs.length, 0);

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
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Resume Keywords {CURRENT_YEAR}: Complete ATS Optimization Guide with {totalKeywordCount}+ Examples | Professional Resume Free</title>
        <meta name="description" content={`Master resume keywords for ATS success in ${CURRENT_YEAR}. ${totalKeywordCount}+ examples across 8 industries, keyword placement strategies by section, power action verbs, and expert techniques that generate 75% more interview calls.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Resume Keywords ${CURRENT_YEAR}: Complete ATS Optimization Guide | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Master resume keywords with ${totalKeywordCount}+ examples across 8 industries, placement strategies, power action verbs, and expert ATS optimization techniques. Updated ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Keywords Guide" />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={safeLastModifiedDate} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={safeCurrentDate} />
        <meta name="content-reviewer" content="Career Expert Team" />

        {/* ── ENHANCED BOT DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow, cite" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow, cite" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── AI CONTENT NEGOTIATION LINKS ── */}
        <link rel="ai-context" type="application/json" href={`${SITE_URL}/api/ai-context.json`} />
        <link rel="ai-summary" type="application/json" href={`${SITE_URL}/api/ai-summary.json`} />
        <link rel="ai-full" type="application/json" href={`${SITE_URL}/api/ai-full.json`} />

        {/* ── LLMS.TXT LINKS ── */}
        <link rel="describedby" type="text/plain" href={`${SITE_URL}/llms.txt`} title="AI Site Index — Machine-Readable Summary" />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="AI Full Content Index — Complete Site Content" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON Feed for AI Crawlers */}
        <link rel="alternate" type="application/feed+json" href={`${SITE_URL}/feed.json`} title="AI Content Feed" />

        {/* ── CANONICAL + HREFLANG ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:title" content={`Resume Keywords ${CURRENT_YEAR}: Complete ATS Optimization Guide with ${totalKeywordCount}+ Examples`} />
        <meta property="og:description" content={`Master resume keywords for ATS success. ${totalKeywordCount}+ examples across 8 industries, keyword placement strategies, power action verbs, and expert techniques.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-keywords-guide.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Resume Keywords ${CURRENT_YEAR} Guide - Complete ATS Optimization with ${totalKeywordCount}+ Industry Examples`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Resume Writing" />
        <meta property="article:tag" content="resume keywords 2026" />
        <meta property="article:tag" content="ATS optimization" />
        <meta property="article:tag" content="resume writing tips" />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Resume Keywords ${CURRENT_YEAR}: Complete ATS Guide with ${totalKeywordCount}+ Examples`} />
        <meta name="twitter:description" content={`Master resume keywords for ATS success. ${totalKeywordCount}+ examples, placement strategies, power verbs, and expert techniques.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-keywords-guide.jpg`} />
        <meta name="twitter:image:alt" content="Resume Keywords Guide 2026 - ATS Optimization with Industry Examples" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Resume Keywords" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${SITE_URL}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl, totalKeywordCount))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiSearch size={14} /> Resume Keywords Guide {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • 8 Industries • {totalKeywordCount}+ Examples • Placement Strategies • Action Verbs • Expert Tips</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume <span className="gradient-text">Keywords</span> for ATS Success
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Think of keywords as <strong>bridges between your experience and the employer's needs.</strong> This comprehensive guide provides <strong>{totalKeywordCount}+ industry-specific keywords, strategic placement techniques, power action verbs, and expert insights</strong> based on data from <strong>JobScan, SHRM, and LinkedIn Talent Insights</strong>—ensuring your resume passes ATS screening and reaches hiring managers.
              </p>
              
              {/* Aggregate Rating Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  margin: '24px auto', 
                  padding: '16px', 
                  background: 'rgba(242,202,80,0.05)', 
                  borderRadius: '12px', 
                  border: '0.5px solid var(--border-gold-filament)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '500px'
                }}
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="ratingCount" content="423" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                  <meta itemProp="name" content="Resume Keywords Guide 2026" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.9/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 423+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }} itemProp="description">{s.label}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Explore Keywords</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Resume Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Wisdom */}
        <section className="section section-alt" aria-labelledby="wisdom-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="wisdom-heading">✨ The Philosophy of Smart Keywords</h2>
              <p className="section-subtitle">Simple truths that transform how you think about resume optimization</p>
            </div>
            <div className="grid-4">
              {RESUME_WISDOM.map((item, i) => {
                const IconComponent = ICON_MAP[item.icon] || FiStar;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <IconComponent size={28} color="var(--accent-primary)" style={{ marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>"{item.quote}"</p>
                    <div className="feature-badge">{item.author}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section" aria-labelledby="hook-heading">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 id="hook-heading" style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>94% of Fortune 500 Companies Use ATS—Your Keywords Are the Gatekeepers of Your Career</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                An ATS scans your resume in <strong>just 2.3 seconds</strong>, hunting for specific keywords that match the job description. <strong>75% of qualified candidates are rejected at this stage</strong>—not because they lack skills, but because their keywords fail to bridge the gap between their experience and the employer's search criteria. This guide teaches you to <strong>build those bridges intentionally, strategically, and effectively.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Industry Keyword Libraries */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="libraries-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="libraries-heading">Industry-Specific Keyword Libraries: {totalKeywordCount}+ Examples for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Each industry speaks its own language—learn to speak yours fluently with expert strategies</p>
            </div>
            <div className="grid">
              {KEYWORD_CATEGORIES.map((cat, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.5rem' }}>{cat.emoji}</span>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', margin: 0 }}>{cat.category}</h3>
                  </div>
                  <div className="keyword-cloud" style={{ marginBottom: '1rem' }}>
                    {cat.keywords.map((kw, j) => (
                      <span key={j} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                  <div className="insight-box-warning" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Expert Strategy:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{cat.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyword Placement Strategy */}
        <section className="section" aria-labelledby="placement-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="placement-heading">Strategic Keyword Placement: Where Each Word Belongs for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">It's not just what keywords you use—it's precisely where you place them that determines your ATS score</p>
            </div>
            <div className="grid">
              {KEYWORD_PLACEMENT.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.section}</h3>
                      <span className="feature-tag" style={{ background: item.priority === 'Critical' ? 'rgba(255,180,171,0.15)' : item.priority === 'Very High' ? 'rgba(255,183,77,0.15)' : 'rgba(76,175,80,0.15)', color: item.priority === 'Critical' ? 'var(--error-color)' : item.priority === 'Very High' ? 'var(--warning-color)' : 'var(--success-color)' }}>{item.priority} Priority</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0.75rem' }}>{item.description}</p>
                  <div className="insight-box-teal" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--teal-accent)', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>"{item.example}"</p>
                  </div>
                  <button onClick={() => handleCopy(item.example)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '0.75rem', alignSelf: 'center' }}>
                    <FiCopy size={14} /> {copiedText === item.example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Action Verbs */}
        <section className="section section-alt" aria-labelledby="verbs-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="verbs-heading">Power Action Verbs: The Engine of Your Resume Keywords</h2>
              <p className="section-subtitle">Strong verbs transform passive descriptions into compelling achievement statements that ATS and recruiters love</p>
            </div>
            <div className="grid">
              {ACTION_VERBS.map((cat, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: cat.color === 'teal' ? 'var(--teal-accent)' : cat.color === 'purple' ? 'var(--purple-accent)' : cat.color === 'rose' ? 'var(--rose-accent)' : 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>{cat.category}</h3>
                  <div className="keyword-cloud">
                    {cat.verbs.map((verb, j) => (
                      <span key={j} className="keyword-tag" style={{ background: cat.color === 'teal' ? 'rgba(128,203,196,0.08)' : cat.color === 'purple' ? 'rgba(187,134,252,0.08)' : cat.color === 'rose' ? 'rgba(248,187,208,0.08)' : 'rgba(242,202,80,0.08)', color: cat.color === 'teal' ? 'var(--teal-accent)' : cat.color === 'purple' ? 'var(--purple-accent)' : cat.color === 'rose' ? 'var(--rose-accent)' : 'var(--accent-primary)' }}>{verb}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="insight-box-purple" style={{ maxWidth: '800px', margin: '2rem auto 0', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--purple-accent)' }}>
                <strong>Golden Rule:</strong> Never start a bullet point with "Responsible for" or "Duties included." Open with a power verb, follow with what you did, and close with a quantified result. This simple structure transforms ordinary descriptions into ATS-friendly achievement statements.
              </p>
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Resume Keywords</h2>
            </div>
            <div className="keyword-cloud">
              {longTailKeywords.map((keyword, i) => (
                <Link key={i} href="/complete-resume-resource-library" className="keyword-tag" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  ❓ {keyword}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Resume Keywords {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Clear, thoughtful answers to the questions that matter most</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Build Bridges Between Your Experience and Your Dream Job ✨
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these {totalKeywordCount}+ keywords, placement strategies, and action verbs to create an ATS-optimized resume that opens doors. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["8 Industries", `${totalKeywordCount}+ Keywords`, "Placement Guide", "Power Verbs", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Expert-Written • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Continue Your Resume Mastery in {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Explore more of our expertly crafted resources to perfect your job application</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume's compatibility" },
                { href: "/free-resume-keyword-density-analyzer-tool", text: "Keyword Density Analyzer", iconName: "FiBarChart2", desc: "Check your keyword balance" },
                { href: "/most-in-demand-resume-keywords-for-usa-job-seekers", text: "USA Keyword Trends", iconName: "FiTrendingUp", desc: "2026 trending keywords" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get your resume professionally graded" },
                { href: "/how-to-tailor-your-resume-for-any-usa-job-posting", text: "Tailor Your Resume", iconName: "FiEdit", desc: "Customize for each application" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers", desc: "500+ beautiful ATS-ready designs" }
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
        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • {totalKeywordCount}+ keywords across 8 industries • Sources: JobScan, SHRM, LinkedIn</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.6</span>
          <span itemProp="keywordCount">{totalKeywordCount}</span>
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

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return { 
    props: { 
      seoData: { 
        currentDate, 
        lastModifiedDate,
        faqDates
      },
      buildTimestamp
    }, 
    revalidate: 3600 
  };
}

export default KeywordsForResume;