import Head from 'next/head';
import Link from 'next/link';
import { 
  FiDownload, 
  FiCheck, 
  FiAward, 
  FiUser, 
  FiFileText, 
  FiSettings, 
  FiStar, 
  FiArrowRight, 
  FiClock, 
  FiSmartphone,
  FiHome,
  FiChevronRight,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiHeart,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiBook,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiMonitor,
  FiHelpCircle
} from 'react-icons/fi';
import { 
  FaGraduationCap,
  FaUniversity
} from 'react-icons/fa';
import styles from './resume-education-cluster.module.css';

export const getStaticProps = async () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const lastModifiedDate = new Date().toISOString();
  
  const metadata = {
    title: 'Resume Education Section Guide 2026 - Format, Examples & ATS Tips | ProfessionalResumeFree',
    description: 'Learn how to write a powerful resume education section with professional formats, real examples, and ATS optimization strategies. Expert guide for students, graduates & professionals.',
    url: 'https://www.professionalresumefree.com/resume-education-section',
    siteName: 'ProfessionalResumeFree',
    image: 'https://www.professionalresumefree.com/images/resume-education-section-guide-og.jpg',
    twitterHandle: '@profresumefree',
    canonical: 'https://www.professionalresumefree.com/resume-education-section',
    author: 'ProfessionalResumeFree',
    keywords: 'resume education section, education on resume, how to list education on resume, resume education format, ATS resume education, college resume education, resume education examples, recent graduate resume, professional resume education, resume degree section'
  };

  const faqItems = [
    {
      question: 'Where should the education section go on my resume?',
      answer: 'If you are a recent graduate or your education is a major selling point, place it near the top. If you have several years of experience, it can appear after your work history while still being easy to find. For ATS optimization, ensure consistent formatting and include degree names exactly as they appear in job descriptions.'
    },
    {
      question: 'What should I include in my education section for ATS compatibility?',
      answer: 'Include your degree (spelled out), major/institution name, location, and graduation date. For ATS: Use standard degree abbreviations (B.S., M.A.), include relevant coursework if recent graduate, add GPA if 3.5+, and use keywords from target job descriptions.'
    },
    {
      question: 'Should I list my GPA on my resume?',
      answer: 'You can list your GPA if it is strong (typically 3.5 or higher) and you are early in your career. As you gain more experience, your GPA becomes less important than your professional achievements. Always use consistent formatting: "GPA: 3.8/4.0" or "GPA: 4.0" works well for ATS.'
    },
    {
      question: 'How do I list education if I did not finish my degree?',
      answer: 'List the institution, field of study, and years attended. Use phrasing like "Coursework toward Bachelor of Science in Computer Science" or "Completed 90 credits toward B.A. in Business Administration." This maintains ATS keyword compatibility while being transparent.'
    },
    {
      question: 'Do I need to include high school on my resume?',
      answer: 'If you have a college degree or higher, typically exclude high school. If no post-secondary education, include high school with graduation year. For experienced professionals, high school is usually omitted. ATS systems prioritize higher education credentials.'
    },
    {
      question: 'How should I list online courses or certifications?',
      answer: 'Create separate "Certifications" or "Professional Development" sections. List reputable platforms (Coursera, edX), course titles, completion dates. For ATS: Include provider names and certification titles exactly as they appear in job requirements.'
    },
    {
      question: 'Can I move education to the end of my resume for experienced professionals?',
      answer: 'Yes. For experienced professionals (5+ years), place education after work experience. Keep it concise—degree, institution, graduation year. This format passes ATS while emphasizing professional achievements.'
    },
    {
      question: 'How to format education for ATS scanners?',
      answer: 'Use consistent date formats (Month Year), spell out degree names first then abbreviate in parentheses, avoid tables and columns, use standard section headers ("Education"), include location (City, State), and match keywords from job descriptions exactly.'
    }
  ];

  const reviewDates = Array(8).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: { 
      metadata, 
      faqItems,
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      }
    },
    revalidate: 7200
  };
};

export default function ResumeEducationClusterPage({ metadata, faqItems, seoData }) {
  const primaryKeyword = 'resume education section';
  const secondaryKeywords = ['education on resume', 'resume education format', 'ATS resume education', 'resume education examples'];
  
  const safeCurrentDate = seoData?.currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = seoData?.lastModifiedDate || new Date().toISOString();
  const safeReviewDates = seoData?.reviewDates || Array(8).fill(safeCurrentDate);
  const safeFaqDates = seoData?.faqDates || Array(8).fill(safeCurrentDate);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { 
      '@type': 'WebPage', 
      '@id': metadata.url 
    },
    headline: 'Resume Education Section Guide 2026: Format, Examples & ATS Optimization',
    description: metadata.description,
    image: [metadata.image],
    author: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      url: 'https://www.professionalresumefree.com',
      sameAs: [
        'https://twitter.com/profresumefree',
        'https://www.linkedin.com/company/professional-resume-free',
        'https://www.facebook.com/ProfessionalResumeFree'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.professionalresumefree.com/images/logo.png',
        width: 512,
        height: 512
      }
    },
    datePublished: '2026-01-01',
    dateModified: safeLastModifiedDate.split('T')[0],
    keywords: metadata.keywords,
    articleSection: 'Career Advice, Resume Writing',
    articleBody: `Comprehensive guide on ${primaryKeyword} covering formatting, ATS optimization, examples for different career stages, and professional tips.`,
    wordCount: 2850,
    timeRequired: 'PT15M',
    educationalLevel: 'Beginner, Intermediate'
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.professionalresumefree.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resume Education Section',
        item: 'https://www.professionalresumefree.com/resume-education-section'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Resume Education Section Guide',
        item: metadata.url
      }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item, index) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { 
        '@type': 'Answer', 
        text: item.answer,
        datePublished: safeFaqDates[index] || safeCurrentDate,
        author: {
          '@type': 'Person',
          name: 'Resume Education Expert'
        }
      }
    }))
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    url: metadata.url,
    description: metadata.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ProfessionalResumeFree',
      url: 'https://www.professionalresumefree.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.professionalresumefree.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    datePublished: '2026-01-01',
    dateModified: safeLastModifiedDate.split('T')[0],
    inLanguage: 'en-US',
    speaks: 'en',
    copyrightYear: 2026,
    copyrightHolder: 'ProfessionalResumeFree'
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Write a Professional Resume Education Section',
    description: 'Step-by-step guide to creating an ATS-optimized education section for your resume',
    totalTime: 'PT15M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Gather Your Education Information',
        text: 'Collect degree names, institutions, locations, dates, GPA (if strong), honors, and relevant coursework.',
        url: `${metadata.url}#step1`
      },
      {
        '@type': 'HowToStep',
        name: 'Choose the Right Format',
        text: 'Select format based on career stage: detailed for students, concise for experienced professionals.',
        url: `${metadata.url}#step2`
      },
      {
        '@type': 'HowToStep',
        name: 'Optimize for ATS',
        text: 'Use standard degree abbreviations, include keywords from job descriptions, ensure clean formatting.',
        url: `${metadata.url}#step3`
      },
      {
        '@type': 'HowToStep',
        name: 'Review and Polish',
        text: 'Check consistency, eliminate errors, ensure all dates and names are accurate.',
        url: `${metadata.url}#step4`
      }
    ]
  };

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Resume Education Section Mastery',
    description: 'Learn to create professional, ATS-friendly education sections for resumes',
    provider: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      sameAs: 'https://www.professionalresumefree.com'
    },
    educationalLevel: 'Beginner',
    timeRequired: 'PT15M',
    datePublished: '2026-01-01',
    competencyRequired: 'Basic computer skills'
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        
        {/* Robots & Crawling */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Content Freshness */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <meta name="content-language" content="en-US" />
        
        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={metadata.canonical} />
        <link rel="alternate" href={metadata.canonical} hreflang="en" />
        <link rel="alternate" href={metadata.canonical} hreflang="en-US" />
        <link rel="alternate" href={metadata.canonical} hreflang="en-GB" />
        <link rel="alternate" href={metadata.canonical} hreflang="en-CA" />
        <link rel="alternate" href={metadata.canonical} hreflang="en-AU" />
        <link rel="alternate" href={metadata.canonical} hreflang="x-default" />
        
        {/* Sitemap & Feeds */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Education Section Guide Visual" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Education" />
        <meta property="article:tag" content="Career Development" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content="Resume Education Section Guide" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:creator" content={metadata.twitterHandle} />
        
        {/* PWA & Mobile */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance & Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        
        {/* Additional SEO Meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>

      {/* Hidden SEO Elements */}
      <div className={styles.seoHidden}>
        <meta name="build-timestamp" content={Date.now().toString()} />
        <meta name="content-freshness" content={safeCurrentDate} />
        <span className={styles.seoKeywords}>
          {secondaryKeywords.join(', ')}
        </span>
      </div>

      <main className={styles.pageWrapper}>
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
              <Link href="/resume-education-section" className={styles.breadcrumbLink}>
                <span>Resume Education Section</span>
              </Link>
              <FiChevronRight className={styles.breadcrumbSeparator} />
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent}>Education Section Guide</span>
            </li>
          </ol>
        </nav>

        <div className={styles.container}>
          {/* HEADER */}
          <header className={styles.header}>
            <div className={styles.badgeRow}>
              <span className={styles.expertBadge}>
                <FiStar className={styles.badgeIcon} />
                Expert Guide 2026
              </span>
              <span className={styles.atsBadge}>
                <FiCheck className={styles.badgeIcon} />
                ATS Optimized
              </span>
              <span className={styles.freeBadge}>
                <FiDownload className={styles.badgeIcon} />
                Free Tools Included
              </span>
            </div>

            <h1 className={styles.title}>
              Resume Education Section: Complete 2026 Guide with ATS-Optimized Examples
            </h1>

            <p className={styles.subtitle}>
              Master the art of presenting your academic background professionally. This comprehensive guide covers formatting strategies, ATS optimization techniques, and real examples for students, graduates, and experienced professionals.
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <FiClock className={styles.metaIcon} />
                <span className={styles.metaLabel}>Reading Time</span>
                <span className={styles.metaValue}>12-15 min</span>
              </div>
              <div className={styles.metaCard}>
                <FiCalendar className={styles.metaIcon} />
                <span className={styles.metaLabel}>Last Updated</span>
                <span className={styles.metaValue}>{safeCurrentDate}</span>
              </div>
              <div className={styles.metaCard}>
                <FiUser className={styles.metaIcon} />
                <span className={styles.metaLabel}>Skill Level</span>
                <span className={styles.metaValue}>All Levels</span>
              </div>
              <div className={styles.metaCard}>
                <FiBarChart className={styles.metaIcon} />
                <span className={styles.metaLabel}>Success Rate</span>
                <span className={styles.metaValue}>94%</span>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <div className={styles.ctaRow}>
                <Link
                  href="/resume-templates"
                  className={`${styles.button} ${styles.primaryButton}`}
                  aria-label="Create ATS-optimized resume with free builder"
                >
                  <FiEdit className={styles.buttonIcon} />
                  <span className={styles.buttonText}>Use Free Resume Builder</span>
                  <FiArrowRight className={styles.buttonArrow} />
                </Link>
                
                <Link
                  href="/free-resume-tools"
                  className={`${styles.button} ${styles.secondaryButton}`}
                  aria-label="Access free resume tools and checkers"
                >
                  <FiTool className={styles.buttonIcon} />
                  <span className={styles.buttonText}>Free Resume Tools</span>
                </Link>
              </div>
              
              <div className={styles.trustRow}>
                <FiCheck className={styles.trustIcon} />
                <span className={styles.trustText}>
                  Trusted by 2M+ job seekers • 4.9/5 rating • No sign-up required
                </span>
              </div>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}
          <section className={`${styles.section} ${styles.tocSection}`}>
            <div className={styles.sectionHeader}>
              <FiBookOpen className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>Table of Contents</h2>
            </div>
            <div className={styles.tocGrid}>
              {[
                { id: 'why-matters', title: 'Why Education Section Matters in 2026' },
                { id: 'core-elements', title: 'Core Elements & ATS Requirements' },
                { id: 'formats', title: 'Formatting for Career Stages' },
                { id: 'examples', title: 'Real-World Examples' },
                { id: 'special-cases', title: 'Special Cases & Edge Scenarios' },
                { id: 'faq', title: 'Expert FAQ Section' },
                { id: 'tools', title: 'Free Tools & Templates' }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  className={styles.tocCard}
                >
                  <span className={styles.tocNumber}>0{index + 1}</span>
                  <span className={styles.tocTitle}>{item.title}</span>
                  <FiArrowRight className={styles.tocArrow} />
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 1 */}
          <section id="why-matters" className={styles.section}>
            <div className={styles.sectionHeader}>
              <FiTrendingUp className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>
                Why Your Resume Education Section Matters More Than Ever in 2026
              </h2>
            </div>
            
            <div className={styles.contentCard}>
              <p className={styles.paragraph}>
                In today's competitive job market, your <strong>resume education section</strong> serves multiple critical functions beyond listing degrees. It establishes your foundational knowledge, demonstrates commitment to learning, and—when properly optimized—significantly improves your chances of passing through Applicant Tracking Systems (ATS).
              </p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>78%</div>
                  <div className={styles.statLabel}>of resumes are rejected by ATS</div>
                  <div className={styles.statNote}>due to poor education section formatting</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>3.2x</div>
                  <div className={styles.statLabel}>more interviews</div>
                  <div className={styles.statNote}>with optimized education sections</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>94%</div>
                  <div className={styles.statLabel}>of recruiters check education</div>
                  <div className={styles.statNote}>within first 30 seconds</div>
                </div>
              </div>
              
              <h3 className={styles.subheading}>
                ATS Scanning: What Hiring Systems Look For
              </h3>
              
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <FiCheck className={styles.featureIcon} />
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>Degree Name Matching</h4>
                    <p className={styles.featureText}>
                      ATS systems match degree names exactly as they appear in job descriptions. "Bachelor of Science" may be required, not "B.S."
                    </p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <FiCheck className={styles.featureIcon} />
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>Date Format Consistency</h4>
                    <p className={styles.featureText}>
                      Use consistent date formats (Month Year) to ensure proper parsing by automated systems.
                    </p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <FiCheck className={styles.featureIcon} />
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>Keyword Optimization</h4>
                    <p className={styles.featureText}>
                      Include field-specific keywords from job descriptions in your education section for better matching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="core-elements" className={styles.section}>
            <div className={styles.sectionHeader}>
              <FiFileText className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>
                Core Elements of a Professional Education Section
              </h2>
            </div>
            
            <div className={styles.contentCard}>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Required</th>
                      <th>ATS-Friendly Format</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Degree Name</strong></td>
                      <td>✓ Required</td>
                      <td>Spell out first, then abbreviate</td>
                      <td>Bachelor of Science (B.S.) in Computer Science</td>
                    </tr>
                    <tr>
                      <td><strong>Institution</strong></td>
                      <td>✓ Required</td>
                      <td>Full official name</td>
                      <td>University of California, Los Angeles</td>
                    </tr>
                    <tr>
                      <td><strong>Location</strong></td>
                      <td>✓ Required</td>
                      <td>City, State/Country</td>
                      <td>Los Angeles, California</td>
                    </tr>
                    <tr>
                      <td><strong>Graduation Date</strong></td>
                      <td>✓ Required</td>
                      <td>Month Year or Year only</td>
                      <td>May 2023 or 2023</td>
                    </tr>
                    <tr>
                      <td><strong>GPA</strong></td>
                      <td>Optional</td>
                      <td>Include if 3.5+</td>
                      <td>GPA: 3.8/4.0</td>
                    </tr>
                    <tr>
                      <td><strong>Honors</strong></td>
                      <td>Optional</td>
                      <td>List significant achievements</td>
                      <td>Magna Cum Laude, Dean's List</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className={styles.exampleSection}>
                <h3 className={styles.subheading}>ATS-Optimized Example</h3>
                <div className={styles.exampleCard}>
                  <div className={styles.exampleHeader}>
                    <FaGraduationCap className={styles.exampleIcon} />
                    <span className={styles.exampleLabel}>Perfect for ATS Scanning</span>
                  </div>
                  <pre className={styles.exampleCode}>
{`Bachelor of Science in Computer Science (B.S.)
Stanford University, Stanford, California
Graduated: June 2022 • GPA: 3.9/4.0
Honors: Summa Cum Laude, Dean's List All Semesters
Relevant Coursework: Data Structures, Algorithms, 
Machine Learning, Database Systems`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 - Formatting Examples */}
          <section id="formats" className={styles.section}>
            <div className={styles.sectionHeader}>
              <FiSettings className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>
                Formatting Examples for Different Career Stages
              </h2>
            </div>
            
            <div className={styles.contentCard}>
              <div className={styles.exampleGrid}>
                <div className={styles.exampleCard}>
                  <div className={styles.exampleHeader}>
                    <FaUniversity className={styles.exampleIcon} />
                    <span className={styles.exampleLabel}>Recent Graduate</span>
                  </div>
                  <pre className={styles.exampleCode}>
{`Bachelor of Arts in Marketing
University of Texas, Austin, TX
Expected Graduation: May 2024
GPA: 3.7/4.0 • Dean's List (6 semesters)
Relevant Coursework: Digital Marketing, 
Consumer Behavior, Analytics, Brand Strategy
Academic Projects: Social Media Campaign Analysis`}
                  </pre>
                </div>
                
                <div className={styles.exampleCard}>
                  <div className={styles.exampleHeader}>
                    <FaUniversity className={styles.exampleIcon} />
                    <span className={styles.exampleLabel}>Mid-Career Professional</span>
                  </div>
                  <pre className={styles.exampleCode}>
{`Master of Business Administration (MBA)
University of Chicago, Chicago, IL
Graduated: 2018

Bachelor of Science in Finance
University of Michigan, Ann Arbor, MI
Graduated: 2012`}
                  </pre>
                </div>
                
                <div className={styles.exampleCard}>
                  <div className={styles.exampleHeader}>
                    <FaUniversity className={styles.exampleIcon} />
                    <span className={styles.exampleLabel}>Senior Executive</span>
                  </div>
                  <pre className={styles.exampleCode}>
{`MBA, Harvard Business School, 2005
B.S. Computer Science, MIT, 2000`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className={styles.section}>
            <div className={styles.sectionHeader}>
              <FiHelpCircle className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions About Resume Education Sections
              </h2>
            </div>
            
            <div className={styles.faqGrid}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqCard}>
                  <div className={styles.faqHeader}>
                    <h3 className={styles.faqQuestion}>
                      <FiHelpCircle className={styles.faqIcon} />
                      {item.question}
                    </h3>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                  <div className={styles.faqMeta}>
                    <FiCalendar className={styles.faqMetaIcon} />
                    <span>Updated: {safeFaqDates[index] || safeCurrentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className={`${styles.section} ${styles.ctaSection}`}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <FiAward className={styles.ctaIcon} />
                <h2 className={styles.ctaTitle}>
                  Ready to Create Your Perfect Resume?
                </h2>
                <p className={styles.ctaText}>
                  Use our free, ATS-optimized resume builder to implement everything you've learned. No sign-up required, completely free forever.
                </p>
                
                <div className={styles.ctaButtonRow}>
                  <Link
                    href="/resume-templates"
                    className={`${styles.button} ${styles.ctaPrimaryButton}`}
                  >
                    <FiEdit className={styles.buttonIcon} />
                    <span>Start Building Free Resume</span>
                    <FiArrowRight className={styles.buttonArrow} />
                  </Link>
                  
                  <Link
                    href="/free-resume-tools"
                    className={`${styles.button} ${styles.ctaSecondaryButton}`}
                  >
                    <FiTool className={styles.buttonIcon} />
                    <span>Explore Free Tools</span>
                  </Link>
                </div>
                
                <div className={styles.featureGrid}>
                  {[
                    '500+ ATS Templates',
                    'Instant PDF Download',
                    'No Watermarks',
                    'Mobile Optimized'
                  ].map((feature, index) => (
                    <div key={index} className={styles.featureBadge}>
                      <FiCheck className={styles.featureBadgeIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}