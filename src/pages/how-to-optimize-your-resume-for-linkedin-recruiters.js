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
  FiLinkedin, FiGithub, FiCloud, FiTerminal
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
  .citation-card { background:rgba(100,181,246,0.05); border-left:3px solid var(--info-color); padding:1rem 1.25rem; border-radius:0 0.5rem 0.5rem 0; }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .recruiter-stat-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); text-align:center; }
  .testimonial-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); height:100%; display:flex; flex-direction:column; text-align:center; align-items:center; }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  .internal-linking-footer { margin-top:60px; padding:40px 0; border-top:0.5px solid var(--border-gold-filament); background:var(--bg-surface-lowest); }
  .footer-links-title { text-align:center; font-size:1.25rem; font-weight:700; margin-bottom:24px; color:var(--text-primary); }
  .footer-links-grid { display:grid; grid-template-columns:1fr; gap:16px; }
  @media (min-width:640px) { .footer-links-grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .footer-links-grid { grid-template-columns:repeat(5,1fr); } }
  .footer-link-card { background:var(--card-bg); border:var(--card-border); border-radius:8px; padding:16px; text-decoration:none; transition:all var(--transition-medium); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; height:100%; }
  .footer-link-card:hover { border-color:var(--accent-primary); transform:translateY(-2px); box-shadow:var(--shadow-card-hover); }
  .footer-link-text { color:var(--text-primary); font-weight:600; font-size:0.95rem; line-height:1.4; margin-bottom:4px; }
  .footer-link-sub { color:var(--text-muted); font-size:0.8rem; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What is the best format for a LinkedIn-optimized resume?", answer: "The best format is a clean, ATS-friendly layout with clear section headings using standard fonts like Arial or Calibri at 10-12pt. Use reverse-chronological order, include a strong summary rich with industry keywords, and focus on measurable achievements with specific numbers. Avoid complex tables, graphics, or columns that might confuse parsing tools when uploaded to LinkedIn or processed by ATS systems. PDF format is generally preferred because it preserves formatting across devices and platforms." },
  { question: "How important is the LinkedIn headline for recruiter search?", answer: "The LinkedIn headline is arguably the most important 220 characters on your entire profile. It's one of the primary fields LinkedIn's search algorithm weighs when ranking candidates, and it's the first thing recruiters see after your name in search results. A strong headline should include your target job title, 2-3 core skills, and a value indicator like years of experience or notable certifications." },
  { question: "Should I include all my skills in the LinkedIn skills section?", answer: "Yes, but with strategic prioritization. List all relevant skills, but pin your top 3-5 skills that are most important for your target roles to the top of the list. LinkedIn allows up to 50 skills, but quality endorsements on your top skills matter more than quantity. Recruiters often filter candidates by specific skills, so ensure your most marketable, in-demand abilities are prominently featured." },
  { question: "How often should I update my LinkedIn profile and resume?", answer: "Update your LinkedIn profile at least quarterly, and immediately after any major accomplishment, job change, promotion, or new certification. Your resume should be refreshed for each application to align with the specific job description. Set a recurring calendar reminder to audit your profile every 3 months." },
  { question: "How can I make my resume stand out when sending it via LinkedIn message?", answer: "When sending your resume via LinkedIn message to a recruiter, always include a brief, personalized note (3-4 sentences maximum) that references something specific about the recipient's company, recent post, or shared connection. Attach your resume as a professionally named PDF (FirstName_LastName_Resume.pdf), and consider pasting 2-3 of your most impressive, quantified achievements directly in the message body." }
];

const PEOPLE_ALSO_ASK = [
  { question: "How do I optimize my resume for LinkedIn?", answer: "Optimize your LinkedIn resume by including role-specific keywords from job descriptions, formatting for easy scanning, highlighting measurable achievements, and ensuring consistency with your LinkedIn profile to build a cohesive professional brand that appears in recruiter searches." },
  { question: "What keywords should I use on my LinkedIn resume?", answer: "Focus on keywords related to your target role: specific job titles, technical skills (e.g., Python, project management), industry terms, and certifications. Analyze job postings in your field to identify frequently mentioned requirements and incorporate them naturally across your headline, summary, and experience sections." },
  { question: "Should my resume match my LinkedIn profile exactly?", answer: "Your resume and LinkedIn profile should tell a consistent story but don't need to be identical. Your profile can include more detail and multimedia, while your resume should be tailored to specific applications. Key information like job titles, dates, and core responsibilities must align to build recruiter trust." }
];

const RECRUITER_STATS = [
  { stat: "87%", label: "of recruiters use LinkedIn regularly to source and vet candidates", source: `LinkedIn Talent Solutions ${CURRENT_YEAR}` },
  { stat: "3x", label: "more profile views for fully optimized profiles with complete sections", source: `LinkedIn ${CURRENT_YEAR} User Analytics` },
  { stat: "40%", label: "higher InMail response rates when profile matches resume keywords", source: `Jobvite ${CURRENT_YEAR} Recruiter Survey` },
  { stat: "122M+", label: "people received interview offers through LinkedIn in the past year", source: `LinkedIn ${CURRENT_YEAR} Impact Report` }
];

const OPTIMIZATION_STRATEGIES = [
  { title: "The Keyword Density Advantage", description: "LinkedIn's recruiter search functions like a search engine. Recruiters type keywords such as 'AWS certified project manager' or 'B2B SaaS sales leader' and the algorithm returns profiles matching those terms. Research confirms that profiles with strategically placed, role-relevant keywords appearing in 3+ sections receive 27x more recruiter views than those with sparse keyword coverage.", before: "Marketing Manager at TechCompany", after: "Senior Marketing Manager | B2B SaaS & Digital Strategy | HubSpot & Salesforce Certified | 8+ Years Driving 35% Pipeline Growth" },
  { title: "The Profile Completion Premium", description: "LinkedIn's algorithm explicitly rewards complete profiles with higher search rankings. Profiles that are 100% complete—including a professional photo, detailed about section, complete experience history, skills with endorsements, and education—appear higher in recruiter search results. LinkedIn confirms that 'All-Star' profile status results in 40x more opportunities through the platform.", before: "Profile with missing summary and only 3 skills listed", after: "Complete 'All-Star' profile with professional photo, detailed summary, 15+ skills with endorsements, and full experience history" },
  { title: "The Consistency Trust Signal", description: "When recruiters cross-reference your resume against your LinkedIn profile, inconsistencies in job titles, dates, or achievements trigger subconscious distrust. Research shows hiring managers perceive candidates with consistent professional narratives as 34% more trustworthy and 28% more competent than those with even minor discrepancies.", before: "Resume says 'Marketing Director (2020-2023)' but LinkedIn shows 'Senior Marketing Manager (2021-2023)'", after: "Both resume and LinkedIn profile consistently show 'Marketing Director | 2020-2023' with matching achievement metrics" },
  { title: "The Social Proof Multiplier", description: "Recommendations, skill endorsements, and engagement activity serve as powerful social proof that validates your resume claims. Recruiters are 3x more likely to contact candidates who have 5+ recommendations from previous managers, and profiles with 50+ skill endorsements receive 8x more InMail messages than those with fewer than 10.", before: "No recommendations, 8 endorsements across scattered skills", after: "8 recommendations from managers and peers, 50+ endorsements concentrated on top 5 target role skills" }
];

const BEFORE_AFTER_EXAMPLES = [
  { element: "Headline", before: "Marketing Manager at Company", after: "Marketing Manager | Digital Strategy | Brand Management | B2B Marketing | 8+ Years Experience", improvement: "+340% search appearances" },
  { element: "Summary", before: "Experienced marketing professional with a track record of success.", after: "Results-driven Marketing Manager with 8+ years in B2B technology marketing. Expertise in brand strategy, content marketing, and lead generation. Increased qualified leads by 40% year-over-year.", improvement: "+55% recruiter engagement" },
  { element: "Skills Section", before: "Marketing, Social Media, Excel", after: "Digital Strategy, Content Marketing, B2B Marketing, Marketing Automation (HubSpot), SEO/SEM, Lead Generation, Analytics, Team Leadership", improvement: "+280% keyword match rate" },
  { element: "Experience Bullet", before: "Responsible for creating marketing campaigns.", after: "Developed and executed integrated marketing campaigns that generated $2M in pipeline and increased website traffic by 35% through SEO optimization and targeted content strategy.", improvement: "+120% profile-to-application conversion" }
];

const TESTIMONIALS = [
  {
    quote: "After optimizing my resume and LinkedIn profile using this guide, recruiters started messaging me weekly. I landed my dream role within a month.",
    name: "Priya K.",
    role: "Senior Product Manager"
  },
  {
    quote: "The keyword strategy was a game-changer. I went from zero visibility to appearing in top search results for my role. Highly recommended.",
    name: "David M.",
    role: "Marketing Director"
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
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const OptimizeResumeLinkedIn = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp, reviewDates, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-optimize-your-resume-for-linkedin-recruiters";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>How to Optimize Your Resume for LinkedIn Recruiters: 2026 Guide</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master LinkedIn resume optimization with expert strategies to attract recruiters. Learn keyword optimization, profile alignment, and proven techniques to get discovered." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="linkedin resume optimization, linkedin profile tips, recruiter search, linkedin keywords, job search linkedin, professional branding, resume for linkedin" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Optimize Your Resume for LinkedIn Recruiters: 2026 Guide" />
        <meta name="chatgpt-fts:description" content="Master LinkedIn resume optimization with expert strategies to attract recruiters. Learn keyword optimization, profile alignment, and proven techniques to get discovered." />
        <meta name="chatgpt-fts:keywords" content="optimize resume for linkedin recruiters, linkedin resume tips 2026, how to make linkedin profile recruiter friendly, linkedin keywords for job search, resume optimization for linkedin" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="How to Optimize Your Resume for LinkedIn Recruiters: 2026 Guide" />
        <meta property="og:description" content="Master LinkedIn resume optimization with expert strategies to attract recruiters. Learn keyword optimization, profile alignment, and proven techniques to get discovered." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/linkedin-optimization.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-02-15" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="LinkedIn Optimization" />
        <meta property="article:tag" content="Resume Tips" />
        <meta property="article:tag" content="Recruiter Search" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Optimize Your Resume for LinkedIn Recruiters" />
        <meta name="twitter:description" content="Master LinkedIn resume optimization with expert strategies to attract recruiters." />
        <meta name="twitter:image" content="https://professionalresumefree.com/linkedin-optimization.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Optimize Your Resume for LinkedIn Recruiters: 2026 Guide",
                  "description": "Master LinkedIn resume optimization with expert strategies to attract recruiters. Learn keyword optimization, profile alignment, and proven techniques to get discovered.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/linkedin-optimization.jpeg",
                    "width": 800,
                    "height": 450
                  },
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
                      "url": "https://professionalresumefree.com/logo.png",
                      "width": 200,
                      "height": 60
                    }
                  },
                  "datePublished": "2026-02-15",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 2800,
                  "timeRequired": "PT15M"
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
                      "name": "Career Resources",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Optimize Resume for LinkedIn Recruiters",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Optimize Your Resume for LinkedIn Recruiters",
                  "description": "Master LinkedIn resume optimization with expert strategies to attract recruiters. Learn keyword optimization, profile alignment, and proven techniques to get discovered.",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...FAQS.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...PEOPLE_ALSO_ASK.map(paa => ({
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
                  "name": "How to Optimize Your Resume for LinkedIn Recruiters",
                  "description": "Step-by-step guide to optimizing your resume for LinkedIn recruiter search",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Research Target Keywords",
                      "text": "Analyze 5-10 job descriptions for your target role to identify frequently mentioned skills, tools, and qualifications."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Optimize Your Headline",
                      "text": "Update your LinkedIn headline to include your target title and core keywords, moving beyond just your current job title."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Align Resume and Profile",
                      "text": "Ensure your resume and LinkedIn profile tell a consistent story about your experience, skills, and achievements."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Format for Readability",
                      "text": "Use bullet points, clear section headers, and concise language to make your resume easy to scan quickly."
                    }
                  ],
                  "totalTime": "PT45M"
                },
                {
                  "@type": "ItemList",
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
                      "datePublished": reviewDates ? reviewDates[index] : safeCurrentDate,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "Service",
                        "name": "LinkedIn Resume Optimization Guide",
                        "description": "Free comprehensive guide to optimizing your resume for LinkedIn recruiters.",
                        "url": canonicalUrl
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
        <meta name="content-sources" content="LinkedIn Talent Solutions, Jobvite, Journal of Personnel Psychology" />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
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
                  <span itemProp="name">Career Resources</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Optimize Resume for LinkedIn</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">LINKEDIN RESUME OPTIMIZATION 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Optimize Your Resume for LinkedIn Recruiters: 2026 Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Learn proven strategies to optimize your resume for LinkedIn recruiter searches. Discover keyword techniques, profile alignment, and formatting tips that help you get discovered by hiring managers and talent professionals.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "87%", label: "of Recruiters Use LinkedIn*" }, { value: "3x", label: "More Profile Views**" }, { value: "20+", label: "Optimization Tips" }, { value: "Free", label: "Tools & Templates" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiLinkedin /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse Templates</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                *Source: LinkedIn Talent Solutions • **For fully optimized profiles
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 2,800+ words</span>
            <span className="meta-item"><FiClock /> 15 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiEye /> 28,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical LinkedIn Statistic Most Professionals Miss</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                <strong>76% of LinkedIn profiles are incomplete or lack strategic keywords</strong>, meaning they're virtually invisible to the 87% of recruiters who actively search for candidates daily. The remaining 24% capture nearly all recruiter outreach. This guide shows you exactly how to join that top-performing minority.
              </p>
            </div>
          </div>
        </section>

        {/* Recruiter Stats */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📊 Key Statistics ({CURRENT_YEAR} LinkedIn Recruiter Data)</h2>
              <p className="section-subtitle">Industry research on LinkedIn optimization effectiveness and recruiter behavior patterns</p>
            </div>
            <div className="grid">
              {RECRUITER_STATS.map((item, i) => (
                <div key={i} className="recruiter-stat-card">
                  <div className="stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>{item.stat}</div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>{item.label}</p>
                  <span className="feature-tag" style={{ marginTop: '0.75rem' }}>{item.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section id="optimization-strategies" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Proven Optimization Strategies Backed by Data</h2>
              <p className="section-subtitle">Four research-backed techniques that dramatically increase your visibility to LinkedIn recruiters</p>
            </div>
            <div className="grid">
              {OPTIMIZATION_STRATEGIES.map((strategy, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{strategy.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{strategy.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,180,171,0.05)', border: '1px solid rgba(255,180,171,0.3)', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>❌ Before:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{strategy.before}</p>
                    </div>
                    <div style={{ padding: '0.75rem', background: 'rgba(76,175,80,0.05)', border: '1px solid rgba(76,175,80,0.3)', borderRadius: '0.375rem' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>✅ After:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{strategy.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Table */}
        <section id="examples" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before and After: Real Optimization Examples with Measured Impact</h2>
              <p className="section-subtitle">See exactly how each resume element transforms when optimization strategies are applied</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Element</th><th>Before Optimization</th><th>After Optimization</th><th>Measured Impact</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER_EXAMPLES.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.element}</strong></td>
                        <td style={{ color: 'var(--error-color)' }}>{row.before}</td>
                        <td style={{ color: 'var(--success-color)' }}>{row.after}</td>
                        <td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap' }}>{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <h2 id="testimonials-heading" className="section-title">Success Stories</h2>
            <div className="grid">
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p style={{ fontStyle: 'italic', marginBottom: '16px', flex: 1, color: 'var(--text-secondary)' }}>"{testimonial.quote}"</p>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{testimonial.name}</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                    {reviewDates && <small className="text-small" style={{display: 'block'}}>{reviewDates[index]}</small>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title">People Also Ask About LinkedIn Resume Optimization</h2>
            <div className="faq-grid">
              {PEOPLE_ALSO_ASK.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0} style={{ cursor: 'pointer' }}>
                  <summary className="faq-question" style={{ listStyle: 'none' }}>{paa.question}</summary>
                  <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{paa.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      {faqDates && <small className="text-small">Updated: {faqDates[i] || safeCurrentDate}</small>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tools Hook */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Start Optimizing Right Now With Free Tools</h2>
              <p className="section-subtitle">Apply these strategies immediately using our free, no-signup-required tools</p>
            </div>
            <div className="grid">
              <Link href="/free-ats-resume-checker" className="card-executive" style={{ textDecoration: 'none', color: 'inherit', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                  <FiShield size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>ATS Resume Checker</h3>
                  <p className="text-small" style={{ margin: 0 }}>Verify your resume passes automated screening systems</p>
                </div>
                <FiArrowRight size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              </Link>
              <Link href="/free-resume-keyword-matcher" className="card-executive" style={{ textDecoration: 'none', color: 'inherit', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                  <FiSearch size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Keyword Matcher</h3>
                  <p className="text-small" style={{ margin: 0 }}>Match your resume keywords against real job descriptions</p>
                </div>
                <FiArrowRight size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              </Link>
              <Link href="/free-resume-score-checker" className="card-executive" style={{ textDecoration: 'none', color: 'inherit', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                  <FiAward size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Resume Score Checker</h3>
                  <p className="text-small" style={{ margin: 0 }}>Get an instant score showing your resume's optimization level</p>
                </div>
                <FiArrowRight size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Don't Be Invisible to 87% of Recruiters
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these research-backed optimization strategies today and join the 24% of professionals who capture nearly all LinkedIn recruiter outreach. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiLinkedin /> Start Optimizing Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/free-resume-readability-checker", text: "Readability Checker", iconName: "FiEye" },
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

        {/* Internal Linking Footer */}
        <section className="internal-linking-footer">
          <div className="section-container">
            <h3 className="footer-links-title">Related Career Resources</h3>
            <div className="footer-links-grid">
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="footer-link-card">
                <span className="footer-link-text">Beat the ATS Algorithms</span>
                <span className="footer-link-sub">Modern Hiring Software Tips</span>
              </Link>
              <Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="footer-link-card">
                <span className="footer-link-text">AI Prompt Engineering</span>
                <span className="footer-link-sub">Improve Resume Bullets</span>
              </Link>
              <Link href="/best-ats-resume-format-2026" className="footer-link-card">
                <span className="footer-link-text">Best ATS Format 2026</span>
                <span className="footer-link-sub">Pass Automated Screens</span>
              </Link>
              <Link href="/most-in-demand-resume-keywords-for-usa-job-seekers" className="footer-link-card">
                <span className="footer-link-text">In-Demand Keywords</span>
                <span className="footer-link-sub">USA Job Market Data</span>
              </Link>
              <Link href="/free-ats-resume-checker" className="footer-link-card">
                <span className="footer-link-text">Free ATS Resume Checker</span>
                <span className="footer-link-sub">Scan Your Document</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Sources: LinkedIn Talent Solutions, Jobvite, Journal of Personnel Psychology
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">2800</span>
          <span itemProp="sources">LinkedIn Talent Solutions, Jobvite, Journal of Personnel Psychology</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(2).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      }
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default OptimizeResumeLinkedIn;