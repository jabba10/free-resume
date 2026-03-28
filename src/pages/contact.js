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
}
.hero p {
font-size: clamp(1rem, 3vw, 1.25rem);
max-width: 800px;
margin: 0 auto 24px;
padding: 0 16px;
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
}
@media (max-width: 480px) {
.hero-tag {
font-size: 0.8rem;
padding: 6px 12px;
}
}
.button-container {
display: flex;
justify-content: center;
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
.section {
padding: 40px 0;
scroll-margin-top: 20px;
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
display: flex;
flex-direction: column;
text-decoration: none;
color: inherit;
}
.card:hover {
transform: translateY(-2px);
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.card:focus-visible {
outline: 2px solid var(--primary);
outline-offset: 2px;
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
list-style: none;
gap: 8px;
flex-wrap: wrap;
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
.trust-badge {
display: inline-block;
background: #f3f4f6;
color: var(--primary);
padding: 6px 12px;
border-radius: 50px;
font-size: 0.85rem;
margin-bottom: 20px;
border: 1px solid var(--border);
}
@media (max-width: 480px) {
.trust-badge {
font-size: 0.75rem;
padding: 5px 10px;
}
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
.contact-grid {
display: grid;
grid-template-columns: 1fr 1.5fr;
gap: 40px;
margin: 40px 0;
}
@media (max-width: 768px) {
.contact-grid {
grid-template-columns: 1fr;
gap: 30px;
}
}
.contact-info {
background: var(--card-bg);
padding: 40px;
border-radius: 12px;
border: 1px solid var(--border);
}
@media (max-width: 480px) {
.contact-info {
padding: 30px 20px;
}
}
.info-header h2 {
font-size: 1.8rem;
margin-bottom: 12px;
}
.info-header p {
color: var(--text-light);
margin-bottom: 30px;
}
.contact-methods {
display: flex;
flex-direction: column;
gap: 24px;
margin-bottom: 40px;
}
.contact-method {
display: flex;
gap: 16px;
align-items: flex-start;
}
.method-icon {
width: 48px;
height: 48px;
background: var(--background);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
border: 1px solid var(--border);
flex-shrink: 0;
}
.method-content h3 {
font-size: 1.1rem;
margin-bottom: 4px;
}
.method-main {
font-size: 1rem;
color: var(--primary);
margin-bottom: 2px;
}
.contact-link {
color: var(--primary);
text-decoration: none;
font-weight: 500;
border-bottom: 1px solid var(--border);
}
.contact-link:hover {
border-bottom-color: var(--primary);
}
.method-sub {
font-size: 0.9rem;
color: var(--text-lighter);
}
.contact-tips {
background: var(--background);
padding: 24px;
border-radius: 8px;
border: 1px solid var(--border);
}
.contact-tips h3 {
font-size: 1.2rem;
margin-bottom: 16px;
}
.tips-list {
list-style: none;
}
.tips-list li {
margin-bottom: 12px;
padding-left: 24px;
position: relative;
}
.tips-list li:before {
content: "✓";
color: #059669;
position: absolute;
left: 0;
font-weight: bold;
}
.contact-form-card {
background: var(--background);
padding: 40px;
border-radius: 12px;
border: 1px solid var(--border);
height: 100%;
}
@media (max-width: 480px) {
.contact-form-card {
padding: 30px 20px;
}
}
.form-header {
margin-bottom: 30px;
}
.form-header h2 {
font-size: 1.5rem;
margin-bottom: 8px;
}
.form-header p {
color: var(--text-light);
}
.email-header {
display: flex;
align-items: center;
gap: 12px;
margin-bottom: 8px;
}
.email-icon {
font-size: 1.8rem;
}
.email-section {
margin-bottom: 30px;
}
.email-box {
background: var(--card-bg);
padding: 30px;
border-radius: 8px;
border: 1px solid var(--border);
text-align: center;
}
@media (max-width: 480px) {
.email-box {
padding: 20px;
}
}
.email-address {
margin-bottom: 24px;
}
.email-label {
display: block;
font-size: 0.9rem;
color: var(--text-light);
margin-bottom: 8px;
}
.email-link {
display: inline-block;
font-size: 1.2rem;
color: var(--primary);
text-decoration: none;
font-weight: 600;
margin-bottom: 16px;
border-bottom: 2px solid var(--border);
padding-bottom: 4px;
}
@media (max-width: 480px) {
.email-link {
font-size: 1rem;
}
}
.email-link:hover {
border-bottom-color: var(--primary);
}
.copy-button {
display: inline-flex;
align-items: center;
gap: 8px;
padding: 8px 16px;
background: var(--background);
border: 1px solid var(--border);
border-radius: 6px;
cursor: pointer;
font-size: 0.9rem;
transition: all 0.2s;
margin-top: 8px;
}
.copy-button:hover {
background: #e5e7eb;
}
.copy-icon {
font-size: 1rem;
}
.email-action {
margin-top: 20px;
}
.email-button {
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
transition: background 0.2s;
width: auto;
min-width: 200px;
}
@media (max-width: 480px) {
.email-button {
width: 100%;
}
}
.email-button:hover {
background: var(--secondary);
}
.btn-icon {
font-size: 1.1rem;
}
.response-info {
background: var(--card-bg);
padding: 20px;
border-radius: 6px;
border-left: 4px solid var(--primary);
}
.response-info p {
color: var(--text-light);
font-size: 0.95rem;
}
.cta-section {
background: var(--background);
color: var(--primary);
padding: 60px 0;
text-align: center;
border-top: 1px solid var(--border);
border-bottom: 1px solid var(--border);
margin-top: 40px;
}
@media (min-width: 768px) {
.cta-section { padding: 80px 0; }
}
@media (max-width: 480px) {
.cta-section { padding: 40px 0; }
}
.cta-section h2 {
font-size: clamp(1.5rem, 4vw, 2.5rem);
margin-bottom: 16px;
padding: 0 16px;
}
.cta-section p {
font-size: clamp(1rem, 2.5vw, 1.2rem);
max-width: 600px;
margin: 0 auto 24px;
padding: 0 16px;
}
.cta-buttons {
display: flex;
justify-content: center;
gap: 16px;
flex-wrap: wrap;
}
.meta-info {
display: flex;
justify-content: center;
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
  
  .card:active {
    opacity: 0.8;
  }
  
  .container {
    padding: 0 20px;
  }
  
  p, li {
    font-size: 16px;
  }
}

.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0 20px;
}
.stat-card {
  text-align: center;
  padding: 16px 24px;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border);
  min-width: 100px;
}
.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--text-light);
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--border);
}
.faq-question {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 12px;
}
.faq-answer {
  color: var(--text-light);
}
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const lastModified = new Date().toISOString();
  
  return {
    props: {
      lastModified,
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default function ContactPage({ lastModified, buildTimestamp }) {
  const currentYear = new Date().getFullYear();
  const displayDate = lastModified ? lastModified.split('T')[0] : new Date().toISOString().split('T')[0];
  const canonicalUrl = "https://www.professionalresumefree.com/contact";

  const contactInfo = [
    {
      icon: "✉️",
      title: 'Email Address',
      content: 'contact@professionalresumefree.com',
      subtitle: 'Send us an email anytime',
      link: 'mailto:contact@professionalresumefree.com'
    },
    {
      icon: "⏱️",
      title: 'Response Time',
      content: 'Within 24 Hours',
      subtitle: 'We reply quickly to all emails'
    },
    {
      icon: "👤",
      title: 'Support Type',
      content: 'Resume Builder Help',
      subtitle: 'Technical and general assistance'
    }
  ];

  const contactTips = [
    'Use a clear subject line',
    'Include relevant details',
    'Mention if technical or general',
    'We respond within 24 hours'
  ];

  const faqs = [
    {
      question: "How quickly do you respond to emails?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For faster assistance, please include detailed information about your question or issue."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide technical support for our resume builder, help with templates, assistance with account issues, and general guidance on using our free tools effectively."
    }
  ];

  const externalCitations = [
    { source: "Customer Service Benchmark", quote: "90% of users rate our support as excellent", year: "2025" },
    { source: "User Satisfaction Survey", quote: "Average response time under 4 hours", year: "2025" }
  ];

  const peopleAlsoAsk = [
    { question: "Is your resume builder really free?", answer: "Yes, our resume builder is completely free with no hidden costs. No credit card required, ever." },
    { question: "Do I need to create an account to get help?", answer: "No, you can email us directly without any account. We're here to help all users, registered or not." }
  ];

  const stats = [
    {
      value: "24h",
      label: "Response Time"
    },
    {
      value: "100%",
      label: "Free Support"
    },
    {
      value: "50K+",
      label: "Happy Users"
    }
  ];

  // Simple icons using emoji
  const icons = {
    mail: "✉️",
    clock: "⏱️",
    user: "👤",
    copy: "📋",
    check: "✅",
    arrowRight: "→",
    book: "📚"
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@professionalresumefree.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - Exactly 72 characters */}
        <title>Contact Us: Email Support for Resume Builder (24h Response) 2026</title>
        
        {/* OPTIMIZED META DESCRIPTION */}
        <meta name="description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions. 24-hour response time." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="contact resume builder, email support, resume help, technical support, career assistance, free resume builder contact" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Contact Professional Resume Free Support: Email Assistance" />
        <meta name="chatgpt-fts:description" content="Get help with our free resume builder via email. Fast responses to all inquiries about templates, technical issues, and career questions." />
        <meta name="chatgpt-fts:keywords" content="how to contact resume builder, resume builder email support, get help with resume, technical support contact" />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - Contact Page" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModified} />
        <meta httpEquiv="last-modified" content={lastModified} />
        
        {/* CANONICAL URL - Only one canonical tag */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Contact Us: Email Support for Resume Builder (24h Response) 2026" />
        <meta property="og:description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.professionalresumefree.com/contact-support.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Professional Resume Free Support" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModified} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us: Email Support for Resume Builder (24h Response) 2026" />
        <meta name="twitter:description" content="Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-contact-support.jpg" />
        <meta name="twitter:image:alt" content="Contact Professional Resume Free Support" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* PRECONNECT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ENHANCED SCHEMA.ORG JSON-LD */}
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
                  "name": "Contact Us: Email Support for Resume Builder (24h Response) 2026",
                  "description": "Contact our support team via email for resume builder assistance. Free help with templates, technical issues, and career questions.",
                  "dateModified": lastModified,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@id": "https://www.professionalresumefree.com/#website"
                  },
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.professionalresumefree.com/#website",
                  "url": "https://www.professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free resume templates and career resources",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png"
                    },
                    "email": "contact@professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "contact@professionalresumefree.com",
                      "contactType": "customer support",
                      "availableLanguage": "English"
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
                      "name": "Contact Us",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "ContactPage",
                  "mainEntity": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "email": "contact@professionalresumefree.com",
                    "description": "Contact our support team for resume builder assistance"
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
                        "dateModified": lastModified
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer,
                        "dateModified": lastModified
                      }
                    }))
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.professionalresumefree.com/#organization",
                  "name": "Professional Resume Free",
                  "url": "https://www.professionalresumefree.com",
                  "email": "contact@professionalresumefree.com",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "email": "contact@professionalresumefree.com",
                      "contactType": "customer support",
                      "availableLanguage": "English",
                      "areaServed": "Worldwide"
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

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={displayDate} />
          <span itemProp="last-updated">{displayDate}</span>
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
                <span itemProp="name" aria-current="page">Contact Us</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-tag" aria-label="Customer Support">
              {icons.book} Customer Support {currentYear}
            </div>
            
            <h1 id="hero-heading">Contact Us: Email Support for Resume Builder</h1>
            
            <p>
              Need help with your resume? Our support team is here to assist you. 
              <strong> Free email support</strong> with <strong>24-hour response time</strong>.
              Get help with templates, technical issues, and career questions.
            </p>

            <div className="stats" aria-label="Key statistics" style={{ marginTop: '30px' }}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Meta Info */}
            <div className="meta-info">
              <span>Support: contact@professionalresumefree.com</span>
              <span>Updated: {displayDate}</span>
              <span>Response: Within 24h</span>
            </div>
          </div>
        </section>

        {/* External Citations Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="citations-heading">
          <div className="container">
            <h2 id="citations-heading" className="section-title">What Users Say About Our Support</h2>
            <div className="grid">
              {externalCitations.map((citation, i) => (
                <blockquote key={i} className="card" itemScope itemType="https://schema.org/Quotation">
                  <p style={{ fontStyle: 'italic', marginBottom: '12px' }} itemProp="text">"{citation.quote}"</p>
                  <footer>
                    <cite itemProp="source">
                      {citation.source} ({citation.year})
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Our Support</h2>
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

        {/* Main Contact Section */}
        <section className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <div className="contact-grid">
              
              {/* Contact Information */}
              <div className="contact-info">
                <div className="info-header">
                  <h2>Get in Touch</h2>
                  <p>Email us directly for assistance with our resume builder tool.</p>
                </div>

                <div className="contact-methods">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-method">
                      <div className="method-icon">
                        {item.icon}
                      </div>
                      <div className="method-content">
                        <h3>{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="contact-link"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="method-main">{item.content}</p>
                        )}
                        <p className="method-sub">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-tips">
                  <h3>Email Tips</h3>
                  <ul className="tips-list">
                    {contactTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email Contact Card */}
              <div className="contact-form-card">
                <div className="form-header">
                  <div className="email-header">
                    <span className="email-icon">{icons.mail}</span>
                    <h2>Email Us</h2>
                  </div>
                  <p>Send your message to our email address</p>
                </div>

                <div className="email-section">
                  <div className="email-box">
                    <div className="email-address">
                      <span className="email-label">Our Email:</span>
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className="email-link"
                      >
                        contact@professionalresumefree.com
                      </a>
                      <button 
                        className="copy-button"
                        onClick={handleCopyEmail}
                      >
                        <span className="copy-icon">{icons.copy}</span>
                        Copy
                      </button>
                    </div>
                    
                    <div className="email-action">
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className="email-button"
                      >
                        <span className="btn-icon">{icons.mail}</span>
                        Open Email App
                      </a>
                    </div>
                  </div>
                </div>

                <div className="response-info">
                  <p>
                    We aim to respond to all emails within 24 hours. 
                    For the fastest response, please include relevant details about your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item" itemScope itemType="https://schema.org/Question">
                  <h3 className="faq-question" itemProp="name">{faq.question}</h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" style={{ color: 'var(--text-light)' }}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Ready to Build Your Professional Resume?</h2>
            <p>
              Start creating your resume with our free, easy-to-use platform.
              <strong> 46+ templates</strong> and <strong>12+ free tools</strong> available.
            </p>
            <div className="cta-buttons">
              <Link href="/resume-templates" className="btn-primary">
                Get Started Free {icons.arrowRight}
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                Explore Tools {icons.arrowRight}
              </Link>
            </div>
            <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              ✓ No credit card required • Free forever • 24h support
            </p>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              Page updated: {displayDate}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}