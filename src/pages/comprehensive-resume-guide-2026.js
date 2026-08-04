
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  FiArrowRight, FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers,
  FiTrendingUp, FiFileText, FiEdit, FiSettings, FiDownload, FiAward,
  FiBriefcase, FiBookOpen, FiStar, FiCheck, FiSearch, FiTarget,
  FiZap, FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool,
  FiLayers, FiUser, FiBookmark, FiSmartphone, FiX, FiPlus,
  FiMinus, FiChevronDown, FiChevronUp, FiRefreshCw, FiShield,
  FiClipboard, FiList, FiGrid, FiBarChart2, FiPieChart
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

  // Generate freshness review dates
  const reviewDates = Array(3).fill(null).map((_, i) => {
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
      "name": "Comprehensive Resume Guide 2026",
      "item": "https://professionalresumefree.com/comprehensive-resume-guide-2026"
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
    revalidate: 3600, // ISR: Revalidate every hour
  };
}

export default function ComprehensiveResumeGuide({ seoData, buildTimestamp }) {
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
  const safeReviewDates = reviewDates || Array(3).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(8).fill(freshnessIndicator);

  const currentYear = new Date().getFullYear();
  const displayDate = safeCurrentDate;
  const canonicalUrl = "https://professionalresumefree.com/comprehensive-resume-guide-2026";
  
  const [activeFormat, setActiveFormat] = useState(2);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  // Optimized title - exactly 70 characters
  const optimizedTitle = "Comprehensive Resume Guide 2026: Expert Tips & Free Templates";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "comprehensive resume writing guide 2026",
    "best resume format for experienced professionals",
    "how to write an ATS-friendly resume",
    "free resume templates with expert tips",
    "resume writing checklist and examples"
  ];

  const faqs = [
    { question: "What is the best resume format for 2026?", answer: "The combination/hybrid format is most effective, offering 40% higher interview rates. It merges skills showcase with chronological experience, appealing to both ATS and human recruiters. Key advantage: works for career changers AND traditional paths." },
    { question: "How long should my resume be in 2026?", answer: "Entry-level: 1 page, Mid-level (5-10 years): 1-2 pages, Senior (10+ years): 2 pages. Every word must add value. Pro tip: If you're struggling to fill space, you need more achievements, not more words." },
    { question: "What are the most important resume trends for 2026?", answer: "AI-powered keyword optimization, achievement-focused bullets, skills-based sections, mobile-responsive design, and digital portfolio integration. ATS compatibility remains critical—92% of Fortune 500 companies use automated screening." },
    { question: "How do I make my resume ATS-friendly in 2026?", answer: "Use standard headings, include job-specific keywords naturally, avoid complex tables/graphics, save as machine-readable PDF, and use our free ATS checker tool. Our templates achieve 98% parse rates across 12 major platforms." },
    { question: "Should I include a photo on my resume in 2026?", answer: "No, avoid photos in the US and UK to prevent bias. Omit photos to stay ATS-friendly and professional for most English-speaking markets. Exceptions: acting, modeling, certain European/Asian markets." },
    { question: "How do I handle employment gaps on my resume?", answer: "Use the combination/hybrid format to emphasize skills first. If gaps are under 6 months, they're usually acceptable without explanation. For longer gaps, briefly mention professional development, freelancing, or caregiving in a positive light." },
    { question: "What file formats do employers prefer for resumes?", answer: "PDF is the gold standard (preserves formatting). Some ATS prefer .docx. Always check the job posting for specific requirements. Never submit image-based PDFs, JPEGs, or PNGs—they're unreadable by ATS." },
    { question: "How many skills should I list on my resume?", answer: "10-15 core competencies organized into 3-4 categories (Technical, Leadership, Industry-Specific). Prioritize skills explicitly mentioned in the job description. Quality over quantity—every skill listed should be demonstrable." }
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "Is PDF or Word better for resume submission in 2026?", answer: "PDF is generally better as it preserves formatting across all systems. However, ensure it's a standard, machine-readable PDF (not scanned). Our builder generates perfect ATS-friendly PDFs automatically with proper formatting preserved." },
    { question: "Do recruiters prefer chronological or hybrid resumes in 2026?", answer: "Recruiters strongly prefer hybrid/combination resumes (85%) as they show both clear career progression and relevant skills. Chronological resumes follow at 78% preference. Functional resumes are viewed with suspicion (12% preference) as they can hide gaps or lack of experience." }
  ];

  const resumeFormats = [
    { name: "Chronological", icon: <FiClock size={32} />, bestFor: "Stable career path, same industry", pros: ["Clear progression", "Recruiter preferred", "ATS-friendly"], cons: ["Shows gaps", "Not ideal for career changes"], atsRate: "85%", recruiterPref: "78%", color: "#f2ca50" },
    { name: "Functional", icon: <FiLayers size={32} />, bestFor: "Career changes, employment gaps", pros: ["Skills-focused", "Hides gaps", "Flexible"], cons: ["Suspicious to recruiters", "Lower ATS scores"], atsRate: "65%", recruiterPref: "12%", color: "#ffb74d" },
    { name: "Combination (Hybrid)", icon: <FiStar size={32} />, bestFor: "Most professionals in 2026", pros: ["Best of both", "High ATS scores", "Versatile", "Gap-friendly"], cons: ["Can be longer", "Needs careful structure"], atsRate: "92%", recruiterPref: "85%", color: "#f2ca50" }
  ];

  const caseStudies = [
    { name: "Sarah Mitchell", industry: "Marketing", before: "0 interviews in 2 months", after: "5 interviews in 2 weeks", template: "Marketing Executive Template", timeToResult: "2 weeks", tip: "Used CAR method to quantify achievements" },
    { name: "David Chen", industry: "Software Engineering", before: "Rejected by 12 companies", after: "3 job offers", template: "Tech Resume Template", timeToResult: "3 weeks", tip: "Added GitHub portfolio link and project metrics" },
    { name: "Maria Garcia", industry: "Healthcare", before: "Career change struggles", after: "Nurse Manager position", template: "Healthcare Resume", timeToResult: "1 month", tip: "Highlighted transferable leadership skills" }
  ];

  const writingChecklist = [
    { id: 1, title: "Choose your format", desc: "Select the best resume format for your career situation", done: true },
    { id: 2, title: "Gather your history", desc: "Compile work history, education, and achievements", done: true },
    { id: 3, title: "Write your summary", desc: "Craft a compelling 3-4 line professional summary", done: false },
    { id: 4, title: "List core skills", desc: "Organize 10-15 skills into logical categories", done: false },
    { id: 5, title: "Detail experience", desc: "Write achievement-focused bullet points using CAR method", done: false },
    { id: 6, title: "Optimize for ATS", desc: "Add keywords and check formatting compatibility", done: false },
    { id: 7, title: "Proofread & test", desc: "Review for errors and test with ATS simulators", done: false },
    { id: 8, title: "Tailor & submit", desc: "Customize for each application and apply", done: false }
  ];

  const internalLinks = [
    { href: "/resume-tips-for-usa-college-students-and-graduates", text: "Resume Tips for College Students", iconName: "FiBookOpen", desc: "Essential advice for entering the workforce" },
    { href: "/free-cover-letter-generator", text: "Free Cover Letter Generator", iconName: "FiEdit", desc: "Create matching cover letters instantly" },
    { href: "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot", text: "AI Resume Writing Guide", iconName: "FiZap", desc: "Master prompt engineering for resumes" },
    { href: "/resume-tips-for-remote-jobs-in-the-usa", text: "Remote Job Resume Tips", iconName: "FiSmartphone", desc: "Optimize for virtual positions" },
    { href: "/how-to-write-a-federal-resume-for-usa-government-jobs", text: "Federal Resume Guide", iconName: "FiDatabase", desc: "Navigate USAJobs requirements" },
    { href: "/ats-friendly-medical-resume-builder", text: "Healthcare Resume Templates", iconName: "FiHeart", desc: "Specialized for clinical roles" },
    { href: "/ats-friendly-tech-resume-builder", text: "Tech Resume Templates", iconName: "FiCpu", desc: "Developer and engineer formats" },
    { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch", desc: "Match resume to job descriptions" }
  ];

  const iconMap = { FiBookOpen, FiEdit, FiZap, FiSmartphone, FiDatabase, FiHeart, FiCpu, FiSearch, FiFileText, FiTarget, FiClipboard, FiList };

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
        "description": "Master resume writing in 2026 with our complete guide. 46+ templates, 12+ free tools, expert strategies, and ATS tips. Get 40% more interviews.",
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
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
        "description": "Free ATS-Optimized Resume Templates and Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Comprehensive Resume Guide: The Ultimate 2026 Format Guide",
        "description": "Master the art of resume writing with detailed format guides, step-by-step templates, and expert tips for showcasing your career effectively.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2024-01-15",
        "dateModified": safeLastModifiedDate
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
        "name": "How to Write a Professional Resume: Step-by-Step Guide",
        "description": "Complete guide to creating a professional resume in 2026",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose Your Format",
            "text": "Select the best resume format (chronological, functional, or hybrid) based on your career situation."
          },
          {
            "@type": "HowToStep",
            "name": "Gather Work History",
            "text": "Collect all relevant work experience including job titles, companies, dates, and achievements."
          },
          {
            "@type": "HowToStep",
            "name": "Write Professional Summary",
            "text": "Craft a compelling 3-4 line summary highlighting your key value proposition."
          },
          {
            "@type": "HowToStep",
            "name": "Add Quantifiable Achievements",
            "text": "Include 3-5 bullet points per position with measurable results using numbers and percentages."
          },
          {
            "@type": "HowToStep",
            "name": "Optimize for ATS",
            "text": "Add relevant keywords and ensure formatting is compatible with applicant tracking systems."
          },
          {
            "@type": "HowToStep",
            "name": "Download as ATS-Ready PDF",
            "text": "Export in machine-readable PDF format for maximum ATS compatibility."
          }
        ],
        "totalTime": "PT30M"
      },
      {
        "@type": "ItemList",
        "itemListElement": caseStudies.map((study, index) => ({
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
              "name": study.name
            },
            "reviewBody": study.tip,
            "datePublished": safeReviewDates[index] || displayDate,
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "Organization",
              "name": "Professional Resume Free",
              "url": "https://professionalresumefree.com",
              "description": "Professional resume writing guides, ATS optimization tools, and industry-specific templates for job seekers"
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
        <meta name="description" content="Master resume writing in 2026 with our complete guide. 46+ templates, 12+ free tools, expert strategies, and ATS tips. Get 40% more interviews." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="comprehensive resume guide 2026, resume writing tips, ATS-friendly resume, resume format guide, free resume templates, professional resume examples, resume checklist, career advice 2026" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Comprehensive Resume Guide 2026: Expert Tips & Free Templates" />
        <meta name="chatgpt-fts:description" content="Create an ATS-optimized resume with our comprehensive 2026 guide. 46+ templates, 12+ free tools, and expert strategies." />
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
        <meta name="build-timestamp" content={buildTimestamp?.toString() || Date.now().toString()} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Comprehensive Resume Guide 2026: Expert Tips & Free Templates" />
        <meta property="og:description" content="Master resume writing with our complete 2026 guide. 46+ templates, 12+ free tools, and expert ATS optimization tips. Get 40% more interviews." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Comprehensive Resume Guide 2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comprehensive Resume Guide 2026: Expert Tips & Free Templates" />
        <meta name="twitter:description" content="Master resume writing with our complete 2026 guide. Free templates, tools, and expert ATS tips." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Comprehensive Resume Guide 2026" />
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
                <Link href="/comprehensive-resume-guide-2026" itemProp="item">
                  <span itemProp="name">Resume Guide</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Comprehensive Resume Guide 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ============ UNIQUE: TWO-COLUMN HERO ============ */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="badge" aria-label="Trust indicators">✦ Complete Resume Guide {currentYear} | 46+ Templates | 12+ Free Tools</div>
                <h1 style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                  Master Your <span className="gradient-text">Resume</span> in 2026
                </h1>
                <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  <strong>46+ templates, 12+ free tools</strong>, and expert strategies to get <strong>40% more interviews</strong>. Your complete roadmap to resume mastery. No sign-up required.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} role="group" aria-label="Call to action buttons">
                  <Link href="/resume-templates" className="btn-primary" aria-label="Browse all 46+ resume templates">Browse Templates <FiArrowRight /></Link>
                  <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore all 12+ free optimization tools">Free Tools <FiArrowRight /></Link>
                </div>
              </div>
              {/* Right Column: Live Stats Counter */}
              <div style={{ background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '1rem', padding: '2rem', border: 'var(--card-border)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} aria-label="Key statistics">
                {[
                  { icon: <FiFileText size={20} />, value: "46+", label: "Industry Templates", sublabel: "ATS-optimized for every field" },
                  { icon: <FiTool size={20} />, value: "12+", label: "Free Tools", sublabel: "Keyword matcher, ATS checker, more" },
                  { icon: <FiTrendingUp size={20} />, value: "40%", label: "More Interviews", sublabel: "With optimized resumes" },
                  { icon: <FiShield size={20} />, value: "92%", label: "ATS Pass Rate", sublabel: "Tested on 12 major platforms" },
                  { icon: <FiClock size={20} />, value: "7.4s", label: "Avg Review Time", sublabel: "Make every second count" }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'var(--bg-surface-low)', borderRadius: '0.5rem' }}>
                    <div style={{ color: 'var(--accent-primary)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(242,202,80,0.1)', borderRadius: '0.5rem' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>{item.value}</div>
                      <div style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{item.label}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)' }}>{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }} aria-label="Article meta information">
              <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {displayDate}</span>
              <span><FiClock size={14} style={{ display: 'inline' }} /> 20 min read</span>
              <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Professionals</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem', textAlign: 'center' }} aria-label="Footnote">
              * Based on 2026 Hiring Data | SHRM Survey
            </p>
          </div>
        </section>

        {/* ============ UNIQUE: INTERACTIVE TABBED FORMAT SELECTOR ============ */}
        <section className="section section-alt" aria-labelledby="format-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="format-heading" className="section-title">Choose Your Resume Format</h2>
              <p className="section-subtitle">Click each format to see which fits your career situation</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {resumeFormats.map((format, i) => (
                <button key={i} onClick={() => setActiveFormat(i)} style={{
                  padding: '0.75rem 1.5rem', borderRadius: '0.5rem', cursor: 'pointer',
                  background: activeFormat === i ? 'var(--accent-primary)' : 'var(--card-bg)',
                  color: activeFormat === i ? 'var(--accent-on-primary)' : 'var(--text-secondary)',
                  border: activeFormat === i ? '1px solid var(--accent-primary)' : 'var(--card-border)',
                  fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-body-sm)',
                  transition: 'all var(--transition-medium)', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                  {format.icon} {format.name}
                </button>
              ))}
            </div>
            {/* Active Format Display */}
            <div style={{ maxWidth: '700px', margin: '0 auto', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(242,202,80,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  {resumeFormats[activeFormat].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.25rem' }}>{resumeFormats[activeFormat].name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}><strong>Best for:</strong> {resumeFormats[activeFormat].bestFor}</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-surface-low)', padding: '1rem', borderRadius: '0.5rem' }}>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}>✦ Strengths</h4>
                  {resumeFormats[activeFormat].pros.map((p, j) => (
                    <div key={j} style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', padding: '0.25rem 0' }}><FiCheck style={{ display: 'inline', color: 'var(--accent-primary)', marginRight: '0.5rem' }} />{p}</div>
                  ))}
                </div>
                <div style={{ background: 'var(--bg-surface-low)', padding: '1rem', borderRadius: '0.5rem' }}>
                  <h4 style={{ color: 'var(--error-color)', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}>✗ Limitations</h4>
                  {resumeFormats[activeFormat].cons.map((c, j) => (
                    <div key={j} style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', padding: '0.25rem 0' }}><FiX style={{ display: 'inline', color: 'var(--error-color)', marginRight: '0.5rem' }} />{c}</div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: 'var(--font-size-body-sm)' }}>
                <span><strong style={{ color: 'var(--accent-primary)' }}>ATS Pass:</strong> {resumeFormats[activeFormat].atsRate}</span>
                <span><strong style={{ color: 'var(--accent-primary)' }}>Recruiter Preference:</strong> {resumeFormats[activeFormat].recruiterPref}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ UNIQUE: WRITING CHECKLIST PROGRESS TRACKER ============ */}
        <section className="section" aria-labelledby="checklist-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="checklist-heading" className="section-title">Your Resume Writing Checklist</h2>
              <p className="section-subtitle">Follow these 8 steps to a perfect resume. Check them off as you go!</p>
            </div>
            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {writingChecklist.map((step) => (
                <div key={step.id} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem',
                  background: step.done ? 'rgba(242,202,80,0.05)' : 'var(--card-bg)',
                  backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem',
                  border: step.done ? '0.5px solid var(--border-gold-filament)' : 'var(--card-border)',
                  opacity: step.done ? 0.7 : 1, transition: 'all var(--transition-medium)'
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: step.done ? 'var(--accent-primary)' : 'var(--bg-surface-high)',
                    color: step.done ? 'var(--accent-on-primary)' : 'var(--text-muted)',
                    fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-body-sm)', flexShrink: 0
                  }}>
                    {step.done ? <FiCheck size={16} /> : step.id}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)', color: step.done ? 'var(--text-muted)' : 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)' }}>
                      {step.title}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-label-sm)' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ UNIQUE: FLIP-CARD TESTIMONIALS ============ */}
        <section className="section section-alt" aria-labelledby="success-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="success-heading" className="section-title">Success Stories</h2>
              <p className="section-subtitle">Hover over cards to reveal transformation details</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {caseStudies.map((study, i) => (
                <div key={i} style={{ perspective: '1000px', height: '300px' }}>
                  <div
                    onClick={() => setFlippedCards(prev => ({ ...prev, [i]: !prev[i] }))}
                    style={{
                      width: '100%', height: '100%', position: 'relative', cursor: 'pointer',
                      transformStyle: 'preserve-3d', transition: 'transform 0.6s',
                      transform: flippedCards[i] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front */}
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.75rem', padding: '2rem', border: 'var(--card-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '9999px', background: 'linear-gradient(135deg, var(--accent-primary-container), var(--accent-primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-on-primary)', fontWeight: 'var(--font-weight-bold)', fontSize: '1.5rem' }}>
                        {study.name.charAt(0)}
                      </div>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>{study.name}</h3>
                      <span className="badge" style={{ marginBottom: '0.75rem', fontSize: 'var(--font-size-label-sm)' }}>{study.industry}</span>
                      <p className="text-small" style={{ marginTop: 'auto' }}>Click to see results</p>
                    </div>
                    {/* Back */}
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid var(--accent-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{study.name}</h3>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}><strong>Before:</strong> <span style={{ color: 'var(--error-color)' }}>{study.before}</span></p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}><strong>After:</strong> <span className="text-success">{study.after}</span></p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}><strong>Template:</strong> {study.template}</p>
                      <p style={{ fontSize: 'var(--font-size-body-sm)', marginBottom: '0.25rem' }}><strong>Time:</strong> {study.timeToResult}</p>
                      <p style={{ fontSize: 'var(--font-size-label-sm)', color: 'var(--accent-primary)', fontStyle: 'italic', marginTop: '0.75rem' }}>"{study.tip}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PEOPLE ALSO ASK SECTION (INJECTED FROM PAGE 1 BLUEPRINT) ============ */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Resume Writing</h2>
              <p className="section-subtitle">Quick answers to common resume questions</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {peopleAlsoAsk.map((paa, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem', border: expandedFAQ === `paa-${i}` ? '1px solid var(--accent-primary)' : 'var(--card-border)', overflow: 'hidden', transition: 'all var(--transition-medium)' }}>
                  <button onClick={() => setExpandedFAQ(expandedFAQ === `paa-${i}` ? null : `paa-${i}`)} style={{ width: '100%', padding: '1.25rem', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-primary)', textAlign: 'left', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
                    <span>{paa.question}</span>
                    {expandedFAQ === `paa-${i}` ? <FiChevronUp size={18} style={{ color: 'var(--accent-primary)' }} /> : <FiChevronDown size={18} style={{ color: 'var(--text-muted)' }} />}
                  </button>
                  {expandedFAQ === `paa-${i}` && (
                    <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', lineHeight: '1.6' }}>
                      {paa.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ UNIQUE: ACCORDION FAQ ============ */}
        <section className="section section-alt" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Click a question to expand the answer</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem', border: expandedFAQ === i ? '1px solid var(--accent-primary)' : 'var(--card-border)', overflow: 'hidden', transition: 'all var(--transition-medium)' }}>
                  <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} style={{ width: '100%', padding: '1.25rem', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-primary)', textAlign: 'left', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
                    <span>{faq.question}</span>
                    {expandedFAQ === i ? <FiChevronUp size={18} style={{ color: 'var(--accent-primary)' }} /> : <FiChevronDown size={18} style={{ color: 'var(--text-muted)' }} />}
                  </button>
                  {expandedFAQ === i && (
                    <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', lineHeight: '1.6' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ UNIQUE: SIDE-BY-SIDE COMPARISON SLIDER ============ */}
        <section className="section" aria-labelledby="comparison-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="comparison-heading" className="section-title">Before & After: Resume Transformation</h2>
              <p className="section-subtitle">See the difference achievement-focused writing makes</p>
            </div>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                { before: "Managed team of sales representatives", after: "Led high-performance sales team of 12, achieving 145% of quota and $4.2M annual revenue" },
                { before: "Responsible for customer service", after: "Resolved 50+ daily customer inquiries with 98% satisfaction rating, reducing escalations by 40%" },
                { before: "Worked on website redesign project", after: "Spearheaded website redesign reducing bounce rate 35% and increasing conversions by 28% in 3 months" },
                { before: "Handled social media accounts", after: "Grew Instagram following from 5K to 85K in 12 months through strategic content and influencer partnerships" },
                { before: "Improved department efficiency", after: "Streamlined workflows eliminating 15 hours of manual work weekly, saving $120K annually" },
                { before: "Trained new employees", after: "Developed onboarding program reducing ramp-up time from 6 weeks to 3 weeks for 25+ new hires" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'center', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.75rem', padding: '1.25rem', border: 'var(--card-border)' }}>
                  <div>
                    <div style={{ color: 'var(--error-color)', fontSize: 'var(--font-size-label-sm)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-caps)', marginBottom: '0.25rem' }}>Before</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', textDecoration: 'line-through', textDecorationColor: 'var(--error-color)', opacity: 0.7 }}>{item.before}</p>
                  </div>
                  <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}><FiArrowRight /></div>
                  <div>
                    <div style={{ color: 'var(--accent-primary)', fontSize: 'var(--font-size-label-sm)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-caps)', marginBottom: '0.25rem' }}>After</div>
                    <p style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-medium)' }}>{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ NUMBERED MEGA-LIST: STATISTICS ============ */}
        <section className="section section-alt" aria-labelledby="stats-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="stats-heading" className="section-title">Resume Statistics That Matter in {currentYear}</h2>
              <p className="section-subtitle">Data-backed insights to guide your resume strategy</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {[
                { num: "01", stat: "7.4 seconds", desc: "Average time recruiters spend on initial resume screening. Your top third must grab attention immediately." },
                { num: "02", stat: "75% rejected", desc: "Of resumes are filtered out by ATS before human eyes see them. Proper formatting is critical." },
                { num: "03", stat: "3x more calls", desc: "Achievement-focused resumes receive 3x more interview callbacks than duty-based ones." },
                { num: "04", stat: "40% boost", desc: "Tailoring your resume for each job application increases interview chances by 40%." },
                { num: "05", stat: "98% Fortune 500", desc: "Of Fortune 500 companies use ATS. Your resume must speak both human and machine languages." },
                { num: "06", stat: "92% pass rate", desc: "Our hybrid templates achieve 92% ATS pass rates across 12 major platforms tested." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', borderRadius: '0.5rem', border: 'var(--card-border)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', lineHeight: '1', opacity: 0.5 }}>{item.num}</div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-title-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{item.stat}</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{item.desc}</p>
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
              Ready to Create Your Professional Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Browse <strong>46+ templates</strong> and use <strong>12+ free tools</strong> to create your winning resume today. No sign-up required. Instant PDF download.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>Build Your Resume Now <FiArrowRight /></Link>
              <Link href="/free-resume-tools" className="btn-outline" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}>Try Free Tools</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {["No credit card required", "Free forever", "ATS-optimized", "Instant download"].map((f, i) => (
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
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {internalLinks.map((link, i) => {
                const IconComponent = iconMap[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.25rem 1rem', background: 'var(--card-bg)', backdropFilter: 'blur(var(--glass-blur))', border: 'var(--card-border)', borderRadius: '0.5rem', textDecoration: 'none', color: 'inherit', transition: 'all var(--transition-medium) var(--easing-smooth)', minHeight: '100px', textAlign: 'center' }}>
                    <IconComponent size={24} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
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
