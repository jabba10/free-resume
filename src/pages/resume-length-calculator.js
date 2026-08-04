// pages/resume-length-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { 
  FiHome, FiChevronRight, FiLayout, FiTarget, FiFileText,
  FiCalendar, FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw,
  FiHelpCircle, FiAlertCircle, FiCheckCircle, FiAlertTriangle,
  FiEdit, FiBook, FiDollarSign, FiTrendingUp, FiClock,
  FiSearch, FiZap, FiAward, FiUser, FiTool, FiBarChart2
} from 'react-icons/fi';

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
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --glass-blur: 20px;
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-radius: 0.375rem; --input-padding: 0.75rem 1rem;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:1.6; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); }
  h1 { font-size:var(--font-size-display-lg); line-height:1.1; font-weight:700; margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:1.2; font-weight:700; }
  h3 { font-size:var(--font-size-headline-lg); line-height:1.2; font-weight:600; font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); }
  strong { color:var(--text-primary); font-weight:600; }
  a { color:var(--accent-primary); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50,#d4af37,#ffe088); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 1rem; } }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; cursor:pointer; text-decoration:none; min-width:200px; box-shadow:0 2px 8px rgba(0,0,0,0.3); transition:all 0.2s; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; cursor:pointer; text-decoration:none; min-width:200px; transition:all 0.2s; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all 0.2s; }
  .card-executive:hover { border-color:rgba(212,175,55,0.3); transform:translateY(-2px); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:600; }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.5rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:700; color:var(--accent-primary); display:block; font-family:var(--font-display); margin-bottom:0.25rem; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:600; }
  .text-danger { color:var(--error-color); font-weight:600; }
  .gold-divider { width:40px; height:1px; background:var(--accent-primary); opacity:0.6; margin:1.5rem auto; }
  .input-group { margin-bottom:1.5rem; }
  .input-label { display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-weight:500; font-size:var(--font-size-body-sm); }
  .input-field { width:100%; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-size:1rem; }
  .input-field:focus { outline:none; border-color:var(--accent-primary); }
  select.input-field { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  .result-box { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; margin-top:2rem; }
  .recommendation-item { display:flex; align-items:center; gap:0.75rem; padding:0.75rem; background:var(--card-bg); border-radius:0.375rem; border:var(--card-border); margin-bottom:0.5rem; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all 0.15s; }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all 0.2s; min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.4); color:inherit; }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:600; }
  .skip-link:focus { top:0; }
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

const CURRENT_YEAR = new Date().getFullYear();

const LENGTH_GUIDELINES = {
  'entry': { name: 'Entry Level (0-3 years)', minPages: 1, maxPages: 1, maxBulletsPerRole: 4, targetWords: 300, description: 'One page is standard for entry-level candidates. Demonstrates conciseness and prioritization\u2014qualities valued in entry-level hires.' },
  'mid': { name: 'Mid-Career (3-10 years)', minPages: 1, maxPages: 2, maxBulletsPerRole: 6, targetWords: 500, description: '1-2 pages depending on experience depth. Use the second page only if you have genuinely differentiating content.' },
  'senior': { name: 'Senior (10-15 years)', minPages: 2, maxPages: 2, maxBulletsPerRole: 8, targetWords: 700, description: 'Two pages recommended for senior professionals. Focus 80% of content on the last 5-7 years of experience.' },
  'executive': { name: 'Executive (15+ years)', minPages: 2, maxPages: 3, maxBulletsPerRole: 10, targetWords: 900, description: '2-3 pages acceptable for executives. Lead with enterprise-level impact and strategic contributions.' },
  'academic': { name: 'Academic CV', minPages: 2, maxPages: 5, maxBulletsPerRole: 6, targetWords: 1000, description: 'Academic CVs can be longer with publications, research, and teaching experience documented comprehensively.' }
};

const RESUME_STATISTICS = [
  { value: "43%", label: "Resumes Rejected for Incorrect Length" },
  { value: "7.4s", label: "Average Initial Resume Scan Time" },
  { value: "3x", label: "More Interviews with Optimal Length" },
  { value: "5", label: "Experience Levels Supported" }
];

const FEATURES = [
  { icon: 'FiLayout', title: 'Personalized Page Recommendations', desc: 'Get the optimal page count for your specific experience level based on industry standards and recruiter expectations. Avoid the #1 formatting mistake that costs interviews.', stat: 'Customized' },
  { icon: 'FiFileText', title: 'Precision Word Count Targets', desc: 'Know the exact word count range that maximizes recruiter engagement. Resumes with optimal word counts receive 40% more attention from hiring managers.', stat: 'Precise' },
  { icon: 'FiTarget', title: 'Bullet Point Density Analysis', desc: 'Learn exactly how many bullet points per role optimize readability while satisfying ATS keyword requirements. Balance information density with scannability.', stat: 'ATS-Friendly' },
  { icon: 'FiAlertTriangle', title: 'Real-Time Length Diagnostics', desc: 'Instant alerts if your resume is too long or too short for your experience level. Get actionable recommendations to fix length issues immediately.', stat: 'Essential' },
  { icon: 'FiBarChart2', title: 'Content Estimation Engine', desc: "Our calculator estimates your resume\u2019s page count and word count based on your input parameters, helping you plan before you write.", stat: 'Predictive' },
  { icon: 'FiShield', title: 'Complete Privacy Protection', desc: 'All calculations happen in your browser. No data is ever stored, transmitted, or shared. Your resume details remain completely confidential.', stat: '100% Private' }
];

const FAQS = [
  { 
    question: "How many pages should my resume be in " + CURRENT_YEAR + "?", 
    answer: "Resume length follows clear experience-based guidelines. Entry-level candidates (0-3 years) should maintain a single page\u2014this demonstrates conciseness and prioritization. Mid-career professionals (3-10 years) can use 1-2 pages, but only extend to page two if you have genuinely differentiating content. Senior professionals (10-15 years) should use 2 pages to document leadership experience and strategic impact. Executives (15+ years) may extend to 2-3 pages for enterprise-level achievements. Academic CVs can be 2-5+ pages due to comprehensive publication and research documentation requirements. Critical rule: never exceed these guidelines. Recruiters interpret excessive length as inability to prioritize\u201443% of resumes are rejected for incorrect length alone." 
  },
  { 
    question: "How many bullet points should I include per role on my resume?", 
    answer: "Bullet point density follows a hierarchy based on role recency and relevance. For your most recent or most relevant position, include 4-6 achievement-focused bullets with quantified outcomes. For earlier or less relevant positions, 2-3 bullets may suffice. Entry-level candidates should use 3-4 bullets per role; mid-career professionals 4-6 bullets; senior professionals 6-8 bullets; and executives up to 10 bullets for their most significant roles. Every bullet point must earn its place by communicating specific, measurable value. Never include bullets that simply describe responsibilities without demonstrating impact. Use our calculator to determine the optimal bullet count for your experience level." 
  },
  { 
    question: "What\u2019s the ideal word count for a professional resume?", 
    answer: "Optimal word counts vary by experience level. Entry-level: 250-350 words for a focused single page. Mid-career: 400-600 words to document career progression and achievements. Senior: 600-800 words for comprehensive leadership documentation. Executive: 800-1,000 words for enterprise-level impact. Academic CVs can exceed 1,000 words due to publication requirements. Quality and relevance matter more than hitting an exact number\u2014every word should communicate specific value. Resumes within these ranges receive significantly more recruiter attention and have higher ATS pass rates. Use our calculator to determine your target word count based on your experience level." 
  },
  { 
    question: "Why is resume length so important for job applications?", 
    answer: "Resume length directly impacts your candidacy in three critical ways. First, recruiters spend an average of 7.4 seconds on initial resume screening\u2014a document of appropriate length can be fully scanned in this window, while an overly long resume guarantees that important content goes unseen. Second, 43% of resumes are rejected for formatting issues including incorrect length before content is evaluated. Third, Applicant Tracking Systems (ATS) process resumes more reliably when they fall within expected length parameters\u2014excessively long or short documents may trigger parsing errors. The right length signals professionalism, prioritization ability, and understanding of industry norms. Our calculator ensures your resume meets these expectations for your specific experience level." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "resume length calculator",
  "how long should my resume be",
  "resume page calculator",
  "resume word count tool",
  "optimal resume length",
  "resume size checker",
  "how many pages resume",
  "resume length guide 2026"
];

const ICON_MAP = { FiHome, FiChevronRight, FiLayout, FiTarget, FiFileText, FiCalendar, FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw, FiHelpCircle, FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiEdit, FiBook, FiDollarSign, FiTrendingUp, FiClock, FiSearch, FiZap, FiAward, FiUser, FiTool, FiBarChart2 };

const ResumeLengthCalculatorPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/resume-length-calculator";

  // Optimized title - under 70 characters
  const optimizedTitle = `Resume Length Calculator ${CURRENT_YEAR}: Find Your Optimal Pages`;

  const [experienceLevel, setExperienceLevel] = useState('mid');
  const [roleCount, setRoleCount] = useState('3');
  const [bulletsPerRole, setBulletsPerRole] = useState('5');
  const [currentPages, setCurrentPages] = useState('2');
  const [currentWords, setCurrentWords] = useState('500');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const calculateLength = useCallback(() => {
    const guidelines = LENGTH_GUIDELINES[experienceLevel];
    const roles = parseInt(roleCount) || 0;
    const bullets = parseInt(bulletsPerRole) || 0;
    const pages = parseInt(currentPages) || 0;
    const words = parseInt(currentWords) || 0;
    
    const recommendedPages = roles <= 2 ? guidelines.minPages : guidelines.maxPages;
    const pageStatus = pages < guidelines.minPages ? 'too-short' : pages > guidelines.maxPages ? 'too-long' : 'optimal';
    const wordStatus = words < guidelines.targetWords * 0.7 ? 'too-short' : words > guidelines.targetWords * 1.3 ? 'too-long' : 'optimal';
    const bulletStatus = bullets > guidelines.maxBulletsPerRole ? 'too-many' : bullets < 2 ? 'too-few' : 'optimal';
    
    const estimatedPages = Math.ceil((roles * bullets * 0.15));
    const estimatedWords = roles * bullets * 35;
    
    const warnings = [];
    if (pageStatus === 'too-long') warnings.push('Your resume may be too long for your experience level. Consider condensing to ' + recommendedPages + ' pages. Recruiters spend only 7.4 seconds on initial screening\u2014excessive length guarantees important content goes unseen.');
    if (pageStatus === 'too-short') warnings.push('Your resume is shorter than recommended. Consider adding more detail to key roles with quantified achievements and specific metrics.');
    if (wordStatus === 'too-long') warnings.push('Word count exceeds recommendations. Remove redundant content and focus exclusively on your most impactful achievements. Every word should communicate specific value.');
    if (wordStatus === 'too-short') warnings.push('Word count is below target. Add more quantified achievements using the CAR method (Challenge-Action-Result) with specific numbers and outcomes.');
    if (bulletStatus === 'too-many') warnings.push('Too many bullet points per role. Focus on your top ' + guidelines.maxBulletsPerRole + ' most impactful achievements per position. Quality over quantity.');

    setResults({ guidelines, recommendedPages, pageStatus, wordStatus, bulletStatus, estimatedPages, estimatedWords, warnings, roles, bullets, pages, words });
  }, [experienceLevel, roleCount, bulletsPerRole, currentPages, currentWords]);

  useEffect(() => { calculateLength(); }, [calculateLength]);

  const resetCalculator = () => {
    setExperienceLevel('mid'); setRoleCount('3'); setBulletsPerRole('5');
    setCurrentPages('2'); setCurrentWords('500'); setResults(null);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Find the optimal resume length for your experience level with our free ${CURRENT_YEAR} calculator. Get page count, word count, and bullet point recommendations. Check if your resume is too long or short. 100% private, no sign-up required.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Free ${CURRENT_YEAR} resume length calculator. Get personalized page count, word count, and bullet point recommendations based on your experience level. No sign-up required.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.slice(0, 5).join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Length Calculator" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Find the optimal resume length for your experience level. Free ${CURRENT_YEAR} calculator with personalized recommendations. No sign-up required.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-15`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={`Free ${CURRENT_YEAR} resume length calculator. Personalized page count, word count, and bullet point recommendations.`} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* ===== PRECONNECT FOR PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== FONT STYLESHEETS ===== */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* ===== SITEMAP ===== */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== SCHEMA.ORG JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Resume Length Calculator",
                "url": canonicalUrl,
                "description": `Free ${CURRENT_YEAR} resume length calculator providing personalized page count, word count, and bullet point recommendations based on experience level.`,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Professional Resume Free"
                },
                "dateModified": safeLastModifiedDate
              },
              {
                "@type": "WebPage",
                "@id": canonicalUrl,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `Find the optimal resume length for your experience level with our free ${CURRENT_YEAR} calculator.`,
                "dateModified": safeLastModifiedDate,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                }
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
                    "name": "Resume Length Calculator",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                    "dateModified": safeLastModifiedDate
                  }
                }))
              },
              {
                "@type": "HowTo",
                "name": "How to Determine the Optimal Resume Length",
                "description": "Use this calculator to find the ideal resume length for your experience level",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Select your experience level",
                    "text": "Choose from Entry Level, Mid-Career, Senior, Executive, or Academic CV."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Enter your resume details",
                    "text": "Input the number of roles listed, average bullets per role, current page count, and current word count."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Review recommendations",
                    "text": "Get personalized page count, word count, and bullet point recommendations with actionable warnings."
                  }
                ],
                "totalTime": "PT1M"
              }
            ]
          }) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={safeBuildTimestamp} />
          <meta name="content-freshness" content={safeCurrentDate} />
        </div>

        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation */}
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
                <span itemProp="name" aria-current="page">Resume Length Calculator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">
                <FiStar style={{ marginRight: '0.5rem', display: 'inline' }} /> \uD83D\uDCCF Free Tool \u2022 No Sign Up \u2022 Instant Results \u2022 {CURRENT_YEAR}
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading">
                Free <span className="gradient-text">Resume Length Calculator</span> {CURRENT_YEAR}: Find Your Optimal Pages
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Find the <strong>optimal resume length</strong> for your experience level with personalized page count, word count, and bullet point recommendations. Based on recruiter behavior studies and ATS compatibility research, this calculator ensures your resume meets industry expectations. <strong>100% Free. No Sign-Up. Complete Privacy.</strong> All calculations happen in your browser\u2014no data is ever stored or transmitted.
              </p>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {RESUME_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div className="stat-label">{s.label}</div></div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <a href="#calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Calculate Your Resume Length <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </a>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Tools
                </Link>
              </div>
              
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Critical Insight Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-lg)', margin: 0, fontFamily: 'var(--font-body)' }}>43% of Resumes Are Rejected for Incorrect Length\u2014Before Content Is Ever Evaluated</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Resume length is not a matter of preference\u2014it\u2019s a critical filtering criterion. <strong>Recruiters spend an average of 7.4 seconds on initial resume screening</strong>, and a document of inappropriate length either overwhelms or underwhelms in that critical window. <strong>43% of resumes are rejected for formatting issues including incorrect length</strong> before any human evaluates the actual content. An entry-level candidate submitting a 3-page resume signals poor judgment. A senior executive cramming 15 years of experience onto a single page undersells their value. This calculator provides the exact length parameters for your experience level, ensuring your resume meets the expectations that determine whether your qualifications ever get read.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="section" id="calculator">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Resume Length Calculator</h2>
              <p className="section-subtitle">Enter your details below for personalized recommendations</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '0' }}>
                <div className="input-group"><label className="input-label">Experience Level</label><select className="input-field" value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} aria-label="Select your experience level">{Object.entries(LENGTH_GUIDELINES).map(([key, g]) => <option key={key} value={key}>{g.name}</option>)}</select></div>
                <div className="input-group"><label className="input-label">Number of Roles Listed</label><input type="number" className="input-field" value={roleCount} onChange={(e) => setRoleCount(e.target.value)} min="1" max="10" aria-label="Enter number of roles" /></div>
                <div className="input-group"><label className="input-label">Avg Bullets Per Role</label><input type="number" className="input-field" value={bulletsPerRole} onChange={(e) => setBulletsPerRole(e.target.value)} min="1" max="15" aria-label="Enter average bullets per role" /></div>
                <div className="input-group"><label className="input-label">Current Page Count</label><input type="number" className="input-field" value={currentPages} onChange={(e) => setCurrentPages(e.target.value)} min="1" max="10" step="0.5" aria-label="Enter current page count" /></div>
                <div className="input-group"><label className="input-label">Current Word Count</label><input type="number" className="input-field" value={currentWords} onChange={(e) => setCurrentWords(e.target.value)} min="50" max="2000" aria-label="Enter current word count" /></div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn-outline" onClick={resetCalculator} aria-label="Reset calculator fields"><FiRefreshCw size={18} /> Reset</button>
              </div>

              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', textAlign: 'center', marginBottom: '1rem' }}>\uD83D\uDCCF Length Analysis: {results.guidelines.name}</h3>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card">
                      <div className="stat-number">{results.recommendedPages}</div>
                      <div className="stat-label">Recommended Pages</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.guidelines.targetWords}</div>
                      <div className="stat-label">Target Word Count</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.guidelines.maxBulletsPerRole}</div>
                      <div className="stat-label">Max Bullets/Role</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number" style={{ color: results.pageStatus === 'optimal' ? 'var(--success-color)' : results.pageStatus === 'too-long' ? 'var(--error-color)' : 'var(--warning-color)' }}>
                        {results.pageStatus === 'optimal' ? '\u2713' : results.pageStatus === 'too-long' ? 'Long' : 'Short'}
                      </div>
                      <div className="stat-label">Page Status</div>
                    </div>
                  </div>

                  {results.warnings.length > 0 && (
                    <>
                      <div className="gold-divider"></div>
                      <h3 style={{ color: 'var(--warning-color)', marginBottom: '0.75rem' }}>\u26A0\uFE0F Recommendations</h3>
                      {results.warnings.map((w, idx) => (
                        <div key={idx} className="recommendation-item">
                          <FiAlertTriangle size={16} color="var(--warning-color)" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}>{w}</span>
                        </div>
                      ))}
                    </>
                  )}

                  {results.pageStatus === 'optimal' && results.wordStatus === 'optimal' && (
                    <div style={{ textAlign: 'center', padding: '1rem', marginTop: '1rem' }}>
                      <p className="text-success"><FiCheckCircle size={16} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} /> Your resume length appears optimal for your experience level!</p>
                    </div>
                  )}

                  <div className="gold-divider"></div>
                  <p className="text-small" style={{ textAlign: 'center' }}>Estimated pages based on content: ~{results.estimatedPages} | Estimated words: ~{results.estimatedWords}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Comprehensive Resume Length Analysis Features</h2>
              <p className="section-subtitle">Everything you need to ensure your resume meets industry standards</p>
            </div>
            <div className="grid">
              {FEATURES.map((f, i) => { 
                const Icon = ICON_MAP[f.icon] || FiStar; 
                return (
                  <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                    <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, rgba(242,202,80,0.1), rgba(212,175,55,0.05))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)' }}>
                      <Icon size={32} />
                    </div>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{f.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>{f.desc}</p>
                    <span className="badge" style={{ marginTop: 'auto', padding: '0.25rem 0.75rem', fontSize: 'var(--font-size-body-sm)' }}>{f.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">\u2753 Frequently Asked Questions About Resume Length</h2>
              <p className="section-subtitle">Expert answers based on recruiter research and industry standards</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: '600', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '\u2212' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Grid */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">\uD83D\uDD17 Complete Your Resume Optimization Toolkit</h2>
              <p className="section-subtitle">Access our full suite of free resume tools and resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield", desc: "Test your resume against real ATS systems" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get instant quality feedback" },
                { href: "/resume-formatting-guide", text: "Resume Formatting Guide", iconName: "FiLayout", desc: "Professional layout standards" },
                { href: "/resume-keywords-finder", text: "Resume Keywords Finder", iconName: "FiSearch", desc: "Find the right keywords" },
                { href: "/free-resume-summary-generator", text: "Summary Generator", iconName: "FiEdit", desc: "Create compelling summaries" },
                { href: "/free-action-verb-recommender", text: "Action Verb Recommender", iconName: "FiZap", desc: "Powerful resume verbs" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                    <IconComponent size={24} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.3' }}>{link.text}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading">Get the Perfect Resume Length for Your Experience</h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto 2rem' }}>
              Optimize your resume length for maximum impact. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> for our complete suite of resume tools. <strong>100% Free. Complete Privacy. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/free-resume-builder" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiEdit /> Build Your Resume</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore Free Tools</Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>\u2713 No credit card required \u2022 \u2713 Free forever \u2022 \u2713 5 experience levels \u2022 \u2713 Instant results</p>
          </div>
        </section>

        {/* NEW SECTION: Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Expand Your Career Toolkit</h2>
            <div className="grid">
              <Link href="/resume-templates" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>ATS-Optimized Resume Templates</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Professionally designed templates that pass automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Browse Templates <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/resume-guide" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Complete ATS Resume Guide</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Master ATS optimization with proven strategies and real examples.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-write-a-resume" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>How to Write a Resume</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Comprehensive step-by-step content writing masterclass.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Interview Preparation Tips</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Ace your next interview with proven strategies and common questions.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Beat the ATS Screening</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Advanced optimization tips to ensure your resume passes automated screening.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} \u2022 Sources: Recruiter behavior studies, ATS platform documentation, industry standards \u2022 Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate: buildTime.toISOString().split('T')[0],
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 7200,
  };
}

export default ResumeLengthCalculatorPage;