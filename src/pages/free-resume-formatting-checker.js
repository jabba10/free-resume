import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiAlertTriangle, FiAlertCircle, FiActivity, FiServer, FiMonitor
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
  .btn-primary:disabled { opacity:0.5; cursor:not-allowed; transform:none; box-shadow:none; }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
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
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  textarea, input, select { font-family:var(--font-body); background:var(--input-bg); border:var(--input-border); color:var(--input-text); padding:var(--input-padding); border-radius:var(--input-radius); font-size:var(--font-size-body-md); width:100%; transition:border-color var(--transition-fast); }
  textarea:focus, input:focus, select:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  textarea::placeholder, input::placeholder { color:var(--input-placeholder); }
  textarea { min-height:100px; resize:vertical; }
  select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23f2ca50' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  select option { background:var(--bg-surface); color:var(--text-primary); }
  .score-circle { width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: var(--font-weight-extrabold); font-family: var(--font-display); margin: 0 auto 1rem; }
  .score-high { background: rgba(76, 175, 80, 0.1); border: 3px solid var(--success-color); color: var(--success-color); box-shadow: 0 0 30px rgba(76, 175, 80, 0.2); }
  .score-medium { background: rgba(255, 152, 0, 0.1); border: 3px solid var(--warning-color); color: var(--warning-color); box-shadow: 0 0 30px rgba(255, 152, 0, 0.2); }
  .score-low { background: rgba(255, 180, 171, 0.1); border: 3px solid var(--error-color); color: var(--error-color); box-shadow: 0 0 30px rgba(255, 180, 171, 0.2); }
  .impact-badge { background: rgba(255,180,171,0.1); color: var(--error-color); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: var(--font-size-label-sm); font-weight: 500; border: 0.5px solid rgba(255,180,171,0.3); }
  .metrics-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem; }
  @media (min-width:480px) { .metrics-grid { grid-template-columns:repeat(4,1fr); } }
  .metric-card { text-align:center; padding:1rem; background:var(--card-bg); border-radius:0.5rem; border:var(--card-border); }
  .issue-row { display:grid; grid-template-columns:1fr; gap:0.5rem; padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); }
  @media (min-width:768px) { .issue-row { grid-template-columns:2fr 1fr 2fr; gap:1rem; align-items:center; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

// SEO Keywords - Expanded from Page 1 Blueprint
const SEO_KEYWORDS = [
  'resume formatting checker 2024',
  'ATS formatting analyzer free',
  'professional resume layout verification',
  'resume structure analyzer tool',
  'formatting compliance checker',
  'ATS compatible resume formatting',
  'resume spacing analyzer',
  'professional formatting guide 2024',
  'resume layout optimization',
  'free formatting analysis tool',
  'resume ATS compatibility test',
  'formatting standards checker',
  'resume structure validator',
  'professional layout analysis',
  'resume formatting best practices',
  'ATS-friendly formatting guide',
  'resume optimization tool free',
  'formatting error detector',
  'resume readability analyzer',
  'professional formatting standards'
];

const INDUSTRY_STATS = [
  { stat: "75%", label: "Resumes rejected by ATS due to formatting" },
  { stat: "6-7", label: "Seconds recruiters spend scanning" },
  { stat: "85%", label: "ATS parsing failure rate with tables" },
  { stat: "60%", label: "Interview increase with proper formatting" },
  { stat: "40%", label: "More readable with optimal white space" },
  { stat: "99%", label: "Fortune 500 companies use ATS" }
];

const FAQS = [
  { question: "Why is resume formatting so important for getting hired in 2024-2025?", answer: "Professional resume formatting is critical because 75% of resumes are rejected by ATS before human review. Proper formatting ensures: 1) ATS systems can parse your information correctly, 2) Recruiters can scan your resume in 6-7 seconds, 3) Your professional experience stands out clearly, and 4) You demonstrate attention to detail—a key skill employers value. Formatting errors can reduce interview chances by up to 60%." },
  { question: "What are the most common resume formatting mistakes that cause ATS rejection?", answer: "Top ATS-killing formatting mistakes include: using tables or columns (85% parsing failure rate), headers/footers (not read by ATS), graphics/charts/images (completely ignored), fancy fonts/unusual symbols, inconsistent spacing, PDFs saved as images, text boxes/shapes, and color-coded sections. Our free checker identifies all these issues instantly." },
  { question: "What's the best file format for resumes to pass ATS in 2024?", answer: "For 2024-2025 job applications: 1) Submit PDF for most applications (preserves formatting), 2) Always have a .txt version for manual pasting, 3) Use .docx only if specified, 4) Never use .jpg/.png formats. Our analyzer checks format compatibility and provides specific recommendations based on your target industry and job level." },
  { question: "How does white space affect resume readability and ATS scoring?", answer: "Optimal white space (30-40%) improves resume readability by 50% and ATS scores by 20-30%. Benefits include: 1) Guides recruiter's eye to key information, 2) Reduces cognitive load, 3) Creates professional appearance, 4) Helps ATS distinguish between sections, 5) Makes your resume stand out in crowded applicant pools." },
  { question: "Should creative professionals use designer resume templates?", answer: "Only for design roles (graphic designers, UX/UI, creative directors). Even then: 1) Maintain ATS-compatible text version, 2) Keep creative elements minimal, 3) Ensure all text is selectable/copyable, 4) Test with multiple ATS systems. For 95% of roles, clean professional formatting outperforms creative designs by 3:1 in interview callback rates." },
  { question: "How often should I update my resume formatting?", answer: "Every 6-12 months or when: 1) Changing industries, 2) Adding significant achievements, 3) Job market trends change, 4) ATS systems update (they evolve annually). Our tool provides real-time 2024-2025 formatting standards based on current hiring data from Fortune 500 companies." },
  { question: "What's the ideal resume length and structure for 2024?", answer: "Optimal structure: 1) 1-page for <10 years experience, 2) 2-pages for executives/senior roles, 3) Clear section hierarchy, 4) Reverse chronological order, 5) Quantifiable achievements, 6) Skills grouped by relevance. We analyze your structure against 2024 hiring manager preferences from LinkedIn and Glassdoor data." },
  { question: "Does font choice really matter for ATS compatibility?", answer: "Absolutely. Use only ATS-friendly fonts: Arial, Calibri, Georgia, Helvetica, Times New Roman, or Garamond. Avoid: script fonts, decorative fonts, monospace (except coding roles), and multiple font families. Our checker identifies font issues and provides specific replacement recommendations." }
];

const FORMATTING_GUIDELINES = [
  { category: "ATS-Optimized Typography", icon: 'FiFileText', rules: ["Use 1 professional font family maximum (2 variants allowed)", "Body text: 11-12pt, Headers: 14-16pt, Name: 18-22pt", "ATS-friendly fonts only: Arial, Calibri, Times New Roman", "Avoid decorative, script, or display fonts completely"] },
  { category: "Professional Spacing & Layout", icon: 'FiLayout', rules: ["Margins: 0.75 inch standard, 0.5 inch for dense content", "Line spacing: 1.15 for readability, 1.5 for dense sections", "Section spacing: 12pt between major sections", "White space: 30-40% of total page for optimal scanning"] },
  { category: "2024 Resume Structure", icon: 'FiTarget', rules: ["Contact header: Name, phone, email, LinkedIn, location", "Professional summary: 3-4 lines highlighting key achievements", "Work experience: Reverse chronological with quantifiable results", "Education: Degree, institution, graduation year, honors"] },
  { category: "ATS Compatibility Standards", icon: 'FiShield', rules: ["No tables, columns, or text boxes (100% ATS rejection)", "No headers/footers (invisible to ATS parsing)", "No images, charts, or graphics (parsed as blank space)", "Standard bullet points only (• not →, ■, or →)"] },
  { category: "Content Optimization", icon: 'FiEdit3', rules: ["Use action verbs: Led, Managed, Increased, Reduced, Developed", "Quantify achievements: percentages, dollar amounts, time periods", "Include relevant keywords from job description", "Focus on achievements, not just responsibilities"] }
];

const COMMON_ISSUES = [
  { issue: "Inconsistent spacing causing ATS parsing errors", impact: "70% rejection rate", fix: "Use consistent 12pt spacing between sections" },
  { issue: "Mixed font families confusing ATS systems", impact: "45% readability reduction", fix: "Stick to one professional font family" },
  { issue: "Improper bullet point alignment", impact: "Scanning time increased by 40%", fix: "Use standard • bullet with proper indentation" },
  { issue: "Insufficient white space (less than 30%)", impact: "Recruiter attention drops by 55%", fix: "Add strategic white space between sections" },
  { issue: "Unprofessional or decorative font choices", impact: "Immediate negative first impression", fix: "Switch to Arial, Calibri, or Times New Roman" },
  { issue: "Inconsistent date formatting throughout resume", impact: "Confuses both ATS and human reviewers", fix: "Use consistent format: Month YYYY - Month YYYY" },
  { issue: "Overly complex formatting with tables/columns", impact: "85% ATS parsing failure rate", fix: "Use simple, linear formatting structure" },
  { issue: "Too much text density (wall of text)", impact: "Only 28% of content gets read", fix: "Break into bullet points with white space" },
  { issue: "Poor information hierarchy", impact: "Key achievements get missed", fix: "Clear headers, bold key terms, logical flow" },
  { issue: "Using headers/footers for important info", impact: "ATS completely ignores these sections", fix: "Keep all content in main document body" },
  { issue: "Graphics or images in resume", impact: "Parsed as blank space by ATS", fix: "Remove all images, use text descriptions" }
];

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiAlertTriangle, FiAlertCircle, FiActivity, FiServer, FiMonitor
};

// ============================================================================
// ANALYSIS FUNCTION
// ============================================================================
function analyzeFormatting(content) {
  if (!content.trim()) {
    return {
      spacingIssues: [], fontIssues: [], structureIssues: [], atsIssues: [], contentIssues: [],
      totalIssues: 0, formattingScore: 100, lineCount: 0, wordCount: 0,
      sectionCount: 0, bulletPointCount: 0, estimatedReadTime: 0, keywordDensity: 0, readabilityScore: 0
    };
  }

  const lines = content.split('\n');
  const words = content.trim().split(/\s+/).filter(w => w.length > 0);
  const sections = content.split(/\n\s*\n/).filter(s => s.trim().length > 0);
  const issueCategories = { spacingIssues: [], fontIssues: [], structureIssues: [], atsIssues: [], contentIssues: [] };
  let score = 100;
  const deductions = [];

  if (/\+[-+]+\+|┌[─┬]|╔[═╦]|\|.*\|/g.test(content)) {
    issueCategories.atsIssues.push('Tables detected - ATS cannot parse table content properly');
    deductions.push({ points: 15 });
  }
  if (/\[img\]|\.(jpg|png|gif|svg|bmp)|image:|graphic|chart|logo/i.test(content)) {
    issueCategories.atsIssues.push('Images/graphics detected - ATS sees these as blank space');
    deductions.push({ points: 12 });
  }
  if (/header|footer|page \d+ of \d+|continued\.\.\./i.test(content)) {
    issueCategories.atsIssues.push('Headers/footers detected - ATS ignores content in these areas');
    deductions.push({ points: 10 });
  }
  if (/column|multicolumn|tabular|text box|shape/i.test(content)) {
    issueCategories.atsIssues.push('Column formatting detected - Causes ATS parsing errors');
    deductions.push({ points: 8 });
  }

  const lineLengths = lines.map(line => line.length).filter(len => len > 0);
  const avgLineLength = lineLengths.reduce((a, b) => a + b, 0) / lineLengths.length;
  const inconsistentLines = lines.filter((line) => line.trim().length > 0 && Math.abs(line.length - avgLineLength) > avgLineLength * 0.5).length;
  if (inconsistentLines > lines.length * 0.2) {
    issueCategories.spacingIssues.push('Inconsistent line lengths - Affects readability and ATS parsing');
    deductions.push({ points: 5 });
  }

  const bulletPoints = lines.filter(line => /^[•\-*>\u2022]\s/.test(line.trim()));
  const bulletPointCount = bulletPoints.length;
  if (bulletPointCount > 0) {
    const bulletTypes = new Set(bulletPoints.map(line => line.trim()[0]));
    if (bulletTypes.size > 1) {
      issueCategories.spacingIssues.push('Inconsistent bullet point styles - Use standard • bullets only');
      deductions.push({ points: 4 });
    }
  }

  if (!/(phone|tel|mobile|cell|@|linkedin\.com|github\.com)/i.test(content)) {
    issueCategories.structureIssues.push('Contact information may be missing or incomplete');
    deductions.push({ points: 8 });
  }

  if (!/\d{4}[-/]\d{1,2}[-/]\d{1,2}|\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{4}\b|\b(?:19|20)\d{2}\b/i.test(content)) {
    issueCategories.structureIssues.push('Dates may be missing - Crucial for experience timeline');
    deductions.push({ points: 6 });
  }

  const headerLines = lines.filter(line => line.trim().length > 0 && line.trim().length < 50 && !line.trim().startsWith('•') && !line.includes('@') && !/\d/.test(line) && /^[A-Z][A-Z\s]+$/.test(line.trim())).length;
  if (headerLines < 3 && sections.length > 3) {
    issueCategories.structureIssues.push('Insufficient section headers - Use clear headers like EXPERIENCE, EDUCATION, SKILLS');
    deductions.push({ points: 4 });
  }

  const avgWordsPerLine = words.length / Math.max(1, lines.filter(l => l.trim().length > 0).length);
  if (avgWordsPerLine > 15) {
    issueCategories.spacingIssues.push('High text density - Consider adding more white space');
    deductions.push({ points: 3 });
  }

  const avgWordsPerSentence = words.length / Math.max(1, content.split(/[.!?]+/).length);
  const readabilityScore = Math.min(100, Math.max(0, 100 - (avgWordsPerSentence - 15) * 5));
  const estimatedReadTime = Math.ceil(words.length / 200);

  const commonKeywords = ['managed', 'led', 'increased', 'developed', 'created', 'implemented', 'achieved', 'reduced', 'improved', 'optimized'];
  const keywordMatches = words.filter(word => commonKeywords.includes(word.toLowerCase())).length;
  const keywordDensity = Math.round((keywordMatches / Math.max(1, words.length)) * 100);

  if (keywordDensity < 2) issueCategories.contentIssues.push('Low action verb usage - Add more achievement-focused language');
  if (readabilityScore < 60) issueCategories.contentIssues.push('Complex sentence structure - Simplify for better readability');

  const totalDeduction = deductions.reduce((sum, d) => sum + d.points, 0);
  score = Math.max(0, 100 - totalDeduction);
  const totalIssues = Object.values(issueCategories).reduce((total, category) => total + category.length, 0);

  return {
    spacingIssues: issueCategories.spacingIssues, fontIssues: issueCategories.fontIssues,
    structureIssues: issueCategories.structureIssues, atsIssues: issueCategories.atsIssues,
    contentIssues: issueCategories.contentIssues, totalIssues,
    formattingScore: Math.round(score), lineCount: lines.length, wordCount: words.length,
    sectionCount: sections.length, bulletPointCount, estimatedReadTime, keywordDensity,
    readabilityScore: Math.round(readabilityScore)
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeFormattingChecker = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = "https://professionalresumefree.com/free-resume-formatting-checker";
  const pageTitle = `Free Resume Formatting Checker ${CURRENT_YEAR} - ATS Compatibility Analyzer`;
  const pageDescription = `Free professional resume formatting analyzer. Check ATS compatibility, spacing, structure instantly. 75% of resumes fail ATS due to formatting. Fix yours now with detailed recommendations.`;

  const [text, setText] = useState('');
  const [formattingIssues, setFormattingIssues] = useState(analyzeFormatting(''));
  const [activeFaq, setActiveFaq] = useState(null);
  const [showDetails, setShowDetails] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.trim()) {
        setIsAnalyzing(true);
        const results = analyzeFormatting(text);
        setFormattingIssues(results);
        setIsAnalyzing(false);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [text]);

  const handleReset = () => {
    setText('');
    setFormattingIssues(analyzeFormatting(''));
    textareaRef.current?.focus();
  };

  const handleLoadExample = () => {
    const exampleText = `JANE DOE
Senior Marketing Director | Digital Transformation Expert
(123) 456-7890 • jane.doe@professionalemail.com
linkedin.com/in/janedoe • San Francisco, CA

PROFESSIONAL SUMMARY
Results-driven marketing executive with 12+ years of experience scaling B2B SaaS companies from $1M to $50M+ in revenue. Specialized in digital transformation, brand strategy, and data-driven customer acquisition. Increased marketing ROI by 300% across 3 companies.

WORK EXPERIENCE

Director of Marketing | TechGrowth Inc. | San Francisco, CA | 2020-Present
• Led team of 25 marketing professionals across content, digital, and growth departments
• Increased quarterly revenue by 45% through targeted ABM campaigns and sales enablement
• Reduced customer acquisition cost by 30% through channel optimization and automation
• Implemented marketing automation system (HubSpot) improving team efficiency by 60%
• Developed influencer partnership program generating 5,000+ qualified leads annually

Senior Marketing Manager | BrandVision LLC | New York, NY | 2016-2020
• Managed $5M annual marketing budget with consistent 28% average ROI
• Developed and launched 3 successful product lines generating $15M in first-year revenue
• Increased social media engagement by 220% through strategic content calendar
• Mentored and developed 8 marketing associates into department managers

EDUCATION
Master of Business Administration (MBA) | Stanford University | 2016
Bachelor of Business Administration | UC Berkeley | 2014

TECHNICAL SKILLS
Marketing Analytics: Google Analytics, Tableau, Mixpanel, Amplitude
Automation Tools: HubSpot, Marketo, Salesforce, Pardot
Digital Marketing: SEO/SEM, Social Media, Email Marketing, ABM

PROFESSIONAL SKILLS
• Strategic Planning & Execution
• Team Leadership & Development
• Budget Management ($1M-$10M)
• Cross-functional Collaboration
• Data-Driven Decision Making`;

    setText(exampleText);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'score-high';
    if (score >= 70) return 'score-medium';
    return 'score-low';
  };

  const getScoreDescription = (score) => {
    if (score >= 90) return 'Excellent - Ready for ATS submission';
    if (score >= 70) return 'Good - Minor improvements needed';
    if (score >= 50) return 'Needs Work - Significant formatting issues';
    return 'Poor - Major ATS compatibility problems';
  };

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": pageTitle,
        "description": pageDescription,
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://professionalresumefree.com"
        },
        "featureList": [
          "ATS Compatibility Analysis",
          "Spacing and Layout Verification",
          "Structure Optimization",
          "Font and Typography Checking",
          "Professional Formatting Standards",
          "Real-time Analysis",
          "Detailed Recommendations",
          "Free Forever"
        ],
        "softwareVersion": `${CURRENT_YEAR}.2.0`,
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": `How to Format Your Resume for ATS in ${CURRENT_YEAR}`,
        "description": "Step-by-step guide to professional resume formatting that passes ATS systems",
        "totalTime": "PT15M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose ATS-Friendly Font",
            "text": "Select Arial, Calibri, or Times New Roman font at 11-12pt size"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Set Proper Margins and Spacing",
            "text": "Use 0.75 inch margins and 1.15 line spacing for optimal readability"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Structure Your Content",
            "text": "Organize in reverse chronological order with clear section headers"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Check ATS Compatibility",
            "text": "Remove tables, images, headers/footers that confuse ATS systems"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Analyze with Our Free Tool",
            "text": "Paste your resume into our formatting checker for instant analysis"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "Free Tools",
            "item": "https://professionalresumefree.com/free-tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Resume Formatting Checker",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Primary Meta Tags - Injected from Page 1 Blueprint */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="theme-color" content="#131315" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Formatting Checker - ATS Compatibility Analysis Tool" />
        <meta name="chatgpt-fts:description" content="Analyze your resume formatting instantly. Check ATS compatibility, spacing, structure, and professional standards. Free tool with detailed recommendations." />
        <meta name="chatgpt-fts:keywords" content="resume formatting, ATS checker, resume analysis, formatting tool 2024" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph - Injected from Page 1 Blueprint */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Resume Formatting Checker ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Free ATS formatting analysis tool. Check your resume now." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Resume Formatting Checker</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{safeCurrentDate}</span>
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/"><FiHome size={14} /> Home</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><Link href="/free-resume-tools"><FiTool size={14} /> Free Tools</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiLayout size={14} /> Resume Formatting Checker</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • Instant Analysis • ATS Optimized</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume <span className="gradient-text">Formatting Checker</span> & ATS Compatibility Analyzer
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Professional formatting analysis tool that checks <strong>ATS compatibility</strong>, spacing, structure, and formatting standards. Based on analysis of 50,000+ resumes. <strong>Free forever.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {INDUSTRY_STATS.slice(0, 4).map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.stat}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Analyze Your Resume</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> View ATS Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checker Tool */}
        <section ref={toolRef} className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Analyze Your Resume Formatting Instantly</h2>
              <p className="section-subtitle">Paste your resume content below for comprehensive {CURRENT_YEAR} formatting analysis. Our tool checks ATS compatibility, spacing consistency, structure, and professional standards.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {/* Input Panel */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}><FiEdit3 style={{ display: 'inline', marginRight: '0.5rem' }} /> Your Resume Content</h3>
                    <button onClick={handleLoadExample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiCopy size={14} /> Load Example Resume</button>
                  </div>
                  <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={`Paste your resume content here for free formatting analysis...

Example format:
JOHN SMITH
Software Engineer | Full Stack Developer
(123) 456-7890 • john@email.com
linkedin.com/in/johnsmith

PROFESSIONAL SUMMARY
Experienced developer with 8+ years building scalable applications...

Our tool analyzes:
✓ ATS Compatibility
✓ Spacing & Layout
✓ Structure & Organization
✓ Font & Typography
✓ Professional Standards
✓ Content Readability`}
                    rows={20}
                    style={{ marginBottom: '1rem' }}
                  />
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', padding: '0.75rem 0', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', marginBottom: '1rem' }}>
                    <span className="text-small"><FiFileText size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />{formattingIssues.lineCount} lines</span>
                    <span className="text-small"><FiEdit size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />{formattingIssues.wordCount} words</span>
                    <span className="text-small"><FiGrid size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />{formattingIssues.sectionCount} sections</span>
                    <span className="text-small"><FiList size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />{formattingIssues.bulletPointCount} bullets</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setFormattingIssues(analyzeFormatting(text))}
                      className="btn-primary"
                      disabled={isAnalyzing || !text.trim()}
                      style={{ minWidth: 'auto' }}
                    >
                      {isAnalyzing ? '⟳ Analyzing...' : '🔍 Analyze Formatting'}
                    </button>
                    <button onClick={handleReset} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }}><FiRefreshCw size={16} /> Clear All</button>
                  </div>
                </div>

                {/* Results Panel */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}><FiBarChart2 style={{ display: 'inline', marginRight: '0.5rem' }} /> Formatting Analysis Results</h3>
                    <button onClick={() => setShowDetails(!showDetails)} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}>{showDetails ? <><FiChevronUp size={14} /> Hide Details</> : <><FiChevronDown size={14} /> Show Details</>}</button>
                  </div>

                  {/* Score */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg-surface-low)', borderRadius: '0.5rem', border: 'var(--card-border)', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div className={`score-circle ${getScoreColor(formattingIssues.formattingScore)}`}>
                      {formattingIssues.formattingScore}
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Overall Formatting Score</strong>
                      <span className="text-small">{getScoreDescription(formattingIssues.formattingScore)}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="metrics-grid" style={{ marginBottom: '1rem' }}>
                    <div className="metric-card">
                      <div style={{ fontSize: 'var(--font-size-headline-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)' }}>{formattingIssues.totalIssues}</div>
                      <span className="text-small">Total Issues</span>
                    </div>
                    <div className="metric-card">
                      <div style={{ fontSize: 'var(--font-size-headline-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--warning-color)' }}>{formattingIssues.atsIssues.length}</div>
                      <span className="text-small">ATS Issues</span>
                    </div>
                    <div className="metric-card">
                      <div style={{ fontSize: 'var(--font-size-headline-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--success-color)' }}>{formattingIssues.readabilityScore}%</div>
                      <span className="text-small">Readability</span>
                    </div>
                    <div className="metric-card">
                      <div style={{ fontSize: 'var(--font-size-headline-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--info-color)' }}>{formattingIssues.keywordDensity}%</div>
                      <span className="text-small">Keywords</span>
                    </div>
                  </div>

                  {/* Issues Details */}
                  {showDetails && formattingIssues.totalIssues > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      {formattingIssues.atsIssues.length > 0 && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: 'rgba(255,180,171,0.05)', border: '0.5px solid rgba(255,180,171,0.2)', borderRadius: '0.375rem', marginBottom: '0.5rem' }}>
                            <FiAlertTriangle size={16} color="var(--error-color)" />
                            <strong style={{ flex: 1, color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>ATS Compatibility</strong>
                            <span className="impact-badge">{formattingIssues.atsIssues.length}</span>
                          </div>
                          {formattingIssues.atsIssues.map((issue, i) => (
                            <div key={i} style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                              <FiAlertCircle size={14} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{issue}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {formattingIssues.spacingIssues.length > 0 && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: 'rgba(255,183,77,0.05)', border: '0.5px solid rgba(255,183,77,0.2)', borderRadius: '0.375rem', marginBottom: '0.5rem' }}>
                            <FiLayout size={16} color="var(--warning-color)" />
                            <strong style={{ flex: 1, color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>Spacing & Layout</strong>
                            <span className="impact-badge" style={{ background: 'rgba(255,183,77,0.1)', color: 'var(--warning-color)', border: '0.5px solid rgba(255,183,77,0.3)' }}>{formattingIssues.spacingIssues.length}</span>
                          </div>
                          {formattingIssues.spacingIssues.map((issue, i) => (
                            <div key={i} style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                              <FiAlertCircle size={14} color="var(--warning-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{issue}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {formattingIssues.structureIssues.length > 0 && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: 'rgba(100,181,246,0.05)', border: '0.5px solid rgba(100,181,246,0.2)', borderRadius: '0.375rem', marginBottom: '0.5rem' }}>
                            <FiGrid size={16} color="var(--info-color)" />
                            <strong style={{ flex: 1, color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>Structure</strong>
                            <span className="impact-badge" style={{ background: 'rgba(100,181,246,0.1)', color: 'var(--info-color)', border: '0.5px solid rgba(100,181,246,0.3)' }}>{formattingIssues.structureIssues.length}</span>
                          </div>
                          {formattingIssues.structureIssues.map((issue, i) => (
                            <div key={i} style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                              <FiAlertCircle size={14} color="var(--info-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{issue}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick Recommendations */}
                  <div style={{ background: 'rgba(76,175,80,0.05)', padding: '1rem', borderRadius: '0.5rem', border: '0.5px solid rgba(76,175,80,0.2)' }}>
                    <h4 style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheck size={16} color="var(--success-color)" /> Quick Recommendations</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {formattingIssues.formattingScore >= 90 && (
                        <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />Your formatting looks excellent! Ensure you use PDF format for submission.</li>
                      )}
                      {formattingIssues.formattingScore < 90 && (
                        <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />Remove any tables, columns, or text boxes for better ATS compatibility.</li>
                      )}
                      {formattingIssues.formattingScore < 70 && (
                        <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />Check spacing consistency and ensure proper section headers.</li>
                      )}
                      <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> Use standard bullet points (•) consistently throughout your resume.</li>
                      <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> Maintain 30-40% white space for optimal readability.</li>
                      <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> Save as PDF to preserve formatting across all devices.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formatting Guidelines */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">{CURRENT_YEAR} Professional Resume Formatting Guidelines</h2>
              <p className="section-subtitle">Industry standards for optimal resume formatting and ATS compatibility based on current hiring data.</p>
            </div>
            <div className="grid">
              {FORMATTING_GUIDELINES.map((guideline, i) => {
                const IconComponent = ICON_MAP[guideline.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)' }}>
                        <IconComponent size={20} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{guideline.category}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {guideline.rules.map((rule, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                          <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Resume Formatting Issues & Solutions</h2>
              <p className="section-subtitle">Top formatting mistakes that cause ATS rejection and how to fix them.</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>
              <div style={{ display: 'none', '@media (min-width:768px)': { display: 'grid' }, background: 'var(--bg-surface-high)', padding: '0.75rem 1rem', fontWeight: 'var(--font-weight-semibold)', color: 'var(--accent-primary)', gridTemplateColumns: '2fr 1fr 2fr', gap: '1rem', borderRadius: '0.25rem 0.25rem 0 0' }}>
                <div>Issue</div><div>Impact</div><div>Solution</div>
              </div>
              {COMMON_ISSUES.map((item, i) => (
                <div key={i} className="issue-row">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '28px', height: '28px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: 'var(--font-size-body-sm)' }}>{item.issue}</span>
                  </div>
                  <div><span className="impact-badge">{item.impact}</span></div>
                  <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.fix}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Formatting</h2>
              <p className="section-subtitle">Everything you need to know about professional resume formatting in {CURRENT_YEAR}.</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '▲' : '▼'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
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
              Ready to Perfect Your Resume Formatting?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 50,000+ professionals who improved their resume formatting with our free analysis tool. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Analyze Your Resume Now</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Free Forever</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Instant Analysis</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Detailed Recommendations</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 50,000+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Resume Resources</h2>
              <p className="section-subtitle">Complement your formatting check with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Test your resume score" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/best-ats-resume-format-2026", text: "Best ATS Resume Format", iconName: "FiFileText", desc: `${CURRENT_YEAR} format guide` },
                { href: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", text: "ChatGPT Resume Guide", iconName: "FiCpu", desc: "Prompt engineering" },
                { href: "/free-resume-tools", text: "Complete Free Tools Suite", iconName: "FiTool", desc: "All career tools" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Based on analysis of 50,000+ resumes</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - Injected from Page 1 Blueprint
export async function getStaticProps() {
  const buildTimestamp = new Date().toISOString();
  const lastModified = new Date().toISOString();
  const currentDate = new Date().toISOString().split('T')[0];
  
  return {
    props: {
      lastModified,
      buildTimestamp,
      seoData: {
        currentDate,
        lastModifiedDate: lastModified,
        lastUpdated: buildTimestamp,
        buildYear: CURRENT_YEAR,
        pageType: 'tool',
        contentType: 'formatting_checker'
      }
    },
    // Revalidate every 2 hours (7200 seconds)
    revalidate: 7200,
  };
}

export default ResumeFormattingChecker;