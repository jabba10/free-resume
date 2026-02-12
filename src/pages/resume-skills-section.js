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
  FiLayers
} from 'react-icons/fi';
import styles from './resume-skills-section.module.css';

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
    title: 'Resume Skills Section Guide | ATS-Optimized Examples 2026 | ProfessionalResumeFree',
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

  // Comprehensive structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${metadata.url}#webpage`,
        "url": metadata.url,
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
            },
            "sameAs": [
              "https://twitter.com/profresumefree",
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
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
        "mainEntityOfPage": `${metadata.url}#webpage`,
        "articleSection": "Resume Writing",
        "keywords": "resume skills, ATS skills, hard skills, soft skills, resume writing, job search",
        "wordCount": "2500",
        "timeRequired": "PT15M",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".title", ".subtitle", ".sectionTitle"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item, index) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Resume Writing Expert"
            }
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
            "text": "Extract key skills and keywords from your target job postings.",
            "url": `${metadata.url}#tailoring`
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Categorize Your Skills",
            "text": "Group skills into hard skills, soft skills, and technical proficiencies.",
            "url": `${metadata.url}#types-of-skills`
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Format for ATS",
            "text": "Use clear headings and bullet points that automated systems can read.",
            "url": `${metadata.url}#formatting`
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Tailor to Each Application",
            "text": "Customize your skills section for every job application to match keywords.",
            "url": `${metadata.url}#tailoring`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="resume skills section, ATS skills list, hard skills examples, soft skills for resume, resume writing 2026, skills-based resume, technical skills, professional skills" />
        <meta name="author" content="ProfessionalResumeFree" />
        
        {/* Robots & Viewport */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Freshness Signals */}
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href={metadata.url} />
        <link rel="alternate" href={metadata.url} hreflang="en" />
        <link rel="alternate" href={metadata.url} hreflang="en-US" />
        <link rel="alternate" href={metadata.url} hreflang="en-GB" />
        <link rel="alternate" href={metadata.url} hreflang="en-CA" />
        <link rel="alternate" href={metadata.url} hreflang="en-AU" />
        <link rel="alternate" href={metadata.url} hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Skills Section Guide - ATS Optimized Examples" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-29T00:00:00Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Job Search" />
        <meta property="article:tag" content="Career Development" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content="Resume Skills Section Guide" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:creator" content={metadata.twitterHandle} />
        
        {/* PWA & Browser */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Performance Optimization */}
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <main className={styles.pageWrapper} lang="en-US">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            {seoData?.breadcrumbData?.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.url.replace('https://www.professionalresumefree.com', '')} 
                  className={styles.breadcrumbLink}
                >
                  {index === 0 && <FiHome className={styles.breadcrumbIcon} />}
                  <span className={styles.breadcrumbText}>{item.name}</span>
                </Link>
                {index < seoData.breadcrumbData.length - 1 && (
                  <span className={styles.breadcrumbSeparator}>
                    <FiChevronRight />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.container}>
          {/* Header Section */}
          <header className={styles.header}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Expert Guide | Updated January 2026 | ATS-Optimized Strategies
              </span>
            </div>

            <h1 className={styles.title}>
              RESUME SKILLS SECTION: Build a High-Impact Skills Hub That Gets You Hired
            </h1>

            <p className={styles.subtitle}>
              A complete, experience-backed guide to crafting a resume skills section that passes ATS filters, impresses hiring managers, and strengthens your entire resume strategy.
            </p>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <FiClock className={styles.metaIcon} />
                <span>Reading Time: 12–15 minutes</span>
              </div>
              <div className={styles.metaItem}>
                <FiFileText className={styles.metaIcon} />
                <span>Experience Level: All</span>
              </div>
              <div className={styles.metaItem}>
                <FiTrendingUp className={styles.metaIcon} />
                <span>Updated: {safeCurrentDate}</span>
              </div>
            </div>

            <div className={styles.buttonRow}>
              <Link
                href="/resume-templates"
                className={styles.primaryButton}
                aria-label="View ATS-optimized resume templates"
              >
                <FiFileText className={styles.buttonIcon} />
                <span>Resume Templates</span>
              </Link>
              <Link
                href="/free-resume-tools"
                className={styles.secondaryButton}
                aria-label="Explore free resume tools"
              >
                <FiTool className={styles.buttonIcon} />
                <span>Free Resume Tools</span>
              </Link>
              <Link
                href="/complete-resume-resource-library"
                className={styles.secondaryButton}
                aria-label="Browse resume resource library"
              >
                <FiLayers className={styles.buttonIcon} />
                <span>Resource Library</span>
              </Link>
            </div>
          </header>

          {/* Table of Contents */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Table of Contents</h2>
            <ul className={styles.tocList}>
              <li>
                <a href="#why-skills-matter" className={styles.tocLink}>
                  Why Your Skills Section Matters
                </a>
              </li>
              <li>
                <a href="#types-of-skills" className={styles.tocLink}>
                  Hard Skills vs. Soft Skills vs. Transferable Skills
                </a>
              </li>
              <li>
                <a href="#formatting" className={styles.tocLink}>
                  Formatting Strategies (2026 Best Practices)
                </a>
              </li>
              <li>
                <a href="#tailoring" className={styles.tocLink}>
                  Tailoring Your Skills to Each Job
                </a>
              </li>
              <li>
                <a href="#examples" className={styles.tocLink}>
                  Skills Section Examples by Role
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.tocLink}>
                  Frequently Asked Questions (2026)
                </a>
              </li>
            </ul>
          </section>

          {/* Why Skills Matter Section */}
          <section id="why-skills-matter" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Why Your {primaryKeyword} Matters More Than You Think
            </h2>

            <p className={styles.paragraph}>
              Recruiters scan resumes in seconds. They're not reading—they're searching for proof that you can do the job. Your skills section is one of the fastest ways to communicate that proof. It acts as a high-level snapshot of your capabilities aligned with the role.
            </p>

            <p className={styles.paragraph}>
              Modern hiring relies heavily on Applicant Tracking Systems (ATS). These systems scan resumes for specific keywords. If your skills section is vague or generic, your resume may never reach a human reviewer. A well-structured skills section dramatically increases your chances of passing ATS filters.
            </p>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Key Hiring Insights (2026)</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Hiring Insight</th>
                      <th scope="col">What It Means</th>
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
          <section id="types-of-skills" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Hard Skills vs. Soft Skills vs. Transferable Skills
            </h2>

            <p className={styles.paragraph}>
              A strong resume includes a balanced mix of hard, soft, and transferable skills. Hard skills are technical and measurable. Soft skills describe how you work with others. Transferable skills apply across roles and industries.
            </p>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Skill Type Comparison (2026)</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Skill Type</th>
                      <th scope="col">Examples</th>
                      <th scope="col">Best Use</th>
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
          <section id="formatting" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Formatting Strategies for a High-Impact Skills Section
            </h2>

            <p className={styles.paragraph}>
              Formatting affects how quickly recruiters understand your value. Use clear headings, short lists, and grouped categories to improve readability and ATS parsing.
            </p>

            <h3 className={styles.subheading}>Step-by-Step Formatting (2026 Best Practices)</h3>
            <ol className={styles.orderedList}>
              <li className={styles.listItem}>
                Use a clear heading: "Skills", "Core Competencies", or "Technical Proficiencies"
              </li>
              <li className={styles.listItem}>
                Group related skills with subheadings (e.g., "Programming Languages", "Analytics Tools")
              </li>
              <li className={styles.listItem}>
                Prioritize relevance: Place job-specific skills first
              </li>
              <li className={styles.listItem}>
                Include 8-12 targeted skills maximum to avoid dilution
              </li>
              <li className={styles.listItem}>
                Verify every skill appears in your experience section with proof points
              </li>
            </ol>
          </section>

          {/* Tailoring Section */}
          <section id="tailoring" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              How to Tailor Your Skills to Each Job Description (2026 Method)
            </h2>

            <p className={styles.paragraph}>
              Tailoring your skills is the #1 most effective way to improve interview rates in today's competitive market. Start by extracting keywords from the job description and aligning them with your verified experience.
            </p>

            <h3 className={styles.subheading}>Practical Workflow</h3>
            <ul className={styles.unorderedList}>
              <li className={styles.listItem}>
                Identify repeated keywords and required competencies in the job posting
              </li>
              <li className={styles.listItem}>
                Map each keyword to specific projects or achievements in your background
              </li>
              <li className={styles.listItem}>
                Prioritize skills mentioned in the top third of the job description
              </li>
              <li className={styles.listItem}>
                Mirror employer language precisely (e.g., "Google Analytics 4" not just "Analytics")
              </li>
              <li className={styles.listItem}>
                Remove outdated or irrelevant skills to maintain focus
              </li>
            </ul>
          </section>

          {/* Examples Section */}
          <section id="examples" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Resume Skills Section Examples by Role (2026)
            </h2>

            <div className={styles.exampleGrid}>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Software Engineer</h3>
                <div className={styles.skillCategories}>
                  <div className={styles.skillCategory}>
                    <strong>Programming:</strong> Python, TypeScript, Rust, SQL
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Frameworks:</strong> React, Node.js, Django
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Tools:</strong> Git, Docker, AWS, Kubernetes
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Practices:</strong> CI/CD, TDD, Agile/Scrum
                  </div>
                </div>
              </div>

              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Marketing Specialist</h3>
                <div className={styles.skillCategories}>
                  <div className={styles.skillCategory}>
                    <strong>Digital:</strong> SEO/SEM, Google Analytics 4, Meta Ads
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Content:</strong> Copywriting, A/B Testing, Email Marketing
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Tools:</strong> HubSpot, Canva, Mailchimp, Asana
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Analytics:</strong> ROI Tracking, Conversion Optimization
                  </div>
                </div>
              </div>

              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Project Manager</h3>
                <div className={styles.skillCategories}>
                  <div className={styles.skillCategory}>
                    <strong>Methodologies:</strong> Agile, Scrum, Waterfall
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Tools:</strong> Jira, Trello, MS Project, Smartsheet
                  </div>
                  <div className={styles.skillCategory}>
                    <strong>Skills:</strong> Budget Management ($500K+), Stakeholder Communication, Risk Mitigation, Cross-functional Leadership
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className={styles.section}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions (Updated 2026)</h2>
            <div className={styles.faqWrapper}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Next Steps: Build a Resume That Gets Results in 2026
            </h2>

            <p className={styles.paragraph}>
              Now that you understand how to build a powerful {primaryKeyword}, it's time to put your knowledge into action. Use the free, ATS-optimized tools at ProfessionalResumeFree.com to create a polished, modern resume in minutes—no signup required.
            </p>

            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Start Building Your Professional Resume</h3>
              <p className={styles.ctaDescription}>
                Join 4M+ job seekers who landed interviews faster with our ATS-friendly templates.
              </p>
              <div className={styles.ctaFeatures}>
                <div className={styles.ctaFeature}>
                  <FiCheck className={styles.featureIcon} />
                  <span>500+ ATS-Optimized Templates</span>
                </div>
                <div className={styles.ctaFeature}>
                  <FiCheck className={styles.featureIcon} />
                  <span>Instant PDF Download</span>
                </div>
                <div className={styles.ctaFeature}>
                  <FiCheck className={styles.featureIcon} />
                  <span>No Sign Up Required</span>
                </div>
                <div className={styles.ctaFeature}>
                  <FiCheck className={styles.featureIcon} />
                  <span>Mobile-Friendly Builder</span>
                </div>
              </div>
              <div className={styles.ctaRow}>
                <Link
                  href="/resume-templates"
                  className={styles.ctaButton}
                  aria-label="Start building your free resume now"
                >
                  <FiArrowRight className={styles.ctaButtonIcon} />
                  <span>Start Building Now (Free)</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}