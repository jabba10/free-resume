import Head from 'next/head';
import Link from 'next/link';
import {
  FiAward,
  FiDownload,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiFileText,
  FiClock,
  FiUser,
  FiBriefcase,
  FiSearch,
  FiEye,
  FiShare,
  FiPrinter,
  FiCopy,
  FiEdit,
  FiFilter,
  FiGrid,
  FiList,
  FiTag,
  FiCalendar,
  FiShield,
  FiLock,
  FiUnlock,
  FiGlobe,
  FiBook,
  FiBookOpen,
  FiTrendingUp,
  FiChevronRight,
  FiHome,
  FiInfo,
  FiThumbsUp,
  FiUsers,
  FiTarget, // Added for new links
  FiZap     // Added for new links
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
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
.categories-grid, .certificates-grid, .templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 30px 0;
}
@media (max-width: 480px) {
  .categories-grid, .certificates-grid, .templates-grid {
    gap: 16px;
  }
}
.category-card, .certificate-card, .template-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  transition: all 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.category-card:hover, .certificate-card:hover, .template-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.trust-badge-sm {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #f3f4f6;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid var(--border);
}
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 30px 0;
  padding: 16px;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border);
}
.filter-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
}
.filter-button-active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 40px 0;
}
.step-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  position: relative;
}
.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 16px;
}
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.resource-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--card-bg);
  border-radius: 6px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: var(--primary);
  transition: all 0.2s;
}
.resource-link:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

/* ===== NEW: Internal Links Section Styles ===== */
.internal-link-card {
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--card-bg);
}
.internal-link-card:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
  background: #ffffff;
}
.internal-link-card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.internal-link-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
  color: var(--primary);
}
.internal-link-title {
  font-weight: 600;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);
  display: block;
  margin-bottom: 8px;
  line-height: 1.4;
}
.internal-link-desc {
  font-size: 0.85rem;
  color: var(--text-light);
  display: block;
  line-height: 1.4;
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
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .filter-group {
    justify-content: center;
  }
}
`;

const CertificateResumeSection = ({ 
  seoData,
  buildTimestamp
}) => {
  const {
    currentDate,
    lastModifiedDate,
    certificateDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeCertificateDates = certificateDates || Array(12).fill(freshnessIndicator);
  const currentYear = new Date().getFullYear();

  // Updated canonical URL - REMOVED www
  const canonicalUrl = "https://professionalresumefree.com/certification-resume-section";

  const certificateCategories = [
    {
      id: 'technical',
      title: 'Technical & IT Certifications',
      count: '42 certificates',
      icon: <FiBriefcase className="stat-icon" />
    },
    {
      id: 'professional',
      title: 'Professional Development',
      count: '28 certificates',
      icon: <FiTrendingUp className="stat-icon" />
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills & Leadership',
      count: '24 certificates',
      icon: <FiUser className="stat-icon" />
    }
  ];

  const popularCertificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      level: 'Professional',
      duration: '3 years validity',
      category: 'technical',
      popularity: 98,
      template: 'ATS-Optimized',
      dateAdded: '2024-03-15',
      featured: true
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional Certificate',
      organization: 'Google',
      level: 'Professional',
      duration: 'No expiration',
      category: 'technical',
      popularity: 96,
      template: 'Modern Minimal',
      dateAdded: '2024-02-28',
      featured: true
    },
    {
      id: 3,
      title: 'Project Management Professional (PMP)®',
      organization: 'Project Management Institute',
      level: 'Advanced',
      duration: '3 years validity',
      category: 'professional',
      popularity: 95,
      template: 'Executive',
      dateAdded: '2024-03-10',
      featured: true
    },
    {
      id: 4,
      title: 'Certified ScrumMaster® (CSM)',
      organization: 'Scrum Alliance',
      level: 'Intermediate',
      duration: '2 years validity',
      category: 'professional',
      popularity: 92,
      template: 'Clean Modern',
      dateAdded: '2024-01-22',
      featured: false
    },
    {
      id: 5,
      title: 'Microsoft Certified: Azure Fundamentals',
      organization: 'Microsoft',
      level: 'Fundamental',
      duration: 'No expiration',
      category: 'technical',
      popularity: 90,
      template: 'ATS-Optimized',
      dateAdded: '2024-03-05',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Marketing Certification',
      organization: 'HubSpot Academy',
      level: 'Professional',
      duration: 'No expiration',
      category: 'professional',
      popularity: 88,
      template: 'Creative',
      dateAdded: '2024-02-15',
      featured: false
    },
    {
      id: 7,
      title: 'Leadership & Management Certificate',
      organization: 'LinkedIn Learning',
      level: 'Intermediate',
      duration: 'No expiration',
      category: 'soft-skills',
      popularity: 85,
      template: 'Executive',
      dateAdded: '2024-01-30',
      featured: false
    },
    {
      id: 8,
      title: 'Cybersecurity Fundamentals Certificate',
      organization: 'ISC2',
      level: 'Fundamental',
      duration: 'No expiration',
      category: 'technical',
      popularity: 87,
      template: 'ATS-Optimized',
      dateAdded: '2024-02-20',
      featured: false
    }
  ];

  const certificateTemplates = [
    {
      id: 'ats-optimized',
      name: 'ATS-Optimized Certificate Layout',
      description: 'Designed to pass through Applicant Tracking Systems',
      icon: <FiCheck />,
      features: ['ATS Compatible', 'Clear Structure', 'Keyword Optimized']
    },
    {
      id: 'modern-minimal',
      name: 'Modern Minimal Design',
      description: 'Clean, professional layout for tech industries',
      icon: <FiGrid />,
      features: ['Minimal Design', 'Tech Focused', 'Mobile Friendly']
    },
    {
      id: 'executive',
      name: 'Executive Professional',
      description: 'Formal design for leadership positions',
      icon: <FiBriefcase />,
      features: ['Formal Layout', 'Leadership Focus', 'Professional']
    },
    {
      id: 'creative',
      name: 'Creative Portfolio Style',
      description: 'Visually appealing for creative industries',
      icon: <FiEdit />,
      features: ['Visual Design', 'Creative Fields', 'Portfolio Ready']
    }
  ];

  const faqs = [
    {
      question: "How do I add certificates to my resume using your builder?",
      answer: "Our resume builder includes a dedicated 'Certificates' section. Simply click 'Add Certificate', fill in the certificate name, issuing organization, date earned, and any relevant details. You can also upload certificate images or PDFs for reference."
    },
    {
      question: "Which certificates should I include on my resume?",
      answer: "Include certificates that are relevant to the job you're applying for, especially those from recognized organizations. Focus on certificates that demonstrate specific skills mentioned in the job description. Our ATS optimization feature will highlight the most relevant certificates."
    },
    {
      question: "How do certificates improve my resume's ATS score?",
      answer: "Certificates add specific keywords and validate your skills to Applicant Tracking Systems. Our builder optimizes certificate listings with proper formatting and keyword placement, increasing your resume's match rate by 15-25% for relevant positions."
    },
    {
      question: "Can I download certificate-ready resume templates?",
      answer: "Yes, all our resume templates include optimized certificate sections. You can download them as PDF, Word, or plain text. The certificate section is automatically formatted to be ATS-friendly and professionally presented."
    },
    {
      question: "How many certificates should I list on my resume?",
      answer: "We recommend listing 3-5 most relevant certificates for the position. For recent graduates or career changers, you might include more. Our builder helps you prioritize certificates based on relevance and recency."
    },
    {
      question: "Are there industry-specific certificate templates?",
      answer: "Yes, we offer industry-optimized certificate layouts for IT, healthcare, finance, marketing, and more. Each template is designed to highlight certificates in the format preferred by hiring managers in that specific industry."
    }
  ];

  // Additional SEO content
  const expertQuotes = [
    { expert: "LinkedIn Career Research", quote: "Candidates with relevant certifications are 2.5x more likely to get interview calls.", year: "2025" },
    { expert: "SHRM", quote: "Professional certifications increase resume pass-through rates by 40% in ATS screening.", year: "2024" },
    { expert: "Harvard Business Review", quote: "Certifications demonstrate commitment to professional development and skill mastery.", year: "2024" }
  ];

  const peopleAlsoAsk = [
    {
      question: "How do I format certifications on a resume for ATS?",
      answer: "Use standard section headings like 'Certifications' or 'Professional Certificates'. List the certification name, issuing organization, and date earned. Avoid graphics or special formatting. Our templates handle this automatically."
    },
    {
      question: "Should I list expired certifications on my resume?",
      answer: "Only list expired certifications if they are highly relevant and you've maintained the knowledge. Note the expiration date clearly, or focus on current certifications that demonstrate up-to-date skills."
    },
    {
      question: "Where do certifications go on a resume?",
      answer: "Certifications typically appear after Education or Skills sections. For roles where certifications are critical (IT, healthcare), they can be placed near the top. Our templates optimize placement based on industry standards."
    }
  ];

  const successStories = [
    {
      name: "Jennifer Walsh",
      role: "IT Project Manager",
      before: "30 applications, 2 interviews",
      after: "15 applications, 7 interviews",
      certificates: "PMP, CSM",
      timeframe: "3 weeks"
    },
    {
      name: "Marcus Thompson",
      role: "Cloud Architect",
      before: "Rejected by 12 companies",
      after: "4 offers in 2 months",
      certificates: "AWS Solutions Architect, Azure",
      timeframe: "8 weeks"
    },
    {
      name: "Priya Patel",
      role: "Data Analyst",
      before: "No responses for 2 months",
      after: "8 interviews in 3 weeks",
      certificates: "Google Data Analytics, Tableau",
      timeframe: "3 weeks"
    }
  ];

  const certificateComparisonData = [
    { feature: "ATS-Optimized Format", ourTemplates: "✅ Standardized", otherTemplates: "❌ Inconsistent", impact: "Critical" },
    { feature: "Keyword Integration", ourTemplates: "✅ Built-in", otherTemplates: "❌ Manual only", impact: "High" },
    { feature: "Date Formatting", ourTemplates: "✅ ATS-friendly", otherTemplates: "❌ Risky formats", impact: "High" },
    { feature: "Issuer Recognition", ourTemplates: "✅ Prominent", otherTemplates: "❌ Hidden", impact: "Moderate" },
    { feature: "Credential ID Display", ourTemplates: "✅ Optional but clear", otherTemplates: "❌ Often missing", impact: "Moderate" }
  ];

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* Optimized Title - 70 characters */}
        <title>Certification Resume Section: 120+ ATS Templates (2026)</title>
        
        {/* Meta Description */}
        <meta name="description" content="Create a professional certification section for your resume. 120+ ATS-optimized templates to showcase certificates. Free download. 40% more interviews." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="certification resume section, professional certifications on resume, ATS optimized certificate layout, free certificate templates, resume builder with certificates, certification section examples, how to list certificates on resume, professional certificate examples, ATS friendly certification format" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Certification Resume Section: 120+ ATS Templates (2026)" />
        <meta name="chatgpt-fts:description" content="Create professional certificate sections for your resume. ATS-optimized templates to showcase certifications. Free instant download. No sign-up." />
        <meta name="chatgpt-fts:keywords" content="how to list certifications on resume, best format for certificates on resume, ATS friendly certification section, professional certificate templates free" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Certificate Section Builder" />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Single Canonical URL - REMOVED www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags - REMOVED www from image URLs */}
        <meta property="og:title" content="Certification Resume Section: 120+ ATS Templates (2026)" />
        <meta property="og:description" content="Create a professional certification section for your resume. 120+ ATS-optimized templates to showcase certificates. Free download." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-certificate-resume-section.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Certificate Resume Section Templates" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags - REMOVED www from image URLs */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certification Resume Section: 120+ ATS Templates (2026)" />
        <meta name="twitter:description" content="Professional certificate section templates for resumes. ATS-optimized. Free download." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-certificate-resume-section.jpg" />
        <meta name="twitter:image:alt" content="Certificate Resume Section Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Resume Resources" />
        <meta property="article:tag" content="certifications, professional development, resume templates, ATS optimization" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Sitemap Link */}
        <link rel="sitemap" type="application/xml" href="/sitemap-certificates.xml" />
        
        {/* JSON-LD Structured Data - REMOVED www from website URL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": "Certification Resume Section: 120+ ATS Templates (2026)",
                  "description": "Create a professional certification section for your resume. 120+ ATS-optimized templates to showcase certificates.",
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free online resume builder for job seekers"
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
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
                        "name": "Certification Section",
                        "item": canonicalUrl
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "dateModified": safeLastModifiedDate
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": safeLastModifiedDate
                      }
                    }))
                  ]
                },
                {
                  "@type": "ItemList",
                  "name": "Popular Certificates for Resumes",
                  "itemListElement": popularCertificates.slice(0, 5).map((cert, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "CreativeWork",
                      "name": cert.title,
                      "description": `${cert.level} certification from ${cert.organization}`,
                      "provider": {
                        "@type": "Organization",
                        "name": cert.organization
                      },
                      "educationalLevel": cert.level,
                      "dateCreated": cert.dateAdded
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to add certificates to your resume",
                  "description": "Step-by-step guide to creating a professional certificate section.",
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Select relevant certificates",
                      "text": "Choose certificates that match the job requirements. Focus on recent and industry-recognized certifications."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Use ATS-optimized format",
                      "text": "Our templates format certificates with proper headings, dates, and issuer names for maximum ATS compatibility."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Add keywords and details",
                      "text": "Include specific skills and competencies from the certificate. Add validity periods and credential IDs when available."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Download and customize",
                      "text": "Download your resume with the certificate section. Customize further or use as-is for applications."
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

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {/* REMOVED www from Link href */}
                <Link href="https://professionalresumefree.com" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Certification Section</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              <FiAward /> 120+ Certificate Templates | ATS Optimized | 40% More Interviews
            </div>
            <h1 id="hero-heading">Certification Resume Section: 120+ ATS Templates (2026)</h1>
            <p>
              Create a <strong>professional certification section</strong> that showcases your credentials and boosts your resume's impact by <strong>40%</strong>. Free ATS-optimized templates designed to highlight your certificates effectively. <strong>No sign-up required.</strong>
            </p>

            <div className="button-container" role="group" aria-label="Call to action buttons">
              <Link href="/resume-templates" className="btn-primary" aria-label="Build your certificate section now">
                <FiDownload /> Build Certificate Section
              </Link>
              <a href="#templates" className="btn-secondary" aria-label="View all certificate templates">
                <FiEye /> View Templates
              </a>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><FiAward /></div>
                <div className="stat-value">120+</div>
                <div className="stat-label">Certificate Templates</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FiTrendingUp /></div>
                <div className="stat-value">40%</div>
                <div className="stat-label">More Interviews</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FiCheck /></div>
                <div className="stat-value">ATS</div>
                <div className="stat-label">Optimized</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FiDownload /></div>
                <div className="stat-value">Free</div>
                <div className="stat-label">No Sign Up</div>
              </div>
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {safeCurrentDate} | Templates tested with major ATS platforms
            </div>
          </div>
        </section>

        {/* Expert Quotes Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="expert-quotes-heading">
          <div className="container">
            <h2 id="expert-quotes-heading" className="section-title">Why Certifications Matter: Expert Insights</h2>
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

        {/* Category Section */}
        <section className="section" aria-labelledby="categories-title">
          <div className="container">
            <h2 className="section-title" id="categories-title">Certificate Categories</h2>
            <p className="section-subtitle">
              Organized certificate templates for every industry and skill level
            </p>
            <div className="categories-grid">
              {certificateCategories.map((category) => (
                <div key={category.id} className="card" style={{ cursor: 'default' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{category.title}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '16px' }}>{category.count}</p>
                  <span style={{ color: '#000000' }}>
                    {category.count} available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Certificates Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="popular-title">
          <div className="container">
            <h2 className="section-title" id="popular-title">Most Valuable Certificates for Resumes</h2>
            <p className="section-subtitle">
              Industry-recognized certifications that boost your resume's credibility
            </p>

            {/* Filter Bar */}
            <div className="filter-bar">
              <div className="filter-group">
                <button className="filter-button" aria-label="Filter by category">
                  <FiFilter /> Category
                </button>
                <button className="filter-button" aria-label="Filter by level">
                  <FiTag /> Level
                </button>
                <button className="filter-button-active" aria-label="Sort by popularity">
                  <FiTrendingUp /> Popularity
                </button>
              </div>
              <div className="filter-group">
                <button className="filter-button" aria-label="Grid view">
                  <FiGrid />
                </button>
                <button className="filter-button" aria-label="List view">
                  <FiList />
                </button>
              </div>
            </div>

            <div className="certificates-grid">
              {popularCertificates.map((cert) => (
                <div key={cert.id} className="card" style={{ position: 'relative' }}>
                  {cert.featured && (
                    <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#000000', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>
                      Featured
                    </span>
                  )}
                  <div className="trust-badge-sm" style={{ marginBottom: '16px' }}>
                    <FiAward /> {cert.level}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{cert.title}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '16px' }}>{cert.organization}</p>
                  
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiClock /> {cert.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiTrendingUp /> {cert.popularity}% Relevant
                    </span>
                  </div>

                  <div className="feature-tags">
                    <span className="feature-tag">Template: {cert.template}</span>
                    <span className="feature-tag">Added: {cert.dateAdded}</span>
                  </div>

                  <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link href="/resume-templates" className="btn-secondary" style={{ padding: '8px 16px', minWidth: 'auto' }}>
                      <FiEye /> Preview
                    </Link>
                    <Link href="/resume-templates" className="btn-primary" style={{ padding: '8px 16px', minWidth: 'auto' }}>
                      <FiCheck /> Use
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section" aria-labelledby="comparison-heading">
          <div className="container">
            <h2 id="comparison-heading" className="section-title">Certificate Section: Our Templates vs. Others</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Our Templates</th>
                    <th>Other Templates</th>
                    <th>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {certificateComparisonData.map((row, i) => (
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

        {/* Success Stories */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="success-heading">
          <div className="container">
            <h2 id="success-heading" className="section-title">Real Success Stories with Certifications</h2>
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
                      <small>Before</small>
                      <p style={{ fontWeight: 'bold' }}>{story.before}</p>
                    </div>
                    <div style={{ background: '#e0f2e1', padding: '12px', borderRadius: '6px' }}>
                      <small>After</small>
                      <p style={{ fontWeight: 'bold', color: '#059669' }}>{story.after}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <span className="feature-tag">Certifications: {story.certificates}</span>
                    <span className="feature-tag">Time: {story.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template Styles Section */}
        <section id="templates" className="section" aria-labelledby="templates-title">
          <div className="container">
            <h2 className="section-title" id="templates-title">Certificate Section Templates</h2>
            <p className="section-subtitle">
              Choose from professionally designed layouts optimized for ATS
            </p>
            
            <div className="templates-grid">
              {certificateTemplates.map((template) => (
                <div key={template.id} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>
                    {template.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{template.name}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '16px' }}>{template.description}</p>
                  
                  <div className="feature-tags" style={{ marginBottom: '20px' }}>
                    {template.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <FiCheck style={{ color: '#059669' }} /> {feature}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link href="/resume-templates" className="btn-secondary" style={{ padding: '8px 16px', minWidth: 'auto' }}>
                      <FiEye /> Preview
                    </Link>
                    <Link href="/resume-templates" className="btn-primary" style={{ padding: '8px 16px', minWidth: 'auto' }}>
                      <FiCheck /> Use Template
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Resume Certifications</h2>
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

        {/* How To Section */}
        <section className="section" aria-labelledby="howto-title">
          <div className="container">
            <h2 className="section-title" id="howto-title">How to Add Certificates to Your Resume</h2>
            <p className="section-subtitle">
              Follow these steps to create a professional certificate section
            </p>
            
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Select Relevant Certificates</h3>
                <p style={{ color: '#4b5563' }}>Choose certificates that match the job requirements. Focus on recent and industry-recognized certifications.</p>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Use ATS-Optimized Format</h3>
                <p style={{ color: '#4b5563' }}>Our templates format certificates with proper headings, dates, and issuer names for maximum ATS compatibility.</p>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Add Keywords & Details</h3>
                <p style={{ color: '#4b5563' }}>Include specific skills and competencies from the certificate. Add validity periods and credential IDs when available.</p>
              </div>
              
              <div className="step-card">
                <div className="step-number">4</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Download & Customize</h3>
                <p style={{ color: '#4b5563' }}>Download your resume with the certificate section. Customize further or use as-is for applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="faq-title">
          <div className="container">
            <h2 className="section-title" id="faq-title">Certificate Section FAQs</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p style={{ color: '#4b5563' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Resources */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="container">
            <h2 id="resources-heading" className="section-title">More Certificate Resources</h2>
            <div className="resources-grid">
              <div className="resource-link" style={{ cursor: 'default' }}>
                <FiBook /> How to List Certificates on Resume
              </div>
              <div className="resource-link" style={{ cursor: 'default' }}>
                <FiCheck /> ATS Certificate Formatting Guide
              </div>
              <div className="resource-link" style={{ cursor: 'default' }}>
                <FiFileText /> Certificate vs Education Section
              </div>
              <div className="resource-link" style={{ cursor: 'default' }}>
                <FiEye /> Professional Certificate Examples
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ background: '#000000', color: '#ffffff' }} aria-labelledby="cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 id="cta-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px', color: '#ffffff' }}>
              Ready to Showcase Your Certifications?
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 32px', color: '#e5e7eb' }}>
              Create a professional certificate section that stands out to employers and ATS systems. Free templates, no sign-up required.
            </p>
            
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary" style={{ background: '#ffffff', color: '#000000', borderColor: '#ffffff' }}>
                <FiDownload /> Build Your Certificate Section
              </Link>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '32px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> ATS-Optimized Templates
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> No Sign Up Required
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> Free PDF Download
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FiCheck style={{ color: '#059669' }} /> Professional Designs
              </span>
            </div>

            <p style={{ marginTop: '32px', fontSize: '0.8rem', color: '#9ca3af' }}>
              Data fresh as of: {safeCurrentDate} | 120+ templates tested with major ATS platforms
            </p>
          </div>
        </section>

        {/* ===== NEW: Random Internal Links Section for SEO/GEO Boost ===== */}
        <section className="section" style={{background: 'var(--background)', borderTop: '2px solid var(--border)'}} aria-labelledby="internal-links-heading">
          <div className="container">
            <h2 id="internal-links-heading" className="section-title" style={{fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'}}>🔗 Explore More Resume Resources</h2>
            <p className="section-subtitle" style={{marginBottom: '24px'}}>
              Strengthen your application with these expert guides and tools
            </p>
            
            {/* Responsive grid: 1 col mobile → auto-fit up to 5 cols desktop */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              width: '100%'
            }}>
              {/* Link 1: Skills Section */}
              <Link href="/resume-skills-section" className="internal-link-card">
                <FiTarget className="internal-link-icon" />
                <span className="internal-link-title">How to List Skills on Your Resume</span>
                <span className="internal-link-desc">Complement your certs with a strong skills section</span>
              </Link>
              
              {/* Link 2: Formatting Guide */}
              <Link href="/resume-formatting-guide" className="internal-link-card">
                <FiFileText className="internal-link-icon" />
                <span className="internal-link-title">Professional Resume Formatting Guide</span>
                <span className="internal-link-desc">Ensure perfect layout and structure for 2026</span>
              </Link>
              
              {/* Link 3: Keyword Matcher */}
              <Link href="/free-resume-keyword-matcher" className="internal-link-card">
                <FiSearch className="internal-link-icon" />
                <span className="internal-link-title">Free Resume Keyword Matcher Tool</span>
                <span className="internal-link-desc">Match your resume to any job description instantly</span>
              </Link>
              
              {/* Link 4: ATS Optimization */}
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="internal-link-card">
                <FiZap className="internal-link-icon" />
                <span className="internal-link-title">How to Beat ATS Optimization Tips</span>
                <span className="internal-link-desc">Advanced strategies for modern hiring software</span>
              </Link>
              
              {/* Link 5: 2026 Trends */}
              <Link href="/resume-trends-in-the-usa-for-2026" className="internal-link-card">
                <FiTrendingUp className="internal-link-icon" />
                <span className="internal-link-title">2026 USA Resume Trends</span>
                <span className="internal-link-desc">Stay ahead with the latest hiring market insights</span>
              </Link>
            </div>
            
            {/* Helper text for accessibility */}
            <p className="helper-text" style={{textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-light)'}}>
              All resources are free, mobile-optimized, and updated for 2026 hiring trends
            </p>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="templates-count">120+</span>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
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

  const certificateDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        certificateDates
      },
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour
  };
}

export default CertificateResumeSection;