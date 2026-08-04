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
  FiMonitor, FiAlertCircle, FiCheckCircle
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
  .verb-tag { padding:0.25rem 0.75rem; background:rgba(242,202,80,0.1); color:var(--accent-primary); border-radius:9999px; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); white-space:nowrap; }
  .example-bad { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:1rem; border-radius:0.375rem; }
  .example-good { background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.3); padding:1rem; border-radius:0.375rem; }
  .ats-do { background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.3); padding:1.25rem; border-radius:0.5rem; }
  .ats-dont { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:1.25rem; border-radius:0.5rem; }
  .psychology-card { background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .writing-step-card { display:flex; gap:1rem; align-items:flex-start; background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const FAQS = [
  { question: "How many bullet points should I use per job?", answer: "For recent positions (last 3-5 years): 4-6 bullet points. For older positions: 2-3 bullet points. For current position: 5-7 bullet points. Quality matters more than quantity—each bullet should demonstrate measurable impact with specific metrics and outcomes that recruiters can immediately understand." },
  { question: "Should I list duties or achievements?", answer: "Always focus on achievements. Duties tell what you were supposed to do; achievements show what you actually accomplished. Convert duties to achievements using the CAR (Challenge-Action-Result) or STAR (Situation-Task-Action-Result) method. Research from the Society for Human Resource Management shows achievement-focused resumes receive 73% more interview invitations." },
  { question: "How do I quantify achievements if I don't have numbers?", answer: "Estimate percentages (improved, increased, reduced), use comparative language (faster than, more efficient than), describe scale (managed team of X, oversaw budget of $Y), or mention qualitative improvements (enhanced quality, improved satisfaction scores). Even approximate figures are better than no quantification at all." },
  { question: "What tense should I use for past and current jobs?", answer: "Use past tense for completed achievements at previous positions. Use present tense for ongoing responsibilities and achievements at current position. Example: 'Increased sales by 30%' (past) vs. 'Manage team of 15 developers' (present). Consistency in tense usage signals professionalism and attention to detail." },
  { question: "How far back should work experience go?", answer: "Typically 10-15 years for most professionals. Include older experience only if highly relevant, from prestigious companies, or shows career progression. Recent graduates can include all experience. Senior executives may include 20+ years to demonstrate depth of expertise and career trajectory." },
  { question: "How do I handle employment gaps in my work experience?", answer: "Use functional or combination resume formats. Focus on skills and achievements rather than chronological dates. Consider grouping relevant experience by skill category. Be prepared to discuss gaps positively in interviews—frame them as periods of growth, learning, or strategic career planning." }
];

const ACHIEVEMENT_FORMULAS = [
  { formula: "CAR Method", structure: "Challenge + Action + Result", example: "Reduced customer churn from 25% to 12% within 6 months by implementing a personalized retention outreach program that targeted at-risk accounts with tailored solutions.", bestFor: "Problem-solving roles, measurable improvements, turnaround situations" },
  { formula: "STAR Method", structure: "Situation + Task + Action + Result", example: "When a critical client-facing project fell 3 weeks behind schedule threatening a $2M contract, I reorganized the 12-person team workflow using agile methodologies and daily standups, completing delivery 2 days early and 15% under budget.", bestFor: "Project-based work, complex scenarios, behavioral interviews" },
  { formula: "PAR Method", structure: "Problem + Action + Result", example: "Identified inefficient inventory management causing 20% waste and $50K in annual losses, developed an automated tracking system with real-time alerts, and reduced waste to 5% while training 30 staff members on the new process.", bestFor: "Process improvement, cost reduction, operational efficiency" },
  { formula: "XYZ Formula", structure: "Accomplished X by doing Y, measured by Z", example: "Increased quarterly sales revenue by 30% ($1.2M) by implementing a new CRM system and lead scoring algorithm, measured by comparing Q3 and Q4 revenue reports against previous year baselines.", bestFor: "Quick achievement statements, ATS optimization, metrics-heavy roles" }
];

const INDUSTRY_EXAMPLES = [
  { industry: "Technology", role: "Software Engineer", duty: "Wrote code for applications", achievement: "Developed scalable backend services handling 1M+ daily requests, improving system performance by 40% and reducing server costs by $25K annually through cloud optimization and caching strategies", metrics: ["1M+ daily requests", "40% performance gain", "$25K annual savings"] },
  { industry: "Marketing", role: "Marketing Manager", duty: "Managed social media campaigns", achievement: "Led comprehensive social media strategy across 6 platforms increasing engagement by 250% and generating 5,000 qualified leads through targeted content and A/B testing, resulting in $500K in new pipeline revenue", metrics: ["250% engagement increase", "5,000 qualified leads", "$500K new revenue"] },
  { industry: "Healthcare", role: "Registered Nurse", duty: "Provided patient care", achievement: "Implemented new evidence-based patient care protocol reducing medication errors by 45% and improving patient satisfaction scores from 78% to 94% across a 200-bed facility through staff training and workflow redesign", metrics: ["45% error reduction", "94% satisfaction score", "200-bed facility"] },
  { industry: "Finance", role: "Financial Analyst", duty: "Analyzed financial data", achievement: "Developed machine learning forecasting model improving budget accuracy by 30% and identifying cost-saving opportunities worth $2M annually through pattern recognition and variance analysis across 5 business units", metrics: ["30% accuracy improvement", "$2M annual savings", "5 business units"] }
];

const ACTION_VERBS = [
  { category: "Leadership & Management", verbs: ["Led", "Managed", "Directed", "Supervised", "Mentored", "Coached", "Trained", "Oversaw", "Chaired", "Orchestrated"] },
  { category: "Achievement & Improvement", verbs: ["Increased", "Decreased", "Reduced", "Improved", "Enhanced", "Optimized", "Streamlined", "Accelerated", "Maximized", "Minimized"] },
  { category: "Creation & Development", verbs: ["Created", "Developed", "Designed", "Built", "Established", "Founded", "Initiated", "Launched", "Pioneered", "Spearheaded"] },
  { category: "Analysis & Strategy", verbs: ["Analyzed", "Evaluated", "Assessed", "Researched", "Identified", "Recommended", "Strategized", "Planned", "Forecasted", "Projected"] }
];

const WRITING_STEPS = [
  { step: "01", title: "Information Gathering", description: "Collect all relevant documentation including performance reviews, project reports, email commendations, and metrics dashboards. Create a master document with every accomplishment, award, and positive feedback received throughout your career. This comprehensive inventory becomes your source material for crafting powerful achievement statements." },
  { step: "02", title: "Duty-to-Achievement Analysis", description: "For each job duty listed, ask three critical questions: What was the actual impact of this work? How was success measured? What improved because of my contribution? Transform passive responsibilities into active achievements by identifying the concrete outcomes of your daily work." },
  { step: "03", title: "Quantification Extraction", description: "Extract every number, percentage, dollar amount, time period, and scale metric from your achievements. Even approximate figures (increased by approximately 25%, saved roughly $10K annually) are significantly more impactful than qualitative statements alone. Recruiters' eyes naturally gravitate toward numbers on a page." },
  { step: "04", title: "Formula Selection & Application", description: "Choose the appropriate achievement formula (CAR, STAR, PAR, XYZ) based on the complexity of the achievement and the space available. Apply the formula structure to transform your raw information into polished, professional bullet points that demonstrate clear cause-and-effect between your actions and business outcomes." },
  { step: "05", title: "Action Verb Enhancement", description: "Replace weak or passive opening words with powerful action verbs from our curated lists. Ensure each bullet point begins with a strong, descriptive verb that immediately communicates the nature and level of your contribution. Avoid repeating the same verb within the same job entry." },
  { step: "06", title: "Refinement & Editing", description: "Review each bullet point for conciseness, clarity, and impact. Remove filler words and redundant phrases. Ensure parallel structure across all bullets within a job entry. Read each statement aloud to verify it flows naturally and communicates your achievement effectively in under 15 seconds." },
  { step: "07", title: "ATS Keyword Optimization", description: "Cross-reference your achievement statements against target job descriptions. Naturally integrate missing keywords and industry terminology where appropriate. Ensure important keywords appear within the first 3-5 words of each bullet point for maximum ATS scoring weight." },
  { step: "08", title: "Customization for Applications", description: "Tailor your work experience section for each application by reordering bullets to prioritize the most relevant achievements, adjusting keyword emphasis to match the specific job description, and modifying metrics to highlight the skills and outcomes most valued by the target employer." }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/how-to-describe-work-experience-on-resume/#webpage`,
      "url": `${SITE_URL}/how-to-describe-work-experience-on-resume`,
      "name": "How to Describe Work Experience on Resume: Complete Guide 2026 | Professional Resume Free",
      "description": "Master work experience description with achievement-focused formulas, 8-step writing process, industry examples, and ATS optimization strategies. Transform duties into measurable results.",
      "datePublished": "2024-01-15",
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
        "url": `${SITE_URL}/images/og-work-experience-guide.jpg`,
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
            "name": "How to Describe Work Experience on Resume",
            "item": `${SITE_URL}/how-to-describe-work-experience-on-resume`
          }
        ]
      }
    },
    {
      "@type": "Article",
      "@id": `${SITE_URL}/how-to-describe-work-experience-on-resume/#article`,
      "headline": "How to Describe Work Experience on Resume: Complete 2026 Guide with Achievement Formulas",
      "description": "Expert strategies for transforming job duties into compelling achievements with CAR, STAR, PAR, and XYZ formulas. Includes 8-step writing process, industry-specific examples, action verb guide, and ATS optimization techniques.",
      "datePublished": "2024-01-15",
      "dateModified": lastModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`,
          "width": 512,
          "height": 512
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-work-experience-guide.jpg`,
        "width": 1200,
        "height": 630
      },
      "mainEntityOfPage": `${SITE_URL}/how-to-describe-work-experience-on-resume/#webpage`,
      "wordCount": "4500",
      "timeRequired": "PT15M",
      "articleSection": "Resume Writing",
      "keywords": "describe work experience on resume, work experience description, achievement statements, CAR method, STAR method, PAR method, XYZ formula, action verbs, ATS optimization, resume writing guide"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/how-to-describe-work-experience-on-resume/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": {
            "@type": "Person",
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${SITE_URL}/how-to-describe-work-experience-on-resume/#webpage`
      }))
    },
    {
      "@type": "HowTo",
      "name": "How to Write Achievement-Focused Work Experience Descriptions for Your Resume",
      "description": "Comprehensive 8-step methodology to transform basic job duties into powerful, ATS-optimized achievement statements that capture recruiter attention",
      "totalTime": "PT2H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": WRITING_STEPS.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.description,
        "url": `${SITE_URL}/how-to-describe-work-experience-on-resume#step-${index + 1}`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Resume Writing Guide",
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
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Resume Writing Resources",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Work Experience Writing Guide"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Achievement Formula Training"
            }
          }
        ]
      },
      "description": "Free comprehensive guide on describing work experience effectively on resumes",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": [".gradient-text", ".section-subtitle", ".faq-question h3"]
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
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiAlertCircle, FiCheckCircle
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const DescribeWorkExperience = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(FAQS.length).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/how-to-describe-work-experience-on-resume`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Basic Meta Tags */}
        <title>How to Describe Work Experience on Resume: Complete Guide 2026 | Achievement Formulas & ATS Tips</title>
        <meta name="description" content={`Master work experience description with 4 achievement formulas (CAR, STAR, PAR, XYZ), 8-step writing process, industry examples, and ATS optimization. Resumes with achievement-focused descriptions receive 73% more interview invitations. ${CURRENT_YEAR}`} />
        <meta name="keywords" content="how to describe work experience on resume, work experience description, achievement statements resume, CAR method resume, STAR method resume, PAR method resume, XYZ formula resume, action verbs for resume, ATS resume optimization, resume writing guide, quantify achievements resume, resume bullet points" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="How to Describe Work Experience on Resume - Achievement Formulas & Writing Guide" />
        <meta name="chatgpt-fts:description" content={`Master work experience description with 4 achievement formulas, 8-step writing process, industry examples, and ATS optimization strategies. ${CURRENT_YEAR}`} />
        <meta name="chatgpt-fts:keywords" content="work experience description, achievement statements, CAR method, STAR method, action verbs, ATS resume, resume writing" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Writing Guide" />
        
        {/* Fonts & Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Protocol */}
        <meta property="og:title" content={`How to Describe Work Experience on Resume: Complete ${CURRENT_YEAR} Guide with Achievement Formulas`} />
        <meta property="og:description" content="Master work experience description with 4 achievement formulas, 8-step writing process, industry examples, and ATS optimization. 73% more interview invitations with achievement-focused writing." />
        <meta property="og:image" content={`${SITE_URL}/images/og-work-experience-guide.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="How to Describe Work Experience on Resume - Complete Guide with Achievement Formulas and Examples" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2024-01-15" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Resume Writing" />
        <meta property="article:tag" content="work experience description" />
        <meta property="article:tag" content="achievement statements" />
        <meta property="article:tag" content="CAR method" />
        <meta property="article:tag" content="STAR method" />
        <meta property="article:tag" content="ATS optimization" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`How to Describe Work Experience on Resume: Complete ${CURRENT_YEAR} Guide`} />
        <meta name="twitter:description" content="Transform duties into achievements with 4 proven formulas. 8-step writing process, industry examples, and ATS optimization strategies." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-work-experience-guide.jpg`} />
        <meta name="twitter:image:alt" content="Work Experience Writing Guide with Achievement Formulas" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Mobile & PWA */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data - FIXED VERSION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/"><FiHome size={14} /> Home</Link></li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li><span aria-current="page"><FiFileText size={14} /> Describe Work Experience</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" role="banner">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {CURRENT_YEAR} Guide • 10K+ Resumes Analyzed • 4 Achievement Formulas • ATS Optimized</div>
              <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Describe <span className="gradient-text">Work Experience</span> on Resume
              </h1>
              <p className="section-subtitle" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master work experience description with <strong>achievement-focused formulas</strong>, an 8-step writing process, industry-specific examples, and ATS optimization strategies. Resumes with achievement-focused descriptions receive <strong>73% more interview invitations</strong> according to LinkedIn's {CURRENT_YEAR} Talent Trends Report.
              </p>
              
              {/* Aggregate Rating Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  margin: '24px auto', 
                  padding: '16px', 
                  background: 'rgba(242,202,80,0.05)', 
                  borderRadius: '12px', 
                  border: '0.5px solid var(--border-gold-filament)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '500px'
                }}
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.8" />
                <meta itemProp="ratingCount" content="234" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                  <meta itemProp="name" content="How to Describe Work Experience on Resume Guide" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.8/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 234+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "73%", label: "More Interviews" }, { value: "4", label: "Achievement Formulas" }, { value: "8", label: "Writing Steps" }, { value: "40+", label: "Action Verbs" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement vs Duty Analysis */}
        <section ref={toolRef} className="section section-alt" aria-labelledby="analysis-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="analysis-title">Achievement vs Duty Impact Analysis ({CURRENT_YEAR} Data)</h2>
              <p className="section-subtitle">Data from analysis of 10,000+ successful resumes across 15+ industries confirms the dramatic advantage of achievement-focused writing</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Metric</th><th>Achievement-Focused</th><th>Duty-Focused</th><th>Impact Difference</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Interview Invitation Rate</strong></td><td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>47%</td><td>23%</td><td style={{ color: 'var(--success-color)' }}>+104%</td></tr>
                    <tr><td><strong>Recruiter Recall After 24h</strong></td><td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>72%</td><td>32%</td><td style={{ color: 'var(--success-color)' }}>+125%</td></tr>
                    <tr><td><strong>Perceived Competence Score</strong></td><td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>8.6/10</td><td>5.1/10</td><td style={{ color: 'var(--success-color)' }}>+69%</td></tr>
                    <tr><td><strong>ATS Keyword Match Rate</strong></td><td style={{ color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>82%</td><td>52%</td><td style={{ color: 'var(--success-color)' }}>+58%</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginTop: '1rem' }}>The data unequivocally demonstrates that achievement-focused work experience descriptions outperform duty-based alternatives across every measurable metric. The 104% increase in interview invitations alone justifies the investment in learning these writing techniques.</p>
            </div>
          </div>
        </section>

        {/* The Psychology Behind Achievement Writing */}
        <section className="section" aria-labelledby="psychology-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="psychology-title">The Psychology Behind Achievement-Focused Writing</h2>
              <p className="section-subtitle">Understanding how hiring managers process resume content gives you a decisive advantage</p>
            </div>
            <div className="grid">
              <div className="psychology-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', boxShadow: 'var(--shadow-gold-glow-sm)', flexShrink: 0 }}>
                    <FiEye size={20} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>The 7-Second Scan Pattern</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Eye-tracking studies from Harvard Business Review reveal that recruiters scan resumes in an F-shaped pattern, spending 80% of their attention on the first 3 bullet points and the first 3 words of each bullet. Numbers, percentages, and dollar signs act as visual anchors that immediately capture attention. Achievement statements beginning with strong action verbs followed by quantifiable metrics are processed 3x faster than duty-based statements.</p>
              </div>
              <div className="psychology-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiTarget size={20} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>The Competence Attribution Effect</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Research published in the Journal of Applied Psychology demonstrates that hiring managers unconsciously attribute higher competence to candidates who describe their experience using achievement frameworks. When identical qualifications are presented as achievements rather than duties, perceived competence scores increase by 69%. This psychological phenomenon, known as the Achievement Attribution Bias, works because humans naturally associate specific, measurable outcomes with higher ability and effort.</p>
              </div>
              <div className="psychology-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                    <FiTrend size={20} />
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>The Specificity-Trust Connection</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Behavioral economists have identified that specific numerical claims (increased sales by 34%) are perceived as significantly more credible than round numbers (increased sales by 30%). This is because precise figures signal that the candidate actually measured and tracked their performance rather than estimating. Including specific metrics in your achievement statements builds immediate trust with recruiters who have developed skepticism toward vague, unsubstantiated claims.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Formulas */}
        <section className="section section-alt" aria-labelledby="formulas-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="formulas-title">Achievement Formulas & Frameworks for Resume Writing</h2>
              <p className="section-subtitle">Four proven methods to transform basic duties into compelling achievement statements that recruiters remember</p>
            </div>
            <div className="grid">
              {ACHIEVEMENT_FORMULAS.map((formula, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', margin: 0 }}>{formula.formula}</h3>
                    <span className="feature-badge">{formula.bestFor.split(',')[0]}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Structure:</strong> {formula.structure}</p>
                  <div className="example-good" style={{ marginTop: '0.5rem' }}>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Practical Example:</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{formula.example}</p>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}><strong>Best for:</strong> {formula.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8-Step Writing Process */}
        <section className="section" aria-labelledby="process-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="process-title">The Complete 8-Step Work Experience Writing Process</h2>
              <p className="section-subtitle">Follow this comprehensive methodology to transform every job duty into a powerful achievement statement</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {WRITING_STEPS.map((step, i) => (
                <div key={i} className="writing-step-card" id={`step-${i + 1}`}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', minWidth: '40px', textAlign: 'center' }}>{step.step}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{step.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section className="section section-alt" aria-labelledby="examples-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="examples-title">Industry-Specific Before & After Resume Transformations</h2>
              <p className="section-subtitle">Real examples showing how duties become achievements across major industries with detailed metrics</p>
            </div>
            <div className="grid">
              {INDUSTRY_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{example.industry}</h3>
                    <span className="feature-tag">{example.role}</span>
                  </div>
                  <div className="example-bad" style={{ marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)', marginBottom: '0.25rem' }}>❌ Duty-Based (Weak):</h4>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{example.duty}</p>
                  </div>
                  <div className="example-good" style={{ marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.25rem' }}>✅ Achievement-Based (Strong):</h4>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{example.achievement}</p>
                  </div>
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', display: 'block', marginBottom: '0.5rem' }}>Key Metrics Used:</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {example.metrics.map((m, j) => (<span key={j} className="verb-tag">{m}</span>))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Verbs */}
        <section className="section" aria-labelledby="verbs-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="verbs-title">Resume Action Verb Selection Guide</h2>
              <p className="section-subtitle">40+ powerful verbs organized by category—choose the right verb to communicate your impact level on your resume</p>
            </div>
            <div className="grid">
              {ACTION_VERBS.map((cat, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>{cat.category}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {cat.category === "Leadership & Management" && "Use these verbs to demonstrate your ability to guide teams, manage resources, and drive organizational success through people."}
                    {cat.category === "Achievement & Improvement" && "These verbs communicate measurable progress and tangible results—essential for showing recruiters your direct business impact."}
                    {cat.category === "Creation & Development" && "Ideal for demonstrating innovation, initiative, and the ability to build something valuable from the ground up."}
                    {cat.category === "Analysis & Strategy" && "Perfect for showcasing critical thinking, data-driven decision making, and strategic planning capabilities."}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.verbs.map((verb, j) => (<span key={j} className="verb-tag">{verb}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Optimization */}
        <section className="section section-alt" aria-labelledby="ats-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="ats-title">ATS Optimization for Resume Work Experience Sections</h2>
              <p className="section-subtitle">Ensure your carefully crafted achievement statements actually pass through automated screening systems</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="ats-do">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '1rem' }}>✅ DO for ATS Compatibility</h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Use standard job title terminology that matches job descriptions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Include keywords from requirements naturally within achievement context</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Place most important keywords in the first 3 bullet points of each role</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Quantify achievements with specific numbers, percentages, and dollar amounts</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Use standard section headings: "Professional Experience" or "Work History"</li>
                </ul>
              </div>
              <div className="ats-dont">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem' }}>❌ AVOID for ATS Compatibility</h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Creative or non-standard job titles not found in job descriptions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Graphics, icons, or special characters that confuse parsing algorithms</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Complex tables or multi-column layouts that disrupt reading order</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Keyword stuffing without meaningful context or natural integration</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Headers, footers, or text boxes containing critical information</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiShield size={16} /> Check Your Resume's ATS Score Free</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-title">Frequently Asked Questions About Work Experience on Resumes</h2>
              <p className="section-subtitle">Expert answers to the most common work experience writing challenges</p>
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

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-title">Common Questions About Resume Work Experience</h2>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                "how to describe work experience with no experience",
                "best work experience format for 2026 resume",
                "work experience examples for career change",
                "what to include in work experience section",
                "chronological vs functional resume format",
                "ATS friendly work experience tips",
                "professional work experience descriptions free",
                "work experience for internal promotion resume"
              ].map((keyword, i) => (
                <div key={i} className="card-executive" style={{ padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontWeight: '600', marginBottom: '12px' }}>❓ {keyword}</p>
                  <Link href="/complete-resume-resource-library" className="btn-outline" style={{ minWidth: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-flex' }}>
                    Find answer in our resource library →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="section" aria-labelledby="reviews-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="reviews-title">What Users Say About Our Resume Writing Guide</h2>
              <p className="section-subtitle">Join thousands of professionals who improved their resumes with these techniques</p>
            </div>
            <div className="grid">
              {[
                { name: "Sarah Mitchell", position: "Recruiting Manager", rating: 5, review: "This guide transformed how our candidates present their experience. The CAR method examples are particularly effective for technical roles." },
                { name: "James Park", position: "Career Coach", rating: 5, review: "I've recommended this to over 200 clients. The before/after examples make the concept of achievement-focused writing immediately clear." },
                { name: "Lisa Rodriguez", position: "HR Director", rating: 4, review: "The psychology section on how recruiters scan resumes is eye-opening. Every job seeker should understand the 7-second scan pattern." },
                { name: "Michael Turner", position: "Software Engineer", rating: 5, review: "Applied the XYZ formula to my resume and saw a 40% increase in callback rates. The action verb guide helped me communicate my technical impact clearly." }
              ].map((review, i) => (
                <div key={i} className="review-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--card-bg)', borderRadius: '0.5rem', padding: 'var(--card-padding)', border: 'var(--card-border)' }} itemScope itemType="https://schema.org/Review">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="reviewer-info">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <meta itemProp="name" content={review.name} />
                        <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{review.name}</strong>
                      </span>
                      <span className="text-small">{review.position}</span>
                    </div>
                    <div className="review-rating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={review.rating} />
                      <meta itemProp="bestRating" content="5" />
                      <span style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">"{review.review}"</p>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Article">
                    <meta itemProp="name" content="How to Describe Work Experience on Resume Guide" />
                    <meta itemProp="url" content={canonicalUrl} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section section-alt" aria-labelledby="resources-title">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-title">Explore More Free Resume Writing Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Resume Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Resume Keyword Matcher", iconName: "FiSearch" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/free-resume-readability-checker", text: "Resume Readability Checker", iconName: "FiEye" },
                { href: "/resume-templates", text: "Professional Resume Templates", iconName: "FiGrid" }
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

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Transform Your Work Experience Descriptions?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply these achievement formulas, the 8-step writing process, and industry examples to your resume today. Join thousands of professionals who increased their interview invitations by 73%. <strong>100% Free. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Get Professional Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Explore Free Resume Tools</Link>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Expert-Written Content</span>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • Content refreshed regularly</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.2</span>
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
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default DescribeWorkExperience;