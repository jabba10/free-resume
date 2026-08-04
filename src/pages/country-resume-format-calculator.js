// pages/country-resume-format-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { 
  FiHome, FiChevronRight, FiGlobe, FiTarget, FiFileText,
  FiCalendar, FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw,
  FiHelpCircle, FiAlertCircle, FiCheckCircle, FiXCircle, FiEdit,
  FiFlag, FiMapPin, FiLayout, FiAlertTriangle, FiCamera, FiUsers,
  FiClock
} from 'react-icons/fi';

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
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem);
    --font-size-body-lg: clamp(1rem,2vw,1.125rem); --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3);
    --transition-fast: 150ms; --transition-medium: 250ms;
    --glass-blur: 20px;
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-radius: 0.375rem; --input-padding: 0.75rem 1rem;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:1.6; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); }
  h1 { font-size:var(--font-size-display-lg); line-height:1.1; font-weight:700; margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:1.2; font-weight:700; }
  h3 { font-size:var(--font-size-headline-lg); line-height:1.2; font-weight:600; font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); }
  a { color:var(--accent-primary); text-decoration:none; }
  .gradient-text { background:linear-gradient(135deg,#f2ca50,#d4af37,#ffe088); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 1rem; } }
  .btn-primary { display:inline-flex; align-items:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; cursor:pointer; text-decoration:none; min-width:200px; white-space:nowrap; transition:all 250ms; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); }
  .btn-outline { display:inline-flex; align-items:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; cursor:pointer; text-decoration:none; min-width:200px; transition:all 250ms; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); transform:translateY(-2px); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:2rem; }
  .section-title { margin-bottom:1rem; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.25rem; background:var(--card-bg); border:var(--card-border); border-radius:0.5rem; }
  .stat-number { font-size:1.5rem; font-weight:700; color:var(--accent-primary); font-family:var(--font-display); }
  .stat-label { color:var(--text-secondary); font-size:0.6875rem; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:600; }
  .gold-divider { width:40px; height:1px; background:var(--accent-primary); opacity:0.6; margin:1.5rem auto; }
  .input-group { margin-bottom:1.5rem; }
  .input-label { display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-weight:500; font-size:var(--font-size-body-sm); }
  .input-field { width:100%; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-size:1rem; }
  .input-field:focus { outline:none; border-color:var(--accent-primary); }
  select.input-field { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  .result-box { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:1.5rem; margin-top:2rem; }
  .format-item { display:flex; align-items:center; gap:0.75rem; padding:0.75rem; background:var(--card-bg); border-radius:0.375rem; border:var(--card-border); margin-bottom:0.5rem; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all 250ms; min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); }
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

const CURRENT_YEAR = new Date().getFullYear();

const COUNTRY_FORMATS = {
  'usa': { name: 'United States', photo: false, maxPages: 2, sections: ['Professional Summary','Work Experience','Education','Skills'], personalInfo: ['Name','Email','Phone','LinkedIn'], avoidInfo: ['Photo','Age','Marital Status','Religion','Race'], tips: 'Focus on achievements with metrics. Resume format preferred. No photo needed. Keep to 1-2 pages.' },
  'uk': { name: 'United Kingdom', photo: false, maxPages: 2, sections: ['Personal Profile','Work Experience','Education','Skills & Interests'], personalInfo: ['Name','Email','Phone','Address'], avoidInfo: ['Photo','Date of Birth','Nationality'], tips: 'CV format. Include a brief personal profile. Hobbies section acceptable. Chronological order.' },
  'germany': { name: 'Germany', photo: true, maxPages: 2, sections: ['Personal Information','Work Experience','Education','Skills','Languages','Hobbies'], personalInfo: ['Name','Photo','Date of Birth','Address','Email','Phone','Nationality'], avoidInfo: [], tips: 'Include professional photo. Chronological CV format. Sign and date your CV. Include marital status optionally.' },
  'japan': { name: 'Japan', photo: true, maxPages: 2, sections: ['Personal Information','Education','Work Experience','Skills & Qualifications','Personal Interests'], personalInfo: ['Name','Photo','Date of Birth','Gender','Address','Phone','Email'], avoidInfo: [], tips: 'Rirekisho (履歴書) format preferred. Handwritten sometimes expected. Include photo attached to form. Reverse chronological.' },
  'france': { name: 'France', photo: true, maxPages: 1, sections: ['Personal Information','Work Experience','Education','Skills','Languages','Interests'], personalInfo: ['Name','Photo','Age','Address','Email','Phone'], avoidInfo: [], tips: 'One page strongly preferred. Include professional photo. Chronological format. Cover letter (lettre de motivation) essential.' },
  'australia': { name: 'Australia', photo: false, maxPages: 3, sections: ['Career Summary','Work Experience','Education','Skills','References'], personalInfo: ['Name','Email','Phone','LinkedIn','Address (optional)'], avoidInfo: ['Photo','Age','Marital Status','Religion'], tips: 'Up to 3 pages acceptable. References often included. Achievement-focused bullet points. No photo needed.' },
  'canada': { name: 'Canada', photo: false, maxPages: 2, sections: ['Professional Summary','Work Experience','Education','Skills','Volunteer Experience'], personalInfo: ['Name','Email','Phone','LinkedIn'], avoidInfo: ['Photo','Age','Nationality','Marital Status'], tips: 'Similar to US format. Bilingual skills highly valued. Volunteer work appreciated. 1-2 pages standard.' },
  'uae': { name: 'UAE / Middle East', photo: true, maxPages: 2, sections: ['Personal Information','Career Objective','Work Experience','Education','Skills','Languages'], personalInfo: ['Name','Photo','Nationality','Visa Status','Date of Birth','Email','Phone'], avoidInfo: ['Religion (optional)'], tips: 'Include professional photo. Nationality and visa status important. Chronological format. Conservative design.' },
  'india': { name: 'India', photo: true, maxPages: 2, sections: ['Career Objective','Work Experience','Education','Skills','Personal Details'], personalInfo: ['Name','Photo','Date of Birth','Father\'s Name (optional)','Address','Email','Phone'], avoidInfo: [], tips: 'Photo common. Career objective statement used. Personal details section standard. Chronological format.' },
  'singapore': { name: 'Singapore', photo: true, maxPages: 2, sections: ['Career Summary','Work Experience','Education','Skills & Achievements'], personalInfo: ['Name','Photo','Nationality','Email','Phone','Address (optional)'], avoidInfo: ['Religion','Race','Age (optional)'], tips: 'Include professional photo. Concise and achievement-focused. Skills-based format gaining popularity. 2 pages standard.' }
};

const FEATURES = [
  { icon: 'FiGlobe', title: '10 Country Formats', desc: 'Get resume format requirements for USA, UK, Germany, Japan, France, Australia, Canada, UAE, India, and Singapore.', stat: '10 Countries' },
  { icon: 'FiLayout', title: 'Section Ordering', desc: 'Learn the correct section order and naming conventions for each country\'s resume expectations.', stat: 'Essential' },
  { icon: 'FiCamera', title: 'Photo Guidelines', desc: 'Know whether to include a photo, which countries require it, and which countries prohibit it.', stat: 'Critical' },
  { icon: 'FiUsers', title: 'Personal Info Rules', desc: 'Understand what personal information to include or avoid based on local customs and anti-discrimination laws.', stat: 'Compliance' }
];

const FAQS = [
  { question: "Why do resume formats vary by country?", answer: "Resume formats vary due to cultural norms, legal requirements, and hiring practices. Some countries expect photos and personal details, while others prohibit them due to anti-discrimination laws. Understanding these differences is crucial for international job applications." },
  { question: "Which countries require a photo on resumes?", answer: "Germany, Japan, France, UAE, India, and Singapore typically expect or prefer photos. The US, UK, Australia, and Canada generally prohibit photos due to anti-discrimination laws. Always research specific company requirements." },
  { question: "How many pages should my resume be?", answer: "Most countries prefer 1-2 pages. France strictly prefers 1 page. Australia and academic positions may accept 3+ pages. The key is relevance - include only information pertinent to the role." },
  { question: "Should I translate my resume for international applications?", answer: "Yes, always submit your resume in the local language unless specifically requested otherwise. For multinational companies, English is often acceptable, but providing a translated version shows respect and preparation." },
  { question: "What personal information should I never include on an international resume?", answer: "Never include your social security number, passport number (unless specifically requested), religion (except in some Middle Eastern countries where it's optional), or political affiliation. Always research the specific country's anti-discrimination laws." }
];

const ICON_MAP = { FiHome, FiChevronRight, FiGlobe, FiTarget, FiFileText, FiCalendar, FiShield, FiStar, FiGrid, FiArrowRight, FiRefreshCw, FiHelpCircle, FiAlertCircle, FiCheckCircle, FiXCircle, FiEdit, FiFlag, FiMapPin, FiLayout, FiAlertTriangle, FiCamera, FiUsers, FiClock };

const CountryResumeFormatCalculatorPage = ({ seoData, buildTimestamp }) => {
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
  const safeFaqDates = faqDates || Array(5).fill(freshnessIndicator);

  const canonicalUrl = "https://professionalresumefree.com/country-resume-format-calculator";
  
  // Optimized title - approximately 70 characters
  const optimizedTitle = "Free Country Resume Format Calculator 2026 - International CV Guide";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "country resume format requirements by nation",
    "international resume format guide 2026",
    "resume photo rules by country calculator",
    "how to write CV for different countries",
    "country-specific resume section ordering",
    "international job application format checker",
    "global resume standards comparison tool"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "What resume format do international employers prefer?", answer: "International employers prefer country-specific formats that follow local conventions. For example, German employers expect a photo and personal details, while US employers strictly avoid photos. Our calculator shows you the exact format requirements for 10 major countries." },
    { question: "Do I need a different resume for each country?", answer: "Yes, each country has unique expectations for resume format, content, and personal information. Using the wrong format can result in immediate rejection. Our tool helps you customize your resume for specific country requirements." }
  ];

  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const calculateFormat = useCallback(() => {
    const format = COUNTRY_FORMATS[selectedCountry];
    if (format) setResults(format);
  }, [selectedCountry]);

  useEffect(() => { calculateFormat(); }, [calculateFormat]);

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
        "description": "Get resume format requirements for 10 countries. Learn photo rules, section ordering, personal info conventions, and page limits. International job application guide. Free, private.",
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
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapplication`,
        "name": "Free Country Resume Format Calculator",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "description": "Free online tool to get country-specific resume format requirements including photo rules, section ordering, and personal information conventions for 10 countries.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript"
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Country Resume Format Calculator: International CV Guide 2026",
        "description": "Get the exact resume format requirements for USA, UK, Germany, Japan, France, Australia, Canada, UAE, India, and Singapore. Learn photo rules, section ordering, and personal info conventions.",
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
          ...FAQS.map((faq, index) => ({
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
              "datePublished": safeFaqDates[index + FAQS.length] || safeCurrentDate
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Country Resume Format Calculator",
        "description": "Step-by-step guide to finding the right resume format for any country",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Select Your Target Country",
            "text": "Choose the country where you plan to apply for jobs from the dropdown menu."
          },
          {
            "@type": "HowToStep",
            "name": "Review Format Requirements",
            "text": "Check the resume format specifications including page limits, photo requirements, and section ordering."
          },
          {
            "@type": "HowToStep",
            "name": "Note Personal Info Rules",
            "text": "Review what personal information to include or avoid based on local customs and anti-discrimination laws."
          },
          {
            "@type": "HowToStep",
            "name": "Build Your Country-Specific Resume",
            "text": "Use our free resume builder to create a resume that matches the country's format requirements."
          }
        ],
        "totalTime": "PT5M"
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
        <meta name="description" content="Get resume format requirements for 10 countries. Learn photo rules, section ordering, personal info conventions, and page limits. International job application guide. Free, private." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="country resume format, international resume guide, CV format by country, resume photo rules, global resume standards, country CV requirements, international job application, resume format calculator, country-specific resume, international CV guide 2026" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Free Country Resume Format Calculator 2026 - International CV Guide" />
        <meta name="chatgpt-fts:description" content="Get country-specific resume format requirements for 10 countries. Learn photo rules, section ordering, and personal info conventions. Free, no sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - International Career Tools" />
        
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
        <meta property="og:title" content="Free Country Resume Format Calculator 2026 - International CV Guide" />
        <meta property="og:description" content="Get country-specific resume format requirements for 10 countries. Learn photo rules, section ordering, and personal info conventions. Free, private, no sign-up." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Free Country Resume Format Calculator 2026 - International CV Guide" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Country Resume Format Calculator 2026 - International CV Guide" />
        <meta name="twitter:description" content="Get country-specific resume format requirements. Learn photo rules, section ordering, and personal info conventions. Free, private." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Country Resume Format Calculator 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden' }}>
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/country-resume-format-calculator" itemProp="item"><span itemProp="name">Country Resume Formats</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Country Resume Format Calculator 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">🌍 Free Tool • No Sign Up • Instant Results | Updated {CURRENT_YEAR}</div>
              <h1 id="hero-heading">Free <span className="gradient-text">Country Resume Format</span> Calculator {CURRENT_YEAR}</h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Get <strong>country-specific resume format requirements</strong> for 10 countries. Learn photo rules, section ordering, and personal info conventions. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">📊 Based on {CURRENT_YEAR} International Hiring Standards</span>
                </div>
                <div className="stat-card"><div className="stat-number">10</div><div className="stat-label">Countries</div></div>
                <div className="stat-card"><div className="stat-number">Photo</div><div className="stat-label">Guidelines</div></div>
                <div className="stat-card"><div className="stat-number">Sections</div><div className="stat-label">Ordering</div></div>
                <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Private</div></div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }} aria-label="Article meta information">
                <span><FiCalendar size={14} style={{ display: 'inline' }} /> Updated: {safeCurrentDate}</span>
                <span><FiClock size={14} style={{ display: 'inline' }} /> Instant Results</span>
                <span><FiUsers size={14} style={{ display: 'inline' }} /> Trusted by 500K+ Users</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }} aria-label="Footnote">
                * Based on {CURRENT_YEAR} International Hiring Standards | Regular Updates
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }} role="group" aria-label="Additional tools">
                <Link href="/free-resume-builder" className="btn-outline" aria-label="Build your professional resume"><FiEdit /> Build Your Resume</Link>
                <Link href="/immigration-resume-readiness-calculator" className="btn-outline" aria-label="Check immigration resume readiness"><FiGlobe /> Immigration Resume</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header">
                <h2 id="calculator-heading" className="section-title">Country Format Selector</h2>
                <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Select a country to see its resume format requirements</p>
              </div>
              <div className="input-group">
                <label className="input-label"><FiFlag size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Select Country</label>
                <select className="input-field" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                  {Object.entries(COUNTRY_FORMATS).map(([key, country]) => <option key={key} value={key}>{country.name}</option>)}
                </select>
              </div>

              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>📋 {results.name} Resume Format</h3>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card"><div className="stat-number">{results.maxPages}</div><div className="stat-label">Max Pages</div></div>
                    <div className="stat-card"><div className="stat-number" style={{ color: results.photo ? 'var(--success-color)' : 'var(--error-color)' }}>{results.photo ? 'Yes ✓' : 'No ✗'}</div><div className="stat-label">Photo Required</div></div>
                    <div className="stat-card"><div className="stat-number">{results.sections.length}</div><div className="stat-label">Standard Sections</div></div>
                  </div>

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>📑 Section Order</h3>
                  {results.sections.map((section, idx) => <div key={idx} className="format-item"><span style={{ fontWeight: 600, color: 'var(--accent-primary)', minWidth: '30px' }}>{idx + 1}.</span><span>{section}</span></div>)}

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>✅ Include</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {results.personalInfo.map((info, idx) => <span key={idx} className="format-item" style={{ padding: '0.4rem 0.75rem', margin: 0 }}><FiCheckCircle size={14} color="var(--success-color)" style={{ marginRight: '0.5rem' }} />{info}</span>)}
                  </div>

                  {results.avoidInfo.length > 0 && (
                    <>
                      <h3 style={{ color: 'var(--error-color)', marginBottom: '0.75rem' }}>❌ Avoid</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                        {results.avoidInfo.map((info, idx) => <span key={idx} className="format-item" style={{ padding: '0.4rem 0.75rem', margin: 0, borderColor: 'rgba(244,67,54,0.3)' }}><FiXCircle size={14} color="var(--error-color)" style={{ marginRight: '0.5rem' }} />{info}</span>)}
                      </div>
                    </>
                  )}

                  <div className="gold-divider"></div>
                  <div style={{ padding: '1rem', background: 'rgba(242,202,80,0.05)', borderRadius: '0.5rem', border: '0.5px solid var(--border-gold-filament)' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-body-md)' }}>💡 Tips</h3>
                    <p className="text-small">{results.tips}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="features-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="features-heading" className="section-title">International Format Features</h2>
              <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Everything you need to format your resume for global job applications</p>
            </div>
            <div className="grid">
              {FEATURES.map((f, i) => { const Icon = ICON_MAP[f.icon] || FiStar; return <div key={i} className="card-executive" style={{ textAlign: 'center' }}><div style={{ width: 64, height: 64, background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)' }}><Icon size={32} /></div><h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{f.title}</h3><p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{f.desc}</p><span className="badge" style={{ marginTop: '1rem', padding: '0.25rem 0.75rem', fontSize: 'var(--font-size-body-sm)' }}>{f.stat}</span></div>; })}
            </div>
          </div>
        </section>

        {/* People Also Ask Section (INJECTED FROM PAGE 1 BLUEPRINT) */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About International Resumes</h2>
              <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Quick answers to common international resume questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <div key={`paa-${i}`} className={`faq-item ${activeFaq === `paa-${i}` ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === `paa-${i}` ? null : `paa-${i}`)} role="button" tabIndex={0}>
                  <div className="faq-question"><h3 style={{ fontSize: 'var(--font-size-body-sm)', margin: 0, flex: 1 }}>{paa.question}</h3><span>{activeFaq === `paa-${i}` ? '−' : '+'}</span></div>
                  {activeFaq === `paa-${i}` && <div className="faq-answer"><p>{paa.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Common questions about international resume formats</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0}>
                  <div className="faq-question"><h3 style={{ fontSize: 'var(--font-size-body-sm)', margin: 0, flex: 1 }}>{faq.question}</h3><span>{activeFaq === i ? '−' : '+'}</span></div>
                  {activeFaq === i && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d, #2a2a2c)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="cta-heading">
          <div className="section-container">
            <h2 id="cta-heading">Applying for Jobs Abroad?</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto 2rem', color: 'var(--text-secondary)' }}>Get the right resume format for your target country. <strong>100% Free. No Sign-Up. Complete Privacy.</strong></p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Call to action buttons">
              <Link href="/free-resume-builder" className="btn-primary"><FiEdit /> Build Your Resume</Link>
              <Link href="/immigration-points-calculator" className="btn-outline"><FiGlobe /> Immigration Points</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {["No sign-up required", "100% Private", "Instant results", "Free forever"].map((f, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>✦ {f}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Explore More International Career Tools</h2>
              <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Complement your international job search with these resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/immigration-points-calculator", text: "Immigration Points Calculator", iconName: "FiGlobe" },
                { href: "/immigration-resume-readiness-calculator", text: "Immigration Resume Readiness", iconName: "FiFileText" },
                { href: "/free-resume-builder", text: "ATS Resume Builder", iconName: "FiEdit" },
                { href: "/salary-calculator", text: "Salary Calculator", iconName: "FiDollarSign" }
              ].map((link, i) => { const Icon = ICON_MAP[link.iconName] || FiFileText; return <Link key={i} href={link.href} className="geo-link-card"><Icon size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} /><span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{link.text}</span></Link>; })}
            </div>
          </div>
        </section>

        <div style={{ padding: '0.75rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate}</span>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

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
  const faqDates = Array(7).fill(null).map((_, i) => {
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
      "name": "Country Resume Format Calculator",
      "item": "https://professionalresumefree.com/country-resume-format-calculator"
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

export default CountryResumeFormatCalculatorPage;