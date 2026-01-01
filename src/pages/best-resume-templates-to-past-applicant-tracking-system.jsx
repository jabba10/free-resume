'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiCheck,
  FiX,
  FiTrendingUp,
  FiTarget,
  FiEye,
  FiSearch,
  FiAlertCircle,
  FiDownload,
  FiCopy,
  FiGrid,
  FiLayers,
  FiEdit,
  FiUser,
  FiBriefcase,
  FiAward
} from 'react-icons/fi';
import styles from './ATSResumeTemplates.module.css';

const ATSResumeTemplates = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const topTemplates = [
    {
      id: 1,
      name: "Classic Chronological",
      description: "Clean, traditional format perfect for ATS parsing and traditional industries",
      category: "All Industries",
      atsScore: "98%",
      features: [
        "Standard section headings",
        "Reverse chronological order",
        "Bullet-point achievements",
        "Clear skills categorization"
      ],
      bestFor: ["Corporate roles", "Finance", "Healthcare", "Government"],
      example: `JAMES WILSON
Senior Financial Analyst | CPA
Chicago, IL | (312) 555-0123
james.wilson@email.com | linkedin.com/in/jameswilson

PROFESSIONAL SUMMARY
Certified Public Accountant with 10+ years of experience in financial analysis...`

    },
    {
      id: 2,
      name: "Modern Hybrid",
      description: "Balances ATS compatibility with contemporary design elements",
      category: "Tech & Creative",
      atsScore: "95%",
      features: [
        "Skills summary at top",
        "Two-column layout",
        "Keyword optimization",
        "Project portfolio section"
      ],
      bestFor: ["Tech roles", "Marketing", "Design", "Project Management"],
      example: `ALEX CHEN
Product Designer | UI/UX Specialist
San Francisco, CA | (415) 555-9876
alex.chen@email.com | portfolio.alexchen.com

SKILLS SUMMARY
UI/UX Design, Figma, User Research, Wireframing, Prototyping...`
    },
    // ... (rest of the templates remain the same)
  ];

  const atsMyths = [
    {
      myth: "Graphics and charts make resumes stand out",
      truth: "Graphics often confuse ATS systems and get resumes rejected",
      impact: "High rejection risk"
    },
    // ... (rest of the myths remain the same)
  ];

  const atsFriendlyElements = [
    {
      element: "Standard Section Headings",
      importance: "critical",
      reason: "ATS looks for specific headings like 'Experience', 'Education', 'Skills'"
    },
    // ... (rest of the elements remain the same)
  ];

  const stats = [
    {
      value: "75%",
      label: "Resumes rejected by ATS before human review",
      icon: <FiX className={styles.statIcon} />
    },
    {
      value: "7.4 sec",
      label: "Average initial resume screening time",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "98%",
      label: "Fortune 500 companies use ATS systems",
      icon: <FiTrendingUp className={styles.statIcon} />
    }
  ];

  const whyFancyHurts = [
    "Graphics and images become blank spaces in ATS",
    "Creative fonts render as unreadable characters",
    "Tables and columns scramble your information",
    "Headers and footers get completely ignored",
    "Color coding has zero impact on ATS scoring",
    "Unique designs often lack proper keyword placement"
  ];

  return (
    <div className={styles.atsResumeTemplates}>
      <Head>
        <title>The 10 Best Resume Templates for Getting Past Applicant Tracking Systems (ATS)</title>
        <meta name="title" content="The 10 Best Resume Templates for Getting Past Applicant Tracking Systems (ATS)" />
        <meta name="description" content="Discover the top 10 ATS-friendly resume templates that beat applicant tracking systems. Learn why fancy designs hurt your chances and get templates that work." />
        <meta name="keywords" content="
          ATS resume templates,
          applicant tracking system resume,
          ATS friendly resume templates,
          best resume templates for ATS,
          resume templates that beat ATS,
          ATS optimized resume,
          resume templates 2026,
          professional resume templates,
          ATS compatible resume,
          resume format for ATS,
          ATS proof resume,
          resume templates free,
          ATS resume examples,
          modern resume templates,
          resume templates download,
          ATS resume format,
          resume templates for jobs,
          ATS resume builder,
          resume templates professional,
          ATS resume tips,
          resume templates for ATS systems,
          ATS friendly format,
          resume templates that work,
          ATS resume design,
          resume templates for employment,
          ATS resume checker,
          resume templates for career,
          ATS resume scanner,
          resume templates for success,
          ATS resume guidelines
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-resume-templates/" />

        <meta property="og:title" content="The 10 Best Resume Templates for Getting Past Applicant Tracking Systems (ATS)" />
        <meta property="og:description" content="Top 10 ATS-friendly resume templates that actually work. Learn why fancy designs get rejected and get templates that pass automated screening systems." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/ats-templates-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-resume-templates" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-02-15T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-06-20T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume templates, ATS, job search, career advice" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="10 Best ATS Resume Templates: Beat Applicant Tracking Systems" />
        <meta name="twitter:description" content="Discover resume templates that pass ATS screening. Learn why fancy designs hurt your chances and get working templates for 2026 job market." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/ats-templates-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Templates included" />
        <meta name="twitter:data1" content="10" />
        <meta name="twitter:label2" content="ATS Score" />
        <meta name="twitter:data2" content="90-99%" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "The 10 Best Resume Templates for Getting Past Applicant Tracking Systems (ATS)",
              "description": "A comprehensive guide to the top 10 ATS-friendly resume templates, explaining why overly designed resumes fail and providing optimized templates for various industries and career levels.",
              "image": "https://www.professionalresumefree.com/images/ats-templates-preview.jpg",
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
              "datePublished": "2026-02-15",
              "dateModified": "2026-06-20",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/ats-resume-templates"
              },
              "articleSection": "Career Resources",
              "keywords": "ATS resume templates, applicant tracking system, resume optimization, job search",
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
                  "name": "Why do fancy resume designs get rejected by ATS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fancy resume designs often use graphics, tables, columns, creative fonts, and headers/footers that ATS systems cannot properly parse. These elements appear as blank spaces, unreadable characters, or scrambled information to the software, causing qualified candidates to be automatically rejected before human review."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes a resume template ATS-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ATS-friendly resumes use: 1) Standard section headings (Experience, Education, Skills), 2) Simple bullet points, 3) Standard fonts (Arial, Calibri, Times New Roman), 4) No tables or columns, 5) Keywords from job descriptions, 6) .docx or text-based PDF format, and 7) Clear contact information at the top."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use a PDF or Word document for ATS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For maximum ATS compatibility, use a Microsoft Word (.docx) document. If using PDF, ensure it's a text-based PDF (not image-based) and test it with ATS software. Many systems still parse Word documents most accurately, though modern ATS systems handle text-based PDFs well."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I check if my resume is ATS-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can check ATS compatibility by: 1) Using free online ATS scanners, 2) Testing readability in plain text format, 3) Ensuring all text is selectable and searchable, 4) Checking for proper keyword placement, and 5) Verifying standard section headings are used. Our templates are pre-tested for 90-99% ATS compatibility."
                  }
                }
              ]
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
                  "name": "Resume Templates",
                  "item": "https://www.professionalresumefree.com/resume-templates"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "ATS-Friendly Templates",
                  "item": "https://www.professionalresumefree.com/ats-resume-templates"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiGrid className={styles.tagIcon} />
              ATS-Optimized Templates 2026
            </div>
            <h1 className={styles.heroTitle}>
              The <span className={styles.gradientText}>10 Best Resume Templates</span> for Getting Past ATS
            </h1>
            <p className={styles.heroSubtitle}>
              <strong>Why "Fancy" Designs Might Be Hurting Your Chances.</strong> 
              Discover the resume templates that actually pass Applicant Tracking Systems 
              and learn why creative designs often get automatically rejected before human review.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <FiDownload className={styles.buttonIcon} />
                Download ATS Templates
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#templates" className={styles.secondaryButton}>
                <FiEye className={styles.buttonIcon} />
                View All Templates
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ 90-99% ATS Compatibility</span>
              <span className={styles.featureBadge}>✓ 10 Industry-Specific Templates</span>
              <span className={styles.featureBadge}>✓ Free Instant Download</span>
              <span className={styles.featureBadge}>✓ 2026 Optimized</span>
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

      {/* Warning Section - Why Fancy Hurts */}
      <section className={styles.warningSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.warningHeader}>
              <FiAlertCircle className={styles.warningIcon} />
              <h2 className={styles.sectionTitle}>Why "Fancy" Resume Designs Hurt Your Chances</h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Your creative resume might look beautiful to humans, but to ATS systems, 
              it's often <strong>unreadable garbage that gets automatically rejected</strong>.
            </p>
          </div>

          <div className={styles.warningGrid}>
            {whyFancyHurts.map((reason, index) => (
              <div key={index} className={styles.warningCard}>
                <div className={styles.warningNumber}>{index + 1}</div>
                <p className={styles.warningText}>{reason}</p>
              </div>
            ))}
          </div>

          <div className={styles.warningNote}>
            <FiAlertCircle className={styles.noteIcon} />
            <p>
              <strong>Critical Insight:</strong> 75% of resumes are rejected by ATS before any human ever sees them. 
              Your beautifully designed resume might be failing at the first automated gate.
            </p>
          </div>
        </div>
      </section>

      {/* ATS Myths vs Reality */}
      <section className={styles.mythsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ATS Myths vs Reality: What Actually Works</h2>
            <p className={styles.sectionSubtitle}>
              Separate fact from fiction when it comes to ATS optimization
            </p>
          </div>

          <div className={styles.mythsGrid}>
            {atsMyths.map((item, index) => (
              <div key={index} className={styles.mythCard}>
                <div className={styles.mythHeader}>
                  <div className={styles.mythBadge}>Myth</div>
                  <h3 className={styles.mythTitle}>{item.myth}</h3>
                </div>
                <div className={styles.truthSection}>
                  <div className={styles.truthBadge}>Reality</div>
                  <p className={styles.truthText}>{item.truth}</p>
                </div>
                <div className={styles.impactSection}>
                  <strong>Impact:</strong> {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Templates Section */}
      <section id="templates" className={styles.templatesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The 10 Best ATS-Friendly Resume Templates</h2>
            <p className={styles.sectionSubtitle}>
              Professionally designed templates with <strong>90-99% ATS compatibility scores</strong>
            </p>
          </div>

          <div className={styles.templateNavigation}>
            {topTemplates.map((template, index) => (
              <button
                key={template.id}
                className={`${styles.templateTab} ${activeTemplate === index ? styles.active : ''}`}
                onClick={() => setActiveTemplate(index)}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{template.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.templateContent}>
            <div className={styles.templateHeader}>
              <div className={styles.templateTitleRow}>
                <h3 className={styles.templateName}>
                  {topTemplates[activeTemplate].name}
                </h3>
                <div className={styles.atsScore}>
                  <FiCheck className={styles.scoreIcon} />
                  ATS Score: {topTemplates[activeTemplate].atsScore}
                </div>
              </div>
              <div className={styles.templateMeta}>
                <span className={styles.templateCategory}>
                  <FiBriefcase className={styles.metaIcon} />
                  {topTemplates[activeTemplate].category}
                </span>
                <span className={styles.templateBestFor}>
                  <FiUser className={styles.metaIcon} />
                  Best for: {topTemplates[activeTemplate].bestFor.join(", ")}
                </span>
              </div>
              <p className={styles.templateDescription}>
                {topTemplates[activeTemplate].description}
              </p>
            </div>

            <div className={styles.templateDetails}>
              <div className={styles.featuresColumn}>
                <h4 className={styles.featuresTitle}>
                  <FiCheck className={styles.featuresIcon} />
                  Key Features
                </h4>
                <ul className={styles.featuresList}>
                  {topTemplates[activeTemplate].features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FiCheck className={styles.featureIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={styles.downloadButton}>
                  <FiDownload className={styles.downloadIcon} />
                  Download This Template
                </button>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Template Preview
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {topTemplates[activeTemplate].example}
                  </pre>
                  <div className={styles.exampleActions}>
                    <button className={styles.copyButton}>
                      <FiCopy className={styles.copyIcon} />
                      Copy Example
                    </button>
                    <button className={styles.previewButton}>
                      <FiEye className={styles.previewIcon} />
                      Full Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS-Friendly Elements */}
      <section className={styles.elementsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Essential ATS-Friendly Elements</h2>
            <p className={styles.sectionSubtitle}>
              These elements are <strong>non-negotiable</strong> for ATS compatibility
            </p>
          </div>

          <div className={styles.elementsGrid}>
            {atsFriendlyElements.map((element, index) => (
              <div key={index} className={styles.elementCard}>
                <div className={styles.elementHeader}>
                  <div className={`${styles.importanceBadge} ${styles[element.importance]}`}>
                    {element.importance}
                  </div>
                  <h3 className={styles.elementTitle}>{element.element}</h3>
                </div>
                <p className={styles.elementReason}>{element.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes Section (Consistent with original) */}
      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common ATS Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>costly errors</strong> that can undermine your job application
            </p>
          </div>
          <div className={styles.mistakesGrid}>
            {[
              "Using fancy graphics and charts",
              "Choosing creative fonts over readability",
              "Organizing information in tables",
              "Placing content in headers/footers",
              "Using color for critical information",
              "Creating multi-column layouts"
            ].map((mistake, index) => (
              <div key={index} className={styles.mistakeCard}>
                <div className={styles.mistakeNumber}>{index + 1}</div>
                <p className={styles.mistakeText}>{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Beat the ATS System?
            </h2>
            <p className={styles.ctaSubtitle}>
              Download our complete set of 10 ATS-optimized resume templates, 
              each professionally designed and tested for maximum compatibility 
              with applicant tracking systems.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <FiDownload className={styles.buttonIcon} />
                Create Your ATS-Optimized Resume
              </Link>
              
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>90-99% ATS Compatibility</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>10 Industry-Specific Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Free Instant Download</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>2026 Updated Formats</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATSResumeTemplates;