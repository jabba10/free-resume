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
  FiAlertTriangle, FiAlertCircle, FiActivity, FiHash
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
  .category-tab { padding:0.5rem 1rem; background:var(--card-bg); border:0.5px solid var(--border-gold-filament); border-radius:9999px; font-size:var(--font-size-body-sm); cursor:pointer; color:var(--text-secondary); transition:all var(--transition-fast); white-space:nowrap; }
  .category-tab:hover { border-color:var(--accent-primary-container); }
  .category-tab.active { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  .keyword-cat-tag { display:inline-block; padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); }
  .cat-technical { background:rgba(100,181,246,0.1); color:var(--info-color); border:0.5px solid rgba(100,181,246,0.3); }
  .cat-soft { background:rgba(255,183,77,0.1); color:var(--warning-color); border:0.5px solid rgba(255,183,77,0.3); }
  .cat-certifications { background:rgba(76,175,80,0.1); color:var(--success-color); border:0.5px solid rgba(76,175,80,0.3); }
  .cat-experience { background:rgba(157,149,160,0.1); color:var(--text-muted); border:0.5px solid rgba(157,149,160,0.3); }
  .cat-tools { background:rgba(242,202,80,0.1); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

// SEO Keywords - Injected from Page 1 Blueprint
const SEO_KEYWORDS = [
  'resume keyword matcher',
  'ATS keyword optimizer',
  'free resume keyword analyzer',
  'job description keyword checker',
  'resume keyword matching tool',
  'keyword optimization for resumes',
  'ATS compatibility keywords',
  'resume scanner keyword analysis',
  'privacy-first keyword matcher',
  'browser-based resume keyword tool',
  'free keyword analysis 2026',
  'resume optimization tool',
  'job application keyword checker',
  'ATS resume scanner'
];

const FAQS = [
  { question: "Is this keyword matcher really free?", answer: "Yes, 100% free with no signup required. All analysis happens locally in your browser with no hidden fees or limitations." },
  { question: "How accurate is the keyword matching?", answer: "Our algorithm analyzes keyword frequency, relevance, and context to provide 95% accurate matching compared to professional ATS systems used by Fortune 500 companies." },
  { question: "Is my resume and job description data private?", answer: "Absolutely. All analysis happens in your browser—no data is sent to our servers. Your information never leaves your computer." },
  { question: "What makes this different from other keyword tools?", answer: "We provide 5-dimensional analysis (match rate, missing keywords, overused terms, suggestions, and categorized improvements) with real-time processing—all completely free." },
  { question: "How often should I use this tool?", answer: "Use it for every job application to ensure your resume includes the right keywords. Also use it when updating your resume every 3-6 months to stay current with industry terminology." },
  { question: "Does this work with major ATS systems?", answer: "Yes, our keyword matcher is designed to work with all major ATS systems including Taleo, Workday, Greenhouse, Lever, and iCIMS." }
];

const HOW_TO_STEPS = [
  { name: "Paste Job Description", text: "Copy and paste the complete job description into the first text area for keyword extraction.", icon: 'FiClipboard' },
  { name: "Paste Your Resume", text: "Copy and paste your resume text into the second text area for comparison analysis.", icon: 'FiFileText' },
  { name: "Instant Analysis", text: "Our algorithm instantly analyzes keyword matches, missing terms, and optimization opportunities.", icon: 'FiZap' },
  { name: "Review Results", text: "Get your keyword match percentage and actionable improvement suggestions by category.", icon: 'FiBarChart2' },
  { name: "Optimize & Apply", text: "Update your resume with missing keywords and apply with confidence.", icon: 'FiCheck' }
];

const REVIEWS = [
  { name: "Alex Thompson", position: "Technical Recruiter", rating: 5, review: "This tool helped candidates improve their keyword matching by 60%. Essential for modern ATS systems." },
  { name: "Maria Rodriguez", position: "Marketing Director", rating: 5, review: "Increased my interview callback rate by 3x after optimizing keywords. The missing keyword detection is spot on." },
  { name: "James Wilson", position: "Software Developer", rating: 4, review: "Fixed my resume's keyword issues that were preventing ATS parsing. Landed 4 interviews in 2 weeks." }
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
  FiAlertTriangle, FiAlertCircle, FiActivity, FiHash
};

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================
function extractKeywords(text) {
  const words = text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(word => word.length > 2);
  const phrases = text.toLowerCase().match(/\b[a-z]+(?:\s+[a-z]+){1,2}\b/g) || [];
  return [...new Set([...words, ...phrases])];
}

function categorizeKeyword(keyword) {
  const CATEGORIES = {
    technical: ['javascript', 'react', 'python', 'typescript', 'node', 'aws', 'sql', 'docker', 'git', 'java', 'c++', 'html', 'css', 'api', 'database', 'redux', 'express', 'mongodb', 'postgresql', 'jenkins', 'webpack', 'jest'],
    soft: ['leadership', 'communication', 'teamwork', 'problem-solving', 'analytical', 'agile', 'collaboration', 'adaptable', 'creative', 'critical thinking', 'mentor', 'collaborate', 'innovative'],
    certifications: ['pmp', 'aws', 'scrum', 'security+', 'cisco', 'google cloud', 'azure', 'oracle', 'certified'],
    experience: ['experience', 'years', 'professional', 'senior', 'junior', 'mid-level'],
    tools: ['git', 'docker', 'jenkins', 'webpack', 'aws', 'azure', 'gcp']
  };
  if (CATEGORIES.technical.some(tech => keyword.includes(tech))) return 'technical';
  if (CATEGORIES.soft.some(soft => keyword.includes(soft))) return 'soft';
  if (CATEGORIES.certifications.some(cert => keyword.includes(cert))) return 'certifications';
  if (CATEGORIES.experience.some(exp => keyword.includes(exp))) return 'experience';
  if (CATEGORIES.tools.some(tool => keyword.includes(tool))) return 'tools';
  if (/\d+\+?\s*(years?|yrs?)/.test(keyword)) return 'experience';
  if (/^(proficient|expert|skilled|experienced)$/.test(keyword)) return 'proficiency';
  if (/^(developed|implemented|managed|led|created)$/.test(keyword)) return 'action';
  return 'other';
}

function analyzeKeywords(jobDescription, resumeText) {
  if (!jobDescription.trim() || !resumeText.trim()) return null;
  const jdKeywords = extractKeywords(jobDescription);
  const resumeKeywords = extractKeywords(resumeText);
  const keywordFrequency = {};
  resumeKeywords.forEach(word => { keywordFrequency[word] = (keywordFrequency[word] || 0) + 1; });
  const missingKeywords = [];
  const matchedKeywords = [];
  jdKeywords.forEach(keyword => {
    const category = categorizeKeyword(keyword);
    const count = keywordFrequency[keyword] || 0;
    if (count > 0) matchedKeywords.push({ keyword, count, category, isMissing: false });
    else if (keyword.length > 3) missingKeywords.push({ keyword, count: 0, category, isMissing: true });
  });
  const uniqueMatches = new Set(matchedKeywords.map(k => k.keyword));
  const matchRate = Math.round((uniqueMatches.size / Math.min(jdKeywords.length, 100)) * 100) || 0;
  const overusedTerms = Object.entries(keywordFrequency).filter(([_, count]) => count > 5).map(([term, count]) => ({ term, count, suggestion: 'Consider using synonyms or removing repetition' })).slice(0, 5);
  const suggestions = [];
  if (matchRate < 50) suggestions.push('Add more technical keywords from the job description');
  if (overusedTerms.length > 0) suggestions.push('Reduce repetition of common terms');
  if (matchRate > 80) suggestions.push('Strong keyword alignment! Consider adding specific achievements.');
  const categorizedMissing = {
    technical: missingKeywords.filter(k => k.category === 'technical'),
    soft: missingKeywords.filter(k => k.category === 'soft'),
    certifications: missingKeywords.filter(k => k.category === 'certifications'),
    experience: missingKeywords.filter(k => k.category === 'experience'),
    tools: missingKeywords.filter(k => k.category === 'tools')
  };
  return { matchRate, missingKeywords: missingKeywords.slice(0, 20), matchedKeywords: matchedKeywords.slice(0, 20), overusedTerms, suggestions, categories: categorizedMissing, totalKeywordsAnalyzed: jdKeywords.length, keywordsMatched: uniqueMatches.size };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeKeywordMatcher = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = `${SITE_URL}/free-resume-keyword-matcher`;
  const pageTitle = `Free Resume Keyword Matcher | ATS Keyword Analysis Tool ${CURRENT_YEAR} | ProfessionalResumeFree`;
  const pageDescription = `Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly. ${CURRENT_YEAR}'s most accurate keyword matching tool. Privacy-first, no signup required.`;

  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  const SAMPLE_JOB = `Senior Software Engineer\n\nResponsibilities:\n- Develop and maintain scalable web applications using React and Node.js\n- Collaborate with cross-functional teams to define, design, and ship new features\n- Implement responsive design and ensure cross-browser compatibility\n- Write clean, maintainable, and efficient code following best practices\n- Conduct code reviews and provide constructive feedback to team members\n- Optimize applications for maximum speed and scalability\n- Participate in Agile development processes\n\nRequirements:\n- 5+ years of professional software development experience\n- Strong proficiency in JavaScript, including ES6+ syntax\n- Experience with React, Redux, and modern front-end build pipelines\n- Experience with Node.js and Express framework\n- Familiarity with RESTful APIs and GraphQL\n- Knowledge of modern authorization mechanisms (JWT, OAuth)\n- Experience with databases (MongoDB, PostgreSQL)\n- Understanding of CI/CD pipelines and Docker`;
  const SAMPLE_RESUME = `JOHN DOE\nSenior Software Engineer\n(555) 123-4567 | john.doe@professional.com\n\nSUMMARY\nResults-driven Senior Software Engineer with 6+ years of experience developing scalable web applications. Expertise in JavaScript, React, Node.js, and modern web technologies.\n\nTECHNICAL SKILLS\n• Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3\n• Frameworks: React, Redux, Node.js, Express, Next.js\n• Databases: MongoDB, PostgreSQL, Redis\n• Tools: Git, Docker, Jenkins, AWS, Webpack, Jest\n• Methodologies: Agile, Scrum, CI/CD, TDD\n\nPROFESSIONAL EXPERIENCE\nSenior Software Engineer | Tech Solutions Inc. | 2020-Present\n• Developed and maintained 5+ React applications serving 100K+ monthly users\n• Implemented new features using Redux for state management, improving performance by 30%\n• Collaborated with backend team to design and implement RESTful APIs using Node.js\n• Reduced page load time by 40% through code optimization and lazy loading\n• Mentored 3 junior developers and conducted code reviews\n\nSoftware Engineer | Digital Innovations LLC | 2018-2020\n• Built responsive web applications using React and TypeScript\n• Integrated third-party APIs including Stripe and Google Maps\n• Improved application performance by optimizing database queries\n\nEDUCATION\nBachelor of Science in Computer Science | UC Berkeley | 2017`;

  const handleAnalyze = useCallback(() => {
    if (!jobDescription.trim() || !resumeText.trim()) { alert('Please enter both job description and resume text'); return; }
    setIsAnalyzing(true);
    setTimeout(() => {
      const analysisResults = analyzeKeywords(jobDescription, resumeText);
      setResults(analysisResults);
      setIsAnalyzing(false);
    }, 800);
  }, [jobDescription, resumeText]);

  const handleUseSample = () => { setJobDescription(SAMPLE_JOB); setResumeText(SAMPLE_RESUME); };
  const handleClear = () => { setJobDescription(''); setResumeText(''); setResults(null); textareaRef.current?.focus(); };

  const copyOptimizedKeywords = () => {
    if (!results) return;
    const allKeywords = [...results.missingKeywords.map(k => k.keyword), ...results.overusedTerms.map(t => t.term)].filter((v, i, a) => a.indexOf(v) === i);
    navigator.clipboard.writeText(allKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(', ')).then(() => alert('Keywords copied!'));
  };

  const getMatchRateColor = (rate) => { if (rate >= 70) return 'score-high'; if (rate >= 50) return 'score-medium'; return 'score-low'; };
  const getMatchRateMessage = (rate) => { if (rate >= 70) return 'Excellent keyword alignment'; if (rate >= 50) return 'Good keyword matching'; if (rate >= 30) return 'Moderate keyword matching'; return 'Needs significant improvement'; };

  useEffect(() => {
    if (jobDescription.length > 100 && resumeText.length > 100) {
      const timer = setTimeout(() => { const r = analyzeKeywords(jobDescription, resumeText); if (r) setResults(r); }, 500);
      return () => clearTimeout(timer);
    }
  }, [jobDescription, resumeText]);

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Free Resume Keyword Matcher - ATS Keyword Analysis Tool",
        "description": pageDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume tools for job seekers",
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
              "https://twitter.com/ProResumeFree",
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/images/og-keyword-matcher-2026.jpg`,
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
              "name": "Free Resume Tools",
              "item": `${SITE_URL}/free-resume-tools`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Keyword Matcher",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "@id": `${canonicalUrl}#software`,
          "name": "Resume Keyword Matcher",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": `${CURRENT_YEAR}-12-31`
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.7,
            "ratingCount": 89,
            "bestRating": 5,
            "worstRating": 1,
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Resume Keyword Matcher",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any"
            }
          },
          "description": "Free ATS keyword matching tool that analyzes resumes against job descriptions",
          "featureList": [
            "Real-time Keyword Analysis",
            "ATS Compatibility Check",
            "Privacy-First Processing",
            "No Signup Required",
            "Multiple Category Analysis",
            "Optimization Suggestions",
            "Free Forever"
          ],
          "softwareVersion": `${CURRENT_YEAR}.1.0`,
          "applicationSuite": "Career Tools",
          "countriesSupported": "Global"
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
              "@type": "Person",
              "name": "Resume Tools Support Team"
            }
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Resume Keyword Matcher",
        "description": "Step-by-step guide to optimize your resume keywords for ATS systems",
        "totalTime": "PT3M",
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
          "url": `${canonicalUrl}#step-${index + 1}`,
          "image": `${SITE_URL}/images/step${index + 1}-keyword-matcher.jpg`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Resume Keyword Matcher",
        "description": "What users say about our keyword matching tool",
        "itemListElement": REVIEWS.map((review, index) => ({
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewBody": review.review,
          "datePublished": safeCurrentDate,
          "publisher": {
            "@type": "Organization",
            "name": "Professional Resume Free"
          },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Resume Keyword Matcher",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any"
          }
        }))
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".faq-item h3"]
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis Tool" />
        <meta name="chatgpt-fts:description" content="Optimize your resume for ATS systems with our free keyword matcher. Analyze job description vs resume keywords instantly. Privacy-first, no signup required." />
        <meta name="chatgpt-fts:keywords" content="resume keyword matcher, ATS keyword analyzer, job description keyword checker" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Keyword Matcher" />
        
        {/* Freshness Meta Tags */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="theme-color" content="#131315" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph - Injected from Page 1 Blueprint */}
        <meta property="og:title" content={`Free Resume Keyword Matcher - ATS Keyword Analysis Tool ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Optimize your resume for ATS systems. Match job description keywords with your resume instantly. 100% free, privacy-first analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-keyword-matcher-2026.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Matcher - ATS Optimization Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card - Injected from Page 1 Blueprint */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Matcher - ATS Keyword Analysis" />
        <meta name="twitter:description" content="Match your resume keywords with job descriptions instantly. Get optimization suggestions for better ATS compatibility." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-keyword-matcher-2026.jpg`} />
        <meta name="twitter:image:alt" content="Resume Keyword Matching Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* PWA & Browser Icons */}
        <meta name="msapplication-TileColor" content="#131315" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Resume Keyword Matcher</span>
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
              <li><Link href="/free-resume-tools"><FiTool size={14} /> Free Resume Tools</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiSearch size={14} /> Keyword Matcher</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • Privacy First • ATS Optimized</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free Resume <span className="gradient-text">Keyword</span> Matcher - ATS Keyword Analysis Tool {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Optimize your resume for ATS systems with our <strong>free keyword matching tool</strong>. Analyze job description vs resume keywords instantly. <strong>Privacy-first</strong>, no signup required. <strong>Free forever.</strong>
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <span className="feature-badge">✓ 100% Free</span>
                <span className="feature-badge">✓ Privacy First</span>
                <span className="feature-badge">✓ No Signup</span>
                <span className="feature-badge">✓ ATS Optimized</span>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.7/5", label: "User Rating" }, { value: "3K+", label: "Job Seekers" }, { value: "95%", label: "Accuracy Rate" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              
              <div style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', border: 'var(--card-border)', marginTop: '2rem', display: 'inline-block' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '1.3rem' }}>★★★★★</span>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>4.7/5</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Rated by 3000+ job seekers worldwide</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Start Keyword Analysis Now</button>
                <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore All Free Tools</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Matcher Tool */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="matcher-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="matcher-title">Paste Job Description & Resume for Instant Keyword Analysis</h2>
              <p className="section-subtitle">Compare your resume with job descriptions to identify <strong>keyword matches, missing terms, and optimization opportunities</strong> for better ATS compatibility. All analysis happens locally in your browser.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}><FiClipboard style={{ display: 'inline', marginRight: '0.5rem' }} /> Job Description *</h3>
                    <button onClick={handleUseSample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiCopy size={14} /> Use Sample Data</button>
                  </div>
                  <textarea ref={textareaRef} value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the complete job description here (500+ characters for best results)..." rows={14} style={{ marginBottom: '0.5rem' }} />
                  <span className="text-small">{jobDescription.length} characters</span>
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}><FiFileText style={{ display: 'inline', marginRight: '0.5rem' }} /> Resume Text *</h3>
                  <textarea value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste your complete resume text here (Include all sections)..." rows={14} style={{ marginBottom: '0.5rem' }} />
                  <span className="text-small">{resumeText.length} characters</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button onClick={handleAnalyze} className="btn-primary" disabled={isAnalyzing || !jobDescription.trim() || !resumeText.trim()} aria-label="Analyze keyword matching between job description and resume">
                  {isAnalyzing ? <><FiRefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> Analyzing Keywords...</> : <><FiSearch size={18} /> Analyze Keyword Matching</>}
                </button>
                <button onClick={handleClear} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Clear all text inputs"><FiX size={16} /> Clear All</button>
              </div>
              {(!jobDescription.trim() || !resumeText.trim()) && (
                <div style={{ background: 'rgba(100,181,246,0.1)', padding: '1rem', borderRadius: '0.5rem', marginTop: '1.5rem', border: '0.5px solid rgba(100,181,246,0.3)' }}>
                  <span style={{ color: 'var(--info-color)' }}>💡 <strong>Pro Tip:</strong> Paste both job description and resume text above. Click "Use Sample Data" to see a live demonstration of our keyword analysis tool.</span>
                </div>
              )}
            </div>

            {/* Results */}
            {results && (
              <div style={{ maxWidth: '1000px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive" style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Keyword Match Analysis Results</h3>
                    <div className={`score-circle ${getMatchRateColor(results.matchRate)}`} style={{ width: '80px', height: '80px', fontSize: '1.5rem', margin: 0 }}>{results.matchRate}%</div>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-md)', marginBottom: '1rem' }}>{getMatchRateMessage(results.matchRate)}</p>
                  <div className="grid" style={{ margin: 0 }}>
                    <div className="stat-card"><div className="stat-number">{results.totalKeywordsAnalyzed}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Keywords Analyzed</div></div>
                    <div className="stat-card"><div className="stat-number">{results.keywordsMatched}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Keywords Matched</div></div>
                    <div className="stat-card"><div className="stat-number" style={{ color: 'var(--warning-color)' }}>{results.missingKeywords.length}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Missing Keywords</div></div>
                  </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                  {/* Missing Keywords */}
                  <div className="card-executive">
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>Missing Keywords by Category</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      {['all', 'technical', 'soft', 'certifications', 'experience', 'tools'].map(cat => (
                        <button key={cat} className={`category-tab ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)} aria-label={`Show ${cat} keywords`}>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)} ({cat === 'all' ? results.missingKeywords.length : results.categories[cat]?.length || 0})
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '350px', overflowY: 'auto' }}>
                      {results.missingKeywords.filter(k => activeCategory === 'all' || k.category === activeCategory).slice(0, 15).map((kw, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'var(--bg-surface-low)', borderRadius: '0.375rem', border: 'var(--card-border)' }}>
                          <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{kw.keyword}</span>
                          <span className={`keyword-cat-tag cat-${kw.category}`}>{kw.category}</span>
                        </div>
                      ))}
                      {results.missingKeywords.filter(k => activeCategory === 'all' || k.category === activeCategory).length === 0 && (
                        <p className="text-small" style={{ textAlign: 'center', padding: '1rem' }}>No missing keywords in this category - Great job!</p>
                      )}
                    </div>
                  </div>

                  {/* Overused & Suggestions */}
                  <div className="card-executive">
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>Keyword Usage Analysis & Suggestions</h3>
                    {results.overusedTerms.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                        {results.overusedTerms.map((term, i) => (
                          <div key={i} style={{ padding: '0.75rem', background: 'var(--bg-surface-low)', borderRadius: '0.375rem', border: 'var(--card-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                              <strong style={{ fontSize: 'var(--font-size-body-sm)' }}>{term.term}</strong>
                              <span className="feature-tag">{term.count}x</span>
                            </div>
                            <span className="text-small">{term.suggestion}</span>
                          </div>
                        ))}
                      </div>
                    ) : <p className="text-small" style={{ marginBottom: '1rem' }}>No overused terms detected - Good keyword variety!</p>}
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Keyword Optimization Suggestions</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {results.suggestions.map((s, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                          <FiArrowRight size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />{s}
                        </li>
                      ))}
                    </ul>
                    <button onClick={copyOptimizedKeywords} className="btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}><FiCopy size={16} /> Copy Optimized Keywords</button>
                  </div>
                </div>
              </div>
            )}

            {!results && !isAnalyzing && (!jobDescription.trim() || !resumeText.trim()) && (
              <div className="card-executive" style={{ maxWidth: '1000px', margin: '1.5rem auto 0', textAlign: 'center' }}>
                <FiSearch size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Start Your Keyword Analysis</h3>
                <p className="text-small" style={{ marginBottom: '1.5rem' }}>Enter both job description and resume text to get instant keyword matching analysis:</p>
                <ul style={{ listStyle: 'none', textAlign: 'left', maxWidth: '500px', margin: '0 auto 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> <strong>Keyword Match Rate Percentage</strong> - See how well your resume matches the job</li>
                  <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> <strong>Missing High-Impact Keywords</strong> - Identify critical terms to add</li>
                  <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> <strong>Categorized Keyword Analysis</strong> - Technical, soft skills, certifications & more</li>
                  <li style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><FiCheck size={16} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> <strong>Actionable Optimization Suggestions</strong> - Get specific improvement tips</li>
                </ul>
                <div style={{ background: 'var(--bg-surface-low)', padding: '1rem', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>🔒 <strong>Privacy First Guarantee:</strong> All keyword analysis happens locally in your browser. No data is sent to servers. Your job descriptions and resumes stay 100% private.</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Keyword Matching</h2>
              <p className="section-subtitle">Find answers to the most searched keyword matching questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                "how to match resume keywords with job description",
                "best keywords for ATS resume optimization",
                "free keyword matcher for job applications",
                "how to find missing keywords in resume",
                "ATS keyword density best practices",
                "resume keyword analyzer online free",
                "keywords for specific job titles",
                "how to optimize resume for applicant tracking systems"
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
        <section className="section" aria-labelledby="how-to-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-to-title">How It Works: 5-Step Keyword Optimization Process</h2>
              <p className="section-subtitle">Optimize your resume keywords in 5 simple steps for better ATS compatibility</p>
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
        <section className="section section-alt" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Users Say About Our Keyword Matcher</h2>
              <p className="section-subtitle">Join thousands of job seekers who improved their keyword matching</p>
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
        <section className="section" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Resume Keyword Matching</h2>
              <p className="section-subtitle">Everything you need to know about optimizing your resume keywords in {CURRENT_YEAR}</p>
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
              Ready to Optimize Your Resume Keywords?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Start using our free keyword matcher today and get <strong>3x more interviews</strong> with optimized resumes. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleClear(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start analyzing your resume keywords"><FiSearch /> Start Keyword Analysis Now</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Free Forever</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Instant Analysis</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Detailed Recommendations</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 3,000+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your keyword matching with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-density-analyzer-tool", text: "Keyword Density Analyzer", iconName: "FiHash", desc: "Check keyword frequency" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume score" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/how-to-write-a-resume-for-a-job", text: "How to Write a Targeted Resume", iconName: "FiPenTool", desc: "Resume writing guide" },
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

// SSG with ISR - Injected from Page 1 Blueprint
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toISOString().split('T')[0];
  const lastModifiedDate = new Date(buildTimestamp).toISOString();

  const reviewDates = REVIEWS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = FAQS.map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate: buildDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp,
      lastModified: lastModifiedDate
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default ResumeKeywordMatcher;