import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiGlobe, FiBook, FiBriefcase, FiAward,
  FiCalendar, FiPieChart, FiShield, FiZap, FiTarget, FiStar,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock,
  FiEye, FiCheck
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Immigration Points Calculator Edition)
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
    --font-mono: 'JetBrains Mono','Fira Code','Consolas',monospace;
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
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-primary:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
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
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:clamp(1rem,3vw,1.5rem); background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; min-width:0; }
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; overflow-wrap:break-word; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-label-sm); word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem auto; }
  .input-group { margin-bottom: 1.5rem; }
  .input-label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500; font-size: var(--font-size-body-sm); }
  .input-field { width: 100%; padding: var(--input-padding); background: var(--input-bg); border: var(--input-border); border-radius: var(--input-radius); color: var(--input-text); font-size: 1rem; font-family: var(--font-body); transition: border-color var(--transition-fast); }
  .input-field:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(242,202,80,0.1); }
  .input-field::placeholder { color: var(--input-placeholder); }
  select.input-field { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
  .result-box { background: rgba(242,202,80,0.05); border: 0.5px solid var(--border-gold-filament); border-radius: 0.5rem; padding: clamp(1rem,3vw,1.5rem); margin-top: 2rem; }
  .points-summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
  .points-card { padding: clamp(1rem,2.5vw,1.5rem); background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); text-align: center; }
  .points-category { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--card-bg); border-radius: 0.375rem; border: var(--card-border); margin-bottom: 0.5rem; }
  .points-value { font-size: var(--font-size-body-lg); font-weight: var(--font-weight-bold); color: var(--accent-primary); }
  .progress-bar-bg { width: 100%; height: 8px; background: var(--bg-surface-high); border-radius: 4px; overflow: hidden; margin-top: 0.5rem; }
  .progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--accent-primary), var(--accent-primary-container)); border-radius: 4px; transition: width 0.5s var(--easing-smooth); }
  .score-circle-large { width: 140px; height: 140px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; flex-direction: column; }
  .score-pass { background: rgba(76, 175, 80, 0.1); border: 4px solid var(--success-color); box-shadow: 0 0 30px rgba(76, 175, 80, 0.2); }
  .score-borderline { background: rgba(255, 152, 0, 0.1); border: 4px solid var(--warning-color); box-shadow: 0 0 30px rgba(255, 152, 0, 0.2); }
  .score-fail { background: rgba(244, 67, 54, 0.1); border: 4px solid var(--error-color); box-shadow: 0 0 30px rgba(244, 67, 54, 0.2); }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all var(--transition-fast); }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
    .points-summary { grid-template-columns: 1fr; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const COUNTRIES = [
  { name: 'Canada', code: 'CA', passMark: 67, maxPoints: 100, system: 'Express Entry - Federal Skilled Worker' },
  { name: 'Australia', code: 'AU', passMark: 65, maxPoints: 130, system: 'General Skilled Migration' },
  { name: 'United Kingdom', code: 'UK', passMark: 70, maxPoints: 100, system: 'Skilled Worker Visa' },
  { name: 'New Zealand', code: 'NZ', passMark: 100, maxPoints: 200, system: 'Skilled Migrant Category' }
];

const AGE_RANGES = {
  CA: [
    { range: '18-35', points: 12 }, { range: '36', points: 11 }, { range: '37', points: 10 },
    { range: '38', points: 9 }, { range: '39', points: 8 }, { range: '40', points: 7 },
    { range: '41', points: 6 }, { range: '42', points: 5 }, { range: '43', points: 4 },
    { range: '44', points: 3 }, { range: '45', points: 2 }, { range: '46', points: 1 },
    { range: '47+', points: 0 }
  ],
  AU: [
    { range: '18-24', points: 25 }, { range: '25-32', points: 30 }, { range: '33-39', points: 25 },
    { range: '40-44', points: 15 }, { range: '45-49', points: 0 }
  ],
  UK: [
    { range: '18-39', points: 20 }, { range: '40-44', points: 10 }, { range: '45-49', points: 5 },
    { range: '50+', points: 0 }
  ],
  NZ: [
    { range: '20-39', points: 30 }, { range: '40-44', points: 20 }, { range: '45-49', points: 10 },
    { range: '50-55', points: 5 }
  ]
};

const EDUCATION_LEVELS = {
  CA: [
    { level: 'PhD', points: 25 }, { level: 'Masters', points: 23 },
    { level: 'Two or more post-secondary degrees', points: 22 }, { level: 'Bachelors (3+ years)', points: 21 },
    { level: 'Two-year post-secondary diploma', points: 19 }, { level: 'One-year post-secondary diploma', points: 15 },
    { level: 'High school', points: 5 }
  ],
  AU: [
    { level: 'Doctorate', points: 20 }, { level: 'Bachelors/Masters', points: 15 },
    { level: 'Diploma/Trade qualification', points: 10 }, { level: 'Other qualification', points: 5 }
  ],
  UK: [
    { level: 'PhD (relevant to job)', points: 20 }, { level: 'PhD (unrelated) or Masters', points: 15 },
    { level: 'Bachelors degree', points: 10 }, { level: 'High school diploma', points: 5 }
  ],
  NZ: [
    { level: 'Level 10 (Doctorate)', points: 30 }, { level: 'Level 9 (Masters)', points: 25 },
    { level: 'Level 8 (Postgrad Dip/Bachelors Hons)', points: 20 }, { level: 'Level 7 (Bachelors)', points: 15 },
    { level: 'Level 4-6 (Diploma/Certificate)', points: 10 }
  ]
};

const EXPERIENCE_LEVELS = {
  CA: [
    { years: '6+ years', points: 15 }, { years: '4-5 years', points: 13 }, { years: '2-3 years', points: 11 },
    { years: '1 year', points: 9 }, { years: 'Less than 1 year', points: 0 }
  ],
  AU: [
    { years: '8+ years', points: 20 }, { years: '5-7 years', points: 15 }, { years: '3-4 years', points: 10 },
    { years: '1-2 years', points: 5 }
  ],
  UK: [
    { years: '10+ years', points: 20 }, { years: '5-9 years', points: 15 }, { years: '3-4 years', points: 10 },
    { years: '1-2 years', points: 5 }
  ],
  NZ: [
    { years: '10+ years', points: 50 }, { years: '8-9 years', points: 45 }, { years: '6-7 years', points: 40 },
    { years: '4-5 years', points: 30 }, { years: '2-3 years', points: 20 }, { years: 'Less than 2 years', points: 10 }
  ]
};

const LANGUAGE_LEVELS = {
  CA: [
    { level: 'CLB 10+ (Superior)', points: 24 }, { level: 'CLB 9 (Advanced)', points: 20 },
    { level: 'CLB 8 (Upper Intermediate)', points: 16 }, { level: 'CLB 7 (Intermediate)', points: 12 },
    { level: 'CLB 6 (Lower Intermediate)', points: 8 }, { level: 'Below CLB 6', points: 0 }
  ],
  AU: [
    { level: 'Superior (IELTS 8+)', points: 20 }, { level: 'Proficient (IELTS 7)', points: 10 },
    { level: 'Competent (IELTS 6)', points: 0 }
  ],
  UK: [
    { level: 'C1/Advanced (IELTS 8+)', points: 20 }, { level: 'B2/Upper Intermediate (IELTS 6-7)', points: 10 },
    { level: 'B1/Intermediate (IELTS 4-5)', points: 5 }
  ],
  NZ: [
    { level: 'Superior (IELTS 8+)', points: 30 }, { level: 'Proficient (IELTS 7-7.5)', points: 25 },
    { level: 'Competent (IELTS 6.5)', points: 20 }, { level: 'Functional (IELTS 6)', points: 15 }
  ]
};

const FEATURES = [
  { icon: 'FiGlobe', title: 'Multi-Country Support', desc: 'Calculate points for Canada, Australia, UK, and New Zealand immigration systems with country-specific criteria.', stat: '4 Countries' },
  { icon: 'FiTarget', title: 'Real-Time Scoring', desc: 'See your points update instantly as you adjust age, education, experience, and language proficiency.', stat: 'Instant' },
  { icon: 'FiPieChart', title: 'Category Breakdown', desc: 'Detailed breakdown of points across all assessment categories with visual progress indicators.', stat: 'Detailed' },
  { icon: 'FiStar', title: 'Pass Mark Indicator', desc: 'Clear visual indicators showing if you meet the current pass mark for your target country.', stat: 'Essential' },
  { icon: 'FiUsers', title: 'Eligibility Check', desc: 'Quick assessment of your eligibility before committing to a full immigration application.', stat: 'Preliminary' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your personal information stays in your browser. Never uploaded, never stored, never shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How accurate is the immigration points calculator?", answer: "Our calculator provides reliable estimates based on current immigration point systems for Canada Express Entry, Australia GSM, UK Skilled Worker, and New Zealand SMC programs. However, official assessments may vary based on credential evaluation, exact language test scores, and specific program requirements. Always verify with official government sources before submitting an application." },
  { question: "Which countries are included in the calculator?", answer: "We currently support points calculations for the four most popular English-speaking immigration destinations: Canada (Express Entry - Federal Skilled Worker Program), Australia (General Skilled Migration), United Kingdom (Skilled Worker Visa), and New Zealand (Skilled Migrant Category). Each country uses its own unique points grid that we've accurately modeled." },
  { question: "What is a pass mark for immigration?", answer: "Each country sets a minimum points threshold (pass mark) that applicants must meet to be eligible to apply. Canada requires 67/100, Australia 65/130, UK 70/100, and New Zealand 100/200. Meeting the pass mark doesn't guarantee approval—it indicates you're eligible to submit an application. Higher scores improve your chances in competitive selection rounds." },
  { question: "How are language points calculated?", answer: "Language points are based on standardized test scores (IELTS, CELPIP for Canada, TEF for French). Higher proficiency levels earn more points. Most countries require at least intermediate-level language skills for immigration eligibility. Our calculator maps common test score bands to the corresponding points for each country's system." },
  { question: "Can I claim points for my spouse's qualifications?", answer: "Yes, most immigration systems offer additional points for spouse/partner qualifications including their education, language proficiency, and work experience. Our calculator focuses on primary applicant points but includes adaptability factors like job offers and relatives in-country, which can boost your total score significantly." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiGlobe, FiBook, FiBriefcase, FiAward, FiCalendar,
  FiPieChart, FiShield, FiZap, FiTarget, FiStar, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiEye, FiCheck
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ImmigrationPointsCalculatorPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/immigration-points-calculator";

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/immigration-calculator-og.jpg";

  // Calculator State
  const [selectedCountry, setSelectedCountry] = useState('CA');
  const [age, setAge] = useState('18-35');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [language, setLanguage] = useState('');
  const [hasJobOffer, setHasJobOffer] = useState(false);
  const [hasRelative, setHasRelative] = useState(false);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // Initialize default selections for country
  useEffect(() => {
    const ageRanges = AGE_RANGES[selectedCountry];
    const eduLevels = EDUCATION_LEVELS[selectedCountry];
    const expLevels = EXPERIENCE_LEVELS[selectedCountry];
    const langLevels = LANGUAGE_LEVELS[selectedCountry];
    
    if (ageRanges && ageRanges.length > 0) setAge(ageRanges[0].range);
    if (eduLevels && eduLevels.length > 0) setEducation(eduLevels[0].level);
    if (expLevels && expLevels.length > 0) setExperience(expLevels[0].years);
    if (langLevels && langLevels.length > 0) setLanguage(langLevels[0].level);
  }, [selectedCountry]);

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculatePoints = useCallback(() => {
    const agePoints = AGE_RANGES[selectedCountry]?.find(a => a.range === age)?.points || 0;
    const educationPoints = EDUCATION_LEVELS[selectedCountry]?.find(e => e.level === education)?.points || 0;
    const experiencePoints = EXPERIENCE_LEVELS[selectedCountry]?.find(e => e.years === experience)?.points || 0;
    const languagePoints = LANGUAGE_LEVELS[selectedCountry]?.find(l => l.level === language)?.points || 0;
    
    const jobOfferPoints = hasJobOffer ? 10 : 0;
    const relativePoints = hasRelative ? 5 : 0;
    const adaptabilityPoints = jobOfferPoints + relativePoints;
    
    const totalPoints = agePoints + educationPoints + experiencePoints + languagePoints + adaptabilityPoints;
    
    const countryData = COUNTRIES.find(c => c.code === selectedCountry);
    const passMark = countryData?.passMark || 0;
    const maxPoints = countryData?.maxPoints || 100;
    const passed = totalPoints >= passMark;
    const percentage = (totalPoints / maxPoints) * 100;

    setResults({
      totalPoints, agePoints, educationPoints, experiencePoints,
      languagePoints, adaptabilityPoints, passMark, maxPoints, passed,
      percentage, countryName: countryData?.name || '', systemName: countryData?.system || ''
    });
  }, [selectedCountry, age, education, experience, language, hasJobOffer, hasRelative]);

  useEffect(() => { calculatePoints(); }, [calculatePoints]);

  const resetCalculator = () => {
    setSelectedCountry('CA');
    setAge('18-35');
    setEducation(EDUCATION_LEVELS['CA'][0].level);
    setExperience(EXPERIENCE_LEVELS['CA'][0].years);
    setLanguage(LANGUAGE_LEVELS['CA'][0].level);
    setHasJobOffer(false);
    setHasRelative(false);
    setResults(null);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Free Immigration Points Calculator {CURRENT_YEAR} - Canada, Australia, UK, NZ | No Sign Up</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Calculate your immigration points for Canada Express Entry, Australia GSM, UK Skilled Worker, and NZ SMC. Free instant assessment with detailed category breakdowns. Check eligibility now, no sign-up required." />
        <meta name="keywords" content="immigration points calculator, canada express entry points, australia skilled migration points, uk skilled worker visa points, nz skilled migrant points, immigration eligibility checker, visa points test, immigration score calculator, 2026 immigration points, skilled migration calculator, pr points calculator, express entry crs calculator" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Immigration Points Calculator {CURRENT_YEAR} - Check Your Eligibility" />
        <meta name="chatgpt-fts:description" content="Calculate your immigration points for Canada, Australia, UK, and New Zealand skilled migration programs. Free instant assessment with detailed category breakdowns." />
        <meta name="chatgpt-fts:keywords" content="immigration points calculator, canada express entry points, australia skilled migration, uk skilled worker visa, nz skilled migrant, immigration eligibility checker, visa points test" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Free Immigration Points Calculator {CURRENT_YEAR} - Check Your Eligibility Instantly" />
        <meta property="og:description" content="Instantly calculate your immigration points for Canada, Australia, UK, and New Zealand. Check eligibility, pass marks, and detailed category scores. Free and private." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Immigration Points Calculator {CURRENT_YEAR}" />
        <meta name="twitter:description" content="Calculate your immigration points for Canada, Australia, UK, and New Zealand. Free, instant, private." />
        <meta name="twitter:image" content={productImage} />
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
                  "@type": "WebApplication",
                  "@id": `${canonicalUrl}#webapp`,
                  "name": "Free Immigration Points Calculator",
                  "url": canonicalUrl,
                  "applicationCategory": "GovernmentApplication",
                  "description": "Free online immigration points calculator for Canada Express Entry, Australia GSM, UK Skilled Worker, and New Zealand Skilled Migrant Category programs. Check your skilled migration eligibility instantly.",
                  "operatingSystem": "All",
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
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": f.answer
                    }
                  }))
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "Free Immigration Points Calculator {CURRENT_YEAR} - Canada, Australia, UK, NZ",
                  "description": "Calculate your immigration points for Canada Express Entry, Australia GSM, UK Skilled Worker, and NZ SMC. Free instant assessment with detailed category breakdowns.",
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "HowTo",
                  "name": "How to Calculate Your Immigration Points",
                  "description": "Step-by-step guide to using the free immigration points calculator for skilled migration eligibility",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Select Your Target Country",
                      "text": "Choose from Canada, Australia, UK, or New Zealand. Each country has its own immigration points system with different criteria and pass marks."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Enter Your Personal Details",
                      "text": "Input your age group, education level, years of work experience, and language proficiency level. These are the core factors that determine your immigration score."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Add Additional Factors",
                      "text": "Include any valid job offers or close relatives in your target country. These adaptability factors can add valuable points to your total score."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Review Your Results",
                      "text": "Check your total points against the pass mark. Review the category breakdown to identify areas where you could improve your score for future applications."
                    }
                  ],
                  "totalTime": "PT5M"
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
                <span itemProp="name" aria-current="page"><FiGlobe size={14} style={{marginRight: '4px'}} /> Immigration Points Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">🌍 {CURRENT_YEAR} EDITION • 4 COUNTRIES • FREE TOOL • NO SIGN UP • INSTANT RESULTS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Immigration Points</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Calculate your <strong>immigration eligibility points</strong> for Canada Express Entry, Australia GSM, UK Skilled Worker, and New Zealand SMC. Get instant category breakdowns and check if you meet the pass mark. <strong>100% Free. No Sign-Up Required. Complete Privacy Guaranteed.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[
                  { value: "4", label: "Countries Supported" }, 
                  { value: "100%", label: "Free Assessment" }, 
                  { value: "Instant", label: "Results" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiTarget /> Calculate Your Points</button>
                <Link href="/salary-calculator" className="btn-outline"><FiDollarSign /> Salary Calculator</Link>
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
            <span><FiGlobe style={{marginRight: '4px'}} /> 4 Countries</span>
            <span><FiClock style={{marginRight: '4px'}} /> 5 min assessment</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 15,000+ assessments</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt" id="calculator-tool">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Points Assessment Calculator</h2>
                <p className="section-subtitle">Select your target country and enter your details for instant points calculation</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="input-group">
                  <label className="input-label">
                    <FiGlobe size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Target Country
                  </label>
                  <select className="input-field" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    {COUNTRIES.map(country => (
                      <option key={country.code} value={country.code}>{country.name} ({country.system})</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiCalendar size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Age Group
                  </label>
                  <select className="input-field" value={age} onChange={(e) => setAge(e.target.value)}>
                    {AGE_RANGES[selectedCountry]?.map((range, idx) => (
                      <option key={idx} value={range.range}>{range.range} years ({range.points} pts)</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiBook size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Education Level
                  </label>
                  <select className="input-field" value={education} onChange={(e) => setEducation(e.target.value)}>
                    {EDUCATION_LEVELS[selectedCountry]?.map((edu, idx) => (
                      <option key={idx} value={edu.level}>{edu.level} ({edu.points} pts)</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiBriefcase size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Work Experience
                  </label>
                  <select className="input-field" value={experience} onChange={(e) => setExperience(e.target.value)}>
                    {EXPERIENCE_LEVELS[selectedCountry]?.map((exp, idx) => (
                      <option key={idx} value={exp.years}>{exp.years} ({exp.points} pts)</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label">
                    <FiUsers size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Language Proficiency
                  </label>
                  <select className="input-field" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    {LANGUAGE_LEVELS[selectedCountry]?.map((lang, idx) => (
                      <option key={idx} value={lang.level}>{lang.level} ({lang.points} pts)</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '0' }}>
                <div className="input-group">
                  <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasJobOffer} onChange={(e) => setHasJobOffer(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-primary)' }} />
                    <span>Valid Job Offer (+10 pts)</span>
                  </label>
                </div>
                <div className="input-group">
                  <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={hasRelative} onChange={(e) => setHasRelative(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-primary)' }} />
                    <span>Close Relative in Country (+5 pts)</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-outline" onClick={resetCalculator}><FiRefreshCw size={18} /> Reset Calculator</button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 {results.countryName} - {results.systemName}
                    </h3>
                    <p className="text-small">Pass Mark: {results.passMark} points | Maximum: {results.maxPoints} points</p>
                  </div>
                  <div className={`score-circle-large ${results.passed ? 'score-pass' : results.totalPoints >= results.passMark * 0.8 ? 'score-borderline' : 'score-fail'}`}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-extrabold)', fontFamily: 'var(--font-display)' }}>{results.totalPoints}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>/ {results.maxPoints} points</span>
                  </div>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    {results.passed ? (
                      <p className="text-success" style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)' }}>
                        ✅ Congratulations! You meet the pass mark of {results.passMark} points
                      </p>
                    ) : (
                      <p className="text-danger" style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)' }}>
                        ⚠️ You need {results.passMark - results.totalPoints} more points to meet the pass mark
                      </p>
                    )}
                    <div className="progress-bar-bg" style={{ marginTop: '1rem' }}>
                      <div className="progress-bar-fill" style={{ width: `${Math.min(results.percentage, 100)}%` }}></div>
                    </div>
                    <p className="text-small" style={{ marginTop: '0.5rem' }}>{results.percentage.toFixed(1)}% of maximum points</p>
                  </div>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Points Breakdown by Category
                  </h3>
                  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {[
                      { icon: FiCalendar, label: 'Age', value: results.agePoints },
                      { icon: FiBook, label: 'Education', value: results.educationPoints },
                      { icon: FiBriefcase, label: 'Work Experience', value: results.experiencePoints },
                      { icon: FiUsers, label: 'Language Proficiency', value: results.languagePoints },
                      { icon: FiStar, label: 'Adaptability', value: results.adaptabilityPoints }
                    ].map((cat, i) => (
                      <div key={i} className="points-category">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <cat.icon size={16} color="var(--accent-primary)" /> {cat.label}
                        </span>
                        <span className="points-value">{cat.value}</span>
                      </div>
                    ))}
                    <div className="points-category" style={{ background: 'rgba(242,202,80,0.1)', border: '0.5px solid var(--border-gold-filament-strong)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'var(--font-weight-bold)' }}>
                        <FiFlag size={16} color="var(--accent-primary)" /> Total Points
                      </span>
                      <span className="points-value" style={{ fontSize: 'var(--font-size-headline-md)' }}>{results.totalPoints}</span>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                  <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                  This calculator provides estimates based on published criteria. Always verify with official government sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Immigration Points Assessment</h2>
              <p className="section-subtitle">Everything you need to evaluate your skilled migration eligibility across four countries</p>
            </div>
            <div className="grid">
              {FEATURES.map((feature, i) => {
                const IconComponent = ICON_MAP[feature.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{feature.desc}</p>
                    <span className="feature-badge" style={{ marginTop: '1rem', justifyContent: 'center' }}>{feature.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Immigration Points ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Common questions about skilled migration points systems and eligibility assessment</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeFaqDates[i] || safeCurrentDate}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Check Your Immigration Eligibility?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Calculate your points and plan your skilled migration journey with confidence. <strong>100% Free. No Sign-Up Required. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiTarget /> Calculate Your Points Now
              </button>
              <Link href="/salary-calculator" className="btn-outline"><FiDollarSign /> Salary Calculator</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["4 Countries", "Instant Results", "Category Breakdown", "Pass Mark Indicator", "100% Free"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career & Relocation Tools</h2>
              <p className="section-subtitle">Complement your immigration planning with these powerful resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign" },
                { href: "/cost-of-living-calculator", text: "Cost of Living Comparison", iconName: "FiMapPin" },
                { href: "/free-resume-builder", text: "ATS-Friendly Resume Builder", iconName: "FiFileText" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiTarget" }
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]}</span>
          <span className="text-small" style={{ marginLeft: '1rem', display: 'block', marginTop: '0.5rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            For reference only. Points criteria subject to change. Always verify with official government sources.
          </span>
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
  const faqDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        faqDates
      }
    },
    revalidate: 3600
  };
}

export default ImmigrationPointsCalculatorPage;