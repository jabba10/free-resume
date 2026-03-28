import styles from './kpage.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { FiCheck, FiHome, FiChevronRight, FiArrowRight, FiDownload, FiFileText, FiUser, FiAward, FiTool, FiStar, FiTrendingUp, FiMail, FiPhone, FiMapPin, FiBookOpen, FiClock, FiUsers, FiBriefcase, FiTarget, FiZap, FiShield, FiLayers, FiCode, FiGlobe } from 'react-icons/fi';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  const publishDate = new Date('2026-01-01T08:00:00+00:00').toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        publishDate,
        freshnessIndicator: currentDate
      },
      buildTimestamp
    },
    revalidate: 3600,
  };
}

export default function ResumeWritingForBeginners({ seoData, buildTimestamp }) {
  const freshnessIndicator = seoData?.freshnessIndicator || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = seoData?.lastModifiedDate || new Date().toISOString();
  const safeCurrentDate = seoData?.currentDate || new Date().toISOString().split('T')[0];

  const breadcrumbData = {
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
        "name": "Resume Writing for Beginners",
        "item": "https://www.professionalresumefree.com/resume-writing-for-beginners"
      }
    ]
  };

  const faqSchema = [
    {
      "@type": "Question",
      "name": "How do I write a resume with no work experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focus on education, skills, volunteer work, internships, academic projects, and extracurricular activities. Use a functional or combination resume format that emphasizes skills over work history. Highlight achievements in non-work settings.",
        "dateCreated": safeCurrentDate,
        "author": {
          "@type": "Person",
          "name": "Resume Expert Team"
        }
      }
    },
    {
      "@type": "Question",
      "name": "What should a beginner's resume include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact information, professional summary, education section, relevant skills (both hard and soft), academic projects, volunteer work, certifications, and any relevant coursework or extracurricular activities.",
        "dateCreated": safeCurrentDate,
        "author": {
          "@type": "Person",
          "name": "Resume Expert Team"
        }
      }
    },
    {
      "@type": "Question",
      "name": "How long should a beginner's resume be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For beginners with limited experience, one page is ideal and expected. Focus on quality content over quantity. Every section should add value to your application.",
        "dateCreated": safeCurrentDate,
        "author": {
          "@type": "Person",
          "name": "Resume Expert Team"
        }
      }
    },
    {
      "@type": "Question",
      "name": "What format is best for a first resume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Functional or combination resume formats work best for beginners as they highlight skills and education first. These formats minimize gaps in work history and emphasize transferable skills.",
        "dateCreated": safeCurrentDate,
        "author": {
          "@type": "Person",
          "name": "Resume Expert Team"
        }
      }
    }
  ];

  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Write Your First Professional Resume",
    "description": "Complete beginner's guide to creating a professional resume step by step",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Gather Your Information",
        "text": "Collect all personal, educational, and skills information including contact details, education history, skills list, and any relevant projects or activities.",
        "url": "#getting-started",
        "image": "https://www.professionalresumefree.com/images/step1-gather.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Choose a Beginner Template",
        "text": "Select a simple, clean resume template designed for beginners with limited experience.",
        "url": "#formatting-tips",
        "image": "https://www.professionalresumefree.com/images/step2-template.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Write Each Section",
        "text": "Fill in contact information, write a compelling summary, detail your education, list relevant skills, and include any projects or volunteer work.",
        "url": "#essential-sections",
        "image": "https://www.professionalresumefree.com/images/step3-sections.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Proofread and Optimize",
        "text": "Review for spelling errors, ensure consistent formatting, and optimize keywords for Applicant Tracking Systems (ATS).",
        "url": "#common-mistakes",
        "image": "https://www.professionalresumefree.com/images/step4-proofread.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Download and Apply",
        "text": "Save your resume as a PDF with a professional filename and start applying to relevant positions.",
        "url": "#final-steps",
        "image": "https://www.professionalresumefree.com/images/step5-download.jpg"
      }
    ]
  };

  const articleSchema = {
    "@type": "Article",
    "headline": "Resume Writing for Beginners: Complete Step-by-Step Guide 2026",
    "description": "Beginner-friendly guide to creating your first professional resume with no prior experience. Learn resume writing basics, formatting, and tips for job seekers with limited experience.",
    "image": [
      "https://www.professionalresumefree.com/images/beginner-resume-guide-og.jpg",
      "https://www.professionalresumefree.com/images/beginner-resume-templates.jpg",
      "https://www.professionalresumefree.com/images/resume-writing-process.jpg"
    ],
    "datePublished": seoData?.publishDate || "2026-01-01T08:00:00+00:00",
    "dateModified": safeLastModifiedDate,
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.professionalresumefree.com/resume-writing-for-beginners"
    },
    "articleSection": "Career Advice",
    "keywords": "resume writing for beginners, first resume, no experience resume, beginner resume guide, how to write a resume",
    "articleBody": "Complete guide covering getting started mindset, essential resume sections, writing without experience, highlighting skills, formatting tips, common mistakes to avoid, and final steps for creating your first professional resume."
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Shortened Title (62 characters) */}
        <title>Resume Writing for Beginners: Complete Step-by-Step Guide 2026</title>
        <meta 
          name="description" 
          content="First-time resume writing made easy! Learn how to create your first professional resume with no experience. Beginner-friendly guide with free ATS-optimized templates, examples, and tips. Start your career today!" 
        />
        <meta name="keywords" content="resume writing for beginners, first resume, no experience resume, beginner resume guide, how to write a resume, student resume, entry-level resume, resume with no work history" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical & Sitemap - Only one canonical tag */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-writing-for-beginners" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* International SEO */}
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/resume-writing-for-beginners" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta property="og:description" content="First-time resume writing made simple. Beginner guide with free ATS-optimized templates and examples for job seekers with no experience." />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-writing-for-beginners" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/beginner-resume-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beginner Resume Writing Guide - Step by Step Tutorial" />
        <meta property="article:published_time" content={seoData?.publishDate || "2026-01-01T08:00:00+00:00"} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Career Development" />
        <meta property="article:tag" content="Job Search" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta name="twitter:description" content="Beginner-friendly resume guide with free templates for first-time job seekers. Learn to create a professional resume with no experience." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/beginner-resume-guide-twitter.jpg" />
        <meta name="twitter:image:alt" content="Beginner Resume Writing Guide" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* App & Browser */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Writing for Beginners: Complete Step-by-Step Guide 2026" />
        <meta name="chatgpt-fts:description" content="First-time resume writing made easy! Learn how to create your first professional resume with no experience. Beginner-friendly guide with free templates." />
        <meta name="chatgpt-fts:keywords" content="resume writing, beginner resume, first resume, no experience resume, student resume" />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data-main"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/resume-writing-for-beginners#webpage",
                  "url": "https://www.professionalresumefree.com/resume-writing-for-beginners",
                  "name": "Resume Writing for Beginners: Complete Step-by-Step Guide 2026",
                  "description": "Beginner-friendly guide to creating your first professional resume with no prior experience. Learn resume writing basics, formatting, and tips for job seekers with limited experience.",
                  "datePublished": seoData?.publishDate || "2026-01-01T08:00:00+00:00",
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
                    "url": "https://www.professionalresumefree.com/images/beginner-resume-guide-og.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "breadcrumb": breadcrumbData,
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".articleTitle", ".leadParagraph", ".faqCard h3"]
                  }
                },
                articleSchema,
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/resume-writing-for-beginners#faqpage",
                  "mainEntity": faqSchema
                },
                howToSchema,
                {
                  "@type": "Service",
                  "serviceType": "Resume Writing Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-1234",
                      "contactType": "Customer Support",
                      "availableLanguage": ["en"]
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Global"
                  },
                  "description": "Free resume writing guide for beginners with no experience",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Getting Started: Mindset & Preparation"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Essential Resume Sections"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Writing Without Experience"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Highlighting Your Skills"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Simple Formatting & Design"
                    },
                    {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "Beginner Mistakes to Avoid"
                    },
                    {
                      "@type": "ListItem",
                      "position": 7,
                      "name": "Final Steps & Review"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <div className={styles.pageContainer} lang="en-US">
        {/* Hidden Freshness Indicators */}
        <div className={styles.freshnessIndicator}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
          <meta name="last-reviewed" content={safeCurrentDate} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                <FiHome className={styles.breadcrumbIcon} />
                <span>Home</span>
              </Link>
              <FiChevronRight className={styles.breadcrumbSeparator} />
            </li>
            <li className={styles.breadcrumbItem}>
              <Link href="/resume-writing-for-beginners" className={styles.breadcrumbLink}>
                <span>Resume Writing for Beginners</span>
              </Link>
              <FiChevronRight className={styles.breadcrumbSeparator} />
            </li>
            <li className={styles.breadcrumbItem} aria-current="page">
              <span className={styles.breadcrumbCurrent}>Beginner&apos;s Guide</span>
            </li>
          </ol>
        </nav>

        <main className={styles.main}>
          <article className={styles.article}>
            {/* Hero Section */}
            <header className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>
                  <FiStar className={styles.badgeIcon} />
                  <span className={styles.badgeText}>Complete Beginner&apos;s Guide</span>
                </div>
                <h1 className={styles.articleTitle}>Resume Writing for Beginners: Your Complete 2026 Step-by-Step Guide</h1>
                <p className={styles.leadParagraph}>
                  First-time resume writing made simple! This comprehensive guide breaks down everything you need to create a professional resume with <strong>no prior experience</strong>. Perfect for students, recent graduates, and career changers.
                </p>
                
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <FiUser className={styles.statIcon} />
                    <span className={styles.statNumber}>15,000+</span>
                    <span className={styles.statLabel}>Beginners Helped</span>
                  </div>
                  <div className={styles.statCard}>
                    <FiAward className={styles.statIcon} />
                    <span className={styles.statNumber}>94%</span>
                    <span className={styles.statLabel}>Success Rate</span>
                  </div>
                  <div className={styles.statCard}>
                    <FiTrendingUp className={styles.statIcon} />
                    <span className={styles.statNumber}>3x</span>
                    <span className={styles.statLabel}>More Interviews</span>
                  </div>
                  <div className={styles.statCard}>
                    <FiFileText className={styles.statIcon} />
                    <span className={styles.statNumber}>0$</span>
                    <span className={styles.statLabel}>Free Forever</span>
                  </div>
                </div>

                <div className={styles.heroCta}>
                  <Link 
                    href="/resume-templates" 
                    className={styles.primaryButton}
                    aria-label="Start building your free beginner resume now"
                  >
                    <FiDownload className={styles.buttonIcon} />
                    <span>Start Your Free Resume Now</span>
                    <FiArrowRight className={styles.buttonArrow} />
                  </Link>
                  <Link 
                    href="#faqs" 
                    className={styles.secondaryButton}
                    aria-label="Jump to frequently asked questions"
                  >
                    <span>View FAQs</span>
                  </Link>
                </div>
              </div>
            </header>

            {/* Table of Contents */}
            <section className={styles.tocSection}>
              <div className={styles.tocCard}>
                <h2 className={styles.sectionTitle}>What You&apos;ll Learn in This Guide</h2>
                <nav aria-label="Article Navigation">
                  <ul className={styles.tocList}>
                    <li className={styles.tocItem}>
                      <a href="#getting-started" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>1. Getting Started: Mindset & Preparation</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#essential-sections" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>2. Essential Resume Sections</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#no-experience" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>3. Writing Without Experience</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#skills-section" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>4. Highlighting Your Skills</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#formatting-tips" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>5. Simple Formatting & Design</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#common-mistakes" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>6. Beginner Mistakes to Avoid</span>
                      </a>
                    </li>
                    <li className={styles.tocItem}>
                      <a href="#final-steps" className={styles.tocLink}>
                        <FiChevronRight className={styles.tocIcon} />
                        <span>7. Final Steps & Review</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>

            {/* Main Content Sections */}
            <section id="getting-started" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>1. Getting Started: The Right Mindset for Success</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Your Resume is Your Personal Marketing Tool</h3>
                <p className={styles.cardText}>
                  Think of your resume as a brochure about YOU. It&apos;s not just a list of facts - it&apos;s a strategic document designed to convince employers that you&apos;re the right person for the job. Every element should work toward this goal.
                </p>
                <p className={styles.cardText}>
                  <strong>Remember:</strong> Everyone starts somewhere. Even CEOs had first resumes. Your lack of extensive experience doesn&apos;t mean you lack value. Focus on your potential, willingness to learn, and transferable skills.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>What You&apos;ll Need to Begin</h3>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>Personal Information:</strong> Full name, professional email, phone number, location</span>
                  </li>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>Education History:</strong> Schools, degrees, graduation dates, relevant coursework</span>
                  </li>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>Any Experience:</strong> Part-time jobs, internships, volunteer work, freelance projects</span>
                  </li>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>Skills List:</strong> Both technical abilities and personal strengths</span>
                  </li>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>Achievements:</strong> Academic awards, projects, certifications, competitions</span>
                  </li>
                  <li className={styles.featureItem}>
                    <FiCheck className={styles.featureIcon} />
                    <span><strong>References:</strong> 2-3 people who can vouch for you (optional on resume)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="essential-sections" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>2. Essential Resume Sections Explained</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Must-Have Sections for Beginners</h3>
                
                <div className={styles.tableContainer}>
                  <table className={styles.comparisonTable}>
                    <thead>
                      <tr>
                        <th scope="col" className={styles.tableHeader}>Section</th>
                        <th scope="col" className={styles.tableHeader}>What to Include</th>
                        <th scope="col" className={styles.tableHeader}>Beginner Tips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.tableRow}>
                        <td className={styles.tableCell}><strong>Contact Information</strong></td>
                        <td className={styles.tableCell}>Name, phone, professional email, location, LinkedIn profile</td>
                        <td className={styles.tableCell}>Use a professional email address (not nickname@email.com)</td>
                      </tr>
                      <tr className={styles.tableRow}>
                        <td className={styles.tableCell}><strong>Professional Summary</strong></td>
                        <td className={styles.tableCell}>2-3 sentence overview highlighting your potential and key skills</td>
                        <td className={styles.tableCell}>Focus on what you can offer, not what you lack</td>
                      </tr>
                      <tr className={styles.tableRow}>
                        <td className={styles.tableCell}><strong>Education</strong></td>
                        <td className={styles.tableCell}>Schools, degrees, dates, GPA (if 3.0+), relevant coursework</td>
                        <td className={styles.tableCell}>List most recent education first, include expected graduation</td>
                      </tr>
                      <tr className={styles.tableRow}>
                        <td className={styles.tableCell}><strong>Skills</strong></td>
                        <td className={styles.tableCell}>Technical abilities and personal strengths relevant to target jobs</td>
                        <td className={styles.tableCell}>Group similar skills together (Technical, Soft, Language)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="no-experience" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>3. Writing a Resume With Little or No Experience</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>How to Showcase Your Value Without Traditional Experience</h3>
                
                <div className={styles.gridContainer}>
                  <div className={styles.gridColumn}>
                    <div className={styles.featureCard}>
                      <FiFileText className={styles.featureCardIcon} />
                      <h4 className={styles.featureCardTitle}>Academic Projects</h4>
                      <ul className={styles.featureCardList}>
                        <li className={styles.featureCardListItem}>Major research papers and theses</li>
                        <li className={styles.featureCardListItem}>Group projects with measurable outcomes</li>
                        <li className={styles.featureCardListItem}>Presentations you led or contributed to</li>
                        <li className={styles.featureCardListItem}>Case studies and analyses</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.gridColumn}>
                    <div className={styles.featureCard}>
                      <FiUser className={styles.featureCardIcon} />
                      <h4 className={styles.featureCardTitle}>Volunteer & Extracurricular</h4>
                      <ul className={styles.featureCardList}>
                        <li className={styles.featureCardListItem}>Club leadership positions</li>
                        <li className={styles.featureCardListItem}>Community service and volunteering</li>
                        <li className={styles.featureCardListItem}>Sports team participation</li>
                        <li className={styles.featureCardListItem}>Event organization and planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={styles.exampleCard}>
                  <h4 className={styles.exampleTitle}>Example Achievement Statements:</h4>
                  <ul className={styles.exampleList}>
                    <li className={styles.exampleListItem}>&quot;Led a 4-person team in developing a marketing plan that increased hypothetical sales by 25%&quot;</li>
                    <li className={styles.exampleListItem}>&quot;Organized campus food drive serving 200+ families in local community&quot;</li>
                    <li className={styles.exampleListItem}>&quot;Managed social media accounts for student organization, increasing engagement by 40%&quot;</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="skills-section" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>4. Highlighting Your Skills Effectively</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Identifying and Presenting Transferable Skills</h3>
                
                <div className={styles.gridContainer}>
                  <div className={styles.gridColumn}>
                    <div className={styles.skillsCard}>
                      <FiTool className={styles.skillsIcon} />
                      <h4 className={styles.skillsTitle}>Hard Skills</h4>
                      <ul className={styles.skillsList}>
                        <li className={styles.skillsListItem}>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
                        <li className={styles.skillsListItem}>Basic programming (HTML, Python, JavaScript)</li>
                        <li className={styles.skillsListItem}>Social media management platforms</li>
                        <li className={styles.skillsListItem}>Language proficiency levels</li>
                        <li className={styles.skillsListItem}>Data entry and analysis</li>
                        <li className={styles.skillsListItem}>Graphic design software</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.gridColumn}>
                    <div className={styles.skillsCard}>
                      <FiAward className={styles.skillsIcon} />
                      <h4 className={styles.skillsTitle}>Soft Skills</h4>
                      <ul className={styles.skillsList}>
                        <li className={styles.skillsListItem}>Verbal and written communication</li>
                        <li className={styles.skillsListItem}>Teamwork and collaboration</li>
                        <li className={styles.skillsListItem}>Problem-solving and critical thinking</li>
                        <li className={styles.skillsListItem}>Time management and organization</li>
                        <li className={styles.skillsListItem}>Adaptability and flexibility</li>
                        <li className={styles.skillsListItem}>Leadership and initiative</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="formatting-tips" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>5. Simple Formatting & Design Tips</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Beginner-Friendly Formatting Guidelines</h3>
                
                <div className={styles.gridContainer}>
                  <div className={styles.gridColumn}>
                    <div className={styles.tipCard}>
                      <h4 className={styles.tipTitle}>DO</h4>
                      <ul className={styles.tipList}>
                        <li className={styles.tipListItem}>Use clean, readable fonts (Arial, Calibri, Times New Roman)</li>
                        <li className={styles.tipListItem}>Maintain consistent spacing and margins</li>
                        <li className={styles.tipListItem}>Use bullet points for easy scanning</li>
                        <li className={styles.tipListItem}>Keep margins at 0.5-1 inch on all sides</li>
                        <li className={styles.tipListItem}>Save as PDF for consistent formatting</li>
                        <li className={styles.tipListItem}>Use bold for section headers only</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.gridColumn}>
                    <div className={styles.tipCard}>
                      <h4 className={styles.tipTitle}>DON&apos;T</h4>
                      <ul className={styles.tipList}>
                        <li className={styles.tipListItem}>Use multiple font colors or styles</li>
                        <li className={styles.tipListItem}>Include personal photos or graphics</li>
                        <li className={styles.tipListItem}>Use fancy borders or backgrounds</li>
                        <li className={styles.tipListItem}>Make text too small (below 11pt)</li>
                        <li className={styles.tipListItem}>Use slang or informal language</li>
                        <li className={styles.tipListItem}>Overuse italics or underlining</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>6. Common Beginner Mistakes to Avoid</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Top Errors That Get Beginner Resumes Rejected</h3>
                <ul className={styles.mistakesList}>
                  <li className={styles.mistakesItem}>
                    <strong>Typos and Grammar Errors:</strong> Always proofread multiple times and use tools like Grammarly
                  </li>
                  <li className={styles.mistakesItem}>
                    <strong>Being Too Vague:</strong> Use specific examples and quantify achievements when possible
                  </li>
                  <li className={styles.mistakesItem}>
                    <strong>Including Irrelevant Information:</strong> Tailor content to each specific job application
                  </li>
                  <li className={styles.mistakesItem}>
                    <strong>Using an Unprofessional Email:</strong> Create a simple professional email address
                  </li>
                  <li className={styles.mistakesItem}>
                    <strong>Making It Too Long:</strong> One page is perfect for beginners - quality over quantity
                  </li>
                  <li className={styles.mistakesItem}>
                    <strong>Not Customizing:</strong> Tailor your resume for each application using keywords from job description
                  </li>
                </ul>
                
                <div className={styles.checklistCard}>
                  <h4 className={styles.checklistTitle}>Quick Pre-Submission Checklist</h4>
                  <ul className={styles.checklistList}>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>No spelling or grammar errors</span>
                    </li>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>Contact information is correct and professional</span>
                    </li>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>File saved as PDF with professional name</span>
                    </li>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>Tailored for specific job with keywords</span>
                    </li>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>Easy to read and scan in 6-8 seconds</span>
                    </li>
                    <li className={styles.checklistItem}>
                      <FiCheck className={styles.checklistIcon} />
                      <span>Consistent formatting throughout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="final-steps" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>7. Final Steps & Putting It All Together</h2>
              
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Your Action Plan for Resume Success</h3>
                <ol className={styles.actionList}>
                  <li className={styles.actionItem}>
                    <strong>Gather All Information:</strong> Collect personal, educational, skills, and achievement data
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Choose the Right Template:</strong> Select a clean, ATS-friendly beginner template
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Write Your First Draft:</strong> Focus on getting content down without perfectionism
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Review and Refine:</strong> Check for errors and improve wording and formatting
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Get External Feedback:</strong> Ask mentors, teachers, or career counselors to review
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Finalize Your Resume:</strong> Make final adjustments and save as professionally named PDF
                  </li>
                  <li className={styles.actionItem}>
                    <strong>Start Applying Strategically:</strong> Begin sending to relevant positions with customized cover letters
                  </li>
                </ol>
                
                <div className={styles.ctaCard}>
                  <h4 className={styles.ctaTitle}>Ready to Create Your First Professional Resume?</h4>
                  <p className={styles.ctaText}>
                    Use our beginner-friendly resume builder with guided templates specifically designed for first-time job seekers. No experience needed - we guide you every step of the way.
                  </p>
                  <div className={styles.ctaButtons}>
                    <Link 
                      href="/resume-templates" 
                      className={styles.primaryButton}
                      aria-label="Start building your free beginner resume"
                    >
                      <FiDownload className={styles.buttonIcon} />
                      <span>Start Building Free Resume</span>
                      <FiArrowRight className={styles.buttonArrow} />
                    </Link>
                    <Link 
                      href="/free-cover-letter-generator" 
                      className={styles.secondaryButton}
                      aria-label="Browse free cover letter generator"
                    >
                      <FiFileText className={styles.buttonIcon} />
                      <span>View Beginner Cover Letter Generator</span>
                    </Link>
                  </div>
                  <div className={styles.ctaFeatures}>
                    <div className={styles.ctaFeature}>
                      <FiCheck className={styles.ctaFeatureIcon} />
                      <span>ATS-Optimized Beginner Templates</span>
                    </div>
                    <div className={styles.ctaFeature}>
                      <FiCheck className={styles.ctaFeatureIcon} />
                      <span>No Sign Up Required</span>
                    </div>
                    <div className={styles.ctaFeature}>
                      <FiCheck className={styles.ctaFeatureIcon} />
                      <span>Free PDF Download</span>
                    </div>
                    <div className={styles.ctaFeature}>
                      <FiCheck className={styles.ctaFeatureIcon} />
                      <span>Step-by-Step Guidance</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resourcesCard}>
                  <h4 className={styles.resourcesTitle}>Continue Your Learning Journey</h4>
                  <ul className={styles.resourcesList}>
                    <li className={styles.resourcesItem}>
                      <Link href="/how-to-create-a-resume-with-no-experience" className={styles.resourcesLink}>
                        How to Create a Resume with No Experience
                      </Link>
                    </li>
                    <li className={styles.resourcesItem}>
                      <Link href="/what-to-put-on-a-resume" className={styles.resourcesLink}>
                        What to Put on a Resume: Complete Checklist
                      </Link>
                    </li>
                    <li className={styles.resourcesItem}>
                      <Link href="/how-to-write-a-resume-for-a-job" className={styles.resourcesLink}>
                        How to Write a Resume for a Specific Job
                      </Link>
                    </li>
                    <li className={styles.resourcesItem}>
                      <Link href="/free-ats-resume-checker" className={styles.resourcesLink}>
                        Free ATS Resume Checker Tool
                      </Link>
                    </li>
                    <li className={styles.resourcesItem}>
                      <Link href="/free-resume-tools" className={styles.resourcesLink}>
                        Free Resume Tools
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>Beginner Resume FAQs</h2>
              
              <div className={styles.faqGrid}>
                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>How do I write a resume with no work experience?</h3>
                  <p className={styles.faqAnswer}>
                    Focus on education, skills, volunteer work, internships, academic projects, and extracurricular activities. Use a functional or combination resume format that emphasizes skills over work history. Highlight transferable skills gained through school, hobbies, or personal projects, and quantify achievements where possible.
                  </p>
                </div>

                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>What should a beginner&apos;s resume include?</h3>
                  <p className={styles.faqAnswer}>
                    Contact information, professional summary or objective statement, education section (most important for beginners), relevant skills (both hard and soft), projects or coursework, volunteer experience, certifications, and any relevant extracurricular activities. Keep it concise and targeted to one page maximum.
                  </p>
                </div>

                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>How long should a beginner&apos;s resume be?</h3>
                  <p className={styles.faqAnswer}>
                    For beginners with little experience, one page is sufficient and expected by employers. Never exceed one page until you have 5+ years of professional experience. Focus on quality over quantity - make every line count and ensure it adds value to your application.
                  </p>
                </div>

                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>What format is best for a first resume?</h3>
                  <p className={styles.faqAnswer}>
                    Functional or combination resume formats work best for beginners. These formats allow you to highlight skills and education at the top when you have limited work experience. Avoid the chronological format if you have little to no work history, as it emphasizes employment gaps.
                  </p>
                </div>

                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>Should I include references on my first resume?</h3>
                  <p className={styles.faqAnswer}>
                    No, don&apos;t include references directly on the resume. Create a separate reference page and provide it only when requested. Use the valuable space on your resume for more important content. You can simply write &quot;References available upon request&quot; at the bottom if you wish.
                  </p>
                </div>

                <div className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>Can I use a resume template as a beginner?</h3>
                  <p className={styles.faqAnswer}>
                    Absolutely! Using a professionally designed template is highly recommended for beginners. It ensures proper formatting, organization, and ATS compatibility. Our beginner templates are specifically designed to highlight your strengths when you have limited experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCtaSection}>
              <div className={styles.finalCtaCard}>
                <h2 className={styles.finalCtaTitle}>Start Your Career Journey Today</h2>
                <p className={styles.finalCtaText}>
                  Don&apos;t let lack of experience hold you back. Create a professional resume that showcases your potential and gets you noticed by employers.
                </p>
                <div className={styles.finalCtaButtons}>
                  <Link 
                    href="/resume-templates" 
                    className={styles.primaryButton}
                    aria-label="Create your free professional resume now"
                  >
                    <FiDownload className={styles.buttonIcon} />
                    <span>Create Free Resume Now</span>
                    <FiArrowRight className={styles.buttonArrow} />
                  </Link>
                  
                </div>
                
              </div>
            </section>
          </article>
        </main>

      
        
      </div>
    </>
  );
}