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
  FiType,
  FiLayout,
  FiGrid,
  FiAlignLeft,
  FiEye
} from 'react-icons/fi';
import styles from './ResumeFormatting.module.css';

const ResumeFormattingGuide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const formattingSections = [
    {
      title: "Standard Margins and Page Layout",
      content: "Proper margins ensure your resume looks balanced and professional while maximizing space.",
      tips: [
        "Use 0.5-1 inch margins on all sides",
        "Left-align all text for easy reading",
        "Maintain consistent spacing throughout",
        "Use 1.15-1.5 line spacing for readability"
      ],
      example: `╔══════════════════════════════════════╗
║        0.5-1 inch margins         ║
║                                    ║
║  Your Name                        ║
║  Professional Title               ║
║  Contact Information              ║
║                                    ║
║  PROFESSIONAL SUMMARY             ║
║  Summary text here...             ║
║                                    ║
║  WORK EXPERIENCE                  ║
║  • Achievement 1                  ║
║  • Achievement 2                  ║
║                                    ║
║        0.5-1 inch margins         ║
╚══════════════════════════════════════╝`
    },
    {
      title: "Professional Font Selection and Sizes",
      content: "Choosing the right font and size affects readability and creates the right impression.",
      tips: [
        "Use professional fonts: Arial, Calibri, Times New Roman",
        "Name: 20-24 point font",
        "Section headings: 14-16 point font",
        "Body text: 11-12 point font"
      ],
      example: `NAME: 22pt Arial Bold
Professional Title: 14pt Arial Regular

SECTION HEADINGS: 14pt Arial Bold
• Experience, Education, Skills

BODY TEXT: 11pt Arial Regular
• Managed team of 12 developers...
• Increased revenue by 35%...
• Implemented new processes...

BULLET POINTS: 11pt Arial Regular
• Use consistent bullet style
• Align text properly
• Maintain spacing`
    },
    {
      title: "Header and Contact Information Formatting",
      content: "Your header should be clean, professional, and immediately communicate who you are.",
      tips: [
        "Center or left-align your name at top",
        "Include phone, email, LinkedIn, city/state",
        "Use professional email address only",
        "Keep it to 2-3 lines maximum"
      ],
      example: `JENNIFER PARKER
Senior Marketing Director | Digital Strategy
San Francisco, CA | (415) 555-0198
jennifer.parker@email.com | linkedin.com/in/jenniferparker

or

MICHAEL CHEN
Software Engineer | Full Stack Development
(408) 555-0123 | michael.chen@email.com
Seattle, WA | github.com/mchen | portfolio.mchen.dev`
    },
    {
      title: "Section Organization and Hierarchy",
      content: "Clear section hierarchy guides the reader's eye and emphasizes important information.",
      tips: [
        "Use consistent heading styles throughout",
        "Order sections by relevance to target job",
        "Use ALL CAPS or bold for section headings",
        "Include clear visual separation between sections"
      ],
      example: `PROFESSIONAL SUMMARY
[2-3 sentence summary here]

WORK EXPERIENCE
Senior Role | Company | Dates
• Achievement with metrics
• Responsibility with impact

EDUCATION
Degree | University | Dates
GPA, Honors, Relevant Coursework

SKILLS
Category: Skill 1, Skill 2, Skill 3

CERTIFICATIONS
Certification Name | Issuing Organization | Date`
    },
    {
      title: "Bullet Point Formatting and Achievement Writing",
      content: "Well-formatted bullet points make achievements easy to scan and understand.",
      tips: [
        "Start with action verbs (Led, Managed, Increased)",
        "Include quantifiable results and metrics",
        "Keep bullet points to 1-2 lines each",
        "Use parallel structure for consistency"
      ],
      example: `• Led cross-functional team of 15 to launch new product, resulting in $2.5M first-year revenue
• Managed $500K marketing budget, achieving 35% ROI and 15% cost reduction
• Increased customer retention by 25% through implementation of new loyalty program
• Developed and executed social media strategy that grew followers from 5K to 50K in 12 months`
    },
    {
      title: "White Space and Visual Balance",
      content: "Strategic use of white space improves readability and creates a professional appearance.",
      tips: [
        "Leave adequate space between sections",
        "Use consistent paragraph spacing",
        "Balance text density across the page",
        "Avoid overcrowding any single area"
      ],
      example: `NAME & CONTACT
[Ample space here]

SUMMARY
[2-3 lines with space above/below]

EXPERIENCE
[Space between each position]

[Space between bullet points]

EDUCATION
[Clean separation]

SKILLS
[Well-spaced categories]

[Final section with breathing room at bottom]`
    }
  ];

  const resumeLayouts = [
    {
      title: "Traditional Single Column",
      description: "Classic layout with everything in one column, perfect for ATS and conservative industries",
      bestFor: ["Finance", "Law", "Healthcare", "Government", "Corporate roles"],
      features: ["Easy to scan", "ATS-friendly", "Professional appearance", "Standard format"],
      visual: `┌─────────────────────────────┐
│        Your Name           │
│        Contact Info        │
│                            │
│  PROFESSIONAL SUMMARY      │
│  [Summary text]            │
│                            │
│  WORK EXPERIENCE           │
│  • Achievement 1           │
│  • Achievement 2           │
│                            │
│  EDUCATION                 │
│  • Degree details          │
│                            │
│  SKILLS                    │
│  • Skills list             │
└─────────────────────────────┘`
    },
    {
      title: "Modern Two Column",
      description: "Contemporary layout with sidebar for skills/contact, main column for experience",
      bestFor: ["Tech", "Creative", "Marketing", "Design", "Consulting"],
      features: ["Visual appeal", "Skills emphasis", "Modern look", "Good information hierarchy"],
      visual: `┌─────────────┬──────────────┐
│ YOUR NAME   │              │
│ Contact     │ PROFESSIONAL │
│ LinkedIn    │ SUMMARY      │
│ Location    │              │
│             │ WORK         │
│ SKILLS      │ EXPERIENCE   │
│ • Tech      │ • Achievement│
│ • Soft      │ • Results    │
│             │              │
│ EDUCATION   │ EDUCATION    │
│ • Degree    │ • Details    │
│ • Dates     │              │
└─────────────┴──────────────┘`
    },
    {
      title: "Hybrid Combination",
      description: "Blends traditional and modern elements for maximum flexibility and impact",
      bestFor: ["Most professionals", "Mid-career", "Leadership", "Project management"],
      features: ["Balanced design", "ATS-compatible", "Visual interest", "Professional yet modern"],
      visual: `┌─────────────────────────────┐
│        Your Name           │
│        Professional Title  │
│        Contact Info        │
│                            │
│  SUMMARY & SKILLS          │
│  [Combined section]        │
│                            │
│  PROFESSIONAL EXPERIENCE   │
│  • Detailed achievements   │
│  • Metrics and results     │
│                            │
│  EDUCATION & CERTIFICATIONS│
│  • Degree information      │
│  • Professional certs      │
└─────────────────────────────┘`
    },
    {
      title: "Academic/Research Focus",
      description: "Specialized layout emphasizing publications, research, and academic achievements",
      bestFor: ["Professors", "Researchers", "Scientists", "PhD candidates", "Academic roles"],
      features: ["Publications section", "Research focus", "Grants and awards", "Teaching experience"],
      visual: `┌─────────────────────────────┐
│        Your Name, PhD      │
│        Academic Title      │
│        Contact & Links     │
│                            │
│  RESEARCH INTERESTS        │
│  [Specializations]         │
│                            │
│  PUBLICATIONS              │
│  1. Journal Article 2024   │
│  2. Conference Paper 2023  │
│                            │
│  RESEARCH EXPERIENCE       │
│  • Lab work                │
│  • Methodologies           │
│                            │
│  TEACHING EXPERIENCE       │
│  • Courses taught          │
└─────────────────────────────┘`
    }
  ];

  const formattingStandards = [
    {
      category: "Margins",
      standard: "0.5-1 inch all sides",
      purpose: "Professional appearance and print compatibility",
      importance: "Critical"
    },
    {
      category: "Font Size - Name",
      standard: "20-24 point",
      purpose: "Clear identification and hierarchy",
      importance: "High"
    },
    {
      category: "Font Size - Headings",
      standard: "14-16 point",
      purpose: "Section differentiation",
      importance: "High"
    },
    {
      category: "Font Size - Body",
      standard: "11-12 point",
      purpose: "Readability and information density",
      importance: "Critical"
    },
    {
      category: "Line Spacing",
      standard: "1.15-1.5",
      purpose: "Readability and visual comfort",
      importance: "Medium"
    },
    {
      category: "Bullet Points",
      standard: "Standard round/circle bullets",
      purpose: "Consistency and professionalism",
      importance: "High"
    }
  ];

  const stats = [
    {
      value: "7.4 sec",
      label: "Average time spent on initial resume review",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "43%",
      label: "Resumes rejected for poor formatting alone",
      icon: <FiTrendingUp className={styles.statIcon} />
    },
    {
      value: "3x",
      label: "More likely to get interview with proper formatting",
      icon: <FiAward className={styles.statIcon} />
    }
  ];

  const commonFormattingMistakes = [
    "Margins too small (looks crowded) or too large (wastes space)",
    "Using multiple font types and sizes inconsistently",
    "Inadequate white space between sections",
    "Inconsistent bullet point styles throughout",
    "Text too small (under 10pt) or too large (over 14pt for body)",
    "Poor alignment and inconsistent spacing"
  ];

  return (
    <div className={styles.resumeFormattingGuide}>
      <Head>
        <title>What Should a Resume Look Like? (With Visual Examples) | ProfessionalResumeFree</title>
        <meta name="title" content="What Should a Resume Look Like? (With Visual Examples)" />
        <meta name="description" content="Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        <meta name="keywords" content="
          what should a resume look like,
          resume formatting guide,
          standard resume margins,
          professional resume font sizes,
          resume layout examples,
          resume formatting 2026,
          how to format a resume,
          resume design guide,
          professional resume layout,
          resume margins and spacing,
          resume font size guide,
          resume formatting best practices,
          resume visual examples,
          resume formatting tips,
          proper resume format,
          resume structure guide,
          resume formatting standards,
          modern resume formatting,
          traditional resume format,
          resume layout design,
          resume formatting rules,
          resume white space,
          resume bullet point formatting,
          resume section formatting,
          resume header formatting,
          resume contact information format,
          resume professional formatting,
          resume formatting examples,
          resume format guide 2026,
          how to make resume look professional
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-formatting-guide/" />

        <meta property="og:title" content="What Should a Resume Look Like? (With Visual Examples)" />
        <meta property="og:description" content="Complete guide to professional resume formatting with visual examples. Learn standard margins, font sizes, layouts, and formatting best practices for 2026." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-formatting-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-03-10T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-07-15T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume formatting, career advice, job search, resume design" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Formatting Guide: What Should a Resume Look Like?" />
        <meta name="twitter:description" content="Learn proper resume formatting with visual examples. Standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="10 minutes" />
        <meta name="twitter:label2" content="Visual examples" />
        <meta name="twitter:data2" content="12+" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "What Should a Resume Look Like? (With Visual Examples)",
              "description": "A comprehensive guide to professional resume formatting including standard margins, font sizes, professional layouts, and formatting best practices with visual examples for the 2026 job market.",
              "image": "https://www.professionalresumefree.com/images/resume-formatting-preview.jpg",
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
              "datePublished": "2026-03-10",
              "dateModified": "2026-07-15",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-formatting-guide"
              },
              "articleSection": "Career Resources",
              "keywords": "resume formatting, career advice, job search, resume design, professional formatting",
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
                  "name": "What are the standard margins for a professional resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard professional resume margins are 0.5 to 1 inch on all sides. One-inch margins are most common and ensure your resume looks balanced and professional while being compatible with all printing and scanning systems. Margins smaller than 0.5 inches look crowded, while larger margins waste valuable space."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What font size should I use on my resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use these standard font sizes: Your name should be 20-24 point, section headings 14-16 point, and body text 11-12 point. These sizes ensure readability while maintaining a professional appearance. Never use font sizes below 10 point as they become difficult to read, especially for recruiters reviewing hundreds of resumes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use a one-column or two-column resume layout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most traditional industries (finance, law, healthcare, corporate), use a single-column layout as it's most ATS-friendly and professional. For creative fields (design, marketing, tech), a two-column layout can work well if designed properly. Always prioritize readability and ATS compatibility over design creativity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much white space should be on a resume?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A well-formatted resume should have approximately 30-40% white space. This includes margins, spacing between sections, line spacing, and space around headings. Adequate white space improves readability by 40% and makes your resume appear more professional and less cluttered to hiring managers."
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
                  "name": "Career Guides",
                  "item": "https://www.professionalresumefree.com/career-guides"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Resume Formatting Guide",
                  "item": "https://www.professionalresumefree.com/resume-formatting-guide"
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
              <FiLayout className={styles.tagIcon} />
              Professional Formatting Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              What Should a <span className={styles.gradientText}>Resume Look Like?</span>
            </h1>
            <p className={styles.heroSubtitle}>
              <strong>Standard Margins, Font Sizes, and Professional Layouts.</strong> 
              Learn proper resume formatting with visual examples and step-by-step guidance 
              to create resumes that look professional and get results.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                <FiDownload className={styles.buttonIcon} />
                Create Perfectly Formatted Resume
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#sections" className={styles.secondaryButton}>
                <FiEye className={styles.buttonIcon} />
                View Formatting Guide
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ Visual Examples Included</span>
              <span className={styles.featureBadge}>✓ Standard Formatting Rules</span>
              <span className={styles.featureBadge}>✓ Professional Layout Templates</span>
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
              In today's competitive job market, <strong>proper resume formatting can increase your interview chances by 300%</strong>. 
              This comprehensive guide shows you exactly what a professional resume should look like, with 
              <strong> visual examples, standard measurements, and proven layouts</strong> that work for the 2026 job market.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <FiType className={styles.highlightIcon} />
                <span>Font & Size Guidelines</span>
              </div>
              <div className={styles.highlightItem}>
                <FiLayout className={styles.highlightIcon} />
                <span>Layout Examples</span>
              </div>
              <div className={styles.highlightItem}>
                <FiAlignLeft className={styles.highlightIcon} />
                <span>Formatting Standards</span>
              </div>
              <div className={styles.highlightItem}>
                <FiGrid className={styles.highlightIcon} />
                <span>Visual Balance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Professional Resume Layouts for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Choose the right layout for your industry and <strong>maximize visual impact</strong>
            </p>
          </div>
          <div className={styles.typesGrid}>
            {resumeLayouts.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <div className={styles.typeUseCase}>
                  <strong>Best for:</strong> {type.bestFor.join(", ")}
                </div>
                <div className={styles.typeVisual}>
                  <pre className={styles.visualExample}>
                    {type.visual}
                  </pre>
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
            <h2 className={styles.sectionTitle}>Step-by-Step Resume Formatting Guide</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven formatting structure</strong> to create professional-looking resumes
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {formattingSections.map((section, index) => (
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
                {formattingSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {formattingSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Formatting Guidelines
                </h4>
                <ul className={styles.tipsList}>
                  {formattingSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <FiFileText className={styles.exampleIcon} />
                  Visual Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {formattingSections[activeSection].example}
                  </pre>
                  <button className={styles.copyButton}>
                    <FiCopy className={styles.copyIcon} />
                    Copy Formatting Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.standardsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Standard Resume Formatting Specifications</h2>
            <p className={styles.sectionSubtitle}>
              Professional resumes follow these <strong>exact measurements and standards</strong>
            </p>
          </div>
          <div className={styles.standardsGrid}>
            {formattingStandards.map((standard, index) => (
              <div key={index} className={styles.standardCard}>
                <div className={styles.standardHeader}>
                  <div className={`${styles.importanceBadge} ${styles[standard.importance.toLowerCase()]}`}>
                    {standard.importance}
                  </div>
                  <h3 className={styles.standardTitle}>{standard.category}</h3>
                </div>
                <div className={styles.standardValue}>{standard.standard}</div>
                <p className={styles.standardPurpose}>{standard.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common Resume Formatting Mistakes to Avoid</h2>
            <p className={styles.sectionSubtitle}>
              Steer clear of these <strong>formatting errors</strong> that make resumes look unprofessional
            </p>
          </div>
          <div className={styles.mistakesGrid}>
            {commonFormattingMistakes.map((mistake, index) => (
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
              Create a Perfectly Formatted Resume
            </h2>
            <p className={styles.ctaSubtitle}>
              Use our professionally designed templates with perfect formatting already built-in. 
              Get the right margins, font sizes, and layouts without any guesswork.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <FiDownload className={styles.buttonIcon} />
                Build Perfectly Formatted Resume
              </Link>
              <Link href="/resume-templates" className={styles.secondaryButton}>
                <FiFileText className={styles.buttonIcon} />
                Browse Formatting Templates
              </Link>
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Perfect Margins & Spacing</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Professional Font Sizes</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>ATS-Optimized Layouts</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Visual Balance Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeFormattingGuide;