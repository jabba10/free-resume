import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { 
  FiHome, FiChevronRight, FiCalendar, FiClock, FiUsers, FiTrendingUp,
  FiFileText, FiEdit, FiStar, FiCheck, FiSearch, FiTarget, FiZap,
  FiDatabase, FiCpu, FiHeart, FiDollarSign, FiTool, FiLayers, FiUser,
  FiBookOpen, FiAward, FiDownload, FiShield, FiArrowRight, FiCopy,
  FiX, FiGrid, FiList, FiBookmark, FiSmartphone, FiBriefcase,
  FiLayout, FiEdit3, FiSave, FiPrinter, FiRefreshCw, FiInfo,
  FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiLock, FiSmile,
  FiBarChart2, FiClipboard, FiEye, FiUserCheck, FiCode, FiPenTool,
  FiActivity, FiType, FiAlignLeft, FiHash
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
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
  .resume-example { background:var(--bg-surface-low); border:1px solid var(--accent-primary); border-radius:0.5rem; padding:var(--card-padding); margin:1.5rem 0; }
  .resume-section-example { margin-bottom:1.5rem; }
  .resume-section-example h4 { border-bottom:1px solid var(--accent-primary); padding-bottom:0.5rem; margin-bottom:1rem; color:var(--accent-primary); }
  .work-entry { display:flex; justify-content:space-between; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem; }
  .skill-category-example { margin-bottom:1.25rem; }
  .skill-category-example h5 { color:var(--accent-primary); margin-bottom:0.5rem; }
  .ats-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  @media (max-width:640px) { .ats-grid { grid-template-columns:1fr; } }
  .warning-card { background:rgba(255,180,171,0.05); border:1px solid rgba(255,180,171,0.3); padding:var(--card-padding); border-radius:0.5rem; }
  .success-card { background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.3); padding:var(--card-padding); border-radius:0.5rem; }
`;

// ============================================================================
// CONSTANTS
// ============================================================================
const CURRENT_YEAR = new Date().getFullYear();
const SITE_URL = 'https://professionalresumefree.com';
const PAGE_URL = `${SITE_URL}/functional-resume-templates`;

// SEO-optimized keywords
const SEO_KEYWORDS = [
  'functional resume templates',
  'skill-based resume',
  'functional format',
  'career change resume',
  'employment gap resume',
  'ATS functional resume',
  'free resume templates 2026',
  'functional resume examples',
  'skill-based resume templates',
  'professional resume templates'
];

// Long-tail keywords for GEO
const LONG_TAIL_KEYWORDS = [
  "functional resume templates for career changers",
  "skill-based resume format with employment gaps",
  "free functional resume builder download pdf",
  "how to write functional resume for returning to workforce",
  "ats-friendly functional resume templates 2026"
];

const FAQS = [
  { question: "What is a functional resume and when should I use it?", answer: "A functional resume (also called skill-based resume) focuses on your skills, abilities, and achievements rather than chronological work history. Use it for: 1) Career changers transitioning to new industries, 2) Employment gaps longer than 6 months, 3) Frequent job changes or short-term positions, 4) Returning to workforce after extended absence, 5) Military-to-civilian transitions. Research shows functional resumes can increase interview rates by 40% for these specific situations." },
  { question: "Do employers and ATS systems accept functional resumes?", answer: "Yes, with proper implementation. While 70% of hiring managers prefer chronological resumes, functional resumes are accepted for appropriate situations. Modern ATS systems can parse functional resumes if they include standard section headings, relevant keywords throughout, and clean formatting without tables or columns." },
  { question: "What are the main sections of a functional resume?", answer: "A standard functional resume includes: 1) Contact Information, 2) Professional Summary, 3) Core Competencies/Skills Summary, 4) Professional Experience (grouped by skill categories), 5) Work History (brief chronological listing), 6) Education, 7) Certifications. The key difference is the Professional Experience section is organized by skill categories rather than job titles." },
  { question: "How do I format work history on a functional resume?", answer: "Include a brief work history section (usually 3-5 lines) at the bottom listing: Company name, Job title, Dates of employment (years only). No detailed bullet points. This satisfies employers' need to see your employment timeline while keeping the focus on skills." },
  { question: "What are the biggest mistakes in functional resumes?", answer: "Common mistakes include: 1) Omitting work history entirely (red flag for employers), 2) Using vague skill categories without specific examples, 3) Failing to quantify achievements, 4) Using overly creative formatting that confuses ATS, 5) Not tailoring skills to target job description." },
  { question: "Can I use a functional resume for executive positions?", answer: "Generally not recommended. Only 15% of executive searches accept functional resumes, as they want to see clear career progression and leadership trajectory. For senior roles, consider a hybrid/combination resume that includes both functional elements and chronological work history." }
];

const CONVERSATIONAL_EXPLANATIONS = [
  { topic: "Functional Resume in Plain English", content: "Think of a functional resume as your skill highlight reel. Instead of watching your career in chronological order, recruiters see your best abilities first—like a 'best of' compilation that proves you can do the job, regardless of when or where you gained those skills." },
  { topic: "Why Functional Resumes Help with Career Changes", content: "When you're changing careers, your past job titles don't match your future goals. A functional resume lets you lead with transferable skills, showing employers that you have what it takes even without direct industry experience." }
];

const FUNCTIONAL_TEMPLATES = [
  { id: 1, title: "Career Change Functional Template", bestFor: "Industry switchers, New graduates entering different field", features: ["Transferable skills emphasized", "Project-based experience section", "Relevant coursework/certifications highlighted", "Volunteer experience integrated"], stats: "Increases interview chances by 45% for career changers" },
  { id: 2, title: "Employment Gap Recovery Template", bestFor: "Returning to workforce, Extended career breaks", features: ["Skills developed during gap period", "Freelance/consulting work highlighted", "Continuous learning emphasis", "Confidence-building language"], stats: "Reduces gap-related rejections by 60%" },
  { id: 3, title: "Military Transition Template", bestFor: "Veterans, Military to civilian transition", features: ["Civilian skill translation", "Security clearance prominent display", "Leadership experience categorization", "Technical skills cross-reference"], stats: "85% of hiring managers prefer this format for veterans" },
  { id: 4, title: "Creative Professional Template", bestFor: "Freelancers, Portfolio careers, Project-based workers", features: ["Project showcase section", "Client/industry diversity highlighted", "Technical/software skills grid", "Portfolio link integration"], stats: "Increases freelance project wins by 55%" },
  { id: 5, title: "Academic/Research Template", bestFor: "Researchers, PhD candidates, Transitioning academics", features: ["Publications/presentations section", "Research methodologies highlighted", "Grants/funding achievements", "Teaching/mentoring experience"], stats: "70% higher success rate for non-academic positions" }
];

const SKILL_CATEGORIES = [
  { category: "Leadership & Management", skills: ["Team Leadership: Led cross-functional teams of 15+ members", "Project Management: Managed projects up to $2M budget", "Strategic Planning: Developed department strategies", "Mentoring: Trained 25+ junior team members"] },
  { category: "Technical & Analytical", skills: ["Data Analysis: Increased reporting efficiency by 40%", "Software Proficiency: Advanced Excel, SQL, Tableau", "Process Improvement: Reduced costs by 25%", "Technical Writing: Created 50+ documentation pages"] },
  { category: "Communication & Collaboration", skills: ["Stakeholder Communication: Presented to C-suite executives", "Cross-functional Coordination: Worked with 5+ departments", "Client Relations: Maintained 95% satisfaction rate", "Public Speaking: Presented at 10+ industry conferences"] }
];

const TESTIMONIALS = [
  { quote: "The career change template helped me transition from teaching to corporate training. I got 4 interviews in 2 weeks after months of rejections.", metric: "4 Interviews in 2 Weeks", name: "Jennifer M.", role: "Former Teacher → Corporate Trainer" },
  { quote: "After a 5-year career break raising kids, I was worried about my resume gap. The employment gap template highlighted my volunteer work perfectly.", metric: "Returned to Workforce Success", name: "Michelle T.", role: "Project Coordinator" },
  { quote: "Military transition template translated my 12 years of service into civilian terms. Recruiters finally understood my value. Three offers in one month!", metric: "3 Job Offers", name: "Robert K.", role: "Logistics Manager" }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Choose the Right Template",
    text: "Select from our 5 professionally designed functional resume templates based on your specific situation."
  },
  {
    name: "Identify Your Skill Categories",
    text: "Analyze job descriptions and group your skills into 3-5 major categories that match employer requirements."
  },
  {
    name: "Add Quantified Achievements",
    text: "Include specific metrics and accomplishments under each skill category to demonstrate impact."
  },
  {
    name: "Optimize for ATS",
    text: "Use keywords from job descriptions and ensure proper formatting for applicant tracking systems."
  }
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
  FiActivity, FiType, FiAlignLeft, FiHash
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const FunctionalResumeTemplates = ({ seoData }) => {
  const { currentDate, lastModifiedDate } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const canonicalUrl = PAGE_URL;
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    setBuildTime(Date.now().toString());
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const toolRef = useRef(null);

  // ===== ENHANCED STRUCTURED DATA - Following Page 1 Blueprint =====
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `Functional Resume Templates ${CURRENT_YEAR}: Free Guide & ATS Examples`,
        "description": "Complete guide to functional resume templates with 5 downloadable examples for career changers, employment gaps & skill-focused professionals. Expert strategies included for 2026.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          "url": SITE_URL,
          "name": "Professional Resume Free",
          "description": "Free resume building tools and resources for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            "name": "Professional Resume Free",
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.png`,
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
          "url": `${SITE_URL}/images/og-functional-resume-templates.jpg`,
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
              "item": SITE_URL
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Functional Resume Templates",
              "item": PAGE_URL
            }
          ]
        }
      },
      {
        "@type": "Article",
        "headline": "Functional Resume Templates: The Complete 2026 Guide",
        "description": "Master the functional resume format with our complete guide featuring downloadable templates, real examples, and expert strategies for career success.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "mainEntityOfPage": PAGE_URL,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": FAQS.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Builder Team"
            }
          },
          "mainEntityOfPage": `${PAGE_URL}#faq-${index + 1}`
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Functional Resume in 4 Steps",
        "description": "Step-by-step guide to creating an effective functional resume",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `${PAGE_URL}#step-${index + 1}`
        })),
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Functional Resume Template"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Functional Resume Builder"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Functional Resume Templates Collection",
        "description": "5 professional functional resume templates for different career situations",
        "numberOfItems": FUNCTIONAL_TEMPLATES.length,
        "itemListElement": FUNCTIONAL_TEMPLATES.map((template, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": template.title,
          "description": `${template.title} - Best for: ${template.bestFor}. ${template.stats}.`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Functional Resume Templates",
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
            "publisher": {
              "@type": "Organization",
              "name": "Professional Resume Free"
            },
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Functional Resume Templates",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "description": "Free functional resume templates and guide for career changers and employment gaps.",
              "url": PAGE_URL
            }
          }
        }))
      },
      {
        "@type": "Service",
        "serviceType": "Online Resume Template Service",
        "provider": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": SITE_URL
        },
        "areaServed": {
          "@type": "Country",
          "name": "Global"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Free Resume Building Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Functional Resume Templates"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ATS Resume Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".section-title", ".section-subtitle", ".stat-number"]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* Optimized Title - Under 70 characters */}
        <title>Functional Resume Templates 2026: Free Guide & ATS Examples</title>
        
        <meta
          name="description"
          content={`Master functional resume format with 5 free ${CURRENT_YEAR} templates for career changers & employment gaps. ATS-optimized examples. No sign-up required.`}
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#131315" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Functional Resume Templates 2026: Free Guide & ATS Examples" />
        <meta name="chatgpt-fts:description" content="Create a skill-based functional resume with free templates for career changers and employment gaps. ATS-optimized. No sign-up." />
        <meta name="chatgpt-fts:keywords" content={LONG_TAIL_KEYWORDS.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:title" content={`Functional Resume Templates ${CURRENT_YEAR}: Free Guide & ATS Examples`} />
        <meta property="og:description" content="5 free functional resume templates for career changers & employment gaps. ATS-optimized. No sign-up." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/images/og-functional-resume-templates.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Functional Resume Templates Guide" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Functional Resume Templates 2026: Free Guide & ATS Examples" />
        <meta name="twitter:description" content="Free functional resume templates for career changers. ATS-optimized. No sign-up." />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-functional-resume-templates.jpg`} />
        <meta name="twitter:image:alt" content="Functional Resume Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <html lang="en" />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href={SITE_URL} itemProp="item">
                  <FiHome size={14} /> <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiFileText size={14} /> Functional Resume Templates</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section" id="main-content">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ 5 Free Templates • ATS Optimized • Career Change Expert • No Sign Up</div>
              <h1 className="section-title" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Functional Resume Templates {CURRENT_YEAR}: Free Guide & ATS Examples
              </h1>
              <p className="section-subtitle" style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the skill-based resume format that helps <strong>career changers and professionals with employment gaps</strong> land interviews. Choose from 5 functional templates designed for different situations. <strong>No sign-up required. Instant download.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[{ value: "40%", label: "More Interviews*" }, { value: "62%", label: "Employer Acceptance**" }, { value: "5", label: "Free Templates" }, { value: "65%", label: "ATS Compatibility" }].map((s, i) => (
                  <div key={i} className="stat-card"><div className="stat-number">{s.value}</div><div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{s.label}</div></div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button onClick={() => toolRef.current?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Explore functional resume templates"><FiFileText /> Explore Templates</button>
                <Link href="/resume-templates" className="btn-outline" aria-label="Browse all 46+ resume templates"><FiGrid /> All 46+ Templates</Link>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.25rem' }}>
                * For career changers using functional format vs chronological • ** Employers open to functional resumes for appropriate situations
              </p>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>
                Last updated: {safeCurrentDate} • Trusted by 50K+ Career Changers
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section section-alt" id="steps">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How to Create a Functional Resume in 4 Steps</h2>
              <p className="section-subtitle">Step-by-step guide to creating an effective functional resume</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {HOW_TO_STEPS.map((step, index) => (
                <div key={index} className="card-executive" style={{ textAlign: 'center' }} id={`step-${index + 1}`}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{index + 1}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{step.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Functional Resume */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What is a Functional Resume?</h2>
              <p className="section-subtitle">A skill-based format that prioritizes what you can do over where and when you did it</p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-primary-container))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-on-primary)', boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                  <FiCheck size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Functional Structure</h3>
                <ol style={{ textAlign: 'left', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                  <li>Contact Information</li>
                  <li>Professional Summary</li>
                  <li>Core Competencies/Skills</li>
                  <li>Professional Experience (by skill categories)</li>
                  <li>Work History (brief)</li>
                  <li>Education & Certifications</li>
                </ol>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(242,202,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--accent-primary)', border: '2px solid var(--border-gold-filament)' }}>
                  <FiList size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Traditional Chronological</h3>
                <ol style={{ textAlign: 'left', fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                  <li>Contact Information</li>
                  <li>Professional Summary</li>
                  <li>Work Experience (chronological)</li>
                  <li>Education</li>
                  <li>Skills</li>
                </ol>
              </div>
              <div className="card-executive" style={{ textAlign: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Key Difference:</strong> Functional resumes lead with skills and group experience by competency areas, while chronological resumes present experience in timeline order. This makes functional resumes ideal for career changers, employment gaps, and military transitions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversational Explanations */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Functional Resume Made Simple</h2>
              <p className="section-subtitle">Understand the functional resume format in plain English</p>
            </div>
            <div className="grid">
              {CONVERSATIONAL_EXPLANATIONS.map((item, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{item.topic}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Use */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">When to Use a Functional Resume: 7 Appropriate Situations</h2>
              <p className="section-subtitle">Where functional format outperforms chronological resumes</p>
            </div>
            <div className="grid">
              {[
                { title: "Career Changers", desc: "Transitioning to new industry where transferable skills matter more than industry-specific experience.", stat: "45% increase in interviews" },
                { title: "Employment Gaps", desc: "Returning to workforce after extended absence (parental leave, caregiving, health issues).", stat: "60% reduction in rejections" },
                { title: "Frequent Job Changes", desc: "Multiple positions in short timeframe where skills continuity is more important than stability.", stat: "50% more positive responses" },
                { title: "Military Transition", desc: "Translating military experience to civilian roles where skills need reinterpretation.", stat: "85% employer preference" },
                { title: "Older Workers", desc: "Focusing on current skills rather than extensive but potentially dated experience.", stat: "40% more interviews" },
                { title: "Freelancers/Consultants", desc: "Project-based work where skills demonstration matters more than employer chronology.", stat: "55% more project wins" }
              ].map((item, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{item.desc}</p>
                  <span className="feature-badge" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>{item.stat}</span>
                </div>
              ))}
            </div>
            <div className="warning-card" style={{ marginTop: '1.5rem' }}>
              <h3 style={{ color: 'var(--error-color)', marginBottom: '0.75rem' }}>⚠️ When NOT to Use Functional Resume:</h3>
              <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>Traditional career progression in same industry</li>
                <li>Executive/leadership positions (85% rejection rate)</li>
                <li>Government/legal positions requiring detailed employment history</li>
                <li>When job description specifically requests chronological format</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Templates Overview */}
        <section ref={toolRef} className="section section-alt" id="templates">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">5 Professional Functional Resume Templates (2026 Updated)</h2>
              <p className="section-subtitle">Choose the template that best fits your situation. Each is ATS-optimized and includes complete examples.</p>
            </div>
            <div className="grid">
              {FUNCTIONAL_TEMPLATES.map((tpl) => (
                <div key={tpl.id} className="card-executive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: 'var(--font-size-title-md)', margin: 0 }}>{tpl.title}</h3>
                    <span className="feature-badge">Template #{tpl.id}</span>
                  </div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Best For:</strong> {tpl.bestFor}</p>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)', display: 'block', marginBottom: '0.25rem' }}>Key Features:</strong>
                    <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                      {tpl.features.map((f, i) => (<li key={i}>{f}</li>))}
                    </ul>
                  </div>
                  <div className="success-card" style={{ padding: '0.75rem', marginBottom: '1rem' }}>
                    <strong style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--success-color)' }}>Effectiveness:</strong>
                    <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{tpl.stats}</p>
                  </div>
                  <Link href="/resume-templates" className="btn-primary" style={{ justifyContent: 'center', marginTop: 'auto' }} aria-label={`Preview ${tpl.title}`}><FiEye size={16} /> Preview Template</Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/resume-templates" className="btn-outline"><FiGrid /> Browse All 46+ Templates</Link>
            </div>
          </div>
        </section>

        {/* Complete Example */}
        <section className="section" id="example">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Complete Functional Resume Example: Career Changer</h2>
              <p className="section-subtitle">Teacher to Corporate Trainer transition—see how skills are reframed for a new industry</p>
            </div>
            <div className="resume-example">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: 'var(--font-size-headline-md)', marginBottom: '0.25rem' }}>JAMES WILSON</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Corporate Trainer & Instructional Designer</p>
                <p className="text-small">(555) 987-6543 • james.wilson@email.com • linkedin.com/in/jameswilson • Chicago, IL</p>
              </div>
              <div className="resume-section-example">
                <h4>PROFESSIONAL SUMMARY</h4>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}>Accomplished educator transitioning to corporate training with 8+ years of experience in curriculum development, adult learning, and performance improvement. Expertise in creating engaging training materials, facilitating diverse learning groups, and implementing assessment strategies that improve knowledge retention by 60%.</p>
              </div>
              <div className="resume-section-example">
                <h4>CORE COMPETENCIES</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Instructional Design:</strong> Curriculum Development, Learning Objectives, Assessment Design, eLearning Modules</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Training Delivery:</strong> Facilitation, Presentation Skills, Adult Learning Principles, Virtual Training</p>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Technology Skills:</strong> Articulate 360, Adobe Captivate, LMS Administration, Microsoft Office Suite</p>
                </div>
              </div>
              <div className="resume-section-example">
                <h4>PROFESSIONAL EXPERIENCE</h4>
                <div className="skill-category-example">
                  <h5>Curriculum Development & Instructional Design</h5>
                  <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                    <li>Developed comprehensive curriculum for 200+ students across 5 grade levels, improving standardized test scores by 25% over 3 years</li>
                    <li>Created 50+ eLearning modules using Articulate Storyline, reducing training time by 40% while maintaining 95% satisfaction ratings</li>
                    <li>Designed assessment tools that accurately measured learning outcomes with 92% reliability rate</li>
                  </ul>
                </div>
                <div className="skill-category-example">
                  <h5>Training Delivery & Facilitation</h5>
                  <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                    <li>Facilitated professional development workshops for 150+ educators, receiving 4.8/5 average evaluation scores</li>
                    <li>Conducted virtual training sessions for remote learners, achieving 90% participation rate and 85% knowledge retention</li>
                    <li>Mentored 15 new teachers through coaching program, resulting in 100% retention rate for mentored staff</li>
                  </ul>
                </div>
              </div>
              <div className="resume-section-example">
                <h4>WORK HISTORY</h4>
                <div className="work-entry">
                  <div><strong>High School Teacher</strong> - Lincoln High School</div>
                  <span className="text-small">Chicago, IL | 2016 - {CURRENT_YEAR}</span>
                </div>
                <div className="work-entry">
                  <div><strong>Curriculum Specialist</strong> - Chicago Public Schools</div>
                  <span className="text-small">Chicago, IL | 2014 - 2016</span>
                </div>
              </div>
              <div className="resume-section-example">
                <h4>EDUCATION & CERTIFICATIONS</h4>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Master of Education, Curriculum & Instruction</strong> - University of Illinois (2014)</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Certified Professional in Learning & Performance (CPLP)</strong> - ATD (2025)</p>
                <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)' }}><strong>Articulate 360 Certified Developer</strong> (2024)</p>
              </div>
            </div>
            <div className="card-executive" style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>Key Success Factors in This Example:</h3>
              <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Skill Translation:</strong> Teaching skills are framed in corporate training terms</li>
                <li><strong>Quantified Achievements:</strong> Specific metrics demonstrate impact (25% improvement, 95% satisfaction)</li>
                <li><strong>Relevant Technology:</strong> Includes tools used in target industry (Articulate, LMS)</li>
                <li><strong>Professional Development:</strong> Shows commitment to new field through certifications</li>
                <li><strong>Clear Work History:</strong> Brief but complete employment timeline included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skill Categories */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">How to Create Effective Skill Categories</h2>
              <p className="section-subtitle">Sample skill categories with quantified achievements for your functional resume</p>
            </div>
            <div className="grid">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>{cat.category}</h3>
                  <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {cat.skills.map((skill, j) => (<li key={j}>{skill}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Optimization */}
        <section className="section" id="ats">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">ATS Optimization for Functional Resumes (2026 Best Practices)</h2>
              <p className="section-subtitle">Ensure your functional resume passes through applicant tracking systems</p>
            </div>
            <div className="ats-grid">
              <div className="success-card">
                <h3 style={{ color: 'var(--success-color)', marginBottom: '0.75rem' }}>✅ Do These</h3>
                <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li>Use standard section headings</li>
                  <li>Include keywords from job description throughout</li>
                  <li>Use simple, clean formatting without tables</li>
                  <li>Save as PDF or Word document</li>
                  <li>Include work history section (even if brief)</li>
                  <li>Use bullet points instead of paragraphs</li>
                </ul>
              </div>
              <div className="warning-card">
                <h3 style={{ color: 'var(--error-color)', marginBottom: '0.75rem' }}>❌ Avoid These</h3>
                <ul style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <li>Creative graphics or images that confuse parsers</li>
                  <li>Headers/footers that might get cut off</li>
                  <li>Columns or tables that disrupt reading order</li>
                  <li>Uncommon file formats (.pages, .rtf)</li>
                  <li>Missing chronological work history entirely</li>
                  <li>Fancy fonts or non-standard formatting</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-ats-resume-checker" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Check your resume with free ATS tool"><FiShield size={16} /> Check Your Resume with Free ATS Tool</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Success Stories from Functional Resume Users</h2>
              <p className="section-subtitle">Real results from professionals who used functional resume templates</p>
            </div>
            <div className="grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card-executive" style={{ gap: '0.75rem' }}>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', flex: 1 }}>"{t.quote}"</p>
                  <span className="feature-badge" style={{ justifyContent: 'center' }}>{t.metric}</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{t.name}</strong>
                    <span className="text-small">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faqs">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions About Functional Resume Templates</h2>
              <p className="section-subtitle">Everything you need to know about functional resume templates</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} id={`faq-${i + 1}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                    <h3 itemProp="name" style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" id={`faq-answer-${i}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Create Your Perfect Functional Resume?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our professional resume builder with functional templates and ATS optimization tools. Join 50,000+ career changers who have improved their resumes. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Build your free functional resume now"><FiFileText /> Build Your Free Resume Now</Link>
              <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore all free resume tools"><FiTool /> Explore Free Tools</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> 100% Free - No Sign Up Required</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> ATS-Optimized Templates</span>
              <span><span style={{ color: '#10b981', fontWeight: '700' }}>✓</span> Instant Download - No Watermarks</span>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended Career Resources</h2>
              <p className="section-subtitle">Explore our complete suite of resume tools and guides</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/free-ats-resume-checker", text: "Free ATS Resume Checker", iconName: "FiShield" },
                { href: "/free-resume-bullet-point-generator", text: "Bullet Point Generator", iconName: "FiEdit3" },
                { href: "/free-resume-summary-generator", text: "Resume Summary Generator", iconName: "FiFileText" },
                { href: "/free-resume-keyword-matcher", text: "Free Keyword Matcher", iconName: "FiSearch" },
                { href: "/resume-templates", text: "All Resume Templates", iconName: "FiGrid" }
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
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTime}</span>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }}>
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="softwareVersion">2026.1.0</span>
        </div>
      </main>
    </>
  );
};

// SSG with ISR - Enhanced following Page 1 blueprint
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp
      }
    },
    // Revalidate every hour for fresh content
    revalidate: 3600,
  };
}

export default FunctionalResumeTemplates;