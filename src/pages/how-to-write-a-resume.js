import styles from './guid.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { FiHome, FiChevronRight, FiArrowRight, FiCheck, FiFileText, FiTool, FiUser, FiDownload } from 'react-icons/fi';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  const faqDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        faqDates
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
    faqDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(5).fill(freshnessIndicator);

  return (
    <div className={styles.container} lang="en-US">
      <Head>
        <title>How to Write a Resume - Professional Guide & Examples | Professional Resume Free</title>
        <meta 
          name="description" 
          content="Learn how to write a professional resume that gets interviews. Step-by-step guide with examples, templates, and proven strategies for job seekers." 
        />
        <meta name="keywords" content="how to write a resume, resume writing guide, professional resume examples, resume templates 2026, ATS resume, resume writing tips, job search" />
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
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Write a Resume - Professional Guide & Examples" />
        <meta property="og:description" content="Master resume writing with expert tips, templates, and real examples. Get hired faster with our comprehensive guide." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-writing-guide-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Writing Guide - Professional Examples & Tips" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-write-a-resume" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume - Professional Guide & Examples" />
        <meta name="twitter:description" content="Expert resume writing guide with templates and proven job search strategies" />
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
                  "name": "How to Write a Resume - Professional Guide & Examples",
                  "description": "Complete professional guide on how to write an effective resume with step-by-step instructions and real examples",
                  "datePublished": "2024-01-01",
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
                        "https://www.linkedin.com/company/professional-resume-free"
                      ]
                    }
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
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "How to Write a Resume"
                      }
                    ]
                  }
                },
                {
                  "@type": "Article",
                  "headline": "How to Write a Resume - Professional Guide & Examples",
                  "description": "Expert guide on writing professional resumes that pass ATS systems and impress hiring managers",
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
                  "datePublished": "2024-01-01T08:00:00+00:00",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.professionalresumefree.com/how-to-write-a-resume#webpage"
                  },
                  "articleSection": "Career Development",
                  "articleBody": "Comprehensive guide covering resume fundamentals, formatting, ATS optimization, and professional writing techniques.",
                  "keywords": "resume writing, professional resume, ATS optimization, job search, career development"
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are the key sections of a resume?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Essential resume sections include: Contact Information, Professional Summary, Work Experience, Education, Skills, and optionally Certifications, Projects, or Volunteer Experience.",
                        "datePublished": safeFaqDates[0] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Resume Writing Expert"
                        }
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long should my resume be?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For most professionals, one page is ideal. Those with 10+ years of experience may need two pages. Never exceed two pages for non-academic positions.",
                        "datePublished": safeFaqDates[1] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Resume Writing Expert"
                        }
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What resume format is best for 2026?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The reverse-chronological format remains most effective for 2026. For career changers or employment gaps, consider a hybrid/combination format.",
                        "datePublished": safeFaqDates[2] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Resume Writing Expert"
                        }
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I make my resume stand out?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Quantify achievements, use relevant keywords, maintain clean formatting, tailor to each job, and include measurable results to demonstrate value.",
                        "datePublished": safeFaqDates[3] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Resume Writing Expert"
                        }
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Should I include a photo on my resume?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In the United States, Canada, UK, and Australia: No. Photos can introduce unconscious bias and are generally discouraged. Focus on your qualifications and achievements instead.",
                        "datePublished": safeFaqDates[4] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Resume Writing Expert"
                        }
                      }
                    }
                  ]
                },
                {
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
                      "text": "Analyze job descriptions, identify keywords, and gather your professional information.",
                      "url": "https://www.professionalresumefree.com/how-to-write-a-resume#resume-fundamentals"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Choose Resume Format",
                      "text": "Select appropriate resume format based on your career situation and goals.",
                      "url": "https://www.professionalresumefree.com/how-to-write-a-resume#choose-format"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Write Essential Sections",
                      "text": "Create contact information, professional summary, work experience, education, and skills sections.",
                      "url": "https://www.professionalresumefree.com/how-to-write-a-resume#essential-sections"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Optimize Content",
                      "text": "Use CAR method for achievements and incorporate keywords naturally.",
                      "url": "https://www.professionalresumefree.com/how-to-write-a-resume#writing-content"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Apply Professional Design",
                      "text": "Use proper formatting, typography, and layout for maximum readability.",
                      "url": "https://www.professionalresumefree.com/how-to-write-a-resume#design-tips"
                    }
                  ]
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
            <Link href="/how-to-write-a-resume" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>How to Write a Resume</span>
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
        {/* Introduction */}
        <section className={styles.section}>
          <h1 className={styles.h1}>How to Write a Resume: The Complete 2026 Guide</h1>
          <p className={styles.leadParagraph}>
            Writing an effective resume is both an art and a science. This comprehensive guide provides proven strategies, 
            real examples, and step-by-step instructions to help you create a professional resume that stands out 
            in today&apos;s competitive job market and passes through modern ATS systems.
          </p>
          
          <div className={styles.statsCard}>
            <h2 className={styles.h2}>Key Resume Statistics for 2026:</h2>
            <ul className={styles.statsList}>
              <li className={styles.statsItem}><strong>75%</strong> of resumes are rejected by ATS before human review</li>
              <li className={styles.statsItem}><strong>6.8 seconds</strong> is the average time recruiters spend on initial resume screening</li>
              <li className={styles.statsItem}><strong>40% more</strong> interviews for candidates with professionally written resumes</li>
              <li className={styles.statsItem}><strong>94%</strong> of recruiters use LinkedIn to verify resume information</li>
            </ul>
          </div>
        </section>

        {/* Quick Navigation */}
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
              <a href="#final-checklist" className={styles.quickNavLink}>7. Final Checklist</a>
              <a href="#faqs" className={styles.quickNavLink}>FAQs</a>
            </div>
          </div>
        </section>

        <article className={styles.article}>
          {/* Section 1 */}
          <section className={styles.section} id="resume-fundamentals">
            <h2 className={styles.h2}>1. Resume Writing Fundamentals</h2>
            <p>Understand the core principles that make resumes effective in today&apos;s job market:</p>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>The Purpose of Your Resume</h3>
              <p>Your resume has one primary goal: <strong>to secure an interview</strong>. It&apos;s a marketing document that should:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>Demonstrate your value to potential employers</li>
                <li className={styles.listItem}>Showcase your most relevant skills and achievements</li>
                <li className={styles.listItem}>Pass through Applicant Tracking Systems (ATS)</li>
                <li className={styles.listItem}>Make a strong first impression in seconds</li>
                <li className={styles.listItem}>Provide talking points for interviews</li>
              </ul>
              <p>Remember: Your resume is not your life story. It&apos;s a strategic document designed to get you to the next step.</p>
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
                  <div className={styles.tableCell}>Easy to read and understand quickly</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Relevance</strong></div>
                  <div className={styles.tableCell}>Tailored to the specific job and industry</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Quantification</strong></div>
                  <div className={styles.tableCell}>Uses numbers to demonstrate impact</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Professionalism</strong></div>
                  <div className={styles.tableCell}>Error-free with appropriate formatting</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>ATS-Friendly</strong></div>
                  <div className={styles.tableCell}>Compatible with applicant tracking systems</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
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
                  <div className={styles.tableCell}><span className={styles.atsGood}>Excellent</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Functional</strong></div>
                  <div className={styles.tableCell}>Career changers, employment gaps</div>
                  <div className={styles.tableCell}><span className={styles.atsPoor}>Poor</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Hybrid/Combination</strong></div>
                  <div className={styles.tableCell}>Technical roles, senior professionals</div>
                  <div className={styles.tableCell}><span className={styles.atsGood}>Good</span></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Targeted</strong></div>
                  <div className={styles.tableCell}>Specific job applications, competitive roles</div>
                  <div className={styles.tableCell}><span className={styles.atsGood}>Excellent</span></div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Quick Format Selection Guide:</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}><strong>Recent graduates:</strong> Reverse-chronological or functional</li>
                  <li className={styles.listItem}><strong>Career advancement:</strong> Reverse-chronological</li>
                  <li className={styles.listItem}><strong>Career change:</strong> Functional or hybrid</li>
                  <li className={styles.listItem}><strong>Technical professionals:</strong> Hybrid with projects section</li>
                  <li className={styles.listItem}><strong>Executive level:</strong> Reverse-chronological with achievements focus</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
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
                      <li className={styles.listItem}>Phone number</li>
                      <li className={styles.listItem}>Professional email</li>
                      <li className={styles.listItem}>LinkedIn profile URL</li>
                      <li className={styles.listItem}>City, State (optional: country)</li>
                    </ul>
                    <div className={styles.exampleCard}>
                      <p><strong>Professional Email Example:</strong> firstname.lastname@gmail.com</p>
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
                      <p><strong>Example:</strong> &quot;Marketing Manager with 8+ years of experience increasing revenue by 150%...&quot;</p>
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
                  <div className={styles.tableCell}>Regular font, italic</div>
                  <div className={styles.tableCell}><em>TechCorp Inc., San Francisco, CA</em></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Dates</strong></div>
                  <div className={styles.tableCell}>Right-aligned</div>
                  <div className={styles.tableCell}>March 2022 - Present</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}><strong>Bullet Points</strong></div>
                  <div className={styles.tableCell}>3-5 per job, action verbs</div>
                  <div className={styles.tableCell}>• Increased sales by 35% through...</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
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
                      <p><strong>Example:</strong> &quot;Sales were declining by 15% quarterly...&quot;</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Action</h4>
                    <p>Explain what specific actions you took:</p>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> &quot;Implemented new CRM system and training program...&quot;</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Result</h4>
                    <p>Quantify the outcome of your actions:</p>
                    <div className={styles.exampleCard}>
                      <p><strong>Example:</strong> &quot;...resulting in 25% sales increase and 40% improved efficiency&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Complete CAR Example:</h4>
                <p><strong>Before (Duty):</strong> &quot;Managed social media accounts&quot;</p>
                <p><strong>After (Achievement - CAR):</strong> &quot;Increased social media engagement by 240% (Challenge) through strategic content calendar and audience segmentation (Action), generating 150+ qualified leads monthly (Result)&quot;</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
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
                      <li className={styles.listItem}>Analyze 3-5 target job descriptions</li>
                      <li className={styles.listItem}>Identify frequently mentioned skills</li>
                      <li className={styles.listItem}>Include industry-specific terminology</li>
                      <li className={styles.listItem}>Use both acronyms and full terms</li>
                      <li className={styles.listItem}>Incorporate naturally throughout</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>ATS-Friendly Formatting</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Use standard section headings</li>
                      <li className={styles.listItem}>Avoid headers and footers</li>
                      <li className={styles.listItem}>Save as .docx for best parsing</li>
                      <li className={styles.listItem}>No images, graphics, or tables</li>
                      <li className={styles.listItem}>Simple, clean fonts only</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={styles.exampleCard}>
                <h4 className={styles.h4}>Keyword Integration Example:</h4>
                <p><strong>Job Description Keywords:</strong> Project Management, Agile, Scrum, Budget Management</p>
                <p><strong>Resume Integration:</strong> &quot;Managed $2M project budget using Agile and Scrum methodologies, delivering all milestones on time and 15% under budget.&quot;</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className={styles.section} id="design-tips">
            <h2 className={styles.h2}>6. Design & Formatting Tips</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Professional Resume Design Principles</h3>
              
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Typography</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}><strong>Fonts:</strong> Arial, Calibri, Times New Roman</li>
                      <li className={styles.listItem}><strong>Size:</strong> 10-12pt for body, 14-16pt for headings</li>
                      <li className={styles.listItem}><strong>Colors:</strong> Black text on white background</li>
                      <li className={styles.listItem}><strong>Alignment:</strong> Left-aligned for readability</li>
                      <li className={styles.listItem}><strong>Spacing:</strong> 1.0-1.15 line height</li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.column}>
                  <div className={styles.columnCard}>
                    <h4 className={styles.h4}>Layout & Structure</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}><strong>Margins:</strong> 0.5-1 inch on all sides</li>
                      <li className={styles.listItem}><strong>White Space:</strong> Generous for readability</li>
                      <li className={styles.listItem}><strong>Bullet Points:</strong> Consistent style and indentation</li>
                      <li className={styles.listItem}><strong>Section Order:</strong> Most relevant first</li>
                      <li className={styles.listItem}><strong>Length:</strong> 1-2 pages maximum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className={styles.section} id="final-checklist">
            <h2 className={styles.h2}>7. Final Checklist & Next Steps</h2>
            
            <div className={styles.card}>
              <h3 className={styles.h3}>Your Resume Writing Action Plan</h3>
              <p>Follow this step-by-step process to create your professional resume:</p>
              
              <div className={styles.card}>
                <h4 className={styles.h4}>Step-by-Step Process</h4>
                <ol className={styles.list}>
                  <li className={styles.listItem}><strong>Research:</strong> Analyze job descriptions and identify keywords</li>
                  <li className={styles.listItem}><strong>Gather Information:</strong> Collect all relevant experience, education, and skills</li>
                  <li className={styles.listItem}><strong>Choose Format:</strong> Select appropriate resume format for your situation</li>
                  <li className={styles.listItem}><strong>Write Draft:</strong> Create first version using CAR method for achievements</li>
                  <li className={styles.listItem}><strong>Optimize:</strong> Incorporate keywords and ATS-friendly formatting</li>
                  <li className={styles.listItem}><strong>Design:</strong> Apply professional formatting and layout</li>
                  <li className={styles.listItem}><strong>Review:</strong> Proofread and get feedback from others</li>
                  <li className={styles.listItem}><strong>Customize:</strong> Tailor for specific job applications</li>
                  <li className={styles.listItem}><strong>Save & Send:</strong> Export as PDF and start applying</li>
                </ol>
              </div>
              
              <div className={styles.ctaSection}>
                <h3 className={styles.h3}>Ready to Write Your Professional Resume?</h3>
                <p>Use our AI-powered resume builder with professional templates, ATS optimization, and expert guidance:</p>
                <Link 
                  href="/resume-templates" 
                  className={styles.ctaButton}
                  prefetch={false}
                >
                  <span className={styles.buttonText}>Create Your Resume Now</span>
                  <FiArrowRight className={styles.buttonIcon} />
                </Link>
                <p className={styles.smallNote}>Includes professional templates, ATS optimization, and expert writing tips</p>
              </div>

              <div className={styles.internalLinks}>
                <h3 className={styles.h3}>Related Resume Guides</h3>
                <ul className={styles.linksList}>
                  <li className={styles.linksItem}><Link href="/software-engineer-resume-example-and-writing-guide">Software Resume Example & Writing Guide</Link></li>
                  <li className={styles.linksItem}><Link href="/project-manager-resume">Project Manager Resume Example</Link></li>
                  <li className={styles.linksItem}><Link href="/resume-format-for-freshers">Resume Format for Freshers</Link></li>
                  <li className={styles.linksItem}><Link href="/resume-for-government-job">Resume for Government Job</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className={styles.section} id="faqs">
            <h2 className={styles.h2}>Resume Writing FAQs</h2>
            
            <div className={styles.faqCard}>
              <h3 className={styles.h3}>How long should my resume be in 2026?</h3>
              <p>For most professionals, one page remains ideal. Those with 10+ years of relevant experience or in academic/executive roles may extend to two pages. Never exceed two pages for standard job applications. Quality and relevance matter more than length.</p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.h3}>What&apos;s the most important section of a resume?</h3>
              <p>The work experience section is typically the most important, as it demonstrates your professional capabilities and achievements. However, all sections work together to create a complete picture. The professional summary is crucial for making a strong first impression.</p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.h3}>Should I include a photo on my resume?</h3>
              <p>In the United States, Canada, UK, and Australia: No. Photos can introduce unconscious bias and are generally discouraged. Exceptions include acting, modeling, or certain international positions where photos are expected. Focus on your qualifications and achievements instead.</p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.h3}>How do I handle employment gaps on my resume?</h3>
              <p>Be honest but strategic. If you were developing skills, mention relevant courses or certifications. Use a functional or hybrid format to emphasize skills over chronology. Consider grouping contract or freelance work together. Most importantly, focus on what you can offer now.</p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.h3}>Can I use the same resume for every job application?</h3>
              <p>No. While you can maintain a master resume, you should customize it for each application. Tailor your professional summary, emphasize relevant experience, and include keywords from each specific job description. Customized resumes have significantly higher success rates.</p>
            </div>
          </section>
        </article>

        <div className={styles.conclusionSection}>
          <div className={styles.conclusionCard}>
            <h3 className={styles.h3}>Start Building Your Professional Resume Today</h3>
            <p>With this comprehensive guide, you now have all the knowledge needed to create a standout resume. Remember:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}><FiCheck /> Focus on achievements, not just duties</li>
              <li className={styles.listItem}><FiCheck /> Tailor your resume for each application</li>
              <li className={styles.listItem}><FiCheck /> Use the CAR method for powerful statements</li>
              <li className={styles.listItem}><FiCheck /> Optimize for both ATS and human readers</li>
              <li className={styles.listItem}><FiCheck /> Proofread thoroughly before sending</li>
            </ul>
            <Link 
              href="/resume-templates" 
              className={styles.conclusionButton}
              prefetch={false}
            >
              <span className={styles.buttonText}>Create Your Free Resume Now</span>
              <FiArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}