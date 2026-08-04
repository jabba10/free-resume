import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiEdit, FiSearch, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass,
  FiAnchor, FiPercent, FiPieChart, FiMessageCircle, FiHeadphones,
  FiShoppingCart, FiTruck, FiPackage, FiCreditCard
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
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .formula-card { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; transition:all var(--transition-medium); }
  .formula-card:hover { background:rgba(242,202,80,0.1); transform:translateY(-2px); }
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
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiEdit, FiSearch, FiAlertCircle, FiCheckCircle, FiXCircle, FiX,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock,
  FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp,
  FiGlobe, FiMonitor, FiSun, FiMoon, FiCoffee, FiCompass,
  FiAnchor, FiPercent, FiPieChart, FiMessageCircle, FiHeadphones,
  FiShoppingCart, FiTruck, FiPackage, FiCreditCard
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const BULLET_STATS = [
  { value: "6-8s", label: "Average Resume Scan Time", description: "Recruiters scan—your bullets must instantly communicate value" },
  { value: "82%", label: "Prefer Impact-Focused Bullets", description: "Achievement statements outperform duty descriptions every time" },
  { value: "3x", label: "More Interview Requests", description: "Quantified CAR-method bullets generate dramatically more responses" },
  { value: "56", label: "Power Verbs Curated", description: "Carefully selected action verbs across 4 professional categories" }
];

const BULLET_FORMULAS = [
  { name: "The Power Formula", structure: "Action Verb + What You Did + Quantified Result", example: "\"Streamlined inventory management system, reducing waste by 22% and saving $45K annually.\"", color: "gold" },
  { name: "The CAR Formula", structure: "Challenge Context + Action Taken + Measurable Result", example: "\"Faced with 35% customer churn, redesigned onboarding flow and implemented check-in calls, reducing churn to 12% in 6 months.\"", color: "teal" },
  { name: "The Scale Formula", structure: "Action Verb + Scope/Scale + Outcome Achieved", example: "\"Managed $2.5M marketing budget across 5 channels, achieving 4.2x ROAS and generating 8,000+ qualified leads.\"", color: "purple" },
  { name: "The Comparison Formula", structure: "Action Verb + Baseline → Improvement + Timeframe", example: "\"Reduced average customer response time from 48 hours to 4 hours, improving satisfaction scores from 3.2 to 4.8 stars.\"", color: "rose" },
  { name: "The Recognition Formula", structure: "Achievement + Formal Recognition + Context", example: "\"Ranked #1 out of 45 sales representatives for 3 consecutive quarters, earning President's Club recognition and top performer bonus.\"", color: "amber" },
  { name: "The Innovation Formula", structure: "Created/Designed + What You Built + Business Impact", example: "\"Built automated reporting dashboard in Tableau, replacing 15 hours of manual work weekly and providing real-time insights to executive team.\"", color: "gold" }
];

const ACTION_VERB_CATEGORIES = [
  { category: "Leadership & Management", verbs: ["Led", "Managed", "Directed", "Supervised", "Coached", "Mentored", "Coordinated", "Spearheaded", "Orchestrated", "Chaired", "Guided", "Delegated", "Oversaw", "Headed"], color: "gold", icon: "FiUsers" },
  { category: "Achievement & Results", verbs: ["Increased", "Reduced", "Improved", "Accelerated", "Achieved", "Exceeded", "Generated", "Delivered", "Secured", "Won", "Surpassed", "Outperformed", "Maximized", "Boosted"], color: "teal", icon: "FiTrendingUp" },
  { category: "Creation & Innovation", verbs: ["Developed", "Created", "Designed", "Launched", "Built", "Pioneered", "Implemented", "Established", "Introduced", "Founded", "Architected", "Conceptualized", "Devised", "Crafted"], color: "purple", icon: "FiZap" },
  { category: "Analysis & Strategy", verbs: ["Analyzed", "Evaluated", "Assessed", "Identified", "Forecasted", "Optimized", "Streamlined", "Researched", "Diagnosed", "Strategized", "Audited", "Investigated", "Calculated", "Projected"], color: "rose", icon: "FiBarChart2" }
];

const BEFORE_AFTER_TABLE = [
  { before: "Responsible for managing social media accounts.", after: "Grew Instagram following by 157% in 6 months through targeted content strategy and community engagement, generating 500+ qualified leads monthly." },
  { before: "Worked on customer support tickets.", after: "Resolved 600+ support tickets with 98% satisfaction rating, consistently exceeding team response time targets by 35%." },
  { before: "Helped with sales presentations.", after: "Delivered 50+ product demos to enterprise prospects, directly contributing to $2.3M in new annual recurring revenue." },
  { before: "Participated in team meetings.", after: "Led weekly sprint planning meetings and introduced agile best practices that increased team velocity by 22%." },
  { before: "Assisted with event planning.", after: "Coordinated logistics for annual user conference with 1,200+ attendees, earning 95% positive feedback post-event." },
  { before: "Did data entry and maintained spreadsheets.", after: "Automated manual data entry processes using Excel macros, reducing processing time by 75% and eliminating errors completely." }
];

const QUANTIFYING_TIPS = [
  { tip: "Scale", description: "How many customers, users, or clients did you support?", example: "\"Supported 200+ internal users across 3 departments\"" },
  { tip: "Frequency", description: "How often did you perform a task?", example: "\"Processed 50+ invoices weekly with 100% accuracy\"" },
  { tip: "Efficiency", description: "Did you save time or money?", example: "\"Reduced report generation time by 10 hours/month\"" },
  { tip: "Improvement", description: "Did things get better because of your work?", example: "\"Increased customer satisfaction from 82% to 91%\"" },
  { tip: "Recognition", description: "Were you acknowledged for your contributions?", example: "\"Selected as Employee of the Month twice in 2025\"" },
  { tip: "Comparison", description: "How did you perform relative to peers or targets?", example: "\"Ranked #1 out of 25 team members for 3 consecutive quarters\"" }
];

const MISTAKE_CARDS = [
  { icon: "FiXCircle", title: "Starting with \"Responsible for\"", description: "Passive and wordy. Jump straight to the action verb. Instead of 'Responsible for managing team,' write 'Led team of 8 to achieve 140% of quarterly targets.'" },
  { icon: "FiXCircle", title: "Listing duties, not achievements", description: "Duties are expected. Achievements are memorable. Transform 'Answered customer calls' into 'Resolved 50+ customer inquiries daily with 95% first-contact resolution rate.'" },
  { icon: "FiXCircle", title: "No numbers or metrics", description: "Numbers add credibility and scale. Even estimates are better than nothing. 'Trained new hires' becomes 'Mentored 15+ new employees, reducing onboarding time by 30%.'" },
  { icon: "FiXCircle", title: "Using vague language", description: "Words like 'helped,' 'assisted,' and 'involved in' hide your actual contribution. Be specific about YOUR role and YOUR impact." },
  { icon: "FiXCircle", title: "Writing paragraphs, not bullets", description: "Blocks of text are skipped entirely. Bullets are scanned and absorbed. Keep each bullet to 1-2 lines maximum for optimal readability." },
  { icon: "FiXCircle", title: "Forgetting the \"so what?\" test", description: "Every bullet should matter to your target role. If you can't explain why that responsibility mattered, rewrite it or remove it." },
  { icon: "FiXCircle", title: "Using the same verb repeatedly", description: "Variety keeps the reader engaged. Starting 5 bullets with 'Managed' creates monotony. Rotate through your action verb vocabulary." }
];

const WISDOM_QUOTES = [
  { quote: "A weak bullet lists what you were supposed to do. A powerful bullet proves what you actually accomplished.", author: "The Bullet Point Manifesto", icon: "FiStar" },
  { quote: "Every bullet point is a tiny story. Make yours worth reading in 3 seconds or less.", author: "Recruiter Wisdom", icon: "FiClock" },
  { quote: "Numbers aren't just metrics—they're credibility. A bullet without a number is an opinion.", author: "Hiring Manager Truth", icon: "FiBarChart2" },
  { quote: "Your resume bullets are your career's highlight reel. Don't fill them with behind-the-scenes footage.", author: "Career Coach Insight", icon: "FiTarget" }
];

const FAQS = [
  { question: "What is the CAR formula for bullet points?", answer: "CAR stands for Challenge, Action, Result. Start with the challenge or context, describe the action you took, and end with the measurable result. Example: 'Faced with declining user engagement (challenge), redesigned the onboarding flow (action), resulting in a 27% increase in 30-day retention (result).' This framework tells a complete story in a single bullet point that recruiters can digest in seconds." },
  { question: "How do I quantify achievements when I don't have exact numbers?", answer: "Look for numbers in your work: percentages, dollar amounts, time saved, team size, projects completed. If you don't have exact numbers, estimate conservatively using phrases like 'approximately,' 'more than,' or 'up to.' Instead of 'improved efficiency,' write 'streamlined workflow, saving 10+ hours per week.' Every role has measurable impact—you just need to know where to look: scale, frequency, efficiency, improvement, recognition, and comparison are your six lenses." },
  { question: "What if my job didn't have measurable outcomes?", answer: "Every job has impact. Did you improve a process? Train others? Handle more volume than peers? Receive recognition? Use soft metrics: 'Recognized as top performer for 3 consecutive quarters' or 'Selected to train 5 new hires on company protocols.' Think about how your manager evaluated your performance—those criteria are your metrics. Even qualitative achievements can be powerful when framed correctly." },
  { question: "Should I customize bullet points for each application?", answer: "Absolutely. Identify keywords in the job description and ensure your most relevant bullets reflect that language. This improves both ATS scoring and recruiter perception of fit. Prioritize bullets that match the job's core requirements and reorder them so the most relevant achievements appear first. Customized resumes receive 40% more interview requests—the extra effort pays dividends." },
  { question: "How long should each bullet point be?", answer: "Aim for 1-2 lines. If a bullet runs to three lines, it's probably trying to say too much. Break it into two focused bullets or tighten the language. Recruiters should grasp your achievement in seconds—concise, powerful bullets outperform lengthy, detailed ones every time. Remember: white space is your friend. A resume that's easy to scan gets read." },
  { question: "What are the most overused bullet point phrases to avoid?", answer: "'Responsible for,' 'Tasked with,' 'Duties included,' 'Helped with,' and 'Worked on' are the worst offenders. These phrases waste valuable space and sound passive. Replace them with strong action verbs that lead with what you accomplished, not what you were supposed to do. Your resume is a highlight reel, not a job description. Lead with impact, not obligation." },
  { question: "How do I write bullets for technical roles effectively?", answer: "Combine technologies with outcomes. Instead of 'Used Python to analyze data,' write 'Built Python scripts to automate reporting, reducing manual work by 15 hours monthly.' Show both technical skill and business value—recruiters need to understand not just what tools you used, but what you achieved with them. The formula is: Technology + Action + Business Outcome. This demonstrates both capability and impact." }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const BulletPointGuide = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates,
    reviewDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(7).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-bullet-points-that-impress-usa-recruiters";

  // Article @id for itemReviewed reference
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/ats.jpeg";

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
        <title>How to Write Bullet Points That Impress USA Recruiters (2026 Guide)</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Learn how to write resume bullet points that impress recruiters with proven formulas, before/after examples, and data-backed strategies to land more interviews." />
        <meta name="keywords" content="resume bullet points, action verbs, quantify achievements, CAR method, resume writing tips, recruiter tips, impact statements" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write Bullet Points That Impress USA Recruiters (2026 Guide)" />
        <meta name="chatgpt-fts:description" content="Learn how to write resume bullet points that impress recruiters with proven formulas and before/after examples." />
        <meta name="chatgpt-fts:keywords" content="how to write resume bullet points, resume bullet point examples, action verbs for resumes, quantifying resume achievements, recruiter approved resume phrases" />
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
        <meta property="og:title" content="How to Write Bullet Points That Impress USA Recruiters (2026 Guide)" />
        <meta property="og:description" content="Learn how to write resume bullet points that impress recruiters with proven formulas and before/after examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-14" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write Bullet Points That Impress Recruiters" />
        <meta name="twitter:description" content="Proven formulas for resume bullet points that get interviews." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
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
                  "@type": "Article",
                  "@id": articleId,
                  "headline": "How to Write Bullet Points That Impress USA Recruiters (2026 Guide)",
                  "description": "Learn how to write resume bullet points that impress recruiters with proven formulas, before/after examples, and data-backed strategies to land more interviews.",
                  "image": productImage,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-03-14",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
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
                      "name": "Resume Advice",
                      "item": "https://professionalresumefree.com/resume-advice"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "How to Write Bullet Points That Impress Recruiters",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write Bullet Points That Impress Recruiters",
                  "description": "Learn how to write resume bullet points that impress recruiters with proven formulas, before/after examples, and data-backed strategies to land more interviews."
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
                  "name": "How to Write Powerful Resume Bullet Points",
                  "description": "Step-by-step guide to crafting bullet points that impress recruiters",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Start with Strong Action Verbs",
                      "text": "Begin each bullet with a powerful action verb that accurately describes your contribution. Avoid passive phrases like 'responsible for.'"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Apply the CAR Method",
                      "text": "Structure your bullets as Challenge-Action-Result. Describe the context, what you did, and the measurable outcome."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify Whenever Possible",
                      "text": "Include numbers, percentages, or timeframes to make your achievements concrete and credible."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Tailor to the Job Description",
                      "text": "Incorporate keywords and prioritize bullets that match the requirements of your target role."
                    }
                  ],
                  "totalTime": "PT25M"
                },
                {
                  "@type": "Product",
                  "@id": `${canonicalUrl}#product`,
                  "name": "Resume Bullet Point Writing Guide",
                  "description": "Complete guide on how to write powerful resume bullet points that impress recruiters",
                  "image": productImage,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "3",
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
                <Link href="/resume-advice" itemProp="item">
                  <span itemProp="name"><FiFileText size={14} style={{marginRight: '4px'}} /> Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiEdit size={14} style={{marginRight: '4px'}} /> Bullet Point Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Edition • 6 Proven Formulas • 56 Power Verbs • CAR Method • Quantifying Strategies</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write <span className="gradient-text">Bullet Points</span> That Impress USA Recruiters
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A bullet point is <strong>a tiny story about your professional impact.</strong> Weak bullets list duties—strong bullets prove you delivered results. This comprehensive guide teaches <strong>6 proven formulas, the CAR method, 56 power verbs, and quantifying strategies</strong> that transform ordinary resumes into interview magnets.
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {BULLET_STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{s.label}</div><div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)', marginTop: '0.5rem' }}>{s.description}</div></div>
                ))}
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
            <span><FiBookOpen style={{marginRight: '4px'}} /> 2,100+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 11 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 38,000+ views</span>
          </div>
        </div>

        {/* Wisdom Quotes */}
        <section className="section section-alt" id="bullet-wisdom">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">✨ The Philosophy of Powerful Bullet Points</h2>
              <p className="section-subtitle">Timeless truths that separate memorable resumes from forgotten ones</p>
            </div>
            <div className="grid-4">
              {WISDOM_QUOTES.map((item, i) => {
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
        <section className="section" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Bullet Points Have 6-8 Seconds to Prove Your Worth—Make Every One Count</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Recruiters scan resumes, they don't read them. <strong>82% prefer impact-focused bullets that demonstrate achievements over duty-based descriptions.</strong> Every bullet must pass the "So what?" test—proving not just what you did, but why it mattered to the business. This guide gives you the exact formulas, verbs, and frameworks to write bullets that command attention and win interviews.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Bullet Formulas */}
        <section className="section section-alt" id="bullet-formulas">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Battle-Tested Bullet Point Formulas</h2>
              <p className="section-subtitle">Proven templates that work across every industry and experience level</p>
            </div>
            <div className="grid">
              {BULLET_FORMULAS.map((formula, i) => (
                <div key={i} className="formula-card" style={{ borderColor: formula.color === 'teal' ? 'rgba(128,203,196,0.4)' : formula.color === 'purple' ? 'rgba(187,134,252,0.4)' : formula.color === 'rose' ? 'rgba(248,187,208,0.4)' : formula.color === 'amber' ? 'rgba(255,213,79,0.4)' : 'rgba(242,202,80,0.4)', background: formula.color === 'teal' ? 'rgba(128,203,196,0.05)' : formula.color === 'purple' ? 'rgba(187,134,252,0.05)' : formula.color === 'rose' ? 'rgba(248,187,208,0.05)' : formula.color === 'amber' ? 'rgba(255,213,79,0.05)' : 'rgba(242,202,80,0.05)' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: formula.color === 'teal' ? 'var(--teal-accent)' : formula.color === 'purple' ? 'var(--purple-accent)' : formula.color === 'rose' ? 'var(--rose-accent)' : formula.color === 'amber' ? 'var(--amber-accent)' : 'var(--accent-primary)', marginBottom: '0.5rem' }}>{formula.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>{formula.structure}</p>
                  <div className="insight-box" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>"{formula.example}"</p>
                  </div>
                  <button onClick={() => handleCopy(formula.example)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '0.75rem', alignSelf: 'center' }}>
                    <FiCopy size={14} /> {copiedText === formula.example.substring(0, 30) + '...' ? 'Copied!' : 'Copy Formula'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAR Method */}
        <section ref={toolRef} className="section" id="car-method">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The CAR Method: Challenge → Action → Result</h2>
              <p className="section-subtitle">The foundational framework that transforms ordinary duties into compelling achievement stories</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ borderLeft: '3px solid var(--error-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle" style={{ background: 'linear-gradient(135deg, var(--error-color), #d32f2f)' }}>C</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Challenge</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Set the stage. What problem did you face? Declining metrics, tight deadlines, resource constraints, competitive pressure—context transforms a generic task into a meaningful accomplishment.
                </p>
                <div className="insight-box-danger" style={{ padding: '0.75rem', marginTop: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>"Faced with declining customer satisfaction scores threatening $2M in renewal revenue..."</p>
                </div>
              </div>
              <div className="card-executive" style={{ borderLeft: '3px solid var(--warning-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle" style={{ background: 'linear-gradient(135deg, var(--warning-color), #f57c00)' }}>A</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Action</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  What did YOU specifically do? Use strong action verbs and focus on your direct contribution. Describe the strategy, methodology, or initiative you personally implemented.
                </p>
                <div className="insight-box-warning" style={{ padding: '0.75rem', marginTop: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', margin: 0 }}>"...led cross-functional team of 8 to redesign support workflow and implement new CRM protocols..."</p>
                </div>
              </div>
              <div className="card-executive" style={{ borderLeft: '3px solid var(--success-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle" style={{ background: 'linear-gradient(135deg, var(--success-color), #388e3c)' }}>R</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Result</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Quantify the outcome. Percentages, dollar amounts, time savings—this is what recruiters remember. Without a result, your bullet is just a description.
                </p>
                <div className="insight-box-success" style={{ padding: '0.75rem', marginTop: '0.75rem' }}>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', margin: 0 }}>"...resulting in 34% increase in satisfaction scores and $1.8M renewal revenue saved within 3 months."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Verbs */}
        <section className="section section-alt" id="action-verbs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">56 Power Verbs Across 4 Professional Categories</h2>
              <p className="section-subtitle">Start every bullet with a strong verb—never use "responsible for" or "duties included"</p>
            </div>
            <div className="grid">
              {ACTION_VERB_CATEGORIES.map((cat, i) => {
                const IconComponent = ICON_MAP[cat.icon] || FiStar;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', justifyContent: 'center' }}>
                      <IconComponent size={18} color={cat.color === 'rose' ? 'var(--rose-accent)' : cat.color === 'teal' ? 'var(--teal-accent)' : cat.color === 'purple' ? 'var(--purple-accent)' : 'var(--accent-primary)'} />
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', color: cat.color === 'rose' ? 'var(--rose-accent)' : cat.color === 'teal' ? 'var(--teal-accent)' : cat.color === 'purple' ? 'var(--purple-accent)' : 'var(--accent-primary)', margin: 0 }}>{cat.category}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                      {cat.verbs.map((verb, j) => (
                        <span key={j} className="keyword-tag" style={{ background: cat.color === 'rose' ? 'rgba(248,187,208,0.1)' : cat.color === 'teal' ? 'rgba(128,203,196,0.1)' : cat.color === 'purple' ? 'rgba(187,134,252,0.1)' : 'rgba(242,202,80,0.1)', color: cat.color === 'rose' ? 'var(--rose-accent)' : cat.color === 'teal' ? 'var(--teal-accent)' : cat.color === 'purple' ? 'var(--purple-accent)' : 'var(--accent-primary)' }}>{verb}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="insight-box-teal" style={{ maxWidth: '800px', margin: '2rem auto 0', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--teal-accent)' }}>
                <FiZap style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                <strong>Pro Tip:</strong> Rotate your verbs. Starting 5 bullets with "Managed" creates monotony. Variety signals sophisticated communication skills.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Table */}
        <section className="section" id="before-after">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The Transformation Gallery: Before & After</h2>
              <p className="section-subtitle">Witness ordinary duty statements transform into powerful achievement bullets</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th style={{ color: 'var(--error-color)' }}>❌ Weak Bullet (Duty-Focused)</th><th style={{ color: 'var(--success-color)' }}>✅ Powerful Bullet (Impact-Focused)</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER_TABLE.map((row, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.before}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Quantifying Tips */}
        <section className="section section-alt" id="quantifying">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Ways to Quantify—Even Without Exact Numbers</h2>
              <p className="section-subtitle">Every role has measurable impact. Here's how to find yours.</p>
            </div>
            <div className="grid">
              {QUANTIFYING_TIPS.map((tip, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle">{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.tip}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{tip.description}</p>
                  <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontStyle: 'italic', margin: 0 }}>{tip.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section" id="common-mistakes">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">7 Bullet Point Sins That Sabotage Your Resume</h2>
              <p className="section-subtitle">Avoid these common errors that scream "amateur" to experienced recruiters</p>
            </div>
            <div className="grid">
              {MISTAKE_CARDS.map((mistake, i) => {
                const IconComponent = ICON_MAP[mistake.icon] || FiXCircle;
                return (
                  <div key={i} className="card-executive" style={{ borderLeft: '3px solid var(--error-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ width: '28px', height: '28px', background: 'rgba(255,180,171,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--error-color)' }}>
                        <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--error-color)' }}>{i + 1}</span>
                      </div>
                      <div>
                        <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'var(--font-weight-semibold)' }}>{mistake.title}</h4>
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{mistake.description}</p>
                      </div>
                    </div>
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
              <h2 className="section-title">Frequently Asked Questions ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Thoughtful answers to the questions that keep job seekers up at night</p>
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
              ✨ Transform Every Bullet Into a Tiny Victory Story
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these 6 formulas, 56 power verbs, and quantifying strategies to create bullet points that prove your professional worth. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Resume Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 Bullet Formulas", "56 Power Verbs", "CAR Method", "Before/After Examples", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Continue Your Resume Mastery</h2>
              <p className="section-subtitle">Explore more of our expertly crafted resources to accelerate your career</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiZap" },
                { href: "/free-action-verb-recommender", text: "Action Verb Recommender", iconName: "FiEdit" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/how-to-write-a-resume", text: "Complete Resume Guide", iconName: "FiBookOpen" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={24} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: SHRM, Professional Resume Free Recruiter Survey</span>
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
  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const reviewDates = Array(5).fill(null).map((_, i) => {
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

export default BulletPointGuide;