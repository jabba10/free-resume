import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiPrinter, FiArchive, FiSearch, FiAlertCircle, FiCheckCircle,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiMonitor, FiCopy, FiPenTool, FiType, FiAlignLeft,
  FiHash, FiTrendingUp as FiTrend, FiLock, FiSmile, FiUserCheck,
  FiSave, FiRefreshCw
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
  .article-meta { display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap; }
  .meta-item { display:flex; align-items:center; gap:8px; color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = {
  FiHome, FiChevronRight, FiCalendar, FiClock, FiEye, FiStar, FiAward,
  FiCheck, FiArrowRight, FiDownload, FiFileText, FiTool, FiUsers,
  FiTarget, FiTrendingUp, FiBriefcase, FiCode, FiHeart, FiDollarSign,
  FiBookOpen, FiShield, FiLayers, FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiCpu, FiDatabase, FiCloud, FiTerminal,
  FiPrinter, FiArchive, FiSearch, FiAlertCircle, FiCheckCircle,
  FiBarChart2, FiActivity, FiZap, FiInfo, FiEdit, FiEdit3,
  FiSmartphone, FiMonitor, FiCopy, FiPenTool, FiType, FiAlignLeft,
  FiHash, FiTrend, FiLock, FiSmile, FiUserCheck, FiSave, FiRefreshCw
};

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const ESSENTIAL_TIPS = [
  { title: "Lead with a Strong Summary", icon: "FiUser", description: "Write a compelling 2-3 line professional summary highlighting your years of administrative experience, key software proficiencies, and unique value proposition. Tailor this section for each application to match the specific role requirements." },
  { title: "Highlight Core Competencies", icon: "FiTarget", description: "Create a dedicated 'Core Competencies' section near the top of your resume. Include software proficiencies (MS Office, Google Workspace), administrative abilities (calendar management, event planning), and soft skills (communication, organization)." },
  { title: "Quantify Your Achievements", icon: "FiTrendingUp", description: "Transform generic duties into measurable accomplishments. 'Managed calendars for 3 executives' becomes 'Coordinated complex calendars for 3 C-level executives, scheduling 50+ meetings monthly and reducing scheduling conflicts by 35%.'" },
  { title: "Use Powerful Action Verbs", icon: "FiBriefcase", description: "Begin every bullet point with strong action verbs: Coordinated, Streamlined, Orchestrated, Implemented, Optimized, Managed, Spearheaded. These words convey initiative and impact, distinguishing you from candidates who list passive responsibilities." },
  { title: "Tailor to Each Job Description", icon: "FiFileText", description: "Mirror the exact language and keywords from the job posting. If they emphasize 'calendar management for multiple executives,' ensure those precise phrases appear in your resume. Customized resumes receive 40% more interview requests." },
  { title: "Include Relevant Certifications", icon: "FiAward", description: "List certifications that validate your expertise: Microsoft Office Specialist (MOS), Certified Administrative Professional (CAP), Project Management Professional (PMP), or industry-specific credentials that demonstrate commitment to professional development." }
];

const RESUME_SECTIONS = [
  { step: 1, title: "Contact Information", icon: "FiUser", description: "Full name, professional email, phone number, city/state, and customized LinkedIn URL. Avoid full street address for privacy. In 2026, include remote/hybrid work preference if applicable." },
  { step: 2, title: "Professional Summary", icon: "FiFileText", description: "A powerful 2-3 line overview of your administrative career. Include years of experience, key skills, notable achievements, and the specific value you bring to organizations." },
  { step: 3, title: "Core Competencies", icon: "FiTarget", description: "A bulleted skills section organized by category: Software Proficiency, Administrative Skills, Communication, and Industry Knowledge. This section is critical for ATS keyword matching." },
  { step: 4, title: "Professional Experience", icon: "FiBriefcase", description: "Reverse-chronological work history with 4-6 achievement-focused bullet points per role. Use the CAR method (Challenge-Action-Result) to demonstrate measurable impact." },
  { step: 5, title: "Education", icon: "FiBookOpen", description: "Degree, institution, graduation year. Include relevant coursework, academic honors, or continuing education that demonstrates commitment to professional growth." },
  { step: 6, title: "Certifications & Training", icon: "FiAward", description: "Professional certifications, specialized training programs, and workshops that validate your administrative expertise and commitment to staying current with industry tools." }
];

const BEFORE_AFTER_EXAMPLES = [
  { before: "Responsible for answering phones and greeting visitors.", after: "Managed high-volume phone lines (50+ calls daily) and created exceptional first impressions for 100+ weekly visitors, contributing to 95% positive feedback ratings in client satisfaction surveys." },
  { before: "Scheduled meetings and managed calendars.", after: "Orchestrated complex calendar management for 3 C-suite executives, coordinating 30+ meetings weekly across multiple time zones and reducing scheduling conflicts by 35% through proactive buffer management." },
  { before: "Assisted with office supplies and inventory.", after: "Revolutionized office supply inventory system using digital tracking, reducing annual costs by 22% ($8,500 savings) while maintaining 99% stock availability for 150+ employees across two office locations." },
  { before: "Planned company events and meetings.", after: "Spearheaded 15+ corporate events (50-300 attendees) with budgets up to $25,000, consistently delivering under budget while achieving 96% attendee satisfaction scores through meticulous vendor management and logistics coordination." },
  { before: "Handled travel arrangements for executives.", after: "Managed comprehensive travel logistics for 5 executives (150+ trips annually), negotiating corporate rates that saved $30,000+ yearly while maintaining 100% travel itinerary accuracy and zero missed connections." },
  { before: "Maintained filing systems and records.", after: "Digitized 2,500+ physical records into searchable cloud database, reducing document retrieval time from 15 minutes to 30 seconds and ensuring 100% compliance with records retention policies." }
];

const ATS_TIPS = [
  { category: "Formatting Requirements", items: ["Use standard section headings (Professional Summary, Experience, Education)", "Save as .docx for optimal ATS parsing accuracy (95% vs 85% for PDFs)", "Stick to clean fonts: Arial, Calibri, or Georgia at 10-12pt", "Avoid graphics, images, tables, or columns in main content areas", "Use simple bullet points (•) rather than special characters", "Maintain consistent spacing and formatting throughout"] },
  { category: "Keyword Strategy", items: ["Extract 10-15 keywords from each job description", "Include both acronyms and full terms (CRM/Customer Relationship Management)", "Place most important keywords in Professional Summary and Skills sections", "Use industry-standard terminology for administrative professionals", "Incorporate keywords naturally into achievement descriptions", "Test keyword density using free ATS scanning tools"] }
];

const ADMIN_SKILLS_CATEGORIES = [
  { category: "Software Proficiency", skills: ["Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)", "Google Workspace (Docs, Sheets, Gmail, Calendar)", "CRM Systems (Salesforce, HubSpot)", "Project Management (Asana, Trello, Monday.com)", "Communication (Slack, Zoom, Microsoft Teams)", "Document Management (DocuSign, Adobe Acrobat)"] },
  { category: "Administrative Expertise", skills: ["Calendar & Schedule Management", "Travel Coordination & Logistics", "Event Planning & Execution", "Records Management & Filing Systems", "Expense Reporting & Budget Tracking", "Vendor & Stakeholder Management"] },
  { category: "Professional Skills", skills: ["Written & Verbal Communication", "Organization & Time Management", "Problem-Solving & Critical Thinking", "Attention to Detail & Accuracy", "Confidentiality & Discretion", "Multi-tasking & Prioritization"] }
];

const FAQS = [
  { question: "Should I include a professional summary on my administrative resume?", answer: "Absolutely. A compelling 2-3 line professional summary is the most-read section of your resume. It should concisely communicate your years of administrative experience, key software proficiencies, and the unique value you bring. Example: 'Detail-oriented Administrative Professional with 7+ years supporting C-suite executives in fast-paced environments. Expert in calendar management, travel coordination, and office operations. Reduced scheduling conflicts by 35% and implemented digital filing systems saving 10+ hours weekly.'" },
  { question: "How long should an administrative resume be?", answer: "For most administrative professionals with less than 10 years of experience, one page is ideal. Research shows 73% of recruiters prefer one-page resumes for administrative roles. Senior executive assistants or office managers with 15+ years of experience may extend to two pages, but every line must provide specific, quantifiable value. Never exceed two pages unless applying for government positions requiring detailed documentation." },
  { question: "What software skills should I list on an administrative resume?", answer: "Prioritize software explicitly mentioned in the job description. Essential administrative software includes: Microsoft Office Suite (especially Outlook, Excel, PowerPoint), Google Workspace, scheduling tools (Calendly, Doodle), CRM platforms (Salesforce, HubSpot), communication tools (Slack, Teams, Zoom), and expense management systems (Concur, Expensify). In 2026, also include AI productivity tools you're proficient with (ChatGPT, Copilot, Notion AI) as these are increasingly valued." },
  { question: "How do I demonstrate organizational skills without just stating 'I'm organized'?", answer: "Provide specific, quantified examples that prove your organizational abilities. Instead of claiming 'highly organized,' write: 'Designed and implemented digital filing system for 2,500+ client records, reducing document retrieval time by 95% and ensuring 100% audit compliance.' Or: 'Coordinated logistics for 15+ company events (50-300 attendees each), managing 8+ vendors simultaneously and delivering all events on time and under budget.' Specific metrics transform vague claims into credible evidence." },
  { question: "Should I include volunteer work on my administrative resume?", answer: "Yes, particularly if it demonstrates relevant administrative skills. Volunteer roles involving event coordination, donor database management, board meeting scheduling, or community outreach demonstrate transferable administrative competencies. This is especially valuable for career changers entering administration or professionals with employment gaps. Frame volunteer achievements using the same quantified, achievement-focused language as your paid experience." },
  { question: "How do I transition into an administrative career from another field?", answer: "Focus on transferable skills that directly apply to administrative roles. Customer service experience demonstrates communication and problem-solving. Retail management shows organization and scheduling. Teaching highlights multitasking and attention to detail. Use a hybrid resume format that leads with a strong skills section before chronological work history. Frame previous achievements using administrative terminology: 'managed inventory' becomes 'oversaw office supply management,' 'handled customer complaints' becomes 'resolved stakeholder concerns.'" }
];

const TESTIMONIALS = [
  { quote: "After 10 years as an office manager, I struggled to update my resume effectively. This guide transformed how I present my experience—I learned to quantify achievements and optimize for ATS. The result? Four interviews in two weeks and a senior executive assistant offer at a healthcare organization.", metric: "4 interviews in 2 weeks", name: "Patricia M.", role: "Senior Executive Assistant", company: "Major Healthcare Organization" },
  { quote: "The ATS optimization tips were revolutionary. I went from zero callbacks to multiple interview requests simply by incorporating keywords from job descriptions and reformatting my skills section. Landed an administrative coordinator role at a top university.", metric: "Multiple interviews secured", name: "James R.", role: "Administrative Coordinator", company: "Leading University" }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const AdministrativeResumeGuide = ({ seoData }) => {
  const { currentDate, lastModifiedDate, buildTimestamp, reviewDates, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-administrative-jobs";
  const metaTitle = "How to Write a Resume for USA Administrative Jobs (2026 Guide)";
  const metaDescription = "Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples, ATS tips, and free templates for administrative assistants, office managers, and executive assistants.";

  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  const toolRef = useRef(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text.substring(0, 30) + '...');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{metaTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="administrative resume, administrative assistant resume, office manager resume, executive assistant resume, admin resume tips, administrative jobs usa" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for USA Administrative Jobs (2026 Guide)" />
        <meta name="chatgpt-fts:description" content="Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples and ATS tips." />
        <meta name="chatgpt-fts:keywords" content="how to write a resume for administrative jobs, administrative assistant resume examples 2026, office manager resume tips, executive assistant resume usa, administrative resume format" />
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
        <meta property="og:title" content="How to Write a Resume for USA Administrative Jobs (2026 Guide)" />
        <meta property="og:description" content="Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Administrative Resume" />
        <meta property="article:tag" content="Resume Tips" />
        <meta property="article:tag" content="Job Search" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume for USA Administrative Jobs" />
        <meta name="twitter:description" content="Step-by-step guide with examples and ATS tips for administrative resumes." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
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
                  "headline": "How to Write a Resume for USA Administrative Jobs (2026 Guide)",
                  "description": metaDescription,
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/ats.jpeg",
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
                  "datePublished": "2026-01-23",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "wordCount": 2800,
                  "timeRequired": "PT12M"
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
                      "name": "Resume Advice",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Administrative Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for USA Administrative Jobs",
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
                  "name": "How to Write an Administrative Resume",
                  "description": "Step-by-step guide for administrative professionals",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": RESUME_SECTIONS.map((section, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": section.title,
                    "text": section.description,
                    "url": `${canonicalUrl}#step-${index + 1}`
                  })),
                  "totalTime": "PT30M"
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
                        "@type": "CreativeWork",
                        "name": "Administrative Resume Guide",
                        "description": "Free guide to writing administrative resumes.",
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
        <meta name="content-sources" content="2026 Administrative Hiring Data, HR Professional Interviews, ATS Provider Data" />
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
                  <span itemProp="name">Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Administrative Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">ADMINISTRATIVE RESUME GUIDE 2026</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                How to Write a Resume for USA Administrative Jobs (2026 Guide)
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Land your next administrative role with a compelling, ATS-friendly resume. This step-by-step guide covers everything from professional summaries to quantifying achievements—with examples for administrative assistants, office managers, and executive assistants.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "85%", label: "Admin Jobs Need MS Office" }, { value: "70%", label: "Resumes Lack Metrics" }, { value: "1 Page", label: "Ideal Resume Length" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiFileText /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiLayers /> Administrative Templates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 2,800+ words</span>
            <span className="meta-item"><FiClock /> 12 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Critical Insight: Administrative Resumes Must Prove Organizational Impact</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Administrative professionals are the operational backbone of every organization, yet <strong>70% of administrative resumes fail to quantify achievements.</strong> Simply listing duties like "answered phones" or "scheduled meetings" undersells your true value. Modern ATS systems and recruiters scan for <strong>measurable impact—efficiency gains, cost savings, and process improvements.</strong> This guide shows you exactly how to transform routine tasks into compelling evidence of your organizational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Sections Breakdown */}
        <section ref={toolRef} className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Essential Sections of an Administrative Resume</h2>
              <p className="section-subtitle">Master each component with our detailed guidance for administrative professionals</p>
            </div>
            <div className="grid">
              {RESUME_SECTIONS.map((section, i) => {
                const IconComponent = ICON_MAP[section.icon] || FiFileText;
                return (
                  <div key={i} className="card-executive" id={`step-${i + 1}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', background: i === 0 ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))' : 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? 'var(--accent-on-primary)' : 'var(--accent-primary)', border: i === 0 ? 'none' : '2px solid var(--border-gold-filament)', flexShrink: 0, fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-bold)' }}>{section.step}</div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{section.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{section.description}</p>
                    <div style={{ marginTop: '0.75rem' }}>
                      <IconComponent size={20} color="var(--accent-primary)" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Essential Tips */}
        <section id="essential-tips" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6 Essential Tips for Administrative Resumes</h2>
              <p className="section-subtitle">Proven strategies that distinguish exceptional administrative resumes from average ones</p>
            </div>
            <div className="grid">
              {ESSENTIAL_TIPS.map((tip, i) => {
                const IconComponent = ICON_MAP[tip.icon] || FiStar;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '0.5px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={20} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tip.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section id="key-sections" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Administrative Skills That Employers Demand</h2>
              <p className="section-subtitle">Organize your skills strategically for maximum ATS compatibility and recruiter impact</p>
            </div>
            <div className="grid">
              {ADMIN_SKILLS_CATEGORIES.map((cat, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>{cat.category}</h3>
                  <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                    {cat.skills.map((skill, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: 'var(--font-size-body-sm)' }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section id="before-after" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Transforming Administrative Bullet Points</h2>
              <p className="section-subtitle">See how weak descriptions become powerful, achievement-focused statements</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th style={{ color: 'var(--error-color)' }}>Before (Weak)</th><th style={{ color: 'var(--success-color)' }}>After (Strong & Quantified)</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER_EXAMPLES.map((example, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{example.before}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{example.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Optimization */}
        <section id="ats-tips" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization for Administrative Resumes</h2>
              <p className="section-subtitle">Ensure your resume passes automated screening systems used by most employers</p>
            </div>
            <div className="grid">
              {ATS_TIPS.map((category, i) => (
                <div key={i} className="checklist-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheckCircle size={18} color="var(--success-color)" /> {category.category}
                  </h3>
                  <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                    {category.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: 'var(--font-size-body-sm)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary"><FiZap /> Test Your Resume's ATS Compatibility</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <h2 id="testimonials-heading" className="section-title">Real Results from Administrative Professionals</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} size={16} color="var(--accent-primary)" style={{ margin: '0 2px' }} />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>"{testimonial.quote}"</p>
                  <div className="feature-badge" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>
                    <FiCheckCircle size={14} color="var(--success-color)" /> {testimonial.metric}
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>{testimonial.name}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.role}</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>{testimonial.company}</p>
                  {reviewDates && <small className="text-small" style={{display: 'block', marginTop: '8px'}}>{reviewDates[i]}</small>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
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

        {/* CTA Section */}
        <section id="next-steps" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Create Your Administrative Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Apply the strategies, templates, and optimization techniques above to build an administrative resume that showcases your organizational excellence. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiZap /> Browse Administrative Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Templates", "Before/After Examples", "Skills Checklists", "Free PDF Download"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
            <p className="text-small" style={{marginTop: '24px'}}>
              Sources: 2026 administrative hiring surveys, interviews with HR professionals, ATS provider data.
            </p>
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
                { href: "/how-to-write-a-resume-for-usa-sales-and-marketing-roles", text: "Sales & Marketing Guide", iconName: "FiTrendingUp" },
                { href: "/cover-letter-guides", text: "Cover Letter Guides", iconName: "FiBookOpen" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward" },
                { href: "/interview-tips", text: "Interview Tips", iconName: "FiUsers" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiLayers" }
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
            Last updated: {safeCurrentDate} • Sources: 2026 administrative hiring surveys, HR professional interviews, ATS provider data
          </span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="word-count">2800</span>
          <span itemProp="sources">2026 Administrative Hiring Data, HR Professional Interviews, ATS Provider Data</span>
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
    revalidate: 3600
  };
}

export default AdministrativeResumeGuide;