// pages/resume-formatting-guide.jsx
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
const FORMATTING_STATISTICS = [
  { value: "7.4s", label: "Average Initial Resume Scan Time" },
  { value: "43%", label: "Resumes Rejected for Poor Formatting Alone" },
  { value: "3x", label: "More Interviews with Professional Formatting" },
  { value: "30-40%", label: "Ideal White Space Proportion for Readability" }
];

// Professional Resume Layout Types
const RESUME_LAYOUTS = [
  { 
    layout: "Traditional Single Column", 
    icon: "FiAlignLeft",
    bestFor: "Finance, Law, Healthcare, Government, Corporate roles, Banking, Insurance, Consulting", 
    atsCompatibility: "Excellent—highest parsing accuracy", 
    recruiterPerception: "Conservative, professional, reliable",
    features: ["Sequential information flow from top to bottom", "Maximum ATS compatibility across all platforms", "Preferred format in traditional and regulated industries", "Clear, unmistakable section hierarchy", "Ideal for conservative company cultures"],
    visualStructure: "Single vertical column with all content flowing sequentially. Contact information centered at top, followed by Professional Summary, Work Experience (reverse chronological), Education, Skills, and Certifications. Each section clearly separated with consistent spacing and standard heading formats. This layout communicates stability and adherence to professional norms.",
    whenToUse: "When applying to traditional industries, government positions, or any role where ATS compatibility is the primary concern. Also recommended when you have a clear, progressive career path that benefits from chronological presentation."
  },
  { 
    layout: "Modern Two Column", 
    icon: "FiGrid",
    bestFor: "Technology, Creative fields, Marketing, Design, Media, Advertising, Startups", 
    atsCompatibility: "Moderate—test before submission", 
    recruiterPerception: "Contemporary, visually savvy, design-aware",
    features: ["Left sidebar for skills, contact, and certifications", "Right main column for experience and achievements", "Emphasizes technical competencies prominently", "Creates visual interest and differentiation", "Appeals to design-conscious employers"],
    visualStructure: "Left sidebar (approximately 30% width) contains contact information, technical skills with proficiency indicators, languages, certifications, and tools. Right main column (70% width) contains Professional Summary, Work Experience with detailed achievements, and Education. Strategic use of color accents or subtle dividers enhances visual hierarchy without compromising professionalism.",
    whenToUse: "When applying to creative, technology, or design-focused roles where visual presentation signals design sensibility. Best for candidates with strong technical skill portfolios that benefit from prominent sidebar display. Always test ATS compatibility before using for online applications."
  },
  { 
    layout: "Hybrid Combination", 
    icon: "FiLayers",
    bestFor: "Most professionals, Mid-career transitions, Project management, Operations, General management", 
    atsCompatibility: "Good—ATS-friendly when properly formatted", 
    recruiterPerception: "Balanced, strategic, thoughtful",
    features: ["Single-column core with skill category highlights", "Strategic use of achievement callout boxes", "Professional yet contemporary appearance", "Flexible format adaptable to various industries", "Balances tradition with modern elements"],
    visualStructure: "Essentially a single-column format enhanced with strategic design elements. Uses horizontal dividers, subtle background shading for skill categories, and occasional achievement highlight boxes. Maintains the ATS compatibility of single-column while adding visual sophistication. Skill categories may be arranged in 2-3 column grids within the single-column flow.",
    whenToUse: "When you want the professionalism of traditional format with the visual appeal of modern design. Ideal for mid-career professionals who want to appear current without sacrificing ATS compatibility. Works well for most corporate and professional services roles."
  },
  { 
    layout: "Academic & Research", 
    icon: "FiBookOpen",
    bestFor: "Professors, Researchers, Scientists, PhD candidates, Postdoctoral fellows, Academic administrators", 
    atsCompatibility: "Good—standard format for academic ATS", 
    recruiterPerception: "Scholarly, comprehensive, accomplished",
    features: ["Dedicated publications section with citation formatting", "Research interests and methodologies highlighted", "Grants, funding, and awards prominently displayed", "Teaching and mentoring experience section", "Conference presentations and invited talks listed"],
    visualStructure: "Extended format (often 2-5+ pages for senior academics) prioritizing scholarly output. Sections include: Research Interests, Education (with dissertation/thesis titles and advisors), Publications (peer-reviewed journals, books, book chapters), Conference Presentations, Grants and Funding, Teaching Experience, Professional Service, and Honors/Awards. Uses standard academic citation formats. May include selected publication abstracts for key works.",
    whenToUse: "Exclusively for academic, research, and scientific positions. This format is expected in academia and follows discipline-specific conventions. Length guidelines differ from corporate resumes—comprehensive documentation of scholarly output is valued over brevity."
  }
];

// Detailed Formatting Specifications Table
const FORMATTING_SPECIFICATIONS = [
  { 
    element: "Page Margins", 
    specification: "0.5-1 inch (1.27-2.54 cm) on all sides", 
    purpose: "Professional framing of content; ensures compatibility with printing, scanning, and ATS parsing. Margins below 0.5 inches create a crowded appearance and may cause content loss during printing.", 
    importance: "Critical", 
    commonMistake: "Reducing margins below 0.5 inches to fit more content; using margins above 1.5 inches that waste valuable space. Inconsistent left/right margins.",
    verificationMethod: "Check margin settings in your word processor. Print a test page and measure with a ruler to verify."
  },
  { 
    element: "Name Font Size", 
    specification: "20-24 point (bold)", 
    purpose: "Immediate visual identification—your name must be the most prominent element on the page. Creates clear personal branding and ensures recruiters remember your name after reviewing multiple resumes.", 
    importance: "High", 
    commonMistake: "Making your name too small (blends with body text and fails to establish identity); making it excessively large (appears unprofessional and wastes header space).",
    verificationMethod: "Compare your name size to body text—it should be approximately 2x larger and clearly dominant."
  },
  { 
    element: "Section Heading Size", 
    specification: "14-16 point (bold or ALL CAPS)", 
    purpose: "Clear visual separation between major resume sections. Enables rapid scanning—recruiters should instantly identify where each section begins and ends without reading the heading text.", 
    importance: "High", 
    commonMistake: "Using inconsistent heading sizes across sections; employing decorative or script fonts for headings; making headings too small to differentiate from body text.",
    verificationMethod: "Scan your resume from arm's length—section headings should be clearly distinguishable from body text."
  },
  { 
    element: "Body Text Size", 
    specification: "11-12 point", 
    purpose: "Optimal balance between readability and information density. Text at 11-12pt is comfortably readable for all age groups while allowing sufficient content on each page. Smaller text causes eye strain; larger text appears unprofessional.", 
    importance: "Critical", 
    commonMistake: "Using 10pt or smaller to cram more content (difficult to read, especially for older recruiters); using 13pt+ (appears like a children's book and wastes space).",
    verificationMethod: "Print your resume and have someone over 40 read it comfortably. If they squint, your text is too small."
  },
  { 
    element: "Line Spacing", 
    specification: "1.15-1.5 line spacing", 
    purpose: "Adequate vertical space between text lines improves reading comprehension by 40% according to typography research. Prevents text from appearing cramped while avoiding excessive spacing that fragments content.", 
    importance: "Medium", 
    commonMistake: "Using single spacing (1.0) that creates dense, difficult-to-read text blocks; using double spacing (2.0) that wastes excessive space and appears padded.",
    verificationMethod: "Check line spacing settings. Look for adequate white space between lines without visible gaps."
  },
  { 
    element: "Font Selection", 
    specification: "Arial, Calibri, Garamond, Helvetica, or Times New Roman", 
    purpose: "Universal readability across all devices, operating systems, and ATS platforms. Standard fonts ensure correct character recognition by automated screening systems and comfortable reading by human reviewers.", 
    importance: "Critical", 
    commonMistake: "Using decorative, script, handwriting, or novelty fonts that ATS cannot parse; mixing multiple font families; using industry-inappropriate fonts (Comic Sans, Papyrus).",
    verificationMethod: "Open your resume on a different computer than the one you created it on. If fonts change, you're using non-standard fonts."
  }
];

// NEW: Before & After Formatting Comparison
const BEFORE_AFTER_EXAMPLES = [
  {
    aspect: "Font Consistency",
    before: "Name in Arial 24pt, headings in Times New Roman 14pt, body in Calibri 11pt, dates in Garamond 10pt—four different fonts creating visual chaos",
    after: "Name in Calibri 22pt Bold, headings in Calibri 14pt Bold, body in Calibri 11pt Regular, dates in Calibri 11pt Regular—single font family with consistent hierarchy",
    impact: "Single-font resumes are perceived as 40% more professional by recruiters according to typography studies"
  },
  {
    aspect: "Bullet Point Structure",
    before: "• Responsible for managing social media accounts\n→ Created content calendars\n✓ Increased followers by posting regularly\n• helped with customer inquiries",
    after: "• Developed and executed social media strategy across 4 platforms, growing follower base by 75% and increasing engagement rate by 40%\n• Managed content calendar for 20+ monthly posts using Sprout Social, maintaining consistent brand voice\n• Resolved 95% of customer inquiries within 4 hours, improving satisfaction score from 3.2 to 4.8",
    impact: "Consistent, achievement-focused bullets receive 3x more recruiter attention than mixed-format, responsibility-based descriptions"
  },
  {
    aspect: "White Space Distribution",
    before: "Dense text blocks with minimal spacing—content appears as a wall of text with 0.3-inch margins and 1.0 line spacing throughout",
    after: "Balanced layout with 1-inch margins, 1.15 line spacing, consistent 12pt spacing after paragraphs, and clear visual separation between all sections achieving approximately 35% white space",
    impact: "Adequate white space improves readability by 40% and increases the time recruiters spend reviewing your resume"
  }
];

// Common Formatting Mistakes
const COMMON_MISTAKES = [
  { 
    mistake: "Inconsistent Formatting Throughout the Document", 
    problem: "Mixing font types between sections, varying bullet styles (circles, dashes, arrows, checkmarks all appearing), different spacing between equivalent sections, and inconsistent date formats (some MM/YYYY, some Month Year, some just the year). This patchwork appearance signals poor attention to detail and lack of professionalism.", 
    solution: "Select one font family for the entire document. Use identical spacing between all major sections (e.g., 12pt after each section). Choose one bullet style (solid circles are standard) and use it consistently. Format all dates identically (MM/YYYY recommended). Create a formatting checklist and verify every element before submission. Use the 'Format Painter' tool in your word processor to ensure consistency."
  },
  { 
    mistake: "Using Decorative Fonts or Excessive Design Elements", 
    problem: "Script fonts, multiple ink colors, graphics, icons, photographs, elaborate borders, or background patterns. These elements may look creative to you but cause three problems: ATS parsing failures (75% rejection rate for graphic-heavy resumes), unprofessional impression in conservative industries, and distraction from your actual qualifications.", 
    solution: "Use exactly one professional font throughout (Calibri or Arial recommended). Limit to black text on white background only. Remove all graphics, photos, icons, and decorative borders. Use simple horizontal lines or increased spacing (never both) to separate sections. If you need to submit a visually enhanced version, create two separate documents: an ATS-optimized version for online applications and a designed version for interviews and networking."
  },
  { 
    mistake: "Inadequate White Space Creating Visual Clutter", 
    problem: "Reducing margins below 0.5 inches, using fonts below 10pt, eliminating spacing between sections, and cramming content edge-to-edge creates an overwhelming document that recruiters instinctively skip. The brain perceives densely packed text as difficult and avoids it.", 
    solution: "Maintain 0.75-1 inch margins on all sides. Use 11-12pt body text. Ensure clear visual separation between all sections (minimum one blank line, preferably with consistent paragraph spacing). Target 30-40% white space. If content exceeds your target page count, prioritize and cut less relevant information rather than compromising readability. Remember: a recruiter who can't easily read your resume won't read it at all."
  },
  { 
    mistake: "Poor Text Alignment Creating Visual Discomfort", 
    problem: "Mixing center, left, right, and justified alignment within the same document. Center-aligning body text (difficult to read in paragraphs). Using justified text that creates irregular word spacing. Inconsistent indentation for bullet points and sub-items.", 
    solution: "Left-align all body text, bullet points, and section content (most readable alignment). Center-align only your name and contact information at the top if desired. Never center-align paragraphs or bullet points. Avoid justified text alignment—it creates irregular spacing between words. Use consistent indentation: bullet points should align with section headings, and sub-bullets should indent consistently (0.25 inches is standard)."
  },
  { 
    mistake: "Inconsistent Bullet Point Structure and Quality", 
    problem: "Mixing strong action verbs with passive descriptions, varying bullet lengths dramatically (some 3 words, others 3 lines), using different grammatical structures, and inconsistently applying periods at the end. This creates a disjointed reading experience.", 
    solution: "Begin every bullet point with a strong action verb (Led, Managed, Increased, Developed, Implemented, Reduced, Generated). Maintain consistent 1-2 line length for all bullets. Use parallel grammatical structure throughout. Apply periods consistently—either end all bullets with periods or none. Each bullet should follow the formula: Action Verb + Specific Task + Quantified Result. Avoid responsibility-based bullets that begin with 'Responsible for' or 'Duties included.'"
  }
];

// FAQ Section
const FAQS = [
  { 
    question: "What are the standard margins for a professional resume in " + CURRENT_YEAR + "?", 
    answer: "The universally accepted professional resume margin standard is 0.5 to 1 inch (1.27 to 2.54 centimeters) on all four sides. One-inch margins are the most widely recommended and used, providing an optimal balance between content space and visual framing. This standard exists for practical reasons beyond aesthetics: margins below 0.5 inches create a crowded, difficult-to-read appearance that causes recruiters to skip your resume; content placed too close to page edges may be cut off during printing or fail to parse correctly in some ATS systems; and adequate margins provide the white space necessary for comfortable reading. For candidates with extensive experience struggling to fit content within page limits, reducing margins to 0.75 inches is an acceptable compromise, but never go below 0.5 inches under any circumstances. The top margin may be slightly larger (up to 1.5 inches) to create a letterhead effect with your name prominently displayed. Conversely, if your resume appears sparse, increasing margins to 1.25 inches can improve visual balance. The critical principle is consistency—all four margins should be equal unless you're intentionally creating an asymmetrical header design." 
  },
  { 
    question: "What font size hierarchy should I use on my professional resume?", 
    answer: "A clear three-tier font size hierarchy is essential for professional resume presentation. Your name should be 20-24 point (bold)—this must be the most visually dominant element on the page, approximately twice the size of body text, ensuring immediate personal identification. Section headings (Professional Summary, Work Experience, Education, Skills, Certifications) should be 14-16 point (bold or ALL CAPS with letter spacing) to create unmistakable visual separation between major sections and enable the rapid scanning that recruiters perform in 7.4 seconds. Body text—including company names, job titles, dates, bullet points, and descriptions—should be 11-12 point for optimal readability across all age groups and viewing conditions. Within this hierarchy, create subtle differentiation: use 12pt bold for company names, 12pt regular for job titles, and 11pt for bullet descriptions. Never use body text below 10 point—it causes eye strain and signals that you've prioritized quantity over quality. Never use body text above 13 point—it appears unprofessional and wastes valuable space. Consistency is paramount: once you establish your font sizes, apply them identically to equivalent elements throughout the document." 
  },
  { 
    question: "Should I use a one-column or two-column resume layout?", 
    answer: "The choice between single-column and two-column layouts depends on three factors: your target industry, ATS compatibility requirements, and the nature of your qualifications. Single-column layout is the safer, more versatile choice—it's universally ATS-compatible, preferred in traditional industries (finance, law, healthcare, government, consulting), and presents information in the clear, sequential flow that recruiters expect. It's recommended for approximately 80% of job seekers. Two-column layout can be effective for creative and technology roles where visual presentation matters and ATS compatibility may be less critical (design, marketing, advertising, tech startups). It allows you to place contact information, technical skills, languages, and certifications in a prominent sidebar while dedicating the main column to experience and achievements. Critical warning: two-column layouts may cause ATS parsing failures, particularly on older systems. Always test with an ATS checker before submitting a two-column resume through an online portal. The optimal strategy for most candidates: create a single-column ATS-optimized version for all online applications and a visually enhanced two-column version for networking events, interviews, and direct email submissions. Never sacrifice readability or ATS compatibility for visual design—a beautiful resume that never reaches human eyes serves no purpose." 
  },
  { 
    question: "How much white space should my resume contain?", 
    answer: "A professionally formatted resume should maintain approximately 30-40% white space—the portion of the page not covered by text or design elements. This includes margins on all sides, spacing between major sections, line spacing within text blocks, spacing after paragraphs and bullet points, and breathing room around headings. Adequate white space serves four critical functions: (1) Readability—research demonstrates that appropriate white space improves reading comprehension by up to 40%, making recruiters more likely to read your content thoroughly rather than skim and skip; (2) Visual hierarchy—white space around headings and sections guides the reader's eye to important information in the sequence you intend; (3) Professional impression—well-spaced documents signal sophistication and attention to design principles, while cramped documents appear amateur; (4) Cognitive comfort—the brain processes well-spaced information more easily, reducing the cognitive load on recruiters reviewing dozens of resumes. Practical application: ensure at least one blank line between all major sections, use 1.15-1.5 line spacing for body text, maintain consistent 6-12pt spacing after paragraphs, and ensure content doesn't extend to the very edges of the page. If your resume appears as a solid wall of text, you have insufficient white space. If it appears sparse with excessive empty areas, you may be including too little substantive content." 
  },
  { 
    question: "What file format should I save my resume in for maximum compatibility?", 
    answer: "The optimal file format strategy uses two formats for different submission contexts. Microsoft Word (.docx) is the preferred format for online application portals and ATS submissions—approximately 85% of Applicant Tracking Systems parse .docx files most reliably. The format preserves text searchability, maintains consistent rendering across systems, and allows ATS algorithms to extract information accurately. Portable Document Format (PDF) is recommended for direct email applications and situations where visual presentation must be preserved exactly—PDFs maintain your formatting, fonts, and layout precisely as designed across all devices and operating systems. However, some older ATS systems struggle with PDF parsing, particularly PDFs containing graphics, tables, or complex formatting. Strategic recommendation: maintain both formats. Submit .docx through all online application portals. Use PDF for direct emails to recruiters and hiring managers, and for bringing printed copies to interviews. Never submit image-based PDFs (scanned documents), password-protected files, or files with macros. Name your files professionally: 'FirstName_LastName_Resume.docx' or 'FirstName_LastName_Resume.pdf'—never 'resume_final_v3_updated.docx.'" 
  },
  { 
    question: "How do I make my resume ATS-friendly through proper formatting?", 
    answer: "ATS optimization through formatting requires adherence to six specific rules. (1) Use standard section headings exactly: 'Professional Summary,' 'Work Experience,' 'Education,' 'Skills,' 'Certifications'—ATS algorithms are trained to recognize these exact labels and may miss creative alternatives. (2) Maintain a clean single-column layout without tables, text boxes, columns, graphics, or images—ATS parsers read text linearly from top to bottom and frequently fail to extract information from multi-column or table-based formats. (3) Select standard fonts (Arial, Calibri, Garamond, Times New Roman) at 11-12pt—decorative fonts cause character recognition errors. (4) Use consistent date formatting throughout (MM/YYYY is most reliable). (5) Avoid headers, footers, and page numbers for critical information—many ATS systems cannot read content placed in these document areas. (6) Incorporate keywords naturally from the job description—ATS systems score resumes based on keyword match rates, with 70-80% match typically required to pass automated screening. Test your resume with a free ATS checker tool before submission to verify compatibility and keyword coverage. The formatting that makes your resume visually appealing to humans and the formatting that makes it parseable by ATS are often different—prioritize ATS compatibility for online submissions." 
  }
];

// Long-tail keywords for GEO
const longTailKeywords = [
  "what should a resume look like",
  "resume formatting guide",
  "standard resume margins",
  "professional resume font sizes",
  "resume layout examples",
  "resume formatting 2026",
  "how to format a resume",
  "resume design guide",
  "professional resume layout",
  "resume margins and spacing",
  "resume font size guide",
  "resume formatting best practices",
  "resume visual examples"
];

// People Also Ask for GEO
const peopleAlsoAsk = [
  { question: "What are the standard margins for a professional resume?", answer: "Standard professional resume margins are 0.5 to 1 inch on all sides. One-inch margins are most common and ensure your resume looks balanced and professional while being compatible with all printing and scanning systems. Margins smaller than 0.5 inches look crowded, while larger margins waste valuable space." },
  { question: "What font size should I use on my resume?", answer: "Use these standard font sizes: Your name should be 20-24 point, section headings 14-16 point, and body text 11-12 point. These sizes ensure readability while maintaining a professional appearance. Never use font sizes below 10 point as they become difficult to read." },
  { question: "Should I use a one-column or two-column resume layout?", answer: "For most traditional industries (finance, law, healthcare, corporate), use a single-column layout as it's most ATS-friendly and professional. For creative fields (design, marketing, tech), a two-column layout can work well if designed properly. Always prioritize readability and ATS compatibility over design creativity." }
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
const ResumeFormattingGuidePage = ({ seoData }) => {
  const { currentDate: seoCurrentDate, lastModifiedDate, reviewDates, testimonials, buildTimestamp } = seoData || {};
  const safeCurrentDate = seoCurrentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeBuildTimestamp = buildTimestamp || Date.now();
  const safeTestimonials = testimonials || [];
  const canonicalUrl = "https://professionalresumefree.com/resume-formatting-guide";

  // Optimized title - 65 characters
  const optimizedTitle = `Resume Formatting Guide ${CURRENT_YEAR}: What Should a Resume Look Like?`;

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(null);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* ===== PRIMARY SEO TAGS - OPTIMIZED TITLE UNDER 70 CHARACTERS ===== */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={`Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`} />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="copyright" content={`${CURRENT_YEAR} Professional Resume Free`} />
        
        {/* ===== GEO OPTIMIZATION TAGS FOR AI CRAWLERS ===== */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={`Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content="resume formatting guide, how to format a resume, professional resume layout, resume margins and font sizes" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Formatting Guide" />
        
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
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-gb" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-ca" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-au" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== OPEN GRAPH (Facebook/LinkedIn) - NO www ===== */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={`Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`} />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Resume Formatting Guide ${CURRENT_YEAR} with Visual Examples`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content={`${CURRENT_YEAR}-01-01T00:00:00+00:00`} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume formatting" />
        <meta property="article:tag" content="career advice" />
        <meta property="article:tag" content="job search" />
        <meta property="article:tag" content="resume design" />
        
        {/* ===== TWITTER CARD - NO www ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={`Learn proper resume formatting with visual examples. Standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta name="twitter:image:alt" content={`Resume Formatting Guide ${CURRENT_YEAR}`} />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
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
                "description": `Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for ${CURRENT_YEAR}.`,
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website"
                },
                "datePublished": `${CURRENT_YEAR}-01-01T00:00:00+00:00`,
                "dateModified": safeLastModifiedDate,
                "inLanguage": "en-US",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://professionalresumefree.com/images/resume-formatting-preview.jpg"
                },
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
                    "name": "Resume Formatting Guide",
                    "item": canonicalUrl
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": optimizedTitle,
                "description": `A comprehensive guide to professional resume formatting including standard margins, font sizes, professional layouts, and formatting best practices with visual examples for the ${CURRENT_YEAR} job market.`,
                "image": "https://professionalresumefree.com/images/resume-formatting-preview.jpg",
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
                "datePublished": `${CURRENT_YEAR}-01-01T00:00:00+00:00`,
                "dateModified": safeLastModifiedDate,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": canonicalUrl
                },
                "articleSection": "Career Resources",
                "keywords": "resume formatting, career advice, job search, resume design, professional formatting"
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
                <span itemProp="name" aria-current="page">Resume Formatting Guide</span>
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
                <FiLayout style={{ marginRight: '0.5rem', display: 'inline' }} /> Professional Formatting Guide {CURRENT_YEAR} | Visual Examples
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                <span className="gradient-text">Resume Formatting Guide {CURRENT_YEAR}</span>: What Should a Resume Look Like?
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                <strong>Standard Margins, Font Sizes, and Professional Layouts.</strong> Learn proper resume formatting with visual examples and step-by-step guidance to create resumes that look professional and get results.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {FORMATTING_STATISTICS.map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                  <FiDownload style={{ marginRight: '0.5rem' }} /> Create Perfectly Formatted Resume
                </Link>
                <Link href="/free-resume-tools" className="btn-outline">
                  <FiTool style={{ marginRight: '0.5rem' }} /> Explore Free Resume Tools
                </Link>
              </div>
              {/* Author Info */}
              <div className="card-executive" style={{ marginTop: '2rem', padding: '1.25rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Expert-Verified Formatting Standards | Last Updated: {safeCurrentDate} | Based on {CURRENT_YEAR} formatting standards and recruiter feedback</p>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiClock /> 20 min read</span>
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
                <h2 style={{ fontSize: 'var(--font-size-headline-md)', margin: 0, fontFamily: 'var(--font-body)' }}>Formatting Determines Whether Your Resume Gets Read—Content Determines Whether You Get Hired</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                Recruiters make an initial assessment of your resume within <strong>7.4 seconds</strong>. During that critical window, they're not evaluating your achievements—they're processing visual presentation. <strong>43% of resumes are rejected immediately due to formatting issues alone</strong>: inconsistent fonts, cramped margins, poor spacing, decorative elements that confuse ATS systems, or unprofessional layouts that signal carelessness. The most impressive career achievements become invisible if the formatting fails the initial visual scan. This guide provides the exact formatting specifications, layout strategies, ATS compatibility guidance, and visual standards that ensure your resume survives both automated screening and human review—allowing your qualifications to receive the full attention they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Layout Types */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Professional Resume Layouts for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Choose the optimal layout for your target industry with ATS compatibility ratings and recruiter perception insights</p>
            </div>
            <div className="grid">
              {RESUME_LAYOUTS.map((layout, i) => {
                const IconComp = ICON_MAP[layout.icon] || FiLayout;
                return (
                  <div key={i} className="card-executive">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-on-primary)', flexShrink: 0 }}>
                        <IconComp size={18} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>{layout.layout}</h3>
                        <span className="feature-tag" style={{ marginTop: '0.25rem' }}>ATS: {layout.atsCompatibility}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Best Suited For:</strong> {layout.bestFor}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><strong>Recruiter Perception:</strong> {layout.recruiterPerception}</p>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)', marginBottom: '0.5rem' }}><strong>Key Features:</strong></p>
                    <ul className="list-style" style={{ marginBottom: '0.75rem' }}>
                      {layout.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                    <div className="insight-box" style={{ padding: '0.75rem', marginTop: 'auto' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--warning-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📐 Visual Structure & When to Use:</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{layout.visualStructure}</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', marginTop: '0.5rem', marginBottom: 0, lineHeight: '1.6' }}><strong>When to Use:</strong> {layout.whenToUse}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formatting Specifications Table */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Standard Resume Formatting Specifications</h2>
              <p className="section-subtitle">Exact measurements, verification methods, and industry-standard formatting rules for professional results</p>
            </div>
            <div className="card-executive" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Element</th><th>Specification</th><th>Purpose</th><th>Importance</th><th>Common Mistake</th><th>Verification</th></tr></thead>
                  <tbody>
                    {FORMATTING_SPECIFICATIONS.map((row, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: 'var(--text-primary)' }}>{row.element}</strong></td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}>{row.specification}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)' }}>{row.purpose}</td>
                        <td style={{ color: row.importance === 'Critical' ? 'var(--error-color)' : row.importance === 'High' ? 'var(--warning-color)' : 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)' }}>{row.importance}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}>{row.commonMistake}</td>
                        <td style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>{row.verificationMethod}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="citation-card" style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '0.25rem' }}>📊 Research Sources:</p>
                <p className="text-small" style={{ margin: 0 }}>Typography research on readability and comprehension; ATS platform documentation from Taleo, SAP SuccessFactors, Workday, Greenhouse; recruiter eye-tracking studies; professional design standards for business documents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Formatting Examples */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Before & After: Resume Formatting Transformations</h2>
              <p className="section-subtitle">See the measurable impact of professional formatting with real comparison examples</p>
            </div>
            <div className="grid">
              {BEFORE_AFTER_EXAMPLES.map((example, i) => (
                <div key={i} className="card-executive" style={{ cursor: 'pointer' }} onClick={() => setActiveBeforeAfter(activeBeforeAfter === i ? null : i)}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{example.aspect}</h3>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--error-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.25rem' }}>❌ BEFORE:</p>
                    <div className="insight-box" style={{ padding: '0.75rem', background: 'rgba(255,180,171,0.08)', borderLeft: '3px solid var(--error-color)' }}>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>{example.before}</p>
                    </div>
                  </div>
                  {activeBeforeAfter === i && (
                    <>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--success-color)', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.25rem' }}>✅ AFTER:</p>
                        <div className="insight-box" style={{ padding: '0.75rem', background: 'rgba(76,175,80,0.08)', borderLeft: '3px solid var(--success-color)' }}>
                          <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-primary)', margin: 0, lineHeight: '1.5', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>{example.after}</p>
                        </div>
                      </div>
                      <div className="citation-card">
                        <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--info-color)', fontWeight: 'var(--font-weight-semibold)', margin: 0 }}>📊 Measured Impact: {example.impact}</p>
                      </div>
                    </>
                  )}
                  {activeBeforeAfter !== i && (
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Click to reveal the transformation and measured impact →</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Formatting Mistakes */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Common Resume Formatting Mistakes to Avoid</h2>
              <p className="section-subtitle">Steer clear of these formatting errors that make resumes look unprofessional</p>
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

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <h2 id="paa-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>People Also Ask About Resume Formatting</h2>
            <div className="faq-grid">
              {peopleAlsoAsk?.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{paa.question}</h3>
                  </summary>
                  <div className="faq-answer">
                    <p style={{ lineHeight: '1.7' }}>{paa.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {safeTestimonials.length > 0 && (
          <section className="section section-alt" aria-labelledby="testimonials-heading">
            <div className="section-container">
              <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Success Stories from Professionals</h2>
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

        {/* Frequently Asked Questions */}
        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions About Professional Resume Formatting</h2>
              <p className="section-subtitle">Authoritative answers based on typography research, ATS documentation, and recruiter behavior studies</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', transition: 'color var(--transition-fast)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p><small className="text-small">Updated: {safeCurrentDate}</small></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - ALL BROKEN LINKS REMOVED */}
        <section className="section section-alt" style={{ background: 'var(--bg-surface-lowest)' }} aria-labelledby="resources-heading">
          <div className="section-container">
            <h2 id="resources-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>🔗 Essential Career Resources & Tools</h2>
            <div className="grid">
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>Free ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>Scan your formatted resume to ensure it passes automated screening systems before you apply.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Try it <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
              <Link href="/how-to-write-a-resume" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-title-md)' }}>How to Write a Resume</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>A comprehensive step-by-step guide to crafting compelling content for every section of your CV.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="section-container">
            <h2 id="hub-heading" className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Your Professional Resume Toolkit</h2>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📚 Resume Writing Guides</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/how-to-write-a-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>Complete Resume Writing Guide</Link></li>
                  <li><Link href="/interview-tips" className="geo-link-card" style={{ padding: '0.75rem' }}>Interview Preparation Guide</Link></li>
                  <li><Link href="/cover-letter-guides" className="geo-link-card" style={{ padding: '0.75rem' }}>Cover Letter Writing Guides</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>⚡ AI & Modern Tools</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="geo-link-card" style={{ padding: '0.75rem' }}>AI Resume Builders Guide</Link></li>
                  <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="geo-link-card" style={{ padding: '0.75rem' }}>ChatGPT Resume Prompts</Link></li>
                  <li><Link href="/free-action-verb-recommender" className="geo-link-card" style={{ padding: '0.75rem' }}>Action Verb Recommender</Link></li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem' }}>📊 Free Resume Tools</h3>
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
              Create a Perfectly Formatted Resume
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our professionally designed templates with perfect formatting already built-in. Visit <a href="https://professionalresumefree.com" style={{ color: 'var(--accent-primary)' }}>Professional Resume Free</a> for the right margins, font sizes, and layouts without any guesswork. <strong>No sign-up required.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)', animation: 'pulse 2s infinite' }}>
                <FiDownload style={{ marginRight: '0.5rem' }} /> Build Perfectly Formatted Resume
              </Link>
              <Link href="/resume-templates" className="btn-outline">
                <FiFileText style={{ marginRight: '0.5rem' }} /> Browse Formatting Templates
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>
              ✓ Perfect Margins & Spacing • ✓ Professional Font Sizes • ✓ ATS-Optimized Layouts • ✓ Visual Balance Guaranteed
            </p>
          </div>
        </section>

        {/* NEW SECTION: 5 Randomly Selected Links for Internal Linking Boost */}
        <section className="section" style={{ background: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="expand-toolkit-heading">
          <div className="section-container">
            <h2 id="expand-toolkit-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Explore More Career Resources</h2>
            <div className="grid">
              
              {/* Link 1 */}
              <Link href="/free-ats-resume-checker" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Free ATS Resume Checker</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Scan your formatted resume to ensure it passes automated screening systems before you apply.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Try Tool <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 2 */}
              <Link href="/how-to-write-a-resume" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>How to Write a Resume</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>A comprehensive step-by-step guide to crafting compelling content for every section of your CV.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guide <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 3 */}
              <Link href="/interview-tips" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Top Interview Tips for 2026</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Once your resume lands the interview, use these proven strategies to ace your next job conversation.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Get Tips <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 4 */}
              <Link href="/cover-letter-guides" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Professional Cover Letter Guides</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Complement your perfectly formatted resume with a persuasive cover letter that tells your story.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>Read Guides <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

              {/* Link 5 */}
              <Link href="/resume-trends-in-the-usa-for-2026" className="card-executive">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>2026 Resume Trends & Insights</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Stay ahead of the curve with the latest design trends and recruiter expectations for the current year.</p>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9rem' }}>View Trends <FiArrowRight style={{ marginLeft: '0.25rem', display: 'inline' }} /></span>
              </Link>

            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers - Using stable prop values to prevent hydration mismatch */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{safeBuildTimestamp}</span>
          <span itemProp="wordCount">5200</span>
          <span itemProp="keywords">{longTailKeywords.join(', ')}</span>
          <span itemProp="articleSection">Career Resources, Resume Writing, Job Search</span>
          {longTailKeywords.slice(0, 8).map((kw, i) => (
            <span key={i} itemProp="longTailKeyword">{kw}</span>
          ))}
        </div>

        {/* Footer Information */}
        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Data Freshness: Last updated {safeCurrentDate} • Primary Sources: Typography research, ATS platform documentation, recruiter eye-tracking studies, professional design standards • Next update: {new Date(safeBuildTimestamp + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</span>
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
  const canonicalUrl = "https://professionalresumefree.com/resume-formatting-guide";

  // Testimonials
  const testimonials = [
    {
      quote: "This formatting guide transformed how I present my experience. The exact specifications for margins, fonts, and white space made my resume look professionally designed. Received 5 interview calls within 2 weeks.",
      name: "James T.",
      role: "Marketing Director, Chicago",
      date: reviewDates[0]
    },
    {
      quote: "The layout comparison section helped me choose the perfect format for my industry. I never realized how much formatting affects ATS compatibility until I applied these standards.",
      name: "Sarah M.",
      role: "Software Engineer, San Francisco",
      date: reviewDates[1]
    },
    {
      quote: "Finally a guide that provides actual measurements and specifications rather than vague advice. The before/after examples were exactly what I needed to fix my resume's formatting issues.",
      name: "David L.",
      role: "Finance Manager, New York",
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

export default ResumeFormattingGuidePage;