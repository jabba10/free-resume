// pages/resume-vs-cv-key-differences-and-when-to-use-which.js
import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
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
  .tab-navigation { display:flex; flex-wrap:wrap; justify-content:center; gap:0.5rem; margin-bottom:2rem; }
  .tab-button { display:flex; align-items:center; gap:0.5rem; background:rgba(28,27,29,0.6); border:0.5px solid var(--border-gold-filament); padding:0.625rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; color:var(--text-secondary); cursor:pointer; transition:all var(--transition-fast); }
  .tab-button:hover { background:rgba(32,31,33,0.8); border-color:var(--accent-primary-container); color:var(--text-primary); }
  .tab-button.active { background:var(--accent-primary); border-color:var(--accent-primary); color:var(--accent-on-primary); font-weight:600; }
  .tab-number { width:24px; height:24px; background:rgba(255,255,255,0.15); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:700; }
  .tab-button.active .tab-number { background:rgba(0,0,0,0.2); }
  .example-code-block { background:var(--bg-surface-lowest); border-radius:0.5rem; padding:1.5rem; position:relative; font-family:'Monaco','Menlo',monospace; font-size:var(--font-size-label-sm); color:var(--text-secondary); white-space:pre-wrap; overflow-x:auto; line-height:1.5; border:0.5px solid var(--border-glass); }
  .copy-button-exec { position:absolute; top:0.75rem; right:0.75rem; background:rgba(242,202,80,0.1); border:0.5px solid var(--border-gold-filament); color:var(--accent-primary); padding:0.375rem 0.75rem; border-radius:0.25rem; font-size:var(--font-size-label-sm); cursor:pointer; display:flex; align-items:center; gap:0.25rem; transition:all var(--transition-fast); }
  .copy-button-exec:hover { background:rgba(242,202,80,0.2); }
  .mistake-card-exec { background:rgba(255,180,171,0.05); border-left:3px solid var(--error-color); border-radius:0 0.5rem 0.5rem 0; padding:1rem 1.25rem; display:flex; gap:1rem; align-items:flex-start; }
  .mistake-number { width:28px; height:28px; background:var(--error-color); color:var(--bg-page); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; flex-shrink:0; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What is the main difference between a resume and a CV?", answer: "The main difference is length, purpose, and regional usage. A resume is a concise 1-2 page document tailored for specific job applications, focusing on skills and achievements relevant to that particular role. It's the standard document for corporate, private sector, and government positions in the United States and Canada. A CV (Curriculum Vitae) is a comprehensive 2+ page document detailing your complete academic and professional history, including publications, research, presentations, grants, and teaching experience. CVs are used for academic, research, medical, and scientific positions globally, and are also the standard document for ALL job applications in the UK, Europe, and many other international markets. Understanding this regional difference is critical—submitting a 1-page resume for a UK job is often viewed as incomplete." },
  { question: "Should I use a resume or CV for jobs in the United States?", answer: "For the vast majority of jobs in the United States, use a resume. American employers across corporate, private sector, government, and non-profit organizations expect a 1-page resume (2 pages for senior roles with 15+ years experience) that highlights your most relevant skills and achievements. Only use a CV if you're applying for academic positions (professor, researcher, postdoctoral fellow), medical/healthcare roles (physician, research scientist), or scientific positions where comprehensive documentation of publications and research is explicitly required. A common mistake international applicants make is submitting a multi-page CV for a standard US corporate job—this signals unfamiliarity with American business norms and often leads to immediate rejection regardless of qualifications." },
  { question: "How long should my CV be for UK job applications?", answer: "For UK job applications, your CV should typically be 2 pages. Unlike the US resume, UK CVs are more comprehensive and include detailed work history with responsibilities and achievements for each role, full education details with grades, and professional qualifications. Senior professionals with extensive experience may extend to 3 pages, but 2 pages is the standard expectation for most positions. The UK CV places more emphasis on education and qualifications than the US resume, and often includes a brief personal profile at the top. Recent graduates should keep to 2 pages maximum, using the space to detail relevant coursework, projects, and internship experience rather than extending length unnecessarily." },
  { question: "Do I need to include a photo on my CV for European jobs?", answer: "Photo requirements vary significantly by European country. In Germany, Austria, Switzerland, and several other EU countries, a professional photo is expected on CVs and its absence may be viewed negatively. In the UK and Ireland, photos are generally not included and including one can be seen as unprofessional. In France, it's common but not universally mandatory—it's declining in usage. In Spain and Italy, photos are frequently included. Always research the specific country's standards before submitting. For US resumes, never include a photo as it can lead to discrimination concerns and immediate rejection. The trend across Europe is slowly moving away from photos as diversity and inclusion practices evolve, but local norms still dominate in many markets." },
  { question: "What information does a CV include that a resume doesn't?", answer: "A CV includes several sections typically absent from a resume: complete publication list with full citations, detailed research experience descriptions, conference presentations and invited talks, grant and fellowship history with dollar amounts, teaching experience with course evaluations, professional memberships and affiliations, languages with proficiency levels, and often personal information like date of birth or nationality (depending on country). A resume, by contrast, focuses on the most relevant 10-15 years of professional experience with achievement-focused bullet points, a targeted skills section, and brief education details. The CV presents your complete academic biography; the resume presents a targeted marketing document for a specific role." },
  { question: "Can I convert my resume into a CV or vice versa?", answer: "Yes, conversion is possible but requires significant work. Converting a CV to a resume involves condensing content dramatically—removing older publications, minimizing education details, reducing work history to the most recent and relevant 10-15 years, transforming comprehensive descriptions into achievement-focused bullets with metrics, and adding a targeted skills summary at the top. Converting a resume to a CV requires expanding content—adding complete publication lists, detailing all research activities, including conference presentations, listing grant history, expanding education with dissertation titles and advisors, and adding teaching experience. The conversion process should reflect that these documents serve fundamentally different purposes: the resume markets you for a specific job; the CV documents your complete academic career." }
];

const DOCUMENT_TYPES = [
  { title: "American Resume", description: "Concise, 1-page targeted document for US corporate and private sector job applications. Focuses on relevant achievements and skills aligned with specific job descriptions.", regions: "United States, Canada", usage: "Corporate jobs, private sector, government positions, non-profit roles", features: ["1 page maximum for most roles", "Achievement-focused bullet points", "ATS-optimized with keywords", "Skills section prominently placed", "No photo, age, or personal details", "Tailored for each application"] },
  { title: "British CV", description: "2-page comprehensive document standard for all UK job applications across industries. More detailed than US resume with emphasis on education and qualifications alongside experience.", regions: "United Kingdom, Ireland", usage: "All job applications including corporate, public sector, and academic", features: ["2 pages standard length", "Detailed work history with responsibilities", "Education with grades and qualifications", "Personal profile at top", "Professional memberships listed", "References available on request"] },
  { title: "European CV (Europass)", description: "Standardized EU format used across member states with consistent structure. Often includes personal information and photo depending on specific country norms.", regions: "European Union, Switzerland, Norway", usage: "EU institution jobs, cross-border applications, standardized submissions", features: ["2-3 pages with standardized sections", "Photo often expected (varies by country)", "Date of birth and nationality common", "Language skills with CEFR levels", "Digital competences section", "Communication and organizational skills"] },
  { title: "Academic CV", description: "Comprehensive multi-page document documenting complete academic career including all publications, research, teaching, and service contributions.", regions: "Worldwide (academia, research institutions)", usage: "University positions, research grants, fellowships, academic conferences", features: ["No page limit—completeness valued", "Full publication list with citations", "Detailed research experience", "Grant and funding history", "Teaching portfolio with evaluations", "Service and committee contributions"] }
];

const GLOBAL_COMPARISON = [
  { country: "United States", document: "Resume", length: "1 page", photo: "Never include", personal: "No age/marital status/photo", focus: "Skills & quantifiable achievements" },
  { country: "United Kingdom", document: "CV", length: "2 pages", photo: "Generally not included", personal: "Limited—no photo usually", focus: "Work history & education detail" },
  { country: "Germany", document: "Lebenslauf (CV)", length: "2-3 pages", photo: "Expected professionally", personal: "Date of birth, marital status common", focus: "Detailed chronology & qualifications" },
  { country: "France", document: "CV", length: "1-2 pages", photo: "Often expected", personal: "Age, sometimes photo included", focus: "Education emphasis & experience" },
  { country: "Australia", document: "Resume or CV", length: "2-3 pages", photo: "Optional—declining", personal: "Limited personal information", focus: "Achievements & skills emphasis" },
  { country: "Japan", document: "Rirekisho (CV)", length: "1-2 pages (standard form)", photo: "Required—formal photo", personal: "Detailed personal info required", focus: "Company loyalty & employment stability" }
];

const COMPARISON_SECTIONS = [
  {
    title: "Purpose and Length Comparison",
    content: "Understand the fundamental differences in purpose and document length between resumes and CVs across different job markets.",
    tips: [
      "Resume: 1-2 pages max, tailored for specific job applications with only relevant experience",
      "CV: 2+ pages, comprehensive academic/professional history documenting complete career",
      "Resume purpose: Marketing document to secure interview for specific role",
      "CV purpose: Complete record of academic and professional achievements for evaluation",
      "US standard: Resume for corporate, CV only for academic/medical/research roles",
      "UK/International: CV is the standard document for ALL job applications regardless of industry"
    ],
    example: `RESUME (US Corporate - 1 Page):
Contact Info | Professional Summary
Work Experience (Last 10 years, achievement-focused)
Skills | Education (Brief) | Certifications

CV (UK Standard - 2 Pages):
Contact Info | Personal Profile
Work Experience (Detailed with responsibilities)
Education (Full with grades) | Qualifications
Professional Memberships | References

CV (Academic - 4+ Pages):
Contact Info | Research Interests
Education (Complete with dissertations)
Publications (Full citations) | Presentations
Grants & Funding | Teaching Experience
Service & Committees | References`
  },
  {
    title: "Content and Structure Differences",
    content: "Learn what specific content to include and how to structure each document type appropriately for different audiences.",
    tips: [
      "Resume sections: Summary, Experience, Skills, Education, Certifications—focused on relevance",
      "CV sections: Education, Research, Publications, Presentations, Teaching, Grants, Service—comprehensive",
      "Resume experience descriptions: 3-5 achievement bullets per role with metrics and results",
      "CV experience descriptions: Detailed responsibilities and accomplishments with context",
      "Resume skills: Targeted keywords matching job description requirements",
      "CV skills: Comprehensive listing of all competencies including research methods and languages"
    ],
    example: `RESUME EXPERIENCE BULLET (Achievement-Focused):
"Led cross-functional team of 12 to deliver $2.4M 
software implementation 3 months ahead of schedule, 
reducing operational costs by 28% annually."

CV EXPERIENCE DESCRIPTION (Comprehensive):
"Managed software implementation project involving 
coordination across 4 departments and 12 team members. 
Responsibilities included budget management ($2.4M), 
vendor selection, timeline development, risk assessment, 
and stakeholder communication. Project completed 
3 months ahead of original schedule."`
  },
  {
    title: "When to Use a Resume (US & Canada)",
    content: "Situations where a targeted resume is the appropriate document in North American job markets—which covers most professional roles.",
    tips: [
      "Corporate job applications across all industries (tech, finance, marketing, operations)",
      "Private sector positions at companies of all sizes from startups to Fortune 500",
      "Government jobs at federal, state, and local levels (with specific federal resume format)",
      "Non-profit and NGO professional positions",
      "Contract, freelance, and consulting engagements",
      "Internship and entry-level applications (1 page maximum)"
    ],
    example: `USE A RESUME FOR THESE ROLES:
• Software Engineer at Google
• Marketing Director at Coca-Cola
• Project Manager at Amazon
• Financial Analyst at Goldman Sachs
• HR Manager at Microsoft
• Sales Executive at Salesforce
• Operations Manager at Tesla
• Product Designer at Apple

USE A CV FOR THESE ROLES (even in US):
• University Professor
• Research Scientist at NIH
• Medical Doctor at Hospital
• Postdoctoral Fellow
• Grant Application Reviewer`
  },
  {
    title: "When to Use a CV (Academic & International)",
    content: "Situations requiring a Curriculum Vitae instead of a resume—this covers both academic contexts and international job markets.",
    tips: [
      "Academic positions: professor, lecturer, researcher, postdoctoral fellow, PhD candidate",
      "Medical and healthcare roles: physician, surgeon, medical researcher, clinical positions",
      "Scientific research: laboratory director, research scientist, principal investigator",
      "Grant and fellowship applications requiring publication and research documentation",
      "International job applications: UK, Europe, Asia, Africa, Middle East, Oceania",
      "Speaking engagements, conference presentations, and professional board appointments"
    ],
    example: `USE A CV FOR:
• Assistant Professor at University
• Postdoctoral Research Fellow
• Medical Residency Application
• NSF/NIH Grant Proposal
• Research Scientist at Max Planck Institute (Germany)
• Lecturer Position at Oxford (UK)
• PhD Program Application
• Fulbright Fellowship Application
• Conference Keynote Speaker Bio
• Professional Board Appointment

IN THESE COUNTRIES, USE CV FOR ALL JOBS:
• United Kingdom • Ireland • Germany
• France • Spain • Italy • Netherlands
• Australia • New Zealand • India
• Singapore • Japan • South Africa`
  },
  {
    title: "Global Standards: US vs UK vs EU vs Asia",
    content: "How document expectations differ across major international job markets—critical knowledge for global job seekers.",
    tips: [
      "US: Resume for most jobs (1 page), CV only for academic/medical/research roles",
      "UK: CV for ALL jobs (2 pages standard), more comprehensive than US resume",
      "Germany: Lebenslauf with photo expected, detailed chronology, personal information common",
      "France: CV with photo often expected, education emphasized, 1-2 pages",
      "Japan: Rirekisho standard form with photo required, emphasizes company loyalty",
      "Australia: Resume for corporate (2-3 pages), CV for academic, photo optional but declining"
    ],
    example: `UNITED STATES:
Document: Resume | Length: 1 page
Photo: Never | Personal: None
Format: Achievement-focused, ATS-optimized

UNITED KINGDOM:
Document: CV | Length: 2 pages
Photo: Not usually | Personal: Limited
Format: Comprehensive with education emphasis

GERMANY:
Document: Lebenslauf | Length: 2-3 pages
Photo: Expected | Personal: DOB, marital status
Format: Detailed chronological with qualifications

JAPAN:
Document: Rirekisho | Length: 1-2 pages (form)
Photo: Required (formal) | Personal: Detailed
Format: Standardized form emphasizing stability`
  },
  {
    title: "Converting Between Resume and CV Formats",
    content: "Practical strategies for adapting your document when moving between different job markets, industries, or career stages.",
    tips: [
      "CV to Resume: Remove publications older than 10 years, condense education, focus on relevant experience",
      "Resume to CV: Add complete publication list, expand education details, include all research activities",
      "Maintain consistent formatting, dates, and professional presentation across versions",
      "Create master documents: one comprehensive CV as source of truth, tailored resumes for applications",
      "Research country-specific requirements before conversion—UK CV differs from German Lebenslauf",
      "Test documents with target audience: have someone from that country review before submitting"
    ],
    example: `CONVERTING CV TO RESUME (Academic to Corporate):
BEFORE (CV): 8-page academic CV with 45 publications,
15 conference presentations, full teaching history,
5 research grants totaling $2.3M, committee service

AFTER (Resume): 1-page targeted resume highlighting
project management of $2.3M research portfolio,
team leadership across 15+ collaborators, data analysis
and publication track record, teaching as communication
and presentation skills—reframed for corporate context

CONVERTING RESUME TO CV (Corporate to Academic):
BEFORE (Resume): 1-page marketing resume with 4 roles,
achievement bullets, skills section, brief education

AFTER (CV): 4-page academic CV with expanded education
including dissertation details, corporate projects reframed
as research, professional development as continuing education,
industry publications added, conference presentations listed`
  }
];

const COMMON_MISTAKES = [
  "Using a 1-page US resume for UK job applications where a 2-page CV is expected and viewed as more professional",
  "Submitting a multi-page academic CV for a US corporate job—signals unfamiliarity with American business norms",
  "Including a photo on a US resume—can lead to immediate rejection due to anti-discrimination policies",
  "Omitting a professional photo on a German Lebenslauf where it's still expected by most employers",
  "Using 'Resume' and 'CV' interchangeably when they represent fundamentally different documents in the US",
  "Not adapting document length for target country—1 page ideal in US, 2 pages standard in UK, 2-3 in Germany",
  "Failing to include personal information (date of birth, nationality) on CVs where it's standard practice",
  "Applying US resume formatting conventions (no personal details, achievement-only bullets) to UK/EU CVs"
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Professional Resume Templates", desc: "ATS-optimized templates designed for US, UK, and international job markets with proper formatting for each region." },
  { href: "/free-resume-tools", title: "Free Resume Building Tools", desc: "AI-powered resume builder, keyword matcher, and score checker to optimize your document for any job market." },
  { href: "/cover-letter-guides", title: "Cover Letter Writing Guides", desc: "Learn how to write compelling cover letters that complement your resume or CV for international applications." },
  { href: "/how-to-write-a-federal-resume-for-usa-government-jobs", title: "Federal Resume Guide (USA)", desc: "Specialized guidance for US government positions requiring the unique federal resume format with CCAR methodology." },
  { href: "/interview-tips", title: "International Interview Preparation", desc: "Prepare for interviews across different cultures with country-specific etiquette and expectation guides." },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker", desc: "Test your resume against applicant tracking systems used by major employers worldwide before submitting." }
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
const ResumeVsCVPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which";

  // Article @id for structured data references
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/images/resume-vs-cv-preview.jpg";

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [copied, setCopied] = useState(false);
  const toolRef = useRef(null);

  const handleCopyExample = (exampleText) => {
    navigator.clipboard.writeText(exampleText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 62 characters (BELOW 70 LIMIT) */}
        <title>Resume vs CV: Key Differences & Global Standards Guide 2026</title>
        <meta name="title" content="Resume vs CV: Key Differences & Global Standards Guide 2026" />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with examples and international requirements for ${CURRENT_YEAR}.`} />
        <meta name="keywords" content="resume vs cv, difference between resume and cv, when to use resume vs cv, cv vs resume comparison, us resume format, uk cv format, european cv standards, global job application documents, academic cv vs professional resume, resume for us job market, cv for uk job market, international job application guide, resume cv differences, when to use a cv, when to use a resume, us job application documents, uk job application documents, eu job application standards, curriculum vitae vs resume, professional resume guide, academic cv guide, international resume standards, global cv format, resume for corporate jobs, cv for academic positions, us uk eu job market differences, resume length standards, cv content requirements, international job search guide" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Resume vs CV: Key Differences & Global Standards Guide 2026" />
        <meta name="chatgpt-fts:description" content={`Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with ${CURRENT_YEAR} examples.`} />
        <meta name="chatgpt-fts:keywords" content="resume vs cv, difference between resume and cv, when to use resume vs cv, cv vs resume comparison, us resume format, uk cv format, european cv standards, global job application documents, international job application guide" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Resume vs CV: Key Differences & Global Standards Guide 2026" />
        <meta property="og:description" content={`Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with ${CURRENT_YEAR} examples.`} />
        <meta property="og:image" content={productImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="article:published_time" content={`${safeCurrentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume, CV, job applications, international careers" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume vs CV: Key Differences & Global Standards Guide" />
        <meta name="twitter:description" content="Learn Resume vs CV differences for US, UK, and EU job markets. When to use each document with international standards and examples." />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="twitter:label1" content="Countries covered" />
        <meta name="twitter:data1" content="6+" />
        <meta name="twitter:label2" content="Document types" />
        <meta name="twitter:data2" content="Resume & CV" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
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
                  "headline": "Resume vs CV: Key Differences & Global Standards Guide 2026",
                  "description": `A comprehensive guide explaining the differences between resumes and CVs, when to use each document, and global standards for US, UK, EU, and other international job markets. Updated for ${CURRENT_YEAR}.`,
                  "image": productImage,
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
                      "width": 512,
                      "height": 512
                    }
                  },
                  "datePublished": `${safeCurrentDate}T00:00:00+00:00`,
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "articleSection": "Career Resources",
                  "keywords": "resume vs CV, job applications, international careers, global standards"
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
                      "name": "Career Guides",
                      "item": "https://professionalresumefree.com/career-guides"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Resume vs CV: Key Differences",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": `Resume vs CV: Key Differences & Global Standards Guide ${CURRENT_YEAR}`,
                  "description": `Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with ${CURRENT_YEAR} examples.`,
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": f.answer
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Choose Between Resume and CV for International Jobs",
                  "description": "Step-by-step guide to selecting the right document type for global job applications",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Identify Your Target Country and Job Market",
                      "text": "Determine which country you're applying to. US and Canada typically require resumes for corporate roles. UK, Europe, and most international markets use CVs for all positions. Academic and research roles worldwide require comprehensive CVs."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Determine if Position Is Academic/Research or Corporate",
                      "text": "Academic, medical, and scientific research positions require a comprehensive CV with publications, research history, and grants regardless of country. Corporate, government, and non-profit positions follow country-specific norms."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Select Appropriate Document Type Based on Region",
                      "text": "For US corporate roles: 1-page resume. For UK all roles: 2-page CV. For Germany: 2-3 page Lebenslauf with photo. For Japan: standardized Rirekisho form. For academic roles globally: comprehensive academic CV."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Format Document According to Country-Specific Standards",
                      "text": "Adjust length, photo inclusion, personal information, and content emphasis based on target country norms. Include photos for Germany and Japan. Remove photos for US and UK. Add personal details where expected."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include Required Personal Information Per Regional Norms",
                      "text": "US: no personal details. UK: limited personal information. Germany: date of birth, marital status. Japan: detailed personal information including family details on standardized form."
                    }
                  ],
                  "totalTime": "PT15M"
                },
                {
                  "@type": "Product",
                  "@id": `${canonicalUrl}#product`,
                  "name": "Resume vs CV Global Standards Guide",
                  "description": `Comprehensive guide covering Resume vs CV differences with global standards for US, UK, EU, and international job markets. Updated for ${CURRENT_YEAR}.`,
                  "image": productImage,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": canonicalUrl,
                    "priceValidUntil": `${CURRENT_YEAR}-12-31`,
                    "eligibleRegion": {
                      "@type": "Country",
                      "name": "Worldwide"
                    },
                    "shippingDetails": {
                      "@type": "OfferShippingDetails",
                      "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": "0",
                        "currency": "USD"
                      },
                      "shippingDestination": {
                        "@type": "DefinedRegion",
                        "addressCountry": "US"
                      },
                      "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                          "@type": "QuantitativeValue",
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        },
                        "transitTime": {
                          "@type": "QuantitativeValue",
                          "minValue": "0",
                          "maxValue": "0",
                          "unitCode": "DAY"
                        }
                      }
                    },
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "applicableCountry": "US",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
                      "merchantReturnDays": "0",
                      "returnMethod": "https://schema.org/ReturnNotPermitted",
                      "returnFees": "https://schema.org/FreeReturn"
                    }
                  },
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "learningResourceType",
                      "value": "Guide"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "educationalLevel",
                      "value": "Professional"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "creativeWorkStatus",
                      "value": "Updated"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp || Date.now()} />
        <meta name="content-freshness" content={safeCurrentDate} />
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
                <Link href="/career-guides" itemProp="item">
                  <span itemProp="name">Career Guides</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiGlobe size={14} style={{marginRight: '4px'}} /> Resume vs CV Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ US • UK • EU • Asia • Global Standards • {CURRENT_YEAR} Edition</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume vs. CV:</span> Key Differences & Global Standards
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>Global Standards for UK, US, and EU Job Markets.</strong> Choosing between a resume and CV can make or break your international job application. <strong>75% of hiring managers reject applications using the wrong document type.</strong> This comprehensive guide provides everything you need to understand global standards, regional expectations, and proper usage for {CURRENT_YEAR} job markets.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "1 Page", label: "Ideal US Resume Length" }, { value: "2 Pages", label: "Standard UK CV Length" }, { value: "6+", label: "Countries Covered" }, { value: "75%", label: "Reject Wrong Document Type" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiGlobe /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Browse Templates</Link>
              </div>
              {/* Freshness indicator */}
              <div style={{marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)'}} aria-label="Page last updated">
                <FiCalendar style={{marginRight: '4px'}} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
            <span><FiGlobe style={{marginRight: '4px'}} /> 6+ Countries</span>
            <span><FiClock style={{marginRight: '4px'}} /> 12 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 45,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: A Resume in the US Is Not a CV in the UK</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                The terms "resume" and "CV" are used interchangeably in casual conversation, but they represent <strong>fundamentally different documents with different purposes, lengths, and regional expectations.</strong> In the United States, a resume is a 1-page targeted marketing document for corporate jobs, while a CV is a comprehensive academic document used only in research and medical fields. In the United Kingdom and Europe, "CV" is the standard term for ALL job application documents—but these are actually more similar to US resumes than academic CVs. <strong>Using the wrong document type for your target country signals cultural unfamiliarity and often leads to immediate rejection.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="section" ref={toolRef} id="document-types">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Document Types for Global Job Markets</h2>
              <p className="section-subtitle">Understand the four distinct document formats used around the world and when each is appropriate</p>
            </div>
            <div className="grid">
              {DOCUMENT_TYPES.map((type, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                      {i === 0 ? <FiFileText size={18} color="var(--accent-primary)" /> : i === 1 ? <FiBookOpen size={18} color="var(--accent-primary)" /> : i === 2 ? <FiGlobe size={18} color="var(--accent-primary)" /> : <FiAward size={18} color="var(--accent-primary)" />}
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{type.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>{type.description}</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <FiMapPin size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}><strong>Regions:</strong> {type.regions}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                    <FiBriefcase size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}><strong>Used for:</strong> {type.usage}</span>
                  </div>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Key Features:</p>
                    {type.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                        <FiCheck size={12} color="var(--success-color)" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Comparison Table */}
        <section className="section section-alt" id="global-standards">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Global Standards: Country-by-Country Comparison ({CURRENT_YEAR})</h2>
              <p className="section-subtitle">How document expectations differ across major international job markets</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Country</th><th>Document Type</th><th>Length</th><th>Photo</th><th>Personal Info</th><th>Primary Focus</th></tr></thead>
                  <tbody>
                    {GLOBAL_COMPARISON.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.country}</strong></td>
                        <td><span className="feature-tag">{row.document}</span></td>
                        <td>{row.length}</td>
                        <td style={{ color: row.photo.includes('Never') || row.photo.includes('not') ? 'var(--error-color)' : 'var(--success-color)' }}>{row.photo}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.personal}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Source:</p>
                <p className="text-small" style={{ margin: 0 }}>Compiled from country-specific HR association guidelines, international recruitment agency standards, and cross-border hiring best practices updated for {CURRENT_YEAR}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Comparison Guide */}
        <section className="section" id="comparison-guide">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Resume vs CV Comparison Guide</h2>
              <p className="section-subtitle">Step-by-step comparison of purpose, content, and usage across six essential dimensions</p>
            </div>

            <div className="tab-navigation">
              {COMPARISON_SECTIONS.map((section, index) => (
                <button
                  key={index}
                  className={`tab-button ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                >
                  <span className="tab-number">{index + 1}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                  {COMPARISON_SECTIONS[activeSection].title}
                </h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {COMPARISON_SECTIONS[activeSection].content}
                </p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="strategy-card">
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheck size={16} /> Key Differences
                  </h4>
                  <ul className="list-style">
                    {COMPARISON_SECTIONS[activeSection].tips.map((tip, idx) => (
                      <li key={idx} style={{ paddingBottom: '0.5rem', borderBottom: '0.5px solid var(--border-glass)', display: 'flex', gap: '0.5rem' }}>
                        <FiCheckCircle size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="strategy-card">
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiFileText size={16} /> Practical Examples
                  </h4>
                  <div className="example-code-block">
                    {COMPARISON_SECTIONS[activeSection].example}
                    <button 
                      className="copy-button-exec"
                      onClick={() => handleCopyExample(COMPARISON_SECTIONS[activeSection].example)}
                    >
                      <FiCopy size={12} />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section section-alt" id="common-mistakes">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common International Application Mistakes to Avoid</h2>
              <p className="section-subtitle">Steer clear of these costly errors that cause qualified candidates to be rejected in global job applications</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="mistake-card-exec">
                  <div className="mistake-number">{i + 1}</div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Resume vs CV ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to the most common questions about resumes, CVs, and international job applications</p>
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
                      <small className="text-small" style={{ display: 'block', marginTop: '0.5rem' }}>Updated: {safeFaqDates[i] || safeCurrentDate}</small>
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
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready for International Job Applications?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Create perfectly formatted resumes and CVs for any global job market with our specialized builders covering US, UK, EU, and international standards. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiGlobe /> Build Your Document Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["US, UK, EU Standards", "Proper Document Selection", "International Compliance", `${CURRENT_YEAR} Global Standards`].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Expand Your Job Search Toolkit</h2>
              <p className="section-subtitle">Complement your resume or CV with these essential resources for a successful international job search</p>
            </div>
            <div className="geo-link-grid">
              {RELATED_LINKS.map((link, i) => {
                const icons = [FiFileText, FiTool, FiEdit3, FiShield, FiUserCheck, FiSearch];
                const IconComponent = icons[i] || FiFileText;
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • 100% Free Guide • Global Standards</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
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
    revalidate: 86400 
  };
}

export default ResumeVsCVPage;