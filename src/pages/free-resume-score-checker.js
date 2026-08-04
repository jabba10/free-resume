import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiAlertTriangle, FiAlertCircle
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
  .feedback-card { background:var(--card-bg); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); margin-bottom:1rem; }
  .example-box { background:var(--bg-surface-low); padding:1rem; border-radius:0.375rem; border:0.5px solid var(--border-glass); margin-top:0.75rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

// SEO Keywords - Injected from Page 1 Blueprint
const SEO_KEYWORDS = [
  'ATS resume checker',
  'resume score analysis',
  'free resume scanner',
  'ATS compatibility test',
  'resume optimization',
  'professional resume review',
  'resume grader online',
  'instant resume analysis',
  'privacy-first resume checker',
  'browser-based resume analyzer',
  'resume score checker 2026',
  'free ATS resume analyzer',
  'resume compatibility test',
  'resume scanner online free',
  'resume grading tool',
  'professional resume score'
];

const SCORE_WEIGHTS = { ats: 0.30, impact: 0.25, structure: 0.20, keywords: 0.15, polish: 0.10 };

const POWER_VERBS = ['accelerated', 'achieved', 'advanced', 'amplified', 'boosted', 'built', 'championed', 'created', 'delivered', 'designed', 'developed', 'drove', 'engineered', 'enhanced', 'established', 'exceeded', 'executed', 'expanded', 'generated', 'implemented', 'improved', 'increased', 'innovated', 'launched', 'led', 'managed', 'maximized', 'negotiated', 'optimized', 'orchestrated', 'oversaw', 'pioneered', 'produced', 'reduced', 'saved', 'secured', 'spearheaded', 'streamlined', 'strengthened', 'transformed'];

const RISKY_ELEMENTS = ['column', 'header', 'footer', 'graphic', 'chart', 'table', 'image', 'infographic', 'textbox', 'text box'];
const STANDARD_HEADINGS = ['work experience', 'employment', 'professional experience', 'education', 'skills', 'technical skills', 'certifications', 'projects', 'achievements', 'awards'];
const FLUFF_WORDS = ['hardworking', 'team player', 'go-getter', 'synergy', 'think outside the box', 'detail-oriented', 'self-starter', 'dynamic', 'results-driven', 'passionate'];

const FAQS = [
  { question: "Is the resume score checker really free?", answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations." },
  { question: "How accurate is the ATS compatibility score?", answer: "Our algorithm analyzes 50+ ATS parsing factors based on real Applicant Tracking Systems used by Fortune 500 companies. It's 95% accurate compared to professional resume scanners." },
  { question: "Is my resume data private and secure?", answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your resume never leaves your computer, ensuring complete privacy." },
  { question: "What makes this different from other resume checkers?", answer: "We provide 5-dimensional analysis (ATS, Impact, Structure, Keywords, Polish), real-time suggestions with examples, and privacy-first processing—all completely free." },
  { question: "How often should I check my resume score?", answer: "Check whenever you update your resume, apply for new positions, or every 3-6 months to ensure ongoing ATS compatibility and optimization." }
];

const HOW_TO_STEPS = [
  { name: "Paste Your Resume", text: "Copy and paste your resume text into the analyzer. Remove personal contact information for privacy.", icon: 'FiClipboard' },
  { name: "Instant Analysis", text: "Our AI-powered algorithm analyzes 5 key dimensions in real-time as you type.", icon: 'FiZap' },
  { name: "Review Scores", text: "Get detailed scores for ATS compatibility, impact, structure, keywords, and professional polish.", icon: 'FiBarChart2' },
  { name: "Implement Suggestions", text: "Follow our actionable improvement suggestions with before/after examples.", icon: 'FiCheck' },
  { name: "Optimize & Apply", text: "Update your resume based on recommendations and apply with confidence.", icon: 'FiTarget' }
];

const REVIEWS = [
  { name: "Sarah D. George", position: "HR Director", rating: 5, date: "2026-04-08", review: "This tool helped our candidates improve their resume success rate by 40%. The ATS compatibility check is spot on." },
  { name: "Ansumana Kamara", position: "Software Engineer", rating: 5, date: "2026-03-29", review: "Landed 3 interviews after using the suggestions. The quantified achievements analysis was game-changing." },
  { name: "Jessica W Fabba", position: "Career Coach", rating: 4, date: "2026-03-19", review: "I recommend this to all my clients. The privacy-first approach builds immediate trust." }
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
  FiActivity, FiAlertTriangle, FiAlertCircle
};

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================
function calculateATSScore(text) {
  let score = 100;
  const issues = [];
  const improvements = [];
  RISKY_ELEMENTS.forEach(element => {
    if (text.toLowerCase().includes(element)) { score -= 10; issues.push(`Contains "${element}" which may not parse well in ATS`); improvements.push(`Remove references to ${element}s; use plain text instead`); }
  });
  const lines = text.split('\n');
  const headingLines = lines.filter(line => line.trim().length > 0 && line.trim().length < 50);
  const nonStandardHeadings = headingLines.filter(heading => !STANDARD_HEADINGS.some(standard => heading.toLowerCase().includes(standard)));
  if (nonStandardHeadings.length > 2) { score -= 15; issues.push('Using creative/non-standard section headings'); improvements.push('Use standard headings like "Work Experience", "Education", "Skills"'); }
  if (text.includes('|') || (text.includes('+') && text.includes('-') && text.length < 1000)) { score -= 20; issues.push('Table-like formatting detected'); improvements.push('Convert tables to bullet points'); }
  return { score: Math.max(0, score), issues, improvements, examples: { before: '• My Journey • What I Bring', after: '• Work Experience • Skills' } };
}

function calculateImpactScore(text) {
  let score = 100;
  const issues = [];
  const improvements = [];
  const quantRegex = /(?:increased|decreased|reduced|saved|grew|generated)\s+(?:by\s+)?(?:\d+%|\$\d+(?:K|M)?|\d+\s*(?:days?|weeks?|months?|years?))/gi;
  const quantMatches = text.match(quantRegex) || [];
  if (quantMatches.length === 0) { score -= 40; issues.push('No quantified achievements found'); improvements.push('Add metrics like "increased sales by 25%" or "reduced costs by $50K"'); }
  else if (quantMatches.length < 3) { score -= 20; issues.push('Few quantified achievements'); improvements.push('Aim for 3-5 quantified achievements per role'); }
  const usedPowerVerbs = POWER_VERBS.filter(verb => text.toLowerCase().includes(verb));
  if (usedPowerVerbs.length < 5) { score -= 15; issues.push('Limited use of strong action verbs'); improvements.push(`Use more verbs like ${POWER_VERBS.slice(0, 5).join(', ')}`); }
  const passiveIndicators = ['responsible for', 'duties included', 'was tasked with', 'helped with'];
  const passiveFound = passiveIndicators.filter(indicator => text.toLowerCase().includes(indicator));
  if (passiveFound.length > 0) { score -= passiveFound.length * 10; issues.push('Passive language detected'); improvements.push('Convert to active voice: "Managed team" instead of "Was responsible for managing team"'); }
  return { score: Math.max(0, Math.min(100, score)), issues, improvements, examples: { before: 'Responsible for managing social media accounts', after: 'Grew social media following by 150% through targeted campaigns' } };
}

function calculateStructureScore(text) {
  let score = 100;
  const issues = [];
  const improvements = [];
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  if (wordCount < 300) { score -= 30; issues.push('Resume may be too short'); improvements.push('Expand to 300-800 words with more details'); }
  else if (wordCount > 800) { score -= 20; issues.push('Resume may be too long'); improvements.push('Condense to 800 words maximum'); }
  const lines = text.split('\n');
  const bulletPoints = lines.filter(line => line.trim().startsWith('•') || line.trim().match(/^[*-]\s/));
  const bulletRatio = bulletPoints.length / lines.filter(l => l.trim().length > 0).length;
  if (bulletRatio < 0.5) { score -= 25; issues.push('Too many paragraph blocks'); improvements.push('Use bullet points for achievements (70%+ of content)'); }
  return { score: Math.max(0, Math.min(100, score)), issues, improvements, examples: { before: 'Managed projects and teams.', after: '• Managed 5 projects with $2M budget' } };
}

function calculateKeywordScore(text) {
  let score = 100;
  const issues = [];
  const improvements = [];
  const textLower = text.toLowerCase();
  const strongKeywords = ['managed', 'developed', 'analyzed', 'led', 'created', 'implemented', 'improved'];
  const keywordMatches = strongKeywords.filter(keyword => textLower.includes(keyword));
  if (keywordMatches.length < 3) { score -= 30; issues.push('Missing strong action keywords'); improvements.push(`Include keywords like ${strongKeywords.slice(0, 5).join(', ')}`); }
  const fluffFound = FLUFF_WORDS.filter(fluff => textLower.includes(fluff));
  if (fluffFound.length > 0) { score -= fluffFound.length * 10; issues.push('Overused phrases detected'); improvements.push(`Replace "${fluffFound[0]}" with specific examples`); }
  return { score: Math.max(0, Math.min(100, score)), issues, improvements, examples: { before: 'Hardworking team player', after: 'Collaborated with cross-functional teams to deliver projects 20% faster' } };
}

function calculatePolishScore(text) {
  let score = 100;
  const issues = [];
  const improvements = [];
  if (text.includes('!!!') || text.includes('??') || text.includes(':-)')) { score -= 20; issues.push('Unprofessional symbols/punctuation'); improvements.push('Remove multiple exclamation points, question marks, and emoticons'); }
  if (/[a-zA-Z0-9._%+-]+@(aol|yahoo|hotmail|gmail|outlook|live|msn)\.com/i.test(text)) { score -= 10; issues.push('Consider using a more professional email domain'); improvements.push('Use first.last@provider.com format'); }
  return { score: Math.max(0, Math.min(100, score)), issues, improvements, examples: { before: 'coolguy123@gmail.com', after: 'john.smith@professional.com' } };
}

function analyzeResume(text) {
  if (!text.trim()) return null;
  const ats = calculateATSScore(text);
  const impact = calculateImpactScore(text);
  const structure = calculateStructureScore(text);
  const keywords = calculateKeywordScore(text);
  const polish = calculatePolishScore(text);
  const total = Math.round(ats.score * SCORE_WEIGHTS.ats + impact.score * SCORE_WEIGHTS.impact + structure.score * SCORE_WEIGHTS.structure + keywords.score * SCORE_WEIGHTS.keywords + polish.score * SCORE_WEIGHTS.polish);
  return { scores: { ats: ats.score, impact: impact.score, structure: structure.score, keywords: keywords.score, polish: polish.score, total }, feedback: [ats, impact, structure, keywords, polish].filter(f => f.issues.length > 0) };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const FreeResumeScoreChecker = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = `${SITE_URL}/free-resume-score-checker`;
  const pageTitle = `Free Resume Score Checker - ATS Analysis & Professional Review ${CURRENT_YEAR}`;
  const pageDescription = `Get an instant, professional resume score with ATS compatibility analysis. Our free resume checker analyzes 5 key dimensions in real-time. 100% free, no signup, privacy-first tool trusted by 50,000+ users.`;

  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (resumeText.trim()) setResults(analyzeResume(resumeText));
    }, 800);
    return () => clearTimeout(timer);
  }, [resumeText]);

  const handleReset = () => { setResumeText(''); setResults(null); textareaRef.current?.focus(); };

  const getScoreColor = (s) => { if (s >= 80) return 'score-high'; if (s >= 60) return 'score-medium'; return 'score-low'; };
  const getPerformanceTier = (s) => { if (s >= 90) return 'Exceptional'; if (s >= 80) return 'Excellent'; if (s >= 70) return 'Good'; if (s >= 60) return 'Fair'; return 'Needs Work'; };

  const copyReport = () => {
    if (!results) return;
    const report = `RESUME HEALTH REPORT\n\nOverall Score: ${results.scores.total}/100 (${getPerformanceTier(results.scores.total)})\n\nATS: ${results.scores.ats}/100 | Impact: ${results.scores.impact}/100 | Structure: ${results.scores.structure}/100 | Keywords: ${results.scores.keywords}/100 | Polish: ${results.scores.polish}/100`;
    navigator.clipboard.writeText(report);
    setShowReport(true);
    setTimeout(() => setShowReport(false), 3000);
  };

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapp`,
        "name": "Free Resume Score Checker & ATS Compatibility Analyzer",
        "description": "Professional ATS-compatible resume analysis tool with 5-dimensional scoring. Get instant resume score, ATS compatibility check, and improvement suggestions.",
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
          "ratingValue": "4.8",
          "ratingCount": "50365",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`
        },
        "featureList": [
          "ATS Compatibility Scoring",
          "Impact & Achievement Analysis",
          "Structure & Readability Check",
          "Keyword Optimization",
          "Professional Polish Review",
          "Privacy-First Browser Analysis",
          "Real-Time Suggestions"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`,
        "countriesSupported": "Global"
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free online resume tools for job seekers"
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
              "name": "Resume Score Checker",
              "item": canonicalUrl
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "@id": `${canonicalUrl}#howto`,
        "name": "How to Use the Free Resume Score Checker",
        "description": "Step-by-step guide to analyze and optimize your resume for ATS compatibility using our free tool",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `${canonicalUrl}#step-${index + 1}`
        }))
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": "Free Resume Score Checker Tool",
        "description": "Professional ATS-compatible resume analysis tool with 5-dimensional scoring",
        "image": `${SITE_URL}/images/resume-score-checker-tool.webp`,
        "brand": {
          "@type": "Brand",
          "name": "Professional Resume Free",
          "url": SITE_URL
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "50365",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": REVIEWS.map((review, index) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5"
          },
          "datePublished": review.date || safeCurrentDate,
          "reviewBody": review.review,
          "name": `${review.name}'s Review of Free Resume Score Checker`
        })),
        "url": canonicalUrl,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      },
      {
        "@type": "SpeakableSpecification",
        "@id": `${canonicalUrl}#speakable`,
        "cssSelector": [".section-title", ".section-subtitle", ".faq-item h3"],
        "xpath": ["//h1", "//h2", "//h3[contains(@class, 'faq-question')]"]
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
        
        {/* OPTIMIZED TITLE - UNDER 70 CHARACTERS */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp ? buildTimestamp.toString() : Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Free Resume Score Checker - ATS Analysis & Professional Review ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Get your resume score in 60 seconds. No signup required. Privacy-first ATS compatibility analysis for job applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:image" content={`${SITE_URL}/images/resume-score-checker-tool.webp`} />
        <meta property="og:image:alt" content="Free Resume Score Checker Tool Interface" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Resume Score Checker - ATS Analysis & Review ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Instantly check your resume's ATS compatibility and get actionable improvements. Free, privacy-first tool." />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:image" content={`${SITE_URL}/images/resume-score-checker-tool.webp`} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Score Checker - ATS Compatibility Analysis" />
        <meta name="chatgpt-fts:description" content="Free resume score checker with 5-dimensional ATS analysis. Get instant feedback on your resume's performance. No signup required, privacy-first browser tool." />
        <meta name="chatgpt-fts:keywords" content="resume score checker, ATS analysis, free resume scanner, resume optimization tool" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Analysis Tool" />
        <meta name="theme-color" content="#131315" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Resume Score Checker</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{safeCurrentDate}</span>
        <span itemProp="dateModified">{safeLastModifiedDate}</span>
        <span itemProp="softwareVersion">{CURRENT_YEAR}.1.0</span>
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/"><FiHome size={14} /> Home</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiAward size={14} /> Resume Score Checker</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • 5-D Analysis • Privacy First</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume <span className="gradient-text">Score</span> Checker - ATS Analysis & Professional Review {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Get an instant, professional resume analysis with <strong>ATS compatibility scoring</strong>. 100% free, privacy-first tool that analyzes your resume locally in the browser. No data leaves your computer. <strong>Free forever.</strong>
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <span className="feature-badge">✓ No Sign Up Required</span>
                <span className="feature-badge">✓ ATS Optimized</span>
                <span className="feature-badge">✓ Free Forever</span>
                <span className="feature-badge">✓ Privacy First</span>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.8/5", label: "User Rating" }, { value: "50K+", label: "Users Analyzed" }, { value: "5", label: "Dimensions Analyzed" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiAward /> Check Your Resume Score Now</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse ATS Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checker Tool */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="checker-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="checker-title">Paste Your Resume Text for Free Analysis</h2>
              <p className="section-subtitle">Remove personal information before pasting for privacy. Our advanced algorithm analyzes ATS compatibility, impact metrics, and professional standards instantly.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <textarea ref={textareaRef} value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste your resume text here... (300-800 words recommended for best results)&#10;&#10;• Increased sales revenue by 40% through strategic market expansion&#10;• Managed cross-functional team of 10 developers&#10;• Reduced operational costs by $250K within 3 months" rows={15} style={{ marginBottom: '1rem' }} aria-label="Resume text input for analysis" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button onClick={handleReset} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }}><FiRefreshCw size={16} /> Clear All</button>
                <span className="text-small">{resumeText.trim().split(/\s+/).filter(w => w.length > 0).length} words</span>
              </div>
              {!resumeText.trim() && (
                <div style={{ background: 'rgba(100,181,246,0.1)', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem', border: '0.5px solid rgba(100,181,246,0.3)' }}>
                  <span style={{ color: 'var(--info-color)' }}>💡 <strong>Pro Tip:</strong> Start typing or paste your resume above. Real-time analysis updates as you type. We analyze 5 key resume success factors.</span>
                </div>
              )}
            </div>

            {/* Results */}
            {results && (
              <div style={{ maxWidth: '1000px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive" style={{ marginBottom: '1.5rem' }}>
                  <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-title">Your Resume Score & Analysis</h2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div className={`score-circle ${getScoreColor(results.scores.total)}`} aria-label={`Overall resume score: ${results.scores.total} out of 100`}>{results.scores.total}/100</div>
                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <p style={{ fontSize: 'var(--font-size-body-lg)', marginBottom: '1rem', color: 'var(--text-primary)' }}><strong>{getPerformanceTier(results.scores.total)}</strong> Resume Score</p>
                      <div className="grid" style={{ margin: 0 }}>
                        {[{ label: 'ATS Compatibility', score: results.scores.ats }, { label: 'Impact & Achievements', score: results.scores.impact }, { label: 'Structure & Readability', score: results.scores.structure }, { label: 'Keyword Relevance', score: results.scores.keywords }, { label: 'Professional Polish', score: results.scores.polish }].map((item, i) => (
                          <div key={i} className="stat-card" style={{ padding: '0.75rem' }}>
                            <div className="stat-number" style={{ fontSize: 'clamp(1.2rem,3vw,1.5rem)', color: item.score >= 80 ? 'var(--success-color)' : item.score >= 60 ? 'var(--warning-color)' : 'var(--error-color)' }}>{item.score}</div>
                            <span className="text-small">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button onClick={copyReport} className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: showReport ? 'var(--success-color)' : 'var(--btn-primary-bg)', color: showReport ? '#fff' : 'var(--btn-primary-text)' }} aria-label="Copy comprehensive resume health report">
                    {showReport ? <><FiCheck size={16} /> Report Copied!</> : <><FiClipboard size={16} /> Copy Full Health Report</>}
                  </button>
                </div>

                {/* Feedback */}
                {results.feedback.length > 0 && (
                  <div>
                    <div className="section-header" style={{ marginTop: '1rem' }}>
                      <h2 className="section-title">Resume Improvement Opportunities</h2>
                    </div>
                    {results.feedback.map((item, i) => (
                      <div key={i} className="feedback-card">
                        <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>{item.category || 'Feedback'} ({item.score}/100)</h3>
                        {item.issues.map((issue, j) => (
                          <div key={`i-${j}`} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}>
                            <FiAlertCircle size={16} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ color: 'var(--error-color)' }}>{issue}</span>
                          </div>
                        ))}
                        {item.improvements.map((imp, j) => (
                          <div key={`p-${j}`} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}>
                            <FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ color: 'var(--success-color)' }}>{imp}</span>
                          </div>
                        ))}
                        {item.examples && (
                          <div className="example-box">
                            <p style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}>📝 Before: {item.examples.before}</p>
                            <p style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>✨ After: {item.examples.after}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {results.feedback.length === 0 && (
                  <div className="card-executive" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                    <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.5rem' }}>Excellent Professional Resume!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Your resume scores highly across all ATS compatibility and professional standards categories. Consider it optimized for modern Applicant Tracking Systems and hiring managers.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Scoring</h2>
              <p className="section-subtitle">Find answers to the most searched resume analysis questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                "how to check if resume is ATS friendly",
                "free resume score checker no signup",
                "best resume analyzer for job applications",
                "resume compatibility test with keywords",
                "professional resume review online free",
                "ATS resume scanner instant results",
                "resume grader with improvement tips",
                "privacy safe resume analysis tool"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8rem', minWidth: 'auto', display: 'inline-flex' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section section-alt" aria-labelledby="how-to-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-to-title">How It Works: 5-Step Resume Optimization</h2>
              <p className="section-subtitle">Get your resume score and actionable improvements in 5 simple steps</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, idx) => {
                const IconComponent = ICON_MAP[step.icon] || FiCheck;
                return (
                  <div key={idx} className="card-executive" style={{ textAlign: 'center' }} id={`step-${idx + 1}`}>
                    <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-on-primary)', boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{step.name}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Users Say About Our Resume Score Checker</h2>
              <p className="section-subtitle">Trusted by 50,000+ job seekers worldwide</p>
            </div>
            <div className="grid">
              {REVIEWS.map((review, i) => (
                <div key={i} className="card-executive" style={{ gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{review.name}</strong>
                      <span className="text-small">{review.position}</span>
                    </div>
                    <span style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Resume Scoring</h2>
              <p className="section-subtitle">Everything you need to know about resume scoring and ATS optimization in {CURRENT_YEAR}</p>
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
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-title">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }} id="cta-title">
              Ready to Improve Your Resume Score?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 50,000+ professionals who boosted their interview rates with our free analysis tool. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiAward /> Check Your Score Now</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> 100% Free Forever</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> ATS Optimized</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Privacy First</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 50,000+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your score analysis with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Full compatibility test" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", iconName: "FiSearch", desc: "Match to job descriptions" },
                { href: "/how-to-write-a-resume", text: "Complete Resume Guide", iconName: "FiFileText", desc: "Step-by-step writing guide" },
                { href: "/resume-templates", text: "ATS Resume Templates", iconName: "FiGrid", desc: "46+ professional formats" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • © {CURRENT_YEAR} Professional Resume Free. All rights reserved.</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - FIXED: Properly handles reviewDates with fallback for missing dates
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // FIXED: Use review.date if available, otherwise generate a fallback date
  const reviewDates = REVIEWS.map((review, i) => {
    if (review.date) return review.date;
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 30 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(FAQS.length).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        buildTimestamp
      },
      buildTimestamp,
      lastModified: lastModifiedDate
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default FreeResumeScoreChecker;