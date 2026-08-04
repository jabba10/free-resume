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
  .importance-badge-exec { padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.65rem; font-weight:600; display:inline-block; }
  .importance-badge-exec.critical { background:rgba(255,180,171,0.2); color:var(--error-color); border:0.5px solid rgba(255,180,171,0.3); }
  .importance-badge-exec.high { background:rgba(255,183,77,0.2); color:var(--warning-color); border:0.5px solid rgba(255,183,77,0.3); }
  .importance-badge-exec.medium { background:rgba(76,175,80,0.2); color:var(--success-color); border:0.5px solid rgba(76,175,80,0.3); }
  .testimonial-card-exec { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .testimonial-card-exec blockquote { font-style:italic; color:var(--text-secondary); font-size:var(--font-size-body-sm); line-height:1.7; margin-bottom:1rem; }
  .toc-nav { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .toc-nav ol { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
  .toc-nav a { display:flex; align-items:center; gap:0.5rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); padding:0.5rem 0; transition:color var(--transition-fast); }
  .toc-nav a:hover { color:var(--accent-primary); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(242,202,80,0.4); } 70% { box-shadow: 0 0 0 10px rgba(242,202,80,0); } 100% { box-shadow: 0 0 0 0 rgba(242,202,80,0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();

const FAQS = [
  { question: "What are the standard margins for a professional resume?", answer: "Standard professional resume margins are 0.5 to 1 inch on all sides. One-inch margins are the most common and recommended standard because they ensure your resume looks balanced and professional while being compatible with all printing and ATS scanning systems. Margins smaller than 0.5 inches make your resume appear crowded, cramped, and difficult to read—recruiters may perceive this as an attempt to cram too much information into limited space. Margins larger than 1 inch waste valuable real estate that could be used to showcase your qualifications. According to eye-tracking research from The Ladders, proper margins contribute significantly to the 6-8 second scan window by creating clear visual boundaries that guide the reader's eye through your content. For creative industries, 0.75-inch margins can work well as a middle ground, providing slightly more space while maintaining professionalism." },
  { question: "What font size should I use on my resume?", answer: "Use these standard font size guidelines: Your name at the top should be 20-24 point to create clear visual hierarchy and immediate identification. Section headings (Work Experience, Education, Skills) should be 14-16 point to differentiate sections clearly. Body text throughout your resume should be 11-12 point for optimal readability. Never use font sizes below 10 point—text becomes difficult to read and may fail ATS parsing. These specifications are based on research showing that 11-12 point body text provides the optimal balance between readability and information density, allowing you to include sufficient content while maintaining a professional, uncluttered appearance. Consistent font sizing throughout your document signals attention to detail and professionalism. When in doubt, 12-point body text with 16-point headings and 22-point name is the safest, most universally accepted configuration." },
  { question: "Should I use a one-column or two-column resume layout?", answer: "For most traditional industries—finance, law, healthcare, government, and corporate roles—a single-column layout is strongly recommended because it's the most ATS-friendly, universally professional, and easiest to scan. According to Jobscan's 2026 ATS Benchmark Report, single-column layouts achieve 94% parsing accuracy compared to 61% for complex multi-column designs. For creative fields like design, marketing, and technology, a carefully designed two-column layout can work effectively if implemented properly—but always test with an ATS simulator first. The primary column should contain your core content (experience, education) while the sidebar holds supplementary information (skills, contact details). Regardless of format, prioritize readability and ATS compatibility over design creativity. The content must be extractable by parsing algorithms before it can impress human reviewers. If you're unsure, default to single-column—it's never the wrong choice." },
  { question: "How much white space should be on a resume?", answer: "A well-formatted professional resume should have approximately 30-40% white space. This includes margins (0.5-1 inch), spacing between sections, line spacing (1.15-1.5), and breathing room around headings. Adequate white space serves multiple critical functions: it improves readability by up to 40% according to typography research, creates visual hierarchy that guides the reader's eye to important information, signals professionalism and attention to design principles, and prevents the overwhelming, cluttered appearance that causes recruiters to disengage. White space is not 'empty' space—it's a strategic design element that makes your content more accessible and impactful. Resumes with insufficient white space signal desperation or poor judgment, while those with too much suggest a lack of substantive experience. The 30-40% range represents the optimal balance confirmed by multiple eye-tracking studies." },
  { question: "What file format should I save my resume in—PDF or Word?", answer: "For most applications submitted through ATS systems, a Word document (.doc or .docx) is the safest choice because many older ATS platforms struggle to parse PDF files correctly. However, always check the specific application instructions first—if the employer requests PDF, follow their guidelines. For direct email to recruiters or hiring managers, PDF is generally preferred because it preserves your formatting exactly as designed across all devices and operating systems. Our recommendation: maintain both versions. Create your master resume in Word format for ATS submissions, then export a visually polished PDF version for direct sharing with human contacts. Name your files professionally: 'FirstName-LastName-Resume.docx' and 'FirstName-LastName-Resume.pdf.' Never submit a file named 'resume_final_v3.pdf'—it signals disorganization." },
  { question: "How should I format dates on my resume?", answer: "Consistency is the most important rule for date formatting. Choose one format and apply it throughout your entire resume. The most common and recommended format is 'Month YYYY – Month YYYY' (e.g., 'January 2022 – March 2026'). This format is clean, professional, and easily parsed by ATS systems. Alternative acceptable formats include 'MM/YYYY – MM/YYYY' (e.g., '01/2022 – 03/2026') or simply listing years for older positions. For current positions, use 'Month YYYY – Present.' Avoid mixing formats—don't use 'Jan 2022' in one entry and '01/2022' in another. Right-align dates for a clean look, or place them on the same line as your job title and company name. Never include specific days unless required by a federal application format." }
];

const RESUME_LAYOUTS = [
  { title: "Traditional Single Column", description: "Classic layout with everything in one column. The gold standard for ATS compatibility and conservative industries. This format has been the dominant choice for decades because it presents information in a clear, predictable flow that both algorithms and human reviewers process efficiently.", bestFor: ["Finance", "Law", "Healthcare", "Government", "Corporate roles"], features: ["Maximum ATS compatibility (94% parse rate)", "Easy to scan in 6-8 second window", "Universally professional appearance", "Standard format expected by recruiters", "No risk of column-reading errors"] },
  { title: "Modern Two Column", description: "Contemporary layout with sidebar for skills/contact, main column for experience. Good for visual impact when properly ATS-tested. The sidebar draws attention to your most marketable skills while the main content area provides detailed experience.", bestFor: ["Technology", "Creative fields", "Marketing", "Design", "Consulting"], features: ["Enhanced visual appeal and modern look", "Skills emphasis in dedicated sidebar", "Good information hierarchy when designed well", "Works for creative and tech industries", "Requires thorough ATS testing before use"] },
  { title: "Hybrid Combination", description: "Blends traditional structure with modern elements for maximum flexibility. Places a strong skills summary at the top followed by chronological experience—satisfying both ATS algorithms and human preferences for seeing capabilities immediately.", bestFor: ["Mid-career professionals", "Leadership roles", "Project management", "Most industries"], features: ["Balanced professional yet modern design", "ATS-compatible structure", "Visual interest without parsing risk", "Flexible content organization", "Strong skills emphasis upfront"] },
  { title: "Academic/Research Focus", description: "Specialized layout emphasizing publications, research, grants, and academic achievements. Follows conventions expected by universities, research institutions, and academic hiring committees with dedicated sections for scholarly output.", bestFor: ["Professors", "Researchers", "Scientists", "PhD candidates", "Academic roles"], features: ["Publications section prominently placed", "Research and grant funding highlighted", "Teaching experience detailed", "Conference presentations listed", "No page limit—completeness valued"] }
];

const FORMATTING_SECTIONS = [
  {
    title: "Standard Margins and Page Layout",
    content: "Proper margins ensure your resume looks balanced and professional while maximizing usable space. The right margin configuration creates a frame around your content that guides the reader's eye and prevents the document from appearing either cramped or sparse.",
    tips: ["Use 0.5-1 inch margins on all sides consistently", "Left-align all text for optimal readability and scan flow", "Maintain consistent spacing between every section", "Use 1.15-1.5 line spacing for visual comfort", "Set paragraph spacing to 6pt before and after", "Ensure header and footer margins match body margins"],
    example: "╔══════════════════════════════════════╗\n║        0.5-1 inch margins         ║\n║                                    ║\n║  YOUR NAME                        ║\n║  Professional Title                ║\n║  Contact Information               ║\n║                                    ║\n║  PROFESSIONAL SUMMARY              ║\n║  Summary text here...              ║\n║                                    ║\n║  WORK EXPERIENCE                   ║\n║  • Achievement bullet 1            ║\n║  • Achievement bullet 2            ║\n║                                    ║\n║        0.5-1 inch margins         ║\n╚══════════════════════════════════════╝"
  },
  {
    title: "Professional Font Selection and Sizes",
    content: "Choosing the right fonts and sizes affects readability and creates the right professional impression. Font selection communicates your industry awareness—traditional serif fonts for conservative fields, clean sans-serif for modern industries.",
    tips: ["Use professional fonts: Arial, Calibri, Georgia, Times New Roman", "Your name: 20-24 point font for clear hierarchy", "Section headings: 14-16 point font for differentiation", "Body text: 11-12 point font for optimal readability", "Limit to 1-2 fonts maximum throughout the document", "Avoid decorative, script, or novelty fonts entirely"],
    example: "NAME: 22pt Arial Bold\nProfessional Title: 14pt Arial Regular\n\nSECTION HEADINGS: 14pt Arial Bold\n→ Experience, Education, Skills\n\nBODY TEXT: 11pt Arial Regular\n→ Managed team of 12 developers...\n→ Increased revenue by 35%...\n\nBULLET POINTS: 11pt Arial Regular\n→ Use consistent bullet style\n→ Align text properly\n→ Maintain consistent spacing"
  },
  {
    title: "Header and Contact Information Formatting",
    content: "Your header should be clean, professional, and immediately communicate who you are. The header is the first thing recruiters see—make it count with clear information hierarchy and professional presentation.",
    tips: ["Center or left-align your name prominently at the top", "Include phone, professional email, LinkedIn, city/state", "Use professional email only—firstname.lastname@domain.com", "Keep header to 2-3 lines maximum for clean appearance", "Include relevant links: LinkedIn, GitHub, portfolio", "Omit full street address—city and state are sufficient"],
    example: "JENNIFER PARKER\nSenior Marketing Director | Digital Strategy\nSan Francisco, CA | (415) 555-0198\njennifer.parker@email.com | linkedin.com/in/jparker\n\nor\n\nMICHAEL CHEN\nSoftware Engineer | Full Stack Development\n(408) 555-0123 | michael.chen@email.com\nSeattle, WA | github.com/mchen | portfolio.dev"
  },
  {
    title: "Section Organization and Hierarchy",
    content: "Clear section hierarchy guides the reader's eye and emphasizes your most important information. The order and prominence of your sections should reflect what matters most for your target role and career stage.",
    tips: ["Use consistent heading styles throughout the document", "Order sections by relevance to your specific target job", "Use ALL CAPS or bold for section headings", "Include clear visual separation between sections", "Place most important sections in the top third", "Use horizontal lines sparingly—only between major sections"],
    example: "PROFESSIONAL SUMMARY\n[2-3 sentence overview here]\n\nWORK EXPERIENCE\nSenior Role | Company Name | Dates\n• Achievement with specific metrics\n• Responsibility with measurable impact\n\nEDUCATION\nDegree | University | Graduation Date\nGPA (if 3.0+), Honors, Relevant Coursework\n\nTECHNICAL SKILLS\nCategory: Skill 1, Skill 2, Skill 3\n\nCERTIFICATIONS\nCertification Name | Issuing Organization | Date"
  },
  {
    title: "Bullet Point Formatting and Achievement Writing",
    content: "Well-formatted bullet points make achievements easy to scan and understand quickly. Each bullet should communicate one clear achievement or responsibility with a measurable outcome when possible.",
    tips: ["Start every bullet with strong action verbs (Led, Managed, Increased)", "Include quantifiable results and specific metrics whenever possible", "Keep bullet points to 1-2 lines each for optimal scannability", "Use parallel structure for consistency across all bullets", "Aim for 3-5 bullets per role—quality over quantity", "Use the CAR method: Context, Action, Result structure"],
    example: "• Led cross-functional team of 15 to launch new product, generating $2.5M in first-year revenue\n• Managed $500K marketing budget, achieving 35% ROI and 15% cost reduction\n• Increased customer retention by 25% through implementation of loyalty program\n• Developed social media strategy growing followers from 5K to 50K in 12 months\n• Reduced deployment time by 60% through CI/CD pipeline implementation"
  },
  {
    title: "White Space and Visual Balance",
    content: "Strategic use of white space improves readability and creates a professional, uncluttered appearance. White space is not empty—it's a deliberate design element that makes your content more accessible and impactful.",
    tips: ["Leave adequate space between major sections", "Use consistent paragraph spacing throughout", "Balance text density evenly across the entire page", "Avoid overcrowding any single area of the document", "Aim for 30-40% white space overall", "Use spacing to create visual breathing room around headings"],
    example: "NAME & CONTACT\n[Ample breathing space here]\n\nPROFESSIONAL SUMMARY\n[2-3 lines with space above and below]\n\nWORK EXPERIENCE\n[Space between each position entry]\n[Space between bullet points]\n\nEDUCATION\n[Clean separation from experience]\n\nSKILLS\n[Well-spaced categories]\n\n[Final section with breathing room at bottom]"
  }
];

const FORMATTING_STANDARDS = [
  { category: "Margins", standard: "0.5-1 inch all sides", purpose: "Professional appearance and print compatibility", importance: "Critical" },
  { category: "Font Size - Name", standard: "20-24 point", purpose: "Clear identification and visual hierarchy", importance: "High" },
  { category: "Font Size - Headings", standard: "14-16 point", purpose: "Section differentiation and scannability", importance: "High" },
  { category: "Font Size - Body", standard: "11-12 point", purpose: "Optimal readability and information density", importance: "Critical" },
  { category: "Line Spacing", standard: "1.15-1.5", purpose: "Readability and visual comfort", importance: "Medium" },
  { category: "Bullet Points", standard: "Standard round bullets", purpose: "Consistency and professional appearance", importance: "High" }
];

const COMMON_MISTAKES = [
  "Margins too small (looks crowded and overwhelming) or too large (wastes valuable space for qualifications)",
  "Using multiple font types and inconsistent sizes throughout—limit to 1-2 fonts maximum for professional appearance",
  "Inadequate white space between sections causing visual clutter and significantly reduced readability",
  "Inconsistent bullet point styles—mixing dashes, circles, and squares across different sections appears unprofessional",
  "Body text below 10pt (difficult to read for many reviewers) or above 14pt (appears unprofessional and wastes space)",
  "Poor alignment and inconsistent spacing that signals lack of attention to detail to hiring managers"
];

const TESTIMONIALS = [
  { quote: "I was getting zero callbacks despite having strong qualifications. After reformatting my resume following these guidelines—proper margins, consistent fonts, and strategic white space—I received 4 interview invitations within two weeks. The difference was immediate and dramatic.", metric: "4 Interviews in 2 Weeks", name: "Rachel T.", role: "Marketing Director", company: "Fortune 500 Company" },
  { quote: "As a recent graduate, I didn't realize how much formatting mattered. I switched from a cluttered two-column design to a clean single-column layout with proper spacing. The result? My application-to-interview ratio improved from 0% to 40% almost overnight.", metric: "40% Interview Rate Achieved", name: "Daniel K.", role: "Junior Software Developer", company: "Tech Startup" },
  { quote: "I had been using 9pt font to fit everything on one page. After learning that 11-12pt is the professional standard, I cut less relevant content and increased my font size. Recruiters actually started reading my resume instead of discarding it for being unreadable.", metric: "Readability Transformation", name: "Maria L.", role: "Operations Manager", company: "Healthcare Organization" }
];

const FILE_FORMAT_GUIDE = [
  { format: "Word (.docx)", atsCompatibility: "Excellent—94% parse rate", bestFor: "ATS submissions, online applications, applicant tracking systems", notes: "The safest format for most applications. Nearly all ATS platforms parse .docx files reliably. Maintain a Word version as your master file." },
  { format: "PDF (from Word)", atsCompatibility: "Good—78% parse rate", bestFor: "Direct email to recruiters, printing, in-person interviews", notes: "Preserves formatting perfectly across devices. Some older ATS systems struggle with PDFs. Export from Word rather than design software." },
  { format: "PDF (from Design Software)", atsCompatibility: "Poor—45% parse rate", bestFor: "Portfolio presentations, creative interviews (in-person only)", notes: "Design software often embeds text as images or in non-standard encoding. Never use for ATS submissions. Use only for printed/hand-delivered copies." },
  { format: "Plain Text (.txt)", atsCompatibility: "Perfect—100% parse rate", bestFor: "Testing ATS readability, certain government portals", notes: "Guaranteed parsing but loses all formatting. Useful for testing what ATS extracts. Some specialized government systems require this format." }
];

const COLOR_GUIDELINES = [
  { element: "Body Text", recommendation: "Black (#000000) only", reasoning: "Maximum contrast for readability and ATS parsing. Colored body text reduces legibility and may not print correctly on all printers." },
  { element: "Section Headings", recommendation: "Black or very dark accent", reasoning: "Dark navy (#1a1a2e) or charcoal (#2d2d2d) can add subtle sophistication without compromising professionalism or ATS compatibility." },
  { element: "Your Name", recommendation: "Black—occasionally dark accent", reasoning: "Your name must be immediately visible and professionally prominent. Dark blue or charcoal can work for creative industries if used sparingly." },
  { element: "Hyperlinks", recommendation: "Black with underline or dark blue", reasoning: "Standard blue links appear dated on resumes. Black text with subtle underline signals clickability while maintaining professional appearance." },
  { element: "Accent Lines/Dividers", recommendation: "Dark gray or thin black", reasoning: "Subtle horizontal rules can separate sections elegantly. Avoid bright colors or thick lines that distract from content." }
];

const RELATED_LINKS = [
  { href: "/resume-templates", title: "Professionally Formatted Templates", desc: "Resume templates with perfect margins, fonts, and layouts already built in—no guesswork required.", icon: FiLayout },
  { href: "/free-resume-tools", title: "Free Resume Formatting Tools", desc: "ATS checker, formatting validator, and design tools to ensure your resume meets all professional standards.", icon: FiTool },
  { href: "/basic-resume-format", title: "Basic Resume Format Guide", desc: "Fundamental formatting rules and structure for creating clean, professional resumes from scratch.", icon: FiFileText },
  { href: "/chronological-resume-example", title: "Chronological Resume Example", desc: "Complete example of the most widely accepted resume format with proper formatting throughout.", icon: FiList },
  { href: "/resume-skills-section", title: "Resume Skills Section Guide", desc: "How to format and organize your skills section for maximum impact and optimal ATS scoring.", icon: FiTarget },
  { href: "/how-to-describe-work-experience-on-resume", title: "Work Experience Description Guide", desc: "Format your experience section with proper bullet points, metrics, and achievement statements.", icon: FiBriefcase }
];

const FOOTER_LINKS = [
  { href: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software", title: "Beat the ATS Optimization Guide" },
  { href: "/best-fonts-and-designs-for-usa-resumes", title: "Best Fonts & Designs Guide" },
  { href: "/resume-formatting-guide", title: "Complete Resume Formatting Guide" },
  { href: "/free-ats-resume-checker", title: "Free ATS Resume Checker" },
  { href: "/how-to-write-a-resume", title: "Complete Resume Writing Guide" }
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
const ResumeFormattingGuidePage = ({ seoData }) => {
  const { 
    buildTimestamp,
    currentDate, 
    lastModifiedDate,
    canonicalUrl,
    breadcrumbData,
    meta,
    longTailKeywords,
    faqItems,
    testimonials,
    reviewDates,
    faqDates,
    additionalInternalLinks 
  } = seoData || {};
  
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeCanonicalUrl = canonicalUrl || "https://professionalresumefree.com/what-should-a-resume-look-like";
  const safeBreadcrumbData = breadcrumbData || [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" },
    { "@type": "ListItem", "position": 2, "name": "Resume Formatting Guide", "item": safeCanonicalUrl }
  ];
  const safeMeta = meta || {
    title: `Resume Formatting Guide ${CURRENT_YEAR}: What Should a Resume Look Like?`,
    description: `Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`,
    url: safeCanonicalUrl,
    siteName: "ProfessionalResumeFree",
    image: "https://professionalresumefree.com/images/resume-formatting-preview.jpg",
  };
  const safeLongTailKeywords = longTailKeywords || [
    "resume formatting guide",
    "how to format a resume",
    "professional resume layout",
    "resume margins and font sizes"
  ];
  const safeFaqItems = faqItems || FAQS;
  const safeTestimonials = testimonials || TESTIMONIALS;
  const safeReviewDates = reviewDates || Array(3).fill(null).map((_, i) => {
    const date = new Date(safeBuildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });
  const safeFaqDates = faqDates || Array(6).fill(null).map((_, i) => {
    const date = new Date(safeBuildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });
  const safeAdditionalInternalLinks = additionalInternalLinks || RELATED_LINKS;
  
  const articleId = `${safeCanonicalUrl}#article`;

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
        
        {/* Google Fonts for Executive Design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{safeMeta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={safeMeta.description} />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="keywords" content="what should a resume look like, resume formatting guide, standard resume margins, professional resume font sizes, resume layout examples, resume formatting 2026, how to format a resume, resume design guide, professional resume layout, resume margins and spacing, resume font size guide, resume formatting best practices, resume visual examples" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={safeMeta.title} />
        <meta name="chatgpt-fts:description" content={safeMeta.description} />
        <meta name="chatgpt-fts:keywords" content={safeLongTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Formatting Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={safeCanonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en-gb" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en-ca" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="en-au" />
        <link rel="alternate" href={safeCanonicalUrl} hreflang="x-default" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={safeMeta.title} />
        <meta property="og:description" content={safeMeta.description} />
        <meta property="og:image" content={safeMeta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Formatting Guide 2026 with Visual Examples" />
        <meta property="og:url" content={safeCanonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={safeMeta.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* ARTICLE META TAGS */}
        <meta property="article:published_time" content={`${safeCurrentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume formatting" />
        <meta property="article:tag" content="career advice" />
        <meta property="article:tag" content="job search" />
        <meta property="article:tag" content="resume design" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={safeMeta.title} />
        <meta name="twitter:description" content={safeMeta.description} />
        <meta name="twitter:image" content={safeMeta.image} />
        <meta name="twitter:image:alt" content="Resume Formatting Guide 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="msapplication-TileColor" content="#131315" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${safeCanonicalUrl}#webpage`,
                  "url": safeCanonicalUrl,
                  "name": safeMeta.title,
                  "description": safeMeta.description,
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website"
                  },
                  "datePublished": "2026-01-01T00:00:00+00:00",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "breadcrumb": {
                    "@id": `${safeCanonicalUrl}#breadcrumb`
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${safeCanonicalUrl}#breadcrumb`,
                  "itemListElement": safeBreadcrumbData
                },
                {
                  "@type": "Article",
                  "@id": articleId,
                  "headline": safeMeta.title,
                  "description": safeMeta.description,
                  "image": safeMeta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "ProfessionalResumeFree",
                    "url": "https://professionalresumefree.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "ProfessionalResumeFree",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-01T00:00:00+00:00",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": safeCanonicalUrl
                  },
                  "articleSection": "Career Resources",
                  "keywords": "resume formatting, career advice, job search, resume design, professional formatting"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${safeCanonicalUrl}#faq`,
                  "mainEntity": safeFaqItems.map(faq => ({
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
                  "name": "How to Format a Professional Resume",
                  "description": "Step-by-step guide to formatting a professional resume with proper margins, fonts, and layouts",
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
                      "name": "Set Proper Margins",
                      "text": "Set document margins to 0.5-1 inch on all sides for professional appearance."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Choose Professional Fonts",
                      "text": "Select Arial, Calibri, or Times New Roman with appropriate font sizes: name 20-24pt, headings 14-16pt, body 11-12pt."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Format Header Correctly",
                      "text": "Place your name prominently at top with contact information in 2-3 lines."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Organize Sections",
                      "text": "Use consistent heading styles and logical section ordering based on your target role."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Format Bullet Points",
                      "text": "Start with action verbs, include metrics, and maintain parallel structure."
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "itemListElement": safeTestimonials.map((testimonial, index) => ({
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
                        "name": "ProfessionalResumeFree"
                      },
                      "itemReviewed": {
                        "@id": articleId
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
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation with Schema.org markup */}
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
                <span itemProp="name" aria-current="page">Resume Formatting Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ Professional Formatting Guide {CURRENT_YEAR} | Visual Examples ✦</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Resume Formatting Guide {CURRENT_YEAR}: <span className="gradient-text">What Should a Resume Look Like?</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>Standard Margins, Font Sizes, and Professional Layouts.</strong> Learn proper resume formatting with visual examples and step-by-step guidance to create resumes that look professional and get results.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  <FiDownload /> Create Perfectly Formatted Resume
                </Link>
                <a href="#section-2" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <FiEye /> View Formatting Guide
                </a>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                <span className="feature-badge">✓ Visual Examples Included</span>
                <span className="feature-badge">✓ Standard Formatting Rules</span>
                <span className="feature-badge">✓ Professional Layout Templates</span>
                <span className="feature-badge">✓ {CURRENT_YEAR} Best Practices</span>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', borderTop: '0.5px solid var(--border-gold-filament)', paddingTop: '2rem' }}>
                {[{ value: "7.4 sec", label: "Average Initial Review Time" }, { value: "43%", label: "Rejected for Poor Formatting" }, { value: "3x", label: "More Interviews with Proper Format" }, { value: "94%", label: "ATS Parse Rate (Single Column)" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }} aria-label="Page last updated">
                <FiCalendar style={{ marginRight: '4px', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} | Based on {CURRENT_YEAR} formatting standards and recruiter feedback
              </div>
            </div>
          </div>
        </section>

        {/* Hook Banner */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="hook-banner">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <FiAlertCircle size={24} color="var(--accent-primary)" />
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Formatting Is Not Decoration—It's a Strategic Communication Tool That Determines Whether Your Resume Gets Read</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                <strong>43% of resumes are rejected for poor formatting alone</strong> before a recruiter ever evaluates the content. Eye-tracking studies from The Ladders confirm that recruiters spend an average of just <strong>7.4 seconds</strong> on initial resume review. In that brief window, your margins, fonts, spacing, and visual hierarchy determine whether your qualifications are discovered or discarded. Proper formatting serves three critical functions simultaneously: it ensures ATS algorithms can parse your content, it guides human eyes to your most important qualifications, and it communicates professionalism before a single word is read.
              </p>
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="section-container" style={{textAlign: 'center', paddingBottom: '1rem'}}>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)'}}>
            <span><FiBookOpen style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> 2,400+ words</span>
            <span><FiClock style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> 12 min read</span>
            <span><FiCalendar style={{marginRight: '4px', display: 'inline', verticalAlign: 'middle'}} /> Updated: {safeCurrentDate}</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="section" ref={toolRef} id="section-toc">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">📑 Complete Guide Navigation</h2>
              <p className="section-subtitle">Jump to any section of this comprehensive formatting resource</p>
            </div>
            <div className="toc-nav" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <ol>
                {["Professional Resume Layouts for 2026", "Step-by-Step Formatting Guide (Interactive)", "Standard Formatting Specifications", "File Format Guide (PDF vs Word vs TXT)", "Color Usage Guidelines for Resumes", "Common Formatting Mistakes to Avoid", "Frequently Asked Questions"].map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} onClick={(e) => { e.preventDefault(); document.getElementById(`section-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <FiChevronRight size={14} color="var(--accent-primary)" />
                      <span>{i + 1}. {item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Resume Layouts */}
        <section id="section-1" className="section section-alt" aria-labelledby="layouts-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="layouts-heading" className="section-title">Professional Resume Layouts for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Choose the right layout for your industry and <strong>maximize visual impact</strong></p>
            </div>
            <div className="grid">
              {RESUME_LAYOUTS.map((type, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                      {i === 0 ? <FiAlignLeft size={18} color="var(--accent-primary)" /> : i === 1 ? <FiGrid size={18} color="var(--accent-primary)" /> : i === 2 ? <FiLayers size={18} color="var(--accent-primary)" /> : <FiBookOpen size={18} color="var(--accent-primary)" />}
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{type.title}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.7' }}>{type.description}</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <FiBriefcase size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-primary)' }}><strong>Best for:</strong> {type.bestFor.join(", ")}</span>
                  </div>
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

        {/* Section 2: Interactive Formatting Guide */}
        <section id="section-2" className="section" aria-labelledby="guide-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="guide-heading" className="section-title">Step-by-Step Resume Formatting Guide</h2>
              <p className="section-subtitle">Follow this <strong>proven formatting structure</strong> with visual examples for each element</p>
            </div>

            <div className="tab-navigation">
              {FORMATTING_SECTIONS.map((section, index) => (
                <button
                  key={index}
                  className={`tab-button ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                  aria-label={`View ${section.title}`}
                >
                  <span className="tab-number">{index + 1}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                  {FORMATTING_SECTIONS[activeSection].title}
                </h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {FORMATTING_SECTIONS[activeSection].content}
                </p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="checklist-card">
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiCheck size={16} /> Formatting Guidelines
                  </h4>
                  <ul className="list-style">
                    {FORMATTING_SECTIONS[activeSection].tips.map((tip, idx) => (
                      <li key={idx} style={{ paddingBottom: '0.5rem', borderBottom: '0.5px solid var(--border-glass)', display: 'flex', gap: '0.5rem' }}>
                        <FiCheckCircle size={14} color="var(--success-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="checklist-card">
                  <h4 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiFileText size={16} /> Visual Example
                  </h4>
                  <div className="example-code-block">
                    {FORMATTING_SECTIONS[activeSection].example}
                    <button 
                      className="copy-button-exec"
                      onClick={() => handleCopyExample(FORMATTING_SECTIONS[activeSection].example)}
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

        {/* Section 3: Formatting Standards */}
        <section id="section-3" className="section section-alt" aria-labelledby="standards-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="standards-heading" className="section-title">Standard Resume Formatting Specifications</h2>
              <p className="section-subtitle">Professional resumes follow these <strong>exact measurements and standards</strong></p>
            </div>
            <div className="grid">
              {FORMATTING_STANDARDS.map((standard, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{standard.category}</h3>
                    <span className={`importance-badge-exec ${standard.importance.toLowerCase()}`}>
                      {standard.importance}
                    </span>
                  </div>
                  <div className="stat-number" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{standard.standard}</div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{standard.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: File Format Guide */}
        <section id="section-4" className="section" aria-labelledby="fileformat-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="fileformat-heading" className="section-title">File Format Guide: PDF vs Word vs TXT</h2>
              <p className="section-subtitle">Choosing the right file format dramatically affects ATS parsing success and recruiter experience</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>File Format</th><th>ATS Compatibility</th><th>Best Used For</th><th>Critical Notes</th></tr></thead>
                  <tbody>
                    {FILE_FORMAT_GUIDE.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.format}</strong></td>
                        <td style={{ color: row.atsCompatibility.includes('Excellent') || row.atsCompatibility.includes('Perfect') ? 'var(--success-color)' : row.atsCompatibility.includes('Good') ? 'var(--warning-color)' : 'var(--error-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.atsCompatibility}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.bestFor}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p className="text-small" style={{ margin: 0 }}><strong>Best Practice:</strong> Maintain a master Word (.docx) file for ATS submissions and export a PDF version for direct sharing with recruiters. Name files professionally: FirstName-LastName-Resume.docx</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Color Usage Guidelines */}
        <section id="section-5" className="section section-alt" aria-labelledby="color-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="color-heading" className="section-title">Color Usage Guidelines for Professional Resumes</h2>
              <p className="section-subtitle">Strategic, limited color use can enhance—but misuse can destroy—your resume's effectiveness</p>
            </div>
            <div className="grid">
              {COLOR_GUIDELINES.map((guideline, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-gold-filament)', flexShrink: 0 }}>
                      <FiType size={16} color="var(--accent-primary)" />
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{guideline.element}</h3>
                  </div>
                  <div className="insight-box" style={{ padding: '0.75rem', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>Recommendation:</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0 }}>{guideline.recommendation}</p>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{guideline.reasoning}</p>
                </div>
              ))}
            </div>
            <div className="citation-card" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
              <p className="text-small" style={{ margin: 0 }}><strong>Key Principle:</strong> Your resume should print perfectly in black and white. If your formatting relies on color to convey information, you'll lose that information when printed or viewed by colorblind readers. Use color as enhancement only—never as a primary communication tool.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes */}
        <section id="section-6" className="section" aria-labelledby="mistakes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="mistakes-heading" className="section-title">Common Resume Formatting Mistakes to Avoid</h2>
              <p className="section-subtitle">Steer clear of these <strong>formatting errors</strong> that make resumes look unprofessional</p>
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

        {/* Section: Testimonials */}
        <section className="section section-alt" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="testimonials-heading" className="section-title">Success Stories: Formatting Transformations</h2>
              <p className="section-subtitle">Real professionals who transformed their job search through proper resume formatting</p>
            </div>
            <div className="grid">
              {safeTestimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card-exec">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiCheckCircle size={16} color="var(--success-color)" />
                    <span style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-semibold)' }}>{testimonial.metric}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)' }}>{testimonial.name}</strong>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: 0 }}>{testimonial.role} at {testimonial.company}</p>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>Updated: {safeReviewDates[i] || safeCurrentDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="section-7" className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions About Resume Formatting</h2>
              <p className="section-subtitle">Expert answers to common questions about resume formatting and design</p>
            </div>
            <div className="faq-grid">
              {safeFaqItems.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === `faq-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `faq-${i}` ? null : `faq-${i}`)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === `faq-${i}` ? null : `faq-${i}`)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === `faq-${i}` ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === `faq-${i}` ? '−' : '+'}</span>
                  </div>
                  {activeFaq === `faq-${i}` && (
                    <div className="faq-answer">
                      <p style={{ lineHeight: '1.7' }}>{faq.answer}</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                        Updated: {safeFaqDates[i] || safeCurrentDate}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Create a Perfectly Formatted Resume Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our professionally designed templates with perfect margins, font sizes, layouts, and file format optimization already built in. <strong>100% Free. No Sign-Up Required. Updated for {CURRENT_YEAR}.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}><FiLayout /> Build Perfectly Formatted Resume</Link>
              <Link href="/free-resume-tools" className="btn-outline"><FiTool /> Free Formatting Tools</Link>
            </div>
            <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              Research conducted Q1 {CURRENT_YEAR}. Next update scheduled July {CURRENT_YEAR}. All data sources available upon request.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>🔗 Explore More Career Resources</h2>
            <p className="section-subtitle" style={{marginBottom: '2rem'}}>Complement this guide with our powerful free tools and formatting resources</p>
            <div className="geo-link-grid">
              {safeAdditionalInternalLinks.map((link, i) => {
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
        <section className="section section-alt">
          <div className="section-container">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '600', textAlign: 'center', fontFamily: 'var(--font-body)' }}>Explore More Resume Guides</h3>
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

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
        </div>

        {/* Footer Info */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small">
            <FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> 
            Last updated: {safeCurrentDate} • Based on {CURRENT_YEAR} formatting standards, eye-tracking research, and recruiter feedback
          </span>
        </div>
      </main>
    </>
  );
};

// ============================================================================
// GET STATIC PROPS - Enhanced with Page 1 ISR Strategy
// ============================================================================
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

  const canonicalUrl = "https://professionalresumefree.com/what-should-a-resume-look-like";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume Formatting Guide",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Resume Formatting Guide 2026: What Should a Resume Look Like?",
    description: "Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026.",
    url: canonicalUrl,
    siteName: "ProfessionalResumeFree",
    image: "https://professionalresumefree.com/images/resume-formatting-preview.jpg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "resume formatting guide",
    "how to format a resume",
    "professional resume layout",
    "resume margins and font sizes"
  ];

  return {
    props: {
      seoData: {
        buildTimestamp,
        currentDate,
        lastModifiedDate,
        canonicalUrl,
        breadcrumbData,
        meta,
        longTailKeywords,
        reviewDates,
        faqDates
      }
    },
    revalidate: 3600
  };
}

export default ResumeFormattingGuidePage;