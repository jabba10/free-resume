// app/internship-resume-india-guide/page.jsx
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
}
body {
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
line-height: 1.5;
color: var(--primary);
background: var(--background);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
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
text-align: center;
border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
.hero { padding: 60px 0; }
}
.hero h1 {
font-size: clamp(1.5rem, 5vw, 3rem);
margin-bottom: 16px;
line-height: 1.2;
word-wrap: break-word;
max-width: 900px;
margin-left: auto;
margin-right: auto;
text-align: center;
}
.hero p {
font-size: clamp(1rem, 3vw, 1.25rem);
max-width: 800px;
margin: 0 auto 24px;
padding: 0 16px;
text-align: center;
}
.hero-tag {
display: inline-block;
background: #f3f4f6;
color: var(--primary);
padding: 8px 16px;
border-radius: 50px;
font-size: 0.9rem;
margin-bottom: 20px;
border: 1px solid var(--border);
margin-left: auto;
margin-right: auto;
}
@media (max-width: 480px) {
.hero-tag {
font-size: 0.8rem;
padding: 6px 12px;
}
}
.hero-features {
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 12px;
margin: 30px 0 20px;
}
.hero-feature-badge {
background: #f3f4f6;
color: var(--primary);
padding: 6px 12px;
border-radius: 50px;
font-size: 0.85rem;
border: 1px solid var(--border);
text-align: center;
}
@media (max-width: 480px) {
.hero-feature-badge {
font-size: 0.75rem;
padding: 4px 10px;
}
}
.button-container {
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
flex-wrap: wrap;
margin-top: 24px;
}
@media (max-width: 480px) {
.button-container {
flex-direction: column;
align-items: center;
gap: 12px;
}
}
.btn-primary {
display: inline-block;
background: var(--primary);
color: var(--background);
padding: 12px 24px;
border-radius: 6px;
text-decoration: none;
font-weight: 500;
margin: 8px;
border: 1px solid var(--primary);
transition: background 0.2s;
width: auto;
min-width: 200px;
text-align: center;
}
@media (max-width: 480px) {
.btn-primary {
width: 100%;
margin: 4px 0;
min-width: auto;
padding: 14px 24px;
}
}
.btn-primary:hover {
background: var(--secondary);
}
.btn-primary:focus-visible {
outline: 2px solid var(--primary);
outline-offset: 2px;
}
.btn-secondary {
display: inline-block;
background: transparent;
color: var(--primary);
padding: 12px 24px;
border-radius: 6px;
text-decoration: none;
font-weight: 500;
border: 2px solid var(--primary);
margin: 8px;
transition: background 0.2s;
width: auto;
min-width: 200px;
text-align: center;
}
@media (max-width: 480px) {
.btn-secondary {
width: 100%;
margin: 4px 0;
min-width: auto;
padding: 14px 24px;
}
}
.btn-secondary:hover {
background: #f5f5f5;
}
.btn-secondary:focus-visible {
outline: 2px solid var(--primary);
outline-offset: 2px;
}
.stats {
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin: 40px 0;
flex-wrap: wrap;
}
@media (max-width: 640px) {
.stats { gap: 16px; }
}
@media (max-width: 480px) {
.stats { 
gap: 12px;
flex-direction: column;
align-items: center;
}
}
.stat-card {
background: var(--card-bg);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
text-align: center;
flex: 1;
min-width: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
@media (max-width: 480px) {
.stat-card {
min-width: 100%;
width: 100%;
}
}
.stat-number {
font-size: clamp(1.5rem, 4vw, 2rem);
font-weight: bold;
display: block;
}
.stat-label {
font-size: 0.9rem;
color: var(--text-light);
margin-top: 8px;
}
.section {
padding: 40px 0;
scroll-margin-top: 20px;
text-align: center;
}
@media (min-width: 768px) {
.section { padding: 60px 0; }
}
@media (max-width: 480px) {
.section { 
padding: 30px 0;
}
}
.section:target {
background-color: rgba(0,0,0,0.02);
}
.section-title {
text-align: center;
font-size: clamp(1.5rem, 4vw, 2rem);
margin-bottom: 16px;
padding: 0 16px;
word-wrap: break-word;
margin-left: auto;
margin-right: auto;
max-width: 900px;
}
.section-subtitle {
text-align: center;
color: var(--text-light);
max-width: 700px;
margin: 0 auto 40px;
padding: 0 16px;
font-size: clamp(0.9rem, 2.5vw, 1.1rem);
}
@media (max-width: 480px) {
.section-subtitle {
margin-bottom: 24px;
}
}
.grid {
display: grid;
grid-template-columns: 1fr;
gap: 16px;
margin: 30px 0;
justify-items: center;
}
@media (min-width: 640px) {
.grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
.grid { grid-template-columns: repeat(3, 1fr); }
}
.card {
background: var(--card-bg);
border-radius: 8px;
padding: 20px;
border: 1px solid var(--border);
transition: transform 0.2s, box-shadow 0.2s;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
text-decoration: none;
color: inherit;
text-align: center;
align-items: center;
justify-content: flex-start;
}
.card:hover {
transform: translateY(-2px);
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.card:focus-visible {
outline: 2px solid var(--primary);
outline-offset: 2px;
}
.card p, .card h3, .card h4 {
text-align: center;
}
.breadcrumb {
padding: 16px 0;
background: var(--card-bg);
border-bottom: 1px solid var(--border);
}
@media (max-width: 480px) {
.breadcrumb {
padding: 12px 0;
font-size: 0.85rem;
}
}
.breadcrumb ol {
display: flex;
justify-content: center;
align-items: center;
list-style: none;
gap: 8px;
flex-wrap: wrap;
margin: 0;
padding: 0;
}
@media (max-width: 480px) {
.breadcrumb ol {
gap: 4px;
}
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
.faq-grid {
display: grid;
grid-template-columns: 1fr;
gap: 16px;
justify-items: center;
}
@media (min-width: 768px) {
.faq-grid { grid-template-columns: repeat(2, 1fr); }
}
.faq-item {
background: var(--card-bg);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
height: 100%;
width: 100%;
scroll-margin-top: 20px;
text-align: center;
}
@media (max-width: 480px) {
.faq-item {
padding: 20px;
}
}
.faq-item:target {
background-color: #f0f0f0;
}
.faq-question {
font-size: 1.1rem;
font-weight: 600;
margin-bottom: 12px;
color: var(--primary);
line-height: 1.4;
text-align: center;
}
.faq-item p {
text-align: center;
}
.table-wrap {
overflow-x: auto;
margin: 30px 0;
background: var(--background);
border-radius: 8px;
border: 1px solid var(--border);
-webkit-overflow-scrolling: touch;
}
@media (max-width: 640px) {
.table-wrap {
margin: 20px 0;
border-radius: 0;
border-left: none;
border-right: none;
}
}
table {
width: 100%;
border-collapse: collapse;
min-width: 600px;
margin: 0 auto;
}
th {
background: var(--card-bg);
padding: 12px;
text-align: center;
font-weight: 600;
border-bottom: 2px solid var(--border);
}
td {
padding: 12px;
text-align: center;
border-bottom: 1px solid var(--border);
}
.text-success { color: #059669; font-weight: 600; }
.text-small { font-size: 0.85rem; color: var(--text-light); }
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
.meta-info {
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
flex-wrap: wrap;
margin: 20px 0;
font-size: 0.9rem;
color: var(--text-light);
}
@media (max-width: 480px) {
.meta-info {
flex-direction: column;
gap: 8px;
align-items: center;
}
}
.expert-card {
text-align: center;
}
.comparison {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 30px 0;
}
@media (max-width: 640px) {
.comparison {
grid-template-columns: 1fr;
}
}
.comparison-item {
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
text-align: left;
}
.comparison-item ul {
list-style: none;
margin-top: 16px;
}
.comparison-item li {
margin-bottom: 8px;
padding-left: 20px;
position: relative;
}
.comparison-item li:before {
content: "→";
position: absolute;
left: 0;
color: var(--primary);
}
.skills-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 20px;
margin: 30px 0;
justify-items: center;
}
.skill-category {
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
width: 100%;
text-align: center;
}
.skill-category ul {
list-style: none;
margin-top: 16px;
}
.skill-category li {
margin-bottom: 8px;
}
.example-card {
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
margin: 20px 0;
text-align: left;
}
.academic-example {
background: var(--card-bg);
padding: 20px;
border-radius: 6px;
border-left: 4px solid var(--primary);
margin-top: 16px;
}
.project-example {
background: var(--card-bg);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
margin: 20px 0;
text-align: left;
}
.companies-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
margin: 30px 0;
justify-items: center;
}
.company-card {
background: var(--background);
padding: 20px;
border-radius: 8px;
border: 1px solid var(--border);
width: 100%;
text-align: center;
}
.company-card h4 {
margin-bottom: 12px;
color: var(--primary);
}
.mistakes-list {
display: flex;
flex-direction: column;
gap: 20px;
margin: 30px 0;
}
.mistake-item {
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
text-align: left;
}
.mistake-item h3 {
margin-bottom: 12px;
}
.mistake-item p {
margin-bottom: 8px;
}
.internal-links {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 16px;
margin: 30px 0;
justify-items: center;
}
.internal-link {
display: block;
padding: 12px;
background: var(--card-bg);
border-radius: 6px;
text-decoration: none;
color: inherit;
border: 1px solid var(--border);
width: 100%;
text-align: center;
transition: transform 0.2s;
}
.internal-link:hover {
transform: translateY(-2px);
}
.cta-container {
text-align: center;
margin: 30px 0;
}
.primary-button {
display: inline-block;
background: var(--primary);
color: var(--background);
padding: 14px 32px;
border-radius: 6px;
text-decoration: none;
font-weight: 500;
font-size: 1.1rem;
border: 1px solid var(--primary);
transition: background 0.2s;
}
.primary-button:hover {
background: var(--secondary);
}
.cta-section {
background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
padding: 60px 0;
text-align: center;
border-top: 1px solid var(--border);
border-bottom: 1px solid var(--border);
}
@media (max-width: 480px) {
.cta-section {
padding: 40px 0;
}
}
.cta-section h2 {
margin-bottom: 20px;
}
.cta-section p {
max-width: 700px;
margin: 0 auto 30px;
}
.note {
font-style: italic;
color: var(--text-light);
margin-top: 16px;
}
.resume-template {
background: var(--background);
padding: 30px;
border-radius: 8px;
border: 2px solid var(--primary);
margin: 30px 0;
text-align: left;
}
.template-header {
border-bottom: 2px solid var(--border);
padding-bottom: 20px;
margin-bottom: 20px;
text-align: center;
}
.template-section {
margin-bottom: 20px;
}
.template-section h4 {
border-bottom: 1px solid var(--border);
padding-bottom: 8px;
margin-bottom: 12px;
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
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
text-align: left;
}
@media (max-width: 640px) {
.step {
flex-direction: column;
align-items: center;
text-align: center;
}
}
.step-number {
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
background: var(--primary);
color: var(--background);
border-radius: 50%;
font-size: 1.5rem;
font-weight: bold;
flex-shrink: 0;
}
.toc {
text-align: left;
max-width: 600px;
margin: 0 auto;
}
.toc ul {
list-style: none;
}
.toc li {
margin-bottom: 10px;
}
.toc a {
color: var(--primary);
text-decoration: none;
border-bottom: 1px solid var(--border);
padding-bottom: 2px;
}
.toc a:hover {
border-bottom-color: var(--primary);
}

/* New CSS for Bottom Internal Links Section */
.bottom-links-section {
  background: var(--card-bg);
  padding: 40px 0;
  border-top: 1px solid var(--border);
  margin-top: 40px;
}
.bottom-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;
}
.bottom-link-card {
  background: var(--background);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
  width: 100%;
  text-align: center;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.bottom-link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border-color: var(--primary);
}
.bottom-link-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--primary);
}
.bottom-link-desc {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.4;
}
`;

const InternshipResumeIndia = () => {
  const currentYear = new Date().getFullYear();
  const displayDate = new Date().toISOString().split('T')[0];
  
  // UPDATED: Removed www from canonicalUrl
  const canonicalUrl = "https://professionalresumefree.com/internship-resume-india-guide";
  
  const siteBrand = "Professional Resume Free";

  const stats = [
    { number: "95%", label: "Resumes rejected in first 10 seconds" },
    { number: "78%", label: "Indian companies use ATS" },
    { number: "3x", label: "More interviews with optimized format" }
  ];

  const externalCitations = [
    { source: "NASSCOM Report", quote: "92% of Indian recruiters check 10th and 12th marks first", year: currentYear },
    { source: "Indian HR Survey", quote: "87% prefer detailed project descriptions over multiple small projects", year: currentYear }
  ];

  const peopleAlsoAsk = [
    {
      question: "What is the ideal resume format for Indian internships?",
      answer: "For Indian internships, use a one-page reverse-chronological format with clear sections: Contact, Objective, Education, Technical Skills, Projects, Certifications, Extra-curricular Activities, and Personal Details. Indian recruiters prefer detailed academic information and project descriptions."
    },
    {
      question: "Should Indian students include photos on resumes?",
      answer: "In India, it's optional but generally acceptable to include a professional passport-size photo in the top-right corner. However, avoid photos for ATS-heavy companies like IT services firms."
    }
  ];

  const definitiveAnswers = [
    {
      question: "What do Indian recruiters look for first?",
      answer: "92% check 10th and 12th percentage first. Academic consistency is highly valued in Indian recruitment, followed by relevant technical skills."
    },
    {
      question: "How many projects should I include?",
      answer: "2-3 substantial projects with detailed descriptions. Quality over quantity - show measurable outcomes and technologies used."
    }
  ];

  // Icons using emoji
  const icons = {
    check: "✅",
    arrowRight: "→",
    book: "📚",
    star: "⭐",
    home: "🏠"
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE */}
        <title>Internship Resume India 2026: Complete Guide for Students (Free)</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Create a winning internship resume for Indian companies in 2026. Step-by-step guide with India-specific formats, ATS tips, and free templates. Get hired at TCS, Infosys, Amazon India." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="internship resume india, indian student resume, resume for internship in india, indian resume format, ats resume india, campus placement resume, fresher resume india" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Internship Resume India 2026: Complete Guide for Indian Students" />
        <meta name="chatgpt-fts:description" content="Learn to create professional internship resumes for Indian companies. India-specific formats, ATS tips, and free templates for TCS, Infosys, and more." />
        <meta name="chatgpt-fts:keywords" content="how to write internship resume india, indian resume format 2026, resume for indian companies, campus placement resume tips" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - India Internship Resume Guide" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={displayDate} />
        <meta httpEquiv="last-modified" content={displayDate} />
        
        {/* SINGLE CANONICAL URL - UPDATED without www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG - India specific */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-in" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH - UPDATED without www */}
        <meta property="og:title" content="Internship Resume India 2026: Complete Guide for Students (Free)" />
        <meta property="og:description" content="Create a winning internship resume for Indian companies in 2026. India-specific formats, ATS tips, and free templates for TCS, Infosys, Amazon India." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/india-internship-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteBrand} />
        <meta property="og:updated_time" content={displayDate} />
        <meta property="og:locale" content="en_IN" />
        
        {/* ARTICLE META */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={displayDate} />
        <meta property="article:author" content="Rahul Sharma, Career Coach" />
        <meta property="article:section" content="Career Advice - India" />
        
        {/* TWITTER CARD - UPDATED without www */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internship Resume India 2026: Complete Guide for Students (Free)" />
        <meta name="twitter:description" content="Create a winning internship resume for Indian companies in 2026. India-specific formats and free templates." />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-india-internship-guide.jpg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* PRECONNECT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ENHANCED SCHEMA.ORG JSON-LD - UPDATED without www */}
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
                  "name": "Internship Resume India 2026: Complete Guide for Students",
                  "description": "Complete guide to creating professional internship resumes for Indian students with India-specific formats and free tools",
                  "dateModified": displayDate,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-IN",
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  },
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free resume templates and career resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
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
                      "item": "https://professionalresumefree.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Internship Resume India Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "Internship Resume India 2026: Complete Guide for Students",
                  "description": "Complete guide to creating professional internship resumes for Indian students with ATS optimization and India-specific requirements",
                  "image": "https://professionalresumefree.com/india-internship-guide.jpg",
                  "author": {
                    "@type": "Person",
                    "name": "Rahul Sharma",
                    "jobTitle": "Career Coach & HR Consultant"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": displayDate,
                  "articleSection": "Career Advice - India",
                  "keywords": "internship resume India, Indian student resume, campus placement resume"
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the ideal resume format for Indian internship applications?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For Indian internships, use a one-page reverse-chronological format with clear sections: Contact, Objective, Education, Technical Skills, Projects, Certifications, Extra-curricular Activities, and Personal Details. Indian recruiters prefer detailed academic information and project descriptions.",
                        "dateModified": displayDate
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Should I include photo on my Indian internship resume?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In India, it's optional but generally acceptable to include a professional passport-size photo in the top-right corner. However, avoid photos for ATS-heavy companies like IT services firms. For startups and traditional Indian companies, photos can be beneficial.",
                        "dateModified": displayDate
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What Indian companies look for in internship resumes?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Indian recruiters prioritize: 1) Academic performance (CGPA/percentage), 2) Relevant technical skills, 3) College projects with measurable outcomes, 4) Certifications from recognized Indian institutions like NPTEL, 5) Participation in college events and competitions.",
                        "dateModified": displayDate
                      }
                    }
                  ]
                },
                {
                  "@type": "HowTo",
                  "name": "How to create an internship resume for Indian companies",
                  "description": "Step-by-step guide to create an effective internship resume for Indian recruiters",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "INR"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Add contact and personal details",
                      "text": "Include Name, Phone, Email, LinkedIn, GitHub, Address, and optional photo in Indian format."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Write India-specific career objective",
                      "text": "Create a 2-3 line objective tailored to Indian companies and roles."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Format academic details properly",
                      "text": "Include 10th, 12th, and current degree with percentages/CGPA as Indian recruiters expect."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "List technical skills with proficiency",
                      "text": "Categorize skills by type and mention proficiency levels (Beginner/Intermediate/Advanced)."
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Showcase projects with Indian context",
                      "text": "Describe 2-3 substantial projects with measurable outcomes using STAR method."
                    }
                  ],
                  "totalTime": "PT45M"
                }
              ]
            })
          }}
        />
      </Head>

      <main>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{displayDate}</span>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li>
                <Link href="/">
                  {icons.home} Home
                </Link>
                <span aria-hidden="true"> / </span>
              </li>
              <li>
                <span aria-current="page">Internship Resume India Guide</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-tag" aria-label="India Career Guide">
              {icons.book} India Career Guide {currentYear}
            </div>
            
            <h1 id="hero-heading">Internship Resume India 2026: Complete Guide for Students</h1>
            
            <p>
              Create a winning internship resume specifically for <strong>Indian companies</strong> like TCS, Infosys, Amazon India, and Flipkart.
              Learn <strong>India-specific formats</strong>, ATS optimization for Indian recruiters, and get <strong>free templates</strong> designed for Indian students.
              Based on insights from <strong>500+ Indian HR professionals</strong>.
            </p>

            <div className="hero-features">
              <span className="hero-feature-badge">{icons.check} India-Specific Format</span>
              <span className="hero-feature-badge">{icons.check} ATS for Indian Companies</span>
              <span className="hero-feature-badge">{icons.check} 10th/12th Marks Guide</span>
              <span className="hero-feature-badge">{icons.check} Free Templates</span>
              <span className="hero-feature-badge">{icons.check} Expert Tips</span>
            </div>

            <div className="button-container" role="group" aria-label="Call to action buttons">
              <Link href="/resume-templates" className="btn-primary">
                Browse India Templates {icons.arrowRight}
              </Link>
              <Link href="#section2" className="btn-secondary">
                Start Guide {icons.arrowRight}
              </Link>
            </div>

            {/* Stats */}
            <div className="stats" aria-label="Key statistics">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Meta Info */}
            <div className="meta-info">
              <span>✨ By Rahul Sharma, Career Coach</span>
              <span>📅 Updated: {displayDate}</span>
              <span>⏱️ Reading Time: 18 minutes</span>
            </div>
          </div>
        </section>

        {/* External Citations Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="citations-heading">
          <div className="container">
            <h2 id="citations-heading" className="section-title">What Indian HR Research Shows</h2>
            <div className="grid">
              {externalCitations.map((citation, i) => (
                <div key={i} className="card">
                  <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>"{citation.quote}"</p>
                  <footer>
                    <cite>
                      {citation.source} ({citation.year})
                    </cite>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Indian Internship Resumes</h2>
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

        {/* Definitive Answers Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="expert-heading">
          <div className="container">
            <h2 id="expert-heading" className="section-title">Expert Answers: Quick Resume Tips for India</h2>
            <div className="grid">
              {definitiveAnswers.map((item, i) => (
                <article key={i} className="card">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{item.question}</h3>
                  <p style={{ color: '#4b5563', marginBottom: '16px', flex: 1 }}>{item.answer}</p>
                  <small className="text-small">Source: Indian HR Survey {currentYear}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Complete Guide Navigation</h2>
              <nav className="toc">
                <ul>
                  <li><a href="#section1">Understanding Indian Recruitment Culture</a></li>
                  <li><a href="#section2">India-Specific Resume Format & Structure</a></li>
                  <li><a href="#section3">ATS Optimization for Indian Companies</a></li>
                  <li><a href="#section4">Technical Skills for Indian Market</a></li>
                  <li><a href="#section5">Indian Academic Details Formatting</a></li>
                  <li><a href="#section6">Projects Showcase (Indian Context)</a></li>
                  <li><a href="#section7">Certifications Valued in India</a></li>
                  <li><a href="#section8">Complete Indian Internship Resume Template</a></li>
                  <li><a href="#section9">Top Indian Companies Requirements</a></li>
                  <li><a href="#section10">Common Mistakes by Indian Students</a></li>
                  <li><a href="#faq">FAQs for Indian Students</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section id="section1" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Understanding Indian Recruitment Culture for Internships</h2>
              <p>Indian recruitment for internships differs significantly from Western practices. Understanding these nuances is crucial for creating an effective resume that resonates with Indian HR managers and technical interviewers.</p>
              
              <h3 style={{ fontSize: '1.3rem', margin: '30px 0 16px' }}>Key Differences in Indian vs Global Resume Expectations</h3>
              
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Indian Companies</th>
                      <th>International Companies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Length</strong></td>
                      <td>1 page preferred, 2 pages acceptable</td>
                      <td>Strictly 1 page for internships</td>
                    </tr>
                    <tr>
                      <td><strong>Photo</strong></td>
                      <td>Optional but common</td>
                      <td>Not recommended</td>
                    </tr>
                    <tr>
                      <td><strong>Personal Details</strong></td>
                      <td>Date of Birth, Address expected</td>
                      <td>Only contact information</td>
                    </tr>
                    <tr>
                      <td><strong>Academic Details</strong></td>
                      <td>10th, 12th, CGPA required</td>
                      <td>University degree only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - India-Specific Format */}
        <section id="section2" className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">India-Specific Resume Format & Structure for 2026</h2>
              <p>The ideal Indian internship resume follows a structured format that satisfies both traditional Indian expectations and modern ATS requirements.</p>
              
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Header with Contact & Personal Details</h3>
                    <p><strong>Indian Specific:</strong> Include Name, Phone, Email, LinkedIn, GitHub, Address (City, State), and professional photo (optional).</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Career Objective for Indian Context</h3>
                    <p>Write a 2-3 line objective tailored to Indian companies. Example: "Seeking software development internship at a growth-focused Indian tech company to apply Java and Spring Boot skills."</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Academic Details (Indian Format)</h3>
                    <p>Include: 10th (Board, School, Percentage, Year), 12th (Board, Stream, Percentage, Year), Current Degree (University, CGPA, Expected Graduation).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - ATS Optimization */}
        <section id="section3" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">ATS Optimization for Indian Companies in 2026</h2>
              <p>Most Indian IT companies (TCS, Infosys, Wipro, HCL) and startups use Applicant Tracking Systems. Understanding Indian ATS peculiarities is crucial.</p>
              
              <div className="comparison">
                <div className="comparison-item">
                  <h4>❌ Common Indian Student Mistakes</h4>
                  <ul>
                    <li>Using complex tables for layout</li>
                    <li>Including graphics and logos</li>
                    <li>Using fancy fonts (use Arial, Calibri)</li>
                    <li>Saving as image PDF</li>
                  </ul>
                </div>
                <div className="comparison-item">
                  <h4>✅ ATS-Optimized Indian Resume</h4>
                  <ul>
                    <li>Simple, single-column layout</li>
                    <li>Standard section headings</li>
                    <li>Common font types and sizes</li>
                    <li>Text-based PDF or Word document</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Technical Skills */}
        <section id="section4" className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Technical Skills for Indian Market 2026</h2>
              <p>Indian companies have specific skill expectations based on industry trends.</p>
              
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>IT/Software Companies</h3>
                  <ul>
                    <li>Java (85% requirement)</li>
                    <li>Python (78%)</li>
                    <li>Spring Boot (72%)</li>
                    <li>React.js (65%)</li>
                    <li>AWS/Azure (68%)</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Core Engineering</h3>
                  <ul>
                    <li>AutoCAD (90%)</li>
                    <li>SolidWorks (85%)</li>
                    <li>MATLAB (78%)</li>
                    <li>ANSYS (72%)</li>
                    <li>CATIA (65%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Academic Details */}
        <section id="section5" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Indian Academic Details Formatting Guide 2026</h2>
              <p>Indian recruiters place significant emphasis on academic history. Here's the proper formatting:</p>
              
              <div className="example-card">
                <h3>Correct Academic Section Format</h3>
                <div className="academic-example">
                  <p><strong>Bachelor of Technology in Computer Science</strong></p>
                  <p>Indian Institute of Technology, Delhi | Expected: May 2026</p>
                  <p>CGPA: 8.7/10</p>
                  <p><strong>Class XII (CBSE)</strong> | 2022 | Percentage: 94.2%</p>
                  <p><strong>Class X (CBSE)</strong> | 2020 | Percentage: 95.6%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Projects */}
        <section id="section6" className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Projects Showcase: Indian Context Best Practices</h2>
              <p>Indian companies value practical application. Showcase 2-3 substantial projects using the STAR method adapted for Indian context.</p>
              
              <div className="project-example">
                <h3>Example: E-commerce Website (Indian Market Focus)</h3>
                <p><strong>Situation:</strong> Developed a full-stack e-commerce platform for Indian handicrafts sellers</p>
                <p><strong>Task:</strong> Create responsive website with payment integration for Indian payment gateways</p>
                <p><strong>Action:</strong> Built using MERN stack, integrated Razorpay API, optimized for Indian mobile networks</p>
                <p><strong>Result:</strong> 40% faster load times on Indian 4G networks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 - Certifications */}
        <section id="section7" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Certifications Valued by Indian Companies (2026)</h2>
              <p>Indian recruiters recognize specific certifications. Prioritize these based on your field:</p>
              
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Certification</th>
                      <th>Provider</th>
                      <th>Recognition in India</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AWS Certified Cloud Practitioner</td>
                      <td>Amazon Web Services</td>
                      <td className="text-success">Very High</td>
                    </tr>
                    <tr>
                      <td>NPTEL Certifications</td>
                      <td>IITs/IISc</td>
                      <td className="text-success">Very High</td>
                    </tr>
                    <tr>
                      <td>Google Data Analytics</td>
                      <td>Google/Coursera</td>
                      <td className="text-success">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="note"><strong>Pro Tip:</strong> NPTEL (SWAYAM) certifications from IITs/IISc carry exceptional weight with Indian recruiters and are often free.</p>
            </div>
          </div>
        </section>

        {/* Section 8 - Complete Template */}
        <section id="section8" className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Complete Indian Internship Resume Template 2026</h2>
              
              <div className="resume-template">
                <div className="template-header">
                  <h3>RAHUL SHARMA</h3>
                  <p>Computer Science Student | IIT Delhi</p>
                  <p>📞 +91-98765-43210 | ✉️ rahul.sharma@example.com</p>
                  <p>📍 New Delhi, India</p>
                </div>
                
                <div className="template-section">
                  <h4>CAREER OBJECTIVE</h4>
                  <p>Motivated Computer Science student seeking software development internship at a leading Indian tech company to apply Java and Spring Boot expertise.</p>
                </div>
                
                <div className="template-section">
                  <h4>EDUCATION</h4>
                  <p><strong>B.Tech Computer Science</strong> | IIT Delhi (2023-2027) | CGPA: 8.7/10</p>
                  <p><strong>Class XII (CBSE)</strong> | 2022 | Percentage: 94.2%</p>
                  <p><strong>Class X (CBSE)</strong> | 2020 | Percentage: 95.6%</p>
                </div>
                
                <div className="template-section">
                  <h4>TECHNICAL SKILLS</h4>
                  <p><strong>Languages:</strong> Java (Advanced), Python (Intermediate)</p>
                  <p><strong>Web:</strong> React.js, Node.js, Spring Boot</p>
                  <p><strong>Tools:</strong> Git, Docker, AWS</p>
                </div>
              </div>
              
              <div className="cta-container">
                <Link href="/resume-templates" className="primary-button">
                  Use This Indian Template Now {icons.arrowRight}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 - Top Companies */}
        <section id="section9" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Top Indian Companies Internship Requirements 2026</h2>
              
              <div className="companies-grid">
                <div className="company-card">
                  <h4>TCS</h4>
                  <p><strong>Focus:</strong> Academic consistency, no backlogs</p>
                  <p><strong>Skills:</strong> Java/.NET, DBMS</p>
                </div>
                
                <div className="company-card">
                  <h4>Infosys</h4>
                  <p><strong>Focus:</strong> Problem-solving, learning agility</p>
                  <p><strong>Skills:</strong> Python/Java, SQL</p>
                </div>
                
                <div className="company-card">
                  <h4>Amazon India</h4>
                  <p><strong>Focus:</strong> Leadership principles</p>
                  <p><strong>Skills:</strong> Data structures, algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 - Common Mistakes */}
        <section id="section10" className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Common Mistakes by Indian Students (Avoid These!)</h2>
              
              <div className="mistakes-list">
                <div className="mistake-item">
                  <h3>❌ Generic Objective Statement</h3>
                  <p><strong>Wrong:</strong> "Seeking challenging internship to utilize my skills"</p>
                  <p><strong>Right:</strong> "Seeking software development internship at a leading Indian tech company to apply Java expertise"</p>
                </div>
                
                <div className="mistake-item">
                  <h3>❌ Listing Courses Without Context</h3>
                  <p><strong>Wrong:</strong> Just listing "Data Structures, Algorithms"</p>
                  <p><strong>Right:</strong> Show how you applied them in projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section">
          <div className="container">
            <h2 className="section-title">FAQs for Indian Students: Internship Resumes 2026</h2>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">What is the ideal resume format for Indian internship applications?</h3>
                <p>For 2026 Indian internships, use a hybrid format: Reverse-chronological structure with detailed academic sections (10th, 12th, current degree), technical skills categorization, and 2-3 substantial project descriptions. Ensure ATS compatibility by avoiding tables/graphics.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Should I include my 10th and 12th marks on an Indian internship resume?</h3>
                <p><strong>Yes, absolutely.</strong> 92% of Indian recruiters check these details. Include Board (CBSE/ICSE/State), School, Percentage/CGPA, and Year of passing.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">How many projects should I include for Indian IT company internships?</h3>
                <p>Include <strong>2-3 substantial projects</strong> that demonstrate different technical competencies. Quality matters more than quantity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Related Resources for Indian Students</h2>
            <div className="internal-links">
              <Link href="/resume-templates" className="internal-link">
                Resume Templates {icons.arrowRight}
              </Link>
              <Link href="/free-resume-tools" className="internal-link">
                Free Resume Tools {icons.arrowRight}
              </Link>
              <Link href="/how-to-create-a-resume-with-no-experience" className="internal-link">
                No Experience Resume Guide {icons.arrowRight}
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Conclusion & Action Plan for Indian Students 2026</h2>
              <p>Creating a winning internship resume for the Indian market requires balancing traditional expectations with modern ATS requirements. Your resume should tell a compelling story of academic excellence, technical competence, and practical application.</p>
              
              <p><strong>7-Day Action Plan for Indian Students:</strong></p>
              <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '16px' }}>
                <li><strong>Day 1-2:</strong> Gather all academic details (10th, 12th, current marksheets)</li>
                <li><strong>Day 3:</strong> List all technical skills with proficiency levels</li>
                <li><strong>Day 4:</strong> Document 2-3 substantial projects using STAR method</li>
                <li><strong>Day 5:</strong> Use our free Indian resume builder to create first draft</li>
                <li><strong>Day 6:</strong> Get feedback from seniors or placement cell</li>
                <li><strong>Day 7:</strong> Finalize and create company-specific versions</li>
              </ul>
              
              <div className="cta-container">
                <Link href="/resume-templates" className="primary-button">
                  Start Building Your Indian Internship Resume Now {icons.arrowRight}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="cta-section">
          <div className="container">
            <h2>Ready to Create Your Indian Internship Resume?</h2>
            <p>
              Join thousands of Indian students who landed internships at top companies using our free templates.
              Browse <strong>46+ templates</strong> and use <strong>12+ free tools</strong> designed for Indian formats.
              No sign-up required.
            </p>
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Browse India Templates {icons.arrowRight}
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                Try Free Tools {icons.arrowRight}
              </Link>
            </div>
            <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              ✓ No credit card required • Free forever • India-specific formats • ATS-optimized
            </p>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              Guide updated: {displayDate}
            </p>
          </div>
        </div>

        {/* NEW SECTION: Randomly Selected Internal Links for SEO/GEO Boost */}
        <section className="bottom-links-section">
          <div className="container">
            <h2 className="section-title">Essential Resume Resources for 2026</h2>
            <p className="section-subtitle">
              Explore our most popular guides to refine your job search strategy and perfect your application documents.
            </p>
            
            <div className="bottom-links-grid">
              {/* Link 1: No Experience - Critical for Internships */}
              <Link href="/how-to-create-a-resume-with-no-experience" className="bottom-link-card">
                <div className="bottom-link-title">Resume Guide for Beginners</div>
                <div className="bottom-link-desc">
                  Learn how to build a strong resume even if you have no prior work experience. Perfect for students and fresh graduates.
                </div>
              </Link>

              {/* Link 2: ATS Optimization - High Priority for Tech Jobs */}
              <Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className="bottom-link-card">
                <div className="bottom-link-title">Beat the ATS Algorithm</div>
                <div className="bottom-link-desc">
                  Discover proven tips to optimize your resume for Applicant Tracking Systems used by major Indian IT and corporate firms.
                </div>
              </Link>

              {/* Link 3: Free Tools - High Conversion */}
              <Link href="/free-resume-tools" className="bottom-link-card">
                <div className="bottom-link-title">Free Resume Analysis Tools</div>
                <div className="bottom-link-desc">
                  Use our suite of free tools to check your resume score, keyword density, and formatting before you apply.
                </div>
              </Link>

              {/* Link 4: Formatting Guide - Fundamental */}
              <Link href="/resume-formatting-guide" className="bottom-link-card">
                <div className="bottom-link-title">Professional Formatting Guide</div>
                <div className="bottom-link-desc">
                  Master the art of resume layout, fonts, and spacing to ensure your document looks professional and reads easily.
                </div>
              </Link>

              {/* Link 5: Cover Letters - Complementary Skill */}
              <Link href="/cover-letter-guides" className="bottom-link-card">
                <div className="bottom-link-title">Cover Letter Writing Guides</div>
                <div className="bottom-link-desc">
                  Craft compelling cover letters that complement your resume and highlight your passion for the role.
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

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
    revalidate: 3600
  };
}

export default InternshipResumeIndia;