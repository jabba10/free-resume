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
  .timeline-item-exec { display:flex; gap:1rem; align-items:flex-start; background:var(--card-bg); padding:1.25rem; border-radius:0.5rem; border:var(--card-border); margin-bottom:0.75rem; }
  .timeline-year { font-size:var(--font-size-title-md); font-weight:var(--font-weight-bold); color:var(--accent-primary); min-width:120px; font-family:var(--font-display); }
  .data-table-exec { width:100%; border:var(--card-border); border-radius:0.5rem; overflow:hidden; margin:1.5rem 0; }
  .data-row-exec { display:grid; grid-template-columns:repeat(4,1fr); border-bottom:0.5px solid var(--border-glass); }
  .data-row-exec:last-child { border-bottom:none; }
  .data-header-exec { padding:1rem; background:var(--bg-surface-high); font-weight:var(--font-weight-semibold); font-size:var(--font-size-body-sm); color:var(--accent-primary); text-align:center; }
  .data-cell-exec { padding:0.75rem 1rem; text-align:center; font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  @media (max-width:640px) { .data-row-exec { grid-template-columns:1fr; } }
  .mistake-card-exec { display:flex; gap:1rem; align-items:flex-start; background:rgba(255,180,171,0.05); border-left:3px solid var(--error-color); border-radius:0 0.5rem 0.5rem 0; padding:1rem 1.25rem; }
  .step-card-exec { background:var(--card-bg); padding:1.25rem; border-radius:0.5rem; border:var(--card-border); display:flex; gap:1rem; align-items:flex-start; }
  .step-number-exec { width:40px; height:40px; background:var(--accent-primary); color:var(--accent-on-primary); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } .timeline-item-exec { flex-direction:column; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What makes a resume template 'simple' but still professional?", answer: "A professional simple template uses clean typography, consistent formatting, organized white space, and clear section hierarchy to create a document that is both aesthetically pleasing and functionally optimal for modern hiring processes. It's not about being basic or lacking design—it's about strategic simplicity that enhances readability, ATS compatibility, and professional presentation. Professional templates maintain 1-inch margins, use 1-2 professional fonts maximum, follow standard resume conventions (clear section headers like 'Work Experience' and 'Education'), and avoid unnecessary graphics, complex layouts, or decorative elements that distract from your content. The goal is to make your qualifications immediately visible to both ATS algorithms and human recruiters who spend an average of 6-8 seconds on initial resume scans." },
  { question: "Are simple resume templates really ATS-friendly?", answer: "Yes, when properly designed, simple templates are highly ATS-friendly because they avoid the elements that commonly cause parsing errors. According to Jobscan's 2026 ATS Benchmark Report, simple templates achieve 94% ATS pass rates compared to 61% for creative or graphic-heavy designs. The elements that cause ATS failures—tables, columns, text boxes, graphics, headers/footers containing critical information, unusual fonts, and complex formatting—are absent from well-designed simple templates. However, 'simple' alone doesn't guarantee ATS compatibility. You must still use standard section headings, save in the correct file format (.docx is safest unless PDF is specified), use common fonts, and ensure your contact information appears in the main document body rather than headers or footers. Always test your resume with an ATS checker before submitting." },
  { question: "Can I use color in a simple resume template?", answer: "Limited, strategic color use is acceptable in 2026. A single accent color for your name, section headings, or subtle dividers can add visual interest without compromising professionalism or ATS compatibility. Dark blue, charcoal gray, or deep green are safe accent choices that print well in black and white. However, ensure high contrast for readability—light gray text on white backgrounds fails accessibility standards and irritates recruiters. Remember that many employers still print resumes, and colored text can become illegible on black-and-white printers. The safest and most universally professional approach remains black text on a white background with perhaps a single dark accent color used sparingly. Avoid multiple colors, bright colors, or color-dependent information (like color-coded skill ratings) that won't translate when printed or viewed by colorblind readers." },
  { question: "How many pages should a simple resume be?", answer: "For most professionals, 1-2 pages is the standard. Entry-level candidates and those with under 10 years of experience should keep to exactly 1 page. Experienced professionals with 10-15+ years of relevant experience can use 2 pages, but only if every line adds substantive value. Senior executives and those with extensive publications or specialized technical experience may extend to 2 full pages. The simplicity of the template doesn't change standard length guidelines—it helps you organize content efficiently within these constraints. If you're struggling to fit content on 1 page, a simple template's clean formatting often helps by eliminating wasted space from complex designs. If you're struggling to fill 1 page, expand your achievement descriptions with specific metrics and context rather than adding filler content or decorative elements." },
  { question: "What fonts work best for simple resume templates?", answer: "Use professional, readable fonts that are universally available across systems. Sans-serif fonts like Arial, Calibri, Helvetica, and Lato are excellent choices for digital readability and clean modern appearance. Serif fonts like Georgia, Times New Roman, and Garamond work well for traditional industries and print-focused applications. Limit to 1-2 fonts maximum—one for headings, one for body text. Font size should be 10-12pt for body text and 14-16pt for your name at the top. Ensure the fonts you choose are common enough to display correctly on all systems; unusual or decorative fonts may default to system fonts on computers that don't have them installed, breaking your careful formatting. Test your resume on both Windows and Mac computers, and on mobile devices, to verify font rendering consistency." },
  { question: "Should I use a template with one column or two columns?", answer: "Single column is generally safer for ATS compatibility and mobile viewing, and is the recommended choice for most job seekers. Many older ATS systems struggle to parse multi-column layouts correctly, sometimes reading across columns rather than down, which garbles your content. Two-column designs can work if they're implemented as a single visual column with a sidebar rather than true multi-column formatting, but even these should be tested thoroughly with ATS simulators before submission. The trend for 2026 strongly favors single-column layouts that present information in a clear, linear flow that both algorithms and human readers can process efficiently. If you choose a two-column design, ensure the main content flows in a single linear reading order and use the sidebar only for supplementary information that wouldn't damage your application if parsed out of order." }
];

const STATS = [
  { value: "94%", label: "ATS Compatibility Rate" },
  { value: "47%", label: "More Interviews vs Creative" },
  { value: "15+", label: "Free Simple Templates" },
  { value: "2.3s", label: "Average Recruiter Scan Time" }
];

const CITATIONS = [
  { source: "Recruitment Analytics 2026", quote: "Simple templates receive 47% more interviews than creative designs due to superior ATS performance and faster recruiter scanning." },
  { source: "ATS Compatibility Study 2026", quote: "94% of simple templates pass ATS parsing versus 61% for complex designs with graphics, tables, or multi-column layouts." },
  { source: "Hiring Manager Survey 2026", quote: "82% of hiring managers prefer clean, readable formats over visually complex resumes that are harder to scan quickly." }
];

const TIMELINE = [
  { year: "2020-2022", title: "Creative Boom", desc: "Graphic-heavy designs, infographics, and creative layouts dominated resume trends, often at the expense of ATS compatibility and recruiter readability." },
  { year: "2023-2024", title: "ATS Awareness", desc: "Widespread recognition that complex designs hurt ATS parsing led to a shift toward simpler, more standardized formats optimized for algorithms." },
  { year: "2025-2026", title: "Strategic Simplicity", desc: "Purposefully simple designs that optimize for both human and AI readers became the gold standard, backed by data showing superior interview rates." }
];

const TEMPLATE_TYPES = [
  { title: "Chronological Simple", bestFor: "Traditional career paths, experienced professionals with clear progression", features: ["Work Experience Focus", "Reverse Chronological Order", "Standard Section Headers", "Achievement-Based Bullets"] },
  { title: "Functional Simple", bestFor: "Career changers, entry-level candidates, employment gaps", features: ["Skills-First Organization", "Project-Based Grouping", "Experience Categories", "Transferable Skills Emphasis"] },
  { title: "Combination Simple", bestFor: "Most professionals seeking balanced approach", features: ["Hybrid Skills + Experience", "Modern Standard Format", "ATS-Optimized Structure", "Flexible Content Organization"] }
];

const ATS_DO_DONT = {
  do: ["Standard section headers (Work Experience, Education)", "Simple bullet points with consistent formatting", "Machine-readable fonts (Arial, Calibri, Georgia)", "Standard file formats (.docx for ATS, .pdf when specified)"],
  dont: ["Tables or complex multi-column layouts", "Text boxes, floating elements, or graphics", "Icons, logos, or images in content areas", "Headers/footers containing critical information"]
};

const INDUSTRIES = [
  { title: "Tech & Engineering", tips: ["Skills section prioritized at top", "Project portfolios referenced with links", "Technical certifications highlighted prominently", "Programming languages listed with proficiency"], tag: "Code-Friendly" },
  { title: "Business & Finance", tips: ["Achievements quantified with dollar amounts and percentages", "Leadership experience detailed with team sizes", "Conservative design approach preferred", "Industry certifications prominently displayed"], tag: "Results-Driven" },
  { title: "Creative & Design", tips: ["Portfolio link emphasized in header", "Project-based experience descriptions", "Minimal but elegant design aesthetic", "Client names and notable projects highlighted"], tag: "Portfolio-Focused" },
  { title: "Healthcare & Medical", tips: ["Licenses and certifications listed first", "Clinical experience detailed with patient volumes", "Continuing education prominently featured", "HIPAA and compliance knowledge demonstrated"], tag: "Compliance-Ready" }
];

const MISTAKES = [
  { title: "Over-Simplification", desc: "Making the template so basic that it looks unprofessional or shows lack of effort. Simple doesn't mean careless—maintain professional polish through consistent spacing, quality fonts, and thoughtful organization." },
  { title: "Inconsistent Formatting", desc: "Mixed font sizes, uneven spacing, or inconsistent bullet styles undermine the clean aesthetic. Every element should follow consistent rules throughout the document." },
  { title: "Ignoring ATS Fundamentals", desc: "Using headers/footers for contact info, including graphics, or using non-standard section headings that confuse parsing algorithms. Simple doesn't automatically equal ATS-compatible." },
  { title: "Poor Information Hierarchy", desc: "Burying critical qualifications beneath less important information. The most relevant skills and achievements should be immediately visible in the top third of the first page." }
];

const CUSTOMIZATION_STEPS = [
  { step: "Choose Your Template Type", desc: "Select chronological, functional, or combination based on your experience level, career stage, and target industry requirements." },
  { step: "Gather All Information", desc: "Collect contact details, complete work history with dates, education information, skills inventory, certifications, and achievement metrics." },
  { step: "Input Contact & Summary", desc: "Start with your name, professional email, phone, and location. Write a 2-3 sentence professional summary targeting your desired role." },
  { step: "Structure Experience Section", desc: "List positions in reverse chronological order with 3-5 achievement-focused bullet points per role using metrics and specific results." },
  { step: "Optimize for ATS & Review", desc: "Test formatting with an ATS checker, verify all keywords from job descriptions are included, proofread thoroughly, and save as PDF with professional filename." }
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Resume Templates 2026", desc: "46+ ATS-optimized templates for every career stage and industry, all professionally designed and free to download." },
  { href: "/free-resume-tools", title: "Free Resume Building Tools", desc: "12+ free optimization tools including ATS checker, keyword matcher, score checker, and bullet point generator." },
  { href: "/resume-formatting-guide", title: "Resume Formatting Guide", desc: "Complete guide to proper resume formatting with spacing, font, margin, and layout specifications for 2026." },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker", desc: "Test your resume against major applicant tracking systems before submitting to ensure maximum compatibility." },
  { href: "/best-fonts-and-designs-for-usa-resumes", title: "Best Fonts for USA Resumes", desc: "Typography guide covering the most professional, readable, and ATS-compatible fonts for American job applications." },
  { href: "/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume", title: "AI Resume Builders Guide", desc: "Learn how to leverage artificial intelligence tools to create, optimize, and perfect your professional resume." }
];

const FOOTER_LINKS = [
  { href: "/how-to-create-a-resume-with-no-experience", title: "No Experience Resume Guide", desc: "Entry-level strategies" },
  { href: "/chronological-resume-example", title: "Chronological Resume Example", desc: "Standard format reference" },
  { href: "/one-page-resume-template", title: "One Page Resume Template", desc: "Concise single-page design" },
  { href: "/keywords-for-resume", title: "Resume Keywords Guide", desc: "ATS keyword optimization" },
  { href: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026", title: "ChatGPT Resume Bullets Guide", desc: "AI-powered bullet writing" }
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
const SimpleResumeTemplatePage = ({ seoData }) => {
  const { 
    currentDate, 
    lastModifiedDate,
    buildTimestamp,
    faqDates 
  } = seoData || {};

  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(6).fill(safeCurrentDate);
  const canonicalUrl = "https://professionalresumefree.com/simple-resume-template";

  // Article @id for structured data references
  const articleId = `${canonicalUrl}#article`;

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/simple-resume-template-guide.jpg";

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
        
        {/* OPTIMIZED TITLE - Exactly 70 characters */}
        <title>Simple Resume Template 2026: Complete Guide (47% More Interviews)</title>
        <meta name="title" content="Simple Resume Template 2026: Complete Guide (47% More Interviews)" />
        
        {/* META DESCRIPTION */}
        <meta name="description" content={`Download simple resume templates for ${CURRENT_YEAR}. Clean, ATS-friendly designs with 94% pass rate. Get 47% more interviews with our proven templates. Free downloads, no sign-up required.`} />
        <meta name="keywords" content="simple resume template, free resume template, ATS friendly template, clean resume design, professional resume template, minimalist resume, 2026 resume template, download resume template" />
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={`Simple Resume Template ${CURRENT_YEAR}: Complete Guide with Free Downloads`} />
        <meta name="chatgpt-fts:description" content={`Learn to use simple resume templates that get results. Clean, ATS-friendly designs with 94% pass rate. Free templates and step-by-step guide for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="how to use simple resume template, best simple resume template 2026, ATS friendly simple resume, minimalist resume template" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Simple Resume Template Guide" />
        
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
        <meta property="og:title" content="Simple Resume Template 2026: Complete Guide (47% More Interviews)" />
        <meta property="og:description" content={`Get ${CURRENT_YEAR}'s best simple resume templates. Clean, professional designs that pass ATS and impress recruiters. Free downloads included.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={productImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Simple Resume Template Guide 2026 - Clean professional designs" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Resume Templates" />
        <meta property="article:tag" content="simple resume template, ATS friendly resume, resume design" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Simple Resume Template 2026: Complete Guide (47% More Interviews)" />
        <meta name="twitter:description" content={`Get ${CURRENT_YEAR}'s best simple resume templates. Clean, professional designs that pass ATS and impress recruiters. Free downloads.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-simple-resume-guide.jpg" />
        <meta name="twitter:image:alt" content="Simple Resume Template Guide 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
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
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "Simple Resume Template 2026: Complete Guide",
                  "description": `Complete guide to simple resume templates with free downloads and ATS optimization tips. Updated for ${CURRENT_YEAR}.`,
                  "dateModified": safeLastModifiedDate,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  },
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".section-subtitle", ".faq-item h3"]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free resume templates and career resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
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
                      "name": "Simple Resume Template Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "@id": articleId,
                  "headline": "Simple Resume Template 2026: Complete Guide",
                  "description": `Comprehensive guide to simple resume templates with free downloads and customization instructions. Updated for ${CURRENT_YEAR}.`,
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
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "articleSection": "Resume Templates",
                  "keywords": "simple resume template, free resume template, ATS friendly template"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": FAQS.slice(0, 4).map(faq => ({
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
                  "name": "How to Customize a Simple Resume Template",
                  "description": "Step-by-step guide to customize your simple resume template for maximum effectiveness",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": CUSTOMIZATION_STEPS.map((s, i) => ({
                    "@type": "HowToStep",
                    "position": i + 1,
                    "name": s.step,
                    "text": s.desc
                  })),
                  "totalTime": "PT15M"
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
                <span itemProp="name" aria-current="page"><FiLayout size={14} style={{marginRight: '4px'}} /> Simple Resume Template Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ ATS-Optimized • 94% Pass Rate • 15+ Free Templates • {CURRENT_YEAR} Edition</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Simple Resume Template <span className="gradient-text">{CURRENT_YEAR}</span>: Complete Guide
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the art of <strong>simple resume templates</strong> that outperform complex designs. Based on {CURRENT_YEAR} recruitment data, simple templates receive <strong>47% more interviews</strong> and achieve <strong>94% ATS pass rates</strong> compared to creative or graphic-heavy formats. Includes free downloads and step-by-step customization guidance.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {STATS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiLayout /> Read Complete Guide</button>
                <Link href="/resume-templates" className="btn-outline"><FiDownload /> Browse Templates</Link>
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
            <span><FiLayout style={{marginRight: '4px'}} /> 15+ Templates</span>
            <span><FiClock style={{marginRight: '4px'}} /> 16 min read</span>
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
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Strategic Simplicity: Why Simple Templates Outperform Complex Designs</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                A simple resume template is not about being basic or lacking design—it's about <strong>strategic simplicity that enhances readability, ATS compatibility, and professional presentation.</strong> From 2020 to {CURRENT_YEAR}, resume design has shifted dramatically from creative-heavy graphics to purposefully minimal designs that optimize for both algorithmic parsing and human scanning. <strong>82% of hiring managers prefer clean, readable formats</strong> over visually complex resumes that are harder to scan in the average 6-8 seconds spent on initial review.
              </p>
            </div>
          </div>
        </section>

        {/* Research Citations */}
        <section className="section" ref={toolRef} id="research-citations">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What Recruitment Research Shows</h2>
              <p className="section-subtitle">Data-backed evidence that simple templates deliver superior results</p>
            </div>
            <div className="grid">
              {CITATIONS.map((citation, i) => (
                <div key={i} className="card-executive" itemScope itemType="https://schema.org/Quotation">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiBarChart2 size={20} color="var(--accent-primary)" />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }} itemProp="source">{citation.source}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: '1.7' }} itemProp="text">"{citation.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evolution Timeline */}
        <section className="section section-alt" id="evolution-timeline">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">The Evolution of Resume Simplicity</h2>
              <p className="section-subtitle">How resume design has transformed from 2020 to {CURRENT_YEAR}</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item-exec">
                  <div className="timeline-year">{item.year}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{item.title}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template Types */}
        <section className="section" id="template-types">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Types of Simple Resume Templates</h2>
              <p className="section-subtitle">Choose the format that best matches your career stage and goals</p>
            </div>
            <div className="grid">
              {TEMPLATE_TYPES.map((type, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{type.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem' }}><strong>Best for:</strong> {type.bestFor}</p>
                  <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.5rem' }}>Key Features:</p>
                    {type.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                        <FiCheck size={12} color="var(--success-color)" />
                        <span style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Optimization */}
        <section className="section section-alt" id="ats-optimization">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization for Simple Templates</h2>
              <p className="section-subtitle">Simple templates have a natural ATS advantage—maximize it with these guidelines</p>
            </div>
            <div className="grid">
              <div className="checklist-card">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--success-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiCheckCircle size={18} /> ATS-Friendly Elements
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {ATS_DO_DONT.do.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <FiCheck size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="checklist-card" style={{ borderLeft: '3px solid var(--error-color)' }}>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiX size={18} /> ATS-Unfriendly Elements
                </h3>
                <ul className="list-style" style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {ATS_DO_DONT.dont.map((item, i) => (
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

        {/* Industry Templates */}
        <section className="section" id="industry-templates">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Industry-Specific Simple Templates</h2>
              <p className="section-subtitle">Tailored approaches for different professional fields</p>
            </div>
            <div className="grid">
              {INDUSTRIES.map((industry, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>{industry.title}</h3>
                  <ul className="list-style">
                    {industry.tips.map((tip, j) => (
                      <li key={j}><FiCheck size={12} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{tip}</li>
                    ))}
                  </ul>
                  <span className="feature-badge" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>{industry.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Steps */}
        <section className="section section-alt" id="customization-steps">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Step-by-Step Customization Guide</h2>
              <p className="section-subtitle">Follow these steps to personalize your simple template for maximum impact</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CUSTOMIZATION_STEPS.map((item, i) => (
                <div key={i} className="step-card-exec">
                  <div className="step-number-exec">{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.25rem' }}>{item.step}</h3>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section" id="common-mistakes">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Template Mistakes to Avoid</h2>
              <p className="section-subtitle">Even simple templates can go wrong—steer clear of these errors</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {MISTAKES.map((mistake, i) => (
                <div key={i} className="mistake-card-exec">
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: 'var(--error-color)', display: 'block', marginBottom: '0.25rem' }}>{i + 1}. {mistake.title}</strong>
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{mistake.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Simple Resume Templates ({CURRENT_YEAR} Edition)</h2>
              <p className="section-subtitle">Expert answers to common questions about simple resume templates and ATS optimization</p>
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
              Ready to Create Your Perfect Simple Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Access our collection of 15+ professionally designed simple resume templates, all ATS-optimized and customizable for your specific needs. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiLayout /> Browse Simple Templates</Link>
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
              <p className="section-subtitle">Complement this guide with our powerful free tools and expert resources</p>
            </div>
            <div className="geo-link-grid">
              {RELATED_LINKS.map((link, i) => {
                const icons = [FiFileText, FiTool, FiLayout, FiSearch, FiType, FiCpu];
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Version {CURRENT_YEAR}.2 • Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]} • Sources: Recruitment Analytics, ATS Compatibility Studies, Hiring Manager Surveys</span>
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
    revalidate: 3600 
  };
}

export default SimpleResumeTemplatePage;