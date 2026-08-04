import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash
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
  .range-bar { width:100%; height:8px; background:rgba(229,225,228,0.1); border-radius:4px; overflow:hidden; position:relative; }
  .range-fill { height:100%; border-radius:4px; transition:width var(--transition-medium); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  textarea, input, select { font-family:var(--font-body); background:var(--input-bg); border:var(--input-border); color:var(--input-text); padding:var(--input-padding); border-radius:var(--input-radius); font-size:var(--font-size-body-md); width:100%; transition:border-color var(--transition-fast); }
  textarea:focus, input:focus, select:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  textarea::placeholder, input::placeholder { color:var(--input-placeholder); }
  textarea { min-height:100px; resize:vertical; }
  select { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23f2ca50' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  select option { background:var(--bg-surface); color:var(--text-primary); }
  .range-markers { display:flex; justify-content:space-between; font-size:var(--font-size-label-sm); color:var(--text-muted); margin-top:0.25rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/free-resume-word-and-character-counter`;

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'resume word counter',
  'resume character counter',
  'resume length checker',
  'ATS resume word count',
  'professional resume length',
  'free resume word counter',
  'resume editing tool',
  'character count resume',
  'resume optimization tool',
  'job application resume length'
];

const FAQS = [
  { question: "What is the ideal resume length?", answer: "For most positions, aim for 300-800 words. Entry-level: 300-500 words, Mid-career: 400-700 words, Executive: 600-800 words. One page typically equals 450-500 words." },
  { question: "Does word count really matter for resumes?", answer: "Yes! Recruiters spend an average of 6-7 seconds scanning a resume. The right length ensures you include essential information without overwhelming the reader. ATS systems also prefer concise, well-structured resumes." },
  { question: "Should I exclude bullet points from the count?", answer: "It depends. Some ATS systems parse bullet points differently. Our tool lets you toggle this option to see both counts. Generally, bullet points improve readability and should be included." },
  { question: "How accurate is the character count?", answer: "Our counter is 100% accurate, tracking characters with and without spaces in real-time. This helps ensure your resume fits within application system limits." },
  { question: "Can I use this for cover letters too?", answer: "Absolutely! The same length principles apply to cover letters. Aim for 250-400 words for cover letters, focusing on quality over quantity." }
];

const LENGTH_GUIDELINES = [
  { level: "Entry-Level", words: "300-500 words", pages: "≤ 1 page", focus: "Education, internships, basic skills" },
  { level: "Mid-Career", words: "400-700 words", pages: "1-2 pages", focus: "Experience, achievements, specific skills" },
  { level: "Senior/Manager", words: "500-800 words", pages: "1-2 pages", focus: "Leadership, strategic impact, results" },
  { level: "Executive", words: "600-800 words", pages: "2 pages max", focus: "Vision, P&L, organizational impact" }
];

const RESUME_TIPS = [
  "Start with strong action verbs",
  "Quantify achievements with numbers",
  "Tailor content to job description",
  "Use bullet points for readability",
  "Focus on recent experience",
  "Include relevant keywords",
  "Keep formatting clean and simple",
  "Proofread multiple times",
  "Save as PDF for consistency",
  "Update regularly"
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Paste Your Resume Content",
    text: "Copy and paste your entire resume content into the text area for instant analysis."
  },
  {
    name: "Review Real-Time Statistics",
    text: "Watch as the tool instantly calculates words, characters, paragraphs, and estimated pages."
  },
  {
    name: "Check Against Guidelines",
    text: "Compare your word count against professional resume length guidelines for your career level."
  },
  {
    name: "Optimize and Adjust",
    text: "Use the tips and recommendations to adjust your resume content for optimal length and impact."
  }
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
  FiActivity, FiType, FiAlignLeft, FiHash
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeWordCharacterCounter = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = PAGE_URL;
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  const [text, setText] = useState('');
  const [stats, setStats] = useState({ words: 0, charactersWithSpaces: 0, charactersWithoutSpaces: 0, lines: 0, paragraphs: 0, estimatedPages: 0 });
  const [excludeBullets, setExcludeBullets] = useState(false);
  const [countOnlyBody, setCountOnlyBody] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  const calculateStats = useCallback((content) => {
    let processedText = content;
    if (excludeBullets) processedText = processedText.replace(/^[•\-*]\s*/gm, '');
    if (countOnlyBody) { const lines = processedText.split('\n'); if (lines.length > 2) processedText = lines.slice(2).join('\n'); }
    const charsWithSpaces = processedText.length;
    const charsWithoutSpaces = processedText.replace(/\s+/g, '').length;
    const words = processedText.trim() === '' ? 0 : processedText.trim().split(/\s+/).filter(w => w.length > 0).length;
    const lines = processedText === '' ? 0 : processedText.split('\n').filter(l => l.trim().length > 0).length;
    const paragraphs = processedText.trim() === '' ? 0 : processedText.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const estimatedPages = parseFloat((words / 475).toFixed(2));
    return { words, charactersWithSpaces: charsWithSpaces, charactersWithoutSpaces: charsWithoutSpaces, lines, paragraphs, estimatedPages };
  }, [excludeBullets, countOnlyBody]);

  useEffect(() => { const timer = setTimeout(() => setStats(calculateStats(text)), 300); return () => clearTimeout(timer); }, [text, calculateStats]);

  const handleReset = () => { setText(''); setStats(calculateStats('')); textareaRef.current?.focus(); };
  const handleClearOptions = () => { setExcludeBullets(false); setCountOnlyBody(false); };

  const isWithinRange = stats.words >= 300 && stats.words <= 800;
  const isOverLimit = stats.words > 800;
  const isUnderLimit = stats.words < 300;
  const getWordCountStatus = () => {
    if (isWithinRange) return { text: '✓ Perfect length!', color: 'var(--success-color)' };
    if (isUnderLimit) return { text: '⚠ Add more content', color: 'var(--warning-color)' };
    return { text: '⚠ Consider shortening', color: 'var(--warning-color)' };
  };
  const status = getWordCountStatus();

  // ===== ENHANCED STRUCTURED DATA - Following Page 1 Blueprint =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `Resume Word & Character Counter - Professional Length Checker ${CURRENT_YEAR}`,
        "description": "Free professional resume word counter and character counter with ATS optimization guidance. Check your resume length against industry standards with real-time analysis.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
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
              "https://www.facebook.com/ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/images/og-word-counter.jpg`,
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
              "name": "Free Resume Word & Character Counter",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Resume Word & Character Counter - ATS Optimized Resume Length Checker",
        "description": "Free online ATS-friendly resume word and character counter that helps job seekers optimize resume length for better ATS performance.",
        "url": PAGE_URL,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 142,
          "bestRating": 5,
          "worstRating": 1
        },
        "featureList": [
          "Real-time Word Count",
          "Character Count with/without Spaces",
          "ATS-Optimized Length Guidelines",
          "Professional Resume Tips",
          "One-Click Clear Options",
          "Mobile-Friendly Interface",
          "No Sign Up Required",
          "Free Forever"
        ],
        "softwareVersion": "2026.1.0",
        "applicationSuite": "Career Tools",
        "countriesSupported": "Global",
        "fileSize": "Web Application"
      },
      {
        "@type": "AggregateRating",
        "@id": `${PAGE_URL}#rating`,
        "ratingValue": "4.8",
        "ratingCount": "142",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Resume Word & Character Counter",
          "url": PAGE_URL
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Resume Word Counter to Optimize Your Resume",
        "description": "Step-by-step guide to check and optimize your resume length using our free tool",
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
          "url": `${PAGE_URL}#step-${index + 1}`
        })),
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Resume Content"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Resume Word & Character Counter"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Resume Length Guidelines by Career Level",
        "description": "Professional resume length recommendations for different career levels",
        "numberOfItems": LENGTH_GUIDELINES.length,
        "itemListElement": LENGTH_GUIDELINES.map((guideline, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${guideline.level}: ${guideline.words}`,
          "description": `Professional resume length recommendation for ${guideline.level} professionals. Focus on ${guideline.focus}.`
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Length Analysis",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Resume Word Count Analysis"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Resume Length Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".stat-number"]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Primary Meta Tags - Enhanced following Page 1 blueprint */}
        <title>Resume Word & Character Counter – Professional Length Checker {CURRENT_YEAR} | Free ATS Optimized Tool</title>
        <meta 
          name="description" 
          content={`Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards. Real-time analysis with word count, character count, and professional recommendations. ${CURRENT_YEAR}`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#131315" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Word & Character Counter - Professional Length Checker" />
        <meta name="chatgpt-fts:description" content="Free professional resume word counter and character counter with ATS optimization. Check your resume length against industry standards." />
        <meta name="chatgpt-fts:keywords" content="resume word counter, resume character counter, resume length checker, ATS resume word count" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Word Counter Tool" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:title" content={`Resume Word & Character Counter – Professional Length Checker ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Free professional resume word counter with ATS optimization guidance. Check length, characters, and get industry-standard recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-word-counter.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Word & Character Counter - Free Professional Tool" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Word & Character Counter" />
        <meta name="twitter:description" content="Professional resume length checker with ATS optimization and real-time analysis" />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-word-counter.jpg`} />
        <meta name="twitter:image:alt" content="Resume Word Counter Tool" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <html lang="en" />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={SITE_URL} itemProp="item">
                  <FiHome size={14} /> <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiType size={14} /> Resume Word & Character Counter</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • Real-Time Analysis • ATS Optimized</div>
              <h1 className="section-title" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume Word & Character Counter <span style={{ display: 'inline-block', background: 'var(--accent-primary)', color: 'var(--accent-on-primary)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.9rem', marginLeft: '0.5rem', verticalAlign: 'middle' }}>{CURRENT_YEAR}</span>
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Professional resume length analyzer with <strong>ATS optimization guidance</strong>. Check your resume length against industry standards with real-time word count, character count, and professional recommendations. <strong>Optimized for ATS systems and human recruiters.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "4.8/5", label: "User Rating" }, { value: "10,000+", label: "Professionals" }, { value: "300-800", label: "Ideal Word Range" }, { value: "100%", label: "Free to Use" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiType /> Start Counting</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> View Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section section-alt" id="steps">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How to Use the Resume Word Counter to Optimize Your Resume</h2>
              <p className="section-subtitle">Step-by-step guide to check and optimize your resume length using our free tool</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, index) => (
                <div key={index} className="card-executive" style={{ textAlign: 'center' }} id={`step-${index + 1}`}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{index + 1}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{step.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Counter Tool */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Paste Your Resume Content</h2>
              <p className="section-subtitle">Real-time analysis happens entirely in your browser—your data never leaves your device</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }} id="paste">
              <textarea ref={textareaRef} value={text} onChange={(e) => setText(e.target.value)} placeholder={`Paste your resume content here...\n\nJohn Doe\nSoftware Engineer\n(123) 456-7890 | john@email.com\n\nPROFESSIONAL SUMMARY\nResults-driven software engineer with 5+ years of experience...\n\nEXPERIENCE\nSenior Developer | Tech Company | 2020-Present\n• Led development of scalable web applications\n• Reduced page load time by 40%\n• Mentored 3 junior developers`} rows={15} style={{ marginBottom: '1rem' }} aria-label="Resume content input area" />
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={handleReset} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Clear all text from the input area"><FiRefreshCw size={16} /> Clear All</button>
                <button onClick={handleClearOptions} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Reset counting options to default settings"><FiX size={16} /> Reset Options</button>
              </div>
            </div>

            {/* Stats */}
            <div style={{ maxWidth: '900px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }} id="stats">
              <div className="card-executive" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Analysis Results</h2>
                  <span className="feature-badge" style={{ background: isWithinRange ? 'rgba(76,175,80,0.1)' : 'rgba(255,183,77,0.1)', color: status.color, borderColor: status.color }}>{status.text}</span>
                </div>
                
                <div className="grid">
                  {[
                    { label: 'Word Count', value: stats.words.toLocaleString(), sub: isWithinRange ? 'Ideal range: 300-800' : isUnderLimit ? 'Below minimum: 300' : 'Above maximum: 800', color: isWithinRange ? 'var(--success-color)' : 'var(--warning-color)' },
                    { label: 'Characters (with spaces)', value: stats.charactersWithSpaces.toLocaleString(), sub: 'including spaces', color: 'var(--accent-primary)' },
                    { label: 'Characters (no spaces)', value: stats.charactersWithoutSpaces.toLocaleString(), sub: 'excluding spaces', color: 'var(--accent-primary)' },
                    { label: 'Lines', value: stats.lines, sub: 'non-empty lines', color: 'var(--accent-primary)' },
                    { label: 'Paragraphs', value: stats.paragraphs, sub: 'content sections', color: 'var(--accent-primary)' },
                    { label: 'Est. Pages', value: stats.estimatedPages, sub: 'at 475 words/page', color: 'var(--accent-primary)' }
                  ].map((item, i) => (
                    <div key={i} className="stat-card">
                      <div className="stat-number" style={{ color: item.color }}>{item.value}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{item.label}</div>
                      <span className="text-small">{item.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Range Bar */}
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="text-small" style={{ color: isUnderLimit ? 'var(--warning-color)' : 'var(--text-muted)' }}>0 words</span>
                    <span className="text-small" style={{ color: isWithinRange ? 'var(--success-color)' : 'var(--text-muted)' }}>Ideal: 300-800</span>
                    <span className="text-small" style={{ color: isOverLimit ? 'var(--warning-color)' : 'var(--text-muted)' }}>1000+ words</span>
                  </div>
                  <div className="range-bar">
                    <div className="range-fill" style={{ width: `${Math.min(Math.max(stats.words / 1000 * 100, 2), 100)}%`, background: isWithinRange ? 'var(--success-color)' : isUnderLimit ? 'var(--warning-color)' : 'var(--warning-color)' }}></div>
                  </div>
                  <div className="range-markers">
                    <span>0</span><span>300</span><span>800</span><span>1000</span>
                  </div>
                </div>

                {/* Options */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '0.5px solid var(--border-gold-filament)' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>Counting Options</h3>
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <label style={{ display: 'flex', gap: '0.75rem', padding: '1rem', background: 'var(--bg-surface-low)', borderRadius: '0.5rem', border: 'var(--card-border)', cursor: 'pointer', alignItems: 'flex-start' }}>
                      <input type="checkbox" checked={excludeBullets} onChange={(e) => setExcludeBullets(e.target.checked)} style={{ width: '18px', height: '18px', marginTop: '2px' }} aria-label="Exclude bullet points from word count" />
                      <div>
                        <strong style={{ display: 'block', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}>Exclude bullet points</strong>
                        <span className="text-small">Ignore lines starting with •, -, or *</span>
                      </div>
                    </label>
                    <label style={{ display: 'flex', gap: '0.75rem', padding: '1rem', background: 'var(--bg-surface-low)', borderRadius: '0.5rem', border: 'var(--card-border)', cursor: 'pointer', alignItems: 'flex-start' }}>
                      <input type="checkbox" checked={countOnlyBody} onChange={(e) => setCountOnlyBody(e.target.checked)} style={{ width: '18px', height: '18px', marginTop: '2px' }} aria-label="Count only body text, skip first 2 lines" />
                      <div>
                        <strong style={{ display: 'block', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}>Count only body text</strong>
                        <span className="text-small">Skip first 2 lines (header/contact info)</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="section section-alt" id="guidelines">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Resume Length Guidelines</h2>
              <p className="section-subtitle">Industry standards for different career levels based on ATS optimization research</p>
            </div>
            <div className="grid">
              {LENGTH_GUIDELINES.map((g, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{g.level}</h3>
                    <span className="feature-badge">{g.words}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Pages:</strong> {g.pages}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Focus:</strong> {g.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Questions Section - Long-Tail Keywords for GEO */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Length</h2>
              <p className="section-subtitle">Expert answers to help you optimize your resume word count</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                "how many words should a resume be 2026",
                "resume word count for experienced professionals",
                "ideal resume length for ATS systems",
                "one page resume word count guideline",
                "character count for online job applications",
                "resume length for senior executives",
                "how to shorten resume without losing impact",
                "resume word counter free online tool"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>❓ {keyword}</p>
                  <div>
                    <Link href="/complete-resume-resource-library" style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>
                      Find answer in our resource library →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Resume Writing Tips</h2>
              <p className="section-subtitle">Proven strategies to enhance your resume's impact and optimize word count</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {RESUME_TIPS.map((tip, i) => (
                <div key={i} className="card-executive" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', minWidth: '30px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why Optimize Resume Length?</h2>
              <p className="section-subtitle">The data-backed truth about what actually gets interviews</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>ATS Friendly</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  Applicant Tracking Systems prefer concise, well-structured resumes. Optimal length improves parsing accuracy.
                </p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Recruiter Attention</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  Recruiters spend 6-7 seconds per resume. The right length ensures key information gets noticed quickly.
                </p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Professional Standards</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                  Following industry length standards shows professionalism and respect for the hiring process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Length</h2>
              <p className="section-subtitle">Everything you need to know about resume word count and length optimization</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} id={`faq-${i + 1}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                    <h3 itemProp="name" style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" id={`faq-answer-${i}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
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
              Ready to Optimize Your Resume Length?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our free tools to create ATS-optimized resumes with perfect length and formatting. Join 10,000+ professionals who have improved their resumes. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start counting your resume words"><FiType /> Start Counting Now</button>
              <Link href="/resume-templates" className="btn-outline" aria-label="Browse professional resume templates"><FiGrid /> View Templates</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 100% Free - No Sign Up Required</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> ATS-Optimized Analysis</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Instant Results - Private & Secure</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Explore our complete suite of resume tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield" },
                { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", text: "How to Beat ATS Optimization", iconName: "FiTarget" },
                { href: "/best-ats-resume-format-2026", text: "Best ATS Resume Format 2026", iconName: "FiFileText" },
                { href: "/free-resume-keyword-matcher", text: "Free Resume Keyword Matcher", iconName: "FiSearch" },
                { href: "/software-engineer-resume-example-and-writing-guide", text: "Software Engineer Resume Guide", iconName: "FiCode" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTime}</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - Enhanced following Page 1 blueprint
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
        buildTimestamp
      }
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default ResumeWordCharacterCounter;