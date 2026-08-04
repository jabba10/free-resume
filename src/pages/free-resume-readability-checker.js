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
  FiActivity, FiType, FiAlignLeft
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
  .guideline-card { background:var(--card-bg); border-radius:0.5rem; overflow:hidden; border:var(--card-border); }
  .guideline-header { background:var(--bg-surface-high); padding:1rem 1.25rem; border-bottom:0.5px solid var(--border-gold-filament); }
  .guideline-body { padding:1.25rem; }
  .tip-card { background:var(--card-bg); border-radius:0.5rem; padding:1rem 1.25rem; border:var(--card-border); display:flex; align-items:center; gap:0.75rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

// SEO Keywords - Injected from Page 1 Blueprint
const SEO_KEYWORDS = [
  'resume readability checker',
  'free resume readability analyzer',
  'ATS readability analysis',
  'Flesch Kincaid resume test',
  'resume readability score checker',
  'professional resume writing analysis',
  'resume optimization tool free',
  'readability analysis tool 2025',
  'resume editing software free',
  'job application readability checker',
  'resume quality checker online',
  'ATS friendly readability score',
  'resume scanning optimization',
  'readability metrics for resumes',
  'resume writing best practices tool'
];

const FAQS = [
  { question: "What is resume readability and why does it matter?", answer: "Readability refers to how easily your resume can be read and understood. It matters because recruiters spend only 6-7 seconds scanning resumes. Good readability ensures your key qualifications stand out immediately to both humans and ATS systems." },
  { question: "What is the ideal Flesch-Kincaid Grade Level for resumes?", answer: "Aim for a grade level between 8-10. This makes your resume accessible to most readers while maintaining professionalism. Higher levels (11+) can sound too academic, while lower levels (below 8) might appear too simplistic." },
  { question: "How do bullet points affect readability?", answer: "Properly formatted bullet points improve readability by 40%. They break up text, highlight achievements, and make information scannable. Our tool analyzes bullet point usage and suggests optimal formatting for ATS compatibility." },
  { question: "What's the ideal average sentence length for resumes?", answer: "15-20 words per sentence is optimal. Shorter sentences (under 10 words) can feel choppy, while longer sentences (over 25 words) become difficult to parse quickly. Mix sentence lengths for natural flow." },
  { question: "Does passive voice really hurt my resume?", answer: "Yes! Active voice is 30% more effective. Instead of 'Responsibilities were managed by me,' use 'Managed responsibilities.' Active voice creates stronger, more confident statements that emphasize your agency and achievements." },
  { question: "How does readability affect ATS screening?", answer: "ATS systems parse readable content more accurately. Optimal sentence structure, clear formatting, and appropriate complexity scores increase your resume's chances of passing automated screening and reaching human recruiters." }
];

const READABILITY_GUIDELINES = [
  { metric: "Flesch-Kincaid Grade", ideal: "8-10", description: "Represents U.S. grade level needed to understand text", tip: "Aim for 9th grade level - professional but accessible" },
  { metric: "Average Sentence Length", ideal: "15-20 words", description: "Optimal words per sentence for scannability", tip: "Vary sentence length for natural rhythm" },
  { metric: "Reading Ease Score", ideal: "60-70", description: "Higher scores = easier to read (0-100 scale)", tip: "Balance professionalism with accessibility" },
  { metric: "Passive Voice", ideal: "< 10%", description: "Percentage of sentences using passive voice", tip: "Use active voice for stronger impact" }
];

const WRITING_TIPS = [
  "Start sentences with action verbs",
  "Use numbers to quantify achievements",
  "Keep paragraphs to 3-4 lines maximum",
  "Use consistent verb tenses throughout",
  "Avoid jargon and buzzwords",
  "Include industry-specific keywords",
  "Proofread for spelling and grammar",
  "Use white space effectively",
  "Focus on achievements, not duties",
  "Tailor language to target role"
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
  FiActivity, FiType, FiAlignLeft
};

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================
function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const syllables = word.match(/[aeiouy]{1,2}/g);
  return syllables ? syllables.length : 1;
}

function calculateReadability(content) {
  if (!content.trim()) {
    return { fleschKincaidGrade: 0, fleschReadingEase: 0, averageSentenceLength: 0, sentenceCount: 0, wordCount: 0, characterCount: 0, syllableCount: 0, passiveSentences: 0, bulletPoints: 0, complexWords: 0 };
  }
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = content.trim().split(/\s+/).filter(w => w.length > 0);
  const characters = content.replace(/\s+/g, '').length;
  const bulletPoints = (content.match(/^[•\-*]\s+/gm) || []).length;
  let totalSyllables = 0;
  let complexWords = 0;
  words.forEach(word => {
    const syllables = countSyllables(word);
    totalSyllables += syllables;
    if (syllables >= 3) complexWords++;
  });
  const passiveSentences = sentences.filter(sentence =>
    /\b(am|is|are|was|were|be|been|being)\b\s+\w+ed\b/i.test(sentence) ||
    /\b(has|have|had)\s+been\s+\w+ed\b/i.test(sentence)
  ).length;
  const sentenceCount = sentences.length;
  const wordCount = words.length;
  const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0;
  let fleschReadingEase = 0;
  let fleschKincaidGrade = 0;
  if (sentenceCount > 0 && wordCount > 0) {
    const ASL = wordCount / sentenceCount;
    const ASW = totalSyllables / wordCount;
    fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * ASL) - (84.6 * ASW)));
    fleschKincaidGrade = Math.max(1, Math.min(20, (0.39 * ASL) + (11.8 * ASW) - 15.59));
  }
  return {
    fleschKincaidGrade: parseFloat(fleschKincaidGrade.toFixed(1)),
    fleschReadingEase: parseFloat(fleschReadingEase.toFixed(1)),
    averageSentenceLength: parseFloat(averageSentenceLength.toFixed(1)),
    sentenceCount, wordCount, characterCount: characters, syllableCount: totalSyllables,
    passiveSentences, bulletPoints, complexWords
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeReadabilityChecker = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = `${SITE_URL}/free-resume-readability-checker`;
  const pageTitle = `Free Resume Readability Checker – Professional Flesch-Kincaid Analysis & ATS Optimization ${CURRENT_YEAR}`;
  const pageDescription = `Analyze and improve your resume's readability with our free online tool. Get Flesch-Kincaid scores, sentence analysis, ATS optimization tips, and actionable suggestions. No sign up required.`;

  const [text, setText] = useState('');
  const [readabilityStats, setReadabilityStats] = useState(calculateReadability(''));
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => { setReadabilityStats(calculateReadability(text)); }, 300);
    return () => clearTimeout(timer);
  }, [text]);

  const handleReset = () => { setText(''); setReadabilityStats(calculateReadability('')); textareaRef.current?.focus(); };

  const getStatus = (type, value) => {
    if (value === 0) return { status: 'neutral', text: 'No data' };
    switch(type) {
      case 'grade':
        if (value >= 8 && value <= 10) return { status: 'good', text: 'Ideal range' };
        return { status: 'warning', text: value < 8 ? 'Too simple' : 'Too complex' };
      case 'ease':
        if (value >= 60 && value <= 70) return { status: 'good', text: 'Optimal' };
        return { status: 'warning', text: value < 60 ? 'Hard to read' : 'Too simple' };
      case 'length':
        if (value >= 15 && value <= 20) return { status: 'good', text: 'Perfect' };
        return { status: 'warning', text: value < 15 ? 'Too short' : 'Too long' };
      case 'passive':
        const pct = readabilityStats.sentenceCount > 0 ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 : 0;
        if (pct < 10) return { status: 'good', text: 'Good' };
        return { status: 'warning', text: 'Reduce passive voice' };
      default: return { status: 'neutral', text: 'N/A' };
    }
  };

  const gradeStatus = getStatus('grade', readabilityStats.fleschKincaidGrade);
  const easeStatus = getStatus('ease', readabilityStats.fleschReadingEase);
  const lengthStatus = getStatus('length', readabilityStats.averageSentenceLength);
  const passiveStatus = getStatus('passive', 0);

  const calculateOverallScore = () => {
    if (readabilityStats.wordCount === 0) return 0;
    let score = 0;
    if (readabilityStats.fleschKincaidGrade >= 8 && readabilityStats.fleschKincaidGrade <= 10) score += 30;
    else if (readabilityStats.fleschKincaidGrade >= 7 && readabilityStats.fleschKincaidGrade <= 11) score += 20;
    else if (readabilityStats.fleschKincaidGrade >= 6 && readabilityStats.fleschKincaidGrade <= 12) score += 10;
    if (readabilityStats.fleschReadingEase >= 60 && readabilityStats.fleschReadingEase <= 70) score += 30;
    else if (readabilityStats.fleschReadingEase >= 50 && readabilityStats.fleschReadingEase <= 80) score += 20;
    else if (readabilityStats.fleschReadingEase >= 40 && readabilityStats.fleschReadingEase <= 90) score += 10;
    if (readabilityStats.averageSentenceLength >= 15 && readabilityStats.averageSentenceLength <= 20) score += 20;
    else if (readabilityStats.averageSentenceLength >= 12 && readabilityStats.averageSentenceLength <= 25) score += 10;
    const passivePercent = readabilityStats.sentenceCount > 0 ? (readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100 : 0;
    if (passivePercent < 10) score += 20;
    else if (passivePercent < 20) score += 10;
    return Math.min(100, Math.round(score));
  };

  const overallScore = calculateOverallScore();
  const getScoreColor = (s) => { if (s >= 80) return 'score-high'; if (s >= 60) return 'score-medium'; return 'score-low'; };

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Resume Readability Checker Tool",
        "description": "Free professional resume readability analyzer with Flesch-Kincaid scoring, ATS optimization, and writing quality assessment",
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
          "ratingCount": "325",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Flesch-Kincaid Analysis",
          "Reading Ease Scoring",
          "Sentence Analysis",
          "ATS Optimization Tips",
          "Passive Voice Detection",
          "Bullet Point Analysis",
          "Free Forever"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`
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
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Free Resume Readability Checker - Flesch-Kincaid Analysis & ATS Optimization" />
        <meta name="chatgpt-fts:description" content="Analyze and improve your resume's readability with our free online tool. Get Flesch-Kincaid scores, sentence analysis, and actionable suggestions." />
        <meta name="chatgpt-fts:keywords" content="resume readability, Flesch-Kincaid, ATS optimization, resume analysis" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        
        {/* Freshness Meta Tags */}
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="theme-color" content="#131315" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph - Injected from Page 1 Blueprint */}
        <meta property="og:title" content="Free Resume Readability Checker – Professional Flesch-Kincaid Analysis" />
        <meta property="og:description" content="Analyze and improve your resume's readability. Get Flesch-Kincaid scores, sentence analysis, ATS optimization tips. Free online tool." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card - Injected from Page 1 Blueprint */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Readability Checker - ATS & Flesch-Kincaid Analysis" />
        <meta name="twitter:description" content="Professional readability analysis with Flesch-Kincaid scoring and ATS optimization for your resume." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Readability Checker</span>
        <span itemProp="year">{CURRENT_YEAR}</span>
        <span itemProp="last-updated">{safeCurrentDate}</span>
        <span itemProp="build-timestamp">{buildTimestamp}</span>
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/"><FiHome size={14} /> Home</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><Link href="/free-resume-tools"><FiTool size={14} /> Resume Tools</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiEye size={14} /> Readability Checker</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • Flesch-Kincaid • ATS Optimized</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume <span className="gradient-text">Readability</span> Checker – Professional Flesch-Kincaid Analysis & ATS Optimization {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Professional Flesch-Kincaid analysis with <strong>ATS optimization guidance</strong>. Analyze and improve your resume's readability with comprehensive metrics, sentence analysis, and actionable suggestions. <strong>Free forever.</strong>
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <span className="feature-badge">✓ Free Forever</span>
                <span className="feature-badge">✓ No Sign Up Required</span>
                <span className="feature-badge">✓ ATS Optimized</span>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '0.5rem', border: 'var(--card-border)', marginBottom: '2rem', display: 'inline-block' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '1.3rem' }}>★★★★★</span>
                  <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>4.8/5</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Trusted by 12,500+ job seekers</span>
                </div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.8/5", label: "User Rating" }, { value: "12K+", label: "Job Seekers" }, { value: "6", label: "Metrics Analyzed" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiEye /> Analyze Your Resume Readability</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse ATS Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checker Tool */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="checker-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="checker-title">Analyze Your Resume Readability</h2>
              <p className="section-subtitle">Paste your resume content below for comprehensive readability analysis. Our tool calculates Flesch-Kincaid scores, sentence metrics, and provides actionable improvement suggestions.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <textarea ref={textareaRef} value={text} onChange={(e) => setText(e.target.value)} placeholder={`Paste your resume content here for free readability analysis...\n\nExample:\nMARKETING MANAGER\nABC Corporation | 2020-Present\n\n• Increased social media engagement by 150% through targeted campaign strategies\n• Managed $500K annual marketing budget, achieving 25% ROI improvement\n• Led cross-functional teams to launch 3 successful product campaigns\n\nSKILLS\nDigital Marketing | SEO Optimization | Team Leadership | Budget Management`} rows={15} style={{ marginBottom: '1rem' }} aria-label="Resume text input for readability analysis" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button onClick={handleReset} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Clear all text and reset analysis"><FiRefreshCw size={16} /> Clear All Text</button>
                <span className="text-small">{readabilityStats.wordCount} words • {readabilityStats.sentenceCount} sentences • {readabilityStats.characterCount} characters</span>
              </div>
            </div>

            {/* Results */}
            {text.trim() && (
              <div style={{ maxWidth: '900px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive" style={{ marginBottom: '1.5rem' }}>
                  <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-title">Overall Readability Assessment</h2>
                    <p className="section-subtitle">Based on Flesch-Kincaid, sentence analysis, and writing quality metrics</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div className={`score-circle ${getScoreColor(overallScore)}`} aria-label={`Overall readability score: ${overallScore} out of 100`}>{overallScore}/100</div>
                    <div className="grid" style={{ flex: 1, minWidth: '280px', margin: 0 }}>
                      <div className="stat-card">
                        <div className="stat-number" style={{ color: gradeStatus.status === 'good' ? 'var(--success-color)' : 'var(--warning-color)' }}>{readabilityStats.fleschKincaidGrade}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Flesch-Kincaid Grade ({gradeStatus.text})</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number" style={{ color: easeStatus.status === 'good' ? 'var(--success-color)' : 'var(--warning-color)' }}>{readabilityStats.fleschReadingEase}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Reading Ease ({easeStatus.text})</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number" style={{ color: lengthStatus.status === 'good' ? 'var(--success-color)' : 'var(--warning-color)' }}>{readabilityStats.averageSentenceLength}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Avg. Words/Sentence ({lengthStatus.text})</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number" style={{ color: passiveStatus.status === 'good' ? 'var(--success-color)' : 'var(--warning-color)' }}>
                          {readabilityStats.sentenceCount > 0 ? `${((readabilityStats.passiveSentences / readabilityStats.sentenceCount) * 100).toFixed(0)}%` : '0%'}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Passive Voice ({passiveStatus.text})</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div className="feature-badge" style={{ background: 'rgba(76,175,80,0.1)', color: 'var(--success-color)', border: '0.5px solid rgba(76,175,80,0.3)' }}>80-100: Excellent</div>
                    <div className="feature-badge" style={{ background: 'rgba(255,152,0,0.1)', color: 'var(--warning-color)', border: '0.5px solid rgba(255,152,0,0.3)' }}>60-79: Good</div>
                    <div className="feature-badge" style={{ background: 'rgba(255,180,171,0.1)', color: 'var(--error-color)', border: '0.5px solid rgba(255,180,171,0.3)' }}>0-59: Needs Improvement</div>
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="grid">
                  <div className="card-executive" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Bullet Points</h3>
                    <div className="stat-number">{readabilityStats.bulletPoints}</div>
                    <p className="text-small">{readabilityStats.bulletPoints > 5 ? 'Good usage of bullet points' : 'Consider adding more bullet points'}</p>
                  </div>
                  <div className="card-executive" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Complex Words</h3>
                    <div className="stat-number">{readabilityStats.complexWords}</div>
                    <p className="text-small">{readabilityStats.complexWords < readabilityStats.wordCount * 0.1 ? 'Good balance of vocabulary' : 'Consider simplifying language'}</p>
                  </div>
                  <div className="card-executive" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Total Syllables</h3>
                    <div className="stat-number">{readabilityStats.syllableCount}</div>
                    <p className="text-small">Lower syllable count = easier reading</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Guidelines */}
        <section className="section" aria-labelledby="guidelines-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="guidelines-title">Professional Readability Guidelines</h2>
              <p className="section-subtitle">Industry standards for optimal resume readability based on ATS and recruiter research</p>
            </div>
            <div className="grid">
              {READABILITY_GUIDELINES.map((g, i) => (
                <div key={i} className="guideline-card">
                  <div className="guideline-header">
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, color: 'var(--accent-primary)' }}>{g.metric}</h3>
                    <span className="text-small">Ideal: {g.ideal}</span>
                  </div>
                  <div className="guideline-body">
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{g.description}</p>
                    <div style={{ background: 'var(--bg-surface-low)', padding: '0.75rem', borderRadius: '0.375rem', borderLeft: '3px solid var(--accent-primary)' }}>
                      <strong style={{ fontSize: 'var(--font-size-body-sm)' }}>Tip:</strong> <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{g.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="section section-alt" aria-labelledby="tips-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="tips-title">Actionable Improvement Tips for Better Readability</h2>
              <p className="section-subtitle">Proven strategies to enhance your resume's readability and impact</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {WRITING_TIPS.map((tip, i) => (
                <div key={i} className="tip-card">
                  <span style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-body-sm)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Resume Readability</h2>
              <p className="section-subtitle">Everything you need to know about resume readability and ATS optimization in {CURRENT_YEAR}</p>
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

        {/* Benefits Section */}
        <section className="section section-alt" aria-labelledby="benefits-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="benefits-title">Why Readability Matters for Your Resume</h2>
              <p className="section-subtitle">Improving readability boosts your chances with both ATS systems and human recruiters</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>ATS Optimization</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Applicant Tracking Systems parse readable content more accurately. Optimal sentence structure and word choice improve your resume's chances of passing automated screening.</p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Recruiter Attention</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>With only 6-7 seconds per resume scan, clear, readable content ensures your key qualifications are immediately apparent to busy recruiters and hiring managers.</p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Professional Impact</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Well-written, readable resumes demonstrate communication skills and attention to detail—qualities valued in any professional role.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-title">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }} id="cta-title">
              Ready to Perfect Your Resume Readability?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 12,500+ professionals who improved their resume readability with our free analysis tool. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiEye /> Analyze Readability Now</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Completely Free</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> ATS Optimized</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Professional Results</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 12,500+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your readability check with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume score" },
                { href: "/free-resume-formatting-checker", text: "Formatting Checker", iconName: "FiLayout", desc: "Layout & spacing analysis" },
                { href: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds", text: "Professional Summary Guide", iconName: "FiFileText", desc: "Hook recruiters fast" },
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
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp,
        pageType: 'tool',
        toolName: 'Resume Readability Checker'
      },
      buildTimestamp,
      lastModified: lastModifiedDate
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default ResumeReadabilityChecker;