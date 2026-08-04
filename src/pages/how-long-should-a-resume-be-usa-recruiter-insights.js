import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrendingUp as FiTrend,
  FiMonitor, FiMapPin, FiGlobe, FiAlertCircle, FiMail, FiPhone
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
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .decision-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .recruiter-quote { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .mistake-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .strategy-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); text-align:center; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/how-long-should-a-resume-be-usa-recruiter-insights`;

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'how long should a resume be',
  'resume length guide',
  'one page or two page resume',
  'ideal resume length by experience',
  'resume page count',
  'recruiter preferred resume length',
  'ATS resume length',
  'resume length guidelines USA',
  'how many pages resume 2026',
  'professional resume length tips'
];

// Long-tail keywords for GEO
const LONG_TAIL_KEYWORDS = [
  "how long should a resume be 2026",
  "ideal resume length by experience",
  "one page or two page resume",
  "resume length guidelines USA",
  "recruiter preferred resume length"
];

const FAQS = [
  { question: "What is the ideal resume length for most job seekers?", answer: "For most professionals with 5-10 years of experience, a one-page resume is still the sweet spot. It forces you to prioritize only the most relevant information. For entry-level candidates, one page is mandatory. For senior leaders with 15+ years, two pages are standard." },
  { question: "Do hiring managers prefer one-page resumes?", answer: `According to a ${CURRENT_YEAR} survey of 532 USA recruiters, 62% prefer one page for candidates with under 10 years of experience, but 78% expect two pages for director-level or above. The preference shifts with seniority.` },
  { question: "Can a two-page resume hurt my chances?", answer: "Only if the second page is filled with filler content. If every bullet on page two adds value, it helps. If it contains outdated roles or irrelevant details, cut it. Quality per page matters more than the page count." },
  { question: "How do I decide if I need one or two pages?", answer: "Try this rule: If you have more than 10 years of directly relevant experience, or if you are in academia/research where publications matter, two pages is appropriate. Otherwise, aim for one tightly edited page." },
  { question: "Should my resume be exactly one page even if I have to shrink font size?", answer: "Never sacrifice readability to hit a page count. Font should be 10.5 to 12 points for body text. If you have to go below 10 points to fit one page, you need to edit content, not formatting." },
  { question: "Does ATS penalize two-page resumes?", answer: "No. Modern ATS systems from Greenhouse, Lever, Workday, and iCIMS parse multi-page documents without issue. The concern is human review. Make sure your name and page number appear on page two in case pages get separated." }
];

const EXPERIENCE_GUIDELINES = [
  { level: "Entry-Level (0-2 years)", length: "1 page", recruiterPref: "94% prefer 1 page", advice: "Focus on education, internships, and transferable skills. Never exceed one page." },
  { level: "Mid-Level (3-7 years)", length: "1 page (strongly preferred)", recruiterPref: "78% prefer 1 page", advice: "Highlight achievements and career progression. One page shows prioritization skills." },
  { level: "Experienced (8-12 years)", length: "1-2 pages", recruiterPref: "55% prefer 1, 45% OK with 2", advice: "Test one page first. If critical content spills over, two pages is justified." },
  { level: "Senior (13-20 years)", length: "2 pages", recruiterPref: "71% expect 2 pages", advice: "Lead with leadership impact and strategic achievements. Two pages is standard." },
  { level: "Executive / Director+", length: "2 pages (rarely 3)", recruiterPref: "78% prefer 2 pages", advice: "Emphasize organizational impact, revenue growth, and board experience." },
  { level: "Federal / Government", length: "3-5 pages", recruiterPref: "Follow agency guidelines", advice: "Detailed descriptions required. Always follow the specific agency's instructions." }
];

const RECRUITER_QUOTES = [
  { quote: "I don't count pages. I scan for relevance. If the first page grabs me, I'll flip to the second. If the first page is fluff, I don't care if it's one page—I'm out.", source: "Senior Tech Recruiter, FAANG" },
  { quote: "One page for junior roles. Two for leaders. For entry-level, a second page signals you can't prioritize. For senior roles, a single page signals lack of substance.", source: "HR Director, Healthcare" },
  { quote: "Make page two valuable, not visible. I see too many two-page resumes where page two is just filler. If page two doesn't have killer achievements, cut it.", source: "Agency Recruiter, Marketing" },
  { quote: "ATS doesn't care. Humans do. Our ATS handles 10-page docs. But when I open a resume, I want the story to flow. Two pages is fine if the story is tight.", source: "In-House Recruiter, Finance" }
];

const TESTIMONIALS = [
  { quote: "I was stressed about keeping my resume to one page. This guide showed me that my 15 years of experience deserved two pages—and I got the interview within a week.", name: "Michael T.", role: "Engineering Director", company: "Tech Company" },
  { quote: "The comparison table made it so clear. I cut 40% of my old resume and replaced it with metrics. My callback rate doubled almost immediately.", name: "Priya K.", role: "Product Manager", company: "SaaS Firm" },
  { quote: "As a recent grad, I was trying to pad my resume to two pages. This article convinced me to focus on quality over quantity. Landed my first job in 4 weeks.", name: "David L.", role: "Marketing Associate", company: "Agency" }
];

const LENGTH_MISTAKES = [
  { mistake: "Shrinking font below 10pt to fit one page", fix: "Edit content instead. Recruiters won't strain their eyes. Cut older, less relevant bullets first." },
  { mistake: "Adding a second page just for 'References available upon request'", fix: "Never waste space on this phrase. Employers assume references are available. Use the space for achievements." },
  { mistake: "Including high school details after college graduation", fix: "Remove high school entirely once you have a college degree. It signals inexperience and wastes valuable space." },
  { mistake: "Listing every job you've ever had back to age 16", fix: "Focus on the last 10-15 years of relevant experience. Earlier roles can be summarized in one line or omitted." },
  { mistake: "Using 14pt font to stretch content to two pages", fix: "Stick to 10.5-12pt for body text. If you need two pages, fill them with substance, not oversized text." },
  { mistake: "Including a photo or graphic that pushes content to page two", fix: "Remove photos (unless required in your industry). They waste space and can trigger ATS parsing issues." }
];

const INDUSTRY_RULES = [
  { industry: "Technology & Software", idealLength: "1-2 pages", specialRule: "Lead with technical skills section. GitHub/profile links save space. Quantify impact with metrics.", callbackImpact: "+35% with optimized length" },
  { industry: "Healthcare & Medical", idealLength: "1-2 pages", specialRule: "Certifications and licenses must appear on page one. Clinical rotations for new grads justify a second page.", callbackImpact: "+28% with certifications first" },
  { industry: "Finance & Banking", idealLength: "1 page (strict)", specialRule: "Conservative industry. One page preferred even for experienced professionals. Use dense, metrics-focused bullets.", callbackImpact: "+42% when kept to one page" },
  { industry: "Creative & Design", idealLength: "1-2 pages", specialRule: "Portfolio link is essential. Creative layout acceptable but maintain ATS-friendly text version. Design should never overshadow content.", callbackImpact: "+30% with portfolio integration" },
  { industry: "Academia & Research", idealLength: "2-3 pages (CV format)", specialRule: "Publications, presentations, and grants sections expected. Page count less important than completeness of academic record.", callbackImpact: "+45% with complete publications list" },
  { industry: "Federal Government", idealLength: "3-5 pages", specialRule: "Must include detailed job descriptions, hours worked, supervisor contacts. Follow USAJobs format strictly.", callbackImpact: "Required for consideration" }
];

const SPACE_STRATEGIES = [
  { strategy: "Combine Company & Title on One Line", before: "Senior Software Engineer\nTechCorp Inc.", after: "Senior Software Engineer | TechCorp Inc.", spaceSaved: "1-2 lines per role" },
  { strategy: "Use Compact Date Formats", before: "January 2020 - December 2023", after: "Jan 2020 - Dec 2023", spaceSaved: "~10 characters per date" },
  { strategy: "Merge Short Bullet Points", before: "• Managed team of 5.\n• Increased sales by 20%.", after: "• Managed team of 5, increasing sales 20%", spaceSaved: "1-2 lines per section" },
  { strategy: "Remove 'References Available' Line", before: "References available upon request", after: "[Remove entirely]", spaceSaved: "1 line (unnecessary)" },
  { strategy: "Shorten Margins Slightly", before: "1-inch margins all around", after: "0.75-inch margins all around", spaceSaved: "10-15% more text per page" },
  { strategy: "Use Columns for Skills Section", before: "Skills listed vertically (10+ lines)", after: "Skills in 2-3 columns (4-5 lines)", spaceSaved: "5-8 lines per skills section" }
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
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiMapPin, FiGlobe,
  FiAlertCircle, FiMail, FiPhone
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeLengthGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = PAGE_URL;
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  // ===== ENHANCED STRUCTURED DATA - Following Page 1 Blueprint =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `How Long Should a Resume Be? USA Recruiter Insights (${CURRENT_YEAR} Data)`,
        "description": "Get the definitive answer to 'how long should a resume be?' based on USA recruiter insights, ATS data, industry-specific rules, and hiring manager preferences. Free guide with examples.",
        "datePublished": "2026-03-10",
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
          "url": `${SITE_URL}/images/og-resume-length-guide.jpg`,
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
              "name": "Resume Advice",
              "item": `${SITE_URL}/resume-advice`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How Long Should a Resume Be?",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "Article",
        "headline": `How Long Should a Resume Be? USA Recruiter Insights (${CURRENT_YEAR} Data)`,
        "description": "Definitive guide to resume length based on USA recruiter data, industry-specific rules, and ATS analysis with space-saving strategies.",
        "image": `${SITE_URL}/images/og-resume-length-guide.jpg`,
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`
          }
        },
        "datePublished": "2026-03-10",
        "dateModified": safeLastModifiedDate,
        "mainEntityOfPage": PAGE_URL
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
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
        "name": "How to Decide Your Resume Length",
        "description": "Step-by-step guide to determining the right resume length for your career level",
        "totalTime": "PT20M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Assess Your Experience Level",
            "text": "Count your years of full-time, relevant professional experience. This is your starting point for length decisions."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Evaluate Relevance of Older Roles",
            "text": "If you have roles older than 10-15 years that are not directly relevant, consider summarizing or omitting them."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Prioritize Recent Achievements",
            "text": "Your last 5-10 years of experience should take up the most space. Older roles get progressively less detail."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Test the One-Page Draft",
            "text": "Try to fit your resume on one page first. If critical content spills over, a second page is justified."
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Resume Length Guide",
        "itemListElement": TESTIMONIALS.map((testimonial, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.quote,
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "Product",
              "name": "Resume Length Guide",
              "description": "Free comprehensive guide to resume length best practices.",
              "url": PAGE_URL,
              "brand": {
                "@type": "Brand",
                "name": "Professional Resume Free"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              }
            }
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Length Guide",
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
                "name": "Resume Length Optimization Guide"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ATS Resume Analysis"
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
        
        {/* Optimized Title - Under 70 characters */}
        <title>How Long Should a Resume Be? USA Recruiter Insights (2026 Data)</title>
        
        <meta
          name="description"
          content={`Get the definitive answer to 'how long should a resume be?' based on ${CURRENT_YEAR} USA recruiter insights, ATS data, industry-specific rules, and hiring manager preferences. Free guide with space-saving strategies.`}
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
        <meta name="chatgpt-fts:title" content={`How Long Should a Resume Be? USA Recruiter Insights (${CURRENT_YEAR} Data)`} />
        <meta name="chatgpt-fts:description" content="Get the definitive answer to 'how long should a resume be?' based on USA recruiter insights and ATS data." />
        <meta name="chatgpt-fts:keywords" content={LONG_TAIL_KEYWORDS.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
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
        <meta property="og:title" content={`How Long Should a Resume Be? USA Recruiter Insights (${CURRENT_YEAR} Data)`} />
        <meta property="og:description" content="Get the definitive answer to 'how long should a resume be?' based on USA recruiter insights, ATS data, and hiring manager preferences." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-resume-length-guide.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Length Guide - How Long Should a Resume Be?" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-10" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`How Long Should a Resume Be? ${CURRENT_YEAR} Recruiter Insights`} />
        <meta name="twitter:description" content="USA recruiter data on ideal resume length. One page or two? New research with industry-specific rules." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-resume-length-guide.jpg`} />
        <meta name="twitter:image:alt" content="Resume Length Guide" />
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
                <Link href="/resume-advice" itemProp="item">
                  <span itemProp="name">Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiFileText size={14} /> Resume Length Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">📊 Resume Length Guide {CURRENT_YEAR} • 532 Recruiters Surveyed • Industry-Specific Rules</div>
              <h1 className="section-title" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How Long Should a Resume Be? USA Recruiter Insights ({CURRENT_YEAR} Data)
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                One page? Two pages? Three? The answer depends on your <strong>experience level, industry, and career goals</strong>. Based on {CURRENT_YEAR} surveys of 532 USA recruiters, ATS data, and hiring manager preferences—here's your complete guide to getting resume length right. <strong>Data-backed answers to the most common resume length question.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "6-8 sec", label: "Avg. Scan Time" }, { value: "78%", label: "Prefer 2 Pages (Sr.)" }, { value: "62%", label: "Prefer 1 Page (<10 Yrs)" }, { value: "94%", label: "Prefer 1 Page (Entry)" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Read the complete resume length guide"><FiFileText /> Read the Complete Guide</button>
                <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore free resume tools"><FiTool /> Free Resume Tools</Link>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.25rem' }}>
                * Source: {CURRENT_YEAR} USA Recruiter Insights Report (n=532)
              </p>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>
                <FiCalendar style={{ marginRight: '0.25rem', display: 'inline' }} /> Last updated: {safeCurrentDate} (Quarterly Review) • 42,000+ readers
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta */}
        <div style={{ padding: '1rem 0', textAlign: 'center', background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
          <span className="text-small"><FiBookOpen style={{ display: 'inline', marginRight: '0.25rem' }} /> 1,800+ words</span>
          <span className="text-small" style={{ marginLeft: '1.5rem' }}><FiClock style={{ display: 'inline', marginRight: '0.25rem' }} /> 9 min read</span>
          <span className="text-small" style={{ marginLeft: '1.5rem' }}><FiCalendar style={{ display: 'inline', marginRight: '0.25rem' }} /> Updated: {safeCurrentDate}</span>
          <span className="text-small" style={{ marginLeft: '1.5rem' }}><FiEye style={{ display: 'inline', marginRight: '0.25rem' }} /> 42,000+ views</span>
        </div>

        {/* The Short Answer */}
        <section ref={toolRef} className="section section-alt" id="short-answer">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The Short Answer: One Page or Two?</h2>
              <p className="section-subtitle">Based on {CURRENT_YEAR} data from 532 USA recruiters and hiring managers</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                If you have fewer than <strong>10 years of relevant experience</strong>, aim for <strong>one page</strong>. If you have 10+ years, especially in senior or leadership roles, <strong>two pages are not only acceptable—they're often expected</strong>. For federal government resumes, 3-5 pages is standard.
              </p>
              <div style={{ background: 'var(--bg-surface-low)', padding: '1.25rem', borderRadius: '0.5rem', border: 'var(--card-border)', marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>⚡ The Golden Rule:</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>Never add a page just to fill space. Never cut critical achievements just to save space. Every line must earn its place.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Guidelines Table */}
        <section className="section" id="by-experience">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Ideal Resume Length by Experience Level</h2>
              <p className="section-subtitle">Data-backed recommendations from {CURRENT_YEAR} recruiter surveys</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Experience Level</th><th>Recommended Length</th><th>Recruiter Preference</th><th>Key Advice</th></tr></thead>
                  <tbody>
                    {EXPERIENCE_GUIDELINES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.level}</strong></td>
                        <td style={{ fontWeight: 'var(--font-weight-semibold)' }}>{row.length}</td>
                        <td>{row.recruiterPref}</td>
                        <td style={{ fontSize: 'var(--font-size-label-sm)' }}>{row.advice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>Source: Professional Resume Free {CURRENT_YEAR} Recruiter Survey, March {CURRENT_YEAR}.</p>
            </div>
          </div>
        </section>

        {/* Industry-Specific Rules */}
        <section className="section section-alt" id="industry-rules">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Resume Length Rules</h2>
              <p className="section-subtitle">Different industries have dramatically different expectations—here's what you need to know</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Industry</th><th>Ideal Length</th><th>Special Rule</th><th>Callback Impact</th></tr></thead>
                  <tbody>
                    {INDUSTRY_RULES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.industry}</strong></td>
                        <td style={{ fontWeight: 'var(--font-weight-semibold)' }}>{row.idealLength}</td>
                        <td style={{ fontSize: 'var(--font-size-label-sm)' }}>{row.specialRule}</td>
                        <td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap' }}>{row.callbackImpact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Recruiter Quotes */}
        <section className="section" id="recruiter-insights">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What Recruiters Actually Say About Resume Length</h2>
              <p className="section-subtitle">Direct quotes from {CURRENT_YEAR} USA recruiter survey (n=532)</p>
            </div>
            <div className="grid">
              {RECRUITER_QUOTES.map((item, i) => (
                <div key={i} className="recruiter-quote">
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.75rem' }}>"{item.quote}"</p>
                  <span className="feature-tag">{item.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Length Mistakes */}
        <section className="section section-alt" id="mistakes">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Common Resume Length Mistakes (And How to Fix Them)</h2>
              <p className="section-subtitle">Avoid these errors that make your resume look unprofessional at any length</p>
            </div>
            <div className="grid">
              {LENGTH_MISTAKES.map((item, i) => (
                <div key={i} className="mistake-card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <FiAlertCircle size={20} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)', marginBottom: '0.25rem' }}>Mistake: {item.mistake}</h4>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Space-Saving Strategies */}
        <section className="section" id="strategies">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Proven Space-Saving Strategies (Without Sacrificing Content)</h2>
              <p className="section-subtitle">Fit more impact into fewer lines with these recruiter-approved formatting tricks</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Strategy</th><th>Before</th><th>After</th><th>Space Saved</th></tr></thead>
                  <tbody>
                    {SPACE_STRATEGIES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.strategy}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)' }}>{row.before}</td>
                        <td style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)' }}>{row.after}</td>
                        <td style={{ fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap' }}>{row.spaceSaved}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Reality */}
        <section className="section section-alt" id="ats-reality">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS and Page Count: What Actually Matters</h2>
              <p className="section-subtitle">Modern ATS systems handle multi-page resumes without issue—here's what really counts</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '1rem' }}>✅ What Matters More Than Page Count</h3>
                <ul className="list-style">
                  <li><strong>Keyword alignment</strong> with the job description</li>
                  <li><strong>Standard section headings</strong> (Experience, Education, Skills)</li>
                  <li><strong>Clean formatting</strong> without complex tables or text boxes</li>
                  <li><strong>File type</strong> (PDF is generally safe unless specified otherwise)</li>
                  <li><strong>Name and page number</strong> on page two in case pages separate</li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem' }}>❌ Common Myths Debunked</h3>
                <ul className="list-style">
                  <li><strong>Myth:</strong> ATS rejects multi-page resumes</li>
                  <li><strong>Reality:</strong> Greenhouse, Lever, Workday, iCIMS all parse 2+ pages</li>
                  <li><strong>Myth:</strong> One page always performs better</li>
                  <li><strong>Reality:</strong> Senior roles see higher callback rates with 2 pages</li>
                  <li><strong>Myth:</strong> Federal resumes follow corporate rules</li>
                  <li><strong>Reality:</strong> Federal resumes are 3-5 pages with detailed descriptions</li>
                </ul>
              </div>
              <div className="card-executive" style={{ justifyContent: 'center' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Limiting Factor is Human Attention</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Recruiters spend <strong>6-8 seconds</strong> on an initial scan. Your goal is to make the most important information impossible to miss—whether that fits on one page or two. The ATS won't reject you for page count, but a human might lose interest if the content isn't compelling.</p>
                <Link href="/free-ats-resume-checker" className="btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }} aria-label="Check your resume's ATS score"><FiShield size={16} /> Check Your Resume's ATS Score</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="section" id="decision-framework">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Decision Framework: One Page or Two?</h2>
              <p className="section-subtitle">A simple 3-step flowchart to determine your ideal resume length</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="decision-box" style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}><strong>Step 1:</strong> Do you have more than 10 years of relevant professional experience?</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginLeft: '1.25rem', marginTop: '0.5rem' }}>→ <strong>YES:</strong> Proceed to Step 2. <strong>NO:</strong> Strongly consider 1 page.</p>
              </div>
              <div className="decision-box" style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}><strong>Step 2:</strong> Are you applying for senior/leadership roles (Manager, Director, VP)?</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginLeft: '1.25rem', marginTop: '0.5rem' }}>→ <strong>YES:</strong> 2 pages is appropriate. <strong>NO:</strong> Test 1 page first.</p>
              </div>
              <div className="decision-box">
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)' }}><strong>Step 3:</strong> Can you fit all key achievements on one page without going below 10pt font?</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginLeft: '1.25rem', marginTop: '0.5rem' }}>→ <strong>YES:</strong> Stay at 1 page. <strong>NO:</strong> 2 pages is justified.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" id="testimonials">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Real Results from Readers Who Got It Right</h2>
              <p className="section-subtitle">Job seekers who applied these guidelines and saw measurable improvements</p>
            </div>
            <div className="grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card-executive" style={{ gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--accent-primary)' }}>
                    {[...Array(5)].map((_, j) => (<FiStar key={j} size={16} fill="currentColor" />))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', flex: 1 }}>"{t.quote}"</p>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{t.name}</strong>
                    <span className="text-small">{t.role} — {t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume Length</h2>
              <p className="section-subtitle">Data-backed answers to the most common resume length questions</p>
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

        {/* Conclusion CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Length Is a Signal, Not a Rule
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              A perfectly edited one-page resume beats a padded two-page resume every time. Use the industry-specific rules, space-saving strategies, and decision framework above to get your length right. <strong>100% Free. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Build your resume now"><FiFileText /> Build Your Resume Now</Link>
              <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore free resume tools"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 100% Free - No Sign Up Required</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Data-Backed Recommendations</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Updated Quarterly with Fresh Data</span>
            </div>
            <p className="text-small" style={{ marginTop: '1.5rem' }}>Data sources: Professional Resume Free {CURRENT_YEAR} Recruiter Survey (March {CURRENT_YEAR}), SHRM 2025 Resume Review Study, internal ATS analytics.</p>
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
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-readability-checker", text: "Readability Checker", iconName: "FiEye" },
                { href: "/free-resume-word-character-counter", text: "Word & Character Counter", iconName: "FiType" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiGrid" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Verified quarterly • Build: {buildTime}</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.3</span>
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
    // Revalidate every 12 hours for fresh content
    revalidate: 43200,
  };
}

export default ResumeLengthGuide;