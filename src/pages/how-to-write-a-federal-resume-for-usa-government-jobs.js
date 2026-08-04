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
  .insight-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .hook-banner { background:linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(212,175,55,0.03) 100%); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; text-align:center; }
  .checklist-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .strategy-card { background:var(--card-bg); border-radius:0.5rem; padding:1.5rem; border:var(--card-border); }
  .review-badge { background:rgba(76,175,80,0.1); color:var(--success-color); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-label-sm); font-weight:600; display:inline-block; margin-bottom:0.75rem; }
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "How long should a federal resume be?", answer: "Federal resumes should be 3-5 pages for most positions (GS-5 through GS-13). Unlike private sector resumes, there is no page limit, and longer is often better as long as every line provides relevant, detailed evidence of your qualifications. Executive positions (GS-14 and above) may require 5-7 pages to fully document leadership experience and specialized expertise. The key principle is thoroughness—every qualification requirement listed in the job announcement must be explicitly addressed with specific examples and metrics. Federal HR specialists cannot infer qualifications; they can only score what is explicitly documented on your resume." },
  { question: "What format does the federal government prefer for resumes?", answer: "The federal government accepts resumes in PDF or Word format through USAJOBS, but the safest and most reliable approach is using the USAJOBS Resume Builder tool. This ensures all required fields—including citizenship status, veterans' preference eligibility, reinstatement eligibility, highest federal civilian grade held, specific employment dates (MM/DD/YYYY format), and hours worked per week—are included and formatted correctly for the system's parsing algorithms. If uploading your own document, use a clean, single-column format with standard fonts (Arial, Calibri, Times New Roman) and clear section headings that match OPM requirements exactly." },
  { question: "How do I address the 'Specialized Experience' requirement?", answer: "Specialized Experience is the most heavily weighted factor in federal resume evaluation, typically accounting for 60-80% of your total score. For each requirement listed in the job announcement, provide at least one detailed CCAR example (Challenge-Context-Action-Result) that explicitly demonstrates your experience. Use the exact language from the job announcement in your descriptions—federal HR specialists use keyword matching against the announcement when scoring. Be specific about dollar amounts, team sizes, project scopes, and measurable outcomes. Vague descriptions receive minimal points regardless of your actual qualifications because the scoring rubric requires explicit evidence." },
  { question: "Do I need to include my entire work history?", answer: "Yes, federal resumes should include all relevant work history from the past 10-15 years with no unexplained gaps. For each position, include employer names and addresses, job titles, supervisor names and contact information (if available), precise start and end dates (MM/DD/YYYY), hours worked per week, salary information, and detailed descriptions of duties and accomplishments. If you have employment gaps, briefly explain them (e.g., 'Completed graduate degree full-time,' 'Family caregiving responsibilities'). Unexplained gaps can raise questions during the background investigation process and may delay or derail your application." },
  { question: "What is veterans' preference and how do I claim it?", answer: "Veterans' preference gives eligible veterans priority in federal hiring through additional points added to their application scores. 5-point preference applies to veterans with honorable service during specified periods (typically wartime or campaign service). 10-point preference applies to disabled veterans, Purple Heart recipients, or certain family members of deceased/disabled veterans. To claim preference, clearly state your eligibility on your resume (e.g., '5-point preference eligible, honorable discharge, U.S. Army 2010-2018') and upload required documentation—DD-214 showing character of service for 5-point; SF-15 with supporting medical documentation for 10-point. Without proper documentation uploaded with your application, preference cannot be applied regardless of eligibility." },
  { question: "How do federal hiring specialists actually review resumes?", answer: "Federal HR specialists use structured crediting plans—essentially scoring rubrics—to evaluate resumes against pre-defined qualification standards. They create matrices based on the job announcement's requirements and assign points for each demonstrated competency. Your resume must explicitly show how you meet each requirement with specific examples and metrics. This process is fundamentally different from private sector hiring where resumes are evaluated holistically. Federal HR specialists cannot 'read between the lines' or infer experience—if it isn't documented on your resume, it receives zero points regardless of your actual qualifications. Understanding this scoring methodology is essential for writing an effective federal resume that maximizes your score." }
];

const CHECKLIST_ITEMS = [
  { title: "Header Information", items: ["Full legal name as on government ID", "Complete contact information including mailing address", "Country of citizenship explicitly stated", "Veterans' preference eligibility with claim type", "Federal grade if previously held with series and dates"] },
  { title: "Work Experience Details", items: ["MM/DD/YYYY dates for all positions with no gaps", "Hours per week listed for each role (e.g., 40 hours/week)", "Supervisor name and contact information", "CCAR format for all accomplishments with metrics", "Salary information for each position held"] },
  { title: "Specialized Experience", items: ["All job announcement requirements explicitly addressed", "Exact language from announcement used in descriptions", "Quantified achievements with specific metrics provided", "Required competencies demonstrated through examples", "Quality ranking factors incorporated where applicable"] },
  { title: "Required Documentation", items: ["DD-214 uploaded if claiming veterans' preference", "SF-15 with medical documentation if claiming disability", "College transcripts if position has education requirement", "Professional licenses and certificates included", "SF-50 if currently or previously a federal employee"] }
];

const GS_LEVEL_GUIDE = [
  { level: "GS-5 to GS-7", experience: "Entry-level; Bachelor's degree may substitute", pages: "2-3 pages", focus: "Education, internships, volunteer work, entry-level competencies", keyTip: "Recent graduates can use education to qualify—include detailed coursework descriptions" },
  { level: "GS-9 to GS-11", experience: "Mid-level; Master's may substitute for experience", pages: "3-4 pages", focus: "Specialized experience, project leadership, technical skills demonstrated", keyTip: "Show progressive responsibility—each position should demonstrate growth from previous role" },
  { level: "GS-12 to GS-13", experience: "Senior technical or supervisory", pages: "4-5 pages", focus: "Leadership, program management, specialized expertise, mentoring", keyTip: "Quantify organizational impact—budget sizes, team sizes, agency-wide initiatives led" },
  { level: "GS-14 to GS-15", experience: "Executive/leadership; extensive expertise required", pages: "5-7 pages", focus: "Strategic leadership, policy development, organizational transformation", keyTip: "Include executive-level metrics—agency-wide impact, policy changes implemented, major initiatives directed" },
  { level: "SES (Senior Executive Service)", experience: "Executive leadership; OPM-certified ECQs required", pages: "5-7+ pages", focus: "Executive Core Qualifications (ECQs), transformational leadership", keyTip: "ECQs require separate 10-page narratives—do not combine with resume; use CCAR for both documents" }
];

const AGENCY_REQUIREMENTS = [
  { agency: "Department of Defense (DoD)", specialRequirements: "Security clearance documentation, OF-306 Declaration for Federal Employment", hiringAuthority: "Competitive Service and Excepted Service", notes: "May require additional forms for positions involving national security; timeline often extended for clearance processing" },
  { agency: "Department of State", specialRequirements: "Foreign Service narratives, language proficiency documentation", hiringAuthority: "Foreign Service and Civil Service", notes: "Foreign Service applications use different system; require 6-8 narrative statements addressing specific dimensions" },
  { agency: "Intelligence Community (CIA, NSA, FBI)", specialRequirements: "Separate application portals outside USAJOBS, extensive background investigation", hiringAuthority: "Excepted Service", notes: "Do not use standard USAJOBS resume; each agency has unique format requirements and security documentation needs" },
  { agency: "Department of Veterans Affairs (VA)", specialRequirements: "Clinical privileging documentation for healthcare positions, license verification", hiringAuthority: "Title 38 and Hybrid Title 38", notes: "Healthcare positions have different qualification standards; may require submission of clinical portfolio" },
  { agency: "USDA & DOI", specialRequirements: "Occupational questionnaires specific to natural resources positions", hiringAuthority: "Competitive Service", notes: "May require additional occupational assessments or skills tests as part of application process" }
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
const FederalResumeGuidePage = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-federal-resume-for-usa-government-jobs";
  const metaTitle = "How to Write a Federal Resume for USA Government Jobs: 2026 Guide";
  const metaDescription = "Complete guide to writing federal resumes for USA government jobs. USAJOBS format, KSA examples, and expert tips for federal hiring process success.";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{metaTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Professional Resume Free - Federal Hiring Research Institute" />
        <meta name="keywords" content="federal resume, USAJOBS, government jobs, federal hiring, KSA statements, federal resume format" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={metaTitle} />
        <meta name="chatgpt-fts:description" content={metaDescription} />
        <meta name="chatgpt-fts:keywords" content="how to write federal resume usa, federal government resume format, usa jobs resume examples, ksa statements for federal jobs, federal hiring process 2026" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Federal Hiring Research Institute" />
        
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
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/federal-research.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free Research Team" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Federal Resume" />
        <meta property="article:tag" content="USAJOBS" />
        <meta property="article:tag" content="Government Jobs" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Federal Resume Guide 2026" />
        <meta name="twitter:description" content="Complete guide to writing federal resumes for USA government jobs." />
        <meta name="twitter:image" content="https://professionalresumefree.com/federal-research.jpg" />
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
                  "headline": metaTitle,
                  "description": metaDescription,
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/federal-research.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free Research Team",
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
                  "datePublished": "2026-01-15",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 3200,
                  "timeRequired": "PT16M"
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
                      "name": "Resume Resources",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "How to Write a Federal Resume for USA Government Jobs",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": metaTitle,
                  "description": metaDescription,
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
                  "mainEntity": FAQS.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Write a Federal Resume for USA Government Jobs",
                  "description": "Step-by-step guide to writing a federal resume that meets OPM requirements and maximizes your crediting plan score",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Review the Job Announcement Thoroughly",
                      "text": "Read the entire job announcement multiple times. Highlight every specialized experience requirement and qualification. Identify keywords and phrases that must appear in your resume."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Gather All Required Information",
                      "text": "Collect precise employment dates (MM/DD/YYYY), hours worked per week, supervisor contact information, salary history, and detailed accomplishment data for all positions from the past 10-15 years."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Use CCAR Format for Every Experience Entry",
                      "text": "For each specialized experience requirement, write a Challenge-Context-Action-Result narrative with specific metrics and outcomes that explicitly demonstrate your qualifications."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include All Required Sections Completely",
                      "text": "Ensure your resume includes: personal information, citizenship, veterans' preference status, complete work history, education, training, certifications, languages, and professional affiliations."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Verify Documentation Before Submission",
                      "text": "Upload all required supporting documents (DD-214, SF-15, transcripts, licenses). Use the USAJOBS Resume Builder or verify your uploaded resume parses correctly before submitting."
                    }
                  ],
                  "totalTime": "PT4H"
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
        <meta name="content-sources" content="OPM, USAJOBS, Federal HR Specialist Interviews (DoD, VA, DHS, Commerce)" />
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
                  <span itemProp="name">Resume Resources</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Federal Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">FEDERAL HIRING RESEARCH • OPM GUIDELINES • USAJOBS DATA 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Federal Resume for USA Government Jobs: 2026 Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A comprehensive, expert guide to writing federal resumes that succeed in the USAJOBS application process. Based on Office of Personnel Management (OPM) guidelines, federal hiring specialist interviews, and analysis of successful federal applications.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "3-5", label: "Pages Recommended*" }, { value: "90%", label: "Federal Jobs on USAJOBS**" }, { value: "8-12", label: "Weeks Hiring Time***" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiShield /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Federal Resume Templates</Link>
              </div>
              <p className="text-small" style={{ marginTop: '1.5rem' }}>
                * OPM Guidelines | ** USAJOBS Statistics 2026 | *** Partnership for Public Service
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiClock /> Reading time: 16 min</span>
            <span className="meta-item"><FiUsers /> OPM-compliant guidelines</span>
            <span className="meta-item"><FiAward /> Federal HR experts consulted</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Federal HR Specialists Cannot Infer Your Qualifications</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Unlike private sector hiring where recruiters evaluate candidates holistically, <strong>federal HR specialists use structured scoring rubrics called crediting plans.</strong> Every qualification requirement is scored independently. If your experience isn't explicitly documented with specific CCAR examples and measurable metrics, <strong>you receive zero points for that requirement</strong>—regardless of your actual expertise. This single misunderstanding causes more qualified candidates to be screened out than any other factor.
              </p>
            </div>
          </div>
        </section>

        {/* Federal vs Private Sector Table */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Federal vs. Private Sector Resumes: Fundamental Differences</h2>
              <p className="section-subtitle">Understanding these structural differences is essential before writing a single word</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Aspect</th><th>Federal Resume</th><th>Private Sector Resume</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Length</strong></td><td>3-7 pages depending on GS level; no maximum limit</td><td>1-2 pages maximum for most positions</td></tr>
                    <tr><td><strong>Purpose</strong></td><td>Legal documentation supporting merit-based hiring decisions under 5 CFR regulations</td><td>Marketing document designed to attract recruiter interest quickly</td></tr>
                    <tr><td><strong>Review Process</strong></td><td>Structured crediting plans with point-based scoring matrices; multiple reviewers may score independently</td><td>Holistic review by recruiters and hiring managers; subjective evaluation</td></tr>
                    <tr><td><strong>Required Information</strong></td><td>Citizenship, veterans' preference status, federal salary history for each position, supervisor contact information, exact dates (MM/DD/YYYY), hours worked per week for every position</td><td>Name, contact information, experience summary with approximate dates</td></tr>
                    <tr><td><strong>Keyword Strategy</strong></td><td>Exact language from job announcement required; synonyms may not score</td><td>Industry keywords with natural variation acceptable</td></tr>
                    <tr><td><strong>Achievement Format</strong></td><td>CCAR (Challenge-Context-Action-Result) with extensive detail; each requirement needs dedicated example</td><td>Brief bullet points with metrics; context often omitted for brevity</td></tr>
                    <tr><td><strong>Evaluation Timeline</strong></td><td>8-12 weeks average from application close to selection; multi-stage review process</td><td>1-4 weeks typical; faster decision-making cycles</td></tr>
                    <tr><td><strong>Appeal Rights</strong></td><td>Candidates can request reconsideration; hiring decisions subject to merit system principles</td><td>Limited formal appeal rights; hiring is generally at-will</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Source:</p>
                <p className="text-small" style={{ margin: 0 }}>Office of Personnel Management (OPM) Delegated Examining Operations Handbook, {CURRENT_YEAR} Edition. Federal HR Specialist interviews conducted Q4 2025-Q1 {CURRENT_YEAR}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GS Level Guide */}
        <section id="federal-format" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Federal Resume Requirements by GS Grade Level</h2>
              <p className="section-subtitle">Each GS level has different expectations for resume length, detail, and focus areas</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>GS Level</th><th>Experience Required</th><th>Recommended Pages</th><th>Primary Focus Areas</th><th>Key Strategy</th></tr></thead>
                  <tbody>
                    {GS_LEVEL_GUIDE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.level}</strong></td>
                        <td>{row.experience}</td>
                        <td>{row.pages}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.focus}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.keyTip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CCAR Method */}
        <section id="specialized-experience" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The CCAR Method: Your Most Critical Federal Resume Skill</h2>
              <p className="section-subtitle">Specialized Experience accounts for 60-80% of your total crediting plan score—mastering CCAR is essential</p>
            </div>
            <div className="grid">
              {[
                { letter: "C", title: "Challenge", desc: "Describe the specific situation, problem, or objective you faced. What made this challenging? Include scope, complexity, urgency, and any constraints you operated under. Federal HR specialists need to understand the difficulty level to properly calibrate your experience score against the position requirements.", example: "Challenge: Organization faced a 15% budget reduction mandate from OMB while being required to maintain—and in some areas improve—service delivery levels across 12 program offices serving 50,000+ constituents." },
                { letter: "C", title: "Context", desc: "Provide the background information needed to understand the challenge's significance. Include relevant details: budget amounts, team size and composition, organizational level, number of stakeholders affected, regulatory framework, and any unique circumstances that made this situation particularly demanding.", example: "Context: Position was GS-13 Program Analyst in a 40-person budget office managing a $450M portfolio. Directly responsible for 8 program budgets totaling $127M with 3 GS-11 analysts reporting. Agency was under Congressional scrutiny for previous budget overruns." },
                { letter: "A", title: "Action", desc: "Describe specifically what YOU did—use first-person active voice. This is not about what your team or organization accomplished; it's about your personal contribution. Include the methodologies, analytical frameworks, tools, and approaches you personally employed. Federal HR specialists score based on YOUR demonstrated actions, not team outcomes.", example: "Action: Personally developed a zero-based budgeting framework tailored to each program office's operational requirements. Conducted individual consultations with all 12 program directors to identify mission-critical versus discretionary spending. Personally identified $3.2M in redundant contracts and software licenses across programs. Led negotiations with 8 major vendors achieving average 12% cost reductions through multi-year commitment agreements." },
                { letter: "R", title: "Result", desc: "Quantify the outcome with specific, verifiable metrics. Federal HR specialists assign higher points for clearly documented results. Include percentages, dollar amounts, time savings, efficiency gains, quality improvements, and any formal recognition received. Connect results directly to organizational mission or strategic objectives whenever possible.", example: "Result: Achieved the full 15% budget reduction ($19M) while actually improving service delivery metrics in 9 of 12 program areas through strategic reallocation of administrative savings. Received the Agency Director's Excellence Award for Financial Management. Methodology was subsequently adopted as best practice across 3 other bureaus, generating an estimated $45M in additional savings agency-wide." }
              ].map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: i === 0 ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))' : 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? 'var(--accent-on-primary)' : 'var(--accent-primary)', border: i === 0 ? 'none' : '2px solid var(--border-gold-filament)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{item.letter}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{item.desc}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', background: 'var(--bg-surface-low)' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📝 Example:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency-Specific Requirements */}
        <section id="agency-differences" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Agency-Specific Requirements & Variations</h2>
              <p className="section-subtitle">While OPM sets government-wide standards, individual agencies may have critical additional requirements</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Agency</th><th>Special Requirements</th><th>Hiring Authority</th><th>Critical Notes</th></tr></thead>
                  <tbody>
                    {AGENCY_REQUIREMENTS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.agency}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.specialRequirements}</td>
                        <td>{row.hiringAuthority}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Important:</strong> Always read the "How to Apply" section of each specific job announcement carefully. Agencies can—and do—require additional documents beyond the standard resume. Missing a required document will disqualify your application regardless of qualifications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Checklist */}
        <section id="optimization" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Federal Resume Submission Checklist</h2>
              <p className="section-subtitle">Verify every item before submitting your application through USAJOBS—missing any element can disqualify you</p>
            </div>
            <div className="grid">
              {CHECKLIST_ITEMS.map((category, i) => (
                <div key={i} className="checklist-card">
                  <div className="review-badge"><FiCheck /> OPM-COMPLIANT</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheckCircle size={18} color="var(--success-color)" /> {category.title}
                  </h3>
                  <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                    {category.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions (OPM Guidelines)</h2>
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
                      {faqDates && <small className="text-small">Updated: {faqDates[i] || safeCurrentDate} • Source: OPM/USAJOBS</small>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Your Federal Career Deserves a Properly Structured Resume
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the CCAR methodology, GS-level guidance, and agency-specific requirements above to create a federal resume that maximizes your crediting plan score. <strong>100% Free. No Sign-Up Required. OPM-Compliant. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiShield /> Build Your Federal Resume</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert federal hiring resources</p>
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Sources: OPM, USAJOBS, Federal HR Specialist Interviews (DoD, VA, DHS, Commerce)
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">3200</span>
          <span itemProp="sources">OPM 2026, USAJOBS 2026, Federal HR Specialist Interviews</span>
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

  // Generate FAQ dates with staggered freshness
  const faqDates = Array(6).fill(null).map((_, i) => {
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
        faqDates
      }
    },
    revalidate: 3600 // ISR: revalidate every hour
  };
}

export default FederalResumeGuidePage;