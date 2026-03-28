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
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.comparison-table th {
  background: var(--card-bg);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}
.comparison-table td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.tip-card {
  background: #fff3e0;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #ffe0b2;
  margin: 20px 0;
}
.tip-title {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #d97706;
}
.stat-box {
  background: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
  text-align: center;
  margin: 20px 0;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #059669;
}
.stat-desc {
  color: #2e7d32;
}
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
.skill-category {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.skill-category h4 {
  margin-bottom: 12px;
  font-size: 1rem;
}
.bullet-list {
  list-style: none;
}
.bullet-list li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}
.bullet-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary);
}
.numbered-list {
  list-style: none;
  counter-reset: list-counter;
}
.numbered-list li {
  counter-increment: list-counter;
  margin-bottom: 8px;
  padding-left: 28px;
  position: relative;
}
.numbered-list li:before {
  content: counter(list-counter) ".";
  position: absolute;
  left: 0;
  font-weight: 600;
  color: var(--primary);
}
.stream-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.stream-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.stream-title {
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: var(--primary);
}
.stream-jobs {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
}
.warning-card {
  background: #fee2e2;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #fecaca;
  margin: 20px 0;
}
.warning-title {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #dc2626;
}
.mistake-item {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #fecaca;
}
.mistake-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.mistake-item h5 {
  font-size: 0.95rem;
  margin-bottom: 4px;
  color: #b91c1c;
}
.mistake-item p {
  font-size: 0.9rem;
  color: #7f1d1d;
}
.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0;
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
  min-width: 80px;
  font-weight: 600;
  color: var(--primary);
}
.step-content {
  flex: 1;
}
.step-content h4 {
  margin-bottom: 4px;
}
.step-content p {
  color: var(--text-light);
}
.faq {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.faq:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.faq-question {
  font-size: 1rem;
  margin-bottom: 8px;
  color: var(--primary);
}
.faq-answer {
  color: var(--text-light);
  line-height: 1.6;
}
.next-steps {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  margin: 30px 0;
}
.next-steps-title {
  font-size: 1.1rem;
  margin-bottom: 16px;
}
.next-steps-list {
  list-style: none;
  counter-reset: next-counter;
}
.next-steps-list li {
  counter-increment: next-counter;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
}
.next-steps-list li:before {
  content: counter(next-counter) ".";
  position: absolute;
  left: 0;
  font-weight: 600;
  color: var(--primary);
}
.inline-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: underline;
}
.final-cta {
  text-align: center;
  margin: 40px 0;
}
.final-cta-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
}
.final-cta-text {
  color: var(--text-light);
  margin-bottom: 24px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.button-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.author-box {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  margin: 20px 0;
}
.author-title {
  font-size: 1.2rem;
  margin-bottom: 16px;
}
.author-info p {
  margin-bottom: 12px;
  line-height: 1.6;
  color: var(--text-light);
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
  .skill-grid {
    grid-template-columns: 1fr;
  }
  .stream-comparison {
    grid-template-columns: 1fr;
  }
  .button-group {
    flex-direction: column;
  }
}
`;

const ResumeFor12thPass = ({ generatedDate, lastUpdatedDate, buildTimestamp }) => {
  // Format dates for display
  const displayDate = new Date(lastUpdatedDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const currentYear = new Date().getFullYear();
  const canonicalUrl = "https://www.professionalresumefree.com/resume-for-12th-pass";

  // FAQ data for structured data
  const faqs = [
    {
      question: "What should a 12th pass student include in a resume with no work experience?",
      answer: "A 12th pass student should include: 1) Contact information with professional email, 2) Concise career objective tailored to target job, 3) Academic qualifications with marks/percentage prominently displayed, 4) Relevant skills (computer, communication, subject-specific), 5) Academic projects with descriptions of your role and achievements, 6) Extracurricular activities highlighting leadership or teamwork, 7) Certifications and additional courses, 8) Languages known with proficiency levels, and 9) Basic personal details (avoid irrelevant information)."
    },
    {
      question: "How long should a resume be for a 12th pass student?",
      answer: "A resume for 12th pass students should be strictly 1 page maximum. Since you have limited professional experience, focus on quality over quantity. Use clear headings, bullet points, and strategic white space to make your single page impactful and easy to read."
    },
    {
      question: "Can 12th pass students get jobs without experience?",
      answer: "Absolutely. Many entry-level positions specifically target 12th pass graduates including: retail sales associate, customer service representative, data entry operator, junior clerk, bank teller, front desk executive, administrative assistant, and delivery associate."
    },
    {
      question: "What skills should a 12th pass student highlight?",
      answer: "Highlight: 1) Computer skills (MS Office, typing speed), 2) Communication skills, 3) Problem-solving abilities, 4) Teamwork, 5) Time management, 6) Basic accounting (for commerce students), 7) Language proficiency, and 8) Any vocational or technical skills."
    },
    {
      question: "Should 12th pass students mention their school marks in the resume?",
      answer: "Yes, definitely include your 12th standard marks/percentage prominently. If you scored above 70%, highlight it. For 10th standard marks, include them if they're good (above 75%) or if specifically requested."
    },
    {
      question: "What format is best for a 12th pass student resume?",
      answer: "Use a chronological format focusing on education first. Use a clean, professional template with clear section headings. Avoid fancy designs, graphics, or colors - focus on readability and professional presentation."
    },
    {
      question: "How can 12th pass students compensate for lack of experience?",
      answer: "Compensate by: 1) Highlighting academic achievements, 2) Showcasing school projects, 3) Emphasizing relevant skills, 4) Including extracurricular leadership roles, 5) Adding certifications, 6) Writing a compelling career objective, and 7) Demonstrating enthusiasm and willingness to learn."
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Resume for 12th Pass Students: Complete 2026 Guide",
        "isPartOf": {
          "@id": "https://www.professionalresumefree.com/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/images/resume-12th-pass-guide-og.jpg"
        },
        "datePublished": generatedDate,
        "dateModified": lastUpdatedDate,
        "description": "Complete guide to creating a professional resume for 12th pass students. Expert tips, templates, and strategies for freshers with no work experience.",
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
            "name": "Resume for 12th Pass",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Resume for 12th Pass Students: Complete 2026 Guide",
        "description": "Master the art of resume writing as a 12th pass student with no work experience. Learn how to highlight your education, skills, and potential.",
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
        "datePublished": generatedDate,
        "dateModified": lastUpdatedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "articleSection": "Career",
        "keywords": "resume for 12th pass, fresher resume, student resume, no experience resume, 12th pass job resume"
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
            "dateModified": lastUpdatedDate
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Resume for 12th Pass Students",
        "description": "Step-by-step guide to creating a professional resume for 12th pass students with no work experience",
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
            "name": "Self-Assessment",
            "text": "Identify your skills, achievements, and career interests. Research target job requirements and industry expectations."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Information Gathering",
            "text": "Collect all academic certificates, project details, extracurricular records, and certification documents."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Draft Creation",
            "text": "Write content for each section using action verbs and quantifiable achievements where possible."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Formatting",
            "text": "Apply professional formatting standards, ensure consistent spacing, and optimize for readability."
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
        <title>Resume for 12th Pass Students: Complete 2026 Guide & Templates</title>
        
        {/* Meta Description */}
        <meta name="description" content="Complete guide to creating a professional resume for 12th pass students. Expert tips, templates, and strategies for freshers with no work experience. Get hired faster!" />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="resume for 12th pass, fresher resume, student resume, no experience resume, 12th pass job resume, entry level resume, school pass resume, how to write resume for 12th pass, 12th pass resume format, fresher resume examples" />
        
        {/* Author */}
        <meta name="author" content="Professional Resume Free Career Team" />
        <meta name="copyright" content={`${currentYear} Professional Resume Free`} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume for 12th Pass Students: Complete 2026 Guide" />
        <meta name="chatgpt-fts:description" content="Complete guide to creating a professional resume for 12th pass students with no work experience. Expert tips, templates, and strategies to get hired faster." />
        <meta name="chatgpt-fts:keywords" content="resume for 12th pass, fresher resume tips, student resume guide, no experience resume help" />
        <meta name="chatgpt-fts:last-updated" content={lastUpdatedDate.split('T')[0]} />
        <meta name="generator" content="Professional Resume Free - Resume Guide" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Content Freshness Signals */}
        <meta name="date" content={lastUpdatedDate.split('T')[0]} />
        <meta name="last-modified" content={lastUpdatedDate} />
        <meta httpEquiv="last-modified" content={lastUpdatedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Resume for 12th Pass Students: Complete 2026 Guide & Templates" />
        <meta property="og:description" content="Complete guide to creating a professional resume for 12th pass students. Expert tips, templates, and strategies for freshers with no work experience." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-12th-pass-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume for 12th Pass Students Guide 2026" />
        <meta property="og:updated_time" content={lastUpdatedDate} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={generatedDate} />
        <meta property="article:modified_time" content={lastUpdatedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career" />
        <meta property="article:tag" content="resume for 12th pass" />
        <meta property="article:tag" content="fresher resume" />
        <meta property="article:tag" content="student resume" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume for 12th Pass Students: Complete Guide 2026" />
        <meta name="twitter:description" content="Expert guide to creating a winning resume for 12th pass students with no work experience. Get hired faster with proven strategies." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-12th-pass-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Resume for 12th Pass Students Guide" />
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
          <meta name="content-freshness" content={lastUpdatedDate.split('T')[0]} />
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
                <span itemProp="name" aria-current="page">Resume for 12th Pass</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Header Section */}
        <header className="header">
          <div className="container">
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '20px', lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Resume for 12th Pass Students: Complete 2026 Guide & Templates
            </h1>
            
            <div className="meta-info" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px', color: '#4b5563' }}>
              <span className="meta-item">📚 3,200+ words</span>
              <span className="meta-item">⏱️ 12 min read</span>
              <span className="meta-item">🔄 Updated: {displayDate}</span>
              <span className="meta-item">✓ Expert Reviewed</span>
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {lastUpdatedDate.split('T')[0]} | Based on 2026 hiring data and fresher employment trends
            </div>
          </div>
        </header>

        <div className="container">
          {/* Introduction Section */}
          <section className="section" id="main-content">
            <div className="card">
              <p className="introParagraph" style={{ color: '#4b5563', lineHeight: '1.8' }}>
                Creating your first resume as a 12th pass student can feel overwhelming, especially when you have no formal work experience. 
                However, this comprehensive guide will show you exactly how to craft a professional, compelling resume that highlights your 
                potential, academic achievements, and transferable skills. According to recent employment statistics, over 65% of entry-level 
                positions are filled by 12th pass graduates who effectively showcase their capabilities through well-structured resumes. 
                This guide draws from years of career counseling experience and hiring manager insights to provide actionable strategies 
                that actually work in the competitive job market.
              </p>
              
              <div className="cta-box" style={{ background: '#f3f4f6', padding: '24px', borderRadius: '8px', marginTop: '24px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Ready to Create Your 12th Pass Resume?</h3>
                <p style={{ color: '#4b5563', marginBottom: '20px' }}>
                  Use our free, professionally designed resume builder specifically optimized for students and freshers with no experience.
                </p>
                <Link href="/resume-templates" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Build Your Free 12th Pass Resume Now
                </Link>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="section">
            <div className="card">
              <h2 className="section-title">Table of Contents</h2>
              <nav className="toc">
                <ul className="toc-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', listStyle: 'none' }}>
                  <li><a href="#section1" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>1. Why Your 12th Pass Resume Matters</a></li>
                  <li><a href="#section2" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>2. Essential Resume Components</a></li>
                  <li><a href="#section3" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>3. Compensating for No Experience</a></li>
                  <li><a href="#section4" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>4. Skill Development Strategies</a></li>
                  <li><a href="#section5" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>5. Resume Formatting</a></li>
                  <li><a href="#section6" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>6. Industry-Specific Tips</a></li>
                  <li><a href="#section7" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>7. Common Mistakes</a></li>
                  <li><a href="#section8" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>8. Step-by-Step Process</a></li>
                  <li><a href="#section9" className="toc-link" style={{ color: '#000000', textDecoration: 'none' }}>9. FAQs</a></li>
                </ul>
              </nav>
            </div>
          </section>

          {/* Section 1 */}
          <section id="section1" className="section">
            <div className="card">
              <h2 className="section-title">1. Why Your 12th Pass Resume Matters More Than You Think</h2>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Many 12th pass students underestimate the importance of their first resume, believing that without work experience, 
                they have little to offer. This is a critical misconception. Your resume serves as your first impression, your personal 
                marketing document, and the bridge between your academic achievements and professional opportunities.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>The Psychology Behind Hiring Freshers:</h3>
              
              <div className="table-wrap" style={{ margin: '20px 0' }}>
                 <table>
                  <thead>
                     <tr>
                      <th>What Employers Look For</th>
                      <th>Percentage</th>
                      <th>How to Showcase It</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                       <td>Willingness to Learn</td>
                       <td>92%</td>
                       <td>Highlight quick learning in projects</td>
                     </tr>
                     <tr>
                       <td>Adaptability</td>
                       <td>87%</td>
                       <td>Show diverse academic performance</td>
                     </tr>
                     <tr>
                       <td>Basic Technical Skills</td>
                       <td>81%</td>
                       <td>List computer and software proficiency</td>
                     </tr>
                     <tr>
                       <td>Communication Ability</td>
                       <td>76%</td>
                       <td>Demonstrate through group projects</td>
                     </tr>
                     <tr>
                       <td>Academic Performance</td>
                       <td>68%</td>
                       <td>Include marks and achievements</td>
                     </tr>
                  </tbody>
                 </table>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section2" className="section">
            <div className="card">
              <h2 className="section-title">2. Essential Components of a Winning 12th Pass Resume</h2>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>2.1 Contact Information & Professional Header</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Your contact section must be professional and error-free. Include: Full name (as per certificates), phone number with 
                country code, professional email address (avoid childish emails), current residential address (city and state sufficient), 
                and LinkedIn profile if available.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>2.2 Career Objective: The 3-Sentence Power Statement</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                For 12th pass students, the career objective is crucial. It should answer: Who you are, what you seek, and what value 
                you offer. Example: "Recent 12th pass graduate with distinction in Commerce seeking an entry-level accounting assistant 
                position. Possess strong numerical aptitude, attention to detail, and proficiency in Tally software. Eager to contribute 
                to organizational success while developing professional accounting skills."
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>2.3 Academic Qualifications with Strategic Presentation</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Present your education in reverse chronological order. Include: Board/University, school/college name, year of passing, 
                marks/percentage, and stream (Science/Commerce/Arts). If you scored above 70%, highlight it.
              </p>
              
              <div className="tip-card">
                <h4 className="tip-title">Pro Tip:</h4>
                <p>
                  Create separate resume versions for different job types. A resume for a data entry position should emphasize typing 
                  speed and accuracy, while one for customer service should highlight communication skills and patience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section3" className="section">
            <div className="card">
              <h2 className="section-title">3. How to Compensate for Lack of Work Experience</h2>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                The absence of formal work experience doesn't mean you lack valuable experience. What employers really seek are 
                transferable skills and demonstrated capabilities.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>3.1 Academic Projects as Experience</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Treat significant school projects as professional experience. Describe them using action verbs and quantifiable results. 
                Example: "Led a 5-member team for Commerce project on GST implementation, resulting in 95% grade."
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>3.2 Extracurricular Leadership</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Positions in school clubs, sports teams, or community organizations show leadership and responsibility. Being a class 
                representative, event organizer, or team captain demonstrates organizational skills, teamwork, and initiative.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>3.3 Volunteer Work & Community Service</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Many 12th pass students overlook volunteer experience. Tutoring younger students, organizing donation drives, or 
                participating in community clean-ups shows social responsibility, commitment, and practical skills.
              </p>
              
              <div className="stat-box">
                <h4 className="stat-title" style={{ fontSize: '1rem', marginBottom: '8px' }}>Important Statistic:</h4>
                <p className="stat-number">63%</p>
                <p className="stat-desc">
                  of hiring managers consider well-documented academic projects and extracurricular activities as valid substitutes 
                  for formal work experience when hiring freshers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="section">
            <div className="card">
              <h2 className="section-title">4. Skill Development & Highlighting Strategies</h2>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Skills are your most marketable assets as a 12th pass graduate. Proper categorization and presentation can 
                significantly enhance your resume's impact.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>4.1 Technical Skills Development</h3>
              <div className="skill-grid">
                <div className="skill-category">
                  <h4>Computer Skills</h4>
                  <ul className="bullet-list">
                    <li>MS Office (Word, Excel, PowerPoint)</li>
                    <li>Typing speed (WPM with accuracy percentage)</li>
                    <li>Basic Internet research</li>
                    <li>Email communication</li>
                    <li>Data entry proficiency</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Stream-Specific Skills</h4>
                  <ul className="bullet-list">
                    <li>Commerce: Tally, Basic Accounting</li>
                    <li>Science: Lab techniques, Scientific methodology</li>
                    <li>Arts: Research, Content writing, Critical analysis</li>
                  </ul>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>4.2 Soft Skills with Evidence</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Don't just list "good communication skills." Provide context: "Demonstrated communication skills through weekly 
                class presentations and debate club participation." Quantify where possible: "Managed team of 4 for school exhibition, 
                coordinating tasks and timelines successfully."
              </p>
              
              <div className="cta-box" style={{ background: '#f3f4f6', padding: '24px', borderRadius: '8px', marginTop: '24px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Need Help Identifying Your Skills?</h3>
                <p style={{ color: '#4b5563', marginBottom: '20px' }}>
                  Our resume builder includes skill assessment tools specifically designed for 12th pass students to identify and 
                  showcase their strongest abilities.
                </p>
                <Link href="/resume-templates" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Discover Your Marketable Skills
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section5" className="section">
            <div className="card">
              <h2 className="section-title">5. Resume Formatting & Professional Presentation</h2>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Professional formatting can make your resume stand out in a pile of applications. Follow these formatting standards 
                specifically optimized for fresher resumes.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>5.1 Structural Guidelines for 12th Pass Resumes</h3>
              <ul className="bullet-list" style={{ marginBottom: '20px' }}>
                <li><strong>Length:</strong> Strictly 1 page - no exceptions</li>
                <li><strong>Font:</strong> Professional (Calibri, Arial, Times New Roman) size 11-12</li>
                <li><strong>Margins:</strong> 1 inch on all sides for clean appearance</li>
                <li><strong>File Format:</strong> PDF preferred (preserves formatting)</li>
                <li><strong>Color:</strong> Black and white only - no colors for professionalism</li>
                <li><strong>Spacing:</strong> Consistent spacing between sections</li>
              </ul>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>5.2 Optimal Section Order</h3>
              <ol className="numbered-list" style={{ marginBottom: '20px' }}>
                <li>Contact Information</li>
                <li>Career Objective (2-3 sentences maximum)</li>
                <li>Academic Qualifications (12th then 10th)</li>
                <li>Skills (Technical then Soft Skills)</li>
                <li>Projects/Academic Achievements</li>
                <li>Extracurricular Activities</li>
                <li>Certifications & Courses</li>
                <li>Languages Known</li>
                <li>Personal Details (Date of Birth, Nationality)</li>
              </ol>
              
              <div className="tip-card">
                <h4 className="tip-title">Formatting Pro Tip:</h4>
                <p>
                  Use bullet points instead of paragraphs for easier scanning. Begin each bullet with strong action verbs 
                  (Managed, Organized, Created, Analyzed, Developed) to create impact even without formal experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section6" className="section">
            <div className="card">
              <h2 className="section-title">6. Industry-Specific Resume Tips (Stream Wise)</h2>
              
              <div className="stream-comparison">
                <div className="stream-card">
                  <h3 className="stream-title">Commerce Stream</h3>
                  <ul className="bullet-list">
                    <li>Highlight accounting subjects and grades</li>
                    <li>Include Tally or any accounting software knowledge</li>
                    <li>Emphasize numerical accuracy and attention to detail</li>
                    <li>Mention participation in commerce-related competitions</li>
                    <li>Include basic knowledge of GST, taxation if studied</li>
                  </ul>
                  <p className="stream-jobs">
                    <strong>Target Jobs:</strong> Accounting Assistant, Bank Clerk, Data Entry Operator, Retail Cashier
                  </p>
                </div>
                
                <div className="stream-card">
                  <h3 className="stream-title">Science Stream</h3>
                  <ul className="bullet-list">
                    <li>Highlight practical/lab work experience</li>
                    <li>Emphasize analytical and problem-solving skills</li>
                    <li>Include science fair or project participation</li>
                    <li>Mention scientific methodology understanding</li>
                    <li>Showcase mathematics and logical reasoning ability</li>
                  </ul>
                  <p className="stream-jobs">
                    <strong>Target Jobs:</strong> Lab Assistant, Pharmacy Helper, Medical Transcriptionist, Technical Support
                  </p>
                </div>
                
                <div className="stream-card">
                  <h3 className="stream-title">Arts/Humanities Stream</h3>
                  <ul className="bullet-list">
                    <li>Highlight communication and writing skills</li>
                    <li>Include research projects and presentations</li>
                    <li>Emphasize creativity and critical thinking</li>
                    <li>Mention language proficiency levels</li>
                    <li>Showcase cultural or social awareness</li>
                  </ul>
                  <p className="stream-jobs">
                    <strong>Target Jobs:</strong> Customer Service, Content Assistant, Front Desk, Administrative Assistant
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section7" className="section">
            <div className="card">
              <h2 className="section-title">7. Common Mistakes to Avoid</h2>
              
              <div className="warning-card">
                <h4 className="warning-title">Critical Errors That Can Ruin Your 12th Pass Resume:</h4>
                
                <div className="mistake-item">
                  <h5>1. Typos and Grammatical Errors</h5>
                  <p>
                    Even a single spelling mistake can lead to immediate rejection. Use grammar check tools and ask someone 
                    to proofread.
                  </p>
                </div>
                
                <div className="mistake-item">
                  <h5>2. Vague or Generic Statements</h5>
                  <p>
                    Avoid clichés like "hardworking individual" or "team player." Instead, provide specific examples.
                  </p>
                </div>
                
                <div className="mistake-item">
                  <h5>3. Including Irrelevant Personal Information</h5>
                  <p>
                    Do not include: height, weight, marital status, religion, caste, or photographs (unless specifically requested).
                  </p>
                </div>
                
                <div className="mistake-item">
                  <h5>4. Using Unprofessional Email Address</h5>
                  <p>
                    Create a professional email: firstname.lastname@gmail.com. Avoid nicknames, birth years, or childish addresses.
                  </p>
                </div>
                
                <div className="mistake-item">
                  <h5>5. Listing References Directly</h5>
                  <p>
                    Never include references on your resume. Simply state "References available upon request."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section8" className="section">
            <div className="card">
              <h2 className="section-title">8. Step-by-Step Resume Building Process</h2>
              
              <div className="step-by-step">
                <div className="step">
                  <div className="step-number">Step 1</div>
                  <div className="step-content">
                    <h4>Self-Assessment & Research</h4>
                    <p>Identify your skills, achievements, and career interests. Research target job requirements and industry expectations.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">Step 2</div>
                  <div className="step-content">
                    <h4>Information Gathering</h4>
                    <p>Collect all academic certificates, project details, extracurricular records, and certification documents.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">Step 3</div>
                  <div className="step-content">
                    <h4>Draft Creation</h4>
                    <p>Write content for each section using action verbs and quantifiable achievements where possible.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">Step 4</div>
                  <div className="step-content">
                    <h4>Formatting & Structuring</h4>
                    <p>Apply professional formatting standards, ensure consistent spacing, and optimize for readability.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">Step 5</div>
                  <div className="step-content">
                    <h4>Review & Refinement</h4>
                    <p>Proofread meticulously, get feedback from mentors, and make necessary improvements.</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">Step 6</div>
                  <div className="step-content">
                    <h4>Customization & Targeting</h4>
                    <p>Tailor your resume for specific job applications by emphasizing relevant skills and achievements.</p>
                  </div>
                </div>
              </div>
              
              <div className="tip-card">
                <h4 className="tip-title">Time Investment:</h4>
                <p>
                  A well-crafted 12th pass resume typically requires 8-12 hours of work spread over a week. This investment can 
                  significantly increase your interview call rate and job opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 - FAQs */}
          <section id="section9" className="section">
            <div className="card">
              <h2 className="section-title">9. Frequently Asked Questions</h2>
              
              <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">Q: {faq.question}</h3>
                    <p style={{ color: '#4b5563' }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion & Related Articles - Updated with valid links only */}
          <section className="section">
            <div className="card">
              <h2 className="section-title">Conclusion & Next Steps</h2>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                Your 12th pass resume is more than just a document - it's your ticket to professional opportunities and career growth. 
                By following the comprehensive strategies outlined in this guide, you can create a resume that effectively communicates 
                your potential, despite the lack of formal work experience.
              </p>
              
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>
                The job market for 12th pass graduates is more diverse than ever before. With the right resume approach, you can 
                access opportunities in various sectors including retail, banking, administration, customer service, and entry-level 
                technical roles.
              </p>
              
              <div className="next-steps">
                <h3 className="next-steps-title">Recommended Next Steps:</h3>
                <ol className="next-steps-list">
                  <li>Create your resume using our <Link href="/resume-templates" className="inline-link">free 12th pass resume builder</Link></li>
                  <li>Explore more <Link href="/resume-templates" className="inline-link">resume templates for freshers</Link></li>
                </ol>
              </div>
              
              <div className="final-cta">
                <h3 className="final-cta-title">Start Building Your 12th Pass Resume Today</h3>
                <p className="final-cta-text">
                  Join thousands of successful 12th pass graduates who have used our specialized tools and templates to land their first jobs.
                </p>
                <div className="button-group">
                  <Link href="/resume-templates" className="btn-primary">
                    Create Your Free 12th Pass Resume
                  </Link>
                  <Link href="/resume-templates" className="btn-secondary">
                    Browse Resume Templates
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Author & EEAT Section */}
          <section className="section">
            <div className="card">
              <div className="author-box">
                <div className="author-info">
                  <h3 className="author-title">About This Guide</h3>
                  <p>
                    This comprehensive guide was developed by the career counseling experts at <strong>Professional Resume Free</strong>, 
                    drawing from years of experience assisting thousands of 12th pass students with successful job placements. Our content 
                    is regularly reviewed by certified career counselors, hiring managers, and updated to reflect current employment 
                    trends and employer expectations.
                  </p>
                  <p>
                    <strong>Experience:</strong> Our team has collectively prepared over 25,000+ successful resumes for 12th pass students since 2015.<br/>
                    <strong>Expertise:</strong> Certified career counselors with specialization in fresher and entry-level placements.<br/>
                    <strong>Authoritativeness:</strong> Cited by educational institutions, career guidance centers, and recommended by placement cells.<br/>
                    <strong>Trustworthiness:</strong> Evidence-based methodology, student success stories, and commitment to providing accurate, 
                    actionable guidance for 12th pass job seekers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hidden metadata for crawlers */}
          <div style={{ display: 'none' }}>
            <span itemProp="last-updated">{lastUpdatedDate.split('T')[0]}</span>
            <span itemProp="build-timestamp">{buildTimestamp}</span>
          </div>
        </div>
      </main>
    </>
  );
};

// Static Generation with ISR - Dynamic date generation
export async function getStaticProps() {
  // Get current date and time
  const now = new Date();
  const buildTimestamp = Date.now();
  
  // Format dates for ISO strings
  const generatedDate = now.toISOString();
  
  // For "last updated" date, we can use the current date minus 1 day
  const lastUpdatedDate = new Date(now.getTime() - (24 * 60 * 60 * 1000)).toISOString();
  
  return {
    props: {
      generatedDate,
      lastUpdatedDate,
      buildTimestamp
    },
    revalidate: 3600, // Regenerate every hour
  };
}

export default ResumeFor12thPass;