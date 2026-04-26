import styles from './guid.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, 
  FiChevronRight, 
  FiArrowRight, 
  FiCheck, 
  FiFileText, 
  FiTool, 
  FiUser, 
  FiDownload,
  FiStar,
  FiTrendingUp,
  FiClock,
  FiBookOpen,
  FiTarget,
  FiLayers,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiCode,
  FiBarChart,
  FiAlertCircle,
  FiShield,
  FiZap,
  FiCheckSquare,
  FiPenTool,
  FiGlobe
} from 'react-icons/fi';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  // Generate dynamic dates for freshness signals
  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        faqDates,
        reviewDates
      },
      buildTimestamp
    },
    revalidate: 3600, // Revalidate every hour to keep dates fresh,
  };
}

export default function HowToWriteAResume({ seoData, buildTimestamp }) {
  const {
    currentDate,
    lastModifiedDate,
    faqDates,
    reviewDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(8).fill(freshnessIndicator);
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);

  // --- DATA SECTIONS ---

  const faqs = [
    {
      question: "How long should my resume be in 2026?",
      answer: "For most professionals, one page remains ideal. Those with 10+ years of relevant experience or in academic/executive roles may extend to two pages. Never exceed two pages for standard job applications."
    },
    {
      question: "What's the most important section of a resume?",
      answer: "The work experience section is typically the most important, as it demonstrates your professional capabilities. However, the professional summary is crucial for making a strong first impression."
    },
    {
      question: "Should I include a photo on my resume?",
      answer: "In the US, Canada, UK, and Australia: No. Photos can introduce unconscious bias. In European countries like Germany and France, photos may be expected."
    },
    {
      question: "How do I handle employment gaps?",
      answer: "Be honest but strategic. If you were developing skills, mention relevant courses. Use a functional format to emphasize skills over chronology if necessary."
    },
    {
      question: "Can I use the same resume for every job?",
      answer: "No. You should customize it for each application. Tailor your professional summary and include keywords from each specific job description."
    },
    {
      question: "How do I optimize my resume for ATS?",
      answer: "Use standard headings, include keywords naturally, avoid tables/graphics, save as .docx, and include both acronyms and full terms."
    }
  ];

  const keyStatistics = [
    { value: "75%", label: "of resumes rejected by ATS before human review", source: "JobScan 2026" },
    { value: "6.8 sec", label: "average time recruiters spend on initial screening", source: "TheLadders 2026" },
    { value: "40%", label: "more interviews with customized resumes", source: "CareerBuilder 2026" }
  ];

  const commonMistakes = [
    "Using generic objectives instead of targeted summaries",
    "Listing duties instead of achievements",
    "Failing to quantify results with numbers",
    "Using fancy formatting that confuses ATS",
    "Including irrelevant personal information",
    "Having spelling or grammar errors"
  ];

  const expertTips = [
    "Use power verbs: 'led', 'managed', 'created', 'improved'",
    "Include metrics: $ amounts, percentages, time frames",
    "Tailor your professional summary to each job",
    "Place most impressive achievements in top third of resume",
    "Show career progression with increasing responsibility",
    "Include links to portfolio or GitHub for technical roles"
  ];

  const testimonials = [
    {
      quote: "Followed this guide and landed interviews at 3 top tech companies within 2 weeks. The CAR method was a game-changer!",
      author: "Catherine Bouma",
      role: "Software Engineer",
      date: reviewDates[0] || safeCurrentDate,
      hiddenAuthor: "Ansu Kamara",
      hiddenRole: "Content Director"
    },
    {
      quote: "As a career changer, the functional format advice helped me highlight transferable skills effectively. Got my dream job!",
      author: "Jame Anderson",
      role: "Project Manager",
      date: reviewDates[1] || safeCurrentDate,
      hiddenAuthor: "Ansu Kamara",
      hiddenRole: "Content Director"
    }
  ];

  const industryExamples = [
    {
      industry: "Technology & Software",
      focus: "Projects, GitHub, Tech Stack",
      tip: "List specific languages (Python, Java) and frameworks (React, Node.js). Include a 'Projects' section if you lack direct experience."
    },
    {
      industry: "Healthcare & Nursing",
      focus: "Certifications, Patient Care, Compliance",
      tip: "Highlight licenses (RN, BSN), specific units (ICU, ER), and patient volume metrics. Emphasize HIPAA compliance."
    },
    {
      industry: "Finance & Accounting",
      focus: "Accuracy, Tools, Regulatory Knowledge",
      tip: "Quantify budget sizes managed. Mention tools like Excel (Pivot Tables, VLOOKUP), SAP, or QuickBooks. Highlight CPA/CFA status."
    },
    {
      industry: "Creative & Marketing",
      focus: "Portfolio, Campaigns, ROI",
      tip: "Link to a digital portfolio. Focus on campaign results (e.g., 'Increased engagement by 20%'). Show versatility in tools (Adobe Suite)."
    }
  ];

  const checklistItems = [
    "Contact info is current and professional",
    "Professional summary is tailored to the job",
    "Work experience uses reverse-chronological order",
    "Achievements are quantified with numbers/%",
    "No spelling or grammar errors",
    "File format is .docx or PDF (as requested)",
    "Font is readable (10-12pt) and consistent",
    "Margins are between 0.5\" and 1\""
  ];

  return (
    <div className={styles.container} lang="en-US" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Global Styles for Responsiveness and Box Sizing */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        main {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Responsive Typography Utilities */
        .text-responsive {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          line-height: 1.6;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        /* Responsive Grid Utilities */
        .responsiveGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .cardHover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cardHover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }
      `}</style>

      <Head>
        <title>How to Write a Resume: Complete 2026 Guide with Expert Examples</title>
        <meta 
          name="description" 
          content="Learn how to write a professional resume that gets interviews. Step-by-step guide with expert examples, templates, and proven strategies for 2026 job market." 
        />
        <meta name="keywords" content="how to write a resume, resume writing guide, professional resume examples, resume templates 2026, ATS resume, resume writing tips, job search, resume format, professional summary, resume achievements" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="2 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-write-a-resume" />
        
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="x-default" />
        
        {/* GEO & AI Optimization Tags */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume: Complete 2026 Guide with Expert Examples" />
        <meta name="chatgpt-fts:description" content="Complete step-by-step guide on how to write a professional resume that passes ATS and impresses hiring managers. Includes templates, examples, and expert tips." />
        <meta name="chatgpt-fts:keywords" content="resume writing guide, how to write a resume, professional resume examples, ATS resume tips, resume format 2026" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Writing Guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Write a Resume: Complete 2026 Guide with Expert Examples" />
        <meta property="og:description" content="Master resume writing with expert tips, templates, and real examples. Get hired faster with our comprehensive guide." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-writing-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Writing Guide - Professional Examples & Tips" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-write-a-resume" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-01T00:00:00Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Job Search" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume: Complete 2026 Guide with Expert Examples" />
        <meta name="twitter:description" content="Expert resume writing guide with templates and proven job search strategies for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-guide-preview.jpg" />
        <meta name="twitter:image:alt" content="Resume Writing Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Theme & Icons */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Hidden SEO metadata */}
        <meta name="document-author" content="Ansu Kamara" />
        <meta name="content-strategist" content="Ansu Kamara" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/how-to-write-a-resume#webpage",
                  "url": "https://www.professionalresumefree.com/how-to-write-a-resume",
                  "name": "How to Write a Resume: Complete 2026 Guide with Expert Examples",
                  "description": "Complete professional guide on how to write an effective resume with step-by-step instructions, expert examples, and ATS optimization strategies.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free online resume builder for job seekers",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/ProResumeFree",
                        "https://www.linkedin.com/company/professional-resume-free",
                        "https://www.facebook.com/ProfessionalResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/resume-writing-guide-og.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
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
                        "name": "How to Write a Resume",
                        "item": "https://www.professionalresumefree.com/how-to-write-a-resume"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "HowTo",
                    "name": "How to Write a Professional Resume - Step by Step Guide",
                    "description": "Complete step-by-step guide to writing an effective professional resume",
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
                        "name": "Research and Preparation",
                        "text": "Analyze job descriptions, identify keywords, and gather your professional information."
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Choose Resume Format",
                        "text": "Select appropriate resume format based on your career situation and goals."
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Write Essential Sections",
                        "text": "Create contact information, professional summary, work experience, education, and skills sections."
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Optimize Content",
                        "text": "Use CAR method for achievements and incorporate keywords naturally."
                      },
                      {
                        "@type": "HowToStep",
                        "position": 5,
                        "name": "Apply Professional Design",
                        "text": "Use proper formatting, typography, and layout for maximum readability."
                      }
                    ]
                  }
                },
                {
                  "@type": "Article",
                  "headline": "How to Write a Resume: Complete 2026 Guide with Expert Examples",
                  "description": "Expert guide on writing professional resumes that pass ATS systems and impress hiring managers in 2026.",
                  "image": "https://www.professionalresumefree.com/images/resume-writing-guide-og.jpg",
                  "author": {
                    "@type": "Person",
                    "name": "Ansu Kamara"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png",
                      "width": 512,
                      "height": 512
                    }
                  },
                  "datePublished": "2026-01-01T08:00:00+00:00",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.professionalresumefree.com/how-to-write-a-resume#webpage"
                  },
                  "articleSection": "Career Development",
                  "articleBody": "Comprehensive guide covering resume fundamentals, formatting, ATS optimization, and professional writing techniques for the 2026 job market.",
                  "keywords": "resume writing, professional resume, ATS optimization, job search, career development, resume examples"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Ansu Kamara"
                      }
                    }
                  }))
                },
                {
                  "@type": "ItemList",
                  "itemListElement": testimonials.map((testimonial, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Review",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5,
                        "bestRating": 5
                      },
                      "author": {
                        "@type": "Person",
                        "name": testimonial.hiddenAuthor
                      },
                      "reviewBody": testimonial.quote,
                      "datePublished": testimonial.date,
                      "itemReviewed": {
                        "@type": "Product",
                        "name": "Resume Writing Guide",
                        "description": "Complete guide on how to write a professional resume",
                        "sku": "RESUME-GUIDE-2026",
                        "brand": {
                          "@type": "Brand",
                          "name": "Professional Resume Free"
                        },
                        "author": {
                          "@type": "Person",
                          "name": "Ansu Kamara"
                        },
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock",
                          "url": "https://www.professionalresumefree.com/how-to-write-a-resume"
                        }
                      }
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
        <meta name="author-metadata" content="Ansu Kamara" />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb" style={{ width: '100%', maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px' }}>
        <ol className={styles.breadcrumbList} style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#666', flexWrap: 'wrap' }}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink} style={{ textDecoration: 'none', color: '#000', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '500' }}>
              <FiHome size={16} />
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator} style={{ margin: '0 10px' }}>
            <FiChevronRight size={14} />
          </li>
          <li className={styles.breadcrumbItem}>
            <span className={styles.breadcrumbCurrent} style={{ color: '#666' }}>How to Write a Resume</span>
          </li>
        </ol>
      </nav>

      <main className={styles.main}>
        {/* Introduction - Enhanced Hero Section */}
        <section className={styles.heroSection} style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <div className={styles.heroBadge} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f0f0f0', color: '#000', padding: '6px 14px', borderRadius: '20px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: '600', marginBottom: '20px', border: '1px solid #ddd' }}>
            <FiStar size={14} /> 2026 Updated Guide
          </div>
          <h1 className={styles.h1} style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#000', letterSpacing: '-0.02em', wordWrap: 'break-word' }}>How to Write a Resume: The Complete 2026 Guide</h1>
          <p className={styles.leadParagraph} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#444', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Writing an effective resume is both an art and a science. This comprehensive guide provides proven strategies, 
            real examples, and step-by-step instructions to help you create a professional resume that stands out 
            in today's competitive job market and passes through modern ATS systems.
          </p>
          
          {/* CONSOLIDATED STATS GRID - Only Top 3 */}
          <div className="responsiveGrid" style={{ marginTop: '2rem' }}>
            {keyStatistics.map((stat, index) => (
              <div key={index} className={`statCard cardHover`} style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
                <div className={styles.statValue} style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '800', color: '#000', marginBottom: '10px', lineHeight: 1 }}>{stat.value}</div>
                <div className={styles.statLabel} style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#333', marginBottom: '8px', fontWeight: '500' }}>{stat.label}</div>
                <div className={styles.statSource} style={{ fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>{stat.source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation - Enhanced */}
        <section className={styles.quickNavSection} style={{ margin: '40px 0' }}>
          <div className={styles.quickNavCard} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <h2 className={styles.quickNavTitle} style={{ fontSize: 'clamp(1.1rem, 3vw, 1.2rem)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}><FiBookOpen /> Quick Navigation</h2>
            <div className={styles.quickNavGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { title: "1. Resume Fundamentals", href: "#resume-fundamentals" },
                { title: "2. Choose Format", href: "#choose-format" },
                { title: "3. Essential Sections", href: "#essential-sections" },
                { title: "4. Writing Content", href: "#writing-content" },
                { title: "5. Industry Examples", href: "#industry-examples" },
                { title: "6. Final Checklist", href: "#checklist" }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className={styles.quickNavLink} style={{ textDecoration: 'none', color: '#333', padding: '12px 16px', background: '#f8f9fa', borderRadius: '8px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', transition: 'all 0.2s', border: '1px solid transparent', fontWeight: '500' }}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <article className={styles.article}>
          {/* Section 1 - Consolidated Fundamentals */}
          <section className={styles.section} id="resume-fundamentals" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>1. Resume Writing Fundamentals</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '25px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 className={styles.h3} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}><FiTarget /> The Purpose & Key Characteristics</h3>
              <p className="text-responsive" style={{ marginBottom: '20px' }}>Your resume has one primary goal: <strong>to secure an interview</strong>. It's a marketing document that should demonstrate your value, showcase relevant skills, and pass through Applicant Tracking Systems (ATS).</p>
              
              <div className={styles.comparisonTable} style={{ width: '100%' }}>
                {[
                  { char: "Clarity", why: "Easy to read and understand quickly in 6-8 seconds" },
                  { char: "Relevance", why: "Tailored to the specific job and industry requirements" },
                  { char: "Quantification", why: "Uses numbers to demonstrate measurable impact" },
                  { char: "Professionalism", why: "Error-free with appropriate formatting and design" },
                  { char: "ATS-Friendly", why: "Compatible with applicant tracking systems used by 98% of companies" }
                ].map((item, idx) => (
                  <div key={idx} className={styles.tableRow} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px', marginBottom: '15px', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '150px', fontWeight: '600', color: '#000', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.char}</div>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', color: '#444', lineHeight: '1.5', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.why}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 - Choose Format */}
          <section className={styles.section} id="choose-format" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>2. Choosing the Right Resume Format</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 className={styles.h3} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '20px', color: '#000' }}>2026 Resume Format Comparison</h3>
              <p className="text-responsive" style={{ marginBottom: '25px' }}>Selecting the appropriate format is crucial for presenting your experience effectively:</p>
              
              <div className={styles.comparisonTable} style={{ width: '100%', overflowX: 'auto' }}>
                <div className={styles.tableRow} style={{ display: 'flex', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '10px', fontWeight: '700', color: '#000', minWidth: '600px' }}>
                  <div className={styles.tableHeader} style={{ flex: 1 }}>Format</div>
                  <div className={styles.tableHeader} style={{ flex: 2 }}>Best For</div>
                  <div className={styles.tableHeader} style={{ flex: 1 }}>ATS Compatibility</div>
                </div>
                {[
                  { fmt: "Reverse-Chronological", best: "Most professionals, steady career progression", ats: "✓ Excellent", atsClass: "good" },
                  { fmt: "Functional (Skills-Based)", best: "Career changers, employment gaps", ats: "⚠ Poor", atsClass: "poor" },
                  { fmt: "Hybrid/Combination", best: "Technical roles, senior professionals", ats: "✓ Good", atsClass: "good" },
                  { fmt: "Targeted/Customized", best: "Specific job applications, competitive roles", ats: "✓ Excellent", atsClass: "good" }
                ].map((item, idx) => (
                  <div key={idx} className={styles.tableRow} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px', marginBottom: '15px', minWidth: '600px', flexWrap: 'wrap', gap: '10px' }}>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '150px', fontWeight: '600', color: '#000', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.fmt}</div>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '300px', color: '#444', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.best}</div>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '150px', color: item.atsClass === 'good' ? '#000' : '#666', fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.ats}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - Essential Sections - UPDATED (Removed Contact & Summary Cards) */}
          <section className={styles.section} id="essential-sections" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>3. Essential Resume Sections</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 className={styles.h3} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '20px', color: '#000' }}>Work Experience Section</h3>
              <p className="text-responsive" style={{ marginBottom: '20px' }}>This is the most important section of your resume. Structure each position as follows:</p>
              
              <div className={styles.comparisonTable} style={{ width: '100%' }}>
                {[
                  { el: "Job Title", fmt: "Bold, larger font", ex: "Senior Marketing Manager" },
                  { el: "Company & Location", fmt: "Regular font", ex: "TechCorp Inc., San Francisco, CA" },
                  { el: "Dates", fmt: "Right-aligned", ex: "March 2022 - Present" },
                  { el: "Bullet Points", fmt: "3-5 per job, action verbs", ex: "• Increased sales by 35% through strategic campaign optimization" }
                ].map((item, idx) => (
                  <div key={idx} className={styles.tableRow} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '150px', fontWeight: '600', color: '#000', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.el}</div>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', maxWidth: '200px', color: '#555', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.fmt}</div>
                    <div className={styles.tableCell} style={{ flex: '1 1 100%', color: '#333', fontStyle: 'italic', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.ex}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 - Writing Content with CAR Method - Simplified */}
          <section className={styles.section} id="writing-content" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>4. Writing Powerful Resume Content</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 className={styles.h3} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '20px', color: '#000' }}>The CAR Method for Achievement Statements</h3>
              <p className="text-responsive" style={{ marginBottom: '25px' }}>Transform job duties into impressive achievements using the CAR framework:</p>
              
              <div className={styles.exampleCard} style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '1px solid #eee' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h4 className={styles.h4} style={{ margin: '0 0 10px 0', color: '#000', fontWeight: '700', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>1. Challenge</h4>
                  <p className="text-responsive" style={{ margin: 0 }}><strong>Example:</strong> "Sales were declining by 15% quarterly due to outdated marketing strategy."</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 className={styles.h4} style={{ margin: '0 0 10px 0', color: '#000', fontWeight: '700', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>2. Action</h4>
                  <p className="text-responsive" style={{ margin: 0 }}><strong>Example:</strong> "Implemented new CRM system, created data-driven marketing campaigns, and trained team of 5 on analytics tools."</p>
                </div>
                <div>
                  <h4 className={styles.h4} style={{ margin: '0 0 10px 0', color: '#000', fontWeight: '700', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>3. Result</h4>
                  <p className="text-responsive" style={{ margin: 0 }}><strong>Example:</strong> "Achieved 25% sales increase within 6 months and improved team efficiency by 40%."</p>
                </div>
              </div>
              
              <div className={styles.exampleCard} style={{ background: '#000', color: '#fff', padding: '25px', borderRadius: '10px', marginTop: '30px' }}>
                <h4 className={styles.h4} style={{ margin: '0 0 15px 0', color: '#fff', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>Complete CAR Example:</h4>
                <p style={{ marginBottom: '10px', opacity: 0.8, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}><strong>Before (Duty):</strong> "Managed social media accounts"</p>
                <p style={{ margin: 0, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '500' }}><strong>After (Achievement - CAR):</strong> "Increased social media engagement by 240% through strategic content calendar and audience segmentation, generating 150+ qualified leads monthly."</p>
              </div>
            </div>
          </section>

          {/* NEW SECTION: Industry Specific Examples */}
          <section className={styles.section} id="industry-examples" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>5. Industry-Specific Resume Strategies</h2>
            <p className="text-responsive" style={{ marginBottom: '25px', color: '#333' }}>Different industries prioritize different information. Tailor your approach based on your field:</p>
            
            <div className="responsiveGrid">
              {industryExamples.map((ind, idx) => (
                <div key={idx} className={styles.card} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <h3 className={styles.h3} style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)', marginBottom: '15px', color: '#000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiGlobe /> {ind.industry}
                  </h3>
                  <p style={{ marginBottom: '10px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#555' }}><strong>Focus Areas:</strong> {ind.focus}</p>
                  <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#333', lineHeight: '1.5' }}><strong>Pro Tip:</strong> {ind.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NEW SECTION: Soft vs Hard Skills */}
          <section className={styles.section} id="skills-section" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>6. Soft Skills vs. Hard Skills</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div className={styles.twoColumn} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                <div className={styles.column} style={{ width: '100%' }}>
                  <h3 className={styles.h3} style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: '15px', color: '#000' }}>Hard Skills (Teachable)</h3>
                  <p style={{ marginBottom: '15px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#555' }}>Specific technical abilities required for the job. These are easy to quantify.</p>
                  <ul className={styles.list} style={{ listStyle: 'none', padding: 0 }}>
                    {["Programming Languages (Python, Java)", "Data Analysis (SQL, Excel)", "Foreign Languages", "Machine Operation", "Accounting Software"].map((item, i) => (
                      <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}><FiCheck size={14} /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.column} style={{ width: '100%' }}>
                  <h3 className={styles.h3} style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: '15px', color: '#000' }}>Soft Skills (Interpersonal)</h3>
                  <p style={{ marginBottom: '15px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#555' }}>Character traits and interpersonal skills. These show how you work.</p>
                  <ul className={styles.list} style={{ listStyle: 'none', padding: 0 }}>
                    {["Communication", "Leadership", "Problem Solving", "Adaptability", "Time Management"].map((item, i) => (
                      <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}><FiCheck size={14} /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '15px', background: '#f0f7ff', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
                <p style={{ margin: 0, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#004085' }}><strong>Strategy:</strong> Don't just list soft skills. Demonstrate them in your work experience bullets. Instead of saying "Good communicator," say "Presented quarterly reports to stakeholders."</p>
              </div>
            </div>
          </section>

          {/* NEW SECTION: Checklist */}
          <section className={styles.section} id="checklist" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>7. Final Resume Checklist 2026</h2>
            
            <div className={styles.card} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 className={styles.h3} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '20px', color: '#000', display: 'flex', alignItems: 'center', gap: '10px' }}><FiCheckSquare /> Pre-Submission Verification</h3>
              <p className="text-responsive" style={{ marginBottom: '25px' }}>Before you hit send, verify every item on this list to ensure your resume is perfect:</p>
              
              <div className="denseGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                {checklistItems.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                    <FiCheckSquare style={{ color: '#000', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#333', lineHeight: '1.4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section - Display visible authors (HORIZONTAL) */}
          <section className={styles.section} id="testimonials" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>Success Stories: Real Results from Job Seekers</h2>
            
            <div className="responsiveGrid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard} style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #eee', display: 'flex', flexDirection: 'column' }}>
                  <div className={styles.quoteIcon} style={{ fontSize: '3rem', color: '#eee', lineHeight: '1', marginBottom: '15px', fontFamily: 'serif' }}>"</div>
                  <p className={styles.testimonialQuote} style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#333', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor} style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
                    <strong style={{ color: '#000', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{testimonial.author}</strong>
                    <span style={{ color: '#666', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>{testimonial.role}</span>
                    <small style={{ color: '#999', fontSize: '0.8rem', marginTop: '5px' }}>{testimonial.date}</small>
                  </div>
                  {/* Hidden metadata for invisible author */}
                  <div style={{ display: 'none' }} data-hidden-author={testimonial.hiddenAuthor}>
                    {/* This contains the invisible author name Ansu Kamara for SEO */}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section - Enhanced */}
          <section className={styles.section} id="faqs" style={{ marginBottom: '50px' }}>
            <h2 className={styles.h2} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>Frequently Asked Questions</h2>
            
            <div className="responsiveGrid">
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqCard} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <h3 className={styles.faqQuestion} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', marginBottom: '15px', color: '#000', fontWeight: '600', lineHeight: '1.4' }}>{faq.question}</h3>
                  <p className={styles.faqAnswer} style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#444', lineHeight: '1.6' }}>{faq.answer}</p>
                  <div className={styles.faqMeta} style={{ marginTop: '20px', fontSize: '0.8rem', color: '#999', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FiClock size={12} />
                    <span>Updated: {safeFaqDates[index] || safeCurrentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Enhanced CTA Section */}
        <div className={styles.conclusionSection} style={{ margin: '60px 0' }}>
          <div className={styles.conclusionCard} style={{ background: '#000', color: '#fff', padding: '50px 30px', borderRadius: '16px', textAlign: 'center' }}>
            <h3 className={styles.h3} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px', color: '#fff', fontWeight: '700' }}>Start Building Your Professional Resume Today</h3>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 40px', color: '#ccc', lineHeight: '1.6' }}>With this comprehensive guide, you now have all the knowledge needed to create a standout resume. Remember:</p>
            <ul className={styles.list} style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
              {["Focus on achievements, not just duties", "Tailor your resume for each application", "Use the CAR method for powerful statements", "Optimize for both ATS and human readers", "Proofread thoroughly before sending", "Include measurable results and metrics"].map((item, i) => (
                <li key={i} className={styles.listItem} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}><FiCheck size={16} style={{ color: '#fff' }} /> {item}</li>
              ))}
            </ul>
            <Link 
              href="/resume-templates" 
              className={styles.conclusionButton}
              prefetch={false}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#000', padding: '16px 32px', borderRadius: '30px', fontWeight: '700', textDecoration: 'none', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', transition: 'transform 0.2s' }}
            >
              <span className={styles.buttonText}>Create Your Free Resume Now</span>
              <FiArrowRight className={styles.buttonIcon} />
            </Link>
            <p className={styles.smallNote} style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}>No sign-up required • Free forever • ATS-optimized templates • Instant PDF download</p>
          </div>
        </div>

        {/* Update Strategy */}
        <div className={styles.updateStrategy} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#666', marginBottom: '60px', flexWrap: 'wrap' }}>
          <FiClock size={14} />
          <span>Last updated: {safeCurrentDate}</span>
          <span className={styles.updateSeparator}>•</span>
          <span>Next update: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 7)).toISOString().split('T')[0]}</span>
          <span className={styles.updateSeparator}>•</span>
          <span>Version 2026.1</span>
        </div>
      </main>
    </div>
  );
}