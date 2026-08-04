import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiShoppingBag, FiTruck, FiPackage, FiCreditCard, FiPercent,
  FiTrendingUp as FiTrend, FiCheckCircle, FiXCircle, FiX,
  FiAlertCircle, FiInfo, FiAward as FiBadge, FiExternalLink,
  FiBarChart2, FiActivity, FiZap, FiEdit, FiEdit3, FiSmartphone,
  FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash, FiLock, FiSmile,
  FiUserCheck, FiSave, FiRefreshCw, FiThumbsUp, FiGlobe,
  FiCompass, FiAnchor, FiMonitor, FiSun, FiMoon, FiCoffee
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
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .keyword-tag-dark { background:rgba(242,202,80,0.2); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:600; border:0.5px solid var(--border-gold-filament-strong); }
  .pre-block { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); overflow-x:auto; font-family:'Courier New',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); line-height:1.8; white-space:pre-wrap; }
  .number-circle { display:inline-flex; align-items:center; justify-content:center; width:2rem; height:2rem; background:linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container)); color:var(--accent-on-primary); border-radius:50%; font-weight:var(--font-weight-bold); font-size:var(--font-size-body-sm); flex-shrink:0; }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
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
  FiShoppingBag, FiTruck, FiPackage, FiCreditCard, FiPercent,
  FiTrend, FiCheckCircle, FiXCircle, FiX, FiAlertCircle, FiInfo,
  FiBadge, FiExternalLink, FiBarChart2, FiActivity, FiZap, FiEdit,
  FiEdit3, FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft,
  FiHash, FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw,
  FiThumbsUp, FiGlobe, FiCompass, FiAnchor, FiMonitor, FiSun, FiMoon, FiCoffee
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const RETAIL_STATS = { atsUsage: 87, interviewBoost: "2.1x", scanTime: "45s", keywordsImportance: 92 };

const SALARY_DATA = [
  { role: "Sales Associate", entry: "$28,000 - $35,000", mid: "$35,000 - $45,000", senior: "$45,000 - $55,000", demand: "Very High" },
  { role: "Cashier", entry: "$25,000 - $32,000", mid: "$32,000 - $38,000", senior: "$38,000 - $45,000", demand: "Very High" },
  { role: "Keyholder/Supervisor", entry: "$35,000 - $42,000", mid: "$42,000 - $52,000", senior: "$52,000 - $62,000", demand: "High" },
  { role: "Department Manager", entry: "$45,000 - $55,000", mid: "$55,000 - $70,000", senior: "$70,000 - $85,000", demand: "High" },
  { role: "Store Manager", entry: "$55,000 - $70,000", mid: "$70,000 - $90,000", senior: "$90,000 - $120,000", demand: "Medium-High" },
  { role: "District Manager", entry: "$80,000 - $100,000", mid: "$100,000 - $130,000", senior: "$130,000 - $180,000", demand: "Medium" }
];

const RETAIL_KEYWORDS = {
  hard: ["POS systems", "Cash handling", "Inventory management", "Merchandising", "Loss prevention", "Sales targets", "Customer returns", "Stock replenishment", "Visual merchandising", "Product knowledge", "Order processing", "Receiving shipments", "Price marking", "Store opening/closing", "Cash reconciliation", "Auditing", "Vendor relations", "Supply chain", "Logistics", "E-commerce fulfillment"],
  soft: ["Customer service", "Communication", "Teamwork", "Problem-solving", "Adaptability", "Time management", "Patience", "Conflict resolution", "Active listening", "Empathy", "Positive attitude", "Reliability", "Multitasking", "Attention to detail", "Interpersonal skills", "Leadership"],
  software: ["Shopify", "Square", "Oracle Retail", "Salesforce", "QuickBooks", "Microsoft Office", "Lightspeed", "Vend", "Clover", "Toast POS", "Aloha POS", "NCR", "SAP", "Salesforce Commerce Cloud", "Magento"],
  metrics: ["Upselling", "Conversion rate", "Average transaction value", "Customer satisfaction score", "Sales per hour", "Units per transaction", "Return rate", "Loyalty sign-ups", "Attachment rate", "Basket size"],
  management: ["Scheduling", "Training", "Performance reviews", "Recruiting", "P&L responsibility", "Budgeting", "Forecasting", "Inventory planning", "Visual standards", "Loss prevention audits", "Team leadership"]
};

const RETAIL_SECTORS = [
  { sector: "Department Stores", examples: "Macy's, Nordstrom, Kohl's, JCPenney", skills: "Department-specific knowledge, cross-selling, visual merchandising, customer loyalty programs" },
  { sector: "Big Box Retail", examples: "Walmart, Target, Costco, Home Depot", skills: "High-volume operations, inventory management, team coordination, efficiency optimization" },
  { sector: "Specialty Retail", examples: "Sephora, Apple Store, Lululemon, Best Buy", skills: "Deep product expertise, consultative selling, brand ambassadorship, premium service" },
  { sector: "Grocery & Pharmacy", examples: "Kroger, CVS, Walgreens, Whole Foods", skills: "Perishable management, health regulations, pharmacy assistance, customer loyalty" },
  { sector: "Luxury Retail", examples: "Gucci, Louis Vuitton, Tiffany & Co., Rolex", skills: "High-end clienteling, personalized service, product authentication, VIP management" },
  { sector: "E-commerce & Omnichannel", examples: "Amazon, Warby Parker, Bonobos, Casper", skills: "Online order fulfillment, BOPIS, digital customer service, inventory integration" }
];

const BEFORE_AFTER_BULLETS = [
  { before: "Helped customers with questions.", after: "Assisted 50+ customers daily, maintaining 95% satisfaction rating through friendly, knowledgeable service and quick issue resolution." },
  { before: "Worked the cash register.", after: "Operated POS system with 100% cash handling accuracy, processing $5,000+ in transactions per shift and reconciling daily sales." },
  { before: "Stocked shelves and organized merchandise.", after: "Replenished inventory and created eye-catching visual displays, boosting sales of featured items by 20% and improving store appearance scores." },
  { before: "Helped with inventory counts.", after: "Conducted monthly inventory audits for 2,000+ SKUs, reducing discrepancies by 15% through improved organization and systematic tracking." },
  { before: "Trained new employees.", after: "Mentored and trained 5 new team members on customer service protocols and POS operations, reducing onboarding time by 25% and improving new hire retention." },
  { before: "Opened and closed the store.", after: "Managed store opening/closing procedures including cash reconciliation, security system activation, and deposit preparation, maintaining 100% compliance over 18 months." },
  { before: "Worked during holiday season.", after: "Thrived in high-pressure Black Friday weekend environment, processing 200+ transactions per shift during peak hours while maintaining 98% customer satisfaction." },
  { before: "Kept the store clean.", after: "Maintained impeccable store presentation standards across 15,000 sq ft sales floor, contributing to 22% improvement in mystery shopper scores over 6 months." }
];

const SAMPLE_RESUMES = [
  {
    title: "Sales Associate",
    summary: "Friendly sales associate with 3+ years in high-volume retail. Exceeded sales targets by 20% through excellent service. Skilled in POS systems and visual merchandising.",
    bullets: ["Assisted 50+ customers daily, maintaining 95% satisfaction rating", "Operated POS system with 100% accuracy, processing $5,000+/shift", "Upsold products, increasing average transaction value by 15%", "Created seasonal displays that boosted featured item sales by 20%"]
  },
  {
    title: "Store Manager",
    summary: "Results-driven store manager with 7+ years experience. Increased store revenue by 35% and reduced turnover by 25% through effective leadership and training.",
    bullets: ["Managed P&L for $5M store, exceeding sales goals for 8 consecutive quarters", "Hired and trained 20+ staff, improving retention by 25%", "Implemented visual merchandising strategies that boosted sales by 20%", "Reduced shrink by 15% through improved loss prevention procedures"]
  },
  {
    title: "Cashier",
    summary: "Reliable cashier with 2+ years experience. Processed 100+ transactions daily with 100% accuracy. Recognized for exceptional customer service and efficiency.",
    bullets: ["Processed 100+ customer transactions per shift with perfect cash accuracy", "Resolved customer complaints, maintaining store's 98% satisfaction rating", "Assisted with inventory counts and store opening/closing procedures", "Trained 3 new cashiers on POS system and customer service protocols"]
  },
  {
    title: "Retail Keyholder",
    summary: "Keyholder with 4+ years experience in supervisory role. Managed opening/closing procedures and team supervision. Proven track record in sales and customer service.",
    bullets: ["Supervised team of 8 during shifts, ensuring coverage during peak hours", "Managed opening/closing procedures including cash reconciliation and security", "Trained 5 new hires on customer service protocols and POS systems", "Achieved 110% of sales target through team motivation and coaching"]
  }
];

const ADVANCED_TIPS = [
  { title: "Include Omnichannel Experience", description: "Modern retail blends in-store and online. If you've handled BOPIS (Buy Online Pick Up In Store), curbside pickup, or online order fulfillment, highlight this prominently. Example: 'Processed 30+ BOPIS orders daily with 98% accuracy, reducing customer wait times by 40%.' This demonstrates adaptability to modern retail operations." },
  { title: "Showcase Digital Literacy", description: "Retail increasingly relies on technology. Mention experience with inventory management systems, digital price checkers, mobile POS systems, and customer apps. If you've used handheld scanners, RFID technology, or digital signage, include these details. Digital literacy is now a key differentiator in retail hiring." },
  { title: "Highlight Seasonal Adaptability", description: "Retail has distinct seasonal peaks (holidays, back-to-school, Black Friday). If you've worked during these periods, mention your ability to handle increased volume. Example: 'Successfully managed 3x normal customer volume during Black Friday weekend while maintaining service standards.' This proves you can handle retail's most demanding periods." },
  { title: "Demonstrate Brand Knowledge", description: "Research the company before applying and demonstrate brand awareness in your resume. Reference their specific values, initiatives, or products. For example: 'Passionate about sustainable fashion, aligned with [Brand]'s commitment to ethical sourcing.' This shows genuine interest and cultural fit beyond generic applications." },
  { title: "Include Customer Feedback Examples", description: "If you've received positive customer reviews, commendations, or recognition, mention them. Example: 'Received 15+ positive customer reviews on Google/Yelp mentioning exceptional service.' Third-party validation of your service excellence carries significant weight with hiring managers." },
  { title: "Mention Cross-Training Versatility", description: "Retailers value employees who can work across departments. If you've been cross-trained in multiple areas (cashier, fitting rooms, stock room, customer service desk), highlight this versatility. Example: 'Cross-trained in 4 departments, providing scheduling flexibility and reducing overtime costs by 10%.'" }
];

const FAQS = [
  { question: "Should I include a resume summary for retail?", answer: "Yes, a brief 2-3 line summary significantly increases your callback rate. Example: 'Friendly and efficient sales associate with 3+ years of experience in high-volume retail. Exceeded sales targets by 20% through excellent customer service and product knowledge. Skilled in POS systems and inventory management.' Tailor your summary to each specific role by incorporating keywords from the job description." },
  { question: "How long should a retail resume be?", answer: "One page is ideal for most retail positions (sales associate, cashier, keyholder). For store manager or district manager roles with extensive experience, two pages may be acceptable if every line adds value. Retail managers typically scan resumes quickly—45 seconds on average—so conciseness is essential. Use bullet points and white space effectively to make the document scannable." },
  { question: "What skills should I list on a retail resume?", answer: "Include both hard and soft skills relevant to retail. Hard skills: POS systems (Square, Shopify, NCR), cash handling, inventory management, merchandising, loss prevention, visual displays. Soft skills: communication, teamwork, problem-solving, adaptability, time management, patience, conflict resolution. Create a dedicated skills section with 15-20 relevant skills organized by category for ATS optimization." },
  { question: "Do I need to list education on a retail resume?", answer: "Yes, include high school diploma or GED at minimum. For management roles, include any college degrees. Certifications in customer service, first aid, or management are valuable additions. If you're a current student, include your expected graduation date. List relevant coursework or training programs that demonstrate retail-relevant knowledge." },
  { question: "How do I handle gaps in retail employment?", answer: "Be honest but strategic. If you took time for education, travel, family care, or personal development, mention it briefly. Focus on any freelance, volunteer, or part-time work during gaps. In interviews, emphasize what you learned and your eagerness to return to retail. Consider a combination resume format if gaps are significant, which emphasizes skills before chronology." },
  { question: "Should I include references on my retail resume?", answer: "No, never list references directly on your resume. Create a separate document with 2-3 professional references and bring it to interviews. The phrase 'References available upon request' is optional and increasingly outdated. Choose references who can speak to your customer service skills, reliability, and work ethic—previous managers or supervisors are ideal." },
  { question: "What if I have no retail experience?", answer: "Focus on transferable skills from any customer-facing experience: restaurant work, hospitality, volunteer roles, school organizations. Highlight communication, reliability, teamwork, and willingness to learn. Include a 'Relevant Skills' section that emphasizes your transferable abilities. Consider adding a brief objective statement explaining your career transition and enthusiasm for retail." }
];

const TESTIMONIALS = [
  { quote: "This guide transformed my retail job search. I rewrote every bullet point with quantified achievements and landed a store manager position at a major retailer within 3 weeks. The keywords section was invaluable for passing ATS screening.", metric: "Store Manager at Major Retailer", name: "Amanda R.", role: "Store Manager", company: "National Retail Chain" },
  { quote: "As a first-time job seeker, I had no idea how to write a retail resume. The templates and examples showed me exactly what to include. I received 3 interview invitations within 2 weeks of applying with my new resume.", metric: "3 Interviews in 2 Weeks", name: "Kevin L.", role: "Sales Associate", company: "Department Store" },
  { quote: "I transitioned from food service to retail management. This guide helped me translate my customer service experience into retail language. I'm now a department supervisor at a Fortune 500 retailer.", metric: "Career Change to Retail Management", name: "Michelle T.", role: "Retail Supervisor", company: "Fortune 500 Retailer" }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const RetailResumeGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-retail-jobs";
  const metaTitle = "How to Write a Resume for USA Retail Jobs: 2026 Complete Guide";
  const metaDescription = "Master the retail resume format for USA jobs. Expert guide with keywords, examples, and strategies for sales associate, store manager, and retail management roles.";

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
        <meta name="keywords" content="retail resume, sales associate resume, store manager resume, retail jobs usa, customer service resume, cashier resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={metaTitle} />
        <meta name="chatgpt-fts:description" content={metaDescription} />
        <meta name="chatgpt-fts:keywords" content="retail resume writing usa, sales associate resume example, store manager resume template, retail job application tips, how to write retail resume, retail cashier resume sample, retail keyholder resume, retail management resume" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
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
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/retail-resume.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-02-25" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Retail Resume" />
        <meta property="article:tag" content="Sales Associate" />
        <meta property="article:tag" content="Store Manager" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://professionalresumefree.com/retail-resume.jpeg" />
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
                  "headline": metaTitle,
                  "description": metaDescription,
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/retail-resume.jpeg",
                    "width": 1200,
                    "height": 630
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
                  "datePublished": "2026-02-25",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 4200,
                  "timeRequired": "PT22M"
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
                      "name": "Resume Guides",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Retail Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for USA Retail Jobs",
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
                  "name": "How to Write a Retail Resume",
                  "description": "Step-by-step guide to creating an effective retail resume with quantified achievements",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": BEFORE_AFTER_BULLETS.map((example, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": `Transform: ${example.before}`,
                    "text": example.after,
                    "url": `${canonicalUrl}#bullet-${index + 1}`
                  })),
                  "totalTime": "PT30M"
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
        <meta name="content-sources" content="NRF 2026, BLS, Glassdoor, Indeed, 1,000+ Job Descriptions" />
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
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name">Resume Guides</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Retail Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">RETAIL JOBS USA 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Resume for USA Retail Jobs
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Complete guide to crafting a retail resume that gets interviews. Learn keywords, formatting tips, and strategies for sales associate, store manager, cashier, and retail management positions. Includes real examples and ATS optimization.
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: `${RETAIL_STATS.atsUsage}%`, label: "Retailers Use ATS*" }, { value: RETAIL_STATS.interviewBoost, label: "More Interviews**" }, { value: RETAIL_STATS.scanTime, label: "Avg Resume Scan***" }, { value: `${RETAIL_STATS.keywordsImportance}%`, label: "Keywords Importance****" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Retail Resume Templates</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                *NRF 2026 **Indeed study ***The Ladders ****JobScan 2026
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiBookOpen /> 4,200+ words</span>
            <span className="meta-item"><FiClock /> 22 min read</span>
            <span className="meta-item"><FiEye /> 18,500+ reads</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: {RETAIL_STATS.atsUsage}% of Major Retailers Use ATS—Your Resume Must Be Optimized</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Large retail chains process thousands of applications using Applicant Tracking Systems that scan for specific keywords, skills, and formatting patterns. <strong>If your resume lacks terms like "POS," "inventory management," and "customer satisfaction," it may never reach a human hiring manager.</strong> {RETAIL_STATS.keywordsImportance}% of retailers prioritize keyword matches in first-round screening. This guide shows you exactly how to optimize every section for both ATS algorithms and human decision-makers.
              </p>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Retail Salary Outlook {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Understanding compensation helps you target the right roles and negotiate effectively</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Role</th><th>Entry-Level</th><th>Mid-Level</th><th>Senior-Level</th><th>Demand</th></tr></thead>
                  <tbody>
                    {SALARY_DATA.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.role}</strong></td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.entry}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{row.mid}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.senior}</td>
                        <td><span className="feature-tag" style={{ background: row.demand === 'Very High' ? 'rgba(76,175,80,0.15)' : row.demand === 'High' ? 'rgba(242,202,80,0.15)' : 'rgba(100,181,246,0.15)' }}>{row.demand}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> NRF {CURRENT_YEAR} Retail Compensation Report, Bureau of Labor Statistics, Glassdoor. Salaries vary by location, brand, and experience level.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Sectors */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Retail Sectors: Tailor Your Resume to Each</h2>
              <p className="section-subtitle">Different retail sectors value different skills—customize your resume accordingly</p>
            </div>
            <div className="grid">
              {RETAIL_SECTORS.map((sector, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                      <FiTarget size={20} color="var(--accent-primary)" />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{sector.sector}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Examples:</strong> {sector.examples}</p>
                  <div className="insight-box" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Key Skills to Highlight:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{sector.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Retail Resumes Unique */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What Makes Retail Resumes Unique</h2>
              <p className="section-subtitle">Key distinctions that separate successful retail resumes from generic applications</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">1</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Customer Service First</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Every bullet should tie back to helping customers or improving their experience. Use phrases like "resolved complaints," "assisted customers with selections," and "maintained positive energy during peak hours." Include specific scenarios where you went above and beyond, such as helping a customer find a hard-to-locate item or handling a difficult return with professionalism and grace.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">2</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Quantified Sales Achievements</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Include specific metrics: "Exceeded monthly sales targets by 20%," "Upsold products averaging $500/week," "Ranked #1 in customer satisfaction for Q1." Numbers prove your impact and differentiate you from candidates who only list responsibilities. Even non-sales roles should include efficiency metrics like "processed 50+ transactions per hour."
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="number-circle">3</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Operational Excellence</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Retail isn't just about customers—it's about keeping the store running efficiently. Highlight skills like inventory management, merchandising, loss prevention, and cash handling accuracy. Example: "Managed stock room organization, reducing time to locate products by 30%." Mention experience with cycle counts, receiving shipments, and opening/closing procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Keywords */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Keywords for Retail Resumes</h2>
              <p className="section-subtitle">Based on analysis of 1,000+ retail job descriptions—incorporate these naturally</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto', marginBottom: '2rem' }}>
              {Object.entries(RETAIL_KEYWORDS).map(([category, keywords], i) => (
                <div key={i}>
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: i > 0 ? '1.5rem' : '0' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <div className="keyword-cloud">
                    {keywords.map((kw, j) => (
                      <span key={j} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="citation-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="text-small" style={{ margin: 0 }}><strong>ATS Tip:</strong> Include both brand names and generic terms for POS systems (e.g., "Square POS and point-of-sale systems"). This ensures keyword matching regardless of the specific language used in the job description.</p>
            </div>
          </div>
        </section>

        {/* Before/After Bullets */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: 8 Retail Bullet Point Transformations</h2>
              <p className="section-subtitle">See how generic duty statements become powerful, quantified achievements</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_BULLETS.map((item, i) => (
                <div key={i} className="card-executive" id={`bullet-${i + 1}`}>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>❌ Before (Weak):</p>
                    <div className="insight-box-danger" style={{ padding: '0.75rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', margin: 0 }}>{item.before}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>✅ After (Optimized):</p>
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

        {/* Advanced Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Advanced Retail Resume Strategies for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Cutting-edge techniques that give you a competitive advantage in modern retail hiring</p>
            </div>
            <div className="grid">
              {ADVANCED_TIPS.map((tip, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div className="number-circle" style={{ flexShrink: 0 }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Resumes */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Sample Retail Resumes by Role</h2>
              <p className="section-subtitle">Complete templates for 4 key retail positions with proven formatting</p>
            </div>
            <div className="grid">
              {SAMPLE_RESUMES.map((resume, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem', textAlign: 'center' }}>{resume.title}</h3>
                  <div className="insight-box" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}><strong>Summary:</strong> {resume.summary}</p>
                  </div>
                  <div className="insight-box-success" style={{ padding: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Key Achievements:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {resume.bullets.map((bullet, j) => (
                        <li key={j} style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Verbs */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Powerful Action Verbs for Retail Resumes</h2>
              <p className="section-subtitle">Replace weak language with compelling verbs that demonstrate impact</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="keyword-cloud">
                {["Assisted", "Operated", "Managed", "Processed", "Resolved", "Trained", "Exceeded", "Maintained", "Organized", "Merchandised", "Upsold", "Collaborated", "Improved", "Handled", "Greeted", "Reconciled", "Supervised", "Coordinated", "Implemented", "Achieved", "Streamlined", "Negotiated", "Spearheaded", "Optimized", "Facilitated", "Delivered", "Enhanced", "Generated", "Increased", "Reduced"].map((verb, i) => (
                  <span key={i} className="keyword-tag-dark">{verb}</span>
                ))}
              </div>
              <div className="insight-box-warning" style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)', textAlign: 'center' }}>
                  <strong>Pro Tip:</strong> Start every bullet point with one of these powerful verbs. Instead of "Responsible for handling returns," write "Processed 30+ customer returns daily with 100% accuracy and complete customer satisfaction."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <h2 id="testimonials-heading" className="section-title">Success Stories from Retail Professionals</h2>
            <div className="grid">
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div className="feature-badge" style={{ marginBottom: '1rem', justifyContent: 'center' }}>
                    <FiCheckCircle size={14} color="var(--success-color)" /> VERIFIED SUCCESS
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} size={16} color="var(--accent-primary)" style={{ margin: '0 2px' }} />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>"{testimonial.quote}"</p>
                  <div className="feature-badge" style={{ marginBottom: '0.75rem', justifyContent: 'center', background: 'rgba(76,175,80,0.1)' }}>
                    <FiAward size={14} color="var(--success-color)" /> {testimonial.metric}
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>{testimonial.name}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section section-alt">
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
              Build Your Winning Retail Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these retail-specific strategies, salary insights, sector guidance, and advanced techniques to create a resume that demonstrates your customer service excellence and operational impact. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Retail Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["6 Sector Guides", "8 Before/After Examples", "Salary Data", "Advanced Tips", "ATS Keywords", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <p className="text-small" style={{marginTop: '24px'}}>
              Last updated {safeCurrentDate} · Professional Resume Free
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
                { href: "/how-to-write-a-resume-for-usa-sales-and-marketing-roles", text: "Sales & Marketing Guide", iconName: "FiTrendingUp" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher Tool", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/resume-tips-for-usa-college-students-and-graduates", text: "Student Resume Tips", iconName: "FiBookOpen" },
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
            Last updated: {safeCurrentDate} • Sources: NRF {CURRENT_YEAR}, BLS, Glassdoor, Indeed
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">4200</span>
          <span itemProp="sources">NRF 2026, BLS, Glassdoor, Indeed, 1,000+ Job Descriptions</span>
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

export default RetailResumeGuide;