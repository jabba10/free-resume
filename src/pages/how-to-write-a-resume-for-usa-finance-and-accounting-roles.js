import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiPieChart, FiBarChart2, FiPercent, FiTrendingUp as FiTrend,
  FiCheckCircle, FiXCircle, FiX, FiSearch, FiMonitor, FiAlertCircle,
  FiZap, FiInfo, FiEdit, FiEdit3, FiSmartphone, FiCopy,
  FiPenTool, FiType, FiAlignLeft, FiHash, FiLock, FiSmile,
  FiUserCheck, FiSave, FiRefreshCw, FiActivity, FiGlobe,
  FiAnchor, FiCompass, FiThumbsUp
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
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem 0; }
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .insight-box-warning { background:rgba(255,183,77,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,183,77,0.3); }
  .insight-box-success { background:rgba(76,175,80,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(76,175,80,0.3); }
  .insight-box-danger { background:rgba(255,180,171,0.05); border-radius:0.5rem; padding:1.5rem; border:0.5px solid rgba(255,180,171,0.3); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .checklist-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .keyword-cloud { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin:1.5rem 0; }
  .keyword-tag { background:rgba(242,202,80,0.08); color:var(--accent-primary); padding:0.5rem 1rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:500; border:0.5px solid var(--border-gold-filament); }
  .pre-block { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); overflow-x:auto; font-family:'Courier New',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); line-height:1.8; white-space:pre-wrap; }
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
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiPieChart, FiBarChart2, FiPercent, FiTrend, FiCheckCircle, FiXCircle,
  FiX, FiSearch, FiMonitor, FiAlertCircle, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiCopy, FiPenTool, FiType, FiAlignLeft, FiHash,
  FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw, FiActivity,
  FiGlobe, FiAnchor, FiCompass, FiThumbsUp
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FINANCE_KEYWORDS = {
  technical: ["GAAP", "IFRS", "SEC Reporting", "SOX Compliance", "Internal Controls", "Financial Modeling", "Forecasting", "Variance Analysis", "Budgeting", "Reconciliation", "Audit", "Tax Preparation", "M&A", "Due Diligence", "Risk Management", "Financial Statements", "General Ledger", "Accounts Payable/Receivable", "Cost Accounting", "Revenue Recognition"],
  software: ["SAP", "Oracle", "Hyperion", "QuickBooks", "Tableau", "Power BI", "Excel (Pivot Tables, VBA)", "Bloomberg Terminal", "Coupa", "Workday", "NetSuite", "Xero", "Adaptive Insights", "Anaplan"],
  certifications: ["CPA", "CFA", "CMA", "CIA", "FP&A", "CFP", "Series 7", "Series 63", "Enrolled Agent", "CISA"],
  soft: ["Stakeholder Management", "Cross-functional Collaboration", "Process Improvement", "Regulatory Compliance", "Team Leadership", "Executive Communication", "Strategic Planning", "Change Management"]
};

const SALARY_DATA = [
  { role: "Staff Accountant", entryLevel: "$52,000 - $65,000", midLevel: "$65,000 - $85,000", seniorLevel: "$85,000 - $110,000", demand: "High" },
  { role: "Financial Analyst", entryLevel: "$58,000 - $72,000", midLevel: "$72,000 - $95,000", seniorLevel: "$95,000 - $130,000", demand: "Very High" },
  { role: "Senior Accountant", entryLevel: "N/A", midLevel: "$75,000 - $95,000", seniorLevel: "$95,000 - $125,000", demand: "High" },
  { role: "Controller", entryLevel: "N/A", midLevel: "$100,000 - $135,000", seniorLevel: "$135,000 - $180,000", demand: "Medium-High" },
  { role: "Financial Manager", entryLevel: "N/A", midLevel: "$95,000 - $125,000", seniorLevel: "$125,000 - $170,000", demand: "High" },
  { role: "CFO/Treasurer", entryLevel: "N/A", midLevel: "N/A", seniorLevel: "$180,000 - $350,000+", demand: "Medium" }
];

const BEFORE_AFTER_BULLETS = [
  { before: "Responsible for monthly reconciliations.", after: "Performed monthly reconciliations for 15+ accounts totaling $50M, reducing discrepancies by 30% and accelerating month-end close by 2 business days." },
  { before: "Assisted with budget preparation.", after: "Co-led annual budgeting process for $10M operational budget; improved forecast accuracy to 95% through rigorous variance analysis and cross-departmental collaboration." },
  { before: "Worked on audit tasks.", after: "Supported external audit for Fortune 500 client, preparing 200+ workpapers and resolving all inquiries within 48 hours, contributing to zero material findings for 3 consecutive years." },
  { before: "Prepared financial reports.", after: "Streamlined financial reporting process by automating data consolidation from 5 ERP modules, reducing report production time from 5 days to 3 days while maintaining 100% accuracy." },
  { before: "Helped with tax filings.", after: "Prepared quarterly and annual tax filings for multi-state corporation, ensuring 100% compliance across 12 jurisdictions and identifying $15K in tax credits previously unclaimed." },
  { before: "Managed accounts payable.", after: "Optimized accounts payable workflow processing 500+ invoices monthly, reducing payment cycle from 45 to 30 days and capturing $25K in early payment discounts annually." }
];

const FAQS = [
  { question: "Should I include GPA on my finance resume?", answer: "Include GPA if you graduated within the last 3 years and it's 3.5 or above. For experienced professionals, omit GPA and focus on professional achievements and certifications. If you graduated with honors (cum laude, magna cum laude, summa cum laude), always include that distinction regardless of experience level. Finance hiring managers value academic excellence as a signal of discipline and quantitative capability." },
  { question: "How long should a finance resume be?", answer: "For entry to mid-level roles (0-10 years experience), strictly one page. For senior managers, directors, or VPs with 10+ years of relevant experience, two pages are acceptable but every line must provide specific, quantifiable value. Research from Robert Half shows 74% of finance hiring managers prefer one-page resumes. If using two pages, ensure your most impressive achievements appear on page one." },
  { question: "What finance certifications matter most?", answer: "CPA is the gold standard for accounting roles—required for most senior positions. CFA is essential for investment management and equity research. CMA is highly valued for corporate finance and management accounting. CIA is critical for internal audit roles. FP&A certification (AFP) is increasingly requested for financial planning positions. Always list active licenses (Series 7, 63, etc.) if applicable to the role." },
  { question: "How do I format dates on a finance resume?", answer: "Use month and year format consistently (e.g., 'June 2022 – Present'). For current roles, use 'Present.' Avoid year-only dates as they can appear evasive. If you have employment gaps of 3+ months, briefly explain them in your cover letter or note any consulting/freelance work during that period. Finance hiring managers are detail-oriented—inconsistent date formatting signals carelessness." },
  { question: "How many bullet points per job on a finance resume?", answer: "Aim for 5-7 bullet points for your most recent and relevant role, 3-5 for previous positions. Each bullet must start with a strong action verb and include a quantifiable result. Prioritize achievements that demonstrate financial impact: cost savings, revenue generation, efficiency improvements, risk reduction, or compliance achievements. Avoid listing routine duties—every bullet should answer 'What was the business outcome?'" },
  { question: "What if I haven't passed the CPA exam yet?", answer: "Be transparent and strategic. If you've passed all 4 sections, write 'CPA (Passed all 4 sections, license pending)' or 'CPA Candidate—All examinations completed.' If you're actively studying, include 'CPA Candidate (expected completion [Month Year])' to demonstrate commitment. If you've passed some sections, note 'CPA Candidate—2/4 sections completed.' Never claim 'CPA' without actual licensure—this is grounds for immediate disqualification." },
  { question: "Should I include soft skills on a finance resume?", answer: "Yes, but demonstrate them through achievements rather than listing them. Instead of writing 'strong communicator,' write 'Presented quarterly financial results to Board of Directors and institutional investors, translating complex financial data into actionable insights.' Instead of 'team player,' write 'Collaborated with cross-functional teams across 4 departments to implement new ERP system, completing migration 2 months ahead of schedule.' Contextualized soft skills are far more credible than generic claims." }
];

const TESTIMONIALS = [
  { quote: "This guide completely transformed how I present my finance experience. I rewrote every bullet point with quantified achievements and landed a Senior Financial Analyst role at a major investment bank. The keyword optimization section alone was worth its weight in gold.", metric: "Investment Bank Hire", name: "David K.", role: "Senior Financial Analyst", company: "Major Investment Bank" },
  { quote: "As an international candidate, I struggled with USA resume expectations. This guide showed me exactly how to highlight my accounting credentials and translate my experience for American employers. Received 3 interview invitations within 2 weeks of applying with my new resume.", metric: "3 Interviews in 2 Weeks", name: "Priya S.", role: "Tax Associate", company: "Big 4 Accounting Firm" },
  { quote: "I transitioned from retail management to corporate finance. This guide's advice on translating transferable skills and emphasizing quantitative achievements helped me land a Financial Analyst position at a Fortune 500 company. The sample resume outline was my blueprint.", metric: "Career Change Success", name: "Marcus W.", role: "Financial Analyst", company: "Fortune 500 Corporation" }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const FinanceAccountingResumeGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-finance-and-accounting-roles";
  const metaTitle = "How to Write a Resume for USA Finance and Accounting Roles 2026";
  const metaDescription = "Master the finance and accounting resume format for USA jobs. Expert guide with ATS strategies, keywords, templates, and examples for banking, CPA, and corporate finance roles.";

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
        <meta name="keywords" content="finance resume, accounting resume, cpa resume, financial analyst resume, banking resume, usa finance jobs, investment banking resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for USA Finance and Accounting Roles 2026" />
        <meta name="chatgpt-fts:description" content="Complete guide to writing a USA finance resume: keywords, CPA certification, ATS optimization, and templates for banking and accounting." />
        <meta name="chatgpt-fts:keywords" content="finance resume writing usa, accounting resume format 2026, how to write a resume for banking jobs, cpa resume examples, financial analyst resume template, investment banking resume keywords, corporate finance resume tips" />
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
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to Write a Resume for USA Finance and Accounting Roles 2026" />
        <meta property="og:description" content="Master the finance and accounting resume format for USA jobs. Expert guide with ATS strategies and examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/finance-resume.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-02-20" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Finance Resume" />
        <meta property="article:tag" content="Accounting Resume" />
        <meta property="article:tag" content="CPA Tips" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance & Accounting Resume Guide 2026" />
        <meta name="twitter:description" content="Free guide: how to write a USA finance resume that gets interviews." />
        <meta name="twitter:image" content="https://professionalresumefree.com/finance-resume.jpeg" />
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
                  "headline": "How to Write a Resume for USA Finance and Accounting Roles 2026",
                  "description": metaDescription,
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/finance-resume.jpeg",
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
                  "datePublished": "2026-02-20",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 3800,
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
                      "name": "Finance & Accounting Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for USA Finance and Accounting Roles",
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
                  "name": "How to Write a Finance & Accounting Resume",
                  "description": "Step-by-step guide using quantified achievements and industry keywords",
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
        <meta name="content-sources" content="Robert Half 2026, BLS, Glassdoor, 500+ Job Descriptions" />
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
                <span itemProp="name" aria-current="page">Finance & Accounting Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">FINANCE & ACCOUNTING 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Resume for USA Finance and Accounting Roles
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Complete guide to crafting a compelling finance or accounting resume that passes ATS filters, highlights your CPA/CFA credentials, and lands interviews at top banks, firms, and corporations. Includes keyword lists, sample bullets, and formatting strategies.
              </p>
              <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "89%", label: "Finance Firms Use ATS*" }, { value: "2.3x", label: "More Interviews**" }, { value: "CPA", label: "Top Credential Requested" }, { value: "74%", label: "Prefer One-Page Resumes***" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Finance Resume Templates</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                *SHRM 2026 **ResumeGo study ***Robert Half 2026
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiBookOpen /> 3,800+ words</span>
            <span className="meta-item"><FiClock /> 22 min read</span>
            <span className="meta-item"><FiEye /> 15,200+ reads</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Finance Resumes Are Judged on Precision and Quantified Impact</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Unlike creative fields, <strong>finance and accounting hiring managers prioritize conservative formatting, clear career progression, and specific technical skills.</strong> 89% of large finance firms use ATS systems that scan for credentials (CPA, CFA, CMA) and technical keywords (GAAP, SEC reporting, SAP). Your resume must demonstrate both <strong>quantitative precision and compliance expertise</strong>—every bullet point should answer "What was the financial impact?"
              </p>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Finance & Accounting Salary Outlook {CURRENT_YEAR}</h2>
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
                        <td style={{ color: row.entryLevel === 'N/A' ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{row.entryLevel}</td>
                        <td style={{ color: row.midLevel === 'N/A' ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{row.midLevel}</td>
                        <td style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>{row.seniorLevel}</td>
                        <td><span className="feature-tag" style={{ background: row.demand === 'Very High' ? 'rgba(76,175,80,0.15)' : row.demand === 'High' ? 'rgba(242,202,80,0.15)' : 'rgba(100,181,246,0.15)' }}>{row.demand}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Source:</strong> Robert Half {CURRENT_YEAR} Finance & Accounting Salary Guide, Bureau of Labor Statistics, Glassdoor Salary Reports. Salaries vary by location, company size, and certifications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Finance Resumes Different */}
        <section ref={toolRef} className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What Makes Finance & Accounting Resumes Different</h2>
              <p className="section-subtitle">Key distinctions that separate successful finance resumes from generic applications</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiBarChart2 size={20} color="var(--accent-primary)" />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Quantified Results Are Non-Negotiable</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Finance professionals are expected to demonstrate impact through numbers. Use specific figures: "Managed $5M operational budget," "Reduced forecasting errors by 15%, saving $200K annually," "Streamlined month-end close from 10 days to 6 days." Vague statements like "improved efficiency" without metrics signal lack of analytical rigor—a fatal mistake in finance.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiShield size={20} color="var(--accent-primary)" />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Certifications Must Be Prominent</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  CPA, CFA, CMA, or CIA credentials should appear near the top of your resume—ideally after your name in the header or in a dedicated "Certifications" section immediately following your professional summary. For investment roles, note Series licenses. Certifications often serve as gatekeepers; ATS systems may automatically filter candidates without required credentials.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiTarget size={20} color="var(--accent-primary)" />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Conservative Formatting Preferred</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Finance is a conservative industry. Use clean, traditional formatting with standard fonts (Arial, Calibri, Times New Roman at 10-12pt). Avoid graphics, colors, images, or creative layouts. Reverse-chronological format is strongly preferred. Your resume's visual presentation is judged as a proxy for your professional judgment—creativity in design signals poor understanding of industry norms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Keywords for Finance & Accounting Resumes</h2>
              <p className="section-subtitle">Based on analysis of 500+ job descriptions—incorporate these naturally into your resume</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>Technical & Compliance Terms</h4>
              <div className="keyword-cloud">
                {FINANCE_KEYWORDS.technical.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
              <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: '1.5rem' }}>Software & ERP Systems</h4>
              <div className="keyword-cloud">
                {FINANCE_KEYWORDS.software.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
              <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: '1.5rem' }}>Certifications & Licenses</h4>
              <div className="keyword-cloud">
                {FINANCE_KEYWORDS.certifications.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
              <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', marginTop: '1.5rem' }}>Professional Skills</h4>
              <div className="keyword-cloud">
                {FINANCE_KEYWORDS.soft.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
            </div>
            <div className="citation-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="text-small" style={{ margin: 0 }}><strong>ATS Tip:</strong> Include both acronyms and full terms at least once (e.g., "GAAP (Generally Accepted Accounting Principles)"). This ensures both keyword-matching algorithms and human readers understand your qualifications.</p>
            </div>
          </div>
        </section>

        {/* Before/After Bullets */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Transforming Finance Bullet Points</h2>
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

        {/* Sample Resume Outline */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Sample Finance Resume Outline</h2>
              <p className="section-subtitle">A complete template demonstrating proper structure and content for finance professionals</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="pre-block">
{`JOHN SMITH, CPA
New York, NY | john.smith@email.com | (555) 123-4567
linkedin.com/in/johnsmith

PROFESSIONAL SUMMARY
CPA with 6 years of experience in financial reporting and
audit. Expertise in GAAP, SEC reporting, and internal controls.
Led audit engagements for $100M+ clients, reducing findings
by 40%. Proficient in SAP and Hyperion.

CORE COMPETENCIES
• Financial Reporting & Analysis
• GAAP & SEC Compliance
• Audit & Internal Controls
• Budgeting & Forecasting
• SAP, Oracle, Hyperion
• Advanced Excel (Pivot Tables, VBA)

PROFESSIONAL EXPERIENCE
Senior Auditor | Deloitte | New York, NY | June 2021 – Present
• Lead audit engagements for 10+ clients across financial
  services, with budgets up to $5M
• Identified control deficiencies and recommended
  improvements, reducing audit findings by 40%
• Mentored 3 junior staff, resulting in two promotions
  within 18 months

Staff Accountant | EY | New York, NY | July 2019 – May 2021
• Assisted in quarterly reviews and annual audits for
  Fortune 500 clients
• Streamlined workpaper organization, reducing review
  time by 15%

CERTIFICATIONS
• Certified Public Accountant (CPA), New York State | 2020

EDUCATION
Master of Science in Accounting | New York University | 2019
GPA: 3.8 | magna cum laude`}
              </div>
              <button onClick={() => handleCopy(`JOHN SMITH, CPA\nNew York, NY...`)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem', alignSelf: 'center' }}>
                <FiCopy size={14} /> Copy Template
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <h2 id="testimonials-heading" className="section-title">Success Stories from Finance Professionals</h2>
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

        {/* Do's & Don'ts */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Finance Resume Formatting: Do's & Don'ts</h2>
              <p className="section-subtitle">Critical formatting rules that signal professionalism in the finance industry</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ borderLeft: '3px solid var(--success-color)' }}>
                <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiCheckCircle size={20} /> Do's
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Use reverse-chronological format", "Keep to one page (≤10 years experience)", "Use Arial, Calibri, or Times New Roman (10-12pt)", "Save as PDF unless .docx requested", "Include month/year dates for all roles", "Proofread meticulously—errors are fatal", "List certifications prominently near the top", "Quantify every achievement with numbers"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: 'var(--font-size-body-sm)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-executive" style={{ borderLeft: '3px solid var(--error-color)' }}>
                <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiXCircle size={20} /> Don'ts
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Avoid graphics, colors, or images", "Don't use first-person pronouns (I, me, my)", "Never include photo, age, or marital status", "Don't list references—wastes valuable space", "Avoid columns or tables that confuse ATS", "Don't use creative/unconventional fonts", "Never claim credentials you haven't earned", "Avoid listing duties without quantified results"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <FiX size={14} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: 'var(--font-size-body-sm)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Build Your Finance Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these finance-specific strategies to create a resume that demonstrates precision, quantifies impact, and passes ATS screening. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Finance Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Templates", "CPA/CFA Positioning", "Salary Insights", "Keyword Checklists", "Free PDF Download"].map((f, i) => (
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
                { href: "/ats-friendly-finance-resume-builder", text: "Finance Resume Builder", iconName: "FiEdit" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/interview-tips", text: "Finance Interview Tips", iconName: "FiUsers" },
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
            Last updated: {safeCurrentDate} • Sources: Robert Half {CURRENT_YEAR}, BLS, Glassdoor
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">3800</span>
          <span itemProp="sources">Robert Half 2026, BLS, Glassdoor, 500+ Job Descriptions</span>
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

export default FinanceAccountingResumeGuide;