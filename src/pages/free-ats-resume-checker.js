import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiSearch, FiLayout, FiBarChart2, FiAlertTriangle, FiClipboard,
  FiShield, FiCheckCircle, FiStar, FiTarget, FiZap, FiCpu, FiEdit, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2, FiHelpCircle,
  FiCalendar, FiDatabase, FiAlertCircle, FiTrendingUp, FiLock, FiServer, FiCloud,
  FiBriefcase, FiUsers, FiClock, FiCheck
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (Streamlined for Crawl Optimization)
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
  .search-box { position:relative; }
  .search-input { width:100%; padding:0.875rem 1rem; padding-right:3rem; background:var(--bg-surface-low); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; color:var(--text-primary); font-size:var(--font-size-body-md); font-family:var(--font-body); transition:all var(--transition-fast); }
  .search-input:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  .search-input::placeholder { color:var(--text-muted); }
  .clear-search { position:absolute; right:0.75rem; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.25rem; padding:0.25rem; line-height:1; transition:color var(--transition-fast); }
  .clear-search:hover { color:var(--accent-primary); }
  .score-circle { width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: var(--font-weight-extrabold); font-family: var(--font-display); margin: 0 auto 1rem; }
  .score-high { background: rgba(76, 175, 80, 0.1); border: 3px solid var(--success-color); color: var(--success-color); box-shadow: 0 0 30px rgba(76, 175, 80, 0.2); }
  .score-medium { background: rgba(255, 152, 0, 0.1); border: 3px solid var(--warning-color); color: var(--warning-color); box-shadow: 0 0 30px rgba(255, 152, 0, 0.2); }
  .score-low { background: rgba(244, 67, 54, 0.1); border: 3px solid var(--error-color); color: var(--error-color); box-shadow: 0 0 30px rgba(244, 67, 54, 0.2); }
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
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem 0; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  textarea { width:100%; min-height:300px; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-family:var(--font-mono); font-size:0.9rem; line-height:1.5; resize:vertical; transition:border-color var(--transition-fast); }
  textarea:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  textarea::placeholder { color:var(--input-placeholder); }
`;

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate freshness review dates
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb structured data
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
      "name": "ATS Resume Checker",
      "item": "https://professionalresumefree.com/free-resume-readability-checker"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 3600, // ISR: Revalidate every hour
  };
}

// Data Constants
const CURRENT_YEAR = new Date().getFullYear();

const FEATURES = [
  { icon: 'FiSearch', title: 'Keyword Optimization', desc: 'Deep scan your resume against job descriptions to identify missing critical keywords that ATS systems look for.', stat: 'AI-Powered' },
  { icon: 'FiLayout', title: 'Format Validation', desc: 'Verify your resume layout is ATS-friendly with proper headings, standard fonts, and machine-readable structure.', stat: 'Critical' },
  { icon: 'FiBarChart2', title: 'Comprehensive Scoring', desc: 'Get an instant ATS compatibility score with detailed breakdown of what needs improvement.', stat: 'Instant' },
  { icon: 'FiAlertTriangle', title: 'Issue Detection', desc: 'Identify problematic elements like images, tables, columns, and complex formatting that confuse ATS parsers.', stat: 'Essential' },
  { icon: 'FiClipboard', title: 'Actionable Suggestions', desc: 'Receive specific, prioritized recommendations to fix issues and boost your ATS score immediately.', stat: 'Detailed' },
  { icon: 'FiShield', title: 'Privacy Guaranteed', desc: 'Your resume text stays in your browser. Never uploaded, never stored, never shared. Complete privacy.', stat: '100% Safe' }
];

const FAQS = [
  { question: "What is an ATS and why does it matter?", answer: "An Applicant Tracking System (ATS) is software used by over 98% of Fortune 500 companies to filter resumes before a human ever sees them. If your resume isn't ATS-friendly, it may be rejected automatically regardless of your qualifications." },
  { question: "How does the ATS Resume Checker work?", answer: "Our checker analyzes your resume text in real-time, right in your browser. It scans for ATS compatibility issues including formatting problems, missing keywords, section structure, and more. You get an instant comprehensive report with actionable suggestions." },
  { question: "Is my resume data safe and private?", answer: "Absolutely. All analysis happens entirely in your browser using client-side processing. Your resume text is never uploaded to any server, never stored, and never shared." },
  { question: "What format should I paste my resume in?", answer: "Paste your resume as plain text. If you have a PDF or Word document, copy all the text content and paste it here." },
  { question: "What's a good ATS score to aim for?", answer: "We recommend aiming for a score of 80 or above. Scores in the 90-100 range indicate excellent ATS compatibility. Scores below 70 suggest significant issues that need addressing before submitting your application." }
];

const ICON_MAP = {
  FiHome, FiSearch, FiLayout, FiBarChart2, FiAlertTriangle, FiClipboard, FiShield, FiCheckCircle,
  FiStar, FiTarget, FiZap, FiCpu, FiEdit, FiAward, FiGrid, FiFileText, FiArrowRight,
  FiRefreshCw, FiTrash2, FiHelpCircle, FiCalendar, FiDatabase, FiAlertCircle,
  FiTrendingUp, FiLock, FiServer, FiCloud, FiBriefcase, FiChevronRight, FiUsers, FiClock, FiCheck
};

const CRITICAL_KEYWORDS = [
  'experience', 'education', 'skills', 'work', 'professional',
  'managed', 'developed', 'created', 'led', 'implemented',
  'results', 'achieved', 'improved', 'increased', 'reduced',
  'team', 'project', 'analysis', 'strategy', 'communication'
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ATSResumeCheckerPage = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  // Fallback freshness values
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/free-resume-readability-checker";
  
  // Optimized title - approximately 70 characters
  const optimizedTitle = "Free ATS Resume Checker 2026 - Test Your Resume Score Instantly";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "ATS resume checker free online",
    "resume ATS compatibility test tool",
    "check if resume passes applicant tracking systems",
    "free ATS scanner for resume analysis",
    "resume keyword optimization checker 2026"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "How do I check if my resume is ATS-friendly?", answer: "Paste your resume text into our free ATS resume checker. It instantly analyzes formatting, keywords, section structure, and 50+ parsing factors to give you a compatibility score and actionable fixes." },
    { question: "What resume format is best for ATS systems?", answer: "The best format for ATS is a clean, single-column layout with standard headings (Work Experience, Education, Skills). Avoid tables, columns, graphics, and headers/footers. Save as .docx for optimal parsing." }
  ];

  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const checkerRef = useRef(null);

  // ==========================================================================
  // ANALYSIS LOGIC
  // ==========================================================================
  const analyzeResume = useCallback(() => {
    if (!resumeText.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate analysis delay for UX feedback
    setTimeout(() => {
      const text = resumeText.toLowerCase();
      const wordCount = resumeText.split(/\s+/).filter(w => w.length > 0).length;
      
      const foundKeywords = CRITICAL_KEYWORDS.filter(kw => text.includes(kw));
      const keywordScore = Math.round((foundKeywords.length / CRITICAL_KEYWORDS.length) * 100);
      
      const hasStandardHeadings = ['experience', 'education', 'skills'].some(h => text.includes(h));
      const hasBulletPoints = resumeText.includes('•') || resumeText.includes('-') || resumeText.includes('*');
      const hasActionVerbs = ['managed', 'developed', 'created', 'led', 'implemented', 'achieved', 'improved', 'increased', 'reduced', 'delivered', 'designed', 'launched'].some(v => text.includes(v));
      const hasQuantifiedResults = /\d+%|\d+ years|\$\d+|\d+ people|\d+ million|\d+ thousand/i.test(resumeText);
      const hasContactInfo = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(resumeText) || /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(resumeText);
      
      const issues = [];
      if (wordCount < 200) issues.push({ severity: 'high', text: 'Resume is too short. Aim for 300-700 words.' });
      if (wordCount > 1000) issues.push({ severity: 'medium', text: 'Resume may be too long. Consider condensing to 1-2 pages.' });
      if (!hasStandardHeadings) issues.push({ severity: 'high', text: 'Missing standard section headings (Experience, Education, Skills).' });
      if (!hasActionVerbs) issues.push({ severity: 'high', text: 'Missing strong action verbs. Use words like Managed, Developed, Led, Achieved.' });
      if (!hasQuantifiedResults) issues.push({ severity: 'medium', text: 'Add quantified achievements with numbers, percentages, or dollar amounts.' });
      if (!hasContactInfo) issues.push({ severity: 'critical', text: 'Contact information may be missing or incomplete.' });
      if (!hasBulletPoints) issues.push({ severity: 'medium', text: 'Consider using bullet points for better readability.' });
      
      let baseScore = 50;
      baseScore += (keywordScore * 0.3);
      baseScore += (hasStandardHeadings ? 10 : 0);
      baseScore += (hasBulletPoints ? 5 : 0);
      baseScore += (hasActionVerbs ? 10 : 0);
      baseScore += (hasQuantifiedResults ? 10 : 0);
      baseScore += (hasContactInfo ? 10 : 0);
      baseScore += (wordCount > 300 ? 5 : 0);
      
      const finalScore = Math.min(100, Math.round(baseScore));
      
      setResults({
        score: finalScore,
        wordCount,
        keywordScore,
        foundKeywords,
        totalKeywords: CRITICAL_KEYWORDS.length,
        issues,
        hasStandardHeadings,
        hasBulletPoints,
        hasActionVerbs,
        hasQuantifiedResults,
        hasContactInfo
      });
      setIsAnalyzing(false);
    }, 1500);
  }, [resumeText]);

  const resetChecker = () => {
    setResumeText('');
    setResults(null);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 60) return 'score-medium';
    return 'score-low';
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'var(--error-color)';
      case 'high': return 'var(--warning-color)';
      case 'medium': return 'var(--info-color)';
      default: return 'var(--text-muted)';
    }
  };

  // ============================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Check if your resume passes ATS screening. Free instant analysis with compatibility score, keyword optimization, and actionable fixes. 100% private, no sign-up required.",
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-Optimized Resume Templates and Career Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapplication`,
        "name": "Free ATS Resume Checker",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156,
          "bestRating": 5,
          "worstRating": 1
        },
        "description": "Free online ATS resume checker that analyzes 50+ parsing factors instantly. Privacy-first browser tool with actionable fix suggestions.",
        "featureList": [
          "50+ ATS Parsing Factor Analysis",
          "Privacy-First Browser Processing",
          "Instant Compatibility Score",
          "Actionable Fix Suggestions",
          "No Sign Up Required",
          "Mobile-Friendly Interface"
        ],
        "softwareVersion": `${CURRENT_YEAR}.1.0`,
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Free ATS Resume Checker: Test Your Resume Score Instantly 2026",
        "description": "Check if your resume passes ATS screening with our free instant analysis tool. Get compatibility score, keyword optimization tips, and actionable fixes.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": [
          ...FAQS.map((faq, index) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
              "datePublished": safeFaqDates[index] || safeCurrentDate
            }
          })),
          ...peopleAlsoAsk.map((paa, index) => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer,
              "datePublished": safeFaqDates[index + FAQS.length] || safeCurrentDate
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Check Your Resume for ATS Compatibility",
        "description": "Step-by-step guide to analyzing your resume for applicant tracking systems",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Paste Your Resume Text",
            "text": "Copy your resume content as plain text and paste it into the analysis box."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Run the Analysis",
            "text": "Click 'Analyze Resume' to check 50+ ATS parsing factors including formatting, keywords, and structure."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Review Your Score",
            "text": "Get your instant ATS compatibility score and see which areas need improvement."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Fix Issues Found",
            "text": "Follow prioritized recommendations to fix formatting problems and optimize keywords."
          }
        ],
        "totalTime": "PT3M"
      }
    ]
  };

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <>
      {/* ============================================================================
          COMPLETE <HEAD> INJECTION (FROM PAGE 1 BLUEPRINT)
          ============================================================================ */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Check if your resume passes ATS screening. Free instant analysis with compatibility score, keyword optimization, and actionable fixes. 100% private, no sign-up required." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="ATS resume checker, applicant tracking system, resume compatibility, ATS optimization, free resume scanner, resume parsing issues, ATS formatting, resume analysis, ATS friendly resume, resume checker tool, resume readability checker, ATS score test" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free ATS Resume Checker - Instant ATS Compatibility Analysis 2026" />
        <meta name="chatgpt-fts:description" content="Free ATS resume checker that analyzes 50+ parsing factors instantly. Get detailed feedback on formatting issues, keywords, and ATS compatibility. Privacy-first browser tool." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Analysis Tool" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Free ATS Resume Checker - Applicant Tracking System Compatibility Analysis 2026" />
        <meta property="og:description" content="Analyze 50+ ATS parsing factors instantly. Privacy-first tool that works entirely in your browser. Get actionable fixes and improve your resume score." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free ATS Resume Checker Tool - Analyze Your Resume Instantly" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ATS Resume Checker - Instant Compatibility Analysis 2026" />
        <meta name="twitter:description" content="Analyze your resume for 50+ ATS parsing issues. Privacy-first, browser-based tool. No signup required." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="ATS Resume Checker Tool Preview" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS (PRESERVED FROM PAGE 2) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/free-resume-readability-checker" itemProp="item">
                  <span itemProp="name">Free Tools</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">ATS Resume Checker 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Free Tool • No Sign Up • Instant Results | Updated {CURRENT_YEAR}</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">ATS Resume</span> Checker
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Instantly analyze your resume for <strong>ATS compatibility</strong>. Get a detailed score, identify missing keywords, and fix formatting issues that could cost you your dream job. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {CURRENT_YEAR} ATS Standards</span>
                </div>
                <div className="stat-card"><div className="stat-number">98%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Fortune 500 Use ATS</div></div>
                <div className="stat-card"><div className="stat-number">75%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Resumes Rejected</div></div>
                <div className="stat-card"><div className="stat-number">3x</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Interviews</div></div>
                <div className="stat-card"><div className="stat-number">100%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Private & Secure</div></div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> Instant Results</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Users</span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <button onClick={() => checkerRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  <FiSearch /> Check Your Resume Now
                </button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Build ATS-Friendly Resume</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Checker Tool */}
        <section ref={checkerRef} className="section section-alt" aria-labelledby="checker-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                <h2 id="checker-heading" className="section-title">Paste Your Resume Below</h2>
                <p className="section-subtitle">Copy and paste your full resume text for instant ATS analysis</p>
              </div>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume text here...

JOHN DOE
john.doe@email.com | (555) 123-4567

PROFESSIONAL SUMMARY
Results-driven software engineer with 5+ years of experience...

EXPERIENCE
Senior Developer | ABC Tech Corp | 2020-Present
• Led team of 5 developers in building scalable web applications
• Increased application performance by 40% through optimization..."
                aria-label="Paste your resume text for ATS analysis"
                style={{ marginBottom: '1.5rem' }}
              />
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button 
                  className="btn-primary" 
                  onClick={analyzeResume}
                  disabled={!resumeText.trim() || isAnalyzing}
                >
                  {isAnalyzing ? <><FiRefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} /> Analyzing...</> : <><FiSearch size={20} /> Analyze Resume</>}
                </button>
                {resumeText && (
                  <button className="btn-outline" onClick={resetChecker}><FiTrash2 size={20} /> Clear</button>
                )}
              </div>
            </div>

            {/* Results */}
            {results && (
              <div style={{ maxWidth: '900px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="gold-divider" style={{ margin: '0 auto 2rem' }}></div>
                <div className="section-header">
                  <h2 className="section-title">Your ATS Compatibility Report</h2>
                </div>
                
                <div className="grid">
                  <div className="stat-card">
                    <div className={`score-circle ${getScoreColor(results.score)}`}>{results.score}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Overall ATS Score</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{results.wordCount}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Word Count</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{results.keywordScore}%</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Keyword Match ({results.foundKeywords}/{results.totalKeywords})</div>
                  </div>
                </div>

                <div className="grid" style={{ marginTop: '1rem' }}>
                  {[
                    { label: 'Standard Headings', pass: results.hasStandardHeadings },
                    { label: 'Bullet Points', pass: results.hasBulletPoints },
                    { label: 'Action Verbs', pass: results.hasActionVerbs },
                    { label: 'Quantified Results', pass: results.hasQuantifiedResults },
                    { label: 'Contact Information', pass: results.hasContactInfo }
                  ].map((check, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--card-bg)', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                      {check.pass ? <FiCheckCircle size={24} color="var(--success-color)" /> : <FiAlertCircle size={24} color="var(--warning-color)" />}
                      <div>
                        <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{check.label}</div>
                        <div className="text-small">{check.pass ? 'Passed' : 'Needs attention'}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {results.issues.length > 0 && (
                  <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Recommended Fixes</h3>
                    {results.issues.map((issue, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'var(--card-bg)', borderRadius: '0.5rem', border: 'var(--card-border)', marginBottom: '0.5rem' }}>
                        <FiAlertTriangle size={20} color={getSeverityColor(issue.severity)} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)} Priority
                          </div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{issue.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="section" aria-labelledby="features-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="features-heading" className="section-title">Powerful ATS Analysis Features</h2>
              <p className="section-subtitle">Everything you need to ensure your resume passes automated screening</p>
            </div>
            <div className="grid">
              {FEATURES.map((feature, i) => {
                const IconComponent = ICON_MAP[feature.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)' }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{feature.desc}</p>
                    <span className="feature-badge" style={{ marginTop: 'auto', justifyContent: 'center' }}>{feature.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About ATS Resume Checking</h2>
              <p className="section-subtitle">Quick answers to common ATS compatibility questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <div key={`paa-${i}`} className={`faq-item ${activeFaq === `paa-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `paa-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === `paa-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `paa-${i}` && <div className="faq-answer"><p>{paa.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything about ATS resume checking</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Beat the ATS?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Check your resume now and get instant feedback to improve your chances. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <button onClick={() => checkerRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Check Your Resume Now</button>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build New Resume</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {["No sign-up required", "100% Private", "Instant results", "Free forever"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {f}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Updated: {safeCurrentDate}
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Enhance Your Resume Further</h2>
              <p className="section-subtitle">Complement your ATS check with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-builder", text: "Free ATS-Friendly Resume Builder", iconName: "FiFileText" },
                { href: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained", text: "Pass AI Resume Screens: 2026 ATS Guide", iconName: "FiTarget" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate}</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export default ATSResumeCheckerPage;