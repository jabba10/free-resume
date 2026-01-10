import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiSearch,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
  FiFileText,
  FiTarget,
  FiBarChart,
  FiUsers,
  FiEdit,
  FiCopy,
  FiDownload,
  FiArrowRight,
  FiEye,
  FiHash,
  FiType,
  FiCodesandbox,
  FiLayers
} from 'react-icons/fi';
import styles from './ATSGuide.module.css';

const ATSGuide = ({ currentDate, lastModifiedDate }) => {
  const [activeSection, setActiveSection] = useState(0);

  const atsSections = [
    {
      title: "Understanding Modern ATS Architecture",
      content: "Learn how Applicant Tracking Systems parse, score, and rank candidates in 2026.",
      tips: [
        "Modern ATS uses AI-powered parsing algorithms",
        "Systems score candidates based on keyword density and relevance",
        "Resumes are ranked against job description requirements",
        "ATS can parse both chronological and functional formats",
        "Most systems prioritize content over design elements"
      ],
      example: "ATS Ranking Algorithm:\n- Keyword Match: 40% weight\n- Experience Relevance: 30%\n- Skills Alignment: 20%\n- Format Compatibility: 10%"
    },
    {
      title: "Strategic Keyword Integration Techniques",
      content: "How to naturally incorporate keywords without keyword stuffing or sacrificing readability.",
      tips: [
        "Use synonyms and related terms from job descriptions",
        "Incorporate keywords in context-rich sentences",
        "Place keywords in strategic positions (first 1/3 of document)",
        "Mix technical terms with industry jargon appropriately",
        "Include both hard skills and soft skills keywords"
      ],
      example: "Instead of: 'Skilled in Python, Java, SQL, JavaScript, React'\nBetter: 'Developed full-stack applications using Python and JavaScript frameworks, with backend databases managed through SQL queries and frontend interfaces built with React.'"
    },
    {
      title: "Formatting for Maximum ATS Compatibility",
      content: "Optimal document structure and formatting choices that ensure 100% ATS readability.",
      tips: [
        "Use standard fonts (Arial, Calibri, Times New Roman)",
        "Avoid headers, footers, and text boxes",
        "Save as .docx or PDF with selectable text",
        "Use standard bullet points (• instead of custom symbols)",
        "Maintain consistent heading hierarchy"
      ],
      example: "✅ ATS-Friendly:\n# Professional Experience\n• Managed team of 10 developers\n• Increased efficiency by 40%\n\n❌ ATS-Unfriendly:\n[Image header with text]\n★ Led team of ✨10 developers✨\n🚀 Boosted efficiency by 40%+"
    },
    {
      title: "Industry-Specific Keyword Banks",
      content: "Curated keyword lists for major industries and how to implement them effectively.",
      tips: [
        "Tech: Include specific programming languages and frameworks",
        "Healthcare: Add certifications, procedures, and medical terminology",
        "Finance: Incorporate compliance standards and financial instruments",
        "Marketing: Use platform names, metrics, and campaign types",
        "Include both entry-level and senior-level terminology"
      ],
      example: "Tech Keywords: Agile, Scrum, DevOps, CI/CD, AWS, Azure, Docker, Kubernetes, REST API, Microservices, TDD, Git, Jenkins\nHealthcare Keywords: HIPAA, EHR/EMR, Patient Care, Clinical Trials, Medicare, ICD-10, TJC, BLS Certified"
    },
    {
      title: "Advanced ATS Optimization Strategies",
      content: "Pro-level techniques for beating sophisticated AI-powered ATS systems.",
      tips: [
        "Use job description mirroring with natural language variation",
        "Implement keyword clustering around core competencies",
        "Include both acronyms and full terms (SEO & Search Engine Optimization)",
        "Add industry-standard certifications and their abbreviations",
        "Incorporate measurable metrics with keywords"
      ],
      example: "Basic: 'Project Management'\nAdvanced: 'Led Agile project management initiatives using Scrum methodology, resulting in 25% faster delivery times and improved stakeholder satisfaction scores by 40%.'"
    }
  ];

  const atsTypes = [
    {
      title: "AI-Powered ATS",
      description: "Uses machine learning to score and rank candidates",
      features: ["Semantic analysis", "Skill gap identification", "Predictive hiring"],
      optimization: ["Natural language variation", "Context-rich descriptions", "Skill clustering"]
    },
    {
      title: "Traditional Rule-Based ATS",
      description: "Relies on keyword matching and scoring rules",
      features: ["Exact match scoring", "Keyword density analysis", "Rule-based filtering"],
      optimization: ["Strategic keyword placement", "Standard formatting", "Clear section headers"]
    },
    {
      title: "Hybrid ATS Systems",
      description: "Combines AI analysis with rule-based filtering",
      features: ["Multi-factor scoring", "Customizable filters", "Integration with HR tools"],
      optimization: ["Balanced keyword strategy", "ATS-friendly design", "Comprehensive skill listing"]
    },
    {
      title: "Enterprise-Grade ATS",
      description: "Used by large corporations with complex hiring needs",
      features: ["Multi-department integration", "Advanced analytics", "Custom workflow rules"],
      optimization: ["Department-specific keywords", "Corporate terminology", "Culture alignment"]
    }
  ];

  const atsStats = [
    {
      value: "75%",
      label: "Resumes rejected by ATS before human review",
      icon: <FiAlertCircle className={styles.statIcon} />
    },
    {
      value: "90%",
      label: "Large companies use ATS for screening",
      icon: <FiUsers className={styles.statIcon} />
    },
    {
      value: "6-10",
      label: "Seconds ATS spends scanning each resume",
      icon: <FiEye className={styles.statIcon} />
    }
  ];

  const commonMistakes = [
    "Using images or graphics for important text",
    "Non-standard fonts and creative formatting",
    "Keyword stuffing without context",
    "Missing essential contact information",
    "Saving in incompatible file formats",
    "Using headers/footers for critical content"
  ];

  const keywordExamples = [
    {
      industry: "Technology",
      keywords: [
        "Agile Methodology", "CI/CD", "Cloud Computing", "DevOps", 
        "Microservices", "Machine Learning", "Data Analytics", "Cybersecurity",
        "Full Stack Development", "API Integration"
      ]
    },
    {
      industry: "Healthcare",
      keywords: [
        "Patient Care", "EHR/EMR", "HIPAA Compliance", "Clinical Documentation",
        "Medical Coding", "Healthcare Administration", "Patient Safety", 
        "Telemedicine", "Healthcare IT", "Regulatory Compliance"
      ]
    },
    {
      industry: "Finance",
      keywords: [
        "Financial Analysis", "Risk Management", "Investment Banking", 
        "Portfolio Management", "Compliance", "Auditing", "Financial Modeling",
        "GAAP", "SEC Regulations", "Asset Management"
      ]
    },
    {
      industry: "Marketing",
      keywords: [
        "Digital Marketing", "SEO/SEM", "Content Strategy", "Social Media Marketing",
        "Brand Management", "Marketing Analytics", "Lead Generation", 
        "Conversion Optimization", "Marketing Automation", "CRM Management"
      ]
    }
  ];

  return (
    <div className={styles.atsGuide}>
      <Head>
        <title>How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026</title>
        <meta name="title" content="How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026" />
        <meta name="description" content="Master ATS optimization with our 2026 guide. Learn keyword integration, formatting strategies, and pro tips to ensure your resume passes Applicant Tracking Systems and reaches hiring managers." />
        <meta name="keywords" content="
          ATS optimization,
          Applicant Tracking System,
          beat ATS 2026,
          resume keywords,
          ATS friendly resume,
          resume scanning software,
          ATS resume tips,
          keyword optimization,
          resume parsing,
          ATS compatibility,
          resume formatting,
          hiring software,
          resume screening,
          ATS algorithms,
          resume ranking,
          job application software,
          resume keywords list,
          ATS resume format,
          modern hiring software,
          resume optimization,
          ATS tips 2026,
          resume writing for ATS,
          ATS resume checker,
          resume scanner,
          ATS resume guide,
          job search technology,
          resume keywords 2026,
          ATS friendly format,
          resume parsing software,
          ATS best practices,
          resume screening software,
          ATS resume templates,
          resume software compatibility,
          ATS resume writing,
          resume scanning tips,
          ATS optimization guide,
          resume keywords optimization,
          ATS resume examples,
          hiring technology,
          resume software 2026
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-optimization-guide/" />
        
        {/* Static dates from getStaticProps */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />

        <meta property="og:title" content="How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026" />
        <meta property="og:description" content="Master ATS optimization for 2026. Learn proven strategies to ensure your resume passes Applicant Tracking Systems and reaches hiring managers with our comprehensive guide." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/ats-optimization-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-optimization-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="ATS, resume optimization, job search, career advice" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026" />
        <meta name="twitter:description" content="Master ATS optimization for 2026 hiring. Ensure your resume passes automated screening with our proven strategies and keyword techniques." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/ats-optimization-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="15 minutes" />
        <meta name="twitter:label2" content="Success rate increase" />
        <meta name="twitter:data2" content="300%" />

        {/* Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026",
              "description": "A comprehensive guide to optimizing resumes for Applicant Tracking Systems in 2026, including keyword strategies, formatting tips, and industry-specific optimization techniques.",
              "image": "https://www.professionalresumefree.com/images/ats-optimization-preview.jpg",
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
              "datePublished": currentDate,
              "dateModified": lastModifiedDate.split('T')[0],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/ats-optimization-guide"
              },
              "articleSection": "Career Resources",
              "keywords": "ATS optimization, resume writing, job search, career advice, hiring software, resume screening",
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

        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What percentage of companies use ATS in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In 2026, approximately 90% of large companies and 75% of mid-sized companies use Applicant Tracking Systems for initial resume screening. This makes ATS optimization essential for modern job seekers.",
                    "dateCreated": currentDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does an ATS typically scan a resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most ATS systems spend only 6-10 seconds scanning each resume during the initial screening phase. This makes strategic keyword placement and ATS-friendly formatting critically important for passing automated screening.",
                    "dateCreated": currentDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the most common ATS mistakes to avoid?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most common ATS mistakes include: using images for text, creative/non-standard fonts, keyword stuffing without context, incompatible file formats, headers/footers for critical content, and missing essential contact information in the main document body.",
                    "dateCreated": currentDate
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I check if my resume is ATS-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can check ATS compatibility by: using our free ATS resume scanner, testing with different file formats, checking text selectability, avoiding tables and columns, using standard headings, and ensuring keyword density is natural and contextual rather than forced.",
                    "dateCreated": currentDate
                  }
                }
              ]
            })
          }}
        />

        {/* BreadcrumbList JSON-LD */}
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
                  "name": "Career Resources",
                  "item": "https://www.professionalresumefree.com/career-resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "ATS Optimization Guide 2026",
                  "item": "https://www.professionalresumefree.com/ats-optimization-guide"
                }
              ]
            })
          }}
        />

        {/* HowTo JSON-LD for step-by-step guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Beat the ATS: Optimization Tips for Modern Hiring Software 2026",
              "description": "Step-by-step guide to optimizing resumes for Applicant Tracking Systems",
              "datePublished": currentDate,
              "dateModified": lastModifiedDate.split('T')[0],
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              },
              "step": atsSections.map((section, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": section.title,
                "text": section.content,
                "url": `https://www.professionalresumefree.com/ats-optimization-guide#step-${index + 1}`
              }))
            })
          }}
        />

        {/* SoftwareApplication JSON-LD for ATS Software */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ATS Optimization Guide 2026",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Comprehensive guide for optimizing resumes for Applicant Tracking Systems",
              "datePublished": currentDate,
              "dateModified": lastModifiedDate.split('T')[0],
              "author": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiSearch className={styles.tagIcon} />
              ATS Optimization Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              How to <span className={styles.gradientText}>Beat the ATS</span>: Optimization Tips for Modern Hiring Software
            </h1>
            <p className={styles.heroSubtitle}>
              Master the art of <strong>ATS optimization for 2026</strong>. Learn proven strategies to ensure your resume 
              passes automated screening and reaches hiring managers. Increase your interview chances by 
              <strong> up to 300%</strong> with our comprehensive guide.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <FiEye className={styles.buttonIcon} />
                Create Your Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#keywords" className={styles.secondaryButton}>
                <FiHash className={styles.buttonIcon} />
                View Keyword Database
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ Industry-Specific Keywords</span>
              <span className={styles.featureBadge}>✓ ATS-Compatible Templates</span>
              <span className={styles.featureBadge}>✓ 2026 Optimization Strategies</span>
              <span className={styles.featureBadge}>✓ Formatting Guidelines</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            {atsStats.map((stat, index) => (
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
              In the <strong>digital hiring landscape of 2026</strong>, Applicant Tracking Systems filter 
              <strong> 75% of resumes before human review</strong>. This guide provides everything you need to 
              create <strong>ATS-optimized resumes</strong> that pass automated screening and showcase your 
              value to hiring managers, increasing your interview rate by <strong>up to 300%</strong>.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiTarget className={styles.highlightIcon} />
                <span>Keyword Optimization Strategies</span>
              </div>
              <div className={styles.highlightItem}>
                <FiType className={styles.highlightIcon} />
                <span>Formatting Best Practices</span>
              </div>
              <div className={styles.highlightItem}>
                <FiCodesandbox className={styles.highlightIcon} />
                <span>ATS Software Analysis</span>
              </div>
              <div className={styles.highlightItem}>
                <FiTrendingUp className={styles.highlightIcon} />
                <span>300% More Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Modern ATS Systems in 2026</h2>
            <p className={styles.sectionSubtitle}>
              Understanding different ATS types helps you <strong>tailor your optimization strategy</strong>
            </p>
          </div>
          <div className={styles.typesGrid}>
            {atsTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeFeatures}>
                  <h4>Key Features:</h4>
                  <ul>
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FiCheckCircle className={styles.featureIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.typeOptimization}>
                  <h4>Optimization Tips:</h4>
                  <ul>
                    {type.optimization.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <FiArrowRight className={styles.tipIcon} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete ATS Optimization Guide for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven 5-step framework</strong> to create resumes that pass every ATS screening
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {atsSections.map((section, index) => (
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
                {atsSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {atsSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheckCircle className={styles.tipsIcon} />
                  Optimization Strategies
                </h4>
                <ul className={styles.tipsList}>
                  {atsSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Practical Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {atsSections[activeSection].example}
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

      <section id="keywords" className={styles.keywordsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How to Identify and Integrate Industry Keywords Naturally</h2>
            <p className={styles.sectionSubtitle}>
              Master the art of <strong>natural keyword integration</strong> that satisfies ATS requirements while maintaining readability
            </p>
          </div>

          <div className={styles.keywordsGrid}>
            {keywordExamples.map((industry, index) => (
              <div key={index} className={styles.keywordCard}>
                <div className={styles.keywordHeader}>
                  <FiLayers className={styles.industryIcon} />
                  <h3 className={styles.industryTitle}>{industry.industry}</h3>
                </div>
                <div className={styles.keywordList}>
                  {industry.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex} className={styles.keywordTag}>
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className={styles.integrationTip}>
                  <h4>Natural Integration Tip:</h4>
                  <p>Incorporate these keywords within achievement statements and skills sections. For example: "Implemented <strong>Agile Methodology</strong> to improve team efficiency by 40% through <strong>CI/CD</strong> pipeline optimization."</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.keywordStrategies}>
            <div className={styles.strategyCard}>
              <h3>Keyword Research Methodology</h3>
              <ul>
                <li>Analyze 3-5 job descriptions in your target role</li>
                <li>Identify recurring technical terms and soft skills</li>
                <li>Check industry forums and professional networks</li>
                <li>Use LinkedIn's skills endorsement section</li>
                <li>Review competitor profiles for keyword patterns</li>
              </ul>
            </div>
            <div className={styles.strategyCard}>
              <h3>Natural Integration Techniques</h3>
              <ul>
                <li>Use keywords in context-rich sentences</li>
                <li>Vary terminology with synonyms</li>
                <li>Include both acronyms and full terms</li>
                <li>Place keywords in strategic positions</li>
                <li>Maintain 2-3% keyword density naturally</li>
              </ul>
            </div>
            <div className={styles.strategyCard}>
              <h3>ATS Keyword Placement Guide</h3>
              <ul>
                <li>Professional Summary: 3-5 core keywords</li>
                <li>Skills Section: 10-15 relevant keywords</li>
                <li>Experience Bullets: 2-3 keywords per achievement</li>
                <li>Certifications & Education: Include key terms</li>
                <li>Avoid keyword stuffing in any single section</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common ATS Mistakes to Avoid in 2026</h2>
            <p className={styles.sectionSubtitle}>
              These errors can <strong>instantly reject your resume</strong> from modern ATS systems
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
            <h2 className={styles.ctaTitle}>Ready to Beat the ATS in 2026?</h2>
            <p className={styles.ctaSubtitle}>
              Create an <strong>ATS-optimized resume</strong> that passes automated screening and 
              showcases your value to hiring managers. Get <strong>3x more interviews</strong> with 
              our proven optimization framework.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <FiDownload className={styles.buttonIcon} />
                Free Resume Templates
              </Link>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>100% ATS-Compatible Formats</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>Industry-Specific Keyword Banks</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheckCircle className={styles.featureIcon} />
                <span>2026 Optimization Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  // Generate dates at build time for SSG
  const now = new Date();
  
  // Format: YYYY-MM-DD
  const currentDate = now.toISOString().split('T')[0];
  
  // Full ISO 8601 string
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate
    },
    // Enable Incremental Static Regeneration
    revalidate: 86400 // Regenerate every 24 hours (86400 seconds)
  };
}

export default ATSGuide;