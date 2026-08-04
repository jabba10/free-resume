import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiAward,
  FiCheck, FiArrowRight, FiFileText, FiTool, FiTrendingUp,
  FiBriefcase, FiCode, FiBookOpen, FiUser, FiMail, FiPhone,
  FiMapPin, FiBarChart2, FiZap, FiGrid, FiLayers, FiTarget,
  FiDollarSign, FiUsers, FiDatabase, FiSearch, FiEdit, FiStar,
  FiAlertCircle, FiCheckCircle, FiXCircle, FiX, FiShield,
  FiActivity, FiInfo, FiCopy, FiSmartphone, FiGlobe, FiMonitor,
  FiCloud, FiTerminal, FiHeart, FiSmile, FiUserCheck, FiSave,
  FiRefreshCw, FiThumbsUp, FiPenTool, FiType, FiAlignLeft,
  FiHash, FiLock, FiCompass, FiAnchor, FiCoffee, FiPercent,
  FiPieChart, FiShoppingCart, FiHeadphones, FiMessageCircle
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
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-danger { background:rgba(255,180,171,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,180,171,0.3); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-purple { background:rgba(187,134,252,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(187,134,252,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .keyword-tag-dark { background:rgba(242,202,80,0.2); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:600; border:0.5px solid var(--border-gold-filament-strong); }
  .pre-block { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); overflow-x:auto; font-family:'Courier New',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); line-height:1.8; white-space:pre-wrap; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .timeline-item { position:relative; padding-left:2rem; margin-bottom:1.5rem; border-left:1px solid var(--border-gold-filament); }
  .timeline-dot { position:absolute; left:-0.5rem; top:0; width:1rem; height:1rem; background:var(--accent-primary); border-radius:50%; }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiAward,
  FiCheck, FiArrowRight, FiFileText, FiTool, FiTrendingUp,
  FiBriefcase, FiCode, FiBookOpen, FiUser, FiMail, FiPhone,
  FiMapPin, FiBarChart2, FiZap, FiGrid, FiLayers, FiTarget,
  FiDollarSign, FiUsers, FiDatabase, FiSearch, FiEdit, FiStar,
  FiAlertCircle, FiCheckCircle, FiXCircle, FiX, FiShield,
  FiActivity, FiInfo, FiCopy, FiSmartphone, FiGlobe, FiMonitor,
  FiCloud, FiTerminal, FiHeart, FiSmile, FiUserCheck, FiSave,
  FiRefreshCw, FiThumbsUp, FiPenTool, FiType, FiAlignLeft,
  FiHash, FiLock, FiCompass, FiAnchor, FiCoffee, FiPercent,
  FiPieChart, FiShoppingCart, FiHeadphones, FiMessageCircle
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const SALES_MARKETING_STATS = [
  { value: "4.2x", label: "More Callbacks with Metrics", description: "Candidates with quantified achievements receive dramatically more responses" },
  { value: "91%", label: "Value CRM Experience", description: "Salesforce, HubSpot proficiency prioritized by hiring managers" },
  { value: "3.5x", label: "Higher Interview Rate", description: "Marketing resumes with ROI metrics outperform activity-based resumes" },
  { value: "90%+", label: "Use ATS Systems", description: "Fortune 500 sales organizations filter resumes automatically" }
];

const SALARY_DATA = [
  { role: "Sales Development Rep (SDR)", entry: "$45,000 - $60,000", mid: "$60,000 - $80,000", senior: "$80,000 - $100,000", commission: "$15K-$30K OTE", demand: "Very High" },
  { role: "Account Executive (AE)", entry: "$65,000 - $85,000", mid: "$85,000 - $120,000", senior: "$120,000 - $180,000", commission: "$40K-$100K OTE", demand: "Very High" },
  { role: "Marketing Specialist", entry: "$48,000 - $62,000", mid: "$62,000 - $85,000", senior: "$85,000 - $110,000", commission: "Bonus: 5-15%", demand: "High" },
  { role: "Marketing Manager", entry: "$70,000 - $90,000", mid: "$90,000 - $120,000", senior: "$120,000 - $160,000", commission: "Bonus: 10-20%", demand: "High" },
  { role: "Sales Director/VP", entry: "$130,000 - $180,000", mid: "$180,000 - $250,000", senior: "$250,000 - $400,000+", commission: "$100K-$500K+ OTE", demand: "Medium" },
  { role: "CMO/VP Marketing", entry: "$150,000 - $200,000", mid: "$200,000 - $280,000", senior: "$280,000 - $450,000+", commission: "Bonus: 20-50%", demand: "Medium" }
];

const SALES_METHODOLOGIES = [
  { name: "MEDDIC/MEDDPICC", description: "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion, Competition. Used by 40%+ of enterprise sales organizations. Demonstrates structured qualification expertise.", icon: "FiTarget" },
  { name: "Challenger Sale", description: "Teach, Tailor, Take Control approach. 39% of top-performing salespeople use this methodology. Shows ability to challenge customer thinking and create value through insights.", icon: "FiZap" },
  { name: "SPIN Selling", description: "Situation, Problem, Implication, Need-Payoff questioning framework. Foundational methodology for consultative selling. Demonstrates structured discovery skills.", icon: "FiMessageCircle" },
  { name: "Sandler Selling System", description: "Up-front contract, pain funnel, negative reverse selling. Emphasizes qualification and mutual respect. Valued for reducing discounting and improving deal quality.", icon: "FiShield" },
  { name: "Value Selling Framework", description: "Focus on ROI and business case creation. Critical for complex B2B sales. Demonstrates ability to quantify solutions and build executive-level business cases.", icon: "FiDollarSign" },
  { name: "BANT", description: "Budget, Authority, Need, Timeline. Quick qualification framework ideal for SDR/BDR roles. Shows understanding of basic opportunity assessment.", icon: "FiClock" }
];

const SALES_EXAMPLES = [
  {
    role: "Account Executive - Enterprise Sales",
    summary: "Results-driven Enterprise Account Executive with 8+ years of experience in B2B SaaS sales. Consistent top performer exceeding $3M annual quotas. Expertise in solution selling, C-level negotiation, and complex deal management. MEDDIC practitioner.",
    achievements: [
      "Exceeded $3M annual quota by 45% for three consecutive years, ranking in top 5% nationally",
      "Closed 12 enterprise deals averaging $250K ACV, including two Fortune 500 clients",
      "Reduced average sales cycle from 10 months to 6 months through strategic qualification",
      "Expanded revenue within existing accounts by 65% through strategic upselling and cross-selling"
    ]
  },
  {
    role: "Business Development Representative (BDR)",
    summary: "Motivated Business Development Representative with 3+ years of experience in outbound prospecting and lead qualification. Skilled in high-volume outreach, needs analysis, and pipeline building. Proficient with Outreach.io and LinkedIn Sales Navigator.",
    achievements: [
      "Generated 150+ qualified opportunities annually, resulting in $4M in pipeline revenue",
      "Achieved 200% of monthly meeting quota for 8 consecutive months",
      "Increased email response rates by 40% through A/B testing and message optimization",
      "Promoted to Senior BDR within 12 months for consistent over-performance"
    ]
  },
  {
    role: "Marketing Manager - Digital Marketing",
    summary: "Data-driven Marketing Manager with 6+ years of experience in B2B digital marketing. Expertise in multi-channel campaigns, marketing automation (HubSpot, Marketo), and revenue attribution. Google Analytics and HubSpot certified.",
    achievements: [
      "Managed $1.2M digital marketing budget across SEO, PPC, and social channels",
      "Increased organic traffic by 200% and reduced CAC by 35% through channel optimization",
      "Generated 5,000+ MQLs annually with 25% conversion to SQLs",
      "Implemented marketing automation that reduced lead response time from 24h to 2h"
    ]
  },
  {
    role: "Content Marketing Specialist",
    summary: "Creative Content Marketing Specialist with 4+ years of experience developing high-impact content across multiple channels. Skilled in storytelling, SEO optimization, and content strategy. Adobe Creative Suite and WordPress expert.",
    achievements: [
      "Developed content strategy that increased blog traffic by 300% year-over-year",
      "Created whitepaper that generated 1,200+ leads and $500K in attributed revenue",
      "Optimized 50+ existing articles for SEO, resulting in 150% increase in organic search traffic",
      "Managed editorial calendar of 20+ monthly pieces across blog, social, and email"
    ]
  }
];

const SALES_KEYWORDS = [
  { category: "Sales", keywords: ["Revenue Growth", "Quota Attainment", "Pipeline Management", "Lead Generation", "Territory Management", "Account Executive", "Business Development", "Solution Selling", "CRM", "Salesforce", "HubSpot", "Contract Negotiation", "Closing", "Upselling", "Cross-selling", "Enterprise Sales", "SaaS Sales", "MEDDIC", "SPIN Selling", "Challenger Sale"] },
  { category: "Marketing", keywords: ["Marketing Strategy", "ROI", "Campaign Management", "Digital Marketing", "SEO", "SEM", "Content Marketing", "Social Media", "Brand Management", "Market Research", "Marketing Automation", "Lead Nurturing", "Conversion Rate Optimization", "Google Analytics", "HubSpot", "Marketo", "Email Marketing", "PPC", "Account-Based Marketing"] },
  { category: "Leadership", keywords: ["Team Leadership", "Revenue Operations", "Strategic Planning", "Budget Management", "Forecasting", "Sales Operations", "Marketing Operations", "Go-to-Market Strategy", "Product Marketing", "Channel Management", "Partnership Development"] },
  { category: "Tools & Platforms", keywords: ["Salesforce", "HubSpot", "Marketo", "Pardot", "Google Analytics", "Tableau", "Power BI", "LinkedIn Sales Navigator", "ZoomInfo", "Outreach", "SalesLoft", "Mailchimp", "Hootsuite", "Buffer", "Canva", "Adobe Creative Suite"] }
];

const COMMON_MISTAKES = [
  { mistake: "No Numbers or Metrics", why: '"Increased sales" doesn\'t show magnitude. Employers can\'t gauge your impact.', better: 'Quantify: "Increased territory sales by 45% to $3.2M"' },
  { mistake: "Generic Responsibilities", why: '"Responsible for lead generation" reads like a job description, not an achievement.', better: '"Generated 500+ qualified leads annually, resulting in $2M pipeline"' },
  { mistake: "Missing CRM/Platform Names", why: "Employers want to know which specific tools you can use immediately.", better: "List specific platforms: Salesforce, HubSpot, Marketo, etc." },
  { mistake: "Vague Funnel Understanding", why: "Not showing knowledge of where you fit in the revenue cycle.", better: "Demonstrate funnel awareness: top-of-funnel, middle, bottom" },
  { mistake: "Activity-Focused, Not Results-Focused", why: '"Made 50 calls per day" shows activity, not impact.', better: '"50 calls/day generated 15 meetings and $500K in pipeline"' },
  { mistake: "Omitting Sales Methodology", why: "Not mentioning MEDDIC, Challenger, or SPIN suggests lack of formal training.", better: '"Used MEDDIC framework to qualify enterprise opportunities"' },
  { mistake: "Listing Duties Instead of Wins", why: "Recruiters scan for achievements, not job descriptions.", better: "Lead with results: 'Achieved 130% of quota for 5 consecutive quarters'" },
  { mistake: "No Deal Size or Sales Cycle Context", why: "Without context, numbers lose meaning for hiring managers.", better: '"Closed 15 deals averaging $150K with 6-month sales cycle"' }
];

const ACHIEVEMENT_FORMULAS = [
  { formula: "Action + Metric + Timeframe + Context", example: "Grew territory revenue 45% (from $2.2M to $3.2M) in 18 months through strategic account planning and new logo acquisition" },
  { formula: "Quota + Percentage + Ranking", example: "Achieved 135% of $2M annual quota, ranking #3 out of 45 AEs nationally and earning President's Club recognition" },
  { formula: "Campaign + Channel + Metric + ROI", example: "Launched multi-channel ABM campaign across email and LinkedIn that generated 500+ qualified leads and $1.2M in pipeline within 90 days" },
  { formula: "Problem + Solution + Business Impact", example: "Identified 40% lead leakage in MQL-to-SQL conversion; implemented lead scoring model that increased conversion by 65% and added $800K in pipeline" },
  { formula: "Initiative + Scale + Efficiency Gain", example: "Built automated nurture sequences in HubSpot that re-engaged 10,000+ cold leads, generating $500K in additional pipeline with zero ad spend" },
  { formula: "Leadership + Team Size + Performance", example: "Led team of 12 SDRs to exceed pipeline generation targets by 28%, with 4 team members promoted to AE within 12 months" }
];

const BEFORE_AFTER_EXAMPLES = [
  { before: "Responsible for generating leads and setting meetings.", after: "Generated 150+ qualified opportunities annually through strategic outbound prospecting, contributing to $4M in pipeline revenue and 25% increase in AE meeting conversion." },
  { before: "Managed digital marketing campaigns for the company.", after: "Orchestrated $1.2M annual digital marketing budget across Google Ads, LinkedIn, and programmatic channels, achieving 4.5x blended ROAS and reducing cost-per-lead by 38% through continuous optimization." },
  { before: "Worked with the sales team to close deals.", after: "Partnered with enterprise AEs as trusted advisor during $500K+ deals, delivering compelling product demonstrations and technical validations that increased close rates by 30%." },
  { before: "Created content for the company blog and social media.", after: "Developed and executed comprehensive content strategy that increased organic blog traffic 300% YoY to 150,000 monthly visitors, driving 2,000+ marketing-qualified leads through SEO-optimized articles and gated assets." }
];

const FAQS = [
  { question: "Should I include both sales and marketing experience on the same resume?", answer: "If you're applying for integrated roles or leadership positions, yes. Create a 'Sales & Marketing Experience' section that shows the full funnel. For specialized roles (pure sales or pure marketing), create separate resumes tailored to each function. If including both, group experiences by function and clearly label them, or use a combination format that highlights relevant skills for the target role." },
  { question: "How do I explain career gaps in sales and marketing?", answer: "Address gaps proactively: highlight freelance or consulting work during the gap, emphasize professional development (courses, certifications), or note if you were building your own business. Sales and marketing skills are highly transferable—frame any gap as a period of skill development. If the gap was personal, briefly state 'Career break for family/health' and focus on your readiness to return." },
  { question: "What is the best resume format for sales professionals?", answer: "The reverse-chronological format works best for sales professionals, as it highlights your most recent quota achievement and territory success. For those with a mix of sales and marketing experience, a combination format that emphasizes relevant achievements while maintaining chronological work history can be effective. Avoid functional formats—sales employers want to see clear career progression and consistent over-achievement." },
  { question: "How do I highlight marketing ROI on my resume?", answer: "Quantify marketing ROI with specific metrics: 'Led SEO initiative that increased organic traffic by 150% and generated $2M in attributed revenue.' 'Managed $500K digital ad budget with 4.5x ROAS, exceeding targets by 25%.' 'Developed email nurture campaign that converted 15% of leads (industry average 8%).' 'Reduced customer acquisition cost by 35% through channel optimization.'" },
  { question: "Should I include non-sales/marketing work on my resume?", answer: "Include non-sales/marketing work if it demonstrates transferable skills. Customer service roles show communication and relationship-building. Management roles show leadership and team coordination. Analytical roles show data skills valuable in modern marketing. Briefly summarize older or less relevant positions and focus on transferable skills—but for senior roles, prioritize recent, relevant experience." },
  { question: "How important are certifications for sales and marketing resumes?", answer: "Certifications are increasingly valuable. For sales: Salesforce certifications, Sandler Training, Challenger Sale certification, LinkedIn Sales Navigator certification. For marketing: Google Analytics, HubSpot certifications, Facebook Blueprint, Marketo Certified Expert, Hootsuite certification. Include certifications in a dedicated section and reference them in experience bullets to demonstrate practical application." },
  { question: "Should I include commission or bonus information on my resume?", answer: "Generally no—don't list specific dollar amounts of commission or bonus on your resume. Instead, demonstrate performance through quota attainment percentages and rankings. If you earned President's Club or similar recognition, mention that. Save detailed compensation discussions for interviews when you have leverage and context." },
  { question: "How do I demonstrate sales methodology expertise?", answer: "Name specific methodologies you've been trained in and apply them in context. Example: 'Applied MEDDIC framework to qualify 50+ enterprise opportunities, improving forecast accuracy by 35%.' This shows you don't just know the methodology—you apply it effectively. If you've been formally trained (Sandler, Challenger, etc.), mention the training provider for credibility." }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const SalesMarketingResumeGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-sales-and-marketing-roles";
  const metaTitle = "How to Write a Resume for USA Sales and Marketing Roles 2026";
  const metaDescription = "Complete guide to writing a resume for USA sales and marketing roles. Expert tips on highlighting revenue growth, lead generation, and marketing ROI with proven examples and ATS strategies.";

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
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{metaTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="sales resume, marketing resume, sales and marketing jobs, USA sales jobs, marketing careers, revenue growth, lead generation, ATS friendly resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for USA Sales and Marketing Roles 2026" />
        <meta name="chatgpt-fts:description" content="Complete guide to writing a resume for USA sales and marketing roles. Expert tips on highlighting revenue growth, lead generation, and marketing ROI." />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="chatgpt-fts:keywords" content="sales resume, marketing resume, sales jobs, marketing jobs, USA careers" />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
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
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to Write a Resume for USA Sales and Marketing Roles 2026" />
        <meta property="og:description" content="Complete guide to writing a resume for USA sales and marketing roles. Expert tips on highlighting revenue growth, lead generation, and marketing ROI." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Sales Resume" />
        <meta property="article:tag" content="Marketing Resume" />
        <meta property="article:tag" content="Sales Jobs" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume for USA Sales and Marketing Roles" />
        <meta name="twitter:description" content="Complete guide to sales and marketing resumes. Expert tips on revenue growth and marketing ROI." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Write a Resume for USA Sales and Marketing Roles 2026",
                  "description": metaDescription,
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/ats.jpeg",
                    "width": 800,
                    "height": 450
                  },
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
                      "url": "https://professionalresumefree.com/logo.png",
                      "width": 200,
                      "height": 60
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 3400,
                  "timeRequired": "PT16M"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://professionalresumefree.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Sales & Marketing Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for USA Sales and Marketing Roles",
                  "description": metaDescription,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Write a Sales and Marketing Resume",
                  "description": "Step-by-step guide to creating an effective sales or marketing resume",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Quantify Revenue Impact",
                      "text": "Use specific numbers to show your contribution to revenue growth and ROI"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Highlight CRM Expertise",
                      "text": "List specific CRM and marketing automation platforms you've mastered"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Show Funnel Expertise",
                      "text": "Demonstrate understanding of the entire sales and marketing funnel"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include Metrics",
                      "text": "Add percentages, dollar amounts, and timeframes to every achievement"
                    }
                  ],
                  "totalTime": "PT45M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={safeBuildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="content-sources" content="LinkedIn, Salesforce, JobScan, Glassdoor, AMA" />
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
                <span itemProp="name" aria-current="page">Sales & Marketing Resume Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">SALES & MARKETING RESUME GUIDE 2026 • USA JOBS</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Resume for USA Sales and Marketing Roles 2026
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the art of writing a compelling sales and marketing resume that highlights revenue growth, 
                quantifiable achievements, and marketing ROI. This data-backed guide provides proven strategies, 
                real-world examples, and expert tips to help you stand out in a competitive job market.
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {SALES_MARKETING_STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Sales & Marketing Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 3,400+ words</span>
            <span className="meta-item"><FiClock /> 16 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiAward /> 8+ data sources</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Sales & Marketing Resumes Must Prove Revenue Impact—Not Just List Activities</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Sales and marketing resumes differ fundamentally from other professions: <strong>they must demonstrate bottom-line revenue contribution.</strong> Every bullet point should answer "How did this drive revenue, reduce costs, or improve efficiency?" {CURRENT_YEAR} employers scan for <strong>specific metrics, CRM expertise, and sales methodology proficiency.</strong> Candidates with quantified achievements receive 4.2x more callbacks—yet 73% of sales resumes still list responsibilities without numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Sales & Marketing Salary Outlook {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Comprehensive compensation data with base salary, commission, and bonus structures</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Role</th><th>Entry-Level</th><th>Mid-Level</th><th>Senior-Level</th><th>Commission/Bonus</th><th>Demand</th></tr></thead>
                  <tbody>
                    {SALARY_DATA.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.role}</strong></td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.entry}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.mid}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.senior}</td>
                        <td style={{ color: 'var(--info-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.commission}</td>
                        <td><span className="feature-tag" style={{ background: row.demand === 'Very High' ? 'rgba(76,175,80,0.15)' : row.demand === 'High' ? 'rgba(242,202,80,0.15)' : 'rgba(100,181,246,0.15)' }}>{row.demand}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> LinkedIn {CURRENT_YEAR} Sales Talent Report, Glassdoor, RepVue, Levels.fyi. Salaries vary by location (SF/NYC premiums: 20-40%), company size, and commission structure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Methodologies */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Sales Methodologies to Feature on Your Resume</h2>
              <p className="section-subtitle">Demonstrating formal sales training significantly increases your credibility with hiring managers</p>
            </div>
            <div className="grid">
              {SALES_METHODOLOGIES.map((method, i) => {
                const IconComponent = ICON_MAP[method.icon] || FiTarget;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={20} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{method.name}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{method.description}</p>
                    <div className="insight-box-warning" style={{ padding: '0.75rem', marginTop: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 How to Feature It:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>Example: "Applied {method.name} framework to qualify enterprise pipeline, improving forecast accuracy by 35% and reducing no-decision outcomes by 25%."</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Elements */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4 Pillars of Winning Sales & Marketing Resumes</h2>
              <p className="section-subtitle">Revenue-focused strategies that differentiate top performers from average candidates</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">1</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Quantified Revenue Impact</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Every achievement must include specific numbers: revenue generated, quota attainment percentages, ROI metrics, lead volume, conversion rates, deal sizes. "Increased sales" is meaningless—"Grew territory revenue 45% to $3.2M in 18 months" demonstrates real impact. Specificity builds instant credibility and differentiates you from the 73% of candidates who only list responsibilities without measurable outcomes.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">2</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>CRM & Marketing Automation Mastery</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  List specific platforms with proficiency levels: Salesforce (Advanced), HubSpot (Certified), Marketo, Pardot, Outreach, SalesLoft. 91% of hiring managers consider CRM proficiency a critical qualification. Mention certifications and specific features you've mastered—workflows, sequences, dashboards, reporting. Employers want candidates who can contribute immediately using their existing tech stack.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">3</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Full Funnel & Sales Methodology Expertise</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Demonstrate mastery of the entire revenue funnel—from top-of-funnel awareness to closed-won revenue. Name specific methodologies (MEDDIC, Challenger, SPIN, Sandler) and show how you apply them. Sales candidates must include pipeline metrics; marketing candidates must demonstrate lead-to-revenue attribution. This proves strategic thinking beyond tactical execution and shows you understand the complete customer journey.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">4</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Consistent Over-Achievement Patterns</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Show patterns of exceeding targets across multiple roles and time periods. Include rankings (top 10%, President's Club, Rep of the Year), year-over-year growth percentages, and awards. Include quota attainment for every role where applicable. Employers want to see that your success is repeatable, sustainable, and driven by methodology—not luck or territory timing. Consistency signals true professional capability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Formulas */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Achievement Formulas for Sales & Marketing Resumes</h2>
              <p className="section-subtitle">Proven templates to transform ordinary descriptions into compelling, revenue-focused achievements</p>
            </div>
            <div className="grid">
              {ACHIEVEMENT_FORMULAS.map((item, i) => (
                <div key={i} className="card-executive">
                  <div className="feature-badge" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>{item.formula}</div>
                  <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>"{item.example}"</p>
                  </div>
                  <button onClick={() => handleCopy(item.example)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem', alignSelf: 'center' }}>
                    <FiCopy size={14} /> {copiedText === item.example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Formula'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Transforming Sales & Marketing Bullet Points</h2>
              <p className="section-subtitle">See how generic descriptions become powerful, revenue-focused achievement statements</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_EXAMPLES.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>❌ Before (Weak):</p>
                    <div className="insight-box-danger" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>{item.before}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✅ After (Revenue-Focused):</p>
                    <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0, lineHeight: '1.6' }}>{item.after}</p>
                    </div>
                  </div>
                  <button onClick={() => handleCopy(item.after)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>
                    <FiCopy size={14} /> {copiedText === item.after.substring(0, 30) + '...' ? 'Copied!' : 'Copy Example'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Examples */}
        <section id="role-examples" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Resume Examples by Role</h2>
              <p className="section-subtitle">Real-world templates showing how successful sales and marketing professionals present their achievements</p>
            </div>
            <div className="grid">
              {SALES_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem', textAlign: 'center' }}>{example.role}</h3>
                  <div className="insight-box" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}><strong>Professional Summary:</strong> {example.summary}</p>
                  </div>
                  <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Key Achievements:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {example.achievements.map((achievement, j) => (
                        <li key={j} style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section id="keywords" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Sales & Marketing Keywords for ATS Optimization</h2>
              <p className="section-subtitle">Incorporate these terms naturally throughout your resume for maximum visibility in automated screening</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              {SALES_KEYWORDS.map((cat, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: i > 0 ? '1.5rem' : '0' }}>{cat.category}</h4>
                  <div className="keyword-cloud">
                    {cat.keywords.map((kw, j) => (
                      <span key={j} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="insight-box-purple" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--purple-accent)', textAlign: 'center' }}>
                  <strong>Pro Tip:</strong> Include priority keywords 3-5 times across your resume—in your summary, skills section, and experience bullets. Single mentions may be overlooked by ATS algorithms. Always use keywords in context that demonstrates actual experience and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="common-mistakes" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">8 Critical Resume Mistakes That Cost Sales & Marketing Professionals Interviews</h2>
              <p className="section-subtitle">Avoid these common errors that immediately disqualify candidates from top-tier opportunities</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Mistake</th><th style={{ color: 'var(--error-color)' }}>Why It Hurts</th><th style={{ color: 'var(--success-color)' }}>Better Approach</th></tr></thead>
                  <tbody>
                    {COMMON_MISTAKES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.mistake}</strong></td>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.why}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.better}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Analysis of 25,000+ rejected sales and marketing applications, {CURRENT_YEAR}. Data from LinkedIn Talent Insights and Glassdoor Hiring Reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
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
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Create Your Revenue-Focused Sales & Marketing Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these revenue-focused strategies, achievement formulas, sales methodologies, and keyword optimizations to create a resume that demonstrates your bottom-line impact. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Sales & Marketing Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 Methodologies", "6 Achievement Formulas", "4 Before/After", "ATS Keywords", "Salary Data", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <p className="text-small" style={{marginTop: '24px'}}>
              Data-driven strategies updated for 2026 sales and marketing hiring trends. Last updated: {safeCurrentDate} • Sources: LinkedIn, Salesforce, JobScan, Glassdoor, AMA
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/ats-friendly-marketing-executive-manager-resume-builder", text: "Marketing Resume Builder", iconName: "FiEdit" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiZap" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/jobs-search-tips", text: "Job Search Tips", iconName: "FiSearch" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers" }
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
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Sources: LinkedIn, Salesforce, Glassdoor, AMA, RepVue
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">3400</span>
          <span itemProp="sources">LinkedIn 2025, Salesforce 2025, JobScan 2025, Glassdoor 2025, AMA 2025</span>
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

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate
      }
    },
    revalidate: 3600
  };
}

export default SalesMarketingResumeGuide;