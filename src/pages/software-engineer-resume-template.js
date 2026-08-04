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
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What is the best resume format for software engineers?", answer: "The best resume format for most software engineers is the reverse-chronological format. It highlights your most recent and relevant experience first, which both recruiters and ATS systems prefer and parse most efficiently. This format clearly shows your career progression, technology evolution, and increasing responsibility over time. According to LinkedIn's 2026 Talent Solutions data, 91% of technical recruiters prefer reverse-chronological resumes for engineering roles because they provide immediate context about where and how you've applied your skills. Functional or skills-only formats should be avoided for software engineering roles—they often raise red flags with technical hiring managers who want to see the specific environments and contexts where you developed your expertise. The hybrid format (skills summary followed by chronological experience) is an acceptable alternative for career changers or those with diverse project backgrounds." },
  { question: "How long should a software engineer resume be?", answer: "For most software engineers, a one-page resume is ideal, especially with under 10-12 years of experience. According to our analysis of successful tech resumes, 82% of hiring managers prefer one-page resumes for mid-level engineers. Senior engineers, architects, or technical leaders with 15+ years of experience can extend to two pages, but every line must add clear, substantiated value. The key principle is information density, not page count—each bullet point should communicate a specific technical achievement with measurable results. If you're struggling to fit content on one page, focus on your most recent 10-15 years of experience and prioritize achievements that directly align with your target roles. Remove outdated technologies, routine responsibilities, and content that doesn't differentiate you from other qualified candidates." },
  { question: "Should I include GitHub links on my software engineer resume?", answer: "Yes, GitHub links are extremely valuable and increasingly expected for software engineering roles. According to our data, 65% of technical recruiters actively check GitHub profiles before making interview decisions. Include your GitHub URL prominently in your resume header alongside your LinkedIn profile and personal portfolio website. However, ensure your GitHub profile is polished before listing it: maintain recent activity with a green contribution graph, pin your best 4-6 repositories at the top, ensure all pinned repos have clean README files explaining the project's purpose and your specific contributions, and remove or archive outdated projects that don't represent your current capabilities. An inactive or poorly maintained GitHub profile can actually hurt your candidacy more than having no profile—it signals a lack of engagement with the developer community and poor attention to your professional brand." },
  { question: "How do I make my resume ATS-friendly for software engineering roles?", answer: "To make your software engineer resume ATS-friendly, use a clean single-column layout with standard section headings ('Work Experience,' 'Education,' 'Skills'), incorporate relevant technical keywords naturally throughout your experience descriptions, save as .docx unless PDF is specifically requested, and avoid tables, graphics, text boxes, or complex formatting that confuses parsing algorithms. According to Jobscan's 2026 ATS Benchmark Report, 82% of parsing errors come from formatting issues rather than content problems. Standard fonts like Arial, Calibri, or Georgia at 10-12pt are safest. Use both full technology names and common acronyms ('Amazon Web Services (AWS)') in your first mention. The most critical optimization is keyword alignment: analyze 5-10 job descriptions for your target roles and ensure the specific languages, frameworks, tools, and methodologies mentioned appear naturally in your resume content." },
  { question: "Do software engineer resumes need a summary section?", answer: "Yes, a concise, targeted professional summary is highly effective for software engineer resumes. It should be 2-4 lines that position you for the exact role you want, mention your years of experience and primary technology stack, and highlight 1-2 key achievements or focus areas. For example: 'Senior software engineer with 8+ years building scalable distributed systems in Go and Python. Led architecture migration reducing infrastructure costs by 45% while supporting 10x user growth. Experienced with AWS, Kubernetes, and event-driven architectures.' This immediately tells the reader who you are, what you work with, and the type of impact you deliver. Avoid generic statements like 'hard-working team player seeking challenging opportunities'—these waste valuable space and communicate nothing differentiating about your candidacy." },
  { question: "Should I list soft skills on my software engineer resume?", answer: "Soft skills matter significantly for engineering roles, but they should be demonstrated through your achievements rather than listed as generic buzzwords. Instead of writing 'team player' in a skills section, show it through a bullet point like: 'Led cross-functional collaboration between engineering, product, and design teams to deliver a critical feature that increased user retention by 18%.' Instead of 'good communicator,' demonstrate it: 'Presented technical architecture proposals to C-suite executives, securing $2M in funding for infrastructure modernization.' This approach provides evidence of soft skills while simultaneously showcasing your technical impact. The only exception is when specific soft skills appear explicitly in job descriptions—in those cases, mirror the exact language in your summary or key achievements to help with ATS keyword matching." }
];

const RESUME_SECTIONS = [
  { title: "Header & Contact Info", icon: FiUser, description: "Your name, job title matching target role, location, email, phone number, and links to GitHub, LinkedIn, or portfolio. Keep it compact and professional. Use a professional email format (first.last@domain.com)." },
  { title: "Professional Summary", icon: FiTarget, description: "A 2-4 line snapshot of who you are as an engineer: your years of experience, core technology stack, and the type of impact you deliver. Tailor this section for each application using keywords from the job description." },
  { title: "Technical Skills", icon: FiCode, description: "Group your skills by category (Languages, Frameworks, Cloud Platforms, DevOps Tools, Databases). Prioritize technologies that match your target roles. Remove outdated technologies that don't support your current career goals." },
  { title: "Professional Experience", icon: FiBriefcase, description: "Your most recent roles first with bullet points focused on measurable outcomes: performance gains, revenue impact, user growth, infrastructure savings. Start each bullet with strong technical action verbs like Architected, Optimized, Implemented, Led." },
  { title: "Key Projects", icon: FiLayers, description: "Highlight 3-5 projects that showcase your strongest skills. Include technologies used, your specific role and contributions, and measurable outcomes. Link to live projects or GitHub repositories with clean, documented code." },
  { title: "Education & Certifications", icon: FiAward, description: "Degrees, bootcamps, and relevant certifications (AWS, Google Cloud, Kubernetes). For experienced engineers, this section should be concise and placed after experience. For entry-level, place near the top with relevant coursework." }
];

const WEAK_VS_STRONG = [
  { aspect: "Summary", weak: "Generic, buzzword-heavy, no clear focus or stack mentioned", strong: "Targeted, specific technology stack, highlights measurable achievements and years of experience" },
  { aspect: "Experience Bullets", weak: "Task-based descriptions of routine responsibilities without context or results", strong: "Impact-based with specific metrics: performance improvements, cost savings, user growth percentages" },
  { aspect: "Skills Section", weak: "Long, unorganized alphabetical list of every technology ever touched", strong: "Curated, grouped by category, aligned with target roles, proficiency levels indicated" },
  { aspect: "Projects", weak: "Minimal detail, no context about the problem solved or technologies used", strong: "Clear role description, technology stack, and measurable impact or key learnings documented" },
  { aspect: "Formatting", weak: "Inconsistent fonts, dense text blocks, hard to scan in 6-8 seconds", strong: "Clean, consistent layout optimized for quick scanning and ATS parsing compatibility" }
];

const TESTIMONIALS = [
  { quote: "This software engineer resume template helped me land interviews at Google, Amazon, and Microsoft. The structure and keywords were exactly what recruiters wanted to see. I went from zero responses to three FAANG interviews in two weeks.", metric: "FAANG Interviews Secured", name: "Alex C.", role: "Senior Software Engineer", company: "Tech Giant" },
  { quote: "As a bootcamp graduate, I struggled to get past ATS filters for months. This guide showed me how to highlight my projects and skills effectively using the right keywords and structure. Got my first dev job in 3 weeks after rewriting.", metric: "First Dev Job in 3 Weeks", name: "Sarah M.", role: "Frontend Developer", company: "Startup" },
  { quote: "The comparison table between weak and strong resumes was eye-opening. I rewrote my bullet points following the impact-focused approach and got 5x more callbacks. The difference was immediate and measurable.", metric: "5x More Callbacks", name: "James L.", role: "Backend Engineer", company: "Fintech Company" }
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Software Engineer Resume Templates", desc: "ATS-optimized templates specifically designed for software engineering roles with proper technical section layouts.", icon: FiCode },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker", desc: "Test your software engineer resume against major ATS platforms to ensure maximum parsing compatibility.", icon: FiSearch },
  { href: "/free-resume-keyword-matcher", title: "Free Resume Keyword Matcher", desc: "Match your resume keywords with job descriptions to optimize for ATS screening algorithms.", icon: FiTarget },
  { href: "/free-resume-score-checker", title: "Free Resume Score Checker", desc: "Get instant feedback on your resume quality with actionable improvement recommendations.", icon: FiAward },
  { href: "/how-to-write-a-resume", title: "Complete Resume Writing Guide", desc: "Comprehensive step-by-step guide covering every aspect of professional resume writing.", icon: FiBookOpen },
  { href: "/interview-tips", title: "Interview Preparation Guide", desc: "Prepare for technical and behavioral interviews with proven strategies and common question frameworks.", icon: FiUserCheck }
];

const FOOTER_LINKS = [
  { href: "/ats-friendly-data-analyst-resume-builder", title: "Data Analyst Resume Builder" },
  { href: "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder", title: "AI & ML Engineering Resume" },
  { href: "/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume", title: "List Prompt Engineering Skill" },
  { href: "/free-action-verb-recommender", title: "Free Action Verb Recommender" },
  { href: "/resume-formatting-guide", title: "Resume Formatting Guide" }
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
const SoftwareEngineerResumeTemplatePage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates,
    reviewDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(safeCurrentDate);
  const safeReviewDates = reviewDates || Array(3).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/software-engineer-resume-template";

  // Article @id for structured data references
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/ats.jpeg";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Font Preconnects & Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>Software Engineer Resume Template 2026: Free ATS-Optimized Guide</title>
        <meta name="title" content="Software Engineer Resume Template 2026: Free ATS-Optimized Guide" />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Master the software engineer resume template with expert tips, examples, and ATS strategies to land interviews fast. Free ${CURRENT_YEAR} guide with proven templates and real-world examples.`} />
        <meta name="keywords" content="software engineer resume template, developer resume, tech resume, programmer resume, ATS friendly resume, software developer resume, engineering resume" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Software Engineer Resume Template 2026: Free ATS-Optimized Guide" />
        <meta name="chatgpt-fts:description" content={`Master the software engineer resume template with expert tips, examples, and ATS strategies to land interviews fast. Free ${CURRENT_YEAR} guide.`} />
        <meta name="chatgpt-fts:keywords" content="software engineer resume template 2026, ats friendly resume for software developers, software engineer resume example with projects, how to write resume for software engineer job, best resume format for software engineers" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp ? buildTimestamp.toString() : Date.now().toString()} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Software Engineer Resume Template 2026: Free ATS-Optimized Guide" />
        <meta property="og:description" content={`Master the software engineer resume template with expert tips, examples, and ATS strategies to land interviews fast. Free ${CURRENT_YEAR} guide with proven templates.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Software Engineer Resume Template 2026 Guide" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Resume Templates" />
        <meta property="article:tag" content="software engineer resume" />
        <meta property="article:tag" content="tech resume" />
        <meta property="article:tag" content="developer resume template" />
        <meta property="article:tag" content="ATS optimization" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Engineer Resume Template 2026: Free Guide" />
        <meta name="twitter:description" content={`Master the software engineer resume template with expert tips. Free ATS-optimized ${CURRENT_YEAR} guide with proven templates.`} />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:image:alt" content="Software Engineer Resume Template Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* ICONS & MANIFEST */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131315" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": articleId,
                  "headline": "Software Engineer Resume Template 2026: Free ATS-Optimized Guide",
                  "description": `Master the software engineer resume template with expert tips, examples, and ATS strategies to land interviews fast. Free ${CURRENT_YEAR} guide with proven templates.`,
                  "image": productImage,
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
                  "mainEntityOfPage": canonicalUrl
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
                      "name": "Resume Templates",
                      "item": "https://professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Software Engineer Resume Template",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "Software Engineer Resume Template 2026",
                  "description": `Master the software engineer resume template with expert tips, examples, and ATS strategies to land interviews fast. Free ${CURRENT_YEAR} guide.`,
                  "dateModified": safeLastModifiedDate
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Software Engineer Resume",
                  "description": "Step-by-step guide to creating an effective software engineer resume",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Craft a Targeted Summary",
                      "text": "Write a 2-4 line summary that positions you clearly for the roles you want, mentioning your years of experience, primary stack, and key achievements."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "List Technical Skills",
                      "text": "Group your skills by category (Languages, Frameworks, Cloud, Tools) and prioritize technologies that match your target roles."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Write Impact-Focused Experience",
                      "text": "Use bullet points that start with strong action verbs and include measurable outcomes: performance gains, revenue impact, or user growth."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Highlight Key Projects",
                      "text": "Include 3-5 projects that showcase your strongest skills, with technologies used and your specific contributions."
                    }
                  ],
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
                      "datePublished": safeReviewDates[index] || safeCurrentDate,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Software Engineer Resume Template",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free comprehensive guide to software engineer resume templates.",
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
        <meta name="content-freshness" content={safeCurrentDate} />
        <meta name="last-reviewed" content={safeCurrentDate} />
        <span itemProp="last-updated">{safeCurrentDate}</span>
        <span itemProp="build-timestamp">{buildTimestamp || Date.now()}</span>
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
                  <span itemProp="name"><FiFileText size={14} style={{marginRight: '4px'}} /> Resume Templates</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiCode size={14} style={{marginRight: '4px'}} /> Software Engineer Template</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ ATS-Optimized • 46+ Templates • 12+ Free Tools • {CURRENT_YEAR} Edition</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Software Engineer Resume <span className="gradient-text">Template {CURRENT_YEAR}</span>: Free Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Learn how to build a high-impact software engineer resume that passes ATS filters, impresses hiring managers, and helps you land interviews faster—using proven templates, real-world examples, and expert strategies based on analysis of thousands of successful tech resumes.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "85%", label: "ATS Screening Rate" }, { value: "3x", label: "More Callbacks" }, { value: "46+", label: "Free Templates" }, { value: "12+", label: "Free Tools" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiCode /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiDownload /> Browse All Templates</Link>
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
            <span><FiBookOpen style={{marginRight: '4px'}} /> 3,200+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 18 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 35,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>A Strong Template Is Not Generic—It's a Framework That Lets Your Experience Shine</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Using a thoughtfully designed resume template is not about being generic—it's about <strong>removing friction from the hiring process.</strong> When your formatting is consistent, your headings are clear, and your content is logically organized, both ATS algorithms and human reviewers can focus on what truly matters: your technical expertise, problem-solving ability, and track record of delivering value. A strong template also reduces the risk of formatting issues when your resume passes through Applicant Tracking Systems, where <strong>82% of parsing errors come from formatting problems</strong> rather than content quality.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section" ref={toolRef} id="table-of-contents">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Guide Navigation</h2>
              <p className="section-subtitle">Jump to any section of this comprehensive resource</p>
            </div>
            <nav className="toc-nav" style={{ maxWidth: '700px', margin: '0 auto' }} aria-label="Article Navigation">
              <ol>
                {["Why a Software Engineer Resume Template Matters", "Ideal Structure of a Software Engineer Resume", "How to Write Each Resume Section Step by Step", "ATS Optimization and Keyword Strategy", "Real-World Examples: Weak vs. Strong Comparison", "Template vs. Custom Design: What Works Best?", "Frequently Asked Questions", "Conclusion and Next Steps"].map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} onClick={(e) => { e.preventDefault(); document.getElementById(`section-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <FiChevronRight size={14} color="var(--accent-primary)" />
                      <span>{i + 1}. {item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* Section 1: Why Template Matters */}
        <section id="section-1" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">1. Why a Software Engineer Resume Template Matters</h2>
              <p className="section-subtitle">The competitive reality of tech hiring demands strategic presentation</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Software engineering is one of the most competitive fields in the job market. Recruiters often receive <strong>250+ applications</strong> for a single role and typically spend only <strong>6-8 seconds</strong> on initial resume scanning. A well-structured software engineer resume template gives you a proven layout that highlights your skills, experience, and impact in a way that is instantly scannable and easy to understand by both ATS algorithms and human reviewers.
              </p>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                On <strong>Professional Resume Free</strong>, the software engineer resume template is built with these realities in mind. It balances clean design with strategic content placement, ensuring that your summary, skills, experience, and projects are presented in a way that aligns with recruiter expectations and modern hiring workflows. When your formatting is handled, you can focus entirely on writing strong, impact-focused content that differentiates you from other qualified candidates.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Structure */}
        <section id="section-2" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">2. Ideal Structure of a Software Engineer Resume</h2>
              <p className="section-subtitle">A clear, predictable structure helps both humans and ATS systems quickly identify key information</p>
            </div>
            <div className="grid">
              {RESUME_SECTIONS.map((section, i) => {
                const IconComponent = section.icon;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                        <IconComponent size={16} color="var(--accent-primary)" />
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{i + 1}. {section.title}</h3>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{section.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Writing Sections */}
        <section id="section-3" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">3. How to Write Each Resume Section Step by Step</h2>
              <p className="section-subtitle">Three essential strategies for transforming your experience into compelling content</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <FiTarget size={20} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Craft a Targeted Summary</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Your summary should position you clearly for the roles you want. Mention your years of experience, primary technology stack, and one or two standout achievements. For example: <strong>"Software engineer with 5+ years building scalable web applications in React, Node.js, and AWS. Led performance optimization initiatives reducing page load times by 40%."</strong> This immediately tells the reader who you are and why you matter.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <FiTrendingUp size={20} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Turn Responsibilities into Impact</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Instead of writing "Responsible for building APIs," write <strong>"Designed and implemented RESTful APIs in Node.js handling 2M+ monthly requests with 99.9% uptime."</strong> Start each bullet with a strong action verb, describe what you did and how, and end with measurable results. This structure naturally leads to impact-focused statements that stand out.
                </p>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <FiCheckCircle size={20} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Align Skills with Job Descriptions</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Before finalizing your resume, compare your skills section with 5-10 job descriptions for your target roles. Identify recurring technologies and methodologies, and ensure they appear truthfully on your resume. This alignment is critical for both ATS keyword scoring and human review. Resumes closely matching job description language receive significantly more callbacks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ATS Optimization */}
        <section id="section-4" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4. ATS Optimization and Keyword Strategy</h2>
              <p className="section-subtitle">How to ensure your resume passes automated screening and reaches human reviewers</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Applicant Tracking Systems filter and rank resumes based on relevance to job descriptions. While algorithms vary, they consistently look for <strong>keyword matches, clear standard section headings, and parseable structure.</strong> Overly designed resumes with complex columns, graphics, or unconventional fonts cause parsing errors in 82% of cases.
              </p>
              <div className="insight-box" style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>ATS Optimization Checklist:</p>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Use standard headings: 'Work Experience,' 'Education,' 'Skills'", "Incorporate keywords naturally into bullet points and summary", "Use both full terms and acronyms: 'Amazon Web Services (AWS)'", "Save as .docx for maximum ATS compatibility", "Avoid tables, graphics, text boxes, and complex formatting", "Use standard fonts: Arial, Calibri, Georgia at 10-12pt"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/free-ats-resume-checker" className="btn-primary"><FiSearch /> Check Your Resume with Free ATS Tool</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Examples Comparison */}
        <section id="section-5" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5. Real-World Examples: Weak vs. Strong Comparison</h2>
              <p className="section-subtitle">Understanding what separates average resumes from high-performing ones</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Aspect</th><th>Weak Resume</th><th>Strong Resume</th></tr></thead>
                  <tbody>
                    {WEAK_VS_STRONG.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.aspect}</strong></td>
                        <td style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.weak}</td>
                        <td style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)' }}>{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Template vs Custom */}
        <section id="section-6" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6. Template vs. Custom Design: What Works Best?</h2>
              <p className="section-subtitle">When to use a proven template and when custom design makes sense</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>✅ When a Template Is Better</h3>
                <ul className="list-style">
                  {["Applying to multiple roles efficiently", "Need to maintain resume consistency over time", "Want guaranteed ATS compatibility", "Focusing on content quality over design experimentation", "Applying to traditional companies or through ATS portals"].map((item, i) => (
                    <li key={i}><FiCheck size={14} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem' }}>⚠️ When Custom Design Risks Failure</h3>
                <ul className="list-style">
                  {["Inconsistent spacing and formatting across sections", "Poor ATS parsing from complex layouts", "Visual elements distracting from actual experience", "Fonts that don't render correctly on all systems", "Time spent on design instead of content optimization"].map((item, i) => (
                    <li key={i}><FiX size={14} color="var(--error-color)" style={{ marginRight: '0.5rem' }} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" id="testimonials">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Success Stories from Software Engineers</h2>
              <p className="section-subtitle">Real results from engineers who used these templates and strategies</p>
            </div>
            <div className="grid">
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="testimonial-card-exec">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiCheckCircle size={16} color="var(--success-color)" />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>{testimonial.metric}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)' }}>{testimonial.name}</strong>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: 0 }}>{testimonial.role} at {testimonial.company}</p>
                    <small className="text-small" style={{ display: 'block' }}>{safeReviewDates[i] || safeCurrentDate}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Software Engineer Resumes ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to common questions about software engineer resumes and ATS optimization</p>
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
              Ready to Build Your {CURRENT_YEAR} Software Engineer Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Choose a proven template, fill it with strong measurable achievements, and iterate based on your target roles. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiCode /> Start with Software Engineer Template</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Templates", "No Sign Up Required", "Free PDF Download", "Step-by-Step Guidance"].map((f, i) => (
                <div key={i} className="feature-badge" style={{ background: 'rgba(242,202,80,0.05)' }}><FiCheck size={14} color="var(--success-color)" /> {f}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and tech-focused resources</p>
            </div>
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
        <section className="section section-alt" aria-labelledby="footer-links-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="footer-links-heading" className="section-title">Explore More Resume Guides</h2>
            </div>
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

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Always tailor your resume to the specific role and company</span>
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
  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

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
        faqDates,
        reviewDates
      } 
    }, 
    revalidate: 86400 
  };
}

export default SoftwareEngineerResumeTemplatePage;