import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiEdit,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
  FiBook,
  FiAward,
  FiUserCheck,
  FiMail,
  FiDownload,
  FiCopy,
  FiGlobe,
  FiMapPin,
  FiBriefcase,
  FiCalendar
} from 'react-icons/fi';
import styles from './ResumeVsCV.module.css';

const ResumeVsCVGuide = ({ currentDate, lastModifiedDate }) => {
  const [activeSection, setActiveSection] = useState(0);

  const comparisonSections = [
    {
      title: "Purpose and Length Comparison",
      content: "Understand the fundamental differences in purpose and document length between resumes and CVs.",
      tips: [
        "Resume: 1-2 pages max, tailored for specific jobs",
        "CV: 2+ pages, comprehensive academic/professional history",
        "Resume: Job application focused",
        "CV: Academic/research/grant applications"
      ],
      example: `RESUME EXAMPLE:
Length: 1 page
Focus: Marketing Manager position
Content: Relevant experience, skills for this specific role

CV EXAMPLE:
Length: 4 pages
Focus: Academic career
Content: Full publication list, all degrees, conference presentations`
    },
    {
      title: "Content and Structure Differences",
      content: "Learn what content to include and how to structure each document appropriately.",
      tips: [
        "Resume: Customized, achievement-focused, skills section",
        "CV: Chronological, comprehensive, publication list",
        "Resume: Reverse chronological work history",
        "CV: Complete academic and professional timeline"
      ],
      example: `RESUME STRUCTURE:
• Contact Information
• Professional Summary
• Work Experience (last 10-15 years)
• Skills
• Education (brief)
• Certifications

CV STRUCTURE:
• Contact Information
• Education (detailed)
• Research Experience
• Publications
• Presentations
• Teaching Experience
• Grants & Awards
• Professional Memberships`
    },
    {
      title: "When to Use a Resume (US & Canada)",
      content: "Situations where a resume is the appropriate document in North American job markets.",
      tips: [
        "Corporate job applications (all industries)",
        "Private sector positions",
        "Government jobs (most levels)",
        "Non-academic professional roles"
      ],
      example: `USE A RESUME FOR:
• Software Engineer at Google
• Marketing Director at Coca-Cola
• Project Manager at Amazon
• Financial Analyst at Goldman Sachs
• HR Manager at Microsoft
• Sales Executive at Salesforce`
    },
    {
      title: "When to Use a CV (Academic & International)",
      content: "Situations requiring a Curriculum Vitae instead of a resume.",
      tips: [
        "Academic positions (professor, researcher)",
        "Medical/healthcare roles (physician, researcher)",
        "Grant and fellowship applications",
        "International job applications (UK, EU, Asia)"
      ],
      example: `USE A CV FOR:
• Assistant Professor position
• Postdoctoral Research Fellow
• Medical Resident application
• Grant proposal submission
• Research Scientist in Europe
• PhD program application`
    },
    {
      title: "Global Standards: US vs UK vs EU",
      content: "How document expectations differ across major international job markets.",
      tips: [
        "US: Resume for most jobs, 1 page ideal",
        "UK: CV for all jobs, 2 pages standard",
        "EU: CV with photo often expected",
        "Australia: Resume for corporate, CV for academic"
      ],
      example: `UNITED STATES:
Document: Resume
Length: 1 page
Photo: Never include
Format: Skills-focused

UNITED KINGDOM:
Document: CV
Length: 2 pages
Photo: Usually not
Format: Comprehensive

EUROPEAN UNION:
Document: CV
Length: 2-3 pages
Photo: Often expected
Format: Detailed with personal info`
    },
    {
      title: "Converting Between Resume and CV",
      content: "How to adapt your document when moving between different job markets or sectors.",
      tips: [
        "CV to Resume: Condense, focus on relevant experience",
        "Resume to CV: Expand, add publications, detailed education",
        "Maintain consistency in formatting",
        "Tailor content for target audience"
      ],
      example: `CONVERTING CV TO RESUME:
• Remove older publications
• Condense education section
• Focus on last 10 years experience
• Add skills summary
• Reduce to 1-2 pages

CONVERTING RESUME TO CV:
• Add full publication list
• Include all degrees with details
• Add conference presentations
• List research experience
• Include teaching history`
    }
  ];

  const documentTypes = [
    {
      title: "American Resume",
      description: "Concise, 1-page document for US job market",
      regions: ["United States", "Canada"],
      features: ["1 page maximum", "Skills-focused", "ATS optimized", "Achievement-oriented"],
      usage: "Corporate jobs, private sector, government positions"
    },
    {
      title: "British CV",
      description: "2-page comprehensive document for UK job market",
      regions: ["United Kingdom", "Ireland"],
      features: ["2 pages standard", "Detailed work history", "Education focus", "Professional summary"],
      usage: "All job applications, including corporate and academic"
    },
    {
      title: "European CV (Europass)",
      description: "Standardized format for EU countries",
      regions: ["European Union", "Switzerland", "Norway"],
      features: ["2-3 pages", "Often includes photo", "Personal information", "Language skills section"],
      usage: "EU job applications, international positions"
    },
    {
      title: "Academic CV",
      description: "Comprehensive document for research and academia",
      regions: ["Worldwide"],
      features: ["Multiple pages", "Publication list", "Research experience", "Grant history"],
      usage: "University positions, research grants, academic conferences"
    }
  ];

  const globalComparison = [
    {
      country: "United States",
      document: "Resume",
      length: "1 page",
      photo: "Never",
      personal: "No age/marital status",
      focus: "Skills & achievements"
    },
    {
      country: "United Kingdom",
      document: "CV",
      length: "2 pages",
      photo: "Rarely",
      personal: "Limited",
      focus: "Work history & education"
    },
    {
      country: "Germany",
      document: "Lebenslauf (CV)",
      length: "2-3 pages",
      photo: "Expected",
      personal: "Date of birth, marital status",
      focus: "Detailed chronology"
    },
    {
      country: "France",
      document: "CV",
      length: "1-2 pages",
      photo: "Often expected",
      personal: "Age, sometimes photo",
      focus: "Education & experience"
    },
    {
      country: "Australia",
      document: "Resume or CV",
      length: "2-3 pages",
      photo: "Optional",
      personal: "Limited",
      focus: "Achievements & skills"
    },
    {
      country: "Japan",
      document: "Rirekisho (CV)",
      length: "1-2 pages",
      photo: "Required",
      personal: "Detailed personal info",
      focus: "Company loyalty & stability"
    }
  ];

  const stats = [
    {
      value: "1 page",
      label: "Ideal resume length for US job market",
      icon: <FiFileText className={styles.statIcon} />
    },
    {
      value: "2 pages",
      label: "Standard CV length for UK job market",
      icon: <FiBook className={styles.statIcon} />
    },
    {
      value: "90%",
      label: "US employers expect resumes over CVs",
      icon: <FiTrendingUp className={styles.statIcon} />
    }
  ];

  const commonMistakes = [
    "Using a CV for US corporate job applications",
    "Sending a 1-page resume for European academic positions",
    "Including photo on US resume (can cause bias issues)",
    "Omitting photo on German CV (expected by employers)",
    "Using wrong terminology for the region (CV vs Resume)",
    "Not adapting length for target country standards"
  ];

  const currentYear = currentDate.split('-')[0];

  return (
    <div className={styles.resumeVsCVGuide}>
      <Head>
        <title>Resume vs. CV: Key Differences and When to Use Which | ProfessionalResumeFree</title>
        <meta name="title" content="Resume vs. CV: Key Differences and When to Use Which" />
        <meta name="description" content="Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with examples." />
        <meta name="keywords" content="
          resume vs cv,
          difference between resume and cv,
          when to use resume vs cv,
          cv vs resume comparison,
          us resume format,
          uk cv format,
          european cv standards,
          global job application documents,
          academic cv vs professional resume,
          resume for us job market,
          cv for uk job market,
          international job application guide,
          resume cv differences,
          when to use a cv,
          when to use a resume,
          us job application documents,
          uk job application documents,
          eu job application standards,
          curriculum vitae vs resume,
          professional resume guide,
          academic cv guide,
          international resume standards,
          global cv format,
          resume for corporate jobs,
          cv for academic positions,
          us uk eu job market differences,
          resume length standards,
          cv content requirements,
          international job search guide
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-vs-cv-guide/" />
        
        {/* Static Date Meta Tags */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Resume vs. CV: Key Differences and When to Use Which" />
        <meta property="og:description" content="Complete guide to Resume vs CV differences with global standards for US, UK, and EU job markets. Learn when to use each document with examples." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-vs-cv-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume, CV, job applications, international careers" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume vs. CV: Complete Guide with Global Standards" />
        <meta name="twitter:description" content="Learn Resume vs CV differences for US, UK, and EU job markets. When to use each document with international standards and examples." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Countries covered" />
        <meta name="twitter:data1" content="6+" />
        <meta name="twitter:label2" content="Document types" />
        <meta name="twitter:data2" content="Resume & CV" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Resume vs. CV: Key Differences and When to Use Which",
              "description": "A comprehensive guide explaining the differences between resumes and CVs, when to use each document, and global standards for US, UK, EU, and other international job markets.",
              "image": "https://www.professionalresumefree.com/images/resume-vs-cv-preview.jpg",
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
              "datePublished": `${currentDate}T00:00:00+00:00`,
              "dateModified": lastModifiedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-vs-cv-guide"
              },
              "articleSection": "Career Resources",
              "keywords": "resume vs CV, job applications, international careers, global standards",
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content"
                ]
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the main difference between a resume and a CV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main difference is length and purpose. A resume is a concise 1-2 page document tailored for specific job applications, focusing on skills and achievements. A CV (Curriculum Vitae) is a comprehensive 2+ page document detailing your complete academic and professional history, used for academic, research, medical, and international job applications.",
                    "dateCreated": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use a resume or CV for jobs in the United States?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most jobs in the United States, use a resume. American employers typically expect a 1-page resume for corporate, private sector, and government positions. Only use a CV if you're applying for academic, research, medical, or scientific positions where a comprehensive publication and research history is required.",
                    "dateCreated": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to include a photo on my CV for European jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Photo requirements vary by European country. In Germany, Austria, and several other EU countries, photos are expected on CVs. In the UK and Ireland, photos are generally not included. In France, it's common but not mandatory. Always research the specific country's standards before submitting your application.",
                    "dateCreated": lastModifiedDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should my CV be for UK job applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For UK job applications, your CV should typically be 2 pages. Unlike the US resume, UK CVs are more comprehensive and include detailed work history, education, and professional achievements. Senior professionals with extensive experience may extend to 3 pages, but 2 pages is the standard expectation for most positions.",
                    "dateCreated": lastModifiedDate
                  }
                }
              ],
              "datePublished": `${currentDate}T00:00:00+00:00`,
              "dateModified": lastModifiedDate
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
                  "name": "Career Guides",
                  "item": "https://www.professionalresumefree.com/career-guides"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Resume vs CV Guide",
                  "item": "https://www.professionalresumefree.com/resume-vs-cv-guide"
                }
              ]
            })
          }}
        />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiGlobe className={styles.tagIcon} />
              International Career Guide {currentYear}
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.gradientText}>Resume vs. CV:</span> Key Differences
            </h1>
            <p className={styles.heroSubtitle}>
              <strong>Global Standards for UK, US, and EU Job Markets.</strong> 
              Learn when to use each document and avoid costly mistakes in international job applications.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <FiDownload className={styles.buttonIcon} />
                Create Your Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ US, UK, EU Standards</span>
              <span className={styles.featureBadge}>✓ When to Use Each Document</span>
              <span className={styles.featureBadge}>✓ Conversion Guide</span>
              <span className={styles.featureBadge}>✓ {currentYear} Global Standards</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              Choosing between a resume and CV can make or break your international job application. 
              <strong> 75% of hiring managers reject applications using the wrong document type.</strong> 
              This comprehensive guide provides everything you need to understand 
              <strong> global standards, regional expectations, and proper usage</strong> for {currentYear} job markets.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiMapPin className={styles.highlightIcon} />
                <span>Regional Standards Guide</span>
              </div>
              <div className={styles.highlightItem}>
                <FiBriefcase className={styles.highlightIcon} />
                <span>Professional vs Academic</span>
              </div>
              <div className={styles.highlightItem}>
                <FiCalendar className={styles.highlightIcon} />
                <span>Length Requirements</span>
              </div>
              <div className={styles.highlightItem}>
                <FiGlobe className={styles.highlightIcon} />
                <span>International Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Document Types for Global Job Markets</h2>
            <p className={styles.sectionSubtitle}>
              Understand the different document formats used around the world
            </p>
          </div>
          <div className={styles.typesGrid}>
            {documentTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeUseCase}>
                  <FiMapPin className={styles.useCaseIcon} />
                  <strong>Regions:</strong> {type.regions.join(", ")}
                </div>
                <div className={styles.typeUsage}>
                  <FiBriefcase className={styles.usageIcon} />
                  <strong>Used for:</strong> {type.usage}
                </div>
                <div className={styles.typeTips}>
                  <h4>Key Features:</h4>
                  <ul>
                    {type.features.map((feature, tipIndex) => (
                      <li key={tipIndex}>
                        <FiCheck className={styles.tipIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sections" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete Resume vs CV Comparison Guide</h2>
            <p className={styles.sectionSubtitle}>
              Step-by-step comparison of <strong>purpose, content, and usage</strong>
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {comparisonSections.map((section, index) => (
              <button
                key={index}
                className={`${styles.guideTab} ${index === activeSection ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.guideContent}>
            <div className={styles.contentHeader}>
              <h3 className={styles.contentTitle}>
                {comparisonSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {comparisonSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Key Differences
                </h4>
                <ul className={styles.tipsList}>
                  {comparisonSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Practical Examples
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {comparisonSections[activeSection].example}
                  </pre>
                  <button className={styles.copyButton}>
                    <FiCopy className={styles.copyIcon} />
                    Copy Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.globalSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Standards Comparison</h2>
            <p className={styles.sectionSubtitle}>
              How document expectations differ across <strong>major international job markets</strong>
            </p>
          </div>
          <div className={styles.globalGrid}>
            {globalComparison.map((country, index) => (
              <div key={index} className={styles.globalCard}>
                <div className={styles.globalHeader}>
                  <h3 className={styles.globalCountry}>{country.country}</h3>
                  <div className={styles.globalDocument}>{country.document}</div>
                </div>
                <div className={styles.globalDetails}>
                  <div className={styles.globalDetail}>
                    <span className={styles.detailLabel}>Length:</span>
                    <span className={styles.detailValue}>{country.length}</span>
                  </div>
                  <div className={styles.globalDetail}>
                    <span className={styles.detailLabel}>Photo:</span>
                    <span className={styles.detailValue}>{country.photo}</span>
                  </div>
                  <div className={styles.globalDetail}>
                    <span className={styles.detailLabel}>Personal Info:</span>
                    <span className={styles.detailValue}>{country.personal}</span>
                  </div>
                  <div className={styles.globalDetail}>
                    <span className={styles.detailLabel}>Focus:</span>
                    <span className={styles.detailValue}>{country.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common International Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>costly errors</strong> in global job applications
            </p>
          </div>
          <div className={styles.mistakesGrid}>
            {commonMistakes.map((mistake, index) => (
              <div key={index} className={styles.mistakeCard}>
                <div className={styles.mistakeNumber}>{index + 1}</div>
                <p className={styles.mistakeText}>{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready for International Job Applications?
            </h2>
            <p className={styles.ctaSubtitle}>
              Create perfectly formatted resumes and CVs for any global job market 
              with our specialized builders for US, UK, EU, and international standards.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <FiDownload className={styles.buttonIcon} />
                Build Your Resume Now
              </Link>
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>US, UK, EU Standards</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Proper Document Selection</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>International Compliance</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>{currentYear} Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Static Generation with Incremental Static Regeneration
export async function getStaticProps() {
  // Generate dates at build time
  const now = new Date();
  
  // Format: YYYY-MM-DD for currentDate
  const currentDate = now.toISOString().split('T')[0];
  
  // Full ISO string for lastModifiedDate
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
    },
    // Revalidate every 24 hours for freshness
    revalidate: 86400, // 24 hours in seconds
  };
}

export default ResumeVsCVGuide;