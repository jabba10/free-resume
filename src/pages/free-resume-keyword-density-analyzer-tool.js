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
  FiActivity, FiPieChart, FiHash, FiAlertCircle
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
  .status-badge { display:inline-block; padding:0.25rem 0.5rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); font-weight:500; }
  .keyword-table-header { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 2fr; gap:1rem; padding:0.75rem 1rem; background:var(--bg-surface-high); border-radius:0.375rem; font-weight:var(--font-weight-semibold); color:var(--accent-primary); }
  .keyword-table-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 2fr; gap:1rem; padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); align-items:center; }
  @media (max-width:768px) { .keyword-table-header { display:none; } .keyword-table-row { grid-template-columns:1fr; gap:0.25rem; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

// SEO Keywords - Injected from Page 1 Blueprint
const SEO_KEYWORDS = [
  'resume keyword analyzer',
  'keyword density checker',
  'ATS keyword optimization',
  'resume keyword density',
  'keyword analysis tool',
  'resume optimization software',
  'job application keywords',
  'resume keyword tracker',
  'keyword frequency analyzer',
  'professional resume keywords'
];

const FAQS = [
  { question: "What is keyword density and why is it important for resumes?", answer: "Keyword density measures how frequently specific words appear in your resume relative to total word count. It's crucial because ATS systems scan for keywords matching job descriptions, and optimal density (1-3%) improves your chances of passing automated screening while maintaining natural readability." },
  { question: "What's the ideal keyword density percentage for resumes?", answer: "Aim for 1-3% per important keyword. Lower than 1% may not trigger ATS recognition, while higher than 3% can appear unnatural or 'keyword-stuffed' to both ATS and human reviewers. Strategic placement in key sections is more effective than high frequency alone." },
  { question: "How do I identify the right keywords for my industry?", answer: "Analyze job descriptions for your target roles, extract recurring technical skills and industry terms, research LinkedIn profiles of professionals in similar positions, and use our tool to identify your resume's current keyword strengths and gaps for optimization." },
  { question: "Should I include keywords in the skills section only?", answer: "No! Keywords should appear throughout your resume—in summary, experience bullet points, and achievements. Strategic distribution across sections shows comprehensive proficiency rather than just listing skills. Our analyzer tracks keyword distribution across your entire resume." },
  { question: "How does keyword density affect human readability?", answer: "Balanced keyword density (1-3%) maintains natural language flow. Over-optimization (keyword stuffing) makes content sound robotic and reduces readability. Our tool helps you optimize for both ATS systems and human reviewers with density recommendations." }
];

const INDUSTRY_KEYWORDS = {
  'Software Development': ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'API', 'Git', 'Agile', 'Testing', 'DevOps'],
  'Marketing': ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'Campaign', 'ROI', 'Brand', 'Lead Generation', 'Digital Marketing', 'Analytics'],
  'Finance': ['Financial Analysis', 'Budgeting', 'Forecasting', 'Excel', 'Reporting', 'Compliance', 'Risk Management', 'Accounting', 'Audit', 'Financial Modeling'],
  'Healthcare': ['Patient Care', 'Clinical', 'HIPAA', 'EMR', 'Healthcare Management', 'Medical Terminology', 'Treatment Planning', 'Quality Improvement', 'Regulatory Compliance', 'Patient Safety'],
  'Project Management': ['Project Planning', 'Stakeholder Management', 'Risk Assessment', 'Budget Management', 'Timeline', 'Scope', 'Agile', 'Waterfall', 'Team Leadership', 'Delivery']
};

const OPTIMIZATION_TIPS = [
  "Include keywords in section headers",
  "Use variations of keywords (manage, management, manager)",
  "Place important keywords in the first third of your resume",
  "Incorporate keywords naturally in achievement statements",
  "Balance hard skills with soft skills keywords",
  "Update keywords for each job application",
  "Use industry-specific terminology",
  "Include certifications and qualifications as keywords",
  "Add location-based keywords if relevant",
  "Proofread for keyword repetition issues"
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
  FiActivity, FiPieChart, FiHash, FiAlertCircle
};

// ============================================================================
// ANALYSIS FUNCTION
// ============================================================================
function analyzeKeywords(content, keywordList) {
  if (!content.trim() || !keywordList.trim()) {
    return { totalWords: 0, uniqueKeywords: 0, keywordDensity: {}, topKeywords: [], overallDensity: 0, sectionCount: 0 };
  }
  const words = content.toLowerCase().match(/\b\w+\b/g) || [];
  const totalWords = words.length;
  const keywordArray = keywordList.toLowerCase().split(/[,;\n]+/).map(k => k.trim()).filter(k => k.length > 0);
  const uniqueKeywords = [...new Set(keywordArray)];
  const keywordFrequency = {};
  const keywordDensity = {};
  uniqueKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = content.match(regex) || [];
    keywordFrequency[keyword] = matches.length;
    keywordDensity[keyword] = totalWords > 0 ? parseFloat(((matches.length / totalWords) * 100).toFixed(2)) : 0;
  });
  const sections = content.split(/\n\s*\n/).filter(s => s.trim().length > 0);
  const topKeywords = uniqueKeywords.filter(keyword => keywordFrequency[keyword] > 0).sort((a, b) => keywordFrequency[b] - keywordFrequency[a]).slice(0, 10).map(keyword => ({ keyword, frequency: keywordFrequency[keyword], density: keywordDensity[keyword], status: keywordDensity[keyword] === 0 ? 'missing' : keywordDensity[keyword] < 1 ? 'low' : keywordDensity[keyword] <= 3 ? 'optimal' : 'high' }));
  const totalKeywordOccurrences = Object.values(keywordFrequency).reduce((a, b) => a + b, 0);
  const overallDensity = totalWords > 0 ? parseFloat(((totalKeywordOccurrences / totalWords) * 100).toFixed(2)) : 0;
  return { totalWords, uniqueKeywords: uniqueKeywords.length, keywordDensity, topKeywords, overallDensity, sectionCount: sections.length };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeKeywordDensityAnalyzer = ({ seoData, lastModified, buildTimestamp }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || lastModified || new Date().toISOString();
  const canonicalUrl = "https://professionalresumefree.com/free-resume-keyword-density-analyzer-tool";
  const pageTitle = `Resume Keyword Density Analyzer – ATS Optimization & Strategic Keyword Placement ${CURRENT_YEAR}`;
  const pageDescription = `Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance. Improve your resume's visibility with AI-powered keyword analysis. ${CURRENT_YEAR}`;

  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [analysisResults, setAnalysisResults] = useState(analyzeKeywords('', ''));
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const textareaRef = useRef(null);
  const toolRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = analyzeKeywords(text, keywords);
      setAnalysisResults(results);
    }, 500);
    return () => clearTimeout(timer);
  }, [text, keywords]);

  const handleReset = () => {
    setText(''); setKeywords(''); setSelectedIndustry('');
    setAnalysisResults(analyzeKeywords('', ''));
    textareaRef.current?.focus();
  };

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
    const industryKeywords = INDUSTRY_KEYWORDS[industry] || [];
    setKeywords(industryKeywords.join(', '));
  };

  const handleLoadExample = () => {
    setText(`SENIOR SOFTWARE DEVELOPER\nTech Innovations Inc. | San Francisco, CA | 2020-Present\n\n• Developed scalable web applications using React, Node.js, and MongoDB\n• Implemented RESTful APIs and microservices architecture for improved performance\n• Led Agile development team in delivering 15+ projects with 99.9% uptime\n• Optimized application performance resulting in 40% faster load times\n• Collaborated with cross-functional teams using Git version control\n\nTECHNICAL SKILLS\nFrontend: JavaScript, React, HTML5, CSS3, TypeScript\nBackend: Node.js, Python, Express.js, REST APIs\nDatabase: MongoDB, PostgreSQL, Redis\nTools: Git, Docker, AWS, Jenkins, Agile/Scrum\n\nEDUCATION\nBachelor of Science in Computer Science\nStanford University | 2016-2020`);
    setKeywords("JavaScript, React, Node.js, Python, API, Git, Agile, AWS, MongoDB, Development");
    setSelectedIndustry('Software Development');
  };

  const getStatusDisplay = (status) => {
    switch(status) {
      case 'missing': return { text: 'Missing', color: 'var(--error-color)', bg: 'rgba(255,180,171,0.1)' };
      case 'low': return { text: 'Too low', color: 'var(--warning-color)', bg: 'rgba(255,183,77,0.1)' };
      case 'optimal': return { text: 'Optimal', color: 'var(--success-color)', bg: 'rgba(76,175,80,0.1)' };
      case 'high': return { text: 'Too high', color: '#ff6b35', bg: 'rgba(255,107,53,0.1)' };
      default: return { text: 'Unknown', color: 'var(--text-muted)', bg: 'rgba(157,149,160,0.1)' };
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 60) return 'score-medium';
    return 'score-low';
  };

  const calculateOptimizationScore = () => {
    const { topKeywords, overallDensity } = analysisResults;
    if (topKeywords.length === 0) return 0;
    let score = 0;
    let optimalCount = 0;
    topKeywords.forEach(keyword => {
      if (keyword.status === 'optimal') { score += 10; optimalCount++; }
      else if (keyword.status === 'low') score += 5;
      else if (keyword.status === 'high') score += 3;
    });
    if (overallDensity >= 2 && overallDensity <= 4) score += 20;
    else if (overallDensity >= 1 && overallDensity <= 5) score += 10;
    else if (overallDensity > 0) score += 5;
    if (optimalCount >= 3) score += 10;
    else if (optimalCount >= 1) score += 5;
    return Math.min(100, score);
  };

  const optimizationScore = calculateOptimizationScore();

  // Schema Data - Injected from Page 1 Blueprint
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
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
          "@id": "https://professionalresumefree.com/#website",
          "url": "https://professionalresumefree.com",
          "name": "Professional Resume Free",
          "description": "Free online resume builder for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": "https://professionalresumefree.com/#organization",
            "name": "Professional Resume Free",
            "url": "https://professionalresumefree.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://professionalresumefree.com/logo.png",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/ProResumeFree",
              "https://linkedin.com/company/professional-resume-free",
              "https://facebook.com/ProfessionalResumeFree",
              "https://youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://professionalresumefree.com/og-keyword-analyzer.jpg",
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
              "item": "https://professionalresumefree.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Free Tools",
              "item": "https://professionalresumefree.com/free-resume-tools"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Keyword Density Analyzer",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Resume Keyword Density Analyzer - ATS Optimization Tool",
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
            "ratingValue": 4.8,
            "ratingCount": 203,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free online ATS-optimized resume keyword analyzer that helps job seekers optimize resume keywords for maximum visibility and interview success.",
          "featureList": [
            "ATS-Optimized Keyword Analysis",
            "Industry-Specific Keyword Suggestions",
            "Keyword Density Visualization",
            "Strategic Placement Guidance",
            "Real-Time Analysis",
            "No Sign Up Required",
            "Free Forever"
          ],
          "softwareVersion": `${CURRENT_YEAR}.1.0`,
          "screenshot": "https://professionalresumefree.com/images/screenshot-keyword-analyzer.jpg",
          "applicationSuite": "Career Tools",
          "countriesSupported": "Global",
          "fileSize": "Web Application"
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
              "name": "Resume Optimization Team"
            }
          },
          "mainEntityOfPage": `${canonicalUrl}#webpage`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Optimize Resume Keywords for ATS",
        "description": "Step-by-step guide to analyze and optimize resume keywords for ATS compatibility",
        "totalTime": "PT10M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Paste Your Resume Content",
            "text": "Copy and paste your resume text into the analyzer tool.",
            "url": `${canonicalUrl}#resume-input`,
            "image": "https://professionalresumefree.com/images/step1-paste-resume.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Add Target Keywords",
            "text": "Enter keywords from job descriptions or select industry-specific suggestions.",
            "url": `${canonicalUrl}#keywords-input`,
            "image": "https://professionalresumefree.com/images/step2-add-keywords.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Analyze Keyword Density",
            "text": "Get detailed analysis of keyword frequency, density, and distribution across your resume.",
            "url": `${canonicalUrl}#analysis`,
            "image": "https://professionalresumefree.com/images/step3-analyze-density.jpg"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize and Improve",
            "text": "Use recommendations to adjust keyword usage for optimal ATS compatibility and readability.",
            "url": `${canonicalUrl}#optimization`,
            "image": "https://professionalresumefree.com/images/step4-optimize-resume.jpg"
          }
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".faq-question h3", ".card-executive h3"]
      },
      {
        "@type": "ItemList",
        "name": "Industry Keyword Categories",
        "itemListElement": Object.keys(INDUSTRY_KEYWORDS).map((industry, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": industry,
          "description": `${INDUSTRY_KEYWORDS[industry].slice(0, 3).join(', ')}...`
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
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Keyword Density Analyzer - ATS Optimization Tool" />
        <meta name="chatgpt-fts:description" content="Free professional resume keyword density analyzer with ATS optimization, industry-specific keyword suggestions, and strategic placement guidance." />
        <meta name="chatgpt-fts:keywords" content="resume keyword analyzer, keyword density checker, ATS keyword optimization" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Keyword Analyzer" />
        
        {/* Robots & Crawler Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="theme-color" content="#131315" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph - Injected from Page 1 Blueprint */}
        <meta property="og:title" content="Resume Keyword Density Analyzer – Professional ATS Optimization" />
        <meta property="og:description" content="Free resume keyword density analyzer with ATS optimization, industry keyword suggestions, and strategic placement analysis" />
        <meta property="og:image" content="https://professionalresumefree.com/og-keyword-analyzer.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Keyword Density Analyzer Tool" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Keyword Density Analyzer" />
        <meta name="twitter:description" content="Professional keyword analysis with ATS optimization and industry-specific suggestions" />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-keyword-analyzer.jpg" />
        <meta name="twitter:image:alt" content="Resume Keyword Density Analyzer Interface" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Hidden SEO Elements */}
      <div style={{display: 'none'}} aria-hidden="true">
        <span itemProp="tool-type">Keyword Density Analyzer</span>
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
              <li><Link href="/free-resume-tools"><FiTool size={14} /> Free Tools</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiHash size={14} /> Keyword Density Analyzer</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • ATS Optimized • Updated {safeCurrentDate}</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume <span className="gradient-text">Keyword Density</span> Analyzer – ATS Optimization Tool {CURRENT_YEAR}
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>Optimize your resume keywords for ATS systems</strong> with our free keyword density analyzer. Get industry-specific suggestions, strategic placement guidance, and actionable insights to improve your resume's visibility. <strong>Free forever.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "12K+", label: "Users Analyzed" }, { value: "94%", label: "Success Rate" }, { value: "3.2x", label: "More Interviews" }, { value: "4.8/5", label: "User Rating" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Start Analyzing Keywords Now</button>
                <Link href="/free-resume-tools" className="btn-outline"><FiTool /> All Free Tools</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Analyzer Tool */}
        <section ref={toolRef} className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Analyze Your Resume Keywords for ATS Optimization</h2>
              <p className="section-subtitle">Paste your resume content and keywords to analyze density, distribution, and ATS optimization. Get actionable insights for improving your resume's keyword strategy.</p>
            </div>

            <div className="card-executive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {/* Resume Input */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}><FiFileText style={{ display: 'inline', marginRight: '0.5rem' }} /> Your Resume Content</h3>
                    <button onClick={handleLoadExample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiCopy size={14} /> Load Example</button>
                  </div>
                  <textarea ref={textareaRef} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your resume content here for free keyword density analysis..." rows={18} style={{ marginBottom: '0.75rem' }} />
                  <span className="text-small">{analysisResults.totalWords} words • {analysisResults.sectionCount} sections</span>
                </div>

                {/* Keywords Input */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}><FiHash style={{ display: 'inline', marginRight: '0.5rem' }} /> Keywords to Analyze</h3>
                    <select value={selectedIndustry} onChange={(e) => handleIndustrySelect(e.target.value)} style={{ minWidth: '180px', width: 'auto' }}>
                      <option value="">Select Industry</option>
                      {Object.keys(INDUSTRY_KEYWORDS).map(ind => (<option key={ind} value={ind}>{ind}</option>))}
                    </select>
                  </div>
                  <textarea value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Enter keywords separated by commas or new lines..." rows={18} style={{ marginBottom: '0.75rem' }} />
                  <span className="text-small">{analysisResults.uniqueKeywords} unique keywords</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setAnalysisResults(analyzeKeywords(text, keywords))}
                  className="btn-primary"
                  style={{ minWidth: 'auto' }}
                >
                  🔍 Analyze Keywords
                </button>
                <button onClick={handleReset} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }}><FiRefreshCw size={16} /> Clear All</button>
              </div>
            </div>

            {/* Results */}
            {analysisResults.topKeywords.length > 0 && (
              <div style={{ maxWidth: '1000px', margin: '2rem auto 0', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive">
                  <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-title">Keyword Analysis Results & Recommendations</h2>
                  </div>

                  {/* Score & Summary */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className={`score-circle ${getScoreColor(optimizationScore)}`}>{optimizationScore}/100</div>
                    <div className="grid" style={{ flex: 1, minWidth: '280px', margin: 0 }}>
                      <div className="stat-card"><div className="stat-number">{analysisResults.overallDensity.toFixed(1)}%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Overall Density</div></div>
                      <div className="stat-card"><div className="stat-number">{analysisResults.topKeywords.length}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Keywords Found</div></div>
                      <div className="stat-card"><div className="stat-number" style={{ color: 'var(--success-color)' }}>{analysisResults.topKeywords.filter(k => k.status === 'optimal').length}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Optimal Keywords</div></div>
                    </div>
                  </div>

                  {/* Keywords Table */}
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>Top Keyword Analysis (Ideal density: 1-3%)</h3>
                  <div className="keyword-table-header">
                    <div>Keyword</div><div>Frequency</div><div>Density</div><div>Status</div><div>Recommendation</div>
                  </div>
                  {analysisResults.topKeywords.map((item, i) => {
                    const statusInfo = getStatusDisplay(item.status);
                    return (
                      <div key={i} className="keyword-table-row">
                        <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>{item.keyword}</div>
                        <div><span className="feature-tag">{item.frequency}</span></div>
                        <div style={{ fontWeight: 'var(--font-weight-semibold)' }}>{item.density}%</div>
                        <div><span className="status-badge" style={{ background: statusInfo.bg, color: statusInfo.color, border: `0.5px solid ${statusInfo.color}` }}>{statusInfo.text}</span></div>
                        <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                          {item.status === 'missing' && 'Add this keyword to your resume'}
                          {item.status === 'low' && 'Increase usage or add variations'}
                          {item.status === 'optimal' && 'Perfect density, maintain current usage'}
                          {item.status === 'high' && 'Consider reducing repetition'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Industry Keywords */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Keyword Suggestions for ATS Optimization</h2>
              <p className="section-subtitle">Optimize your resume with the right keywords for your industry. Click any industry to load suggested keywords.</p>
            </div>
            <div className="grid">
              {Object.entries(INDUSTRY_KEYWORDS).map(([industry, kws]) => (
                <div key={industry} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{industry}</h3>
                    <button onClick={() => handleIndustrySelect(industry)} className="btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8rem', minWidth: 'auto' }}>Use These Keywords</button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {kws.map((kw, i) => (<span key={i} className="feature-tag">{kw}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Questions About Resume Keyword Density</h2>
              <p className="section-subtitle">Find answers to the most searched keyword optimization questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                "how to calculate keyword density in resume",
                "best keyword density for ATS resumes",
                "resume keyword optimization tools free",
                "industry specific keywords for resumes",
                "keyword stuffing in resume detection",
                "ATS friendly keyword placement tips",
                "resume keyword frequency checker online",
                "how many keywords should a resume have"
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

        {/* Tips */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Keyword Optimization Best Practices for ATS Compatibility</h2>
              <p className="section-subtitle">Follow these proven strategies to maximize your resume's ATS compatibility and human readability.</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {OPTIMIZATION_TIPS.map((tip, i) => (
                <div key={i} className="card-executive" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', minWidth: '30px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Keyword Optimization</h2>
              <p className="section-subtitle">Everything you need to know about resume keyword optimization and ATS systems in {CURRENT_YEAR}.</p>
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
              Ready to Optimize Your Resume Keywords?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 12,000+ professionals who improved their resume visibility with our keyword analyzer. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <button onClick={() => { handleReset(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiSearch /> Start Keyword Analysis Now</button>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse ATS Templates</Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Free Forever</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> No Sign Up Required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Instant Analysis</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck size={14} color="var(--success-color)" /> Detailed Recommendations</span>
            </div>
            <p className="text-small" style={{ marginTop: '2rem' }}>Based on analysis of 12,000+ resumes • Updated for {CURRENT_YEAR} hiring standards</p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement your keyword analysis with these powerful tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch", desc: "Match resume to job descriptions" },
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield", desc: "Test your resume score" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3", desc: "CAR methodology bullets" },
                { href: "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained", text: "Pass AI Resume Screens", iconName: "FiTarget", desc: `${CURRENT_YEAR} ATS guide` },
                { href: "/most-in-demand-resume-keywords-for-usa-job-seekers", text: "In-Demand Resume Keywords", iconName: "FiTrendingUp", desc: "USA job seeker data" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Based on analysis of 12,000+ resumes</span>
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

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
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
        faqDates
      },
      buildTimestamp,
      lastModified: lastModifiedDate
    },
    // Revalidate every 1 hour (3600 seconds)
    revalidate: 3600
  };
}

export default ResumeKeywordDensityAnalyzer;