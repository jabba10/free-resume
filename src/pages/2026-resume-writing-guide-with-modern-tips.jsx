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
  FiCalendar,
  FiLayers,
  FiActivity,
  FiEye,
  FiSearch,
  FiTool
} from 'react-icons/fi';
import styles from './ResumeGuide2026.module.css';

const ResumeGuide2026 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeFormat, setActiveFormat] = useState('chronological');

  const resumeSections = [
    {
      title: "Professional Header & Contact Information",
      content: "Create a clean, modern header that immediately captures attention with essential contact details.",
      tips: [
        "Include name, phone, professional email, and LinkedIn URL",
        "Add city/state (full address is outdated)",
        "Optional: Portfolio link, GitHub for tech roles",
        "Use professional font and consistent formatting"
      ],
      example: `JAMIE PATEL
Senior Product Manager | AI & Cloud Solutions
San Francisco, CA | (415) 555-0123
jamie.patel@email.com | linkedin.com/in/jamiepatel
portfolio.jpatel.com | github.com/jpatel`
    },
    {
      title: "Professional Summary / Career Profile",
      content: "Write a compelling 3-4 line summary highlighting your key achievements and value proposition.",
      tips: [
        "Start with your years of experience and specialization",
        "Mention 2-3 key achievements with metrics",
        "Include relevant industry keywords",
        "Tailor to specific job you're applying for"
      ],
      example: `Results-driven Product Manager with 8+ years of experience specializing in AI-powered SaaS solutions. Successfully launched 5 products generating $12M+ in annual revenue. Expert in Agile methodologies, cross-functional team leadership, and data-driven decision making. Seeking to leverage expertise in scaling innovative products at a forward-thinking tech company.`
    },
    {
      title: "Work Experience - Impact-Focused Formatting",
      content: "Structure your experience using the CAR (Challenge-Action-Result) method for maximum impact.",
      tips: [
        "List positions in reverse chronological order",
        "Use action verbs and quantify achievements",
        "Focus on results, not just responsibilities",
        "Include relevant technologies and tools"
      ],
      example: `SENIOR PRODUCT MANAGER | TechVision AI | 2021-2025
• Led development of AI analytics platform that increased client retention by 42%
• Managed cross-functional team of 12, delivering features 30% ahead of schedule
• Implemented Agile practices improving team velocity by 55%
• Increased product revenue by $3.2M annually through strategic feature prioritization`
    },
    {
      title: "Skills Section - Keyword Optimization",
      content: "Strategically organize skills for both human readers and ATS (Applicant Tracking Systems).",
      tips: [
        "Categorize skills (Technical, Professional, Tools)",
        "Include keywords from job description",
        "Match skill level to job requirements",
        "Update for emerging 2026 technologies"
      ],
      example: `TECHNICAL: AI/ML Integration, Cloud Architecture (AWS/Azure), Data Analytics, API Design
PROFESSIONAL: Agile Leadership, Strategic Planning, Stakeholder Management, UX/UI Collaboration
TOOLS: Jira, Figma, SQL, Python, Tableau, Docker, Git`
    },
    {
      title: "Education & Certifications",
      content: "Highlight relevant education and modern certifications that demonstrate ongoing learning.",
      tips: [
        "Include degrees, institutions, and graduation years",
        "Add relevant certifications (especially for tech roles)",
        "Mention honors/awards if recent graduate",
        "Include ongoing education/courses"
      ],
      example: `MASTER OF SCIENCE IN COMPUTER SCIENCE
Stanford University | 2016-2018
Specialization: Artificial Intelligence
GPA: 3.9/4.0

CERTIFICATIONS:
• AWS Certified Solutions Architect (2025)
• Google Professional Data Engineer (2024)
• Scrum Master Certified (2023)`
    },
    {
      title: "Additional Sections for 2026",
      content: "Modern resume elements that can differentiate you in competitive markets.",
      tips: [
        "Projects section (especially for tech/creative roles)",
        "Publications or speaking engagements",
        "Volunteer work demonstrating relevant skills",
        "Languages for international roles"
      ],
      example: `PROJECTS:
• Developed open-source AI tool with 2,500+ GitHub stars
• Led pro-bono website redesign for non-profit, increasing donations by 120%

LANGUAGES:
• English (Native)
• Spanish (Professional Proficiency)
• Mandarin (Conversational)`
    }
  ];

  const resumeFormats = {
    chronological: {
      name: "Chronological Format",
      description: "Traditional format listing work history in reverse chronological order",
      bestFor: ["Experienced professionals", "Career progression", "Industry veterans"],
      pros: ["Easy to follow timeline", "Shows career growth", "ATS-friendly", "Recruiter preferred"],
      cons: ["Highlights employment gaps", "Not ideal for career changers", "Can be repetitive"],
      structure: ["Contact Info", "Summary", "Work Experience", "Education", "Skills"]
    },
    functional: {
      name: "Functional Format",
      description: "Skills-based format emphasizing abilities over chronological work history",
      bestFor: ["Career changers", "Recent graduates", "Gaps in employment", "Freelancers"],
      pros: ["Highlights transferable skills", "Minimizes employment gaps", "Focuses on abilities", "Flexible structure"],
      cons: ["Some ATS systems struggle", "Recruiters may be suspicious", "Can hide work history"],
      structure: ["Contact Info", "Summary", "Skills by Category", "Selected Achievements", "Work History", "Education"]
    },
    hybrid: {
      name: "Hybrid (Combination) Format",
      description: "Blends chronological and functional formats for maximum impact",
      bestFor: ["Most 2026 job seekers", "Mid-career professionals", "Technical roles", "Leadership positions"],
      pros: ["Best of both formats", "Highly ATS-friendly", "Shows skills and timeline", "Modern and effective"],
      cons: ["Can be longer", "Requires careful organization", "Needs strategic planning"],
      structure: ["Contact Info", "Summary", "Key Skills", "Professional Experience", "Education & Certifications", "Additional Sections"]
    }
  };

  const atsTips = [
    "Use standard section headings (Experience, Education, Skills)",
    "Include keywords from job description naturally",
    "Avoid tables, columns, and graphics",
    "Save as PDF with selectable text",
    "Use standard fonts (Arial, Calibri, Times New Roman)",
    "Include both spelled out and acronym versions of terms"
  ];

  const emergingTrends2026 = [
    {
      title: "AI Integration",
      description: "Resumes optimized for AI screening with strategic keyword placement",
      icon: <FiActivity />
    },
    {
      title: "Digital Credentials",
      description: "Blockchain-verified certificates and micro-credentials gaining importance",
      icon: <FiAward />
    },
    {
      title: "Video Components",
      description: "Short video introductions linked via QR codes on resumes",
      icon: <FiEye />
    },
    {
      title: "Skills-Based Hiring",
      description: "Focus shifting from degrees to demonstrable skills and projects",
      icon: <FiTool />
    }
  ];

  const stats = [
    {
      value: "7.4 sec",
      label: "Average time recruiters spend reviewing a resume",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "75%",
      label: "Resumes rejected by ATS before human review",
      icon: <FiSearch className={styles.statIcon} />
    },
    {
      value: "2x",
      label: "More interviews with ATS-optimized resumes",
      icon: <FiTrendingUp className={styles.statIcon} />
    }
  ];

  return (
    <div className={styles.resumeGuide}>
      <Head>
        <title>How to Write a Resume in 2026: The Ultimate Step-by-Step Guide | ProfessionalResumeFree</title>
        <meta name="title" content="How to Write a Resume in 2026: The Ultimate Step-by-Step Guide" />
        <meta name="description" content="Master resume writing for 2026 job market. Complete guide covering chronological, functional & hybrid formats, ATS optimization, and modern trends with templates." />
        <meta name="keywords" content="
          how to write a resume 2026,
          resume writing guide 2026,
          chronological resume format,
          functional resume format,
          hybrid resume format,
          ATS resume optimization,
          modern resume trends 2026,
          professional resume templates,
          resume examples 2026,
          resume writing tips,
          career change resume,
          entry level resume,
          experienced professional resume,
          resume format comparison,
          chronological vs functional resume,
          resume best practices 2026,
          AI resume screening,
          resume keywords optimization,
          resume structure guide,
          resume writing step by step,
          professional resume writing,
          resume format guide,
          resume templates free,
          resume builder 2026,
          resume examples professional,
          resume writing service,
          resume tips and tricks,
          resume format template,
          resume writing for job application,
          how to make a resume 2026
        " />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-writing-guide-2026/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="How to Write a Resume in 2026: The Ultimate Step-by-Step Guide" />
        <meta property="og:description" content="Master resume writing for 2026 with our complete guide. Learn chronological, functional & hybrid formats, ATS optimization, and modern trends with free templates." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-guide-2026-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-writing-guide-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-01-20T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-03-15T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume writing, career advice, job search, resume formats" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Writing Guide 2026: Step-by-Step with Format Comparison" />
        <meta name="twitter:description" content="Master resume writing for 2026 job market. Complete guide covering all formats, ATS optimization, and modern trends with free templates." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-guide-2026-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="15 minutes" />
        <meta name="twitter:label2" content="Formats covered" />
        <meta name="twitter:data2" content="3" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Write a Resume in 2026: The Ultimate Step-by-Step Guide",
              "description": "A comprehensive guide to writing effective resumes for the 2026 job market, covering chronological, functional, and hybrid formats with ATS optimization strategies and modern trends.",
              "image": "https://www.professionalresumefree.com/images/resume-guide-2026-preview.jpg",
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
              "datePublished": "2026-01-20",
              "dateModified": "2026-03-15",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-writing-guide-2026"
              },
              "articleSection": "Career Resources",
              "keywords": "resume writing, career advice, job search, resume formats, ATS optimization",
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
                  "name": "What is the best resume format for 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For most job seekers in 2026, the hybrid (combination) format is recommended as it combines the strengths of both chronological and functional formats. It highlights skills while maintaining a clear work history, making it highly effective for both ATS systems and human recruiters."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should my resume be in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The ideal resume length in 2026 remains 1-2 pages. Recent graduates and early-career professionals should aim for 1 page, while experienced professionals with 10+ years can use 2 pages. Focus on relevance and impact rather than length."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I make my resume ATS-friendly in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To optimize your resume for ATS in 2026: use standard section headings, incorporate keywords from the job description naturally, avoid tables and graphics, use simple formatting, save as PDF with selectable text, and include both spelled-out and acronym versions of technical terms."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include a photo on my resume in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most cases, no. For US job markets, photos are generally discouraged as they can introduce unconscious bias. Exceptions include modeling/acting roles or certain international markets where photos are expected. Always research industry and regional norms."
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
                  "name": "Resume Writing Guide 2026",
                  "item": "https://www.professionalresumefree.com/resume-writing-guide-2026"
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
              <FiCalendar className={styles.tagIcon} />
              Updated for 2026 Job Market
            </div>
            <h1 className={styles.heroTitle}>
              How to Write a <span className={styles.gradientText}>Winning Resume</span> in 2026
            </h1>
            <p className={styles.heroSubtitle}>
              The <strong>complete step-by-step guide</strong> to crafting resumes that pass ATS screening, 
              impress recruiters, and land interviews in the competitive 2026 job market. 
              Learn to choose between <strong>chronological, functional, and hybrid formats</strong>.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                Build Your ATS Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#format-comparison" className={styles.secondaryButton}>
                Compare Resume Formats
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ 3 Format Types Covered</span>
              <span className={styles.featureBadge}>✓ ATS Optimization Guide</span>
              <span className={styles.featureBadge}>✓ 2026 Trends Included</span>
              <span className={styles.featureBadge}>✓ Free Templates</span>
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

      {/* Format Comparison Section */}
      <section id="format-comparison" className={styles.formatsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Choosing Between Chronological, Functional, and Hybrid Formats
            </h2>
            <p className={styles.sectionSubtitle}>
              Select the right resume format for your career situation and <strong>maximize your chances</strong> in 2026
            </p>
          </div>

          <div className={styles.formatTabs}>
            {Object.entries(resumeFormats).map(([key, format]) => (
              <button
                key={key}
                className={`${styles.formatTab} ${activeFormat === key ? styles.active : ''}`}
                onClick={() => setActiveFormat(key)}
              >
                <FiLayers className={styles.formatTabIcon} />
                {format.name}
              </button>
            ))}
          </div>

          <div className={styles.formatContent}>
            <div className={styles.formatInfo}>
              <h3 className={styles.formatTitle}>
                {resumeFormats[activeFormat].name}
              </h3>
              <p className={styles.formatDescription}>
                {resumeFormats[activeFormat].description}
              </p>
              
              <div className={styles.formatDetails}>
                <div className={styles.detailColumn}>
                  <h4 className={styles.detailTitle}>
                    <FiCheck className={styles.detailIcon} />
                    Best For
                  </h4>
                  <ul className={styles.detailList}>
                    {resumeFormats[activeFormat].bestFor.map((item, index) => (
                      <li key={index} className={styles.detailItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailColumn}>
                  <h4 className={styles.detailTitle}>
                    <FiCheck className={styles.detailIcon} />
                    Advantages
                  </h4>
                  <ul className={styles.detailList}>
                    {resumeFormats[activeFormat].pros.map((pro, index) => (
                      <li key={index} className={styles.detailItem}>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailColumn}>
                  <h4 className={styles.detailTitle}>
                    <FiCheck className={styles.detailIcon} />
                    Structure
                  </h4>
                  <ul className={styles.detailList}>
                    {resumeFormats[activeFormat].structure.map((section, index) => (
                      <li key={index} className={styles.detailItem}>
                        {index + 1}. {section}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Step-by-Step Resume Writing Guide for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven structure</strong> to create a resume that stands out in the 2026 job market
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {resumeSections.map((section, index) => (
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
                {resumeSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {resumeSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <FiCheck className={styles.tipsIcon} />
                  Best Practices for 2026
                </h4>
                <ul className={styles.tipsList}>
                  {resumeSections[activeSection].tips.map((tip, index) => (
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
                    {resumeSections[activeSection].example}
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

      {/* ATS Optimization Section */}
      <section className={styles.atsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ATS Optimization for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Ensure your resume passes through <strong>Applicant Tracking Systems</strong> and reaches human recruiters
            </p>
          </div>
          
          <div className={styles.atsGrid}>
            {atsTips.map((tip, index) => (
              <div key={index} className={styles.atsCard}>
                <div className={styles.atsNumber}>{index + 1}</div>
                <p className={styles.atsText}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Trends Section */}
      <section className={styles.trendsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Emerging Resume Trends for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Stay ahead of the curve with these <strong>modern resume strategies</strong>
            </p>
          </div>

          <div className={styles.trendsGrid}>
            {emergingTrends2026.map((trend, index) => (
              <div key={index} className={styles.trendCard}>
                <div className={styles.trendIconContainer}>
                  {trend.icon}
                </div>
                <h3 className={styles.trendTitle}>{trend.title}</h3>
                <p className={styles.trendDescription}>{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Create Your 2026 Resume?
            </h2>
            <p className={styles.ctaSubtitle}>
              Use our free, ATS-optimized resume builder with templates for all formats and industries.
              Get started in minutes and land more interviews.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <FiDownload className={styles.buttonIcon} />
                Build Your Free Resume
              </Link>
              <Link href="/resume-templates" className={styles.secondaryButton}>
                <FiFileText className={styles.buttonIcon} />
                Browse Templates
              </Link>
            </div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>ATS-Friendly Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>All Format Options</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Expert Writing Tips</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiCheck className={styles.featureIcon} />
                <span>Free PDF Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeGuide2026;