import Head from 'next/head';
import Link from 'next/link';
import {
  FiAward,
  FiDownload,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiFileText,
  FiClock,
  FiUser,
  FiBriefcase,
  FiSearch,
  FiEye,
  FiShare,
  FiPrinter,
  FiCopy,
  FiEdit,
  FiFilter,
  FiGrid,
  FiList,
  FiTag,
  FiCalendar,
  FiShield,
  FiLock,
  FiUnlock,
  FiGlobe,
  FiBook,
  FiBookOpen,
  FiTrendingUp,
  FiChevronRight, // Added this import
  FiHome // Added this import for completeness
} from 'react-icons/fi';
import styles from './CertificationsOnResumeCluster.module.css';

const CertificateResumeSection = ({ 
  seoData,
  buildTimestamp
}) => {
  const {
    currentDate,
    lastModifiedDate,
    certificateDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeCertificateDates = certificateDates || Array(12).fill(freshnessIndicator);

  const certificateCategories = [
    {
      id: 'technical',
      title: 'Technical & IT Certifications',
      slug: 'technical-it-certifications',
      count: '42 certificates',
      icon: <FiBriefcase className={styles.categoryIcon} />
    },
    {
      id: 'professional',
      title: 'Professional Development',
      slug: 'professional-development-certificates',
      count: '28 certificates',
      icon: <FiTrendingUp className={styles.categoryIcon} />
    },
    {
      id: 'industry',
      title: 'Industry Specific',
      slug: 'industry-specific-certifications',
      count: '35 certificates',
      icon: <FiShield className={styles.categoryIcon} />
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills & Leadership',
      slug: 'soft-skills-leadership-certificates',
      count: '24 certificates',
      icon: <FiUser className={styles.categoryIcon} />
    }
  ];

  const popularCertificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      level: 'Professional',
      duration: '3 years validity',
      category: 'technical',
      popularity: 98,
      template: 'ats-optimized',
      dateAdded: '2024-03-15',
      featured: true
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional Certificate',
      organization: 'Google',
      level: 'Professional',
      duration: 'No expiration',
      category: 'technical',
      popularity: 96,
      template: 'modern-minimal',
      dateAdded: '2024-02-28',
      featured: true
    },
    {
      id: 3,
      title: 'Project Management Professional (PMP)®',
      organization: 'Project Management Institute',
      level: 'Advanced',
      duration: '3 years validity',
      category: 'professional',
      popularity: 95,
      template: 'executive',
      dateAdded: '2024-03-10',
      featured: true
    },
    {
      id: 4,
      title: 'Certified ScrumMaster® (CSM)',
      organization: 'Scrum Alliance',
      level: 'Intermediate',
      duration: '2 years validity',
      category: 'professional',
      popularity: 92,
      template: 'clean-modern',
      dateAdded: '2024-01-22',
      featured: false
    },
    {
      id: 5,
      title: 'Microsoft Certified: Azure Fundamentals',
      organization: 'Microsoft',
      level: 'Fundamental',
      duration: 'No expiration',
      category: 'technical',
      popularity: 90,
      template: 'ats-optimized',
      dateAdded: '2024-03-05',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Marketing Certification',
      organization: 'HubSpot Academy',
      level: 'Professional',
      duration: 'No expiration',
      category: 'industry',
      popularity: 88,
      template: 'creative',
      dateAdded: '2024-02-15',
      featured: false
    },
    {
      id: 7,
      title: 'Leadership & Management Certificate',
      organization: 'LinkedIn Learning',
      level: 'Intermediate',
      duration: 'No expiration',
      category: 'soft-skills',
      popularity: 85,
      template: 'executive',
      dateAdded: '2024-01-30',
      featured: false
    },
    {
      id: 8,
      title: 'Cybersecurity Fundamentals Certificate',
      organization: 'ISC2',
      level: 'Fundamental',
      duration: 'No expiration',
      category: 'technical',
      popularity: 87,
      template: 'ats-optimized',
      dateAdded: '2024-02-20',
      featured: false
    }
  ];

  const certificateTemplates = [
    {
      id: 'ats-optimized',
      name: 'ATS-Optimized Certificate Layout',
      description: 'Designed to pass through Applicant Tracking Systems',
      icon: <FiCheck className={styles.templateIcon} />,
      features: ['ATS Compatible', 'Clear Structure', 'Keyword Optimized']
    },
    {
      id: 'modern-minimal',
      name: 'Modern Minimal Design',
      description: 'Clean, professional layout for tech industries',
      icon: <FiGrid className={styles.templateIcon} />,
      features: ['Minimal Design', 'Tech Focused', 'Mobile Friendly']
    },
    {
      id: 'executive',
      name: 'Executive Professional',
      description: 'Formal design for leadership positions',
      icon: <FiBriefcase className={styles.templateIcon} />,
      features: ['Formal Layout', 'Leadership Focus', 'Professional']
    },
    {
      id: 'creative',
      name: 'Creative Portfolio Style',
      description: 'Visually appealing for creative industries',
      icon: <FiEdit className={styles.templateIcon} />,
      features: ['Visual Design', 'Creative Fields', 'Portfolio Ready']
    }
  ];

  const faqs = [
    {
      question: "How do I add certificates to my resume using your builder?",
      answer: "Our resume builder includes a dedicated 'Certificates' section. Simply click 'Add Certificate', fill in the certificate name, issuing organization, date earned, and any relevant details. You can also upload certificate images or PDFs for reference."
    },
    {
      question: "Which certificates should I include on my resume?",
      answer: "Include certificates that are relevant to the job you're applying for, especially those from recognized organizations. Focus on certificates that demonstrate specific skills mentioned in the job description. Our ATS optimization feature will highlight the most relevant certificates."
    },
    {
      question: "How do certificates improve my resume's ATS score?",
      answer: "Certificates add specific keywords and validate your skills to Applicant Tracking Systems. Our builder optimizes certificate listings with proper formatting and keyword placement, increasing your resume's match rate by 15-25% for relevant positions."
    },
    {
      question: "Can I download certificate-ready resume templates?",
      answer: "Yes, all our resume templates include optimized certificate sections. You can download them as PDF, Word, or plain text. The certificate section is automatically formatted to be ATS-friendly and professionally presented."
    },
    {
      question: "How many certificates should I list on my resume?",
      answer: "We recommend listing 3-5 most relevant certificates for the position. For recent graduates or career changers, you might include more. Our builder helps you prioritize certificates based on relevance and recency."
    },
    {
      question: "Are there industry-specific certificate templates?",
      answer: "Yes, we offer industry-optimized certificate layouts for IT, healthcare, finance, marketing, and more. Each template is designed to highlight certificates in the format preferred by hiring managers in that specific industry."
    }
  ];

  return (
    <div className={styles.certificatePage} lang="en-US">
      <Head>
        <title>Professional Certificate Resume Section | Free ATS-Optimized Templates 2026</title>
        <meta name="title" content="Professional Certificate Resume Section | Free ATS-Optimized Templates 2026" />
        <meta name="description" content="Create professional certificate sections for your resume. ATS-optimized templates to showcase certifications. Free download. Increase interview chances by 40%." />
        <meta name="keywords" content="certificate resume section, professional certifications on resume, ATS optimized certificate layout, free certificate templates, resume builder with certificates, certification section examples" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap-certificates.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/certificate-resume-section" />
        <link rel="alternate" href="https://www.professionalresumefree.com/certificate-resume-section" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/certificate-resume-section" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/certificate-resume-section" hreflang="x-default" />
        
        <meta property="og:title" content="Professional Certificate Resume Section | Free ATS-Optimized Templates 2026" />
        <meta property="og:description" content="Create professional certificate sections for your resume. ATS-optimized templates to showcase certifications. Free download." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-certificate-resume-section.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Certificate Resume Section Builder" />
        <meta property="og:url" content="https://www.professionalresumefree.com/certificate-resume-section" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Certificate Resume Section | Free ATS-Optimized Templates" />
        <meta name="twitter:description" content="Create professional certificate sections for your resume. ATS-optimized templates to showcase certifications." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-certificate-resume-section.jpg" />
        <meta name="twitter:image:alt" content="Certificate Resume Section Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <script
          type="application/ld+json"
          key="structured-data-certificates"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/certificate-resume-section/#webpage",
                  "url": "https://www.professionalresumefree.com/certificate-resume-section",
                  "name": "Professional Certificate Resume Section | Free ATS-Optimized Templates 2026",
                  "description": "Create professional certificate sections for your resume. ATS-optimized templates to showcase certifications.",
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Resume Free",
                    "description": "Free online resume builder for job seekers"
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
                        "name": "Resume Sections",
                        "item": "https://www.professionalresumefree.com/resume-sections"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Certificate Section",
                        "item": "https://www.professionalresumefree.com/certificate-resume-section"
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/certificate-resume-section/#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Resume Certificate Expert"
                      }
                    }
                  }))
                },
                {
                  "@type": "ItemList",
                  "itemListElement": popularCertificates.slice(0, 5).map((cert, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "CreativeWork",
                      "name": cert.title,
                      "description": `${cert.level} certification from ${cert.organization}`,
                      "provider": {
                        "@type": "Organization",
                        "name": cert.organization
                      },
                      "educationalLevel": cert.level,
                      "dateCreated": cert.dateAdded
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

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRight />
          </li>
          <li>
            <Link href="/resume-sections" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Resume Sections</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRight />
          </li>
          <li>
            <span className={styles.breadcrumbCurrent}>Certificate Section</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="hero-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiAward className={styles.badgeIcon} />
              <span className={styles.trustBadgeText}>
                Professional Certificate Templates | ATS Optimized
              </span>
            </div>
            
            <h1 className={styles.heroTitle} id="hero-title">
              <span className={styles.heroTitleMain}>Certificate Resume Section</span>
              <span className={styles.heroTitleSub}>Showcase Your Certifications Professionally</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create an <strong>ATS-optimized certificate section</strong> that highlights your certifications and increases your resume's impact by <strong>40%</strong>. Free templates designed for Applicant Tracking Systems.
            </p>

            <div className={styles.ctaButtons}>
              <Link
                href="/resume-builder"
                className={styles.primaryButton}
                aria-label="Build your certificate section now - free and no sign up required"
                prefetch={false}
              >
                <span className={styles.buttonText}>Build Certificate Section Now</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
              
              <Link
                href="/certificate-templates"
                className={styles.secondaryButton}
                aria-label="View all certificate templates"
                prefetch={false}
              >
                <FiEye className={styles.buttonIcon} />
                <span className={styles.buttonText}>View Templates</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Certificate Templates</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>More Interviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>ATS</span>
                <span className={styles.statLabel}>Optimized</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Free</span>
                <span className={styles.statLabel}>No Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className={styles.categoriesSection} aria-labelledby="categories-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="categories-title">Certificate Categories</h2>
            <p className={styles.sectionSubtitle}>
              Organized certificate templates for every industry and skill level
            </p>
          </div>
          <div className={styles.categoriesGrid}>
            {certificateCategories.map((category) => (
              <Link
                key={category.id}
                href={`/certificates/${category.slug}`}
                className={styles.categoryCard}
                aria-label={`Browse ${category.title} certificates`}
                rel="nofollow"
              >
                <div className={styles.categoryIconContainer}>
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryCount}>{category.count}</p>
                <div className={styles.categoryArrow}>
                  <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Certificates Section */}
      <section className={styles.popularSection} aria-labelledby="popular-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="popular-title">Most Valuable Certificates for Resumes</h2>
            <p className={styles.sectionSubtitle}>
              Industry-recognized certifications that boost your resume's credibility
            </p>
          </div>
          
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <button className={styles.filterButton} aria-label="Filter by category">
                <FiFilter className={styles.filterIcon} />
                <span>Category</span>
              </button>
              <button className={styles.filterButton} aria-label="Filter by level">
                <FiTag className={styles.filterIcon} />
                <span>Level</span>
              </button>
              <button className={styles.filterButtonActive} aria-label="Sort by popularity">
                <FiTrendingUp className={styles.filterIcon} />
                <span>Popularity</span>
              </button>
            </div>
            <div className={styles.viewToggle}>
              <button className={styles.viewButton} aria-label="Grid view">
                <FiGrid />
              </button>
              <button className={styles.viewButtonActive} aria-label="List view">
                <FiList />
              </button>
            </div>
          </div>

          <div className={styles.certificatesGrid}>
            {popularCertificates.map((cert) => (
              <div key={cert.id} className={`${styles.certificateCard} ${cert.featured ? styles.featured : ''}`}>
                <div className={styles.certificateHeader}>
                  <div className={styles.certificateBadge}>
                    <FiAward className={styles.certificateIcon} />
                    <span className={styles.certificateLevel}>{cert.level}</span>
                  </div>
                  {cert.featured && (
                    <span className={styles.featuredBadge}>Featured</span>
                  )}
                </div>
                
                <div className={styles.certificateContent}>
                  <h3 className={styles.certificateTitle}>{cert.title}</h3>
                  <p className={styles.certificateOrg}>{cert.organization}</p>
                  
                  <div className={styles.certificateMeta}>
                    <div className={styles.metaItem}>
                      <FiClock className={styles.metaIcon} />
                      <span>{cert.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiTrendingUp className={styles.metaIcon} />
                      <span>{cert.popularity}% Relevant</span>
                    </div>
                  </div>
                  
                  <div className={styles.certificateTemplate}>
                    <FiFileText className={styles.templateIcon} />
                    <span>Template: {cert.template}</span>
                  </div>
                </div>
                
                <div className={styles.certificateActions}>
                  <Link
                    href={`/certificate-templates/${cert.template}`}
                    className={styles.viewButton}
                    aria-label={`View template for ${cert.title}`}
                  >
                    <FiEye />
                    <span>View Template</span>
                  </Link>
                  <Link
                    href="/resume-builder"
                    className={styles.useButton}
                    aria-label={`Use ${cert.title} in resume`}
                  >
                    <FiCheck />
                    <span>Use in Resume</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Styles Section */}
      <section className={styles.templatesSection} aria-labelledby="templates-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="templates-title">Certificate Section Templates</h2>
            <p className={styles.sectionSubtitle}>
              Choose from professionally designed layouts optimized for ATS
            </p>
          </div>
          
          <div className={styles.templatesGrid}>
            {certificateTemplates.map((template) => (
              <div key={template.id} className={styles.templateCard}>
                <div className={styles.templateHeader}>
                  <div className={styles.templateIconContainer}>
                    {template.icon}
                  </div>
                  <h3 className={styles.templateName}>{template.name}</h3>
                </div>
                
                <p className={styles.templateDescription}>{template.description}</p>
                
                <div className={styles.templateFeatures}>
                  {template.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <FiCheck className={styles.featureCheck} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.templatePreview}>
                  <div className={styles.previewPlaceholder}>
                    <div className={styles.previewLines}>
                      <div className={styles.previewLine}></div>
                      <div className={styles.previewLine}></div>
                      <div className={styles.previewLine}></div>
                      <div className={styles.previewLineShort}></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.templateActions}>
                  <Link
                    href={`/template-preview/${template.id}`}
                    className={styles.previewButton}
                    aria-label={`Preview ${template.name}`}
                  >
                    <FiEye />
                    <span>Preview</span>
                  </Link>
                  <Link
                    href="/resume-builder"
                    className={styles.useTemplateButton}
                    aria-label={`Use ${template.name}`}
                  >
                    <FiCheck />
                    <span>Use Template</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className={styles.howToSection} aria-labelledby="howto-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="howto-title">How to Add Certificates to Your Resume</h2>
            <p className={styles.sectionSubtitle}>
              Follow these steps to create a professional certificate section
            </p>
          </div>
          
          <div className={styles.stepsContainer}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Select Relevant Certificates</h3>
                <p className={styles.stepDescription}>
                  Choose certificates that match the job requirements. Focus on recent and industry-recognized certifications.
                </p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Use ATS-Optimized Format</h3>
                <p className={styles.stepDescription}>
                  Our templates format certificates with proper headings, dates, and issuer names for maximum ATS compatibility.
                </p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Add Keywords & Details</h3>
                <p className={styles.stepDescription}>
                  Include specific skills and competencies from the certificate. Add validity periods and credential IDs when available.
                </p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Download & Customize</h3>
                <p className={styles.stepDescription}>
                  Download your resume with the certificate section. Customize further or use as-is for applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Certificate Section FAQs</h2>
            <p className={styles.sectionSubtitle}>
              Common questions about adding certificates to your resume
            </p>
          </div>
          
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.moreResources}>
            <h3 className={styles.resourcesTitle}>More Certificate Resources</h3>
            <div className={styles.resourcesGrid}>
              <Link href="/how-to-list-certificates-on-resume" className={styles.resourceLink}>
                <FiBook className={styles.resourceIcon} />
                <span>How to List Certificates on Resume</span>
              </Link>
              <Link href="/ats-certificate-formatting" className={styles.resourceLink}>
                <FiCheck className={styles.resourceIcon} />
                <span>ATS Certificate Formatting Guide</span>
              </Link>
              <Link href="/certificate-vs-education-section" className={styles.resourceLink}>
                <FiFileText className={styles.resourceIcon} />
                <span>Certificate vs Education Section</span>
              </Link>
              <Link href="/professional-certificate-examples" className={styles.resourceLink}>
                <FiEye className={styles.resourceIcon} />
                <span>Professional Certificate Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Showcase Your Certifications?</h2>
            <p className={styles.ctaSubtitle}>
              Create a professional certificate section that stands out to employers and ATS systems.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link
                href="/resume-builder"
                className={styles.ctaPrimaryButton}
                aria-label="Start building your certificate section now - free and no sign up"
                prefetch={false}
              >
                <span className={styles.ctaButtonText}>Start Building Free</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </Link>
              
              <Link
                href="/certificate-templates"
                className={styles.ctaSecondaryButton}
                aria-label="Browse all certificate templates"
                prefetch={false}
              >
                <FiEye className={styles.ctaButtonIcon} />
                <span className={styles.ctaButtonText}>Browse Templates</span>
              </Link>
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>ATS-Optimized Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>No Sign Up Required</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Free PDF Download</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Professional Designs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const certificateDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        certificateDates
      },
      buildTimestamp
    },
    revalidate: 3600 // 24 hours
  };
}

export default CertificateResumeSection;