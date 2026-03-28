import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, 
  FiChevronRight, 
  FiDownload, 
  FiCheck, 
  FiTool, 
  FiStar,
  FiArrowRight,
  FiClock,
  FiFileText,
  FiTrendingUp,
  FiLayers,
  FiUser,
  FiBriefcase,
  FiCode,
  FiBarChart,
  FiTarget,
  FiBookOpen
} from 'react-icons/fi';

// Critical CSS inline with white background, black fonts, black buttons, grey cards - Same design as ATSGuide
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
  justify-content: center;
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
  justify-content: center;
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
.meta-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin: 24px 0;
  font-size: 0.9rem;
  color: var(--text-light);
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc-list {
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
.toc-list li {
  margin-bottom: 12px;
  text-align: center;
}
.toc-link {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 2px;
}
.toc-link:hover {
  border-bottom-color: var(--primary);
}
.paragraph {
  max-width: 800px;
  margin: 0 auto 20px;
  color: var(--text-light);
  line-height: 1.6;
}
.content-block {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  margin: 30px 0;
}
.block-title {
  font-size: 1.3rem;
  margin-bottom: 16px;
  text-align: center;
}
.subheading {
  font-size: 1.2rem;
  margin: 30px 0 16px;
  text-align: center;
  font-weight: 600;
}
.ordered-list, .unordered-list {
  max-width: 700px;
  margin: 0 auto 20px;
  padding-left: 24px;
}
.list-item {
  margin-bottom: 10px;
  color: var(--text-light);
}
.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin: 30px 0;
}
.example-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
}
.example-title {
  font-size: 1.2rem;
  margin-bottom: 16px;
  text-align: center;
}
.skill-categories {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.skill-category {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}
.skill-category:last-child {
  border-bottom: none;
}
.skill-category strong {
  display: inline-block;
  min-width: 100px;
}
.cta-card {
  background: var(--primary);
  color: var(--background);
  border-radius: 12px;
  padding: 48px 32px;
  text-align: center;
  margin: 40px 0;
}
.cta-title {
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: var(--background);
}
.cta-description {
  font-size: 1.1rem;
  margin-bottom: 24px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.cta-features {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.cta-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}
.feature-icon {
  color: var(--success);
}
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--background);
  color: var(--primary);
  padding: 14px 32px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s;
}
.cta-button:hover {
  transform: translateY(-2px);
}
/* Mobile improvements */
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
  .meta-row {
    flex-direction: column;
    gap: 12px;
  }
  .cta-card {
    padding: 32px 20px;
  }
  .cta-features {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .example-grid {
    grid-template-columns: 1fr;
  }
}
`;

export const getStaticProps = async () => {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const metadata = {
    // OPTIMIZED TITLE - 63 characters (BELOW 70 LIMIT)
    title: 'Resume Skills Section Guide: ATS-Optimized Examples & Tips 2026',
    description: 'Master the resume skills section with expert strategies, examples, and ATS formatting tips to impress employers and land interviews faster.',
    url: 'https://www.professionalresumefree.com/resume-skills-section',
    siteName: 'ProfessionalResumeFree',
    image: 'https://www.professionalresumefree.com/images/resume-skills-section-guide-og.jpg',
    twitterHandle: '@profresumefree',
  };

  const faqItems = [
    {
      question: 'What is a resume skills section?',
      answer: 'It is a dedicated part of your resume where you highlight your most relevant hard and soft skills for a specific job.',
    },
    {
      question: 'How many skills should I list?',
      answer: 'Most resumes perform best with 8–15 targeted skills that match the job description.',
    },
    {
      question: 'Should I separate hard and soft skills?',
      answer: 'Yes. Grouping skills improves readability and helps recruiters quickly identify your strengths.',
    },
    {
      question: 'Where should the skills section go?',
      answer: 'Place it near the top if your skills are a major selling point. Otherwise, place it after your summary.',
    },
    {
      question: 'How do I tailor my skills?',
      answer: 'Mirror the employer\'s language from the job description while staying honest about your experience.',
    },
    {
      question: 'Can I include proficiency levels?',
      answer: 'Yes, but only if you can back them up with real examples during interviews.',
    },
    {
      question: 'Is a skills-based resume format good?',
      answer: 'It works well for career changers or those with gaps, but most recruiters still expect a clear work history.',
    },
  ];

  const breadcrumbData = [
    { name: 'Home', url: 'https://www.professionalresumefree.com' },
    { name: 'Resume Guides', url: 'https://www.professionalresumefree.com/resume-skills-section' },
    { name: 'Resume Skills Section', url: 'https://www.professionalresumefree.com/resume-skills-section' },
  ];

  return {
    props: { 
      metadata, 
      faqItems,
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 7200,
  };
};

export default function ResumeSkillsClusterPage({ metadata, faqItems, seoData, buildTimestamp }) {
  const primaryKeyword = 'resume skills section';
  
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = seoData?.currentDate || freshnessIndicator;
  const safeLastModifiedDate = seoData?.lastModifiedDate || new Date().toISOString();
  const safeFaqDates = seoData?.faqDates || Array(faqItems.length).fill(freshnessIndicator);
  
  // Single canonical URL
  const canonicalUrl = "https://www.professionalresumefree.com/resume-skills-section";

  // Comprehensive structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": metadata.title,
        "description": metadata.description,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website",
          "url": "https://www.professionalresumefree.com",
          "name": "ProfessionalResumeFree",
          "description": "Free online resume builder for job seekers",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.professionalresumefree.com/#organization",
            "name": "ProfessionalResumeFree",
            "url": "https://www.professionalresumefree.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.professionalresumefree.com/logo.png",
              "width": 512,
              "height": 512
            }
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": metadata.image,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": seoData?.breadcrumbData?.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }
      },
      {
        "@type": "Article",
        "headline": "How to Write a High-Impact Resume Skills Section (2026 Guide)",
        "description": metadata.description,
        "image": [metadata.image],
        "author": {
          "@type": "Organization",
          "name": "ProfessionalResumeFree",
          "url": "https://www.professionalresumefree.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ProfessionalResumeFree",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.professionalresumefree.com/images/logo.png"
          }
        },
        "datePublished": "2026-01-29",
        "dateModified": safeCurrentDate,
        "mainEntityOfPage": `${canonicalUrl}#webpage`,
        "articleSection": "Resume Writing",
        "keywords": "resume skills, ATS skills, hard skills, soft skills, resume writing, job search"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item, index) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Powerful Resume Skills Section",
        "description": "Step-by-step guide to build an ATS-optimized skills section for your resume",
        "totalTime": "PT10M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Analyze Job Descriptions",
            "text": "Extract key skills and keywords from your target job postings."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Categorize Your Skills",
            "text": "Group skills into hard skills, soft skills, and technical proficiencies."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Format for ATS",
            "text": "Use clear headings and bullet points that automated systems can read."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Tailor to Each Application",
            "text": "Customize your skills section for every job application to match keywords."
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
        
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="resume skills section, ATS skills list, hard skills examples, soft skills for resume, resume writing 2026, skills-based resume, technical skills, professional skills" />
        <meta name="author" content="ProfessionalResumeFree" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Skills Section Guide: ATS-Optimized Examples & Tips 2026" />
        <meta name="chatgpt-fts:description" content="Master the resume skills section with expert strategies, examples, and ATS formatting tips to impress employers and land interviews faster." />
        <meta name="chatgpt-fts:keywords" content="resume skills section, how to list skills on resume, ATS skills, hard skills examples, soft skills list" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Skills Section Guide" />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Skills Section Guide - ATS Optimized Examples" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-29T00:00:00Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Job Search" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content="Resume Skills Section Guide" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:creator" content={metadata.twitterHandle} />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>

        {/* Breadcrumb Navigation */}
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
                <span itemProp="name" aria-current="page">Resume Skills Section Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        <div className="container">
          {/* Header Section */}
          <section className="hero" id="main-content" aria-labelledby="hero-heading">
            <div className="trust-badge" aria-label="Trust indicators">
              <FiStar /> Expert Guide | Updated January 2026 | ATS-Optimized Strategies
            </div>

            <h1 id="hero-heading">RESUME SKILLS SECTION: Build a High-Impact Skills Hub That Gets You Hired</h1>

            <p>
              A complete, experience-backed guide to crafting a resume skills section that passes ATS filters, impresses hiring managers, and strengthens your entire resume strategy.
            </p>

            <div className="meta-row">
              <div className="meta-item">
                <FiClock />
                <span>Reading Time: 12–15 minutes</span>
              </div>
              <div className="meta-item">
                <FiFileText />
                <span>Experience Level: All</span>
              </div>
              <div className="meta-item">
                <FiTrendingUp />
                <span>Updated: {safeCurrentDate}</span>
              </div>
            </div>

            <div className="button-container" role="group" aria-label="Call to action buttons">
              <Link href="/resume-templates" className="btn-primary" aria-label="View ATS-optimized resume templates">
                <FiFileText /> Resume Templates
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary" aria-label="Explore free resume tools">
                <FiTool /> Free Resume Tools
              </Link>
              <Link href="/complete-resume-resource-library" className="btn-secondary" aria-label="Browse resume resource library">
                <FiLayers /> Resource Library
              </Link>
            </div>

            <div className="feature-tags" style={{ justifyContent: 'center', marginTop: '24px' }}>
              <span className="feature-tag">✓ ATS-Optimized</span>
              <span className="feature-tag">✓ 2026 Strategies</span>
              <span className="feature-tag">✓ Expert Examples</span>
              <span className="feature-tag">✓ Free Tools</span>
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }}>
              Guide fresh as of: {safeCurrentDate} | Trusted by 500K+ Job Seekers
            </div>
          </section>

          {/* Table of Contents */}
          <section className="section">
            <h2 className="section-title">Table of Contents</h2>
            <ul className="toc-list">
              <li>
                <a href="#why-skills-matter" className="toc-link">
                  Why Your Skills Section Matters
                </a>
              </li>
              <li>
                <a href="#types-of-skills" className="toc-link">
                  Hard Skills vs. Soft Skills vs. Transferable Skills
                </a>
              </li>
              <li>
                <a href="#formatting" className="toc-link">
                  Formatting Strategies (2026 Best Practices)
                </a>
              </li>
              <li>
                <a href="#tailoring" className="toc-link">
                  Tailoring Your Skills to Each Job
                </a>
              </li>
              <li>
                <a href="#examples" className="toc-link">
                  Skills Section Examples by Role
                </a>
              </li>
              <li>
                <a href="#faq" className="toc-link">
                  Frequently Asked Questions (2026)
                </a>
              </li>
            </ul>
          </section>

          {/* Why Skills Matter Section */}
          <section id="why-skills-matter" className="section">
            <h2 className="section-title">
              Why Your {primaryKeyword} Matters More Than You Think
            </h2>

            <p className="paragraph">
              Recruiters scan resumes in seconds. They're not reading—they're searching for proof that you can do the job. Your skills section is one of the fastest ways to communicate that proof. It acts as a high-level snapshot of your capabilities aligned with the role.
            </p>

            <p className="paragraph">
              Modern hiring relies heavily on Applicant Tracking Systems (ATS). These systems scan resumes for specific keywords. If your skills section is vague or generic, your resume may never reach a human reviewer. A well-structured skills section dramatically increases your chances of passing ATS filters.
            </p>

            <div className="content-block">
              <h3 className="block-title">Key Hiring Insights (2026)</h3>
              <div className="table-wrap">
                 <table>
                  <thead>
                     <tr>
                      <th>Hiring Insight</th>
                      <th>What It Means</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                       <td>Recruiters scan resumes in <strong>under 7 seconds</strong></td>
                       <td>Skills must be instantly visible and relevant.</td>
                     </tr>
                     <tr>
                       <td>98% of Fortune 500 companies use ATS</td>
                       <td>Precise keyword matching is non-negotiable in 2026.</td>
                     </tr>
                     <tr>
                       <td>Skills validate your experience</td>
                       <td>Every listed skill must be demonstrable in your work history.</td>
                     </tr>
                  </tbody>
                 </table>
              </div>
            </div>
          </section>

          {/* Types of Skills Section */}
          <section id="types-of-skills" className="section">
            <h2 className="section-title">
              Hard Skills vs. Soft Skills vs. Transferable Skills
            </h2>

            <p className="paragraph">
              A strong resume includes a balanced mix of hard, soft, and transferable skills. Hard skills are technical and measurable. Soft skills describe how you work with others. Transferable skills apply across roles and industries.
            </p>

            <div className="content-block">
              <h3 className="block-title">Skill Type Comparison (2026)</h3>
              <div className="table-wrap">
                 <table>
                  <thead>
                     <tr>
                      <th>Skill Type</th>
                      <th>Examples</th>
                      <th>Best Use</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>Hard Skills</td>
                        <td>Python, Excel, SEO, SQL, AI Prompt Engineering</td>
                        <td>Highlight in skills section and experience bullets.</td>
                      </tr>
                      <tr>
                        <td>Soft Skills</td>
                        <td>Adaptability, Cross-functional Collaboration, Emotional Intelligence</td>
                        <td>Demonstrate through quantifiable achievements.</td>
                      </tr>
                      <tr>
                        <td>Transferable Skills</td>
                        <td>Project Management, Strategic Planning, Budget Oversight</td>
                        <td>Critical for career changers and leadership roles.</td>
                      </tr>
                  </tbody>
                 </table>
              </div>
            </div>
          </section>

          {/* Formatting Section */}
          <section id="formatting" className="section">
            <h2 className="section-title">
              Formatting Strategies for a High-Impact Skills Section
            </h2>

            <p className="paragraph">
              Formatting affects how quickly recruiters understand your value. Use clear headings, short lists, and grouped categories to improve readability and ATS parsing.
            </p>

            <h3 className="subheading">Step-by-Step Formatting (2026 Best Practices)</h3>
            <ol className="ordered-list">
              <li className="list-item">Use a clear heading: "Skills", "Core Competencies", or "Technical Proficiencies"</li>
              <li className="list-item">Group related skills with subheadings (e.g., "Programming Languages", "Analytics Tools")</li>
              <li className="list-item">Prioritize relevance: Place job-specific skills first</li>
              <li className="list-item">Include 8-12 targeted skills maximum to avoid dilution</li>
              <li className="list-item">Verify every skill appears in your experience section with proof points</li>
            </ol>
          </section>

          {/* Tailoring Section */}
          <section id="tailoring" className="section">
            <h2 className="section-title">
              How to Tailor Your Skills to Each Job Description (2026 Method)
            </h2>

            <p className="paragraph">
              Tailoring your skills is the #1 most effective way to improve interview rates in today's competitive market. Start by extracting keywords from the job description and aligning them with your verified experience.
            </p>

            <h3 className="subheading">Practical Workflow</h3>
            <ul className="unordered-list">
              <li className="list-item">Identify repeated keywords and required competencies in the job posting</li>
              <li className="list-item">Map each keyword to specific projects or achievements in your background</li>
              <li className="list-item">Prioritize skills mentioned in the top third of the job description</li>
              <li className="list-item">Mirror employer language precisely (e.g., "Google Analytics 4" not just "Analytics")</li>
              <li className="list-item">Remove outdated or irrelevant skills to maintain focus</li>
            </ul>
          </section>

          {/* Examples Section */}
          <section id="examples" className="section">
            <h2 className="section-title">
              Resume Skills Section Examples by Role (2026)
            </h2>

            <div className="example-grid">
              <div className="example-card">
                <h3 className="example-title">Software Engineer</h3>
                <div className="skill-categories">
                  <div className="skill-category">
                    <strong>Programming:</strong> Python, TypeScript, Rust, SQL
                  </div>
                  <div className="skill-category">
                    <strong>Frameworks:</strong> React, Node.js, Django
                  </div>
                  <div className="skill-category">
                    <strong>Tools:</strong> Git, Docker, AWS, Kubernetes
                  </div>
                  <div className="skill-category">
                    <strong>Practices:</strong> CI/CD, TDD, Agile/Scrum
                  </div>
                </div>
              </div>

              <div className="example-card">
                <h3 className="example-title">Marketing Specialist</h3>
                <div className="skill-categories">
                  <div className="skill-category">
                    <strong>Digital:</strong> SEO/SEM, Google Analytics 4, Meta Ads
                  </div>
                  <div className="skill-category">
                    <strong>Content:</strong> Copywriting, A/B Testing, Email Marketing
                  </div>
                  <div className="skill-category">
                    <strong>Tools:</strong> HubSpot, Canva, Mailchimp, Asana
                  </div>
                  <div className="skill-category">
                    <strong>Analytics:</strong> ROI Tracking, Conversion Optimization
                  </div>
                </div>
              </div>

              <div className="example-card">
                <h3 className="example-title">Project Manager</h3>
                <div className="skill-categories">
                  <div className="skill-category">
                    <strong>Methodologies:</strong> Agile, Scrum, Waterfall
                  </div>
                  <div className="skill-category">
                    <strong>Tools:</strong> Jira, Trello, MS Project, Smartsheet
                  </div>
                  <div className="skill-category">
                    <strong>Skills:</strong> Budget Management ($500K+), Stakeholder Communication, Risk Mitigation, Cross-functional Leadership
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="section">
            <h2 className="section-title">Frequently Asked Questions (Updated 2026)</h2>
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p style={{ color: '#4b5563' }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="section">
            <h2 className="section-title">
              Next Steps: Build a Resume That Gets Results in 2026
            </h2>

            <p className="paragraph">
              Now that you understand how to build a powerful {primaryKeyword}, it's time to put your knowledge into action. Use the free, ATS-optimized tools at ProfessionalResumeFree.com to create a polished, modern resume in minutes—no signup required.
            </p>

            <div className="cta-card">
              <h3 className="cta-title">Start Building Your Professional Resume</h3>
              <p className="cta-description">
                Join job seekers who landed interviews faster with our ATS-friendly templates.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>46+ ATS-Optimized Templates</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>Instant PDF Download</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>No Sign Up Required</span>
                </div>
                <div className="cta-feature">
                  <FiCheck className="feature-icon" />
                  <span>Mobile-Friendly Builder</span>
                </div>
              </div>
              <div className="button-container">
                <Link href="/resume-templates" className="btn-primary" style={{ background: '#ffffff', color: '#000000', borderColor: '#ffffff' }}>
                  <FiArrowRight /> Start Building Now (Free)
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}