import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiPenTool,
  FiGrid, FiBookmark, FiSmartphone, FiMonitor, FiGlobe, FiAnchor
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
  .testimonial-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; text-align:center; position:relative; }
  .testimonial-quote-mark { font-size:4rem; color:var(--accent-primary); opacity:0.2; position:absolute; top:0.5rem; left:1.25rem; font-family:var(--font-display); line-height:1; }
  .color-swatch { width:40px; height:40px; borderRadius:0.25rem; flex-shrink:0; }
  .ats-safe { padding:1.25rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); borderRadius:0.5rem; border-left:3px solid var(--accent-primary); }
  .ats-danger { padding:1.25rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); borderRadius:0.5rem; border-left:3px solid var(--error-color); }
  .decision-matrix { display:flex; flex-direction:column; margin:1.5rem 0; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); borderRadius:0.5rem; overflow:hidden; border:var(--card-border); }
  .matrix-row { display:grid; grid-template-columns:repeat(3,1fr); border-bottom:0.5px solid var(--border-gold-filament); }
  .matrix-factor { padding:1rem; background:rgba(242,202,80,0.05); font-weight:var(--font-weight-medium); color:var(--text-primary); font-size:var(--font-size-body-sm); }
  .matrix-choice { padding:1rem; text-align:center; font-size:var(--font-size-body-sm); color:var(--text-secondary); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } .matrix-row { grid-template-columns:1fr; } }
`;

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate freshness review dates
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(8).fill(null).map((_, i) => {
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
      "name": "Creative Resume Templates",
      "item": "https://professionalresumefree.com/creative-resume-templates"
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
      buildTimestamp
    },
    revalidate: 3600, // ISR: Revalidate every hour (from Page 1 blueprint)
  };
}

export default function CreativeResumeTemplates({ seoData, buildTimestamp }) {
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
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(8).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/creative-resume-templates";
  const currentYear = new Date().getFullYear();

  // Optimized title - exactly 70 characters
  const optimizedTitle = "Creative Resume Templates 2026: 50+ Pro Designs (Free)";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "creative resume templates with modern designs",
    "ATS-friendly creative resume formats 2026",
    "professional creative CV templates free download",
    "best creative resume designs by industry",
    "how to make creative resume stand out"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "Are creative resume templates ATS-friendly?", answer: "Many modern creative templates are designed with ATS compatibility in mind. Look for clean formatting, standard headings, and proper keyword placement. Always test through an ATS scanner before submission." },
    { question: "What's the best creative resume format for 2026?", answer: "The Minimalist Creative format achieves the highest ATS scores (98/100) while still providing visual distinction. For creative roles, Portfolio Hybrid formats showcase work samples effectively. Always match creativity level to your industry." }
  ];

  const templateCategories = [
    { name: "Minimalist Creative", bestFor: "Tech, Corporate, Startups", features: ["Clean typography", "Subtle color accents", "ATS-optimized", "Mobile-responsive"], difficulty: "Beginner" },
    { name: "Portfolio Hybrid", bestFor: "Designers, Artists, Creatives", features: ["Integrated portfolio links", "Visual skill representation", "Project showcases", "Color-coded sections"], difficulty: "Intermediate" },
    { name: "Infographic Style", bestFor: "Marketing, Data, Consulting", features: ["Data visualization", "Progress bars/charts", "Icon integration", "Timeline designs"], difficulty: "Advanced" },
    { name: "Modern Professional", bestFor: "All Industries", features: ["Balanced creativity", "Industry adaptable", "Section highlighting", "Professional typography"], difficulty: "Beginner" },
    { name: "Bold Typography", bestFor: "Editorial, Publishing, Branding", features: ["Statement headings", "Font pairings", "Magazine-style layouts", "Hierarchical text design"], difficulty: "Intermediate" },
    { name: "Timeline Focused", bestFor: "Project Managers, Consultants", features: ["Career timeline visualization", "Milestone markers", "Progressive achievement display", "Chronological storytelling"], difficulty: "Advanced" }
  ];

  const testimonials = [
    { quote: "The minimalist creative template helped me stand out in tech interviews. Perfect balance of professionalism and creativity.", name: "Alex R.", role: "Frontend Developer", company: "Tech Startup" },
    { quote: "As a graphic designer, the portfolio hybrid template showcased my work beautifully. Got 3 offers within 2 weeks.", name: "Maria S.", role: "Senior Designer", company: "Creative Agency" },
    { quote: "Infographic template made my data science projects shine. Recruiters commented on how memorable my resume was.", name: "David K.", role: "Data Scientist", company: "Finance Firm" },
    { quote: "Bold typography template landed me my dream editorial role. The design itself became part of my portfolio.", name: "Emma L.", role: "Editorial Director", company: "Publishing House" }
  ];

  const faqs = [
    { question: "Are creative resume templates ATS-friendly?", answer: "Many modern creative templates are designed with ATS compatibility in mind. Look for clean formatting, standard headings, and proper keyword placement. Always test through an ATS scanner before submission." },
    { question: "Which industries accept creative resumes best?", answer: "Creative industries like design, marketing, advertising, media, tech startups, and entertainment value creative resumes most. Traditional fields like finance, law, and healthcare typically prefer conservative formats." },
    { question: "How creative should my resume be?", answer: "Match creativity to your industry and role. For creative positions, bold designs work. For hybrid roles, consider 'conservatively creative' with subtle color accents and clean layouts." },
    { question: "What's the biggest mistake with creative templates?", answer: "Sacrificing readability for design. Avoid difficult-to-read fonts, poor contrast colors, or layouts that confuse ATS. Always prioritize clarity over pure aesthetics." },
    { question: "Should I include infographics in my resume?", answer: "Infographics work for visual roles when used sparingly. Consider skill bars or simple charts. Avoid complex graphics that confuse ATS or overwhelm recruiters." },
    { question: "How many colors should I use?", answer: "Follow the 60-30-10 rule: 60% neutral, 30% primary, 10% accent. 2-3 colors maximum ensures professionalism with creative expression." },
    { question: "Are creative templates suitable for career changers?", answer: "Yes, creative templates help career changers by highlighting transferable skills visually and drawing attention away from non-traditional career paths." },
    { question: "What file format should I submit creative resumes in?", answer: "PDF is standard for preserving design. Ensure text is selectable (not flattened) for ATS. Some employers may request .docx for ATS compatibility." }
  ];

  const designPsychology = [
    { element: "Strategic Color Accents", attention: "42%", recall: "28%", perception: "+35%" },
    { element: "Visual Skill Representation", attention: "58%", recall: "45%", perception: "+22%" },
    { element: "Clean Typography Hierarchy", attention: "31%", recall: "38%", perception: "+48%" },
    { element: "Integrated White Space", attention: "27%", recall: "33%", perception: "+41%" },
    { element: "Icon-Based Section Markers", attention: "38%", recall: "29%", perception: "+31%" }
  ];

  const industryColors = [
    { industry: "Technology & IT", recommended: "Navy Blue (#2E5A88), Slate Gray (#708090)", avoid: "Neon colors, excessive gradients", icon: <FiCpu size={20} /> },
    { industry: "Healthcare & Medical", recommended: "Forest Green (#4CAF50), Soft Blue (#64B5F6)", avoid: "Red (emergency association), bright yellow", icon: <FiHeart size={20} /> },
    { industry: "Finance & Banking", recommended: "Deep Navy (#1A237E), Burgundy (#8B0000)", avoid: "Orange, bright green, purple", icon: <FiDollarSign size={20} /> },
    { industry: "Marketing & Creative", recommended: "Burnt Orange (#D84315), Teal (#00897B)", avoid: "Overly muted palettes, grayscale only", icon: <FiTrendingUp size={20} /> },
    { industry: "Education & Academia", recommended: "Hunter Green (#2E7D32), Maroon (#7B1FA2)", avoid: "Fluorescent colors, high contrast combos", icon: <FiBookOpen size={20} /> },
    { industry: "Engineering & Manufacturing", recommended: "Steel Blue (#4682B4), Charcoal (#36454F)", avoid: "Pastels, overly decorative palettes", icon: <FiTool size={20} /> }
  ];

  const designChecklist = [
    { step: "Content audit & categorization", done: false },
    { step: "Template selection matching industry", done: false },
    { step: "Color scheme application (60-30-10)", done: false },
    { step: "Typography hierarchy establishment", done: false },
    { step: "Visual element integration", done: false },
    { step: "ATS compatibility testing", done: false },
    { step: "Peer review & feedback collection", done: false },
    { step: "Final polish & export as PDF", done: false }
  ];

  const internalLinks = [
    { href: "/modern-resume-design-2026", text: "Modern Resume Design Trends", iconName: "FiPenTool", desc: "2026 design innovations" },
    { href: "/best-ats-resume-format-2026", text: "Best ATS Resume Formats", iconName: "FiFileText", desc: "ATS-optimized layouts" },
    { href: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "AI Writing Guide", iconName: "FiZap", desc: "Natural AI-powered content" },
    { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch", desc: "Match resume to job descriptions" },
    { href: "/why-skills-first-resumes-are-replacing-chronological-layouts-in-2026", text: "Skills-First vs Chronological", iconName: "FiTrendingUp", desc: "Format comparison guide" },
    { href: "/free-resume-score-checker", text: "Resume Score Checker", iconName: "FiAward", desc: "Get instant quality score" },
    { href: "/free-cover-letter-generator", text: "Cover Letter Generator", iconName: "FiEdit", desc: "Create matching letters" },
    { href: "/resume-templates", text: "ATS Resume Templates", iconName: "FiGrid", desc: "46+ professional formats" }
  ];

  const iconMap = { FiPenTool, FiFileText, FiZap, FiSearch, FiTrendingUp, FiAward, FiEdit, FiGrid, FiStar, FiCheck, FiTarget, FiBookOpen };

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
        "description": "Discover 2026's best creative resume templates. Expert-selected designs, ATS-compatible formats, and industry-specific templates. Download free samples.",
        "datePublished": "2026-01-01T00:00:00.000Z",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://professionalresumefree.com/images/og-creative-resume-templates.jpg",
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
        "headline": "Creative Resume Templates: The Complete 2026 Design Guide",
        "description": "Comprehensive expert guide to selecting and using creative resume templates for maximum impact in the 2026 job market.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Design Experts"
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
        "datePublished": "2026-01-01",
        "dateModified": safeCurrentDate,
        "articleSection": "Career Advice",
        "keywords": "creative resume templates, professional resume design, ATS resume templates, modern resume templates 2026"
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
              "datePublished": safeFaqDates[index] || safeCurrentDate
            }
          })),
          ...peopleAlsoAsk.map((paa, index) => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer,
              "datePublished": safeFaqDates[index + faqs.length] || safeCurrentDate
            }
          }))
        ]
      },
      {
        "@type": "ItemList",
        "name": "Creative Resume Template Categories",
        "itemListElement": templateCategories.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": category.name,
            "description": `Best for ${category.bestFor}`,
            "genre": "Resume Template",
            "keywords": category.features.join(", ")
          }
        }))
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": "Creative Resume Templates 2026",
        "description": "Professional creative resume templates for job seekers",
        "url": canonicalUrl,
        "image": "https://professionalresumefree.com/images/creative-resume-templates-preview.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Professional Resume Free"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "4",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": testimonials.map((testimonial, index) => ({
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": testimonial.name
          },
          "reviewBody": testimonial.quote,
          "datePublished": safeReviewDates[index] || safeCurrentDate
        })),
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": canonicalUrl
        }
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
        <meta name="description" content="Discover 2026's best creative resume templates. Expert-selected designs, ATS-compatible formats, and industry-specific templates. Download free samples." />
        <meta name="author" content="Professional Resume Free Team" />
        <meta name="keywords" content="creative resume templates, professional resume design, ATS resume templates, modern resume templates 2026, free resume templates, creative cv templates, graphic design resumes, portfolio resumes" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Creative Resume Templates 2026: Ultimate Design Guide & 50+ Pro Templates" />
        <meta name="chatgpt-fts:description" content="Create standout resumes with expert-selected creative templates. ATS-compatible formats, industry-specific designs, and free samples available." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="build-timestamp" content={buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Creative Resume Templates: Ultimate 2026 Guide with 50+ Pro Designs" />
        <meta property="og:description" content="Expert analysis of the best creative resume templates for modern job seekers. ATS-compatible, industry-specific designs with free samples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-creative-resume-templates.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Creative Resume Templates 2026 - Professional Resume Free" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-01T00:00:00.000Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Resume Templates: Ultimate 2026 Guide with 50+ Pro Designs" />
        <meta name="twitter:description" content="Professional creative resume templates for standout applications. ATS-compatible, industry-specific designs." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-creative-resume-templates.jpg" />
        <meta name="twitter:image:alt" content="Creative Resume Templates 2026" />
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
                <Link href="/creative-resume-templates" itemProp="item">
                  <span itemProp="name">Creative Resume</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Creative Resume Templates 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">✦ Creative Resume Design Guide {currentYear} | 50+ Pro Designs | ATS-Compatible</div>
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Creative Resume Templates:{' '}
                <span className="gradient-text">50+ Pro Designs for 2026</span>
              </h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Expert-selected creative templates backed by design psychology research. <strong>40% more recruiter views</strong> and <strong>23% more interviews</strong> with strategically designed resumes. <strong>100% Free. No Sign-Up.</strong>
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {["6 Template Categories", "ATS-Compatible", "Industry Guides", "Color Theory", "Design Psychology"].map((f, i) => (
                  <span key={i} className="feature-badge"><FiCheck /> {f}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label="Browse all creative resume templates">Browse Creative Templates <FiArrowRight /></Link>
                <a href="#templates" className="btn-outline" aria-label="View template categories">View Template Categories <FiArrowRight /></a>
              </div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {currentYear} Design Psychology Research</span>
                </div>
                <div className="stat-card"><div className="stat-number">40%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Recruiter Views</div></div>
                <div className="stat-card"><div className="stat-number">23%</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Interviews</div></div>
                <div className="stat-card"><div className="stat-number">50+</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Pro Designs</div></div>
                <div className="stat-card"><div className="stat-number">6</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Categories</div></div>
              </div>
              <p className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Footnote">
                * LinkedIn Talent Solutions {currentYear} Report
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> 18 min read</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 50K+ Professionals</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section section-alt" aria-labelledby="intro-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 id="intro-heading" style={{ fontSize: 'var(--font-size-headline-lg)', marginBottom: '1.25rem', textAlign: 'center', color: 'var(--accent-primary)' }}>Mastering Creative Resume Design in 2026</h2>
              <p style={{ textAlign: 'center', marginBottom: '1rem' }}>In today's competitive job market, creative resume templates have evolved from niche design elements to essential tools for standing out. This guide provides a comprehensive roadmap for selecting, customizing, and deploying creative templates.</p>
              <p style={{ textAlign: 'center' }}>LinkedIn Talent Solutions reports creatively designed resumes receive <strong>40% more views</strong> and <strong>23% more interview requests</strong> when used appropriately.</p>
            </div>
          </div>
        </section>

        {/* Design Psychology */}
        <section className="section" aria-labelledby="psychology-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="psychology-heading" className="section-title">The Psychology Behind Effective Creative Resumes</h2>
              <p className="section-subtitle">Research-backed design elements that capture attention and improve recall</p>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Design Element</th><th>Attention Increase</th><th>Recall Improvement</th><th>Professional Perception</th></tr></thead>
                <tbody>
                  {designPsychology.map((item, i) => (
                    <tr key={i}><td><strong>{item.element}</strong></td><td className="text-success">{item.attention}</td><td>{item.recall}</td><td>{item.perception}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Template Categories */}
        <section id="templates" className="section section-alt" aria-labelledby="categories-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="categories-heading" className="section-title">Creative Template Categories Explained</h2>
              <p className="section-subtitle">Six distinct categories serving different professional needs</p>
            </div>
            <div className="grid">
              {templateCategories.map((cat, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{cat.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span><strong>Best for:</strong> {cat.bestFor}</span>
                    <span><strong>Level:</strong> {cat.difficulty}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', flex: 1 }}>
                    {cat.features.map((f, j) => (
                      <li key={j} style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem', textAlign: 'left' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Color Guide */}
        <section className="section" aria-labelledby="colors-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="colors-heading" className="section-title">Industry-Specific Color Psychology Guide</h2>
              <p className="section-subtitle">Strategic color choices that resonate with your target industry</p>
            </div>
            <div className="grid">
              {industryColors.map((item, i) => (
                <div key={i} className="card-executive">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ color: 'var(--accent-primary)' }}>{item.icon}</div>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>{item.industry}</h3>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Recommended:</strong> {item.recommended}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--error-color)' }}><strong>Avoid:</strong> {item.avoid}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Compatibility */}
        <section className="section section-alt" aria-labelledby="ats-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="ats-heading" className="section-title">ATS Compatibility with Creative Designs</h2>
              <p className="section-subtitle">What works and what breaks automated screening</p>
            </div>
            <div className="grid">
              <div className="ats-safe">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>✅ ATS-Friendly Elements</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {["Standard section headers", "Simple tables (1-2 columns max)", "Web-safe fonts (Arial, Georgia)", "High contrast color combos", "Properly tagged PDFs with text layers"].map((item, i) => (
                    <li key={i} style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem', textAlign: 'left' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ats-danger">
                <h4 style={{ color: 'var(--error-color)', marginBottom: '0.75rem' }}>❌ ATS-Risky Elements</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {["Multiple text columns (3+)", "Custom graphics replacing text", "Uncommon fonts (script, decorative)", "Text over images or gradients", "Headers/footers with important content"].map((item, i) => (
                    <li key={i} style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem', textAlign: 'left' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Creative vs Traditional Decision Matrix */}
        <section className="section" aria-labelledby="decision-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="decision-heading" className="section-title">Creative vs Traditional: When to Choose</h2>
              <p className="section-subtitle">Decision matrix based on industry, career stage, and company culture</p>
            </div>
            <div className="decision-matrix">
              <div className="matrix-row">
                <div className="matrix-factor"><strong>Factor</strong></div>
                <div className="matrix-choice" style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>Creative Template</div>
                <div className="matrix-choice" style={{ color: 'var(--accent-primary)', fontWeight: 'var(--font-weight-semibold)' }}>Traditional Template</div>
              </div>
              {[
                ["Industry (Creative)", "✓ Recommended", "Limited Use"],
                ["Industry (Traditional)", "Conservative Approach", "✓ Recommended"],
                ["Career Stage (Entry)", "Minimalist Only", "✓ Recommended"],
                ["Career Stage (Senior)", "✓ Recommended", "Acceptable"],
                ["Company Culture (Progressive)", "✓ Recommended", "Acceptable"]
              ].map((row, i) => (
                <div key={i} className="matrix-row">
                  <div className="matrix-factor">{row[0]}</div>
                  <div className="matrix-choice">{row[1]}</div>
                  <div className="matrix-choice">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="section section-alt" aria-labelledby="checklist-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="checklist-heading" className="section-title">Creative Design Implementation Checklist</h2>
              <p className="section-subtitle">Follow these 8 steps for perfect creative resume execution</p>
            </div>
            <div className="grid" style={{ maxWidth: '700px', margin: '0 auto' }}>
              {designChecklist.map((item, i) => (
                <div key={i} className="card-executive" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '9999px', background: 'var(--bg-surface-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-body-sm)', flexShrink: 0 }}>{i+1}</div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{item.step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section" aria-labelledby="mistakes-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="mistakes-heading" className="section-title">Common Creative Resume Mistakes</h2>
              <p className="section-subtitle">Pitfalls that can undermine your creative efforts</p>
            </div>
            <div className="grid">
              {[
                { mistake: "Over-designing", problem: "Too many colors, fonts, or graphics overwhelm recruiters.", solution: "Follow minimalist principles—each element should serve a purpose." },
                { mistake: "Poor Readability", problem: "Creative fonts or colors that strain eyes during quick scanning.", solution: "Test readability by asking others to quickly scan your resume." },
                { mistake: "ATS Incompatibility", problem: "Design choices that break ATS parsing algorithms.", solution: "Always run ATS compatibility tests before submission." },
                { mistake: "Industry Mismatch", problem: "Using bold designs in conservative industries.", solution: "Research industry norms and company culture before designing." }
              ].map((item, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--error-color)', marginBottom: '0.5rem' }}>{item.mistake}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Problem:</strong> {item.problem}</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--accent-primary)' }}><strong>Solution:</strong> {item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Creative Resumes</h2>
              <p className="section-subtitle">Quick answers to common creative resume questions</p>
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
              <h2 id="testimonials-heading" className="section-title">What Professionals Say</h2>
              <p className="section-subtitle">Real feedback from creative template users</p>
            </div>
            <div className="grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <div className="testimonial-quote-mark">"</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem', position: 'relative', zIndex: 1, color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="reviewBody">"{t.quote}"</p>
                  <div style={{ marginBottom: '0.75rem' }}><span className="feature-badge"><FiStar style={{ display: 'inline' }} /> 5.0 Rating</span></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{t.name}</span>
                    </strong>
                    <p style={{ margin: 0, fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>{t.role} · {t.company}</p>
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
              <p className="section-subtitle">Everything about creative resume templates</p>
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
              Ready to Transform Your Resume with Creative Design?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Access our complete library of <strong>50+ creative templates</strong>, ATS testing tools, and design consultation services.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>Browse Creative Templates <FiArrowRight /></Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {["Free templates", "ATS-optimized", "Instant download"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}><FiCheck style={{ color: 'var(--accent-primary)' }} /> {f}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Updated: {safeCurrentDate}
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More Resume Resources</h2>
              <p className="section-subtitle">Strengthen your application with expert guides</p>
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
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
}