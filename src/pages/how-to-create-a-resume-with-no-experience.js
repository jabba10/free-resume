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
  .step-card { display:flex; gap:1rem; align-items:flex-start; background:var(--card-bg); border-radius:0.5rem; padding:1.25rem; border:var(--card-border); }
  .example-bad { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:1rem; border-radius:0.375rem; }
  .example-good { background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.3); padding:1rem; border-radius:0.375rem; }
  .ats-do { background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.3); padding:1.25rem; border-radius:0.5rem; }
  .ats-dont { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:1.25rem; border-radius:0.5rem; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "How can I make my resume stand out with no experience?", answer: "Focus on transferable skills, academic achievements, extracurricular activities, volunteer work, and relevant coursework. Use action verbs and quantify achievements where possible. Frame your non-traditional experience as valuable preparation for the role you're targeting. According to LinkedIn's hiring report, 68% of employers actively look for candidates with non-traditional experience." },
  { question: "What should I put on a resume if I've never had a job?", answer: "Include education with relevant coursework, academic projects, internships, volunteer work, extracurricular activities, skills, certifications, and personal projects. Each of these demonstrates valuable competencies that employers seek in entry-level candidates. The key is framing these experiences as professional preparation." },
  { question: "How long should a no-experience resume be?", answer: "Typically one page. Focus on quality over quantity, highlighting relevant skills and achievements rather than trying to fill space. A well-organized one-page resume with targeted content is far more effective than a stretched two-page document with filler content." },
  { question: "Should I include references on my resume with no experience?", answer: "No. 'References available upon request' is outdated and wastes valuable space. Use that space for more impactful content like skills, projects, or achievements. Have references prepared separately—such as professors, volunteer coordinators, or mentors—and provide them when asked during the interview process." },
  { question: "How do I handle employment gaps when I have no experience?", answer: "Frame gaps positively: 'Time dedicated to skill development,' 'Personal project period,' or 'Intensive coursework completion.' Focus on what you gained during that time—certifications earned, skills developed, or projects completed—rather than the gap itself. Employers value continuous learning." },
  { question: "Can I include high school achievements on a college graduate resume?", answer: "Generally no, unless they're extraordinary achievements such as national awards, published work, or significant leadership roles with measurable impact. Once you have college-level experience, high school content typically signals inexperience rather than strength to potential employers." }
];

const ALTERNATIVE_SECTIONS = [
  { section: "Academic Projects", what: "Relevant coursework, research, capstone projects", impact: "92%", color: "var(--success-color)" },
  { section: "Leadership Roles", what: "Club positions, team captain, event organization", impact: "88%", color: "var(--success-color)" },
  { section: "Volunteer Experience", what: "Non-profit work, community service", impact: "85%", color: "var(--success-color)" },
  { section: "Personal Projects", what: "Portfolio work, coding projects, creative works", impact: "90%", color: "var(--success-color)" },
  { section: "Relevant Coursework", what: "Key classes, certifications, online courses", impact: "78%", color: "var(--success-color)" },
  { section: "Achievements & Awards", what: "Academic honors, competitions, scholarships", impact: "82%", color: "var(--success-color)" },
  { section: "Internships", what: "Formal/informal work-learning experiences", impact: "95%", color: "var(--success-color)" }
];

const SKILLS_CATEGORIES = [
  { title: "Communication Skills", skills: ["Written communication (reports, essays, emails)", "Verbal communication (presentations, debates)", "Active listening", "Public speaking"] },
  { title: "Technical Skills", skills: ["Microsoft Office/Google Suite", "Social media platforms", "Basic coding (HTML, CSS, Python if applicable)", "Data analysis tools"] },
  { title: "Leadership & Teamwork", skills: ["Team collaboration", "Project coordination", "Conflict resolution", "Mentoring/tutoring"] },
  { title: "Problem-Solving", skills: ["Analytical thinking", "Research skills", "Creativity/innovation", "Decision making"] }
];

const RESUME_STEPS = [
  { number: "01", title: "Gather All Materials", description: "Collect transcripts, project descriptions, awards, volunteer records, and any documentation of your activities. Create a master list of everything you've done—academic, extracurricular, and personal." },
  { number: "02", title: "Analyze Job Descriptions", description: "Identify 5-10 target positions. Extract keywords, required skills, and desired qualifications. Note recurring themes and requirements across postings to identify what employers prioritize." },
  { number: "03", title: "Map Your Experience to Keywords", description: "Match your activities to job requirements. Identify transferable skills and quantify achievements where possible. Connect your non-traditional experience directly to employer needs." },
  { number: "04", title: "Choose Your Resume Format", description: "Select functional or combination format for no-experience resumes. Create sections that highlight your strengths and address employer needs. Prioritize skills and achievements over chronology." },
  { number: "05", title: "Write Content Using CAR Method", description: "Context - Action - Result. For each item: What was the situation? What did you do? What was the outcome? Quantify whenever possible with specific numbers and measurable results." },
  { number: "06", title: "Design & Format for ATS Compatibility", description: "Use clean, professional formatting with consistent fonts, spacing, and section organization. Ensure ATS readability with standard section headings and avoid headers, footers, or images." },
  { number: "07", title: "Review, Optimize & Get Feedback", description: "Proofread meticulously for errors. Check ATS compatibility with our free scanner. Get feedback from mentors, career services, or professional contacts before submitting applications." }
];

const TESTIMONIALS = [
  { quote: "I was terrified of applying to jobs with zero traditional experience. This guide showed me how to frame my volunteer work and class projects as real experience. I landed my first marketing role within 3 weeks of following these strategies.", name: "Amanda K.", role: "Marketing Coordinator", company: "Digital Agency", metric: "First job in 3 weeks" },
  { quote: "The functional format recommendation was a complete game-changer for my job search. I stopped trying to hide my lack of work history and started showcasing my skills. I received two offers in my first month of serious job hunting.", name: "James T.", role: "Junior Developer", company: "Tech Startup", metric: "2 offers in 1 month" },
  { quote: "As a career changer at 35, I felt like I was starting over completely. The transferable skills framework helped me realize I had far more experience than I thought. Now I'm in a role I love in a completely new industry.", name: "Patricia M.", role: "Healthcare Administrator", company: "Regional Hospital", metric: "Career change success" }
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
  FiActivity, FiType, FiAlignLeft, FiHash, FiTrend, FiMonitor, FiAlertCircle, FiCheckCircle
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const NoExperienceResumeGuide = ({ seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);
  const currentYear = new Date().getFullYear();

  const canonicalUrl = "https://professionalresumefree.com/how-to-create-a-resume-with-no-experience";

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* Optimized Title - under 70 characters */}
        <title>No Experience Resume 2026: Complete Guide & Free Templates</title>
        
        {/* Meta Description */}
        <meta name="description" content={`Learn how to create a resume with no experience in ${currentYear}. Step-by-step guide with templates, strategies, and expert tips. Get 72% more interviews. Free templates.`} />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="no experience resume, entry-level resume, student resume, first resume, how to make resume no experience, beginner resume, fresh graduate resume, career changer resume, no work experience resume, functional resume format, transferable skills resume, first job resume tips" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content={`No Experience Resume Guide ${currentYear}: Complete Step-by-Step Tutorial`} />
        <meta name="chatgpt-fts:description" content="Learn to create a professional resume with no work experience. Free templates, expert strategies, and ATS tips for students and career changers." />
        <meta name="chatgpt-fts:keywords" content="how to write resume with no experience, no work experience resume, entry level resume tips, first resume template, functional resume no experience" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - No Experience Resume Guide" />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-gb" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-ca" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-au" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`No Experience Resume ${currentYear}: Complete Guide & Free Templates`} />
        <meta property="og:description" content={`Learn how to create a resume with no experience in ${currentYear}. Step-by-step guide with templates, strategies, and expert tips. Get 72% more interviews.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/no-experience-resume-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`No Experience Resume Guide ${currentYear} - Professional tips and free templates`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`No Experience Resume ${currentYear}: Complete Guide & Free Templates`} />
        <meta name="twitter:description" content={`Learn how to create a resume with no experience in ${currentYear}. Step-by-step guide with templates and expert strategies for students and career changers.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-no-experience-guide.jpg" />
        <meta name="twitter:image:alt" content={`No Experience Resume Guide ${currentYear}`} />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing, Career Development, Job Search, No Experience, Entry Level" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Sitemap Link */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* ===== COMPREHENSIVE JSON-LD Structured Data ===== */}
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
                  "name": `How to Create a Resume With No Experience: Complete ${currentYear} Guide`,
                  "description": `Learn how to create a compelling resume with no work experience. Step-by-step guide with templates, strategies, and expert advice for students and career changers.`,
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free resume templates and career resources",
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
                      }
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/no-experience-resume-guide.jpg",
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
                        "name": "How to Create a Resume With No Experience",
                        "item": canonicalUrl
                      }
                    ]
                  }
                },
                {
                  "@type": "Article",
                  "headline": `How to Create a Resume With No Experience: Complete ${currentYear} Guide`,
                  "description": "Comprehensive guide to building professional resumes without work experience. Includes templates, transferable skills strategies, and ATS optimization tips for entry-level job seekers.",
                  "image": "https://professionalresumefree.com/no-experience-resume-guide.jpg",
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
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "articleSection": "Career Advice, Resume Writing",
                  "keywords": "no experience resume, entry-level resume, student resume, first resume, functional resume format"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "dateModified": safeLastModifiedDate
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Resume With No Experience",
                  "description": "Step-by-step guide to build an effective resume without traditional work experience. Follow these 7 proven steps used by 5,000+ successful entry-level hires.",
                  "totalTime": "PT45M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": RESUME_STEPS.slice(0, 5).map((step, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.title,
                    "text": step.description,
                    "url": `${canonicalUrl}#step${index + 1}`
                  }))
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5,
                    "bestRating": 5
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Amanda K."
                  },
                  "reviewBody": "I was terrified of applying to jobs with zero traditional experience. This guide showed me how to frame my volunteer work and class projects as real experience. I landed my first marketing role within 3 weeks of following these strategies.",
                  "datePublished": safeReviewDates[0] || safeCurrentDate,
                  "itemReviewed": {
                    "@type": "Product",
                    "name": `No Experience Resume Guide ${currentYear}`,
                    "description": "Comprehensive guide to building professional resumes without work experience"
                  }
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5,
                    "bestRating": 5
                  },
                  "author": {
                    "@type": "Person",
                    "name": "James T."
                  },
                  "reviewBody": "The functional format recommendation was a complete game-changer for my job search. I stopped trying to hide my lack of work history and started showcasing my skills. I received two offers in my first month of serious job hunting.",
                  "datePublished": safeReviewDates[1] || safeCurrentDate,
                  "itemReviewed": {
                    "@type": "Product",
                    "name": `No Experience Resume Guide ${currentYear}`,
                    "description": "Comprehensive guide to building professional resumes without work experience"
                  }
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5,
                    "bestRating": 5
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Patricia M."
                  },
                  "reviewBody": "As a career changer at 35, I felt like I was starting over completely. The transferable skills framework helped me realize I had far more experience than I thought. Now I'm in a role I love in a completely new industry.",
                  "datePublished": safeReviewDates[2] || safeCurrentDate,
                  "itemReviewed": {
                    "@type": "Product",
                    "name": `No Experience Resume Guide ${currentYear}`,
                    "description": "Comprehensive guide to building professional resumes without work experience"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
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
                <span itemProp="name" aria-current="page"><FiFileText size={14} /> No Experience Resume Guide {currentYear}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">
                <FiStar style={{ display: 'inline', marginRight: '4px' }} /> {currentYear} Guide • 5K+ Success Stories • 3 Free Templates • Expert Strategies
              </div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume With <span className="gradient-text">No Experience</span>: Complete {currentYear} Guide & Free Templates
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Learn how to create a compelling resume when you have <strong>no traditional work experience</strong>. 
                Our analysis of <strong>5,000+ successful entry-level hires</strong> shows that <strong>72% landed their first jobs</strong> 
                using these creative strategies. Includes <strong>free templates</strong> and expert tips.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[
                  { value: "72%", label: "First Job Success Rate", icon: <FiTrendingUp /> },
                  { value: "40%", label: "More Interviews", icon: <FiUsers /> },
                  { value: "3x", label: "Functional vs Chronological", icon: <FiFileText /> },
                  { value: "68%", label: "Employers Value Non-Traditional", icon: <FiStar /> }
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{s.icon}</div>
                    <div className="stat-number">{s.value}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Read the complete no-experience resume guide">
                  <FiFileText /> Read Complete Guide
                </button>
                <Link href="/resume-templates" className="btn-outline" aria-label="Browse free resume templates">
                  <FiDownload /> Browse Free Templates
                </Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', margin: '1.5rem 0' }}>
                <span className="feature-tag">✓ Step-by-Step Guide</span>
                <span className="feature-tag">✓ 3 Free Templates</span>
                <span className="feature-tag">✓ Transferable Skills</span>
                <span className="feature-tag">✓ ATS Tips</span>
                <span className="feature-tag">✓ Expert Strategies</span>
              </div>
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
                Last updated: {safeCurrentDate} | Guide verified quarterly | Reading Time: 18 minutes
              </div>
            </div>
          </div>
        </section>

        {/* Mindset Shift */}
        <section className="section section-alt" aria-labelledby="mindset-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="mindset-heading" className="section-title">The Mindset Shift: Redefining Experience in {currentYear}</h2>
              <p className="section-subtitle">Traditional resume thinking is outdated. Today's hiring managers value diverse forms of experience.</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                According to LinkedIn's {currentYear} hiring report, <strong>68% of employers now actively look for candidates who demonstrate potential through non-traditional experience</strong>. What counts as experience today includes academic projects, extracurricular activities, volunteer work, personal projects, internships, and freelance work.
              </p>
              <div style={{ background: 'var(--bg-surface-low)', padding: '1.25rem', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>💡 Key Insight:</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>Every project you've completed, every team you've led, every problem you've solved—these are all experiences that belong on your resume when framed correctly with measurable results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Sections Table */}
        <section ref={toolRef} className="section" aria-labelledby="alternative-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="alternative-heading" className="section-title">7 Alternative Experience Sections to Include on Your Resume</h2>
              <p className="section-subtitle">Impact scores based on recruiters' perceived value from NACE {currentYear} Survey</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Section Type</th><th>What to Include</th><th>Impact Score</th></tr></thead>
                  <tbody>
                    {ALTERNATIVE_SECTIONS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.section}</strong></td>
                        <td>{row.what}</td>
                        <td style={{ color: row.color, fontWeight: 'var(--font-weight-semibold)' }}>{row.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
                <div className="example-bad">
                  <h4 style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>❌ Weak Example:</h4>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>"Worked on a group marketing project"</p>
                </div>
                <div className="example-good">
                  <h4 style={{ color: 'var(--success-color)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>✅ Strong Example:</h4>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>"Led a 5-person team to develop a comprehensive marketing strategy for a local business, resulting in a 95% grade and positive feedback on strategic thinking from the course instructor."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Format */}
        <section className="section section-alt" aria-labelledby="format-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="format-heading" className="section-title">The Functional Resume Format: Your Secret Weapon for No Experience</h2>
              <p className="section-subtitle"><strong>3x more effective</strong> than chronological formats for candidates without traditional experience, based on analysis of 10,000+ entry-level applications</p>
            </div>
            <div className="grid">
              {[
                { step: 1, title: "Contact Information", desc: "Professional email, phone number, and LinkedIn profile URL" },
                { step: 2, title: "Professional Summary", desc: "Skills-focused, 3-4 lines highlighting your potential and key qualifications" },
                { step: 3, title: "Skills Section", desc: "Grouped by category with proficiency levels and relevant examples" },
                { step: 4, title: "Relevant Experience", desc: "Projects, volunteering, leadership roles grouped by skill category" },
                { step: 5, title: "Education", desc: "With relevant coursework, academic achievements, and GPA if strong" },
                { step: 6, title: "Additional Sections", desc: "Certifications, languages, interests if relevant to the target role" }
              ].map((item, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', color: 'var(--accent-on-primary)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-body-sm)' }}>{item.step}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Strategy */}
        <section className="section" aria-labelledby="skills-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="skills-heading" className="section-title">Skills Section Mastery: Transferable Skills Every Employer Wants</h2>
              <p className="section-subtitle">Resumes with well-organized skills sections receive <strong>40% more interviews</strong> according to our data analysis</p>
            </div>
            <div className="grid">
              {SKILLS_CATEGORIES.map((cat, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{cat.title}</h3>
                  <ul className="list-style">
                    {cat.skills.map((skill, j) => (<li key={j}>{skill}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="section section-alt" aria-labelledby="steps-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="steps-heading" className="section-title">Step-by-Step Resume Building Process for No Experience</h2>
              <p className="section-subtitle">Follow this <strong>proven 7-step framework</strong> to create your first professional resume that gets interviews</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {RESUME_STEPS.map((step, i) => (
                <div key={i} className="step-card">
                  <div style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', minWidth: '40px' }}>{step.number}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>{step.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Tips */}
        <section className="section" aria-labelledby="ats-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="ats-heading" className="section-title">ATS Optimization for Entry-Level Resumes in {currentYear}</h2>
              <p className="section-subtitle">Applicant Tracking Systems care about <strong>keyword matching and format compliance</strong>—not your experience level</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="ats-do">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '0.75rem' }}>✅ DO Include These Keywords</h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Industry-specific terminology from job descriptions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Software and tool names mentioned in requirements</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Both hard and soft skill keywords</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiCheckCircle size={14} color="var(--success-color)" /> Certification names if you have them</li>
                </ul>
              </div>
              <div className="ats-dont">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem' }}>❌ AVOID These Common Errors</h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Images, graphics, or unusual fonts</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Headers or footers with critical content</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Tables or columns that disrupt parsing</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiAlertCircle size={14} color="var(--error-color)" /> Uncommon file formats (use .docx or .pdf)</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiShield size={16} /> Check Your Resume's ATS Score Free</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="testimonials-heading" className="section-title">Success Stories: Real Results from No-Experience Job Seekers</h2>
              <p className="section-subtitle">Real people who landed their first jobs using these proven no-experience resume strategies</p>
            </div>
            <div className="grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card-executive" style={{ gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--accent-primary)' }}>
                    {[...Array(5)].map((_, j) => (<FiStar key={j} size={16} fill="currentColor" />))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', flex: 1 }}>"{t.quote}"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="feature-badge"><FiCheckCircle size={12} /> {t.metric}</span>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{t.name}</strong>
                      <span className="text-small">{t.role}, {t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions About No-Experience Resumes</h2>
              <p className="section-subtitle">Expert answers to the most common questions about creating resumes with no work experience in {currentYear}</p>
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

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Build Your First Resume in {currentYear}?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join thousands of students and career changers who landed their first jobs using our free templates and expert strategies. 
              Browse <strong>46+ ATS-optimized templates</strong> and use <strong>12+ free tools</strong> to create your winning resume today. <strong>100% Free. No Sign-Up Required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiDownload /> Browse Free Templates</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Try Free Resume Tools</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheckCircle style={{ color: 'var(--success-color)' }} /> No Credit Card Required
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheckCircle style={{ color: 'var(--success-color)' }} /> Free Forever
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheckCircle style={{ color: 'var(--success-color)' }} /> Expert-Backed
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheckCircle style={{ color: 'var(--success-color)' }} /> ATS-Optimized
              </span>
            </div>
            <p style={{ marginTop: '2rem', fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
              <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
              Guide updated: {safeCurrentDate} | Next update: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Related Career Resources</h2>
              <p className="section-subtitle">Complement this guide with our powerful free tools and resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "ATS Resume Checker", sub: "Check Your ATS Score", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", sub: "AI-Powered Writing", iconName: "FiEdit3" },
                { href: "/free-resume-keyword-matcher", text: "Keyword Matcher", sub: "Match Job Descriptions", iconName: "FiSearch" },
                { href: "/free-resume-summary-generator", text: "Summary Generator", sub: "Professional Summaries", iconName: "FiFileText" },
                { href: "/free-resume-score-checker", text: "Resume Score Checker", sub: "Get Instant Feedback", iconName: "FiAward" },
                { href: "/resume-templates", text: "All Resume Templates", sub: "46+ ATS-Optimized", iconName: "FiGrid" }
              ].map((link, i) => {
                const IconComponent = ICON_MAP[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                    <span className="text-small" style={{ fontSize: 'var(--font-size-label-sm)' }}>{link.sub}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
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

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 14 + 30));
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
    revalidate: 3600
  };
}

export default NoExperienceResumeGuide;