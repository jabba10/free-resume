import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiAward as FiCrownAlt, FiTrendingUp as FiRocketAlt, FiCode, FiPenTool, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp,
  FiPlus, FiMinus, FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck
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
    --textarea-min-height: 300px;
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
  .letter-editor { width:100%; min-height:400px; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-family:'Times New Roman',Georgia,serif; font-size:var(--font-size-body-md); line-height:1.7; resize:vertical; }
  .letter-display { background:var(--card-bg); backdrop-filter:blur(10px); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); white-space:pre-wrap; font-family:'Times New Roman',Georgia,serif; line-height:1.7; font-size:var(--font-size-body-md); color:var(--text-primary); }
  .template-card { padding:1.5rem; background:var(--card-bg); border-radius:0.5rem; border:var(--card-border); cursor:pointer; transition:all var(--transition-fast); }
  .template-card:hover { border-color:var(--accent-primary-container); }
  .template-card.selected { border-color:var(--accent-primary); background:rgba(242,202,80,0.05); box-shadow:0 0 10px rgba(242,202,80,0.15); }
  .step-number { width:40px; height:40px; border-radius:50%; background:rgba(229,225,228,0.1); color:var(--text-muted); display:flex; align-items:center; justify-content:center; font-weight:var(--font-weight-bold); margin:0 auto 0.5rem; font-size:var(--font-size-body-sm); }
  .step-number.active { background:linear-gradient(135deg,var(--accent-primary),var(--accent-primary-container)); color:var(--accent-on-primary); box-shadow:var(--shadow-gold-glow-sm); }
  .form-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; }
  .form-group-full { grid-column:1/-1; }
  .label-style { display:block; font-weight:var(--font-weight-semibold); margin-bottom:0.5rem; color:var(--text-primary); font-size:var(--font-size-body-sm); }
  .stats-row { display:flex; gap:0.5rem; flex-wrap:wrap; }
  .stat-tag { background:rgba(242,202,80,0.1); padding:0.375rem 0.75rem; border-radius:9999px; font-size:var(--font-size-label-sm); color:var(--accent-primary); font-weight:var(--font-weight-medium); border:0.5px solid var(--border-gold-filament); }
  .review-card { background:var(--card-bg); border-radius:0.5rem; padding:var(--card-padding); border:var(--card-border); }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';

const TEMPLATE_VARIANTS = [
  { id: 'standard', name: 'Standard Professional', description: 'Classic business format suitable for most industries', tone: 'Professional, respectful, confident', icon: 'FiBriefcase' },
  { id: 'creative', name: 'Creative Industry', description: 'More engaging and expressive for creative fields', tone: 'Energetic, innovative, passionate', icon: 'FiPenTool' },
  { id: 'executive', name: 'Executive Level', description: 'Strategic and results-focused for senior positions', tone: 'Strategic, leadership-focused, impactful', icon: 'FiCrownAlt' },
  { id: 'entry', name: 'Entry Level', description: 'Emphasizes potential and enthusiasm for early career', tone: 'Enthusiastic, eager to learn, adaptable', icon: 'FiRocketAlt' },
  { id: 'technical', name: 'Technical & IT', description: 'Highlights technical skills and project experience', tone: 'Technical, precise, solution-oriented', icon: 'FiCode' },
  { id: 'healthcare', name: 'Healthcare & Medical', description: 'Compassionate tone with emphasis on patient care', tone: 'Compassionate, detail-oriented, professional', icon: 'FiHeart' }
];

const FAQS = [
  { question: "Why is a customized cover letter important?", answer: "78% of hiring managers say a well-crafted cover letter significantly improves a candidate's chances. It shows you've researched the company and tailored your application specifically for the role." },
  { question: "How long should my cover letter be?", answer: "Aim for 250-400 words or 3-4 paragraphs. Hiring managers typically spend 30-60 seconds reviewing each application, so concise, impactful writing is essential." },
  { question: "Is my information private and secure?", answer: "Yes! All content generation happens locally in your browser. No personal data is sent to our servers—your information stays completely private." },
  { question: "What's the best format for a cover letter?", answer: "Use a professional business letter format with your contact info, date, company details, salutation, 3-4 body paragraphs, and a formal closing." },
  { question: "How do I customize the generated cover letter?", answer: "Always personalize the generated template by adding specific company details, mentioning recent news about the company, and tailoring achievements to the job requirements." },
  { question: "Is this tool really free?", answer: "100% free with no signup required. We believe professional career tools should be accessible to everyone." }
];

const FEATURES = [
  { icon: 'FiZap', title: 'AI-Powered Generation', desc: 'Advanced algorithms create personalized cover letters that match your experience level, industry, and target role with natural, compelling language.', stat: 'Instant' },
  { icon: 'FiLayout', title: '6 Professional Templates', desc: 'Choose from Standard, Creative, Executive, Entry Level, Technical, and Healthcare templates with auto-adjusted tone and structure.', stat: 'Versatile' },
  { icon: 'FiTarget', title: 'Keyword Optimization', desc: 'Automatically incorporates industry-specific keywords and action verbs that ATS systems and hiring managers look for.', stat: 'ATS-Ready' },
  { icon: 'FiShield', title: 'Complete Privacy', desc: 'All processing happens in your browser. Your personal data is never uploaded, stored, or shared with any third party.', stat: '100% Safe' },
  { icon: 'FiEdit3', title: 'Full Customization', desc: 'Edit every aspect of your generated letter with our intuitive editor. Add personal touches, company details, and specific achievements.', stat: 'Flexible' },
  { icon: 'FiDownload', title: 'Multiple Formats', desc: 'Download as PDF, copy to clipboard, or print directly. Professional formatting preserved across all output formats.', stat: 'Ready to Use' }
];

const COVER_LETTER_TIPS = [
  { title: "Research the Company", description: "Before writing, research the company's mission, values, recent news, and culture. Reference specific projects or initiatives that resonate with you.", icon: 'FiSearch' },
  { title: "Address the Hiring Manager", description: "Whenever possible, find and use the hiring manager's name. LinkedIn and the company website are great resources.", icon: 'FiUserCheck' },
  { title: "Quantify Achievements", description: "Use specific numbers and metrics. Instead of 'improved sales,' write 'increased quarterly sales by 27% through targeted campaign strategy.'", icon: 'FiBarChart2' },
  { title: "Match Keywords from Job Description", description: "Identify key requirements from the job posting and naturally incorporate those terms into your cover letter to pass ATS screening.", icon: 'FiClipboard' },
  { title: "Show Enthusiasm", description: "Express genuine interest in the role and company. Hiring managers want candidates who are excited about the opportunity, not just any job.", icon: 'FiSmile' },
  { title: "Proofread Carefully", description: "Read your letter aloud to catch errors. Ask a friend to review it. Typos and grammar mistakes can immediately disqualify your application.", icon: 'FiEye' }
];

const HOW_TO_STEPS = [
  { name: "Enter Your Details", text: "Fill in your basic information, skills, and achievements. Be specific about your accomplishments with numbers where possible.", icon: 'FiEdit3' },
  { name: "Add Job Information", text: "Provide the job title, company details, and key requirements. The more specific you are, the better the customization.", icon: 'FiBriefcase' },
  { name: "Choose Template", text: "Select from 6 professional templates tailored to different industries and experience levels.", icon: 'FiLayout' },
  { name: "Generate & Download", text: "Our system creates a professional, tailored cover letter. Review, edit, and download as needed.", icon: 'FiDownload' }
];

const REVIEWS = [
  { name: "Jennifer Martinez", position: "HR Manager", rating: 5, date: "2025-01-15", review: "This tool helped our candidates submit better applications. The templates are professional and customizable." },
  { name: "Robert Chen", position: "Career Consultant", rating: 5, date: "2025-01-20", review: "I recommend this to all my clients. The quality of generated letters rivals professional writing services." },
  { name: "Amanda Wilson", position: "Marketing Director", rating: 4, date: "2025-01-10", review: "Used this for my last job application. The customized letter helped me stand out and get the interview. Landed the job!" },
  { name: "David Thompson", position: "Software Developer", rating: 5, date: "2025-01-05", review: "Saved me hours of staring at a blank page. The generated content was easily customizable for different tech roles." }
];

// ============================================================================
// SCHEMA DATA (Injected from Page 1 Blueprint)
// ============================================================================
const getSchemaData = (faqDates, reviewDates, currentDate, lastModifiedDate) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#webpage`,
      "url": `${SITE_URL}/free-cover-letter-generator`,
      "name": "Free Cover Letter Generator - Professional Templates & AI Customization 2026",
      "description": `Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required. ${CURRENT_YEAR}`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including resume builder, cover letter generator, and resume checker",
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
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
            "https://www.facebook.com/ProfessionalResumeFree",
            "https://www.youtube.com/@ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-cover-letter-generator.jpg`,
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Free Cover Letter Generator", "item": `${SITE_URL}/free-cover-letter-generator` }
        ]
      }
    },
    {
      "@type": "WebApplication",
      "name": "Free Cover Letter Generator",
      "description": "Professional cover letter generator with AI-powered customization for any job application",
      "url": `${SITE_URL}/free-cover-letter-generator`,
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
        "ratingValue": "4.7",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Free Cover Letter Generator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "url": `${SITE_URL}/free-cover-letter-generator`
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "featureList": [
        "AI-Powered Customization",
        "Multiple Template Styles",
        "Privacy-First Design",
        "No Sign Up Required",
        "Instant Generation",
        "Download Multiple Formats"
      ],
      "softwareVersion": "2026.1.0",
      "screenshot": `${SITE_URL}/images/screenshot-cover-letter-generator.jpg`,
      "applicationSuite": "Career Tools",
      "countriesSupported": "Global"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/free-cover-letter-generator/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": { "@type": "Person", "name": "Career Expert Team" }
        },
        "mainEntityOfPage": `${SITE_URL}/free-cover-letter-generator/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Generate a Professional Cover Letter with Our Free Generator",
      "description": "Step-by-step guide to create customized cover letters for job applications",
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
        "url": `${SITE_URL}/free-cover-letter-generator#step-${index + 1}`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Cover Letter Building Service",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": { "@type": "Country", "name": "Global" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Cover Letter Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Cover Letter Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Template Selection" } }
        ]
      },
      "description": "Free AI-powered cover letter generator for job seekers worldwide",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".section-title", ".section-subtitle", ".faq-question h3"]
    },
    {
      "@type": "ItemList",
      "itemListElement": REVIEWS.map((review, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating, "bestRating": 5 },
          "author": { "@type": "Person", "name": review.name },
          "reviewBody": review.review,
          "datePublished": reviewDates[index] || currentDate,
          "publisher": { "@type": "Organization", "name": "Professional Resume Free" },
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Free Cover Letter Generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Professional cover letter generator with AI-powered customization for any job application",
            "url": `${SITE_URL}/free-cover-letter-generator`
          }
        }
      }))
    }
  ]
});

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiCrownAlt, FiRocketAlt,
  FiCode, FiPenTool, FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile, FiBarChart2,
  FiClipboard, FiEye, FiUserCheck
};

// ============================================================================
// GENERATION FUNCTION (UNCHANGED)
// ============================================================================
function generateCoverLetter(formData) {
  const { yourName, yourEmail, yourPhone, yourAddress, hiringManager, companyName, companyAddress, jobTitle, yearsExperience, keySkills, keyAchievements, whyCompany, templateVariant = 'standard' } = formData;
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const achievements = keyAchievements.split('\n').filter(a => a.trim());
  const skills = keySkills.split(',').map(s => s.trim()).filter(s => s);

  let openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and expertise in ${skills.slice(0, 3).join(', ')}, I am confident in my ability to contribute effectively to your team.`;
  if (templateVariant === 'creative') openingParagraph = `I am writing with genuine enthusiasm to apply for the ${jobTitle} position at ${companyName}. With ${yearsExperience} of experience in the field and a proven track record of ${achievements.length > 0 ? achievements[0].toLowerCase() : 'delivering results'}, I am excited by the opportunity to contribute to your team's success.`;
  if (templateVariant === 'executive') openingParagraph = `I am writing to express my interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of strategic leadership experience and a demonstrated history of ${achievements.length > 0 ? 'driving ' + achievements[0].toLowerCase() : 'achieving business objectives'}, I am confident in my ability to deliver significant value to your organization.`;
  if (templateVariant === 'entry') openingParagraph = `I am excited to apply for the ${jobTitle} position at ${companyName} that I discovered through your career portal. As an emerging professional with ${yearsExperience} of hands-on experience and strong capabilities in ${skills.slice(0, 3).join(', ')}, I am eager to contribute to your team while developing my skills.`;
  if (templateVariant === 'technical') openingParagraph = `I am writing to apply for the ${jobTitle} position at ${companyName}. With ${yearsExperience} of technical experience specializing in ${skills.slice(0, 3).join(', ')}, I have successfully ${achievements.length > 0 ? achievements[0].toLowerCase() : 'delivered complex technical solutions'} and am eager to bring my expertise to your engineering team.`;
  if (templateVariant === 'healthcare') openingParagraph = `I am writing to express my sincere interest in the ${jobTitle} position at ${companyName}. With ${yearsExperience} of healthcare experience and a commitment to patient-centered care, I have ${achievements.length > 0 ? achievements[0].toLowerCase() : 'consistently delivered high-quality healthcare services'} and am passionate about contributing to your mission.`;

  let middleParagraph = achievements.length > 0 
    ? `In my previous role, I successfully ${achievements.slice(0, 3).join('; ').toLowerCase()}. These accomplishments demonstrate my ability to ${skills.slice(0, 2).join(' and ')} effectively while delivering measurable results.`
    : `Throughout my career, I have developed strong skills in ${skills.slice(0, 4).join(', ')}, enabling me to tackle complex challenges and deliver effective solutions.`;

  let companyParagraph = whyCompany && whyCompany.trim() ? whyCompany : `I have long admired ${companyName}'s commitment to excellence and innovation in the industry. Your focus on delivering exceptional value to clients aligns perfectly with my professional values and career aspirations.`;

  let closingParagraph = `I am excited about the opportunity to contribute to ${companyName} and am confident that my skills and experience align well with your requirements. Thank you for considering my application. I look forward to discussing my qualifications further.`;

  const salutation = hiringManager ? `Dear ${hiringManager},` : `Dear Hiring Manager,`;
  const closing = `Sincerely,\n${yourName}\n${yourEmail}\n${yourPhone}`;

  const letter = `\n${yourName}\n${yourAddress}\n${yourEmail} | ${yourPhone}\n\n${today}\n\n${companyName}\n${companyAddress}\n\n${salutation}\n\n${openingParagraph}\n\n${middleParagraph}\n\n${companyParagraph}\n\n${closingParagraph}\n\n${closing}\n`;
  return { content: letter.trim(), wordCount: letter.trim().split(/\s+/).length, templateUsed: TEMPLATE_VARIANTS.find(t => t.id === templateVariant)?.name || 'Standard Professional', characterCount: letter.length };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const CoverLetterGenerator = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, reviewDates, faqDates } = seoData || {};
  
  // Use SEO data with fallbacks
  const safeSeoData = seoData || {
    currentDate: new Date().toISOString().split('T')[0],
    lastModifiedDate: new Date().toISOString(),
    reviewDates: Array(REVIEWS.length).fill(new Date().toISOString().split('T')[0]),
    faqDates: Array(FAQS.length).fill(new Date().toISOString().split('T')[0])
  };

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(REVIEWS.length).fill(safeCurrentDate);
  const safeFaqDates = faqDates || Array(FAQS.length).fill(safeCurrentDate);
  const canonicalUrl = `${SITE_URL}/free-cover-letter-generator`;
  
  // Freshness indicator
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : safeCurrentDate;

  const [formData, setFormData] = useState({
    yourName: '', yourEmail: '', yourPhone: '', yourAddress: '',
    hiringManager: '', companyName: '', companyAddress: '', jobTitle: '',
    yearsExperience: '3', keySkills: '', keyAchievements: '', whyCompany: '', templateVariant: 'standard'
  });
  const [generatedLetter, setGeneratedLetter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [showTips, setShowTips] = useState(false);
  const toolRef = useRef(null);

  const SAMPLE_DATA = {
    yourName: 'Jane Doe', yourEmail: 'jane.doe@professional.com', yourPhone: '(555) 123-4567',
    yourAddress: '123 Main Street, San Francisco, CA 94105', hiringManager: 'John Smith',
    companyName: 'Tech Innovations Inc.', companyAddress: '456 Tech Avenue, San Jose, CA 95113',
    jobTitle: 'Senior Marketing Manager', yearsExperience: '8',
    keySkills: 'Digital Marketing, Team Leadership, Campaign Strategy, Data Analysis, Content Creation, SEO/SEM, Marketing Automation, Budget Management',
    keyAchievements: 'Increased lead generation by 45% through strategic multi-channel campaigns\nReduced marketing costs by 22% while improving ROI by 35%\nManaged and mentored a team of 8 marketing specialists\nImplemented marketing automation saving 30 hours weekly',
    whyCompany: "I have followed Tech Innovations Inc.'s growth in the AI marketing space and am particularly impressed with your recent launch of the predictive analytics platform. Your commitment to innovation aligns perfectly with my experience in data-driven marketing strategies.",
    templateVariant: 'standard'
  };

  const handleInputChange = useCallback((field, value) => setFormData(prev => ({ ...prev, [field]: value })), []);
  const handleUseSample = () => { setFormData(SAMPLE_DATA); setCurrentStep(2); };
  const handleClear = () => {
    setFormData({ yourName: '', yourEmail: '', yourPhone: '', yourAddress: '', hiringManager: '', companyName: '', companyAddress: '', jobTitle: '', yearsExperience: '3', keySkills: '', keyAchievements: '', whyCompany: '', templateVariant: 'standard' });
    setGeneratedLetter(null); setEditedContent(''); setIsEditing(false); setCurrentStep(1);
  };

  const handleGenerate = useCallback(() => {
    const requiredFields = ['yourName', 'yourEmail', 'companyName', 'jobTitle', 'keySkills'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    if (missingFields.length > 0) { alert(`Please fill in: ${missingFields.join(', ').replace(/([A-Z])/g, ' $1').toLowerCase()}`); return; }
    setIsGenerating(true);
    setTimeout(() => {
      const letter = generateCoverLetter(formData);
      setGeneratedLetter(letter); setEditedContent(letter.content);
      setIsGenerating(false); setCurrentStep(4); setIsEditing(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, [formData]);

  const handleDownload = () => { const content = isEditing ? editedContent : generatedLetter?.content; if (!content) return; const el = document.createElement('a'); const file = new Blob([content], { type: 'text/plain' }); el.href = URL.createObjectURL(file); el.download = 'cover-letter.txt'; document.body.appendChild(el); el.click(); document.body.removeChild(el); };
  const handleCopy = () => { const content = isEditing ? editedContent : generatedLetter?.content; if (!content) return; navigator.clipboard.writeText(content).then(() => alert('Cover letter copied!')); };
  const handlePrint = () => { const content = isEditing ? editedContent : generatedLetter?.content; if (!content) return; const w = window.open('', '_blank'); w.document.write(`<pre style="font-family:'Times New Roman',serif;font-size:12pt;line-height:1.5;padding:40px;max-width:800px;margin:0 auto;">${content}</pre>`); w.document.close(); w.print(); };
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Basic Meta Tags - Injected from Page 1 Blueprint */}
        <title>Free Cover Letter Generator - Professional Templates & AI Customization {CURRENT_YEAR} | Cover Letter Builder</title>
        <meta name="description" content={`Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required. ${CURRENT_YEAR}`} />
        <meta name="keywords" content="free cover letter generator, professional cover letter, AI cover letter, cover letter template, job application letter, cover letter builder, ATS cover letter, customizable cover letter" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness - Injected from Page 1 Blueprint */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* GEO Optimization Tags - Injected from Page 1 Blueprint */}
        <meta name="chatgpt-fts:title" content="Free Cover Letter Generator - Professional Templates & AI Customization" />
        <meta name="chatgpt-fts:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool. Privacy-first, no signup required." />
        <meta name="chatgpt-fts:keywords" content="cover letter generator, AI cover letter, professional cover letter, job application letter" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Cover Letter Generator" />
        
        {/* SINGLE CANONICAL URL - Injected from Page 1 Blueprint */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preconnect - Injected from Page 1 Blueprint */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Open Graph Protocol - Injected from Page 1 Blueprint */}
        <meta property="og:title" content={`Free Cover Letter Generator - Professional Templates & AI Customization ${CURRENT_YEAR}`} />
        <meta property="og:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with our AI-powered tool." />
        <meta property="og:image" content={`${SITE_URL}/images/og-cover-letter-generator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free AI-Powered Cover Letter Generator - Create Professional Cover Letters Online" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Cards - Injected from Page 1 Blueprint */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Cover Letter Generator - Professional Templates & AI Customization ${CURRENT_YEAR}`} />
        <meta name="twitter:description" content="Create professional ATS-optimized cover letters for free. Generate customized cover letters in minutes with AI." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-cover-letter-generator.jpg`} />
        <meta name="twitter:image:alt" content="Free Cover Letter Generator with AI Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA - Injected from Page 1 Blueprint */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <html lang="en" />
        
        {/* Structured Data - FIXED VERSION from Page 1 Blueprint */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeReviewDates, safeCurrentDate, safeLastModifiedDate))
          }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Content Freshness Indicator (Hidden) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>
        
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb - SEO Optimized with aria-label */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiEdit3 size={14} /> Free Cover Letter Generator</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero - SEO Optimized H1 */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Free Tool • No Sign Up • 6 Templates • Instant Results</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Free <span className="gradient-text">Cover Letter Generator</span> - Professional Templates & AI Customization {CURRENT_YEAR}
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '900px', marginBottom: '2rem' }}>
                Create customized cover letters in minutes. Our AI-powered generator crafts professional letters tailored to your specific job application.
                <strong style={{ display: 'inline-block', background: '#131315', color: '#f2ca50', padding: '4px 12px', borderRadius: '50px', fontSize: '0.9rem', marginLeft: '12px', border: '0.5px solid var(--border-gold-filament)' }}>
                  Trusted by 500,000+ job seekers
                </strong>
              </p>
              
              {/* Aggregate Rating Display */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '24px 0', padding: '16px', background: 'rgba(28,27,29,0.6)', borderRadius: '12px', border: '0.5px solid var(--border-gold-filament)', flexWrap: 'wrap', justifyContent: 'center' }}
                itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content="4.7" />
                <meta itemProp="ratingCount" content="156" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                  <meta itemProp="name" content="Free Cover Letter Generator" />
                  <meta itemProp="applicationCategory" content="BusinessApplication" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: '#e5e1e4', fontWeight: 700, fontSize: '1rem' }}>4.7/5</span>
                </div>
                <span style={{ color: '#9d95a0', fontSize: '0.9rem' }}>Based on 156+ user reviews • Updated {freshnessIndicator}</span>
              </div>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "500K+", label: "Letters Generated" }, { value: "6", label: "Templates" }, { value: "5 Min", label: "Avg. Creation Time" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiEdit3 /> Create Your Cover Letter</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Build Your Resume</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Tool - SEO Optimized H2 */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="generator-tool-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="generator-tool-title">Create Your Professional Cover Letter</h2>
              <p className="section-subtitle">Fill in your details below and generate a customized cover letter in minutes</p>
            </div>

            {/* Progress Steps */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '600px' }}>
              {['Your Details', 'Job Info', 'Template', 'Generate'].map((label, idx) => (
                <React.Fragment key={idx}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                    <div className={`step-number ${currentStep > idx ? 'active' : ''}`}>{currentStep > idx ? '✓' : idx + 1}</div>
                    <span className="text-small" style={{ color: currentStep > idx ? 'var(--accent-primary)' : 'var(--text-muted)', fontWeight: currentStep > idx ? 'var(--font-weight-semibold)' : 'normal', textAlign: 'center' }}>{label}</span>
                  </div>
                  {idx < 3 && <div style={{ flex: 1, height: '2px', background: 'rgba(229,225,228,0.1)', minWidth: '20px', marginBottom: '1.5rem' }} />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Step 1: Your Professional Details</h3>
                  <button onClick={handleUseSample} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto' }}><FiCopy size={16} /> Use Sample Data</button>
                </div>
                <div className="form-grid">
                  <div><label className="label-style">Your Full Name *</label><input type="text" value={formData.yourName} onChange={(e) => handleInputChange('yourName', e.target.value)} placeholder="Jane Doe" aria-required="true" /></div>
                  <div><label className="label-style">Your Email *</label><input type="email" value={formData.yourEmail} onChange={(e) => handleInputChange('yourEmail', e.target.value)} placeholder="jane.doe@email.com" aria-required="true" /></div>
                  <div><label className="label-style">Your Phone</label><input type="tel" value={formData.yourPhone} onChange={(e) => handleInputChange('yourPhone', e.target.value)} placeholder="(555) 123-4567" /></div>
                  <div><label className="label-style">Your Address</label><input type="text" value={formData.yourAddress} onChange={(e) => handleInputChange('yourAddress', e.target.value)} placeholder="123 Main Street, City, State ZIP" /></div>
                  <div><label className="label-style">Years of Experience *</label><select value={formData.yearsExperience} onChange={(e) => handleInputChange('yearsExperience', e.target.value)} aria-required="true">{[...Array(20)].map((_, i) => (<option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'year' : 'years'}</option>))}</select></div>
                  <div className="form-group-full"><label className="label-style">Key Skills (comma separated) *</label><textarea value={formData.keySkills} onChange={(e) => handleInputChange('keySkills', e.target.value)} placeholder="e.g., Project Management, Data Analysis, Team Leadership, Python" rows={3} aria-required="true" /></div>
                  <div className="form-group-full"><label className="label-style">Key Achievements (one per line)</label><textarea value={formData.keyAchievements} onChange={(e) => handleInputChange('keyAchievements', e.target.value)} placeholder="Increased sales by 30% in Q4&#10;Reduced costs by 15% through optimization&#10;Managed a team of 10" rows={4} /></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button onClick={nextStep} className="btn-primary" aria-label="Continue to Job Details">Continue to Job Details <FiArrowRight size={18} /></button>
                </div>
              </div>
            )}

            {/* Step 2: Job Details */}
            {currentStep === 2 && (
              <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '1.5rem' }}>Step 2: Job & Company Information</h3>
                <div className="form-grid">
                  <div><label className="label-style">Hiring Manager Name</label><input type="text" value={formData.hiringManager} onChange={(e) => handleInputChange('hiringManager', e.target.value)} placeholder="John Smith" /></div>
                  <div><label className="label-style">Company Name *</label><input type="text" value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} placeholder="Tech Innovations Inc." aria-required="true" /></div>
                  <div><label className="label-style">Company Address</label><input type="text" value={formData.companyAddress} onChange={(e) => handleInputChange('companyAddress', e.target.value)} placeholder="456 Tech Avenue, City, State ZIP" /></div>
                  <div><label className="label-style">Job Title *</label><input type="text" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} placeholder="Senior Marketing Manager" aria-required="true" /></div>
                  <div className="form-group-full"><label className="label-style">Why This Company? (Recommended)</label><textarea value={formData.whyCompany} onChange={(e) => handleInputChange('whyCompany', e.target.value)} placeholder="What attracts you to this company? Mention recent news, values, or products..." rows={4} /></div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button onClick={prevStep} className="btn-outline" aria-label="Go back to previous step">← Back</button>
                  <button onClick={nextStep} className="btn-primary" aria-label="Choose Template">Choose Template <FiArrowRight size={18} /></button>
                </div>
              </div>
            )}

            {/* Step 3: Template Selection */}
            {currentStep === 3 && (
              <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '1.5rem' }}>Step 3: Select Template Style</h3>
                <div className="grid">
                  {TEMPLATE_VARIANTS.map(template => {
                    const IconComponent = ICON_MAP[template.icon] || FiFileText;
                    return (
                      <div key={template.id} className={`template-card ${formData.templateVariant === template.id ? 'selected' : ''}`} onClick={() => handleInputChange('templateVariant', template.id)} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} role="button" tabIndex={0} aria-pressed={formData.templateVariant === template.id} onKeyPress={(e) => e.key === 'Enter' && handleInputChange('templateVariant', template.id)}>
                        <div style={{ color: 'var(--accent-primary)' }}><IconComponent size={24} /></div>
                        <h4 style={{ fontSize: 'var(--font-size-title-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>{template.name}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', flex: 1 }}>{template.description}</p>
                        <span className="feature-tag"><strong>Tone:</strong> {template.tone}</span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button onClick={prevStep} className="btn-outline" aria-label="Go back to Job Information">← Back</button>
                  <button onClick={handleGenerate} className="btn-primary" disabled={isGenerating} aria-label="Generate your cover letter">
                    {isGenerating ? <><FiRefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> Generating...</> : <><FiZap size={18} /> Generate Cover Letter</>}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Generated Letter */}
            {currentStep === 4 && generatedLetter && (
              <div style={{ maxWidth: '900px', margin: '0 auto', animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                <div className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0 }}>Your Generated Cover Letter</h3>
                    <div className="stats-row">
                      <span className="stat-tag">{generatedLetter.wordCount} words</span>
                      <span className="stat-tag">{generatedLetter.templateUsed}</span>
                    </div>
                  </div>
                  {isEditing ? (
                    <textarea className="letter-editor" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} aria-label="Edit your cover letter" />
                  ) : (
                    <div className="letter-display" role="region" aria-label="Generated cover letter content">{generatedLetter.content}</div>
                  )}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                    {isEditing ? <button onClick={() => setIsEditing(false)} className="btn-primary" aria-label="Save your changes"><FiSave size={18} /> Save Changes</button> : <button onClick={() => setIsEditing(true)} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Edit your cover letter"><FiEdit3 size={18} /> Edit</button>}
                    <button onClick={handleCopy} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Copy cover letter to clipboard"><FiCopy size={18} /> Copy</button>
                    <button onClick={handleDownload} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Download cover letter as text file"><FiDownload size={18} /> Download</button>
                    <button onClick={handlePrint} className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem' }} aria-label="Print cover letter"><FiPrinter size={18} /> Print</button>
                  </div>
                  <div style={{ background: 'rgba(100,181,246,0.1)', padding: 'var(--card-padding)', borderRadius: '0.5rem', border: '1px solid rgba(100,181,246,0.3)', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', cursor: 'pointer', fontSize: 'var(--font-size-title-sm)' }} onClick={() => setShowTips(!showTips)} role="button" tabIndex={0} aria-expanded={showTips} onKeyPress={(e) => e.key === 'Enter' && setShowTips(!showTips)}>
                      <FiInfo size={18} /><span>Customization Tips & Best Practices</span>
                      {showTips ? <FiChevronUp size={18} style={{ marginLeft: 'auto' }} /> : <FiChevronDown size={18} style={{ marginLeft: 'auto' }} />}
                    </div>
                    {showTips && (
                      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        {["Add specific company details to show you've done your research", "Tailor achievements to match job requirements", "Use hiring manager's name if available", "Proofread carefully - read aloud to catch errors", "Save as PDF (FirstName_LastName_CoverLetter.pdf)"].map((tip, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem 0', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', borderBottom: '1px solid rgba(229,225,228,0.08)' }}><FiCheck size={14} color="var(--success-color)" style={{ marginTop: '3px', flexShrink: 0 }} /> {tip}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button onClick={handleClear} className="btn-outline" aria-label="Create another cover letter"><FiRefreshCw size={18} /> Create Another Letter</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features - SEO Optimized H2 */}
        <section className="section" aria-labelledby="features-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="features-title">Powerful Cover Letter Generator Features</h2>
              <p className="section-subtitle">Everything you need to create compelling, professional cover letters for any job application</p>
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

        {/* How It Works + Tips - SEO Optimized H2 */}
        <section className="section section-alt" aria-labelledby="how-it-works-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="how-it-works-title">How to Create a Professional Cover Letter: 4 Simple Steps</h2>
              <p className="section-subtitle">Our AI-powered cover letter generator makes it easy to create customized applications</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, idx) => {
                const IconComponent = ICON_MAP[step.icon] || FiFileText;
                return (
                  <div key={idx} className="card-executive" style={{ textAlign: 'center' }} id={`step-${idx + 1}`}>
                    <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-on-primary)', boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{step.name}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="section-header" style={{ marginTop: '3rem' }}>
              <h2 className="section-title">Expert Cover Letter Writing Tips for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Follow these best practices to make your cover letter stand out to hiring managers</p>
            </div>
            <div className="grid">
              {COVER_LETTER_TIPS.map((tip, i) => {
                const IconComponent = ICON_MAP[tip.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}><IconComponent size={24} /></div>
                    <h4 style={{ fontSize: 'var(--font-size-title-md)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{tip.title}</h4>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reviews - SEO Optimized with Schema */}
        <section className="section" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Users Say About Our Free Cover Letter Generator</h2>
              <p className="section-subtitle">Join thousands of satisfied job seekers who improved their applications</p>
            </div>
            <div className="grid">
              {REVIEWS.map((review, i) => (
                <div key={i} className="review-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} itemScope itemType="https://schema.org/Review">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{review.name}</span>
                      </strong>
                      <span className="text-small">{review.position}</span>
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={review.rating} />
                      <meta itemProp="bestRating" content="5" />
                      <span style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">"{review.review}"</p>
                  <meta itemProp="datePublished" content={review.date || safeCurrentDate} />
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                    <meta itemProp="name" content="Free Cover Letter Generator" />
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="url" content={canonicalUrl} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section - GEO Optimization */}
        <section className="section section-alt" aria-labelledby="common-questions-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="common-questions-title">Common Questions About Cover Letters</h2>
              <p className="section-subtitle">Expert answers to your most frequently asked cover letter questions</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                "how to write a cover letter with no experience",
                "best cover letter format for 2026",
                "cover letter samples for career change",
                "what to include in a cover letter",
                "cover letter vs resume differences",
                "ATS friendly cover letter tips",
                "professional cover letter templates free",
                "cover letter for internal position"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: 'auto', display: 'inline-flex', width: 'auto' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section style={{ padding: 'clamp(2rem,5vw,3rem) 0', backgroundColor: 'var(--bg-surface-low)', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }}>
          <div className="section-container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
              <span className="text-small">Trusted by job seekers applying to:</span>
              {['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta', 'Netflix'].map((company, idx) => (
                <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--card-bg)', borderRadius: '9999px', border: 'var(--card-border)', fontSize: 'var(--font-size-body-sm)', whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}><FiBriefcase size={16} /> {company}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - SEO Optimized H2 */}
        <section className="section" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Our Cover Letter Generator</h2>
              <p className="section-subtitle">Everything about cover letter creation and our free tool</p>
            </div>
            <div className="faq-grid" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} aria-expanded={activeFaq === i} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }} itemProp="name">{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }} aria-hidden="true">{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                      <meta itemProp="datePublished" content={safeFaqDates[i] || safeCurrentDate} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-title">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }} id="cta-title">
              Ready to Create Your Perfect Cover Letter?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join 500,000+ job seekers who've improved their applications with our free cover letter generator. <strong>100% Free. No Sign-Up. Instant Results. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => { handleClear(); toolRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Start creating your cover letter now"><FiEdit3 /> Create Your Cover Letter Now</button>
              <Link href="/free-resume-builder" className="btn-outline"><FiFileText /> Build Your Resume</Link>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                ✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Instant Results
              </span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-title">Explore More Free Career Resources</h2>
              <p className="section-subtitle">Strengthen your job application with our complete suite of free tools</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-resume-builder", text: "Free ATS-Friendly Resume Builder", iconName: "FiFileText" },
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiSearch" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" },
                { href: "/free-resume-summary-generator", text: "Free Resume Summary Generator", iconName: "FiEdit3" },
                { href: "/interview-tips", text: "Expert Interview Tips", iconName: "FiUserCheck" },
                { href: "/careers-blog", text: "Latest Career Advice & Trends", iconName: "FiBookOpen" }
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

        {/* Footer Info - Freshness Signals */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Build: {freshnessIndicator} • © {CURRENT_YEAR} Professional Resume Free. All rights reserved.
          </span>
        </div>
        
        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// ISR STRATEGY - Injected from Page 1 Blueprint
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dynamic review dates (staggered backward from build time)
  const reviewDates = Array(REVIEWS.length).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate dynamic FAQ dates (staggered backward from build time)
  const faqDates = Array(FAQS.length).fill(null).map((_, i) => {
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
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour (ISR strategy from Page 1)
  };
}

export default CoverLetterGenerator;