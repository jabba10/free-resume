'use client';
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
  FiClock,
  FiUsers,
  FiBriefcase,
  FiStar
} from 'react-icons/fi';
import styles from './ProfessionalSummary.module.css';

const ProfessionalSummaryGuide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const summarySections = [
    {
      title: "The 6-Second Hook Formula",
      content: "Learn the exact structure that captures attention in the first 6 seconds of review.",
      tips: [
        "Start with years of experience + specialization",
        "Include 2-3 key achievements with metrics",
        "Mention target role and industry",
        "End with value proposition for employer"
      ],
      example: `Results-driven Digital Marketing Manager with 8+ years of experience specializing in SaaS B2B marketing. Increased lead generation by 150% and reduced CAC by 35% through data-driven campaign optimization. Seeking to leverage expertise in growth marketing to drive revenue at a scaling tech company.`
    },
    {
      title: "Quantifiable Achievement Integration",
      content: "How to incorporate measurable results that prove your value immediately.",
      tips: [
        "Use specific numbers (%, $, #)",
        "Focus on business impact (revenue, efficiency, growth)",
        "Choose achievements relevant to target role",
        "Prioritize recent and significant results"
      ],
      example: `Senior Software Engineer with 10+ years in full-stack development, leading teams that delivered 15+ enterprise applications. Improved system performance by 300% and reduced deployment time by 60%. Expertise in microservices architecture and cloud migration for Fortune 500 clients.`
    },
    {
      title: "Keyword Optimization for ATS",
      content: "Strategically place keywords while maintaining natural, compelling language.",
      tips: [
        "Include 5-7 keywords from job description",
        "Use industry-standard terminology",
        "Balance keywords with human-readable content",
        "Avoid keyword stuffing"
      ],
      example: `Data Scientist specializing in machine learning and predictive analytics with 6+ years in fintech. Built risk assessment models with 95% accuracy, preventing $50M+ in potential losses. Proficient in Python, TensorFlow, and big data technologies for scalable AI solutions.`
    },
    {
      title: "Tailoring for Different Industries",
      content: "How to adjust your summary statement for various professional fields.",
      tips: [
        "Tech: Emphasize specific technologies and methodologies",
        "Sales: Focus on revenue numbers and client acquisition",
        "Healthcare: Highlight patient outcomes and compliance",
        "Finance: Emphasize risk management and ROI"
      ],
      example: `Healthcare: Registered Nurse with 7+ years in critical care, reducing patient readmission rates by 40% through improved discharge planning. Certified in ACLS and specializing in cardiac care with 99% patient satisfaction scores.`

    },
    {
      title: "Career Level Adjustments",
      content: "How your summary should evolve as you progress through different career stages.",
      tips: [
        "Entry-level: Focus on education, skills, and potential",
        "Mid-career: Emphasize achievements and specialization",
        "Senior: Highlight leadership, strategy, and business impact",
        "Executive: Focus on vision, growth, and organizational leadership"
      ],
      example: `Executive: Chief Operations Officer with 15+ years driving operational excellence in manufacturing. Led $500M division achieving 25% YOY growth while reducing operational costs by 18%. Expert in supply chain optimization and digital transformation for global enterprises.`
    },
    {
      title: "Avoiding Common Pitfalls",
      content: "Mistakes that immediately turn off recruiters and ATS systems.",
      tips: [
        "Avoid clichés ('hard worker', 'team player')",
        "Don't use first-person pronouns excessively",
        "Never include personal information or photos",
        "Keep it to 3-4 lines maximum",
        "Always customize for each application"
      ],
      example: `❌ DON'T: "Hard-working professional seeking challenging position where I can utilize my skills."
      
✅ DO: "Strategic Product Manager with 5+ years launching successful SaaS products, increasing user adoption by 200% and driving $10M+ in annual revenue."`
    }
  ];

  const summaryExamples = [
    {
      title: "Entry-Level (0-3 years experience)",
      description: "Focus on education, skills, and potential rather than extensive work history",
      structure: "Degree + Skills + Career Objective",
      example: `Recent Computer Science graduate with Bachelor's degree specializing in data structures and algorithms. Developed 5+ full-stack applications using React and Node.js during coursework. Seeking Junior Developer position to contribute to innovative software solutions while expanding technical expertise.`,
      keywords: ["Recent graduate", "Bachelor's degree", "Full-stack development", "React", "Node.js", "Software solutions"]
    },
    {
      title: "Mid-Career (3-7 years experience)",
      description: "Balance skills with specific achievements and growing specialization",
      structure: "Experience + Achievements + Target Role",
      example: `Marketing Manager with 5+ years developing integrated campaigns for tech startups. Increased brand awareness by 300% and generated $2M+ in qualified leads through strategic content marketing. Seeking to leverage growth marketing expertise in a Series B+ technology company.`,
      keywords: ["Marketing Manager", "Integrated campaigns", "Brand awareness", "Content marketing", "Qualified leads", "Growth marketing"]
    },
    {
      title: "Senior Professional (7-15 years experience)",
      description: "Emphasize leadership, strategic impact, and measurable business results",
      structure: "Leadership + Business Impact + Specialization",
      example: `Senior Product Director with 12+ years leading cross-functional teams in enterprise software. Drove product strategy resulting in 400% market share growth and $50M+ annual revenue. Expert in Agile methodology, user-centered design, and go-to-market strategy for B2B SaaS products.`,
      keywords: ["Senior Product Director", "Cross-functional teams", "Product strategy", "Market share growth", "Agile methodology", "B2B SaaS"]
    },
    {
      title: "Executive Level (15+ years experience)",
      description: "Focus on vision, organizational leadership, and transformative business impact",
      structure: "Leadership Vision + Transformational Results + Industry Authority",
      example: `Chief Technology Officer with 20+ years driving digital transformation and technical innovation. Led 500+ engineer organization through successful IPO, scaling infrastructure to support 10M+ users. Recognized industry speaker on AI implementation and cloud architecture strategy.`,
      keywords: ["Chief Technology Officer", "Digital transformation", "Technical innovation", "IPO", "Infrastructure scaling", "AI implementation"]
    }
  ];

  const industryExamples = [
    {
      industry: "Technology & Software",
      example: `Senior DevOps Engineer with 8+ years optimizing cloud infrastructure for high-traffic applications. Reduced system downtime by 99.9% and cut hosting costs by 40% through AWS optimization. Certified AWS Solutions Architect specializing in containerization and CI/CD pipelines.`,
      keywords: "AWS, Kubernetes, CI/CD, infrastructure, scalability"
    },
    {
      industry: "Healthcare & Medical",
      example: `Board-Certified Physician Assistant with 6+ years in emergency medicine and urgent care. Managed 50+ patients daily with 98% satisfaction scores, reducing wait times by 35%. Specializing in acute care management and emergency response protocols.`,
      keywords: "Board-certified, patient care, emergency medicine, satisfaction scores"
    },
    {
      industry: "Finance & Banking",
      example: `CFA Charterholder with 10+ years in investment banking and portfolio management. Generated average annual returns of 15% across $500M+ asset portfolio. Expert in risk assessment, financial modeling, and regulatory compliance for institutional clients.`,
      keywords: "CFA, investment banking, portfolio management, risk assessment, financial modeling"
    },
    {
      industry: "Sales & Business Development",
      example: `Enterprise Sales Director with 12+ years exceeding quotas in SaaS and technology sales. Closed $100M+ in enterprise deals, including 5 Fortune 500 accounts. Specializing in complex sales cycles, strategic partnerships, and team leadership for high-growth markets.`,
      keywords: "Enterprise sales, SaaS, quota achievement, strategic partnerships, team leadership"
    }
  ];

  const stats = [
    {
      value: "6 sec",
      label: "Average time recruiters spend on initial resume review",
      icon: <FiClock className={styles.statIcon} />
    },
    {
      value: "80%",
      label: "Resumes rejected before professional summary is read",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "3x",
      label: "More interviews with strong professional summaries",
      icon: <FiTrendingUp className={styles.statIcon} />
    }
  ];

  const commonMistakes = [
    "Using generic phrases like 'hard worker' or 'team player'",
    "Writing in first person instead of professional third person",
    "Including irrelevant personal information or hobbies",
    "Making it too long (ideal: 3-4 lines, 50-100 words)",
    "Not customizing for specific job applications",
    "Focusing on responsibilities instead of achievements"
  ];

  return (
    <div className={styles.professionalSummaryGuide}>
      <Head>
        <title>How to Write a Professional Summary That Hooks Recruiters in 6 Seconds</title>
        <meta name="title" content="How to Write a Professional Summary That Hooks Recruiters in 6 Seconds" />
        <meta name="description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work." />
        <meta name="keywords" content="
          professional summary examples,
          how to write a professional summary,
          resume summary statement,
          career summary examples,
          professional summary for resume,
          resume summary 2026,
          summary statement examples,
          professional profile examples,
          resume introduction examples,
          career objective vs summary,
          executive summary resume,
          entry level summary examples,
          senior level summary examples,
          ATS friendly summary,
          resume summary tips,
          professional summary format,
          summary for job application,
          resume headline examples,
          professional summary writing,
          summary statement for resume,
          career summary template,
          professional summary guide,
          resume summary best practices,
          summary examples for jobs,
          professional profile summary,
          resume summary statement examples,
          how to write summary for resume,
          professional summary samples,
          resume summary 2026 examples,
          career level summary examples
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/professional-summary-guide/" />

        <meta property="og:title" content="How to Write a Professional Summary That Hooks Recruiters in 6 Seconds" />
        <meta property="og:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas that work." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/professional-summary-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/professional-summary-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-05-15T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-09-30T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="professional summary, resume writing, career advice, job search" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Summary Guide: Hook Recruiters in 6 Seconds" />
        <meta name="twitter:description" content="Learn to write professional summaries that capture attention in 6 seconds. Get examples for every career level and industry with proven formulas." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/professional-summary-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="8 minutes" />
        <meta name="twitter:label2" content="Examples included" />
        <meta name="twitter:data2" content="20+" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Write a Professional Summary That Hooks Recruiters in 6 Seconds",
              "description": "A comprehensive guide to writing effective professional summaries for resumes that capture recruiter attention within 6 seconds, including examples for different career levels and industries.",
              "image": "https://www.professionalresumefree.com/images/professional-summary-preview.jpg",
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
              "datePublished": "2026-05-15",
              "dateModified": "2026-09-30",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/professional-summary-guide"
              },
              "articleSection": "Career Resources",
              "keywords": "professional summary, resume writing, career advice, job search, resume tips",
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
                  "name": "How long should a professional summary be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A professional summary should be 3-4 lines or 50-100 words. This is approximately the amount of text recruiters can scan in 6 seconds. It should be concise enough to read quickly but comprehensive enough to showcase your value proposition and key qualifications for the target role."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between a professional summary and career objective?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A professional summary focuses on what you offer employers (experience, achievements, value), while a career objective focuses on what you want from employers (your career goals). For most professionals beyond entry-level, a professional summary is more effective as it demonstrates immediate value to hiring managers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I customize my professional summary for each job application?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. You should customize your professional summary for each job application by incorporating keywords from the job description, emphasizing relevant achievements, and aligning your value proposition with the specific role's requirements. This increases both ATS compatibility and human reviewer engagement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the most important elements to include in a professional summary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most important elements are: 1) Years of experience and specialization, 2) 2-3 key achievements with quantifiable results, 3) Target role/industry focus, 4) Relevant skills and certifications, and 5) Value proposition for the employer. These elements should be presented in a compelling, concise format that can be understood in 6 seconds."
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
                  "name": "Career Resources",
                  "item": "https://www.professionalresumefree.com/career-resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Professional Summary Guide",
                  "item": "https://www.professionalresumefree.com/professional-summary-guide"
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
              <FiStar className={styles.tagIcon} />
              Resume Writing Mastery 2026
            </div>
            <h1 className={styles.heroTitle}>
              How to Write a <span className={styles.gradientText}>Professional Summary</span> That Hooks Recruiters
            </h1>
            <p className={styles.heroSubtitle}>
              <strong>Examples of Summary Statements for Every Career Level.</strong> 
              Learn the exact formula to capture attention in <strong>6 seconds</strong> and 
              increase your interview chances by <strong>300%</strong>.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <FiDownload className={styles.buttonIcon} />
                Build Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#sections" className={styles.secondaryButton}>
                <FiBook className={styles.buttonIcon} />
                Learn Summary Writing
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ 6-Second Hook Formula</span>
              <span className={styles.featureBadge}>✓ Career Level Examples</span>
              <span className={styles.featureBadge}>✓ Industry-Specific Templates</span>
              <span className={styles.featureBadge}>✓ 2026 Best Practices</span>
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
              Your professional summary is the <strong>most critical 6 seconds of your resume</strong>. 
              Recruiters spend an average of 6 seconds on initial resume screening, and 
              <strong> 80% of resumes are rejected before the summary is fully read</strong>. 
              This guide provides proven formulas and real examples to ensure your summary 
              <strong> captures attention, communicates value, and gets you interviews</strong>.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiClock className={styles.highlightIcon} />
                <span>6-Second Capture Formula</span>
              </div>
              <div className={styles.highlightItem}>
                <FiUsers className={styles.highlightIcon} />
                <span>Career Level Examples</span>
              </div>
              <div className={styles.highlightItem}>
                <FiBriefcase className={styles.highlightIcon} />
                <span>Industry Templates</span>
              </div>
              <div className={styles.highlightItem}>
                <FiStar className={styles.highlightIcon} />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Summary Examples for Every Career Level</h2>
            <p className={styles.sectionSubtitle}>
              Customized examples that work for <strong>entry-level to executive positions</strong>
            </p>
          </div>
          <div className={styles.typesGrid}>
            {summaryExamples.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeStructure}>
                  <strong>Structure:</strong> {type.structure}
                </div>
                <div className={styles.typeExample}>
                  <pre className={styles.exampleText}>
                    {type.example}
                  </pre>
                </div>
                <div className={styles.typeTips}>
                  <h4>Key Keywords:</h4>
                  <div className={styles.keywordsList}>
                    {type.keywords.map((keyword, tipIndex) => (
                      <span key={tipIndex} className={styles.keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sections" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Step-by-Step Professional Summary Writing Guide</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven 6-second formula</strong> to create compelling summaries that work
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {summarySections.map((section, index) => (
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
                {summarySections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {summarySections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Key Guidelines
                </h4>
                <ul className={styles.tipsList}>
                  {summarySections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Professional Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {summarySections[activeSection].example}
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

      <section className={styles.industrySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industry-Specific Summary Examples</h2>
            <p className={styles.sectionSubtitle}>
              Tailored examples for <strong>different professional fields</strong>
            </p>
          </div>
          <div className={styles.industryGrid}>
            {industryExamples.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <h3 className={styles.industryTitle}>{industry.industry}</h3>
                <div className={styles.industryExample}>
                  <pre className={styles.exampleText}>
                    {industry.example}
                  </pre>
                </div>
                <div className={styles.industryKeywords}>
                  <strong>Key Terms:</strong> {industry.keywords}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common Professional Summary Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>costly errors</strong> that immediately turn off recruiters
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
              Create Your 6-Second Professional Summary
            </h2>
            <p className={styles.ctaSubtitle}>
              Use our AI-powered summary builder to create customized professional summaries 
              that capture attention and get results for your specific career level and industry.
            </p>
            
            <div className={styles.ctaButtons}>
              
              <Link href="/resume-templates" className={styles.secondaryButton}>
                <FiFileText className={styles.buttonIcon} />
                View Resume Templates
              </Link>
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>6-Second Capture Formula</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Career Level Customization</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Industry-Specific Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>ATS Keyword Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalSummaryGuide;