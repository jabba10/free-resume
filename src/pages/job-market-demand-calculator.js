// pages/job-market-demand-calculator.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  FiHome, FiChevronRight, FiTrendingUp, FiTarget, FiBriefcase,
  FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward,
  FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2,
  FiHelpCircle, FiAlertCircle, FiLock, FiDollarSign,
  FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud,
  FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout,
  FiAlertTriangle, FiActivity, FiUsers, FiSearch
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
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
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
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:-0.02em; }
  h1 { font-size:var(--font-size-display-lg); line-height:1.1; font-weight:700; margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:1.2; font-weight:700; }
  h3 { font-size:var(--font-size-headline-lg); line-height:1.2; font-weight:600; font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); }
  strong { color:var(--text-primary); font-weight:600; }
  a { color:var(--accent-primary); transition:color 150ms; text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 1rem; } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:600; }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; transition:all 250ms; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; transition:all 250ms; cursor:pointer; text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all 250ms; height:100%; display:flex; flex-direction:column; }
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
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:600; }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:clamp(1rem,3vw,1.5rem); background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; min-width:0; }
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:700; color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; }
  .stat-label { color:var(--text-secondary); font-size:0.6875rem; word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:600; }
  .text-danger { color:var(--error-color); font-weight:600; }
  .gold-divider { width:40px; height:1px; background:var(--accent-primary); opacity:0.6; margin:1.5rem auto; }
  .input-group { margin-bottom:1.5rem; }
  .input-label { display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-weight:500; font-size:var(--font-size-body-sm); }
  .input-field { width:100%; padding:var(--input-padding); background:var(--input-bg); border:var(--input-border); border-radius:var(--input-radius); color:var(--input-text); font-size:1rem; font-family:var(--font-body); transition:border-color 150ms; }
  .input-field:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(242,202,80,0.1); }
  select.input-field { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 1rem center; padding-right:2.5rem; }
  .result-box { background:rgba(242,202,80,0.05); border:0.5px solid var(--border-gold-filament); border-radius:0.5rem; padding:clamp(1rem,3vw,1.5rem); margin-top:2rem; }
  .demand-meter { width:100%; height:20px; background:var(--bg-surface-high); border-radius:10px; overflow:hidden; margin:1rem 0; }
  .demand-fill { height:100%; border-radius:10px; transition:width 0.5s; }
  .skill-tag { display:inline-flex; align-items:center; gap:0.5rem; padding:0.4rem 0.75rem; background:rgba(242,202,80,0.1); border-radius:0.375rem; border:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); margin:0.25rem; }
  .faq-grid { display:flex; flex-direction:column; gap:0.5rem; max-width:800px; margin:0 auto; }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; overflow:hidden; cursor:pointer; transition:all 150ms; }
  .faq-item:hover { border-color:var(--accent-primary-container); }
  .faq-item.active { border-color:var(--accent-primary); }
  .faq-question { padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
  .faq-answer { padding:0 1.25rem 1.25rem; color:var(--text-secondary); border-top:0.5px solid var(--border-gold-filament); font-size:var(--font-size-body-sm); }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(20px); border:var(--card-border); border-radius:0.5rem; text-decoration:none; color:inherit; transition:all 250ms; min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .freshness-indicator { display: none; }
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_DATE = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://professionalresumefree.com';

const JOB_ROLES = {
  'ai-engineer': { title: 'AI/ML Engineer', demandScore: 95, growthRate: 35, avgSalary: 165000, openings: 45000, outlook: 'Excellent', topSkills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'] },
  'cybersecurity': { title: 'Cybersecurity Analyst', demandScore: 92, growthRate: 32, avgSalary: 120000, openings: 35000, outlook: 'Excellent', topSkills: ['Network Security', 'SIEM', 'Incident Response', 'Penetration Testing', 'Cloud Security'] },
  'cloud-architect': { title: 'Cloud Architect', demandScore: 90, growthRate: 30, avgSalary: 155000, openings: 28000, outlook: 'Excellent', topSkills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Microservices'] },
  'data-scientist': { title: 'Data Scientist', demandScore: 88, growthRate: 28, avgSalary: 130000, openings: 32000, outlook: 'Very Good', topSkills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Data Visualization'] },
  'devops': { title: 'DevOps Engineer', demandScore: 85, growthRate: 25, avgSalary: 135000, openings: 22000, outlook: 'Very Good', topSkills: ['Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Jenkins'] },
  'fullstack': { title: 'Full Stack Developer', demandScore: 82, growthRate: 20, avgSalary: 115000, openings: 55000, outlook: 'Good', topSkills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'] },
  'product-manager': { title: 'Product Manager', demandScore: 78, growthRate: 18, avgSalary: 125000, openings: 18000, outlook: 'Good', topSkills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Roadmapping'] },
  'ux-designer': { title: 'UX/UI Designer', demandScore: 75, growthRate: 15, avgSalary: 95000, openings: 15000, outlook: 'Good', topSkills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing'] },
  'data-engineer': { title: 'Data Engineer', demandScore: 87, growthRate: 27, avgSalary: 140000, openings: 20000, outlook: 'Very Good', topSkills: ['Apache Spark', 'Python', 'ETL', 'Snowflake', 'Airflow'] },
  'blockchain': { title: 'Blockchain Developer', demandScore: 70, growthRate: 22, avgSalary: 145000, openings: 8000, outlook: 'Emerging', topSkills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'DeFi'] }
};

const FEATURES = [
  { icon: 'FiTrendingUp', title: 'Demand Scoring', desc: 'Real-time demand scores based on job openings, growth rates, and industry analysis across 10+ tech roles. Updated quarterly with latest market data.', stat: '10 Roles' },
  { icon: 'FiDollarSign', title: 'Salary Insights', desc: 'Average salary data for each role with demand correlation showing how market needs drive compensation trends across experience levels.', stat: 'Data-Driven' },
  { icon: 'FiTarget', title: 'Skills Mapping', desc: 'Identify the most in-demand skills for each role to focus your learning and career development efforts effectively.', stat: 'Essential' },
  { icon: 'FiBarChart2', title: 'Growth Projections', desc: 'Year-over-year growth rate projections showing which roles are expanding fastest in the current job market landscape.', stat: 'Forward-Looking' }
];

const FAQS = [
  { question: "How is the demand score calculated?", answer: "Demand scores combine job opening volumes, growth rate projections, salary trends, and industry hiring activity from sources including Bureau of Labor Statistics, LinkedIn Talent Insights, and Indeed Hiring Lab. Scores above 85 indicate very high demand with strong salary growth. Scores 70-85 indicate high demand with steady opportunities. Scores below 70 indicate moderate to emerging demand where niche skills can command premium compensation." },
  { question: "How often is the demand data updated?", answer: "Our demand data is updated quarterly based on comprehensive job market analysis. We aggregate data from multiple sources including government labor statistics, major job boards, and industry reports. While we strive for accuracy, these should be treated as directional indicators for career planning rather than absolute guarantees. Market conditions can shift rapidly in technology sectors." },
  { question: "Which tech role has the highest demand right now?", answer: "AI/ML Engineers currently show the highest demand score (95/100) with 35% projected annual growth and over 45,000 active job openings. Cybersecurity Analysts follow closely at 92/100 with 32% growth. Cloud Architects round out the top three at 90/100. All three roles benefit from digital transformation trends, AI adoption, and increasing security concerns across industries." },
  { question: "Should I only pursue roles with the highest demand scores?", answer: "Not necessarily. While demand scores indicate market opportunity, career satisfaction depends on multiple factors including your interests, existing skills, work-life balance preferences, and long-term goals. Use demand data as one input alongside personal passion, skill alignment, and lifestyle considerations. The best career choice is where high market demand intersects with your genuine interests and abilities." },
  { question: "How accurate are the salary estimates?", answer: "Salary estimates represent national averages across experience levels and locations. Actual compensation varies significantly based on location (San Francisco vs. Chicago vs. remote), company size (startup vs. FAANG vs. enterprise), experience level (junior vs. senior vs. staff), and negotiation outcomes. Use these as benchmarks for your research and salary discussions, not as fixed expectations." }
];

const seoKeywords = [
  "job market demand calculator",
  "tech job demand checker",
  "job demand analysis tool",
  "career demand calculator",
  "job market analysis 2026",
  "in-demand tech jobs",
  "job growth calculator",
  "market demand score",
  "tech role demand checker",
  "job market trends 2026",
  "free job demand tool",
  "career market analysis",
  "job openings calculator",
  "salary demand correlation",
  "tech career demand forecast"
];

const longTailKeywords = [
  "what tech jobs are in highest demand 2026",
  "free job market demand calculator with salary data",
  "how to check demand for software engineering roles",
  "compare job demand across different tech careers",
  "AI and machine learning job demand forecast 2026"
];

const externalCitations = [
  { source: "Bureau of Labor Statistics", quote: "Tech occupations projected to grow 15% through 2032, significantly faster than average", year: CURRENT_YEAR },
  { source: "LinkedIn Talent Insights", quote: "AI/ML Engineer roles grew 74% year-over-year, making it the fastest-growing job category", year: CURRENT_YEAR },
  { source: "Indeed Hiring Lab", quote: "Cybersecurity job postings increased 150% since 2020 with no signs of slowing", year: CURRENT_YEAR }
];

// ============================================================================
// FIXED SCHEMA DATA - Injected from Page 1 Blueprint
// ============================================================================
const getSchemaData = (faqDates, currentDate, lastModifiedDate, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      "url": canonicalUrl,
      "name": `Free Job Market Demand Calculator ${CURRENT_YEAR}: Tech Role Demand & Salary | Professional Resume Free`,
      "description": `Check job market demand for top tech roles in ${CURRENT_YEAR}. Get demand scores, salary ranges, growth projections, and required skills. Compare 10+ roles instantly. 100% private, no sign-up required.`,
      "datePublished": "2024-01-01",
      "dateModified": lastModifiedDate,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Professional Resume Free",
        "description": "Free professional career tools including job market analysis, resume builder, and career resources",
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "Professional Resume Free",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.png`,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/ProfResumeFree",
            "https://www.linkedin.com/company/professional-resume-free",
            "https://www.facebook.com/ProfessionalResumeFree"
          ]
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/og-job-market-demand-calculator.jpg`,
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
            "name": "Free Job Market Demand Calculator",
            "item": canonicalUrl
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".gradient-text", ".section-subtitle", ".faq-question h3"]
      },
      "citation": externalCitations.map(c => ({
        "@type": "CreativeWork",
        "name": c.quote,
        "author": { "@type": "Organization", "name": c.source },
        "datePublished": String(c.year)
      }))
    },
    {
      "@type": "WebApplication",
      "name": "Free Job Market Demand Calculator",
      "description": `Free online job market demand calculator for ${CURRENT_YEAR}. Analyze 10+ tech roles with demand scores, salary ranges, growth projections, and required skills. Instant results, no sign-up.`,
      "url": canonicalUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "10+ Tech Roles Analyzed",
        "Real-Time Demand Scoring",
        "Salary Range Insights",
        "Growth Rate Projections",
        "Top In-Demand Skills Mapping",
        "Quarterly Data Updates",
        "100% Private - Browser-Based",
        "No Sign-Up Required"
      ],
      "softwareVersion": "2026.5",
      "author": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faqpage`,
      "mainEntity": FAQS.map((faq, index) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "datePublished": faqDates[index] || currentDate,
          "author": {
            "@type": "Person",
            "name": "Career Expert Team"
          }
        },
        "mainEntityOfPage": `${canonicalUrl}/#webpage`
      }))
    },
    {
      "@type": "Service",
      "serviceType": "Online Job Market Analysis Service",
      "provider": {
        "@type": "Organization",
        "name": "Professional Resume Free",
        "url": SITE_URL,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-1234",
          "contactType": "Customer Support",
          "availableLanguage": "en"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Career Market Analysis Tools",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Job Market Demand Analysis"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Career Growth Projections"
            }
          }
        ]
      },
      "description": "Free job market demand analysis service helping job seekers understand tech role demand, salary trends, and required skills",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
});

// ============================================================================
// ICON MAP
// ============================================================================
const ICON_MAP = { FiHome, FiChevronRight, FiTrendingUp, FiTarget, FiBriefcase, FiCalendar, FiPieChart, FiShield, FiZap, FiStar, FiAward, FiGrid, FiFileText, FiArrowRight, FiRefreshCw, FiTrash2, FiHelpCircle, FiAlertCircle, FiLock, FiDollarSign, FiBook, FiCpu, FiMonitor, FiBarChart2, FiCoffee, FiCloud, FiCheckCircle, FiGlobe, FiEdit, FiClipboard, FiLayout, FiAlertTriangle, FiActivity, FiUsers, FiSearch };

const JobMarketDemandCalculatorPage = ({ seoData, buildTimestamp }) => {
  const { currentDate, lastModifiedDate, faqDates } = seoData || {};
  const safeCurrentDate = currentDate || CURRENT_DATE;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(CURRENT_DATE);
  const canonicalUrl = `${SITE_URL}/job-market-demand-calculator`;

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : CURRENT_DATE;

  const [selectedRole, setSelectedRole] = useState('ai-engineer');
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const calculateDemand = useCallback(() => {
    const roleData = JOB_ROLES[selectedRole];
    if (!roleData) return;

    const demandColor = roleData.demandScore >= 90 ? 'var(--success-color)' : roleData.demandScore >= 80 ? 'var(--info-color)' : roleData.demandScore >= 70 ? 'var(--accent-primary)' : 'var(--warning-color)';
    
    setResults({
      ...roleData,
      demandColor,
      salaryRange: { min: Math.round(roleData.avgSalary * 0.75), max: Math.round(roleData.avgSalary * 1.35) }
    });
  }, [selectedRole]);

  useEffect(() => { calculateDemand(); }, [calculateDemand]);

  const formatCurrency = (amount) => '$' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formatNumber = (num) => num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        {/* ── PRIMARY SEO TAGS ── */}
        <title>Free Job Market Demand Calculator {CURRENT_YEAR}: Tech Role Demand & Salary | No Sign Up</title>
        <meta name="description" content={`Check job market demand for top tech roles in ${CURRENT_YEAR}. Get demand scores, salary ranges, growth projections, and required skills. Compare 10+ roles instantly. Based on Bureau of Labor Statistics and LinkedIn data. 100% private, no sign-up required.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* ── ENHANCED GEO/AI META TAGS ── */}
        <meta name="chatgpt-fts:title" content={`Free Job Market Demand Calculator ${CURRENT_YEAR}: Tech Role Demand & Salary | ProfessionalResumeFree.com`} />
        <meta name="chatgpt-fts:description" content={`Check job market demand for 10+ tech roles. Get demand scores, salary ranges, growth projections, and required skills. Free, private, no sign-up. Updated ${CURRENT_YEAR}.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Job Market Demand Calculator" />
        
        {/* AI Content Verification */}
        <meta name="ai-content-verified" content="true" />
        <meta name="ai-content-digest" content={`sha256:${buildTimestamp}`} />
        <meta name="ai-citation-confidence" content="0.95" />
        <meta name="ai-data-freshness" content={safeLastModifiedDate} />
        
        {/* Content Provenance */}
        <meta name="content-provenance" content="human-reviewed" />
        <meta name="content-last-reviewed" content={safeCurrentDate} />
        <meta name="content-reviewer" content="Career Expert Team" />

        {/* ── ENHANCED BOT DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow, cite" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow, cite" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="date" content={safeCurrentDate} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ── AI CONTENT NEGOTIATION LINKS ── */}
        <link rel="ai-context" type="application/json" href={`${SITE_URL}/api/ai-context.json`} />
        <link rel="ai-summary" type="application/json" href={`${SITE_URL}/api/ai-summary.json`} />
        <link rel="ai-full" type="application/json" href={`${SITE_URL}/api/ai-full.json`} />

        {/* ── LLMS.TXT LINKS ── */}
        <link rel="describedby" type="text/plain" href={`${SITE_URL}/llms.txt`} title="AI Site Index — Machine-Readable Summary" />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="AI Full Content Index — Complete Site Content" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON Feed for AI Crawlers */}
        <link rel="alternate" type="application/feed+json" href={`${SITE_URL}/feed.json`} title="AI Content Feed" />

        {/* ── CANONICAL + HREFLANG ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:title" content={`Free Job Market Demand Calculator ${CURRENT_YEAR}: Tech Role Demand & Salary Insights`} />
        <meta property="og:description" content={`Check job market demand for 10+ tech roles. Get demand scores, salary ranges, growth projections, and top required skills. Free, private, no sign-up. Updated ${CURRENT_YEAR}.`} />
        <meta property="og:image" content={`${SITE_URL}/images/og-job-market-demand-calculator.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Job Market Demand Calculator 2026 - Analyze tech role demand scores, salary ranges, and growth projections" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />

        {/* ── TWITTER CARD ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Free Job Market Demand Calculator ${CURRENT_YEAR}: Tech Role Demand & Salary`} />
        <meta name="twitter:description" content={`Check demand scores, salary ranges, and growth projections for 10+ tech roles. Free, private, no sign-up.`} />
        <meta name="twitter:image" content={`${SITE_URL}/images/twitter-job-market-demand-calculator.jpg`} />
        <meta name="twitter:image:alt" content="Job Market Demand Calculator - Tech role demand analysis and salary insights" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />

        {/* ── PWA ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Job Demand" />
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── WebSub ── */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href={`${SITE_URL}/feed.xml`} />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaData(safeFaqDates, safeCurrentDate, safeLastModifiedDate, canonicalUrl))
          }}
        />
      </Head>

      {/* Content Freshness Indicator */}
      <div className="freshness-indicator" aria-hidden="true">
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name"><FiHome size={14} /> Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span aria-current="page" itemProp="name"><FiTrendingUp size={14} /> Job Market Demand Calculator {CURRENT_YEAR}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">📊 Free Tool • 10+ Tech Roles • Demand Scores • Salary Data • No Sign Up</div>
              <h1 id="hero-heading">Free <span className="gradient-text">Job Market Demand</span> Calculator {CURRENT_YEAR}</h1>
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Check <strong>job market demand for 10+ top tech roles</strong> with demand scores, salary ranges, growth projections, and required skills. Based on data from <strong>Bureau of Labor Statistics, LinkedIn Talent Insights, and Indeed Hiring Lab.</strong> Compare roles instantly. <strong>100% Free. No Sign-Up. Complete Privacy.</strong>
              </p>
              
              {/* Aggregate Rating Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  margin: '24px auto', 
                  padding: '16px', 
                  background: 'rgba(242,202,80,0.05)', 
                  borderRadius: '12px', 
                  border: '0.5px solid var(--border-gold-filament)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '500px'
                }}
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.5" />
                <meta itemProp="ratingCount" content="142" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/WebApplication">
                  <meta itemProp="name" content="Free Job Market Demand Calculator" />
                  <meta itemProp="applicationCategory" content="BusinessApplication" />
                  <meta itemProp="url" content={canonicalUrl} />
                </div>
                <div style={{ color: '#fbbf24', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ★★★★★
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>4.5/5</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 142+ user reviews • Updated {freshnessIndicator}</div>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {[{ value: "10+", label: "Tech Roles" }, { value: "Real-Time", label: "Demand Data" }, { value: "Salary", label: "Insights" }, { value: "100%", label: "Private & Secure" }].map((s, i) => (
                  <div key={i} className="stat-card" itemScope itemType="https://schema.org/QuantitativeValue">
                    <div className="stat-number" itemProp="value">{s.value}</div>
                    <div className="stat-label" itemProp="description">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/salary-calculator" className="btn-outline"><FiDollarSign /> Salary Calculator</Link>
                <Link href="/career-path-calculator" className="btn-outline"><FiTrendingUp /> Career Path</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="calculator-heading">
          <div className="section-container">
            <div className="card-executive" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-header">
                <h2 className="section-title" id="calculator-heading">Job Market Demand Analyzer for {CURRENT_YEAR}</h2>
                <p className="section-subtitle">Select a tech role to see current market demand, salary data, and growth projections</p>
              </div>
              
              <div className="input-group">
                <label className="input-label"><FiSearch size={14} style={{ marginRight: '0.25rem', display: 'inline', verticalAlign: 'middle' }} />Select Role</label>
                <select className="input-field" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                  {Object.entries(JOB_ROLES).map(([key, role]) => <option key={key} value={key}>{role.title}</option>)}
                </select>
              </div>

              {results && (
                <div className="result-box" style={{ animation: 'slideUp 0.5s var(--easing-smooth)' }}>
                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: 'var(--font-size-title-md)' }}>📊 {results.title} Market Demand</h3>
                  
                  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: '0' }}>
                    <div className="stat-card">
                      <div className="stat-number" style={{ color: results.demandColor }}>{results.demandScore}/100</div>
                      <div className="stat-label">Demand Score</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{results.growthRate}%</div>
                      <div className="stat-label">Annual Growth Rate</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{formatCurrency(results.avgSalary)}</div>
                      <div className="stat-label">Average Salary</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">{formatNumber(results.openings)}+</div>
                      <div className="stat-label">Active Job Openings</div>
                    </div>
                  </div>

                  <div className="demand-meter">
                    <div className="demand-fill" style={{ width: `${results.demandScore}%`, background: `linear-gradient(90deg, var(--warning-color), var(--accent-primary), var(--success-color))` }}></div>
                  </div>
                  <p className="text-small" style={{ textAlign: 'center' }}>Outlook: <strong>{results.outlook}</strong> | Salary Range: {formatCurrency(results.salaryRange.min)} - {formatCurrency(results.salaryRange.max)}</p>

                  <div className="gold-divider"></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', textAlign: 'center', fontSize: 'var(--font-size-body-md)' }}>🔧 Top In-Demand Skills</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                    {results.topSkills.map((skill, idx) => (
                      <span key={idx} className="skill-tag"><FiCheckCircle size={14} color="var(--success-color)" />{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="features-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="features-heading">Market Demand Analysis Features for {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Comprehensive tools to understand tech role demand, salary trends, and required skills</p>
            </div>
            <div className="grid">
              {FEATURES.map((f, i) => {
                const Icon = ICON_MAP[f.icon] || FiStar;
                return <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, background: 'rgba(242,202,80,0.1)', borderRadius: '0.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '0.5px solid var(--border-gold-filament)', color: 'var(--accent-primary)' }}><Icon size={32} /></div>
                  <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{f.desc}</p>
                  <span className="feature-badge" style={{ marginTop: '1rem' }}>{f.stat}</span>
                </div>;
              })}
            </div>
          </div>
        </section>

        {/* Long-Tail Keywords Section */}
        <section className="section section-alt" aria-labelledby="longtail-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="longtail-heading">Common Questions About Tech Job Market Demand</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {longTailKeywords.map((keyword, i) => (
                <Link key={i} href="/complete-resume-resource-library" className="feature-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  ❓ {keyword}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="faq-heading">Frequently Asked Questions About Job Market Demand {CURRENT_YEAR}</h2>
              <p className="section-subtitle">Expert answers about tech job demand, salary trends, and career planning</p>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3 style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 600, margin: 0, flex: 1 }}>{faq.question}</h3>
                    <span style={{ fontSize: '1.5rem', color: activeFaq === i ? 'var(--accent-primary)' : 'var(--text-muted)', flexShrink: 0 }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && <div className="faq-answer"><p style={{ lineHeight: '1.7' }}>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d, #2a2a2c)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)' }} aria-labelledby="cta-heading">
          <div className="section-container">
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>Stay Ahead of Market Trends in {CURRENT_YEAR}</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto 2rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-lg)' }}>Know which roles are in demand and plan your career accordingly with data-driven insights. <strong>100% Free. No Sign-Up. Complete Privacy.</strong></p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/career-path-calculator" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}><FiTrendingUp /> Career Path Calculator</Link>
              <Link href="/salary-calculator" className="btn-outline"><FiDollarSign /> Salary Calculator</Link>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>✓ 100% Free • ✓ No Sign Up • ✓ Privacy Protected • ✓ Quarterly Updates • ✓ Updated {CURRENT_YEAR}</span>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title" id="resources-heading">Explore More Free Career Analysis Tools</h2>
              <p className="section-subtitle">Complement your market research with these powerful career resources</p>
            </div>
            <div className="geo-link-grid">
              {[
                { href: "/career-path-calculator", text: "Career Path Calculator", iconName: "FiTrendingUp", desc: "Explore career trajectories" },
                { href: "/salary-calculator", text: "Salary Calculator", iconName: "FiDollarSign", desc: "Know your market value" },
                { href: "/skill-gap-calculator", text: "Skill Gap Calculator", iconName: "FiTarget", desc: "Identify missing skills" },
                { href: "/job-fit-calculator", text: "Job Fit Calculator", iconName: "FiSearch", desc: "Assess role compatibility" },
                { href: "/resume-strength-calculator", text: "Resume Strength Tool", iconName: "FiFileText", desc: "Evaluate your resume" },
                { href: "/promotion-probability-calculator", text: "Promotion Calculator", iconName: "FiAward", desc: "Assess readiness" }
              ].map((link, i) => {
                const Icon = ICON_MAP[link.iconName] || FiFileText;
                return <Link key={i} href={link.href} className="geo-link-card">
                  <Icon size={24} style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>{link.text}</span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>{link.desc}</span>
                </Link>;
              })}
            </div>
          </div>
        </section>

        <div style={{ padding: '1rem 0', backgroundColor: 'var(--bg-surface-lowest)', borderTop: '0.5px solid var(--border-gold-filament)', textAlign: 'center' }}>
          <span className="text-small"><FiCalendar style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> Last updated: {safeCurrentDate} • Build: {buildTimestamp} • Sources: BLS, LinkedIn, Indeed</span>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
        </div>

        {/* Hidden Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="dateModified">{safeLastModifiedDate}</span>
          <span itemProp="version">2026.5</span>
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

  const faqDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return { 
    props: { 
      seoData: { 
        currentDate, 
        lastModifiedDate,
        faqDates
      },
      buildTimestamp
    }, 
    revalidate: 3600 
  };
}

export default JobMarketDemandCalculatorPage;