import Head from "next/head";
import Link from "next/link";

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
.toc-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
}
.toc-link {
  color: var(--primary);
  text-decoration: none;
  display: block;
  padding: 8px;
  border-radius: 4px;
}
.toc-link:hover {
  background: var(--card-bg);
}
.inline-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: underline;
}
.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}
.primary-button {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid var(--primary);
  transition: all 0.2s;
  min-width: 200px;
  text-align: center;
}
.primary-button:hover {
  background: var(--secondary);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.secondary-button {
  display: inline-block;
  background: transparent;
  color: var(--primary);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid var(--primary);
  transition: all 0.2s;
  min-width: 200px;
  text-align: center;
}
.secondary-button:hover {
  background: #f5f5f5;
  transform: translateY(-1px);
}
.list {
  list-style: none;
  margin: 20px 0;
}
.list-item {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}
.list-item:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary);
}
.subheading {
  font-size: 1.2rem;
  margin: 24px 0 12px;
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
  .hero-buttons {
    flex-direction: column;
  }
  .toc-list {
    grid-template-columns: 1fr;
  }
}
`;

export const getStaticProps = async () => {
  const buildTimestamp = Date.now();
  const currentDate = new Date().toISOString().split('T')[0];
  const lastModifiedDate = new Date().toISOString();

  const meta = {
    title: "Resume for Students in India: Complete 2026 Guide",
    description:
      "A complete 2026 guide for students in India to write an ATS-friendly resume with formats, examples, and recruiter-backed tips to land internships and first jobs.",
    url:
      "https://www.professionalresumefree.com/resume-for-students-in-india",
    siteName: "Professional Resume Free",
    image:
      "https://www.professionalresumefree.com/images/resume-for-students-in-india-og.jpg",
  };

  const faqItems = [
    {
      question: "Do students in India need a resume without work experience?",
      answer:
        "Yes. Even if you have no formal work experience, you should still create a resume that highlights your education, projects, internships, online courses, and extracurricular activities. Recruiters in India want to see your potential, not just your past jobs.",
    },
    {
      question: "What is the best resume format for students in India?",
      answer:
        "For most students and freshers in India, a reverse-chronological format works best. It clearly shows your latest education, internships, and projects first and is familiar to Indian recruiters and ATS systems.",
    },
    {
      question: "How long should a student resume be in India?",
      answer:
        "A one-page resume is ideal for most students and freshers in India. If you have substantial projects, internships, or research work, you can extend to two pages, but only if every section adds clear value.",
    },
    {
      question: "Should I include a photo on my resume in India?",
      answer:
        "In most cases, no. Unless a job posting specifically requests a photo, it is better to skip it. Many Indian recruiters and ATS systems focus on skills, education, and experience rather than photos.",
    },
    {
      question: "Can I use AI tools like ChatGPT to write my resume?",
      answer:
        "Yes, AI tools like ChatGPT can help you brainstorm bullet points, improve wording, and tailor your resume to a job description. However, you must review and customize everything so it accurately reflects your real achievements.",
    },
    {
      question: "How important are keywords for ATS in India?",
      answer:
        "Keywords are critical. Many Indian companies use Applicant Tracking Systems (ATS) to filter resumes. You should mirror important skills and phrases from the job description in your skills, projects, and experience sections.",
    },
    {
      question: "Which resume builder is best for students in India?",
      answer:
        "Professional Resume Free is an excellent option. It is a free online resume builder that helps students and freshers in India create clean, ATS-friendly resumes quickly.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${meta.url}#webpage`,
        "url": meta.url,
        "name": meta.title,
        "description": meta.description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": meta.image
        },
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-IN",
        "breadcrumb": {
          "@id": `${meta.url}#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${meta.url}#breadcrumb`,
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
            "name": "Resume for Students in India",
            "item": meta.url
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Resume for Students in India: Complete 2026 Guide",
        "description": meta.description,
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "logo": {
            "@type": "ImageObject",
            "url":
              "https://www.professionalresumefree.com/logo.png",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": meta.url,
        },
        "image": meta.image,
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": lastModifiedDate,
        "articleSection": "Career Guides",
        "keywords": "resume for students India, student resume format, fresher resume India, ATS friendly resume students, college resume guide"
      },
      {
        "@type": "FAQPage",
        "@id": `${meta.url}#faq`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
            "dateModified": lastModifiedDate
          },
        })),
      },
      {
        "@type": "HowTo",
        "name": "How to Write a Resume as a Student in India",
        "description": "Step-by-step guide to creating an ATS-friendly resume for students in India",
        "totalTime": "PT2H",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Define Your Target Role",
            "text": "Decide what kind of roles you are aiming for: software development, data analysis, finance, marketing, design, or something else."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Collect Your Raw Material",
            "text": "List your education, projects, internships, online courses, certifications, and extracurricular activities."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Write Impactful Bullet Points",
            "text": "Use action verbs and include numbers to describe your achievements in projects and internships."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Tailor for Each Application",
            "text": "Adjust your summary, skills, and bullet points to mirror the priorities in each job description."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Use a Clean Template",
            "text": "Place your content into a clean, single-column template with consistent fonts and spacing."
          }
        ]
      }
    ]
  };

  return {
    props: {
      meta,
      faqItems,
      structuredData,
      currentDate,
      lastModifiedDate,
      buildTimestamp
    },
    revalidate: 3600, // Revalidate every hour
  };
};

const ResumeForStudentsInIndiaPage = ({ meta, faqItems, structuredData, currentDate, lastModifiedDate, buildTimestamp }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en-IN" />
        
        {/* Optimized Title - 70 characters */}
        <title>Resume for Students in India: Complete 2026 Guide</title>
        
        {/* Meta Description */}
        <meta name="description" content={meta.description} />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="resume for students India, student resume format, fresher resume India, ATS friendly resume students, college resume guide, how to write resume as student India, student cv format, resume for internship India, fresher resume examples India" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free Career Team" />
        <meta name="copyright" content={`${currentYear} Professional Resume Free`} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content="resume for students India, student resume tips, fresher resume format India, how to write resume as student" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Student Resume Guide" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Content Freshness Signals */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Single Canonical URL */}
        <link rel="canonical" href={meta.url} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={meta.url} hreflang="en-in" />
        <link rel="alternate" href={meta.url} hreflang="en" />
        <link rel="alternate" href={meta.url} hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume for Students in India Guide 2026" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Guides" />
        <meta property="article:tag" content="student resume" />
        <meta property="article:tag" content="India resume" />
        <meta property="article:tag" content="fresher guide" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume for Students in India: Complete 2026 Guide" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Resume for Students in India Guide" />
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
        
        {/* JSON-LD Structured Data - Single combined script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
                <span itemProp="name" aria-current="page">Resume for Students in India</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              🎓 Student-Focused Guide | Updated {currentDate} | 100% Free
            </div>
            
            <h1 id="hero-heading">Resume for Students in India: Complete 2026 Guide</h1>
            
            <p>
              A complete, practical guide to writing a standout resume as a student or fresher in India—designed to pass ATS, impress recruiters, and help you win internships, campus placements, and your first job.
            </p>

            <div className="hero-buttons">
              <Link href="/resume-templates" className="primary-button">
                Build Your Free Student Resume
              </Link>
              <Link href="/resume-templates" className="secondary-button">
                Browse Student Templates
              </Link>
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {currentDate} | Based on 2026 Indian hiring data
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Table of Contents</h2>
              <ul className="toc-list">
                <li>
                  <a href="#introduction" className="toc-link">
                    Introduction: Why Your Resume Matters in India
                  </a>
                </li>
                <li>
                  <a href="#format" className="toc-link">
                    Best Resume Format for Students in India
                  </a>
                </li>
                <li>
                  <a href="#sections" className="toc-link">
                    Essential Sections of a Student Resume
                  </a>
                </li>
                <li>
                  <a href="#how-to-write" className="toc-link">
                    How to Write Each Section Step by Step
                  </a>
                </li>
                <li>
                  <a href="#ats" className="toc-link">
                    ATS Optimization for Indian Recruiters
                  </a>
                </li>
                <li>
                  <a href="#comparisons" className="toc-link">
                    Student Resume vs. Experienced Resume
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="toc-link">
                    FAQs: Resume for Students in India
                  </a>
                </li>
                <li>
                  <a href="#next-steps" className="toc-link">
                    Conclusion & Next Steps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                Why Your Resume Matters So Much as a Student in India
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                India's job market is intensely competitive. Every year, millions of students graduate from engineering colleges, business schools, universities, and vocational institutes. For internships, campus placements, and entry-level roles, recruiters often receive hundreds or even thousands of applications for a single opening. In this environment, your resume is not just a formality—it is your first filter and your first impression.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Many students feel stuck because they believe they "don't have experience." But recruiters in India do not expect students to have long work histories. Instead, they look for potential: your academic performance, projects, internships, online courses, hackathons, and extracurricular activities. A well-structured, focused resume helps them quickly understand who you are and what you can bring to their organization.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                A strong resume also gives you clarity. When you sit down to list your achievements, skills, and projects, you start to see patterns in your strengths. This self-awareness makes you more confident in interviews and group discussions. In short, your resume is a strategic tool for your career—not just a document you submit at the last minute.
              </p>
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section id="format" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                Best Resume Format for Students in India
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                For most students and freshers in India, the reverse-chronological format is the safest and most effective choice. It lists your most recent education, internships, and projects first, which aligns with how recruiters scan resumes. It is also the format most Applicant Tracking Systems (ATS) are designed to parse.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                A hybrid or combination format can also work well, especially if you have strong projects or skills but limited formal experience. In a hybrid format, you highlight your skills and key projects near the top, followed by education and experience. This is useful for students who have done intensive coursework, online programs, or self-driven projects in areas like software development, data analysis, design, or finance.
              </p>
              <h3 className="subheading">
                Reverse-Chronological vs. Hybrid Format
              </h3>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>Best For</th>
                      <th>Key Advantages</th>
                      <th>Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reverse-Chronological</td>
                      <td>
                        Most students applying for internships and campus placements
                      </td>
                      <td>
                        Familiar to Indian recruiters, easy to scan, highly ATS-friendly
                      </td>
                      <td>
                        Less flexible if you have gaps or non-traditional experience
                      </td>
                    </tr>
                    <tr>
                      <td>Hybrid / Combination</td>
                      <td>
                        Students with strong projects, certifications, or self-taught skills
                      </td>
                      <td>
                        Lets you showcase skills and projects before experience
                      </td>
                      <td>
                        Must be formatted carefully to remain clean and ATS-compatible
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Regardless of format, avoid overly decorative templates with multiple columns, heavy graphics, or unusual fonts. Many ATS systems used by Indian companies struggle with complex layouts. A clean, single-column design with clear headings and bullet points is usually the best choice.
              </p>
            </div>
          </div>
        </section>

        {/* ESSENTIAL SECTIONS */}
        <section id="sections" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                Essential Sections of a Student Resume in India
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                A high-quality resume for students in India typically includes: contact information, professional summary, education, skills, projects, internships or part-time work, certifications, and extracurricular activities. Each section should be intentional and aligned with the roles you are targeting.
              </p>

              <h3 className="subheading">Contact Information</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Include your full name, mobile number, professional email address, city and state, and optionally your LinkedIn profile or portfolio link. Avoid unprofessional email IDs and unnecessary personal details like full postal address, caste, or marital status.
              </p>

              <h3 className="subheading">Professional Summary</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Your professional summary is a 2–3 line snapshot of who you are, what you are studying, and what you can offer. It should be specific and tailored to your target roles.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                <strong>Example (Engineering Student):</strong> “Final-year B.Tech Computer Science student with strong skills in Java, Data Structures, and Web Development. Completed multiple projects using React and Node.js and contributed to college coding club initiatives. Seeking software development internships where I can apply problem-solving skills to real-world products.”
              </p>

              <h3 className="subheading">Education</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                List your degree, college, university, location, and graduation year. You can include your CGPA or percentage if it is strong and relevant. For many Indian recruiters, academic performance is still an important filter for fresher roles.
              </p>

              <h3 className="subheading">Skills</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Group your skills into categories such as Programming Languages, Tools & Technologies, Soft Skills, or Domain Knowledge. Focus on skills that match the job descriptions you are targeting rather than listing everything you have ever touched.
              </p>

              <h3 className="subheading">Projects</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Projects are often the most powerful part of a student resume in India. They show how you apply your knowledge. For each project, mention the title, tools/technologies used, and 2–3 bullet points describing what you built and what impact it had.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                <strong>Example Project Bullet:</strong> “Built a full-stack placement management portal using Next.js and MongoDB, enabling students to track company visits and application status; reduced manual coordination time for the placement cell by 40%.”
              </p>

              <h3 className="subheading">Internships & Experience</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                If you have internships, part-time jobs, or freelance work, list them with your role, organization, dates, and 2–4 bullet points describing your contributions. Focus on outcomes and measurable impact where possible.
              </p>

              <h3 className="subheading">Certifications & Activities</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Include relevant certifications (e.g., Google, Coursera, NPTEL), hackathons, competitions, and leadership roles in clubs or societies. These elements help you stand out in India's crowded fresher job market.
              </p>
            </div>
          </div>
        </section>

        {/* HOW-TO / STEP-BY-STEP */}
        <section id="how-to-write" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                How to Write Your Student Resume Step by Step
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Instead of staring at a blank page, follow a simple, repeatable process. This step-by-step approach helps you move from confusion to a polished, recruiter-ready resume.
              </p>

              <h3 className="subheading">Step 1: Define Your Target Role</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Before writing anything, decide what kind of roles you are aiming for: software development, data analysis, finance, marketing, design, or something else. Your resume should be built around that direction. A generic resume that tries to fit every role usually fits none.
              </p>

              <h3 className="subheading">Step 2: Collect Your Raw Material</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                List your education, projects, internships, online courses, certifications, and extracurricular activities. Do not worry about wording yet—just capture everything. This raw material becomes the foundation of your final resume.
              </p>

              <h3 className="subheading">Step 3: Write Impactful Bullet Points</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                For each project or experience, write 2–4 bullet points that describe what you did and what changed because of your work. Use action verbs like “built,” “designed,” “analyzed,” “automated,” or “improved,” and whenever possible, include numbers.
              </p>

              <h3 className="subheading">Step 4: Tailor for Each Application</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Read the job description carefully and highlight the skills and responsibilities mentioned. Then, adjust your summary, skills, and bullet points to mirror those priorities. This tailoring is one of the most important steps for standing out in India's competitive hiring environment.
              </p>

              <h3 className="subheading">Step 5: Use a Clean, ATS-Friendly Template</h3>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Finally, place your content into a clean, single-column template with consistent fonts, spacing, and headings. If you want to skip the formatting struggle, you can use{" "}
                <Link href="/resume-templates" className="inline-link">
                  Professional Resume Free's free resume builder
                </Link>{" "}
                to generate ATS-friendly layouts designed specifically for students and freshers in India.
              </p>
            </div>
          </div>
        </section>

        {/* ATS */}
        <section id="ats" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                ATS Optimization for Students Applying in India
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Many mid-sized and large companies in India use Applicant Tracking Systems (ATS) to filter resumes before a human recruiter reviews them. These systems scan your resume for keywords, structure, and basic information. If your resume is not ATS-friendly, it may be rejected automatically—even if you are a strong candidate.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                To optimize for ATS, start by analyzing the job description. Identify important keywords related to skills, tools, and responsibilities. Then, naturally incorporate those keywords into your skills, projects, and experience sections. Avoid keyword stuffing; instead, show how you have actually used those skills in real contexts.
              </p>
              <h3 className="subheading">Practical ATS Tips for Indian Students</h3>
              <ul className="list">
                <li className="list-item">
                  Use standard headings like “Education,” “Skills,” “Projects,” and “Experience” so ATS can recognize them.
                </li>
                <li className="list-item">
                  Avoid text inside images, complex tables, or multi-column layouts.
                </li>
                <li className="list-item">
                  Use a common font and export your resume as a PDF unless the job posting specifies otherwise.
                </li>
                <li className="list-item">
                  Mirror important keywords from the job description, especially technical skills and tools.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section id="comparisons" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                Student Resume vs. Experienced Resume: What's Different?
              </h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Students in India often compare their resumes to those of experienced professionals and feel inadequate. But the purpose and structure of a student resume are different. Recruiters know you are at the beginning of your career; they are evaluating potential, not a long track record.
              </p>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Student Resume</th>
                      <th>Experienced Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Focus</td>
                      <td>
                        Education, projects, internships, skills, and potential
                      </td>
                      <td>
                        Work history, achievements, leadership, and business impact
                      </td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>Usually 1 page</td>
                      <td>1–2 pages depending on experience</td>
                    </tr>
                    <tr>
                      <td>Key Sections</td>
                      <td>
                        Summary, Education, Skills, Projects, Internships, Activities
                      </td>
                      <td>
                        Summary, Experience, Key Achievements, Skills, Education
                      </td>
                    </tr>
                    <tr>
                      <td>Recruiter Expectation</td>
                      <td>
                        Evidence of learning ability, initiative, and alignment with role
                      </td>
                      <td>
                        Proven track record of delivering results and solving business problems
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Understanding this difference helps you stop comparing yourself to experienced candidates and instead focus on presenting the best version of your current profile. Your goal is not to look like a senior professional—it is to look like the most promising student or fresher in the applicant pool.
              </p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section id="faqs" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">
                FAQs: Resume for Students in India
              </h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">Q: {item.question}</h3>
                    <p style={{ color: '#4b5563' }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section id="next-steps" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Conclusion & Next Steps</h2>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                Writing a resume as a student in India is not about pretending to be something you are not. It is about clearly presenting your education, skills, projects, and potential in a way that makes sense to recruiters and passes modern hiring systems. When you follow a structured approach—choosing the right format, writing impact-focused bullet points, and tailoring your content to each role—you dramatically increase your chances of getting shortlisted.
              </p>
              <p className="paragraph" style={{ color: '#4b5563', marginBottom: '16px' }}>
                The most important step now is action. Do not wait until the night before a campus placement drive to create your resume. Start today, draft your first version, and keep improving it as you gain more experience. Use tools, guides, and AI thoughtfully, but make sure your resume always reflects your real story.
              </p>
              <div className="hero-buttons">
                <Link href="/resume-templates" className="primary-button">
                  Start Your Free Student Resume Now
                </Link>
                <Link href="/resume-templates" className="secondary-button">
                  Browse Student Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{currentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export default ResumeForStudentsInIndiaPage;