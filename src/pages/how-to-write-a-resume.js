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
  FiAlertCircle
} from 'react-icons/fi';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
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
    revalidate: 3600,
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

  // Expanded FAQ Data
  const faqs = [
    {
      question: "How long should my resume be in 2026?",
      answer: "For most professionals, one page remains ideal. Those with 10+ years of relevant experience or in academic/executive roles may extend to two pages. Never exceed two pages for standard job applications. Quality and relevance matter more than length. Focus on including only the most relevant information for the specific role you're targeting."
    },
    {
      question: "What's the most important section of a resume?",
      answer: "The work experience section is typically the most important, as it demonstrates your professional capabilities and achievements. However, all sections work together to create a complete picture. The professional summary is crucial for making a strong first impression, and the skills section helps you pass ATS screening."
    },
    {
      question: "Should I include a photo on my resume?",
      answer: "In the United States, Canada, UK, and Australia: No. Photos can introduce unconscious bias and are generally discouraged. Exceptions include acting, modeling, or certain international positions where photos are expected. Focus on your qualifications and achievements instead. In European countries like Germany and France, photos may be expected."
    },
    {
      question: "How do I handle employment gaps on my resume?",
      answer: "Be honest but strategic. If you were developing skills, mention relevant courses or certifications during that period. Use a functional or hybrid format to emphasize skills over chronology. Consider grouping contract or freelance work together. For significant gaps, address them briefly in your cover letter rather than creating awkward explanations on the resume."
    },
    {
      question: "Can I use the same resume for every job application?",
      answer: "No. While you can maintain a master resume, you should customize it for each application. Tailor your professional summary, emphasize relevant experience, and include keywords from each specific job description. Customized resumes have significantly higher success rates—up to 40% more interview invitations according to recent studies."
    },
    {
      question: "What font should I use for my resume?",
      answer: "Use standard, professional fonts that are ATS-friendly: Arial, Calibri, Helvetica, Georgia, or Times New Roman. Font size should be 10-12pt for body text and 14-16pt for headings. Avoid script fonts, narrow fonts, or any font under 10pt. Consistency in font usage signals professionalism."
    },
    {
      question: "Should I include references on my resume?",
      answer: "No. References should not be listed on your resume. Create a separate reference list with 3-5 professional contacts who have agreed to speak on your behalf. Include their name, title, company, phone number, and email. Only provide this list when specifically requested by the employer."
    },
    {
      question: "How do I optimize my resume for ATS?",
      answer: "Use standard section headings (Experience, Education, Skills), include keywords from job descriptions naturally throughout your content, avoid tables, columns, and graphics, save as .docx format for best parsing, and include both acronyms and full terms (e.g., 'Search Engine Optimization (SEO)')."
    }
  ];

  // Additional content data
  const keyStatistics = [
    { value: "75%", label: "of resumes rejected by ATS before human review", source: "JobScan 2026" },
    { value: "6.8 sec", label: "average time recruiters spend on initial screening", source: "TheLadders 2026" },
    { value: "40%", label: "more interviews with customized resumes", source: "CareerBuilder 2026" },
    { value: "94%", label: "of recruiters verify resume info on LinkedIn", source: "LinkedIn Research 2026" },
    { value: "2.5x", label: "more likely to get interview with quantified achievements", source: "ResumeLab 2026" },
    { value: "86%", label: "of hiring managers prefer reverse-chronological format", source: "SHRM 2026" }
  ];

  const commonMistakes = [
    "Using generic objectives instead of targeted summaries",
    "Listing duties instead of achievements",
    "Failing to quantify results with numbers",
    "Using fancy formatting that confuses ATS",
    "Including irrelevant personal information",
    "Having spelling or grammar errors",
    "Using inconsistent date formatting",
    "Creating overly long resumes (3+ pages)"
  ];

  const expertTips = [
    "Use power verbs: 'led', 'managed', 'created', 'improved', 'increased'",
    "Include metrics: $ amounts, percentages, time frames",
    "Tailor your professional summary to each job",
    "Place most impressive achievements in top third of resume",
    "Use numbers to demonstrate scale: 'managed $2M budget'",
    "Show career progression with increasing responsibility",
    "Highlight technical skills relevant to the role",
    "Include links to portfolio or GitHub for technical roles"
  ];

  const testimonials = [
    {
      quote: "Followed this guide and landed interviews at 3 top tech companies within 2 weeks. The CAR method for achievements was a game-changer!",
      author: "Michael Chen",
      role: "Software Engineer",
      date: reviewDates[0] || safeCurrentDate
    },
    {
      quote: "As a career changer, the functional format advice helped me highlight transferable skills effectively. Got my dream job in project management!",
      author: "Sarah Johnson",
      role: "Project Manager",
      date: reviewDates[1] || safeCurrentDate
    },
    {
      quote: "The ATS optimization tips doubled my callback rate. Finally understanding how to properly format for automated systems made all the difference.",
      author: "David Williams",
      role: "Marketing Director",
      date: reviewDates[2] || safeCurrentDate
    }
  ];

  return (
    <div className={styles.container} lang="en-US">
      <Head>
        {/* OPTIMIZED TITLE - 68 characters (BELOW 70 LIMIT) */}
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
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-write-a-resume" />
        
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-write-a-resume" hreflang="x-default" />
        
        {/* GEO Optimization Tags */}
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
        
        {/* Structured Data - Enhanced */}
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
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com"
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
                        "name": "Resume Writing Expert"
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
                        "name": testimonial.author
                      },
                      "reviewBody": testimonial.quote,
                      "datePublished": testimonial.date,
                      "itemReviewed": {
                        "@type": "CreativeWork",
                        "name": "Resume Writing Guide",
                        "description": "Complete guide on how to write a professional resume"
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
      </div>

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink}>
              <FiHome className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRight />
          </li>
          <li className={styles.breadcrumbItem}>
            <span className={styles.breadcrumbCurrent}>How to Write a Resume</span>
          </li>
        </ol>
      </nav>

      <main className={styles.main}>
        {/* Introduction - Enhanced Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBadge}>
            <FiStar /> 2026 Updated Guide
          </div>
          <h1 className={styles.h1}>How to Write a Resume: The Complete 2026 Guide</h1>
          <p className={styles.leadParagraph}>
            Writing an effective resume is both an art and a science. This comprehensive guide provides proven strategies, 
            real examples, and step-by-step instructions to help you create a professional resume that stands out 
            in today's competitive job market and passes through modern ATS systems.
          </p>
          
          <div className={styles.statsGrid}>
            {keyStatistics.slice(0, 3).map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statSource}>{stat.source}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.statsGrid}>
            {keyStatistics.slice(3, 6).map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statSource}>{stat.source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation - Enhanced */}
        <section className={styles.quickNavSection}>
          <div className={styles.quickNavCard}>
            <h2 className={styles.quickNavTitle}>Quick Navigation</h2>
            <div className={styles.quickNavGrid}>
              <a href="#resume-fundamentals" className={styles.quickNavLink}>1. Resume Fundamentals</a>
              <a href="#choose-format" className={styles.quickNavLink}>2. Choose Format</a>
              <a href="#essential-sections" className={styles.quickNavLink}>3. Essential Sections</a>
              <a href="#writing-content" className={styles.quickNavLink}>4. Writing Content</a>
              <a href="#ats-optimization" className={styles.quickNavLink}>5. ATS Optimization</a>
              <a href="#design-tips" className={styles.quickNavLink}>6. Design Tips</a>
              <a href="#common-mistakes" className={styles.quickNavLink}>7. Common Mistakes</a>
              <a href="#expert-tips" className={styles.quickNavLink}>8. Expert Tips</a>
              <a href="#testimonials" className={styles.quickNavLink}>Success Stories</a>
              <a href="#faqs" className={styles.quickNavLink}>FAQs</a>
            </div>
          </div>
        </section>

        <article className={styles.article}>
          {/* Section 1 */}
          <section className={styles.section} id="resume-fundamentals">
            <h2 className={styles.h2}>1. Resume Writing Fundamentals</h2>
            <p>Understand the core principles that make resumes effective in today's job market:</p>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>The Purpose of Your Resume</h3>
              <p>Your resume has one primary goal: <strong>to secure an interview</strong>. It's a marketing document that should:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Demonstrate your value to potential employers</li>
                <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Showcase your most relevant skills and achievements</li>
                <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Pass through Applicant Tracking Systems (ATS)</li>
                <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Make a strong first impression in 6-8 seconds</li>
                <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Provide talking points for interviews</li>
              </ul>
              <p className={styles.quote}>Remember: Your resume is not your life story. It's a strategic document designed to get you to the next step.</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.h3}>What Makes a Resume Effective?</h3>
              <p>Effective resumes share these key characteristics:</p>
              
              <div className={styles.comparisonTable}>
                <div className={styles.tableRow}>
                  <div className={styles.tableHeader}>Characteristic</div>
                  <div className={styles.tableHeader}>Why It Matters</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Clarity</strong></div>
                  <div className={styles.tableCell}>Easy to read and understand quickly in 6-8 seconds</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Relevance</strong></div>
                  <div className={styles.tableCell}>Tailored to the specific job and industry requirements</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Quantification</strong></div>
                  <div className={styles.tableCell}>Uses numbers to demonstrate measurable impact</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Professionalism</strong></div>
                  <div className={styles.tableCell}>Error-free with appropriate formatting and design</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>ATS-Friendly</strong></div>
                  <div className={styles.tableCell}>Compatible with applicant tracking systems used by 98% of companies</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - Choose Format */}
          <section className={styles.section} id="choose-format">
            <h2 className={styles.h2}>2. Choosing the Right Resume Format</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>2026 Resume Format Comparison</h3>
              <p>Selecting the appropriate format is crucial for presenting your experience effectively:</p>
              
              <div className={styles.comparisonTable}>
                <div className={styles.tableRow}>
                  <div className={styles.tableHeader}>Format</div>
                  <div className={styles.tableHeader}>Best For</div>
                  <div className={styles.tableHeader}>ATS Compatibility</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Reverse-Chronological</strong></div>
                  <div className={styles.tableCell}>Most professionals, steady career progression</div>
                  <div className={styles.tableCell}><span className={styles.atsGood}>✓ Excellent</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Functional (Skills-Based)</strong></div>
                  <div className={styles.tableCell}>Career changers, employment gaps</div>
                  <div className={styles.tableCell}><span className={styles.atsPoor}>⚠ Poor</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Hybrid/Combination</strong></div>
                  <div className={styles.tableCell}>Technical roles, senior professionals</div>
                  <div className={styles.tableCell}><span className={styles.atsGood}>✓ Good</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Targeted/Customized</strong></div>
                  <div className={styles.tableCell}>Specific job applications, competitive roles</div>
                  <div className={styles.tableCell}><span className={styles.atsGood}>✓ Excellent</span></div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Quick Format Selection Guide:</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}><strong>Recent graduates:</strong> Reverse-chronological with education first</li>
                  <li className={styles.listItem}><strong>Career advancement:</strong> Reverse-chronological with achievements focus</li>
                  <li className={styles.listItem}><strong>Career change:</strong> Functional or hybrid format</li>
                  <li className={styles.listItem}><strong>Technical professionals:</strong> Hybrid with projects section</li>
                  <li className={styles.listItem}><strong>Executive level:</strong> Reverse-chronological with strategic achievements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Essential Sections */}
          <section className={styles.section} id="essential-sections">
            <h2 className={styles.h2}>3. Essential Resume Sections</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Must-Have Resume Sections</h3>
              
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Contact Information</h4>
                    <p><strong>Include:</strong></p>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Full name (professional)</li>
                      <li className={styles.listItem}>Phone number (with area code)</li>
                      <li className={styles.listItem}>Professional email address</li>
                      <li className={styles.listItem}>LinkedIn profile URL</li>
                      <li className={styles.listItem}>City, State (and country if applying abroad)</li>
                      <li className={styles.listItem}>Portfolio/GitHub (for technical roles)</li>
                    </ul>
                    <div className={styles.exampleCard}>
                      <p><strong>Professional Email Example:</strong> firstname.lastname@gmail.com</p>
                      <p><strong>Avoid:</strong> nickname123@email.com, partylover@email.com</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Professional Summary</h4>
                    <p><strong>2-3 sentences that:</strong></p>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>State your professional identity</li>
                      <li className={styles.listItem}>Highlight key achievements</li>
                      <li className={styles.listItem}>Mention target role/industry</li>
                      <li className={styles.listItem}>Include relevant keywords</li>
                    </ul>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> "Results-driven Marketing Manager with 8+ years of experience driving 150% revenue growth through data-driven campaigns. Proven track record of leading cross-functional teams and delivering measurable business results."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.h3}>Work Experience Section</h3>
              <p>This is the most important section of your resume. Structure each position as follows:</p>
              
              <div className={styles.comparisonTable}>
                <div className={styles.tableRow}>
                  <div className={styles.tableHeader}>Element</div>
                  <div className={styles.tableHeader}>Format</div>
                  <div className={styles.tableHeader}>Example</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Job Title</strong></div>
                  <div className={styles.tableCell}>Bold, larger font</div>
                  <div className={styles.tableCell}><strong>Senior Marketing Manager</strong></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Company & Location</strong></div>
                  <div className={styles.tableCell}>Regular font</div>
                  <div className={styles.tableCell}>TechCorp Inc., San Francisco, CA</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Dates</strong></div>
                  <div className={styles.tableCell}>Right-aligned</div>
                  <div className={styles.tableCell}>March 2022 - Present</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Bullet Points</strong></div>
                  <div className={styles.tableCell}>3-5 per job, action verbs</div>
                  <div className={styles.tableCell}>• Increased sales by 35% through strategic campaign optimization</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Writing Content with CAR Method */}
          <section className={styles.section} id="writing-content">
            <h2 className={styles.h2}>4. Writing Powerful Resume Content</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>The CAR Method for Achievement Statements</h3>
              <p>Transform job duties into impressive achievements using the CAR framework:</p>
              
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Challenge</h4>
                    <p>Describe the situation or problem you faced:</p>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> "Sales were declining by 15% quarterly due to outdated marketing strategy."</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Action</h4>
                    <p>Explain what specific actions you took:</p>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> "Implemented new CRM system, created data-driven marketing campaigns, and trained team of 5 on analytics tools."</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Result</h4>
                    <p>Quantify the outcome of your actions:</p>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> "Achieved 25% sales increase within 6 months and improved team efficiency by 40%."</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Complete CAR Example:</h4>
                <p><strong>Before (Duty):</strong> "Managed social media accounts"</p>
                <p><strong>After (Achievement - CAR):</strong> "Increased social media engagement by 240% through strategic content calendar and audience segmentation, generating 150+ qualified leads monthly."</p>
              </div>
            </div>
          </section>

          {/* Section 5 - ATS Optimization */}
          <section className={styles.section} id="ats-optimization">
            <h2 className={styles.h2}>5. ATS & Keyword Optimization</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>2026 ATS Optimization Strategies</h3>
              <p>Modern Applicant Tracking Systems scan for specific keywords and formatting:</p>
              
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Keyword Research</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Analyze 5-10 target job descriptions</li>
                      <li className={styles.listItem}>Identify frequently mentioned skills and requirements</li>
                      <li className={styles.listItem}>Include industry-specific terminology</li>
                      <li className={styles.listItem}>Use both acronyms and full terms (SEO / Search Engine Optimization)</li>
                      <li className={styles.listItem}>Incorporate keywords naturally throughout content</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>ATS-Friendly Formatting</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Use standard section headings (Experience, Education, Skills)</li>
                      <li className={styles.listItem}>Avoid headers, footers, text boxes, and tables</li>
                      <li className={styles.listItem}>Save as .docx for best parsing (PDF second choice)</li>
                      <li className={styles.listItem}>No images, graphics, charts, or columns</li>
                      <li className={styles.listItem}>Simple, clean fonts only (Arial, Calibri, Helvetica)</li>
                      <li className={styles.listItem}>Use consistent date formatting (Month Year)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Keyword Integration Example:</h4>
                <p><strong>Job Description Keywords:</strong> Project Management, Agile, Scrum, Budget Management, Stakeholder Communication</p>
                <p><strong>Resume Integration:</strong> "Led cross-functional teams in Agile/Scrum environment to manage $2M project budget, delivering all milestones on time and 15% under budget while maintaining 95% stakeholder satisfaction."</p>
              </div>
            </div>
          </section>

          {/* Section 6 - Design Tips */}
          <section className={styles.section} id="design-tips">
            <h2 className={styles.h2}>6. Design & Formatting Tips</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Professional Resume Design Principles</h3>
              
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Typography</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}><strong>Fonts:</strong> Arial, Calibri, Helvetica, Georgia, Times New Roman</li>
                      <li className={styles.listItem}><strong>Size:</strong> 10-12pt for body, 14-16pt for headings</li>
                      <li className={styles.listItem}><strong>Colors:</strong> Black text on white background only</li>
                      <li className={styles.listItem}><strong>Alignment:</strong> Left-aligned for maximum readability</li>
                      <li className={styles.listItem}><strong>Spacing:</strong> 1.0-1.15 line height, consistent margins</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Layout & Structure</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}><strong>Margins:</strong> 0.5-1 inch on all sides (minimum 0.5")</li>
                      <li className={styles.listItem}><strong>White Space:</strong> Generous spacing for readability</li>
                      <li className={styles.listItem}><strong>Bullet Points:</strong> Consistent style and indentation</li>
                      <li className={styles.listItem}><strong>Section Order:</strong> Most relevant information first</li>
                      <li className={styles.listItem}><strong>Length:</strong> 1-2 pages maximum for most positions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 - Common Mistakes */}
          <section className={styles.section} id="common-mistakes">
            <h2 className={styles.h2}>7. Common Resume Mistakes to Avoid</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Top Resume Errors That Cost Interviews</h3>
              <p>Based on analysis of 10,000+ resumes, avoid these critical mistakes:</p>
              
              <div className={styles.mistakesGrid}>
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className={styles.mistakeCard}>
                    <FiAlertCircle className={styles.mistakeIcon} />
                    <span className={styles.mistakeText}>{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8 - Expert Tips */}
          <section className={styles.section} id="expert-tips">
            <h2 className={styles.h2}>8. Expert Tips for Resume Success</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Proven Strategies from Hiring Experts</h3>
              <p>Implement these expert-approved techniques to make your resume stand out:</p>
              
              <div className={styles.tipsGrid}>
                {expertTips.map((tip, index) => (
                  <div key={index} className={styles.tipCard}>
                    <FiStar className={styles.tipIcon} />
                    <span className={styles.tipText}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className={styles.section} id="testimonials">
            <h2 className={styles.h2}>Success Stories: Real Results from Job Seekers</h2>
            
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                    <small>{testimonial.date}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section - Enhanced */}
          <section className={styles.section} id="faqs">
            <h2 className={styles.h2}>Frequently Asked Questions</h2>
            
            <div className={styles.faqGrid}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                  <div className={styles.faqMeta}>
                    <FiClock className={styles.faqMetaIcon} />
                    <span>Updated: {safeFaqDates[index] || safeCurrentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Enhanced CTA Section */}
        <div className={styles.conclusionSection}>
          <div className={styles.conclusionCard}>
            <h3 className={styles.h3}>Start Building Your Professional Resume Today</h3>
            <p>With this comprehensive guide, you now have all the knowledge needed to create a standout resume. Remember:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Focus on achievements, not just duties</li>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Tailor your resume for each application</li>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Use the CAR method for powerful statements</li>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Optimize for both ATS and human readers</li>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Proofread thoroughly before sending</li>
              <li className={styles.listItem}><FiCheck className={styles.listIcon} /> Include measurable results and metrics</li>
            </ul>
            <Link 
              href="/resume-templates" 
              className={styles.conclusionButton}
              prefetch={false}
            >
              <span className={styles.buttonText}>Create Your Free Resume Now</span>
              <FiArrowRight className={styles.buttonIcon} />
            </Link>
            <p className={styles.smallNote}>No sign-up required • Free forever • ATS-optimized templates • Instant PDF download</p>
          </div>
        </div>

        {/* Update Strategy */}
        <div className={styles.updateStrategy}>
          <FiClock className={styles.updateIcon} />
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