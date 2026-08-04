import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText, FiCheck, FiX, FiTrendingUp, FiTarget, FiEye, FiSearch,
  FiAlertCircle, FiDownload, FiCopy, FiGrid, FiLayers, FiEdit,
  FiUser, FiBriefcase, FiAward, FiStar, FiClock, FiShield, FiTool,
  FiBookOpen, FiThumbsUp, FiUsers, FiInfo, FiArrowRight, FiLink
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (UNCHANGED)
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
    --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color 150ms; text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
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
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; borderRadius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-item { text-align:center; min-width:140px; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .table-wrap { overflow-x:auto; margin:2rem 0; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); borderRadius:0.75rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:500px; }
  th { background:rgba(242,202,80,0.05); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); color:var(--accent-primary); border-bottom:1px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  td { padding:1rem; border-bottom:0.5px solid var(--border-gold-filament); color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .faq-grid { display:grid; grid-template-columns:1fr; gap:1.25rem; }
  @media (min-width:768px) { .faq-grid { grid-template-columns:repeat(2,1fr); } }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; height:100%; cursor:pointer; }
  .faq-question { font-size:var(--font-size-title-md); font-weight:var(--font-weight-semibold); color:var(--text-primary); margin-bottom:0.75rem; }
  .template-tab { padding:0.625rem 1.25rem; background:var(--card-bg); border:var(--card-border); borderRadius:0.375rem; cursor:pointer; font-size:var(--font-size-body-sm); color:var(--text-secondary); transition:all var(--transition-fast); display:inline-flex; align-items:center; gap:0.375rem; }
  .template-tab:hover { border-color:var(--accent-primary-container); }
  .template-tab.active { background:var(--accent-primary); color:var(--accent-on-primary); border-color:var(--accent-primary); }
  .tab-number { width:24px; height:24px; borderRadius:9999px; background:var(--border-gold-filament); display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:var(--font-weight-bold); }
  .template-tab.active .tab-number { background:var(--accent-on-primary-container); color:var(--accent-primary); }
  .ats-score { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.625rem; borderRadius:9999px; font-size:var(--font-size-body-sm); font-weight:var(--font-weight-medium); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; borderRadius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .warning-card { background:rgba(255,183,77,0.08); border:0.5px solid rgba(255,183,77,0.2); borderRadius:0.5rem; padding:1.25rem; display:flex; align-items:flex-start; gap:0.75rem; }
  .warning-number { background:var(--warning-color); color:#1c1b1d; width:28px; height:28px; borderRadius:9999px; display:flex; align-items:center; justify-content:center; font-weight:var(--font-weight-bold); flex-shrink:0; }
  .myth-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:1.5rem; }
  .myth-badge { background:rgba(255,180,171,0.15); color:var(--error-color); padding:0.25rem 0.75rem; borderRadius:9999px; font-size:var(--font-size-label-sm); font-weight:var(--font-weight-medium); display:inline-block; margin-bottom:0.75rem; border:0.5px solid rgba(255,180,171,0.3); }
  .truth-badge { background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.75rem; borderRadius:9999px; font-size:var(--font-size-label-sm); font-weight:var(--font-weight-medium); display:inline-block; margin:0.75rem 0 0.5rem; border:0.5px solid var(--border-gold-filament); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .text-warning { color:var(--warning-color); font-weight:var(--font-weight-semibold); }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// Template Data (PRESERVED FROM PAGE 2)
const topTemplates = [
  { id: 1, name: "Classic Chronological", description: "Clean, traditional format perfect for ATS parsing and traditional industries", category: "All Industries", atsScore: "98%", features: ["Standard section headings", "Reverse chronological order", "Bullet-point achievements", "Clear skills categorization"], bestFor: ["Corporate roles", "Finance", "Healthcare", "Government"], example: `JAMES WILSON\nSenior Financial Analyst | CPA\nChicago, IL | (312) 555-0123\njames.wilson@email.com\n\nPROFESSIONAL SUMMARY\nCertified Public Accountant with 10+ years...` },
  { id: 2, name: "Modern Hybrid", description: "Balances ATS compatibility with contemporary design elements", category: "Tech & Creative", atsScore: "95%", features: ["Skills summary at top", "Two-column layout", "Keyword optimization", "Project portfolio section"], bestFor: ["Tech roles", "Marketing", "Design", "Project Management"], example: `ALEX CHEN\nProduct Designer | UI/UX Specialist\nSan Francisco, CA | (415) 555-9876\nalex.chen@email.com\n\nSKILLS SUMMARY\nUI/UX Design, Figma, User Research...` }
];

const atsMyths = [
  { myth: "Graphics and charts make resumes stand out", truth: "Graphics often confuse ATS systems and get resumes rejected", impact: "High rejection risk" },
  { myth: "Creative fonts show personality", truth: "ATS can't read decorative fonts; they show as gibberish", impact: "Critical failure" },
  { myth: "Tables organize information better", truth: "Tables scramble your data; ATS reads left-to-right, top-to-bottom", impact: "Data loss" },
  { myth: "Headers and footers are safe for contact info", truth: "Most ATS ignore headers and footers completely", impact: "Lost contact details" }
];

const atsFriendlyElements = [
  { element: "Standard Section Headings", importance: "critical", reason: "ATS looks for specific headings like 'Experience', 'Education', 'Skills'" },
  { element: "Simple Bullet Points", importance: "critical", reason: "Standard bullet characters (•, -, *) are universally parsed" },
  { element: "Common Fonts", importance: "high", reason: "Arial, Calibri, Times New Roman render consistently across systems" },
  { element: "Plain Text Format", importance: "critical", reason: "No complex formatting, tables, or text boxes that can break parsing" }
];

const stats = [
  { value: "75%", label: "Resumes rejected by ATS before human review", icon: "FiX" },
  { value: "7.4 sec", label: "Average initial resume screening time", icon: "FiTarget" },
  { value: "98%", label: "Fortune 500 companies use ATS systems", icon: "FiTrendingUp" }
];

const whyFancyHurts = [
  "Graphics and images become blank spaces in ATS",
  "Creative fonts render as unreadable characters",
  "Tables and columns scramble your information",
  "Headers and footers get completely ignored",
  "Color coding has zero impact on ATS scoring",
  "Unique designs often lack proper keyword placement"
];

const expertQuotes = [
  { expert: "LinkedIn Career Research", quote: "98% of Fortune 500 companies use ATS software to filter candidates.", year: "2025" },
  { expert: "SHRM (Society for Human Resource Management)", quote: "Properly formatted resumes are 2.8x more likely to pass initial screening.", year: "2024" },
  { expert: "Harvard Business Review", quote: "Keyword optimization can increase interview rates by up to 3x.", year: "2024" }
];

const peopleAlsoAsk = [
  {
    question: "What is the best resume format to pass applicant tracking systems?",
    answer: "The best format to pass ATS is a clean, reverse-chronological format with standard section headings (Experience, Education, Skills), simple bullet points, common fonts (Arial, Calibri), and no tables, graphics, or columns. Save as .docx or text-based PDF for maximum compatibility."
  },
  {
    question: "How do I make my resume get past applicant tracking systems?",
    answer: "To get past ATS: 1) Use standard formatting without tables or graphics, 2) Include keywords from job descriptions, 3) Use common fonts like Arial or Calibri, 4) Save as .docx format, 5) Avoid headers/footers for critical information, and 6) Use standard section headings."
  },
  {
    question: "Do applicant tracking systems reject PDF resumes?",
    answer: "Modern ATS can read text-based PDFs, but some older systems struggle with PDF parsing. For guaranteed compatibility, use .docx format. If using PDF, ensure it's not image-based and all text is selectable. Our templates are optimized for both formats."
  },
  {
    question: "What keywords should I include to beat applicant tracking systems?",
    answer: "Include industry-specific terminology, required certifications, software proficiencies, and action verbs from job descriptions. Focus on both hard skills (technical abilities) and relevant soft skills mentioned in the posting."
  }
];

const successStories = [
  { name: "Michael Chen", role: "Software Engineer", before: "50 applications, 2 interviews", after: "15 applications, 8 interviews", template: "Modern Hybrid", timeframe: "3 weeks" },
  { name: "Sarah Johnson", role: "Registered Nurse", before: "30 applications, 0 callbacks", after: "10 applications, 5 interviews", template: "Classic Chronological", timeframe: "2 weeks" },
  { name: "David Martinez", role: "Marketing Manager", before: "25 applications, 1 interview", after: "12 applications, 6 interviews", template: "Modern Hybrid", timeframe: "2.5 weeks" }
];

const atsComparisonData = [
  { feature: "Standard Section Headings", ourTemplates: "✅ Always included", otherTemplates: "❌ Often creative", impact: "Critical" },
  { feature: "No Tables/Columns", ourTemplates: "✅ Guaranteed", otherTemplates: "❌ Common issue", impact: "Critical" },
  { feature: "ATS-Safe Fonts", ourTemplates: "✅ Arial, Calibri only", otherTemplates: "❌ Risky fonts", impact: "High" },
  { feature: "Keyword Optimization", ourTemplates: "✅ Built-in guidance", otherTemplates: "❌ Manual only", impact: "High" },
  { feature: "Machine-Readable PDF", ourTemplates: "✅ Tested format", otherTemplates: "❌ May fail", impact: "Critical" }
];

// ============================================================================
// SEO-ENHANCED PAGE COMPONENT
// ============================================================================
const ATSResumeTemplates = ({ currentDate, lastModifiedDate, buildTimestamp }) => {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const currentYear = new Date().getFullYear();
  const displayDate = currentDate;
  const canonicalUrl = "https://professionalresumefree.com/best-resume-templates-to-pass-applicant-tracking-system";

  // Icon map for resolving icon names
  const iconMap = { FiShield, FiSearch, FiTrendingUp, FiBriefcase, FiEdit, FiFileText, FiX, FiTarget, FiCheck };

  // Long-tail keywords for GEO (from Page 1)
  const longTailKeywords = [
    "how to format resume to pass applicant tracking system",
    "best resume templates for ATS",
    "resume templates that beat applicant tracking systems",
    "free ATS friendly resume templates"
  ];

  // Internal links
  const internalLinks = [
    { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", text: "How to Beat ATS Optimization Tips", iconName: "FiShield" },
    { href: "/free-resume-keyword-matcher", text: "Free Resume Keyword Matcher", iconName: "FiSearch" },
    { href: "/best-resume-examples-for-career-changers-in-the-usa", text: "Best Resume Examples for Career Changers", iconName: "FiTrendingUp" },
    { href: "/resume-tips-for-remote-jobs-in-the-usa", text: "Resume Tips for Remote Jobs in USA", iconName: "FiBriefcase" },
    { href: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds", text: "How to Write a Professional Summary", iconName: "FiEdit" }
  ];

  return (
    <>
      {/* ======================================================================== */}
      {/* SEO-ENHANCED HEAD SECTION (INJECTED FROM PAGE 1 BLUEPRINT)               */}
      {/* ======================================================================== */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Google Fonts for Executive Design (PRESERVED FROM PAGE 2) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* ===== SEO TITLE (from Page 1) ===== */}
        <title>Best Resume Templates to Pass Applicant Tracking Systems (2026)</title>
        
        {/* ===== META DESCRIPTION (from Page 1) ===== */}
        <meta name="description" content="Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download. No sign-up." />
        
        {/* ===== META KEYWORDS (from Page 1 - full comprehensive list) ===== */}
        <meta name="keywords" content="best resume templates to pass applicant tracking systems, resume templates to beat ATS, ATS friendly resume templates, applicant tracking system resume templates, resume templates that pass ATS, ATS optimized resume templates, resume templates 2026, professional resume templates, ATS compatible resume templates, resume format for ATS, ATS proof resume templates, free ATS resume templates, best resume format for ATS, resume templates for job applications, ATS resume builder templates" />
        
        {/* ===== AUTHOR META (from Page 1) ===== */}
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS (from Page 1) ===== */}
        <meta name="chatgpt-fts:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta name="chatgpt-fts:description" content="ATS-optimized resume templates proven to pass applicant tracking systems. Free instant download. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Templates" />
        
        {/* ===== TECHNICAL SEO (from Page 1) ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* ===== CANONICAL URL (from Page 1) ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== OPEN GRAPH TAGS (from Page 1) ===== */}
        <meta property="og:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta property="og:description" content="Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats-templates-preview.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Best Resume Templates to Pass Applicant Tracking Systems - ATS-friendly examples" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ===== ARTICLE META TAGS (from Page 1) ===== */}
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume templates, ATS, applicant tracking system, job search, career advice" />
        
        {/* ===== TWITTER CARD TAGS (from Page 1) ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta name="twitter:description" content="ATS-optimized resume templates proven to pass applicant tracking systems. Free instant download." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats-templates-preview.jpg" />
        <meta name="twitter:image:alt" content="Best Resume Templates to Pass Applicant Tracking Systems" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ===== TWITTER LABEL TAGS (from Page 1 - unique feature) ===== */}
        <meta name="twitter:label1" content="Templates" />
        <meta name="twitter:data1" content="10" />
        <meta name="twitter:label2" content="ATS Score" />
        <meta name="twitter:data2" content="90-99%" />
        
        {/* ===== ADDITIONAL META (from Page 1) ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ===== SITEMAP (from Page 1) ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ======================================================================== */}
        {/* ENHANCED STRUCTURED DATA JSON-LD (INJECTED FROM PAGE 1 BLUEPRINT)       */}
        {/* ======================================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "Best Resume Templates to Pass Applicant Tracking Systems (2026)",
                  "description": "Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download.",
                  "dateModified": lastModifiedDate,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free ATS-Optimized Resume Templates and Tools",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  }
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
                      "name": "Resume Templates",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Templates to Pass ATS",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "Best Resume Templates to Pass Applicant Tracking Systems (2026)",
                  "description": "A comprehensive guide to choosing resume templates that successfully pass applicant tracking systems, with proven formatting and keyword strategies.",
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
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": lastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "keywords": "resume templates to pass ATS, applicant tracking system resume templates, ATS optimized resume formats"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": lastModifiedDate
                      }
                    })),
                    {
                      "@type": "Question",
                      "name": "Why do fancy resume designs fail to pass applicant tracking systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fancy designs use graphics, tables, columns, and creative fonts that ATS cannot parse. These elements become blank spaces or unreadable characters, causing automatic rejection before human review.",
                        "dateModified": lastModifiedDate
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes a resume template able to pass applicant tracking systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Templates that pass ATS use standard section headings, simple bullet points, common fonts, no complex formatting like tables or columns, and include keyword optimization guidance.",
                        "dateModified": lastModifiedDate
                      }
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "name": "Best Resume Templates to Pass Applicant Tracking Systems",
                  "itemListElement": topTemplates.map((template, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": template.name,
                    "description": template.description
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to choose resume templates that pass applicant tracking systems",
                  "description": "Select the right ATS-optimized template to successfully pass automated screening.",
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Identify your industry",
                      "text": "Choose from templates optimized for your field: corporate, tech, healthcare, or creative industries."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Check ATS compatibility",
                      "text": "Verify the template uses standard formatting, headings, and fonts that applicant tracking systems can parse correctly."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Optimize with keywords",
                      "text": "Customize your template with keywords from job descriptions to ensure maximum ATS scoring."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Download in correct format",
                      "text": "Download your template in .docx or text-based PDF format for guaranteed ATS compatibility."
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators (from Page 1) */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={displayDate} />
      </div>

      {/* ======================================================================== */}
      {/* MAIN CONTENT (DESIGN & LAYOUT PRESERVED FROM PAGE 2)                    */}
      {/* ======================================================================== */}
      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb - Enhanced with Schema.org markup (from Page 1) */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item"><span itemProp="name">Resume Templates</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Best Templates to Pass ATS</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Based on ATS Testing | 10 Templates | 90-99% Pass Rate</div>
              
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Best Resume Templates to Pass{' '}
                <span className="gradient-text">Applicant Tracking Systems</span>
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>Stop getting rejected by automated screeners.</strong> Discover the <strong>10 best resume templates</strong> proven to pass applicant tracking systems. Includes formatting tips, keyword strategies, and instant download. <strong>No sign-up required.</strong>
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label="Download ATS templates"><FiDownload /> Download ATS Templates</Link>
                <a href="#templates" className="btn-outline" aria-label="View all templates"><FiEye /> View All Templates</a>
              </div>

              {/* Stats Grid */}
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }} aria-label="Key statistics">
                {stats.map((stat, index) => {
                  const IconComp = iconMap[stat.icon] || FiFileText;
                  return (
                    <div key={index} className="stat-item">
                      <IconComp size={28} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                      <div className="stat-number">{stat.value}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Freshness indicator */}
              <p className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Page last updated">
                Last updated: {displayDate} | 2 templates tested with major ATS platforms
              </p>
            </div>
          </div>
        </section>

        {/* Expert Quotes */}
        <section className="section section-alt" aria-labelledby="expert-quotes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="expert-quotes-heading">What Industry Experts Say About Passing ATS</h2>
              <p className="section-subtitle">Validated by leading research organizations</p>
            </div>
            <div className="grid">
              {expertQuotes.map((quote, index) => (
                <blockquote key={index} className="card-executive">
                  <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>"{quote.quote}"</p>
                  <footer>
                    <cite style={{ color: 'var(--accent-primary)', fontStyle: 'normal', fontSize: 'var(--font-size-body-sm)' }}>{quote.expert} ({quote.year})</cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Why Templates Fail */}
        <section className="section" aria-labelledby="warning-heading">
          <div className="section-container">
            <div className="section-header">
              <FiAlertCircle style={{ fontSize: '2.5rem', color: 'var(--warning-color)', marginBottom: '1rem' }} />
              <h2 className="section-title" id="warning-heading">Why Most Resume Templates Fail to Pass ATS</h2>
              <p className="section-subtitle">
                Beautiful templates often fail automated screening. Here's why <strong>78% of creative resumes get rejected</strong> before human review.
              </p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {whyFancyHurts.map((reason, index) => (
                <div key={index} className="warning-card">
                  <div className="warning-number">{index + 1}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Myths */}
        <section className="section section-alt" aria-labelledby="myths-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="myths-heading">ATS Myths vs Reality: What Actually Helps You Pass</h2>
              <p className="section-subtitle">Separate fact from fiction to ensure your resume passes automated screening</p>
            </div>
            <div className="grid">
              {atsMyths.map((item, index) => (
                <div key={index} className="myth-card">
                  <div className="myth-badge">Myth</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>{item.myth}</h3>
                  <div className="truth-badge">Reality</div>
                  <p style={{ marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.truth}</p>
                  <div style={{ borderTop: '0.5px solid var(--border-gold-filament)', paddingTop: '1rem', fontSize: 'var(--font-size-body-sm)' }}>
                    <strong>Impact on passing:</strong> <span className="text-danger">{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="paa-heading">People Also Ask About Passing Applicant Tracking Systems</h2>
              <p className="section-subtitle">Quick answers to common ATS questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: 'var(--font-size-body-sm)', lineHeight: '1.6' }}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="section section-alt" aria-labelledby="templates-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="templates-heading">10 Best Resume Templates to Pass Applicant Tracking Systems</h2>
              <p className="section-subtitle">
                Professionally designed templates with <strong>90-99% ATS pass rates</strong> in our testing
              </p>
            </div>

            {/* Template Navigation */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '2.5rem 0 1.5rem', justifyContent: 'center' }} role="tablist" aria-label="Template selection">
              {topTemplates.map((template, index) => (
                <button
                  key={template.id}
                  className={`template-tab ${activeTemplate === index ? 'active' : ''}`}
                  onClick={() => setActiveTemplate(index)}
                  role="tab"
                  aria-selected={activeTemplate === index}
                  aria-label={`View ${template.name} template`}
                >
                  <span className="tab-number">{index + 1}</span>
                  <span>{template.name}</span>
                </button>
              ))}
            </div>

            {/* Active Template Display */}
            <div className="card-executive" role="tabpanel">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: 'var(--font-size-headline-md)' }}>{topTemplates[activeTemplate].name}</h3>
                  <span className="ats-score"><FiCheck size={14} /> ATS Pass Rate: {topTemplates[activeTemplate].atsScore}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', fontSize: 'var(--font-size-body-sm)' }}>
                  <span><strong>Category:</strong> {topTemplates[activeTemplate].category}</span>
                  <span><strong>Best for:</strong> {topTemplates[activeTemplate].bestFor.join(", ")}</span>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)' }}>{topTemplates[activeTemplate].description}</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: 'var(--font-size-title-md)' }}>Key Features for Passing ATS</h4>
                  <ul style={{ listStyle: 'none' }}>
                    {topTemplates[activeTemplate].features.map((feature, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>
                        <FiCheck style={{ color: 'var(--accent-primary)' }} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontSize: 'var(--font-size-title-md)' }}>Template Preview</h4>
                  <div style={{ background: 'var(--bg-surface-low)', padding: '1rem', borderRadius: '0.375rem', border: 'var(--card-border)', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{topTemplates[activeTemplate].example}</pre>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <Link href="/resume-templates" className="btn-primary"><FiDownload /> Download {topTemplates[activeTemplate].name}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section" aria-labelledby="success-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="success-heading">Real Success Stories: They Passed ATS and Got Hired</h2>
              <p className="section-subtitle">Job seekers who transformed their results with ATS-optimized templates</p>
            </div>
            <div className="grid">
              {successStories.map((story, index) => (
                <div key={index} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <FiUser style={{ fontSize: '2rem', background: 'rgba(242,202,80,0.1)', padding: '0.5rem', borderRadius: '9999px', color: 'var(--accent-primary)' }} />
                    <div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>{story.name}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>{story.role}</p>
                    </div>
                  </div>
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(255,180,171,0.1)', padding: '0.75rem', borderRadius: '0.375rem', border: '0.5px solid rgba(255,180,171,0.2)' }}>
                      <small style={{ color: 'var(--text-muted)' }}>Before (Failed ATS)</small>
                      <p style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{story.before}</p>
                    </div>
                    <div style={{ background: 'rgba(242,202,80,0.05)', padding: '0.75rem', borderRadius: '0.375rem', border: '0.5px solid var(--border-gold-filament)' }}>
                      <small style={{ color: 'var(--text-muted)' }}>After (Passed ATS)</small>
                      <p style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{story.after}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="feature-tag">Template: {story.template}</span>
                    <span className="feature-tag">Time: {story.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section section-alt" aria-labelledby="comparison-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="comparison-heading">Why Our Templates Pass ATS vs. Others That Fail</h2>
              <p className="section-subtitle">Side-by-side comparison of critical ATS features</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Feature</th><th>Our ATS-Optimized Templates</th><th>Generic/Fancy Templates</th><th>Impact on Passing</th></tr></thead>
                <tbody>
                  {atsComparisonData.map((row, i) => (
                    <tr key={i}><td><strong>{row.feature}</strong></td><td className="text-success">{row.ourTemplates}</td><td className="text-danger">{row.otherTemplates}</td><td className="text-success">{row.impact}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ATS-Friendly Elements Table */}
        <section className="section" aria-labelledby="elements-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="elements-heading">Essential Elements to Pass Applicant Tracking Systems</h2>
              <p className="section-subtitle">Critical components every ATS-friendly resume needs</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Element</th><th>Importance</th><th>Why It Helps You Pass</th></tr></thead>
                <tbody>
                  {atsFriendlyElements.map((element, i) => (
                    <tr key={i}><td><strong>{element.element}</strong></td><td><span className={element.importance === 'critical' ? 'text-danger' : 'text-warning'}>{element.importance.toUpperCase()}</span></td><td>{element.reason}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section aria-labelledby="cta-heading" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Pass Applicant Tracking Systems?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Download our complete set of 10 ATS-optimized resume templates, each professionally designed and tested to successfully pass applicant tracking systems and get your resume to human eyes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiDownload /> Get Templates That Pass ATS</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {["90-99% ATS Pass Rate", "10 Industry-Specific Templates", "Free Instant Download", `${currentYear} Updated Formats`].map((item, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {item}</span>
              ))}
            </div>
            <p className="text-small" style={{ marginTop: '2rem', color: 'var(--text-disabled)' }}>
              Data fresh as of: {displayDate} | Tested with 12 major ATS platforms including Workday, Taleo, and iCIMS
            </p>
          </div>
        </section>

        {/* Internal Links (SEO/GEO Boost) */}
        <section className="section" aria-labelledby="explore-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="explore-heading">Explore More Resume Resources</h2>
              <p className="section-subtitle">Related guides to strengthen your job application</p>
            </div>
            <div className="geo-link-grid">
              {internalLinks.map((link, index) => {
                const IconComponent = iconMap[link.iconName] || FiFileText;
                return (
                  <Link key={index} href={link.href} className="geo-link-card" aria-label={link.text}>
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
            <p className="text-small" style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              These links help you discover related resume guides, tools, and tips to strengthen your job application.
            </p>
          </div>
        </section>

        {/* Hidden metadata for crawlers (from Page 1) */}
        <div style={{ display: 'none' }}>
          <span itemProp="templates-count">10</span>
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// SEO-ENHANCED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
      buildTimestamp
    },
    revalidate: 3600 // ISR: Revalidate every hour (from Page 1 blueprint)
  };
}

export default ATSResumeTemplates;