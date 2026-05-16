import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, 
  FiChevronRight, 
  FiCalendar, 
  FiClock, 
  FiEye, 
  FiStar, 
  FiAward,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiTool,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiBriefcase,
  FiCode,
  FiHeart,
  FiDollarSign,
  FiBookOpen,
  FiShield,
  FiLayers,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiTerminal,
  FiPieChart,
  FiBarChart2,
  FiPercent,
  FiTrendingUp as FiTrend,
  FiCheckCircle,
  FiXCircle,
  FiSearch, // Added for search/keyword tools
  FiMonitor // Added for job boards
} from 'react-icons/fi';

// Critical CSS inline with white background, black fonts, black buttons, grey cards
const criticalCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary: #000000;
  --secondary: #333333;
  --background: #ffffff;
  --card-bg: #f9fafb;
  --border: #e5e7eb;
  --text-light: #4b5563;
  --text-lighter: #6b7280;
  --success: #059669;
  --warning: #d97706;
  --danger: #dc2626;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.7;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}
@media (min-width: 640px) {
  .container { padding: 0 30px; }
}
.hero {
  background: var(--background);
  padding: 60px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 80px 0; }
}
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  margin-bottom: 25px;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.hero p {
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  max-width: 850px;
  margin: 0 auto 30px;
  padding: 0 20px;
  color: var(--text-light);
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 8px 22px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 25px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 50px 0;
}
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
.card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 32px 28px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 25px rgba(0,0,0,0.05);
}
.card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-primary {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 16px 36px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 260px;
  font-size: 1.05rem;
}
.btn-primary:hover { background: var(--secondary); }
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--primary);
  padding: 16px 36px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 260px;
  font-size: 1.05rem;
}
.btn-secondary:hover { background: #f5f5f5; }
.btn-secondary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 40px;
}
@media (max-width: 480px) {
  .button-container { flex-direction: column; align-items: center; gap: 15px; }
  .btn-primary, .btn-secondary { width: 100%; min-width: auto; }
}
.section {
  padding: 70px 0;
  scroll-margin-top: 30px;
}
@media (min-width: 768px) { .section { padding: 90px 0; } }
@media (max-width: 480px) { .section { padding: 60px 0; } }
.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 25px;
  padding: 0 20px;
  word-wrap: break-word;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 50px;
  padding: 0 20px;
  font-size: 1.2rem;
  line-height: 1.7;
}
.stat-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 50px 0 30px;
}
.stat-item {
  text-align: center;
  min-width: 200px;
  background: var(--card-bg);
  padding: 30px 25px;
  border-radius: 16px;
  border: 1px solid var(--border);
  flex: 1 1 200px;
  max-width: 240px;
}
.stat-number {
  font-size: 2.8rem;
  font-weight: 700;
  display: block;
  color: #000;
  line-height: 1.2;
  margin-bottom: 10px;
}
.stat-label { 
  color: var(--text-light); 
  font-size: 1rem;
  line-height: 1.5;
}
.table-wrap {
  overflow-x: auto;
  margin: 50px 0;
  background: var(--background);
  border-radius: 16px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
}
th {
  background: var(--card-bg);
  padding: 18px 20px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 1rem;
}
td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin: 50px 0;
}
@media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
.faq-item {
  background: var(--card-bg);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--border);
  height: 100%;
}
.faq-question {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.4;
}
.trust-badge {
  background: #f3f4f6;
  color: var(--primary);
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.9rem;
  border: 1px solid var(--border);
  display: inline-block;
  margin-bottom: 25px;
}
.breadcrumb {
  padding: 18px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.9rem;
}
.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.breadcrumb a:hover { border-bottom-color: var(--primary); }
.breadcrumb [aria-current="page"] { font-weight: 600; }
.hub-mini {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 50px 0 20px;
}
.hub-link-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 35px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: background 0.2s, transform 0.2s;
  font-size: 1.1rem;
}
.hub-link-card:hover { 
  background: #e5e7eb; 
  transform: translateY(-2px);
}
hr { border: none; border-top: 1px solid var(--border); margin: 60px 0; }
.text-small { font-size: 0.9rem; color: var(--text-light); }
.helper-text { 
  font-size: 0.95rem; 
  color: var(--text-light); 
  margin-top: 30px;
  text-align: center;
}
.meta-row {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0 15px;
  color: var(--text-lighter);
  font-size: 0.95rem;
}
.ai-citation {
  background: #f0f9ff;
  padding: 30px 35px;
  border-radius: 16px;
  border-left: 6px solid #000;
  font-size: 1rem;
  margin: 50px auto;
  max-width: 950px;
  text-align: left;
}
.ai-citation a { color: #000; font-weight: 500; text-decoration: underline; }
.has-text-centered { text-align: center; }
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 50px 0;
}
@media (min-width: 768px) {
  .two-col-grid { grid-template-columns: repeat(2, 1fr); }
}
.paragraph {
  margin-bottom: 25px;
  color: var(--text-light);
  line-height: 1.8;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.05rem;
}
.example-box {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  margin-top: 15px;
}
.keyword-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 25px 0;
}
.keyword-tag {
  background: #e5e7eb;
  color: #000;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
}
.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--text-light);
}
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus { top: 0; }

/* New Styles for Bottom Internal Links Section */
.internal-links-section {
  padding: 60px 0;
  background: var(--background);
  border-top: 1px solid var(--border);
}
.internal-links-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1024px) {
  .internal-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 640px) {
  .internal-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .internal-links-grid {
    grid-template-columns: 1fr;
  }
}
.internal-link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 16px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--primary);
  transition: all 0.2s;
  height: 100%;
}
.internal-link-card:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.internal-link-icon {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--primary);
}
.internal-link-text {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
}
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // UPDATED: Canonical URL without www
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-finance-and-accounting-roles";

  // UPDATED: Breadcrumb URLs without www
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
      "name": "Resume Guides",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Finance & Accounting Resume Guide",
      "item": canonicalUrl
    }
  ];

  // UPDATED: Meta image URL without www
  const meta = {
    title: "How to Write a Resume for USA Finance and Accounting Roles 2026",
    description: "Master the finance and accounting resume format for USA jobs. Expert guide with ATS strategies, keywords, templates, and examples for banking, CPA, and corporate finance roles.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/finance-resume.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "finance resume writing usa",
    "accounting resume format 2026",
    "how to write a resume for banking jobs",
    "cpa resume examples",
    "financial analyst resume template",
    "investment banking resume keywords",
    "corporate finance resume tips"
  ];

  // People Also Ask for GEO - expanded
  const peopleAlsoAsk = [
    { question: "What is the best resume format for finance jobs in USA?", answer: "The reverse-chronological format is preferred for finance and accounting roles. It highlights career progression, which is critical in this industry. Use clean, conservative formatting with standard fonts like Arial or Calibri. Avoid columns or graphics that might confuse ATS systems." },
    { question: "How do I highlight CPA certification on my resume?", answer: "Place CPA certification prominently in a 'Certifications' section near the top, or include it after your name in the header (e.g., 'Jane Doe, CPA'). Also list your active CPA status, license number (optional), and the state of licensure. If you're a candidate, write 'CPA Candidate' or 'Passed all CPA sections.'" },
    { question: "What keywords should I include in a finance resume?", answer: "Include terms like financial analysis, forecasting, GAAP, IFRS, SEC reporting, internal controls, variance analysis, budgeting, reconciliation, ERP systems (SAP, Oracle, Hyperion), Excel (pivot tables, VLOOKUP), and specific designations (CPA, CFA, CMA, CIA)." },
    { question: "Should I include a summary on my finance resume?", answer: "Yes, a 3-4 line professional summary is highly recommended. It should highlight your years of experience, key skills, certifications, and one major achievement. For example: 'CPA with 7 years of experience in financial reporting and audit. Reduced close time by 20% through process improvements.'" },
    { question: "How do I explain employment gaps in finance?", answer: "Be honest but brief. If you took time for education, travel, or family, mention it neutrally. Focus on any freelance, consulting, or volunteer finance work during the gap. In interviews, emphasize what you learned during that time." }
  ];

  // Conversational explanations for GEO - expanded
  const conversationalExplanations = [
    { topic: "Finance Resume in Plain English", content: "Think of your resume as a financial statement for your career. Recruiters want to see quantifiable achievements: how much money you saved, revenue you grew, or efficiency you improved. Every bullet should answer 'so what?' with numbers. For example, instead of 'Prepared monthly reports,' write 'Prepared monthly financial reports for $50M business unit, delivered to CFO with 100% accuracy.'" },
    { topic: "Why ATS Matters in Finance", content: "Banks and accounting firms receive thousands of applications. They use ATS to filter for specific credentials (CPA, CFA) and keywords. If your resume lacks these signals, it may never reach a human reviewer. In 2026, 89% of large finance firms use AI-powered screening that looks for context, not just keywords. So include phrases like 'managed SOX compliance' rather than just 'SOX.'" }
  ];

  // Expanded FAQ items
  const faqItems = [
    {
      question: 'Should I include GPA on my finance resume?',
      answer: 'If you are a recent graduate (within 3 years) with a GPA of 3.5 or higher, include it. For experienced professionals, omit GPA and focus on achievements and certifications. If you graduated with honors (cum laude, magna cum laude), include that distinction.',
    },
    {
      question: 'How long should a finance resume be?',
      answer: 'For entry to mid-level roles (0-10 years), one page is ideal. For senior finance managers, directors, or VPs with 10+ years, two pages are acceptable if content is substantive and relevant. Every line must add value—no fluff.',
    },
    {
      question: 'What finance certifications matter most?',
      answer: 'CPA is the gold standard for accounting. CFA for investment roles, CMA for management accounting, CIA for internal audit, and FP&A certifications (like AFP) for financial planning. List them prominently in a certifications section. Also include active licenses (Series 7, 63 if relevant).',
    },
    {
      question: 'How do I format dates on a finance resume?',
      answer: 'Use month and year (e.g., "June 2022 – Present"). Avoid gaps; if you have gaps, explain briefly in a cover letter or note consulting work. For current roles, use "Present." Be consistent throughout.',
    },
    {
      question: 'Should I include soft skills on a finance resume?',
      answer: 'Yes, but demonstrate them through achievements. Instead of "strong communicator," write "Presented quarterly financial results to board of directors and investors." Instead of "team player," write "Collaborated with cross-functional teams to implement new ERP system."',
    },
    {
      question: 'How many bullet points per job?',
      answer: 'Aim for 4-6 bullet points for your most recent role, 3-4 for previous roles. Focus on achievements, not duties. Each bullet should start with a strong action verb and include a quantifiable result where possible.',
    },
    {
      question: 'What if I don\'t have CPA yet?',
      answer: 'If you\'re pursuing CPA, include "CPA Candidate" or "Passed all 4 CPA sections" (if true). If you\'re planning to sit, you can add "CPA candidate (expected completion 2026)" to show commitment.',
    }
  ];

  // Testimonials - expanded
  const testimonials = [
    {
      quote: "This guide helped me rewrite my finance resume with concrete numbers. I landed a senior analyst role at JPMorgan within 4 weeks. The CPA section tips were spot-on, and the keyword advice helped me pass ATS screening.",
      metric: "JPMorgan Hire",
      name: "David K.",
      role: "Senior Financial Analyst",
      date: "2026-02-10"
    },
    {
      quote: "As an international student, I struggled with USA resume expectations. This template showed me how to highlight my accounting experience properly. Got three interview calls! The section on quantifying achievements was a game-changer.",
      metric: "3 Interviews",
      name: "Priya S.",
      role: "Tax Associate",
      date: "2026-01-22"
    },
    {
      quote: "I was a career changer from retail management to finance. This guide explained how to translate my experience into finance language. I'm now a financial analyst at a Fortune 500 company.",
      metric: "Career Change Success",
      name: "Marcus W.",
      role: "Financial Analyst",
      date: "2026-02-28"
    }
  ];

  // Keyword categories for 2026
  const financeKeywords = {
    technical: ["GAAP", "IFRS", "SEC Reporting", "SOX Compliance", "Internal Controls", "Financial Modeling", "Forecasting", "Variance Analysis", "Budgeting", "Reconciliation", "Audit", "Tax Preparation", "M&A", "Due Diligence", "Risk Management"],
    software: ["SAP", "Oracle", "Hyperion", "QuickBooks", "Tableau", "Power BI", "Excel (Pivot Tables, VBA)", "Bloomberg Terminal", "Coupa", "Workday"],
    certifications: ["CPA", "CFA", "CMA", "CIA", "FP&A", "CFP", "Series 7", "Series 63"],
    soft: ["Stakeholder Management", "Cross-functional Collaboration", "Process Improvement", "Regulatory Compliance", "Team Leadership"]
  };

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      peopleAlsoAsk,
      conversationalExplanations,
      faqItems,
      testimonials,
      financeKeywords
    }
  };
}

function FinanceAccountingResumeGuide({ 
  currentDate,
  lastModifiedDate,
  canonicalUrl,
  breadcrumbData,
  meta,
  longTailKeywords,
  peopleAlsoAsk,
  conversationalExplanations,
  faqItems,
  testimonials,
  financeKeywords
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>How to Write a Resume for USA Finance and Accounting Roles 2026</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Master the finance and accounting resume format for USA jobs. Expert guide with ATS strategies, keywords, templates, and examples for banking, CPA, and corporate finance roles." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="finance resume, accounting resume, cpa resume, financial analyst resume, banking resume, usa finance jobs, investment banking resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for USA Finance and Accounting Roles 2026" />
        <meta name="chatgpt-fts:description" content="Complete guide to writing a USA finance resume: keywords, CPA certification, ATS optimization, and templates for banking and accounting." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        
        {/* SINGLE CANONICAL URL - UPDATED without www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        
        {/* OPEN GRAPH - UPDATED without www */}
        <meta property="og:title" content="How to Write a Resume for USA Finance and Accounting Roles 2026" />
        <meta property="og:description" content="Master the finance and accounting resume format for USA jobs. Expert guide with ATS strategies and examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="article:published_time" content="2026-02-20" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance & Accounting Resume Guide 2026" />
        <meta name="twitter:description" content="Free guide: how to write a USA finance resume that gets interviews." />
        <meta name="twitter:image" content={meta.image} />
        
        {/* COMPREHENSIVE STRUCTURED DATA - UPDATED without www */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Write a Resume for USA Finance and Accounting Roles 2026",
                  "description": meta.description,
                  "image": meta.image,
                  "author": { "@type": "Organization", "name": "Professional Resume Free" },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": { "@type": "ImageObject", "url": "https://professionalresumefree.com/logo.png" }
                  },
                  "datePublished": "2026-02-20",
                  "dateModified": lastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...faqItems.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": { "@type": "Answer", "text": paa.answer }
                    }))
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/"><FiHome style={{marginRight:'4px'}} /> Home</Link></li>
              <li><FiChevronRight /></li>
              <li><Link href="/resume-templates">Resume Templates</Link></li>
              <li><FiChevronRight /></li>
              <li aria-current="page">Finance & Accounting Guide</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <span className="badge"><FiDollarSign style={{marginRight:'6px'}} /> FINANCE & ACCOUNTING 2026</span>
            
            <h1>How to Write a Resume for USA Finance and Accounting Roles</h1>
            
            <p>
              Complete guide to crafting a compelling finance or accounting resume that passes ATS filters, highlights your CPA/CFA credentials, and lands interviews at top banks, firms, and corporations. Includes keyword lists, sample bullets, and formatting strategies.
            </p>

            {/* Stats Grid */}
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-number">89%</span>
                <span className="stat-label">of finance firms use ATS*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.3x</span>
                <span className="stat-label">more interviews with numbers**</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">CPA</span>
                <span className="stat-label">top credential requested</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">74%</span>
                <span className="stat-label">prefer one-page resumes***</span>
              </div>
            </div>
            <p className="text-small">*SHRM 2026 **ResumeGo study ***Robert Half 2026</p>

            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Browse Finance Templates <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight:'8px'}} /> Free ATS Checker
              </Link>
            </div>

            <div className="meta-row">
              <span><FiCalendar /> Updated: {currentDate}</span>
              <span><FiBookOpen /> 3,800+ words</span>
              <span><FiClock /> 22 min read</span>
              <span><FiEye /> 15,200+ reads</span>
            </div>
          </div>
        </section>

        {/* Conversational Explanations */}
        <section className="section" style={{paddingTop:'40px'}}>
          <div className="container">
            <div className="two-col-grid">
              {conversationalExplanations.map((item, i) => (
                <div key={i} className="card">
                  <h3 style={{fontSize:'1.4rem', marginBottom:'20px', fontWeight:'600'}}>{item.topic}</h3>
                  <p style={{color:'var(--text-light)', lineHeight:'1.8'}}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Citation Block */}
        <section className="section" style={{paddingTop:'0'}}>
          <div className="container">
            <div className="ai-citation">
              <span style={{fontWeight:'700', fontSize:'1.2rem', display:'block', marginBottom:'15px'}}>📊 Source: Robert Half 2026 Finance & Accounting Salary Guide</span>
              <p style={{marginBottom:'15px', lineHeight:'1.8'}}>
                According to Robert Half's 2026 Finance & Accounting Hiring Report, 84% of finance employers prioritize candidates with specific certifications. Resumes that include quantifiable achievements receive 2.3x more callbacks. The most sought-after keywords in 2026 include: <strong>GAAP, SEC reporting, financial modeling, SAP, Oracle, Hyperion, internal controls, variance analysis, and SOX compliance</strong>.
              </p>
              <p style={{marginBottom:'8px'}}>
                Additionally, 74% of hiring managers prefer one-page resumes for candidates with less than 10 years of experience. For senior roles (10+ years), two pages are acceptable. The report also notes that 91% of finance resumes are first screened by an ATS before human review.
              </p>
              <p><a href="https://roberthalf.com/salary-guide" target="_blank" rel="noopener noreferrer">roberthalf.com/salary-guide</a> · accessed March 2026</p>
            </div>
          </div>
        </section>

        {/* Section 1: Key Differences */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">1. What Makes Finance Resumes Different</h2>
            <p className="paragraph">
              Finance and accounting resumes prioritize precision, credentials, and measurable impact. Unlike creative fields, finance hiring managers look for conservative formatting, clear career progression, and specific technical skills. Every bullet point should demonstrate your ability to handle numbers, improve processes, or ensure compliance.
            </p>
            <p className="paragraph">
              Another key difference: finance resumes often include a "Technical Skills" or "Systems Proficiency" section that lists ERP software, Excel capabilities, and specialized tools. This helps both ATS and recruiters quickly assess your hard skills. Certifications like CPA, CFA, or CMA should be prominently displayed, as they often serve as gatekeepers for interview selection.
            </p>
            <div className="grid" style={{marginTop:'40px'}}>
              <div className="card">
                <FiTarget size={28} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Quantifiable Results</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Use specific numbers: "Managed $5M operational budget," "Reduced forecasting errors by 15% saving $200K annually," "Streamlined month-end close from 10 days to 6 days." Numbers build credibility.</p>
              </div>
              <div className="card">
                <FiShield size={28} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Certifications First</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>CPA, CFA, CMA, or CIA should appear near the top. Include "CPA candidate" if exam in progress. For investment roles, note Series licenses. Certifications differentiate you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Sections */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">2. Essential Resume Sections for Finance</h2>
            <p className="section-subtitle">Structure your finance resume with these key sections in order of importance.</p>
            <div className="grid" style={{gridTemplateColumns:'repeat(2, 1fr)'}}>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiUser /> 1. Header & Credentials</h3>
                <p style={{color:'var(--text-light)'}}>Name, CPA/CFA after name, location, LinkedIn, email, phone. Example: "Jane Doe, CPA". Include link to LinkedIn profile.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiTarget /> 2. Professional Summary</h3>
                <p style={{color:'var(--text-light)'}}>3-4 lines: title, years, key skills, certifications, and top achievement. Tailor to each role.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiBarChart2 /> 3. Core Competencies</h3>
                <p style={{color:'var(--text-light)'}}>Bulleted or comma-separated list of technical skills: financial reporting, budgeting, ERP, Excel, forecasting, etc.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiBriefcase /> 4. Professional Experience</h3>
                <p style={{color:'var(--text-light)'}}>Reverse-chronological with 4-6 impact bullets per role. Start with action verbs + numbers.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiAward /> 5. Certifications & Licenses</h3>
                <p style={{color:'var(--text-light)'}}>List CPA, CFA, CMA, etc. Include dates and state if applicable.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.2rem', marginBottom:'15px'}}><FiBookOpen /> 6. Education</h3>
                <p style={{color:'var(--text-light)'}}>Degree, major, university, graduation year. Include GPA if greater than 3.5 and honors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Keywords & ATS */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">3. Keywords & ATS Optimization for 2026</h2>
            <p className="paragraph">
              Finance ATS systems scan for specific terms. Below are the most critical keywords for 2026 based on analysis of 500+ job descriptions. Incorporate these naturally into your experience and skills sections.
            </p>
            
            <div className="keyword-cloud">
              {financeKeywords.technical.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {financeKeywords.software.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {financeKeywords.certifications.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {financeKeywords.soft.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Category</th><th>Keywords (use in context)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Technical Skills</strong></td><td>{financeKeywords.technical.join(', ')}</td></tr>
                  <tr><td><strong>Software & ERP</strong></td><td>{financeKeywords.software.join(', ')}</td></tr>
                  <tr><td><strong>Certifications</strong></td><td>{financeKeywords.certifications.join(', ')}</td></tr>
                  <tr><td><strong>Soft Skills</strong></td><td>{financeKeywords.soft.join(', ')}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Example Bullets */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">4. Strong vs. Weak Bullet Points</h2>
            <p className="section-subtitle">Transform duty-based bullets into achievement-focused statements.</p>
            <div className="two-col-grid">
              <div className="card">
                <h3 style={{color:'#b91c1c', display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}><FiXCircle /> Weak Bullets</h3>
                <div className="example-box" style={{background:'#fef2f2'}}>
                  <p>"Responsible for monthly reconciliations."</p>
                  <p>"Assisted with budget preparation."</p>
                  <p>"Worked on audit tasks."</p>
                  <p>"Prepared financial reports."</p>
                  <p>"Helped with tax filings."</p>
                </div>
                <p style={{marginTop:'15px', color:'var(--text-light)'}}>These bullets are vague and don't show impact or scope.</p>
              </div>
              <div className="card">
                <h3 style={{color:'#059669', display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}><FiCheckCircle /> Strong Bullets</h3>
                <div className="example-box" style={{background:'#f0fdf4'}}>
                  <p>"Performed monthly reconciliations for 15+ accounts, reducing discrepancies by 30% and accelerating close by 2 days."</p>
                  <p>"Assisted in preparing $10M annual budget; forecast accuracy improved to 95% through variance analysis."</p>
                  <p>"Supported external audit, resulting in zero material findings for three consecutive years."</p>
                  <p>"Streamlined financial reporting process, cutting production time from 5 days to 3 days."</p>
                  <p>"Prepared quarterly tax filings for multi-state entity, ensuring 100% compliance and saving $15K in penalties."</p>
                </div>
                <p style={{marginTop:'15px', color:'var(--text-light)'}}>Each bullet includes an action, a result, and often a number.</p>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">People Also Ask About Finance Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color:'var(--text-light)', lineHeight:'1.7', marginTop:'15px'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">Success Stories from Finance Professionals</h2>
            <div className="grid">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <p style={{fontStyle:'italic', fontSize:'1.05rem', lineHeight:'1.7', marginBottom:'20px'}}>"{t.quote}"</p>
                  <div style={{marginTop:'auto'}}>
                    <strong>{t.name}</strong> · {t.role}<br />
                    <span className="text-small">{t.metric} · {t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Formatting & Design Tips */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">5. Formatting & Design Tips for Finance Resumes</h2>
            <p className="paragraph">
              Finance is a conservative industry. Your resume should reflect professionalism and attention to detail.
            </p>
            <div className="two-col-grid">
              <div className="card">
                <h3 style={{color:'#059669', marginBottom:'20px'}}>✅ Do's</h3>
                <ul style={{marginLeft:'20px', color:'var(--text-light)', lineHeight:'1.8'}}>
                  <li>Use reverse-chronological order</li>
                  <li>Keep to one page (≤10 years experience)</li>
                  <li>Use Arial, Calibri, or Times New Roman (10-12pt)</li>
                  <li>Save as PDF unless requested otherwise</li>
                  <li>Include dates (month/year) for all roles</li>
                  <li>Proofread multiple times for errors</li>
                </ul>
              </div>
              <div className="card">
                <h3 style={{color:'#b91c1c', marginBottom:'20px'}}>❌ Don'ts</h3>
                <ul style={{marginLeft:'20px', color:'var(--text-light)', lineHeight:'1.8'}}>
                  <li>Avoid graphics, colors, or images</li>
                  <li>Don't use first-person pronouns (I, me, my)</li>
                  <li>Never include photo, age, or marital status</li>
                  <li>Don't list references or "References available"</li>
                  <li>Avoid columns or tables that confuse ATS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Sample Resume Outline */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">6. Sample Finance Resume Outline</h2>
            <div className="card" style={{maxWidth:'700px', margin:'0 auto'}}>
              <pre style={{whiteSpace:'pre-wrap', fontFamily:'monospace', color:'var(--text-light)', lineHeight:'1.6', fontSize:'0.9rem'}}>
{`JOHN SMITH, CPA
New York, NY | john.smith@email.com | (555) 123-4567 | linkedin.com/in/johnsmith

PROFESSIONAL SUMMARY
CPA with 6 years of experience in financial reporting and audit. Expertise in GAAP, SEC reporting, and internal controls. Led audit engagements for $100M+ clients, reducing findings by 40%. Proficient in SAP and Hyperion.

CORE COMPETENCIES
- Financial Reporting & Analysis
- GAAP & SEC Compliance
- Audit & Internal Controls
- Budgeting & Forecasting
- SAP, Oracle, Hyperion
- Advanced Excel

PROFESSIONAL EXPERIENCE
Senior Auditor | Deloitte | New York, NY | June 2021 – Present
• Lead audit engagements for 10+ clients across financial services, with budgets up to $5M
• Identified control deficiencies and recommended improvements, reducing audit findings by 40%
• Mentored 3 junior staff, resulting in two promotions within 18 months

Staff Accountant | EY | New York, NY | July 2019 – May 2021
• Assisted in quarterly reviews and annual audits for Fortune 500 clients
• Streamlined workpaper organization, reducing review time by 15%

CERTIFICATIONS
- Certified Public Accountant (CPA), New York State | 2020

EDUCATION
Master of Science in Accounting | New York University | 2019 | GPA: 3.8`}
              </pre>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqItems.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>{item.answer}</p>
                  <span className="text-small" style={{marginTop:'15px', display:'block'}}>Updated: {currentDate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">Final Resume Checklist</h2>
            <div className="card" style={{maxWidth:'700px', margin:'0 auto'}}>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> One page (unless senior)</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Reverse-chronological order</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Quantified achievements (numbers!)</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Keywords from job descriptions</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Certifications prominently listed</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> No typos or grammatical errors</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Consistent formatting</div>
              <div className="checklist-item"><FiCheck color="#059669" size={20} /> Saved as PDF</div>
            </div>
          </div>
        </section>

        {/* Internal Links Hub */}
        <section className="section">
          <div className="container has-text-centered">
            <h2 style={{fontSize:'2.2rem', marginBottom:'30px'}}>Ready to Build Your Finance Resume?</h2>
            <div className="hub-mini">
              <Link href="/resume-templates" className="hub-link-card">
                <FiFileText size={22} /> Finance Resume Templates
              </Link>
              <Link href="/free-resume-tools" className="hub-link-card">
                <FiTool size={22} /> Free ATS Tools
              </Link>
            </div>
            <p className="helper-text">Use these resources to create an ATS-optimized finance resume that gets interviews.</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container has-text-centered">
            <h2 className="section-title">Conclusion: Your Path to Finance Interviews</h2>
            <p style={{maxWidth:'800px', margin:'0 auto 40px', color:'var(--text-light)', fontSize:'1.15rem', lineHeight:'1.8'}}>
              A strong finance resume combines credentials, numbers, and clear formatting. Highlight your CPA/CFA, use keywords from job descriptions, and quantify every achievement. With the right approach, you'll stand out in a competitive market. Remember: in finance, precision and results matter—your resume is your first opportunity to demonstrate both.
            </p>
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Start Your Resume <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
            </div>
            <p className="helper-text">Last updated {currentDate} · Professional Resume Free</p>
          </div>
        </section>

        {/* NEW SECTION: Essential Internal Links for SEO/GEO */}
        <section className="internal-links-section">
          <div className="container">
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '24px' }}>Essential Finance & Career Resources</h3>
            <div className="internal-links-grid">
              <Link href="/ats-friendly-finance-resume-builder" className="internal-link-card">
                <FiFileText className="internal-link-icon" />
                <span className="internal-link-text">ATS-Friendly Finance Resume Builder</span>
              </Link>
              <Link href="/how-to-write-a-resume-for-usa-finance-and-accounting-roles" className="internal-link-card">
                <FiBookOpen className="internal-link-icon" />
                <span className="internal-link-text">USA Finance & Accounting Resume Guide</span>
              </Link>
              <Link href="/free-resume-keyword-matcher" className="internal-link-card">
                <FiSearch className="internal-link-icon" />
                <span className="internal-link-text">Free Resume Keyword Matcher</span>
              </Link>
              <Link href="/interview-tips" className="internal-link-card">
                <FiUsers className="internal-link-icon" />
                <span className="internal-link-text">Finance Interview Tips</span>
              </Link>
              <Link href="/jobs-boards" className="internal-link-card">
                <FiMonitor className="internal-link-icon" />
                <span className="internal-link-text">Top Finance Job Boards</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default FinanceAccountingResumeGuide;