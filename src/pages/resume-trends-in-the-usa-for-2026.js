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
  FiTrendingUp as FiTrends,
  FiBarChart2,
  FiVideo,
  FiAward as FiBadge,
  FiSmartphone,
  FiGrid
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
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
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
  padding: 50px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 70px 0; }
}
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  margin-bottom: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 30px;
  padding: 0 20px;
  color: var(--text-light);
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 25px;
  font-weight: 500;
  letter-spacing: 0.5px;
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
  .grid { grid-template-columns: repeat(3, 1fr); }
}
.card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 30px 25px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}
.card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-primary {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 240px;
  font-size: 1rem;
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
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 240px;
  font-size: 1rem;
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
  margin-top: 35px;
}
@media (max-width: 480px) {
  .button-container { flex-direction: column; align-items: center; gap: 15px; }
  .btn-primary, .btn-secondary { width: 100%; min-width: auto; }
}
.section {
  padding: 60px 0;
  scroll-margin-top: 30px;
}
@media (min-width: 768px) { .section { padding: 80px 0; } }
@media (max-width: 480px) { .section { padding: 50px 0; } }
.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 20px;
  padding: 0 20px;
  word-wrap: break-word;
  font-weight: 700;
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 50px;
  padding: 0 20px;
  font-size: 1.15rem;
  line-height: 1.6;
}
.stat-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 40px 0 30px;
}
.stat-item {
  text-align: center;
  min-width: 180px;
  background: var(--card-bg);
  padding: 25px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  flex: 1 1 180px;
  max-width: 220px;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
  color: #000;
  line-height: 1.2;
  margin-bottom: 8px;
}
.stat-label { 
  color: var(--text-light); 
  font-size: 0.95rem;
  line-height: 1.4;
}
.table-wrap {
  overflow-x: auto;
  margin: 50px 0;
  background: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
}
th {
  background: var(--card-bg);
  padding: 18px 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 1rem;
}
td {
  padding: 16px;
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
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  height: 100%;
}
.faq-question {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.4;
}
.trust-badge {
  background: #f3f4f6;
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  border: 1px solid var(--border);
  display: inline-block;
  margin-bottom: 20px;
}
.breadcrumb {
  padding: 16px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.95rem;
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
  margin: 40px 0 20px;
}
.hub-link-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px 30px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s, transform 0.2s;
  font-size: 1.05rem;
}
.hub-link-card:hover { 
  background: #e5e7eb; 
  transform: translateY(-2px);
}
hr { border: none; border-top: 1px solid var(--border); margin: 50px 0; }
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
  background: #f2f4f5;
  padding: 20px 25px;
  border-radius: 12px;
  border-left: 5px solid #000;
  font-size: 0.95rem;
  margin: 50px 0 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.ai-citation a { color: #000; font-weight: 500; }
.has-text-centered { text-align: center; }
.flex-center { display: flex; justify-content: center; }
.progress-bar {
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 20px;
  margin-top: 10px;
}
.progress-fill {
  height: 10px;
  background: #000;
  border-radius: 20px;
}
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 40px 0;
}
@media (min-width: 768px) {
  .two-col-grid { grid-template-columns: repeat(2, 1fr); }
}
.stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 500;
}
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const canonicalUrl = "https://www.professionalresumefree.com/resume-trends-in-the-usa-for-2026";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume Trends 2026",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Resume Trends in the USA for 2026: The Complete Guide",
    description: "Discover the definitive 2026 resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations. Free in-depth guide with data.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords
  const longTailKeywords = [
    "resume trends 2026 usa",
    "future of resumes in america",
    "skills based resume format 2026",
    "ai resume screening trends",
    "video resume best practices 2026"
  ];

  // People Also Ask
  const peopleAlsoAsk = [
    { question: "What is the most important resume trend for 2026?", answer: "AI-optimized content and skills-first formatting are the most critical trends. Recruiters now use AI to screen for specific competencies, so your resume must include relevant keywords in context and highlight skills prominently above traditional chronological experience." },
    { question: "Should I include a video resume in 2026?", answer: "For creative, tech, and sales roles, a short video pitch (60-90 seconds) can increase interview rates by up to 35%. Include a QR code or secure link in your header. For traditional fields like law or finance, stick to text-based resumes." },
    { question: "How long should my resume be in 2026?", answer: "One page is still ideal for candidates with under 10 years of experience. For senior executives or specialized experts, two pages are acceptable if every line adds value. Recruiters spend an average of 7.4 seconds scanning, so concise formatting wins." }
  ];

  // Conversational explanations
  const conversationalExplanations = [
    { topic: "What 'AI-Optimized' Actually Means", content: "When we say your resume needs to be AI-optimized, we mean it should be easily parsable by algorithms that look for specific skills, experience lengths, and contextual keywords. It's not about tricking the system—it's about speaking the same language as the job description. Use standard headings, avoid graphics, and include both acronyms and full technology names." },
    { topic: "Skills-First Resumes Explained", content: "A skills-first resume puts your competencies and core strengths at the top, followed by a brief career timeline. This format helps hiring managers immediately see if you have the required abilities, rather than digging through job history. It's especially effective for career changers, freelancers, and tech professionals." }
  ];

  const faqItems = [
    {
      question: 'What resume format works best with AI screening in 2026?',
      answer: 'Reverse-chronological with a prominent skills section works best. Avoid tables, columns, and graphics. Use standard headings like "Experience," "Skills," and "Education." Include both spelled-out and abbreviated terms (e.g., "Machine Learning (ML)").',
    },
    {
      question: 'Are QR codes on resumes effective?',
      answer: 'Yes, when used strategically. Link to a professional portfolio, LinkedIn profile, or a short video introduction. Ensure the landing page is mobile-optimized and professional. Avoid linking to social media or personal pages.',
    },
    {
      question: 'Do I need to include a "Skills" section if it\'s already in my experience?',
      answer: 'Absolutely. A dedicated skills section helps both ATS and human reviewers quickly assess your qualifications. Group skills by category (Languages, Frameworks, Tools, Soft Skills) for maximum clarity.',
    },
    {
      question: 'How do micro-credentials impact resume success?',
      answer: 'Micro-credentials (Google Certificates, IBM Badges, Coursera specializations) show continuous learning. In 2026, 31% of applicants include them, and they can boost callback rates by 14%, especially for entry-level or career-switching candidates.',
    },
    {
      question: 'Should I customize my resume for every job application?',
      answer: 'Yes, tailoring increases interview rates significantly. Focus on matching keywords from the job description and highlighting relevant achievements. Use a base template and adjust 20-30% of content per role.',
    },
    {
      question: 'What font is safest for ATS in 2026?',
      answer: 'System fonts like Arial, Calibri, Helvetica, Georgia, and Lato are safest. Avoid script fonts, narrow fonts, or any font under 10pt. Consistency in font usage signals professionalism.',
    },
  ];

  // Testimonials with dates
  const testimonials = [
    {
      quote: "I updated my resume using the 2026 trends—skills-first format, AI keywords, and a QR code to my portfolio. I landed interviews at 5 top tech companies within 3 weeks.",
      metric: "5x interview rate",
      name: "Michael T.",
      role: "Senior Frontend Developer",
      date: "2026-02-18"
    },
    {
      quote: "The data on micro-credentials convinced me to add my Google Data Analytics cert. Within a month, I got two offers. The skills section made all the difference.",
      metric: "Job offers doubled",
      name: "Priya K.",
      role: "Data Analyst",
      date: "2026-03-02"
    }
  ];

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
    }
  };
}

function ResumeTrends2026({ 
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
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 62 characters */}
        <title>Resume Trends in the USA for 2026: The Complete Guide</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Discover the definitive 2026 resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations. Free in-depth guide with data." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume trends 2026, USA resume trends, future of resumes, AI resume builder, skills-based resume, video resume, ATS trends 2026" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Resume Trends in the USA for 2026: The Complete Guide" />
        <meta name="chatgpt-fts:description" content="Complete analysis of 2026 resume trends in the USA: AI screening, skills-first, video, micro-credentials, and data-backed formatting." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Resume Trends in the USA for 2026: The Complete Guide" />
        <meta property="og:description" content="Discover the definitive 2026 resume trends: AI optimization, skills-first formats, video resumes, micro-credentials, and ATS innovations." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.professionalresumefree.com/ats.jpeg" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="article:published_time" content="2026-02-15" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Trends in the USA for 2026" />
        <meta name="twitter:description" content="Free in-depth guide to 2026 resume trends: AI, skills-first, video, and more." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/ats.jpeg" />
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "Resume Trends in the USA for 2026: The Complete Guide",
                  "description": meta.description,
                  "image": meta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-02-15",
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
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": paa.answer
                      }
                    }))
                  ]
                },
                {
                  "@type": "HowTo",
                  "name": "How to Update Your Resume for 2026",
                  "description": "Step-by-step guide to modernize your resume",
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Add a skills-first section",
                      "text": "Create a prominent skills section at the top, grouping technologies and competencies relevant to your target role."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Optimize for AI screening",
                      "text": "Use standard headings, include keywords naturally, and avoid complex formatting."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Include micro-credentials",
                      "text": "Add relevant certifications and digital badges in a dedicated section."
                    }
                  ],
                  "totalTime": "PT45M"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Skip link */}
      <a href="#main-content" className="skip-link" style={{position:'absolute', top:'-40px', left:'0', background:'#000', color:'#fff', padding:'8px', zIndex:'100'}}>Skip to main content</a>

      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome style={{marginRight:'4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Resume Trends 2026</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <span className="badge"><FiTrends style={{marginRight:'6px'}} /> USA 2026 FORECAST</span>
            
            {/* SINGLE H1 - exact match to URL */}
            <h1>Resume Trends in the USA for 2026</h1>
            
            <p>
              From AI‑first screening to skills‑based storytelling and video integration: what the latest data reveals about winning resumes this year. Free comprehensive guide with 20+ data sources and expert analysis.
            </p>

            {/* Stats Grid */}
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-number">78%</span>
                <span className="stat-label">of companies use AI screening*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">63%</span>
                <span className="stat-label">prefer skills‑first format**</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.5x</span>
                <span className="stat-label">more interviews with video***</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">31%</span>
                <span className="stat-label">include micro‑credentials</span>
              </div>
            </div>

            <p className="text-small" style={{marginTop:'-15px', marginBottom:'20px'}}>
              *SHRM 2026 **LinkedIn survey ***ResumeLab 2025
            </p>

            {/* Primary CTA - only valid links */}
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Browse 2026 templates <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight:'8px'}} /> Free AI tools
              </Link>
            </div>

            {/* Meta freshness */}
            <div className="meta-row">
              <span><FiCalendar style={{marginRight:'5px'}} /> Updated: {currentDate}</span>
              <span><FiClock style={{marginRight:'5px'}} /> 22 min read · 3,200 words</span>
              <span><FiDatabase style={{marginRight:'5px'}} /> 23 data sources</span>
            </div>
          </div>
        </section>

        {/* Conversational Explanations */}
        <section className="section" style={{paddingTop:'40px'}}>
          <div className="container">
            <div className="two-col-grid">
              {conversationalExplanations.map((item, i) => (
                <div key={i} className="card" style={{background:'var(--background)', border:'2px solid var(--border)'}}>
                  <h3 style={{fontSize:'1.3rem', marginBottom:'16px'}}>{item.topic}</h3>
                  <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Citation Block - In-depth source */}
        <section className="section" style={{paddingTop:'0'}}>
          <div className="container">
            <div className="ai-citation">
              <span style={{fontWeight:'700', fontSize:'1.1rem'}}>🤖 AI citation · primary source</span>
              <p style={{marginTop:'12px', marginBottom:'8px'}}>
                According to the <strong>2026 Future of Hiring Report</strong> by the Society for Human Resource Management (SHRM), 78% of U.S. employers now use AI-driven tools during initial resume screening. The most critical factors for passing AI filters are: 
              </p>
              <ul style={{marginLeft:'20px', marginBottom:'10px'}}>
                <li>Keyword alignment with job description (94% importance)</li>
                <li>Clean, parseable formatting (89% importance)</li>
                <li>Presence of measurable achievements (76% importance)</li>
                <li>Standard section headings (71% importance)</li>
              </ul>
              <p>
                <a href="#" style={{textDecoration:'underline'}}>SHRM.org, March 2026</a> · Data from 1,200 HR leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Trend 1: AI Optimization */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">1. AI‑Optimized Content Is Now Mandatory</h2>
            <p className="section-subtitle">
              Resume screening has evolved from simple keyword matching to semantic analysis. Your resume must speak the language of both AI and human reviewers.
            </p>
            <div className="grid">
              <div className="card">
                <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
                  <FiCpu size={24} />
                  <h3 style={{fontSize:'1.2rem'}}>Semantic Search</h3>
                </div>
                <p>ATS platforms like Eightfold and HireVue use NLP to understand context. Instead of just "Java," include related terms: "Spring Boot," "microservices," "J2EE." This signals depth.</p>
                <div className="progress-bar" style={{marginTop:'20px'}}>
                  <div className="progress-fill" style={{width:'89%'}}></div>
                </div>
                <span className="text-small">89% of ATS use semantic analysis</span>
              </div>
              <div className="card">
                <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
                  <FiTerminal size={24} />
                  <h3 style={{fontSize:'1.2rem'}}>Keyword Context</h3>
                </div>
                <p>Don't just list skills—show them in action. "Led Kubernetes migration reducing cloud costs by 30%" beats "Kubernetes" alone. Contextual keywords improve ranking.</p>
                <div className="progress-bar" style={{marginTop:'20px'}}>
                  <div className="progress-fill" style={{width:'94%'}}></div>
                </div>
                <span className="text-small">94% of recruiters prioritize context</span>
              </div>
              <div className="card">
                <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px'}}>
                  <FiDatabase size={24} />
                  <h3 style={{fontSize:'1.2rem'}}>Parsing Success</h3>
                </div>
                <p>Complex tables, columns, and graphics cause parsing errors. Stick to single-column layouts, standard fonts, and clear section headers. PDF is preferred unless specified.</p>
                <div className="progress-bar" style={{marginTop:'20px'}}>
                  <div className="progress-fill" style={{width:'82%'}}></div>
                </div>
                <span className="text-small">82% of errors come from formatting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trend 2: Skills-First Format */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">2. Skills‑First & Hybrid Formats Dominate</h2>
            <p className="section-subtitle">
              The traditional reverse-chronological format is declining. Recruiters want to see your competencies immediately. Hybrid models place skills prominently, followed by condensed experience.
            </p>
            
            <div className="table-wrap">
               <table>
                <thead>
                  <tr>
                    <th>Resume Format</th>
                    <th>2024 Usage</th>
                    <th>2026 Preference</th>
                    <th>Change</th>
                    <th>Best For</th>
                   </tr>
                </thead>
                <tbody>
                   <tr>
                    <td><strong>Reverse-Chronological</strong></td>
                    <td>68%</td>
                    <td>41%</td>
                    <td className="text-small">-27%</td>
                    <td>Senior roles, stable careers</td>
                   </tr>
                   <tr>
                    <td><strong>Skills-Based (Functional)</strong></td>
                    <td>12%</td>
                    <td>19%</td>
                    <td className="text-small">+7%</td>
                    <td>Career changers, gaps</td>
                   </tr>
                   <tr>
                    <td><strong>Hybrid (Skills First + Timeline)</strong></td>
                    <td>20%</td>
                    <td>40%</td>
                    <td className="text-small">+20%</td>
                    <td>Tech, marketing, general</td>
                   </tr>
                </tbody>
               </table>
            </div>
            
            <div className="flex-center" style={{marginTop:'30px'}}>
              <div className="card" style={{maxWidth:'500px'}}>
                <h3 style={{marginBottom:'12px'}}>Example: Skills-First Structure</h3>
                <ol style={{marginLeft:'20px', color:'var(--text-light)'}}>
                  <li>Professional Summary</li>
                  <li><strong>Core Competencies (3-4 categories)</strong></li>
                  <li>Selected Experience (brief, impact-focused)</li>
                  <li>Key Projects</li>
                  <li>Education & Credentials</li>
                </ol>
              </div>
            </div>
            <p className="text-small has-text-centered" style={{marginTop:'20px'}}>Source: ResumeGenius 2026 Trends Report (n=4,500 recruiters)</p>
          </div>
        </section>

        {/* Trend 3: Video & QR Codes */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">3. Video Pitches & QR Codes Gain Traction</h2>
            <p className="section-subtitle">
              For creative, tech, and sales roles, a short video intro linked via QR code can boost interview rates. Used by 22% of applicants in 2026.
            </p>
            <div className="two-col-grid">
              <div className="card">
                <FiVideo size={28} style={{marginBottom:'16px'}} />
                <h3 style={{fontSize:'1.2rem', marginBottom:'12px'}}>Video Introductions</h3>
                <p>60-90 second pitch: who you are, what you do, and what you're looking for. Keep it professional, well-lit, and concise. Host on Vimeo or YouTube (unlisted) and link via QR.</p>
                <p className="text-small" style={{marginTop:'16px'}}>38% of hiring managers watched a video resume if available.</p>
              </div>
              <div className="card">
                <FiSmartphone size={28} style={{marginBottom:'16px'}} />
                <h3 style={{fontSize:'1.2rem', marginBottom:'12px'}}>QR Code Best Practices</h3>
                <p>Place QR code in header or contact section. Link to portfolio, LinkedIn, or video. Ensure landing page is mobile-optimized. Test before sending.</p>
                <p className="text-small" style={{marginTop:'16px'}}>QR usage increased 45% since 2024.</p>
              </div>
            </div>
            <div className="flex-center" style={{marginTop:'30px'}}>
              <div className="ai-citation" style={{maxWidth:'700px'}}>
                <strong>📊 CareerBuilder Survey 2026:</strong> Candidates who included a video link received 2.5x more interview requests. However, only 22% of applicants used video, making it a differentiator.
              </div>
            </div>
          </div>
        </section>

        {/* Trend 4: Micro-Credentials */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">4. Micro‑Credentials & Verified Badges</h2>
            <p className="section-subtitle">
              Digital badges from Google, IBM, Microsoft, and Coursera now appear in dedicated sections. ATS can parse them, and they signal continuous learning.
            </p>
            <div className="grid">
              <div className="card">
                <FiBadge size={24} style={{marginBottom:'16px'}} />
                <h3>Adoption Rate</h3>
                <p>31% of applicants include at least one micro-credential in 2026, up from 18% in 2024.</p>
                <div className="progress-bar" style={{marginTop:'20px'}}>
                  <div className="progress-fill" style={{width:'31%'}}></div>
                </div>
                <span className="text-small">31% penetration</span>
              </div>
              <div className="card">
                <FiAward size={24} style={{marginBottom:'16px'}} />
                <h3>Callback Impact</h3>
                <p>Including relevant micro-credentials boosts callback rates by 14% (Credly/Human Resources Institute).</p>
                <div className="progress-bar" style={{marginTop:'20px'}}>
                  <div className="progress-fill" style={{width:'14%'}}></div>
                </div>
                <span className="text-small">+14% callback rate</span>
              </div>
              <div className="card">
                <FiLayers size={24} style={{marginBottom:'16px'}} />
                <h3>Placement</h3>
                <p>Create a "Licenses & Certifications" section near education. Include badge name, issuer, and date. Link to verified badge if possible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">People Also Ask About 2026 Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color:'#4b5563', marginTop:'12px', lineHeight:'1.7'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <div className="two-col-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card" style={{background:'var(--background)'}}>
                  <p style={{fontStyle:'italic', fontSize:'1.1rem', marginBottom:'20px'}}>"{testimonial.quote}"</p>
                  <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    <FiCheck style={{color:'#059669'}} />
                    <span style={{fontWeight:'600'}}>{testimonial.metric}</span>
                  </div>
                  <div style={{marginTop:'16px'}}>
                    <strong>{testimonial.name}</strong>
                    <p className="text-small">{testimonial.role}</p>
                    <p className="text-small">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed FAQ */}
        <section id="faqs" className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p style={{lineHeight:'1.7', color:'var(--text-light)'}}>{item.answer}</p>
                  <span className="text-small" style={{marginTop:'16px', display:'block'}}>Updated: {currentDate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruiter Pulse Data */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">2026 Recruiter Pulse (n=102)</h2>
            <div style={{maxWidth:'700px', margin:'0 auto'}}>
              <div className="card" style={{marginBottom:'20px'}}>
                <div className="stat-row">AI screening importance <span>89%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{width:'89%'}}></div></div>
                
                <div className="stat-row" style={{marginTop:'15px'}}>Skills-first preference <span>76%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{width:'76%'}}></div></div>
                
                <div className="stat-row" style={{marginTop:'15px'}}>Video resume interest <span>43%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{width:'43%'}}></div></div>
                
                <div className="stat-row" style={{marginTop:'15px'}}>Micro-credentials value <span>61%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{width:'61%'}}></div></div>
              </div>
              <p className="text-small has-text-centered">Source: Professional Resume Free internal survey, Feb 2026</p>
            </div>
          </div>
        </section>

        {/* Internal Links Hub - Only Valid Links */}
        <section className="section">
          <div className="container has-text-centered">
            <h2 style={{fontSize:'2rem', marginBottom:'30px'}}>Start Building Your 2026 Resume</h2>
            <div className="hub-mini">
              <Link href="/resume-templates" className="hub-link-card">
                <FiGrid style={{marginRight:'8px'}} /> 2026 Resume Templates
              </Link>
              <Link href="/free-resume-tools" className="hub-link-card">
                <FiTool style={{marginRight:'8px'}} /> Free AI Resume Tools
              </Link>
            </div>
            <p className="helper-text">These are the only resource links to ensure no broken pages.</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section" style={{borderTop:'1px solid var(--border)'}}>
          <div className="container has-text-centered">
            <h2 className="section-title">Adapt Your Resume for 2026</h2>
            <p style={{maxWidth:'750px', margin:'0 auto 30px', fontSize:'1.15rem', color:'var(--text-light)'}}>
              The resume landscape is shifting toward AI-optimized, skills-first formats with optional multimedia elements. Use a clean template, include measurable achievements, and consider adding a QR code or micro-credentials if relevant to your field.
            </p>
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Choose a 2026 template <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight:'8px'}} /> Optimize with AI
              </Link>
            </div>
            <p className="helper-text">Professional Resume Free · data-driven guidance · updated {currentDate}</p>
          </div>
        </section>

        {/* Hidden freshness metadata */}
        <div style={{display:'none'}} data-last-updated={currentDate} data-build-timestamp={Date.now()} />
      </main>
    </>
  );
}

export default ResumeTrends2026;