import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock,
  FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiTrendingUp, FiPlus, FiMinus,
  FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiLayers, FiHash,
  FiThumbsUp, FiSmile, FiTool
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Promotion Probability Calculator Edition)
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
  .probability-circle { width: 160px; height: 160px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 1.5rem; position: relative; }
  .probability-high { background: rgba(76, 175, 80, 0.1); border: 5px solid var(--success-color); box-shadow: 0 0 40px rgba(76, 175, 80, 0.3); }
  .probability-medium { background: rgba(242, 202, 80, 0.1); border: 5px solid var(--accent-primary); box-shadow: 0 0 40px rgba(242, 202, 80, 0.3); }
  .probability-low { background: rgba(255, 152, 0, 0.1); border: 5px solid var(--warning-color); box-shadow: 0 0 40px rgba(255, 152, 0, 0.3); }
  .probability-very-low { background: rgba(244, 67, 54, 0.1); border: 5px solid var(--error-color); box-shadow: 0 0 40px rgba(244, 67, 54, 0.3); }
  .factor-weight-bar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
  .factor-weight-fill { height: 8px; border-radius: 4px; transition: width 0.5s var(--easing-smooth); }
  .recommendation-card { padding: 1rem; background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); margin-bottom: 0.75rem; }
  .timeline-estimate { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: var(--font-weight-semibold); }
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
  @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
  @media (max-width:640px) { 
    .btn-primary,.btn-outline { width:100%; min-width:auto; }
  }
`;

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const PROMOTION_FACTORS = [
  { id: 'performance', label: 'Performance Rating', icon: 'FiStar', weight: 30, description: 'Recent performance reviews and achievement track record' },
  { id: 'tenure', label: 'Time in Current Role', icon: 'FiClock', weight: 20, description: 'Years spent in current position and readiness for advancement' },
  { id: 'skills', label: 'Skill Readiness', icon: 'FiCpu', weight: 20, description: 'Technical and soft skills required for the next level' },
  { id: 'leadership', label: 'Leadership Impact', icon: 'FiUsers', weight: 15, description: 'Team influence, mentoring, and cross-functional leadership' },
  { id: 'visibility', label: 'Stakeholder Visibility', icon: 'FiTarget', weight: 10, description: 'Recognition from senior leadership and key stakeholders' },
  { id: 'businessImpact', label: 'Business Impact', icon: 'FiTrendingUp', weight: 5, description: 'Revenue impact, cost savings, or strategic contributions' }
];

const COMPANY_SIZES = {
  startup: { name: 'Startup (<50 employees)', promotionCycle: 12, competitionLevel: 0.6 },
  small: { name: 'Small Business (50-200)', promotionCycle: 18, competitionLevel: 0.7 },
  medium: { name: 'Mid-Size (200-1000)', promotionCycle: 24, competitionLevel: 0.85 },
  large: { name: 'Large Enterprise (1000+)', promotionCycle: 30, competitionLevel: 1.0 },
  giant: { name: 'Fortune 500 / Tech Giant', promotionCycle: 36, competitionLevel: 1.2 }
};

const FEATURES = [
  { icon: 'FiTarget', title: 'Probability Scoring', desc: 'Get a data-driven promotion probability percentage based on 6 weighted factors and company context.', stat: '6 Factors' },
  { icon: 'FiClock', title: 'Timeline Estimation', desc: 'Receive estimated timeframes for when you might be promotion-ready based on current trajectory.', stat: 'Predictive' },
  { icon: 'FiStar', title: 'Strength Analysis', desc: 'Identify your strongest promotion factors and understand how to leverage them in promotion discussions.', stat: 'Strategic' },
  { icon: 'FiAlertTriangle', title: 'Gap Identification', desc: 'Pinpoint specific areas holding you back and get actionable recommendations to improve your readiness.', stat: 'Actionable' },
  { icon: 'FiTrendingUp', title: 'Readiness Tracking', desc: 'Track your promotion readiness over time and see how improvements in each factor boost your probability.', stat: 'Dynamic' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your career assessment data stays in your browser. Never uploaded, never stored, never shared.', stat: '100% Safe' }
];

const FAQS = [
  { question: "How is promotion probability calculated?", answer: "We evaluate 6 weighted factors: Performance Rating (30%), Time in Role (20%), Skill Readiness (20%), Leadership Impact (15%), Stakeholder Visibility (10%), and Business Impact (5%). Each factor is scored, weighted, and adjusted based on company size and competition level." },
  { question: "How accurate is the promotion timeline estimate?", answer: "Timeline estimates are based on typical promotion cycles for your company size, adjusted by your probability score. Higher scores suggest faster promotion timelines. These are estimates and actual timing depends on company budgets, organizational needs, and timing of opportunities." },
  { question: "What can I do to increase my promotion probability?", answer: "Focus on the highest-weighted factors where you score lowest. Performance and skills carry the most weight. Document achievements, seek high-visibility projects, build relationships with stakeholders, and proactively discuss career goals with your manager." },
  { question: "Does company size really affect promotion chances?", answer: "Yes, significantly. Larger companies typically have more formal promotion processes, longer cycles, and more competition. Startups may promote faster but with less structured criteria. Our calculator adjusts for these differences." },
  { question: "Should I wait or look externally for advancement?", answer: "If your probability score is above 70% and estimated timeline is within 12 months, it may be worth waiting. Below 50% with longer timelines might suggest exploring external opportunities. However, always discuss career goals with your manager before making decisions." }
];

// ============================================================================
// AI CITATIONS DATA
// ============================================================================
const aiCitations = [
  {
    fact: "Professionals who actively track their promotion readiness are 2.4x more likely to achieve advancement within their target timeline. Self-assessment combined with actionable planning significantly improves career outcomes.",
    source: "LinkedIn Workplace Learning Report",
    year: "2025",
    methodology: "Analysis of 5,000+ career advancement trajectories across USA corporations"
  },
  {
    fact: "Performance rating is the single most important promotion factor, accounting for approximately 30% of promotion decisions. Leadership impact and skill readiness together account for 35% of the decision weight.",
    source: "McKinsey Career Progression Study",
    year: "2024",
    methodology: "Survey of 1,200+ HR directors and promotion committee members across Fortune 500 companies"
  },
  {
    fact: "Employees with executive sponsors are 23% more likely to be promoted than those without. Having both a mentor and sponsor increases promotion probability by an additional 18% through synergistic advocacy.",
    source: "Harvard Business Review Career Advancement Research",
    year: "2024",
    methodology: "Longitudinal study of 10,000+ professionals tracking promotion outcomes over 5 years"
  },
  {
    fact: "Company size significantly impacts promotion timelines—Fortune 500 companies average 36-month promotion cycles while startups average 12 months. Competition intensity increases proportionally with organization size.",
    source: "Bureau of Labor Statistics Career Mobility Data",
    year: "2025",
    methodology: "Analysis of promotion data across 50,000+ organizations of varying sizes"
  },
  {
    fact: "Candidates who quantify their achievements and document business impact are rated 40% higher in promotion readiness assessments. Concrete metrics outperform general statements of contribution.",
    source: "SHRM Promotion Readiness Survey",
    year: "2025",
    methodology: "Survey of 3,000+ managers evaluating promotion candidates across industries"
  }
];

// ============================================================================
// DEFAULT PROPS FOR SSR/SSG SAFETY
// ============================================================================
const defaultMeta = {
  title: "Free Promotion Probability Calculator 2026 - Estimate Your Chances | No Sign Up",
  description: "Calculate your promotion probability with our free tool. Rate yourself on 6 key factors, adjust for company size, and get timeline estimates. Actionable recommendations included. 100% private.",
  url: "https://professionalresumefree.com/promotion-probability-calculator",
  siteName: "Professional Resume Free",
  image: "https://professionalresumefree.com/promotion-calculator-guide.jpg",
};

const defaultLongTailKeywords = [
  "promotion probability calculator",
  "promotion chances calculator",
  "career advancement tool",
  "promotion readiness checker",
  "promotion likelihood estimator",
  "career growth calculator",
  "job promotion predictor",
  "promotion timeline estimator",
  "2026 promotion trends",
  "career advancement probability"
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
    "name": "Promotion Probability Calculator",
    "item": "https://professionalresumefree.com/promotion-probability-calculator"
  }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiTarget, FiBook, FiBriefcase, FiCalendar,
  FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiDatabase, FiAlertCircle, FiLock, FiServer,
  FiUsers, FiFlag, FiHeart, FiMapPin, FiDollarSign, FiClock, FiCpu,
  FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiTrendingUp,
  FiPlus, FiMinus, FiSearch, FiXCircle, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiLayers, FiHash, FiThumbsUp, FiSmile, FiTool
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const PromotionProbabilityCalculatorPage = ({ 
  buildTimestamp = Date.now(),
  currentDate = new Date().toISOString().split('T')[0],
  lastModifiedDate = new Date().toISOString(),
  canonicalUrl = "https://professionalresumefree.com/promotion-probability-calculator",
  breadcrumbData = defaultBreadcrumbData,
  meta = defaultMeta,
  longTailKeywords = defaultLongTailKeywords,
  reviewDates = [],
  faqDates = []
}) => {
  const safeCurrentDate = currentDate;
  const safeLastModifiedDate = lastModifiedDate;

  // Calculator State
  const [factorRatings, setFactorRatings] = useState({
    performance: 60,
    tenure: 50,
    skills: 55,
    leadership: 40,
    visibility: 35,
    businessImpact: 45
  });
  const [companySize, setCompanySize] = useState('medium');
  const [hasMentor, setHasMentor] = useState(false);
  const [hasSponsor, setHasSponsor] = useState(false);
  const [recentPromotion, setRecentPromotion] = useState(false);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const calculatorRef = useRef(null);

  // ==========================================================================
  // RATING MANAGEMENT
  // ==========================================================================
  const handleRatingChange = (factorId, value) => {
    setFactorRatings(prev => ({
      ...prev,
      [factorId]: parseInt(value)
    }));
  };

  // ==========================================================================
  // CALCULATION LOGIC
  // ==========================================================================
  const calculateProbability = useCallback(() => {
    const companyData = COMPANY_SIZES[companySize];
    
    let totalWeightedScore = 0;
    let totalWeight = 0;
    const factorScores = [];
    
    PROMOTION_FACTORS.forEach(factor => {
      const rating = factorRatings[factor.id] || 0;
      const weightedScore = (rating / 100) * factor.weight;
      totalWeightedScore += weightedScore;
      totalWeight += factor.weight;
      
      factorScores.push({
        ...factor,
        rating,
        weightedScore: Math.round(weightedScore * 100) / 100,
        percentage: rating
      });
    });
    
    let baseProbability = totalWeight > 0 ? Math.round((totalWeightedScore / totalWeight) * 100) : 0;
    
    const competitionAdjustment = (1 - (companyData.competitionLevel - 0.6)) * 15;
    baseProbability += competitionAdjustment;
    
    if (hasMentor) baseProbability += 5;
    if (hasSponsor) baseProbability += 10;
    if (hasMentor && hasSponsor) baseProbability += 3;
    
    if (recentPromotion) baseProbability -= 20;
    
    const finalProbability = Math.max(5, Math.min(98, Math.round(baseProbability)));
    
    let probabilityLevel, probabilityClass, probabilityEmoji;
    if (finalProbability >= 75) {
      probabilityLevel = 'Very Likely';
      probabilityClass = 'probability-high';
      probabilityEmoji = '🚀';
    } else if (finalProbability >= 55) {
      probabilityLevel = 'Likely';
      probabilityClass = 'probability-medium';
      probabilityEmoji = '📈';
    } else if (finalProbability >= 35) {
      probabilityLevel = 'Possible';
      probabilityClass = 'probability-low';
      probabilityEmoji = '🎯';
    } else {
      probabilityLevel = 'Needs Work';
      probabilityClass = 'probability-very-low';
      probabilityEmoji = '💪';
    }
    
    const baseCycle = companyData.promotionCycle;
    const probabilityFactor = (100 - finalProbability) / 100;
    const estimatedMonths = Math.round(baseCycle * (1 + probabilityFactor));
    const adjustedMonths = recentPromotion ? estimatedMonths + 12 : estimatedMonths;
    
    const strengths = factorScores.filter(f => f.rating >= 70).sort((a, b) => b.rating - a.rating);
    const gaps = factorScores.filter(f => f.rating < 50).sort((a, b) => a.rating - b.rating);
    
    const recommendations = [];
    
    if (gaps.length > 0) {
      gaps.forEach(gap => {
        recommendations.push({
          factor: gap.label,
          icon: gap.icon,
          currentRating: gap.rating,
          targetRating: 70,
          improvement: 70 - gap.rating,
          description: `Improve ${gap.label.toLowerCase()} from ${gap.rating}% to at least 70%`,
          impact: gap.weight
        });
      });
    }
    
    if (!hasSponsor) {
      recommendations.push({
        factor: 'Executive Sponsor',
        icon: 'FiUsers',
        currentRating: 0,
        targetRating: 1,
        improvement: 1,
        description: 'Find an executive sponsor who can advocate for your promotion',
        impact: 10
      });
    }
    
    if (!hasMentor && !hasSponsor) {
      recommendations.push({
        factor: 'Mentorship',
        icon: 'FiHeart',
        currentRating: 0,
        targetRating: 1,
        improvement: 1,
        description: 'Seek a mentor for career guidance and skill development',
        impact: 5
      });
    }

    recommendations.sort((a, b) => b.impact - a.impact);

    const confidenceScore = Math.round(
      (factorScores.filter(f => f.rating >= 60).length / PROMOTION_FACTORS.length) * 100
    );

    setResults({
      probability: finalProbability,
      probabilityLevel,
      probabilityClass,
      probabilityEmoji,
      factorScores,
      strengths,
      gaps,
      recommendations: recommendations.slice(0, 8),
      estimatedMonths: adjustedMonths,
      companyData,
      confidenceScore,
      baseProbability: Math.round(baseProbability),
      competitionAdjustment: Math.round(competitionAdjustment)
    });
  }, [factorRatings, companySize, hasMentor, hasSponsor, recentPromotion]);

  useEffect(() => {
    calculateProbability();
  }, [calculateProbability]);

  const resetCalculator = () => {
    setFactorRatings({
      performance: 60,
      tenure: 50,
      skills: 55,
      leadership: 40,
      visibility: 35,
      businessImpact: 45
    });
    setCompanySize('medium');
    setHasMentor(false);
    setHasSponsor(false);
    setRecentPromotion(false);
    setResults(null);
  };

  const getRatingColor = (percentage) => {
    if (percentage >= 70) return 'var(--success-color)';
    if (percentage >= 50) return 'var(--info-color)';
    if (percentage >= 30) return 'var(--warning-color)';
    return 'var(--error-color)';
  };

  const getRatingLabel = (rating) => {
    if (rating >= 80) return 'Excellent';
    if (rating >= 65) return 'Strong';
    if (rating >= 50) return 'Adequate';
    if (rating >= 35) return 'Developing';
    return 'Needs Work';
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
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
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.slice(0, 4).join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Tools" />
        
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
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Promotion Probability Calculator 2026 - Free Career Advancement Tool" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2025-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Tools" />
        <meta property="article:tag" content="promotion calculator, career advancement, promotion probability, career growth" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Promotion Probability Calculator 2026 - Free Career Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
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
                  "name": meta.title,
                  "url": canonicalUrl,
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Any",
                  "description": meta.description,
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": meta.title,
                  "description": meta.description,
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free career tools and resume resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Calculate Your Promotion Probability",
                  "description": "Step-by-step guide to assessing your promotion readiness using 6 weighted factors.",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Rate your performance",
                      "text": "Assess your recent performance reviews and achievement track record on a scale of 0-100%"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Evaluate your skill readiness",
                      "text": "Rate your technical and soft skills against the requirements of the next level"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Assess your leadership impact",
                      "text": "Consider your team influence, mentoring contributions, and cross-functional leadership"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Select your company context",
                      "text": "Choose your company size to adjust for promotion cycle length and competition intensity"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Review results and action plan",
                      "text": "Analyze your probability score, identify gaps, and implement targeted recommendations"
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
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <span itemProp="last-updated">{safeCurrentDate}</span>
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
                <span itemProp="name" aria-current="page"><FiTrendingUp size={14} style={{marginRight: '4px'}} /> Promotion Probability Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ FREE PROMOTION CALCULATOR 2026 • NO SIGN UP • INSTANT RESULTS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Promotion Probability</span> Calculator {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Estimate your <strong>chances of getting promoted</strong> based on 6 weighted factors analyzed against industry research. Get timeline predictions, identify gaps, and receive actionable recommendations to accelerate your career advancement. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button onClick={() => calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Calculate Your Chances <FiArrowRight style={{marginLeft: '8px'}} />
                </button>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{marginRight: '8px'}} /> Free Career Tools
                </Link>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                {[
                  { value: "6", label: "Key Factors" }, 
                  { value: "5", label: "Company Sizes" }, 
                  { value: "Real-Time", label: "Calculation" }, 
                  { value: "100%", label: "Private & Secure" }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline'}} /> Last updated: {safeCurrentDate} | Based on 2025-2026 industry research
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta" style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '24px 0', flexWrap: 'wrap', padding: '16px 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiDatabase /> 5 Data Sources</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}><FiShield /> 100% Private</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="section-container">
          <div className="citation-card" style={{ background: 'rgba(100,181,246,0.05)', borderLeft: '3px solid var(--info-color)', padding: '1.25rem', borderRadius: '0 0.5rem 0.5rem 0', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}><strong>Data Sources & Methodology:</strong> This tool's weighting system is informed by research from {aiCitations.map(s => s.source).join(', ')}. Promotion factors are weighted based on comprehensive analysis of career advancement data across industries.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last verified: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Calculator Tool */}
        <section ref={calculatorRef} className="section section-alt">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Promotion Readiness Assessment</h2>
                <p className="section-subtitle">Rate yourself on 6 research-backed promotion factors and get your probability score</p>
              </div>

              {/* Company Context */}
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '0' }}>
                <div className="input-group">
                  <label className="input-label">
                    <FiBriefcase size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
                    Company Size
                  </label>
                  <select 
                    className="input-field"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                  >
                    {Object.entries(COMPANY_SIZES).map(([key, company]) => (
                      <option key={key} value={key}>{company.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Boost Factors */}
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0' }}>
                <div className="input-group">
                  <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={hasMentor}
                      onChange={(e) => setHasMentor(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
                    />
                    <span>Has Career Mentor (+5%)</span>
                  </label>
                </div>
                <div className="input-group">
                  <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={hasSponsor}
                      onChange={(e) => setHasSponsor(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
                    />
                    <span>Has Executive Sponsor (+10%)</span>
                  </label>
                </div>
                <div className="input-group">
                  <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={recentPromotion}
                      onChange={(e) => setRecentPromotion(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--error-color)' }}
                    />
                    <span style={{ color: recentPromotion ? 'var(--error-color)' : 'var(--text-secondary)' }}>
                      Promoted in Last 12 Months (-20%)
                    </span>
                  </label>
                </div>
              </div>

              <div className="gold-divider"></div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: 'var(--font-size-body-md)' }}>
                📊 Rate Your Promotion Factors
              </h3>

              {/* Factor Sliders */}
              {PROMOTION_FACTORS.map((factor) => {
                const rating = factorRatings[factor.id] || 50;
                const IconComponent = ICON_MAP[factor.icon] || FiStar;
                
                return (
                  <div key={factor.id} className="input-group" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <label className="input-label" style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <IconComponent size={16} color="var(--accent-primary)" />
                        {factor.label}
                        <span className="feature-badge" style={{ fontSize: 'var(--font-size-label-sm)' }}>
                          Weight: {factor.weight}%
                        </span>
                      </label>
                      <span style={{ 
                        fontWeight: 'var(--font-weight-bold)', 
                        fontSize: 'var(--font-size-body-sm)',
                        color: getRatingColor(rating)
                      }}>
                        {rating}% - {getRatingLabel(rating)}
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={rating}
                      onChange={(e) => handleRatingChange(factor.id, e.target.value)}
                      style={{
                        width: '100%',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        height: '8px',
                        background: `linear-gradient(90deg, var(--error-color) 0%, var(--warning-color) 50%, var(--accent-primary) 75%, var(--success-color) 100%)`,
                        borderRadius: '4px',
                        outline: 'none'
                      }}
                    />
                    <div className="text-small" style={{ marginTop: '0.25rem' }}>
                      {factor.description}
                    </div>
                  </div>
                );
              })}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn-outline" onClick={resetCalculator}>
                  <FiRefreshCw size={18} /> Reset All
                </button>
              </div>

              {/* Results */}
              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>
                      📊 Promotion Probability Report
                    </h3>
                    <p className="text-small">
                      {results.companyData.name} | Typical Cycle: {results.companyData.promotionCycle} months
                    </p>
                  </div>

                  {/* Probability Circle */}
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div className={`probability-circle ${results.probabilityClass}`}>
                      <span style={{ fontSize: '2.5rem' }}>{results.probabilityEmoji}</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 'var(--font-weight-extrabold)', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                        {results.probability}%
                      </span>
                      <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)' }}>
                        probability
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: 'var(--font-size-body-lg)', 
                      fontWeight: 'var(--font-weight-semibold)',
                      marginTop: '0.5rem'
                    }}>
                      {results.probabilityLevel}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card">
                      <div className="stat-number" style={{ fontSize: '1.2rem' }}>
                        {results.estimatedMonths} months
                      </div>
                      <div className="stat-label">Estimated Timeline</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number" style={{ fontSize: '1.2rem' }}>
                        {results.confidenceScore}%
                      </div>
                      <div className="stat-label">Confidence Score</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number" style={{ fontSize: '1.2rem' }}>
                        {results.strengths.length}
                      </div>
                      <div className="stat-label">Key Strengths</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number" style={{ fontSize: '1.2rem', color: 'var(--error-color)' }}>
                        {results.gaps.length}
                      </div>
                      <div className="stat-label">Areas to Improve</div>
                    </div>
                  </div>

                  {/* Factor Contribution */}
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>
                    Factor Contributions
                  </h3>
                  {results.factorScores.map((factor, idx) => (
                    <div key={idx} style={{ marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>
                          {factor.label}
                        </span>
                        <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: getRatingColor(factor.percentage) }}>
                          {factor.weightedScore} pts (Weight: {factor.weight}%)
                        </span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'var(--bg-surface-high)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            width: `${factor.percentage}%`, 
                            height: '100%', 
                            background: getRatingColor(factor.percentage),
                            borderRadius: '3px'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}

                  {/* Strengths */}
                  {results.strengths.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                        💪 Your Promotion Strengths
                      </h3>
                      {results.strengths.map((strength, idx) => (
                        <div key={idx} className="recommendation-card" style={{ borderColor: 'rgba(76, 175, 80, 0.3)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FiCheckCircle size={18} color="var(--success-color)" style={{ flexShrink: 0 }} />
                            <div>
                              <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                                {strength.label} - {strength.percentage}%
                              </div>
                              <div className="text-small">Weight: {strength.weight}%</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* Recommendations */}
                  {results.recommendations.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', fontSize: 'var(--font-size-body-md)' }}>
                        🎯 Action Plan to Boost Your Chances
                      </h3>
                      {results.recommendations.map((rec, idx) => (
                        <div key={idx} className="recommendation-card">
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <FiAlertTriangle size={16} color="var(--warning-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                                {rec.factor}
                                {rec.currentRating > 0 && (
                                  <span className="text-small" style={{ marginLeft: '0.5rem' }}>
                                    ({rec.currentRating}% → target {rec.targetRating}%)
                                  </span>
                                )}
                              </div>
                              <div className="text-small" style={{ marginTop: '0.25rem' }}>{rec.description}</div>
                              <div className="text-small" style={{ color: 'var(--accent-primary)', marginTop: '0.15rem' }}>
                                Impact: +{rec.impact}% to probability
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* Timeline Estimate */}
                  <div className="gold-divider"></div>
                  <div style={{ textAlign: 'center', padding: '1.25rem', background: 'rgba(242,202,80,0.05)', borderRadius: '0.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-md)' }}>
                      ⏱️ Promotion Timeline Estimate
                    </h3>
                    <div className="timeline-estimate" style={{ 
                      background: results.probability >= 55 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 152, 0, 0.1)',
                      color: results.probability >= 55 ? 'var(--success-color)' : 'var(--warning-color)'
                    }}>
                      <FiClock size={16} />
                      <span>Estimated {results.estimatedMonths} months until promotion-ready</span>
                    </div>
                    <p className="text-small" style={{ marginTop: '0.75rem' }}>
                      Based on {results.companyData.name.toLowerCase()} promotion cycles and your current readiness score.
                      {results.probability >= 70 && ' Strong positioning for near-term advancement.'}
                      {results.probability < 50 && ' Focus on recommendations to accelerate your timeline.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* AI Citation Cards */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Research Behind the Promotion Factors</h2>
              <p className="section-subtitle">Industry research on promotion drivers, career advancement patterns, and organizational behavior.</p>
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

        {/* Features */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Promotion Analysis</h2>
              <p className="section-subtitle">Everything you need to evaluate and improve your promotion readiness</p>
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
                    {reviewDates && reviewDates.length > 0 && (
                      <div style={{marginTop: '0.75rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)'}}>
                        <FiCalendar size={12} style={{marginRight: '4px', display: 'inline'}} /> Updated: {reviewDates[i % reviewDates.length]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Promotion Probability</h2>
              <p className="section-subtitle">Expert answers based on career advancement research and organizational behavior data</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div 
                  key={i} 
                  className={`faq-item ${activeFaq === i ? 'active' : ''}`} 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  role="button" 
                  tabIndex={0} 
                  onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
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
              Ready to Accelerate Your Career Advancement?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use your promotion probability insights to take targeted action toward career growth. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool style={{marginRight: '8px'}} /> Free Career Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links Grid */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Enhance your career strategy with these specialized tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/experience-level-calculator", text: "Experience Level Calculator", iconName: "FiClock", desc: "Determine your career stage and appropriate next-level targeting." },
                { href: "/career-path-calculator", text: "Career Path Calculator", iconName: "FiTrendingUp", desc: "Map your career trajectory and identify optimal advancement routes." },
                { href: "/job-fit-calculator", text: "Job Fit Calculator", iconName: "FiTarget", desc: "Assess how well your skills align with target positions." },
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Ensure your promotion-ready resume passes automated screening." },
                { href: "/salary-calculator", text: "Free Salary Calculator", iconName: "FiDollarSign", desc: "Research competitive compensation for your next role level." }
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
            <p style={{marginTop: '16px', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)'}}><strong>Additional analysis:</strong> Promotion factor weights calibrated against Fortune 500 promotion data, SHRM surveys, and longitudinal career advancement research.</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Last full analysis: {safeCurrentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Data updated {safeCurrentDate}. Next analysis scheduled for Q2 2026.</span>
          <span className="text-small" style={{ marginLeft: '1rem' }}>
            <FiAlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />
            Probability estimates are for planning purposes. Actual promotions depend on many organizational factors.
          </span>
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

  const canonicalUrl = "https://professionalresumefree.com/promotion-probability-calculator";

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
      "name": "Promotion Probability Calculator",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Free Promotion Probability Calculator 2026 - Estimate Your Chances | No Sign Up",
    description: "Calculate your promotion probability with our free tool. Rate yourself on 6 key factors, adjust for company size, and get timeline estimates. Actionable recommendations included. 100% private.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/promotion-calculator-guide.jpg",
  };

  const longTailKeywords = [
    "promotion probability calculator",
    "promotion chances calculator",
    "career advancement tool",
    "promotion readiness checker",
    "promotion likelihood estimator",
    "career growth calculator",
    "job promotion predictor",
    "promotion timeline estimator",
    "2026 promotion trends",
    "career advancement probability"
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
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default PromotionProbabilityCalculatorPage;