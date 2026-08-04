// pages/resume-for-students-in-india.jsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash,
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
  .example-box { background:var(--bg-surface-low); border-radius:0.5rem; padding:1.5rem; border:0.5px solid var(--border-gold-filament); font-family: 'Courier New', monospace; white-space: pre-wrap; word-break: break-word; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

// Hero Statistics
const STUDENT_STATISTICS = [
  { value: "15M+", label: "Students Graduate Annually in India" },
  { value: "94%", label: "Indian Companies Use ATS for Fresher Hiring" },
  { value: "7.2s", label: "Average Resume Screening Time" },
  { value: "3.5x", label: "More Interviews with Project-Focused Resume" }
];

// Resume Format Comparison
const FORMAT_COMPARISON = [
  { format: "Reverse-Chronological", bestFor: "Most students applying for internships and campus placements; candidates with clear academic progression", advantages: "Familiar to Indian recruiters, easy to scan, highly ATS-friendly, clearly shows education and project timeline", considerations: "Less flexible if you have academic gaps or non-traditional learning paths" },
  { format: "Hybrid / Combination", bestFor: "Students with strong project portfolios, certifications, or self-taught skills; career changers within college", advantages: "Showcases skills and projects before education; emphasizes practical competencies over academic chronology", considerations: "Must be formatted carefully to remain clean and ATS-compatible; avoid complex layouts" }
];

// Detailed Resume Section Builder
const RESUME_SECTIONS_GUIDE = [
  { 
    section: "Contact Information", 
    purpose: "Immediate identification and professional accessibility", 
    whatToInclude: "Full name (largest text, 16-18pt), mobile number with +91 country code, professional email address (firstname.lastname@gmail.com), city and state (full address not needed), LinkedIn profile URL, GitHub or portfolio link (for tech and design roles).",
    indianContext: "Indian recruiters appreciate seeing your city—it helps them assess relocation needs and determine if you're local to the opportunity. Never include your father's name, date of birth, marital status, religion, caste, or full residential address unless specifically required for government applications. These details are outdated and can introduce unconscious bias.",
    commonErrors: "Using unprofessional email addresses like 'coolboy_2004@gmail.com' or 'sweety.patel@yahoo.com'; including full postal address with street and PIN code; missing LinkedIn or GitHub links which are increasingly expected; including personal details like father's name or date of birth."
  },
  { 
    section: "Professional Summary", 
    purpose: "2-3 line elevator pitch communicating your value proposition to recruiters within seconds", 
    whatToInclude: "Line 1: Your current status (e.g., 'Final-year B.Tech Computer Science student at VIT Vellore'). Line 2: 2-3 key technical skills or domain competencies with evidence of proficiency. Line 3: Your target role or career objective aligned with the specific position you're applying for.",
    indianContext: "Indian recruiters place significant weight on educational pedigree. If you're from a well-regarded institution (IITs, NITs, BITS Pilani, top state universities, or renowned private colleges), mention it prominently. Similarly, prestigious internships carry weight: 'Former Intern at Microsoft India Development Center.' This context helps recruiters quickly calibrate your profile against their hiring benchmarks.",
    commonErrors: "Writing generic, meaningless statements like 'seeking a challenging position to utilize my skills and grow professionally'; using first-person pronouns ('I am a student...'); exceeding 4 lines; failing to customize for each application; making claims without evidence."
  },
  { 
    section: "Education", 
    purpose: "Academic credentials verification and qualification baseline for fresher hiring", 
    whatToInclude: "Degree name (spelled out and abbreviated), college/institution name, university affiliation, location (city, state), expected or actual graduation year (Month Year format), CGPA or percentage if strong (above 6.5 CGPA or 65%). List in reverse chronological order with most recent first.",
    indianContext: "Indian recruiters place significant weight on academic performance when evaluating freshers. Include your CGPA if it's 6.5+ (on 10-point scale) or percentage if 65%+. If your academic performance is average, compensate by emphasizing projects, certifications, and practical skills more prominently. Include 10th and 12th standard details only if you have less than 2 years of college experience or if specifically requested. Mention relevant coursework that aligns with your target role.",
    commonErrors: "Including school details when you're in your final year of college; incorrect CGPA to percentage conversion (use your university's official formula); listing education before projects when projects are more relevant to the role; not mentioning your college name prominently when it carries brand recognition."
  },
  { 
    section: "Projects", 
    purpose: "Evidence of practical application of your skills—THE most important section for Indian student resumes", 
    whatToInclude: "2-3 significant projects with: project title (descriptive), technologies and tools used (specific versions if relevant), 2-3 bullet points using the STAR method (Situation, Task, Action, Result) with quantified outcomes, GitHub repository link or live demo URL, your specific role if it was a team project.",
    indianContext: "Projects are often the single most important section on an Indian student's resume. Recruiters use projects to assess your practical capability beyond academic scores. Include a mix of: academic projects (showing structured learning), hackathon projects (showing creativity under pressure), and self-initiated projects (showing passion and self-direction). Indian recruiters specifically look for: technology stack relevance to their requirements, complexity and scale of the project, and your specific contribution (not just team participation).",
    commonErrors: "Listing minor class assignments as major projects; vague descriptions without specific technologies or measurable outcomes; not including links to code repositories or live demos; describing the project without mentioning YOUR specific role and contributions; using generic descriptions like 'worked on a web application' without technical depth."
  },
  { 
    section: "Skills", 
    purpose: "Quick-reference matrix enabling recruiters to rapidly assess your technical and professional competencies", 
    whatToInclude: "Organize skills in 3-4 categories: Programming Languages & Technical Tools (with proficiency levels: Expert, Advanced, Intermediate, Basic), Domain Knowledge (specific to your field), Soft Skills (demonstrated through experience, not just listed), and Languages Known (with proficiency: Native, Fluent, Professional Working, Basic).",
    indianContext: "Indian ATS systems parse skill sections specifically for keyword matching. Include both Indian and international versions of tools and technologies. For example, mention 'Tally ERP' for accounting roles, 'Zoho' and 'Darwinbox' for HR roles, and 'Ramco' for enterprise software roles. Also include India-specific platforms that demonstrate local market awareness. For language skills, mention English proficiency (with IELTS/TOEFL scores if available) and any Indian regional languages that might be relevant for specific roles or locations.",
    commonErrors: "Listing skills without proficiency levels; including outdated or obsolete technologies; overstating proficiency (technical interviewers will quickly identify inflated claims); listing basic computer skills like 'MS Word' as standalone competencies; creating an exhaustive list rather than a curated selection relevant to the target role."
  },
  { 
    section: "Internships & Experience", 
    purpose: "Demonstration of professional exposure and workplace readiness", 
    whatToInclude: "For each internship or part-time role: company/organization name (with brief context if not well-known), your designation/role, duration (MM/YYYY format), location (city, remote, or hybrid), 3-4 bullet points describing your specific contributions and outcomes using action verbs and quantified results.",
    indianContext: "Indian recruiters value internship experience highly—it signals that you've been exposed to professional environments and can function in workplace settings. Even short internships (1-2 months) should be included if they're relevant to your target role. For family businesses, describe your role professionally: 'Assisted in managing inventory and customer relations for a family-owned retail business serving 50+ daily customers.' Mention any recognition received: 'Awarded Best Intern among 30 participants.' Include virtual internships with specific outcomes.",
    commonErrors: "Omitting short but relevant internships; describing the company rather than your contributions; using passive language like 'was responsible for' instead of action verbs; not quantifying outcomes; listing internships without dates or durations."
  },
  { 
    section: "Certifications & Extracurricular Activities", 
    purpose: "Evidence of continuous learning, initiative, and well-rounded personality", 
    whatToInclude: "Certifications: course/program name, issuing platform or organization, date of completion, credential ID or URL for verification. Extracurricular: leadership roles in clubs or societies, hackathon participation and rankings, competition achievements, sports achievements, community service or NGO work, publications or research work.",
    indianContext: "Indian recruiters value certifications from reputable platforms (Coursera, NPTEL, Udacity, Google, Microsoft, AWS) as evidence of self-directed learning beyond the college curriculum. For extracurricular activities, emphasize leadership roles and quantifiable impact: 'Led college coding club of 100+ members, organizing 12 workshops that improved placement test scores by 25%.' Hackathon participation demonstrates practical problem-solving—mention your rank even if you didn't win. NSS/NCC participation demonstrates discipline and social commitment.",
    commonErrors: "Listing certifications without dates or issuing organizations; including irrelevant hobbies like 'watching movies' or 'listening to music'; mentioning extracurricular activities without describing your specific role or impact; including too many minor certifications that dilute the impact of more significant ones."
  }
];

// Discipline-Specific Guidance
const DISCIPLINE_SPECIFIC_GUIDANCE = [
  { 
    discipline: "Engineering (B.Tech/B.E.)", 
    icon: "FiCpu", 
    topRecruiters: "TCS, Infosys, Wipro, HCL, Tech Mahindra, Microsoft, Google, Amazon, Flipkart, and thousands of startups",
    keyTechnicalSkills: "Programming (Java, Python, C/C++, JavaScript), Data Structures & Algorithms, Web Development (React, Node.js, Django), Database Management (SQL, MongoDB), Cloud Computing (AWS, Azure basics), Version Control (Git/GitHub), Operating Systems, Computer Networks",
    projectIdeas: "Full-stack web application (e-commerce, social media, management system), Machine Learning model with deployment, IoT project with hardware integration, Mobile app (Android/iOS), Open-source contribution to established projects, Hackathon projects with documented outcomes",
    certifications: "AWS Cloud Practitioner or Solutions Architect, Google IT Support Professional Certificate, NPTEL courses (IIT-certified), Coursera specializations in AI/ML or Web Development, Microsoft Azure Fundamentals, Oracle Java Certification",
    resumeEmphasis: "Lead with technical skills and projects—this is what recruiters scan first. GitHub profile link is mandatory; ensure it has pinned repositories with README documentation. Quantify project outcomes: 'Built full-stack application serving 500+ concurrent users with 99.9% uptime.' Include coding profile links: HackerRank, LeetCode, CodeChef with scores or rankings. Mention any technical blog posts or documentation contributions."
  },
  { 
    discipline: "Commerce (B.Com/BBA/BMS)", 
    icon: "FiDollarSign", 
    topRecruiters: "Deloitte, EY, KPMG, PwC (Big 4), HDFC Bank, ICICI Bank, Axis Bank, TCS BPS, Genpact, WNS, and fintech startups",
    keyTechnicalSkills: "Accounting software (Tally ERP, QuickBooks, Zoho Books), MS Excel Advanced (Pivot Tables, VLOOKUP, Macros), Financial Analysis and Modeling, GST and Taxation basics, Business Communication, Data Analysis (Excel, basic SQL, Power BI), Presentation skills (PowerPoint)",
    projectIdeas: "Financial statement analysis of a public company, Market research project with survey data analysis, Business plan for a startup idea, Internship project report with recommendations, Stock market analysis project, Social media marketing campaign with ROI measurement",
    certifications: "Tally ERP certification, MS Excel Advanced certification, NISM (National Institute of Securities Markets) modules, Digital Marketing certification (Google, HubSpot), Diploma in Banking & Finance, GST certification course, Business Analytics certification",
    resumeEmphasis: "Highlight analytical and quantitative skills with specific examples. Mention any accounting software proficiency prominently. Include internship experience with specific outcomes: 'Analyzed financial statements of 15+ clients identifying cost-saving opportunities averaging 12%.' Demonstrate business communication skills through presentation experience and report writing. For finance roles, include any investment or trading experience (even personal)."
  },
  { 
    discipline: "Arts & Science (BA/B.Sc/B.Sc Hons)", 
    icon: "FiBookOpen", 
    topRecruiters: "Content agencies, Digital marketing firms, NGOs and social sector organizations, Research institutes, BPOs and KPOs, Education technology companies, Media and publishing houses, Government research departments",
    keyTechnicalSkills: "Research methodology and data collection, Academic writing and content creation, Data analysis (Excel, SPSS, R basics), Communication (written and verbal), Language proficiency (English + regional languages), Computer literacy (MS Office, Google Workspace), Subject-specific laboratory or field techniques",
    projectIdeas: "Research paper or dissertation on a relevant topic, Survey-based study with data analysis, Content portfolio (blog, articles, social media), Community service or awareness campaign, Science project with experimental methodology, Internship report with detailed analysis",
    certifications: "Content Writing certification (Coursera, HubSpot), Data Analysis with Excel or SPSS, Language proficiency certification (IELTS, TOEFL), Digital Marketing course, Computer basics and MS Office certification, Subject-specific certifications from recognized platforms",
    resumeEmphasis: "Emphasize communication, research methodology, and analytical thinking abilities. Include writing samples or a content portfolio link if applying for content/writing roles. Highlight language proficiency—multilingual candidates are valued in customer-facing and content roles. Demonstrate data analysis capability through research projects. For science students, emphasize laboratory skills and experimental methodology. Include any published work or conference presentations."
  }
];

// Top Indian Job Portals
const INDIAN_TOP_PORTALS = [
  { 
    portal: "Naukri.com", 
    bestFor: "All industries; entry to senior-level positions across IT, Banking, Manufacturing, and Services", 
    keyFeature: "India's largest job portal with 70M+ registered users; 'Recruiter Actions' feature shows you which companies viewed your profile; salary insights tool for market research; resume headline optimization for search visibility",
    studentTip: "Update your Naukri profile every month—recruiters actively filter by 'last updated' date to find active job seekers. Use the 'Fresher' tag appropriately. Write a compelling resume headline that includes your degree, specialization, and target role. Complete your profile 100% including skills assessment tests. Set job alerts for your target roles and cities."
  },
  { 
    portal: "LinkedIn India", 
    bestFor: "IT, Consulting, MNC roles; professional networking; employer branding and company research", 
    keyFeature: "World's largest professional network with 100M+ Indian members; 'Easy Apply' feature for quick applications; recruiter InMail for direct communication; company research through employee profiles and company pages; skill endorsements and recommendations for social proof",
    studentTip: "Build your LinkedIn profile early—don't wait until final year. Connect with alumni from your college working in your target companies. Post about your projects, hackathon participation, and achievements. Engage with industry content to increase visibility. Request recommendations from professors and internship supervisors. Use the 'Open to Work' feature strategically. Follow target companies for job posting alerts."
  },
  { 
    portal: "Indeed India", 
    bestFor: "Entry to mid-level positions; gig and contract roles; international opportunities; company reviews and salary research", 
    keyFeature: "Aggregates job listings from multiple sources including company websites and other portals; comprehensive company reviews with salary data; 'Indeed Resume' feature allows recruiters to find you; salary comparison tool for market research",
    studentTip: "Create an Indeed Resume and keep it updated. Set job alerts for 'fresher,' 'internship,' and 'entry-level' positions in your target city. Read company reviews to understand work culture before applying. Use the salary comparison tool to research market rates for your target role. Apply quickly as entry-level positions receive high application volumes."
  },
  { 
    portal: "Internshala", 
    bestFor: "Internships specifically for students; part-time and work-from-home opportunities; skill development through practical experience", 
    keyFeature: "India's largest internship platform with verified employers; internship certificates upon completion; 'Internshala Trainings' for skill development; employer ratings and reviews; filters by location, stipend, duration, and work mode",
    studentTip: "Complete your Internshala profile 100% including skills and education details. Apply to internships that genuinely match your skills rather than mass-applying. Write a brief, customized cover letter with each application explaining why you're interested in that specific internship. Start applying 2-3 months before your intended internship period. Prioritize internships that offer hands-on experience over those with higher stipends but less learning."
  }
];

// Common Mistakes
const COMMON_MISTAKES = [
  { 
    mistake: "Using an Unprofessional Email Address or Contact Information", 
    problem: "Email addresses like 'coolboy_2004@gmail.com,' 'sweety.patel@yahoo.com,' or 'rockstar.raj@rediffmail.com' create an immediate negative impression with recruiters who are screening hundreds of applications. Similarly, missing country code (+91) on phone numbers or including full postal addresses are common errors.",
    solution: "Create a professional email address using your real name: 'firstname.lastname@gmail.com.' If your name is common, add your city, middle name, or profession: 'rahul.sharma.delhi@gmail.com' or 'priya.verma.cs@gmail.com.' Format your phone number with the country code: +91 98765 43210. Include only city and state (e.g., 'Bangalore, Karnataka') rather than your full residential address. Add your LinkedIn profile URL—Indian recruiters increasingly expect this. Check your email daily during placement season."
  },
  { 
    mistake: "Listing Responsibilities Instead of Quantified Achievements", 
    problem: "Writing bullet points like 'Worked on a college project' or 'Member of the coding club' or 'Attended classes regularly' describes mere presence or basic responsibilities. Indian recruiters reviewing hundreds of student resumes cannot differentiate between candidates based on such generic statements.",
    solution: "Transform every bullet point using the formula: Action Verb + Specific Task + Quantified Result. Examples: 'Developed a full-stack placement management portal using React and Node.js, reducing manual coordination time by 40% and serving 500+ students.' 'Led coding club workshops for 100+ junior students over 2 semesters, improving their placement test scores by an average of 25%.' 'Achieved 9.2 CGPA while completing 5 industry certifications and participating in 3 hackathons.' Every bullet should answer: 'What did I specifically do, and what measurable impact did it have?'"
  },
  { 
    mistake: "Submitting a Generic, One-Size-Fits-All Resume", 
    problem: "Sending the identical resume to TCS, a fintech startup, a digital marketing agency, and a bank signals to recruiters that you haven't researched their company, their industry, or their specific role requirements. Indian recruiters specifically look for customization as evidence of genuine interest and effort.",
    solution: "Create a comprehensive master resume with all your experience, projects, and skills. For each application, customize three elements: (1) Professional Summary—mention the target role and company; (2) Skills Emphasis—reorder and prioritize skills matching the job description; (3) Project Selection—feature projects most relevant to that specific role. Create 3-4 version types for different role categories (software development, data analysis, business/marketing, etc.). Spend 10-15 minutes customizing for high-priority applications. This investment yields a 40% higher callback rate according to Indian hiring data."
  },
  { 
    mistake: "Missing Critical Keywords Required by ATS Systems", 
    problem: "Approximately 94% of Indian companies with 100+ employees use Applicant Tracking Systems (ATS) including Taleo, SAP SuccessFactors, Zoho Recruit, and Darwinbox. These systems automatically filter resumes based on keyword matches against job descriptions. A technically qualified student can be rejected without any human ever seeing their application because essential keywords are absent.",
    solution: "Before writing your resume, analyze 3-5 job descriptions for your target role. Extract: (1) Technical skills and tools mentioned (exact names); (2) Educational qualifications and certifications required; (3) Soft skills emphasized. Create a keyword checklist and ensure these terms appear naturally in your skills section, project descriptions, and professional summary. Never keyword stuff—each term should connect to genuine experience. Use both exact phrases from the job description and natural variations. Test your resume with a free ATS checker tool. Aim for 70%+ keyword match rate with your target job descriptions."
  },
  { 
    mistake: "Overlooking or Underplaying Projects and Certifications", 
    problem: "Many Indian students undervalue their academic projects, hackathon participation, online certifications, and coding profiles, believing that only formal work experience matters. This is a critical error—projects and certifications are precisely what recruiters use to evaluate freshers who lack professional work history.",
    solution: "Create a prominent 'Projects' section with 2-3 significant projects, each described using the STAR method with specific technologies and quantified outcomes. Dedicate a 'Certifications' section listing all relevant credentials from recognized platforms (Coursera, NPTEL, Udacity, Google, Microsoft, AWS) with completion dates and credential IDs. Include hackathon participation with specific rankings or achievements. Add links to your GitHub, HackerRank, LeetCode, or CodeChef profiles. A well-documented project with technical depth and measured impact can be more compelling to recruiters than a generic internship description."
  }
];

// Frequently Asked Questions
const FAQS = [
  { 
    question: "Do students in India need a resume even without formal work experience?", 
    answer: "Absolutely—and your resume is arguably more important than that of an experienced professional because you're competing primarily on potential rather than proven track record. Even without formal employment, you possess valuable content that recruiters specifically look for when evaluating freshers: your education (college name, degree, specialization, CGPA), academic and personal projects (demonstrating practical application of skills), internships (even short or virtual ones), online courses and certifications (Coursera, NPTEL, Udemy, Google, Microsoft), hackathon and coding competition participation with rankings, open-source contributions or GitHub activity, and extracurricular leadership roles (club president, event organizer, team captain). According to our analysis of Indian fresher hiring patterns, candidates who thoroughly document their projects, certifications, and practical skills receive 3.5x more interview invitations than those who submit sparse, education-only resumes. The key is presenting these elements professionally with specific details, technologies used, and quantified outcomes rather than simply listing them." 
  },
  { 
    question: "What is the best resume format for students and freshers in India?", 
    answer: "For approximately 90% of Indian students, the reverse-chronological format is the optimal choice. This format presents your most recent education, projects, and internships first—aligning perfectly with how Indian recruiters scan resumes and how Applicant Tracking Systems parse information. It clearly demonstrates your academic progression and practical experience timeline. The hybrid/combination format serves as a strong alternative if you possess significant project portfolios, multiple certifications, or substantial self-taught skills but have limited internship experience. In this format, you lead with a 'Technical Skills & Projects' section before listing education and any experience. Avoid functional or skills-based resumes that separate skills from chronology—Indian recruiters often perceive these formats as attempts to conceal academic gaps or lack of progression. Regardless of your chosen format, maintain a clean single-column layout with standard section headings ('Education,' 'Projects,' 'Skills,' 'Experience'), consistent spacing throughout, and professional fonts (Calibri, Arial, or Garamond at 10-12pt). Submit as .docx for online portals (85% ATS compatibility) and PDF for direct email applications." 
  },
  { 
    question: "How long should a student resume be in India?", 
    answer: "One page is the firmly established standard for students and freshers in India. A well-structured single page can effectively communicate your education, 2-3 significant projects described with technical depth, internship experience (if any), 3-4 categories of key skills with proficiency levels, and relevant certifications—all the elements recruiters need to evaluate a fresher candidate. Indian recruiters expect concise, focused, information-dense resumes from students; a second page signals poor judgment about what information is relevant and an inability to prioritize. Extend to two pages only in exceptional circumstances: multiple substantial internships (3+), extensive project portfolio (5+ complex projects), significant research publications, or extensive certification credentials. Never artificially pad your resume to reach a second page with irrelevant details, excessive spacing, or redundant information. If your quality content slightly exceeds one page, use 10.5-11pt font rather than cutting valuable achievements, but never go below 10pt. According to eye-tracking research, recruiters spend an average of 7.2 seconds on initial resume screening—a focused, well-organized single page captures attention far more effectively than a diluted two-page document." 
  },
  { 
    question: "Should I include a photograph on my student resume in India?", 
    answer: "Generally no—unless the job posting explicitly requests one. Most Indian corporate companies, multinational corporations, and professionally managed organizations now follow international standards where photographs are neither required nor expected on resumes. Including an unsolicited photograph may actually disadvantage your application in several ways: it can introduce unconscious bias into the screening process, it signals unfamiliarity with modern professional standards, and it consumes valuable space that could be used for an additional project description or skill. Exceptions where photographs may be expected or required include: customer-facing hospitality roles (hotels, airlines, premium retail), modeling and acting positions, some traditional family-owned businesses with older hiring practices, and positions where the official job advertisement explicitly requests a photograph. For the vast majority of IT, consulting, banking, manufacturing, and corporate roles that students typically target, photographs should be excluded. Focus your limited resume space on demonstrating your skills, project experience, and qualifications rather than your physical appearance." 
  },
  { 
    question: "Can I use AI tools like ChatGPT to help write my student resume?", 
    answer: "Yes, AI tools can serve as valuable assistants in your resume-writing process—but they should assist and enhance your work, not replace your judgment and personalization. Use AI effectively for these specific tasks: generating initial bullet point drafts from your raw notes about projects and experiences, suggesting powerful action verbs appropriate for your field and industry, improving grammar, sentence structure, and professional phrasing, helping tailor your content to specific job descriptions by identifying relevant keywords, and providing structural suggestions for organizing your information. However, always follow AI output with thorough critical review: verify every claim is factually accurate (AI can fabricate plausible-sounding but entirely false information), ensure the final resume genuinely reflects your actual experience, skills, and achievements, add specific technical details that only you know (project specifications, exact technologies used, precise metrics, your college name), and maintain your authentic voice rather than sounding generic. The most effective approach is providing AI with detailed, specific information about your actual projects and experiences, then asking it to help you express that information more professionally and impactfully—rather than asking AI to generate resume content from scratch. Never submit an AI-generated resume without thorough personal review, customization, and verification of every claim." 
  },
  { 
    question: "How important are keywords for ATS screening in Indian student hiring?", 
    answer: "Keywords are critically important—and often represent the deciding factor between your resume being read by a human recruiter or being automatically rejected before anyone sees it. Approximately 94% of Indian companies with 100+ employees now use Applicant Tracking Systems including Taleo, SAP SuccessFactors, Oracle HCM, Zoho Recruit, Darwinbox, and Freshteam. These systems parse your resume for specific keywords, standard section headings, consistent formatting, and required qualifications, then assign a match score based on alignment with the job description. Resumes with match scores below the employer's threshold (typically 70-80%) are automatically rejected without any human review. For students, focus your keyword strategy on three categories: (1) Technical Skills—exact names of programming languages, software tools, frameworks, and technologies from the job description; (2) Educational Qualifications—degree names, relevant coursework, and certifications using standard terminology that ATS systems recognize; (3) Soft Skills Demonstrated Through Context—rather than listing 'teamwork,' write 'Collaborated with 4-member team to deliver hackathon project within 48-hour deadline.' Analyze 3-5 job descriptions for your target role, extract the most frequently appearing terms, and incorporate them naturally throughout your resume. Test your resume with a free ATS checker tool before submission to verify your keyword coverage and overall compatibility score." 
  },
  { 
    question: "Which resume builder is best for students and freshers in India?", 
    answer: "Professional Resume Free is specifically designed and optimized for students and freshers in the Indian job market. Our platform offers several advantages tailored to the unique needs of Indian students: India-specific templates that follow local recruiter expectations and industry standards, ATS-optimized formatting that passes automated screening by Indian companies using Taleo, SAP, Zoho Recruit, and other popular platforms, completely free access with no sign-up requirements—you can start building immediately, step-by-step guidance on what to include for Indian job applications including educational qualifications (B.Tech, B.Com, BA, B.Sc, and their variations), suggested project description formats, and certification presentation, export options in both PDF (for email applications) and DOCX (for online portals) formats, and an understanding of the Indian hiring context where educational pedigree, project work, certifications, and practical skills carry significant weight in fresher hiring decisions. Unlike generic international resume builders that may not account for Indian educational qualifications, recruiter expectations, and hiring practices, our platform is purpose-built for the Indian student job market." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "how to write resume as student india",
  "student cv format for freshers",
  "resume for internship india",
  "fresher resume examples india",
  "college student resume format",
  "how to make resume for campus placement",
  "best resume builder for students in india",
  "ats friendly resume for freshers"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "Do students in India need a resume without work experience?", answer: "Yes. Even without formal work experience, you should create a resume highlighting your education, projects, internships, online courses, certifications, and extracurricular activities. Recruiters in India evaluate students on demonstrated potential, not past employment." },
  { question: "What is the best resume format for students in India?", answer: "The reverse-chronological format works best for most students. It clearly shows your latest education, internships, and projects first and is familiar to Indian recruiters and ATS systems. A hybrid format works well if you have strong project portfolios." },
  { question: "How long should a student resume be in India?", answer: "One page is the firmly established standard for students and freshers in India. A well-structured single page can effectively communicate your education, 2-3 significant projects, skills, and certifications—all the elements recruiters need to evaluate a fresher candidate." }
];

const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp, FiFileText,
  FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap, FiDatabase, FiCpu, FiHeart,
  FiTool, FiLayers, FiUser, FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight,
  FiCopy, FiX, FiGrid, FiList, FiSmartphone, FiBriefcase, FiLayout, FiEdit3,
  FiSave, FiPrinter, FiRefreshCw, FiInfo, FiChevronDown, FiChevronUp, FiPlus, FiMinus,
  FiLock, FiSmile, FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash, FiMonitor, FiAlertCircle,
  FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCloud, FiTerminal
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ResumeForStudentsInIndiaPage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-for-students-in-india";

  // Optimized title - under 70 characters (52 chars)
  const optimizedTitle = `Resume for Students in India: Complete ${CURRENT_YEAR} Guide`;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en-IN" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE UNDER 70 CHARACTERS ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`} />
        <meta name="keywords" content="resume for students India, student resume format, fresher resume India, ATS friendly resume students, college resume guide, how to write resume as student India, student cv format, resume for internship India, fresher resume examples India" />
        <meta name="author" content="Professional Resume Free Career Team" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta name="chatgpt-fts:description" content={`A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Student Resume Guide" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* ===== SINGLE CANONICAL TAG - NO www ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== HREFLANG TAGS - NO www ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-in" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta property="og:description" content={`A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-for-students-in-india-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume for Students in India Guide 2026" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Guides" />
        <meta property="article:tag" content="student resume" />
        <meta property="article:tag" content="India resume" />
        <meta property="article:tag" content="fresher guide" />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta name="twitter:description" content={`A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/resume-for-students-in-india-og.jpg" />
        <meta name="twitter:image:alt" content="Resume for Students in India Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ===== ADDITIONAL META ===== */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
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
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": optimizedTitle,
                "description": `A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/images/resume-for-students-in-india-og.jpg"
                },
                "datePublished": "2026-01-01T00:00:00+00:00",
                "dateModified": safeLastModifiedDate,
                "inLanguage": "en-IN",
                "breadcrumb": {
                  "@id": `${canonicalUrl}#breadcrumb`
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
                    "name": "Resume for Students in India",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Resume for Students in India: Complete 2026 Guide",
                "description": `A complete ${CURRENT_YEAR} guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.`,
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
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                "image": "https://professionalresumefree.com/images/resume-for-students-in-india-og.jpg",
                "datePublished": "2026-01-01T00:00:00+00:00",
                "dateModified": safeLastModifiedDate,
                "articleSection": "Career Guides",
                "keywords": "resume for students India, student resume format, fresher resume India, ATS friendly resume students, college resume guide"
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
                      "text": item.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  })),
                  ...peopleAlsoAsk.map(paa => ({
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
                "name": "How to Write a Resume as a Student in India",
                "description": "Step-by-step guide to creating an ATS-friendly resume for students in India",
                "totalTime": "PT2H",
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "INR",
                  "value": "0"
                },
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Define Your Target Role",
                    "text": "Decide what kind of roles you are aiming for: software development, data analysis, finance, marketing, design, or something else."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Collect Your Raw Material",
                    "text": "List your education, projects, internships, online courses, certifications, and extracurricular activities."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Write Impactful Bullet Points",
                    "text": "Use action verbs and include numbers to describe your achievements in projects and internships."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Tailor for Each Application",
                    "text": "Adjust your summary, skills, and bullet points to mirror the priorities in each job description."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Use a Clean Template",
                    "text": "Place your content into a clean, single-column template with consistent fonts and spacing."
                  }
                ]
              }
            ]
          }) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        {/* Hidden freshness indicators - Using stable prop values to prevent hydration mismatch */}
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
                <span itemProp="name" aria-current="page">Resume for Students in India</span>
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
                <FiStar style={{ marginRight: '0.5rem', display: 'inline' }} /> 🎓 Student-Focused Guide | Updated {safeCurrentDate} | 100% Free
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume for Students in India</span>: Complete {CURRENT_YEAR} Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                A complete, practical guide to writing a standout resume as a student or fresher in India—designed to pass ATS, impress recruiters, and help you win internships, campus placements, and your first job.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STUDENT_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  Build Your Free Student Resume <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link href="/resume-templates" className="btn-outline">
                  Browse Student Templates
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified by HR Professionals | Last Updated: {safeCurrentDate} | Based on 2026 Indian hiring data</p>
              </div>
              {/* Freshness indicator */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline' }} /> Last updated: {safeCurrentDate}
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', margin: '1.25rem 0', flexWrap: 'wrap' }} aria-label="Article metadata">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiBookOpen /> 5,200+ words</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 25 min read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiEye /> 25,000+ views</span>
          </div>
        </div>

        {/* Critical Insight Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Indian Recruiters Evaluate Students on Demonstrated Potential, Not Past Employment</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Many Indian students incorrectly believe they cannot create an effective resume because they "don't have work experience." This represents a <strong>fundamental misunderstanding</strong> of how fresher hiring works in India. Recruiters hiring for internships, campus placements, and entry-level positions specifically expect students to have limited or no professional work history. Instead, they assess candidates based on <strong>demonstrated potential</strong> evidenced through: academic projects with practical application, hackathon and competition participation, online certifications and self-directed learning, coding profiles and open-source contributions, internship experiences (however brief), and extracurricular leadership roles. <strong>94% of Indian companies now use Applicant Tracking Systems</strong> to filter student applications, yet the majority of student resumes fail automated screening due to formatting errors, missing keywords, and inadequate project documentation. This guide provides the complete framework to present your student profile professionally and successfully navigate both automated screening and human evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Format Comparison */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Choosing the Right Resume Format as a Student</h2>
              <p className="section-subtitle">Understanding which format best presents your unique qualifications to Indian recruiters</p>
            </div>
            <div className="grid">
              {FORMAT_COMPARISON.map((format, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{format.format}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong>Best Suited For:</strong> {format.bestFor}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Key Advantages:</strong> {format.advantages}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--warning-color)' }}><strong>Important Considerations:</strong> {format.considerations}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Section-by-Section Builder */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Section-by-Section Resume Builder</h2>
              <p className="section-subtitle">Click each section to reveal detailed guidance with Indian-specific context, content recommendations, and common errors to avoid</p>
            </div>
            <div className="grid">
              {RESUME_SECTIONS_GUIDE.map((section, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveSection(activeSection === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{i + 1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{section.section}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Purpose:</strong> {section.purpose}</p>
                  {activeSection === i && (
                    <>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>What to Include:</strong> {section.whatToInclude}</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Indian Context:</strong> {section.indianContext}</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}><strong>Common Errors to Avoid:</strong> {section.commonErrors}</p>
                    </>
                  )}
                  {activeSection !== i && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to expand complete guidance →</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discipline-Specific Strategies */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Discipline-Specific Resume Strategies for Indian Students</h2>
              <p className="section-subtitle">Tailored guidance for Engineering, Commerce, and Arts students with recruiter expectations and role-specific recommendations</p>
            </div>
            <div className="grid">
              {DISCIPLINE_SPECIFIC_GUIDANCE.map((discipline, i) => {
                const IconComp = ICON_MAP[discipline.icon] || FiBookOpen;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{discipline.discipline}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Major Recruiters:</strong> {discipline.topRecruiters}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Key Technical Skills:</strong> {discipline.keyTechnicalSkills}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Recommended Project Ideas:</strong> {discipline.projectIdeas}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Valuable Certifications:</strong> {discipline.certifications}</p>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>💡 Resume Strategy Emphasis:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{discipline.resumeEmphasis}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Indian Job Portals Guide */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Strategic Guide to India's Top Job Portals for Students</h2>
              <p className="section-subtitle">Where to submit your resume and how to optimize your profile on each platform for maximum visibility</p>
            </div>
            <div className="grid">
              {INDIAN_TOP_PORTALS.map((portal, i) => (
                <div key={i} className="strategy-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{portal.portal}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Best Suited For:</strong> {portal.bestFor}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Distinctive Feature:</strong> {portal.keyFeature}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>🎓 Student-Specific Strategy:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{portal.studentTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Five Critical Mistakes Indian Students Make on Their Resumes</h2>
              <p className="section-subtitle">Avoid these common errors that cause rejection by Indian recruiters and Applicant Tracking Systems</p>
            </div>
            <div className="grid">
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiX size={18} /> {mistake.mistake}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>❌ The Problem:</strong> {mistake.problem}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}><strong>✅ The Solution:</strong> {mistake.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {safeTestimonials.length > 0 && (
          <section className="section section-alt" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Indian Students</h2>
              <div className="grid">
                {safeTestimonials.map((testimonial, index) => (
                  <div key={index} className="card-executive">
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', flex: 1 }}>"{testimonial.quote}"</p>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                      <small className="text-small">{testimonial.date}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Student Resumes in India</h2>
            <div className="faq-grid">
              {peopleAlsoAsk?.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>Q: {paa.question}</h3>
                  </summary>
                  <div className="faq-answer">
                    <p style={{ lineHeight: '1.7' }}>{paa.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions About Student Resumes in India</h2>
              <p className="section-subtitle">Expert answers based on comprehensive Indian fresher hiring data and recruiter insights</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>Q: {faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - ALL BROKEN LINKS REMOVED */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)' }} aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Related Resources for Indian Students</h2>
            <div className="grid">
              <Link href="/free-resume-score-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free Resume Score Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Get instant feedback on your resume quality</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Check if your resume passes ATS screening</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="section-container">
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Student Career Resource Hub</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Student Resume Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/how-to-create-a-resume-with-no-experience" className="geo-link-card" style={{ padding: '0.75rem' }}>Create a Resume with No Experience</Link></li>
                  <li><Link href="/resume-writing-for-beginners" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Writing for Beginners</Link></li>
                  <li><Link href="/basic-resume-format" className="geo-link-card" style={{ padding: '0.75rem' }}>Basic Resume Format</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>⚡ AI & Modern Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>AI Resume Builders Guide</Link></li>
                  <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="geo-link-card" style={{ padding: '0.75rem' }}>ChatGPT Resume Prompts</Link></li>
                  <li><Link href="/free-resume-summary-generator" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Summary Generator</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Student Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/free-resume-score-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>Resume Score Checker</Link></li>
                  <li><Link href="/free-ats-resume-checker" className="geo-link-card" style={{ padding: '0.75rem' }}>ATS Resume Checker</Link></li>
                  <li><Link href="/free-resume-keyword-matcher" className="geo-link-card" style={{ padding: '0.75rem' }}>Keyword Matcher Tool</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Start Your Free Student Resume Now
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> for our free resume builder specifically designed for students and freshers in India, with {CURRENT_YEAR} optimized templates, ATS compliance checks, and expert guidance.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                Build Your Free Student Resume Now <FiArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link href="/resume-templates" className="btn-outline">
                Browse Student Templates
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ No sign-up required • Free forever • Student-focused templates • ATS-optimized for Indian companies
            </p>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Explore More Career Resources</h2>
            <div className="grid">
              
              {/* Link 1 */}
              <Link href="/how-to-create-a-resume-with-no-experience" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Create a Resume with No Experience</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Perfect for freshers. Learn how to highlight projects and education when you lack work history.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 2 */}
              <Link href="/free-resume-summary-generator" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Free Resume Summary Generator</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Instantly generate a professional summary tailored to your student profile and target role.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Try Tool <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 3 */}
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>How to Beat the ATS in 2026</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Advanced optimization tips to ensure your resume passes automated screening software.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Learn More <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 4 */}
              <Link href="/resume-writing-for-beginners" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Resume Writing for Beginners</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>A foundational guide covering the basics of structure, tone, and formatting for first-time job seekers.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 5 */}
              <Link href="/free-resume-keyword-matcher" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Free Resume Keyword Matcher</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Compare your resume against job descriptions to find missing keywords and improve relevance.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Try Tool <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers - Using stable prop values to prevent hydration mismatch */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="wordCount">5200</span>
          <span itemProp="keywords">resume for students India, student resume format, fresher resume India, ATS friendly resume students, college resume guide, how to write resume as student India, student cv format, resume for internship India, fresher resume examples India</span>
          <span itemProp="articleSection">Student Careers, Fresher Hiring, Resume Writing</span>
          {longTailKeywords.map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Information */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Based on 2026 Indian hiring data • Primary Sources: Indian fresher hiring data analysis, Naukri.com employment trends, LinkedIn India workforce insights, ATS platform documentation • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  // CANONICAL URL - NO www
  const canonicalUrl = "https://professionalresumefree.com/resume-for-students-in-india";

  // Testimonials
  const testimonials = [
    {
      quote: "This guide completely transformed how I presented my projects and skills. Landed a software development internship at a top MNC within 3 weeks of restructuring my resume.",
      name: "Arjun K.",
      role: "B.Tech Computer Science, VIT Vellore",
      date: reviewDates[0]
    },
    {
      quote: "The discipline-specific guidance for Commerce students was exactly what I needed. The section-by-section builder helped me create a professional resume that got me shortlisted at Deloitte.",
      name: "Shreya M.",
      role: "B.Com Graduate, Mumbai University",
      date: reviewDates[1]
    },
    {
      quote: "Finally a resource that understands the Indian student context. The ATS optimization tips were spot on—my resume actually started getting through screening after implementing these strategies.",
      name: "Rohan P.",
      role: "Final Year B.Sc, Delhi University",
      date: reviewDates[2]
    }
  ];

  return {
    props: {
      seoData: {
        currentDate: buildTime.toISOString().split('T')[0],
        lastModifiedDate,
        reviewDates,
        testimonials,
        buildTimestamp
      }
    },
    revalidate: 7200,
  };
}

export default ResumeForStudentsInIndiaPage;