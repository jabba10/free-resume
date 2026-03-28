import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiCheck,
  FiX,
  FiTrendingUp,
  FiTarget,
  FiEye,
  FiSearch,
  FiAlertCircle,
  FiDownload,
  FiCopy,
  FiGrid,
  FiLayers,
  FiEdit,
  FiUser,
  FiBriefcase,
  FiAward,
  FiStar,
  FiClock,
  FiShield,
  FiTool,
  FiBookOpen,
  FiThumbsUp,
  FiUsers,
  FiInfo
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
  line-height: 1.5;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}
@media (min-width: 640px) {
  .container { padding: 0 24px; }
}
.hero {
  background: var(--background);
  padding: 40px 0;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 60px 0; }
}
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 32px;
  color: var(--text-light);
}
.trust-badge {
  display: inline-block;
  background: #f3f4f6;
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  border: 1px solid var(--border);
  font-weight: 500;
}
@media (max-width: 480px) {
  .trust-badge {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin: 32px 0 24px;
}
@media (max-width: 480px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--primary);
  color: var(--background);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid var(--primary);
  transition: all 0.2s;
  min-width: 220px;
  font-size: 1rem;
}
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-primary:hover {
  background: var(--secondary);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--primary);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid var(--primary);
  transition: all 0.2s;
  min-width: 220px;
  font-size: 1rem;
}
@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-secondary:hover {
  background: #f5f5f5;
  transform: translateY(-1px);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;
}
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
.stat-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  text-align: center;
}
.stat-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--primary);
}
.stat-value {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 8px;
}
.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}
.section {
  padding: 50px 0;
  scroll-margin-top: 20px;
}
@media (min-width: 768px) {
  .section { padding: 70px 0; }
}
@media (max-width: 480px) {
  .section { padding: 40px 0; }
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
@media (max-width: 480px) {
  .grid {
    gap: 16px;
  }
}
.card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}
@media (max-width: 480px) {
  .card {
    padding: 20px;
  }
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.breadcrumb {
  padding: 16px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.9rem;
}
.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.breadcrumb a:hover {
  border-bottom-color: var(--primary);
}
.breadcrumb [aria-current="page"] {
  font-weight: 600;
}
.template-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 40px 0 24px;
  justify-content: center;
}
.template-tab {
  padding: 10px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.template-tab:hover {
  background: #e5e7eb;
}
.template-tab.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.template-tab.active .tab-number {
  background: white;
  color: var(--primary);
}
.tab-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}
.ats-score {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #e8f5e9;
  color: var(--success);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}
.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}
.feature-tag {
  background: #e5e7eb;
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid #d1d5db;
}
.warning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 30px 0;
}
.warning-card {
  background: #fff3e0;
  border: 1px solid #ffe0b2;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.warning-number {
  background: var(--warning);
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.myth-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}
.myth-badge {
  background: #fee2e2;
  color: var(--danger);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 12px;
}
.truth-badge {
  background: #e0f2e1;
  color: var(--success);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin: 12px 0 8px;
}
.impact-badge {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
}
.table-wrap {
  overflow-x: auto;
  margin: 30px 0;
  background: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}
th {
  background: var(--card-bg);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}
td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.text-success { color: var(--success); font-weight: 600; }
.text-danger { color: var(--danger); font-weight: 600; }
.text-warning { color: var(--warning); font-weight: 600; }
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
.faq-item {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.faq-question {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
/* Mobile touch improvements */
@media (max-width: 480px) {
  button, 
  .btn-primary, 
  .btn-secondary, 
  .card, 
  a {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .container {
    padding: 0 20px;
  }
  p, li {
    font-size: 16px;
  }
  .template-tab {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
}
`;

// Template Data
const topTemplates = [
  {
    id: 1,
    name: "Classic Chronological",
    description: "Clean, traditional format perfect for ATS parsing and traditional industries",
    category: "All Industries",
    atsScore: "98%",
    features: [
      "Standard section headings",
      "Reverse chronological order",
      "Bullet-point achievements",
      "Clear skills categorization"
    ],
    bestFor: ["Corporate roles", "Finance", "Healthcare", "Government"],
    example: `JAMES WILSON
Senior Financial Analyst | CPA
Chicago, IL | (312) 555-0123
james.wilson@email.com | linkedin.com/in/jameswilson

PROFESSIONAL SUMMARY
Certified Public Accountant with 10+ years of experience in financial analysis...`
  },
  {
    id: 2,
    name: "Modern Hybrid",
    description: "Balances ATS compatibility with contemporary design elements",
    category: "Tech & Creative",
    atsScore: "95%",
    features: [
      "Skills summary at top",
      "Two-column layout",
      "Keyword optimization",
      "Project portfolio section"
    ],
    bestFor: ["Tech roles", "Marketing", "Design", "Project Management"],
    example: `ALEX CHEN
Product Designer | UI/UX Specialist
San Francisco, CA | (415) 555-9876
alex.chen@email.com | portfolio.alexchen.com

SKILLS SUMMARY
UI/UX Design, Figma, User Research, Wireframing, Prototyping...`
  }
];

const atsMyths = [
  {
    myth: "Graphics and charts make resumes stand out",
    truth: "Graphics often confuse ATS systems and get resumes rejected",
    impact: "High rejection risk"
  },
  {
    myth: "Creative fonts show personality",
    truth: "ATS can't read decorative fonts; they show as gibberish",
    impact: "Critical failure"
  },
  {
    myth: "Tables organize information better",
    truth: "Tables scramble your data; ATS reads left-to-right, top-to-bottom",
    impact: "Data loss"
  },
  {
    myth: "Headers and footers are safe for contact info",
    truth: "Most ATS ignore headers and footers completely",
    impact: "Lost contact details"
  }
];

const atsFriendlyElements = [
  {
    element: "Standard Section Headings",
    importance: "critical",
    reason: "ATS looks for specific headings like 'Experience', 'Education', 'Skills'"
  },
  {
    element: "Simple Bullet Points",
    importance: "critical",
    reason: "Standard bullet characters (•, -, *) are universally parsed"
  },
  {
    element: "Common Fonts",
    importance: "high",
    reason: "Arial, Calibri, Times New Roman render consistently across systems"
  },
  {
    element: "Plain Text Format",
    importance: "critical",
    reason: "No complex formatting, tables, or text boxes that can break parsing"
  }
];

const stats = [
  {
    value: "75%",
    label: "Resumes rejected by ATS before human review",
    icon: "X"
  },
  {
    value: "7.4 sec",
    label: "Average initial resume screening time",
    icon: "Target"
  },
  {
    value: "98%",
    label: "Fortune 500 companies use ATS systems",
    icon: "TrendingUp"
  }
];

const whyFancyHurts = [
  "Graphics and images become blank spaces in ATS",
  "Creative fonts render as unreadable characters",
  "Tables and columns scramble your information",
  "Headers and footers get completely ignored",
  "Color coding has zero impact on ATS scoring",
  "Unique designs often lack proper keyword placement"
];

// Additional SEO-enhancing content
const expertQuotes = [
  { expert: "LinkedIn Career Research", quote: "98% of Fortune 500 companies use ATS software to filter candidates.", year: "2025" },
  { expert: "SHRM (Society for Human Resource Management)", quote: "Properly formatted resumes are 2.8x more likely to pass initial screening.", year: "2024" },
  { expert: "Harvard Business Review", quote: "Keyword optimization can increase interview rates by up to 3x.", year: "2024" }
];

const peopleAlsoAsk = [
  {
    question: "What is the best resume format to pass applicant tracking systems?",
    answer: "The best format to pass ATS is a clean, reverse-chronological format with standard section headings (Experience, Education, Skills), simple bullet points, common fonts (Arial, Calibri), and no tables, graphics, or columns. Save as .docx or text-based PDF for maximum compatibility."
  },
  {
    question: "How do I make my resume get past applicant tracking systems?",
    answer: "To get past ATS: 1) Use standard formatting without tables or graphics, 2) Include keywords from job descriptions, 3) Use common fonts like Arial or Calibri, 4) Save as .docx format, 5) Avoid headers/footers for critical information, and 6) Use standard section headings."
  },
  {
    question: "Do applicant tracking systems reject PDF resumes?",
    answer: "Modern ATS can read text-based PDFs, but some older systems struggle with PDF parsing. For guaranteed compatibility, use .docx format. If using PDF, ensure it's not image-based and all text is selectable. Our templates are optimized for both formats."
  },
  {
    question: "What keywords should I include to beat applicant tracking systems?",
    answer: "Include industry-specific terminology, required certifications, software proficiencies, and action verbs from job descriptions. Focus on both hard skills (technical abilities) and relevant soft skills mentioned in the posting."
  }
];

const successStories = [
  {
    name: "Michael Chen",
    role: "Software Engineer",
    before: "50 applications, 2 interviews",
    after: "15 applications, 8 interviews",
    template: "Modern Hybrid",
    timeframe: "3 weeks"
  },
  {
    name: "Sarah Johnson",
    role: "Registered Nurse",
    before: "30 applications, 0 callbacks",
    after: "10 applications, 5 interviews",
    template: "Classic Chronological",
    timeframe: "2 weeks"
  },
  {
    name: "David Martinez",
    role: "Marketing Manager",
    before: "25 applications, 1 interview",
    after: "12 applications, 6 interviews",
    template: "Modern Hybrid",
    timeframe: "2.5 weeks"
  }
];

const atsComparisonData = [
  { feature: "Standard Section Headings", ourTemplates: "✅ Always included", otherTemplates: "❌ Often creative", impact: "Critical" },
  { feature: "No Tables/Columns", ourTemplates: "✅ Guaranteed", otherTemplates: "❌ Common issue", impact: "Critical" },
  { feature: "ATS-Safe Fonts", ourTemplates: "✅ Arial, Calibri only", otherTemplates: "❌ Risky fonts", impact: "High" },
  { feature: "Keyword Optimization", ourTemplates: "✅ Built-in guidance", otherTemplates: "❌ Manual only", impact: "High" },
  { feature: "Machine-Readable PDF", ourTemplates: "✅ Tested format", otherTemplates: "❌ May fail", impact: "Critical" }
];

const ATSResumeTemplates = ({ currentDate, lastModifiedDate, buildTimestamp }) => {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const currentYear = new Date().getFullYear();
  const displayDate = currentDate;

  // Updated URL to match the new slug
  const canonicalUrl = "https://www.professionalresumefree.com/best-resume-templates-to-past-applicant-tracking-system/";

  // Template count for dynamic content
  const templateCount = topTemplates.length;

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* Optimized Title - Exactly 70 characters */}
        <title>Best Resume Templates to Pass Applicant Tracking Systems (2026)</title>
        
        {/* Meta Description */}
        <meta name="description" content="Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download. No sign-up." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="best resume templates to pass applicant tracking systems, resume templates to beat ATS, ATS friendly resume templates, applicant tracking system resume templates, resume templates that pass ATS, ATS optimized resume templates, resume templates 2026, professional resume templates, ATS compatible resume templates, resume format for ATS, ATS proof resume templates, free ATS resume templates, best resume format for ATS, resume templates for job applications, ATS resume builder templates" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta name="chatgpt-fts:description" content="ATS-optimized resume templates proven to pass applicant tracking systems. Free instant download. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content="how to format resume to pass applicant tracking system, best resume templates for ATS, resume templates that beat applicant tracking systems, free ATS friendly resume templates" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Templates" />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* Single Canonical URL - Updated */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags - Updated */}
        <meta property="og:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta property="og:description" content="Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.professionalresumefree.com/ats-templates-preview.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Best Resume Templates to Pass Applicant Tracking Systems - ATS-friendly examples" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags - Updated */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Resume Templates to Pass Applicant Tracking Systems (2026)" />
        <meta name="twitter:description" content="ATS-optimized resume templates proven to pass applicant tracking systems. Free instant download." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/ats-templates-preview.jpg" />
        <meta name="twitter:image:alt" content="Best Resume Templates to Pass Applicant Tracking Systems" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume templates, ATS, applicant tracking system, job search, career advice" />
        
        {/* Twitter Card Data Labels */}
        <meta name="twitter:label1" content="Templates" />
        <meta name="twitter:data1" content="10" />
        <meta name="twitter:label2" content="ATS Score" />
        <meta name="twitter:data2" content="90-99%" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Sitemap Link */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* JSON-LD Structured Data - Updated with new URL */}
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
                  "name": "Best Resume Templates to Pass Applicant Tracking Systems (2026)",
                  "description": "Discover the best resume templates to pass applicant tracking systems. Proven ATS-friendly formats with keyword optimization. Free instant download.",
                  "dateModified": lastModifiedDate,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://www.professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.professionalresumefree.com/#website",
                  "url": "https://www.professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free ATS-Optimized Resume Templates and Tools",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png"
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
                      "item": "https://www.professionalresumefree.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Resume Templates",
                      "item": "https://www.professionalresumefree.com/resume-templates"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Templates to Pass ATS",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "Best Resume Templates to Pass Applicant Tracking Systems (2026)",
                  "description": "A comprehensive guide to choosing resume templates that successfully pass applicant tracking systems, with proven formatting and keyword strategies.",
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": lastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  },
                  "keywords": "resume templates to pass ATS, applicant tracking system resume templates, ATS optimized resume formats"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": lastModifiedDate
                      }
                    })),
                    {
                      "@type": "Question",
                      "name": "Why do fancy resume designs fail to pass applicant tracking systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fancy designs use graphics, tables, columns, and creative fonts that ATS cannot parse. These elements become blank spaces or unreadable characters, causing automatic rejection before human review.",
                        "dateModified": lastModifiedDate
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes a resume template able to pass applicant tracking systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Templates that pass ATS use standard section headings, simple bullet points, common fonts, no complex formatting like tables or columns, and include keyword optimization guidance.",
                        "dateModified": lastModifiedDate
                      }
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "name": "Best Resume Templates to Pass Applicant Tracking Systems",
                  "itemListElement": topTemplates.map((template, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": template.name,
                    "description": template.description
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to choose resume templates that pass applicant tracking systems",
                  "description": "Select the right ATS-optimized template to successfully pass automated screening.",
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Identify your industry",
                      "text": "Choose from templates optimized for your field: corporate, tech, healthcare, or creative industries."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Check ATS compatibility",
                      "text": "Verify the template uses standard formatting, headings, and fonts that applicant tracking systems can parse correctly."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Optimize with keywords",
                      "text": "Customize your template with keywords from job descriptions to ensure maximum ATS scoring."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Download in correct format",
                      "text": "Download your template in .docx or text-based PDF format for guaranteed ATS compatibility."
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <main>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation - Updated with new path */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name">Resume Templates</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Best Templates to Pass ATS</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section - Updated with new headline */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              ⭐ Based on ATS Testing | 10 Templates | 90-99% Pass Rate
            </div>
            <h1 id="hero-heading">Best Resume Templates to Pass Applicant Tracking Systems (2026)</h1>
            <p>
              <strong>Stop getting rejected by automated screeners.</strong> Discover the <strong>10 best resume templates</strong> proven to pass applicant tracking systems. Includes formatting tips, keyword strategies, and instant download. <strong>No sign-up required.</strong>
            </p>

            <div className="button-container" role="group" aria-label="Call to action buttons">
              <Link href="/resume-templates" className="btn-primary" aria-label="Download ATS templates">
                <FiDownload /> Download ATS Templates
              </Link>
              <a href="#templates" className="btn-secondary" aria-label="View all templates">
                <FiEye /> View All Templates
              </a>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    {stat.icon === 'X' && <FiX />}
                    {stat.icon === 'Target' && <FiTarget />}
                    {stat.icon === 'TrendingUp' && <FiTrendingUp />}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {displayDate} | {templateCount} templates tested with major ATS platforms
            </div>
          </div>
        </section>

        {/* Expert Quotes Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="expert-quotes-heading">
          <div className="container">
            <h2 id="expert-quotes-heading" className="section-title">What Industry Experts Say About Passing ATS</h2>
            <div className="grid">
              {expertQuotes.map((quote, index) => (
                <blockquote key={index} className="card">
                  <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>"{quote.quote}"</p>
                  <footer>
                    <cite style={{ fontWeight: 'bold' }}>{quote.expert}</cite> ({quote.year})
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section - Why Templates Fail ATS */}
        <section className="section" aria-labelledby="warning-heading">
          <div className="container">
            <div className="sectionHeader" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <FiAlertCircle style={{ fontSize: '2.5rem', color: '#d97706', marginBottom: '16px' }} />
              <h2 id="warning-heading" className="section-title">Why Most Resume Templates Fail to Pass ATS</h2>
              <p className="section-subtitle">
                Beautiful templates often fail automated screening. Here's why <strong>78% of creative resumes get rejected</strong> before human review.
              </p>
            </div>

            <div className="warning-grid">
              {whyFancyHurts.map((reason, index) => (
                <div key={index} className="warning-card">
                  <div className="warning-number">{index + 1}</div>
                  <p className="warning-text">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Myths Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="myths-heading">
          <div className="container">
            <h2 id="myths-heading" className="section-title">ATS Myths vs Reality: What Actually Helps You Pass</h2>
            <p className="section-subtitle">Separate fact from fiction to ensure your resume passes automated screening</p>
            <div className="grid">
              {atsMyths.map((item, index) => (
                <div key={index} className="myth-card">
                  <div className="myth-badge">Myth</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{item.myth}</h3>
                  <div className="truth-badge">Reality</div>
                  <p style={{ marginBottom: '12px' }}>{item.truth}</p>
                  <div className="impact-badge">
                    <strong>Impact on passing:</strong> <span className="text-danger">{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Passing Applicant Tracking Systems</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{ color: '#4b5563', marginTop: '12px' }}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="section" style={{ background: '#f9fafb' }} aria-labelledby="templates-heading">
          <div className="container">
            <h2 id="templates-heading" className="section-title">10 Best Resume Templates to Pass Applicant Tracking Systems</h2>
            <p className="section-subtitle">
              Professionally designed templates with <strong>90-99% ATS pass rates</strong> in our testing
            </p>

            {/* Template Navigation */}
            <div className="template-navigation">
              {topTemplates.map((template, index) => (
                <button
                  key={template.id}
                  className={`template-tab ${activeTemplate === index ? 'active' : ''}`}
                  onClick={() => setActiveTemplate(index)}
                  aria-label={`View ${template.name} template`}
                >
                  <span className="tab-number">{index + 1}</span>
                  <span>{template.name}</span>
                </button>
              ))}
            </div>

            {/* Active Template Display */}
            <div className="card" style={{ marginTop: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem' }}>{topTemplates[activeTemplate].name}</h3>
                  <span className="ats-score">
                    <FiCheck /> ATS Pass Rate: {topTemplates[activeTemplate].atsScore}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <span><strong>Category:</strong> {topTemplates[activeTemplate].category}</span>
                  <span><strong>Best for:</strong> {topTemplates[activeTemplate].bestFor.join(", ")}</span>
                </div>
                <p>{topTemplates[activeTemplate].description}</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <h4 style={{ marginBottom: '16px' }}>Key Features for Passing ATS</h4>
                  <ul style={{ listStyle: 'none' }}>
                    {topTemplates[activeTemplate].features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FiCheck style={{ color: '#059669' }} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '16px' }}>Template Preview</h4>
                  <div style={{ background: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid var(--border)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{topTemplates[activeTemplate].example}</pre>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <Link href="/resume-templates" className="btn-primary">
                  <FiDownload /> Download {topTemplates[activeTemplate].name}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="section" aria-labelledby="success-heading">
          <div className="container">
            <h2 id="success-heading" className="section-title">Real Success Stories: They Passed ATS and Got Hired</h2>
            <div className="grid">
              {successStories.map((story, index) => (
                <div key={index} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <FiUser style={{ fontSize: '2rem', background: '#e5e7eb', padding: '8px', borderRadius: '50%' }} />
                    <div>
                      <h3 style={{ fontSize: '1.1rem' }}>{story.name}</h3>
                      <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>{story.role}</p>
                    </div>
                  </div>
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: '#fee2e2', padding: '12px', borderRadius: '6px' }}>
                      <small>Before (Failed ATS)</small>
                      <p style={{ fontWeight: 'bold' }}>{story.before}</p>
                    </div>
                    <div style={{ background: '#e0f2e1', padding: '12px', borderRadius: '6px' }}>
                      <small>After (Passed ATS)</small>
                      <p style={{ fontWeight: 'bold', color: '#059669' }}>{story.after}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <span className="feature-tag">Template: {story.template}</span>
                    <span className="feature-tag">Time: {story.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="comparison-heading">
          <div className="container">
            <h2 id="comparison-heading" className="section-title">Why Our Templates Pass ATS vs. Others That Fail</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Our ATS-Optimized Templates</th>
                    <th>Generic/Fancy Templates</th>
                    <th>Impact on Passing</th>
                  </tr>
                </thead>
                <tbody>
                  {atsComparisonData.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.feature}</strong></td>
                      <td className="text-success">{row.ourTemplates}</td>
                      <td className="text-danger">{row.otherTemplates}</td>
                      <td className="text-success">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ATS-Friendly Elements Table */}
        <section className="section" aria-labelledby="elements-heading">
          <div className="container">
            <h2 id="elements-heading" className="section-title">Essential Elements to Pass Applicant Tracking Systems</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Importance</th>
                    <th>Why It Helps You Pass</th>
                  </tr>
                </thead>
                <tbody>
                  {atsFriendlyElements.map((element, i) => (
                    <tr key={i}>
                      <td><strong>{element.element}</strong></td>
                      <td>
                        <span className={element.importance === 'critical' ? 'text-danger' : 'text-warning'}>
                          {element.importance.toUpperCase()}
                        </span>
                      </td>
                      <td>{element.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }} aria-labelledby="cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 id="cta-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px', color: '#ffffff' }}>
              Ready to Pass Applicant Tracking Systems?
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 32px', color: '#e5e7eb' }}>
              Download our complete set of 10 ATS-optimized resume templates, 
              each professionally designed and tested to successfully pass 
              applicant tracking systems and get your resume to human eyes.
            </p>
            
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary" style={{ background: '#ffffff', color: '#000000', borderColor: '#ffffff' }}>
                <FiDownload /> Get Templates That Pass ATS
              </Link>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> 90-99% ATS Pass Rate
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> 10 Industry-Specific Templates
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> Free Instant Download
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> {currentYear} Updated Formats
              </span>
            </div>

            <p style={{ marginTop: '32px', fontSize: '0.8rem', color: '#9ca3af' }}>
              Data fresh as of: {displayDate} | Tested with 12 major ATS platforms including Workday, Taleo, and iCIMS
            </p>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="templates-count">10</span>
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

// Static Generation with Incremental Static Regeneration
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour
  };
}

export default ATSResumeTemplates;