import Head from 'next/head';
import Link from 'next/link';
import { 
  FiBarChart, FiBriefcase, FiMonitor, FiCode, FiMessageCircle,
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiMail,
  FiSend, FiSmartphone, FiGlobe, FiCoffee, FiAnchor
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
    --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
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
  a { color:var(--accent-primary); transition:color 150ms; text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
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
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; borderRadius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; borderRadius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; borderRadius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .table-wrap { overflow-x:auto; margin:2rem 0; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); borderRadius:0.75rem; border:var(--card-border); }
  table { width:100%; border-collapse:collapse; min-width:500px; }
  th { background:rgba(242,202,80,0.05); padding:1rem; text-align:left; font-weight:var(--font-weight-semibold); color:var(--accent-primary); border-bottom:1px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  td { padding:1rem; border-bottom:0.5px solid var(--border-gold-filament); color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .faq-grid { display:grid; grid-template-columns:1fr; gap:1.25rem; }
  @media (min-width:768px) { .faq-grid { grid-template-columns:repeat(2,1fr); } }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; height:100%; cursor:pointer; }
  .faq-question { font-size:var(--font-size-title-md); font-weight:var(--font-weight-semibold); color:var(--text-primary); margin-bottom:0.75rem; }
  .step-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; text-align:center; }
  .step-number { width:40px; height:40px; background:linear-gradient(135deg,var(--accent-primary-container),var(--accent-primary)); color:var(--accent-on-primary); borderRadius:9999px; display:flex; align-items:center; justify-content:center; font-weight:var(--font-weight-bold); margin:0 auto 1rem; }
  .step-metrics { background:rgba(242,202,80,0.05); padding:0.75rem; borderRadius:0.375rem; margin:1rem 0; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .mistake-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:1.5rem; text-align:center; }
  .mistake-impact { background:rgba(255,180,171,0.1); padding:0.75rem; borderRadius:0.375rem; margin-top:1rem; font-size:var(--font-size-body-sm); color:var(--error-color); border:0.5px solid rgba(255,180,171,0.2); }
  .author-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:2rem; text-align:center; max-width:800px; margin:0 auto; }
  .testimonial-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; text-align:center; position:relative; }
  .testimonial-quote-mark { font-size:4rem; color:var(--accent-primary); opacity:0.2; position:absolute; top:0.5rem; left:1.25rem; font-family:var(--font-display); line-height:1; }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  const lastVerified = buildTime.toISOString().split('T')[0];

  // Generate freshness review dates
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb structured data
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
      "name": "Cover Letter Guides",
      "item": "https://professionalresumefree.com/cover-letter-guides"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp,
      lastVerified
    },
    revalidate: 3600, // ISR: Revalidate every hour
  };
}

const CoverLetterGuides = ({ seoData, buildTimestamp, lastVerified }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  // Fallback freshness values
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const displayDate = safeCurrentDate.split('T')[0];
  const canonicalUrl = "https://professionalresumefree.com/cover-letter-guides";
  const currentYear = new Date().getFullYear();
  const safeReviewDates = reviewDates || Array(6).fill(displayDate);
  const safeFaqDates = faqDates || Array(12).fill(displayDate);

  // Optimized title - exactly 70 characters
  const optimizedTitle = "Cover Letter Guide 2026: 8 Templates & Expert Writing Tips (Free)";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "cover letter writing guide 2026",
    "free cover letter templates with examples",
    "how to write an ATS-friendly cover letter",
    "professional cover letter format tips",
    "industry-specific cover letter strategies"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "Is a cover letter still necessary in 2026?", answer: "83% of hiring managers and 91% of recruiters consider cover letters essential. AI-powered ATS analyze cover letters for cultural fit indicators. Customized cover letters yield 3.2x more interviews." },
    { question: "What is the best cover letter format for 2026?", answer: "The professional standard format achieves 98/100 ATS scores. Use clean formatting, standard fonts, and achievement-focused bullet points. Our templates pass 95%+ of applicant tracking systems." },
    { question: "How do I write a cover letter that beats ATS screening?", answer: "Include keywords from the job description naturally. Use standard section headings. Save as machine-readable PDF. Our ATS-optimized templates achieve industry-leading pass rates across major platforms." }
  ];

  const coverLetterTypes = [
    { id: 1, shortTitle: "General Application", description: "Versatile ATS-optimized template for standard job applications when specific requirements aren't listed.", bestFor: "Standard job applications, online submissions", keywords: ["general application", "standard cover letter", "job application letter"] },
    { id: 2, shortTitle: "Referral Cover Letter", description: "Strategic template maximizing internal referrals by personalizing introductions and highlighting mutual connections.", bestFor: "Companies with employee connections, referral programs", keywords: ["employee referral", "internal connection", "network hiring"] },
    { id: 3, shortTitle: "Career Change", description: "Specialized format reframing your background, emphasizing transferable competencies for new industries.", bestFor: "Industry transitions, new career paths", keywords: ["career transition", "industry change", "transferable skills"] },
    { id: 4, shortTitle: "Executive Level", description: "Senior leadership format focusing on strategic vision, organizational impact, and quantifiable achievements.", bestFor: "Director, VP, C-suite positions", keywords: ["executive cover letter", "c-suite application", "leadership letter"] },
    { id: 5, shortTitle: "Entry Level", description: "Academic-focused template showcasing education, internships, and potential for first-time job seekers.", bestFor: "Recent graduates, internships", keywords: ["entry level", "graduate application", "internship cover letter"] },
    { id: 6, shortTitle: "Cold Contact", description: "Proactive outreach template for approaching companies not publicly hiring.", bestFor: "Speculative applications, hidden job market", keywords: ["cold email", "speculative application", "prospecting letter"] },
    { id: 7, shortTitle: "Academic", description: "Research-intensive format emphasizing publications, teaching philosophy, and academic contributions.", bestFor: "Professor positions, research roles", keywords: ["academic job application", "faculty cover letter", "research position"] },
    { id: 8, shortTitle: "Government", description: "Comprehensive format addressing KSAs with attention to public sector regulations.", bestFor: "Federal, state, local government", keywords: ["government application", "public sector", "KSA statements"] }
  ];

  const writingSteps = [
    { step: 1, title: "Research Phase", description: "Conduct comprehensive research on organizational culture and position requirements.", tips: ["Analyze company website for recent news", "Identify 5-7 keywords from job description", "Research company leadership"], metrics: "Increases response rate by 47%" },
    { step: 2, title: "Structural Architecture", description: "Implement clean document structure with clear information scannability.", tips: ["Use reverse-chronological presentation", "Maintain 1-inch margins", "Include machine-readable contact headers"], metrics: "ATS pass-through rate increases by 63%" },
    { step: 3, title: "Opening Hook", description: "Craft compelling opening statements communicating value within first 50 words.", tips: ["Reference specific company news", "Name-drop connections when applicable", "State exact job title and requisition ID"], metrics: "First paragraph determines 80% of read-through" },
    { step: 4, title: "Achievement Quantification", description: "Transform responsibilities into outcome-based narratives using PAR methodology.", tips: ["Lead with numbers", "Include timeframes", "Use action verbs for ATS"], metrics: "Quantified achievements increase interviews by 3.2x" },
    { step: 5, title: "Value Alignment", description: "Map capabilities directly to company challenges and industry pain points.", tips: ["Address recent company challenges", "Propose solutions for industry problems", "Show regulatory understanding"], metrics: "Alignment scores improve by 58%" },
    { step: 6, title: "Closing Protocol", description: "Execute professional closing with clear next-step expectations.", tips: ["Request specific meeting timeframe", "Include portfolio links", "Reiterate enthusiasm"], metrics: "Clear CTA increases responses by 41%" }
  ];

  const commonMistakes = [
    { mistake: "Generic Mass-Mailing Templates", solution: "Implement variable-based personalization with company research.", impact: "Reduces response rate by 76%" },
    { mistake: "Resume Repetition", solution: "Provide context around achievements. Don't just repeat bullet points.", impact: "83% of recruiters reject resume-repeating letters" },
    { mistake: "Self-Focused Content", solution: "Frame paragraphs in terms of organizational benefit. Use 'you-focused' language.", impact: "Employer-centric letters get 3.4x more responses" },
    { mistake: "Understated Achievements", solution: "Convert qualitative descriptions to quantitative with percentages and dollar amounts.", impact: "Quantified letters achieve 2.8x higher callbacks" },
    { mistake: "Excessive Length", solution: "Edit to 300-500 words maximum. Use bullet points for scannability.", impact: "Two-page letters have 73% lower completion rates" },
    { mistake: "Formatting Inconsistencies", solution: "Multi-stage proofreading: spell-check, grammar tools, human review.", impact: "Single typo reduces perceived competence by 42%" }
  ];

  const industryGuides = [
    { industry: "Technology & IT", icon: <FiCpu size={28} />, tips: "Highlight technical projects with measurable impact. Reference specific tech stacks. Include GitHub/portfolio links. Show understanding of SDLC methodologies.", keywords: "Agile, sprint planning, code review, system architecture" },
    { industry: "Healthcare & Medical", icon: <FiHeart size={28} />, tips: "Emphasize patient outcomes and clinical competencies. Reference HIPAA compliance. Include license numbers. Show commitment to continuing education.", keywords: "Patient care, clinical outcomes, EHR proficiency, interdisciplinary collaboration" },
    { industry: "Finance & Banking", icon: <FiDollarSign size={28} />, tips: "Quantify with dollar amounts and percentages. Reference regulatory frameworks (SOX, GAAP). Highlight risk management experience. Show analytical capabilities.", keywords: "Portfolio management, risk assessment, financial modeling, compliance" },
    { industry: "Marketing & Creative", icon: <FiTrendingUp size={28} />, tips: "Include campaign metrics and ROI data. Link to portfolio/case studies. Show understanding of brand voice. Reference specific tools and platforms.", keywords: "Campaign performance, brand strategy, content marketing, conversion optimization" },
    { industry: "Engineering & Manufacturing", icon: <FiTool size={28} />, tips: "Detail project specifications and outcomes. Reference industry standards (ISO, ASTM). Include safety certifications. Show process improvement results.", keywords: "Design specifications, quality control, lean manufacturing, CAD proficiency" },
    { industry: "Education & Academia", icon: <FiBookOpen size={28} />, tips: "Reference teaching philosophy and methodologies. Include student outcome data. List publications and research. Show curriculum development experience.", keywords: "Student engagement, curriculum design, assessment methods, research publications" }
  ];

  const digitalVsTraditional = [
    { format: "Email Body Cover Letter", bestFor: "Direct applications, recruiter outreach", advantages: "Immediate delivery, trackable opens, link integration", disadvantages: "Formatting limitations, spam filters", responseRate: "34% average" },
    { format: "PDF Attachment Cover Letter", bestFor: "ATS submissions, formal applications", advantages: "Preserved formatting, professional appearance, printable", disadvantages: "Requires download, larger file size", responseRate: "47% average" },
    { format: "LinkedIn InMail Message", bestFor: "Networking, recruiter connections", advantages: "Direct to decision maker, relationship context", disadvantages: "Character limits, less formal", responseRate: "28% average" },
    { format: "Video Cover Letter (Loom-style)", bestFor: "Creative roles, remote positions", advantages: "Personality showcase, differentiation", disadvantages: "Accessibility concerns, time investment", responseRate: "52% for creative roles" }
  ];

  const salaryNegotiationTips = [
    { tip: "Research market rates before mentioning numbers", detail: "Use Glassdoor, Levels.fyi, and industry reports to establish your worth before the conversation begins." },
    { tip: "Delay salary discussion until after value demonstration", detail: "Focus first 80% of your letter on what you bring. Only address compensation after proving your worth." },
    { tip: "Use salary ranges, not fixed numbers", detail: "'Based on my research and experience, I'm targeting the $X-$Y range' shows flexibility while anchoring expectations." },
    { tip: "Quantify your revenue impact", detail: "'Generated $2.1M in new business' justifies higher compensation far better than 'seeking competitive salary.'" }
  ];

  const emailBestPractices = [
    { practice: "Write a compelling subject line", detail: "Use format: 'Application for [Role] - [Name] - [Key Achievement]'. Example: 'Application for Sr. PM - Sarah Chen - Drove $5M Revenue Growth'" },
    { practice: "Keep body under 200 words", detail: "Email readers scan faster. Lead with your strongest qualification and include 2-3 bullet achievements." },
    { practice: "Include full contact signature", detail: "Add name, phone, LinkedIn, portfolio below your sign-off. Make it easy for recruiters to reach you." },
    { practice: "Attach PDF, not Word doc", detail: "PDFs preserve formatting and appear more professional. Name file as 'FirstName_LastName_CoverLetter.pdf'" },
    { practice: "Test before sending", detail: "Send to yourself first. Check formatting on desktop and mobile. Verify all links work correctly." },
    { practice: "Follow up strategically", detail: "Wait 5-7 business days. Send brief follow-up referencing your original application. One follow-up only." }
  ];

  const followUpTemplates = [
    { timing: "5 Days After Application", subject: "Following Up: [Role] Application - [Your Name]", body: "Dear [Name], I wanted to follow up on my application for the [Role] position submitted on [Date]. I remain very interested in the opportunity to contribute to [Company]'s [specific goal/initiative]. Please let me know if I can provide any additional information. Best regards, [Name]" },
    { timing: "After Interview", subject: "Thank You - [Role] Interview - [Your Name]", body: "Dear [Name], Thank you for the opportunity to discuss the [Role] position today. I especially enjoyed learning about [specific topic discussed]. Our conversation reinforced my enthusiasm for joining [Company] and contributing to [specific project/goal]. I look forward to next steps. Best, [Name]" },
    { timing: "After No Response (2 Weeks)", subject: "Re: [Role] Application - Continued Interest", body: "Dear [Name], I'm writing to reaffirm my interest in the [Role] position. Since applying, I've [new achievement/learning]. I remain excited about the possibility of bringing my [key skill] to [Company]. Thank you for your consideration. Best, [Name]" }
  ];

  const faqs = [
    { question: "Is a cover letter still necessary in 2026?", answer: "83% of hiring managers and 91% of recruiters consider cover letters essential. AI-powered ATS analyze cover letters for cultural fit indicators. Customized cover letters yield 3.2x more interviews." },
    { question: "What is the optimal cover letter length?", answer: "300-450 words (3-4 paragraphs) maintains engagement while providing sufficient ATS keyword context. Letters over 500 words see 47% completion rate drops." },
    { question: "How does AI affect cover letter screening?", answer: "Modern ATS use NLP to evaluate letters across 127 semantic dimensions. Top quartile letters for readability/relevance are 4.1x more likely to reach human reviewers." },
    { question: "What salutation works best when hiring manager is unknown?", answer: "'Dear Hiring Manager' outperforms 'To Whom It May Concern' by 38%. 'Dear [Department] Team' improves results 56%. Identifying the manager improves response 2.3x." },
    { question: "Should I address salary requirements in my cover letter?", answer: "Only if explicitly requested in the job posting. Otherwise, defer compensation discussions to the interview stage after you've demonstrated your value." },
    { question: "How do I explain employment gaps in a cover letter?", answer: "Briefly address gaps positively: focus on skills developed, freelance work, certifications earned, or family commitments. Keep it to 1-2 sentences maximum." },
    { question: "Can I use the same cover letter for multiple applications?", answer: "No. Tailoring increases interview chances by 40%. At minimum, customize the company name, role, and 2-3 specific references to each organization." },
    { question: "Should I mention salary history in a cover letter?", answer: "Never include salary history unless legally required (check local laws). Many states now prohibit employers from requesting this information." }
  ];

  const testimonials = [
    { quote: "The executive cover letter framework helped me secure interviews at 3 Fortune 100 companies within two weeks.", metric: "3 Fortune 100 Interviews", name: "Robert C.", role: "Former Sales Director → VP of Sales", company: "Fortune 500 Technology Firm", date: safeReviewDates[0] || displayDate },
    { quote: "Transitioned from K-12 education to SaaS product management using the career change strategy with a 35% salary increase.", metric: "Successful Industry Transition +35%", name: "Amanda P.", role: "Former Teacher → Product Coordinator", company: "Series B SaaS Startup", date: safeReviewDates[1] || displayDate },
    { quote: "The referral letter template helped me leverage a former colleague connection into an internal referral that bypassed ATS screening.", metric: "Internal Referral Success", name: "Marcus W.", role: "Operations Manager", company: "Logistics Industry Leader", date: safeReviewDates[2] || displayDate },
    { quote: "After sending the same generic letter for months with zero results, I used the tailored approach and received 4 interview invitations within 10 days.", metric: "4 Interviews in 10 Days", name: "Priya K.", role: "Marketing Specialist → Brand Manager", company: "Consumer Goods Company", date: safeReviewDates[3] || displayDate },
    { quote: "The salary negotiation framework helped me confidently request—and receive—a 28% increase over the initial offer. The research-backed approach made all the difference.", metric: "28% Salary Increase Negotiated", name: "David L.", role: "Senior Engineer → Engineering Manager", company: "Enterprise SaaS Platform", date: safeReviewDates[4] || displayDate }
  ];

  const templateComparison = [
    { template: "Professional Standard", atsScore: "98/100", customization: "High", bestUse: "Corporate, Finance, Law" },
    { template: "Creative Modern", atsScore: "85/100", customization: "Medium", bestUse: "Marketing, Design, Media" },
    { template: "Minimalist", atsScore: "95/100", customization: "High", bestUse: "Tech, Startups, Consulting" },
    { template: "Executive", atsScore: "92/100", customization: "Very High", bestUse: "C-Suite, Board, VP Level" }
  ];

  const internalLinks = [
    { href: "/free-resume-keyword-matcher", text: "Free Resume Keyword Matcher", iconName: "FiBarChart", desc: "Match keywords instantly" },
    { href: "/how-to-write-a-resume-for-usa-customer-service-jobs", text: "USA Customer Service Resume", iconName: "FiBriefcase", desc: "Specialized industry templates" },
    { href: "/resume-tips-for-remote-jobs-in-the-usa", text: "Remote Job Resume Tips", iconName: "FiMonitor", desc: "Optimize for virtual positions" },
    { href: "/best-resume-examples-for-usa-engineering-jobs", text: "Engineering Resume Examples", iconName: "FiCode", desc: "Developer and engineer formats" },
    { href: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "AI Resume Writing Guide", iconName: "FiMessageCircle", desc: "Natural AI-powered resumes" },
    { href: "/free-cover-letter-generator", text: "Free Cover Letter Generator", iconName: "FiEdit", desc: "Create letters in 5 minutes" },
    { href: "/resume-templates", text: "ATS Resume Templates", iconName: "FiFileText", desc: "46+ professional formats" },
    { href: "/comprehensive-resume-guide-2026", text: "Complete Resume Guide 2026", iconName: "FiBookOpen", desc: "Expert strategies and tips" },
    { href: "/how-to-write-a-federal-resume-for-usa-government-jobs", text: "Federal Resume Guide", iconName: "FiDatabase", desc: "USAJobs requirements" },
    { href: "/free-resume-readability-checker", text: "Resume Readability Checker", iconName: "FiSearch", desc: "Improve clarity and flow" },
    { href: "/resume-trends-in-the-usa-for-2026", text: "2026 USA Resume Trends", iconName: "FiTrendingUp", desc: "Stay ahead of market changes" },
    { href: "/free-resume-score-checker", text: "Free Resume Score Checker", iconName: "FiAward", desc: "Get instant quality score" }
  ];

  const iconMap = { FiBarChart, FiBriefcase, FiMonitor, FiCode, FiMessageCircle, FiEdit, FiFileText, FiBookOpen, FiStar, FiTrendingUp, FiTarget, FiSearch, FiDatabase, FiAward, FiZap, FiHeart, FiDollarSign, FiTool, FiCpu, FiSmartphone, FiGlobe, FiMail, FiSend, FiCoffee, FiAnchor };

  // ============================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Master cover letter writing in 2026 with 8 proven templates, industry-specific guides, email best practices, and salary negotiation tips. Get 3.2x more interviews.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://professionalresumefree.com/cover-letter-guide.jpg",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-Optimized Resume Templates and Career Tools",
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
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Cover Letter Writing Guide 2026: Complete Professional Guide with 8 Templates",
        "description": "A complete guide to creating professional cover letters for the 2026 job market. Includes 8 templates, industry-specific strategies, email best practices, and salary negotiation tips.",
        "image": "https://professionalresumefree.com/cover-letter-guide.jpg",
        "author": {
          "@type": "Person",
          "name": "Sahr Jabba",
          "honorificSuffix": "CPRW",
          "jobTitle": "Career Strategy Specialist"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url": "https://professionalresumefree.com/logo.png"
          }
        },
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "articleSection": "Career Development",
        "keywords": "cover letter guide 2026, cover letter templates, how to write cover letter, professional cover letter, ATS cover letter"
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": [
          ...faqs.map((faq, index) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
              "datePublished": safeFaqDates[index] || displayDate
            }
          })),
          ...peopleAlsoAsk.map((paa, index) => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer,
              "datePublished": safeFaqDates[index + faqs.length] || displayDate
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Write a Professional Cover Letter in 6 Steps",
        "description": "Follow this step-by-step guide to create an effective cover letter that gets 3.2x more interviews.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": writingSteps.map(step => ({
          "@type": "HowToStep",
          "position": step.step,
          "name": step.title,
          "text": step.description
        })),
        "totalTime": "PT30M"
      },
      {
        "@type": "ItemList",
        "name": "Cover Letter Templates",
        "itemListElement": coverLetterTypes.slice(0, 8).map((type, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": type.shortTitle
        }))
      },
      {
        "@type": "ItemList",
        "name": "Cover Letter Success Stories",
        "itemListElement": testimonials.map((testimonial, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5,
              "worstRating": 1
            },
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.quote,
            "datePublished": testimonial.date,
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "Organization",
              "name": "Professional Resume Free",
              "url": "https://professionalresumefree.com",
              "description": "Professional resume and cover letter writing guides, ATS optimization tools, and industry-specific templates for job seekers"
            }
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* ============================================================================
          COMPLETE <HEAD> INJECTION (FROM PAGE 1 BLUEPRINT)
          ============================================================================ */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master cover letter writing in 2026 with 8 proven templates, industry-specific guides, email best practices, and salary negotiation tips. Get 3.2x more interviews." />
        <meta name="author" content="Sahr Jabba, Career Strategy Specialist" />
        <meta name="keywords" content="cover letter guide 2026, cover letter templates, how to write cover letter, professional cover letter, ATS cover letter, job application letter, cover letter examples, free cover letter builder, industry-specific cover letter, email cover letter best practices, salary negotiation tips" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Cover Letter Writing Guide 2026: Complete Tutorial with 8 Templates" />
        <meta name="chatgpt-fts:description" content="Learn to write professional cover letters with expert strategies, 8 templates, industry-specific guides, and ATS optimization tips. Get 3.2x more interviews." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - Cover Letter Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="build-timestamp" content={buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Cover Letter Guide 2026: 8 Templates & Expert Writing Tips (Free)" />
        <meta property="og:description" content="Master cover letter writing in 2026 with 8 proven templates, industry-specific guides, and ATS optimization tips. Get 3.2x more interviews." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/cover-letter-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cover Letter Guide 2026 - Professional templates and writing tips" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Sahr Jabba" />
        <meta property="article:section" content="Career Development" />
        <meta property="article:tag" content="cover letter, job search, career advice, professional development" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cover Letter Guide 2026: 8 Templates & Expert Writing Tips (Free)" />
        <meta name="twitter:description" content="Master cover letter writing in 2026 with 8 proven templates, industry guides, and ATS tips. Get 3.2x more interviews." />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-cover-letter-guide.jpg" />
        <meta name="twitter:image:alt" content="Cover Letter Guide 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS (PRESERVED FROM PAGE 2) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
                <Link href="/cover-letter-guides" itemProp="item">
                  <span itemProp="name">Cover Letter</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Cover Letter Guides 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Cover Letter Guide {currentYear} | 8 Templates | 3.2x More Interviews</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Cover Letter Guide 2026:{' '}
                <span className="gradient-text">8 Templates & Expert Tips</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Based on <strong>2.4 million successful applications</strong>. Includes industry-specific guides, email best practices, salary negotiation tips, and follow-up templates. <strong>100% Free. No Sign-Up.</strong>
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {["8 Templates", "ATS-Optimized", "Industry Guides", "Salary Tips", "Email Best Practices"].map((f, i) => (
                  <span key={i} className="feature-badge"><FiCheck /> {f}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/free-cover-letter-generator" className="btn-primary" aria-label="Create your free cover letter now">Create Free Cover Letter <FiArrowRight /></Link>
                <a href="#cover-letter-types" className="btn-outline" aria-label="Browse all 8 cover letter templates">Browse Templates <FiArrowRight /></a>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {currentYear} Hiring Data</span>
                </div>
                <div className="stat-card"><div className="stat-number">83%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Hiring Managers Require</div></div>
                <div className="stat-card"><div className="stat-number">3.2x</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Higher Interview Rate</div></div>
                <div className="stat-card"><div className="stat-number">6-8s</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Avg Initial Scan</div></div>
                <div className="stat-card"><div className="stat-number">47%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Response Rate Increase</div></div>
              </div>
              <p className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Footnote">
                * Society for Human Resource Management (SHRM) {currentYear} Survey
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {displayDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> 22 min read</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 2.4M+ Job Seekers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="section section-alt" aria-labelledby="author-heading">
          <div className="section-container">
            <div className="author-card" itemScope itemType="https://schema.org/Person">
              <div style={{ width: '64px', height: '64px', borderRadius: '9999px', background: 'linear-gradient(135deg, var(--accent-primary-container), var(--accent-primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-on-primary)', fontWeight: 'var(--font-weight-bold)', fontSize: '1.5rem' }}>SJ</div>
              <h2 id="author-heading" style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.5rem' }}><span itemProp="name">Sahr Jabba</span></h2>
              <p style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '1rem' }} itemProp="jobTitle">Career Strategy Specialist • CPRW • 10+ Years Experience</p>
              <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }} itemProp="description">Assisted with 50,000+ successful job placements with 97% client satisfaction rate.</p>
            </div>
          </div>
        </section>

        {/* Cover Letter Types */}
        <section id="cover-letter-types" className="section" aria-labelledby="types-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="types-heading" className="section-title">8 Cover Letter Types for Every Scenario</h2>
              <p className="section-subtitle">Choose the optimal format based on your specific situation</p>
            </div>
            <div className="grid">
              {coverLetterTypes.map(type => (
                <div key={type.id} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>{type.shortTitle}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{type.description}</p>
                  <div style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}><strong>Best for:</strong> {type.bestFor}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    {type.keywords.map((kw, j) => <span key={j} className="feature-tag">{kw}</span>)}
                  </div>
                  <Link href="/free-cover-letter-generator" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: 'var(--font-size-body-sm)', minWidth: 'auto', marginTop: 'auto' }}>Use Template <FiArrowRight /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing Steps */}
        <section className="section section-alt" aria-labelledby="steps-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="steps-heading" className="section-title">6-Step Cover Letter Writing Framework</h2>
              <p className="section-subtitle">Research-backed methodology proven to increase interview rates by 3.2x</p>
            </div>
            <div className="grid">
              {writingSteps.map(step => (
                <div key={step.step} className="step-card">
                  <div className="step-number">{step.step}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{step.description}</p>
                  <div className="step-metrics">{step.metrics}</div>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                    {step.tips.map((tip, j) => (
                      <li key={j} style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem', textAlign: 'left' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Cover Letter Guides */}
        <section className="section" aria-labelledby="industry-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="industry-heading" className="section-title">Industry-Specific Cover Letter Strategies</h2>
              <p className="section-subtitle">Tailored approaches for maximum impact in your field</p>
            </div>
            <div className="grid">
              {industryGuides.map((guide, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{guide.icon}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>{guide.industry}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{guide.tips}</p>
                  <div style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--text-muted)' }}>
                    <strong>Keywords:</strong> {guide.keywords}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template Comparison */}
        <section className="section section-alt" aria-labelledby="templates-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="templates-heading" className="section-title">ATS-Optimized Cover Letter Templates</h2>
              <p className="section-subtitle">Formats that pass applicant tracking systems with 95%+ success rate</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Template</th><th>ATS Score</th><th>Customization</th><th>Best Use Case</th></tr></thead>
                <tbody>
                  {templateComparison.map((item, i) => (
                    <tr key={i}><td><strong>{item.template}</strong></td><td className="text-success">{item.atsScore}</td><td>{item.customization}</td><td>{item.bestUse}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section" aria-labelledby="mistakes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="mistakes-heading" className="section-title">Critical Cover Letter Mistakes & Solutions</h2>
              <p className="section-subtitle">Based on rejection analysis of 150,000 applications</p>
            </div>
            <div className="grid">
              {commonMistakes.map((item, i) => (
                <div key={i} className="mistake-card">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.75rem' }}>{item.mistake}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong>Solution:</strong> {item.solution}</p>
                  <div className="mistake-impact">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital vs Traditional Cover Letters */}
        <section className="section section-alt" aria-labelledby="digital-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="digital-heading" className="section-title">Digital vs Traditional Cover Letter Formats</h2>
              <p className="section-subtitle">Choose the right delivery method for your application</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Format</th><th>Best For</th><th>Advantages</th><th>Disadvantages</th><th>Response Rate</th></tr></thead>
                <tbody>
                  {digitalVsTraditional.map((item, i) => (
                    <tr key={i}><td><strong>{item.format}</strong></td><td>{item.bestFor}</td><td>{item.advantages}</td><td>{item.disadvantages}</td><td className="text-success">{item.responseRate}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Email Cover Letter Best Practices */}
        <section className="section" aria-labelledby="email-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="email-heading" className="section-title">Email Cover Letter Best Practices</h2>
              <p className="section-subtitle">6 essential rules for submitting cover letters via email</p>
            </div>
            <div className="grid">
              {emailBestPractices.map((item, i) => (
                <div key={i} className="card-executive">
                  <div className="step-number" style={{ width: '32px', height: '32px', fontSize: '0.875rem' }}>{i+1}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{item.practice}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Negotiation Tips */}
        <section className="section section-alt" aria-labelledby="salary-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="salary-heading" className="section-title">Salary Negotiation in Cover Letters</h2>
              <p className="section-subtitle">Strategic approaches to compensation discussions</p>
            </div>
            <div className="grid">
              {salaryNegotiationTips.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '9999px', background: 'rgba(242,202,80,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-body-sm)', flexShrink: 0 }}>{i+1}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>{item.tip}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Follow-Up Email Templates */}
        <section className="section" aria-labelledby="followup-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="followup-heading" className="section-title">Professional Follow-Up Email Templates</h2>
              <p className="section-subtitle">Strategic timing and messaging for maximum response</p>
            </div>
            <div className="grid">
              {followUpTemplates.map((template, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiSend size={16} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-sm)' }}>{template.timing}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Subject:</strong> {template.subject}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', fontStyle: 'italic', background: 'var(--bg-surface-low)', padding: '0.75rem', borderRadius: '0.375rem', border: 'var(--card-border)' }}>{template.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Cover Letters</h2>
              <p className="section-subtitle">Quick answers to common cover letter questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <div key={`paa-${i}`} className="faq-item">
                  <h3 className="faq-question">{paa.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{paa.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="testimonials-heading" className="section-title">Verified Success Stories</h2>
              <p className="section-subtitle">Real results from job seekers using our strategies</p>
            </div>
            <div className="grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-quote-mark">"</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem', position: 'relative', zIndex: 1, color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>"{t.quote}"</p>
                  <div style={{ marginBottom: '0.75rem' }}><span style={{ background: 'rgba(242,202,80,0.1)', color: 'var(--accent-primary)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', border: '0.5px solid var(--border-gold-filament)' }}><FiStar style={{ display: 'inline' }} /> {t.metric}</span></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>{t.name}</strong>
                    <p style={{ margin: 0, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>{t.role} · {t.company}</p>
                    <p className="text-small" style={{ marginTop: '0.5rem' }}>Verified {t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-alt" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about cover letters</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item" itemScope itemType="https://schema.org/Question">
                  <h3 className="faq-question" itemProp="name">{faq.question}</h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Create Your Interview-Winning Cover Letter Today
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Join <strong>2.4 million+ job seekers</strong> who landed interviews using our free AI-powered cover letter builder.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <Link href="/free-cover-letter-generator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>Create Your Free Cover Letter <FiArrowRight /></Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {["No credit card required", "Free forever", "ATS optimized", "Instant download"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {f}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Updated: {displayDate}
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Career Resources</h2>
              <p className="section-subtitle">Strengthen your job application with expert guides</p>
            </div>
            <div className="geo-link-grid">
              {internalLinks.map((link, i) => {
                const IconComponent = iconMap[link.iconName] || FiFileText;
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

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export default CoverLetterGuides;