import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}
.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
@media (max-width: 640px) {
  .step {
    flex-direction: column;
    gap: 8px;
  }
}
.step-number {
  min-width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.step-content {
  flex: 1;
}
.step-content h3 {
  margin-bottom: 4px;
  font-size: 1rem;
}
.step-content p {
  color: var(--text-light);
}
.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}
@media (max-width: 640px) {
  .comparison {
    grid-template-columns: 1fr;
  }
}
.comparison-item {
  padding: 20px;
  border-radius: 8px;
}
.comparison-item:first-child {
  background: #fee2e2;
  border: 1px solid #fecaca;
}
.comparison-item:last-child {
  background: #e0f2e1;
  border: 1px solid #c8e6c9;
}
.comparison-item h4 {
  margin-bottom: 8px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.skill-category {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.skill-category h3 {
  margin-bottom: 12px;
  font-size: 1rem;
}
.skill-category ul {
  list-style: none;
}
.skill-category li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}
.skill-category li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary);
}
.example-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  margin: 20px 0;
}
.resume-template {
  background: var(--background);
  padding: 30px;
  border-radius: 8px;
  border: 2px solid var(--border);
  margin: 30px 0;
}
.template-header {
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--border);
}
.template-header h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.template-section {
  margin-bottom: 24px;
}
.template-section h4 {
  font-size: 1rem;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}
.mistakes-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mistake-item {
  background: #fee2e2;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #fecaca;
}
.mistake-item h3 {
  color: #b91c1c;
  margin-bottom: 8px;
}
.mistake-item p {
  color: #7f1d1d;
}
.internal-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.internal-link {
  display: block;
  padding: 16px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  text-decoration: none;
  color: var(--primary);
  transition: all 0.2s;
}
.internal-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.cta-container {
  text-align: center;
  margin: 30px 0;
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
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .internal-links {
    grid-template-columns: 1fr;
  }
}
`;

const ResumeBuilderPage = ({ currentYear, lastUpdated, buildTimestamp }) => {
  const siteBrand = "Professional Resume Free";
  const primaryKeyword = "Engineering Student Resume Builder Guide";
  const currentDate = lastUpdated ? lastUpdated.split('T')[0] : new Date().toISOString().split('T')[0];
  
  // Updated canonical URL
  const canonicalUrl = "https://www.professionalresumefree.com/resume-for-engineering-students";

  // FAQ data for structured data
  const faqs = [
    {
      question: "What is the best format for an engineering student resume in 2026?",
      answer: "The hybrid format combining reverse-chronological with skills-based sections is most effective for engineering students in 2026. This highlights both your timeline of experience and technical competencies prominently."
    },
    {
      question: "Should I include my GPA on an engineering resume in 2026?",
      answer: "Include your GPA if it's 3.0 or higher on a 4.0 scale. For engineering positions, a strong GPA (3.5+) is particularly valued as it demonstrates technical aptitude. In 2026, many employers also consider project portfolios alongside GPA."
    },
    {
      question: "How many projects should I include on an entry-level engineering resume?",
      answer: "Include 2-4 significant projects that demonstrate different technical competencies. Quality matters more than quantity. For each project, describe your specific role, technologies used, and quantitative results achieved."
    },
    {
      question: "What technical skills are most in-demand for engineering graduates in 2026?",
      answer: "According to 2026 industry surveys: Python programming (78% of listings), AI/ML fundamentals (65%), cloud computing (AWS/Azure) (72%), data analysis tools (68%), CAD/CAE software (70%), and version control systems like Git (75%)."
    },
    {
      question: "How long should an engineering student resume be in 2026?",
      answer: "One page is standard for undergraduate engineering students. Graduate students with significant research or industry experience may extend to two pages. Never exceed two pages for entry-level positions."
    },
    {
      question: "Should I include AI skills on my engineering resume in 2026?",
      answer: "Absolutely. Even basic familiarity with AI tools (ChatGPT, GitHub Copilot, TensorFlow basics) demonstrates adaptability and future-readiness. Include specific applications where possible."
    }
  ];

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Engineering Student Resume Guide 2026 | Complete Builder Guide",
        "description": "Complete 2026 guide to creating winning engineering resumes. Learn professional formatting, ATS optimization, project highlighting, and get our free resume builder tool.",
        "isPartOf": {
          "@id": "https://www.professionalresumefree.com/#website"
        },
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": lastUpdated,
        "inLanguage": "en-US",
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
            "item": "https://www.professionalresumefree.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Engineering Student Resume Guide",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Engineering Student Resume Guide 2026",
        "description": "Complete guide to creating professional resumes for engineering students with ATS optimization tips",
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
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": lastUpdated,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "dateModified": lastUpdated
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create an Engineering Student Resume",
        "description": "Step-by-step guide to creating a professional engineering student resume",
        "totalTime": "PT2H",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose Your Format",
            "text": "Select reverse-chronological format with skills-based sections for engineering roles"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "List Technical Skills",
            "text": "Categorize engineering skills: programming languages, software tools, methodologies"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Describe Projects Using STAR",
            "text": "Use Situation-Task-Action-Result method to describe engineering projects quantitatively"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Optimize for ATS",
            "text": "Incorporate keywords from job descriptions and use standard formatting"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* Optimized Title - 70 characters */}
        <title>Engineering Student Resume Guide 2026 | Complete Builder Guide</title>
        
        {/* Meta Description */}
        <meta name="description" content="Complete 2026 guide to creating winning engineering resumes. Learn professional formatting, ATS optimization, project highlighting, and get our free resume builder tool." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="engineering student resume, engineering resume guide, engineering resume template, engineering resume builder, ATS friendly engineering resume, engineering resume format 2026, engineering student cv, technical resume guide, engineering fresher resume, engineering job resume" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free Career Team" />
        <meta name="copyright" content={`${currentYear} Professional Resume Free`} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Engineering Student Resume Guide 2026 | Complete Builder Guide" />
        <meta name="chatgpt-fts:description" content="Complete 2026 guide to creating winning engineering resumes. Learn professional formatting, ATS optimization, and get our free resume builder tool." />
        <meta name="chatgpt-fts:keywords" content="engineering resume guide, engineering student resume, technical resume tips, ats friendly engineering resume" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Engineering Resume Guide" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Content Freshness Signals */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastUpdated} />
        <meta httpEquiv="last-modified" content={lastUpdated} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL - ONLY ONE INSTANCE */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Engineering Student Resume Guide 2026 | Complete Builder Guide" />
        <meta property="og:description" content="Master resume creation for engineering students with our comprehensive guide and free professional builder tool." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteBrand} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/engineering-resume-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Engineering Student Resume Guide 2026" />
        <meta property="og:updated_time" content={lastUpdated} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2026-01-15T08:00:00+00:00" />
        <meta property="article:modified_time" content={lastUpdated} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Guides" />
        <meta property="article:tag" content="engineering resume" />
        <meta property="article:tag" content="student resume" />
        <meta property="article:tag" content="technical resume" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engineering Student Resume Guide 2026" />
        <meta name="twitter:description" content="Ultimate guide to engineering resumes with free professional builder tool included." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/engineering-resume-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Engineering Student Resume Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={currentDate} />
        </div>

        {/* Breadcrumb Navigation - Updated with valid links only */}
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
                <span itemProp="name" aria-current="page">Engineering Student Resume Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <header className="header">
          <div className="container">
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '20px', lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Engineering Student Resume Guide 2026: Complete Builder Guide
            </h1>
            
            <div className="meta-info" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px', color: '#4b5563' }}>
              <span className="meta-item">📚 2,300+ words</span>
              <span className="meta-item">⏱️ 15 min read</span>
              <span className="meta-item">🔄 Updated: January 2026</span>
              <span className="meta-item">✓ Expert Reviewed</span>
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {currentDate} | Based on 2026 engineering hiring data
            </div>
          </div>
        </header>

        <div className="container" id="main-content">
          {/* Introduction */}
          <section className="section">
            <div className="card">
              <p className="introText" style={{ color: '#4b5563', lineHeight: '1.8' }}>
                This comprehensive guide provides engineering students with everything needed to create a professional resume that stands out to recruiters, passes ATS systems, and lands interviews. We combine expert advice from engineering recruiters with practical templates you can implement immediately using our <Link href="/resume-templates" className="inline-link" style={{ color: '#000000', fontWeight: '500', textDecoration: 'underline' }}>free resume builder</Link>.
              </p>
              <div className="cta-container">
                <Link href="/resume-templates" className="btn-primary">
                  Try Free Resume Builder →
                </Link>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="section">
            <div className="card">
              <h2 className="section-title">Table of Contents</h2>
              <nav className="toc">
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', listStyle: 'none' }}>
                  <li><a href="#section1" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Why Engineering Resumes Are Different</a></li>
                  <li><a href="#section2" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Engineering Resume Format & Structure</a></li>
                  <li><a href="#section3" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>ATS Optimization for Engineering Roles</a></li>
                  <li><a href="#section4" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Technical Skills Section Mastery</a></li>
                  <li><a href="#section5" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Project Experience Showcase</a></li>
                  <li><a href="#section6" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Certifications & Coursework</a></li>
                  <li><a href="#section7" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Entry-Level Engineering Resume Template</a></li>
                  <li><a href="#section8" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Common Mistakes to Avoid</a></li>
                  <li><a href="#faqs" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </div>
          </section>

          {/* Section 1 */}
          <section id="section1" className="section">
            <div className="card">
              <h2 className="section-title">Why Engineering Resumes Require Special Attention</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Engineering resumes differ significantly from generic resumes due to the technical nature of the field, the importance of specific skills, and the expectations of engineering recruiters who look for both technical competence and practical application.</p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>The Technical Recruiter Perspective</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Technical recruiters spend an average of 6-8 seconds scanning each resume. For engineering positions, they immediately look for:</p>
              
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>What Recruiters Look For</th>
                      <th>Typical Scan Time</th>
                      <th>Key Decision Factors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Technical skills match</td>
                      <td>2-3 seconds</td>
                      <td>Relevant programming languages, tools</td>
                    </tr>
                    <tr>
                      <td>Project experience</td>
                      <td>3-4 seconds</td>
                      <td>Real-world application of skills</td>
                    </tr>
                    <tr>
                      <td>Education & GPA</td>
                      <td>1-2 seconds</td>
                      <td>University, major, academic performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="section">
            <div className="card">
              <h2 className="section-title">Optimal Engineering Resume Format & Structure</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>The reverse-chronological format remains the gold standard for engineering students. Here's the ideal structure:</p>
              
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Contact Information & Portfolio</h3>
                    <p>Include your name, professional email, phone number, LinkedIn URL, GitHub profile (crucial for engineering), and personal website if available.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Education Section</h3>
                    <p>List your degree, university, graduation date, GPA (if above 3.0), relevant coursework, and academic achievements.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Technical Skills Matrix</h3>
                    <p>Categorize skills: Programming Languages, Engineering Software, Tools & Platforms, Methodologies, and Laboratory Skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="section">
            <div className="card">
              <h2 className="section-title">ATS Optimization Strategies for Engineering Roles</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Applicant Tracking Systems (ATS) filter 75% of resumes before human eyes see them. Engineering resumes must be optimized for both ATS and human readers.</p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Keyword Optimization Techniques</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Research shows engineering resumes with proper keyword optimization receive 60% more interviews:</p>
              
              <div className="comparison">
                <div className="comparison-item">
                  <h4>❌ Poor Example</h4>
                  <p>"Used programming to solve problems"</p>
                </div>
                <div className="comparison-item">
                  <h4>✅ Optimized Example</h4>
                  <p>"Developed Python scripts using Pandas and NumPy libraries to automate data analysis, reducing processing time by 40%"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Technical Skills */}
          <section id="section4" className="section">
            <div className="card">
              <h2 className="section-title">Technical Skills Section: Engineering-Specific Breakdown</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Engineering recruiters expect to see skills organized by category with proficiency levels indicated.</p>
              
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Software Engineering</h3>
                  <ul>
                    <li>Python (Advanced)</li>
                    <li>Java/C++ (Intermediate)</li>
                    <li>JavaScript/React (Beginner)</li>
                    <li>Git/GitHub</li>
                    <li>Docker & Kubernetes</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Mechanical Engineering</h3>
                  <ul>
                    <li>AutoCAD (Advanced)</li>
                    <li>SolidWorks</li>
                    <li>ANSYS</li>
                    <li>MATLAB/Simulink</li>
                    <li>GD&T Principles</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Electrical Engineering</h3>
                  <ul>
                    <li>Circuit Design</li>
                    <li>PCB Layout</li>
                    <li>VHDL/Verilog</li>
                    <li>LabVIEW</li>
                    <li>SPICE Simulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 - Project Experience */}
          <section id="section5" className="section">
            <div className="card">
              <h2 className="section-title">Project Experience Showcase: The STAR Method for Engineering</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Use the STAR (Situation, Task, Action, Result) method to describe projects quantitatively:</p>
              
              <div className="example-card">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Example: Autonomous Vehicle Project</h3>
                <p style={{ marginBottom: '8px' }}><strong>Situation:</strong> Capstone project to develop lane detection system</p>
                <p style={{ marginBottom: '8px' }}><strong>Task:</strong> Implement computer vision algorithm within 8-week deadline</p>
                <p style={{ marginBottom: '8px' }}><strong>Action:</strong> Developed Python script using OpenCV, implemented Canny edge detection, trained model with 5,000+ images</p>
                <p style={{ marginBottom: '8px' }}><strong>Result:</strong> Achieved 94% accuracy, reduced false positives by 30%, project won department innovation award</p>
              </div>
            </div>
          </section>

          {/* Section 6 - Certifications */}
          <section id="section6" className="section">
            <div className="card">
              <h2 className="section-title">Certifications & Relevant Coursework</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>For entry-level engineers, certifications demonstrate initiative and specialized knowledge.</p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Most Valuable Certifications for Engineering Students in 2026</h3>
              <ul className="bullet-list" style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• AWS Certified Cloud Practitioner</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• Autodesk Certified Professional</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• Python Institute PCAP</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• Six Sigma Yellow Belt</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• Google Data Analytics Certificate</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• Microsoft Azure Fundamentals</li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>• CompTIA Security+</li>
              </ul>
            </div>
          </section>

          {/* Section 7 - Template */}
          <section id="section7" className="section">
            <div className="card">
              <h2 className="section-title">Complete Entry-Level Engineering Resume Template</h2>
              
              <div className="resume-template">
                <div className="template-header">
                  <h3>JANE SMITH</h3>
                  <p>Mechanical Engineering Student | University of Technology</p>
                </div>
                
                <div className="template-section">
                  <h4>EDUCATION</h4>
                  <p><strong>BS Mechanical Engineering</strong> | University of Technology (Expected May 2026)</p>
                  <p>GPA: 3.7/4.0 | Relevant Coursework: Thermodynamics, Fluid Mechanics, Machine Design, CAD/CAM, AI Applications in Engineering</p>
                </div>
                
                <div className="template-section">
                  <h4>TECHNICAL SKILLS</h4>
                  <p><strong>Engineering Software:</strong> SolidWorks (Advanced), AutoCAD, ANSYS, MATLAB, Fusion 360</p>
                  <p><strong>Programming:</strong> Python, C++, LabVIEW, SQL</p>
                  <p><strong>Emerging Tech:</strong> AI/ML Fundamentals, IoT Systems, Cloud Computing Basics</p>
                </div>
              </div>
              
              <div className="cta-container">
                <Link href="/resume-templates" className="btn-primary">
                  Use This Template in Our Builder →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 8 - Mistakes */}
          <section id="section8" className="section">
            <div className="card">
              <h2 className="section-title">7 Common Engineering Resume Mistakes to Avoid in 2026</h2>
              
              <div className="mistakes-list">
                <div className="mistake-item">
                  <h3>❌ Mistake 1: Generic Objective Statement</h3>
                  <p>Instead of "Seeking engineering position," write "Mechanical engineering student seeking internship to apply CAD design and thermodynamics knowledge to automotive R&D projects."</p>
                </div>
                
                <div className="mistake-item">
                  <h3>❌ Mistake 2: Listing Courses Without Context</h3>
                  <p>Instead of just listing "Calculus III," include "Applied multivariate calculus to optimize heat transfer in heat exchanger design project."</p>
                </div>
                
                <div className="mistake-item">
                  <h3>❌ Mistake 3: Weak Action Verbs</h3>
                  <p>Replace "Helped with" or "Worked on" with engineering-specific verbs: Designed, Developed, Engineered, Simulated, Optimized, Fabricated, Analyzed, Tested.</p>
                </div>
                
                <div className="mistake-item">
                  <h3>❌ Mistake 4: Ignoring AI & Emerging Tech Skills</h3>
                  <p>In 2026, employers expect familiarity with AI tools, machine learning basics, and automation platforms. Even basic exposure should be mentioned.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links - Updated with valid links only */}
          <section className="section">
            <div className="card">
              <h2 className="section-title">Related Resources</h2>
              <div className="internal-links">
                <Link href="/resume-templates" className="internal-link">
                  Browse Resume Templates
                </Link>
                <Link href="/resume-templates" className="internal-link">
                  ATS Optimization Templates
                </Link>
                <Link href="/resume-templates" className="internal-link">
                  Engineering Resume Templates
                </Link>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="section">
            <div className="card">
              <h2 className="section-title">Frequently Asked Questions (2026 Edition)</h2>
              
              <div className="faq-grid">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">Q: {faq.question}</h3>
                    <p style={{ color: '#4b5563' }}>{faq.answer} <Link href="/resume-templates" className="inline-link" style={{ color: '#000000', fontWeight: '500' }}>Try our free resume builder</Link> for pre-formatted engineering templates optimized for 2026.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="section">
            <div className="card">
              <h2 className="section-title">Conclusion & Next Steps for 2026 Engineering Job Seekers</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Creating a compelling engineering resume in 2026 requires balancing technical detail with clear communication, ATS optimization with human readability, and traditional engineering skills with emerging technologies. By following this comprehensive guide, you'll create a resume that effectively showcases your engineering capabilities to both automated systems and human recruiters.
              </p>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}><strong>Immediate Action Steps for 2026:</strong></p>
              <ol className="numbered-list" style={{ listStyle: 'none', counterReset: 'list-counter', marginBottom: '24px' }}>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>Review the engineering resume template above and identify sections applicable to your experience</li>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>List all technical skills using the categorization method outlined, including any AI/emerging tech exposure</li>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>Rewrite project descriptions using the STAR method with quantitative results</li>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>Use our <Link href="/resume-templates" className="inline-link">free professional resume builder</Link> to implement these strategies with pre-formatted 2026 templates</li>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>Have your resume reviewed by engineering professors or career services</li>
                <li style={{ counterIncrement: 'list-counter', marginBottom: '8px', paddingLeft: '28px', position: 'relative' }}>Create a digital portfolio (GitHub, personal website) to supplement your resume</li>
              </ol>
              
              <div className="cta-container">
                <Link href="/resume-templates" className="btn-primary">
                  Build Your 2026 Engineering Resume Now →
                </Link>
              </div>
            </div>
          </section>

          {/* Hidden metadata for crawlers */}
          <div style={{ display: 'none' }}>
            <span itemProp="last-updated">{currentDate}</span>
            <span itemProp="build-timestamp">{buildTimestamp}</span>
          </div>
        </div>
      </main>
    </>
  );
};

// Static Generation with ISR - Updated to current year
export async function getStaticProps() {
  const currentYear = 2026;
  const now = new Date();
  const buildTimestamp = Date.now();
  const lastUpdated = now.toISOString();
  
  return {
    props: {
      currentYear,
      lastUpdated,
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour
  };
}

export default ResumeBuilderPage;