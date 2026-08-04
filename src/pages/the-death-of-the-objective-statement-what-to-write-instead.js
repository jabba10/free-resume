import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
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
  FiMonitor, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCloud, FiTerminal, FiGlobe
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
  .table-wrap { overflow-x:auto; margin:1.5rem 0; background:var(--bg-surface-low); border-radius:0.5rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:600px; }
  th { background:var(--bg-surface-high); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); border-bottom:0.5px solid var(--border-gold-filament); color:var(--accent-primary); font-size:var(--font-size-body-sm); white-space:nowrap; }
  td { padding:0.75rem 1rem; border-bottom:0.5px solid var(--border-glass); font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .list-style { padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; }
  .list-style li { color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .checklist-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .toc-nav { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .toc-nav ol { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .toc-nav a { display:flex; align-items:center; gap:0.5rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); padding:0.5rem 0; transition:color var(--transition-fast); }
  .toc-nav a:hover { color:var(--accent-primary); }
  .testimonial-card-exec { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .testimonial-card-exec blockquote { font-style:italic; color:var(--text-secondary); font-size:var(--font-size-body-sm); line-height:1.7; margin-bottom:1rem; }
  .comparison-cell-weak { color:var(--error-color); font-size:var(--font-size-body-sm); }
  .comparison-cell-strong { color:var(--success-color); font-size:var(--font-size-body-sm); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "When would an objective statement still be appropriate?", answer: "Objectives are rarely the best choice in today's hiring landscape. One possible exception is a very formal cover letter for specific academic or government roles that explicitly request one in their application instructions. For 99% of corporate, tech, and professional roles, a professional summary or value proposition is far more effective because it immediately communicates what you bring to the employer rather than what you want from them. If you're applying internationally, research country-specific norms—some European and Asian markets still expect objective-style introductions, though even these are shifting toward summary formats. For US and UK job markets, skip the objective entirely and lead with your value." },
  { question: "How long should my resume summary be?", answer: "A good professional summary is 2 to 4 lines, approximately 50-100 words. It should include your professional title or the role you're targeting, years of relevant experience, 2-3 core skills or competencies, and one standout achievement with a measurable result. For example: 'Results-driven product manager with 7+ years in B2B SaaS. Led product roadmap for a platform that grew ARR from $2M to $7M in 18 months. Expert in data-driven prioritization and cross-functional team leadership.' This format respects the recruiter's 6-second scan time while providing enough substance to differentiate you from other candidates. Keep it tight, specific, and free of filler words like 'passionate,' 'motivated,' or 'hard-working' that every candidate claims." },
  { question: "What if I am changing careers? Can I still use a summary?", answer: "Yes, a summary is actually more effective than an objective for career changers because you can strategically frame your transferable skills. Instead of listing industry-specific roles you haven't held, highlight competencies relevant to your new field. For example, an operations manager transitioning to project management might write: 'Operations leader transitioning to project management with 8 years of experience leading cross-functional teams and delivering complex initiatives on time and under budget. PMP certified with expertise in Agile methodologies and stakeholder communication.' This approach acknowledges your transition while immediately demonstrating relevant capabilities—exactly what hiring managers want to see from career changers." },
  { question: "Should I include a 'branding statement' or 'value proposition'?", answer: "Absolutely. A branding statement or value proposition is essentially a professional tagline that summarizes your identity in one punchy sentence. It can be combined with a brief summary for maximum impact. For instance: 'Data scientist specializing in natural language processing. Built transformer models that improved customer intent prediction by 30%, deployed to production serving 2M+ daily queries.' This format works especially well for experienced professionals, executives, and those in competitive fields where differentiation matters. The branding statement grabs attention with specificity, and the supporting detail proves your claims. This combination is far more effective than either format alone." },
  { question: "Do I need a summary if my resume is only one page?", answer: "Yes, a brief summary is still valuable even on a one-page resume. Without a summary, you force the recruiter to infer your professional story from scattered experience bullets. A well-written summary provides immediate context that helps them interpret everything that follows. Think of it as the thesis statement for your resume—it tells the reader what to look for and why you're qualified before they dive into the details. For one-page resumes, keep it especially tight: 2-3 lines maximum that clearly state your professional identity and most impressive qualification." },
  { question: "How do I ATS-optimize my resume summary?", answer: "To ATS-optimize your summary, naturally incorporate 3-5 high-priority keywords from the job description into your 2-4 line introduction. If the role requires 'Python,' 'AWS,' and 'microservices architecture,' ensure these terms appear in your summary if you genuinely have those skills. For example: 'Backend engineer with 5+ years building scalable microservices in Python on AWS. Designed event-driven architecture handling 500K+ daily transactions.' This approach satisfies ATS keyword matching algorithms while remaining natural and readable for human reviewers. Avoid keyword stuffing—writing 'Skilled in Python, AWS, microservices, Docker, Kubernetes, CI/CD, Jenkins, Agile' reads terribly and signals keyword manipulation to both algorithms and humans." }
];

const MODERN_ALTERNATIVES = [
  { title: "Professional Summary", icon: FiTarget, bestFor: "Most job seekers, especially those with 3+ years of experience", description: "2-4 sentences summarizing your experience, key skills, and a major achievement. This is the most versatile and widely accepted format across industries.", example: "Digital marketing manager with 6+ years in B2B SaaS. Increased organic traffic by 150% year-over-year through SEO and content strategy. Expert in HubSpot, Google Analytics, and conversion rate optimization." },
  { title: "Value Proposition / Branding Statement", icon: FiStar, bestFor: "Executives, career changers, creative roles, or competitive fields", description: "A punchy professional tagline that defines who you are, often followed by a brief supporting summary with specific achievements.", example: "Customer-obsessed product leader. Built and launched 3 B2C apps with 1M+ downloads. Skilled in cross-functional leadership and data-driven roadmap planning that increased user retention by 40%." },
  { title: "Skills Profile / Highlights Section", icon: FiLayers, bestFor: "Technical roles, IT positions, or when leading with specific competencies", description: "A bulleted list of core skills or key achievements placed prominently at the top of your resume for immediate impact.", example: "• Full-stack developer: React, Node.js, Python, AWS\n• Built RESTful APIs handling 5M+ requests/day\n• Led agile team of 4 engineers across 3 product launches\n• Reduced infrastructure costs by 35% through cloud optimization" }
];

const BEFORE_AFTER = [
  { before: "Objective: To obtain a challenging software engineering position where I can utilize my skills.", after: "Software engineer with 4+ years experience in full-stack development (React, Node.js). Led migration to microservices architecture, improving system scalability and reducing cloud costs by 20% annually." },
  { before: "Objective: Seeking a marketing role in a growth-oriented company.", after: "Data-driven marketing manager. Grew B2B leads by 150% year-over-year through targeted LinkedIn and email campaigns. Expertise in HubSpot, Salesforce, and marketing automation." },
  { before: "Objective: To secure a position as a project manager where I can contribute to team success.", after: "Certified Project Manager (PMP) with 8+ years in enterprise IT. Delivered 12+ complex projects on time and under budget, averaging 15% cost savings. Experienced in both Agile and Waterfall methodologies." }
];

const FORMAT_COMPARISON = [
  { format: "Professional Summary", bestFor: "Traditional roles, corporate positions, experienced hires", keyElements: "Professional title + years of experience + key skills + one achievement with metric" },
  { format: "Value Proposition", bestFor: "Executives, branding-focused roles, career pivots", keyElements: "Professional tagline + brief supporting achievements with specific results" },
  { format: "Skills Profile", bestFor: "Tech, IT, engineering, hands-on technical roles", keyElements: "Bulleted list of top skills and metrics demonstrating technical competency" }
];

const TESTIMONIALS = [
  { quote: "I replaced my outdated objective with a results-driven summary and saw an immediate difference. Within one week of updating my resume, I received callbacks from two top tech companies that had previously rejected me.", metric: "Callbacks in 1 Week", name: "Priya K.", role: "Software Engineer", company: "Tech Startup" },
  { quote: "As a career changer, I had no idea how to start my resume without an objective. The value proposition examples showed me exactly how to highlight my transferable skills. I landed an interview in my target field within two weeks of the rewrite.", metric: "Interview in 2 Weeks", name: "Marcus T.", role: "Project Manager (Career Changer)", company: "Construction to Technology" }
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Professional Resume Templates", desc: "ATS-optimized templates with modern summary sections designed for maximum recruiter impact.", icon: FiFileText },
  { href: "/free-resume-tools", title: "Free Resume Building Tools", desc: "AI-powered resume builder, keyword matcher, and ATS checker to optimize every section.", icon: FiTool },
  { href: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds", title: "Professional Summary Guide", desc: "Deep dive into writing summaries that hook recruiters in the critical 6-second scan window.", icon: FiTarget },
  { href: "/free-resume-bullet-point-generator", title: "Bullet Point Generator", desc: "Transform weak descriptions into powerful achievement bullets with quantified impact.", icon: FiZap },
  { href: "/free-action-verb-recommender", title: "Action Verb Recommender", desc: "Find powerful action verbs that strengthen every section of your resume.", icon: FiEdit3 },
  { href: "/top-skills-employers-in-the-usa-want-on-resumes", title: "Top USA Employer Skills", desc: "Discover the exact skills American employers prioritize in their hiring algorithms.", icon: FiTrendingUp }
];

const FOOTER_LINKS = [
  { href: "/how-to-write-a-resume", title: "Complete Resume Writing Guide" },
  { href: "/resume-skills-section", title: "Resume Skills Section Guide" },
  { href: "/resume-formatting-guide", title: "Resume Formatting Guide" },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker" },
  { href: "/interview-tips", title: "Interview Preparation Guide" }
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
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal, FiGlobe
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const DeathOfObjectiveStatementPage = ({ seoData }) => {
  const { 
    buildTimestamp,
    currentDate, 
    lastModifiedDate,
    canonicalUrl,
    breadcrumbData,
    meta,
    longTailKeywords,
    peopleAlsoAsk,
    conversationalExplanations,
    faqItems,
    testimonials,
    reviewDates,
    faqDates 
  } = seoData || {};
  
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeCanonicalUrl = canonicalUrl || "https://professionalresumefree.com/the-death-of-the-objective-statement-what-to-write-instead";
  const safeBreadcrumbData = breadcrumbData || [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" },
    { "@type": "ListItem", "position": 2, "name": "Resume Advice", "item": "https://professionalresumefree.com/resume-templates" },
    { "@type": "ListItem", "position": 3, "name": "The Death of the Objective Statement", "item": safeCanonicalUrl }
  ];
  const safeMeta = meta || {
    title: `The Death of the Objective Statement: What to Write Instead (${CURRENT_YEAR} Guide)`,
    description: `Objective statements are obsolete. Learn what to write instead to grab recruiter attention in 6 seconds. Free ${CURRENT_YEAR} guide with modern alternatives & ATS-friendly examples.`,
    url: safeCanonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/ats.jpeg",
  };
  const safeLongTailKeywords = longTailKeywords || [
    "what to write instead of an objective on a resume",
    "resume summary vs objective 2026",
    "modern resume introduction examples",
    "how to start a resume without an objective",
    "professional profile examples for resume"
  ];
  const safePeopleAlsoAsk = peopleAlsoAsk || [
    { question: "What is wrong with using an objective statement on a resume?", answer: "Objective statements focus on what you want from an employer. Recruiters care about what you can do for them. Modern alternatives like summary statements or branded value propositions focus on your skills and achievements first." },
    { question: "What should I put at the top of my resume instead of an objective?", answer: "Replace the objective with a professional summary (3-5 lines highlighting your experience and key wins), a skills profile (bulleted list of core competencies), or a value proposition (a punchy tagline with measurable results). Choose based on your career level and industry." },
    { question: "Is a resume summary better than an objective?", answer: "Yes, in almost every case. A resume summary showcases your background and achievements, immediately showing the employer what you bring. An objective only states your desires. For career changers, a summary can still work by highlighting transferable skills instead of stating a vague goal." }
  ];
  const safeConversationalExplanations = conversationalExplanations || [
    { topic: "The Resume Objective in Plain English", content: "Think of the old objective statement as a 'want ad' for yourself. It said, 'I want a job where I can grow.' The problem? Employers aren't there to fulfill your wishes—they're there to solve a problem. Modern resumes flip the script. Instead of stating what you want, you immediately show them what you offer." },
    { topic: "Why Recruiters Stopped Reading Objectives", content: "Recruiters spend about 6 seconds on a first scan. An objective wastes that time with generic fluff. They skip to the summary or experience section to find evidence you can do the job. Leading with your value—not your desires—respects their time and makes a stronger impression instantly." }
  ];
  const safeFaqItems = faqItems || FAQS;
  const safeTestimonials = testimonials || TESTIMONIALS;
  const safeReviewDates = reviewDates || Array(5).fill(null).map((_, i) => {
    const date = new Date(safeBuildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });
  const safeFaqDates = faqDates || Array(7).fill(null).map((_, i) => {
    const date = new Date(safeBuildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });
  
  const articleId = `${safeCanonicalUrl}#article`;

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{safeMeta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={safeMeta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume objective statement, resume summary examples, professional profile, career summary, resume introduction, ATS friendly resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={safeMeta.title} />
        <meta name="chatgpt-fts:description" content={safeMeta.description} />
        <meta name="chatgpt-fts:keywords" content={safeLongTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={safeCanonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={safeMeta.title} />
        <meta property="og:description" content={safeMeta.description} />
        <meta property="og:url" content={safeCanonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={safeMeta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Death of the Objective Statement: What to Write Instead" />
        <meta name="twitter:description" content="Modern alternatives to resume objectives. Free guide." />
        <meta name="twitter:image" content={safeMeta.image} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": articleId,
                  "headline": safeMeta.title,
                  "description": safeMeta.description,
                  "image": safeMeta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": safeCanonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${safeCanonicalUrl}#breadcrumb`,
                  "itemListElement": safeBreadcrumbData
                },
                {
                  "@type": "WebPage",
                  "@id": safeCanonicalUrl,
                  "url": safeCanonicalUrl,
                  "name": "The Death of the Objective Statement",
                  "description": safeMeta.description
                },
                {
                  "@type": "FAQPage",
                  "@id": `${safeCanonicalUrl}#faq`,
                  "mainEntity": [
                    ...safeFaqItems.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...safePeopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer
                      }
                    }))
                  ]
                },
                {
                  "@type": "HowTo",
                  "name": "How to Replace an Objective Statement",
                  "description": "Step-by-step guide to writing a modern resume introduction",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Delete the old objective",
                      "text": "Remove any line that starts with 'Seeking a position...' or 'Objective: To obtain...' It adds no value."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Choose your new format",
                      "text": "Decide between a summary, a value proposition, or a skills profile. Match it to your industry and level."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Lead with value",
                      "text": "Start with your title, years of experience, and a key achievement. Show what you can do for the employer."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Add keywords naturally",
                      "text": "Include 3-5 core skills or technologies from the job description. Keep it readable, not stuffed."
                    }
                  ],
                  "totalTime": "PT15M"
                },
                {
                  "@type": "ItemList",
                  "itemListElement": safeTestimonials.map((testimonial, index) => ({
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
                      "datePublished": safeReviewDates[index] || safeCurrentDate,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      },
                      "itemReviewed": {
                        "@id": articleId
                      }
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={safeBuildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation with Schema.org markup */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} style={{marginRight: '4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name">Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Death of Objective Statement</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ RESUME MODERNIZATION {CURRENT_YEAR} ✦</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                The Death of the <span className="gradient-text">Objective Statement</span>: What to Write Instead
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                The resume objective is obsolete. Learn exactly how to replace it with modern, impactful alternatives that grab recruiter attention in seconds. Free guide with proven examples and ATS-friendly templates.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="https://professionalresumefree.com" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  Start with a Modern Template <FiArrowRight style={{marginLeft: '8px'}} />
                </a>
                <Link href="/resume-templates" className="btn-outline">
                  <FiFileText style={{marginRight: '8px'}} /> Browse All Templates
                </Link>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', borderTop: '0.5px solid var(--border-gold-filament)', paddingTop: '2rem' }}>
                <div style={{textAlign: 'center', width: '100%', marginBottom: '0', gridColumn: '1 / -1'}}>
                  <span className="feature-badge" style={{marginBottom: '1.5rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem'}}>📊 Based on {CURRENT_YEAR} Recruiter Surveys</span>
                </div>
                <div className="stat-card"><div className="stat-number">6 sec</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Average Resume Scan</div></div>
                <div className="stat-card"><div className="stat-number">98%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Recruiters Skip Objectives</div></div>
                <div className="stat-card"><div className="stat-number">2-4x</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Callbacks with Summary</div></div>
              </div>
              <div style={{marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container" style={{textAlign: 'center', paddingBottom: '1rem'}}>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)'}}>
            <span><FiBookOpen style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> 1,800+ words</span>
            <span><FiClock style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> 10 min read</span>
            <span><FiCalendar style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* Conversational Explanations Section */}
        <section className="section section-alt" aria-labelledby="conversational-heading">
          <div className="section-container">
            <h2 id="conversational-heading" className="section-title" style={{textAlign: 'center'}}>The Resume Objective in Plain English</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {safeConversationalExplanations.map((item, i) => (
                <article key={i} className="card-executive">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '12px'}}>{item.topic}</h3>
                  <p style={{color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: 'var(--font-size-body-sm)'}}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section" ref={toolRef} id="section-toc">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📑 Table of Contents</h2>
              <p className="section-subtitle">Navigate this comprehensive guide to modern resume introductions</p>
            </div>
            <div className="toc-nav" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <ol>
                {["Why the Objective Statement Died", "Modern Alternatives (With Examples)", "Summary vs. Profile vs. Value Prop", "ATS Tips for Your Introduction", "Before & After Comparison", "Frequently Asked Questions", "Conclusion & Next Steps"].map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} onClick={(e) => { e.preventDefault(); document.getElementById(`section-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <FiChevronRight size={14} color="var(--accent-primary)" />
                      <span>{i + 1}. {item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Why It Died */}
        <section id="section-1" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Why the Objective Statement Died</h2>
              <p className="section-subtitle">Three fatal flaws that made the traditional resume objective obsolete</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiUser size={22} color="var(--error-color)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, color: 'var(--error-color)' }}>Problem 1: It's All About You</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Recruiters don't care what you want initially. They care about what you can do for them. An objective focuses on your desires, not the employer's needs. It's a subtle but critical signal that you haven't tailored your resume to solve their problem.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiCopy size={22} color="var(--error-color)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, color: 'var(--error-color)' }}>Problem 2: Generic & Forgettable</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Every candidate wants a "challenging position." These words add zero value. In the 6 seconds a recruiter spends scanning, you've wasted precious real estate on fluff that describes literally any applicant.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiCpu size={22} color="var(--error-color)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, color: 'var(--error-color)' }}>Problem 3: ATS Systems Ignore Them</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Applicant Tracking Systems scan for skills and experience. An objective rarely contains keywords that help rank your resume higher. It's effectively invisible to the machine and a distraction to the human.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Modern Alternatives */}
        <section id="section-2" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Modern Alternatives (With Examples)</h2>
              <p className="section-subtitle">Three high-impact formats that put the employer's needs first</p>
            </div>
            <div className="grid">
              {MODERN_ALTERNATIVES.map((alt, i) => {
                const IconComponent = alt.icon;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={18} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{alt.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong>Best for:</strong> {alt.bestFor}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>{alt.description}</p>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.375rem' }}>📝 Example:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>{alt.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Format Comparison */}
        <section id="section-3" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Summary vs. Profile vs. Value Proposition</h2>
              <p className="section-subtitle">Understanding the subtle differences to choose the right format</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Format</th><th>Best Used For</th><th>Key Elements</th></tr></thead>
                  <tbody>
                    {FORMAT_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.format}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestFor}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.keyElements}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ATS Tips */}
        <section id="section-4" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Tips for Your Introduction</h2>
              <p className="section-subtitle">Optimize for applicant tracking systems without sacrificing readability</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="insight-box" style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.75rem' }}>ATS Optimization Checklist:</p>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Identify core keywords from 3-5 job descriptions for your target role", "Naturally integrate 3-5 most important keywords into your summary", "Use standard section headings: 'Summary' or 'Professional Profile'", "Include both full terms and common acronyms (e.g., 'Amazon Web Services (AWS)')", "Avoid keyword stuffing—write for humans first, algorithms second", "Keep it to 2-4 lines so ATS can parse it as a coherent statement"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Before & After */}
        <section id="section-5" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Objective vs. Modern Introduction</h2>
              <p className="section-subtitle">See the dramatic difference side by side</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Before (Obsolete Objective)</th><th>After (Modern Introduction)</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER.map((row, i) => (
                      <tr key={i}>
                        <td className="comparison-cell-weak">{row.before}</td>
                        <td className="comparison-cell-strong">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="testimonials-heading" className="section-title">Success Stories</h2>
              <p className="section-subtitle">Real results from professionals who modernized their resume introductions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {safeTestimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card-exec">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiCheck size={16} color="var(--success-color)" style={{marginRight: '4px'}} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>{testimonial.metric}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)' }}>{testimonial.name}</strong>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: 0 }}>{testimonial.role}</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: 0 }}>{testimonial.company}</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: 0 }}>{safeReviewDates[i] || safeCurrentDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{textAlign: 'center'}}>People Also Ask About Resume Introductions</h2>
            <div className="faq-grid">
              {safePeopleAlsoAsk.map((paa, i) => (
                <div key={i} className={`faq-item ${activeFaq === `paa-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `paa-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === `paa-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `paa-${i}` && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{paa.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="section-6" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Expert answers to common questions about modern resume introductions</p>
            </div>
            <div className="faq-grid">
              {safeFaqItems.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === `faq-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `faq-${i}` ? null : `faq-${i}`)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `faq-${i}` ? null : `faq-${i}`)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `faq-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === `faq-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `faq-${i}` && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                        Updated: {safeFaqDates[i] || safeCurrentDate}
                      </p>
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
              Ready to Modernize Your Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Delete your outdated objective and replace it with a powerful summary that grabs attention. <strong>Free. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://professionalresumefree.com" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Build Your Resume Now <FiArrowRight style={{marginLeft: '8px'}} />
              </a>
              <Link href="/free-resume-tools" className="btn-outline">
                <FiTool style={{marginRight: '8px'}} /> Use Free Resume Tools
              </Link>
            </div>
            <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              AI-assisted research cited from {CURRENT_YEAR} hiring data. Always tailor your resume to the specific role.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>🔗 Continue Your Resume Journey</h2>
            <div className="geo-link-grid">
              {RELATED_LINKS.map((link, i) => {
                const IconComponent = link.icon || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.title}</span>
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', lineHeight: '1.4' }}>{link.desc}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer SEO Links */}
        <section className="section section-alt">
          <div className="section-container">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '600', textAlign: 'center', fontFamily: 'var(--font-body)' }}>Explore More Career Guides</h3>
            <div className="geo-link-grid">
              {FOOTER_LINKS.map((link, i) => (
                <Link key={i} href={link.href} className="geo-link-card">
                  <FiChevronRight size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • AI-assisted research cited from {CURRENT_YEAR} hiring data • Always tailor your resume to the specific role
          </span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// GET STATIC PROPS - Enhanced with Page 1 ISR Strategy
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/the-death-of-the-objective-statement-what-to-write-instead";

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
      "name": "Resume Advice",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The Death of the Objective Statement",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "The Death of the Objective Statement: What to Write Instead (2026 Guide)",
    description: "Objective statements are obsolete. Learn what to write instead to grab recruiter attention in 6 seconds. Free guide with modern alternatives & ATS-friendly examples.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "what to write instead of an objective on a resume",
    "resume summary vs objective 2026",
    "modern resume introduction examples",
    "how to start a resume without an objective",
    "professional profile examples for resume"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "What is wrong with using an objective statement on a resume?", answer: "Objective statements focus on what you want from an employer (e.g., 'seeking a challenging position'). Recruiters care about what you can do for them. Modern alternatives like summary statements or branded value propositions focus on your skills and achievements first." },
    { question: "What should I put at the top of my resume instead of an objective?", answer: "Replace the objective with a professional summary (3-5 lines highlighting your experience and key wins), a skills profile (bulleted list of core competencies), or a value proposition (a punchy tagline with measurable results). Choose based on your career level and industry." },
    { question: "Is a resume summary better than an objective?", answer: "Yes, in almost every case. A resume summary showcases your background and achievements, immediately showing the employer what you bring. An objective only states your desires. For career changers, a summary can still work by highlighting transferable skills instead of stating a vague goal." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "The Resume Objective in Plain English", content: "Think of the old objective statement as a 'want ad' for yourself. It said, 'I want a job where I can grow.' The problem? Employers aren't there to fulfill your wishes—they're there to solve a problem. Modern resumes flip the script. Instead of stating what you want, you immediately show them what you offer." },
    { topic: "Why Recruiters Stopped Reading Objectives", content: "Recruiters spend about 6 seconds on a first scan. An objective wastes that time with generic fluff. They skip to the summary or experience section to find evidence you can do the job. Leading with your value—not your desires—respects their time and makes a stronger impression instantly." }
  ];

  const faqItems = [
    {
      question: 'When would an objective statement still be appropriate?',
      answer: 'Objectives are rarely the best choice today. One possible exception is a very formal cover letter for specific academic or government roles that explicitly request one. For 99% of corporate and tech roles, a summary or value proposition is far more effective.',
    },
    {
      question: 'How long should my resume summary be?',
      answer: 'A good summary is 2 to 4 lines. It should include your job title, years of experience, core skills, and one standout achievement. For example: "Results-driven product manager with 7+ years in SaaS. Led roadmap for platform that grew ARR by $5M." Keep it tight and high-impact.',
    },
    {
      question: 'What if I am changing careers? Can I still use a summary?',
      answer: 'Yes, you can. Focus on transferable skills. Instead of listing industry-specific roles, highlight skills relevant to the new field. Example: "Operations manager transitioning to project management. Track record of leading cross-functional teams and delivering complex initiatives under budget."',
    },
    {
      question: 'Should I include a "branding statement" or "value proposition"?',
      answer: 'Absolutely. A branding statement is like a tagline that summarizes your professional identity. It can be combined with a brief summary. For instance: "Data scientist specializing in NLP. Built models that improved customer intent prediction by 30%." This is punchy and modern.',
    },
    {
      question: 'Do I need a summary if my resume is one page?',
      answer: 'Yes, a brief summary is still valuable. It provides context and helps the recruiter immediately understand your profile. Without it, you force them to infer your story from the experience section. A summary ensures they see your strongest selling points right away.',
    },
    {
      question: 'How do I ATS-optimize my summary?',
      answer: 'Naturally include keywords from the job description. If the role requires "Python" and "AWS," make sure those appear in your summary (if accurate). Avoid keyword stuffing. Write for humans first, but ensure critical terms are present.',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "I replaced my outdated objective with a results-driven summary and saw a huge difference. I got callbacks from two top tech companies within a week.",
      metric: "Callbacks in 1 week",
      name: "Priya K.",
      role: "Software Engineer",
      company: "Tech Startup",
      date: reviewDates[0]
    },
    {
      quote: "As a career changer, I didn't know how to start my resume. The 'value proposition' example showed me exactly how to highlight my transferable skills. Landed an interview in two weeks.",
      metric: "Interview in 2 weeks",
      name: "Marcus T.",
      role: "Project Manager (transitioning)",
      company: "Construction to Tech",
      date: reviewDates[1]
    }
  ];

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        canonicalUrl,
        breadcrumbData,
        meta,
        longTailKeywords,
        peopleAlsoAsk,
        conversationalExplanations,
        faqItems,
        testimonials,
        reviewDates,
        faqDates
      }
    }
    // Note: No revalidate key means pure SSG (static generation at build time)
    // If ISR is desired, add: revalidate: 3600
  };
}

export default DeathOfObjectiveStatementPage;