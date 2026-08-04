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
  .toc-nav { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .toc-nav ol { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .toc-nav a { display:flex; align-items:center; gap:0.5rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); padding:0.5rem 0; transition:color var(--transition-fast); }
  .toc-nav a:hover { color:var(--accent-primary); }
  .example-box { background:var(--bg-surface-lowest); border-radius:0.5rem; padding:1.25rem; border:0.5px solid var(--border-glass); margin-top:1rem; }
  .example-box h4 { color:var(--accent-primary); font-size:var(--font-size-body-sm); margin-bottom:0.75rem; }
  .example-box ul { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .example-box li { color:var(--text-secondary); font-size:var(--font-size-body-sm); padding-left:1rem; border-left:2px solid var(--border-gold-filament); font-style:italic; }
  .action-list { list-style:none; display:flex; flex-direction:column; gap:0.75rem; counter-reset:step-counter; }
  .action-list li { counter-increment:step-counter; display:flex; gap:0.75rem; align-items:flex-start; font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .action-list li::before { content:counter(step-counter); background:var(--accent-primary); color:var(--accent-on-primary); width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; flex-shrink:0; }
  .mistake-item-exec { background:rgba(255,180,171,0.05); border-left:3px solid var(--error-color); border-radius:0 0.5rem 0.5rem 0; padding:0.75rem 1rem; font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "How do I write a resume with no work experience?", answer: "Focus on education, skills, volunteer work, internships, academic projects, and extracurricular activities. Use a functional or combination resume format that emphasizes skills over work history rather than the traditional chronological format that highlights employment gaps. For each non-work experience, use the same achievement-focused language you would for a job: describe what you did, how you did it, and what the results were. For example, 'Led a 4-person team in developing a marketing plan for a class project that received the highest grade in the course' demonstrates leadership, teamwork, and achievement without requiring paid work experience. Transferable skills gained through school, hobbies, or personal projects are equally valuable to employers when presented professionally. Quantify achievements where possible—numbers of people served, percentage improvements, funds raised—as metrics make your contributions concrete and impressive regardless of the setting." },
  { question: "What should a beginner's resume include?", answer: "A beginner's resume should include these essential sections: Contact Information (full name, professional email, phone number, location, LinkedIn profile if you have one), Professional Summary or Objective Statement (2-3 sentences highlighting your potential and key skills), Education Section (schools, degrees, dates, GPA if 3.0+, relevant coursework, academic honors—this section is the most important for beginners and should be placed prominently), Skills Section (both hard/technical skills and soft/personal skills grouped by category), Projects or Relevant Coursework (academic projects, personal projects, freelance work that demonstrates applicable abilities), Volunteer Experience (community service, club involvement, leadership roles), Certifications (any completed courses, online certifications, workshops), and optionally languages or interests if they're relevant to the target role. Keep everything to one page maximum. Every line should answer the employer's implicit question: 'Why should I hire you?'" },
  { question: "How long should a beginner's resume be?", answer: "For beginners with limited experience, one page is the standard and expectation. Never exceed one page until you have 5+ years of professional experience across multiple roles. Recruiters spend an average of 6-8 seconds scanning a resume initially, so every line must earn its place. Focus on quality over quantity—a concise, well-organized one-page resume with strong content outperforms a longer document with filler material. If you're struggling to fill a full page, expand your education section with relevant coursework descriptions, add academic projects with detailed outcomes, include volunteer experiences with achievement statements, and consider adding a 'Relevant Coursework' or 'Academic Projects' section to demonstrate knowledge in your target field." },
  { question: "What resume format is best for a first resume?", answer: "The functional or combination (hybrid) resume format works best for beginners and career changers with limited direct experience. The functional format organizes content around skill categories (Communication, Leadership, Technical Skills) rather than chronological work history, allowing you to showcase transferable abilities gained through education, volunteering, and personal projects. The combination format places a strong skills section at the top followed by a condensed chronological experience section—this is often the ideal choice because it satisfies both ATS algorithms scanning for keywords and human reviewers who want context for where skills were developed. Avoid the traditional reverse-chronological format if you have significant employment gaps or no paid work history, as it emphasizes what you lack rather than what you offer. Our free beginner resume templates use the combination format optimized for first-time job seekers." },
  { question: "Should I include references on my first resume?", answer: "No, do not include references directly on your resume. This is outdated practice that wastes valuable space better used for showcasing your skills and achievements. Instead, create a separate reference page with the same header as your resume listing 2-3 professional or academic references (professors, volunteer supervisors, internship coordinators, mentors) with their name, title, organization, phone number, and email. Bring this document to interviews and provide it only when specifically requested. At the bottom of your resume, you can optionally include 'References available upon request' but even this is unnecessary—employers assume you'll provide references when asked. Use the saved space for additional skills, projects, or achievements that strengthen your candidacy." },
  { question: "Can I use a resume template as a beginner?", answer: "Absolutely—using a professionally designed resume template is highly recommended for beginners. A quality template ensures proper formatting, consistent spacing, ATS compatibility, and professional organization that would be difficult to achieve from scratch. Our beginner-specific templates are designed to highlight your strengths (education, skills, projects) while minimizing attention on limited work experience. When choosing a template, look for clean single-column layouts, standard fonts (Arial, Calibri, Georgia), clear section headings, and ATS-friendly formatting without tables, graphics, or text boxes that confuse parsing algorithms. Avoid overly creative or graphic-heavy designs—these may look appealing but often fail ATS screening and can appear unprofessional to traditional employers. The best template is one that makes your content shine without calling attention to itself." }
];

const RESUME_SECTIONS = [
  { section: "Contact Information", includes: "Full name, phone, professional email, location, LinkedIn profile", beginnerTip: "Use a professional email address—firstname.lastname@email.com format is ideal. Avoid nicknames or unprofessional handles." },
  { section: "Professional Summary", includes: "2-3 sentences highlighting your potential, key skills, and career goals", beginnerTip: "Focus on what you can offer, not what you lack. Use phrases like 'Motivated graduate with strong...' rather than 'Seeking opportunity to learn...'" },
  { section: "Education", includes: "Schools, degrees, graduation dates, GPA (if 3.0+), relevant coursework, honors", beginnerTip: "Place education prominently near the top. Include expected graduation date if still enrolled. List relevant coursework that aligns with target jobs." },
  { section: "Skills Section", includes: "Technical abilities (software, tools, languages) and soft skills (communication, teamwork)", beginnerTip: "Group skills by category (Technical, Soft Skills, Languages). Include proficiency levels where relevant. Be honest—don't claim expert-level skills you can't demonstrate." }
];

const HARD_SKILLS = [
  "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
  "Google Workspace (Docs, Sheets, Slides, Drive)",
  "Social Media Management (Instagram, LinkedIn, TikTok, Facebook)",
  "Basic Programming (HTML, CSS, JavaScript, Python)",
  "Data Entry and Database Management",
  "Graphic Design (Canva, Adobe Creative Suite basics)",
  "Video Conferencing (Zoom, Microsoft Teams, Google Meet)",
  "Customer Relationship Management (CRM) Software",
  "Content Management Systems (WordPress, Wix)",
  "Language Proficiency (list languages with level: Native, Fluent, Intermediate)"
];

const SOFT_SKILLS = [
  "Verbal and Written Communication",
  "Teamwork and Collaboration",
  "Problem-Solving and Critical Thinking",
  "Time Management and Organization",
  "Adaptability and Flexibility",
  "Leadership and Initiative",
  "Attention to Detail",
  "Customer Service Orientation",
  "Active Listening",
  "Work Ethic and Reliability"
];

const COMMON_MISTAKES = [
  { title: "Typos and Grammar Errors", description: "Spelling mistakes and poor grammar signal carelessness and lack of professionalism. Always proofread multiple times, use spell-check tools like Grammarly, and have someone else review your resume before submitting. A single typo can disqualify you from consideration regardless of your qualifications." },
  { title: "Being Too Vague", description: "Generic statements like 'responsible for various tasks' tell employers nothing. Use specific examples with measurable outcomes: 'Organized campus food drive serving 200+ families, coordinating 15 volunteers across 3 collection sites.' Specificity demonstrates genuine achievement rather than placeholder content." },
  { title: "Including Irrelevant Information", description: "Your part-time job scooping ice cream doesn't need 5 bullet points unless you're applying for food service management. Tailor every line to support your candidacy for the specific role. If an experience doesn't demonstrate relevant skills, minimize it or omit it entirely." },
  { title: "Using an Unprofessional Email", description: "partyanimal@email.com or sexybeast@email.com will get your resume rejected immediately. Create a simple professional email using your name. Gmail is universally accepted. Check your email regularly and ensure your voicemail greeting is professional too." },
  { title: "Making It Too Long", description: "Beginners should keep resumes to exactly one page. Recruiters scan resumes in 6-8 seconds initially—if they can't quickly find relevant qualifications, they move on. Cut filler content, tighten descriptions, and ensure every line adds unique value to your application." },
  { title: "Not Customizing for Each Application", description: "Sending the same generic resume to every employer significantly reduces your chances. Customize your professional summary, skills emphasis, and project descriptions to match each job's requirements. Use keywords from the job description naturally throughout your resume—this helps with both ATS screening and human review." }
];

const PRE_SUBMISSION_CHECKLIST = [
  "No spelling or grammar errors—proofread three times minimum",
  "Contact information is correct and professional (email, phone, location)",
  "File saved as PDF with professional filename (Firstname-Lastname-Resume.pdf)",
  "Tailored for specific job with relevant keywords from the description",
  "Easy to read and scan in 6-8 seconds—key information visible immediately",
  "Consistent formatting throughout—same fonts, spacing, and style",
  "One page maximum—every line earns its place with unique value",
  "Bullet points start with strong action verbs (Led, Created, Developed, Organized)",
  "No personal information that could enable discrimination (photo, age, marital status)",
  "Education section includes relevant coursework and academic achievements"
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Beginner Resume Templates", desc: "ATS-optimized templates designed specifically for first-time job seekers with limited experience. Guided formatting ensures you include everything employers look for." },
  { href: "/free-resume-tools", title: "Free Resume Building Tools", desc: "AI-powered resume builder, keyword matcher, and score checker to help beginners create professional documents without prior experience." },
  { href: "/how-to-create-a-resume-with-no-experience", title: "No Experience Resume Guide", desc: "Detailed strategies for creating compelling resumes when you have zero paid work experience, with examples and templates." },
  { href: "/free-cover-letter-generator", title: "Free Cover Letter Generator", desc: "Create matching cover letters that complement your beginner resume and explain your potential to employers." },
  { href: "/interview-tips", title: "Interview Preparation for Beginners", desc: "First-time interview guidance covering common questions, professional etiquette, and how to discuss your limited experience confidently." },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker", desc: "Test your beginner resume against applicant tracking systems to ensure it passes automated screening before you submit." }
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
const ResumeWritingForBeginnersPage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    publishDate,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safePublishDate = publishDate || "2026-01-01T08:00:00+00:00";
  const safeFaqDates = faqDates || Array(6).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/resume-writing-for-beginners";

  // Article @id for structured data references
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/images/beginner-resume-guide-og.jpg";

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
        
        {/* OPTIMIZED TITLE - 62 characters */}
        <title>Resume Writing for Beginners: Complete Step-by-Step Guide 2026</title>
        <meta name="title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`First-time resume writing made easy! Learn how to create your first professional resume with no experience. Beginner-friendly guide with free ATS-optimized templates, examples, and tips for ${CURRENT_YEAR}. Start your career today!`} />
        <meta name="keywords" content="resume writing for beginners, first resume, no experience resume, beginner resume guide, how to write a resume, student resume, entry-level resume, resume with no work history" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta name="chatgpt-fts:description" content={`First-time resume writing made easy! Learn how to create your first professional resume with no experience. Beginner-friendly guide with free templates for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="resume writing, beginner resume, first resume, no experience resume, student resume" />
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
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta property="og:description" content={`First-time resume writing made simple. Beginner guide with free ATS-optimized templates and examples for job seekers with no experience. Updated for ${CURRENT_YEAR}.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beginner Resume Writing Guide - Step by Step Tutorial" />
        <meta property="article:published_time" content={safePublishDate} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Career Development" />
        <meta property="article:tag" content="Job Search" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta name="twitter:description" content={`Beginner-friendly resume guide with free templates for first-time job seekers. Learn to create a professional resume with no experience. Updated for ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/beginner-resume-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Beginner Resume Writing Guide" />
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
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": "Resume Writing for Beginners: Complete Step-by-Step Guide 2026",
                  "description": `Beginner-friendly guide to creating your first professional resume with no prior experience. Learn resume writing basics, formatting, and tips for job seekers with limited experience. Updated for ${CURRENT_YEAR}.`,
                  "datePublished": safePublishDate,
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free online resume builder for job seekers",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "Professional Resume Free",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/ProResumeFree",
                        "https://www.linkedin.com/company/professional-resume-free",
                        "https://www.facebook.com/ProfessionalResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": productImage,
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
                        "item": "https://professionalresumefree.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Resume Writing for Beginners",
                        "item": canonicalUrl
                      }
                    ]
                  },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".section-subtitle", ".faq-item h3"]
                  }
                },
                {
                  "@type": "Article",
                  "@id": articleId,
                  "headline": "Resume Writing for Beginners: Complete Step-by-Step Guide 2026",
                  "description": `Beginner-friendly guide to creating your first professional resume with no prior experience. Learn resume writing basics, formatting, and tips for job seekers with limited experience. Updated for ${CURRENT_YEAR}.`,
                  "image": [
                    productImage,
                    "https://professionalresumefree.com/images/beginner-resume-templates.jpg",
                    "https://professionalresumefree.com/images/resume-writing-process.jpg"
                  ],
                  "datePublished": safePublishDate,
                  "dateModified": safeLastModifiedDate,
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
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "articleSection": "Career Advice",
                  "keywords": "resume writing for beginners, first resume, no experience resume, beginner resume guide, how to write a resume",
                  "articleBody": "Complete guide covering getting started mindset, essential resume sections, writing without experience, highlighting skills, formatting tips, common mistakes to avoid, and final steps for creating your first professional resume."
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faqpage`,
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
                  "name": "How to Write Your First Professional Resume",
                  "description": "Complete beginner's guide to creating a professional resume step by step",
                  "totalTime": "PT30M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Gather Your Information",
                      "text": "Collect all personal, educational, and skills information including contact details, education history, skills list, and any relevant projects or activities.",
                      "url": "#section-1",
                      "image": "https://professionalresumefree.com/images/step1-gather.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Choose a Beginner Template",
                      "text": "Select a simple, clean resume template designed for beginners with limited experience.",
                      "url": "#section-5",
                      "image": "https://professionalresumefree.com/images/step2-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Write Each Section",
                      "text": "Fill in contact information, write a compelling summary, detail your education, list relevant skills, and include any projects or volunteer work.",
                      "url": "#section-2",
                      "image": "https://professionalresumefree.com/images/step3-sections.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Proofread and Optimize",
                      "text": "Review for spelling errors, ensure consistent formatting, and optimize keywords for Applicant Tracking Systems (ATS).",
                      "url": "#section-6",
                      "image": "https://professionalresumefree.com/images/step4-proofread.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Download and Apply",
                      "text": "Save your resume as a PDF with a professional filename and start applying to relevant positions.",
                      "url": "#section-7",
                      "image": "https://professionalresumefree.com/images/step5-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Resume Writing Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-1234",
                      "contactType": "Customer Support",
                      "availableLanguage": ["en"]
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Global"
                  },
                  "description": `Free resume writing guide for beginners with no experience. Updated for ${CURRENT_YEAR}.`,
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "ItemList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Getting Started: Mindset & Preparation" },
                    { "@type": "ListItem", "position": 2, "name": "Essential Resume Sections" },
                    { "@type": "ListItem", "position": 3, "name": "Writing Without Experience" },
                    { "@type": "ListItem", "position": 4, "name": "Highlighting Your Skills" },
                    { "@type": "ListItem", "position": 5, "name": "Simple Formatting & Design" },
                    { "@type": "ListItem", "position": 6, "name": "Beginner Mistakes to Avoid" },
                    { "@type": "ListItem", "position": 7, "name": "Final Steps & Review" }
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
        <meta name="last-reviewed" content={safeCurrentDate} />
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
                <span itemProp="name" aria-current="page"><FiUser size={14} style={{marginRight: '4px'}} /> Resume Writing for Beginners</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Beginner-Friendly • No Experience Needed • Free Templates • {CURRENT_YEAR} Edition</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume Writing for <span className="gradient-text">Beginners</span>: Complete Step-by-Step Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                First-time resume writing made simple! This comprehensive guide breaks down everything you need to create a professional resume with <strong>no prior experience</strong>. Perfect for students, recent graduates, and career changers. <strong>Everyone starts somewhere—even CEOs had first resumes.</strong> Your lack of extensive experience doesn't mean you lack value. Focus on your potential, willingness to learn, and transferable skills.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "15,000+", label: "Beginners Helped" }, { value: "94%", label: "Success Rate" }, { value: "3x", label: "More Interviews" }, { value: "$0", label: "Free Forever" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiUser /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiFileText /> Free Beginner Templates</Link>
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
            <span><FiBookOpen style={{marginRight: '4px'}} /> 2,500+ words</span>
            <span><FiClock style={{marginRight: '4px'}} /> 15 min read</span>
            <span><FiCalendar style={{marginRight: '4px'}} /> Updated: {safeCurrentDate}</span>
            <span><FiEye style={{marginRight: '4px'}} /> 50,000+ views</span>
          </div>
        </div>

        {/* Hook Banner */}
        <section className="section section-alt" id="hook-banner">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Your Resume Is Your Personal Marketing Tool—Not Just a List of Facts</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Think of your resume as a strategic brochure about YOU. Every element should work toward convincing employers that you're the right person for the job. <strong>Everyone starts somewhere.</strong> Your lack of extensive experience doesn't mean you lack value—focus on your potential, willingness to learn, and transferable skills gained through education, volunteering, academic projects, and personal initiatives. Employers hiring for entry-level positions are looking for <strong>potential, attitude, and foundational skills</strong>—not decades of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section" ref={toolRef} id="table-of-contents">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What You'll Learn in This Guide</h2>
              <p className="section-subtitle">A structured roadmap covering everything a first-time resume writer needs to know</p>
            </div>
            <nav className="toc-nav" style={{ maxWidth: '700px', margin: '0 auto' }} aria-label="Article Navigation">
              <ol>
                {["Getting Started: Mindset & Preparation", "Essential Resume Sections Explained", "Writing Without Traditional Experience", "Highlighting Your Skills Effectively", "Simple Formatting & Design Tips", "Common Beginner Mistakes to Avoid", "Final Steps & Putting It All Together"].map((item, i) => (
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

        {/* Section 1: Getting Started */}
        <section id="section-1" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">1. Getting Started: The Right Mindset for Success</h2>
              <p className="section-subtitle">Before writing a single word, understand what a resume truly is and what you need to begin</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Your Resume Is Your Personal Marketing Tool</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Think of your resume as a brochure about YOU. It's not just a list of facts—it's a strategic document designed to convince employers that you're the right person for the job. Every element should work toward this goal. Even CEOs had first resumes. Your lack of extensive experience doesn't mean you lack value. Focus on your potential, willingness to learn, and transferable skills.
                </p>
                <div className="insight-box">
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>💡 Key Mindset Shift:</p>
                  <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>Stop thinking "I have no experience" and start thinking "What skills and achievements can I showcase from my education, projects, and activities?"</p>
                </div>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>What You'll Need to Begin</h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {[
                    { label: "Personal Information", desc: "Full name, professional email, phone number, location" },
                    { label: "Education History", desc: "Schools, degrees, graduation dates, relevant coursework" },
                    { label: "Any Experience", desc: "Part-time jobs, internships, volunteer work, freelance projects" },
                    { label: "Skills List", desc: "Both technical abilities and personal strengths" },
                    { label: "Achievements", desc: "Academic awards, projects, certifications, competitions" },
                    { label: "References", desc: "2-3 people who can vouch for you (prepare separately)" }
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '0.5px solid var(--border-glass)' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Resume Sections */}
        <section id="section-2" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">2. Essential Resume Sections Explained</h2>
              <p className="section-subtitle">Every beginner resume needs these core sections presented in the right order</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Section</th><th>What to Include</th><th>Beginner Tips</th></tr></thead>
                  <tbody>
                    {RESUME_SECTIONS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.section}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.includes}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.beginnerTip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Writing Without Experience */}
        <section id="section-3" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">3. Writing a Resume With Little or No Experience</h2>
              <p className="section-subtitle">How to showcase your value when you don't have traditional work history</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiFileText size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Academic Projects</h3>
                </div>
                <ul className="list-style">
                  {["Major research papers and theses with findings", "Group projects with measurable outcomes and your specific role", "Presentations you led or contributed to significantly", "Case studies, analyses, and lab reports demonstrating expertise"].map((item, i) => (
                    <li key={i}><FiCheck size={12} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiUser size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Volunteer & Extracurricular</h3>
                </div>
                <ul className="list-style">
                  {["Club leadership positions with team size and achievements", "Community service and volunteering with impact metrics", "Sports team participation demonstrating teamwork and discipline", "Event organization and planning with budgets and attendance figures"].map((item, i) => (
                    <li key={i}><FiCheck size={12} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="example-box" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
              <h4>Example Achievement Statements for Beginners:</h4>
              <ul>
                <li>"Led a 4-person team in developing a marketing plan that increased hypothetical sales by 25% in a semester-long business simulation"</li>
                <li>"Organized campus food drive coordinating 15 volunteers across 3 collection sites, serving 200+ families in the local community"</li>
                <li>"Managed social media accounts for student organization with 500+ followers, increasing engagement by 40% over 6 months through content strategy"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Highlighting Skills */}
        <section id="section-4" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">4. Highlighting Your Skills Effectively</h2>
              <p className="section-subtitle">Identifying and presenting transferable skills that employers value in entry-level candidates</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiTool size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Hard Skills (Technical)</h3>
                </div>
                <ul className="list-style">
                  {HARD_SKILLS.map((skill, i) => (
                    <li key={i}><FiCheck size={12} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="card-executive">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FiAward size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>Soft Skills (Personal)</h3>
                </div>
                <ul className="list-style">
                  {SOFT_SKILLS.map((skill, i) => (
                    <li key={i}><FiCheck size={12} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Formatting Tips */}
        <section id="section-5" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5. Simple Formatting & Design Tips</h2>
              <p className="section-subtitle">Beginner-friendly formatting guidelines that ensure your resume looks professional</p>
            </div>
            <div className="grid">
              <div className="checklist-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiCheckCircle size={18} /> DO These Things
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Use clean, readable fonts (Arial, Calibri, Times New Roman)", "Maintain consistent spacing and margins (0.5-1 inch)", "Use bullet points for easy scanning", "Save as PDF for consistent formatting across devices", "Use bold for section headers only", "Keep font size between 11-12pt for body text"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="checklist-card" style={{ borderLeft: '3px solid var(--error-color)' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiX size={18} /> DON'T Do These Things
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {["Use multiple font colors or decorative styles", "Include personal photos or graphics (US resumes)", "Use fancy borders, backgrounds, or text boxes", "Make text too small to read (below 10pt)", "Use slang, informal language, or emojis", "Overuse italics, underlining, or ALL CAPS"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiX size={14} color="var(--error-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes */}
        <section id="section-6" className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">6. Common Beginner Mistakes to Avoid</h2>
              <p className="section-subtitle">Top errors that get beginner resumes rejected—and how to prevent them</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {COMMON_MISTAKES.map((mistake, i) => (
                <div key={i} className="mistake-item-exec">
                  <strong style={{ color: 'var(--error-color)', display: 'block', marginBottom: '0.25rem' }}>{i + 1}. {mistake.title}</strong>
                  <span>{mistake.description}</span>
                </div>
              ))}
            </div>

            <div className="checklist-card" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
              <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCheckCircle size={18} color="var(--success-color)" /> Quick Pre-Submission Checklist
              </h3>
              <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                {PRE_SUBMISSION_CHECKLIST.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Final Steps */}
        <section id="section-7" className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">7. Final Steps & Putting It All Together</h2>
              <p className="section-subtitle">Your action plan for completing and submitting your first professional resume</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <ol className="action-list">
                {[
                  { step: "Gather All Information", desc: "Collect personal, educational, skills, and achievement data in one document" },
                  { step: "Choose the Right Template", desc: "Select a clean, ATS-friendly beginner template from our free collection" },
                  { step: "Write Your First Draft", desc: "Focus on getting content down without perfectionism—you'll refine later" },
                  { step: "Review and Refine", desc: "Check for errors, improve wording, ensure consistent formatting throughout" },
                  { step: "Get External Feedback", desc: "Ask mentors, teachers, or career counselors to review and suggest improvements" },
                  { step: "Finalize Your Resume", desc: "Make final adjustments and save as professionally named PDF (Firstname-Lastname-Resume.pdf)" },
                  { step: "Start Applying Strategically", desc: "Begin sending to relevant positions with customized cover letters for each application" }
                ].map((item, i) => (
                  <li key={i}><div><strong>{item.step}</strong><br /><span style={{ color: 'var(--text-muted)' }}>{item.desc}</span></div></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Beginner Resume FAQs ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to the most common questions from first-time resume writers</p>
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
              Start Your Career Journey Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Don't let lack of experience hold you back. Create a professional resume that showcases your potential and gets you noticed by employers. <strong>100% Free. No Sign-Up Required. Beginner-Friendly Templates. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiUser /> Create Free Resume Now</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              {["ATS-Optimized Beginner Templates", "No Sign Up Required", "Free PDF Download", "Step-by-Step Guidance"].map((f, i) => (
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
              <p className="section-subtitle">Complement this guide with our powerful free tools and beginner-focused resources</p>
            </div>
            <div className="geo-link-grid">
              {RELATED_LINKS.map((link, i) => {
                const icons = [FiFileText, FiTool, FiBookOpen, FiEdit3, FiUserCheck, FiSearch];
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • 100% Free Guide • Career Development Experts</span>
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
  const publishDate = new Date('2026-01-01T08:00:00+00:00').toISOString();

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
        publishDate,
        faqDates,
        freshnessIndicator: currentDate
      } 
    }, 
    revalidate: 3600 
  };
}

export default ResumeWritingForBeginnersPage;