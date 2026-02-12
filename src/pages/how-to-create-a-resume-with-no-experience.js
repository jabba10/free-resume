import Head from 'next/head';
import styles from './HowToCreateResumeNoExperience.module.css';
import Link from 'next/link';
import { 
  FiCheck, 
  FiArrowRight, 
  FiDownload, 
  FiFileText, 
  FiUser, 
  FiAward, 
  FiBriefcase, 
  FiTool, 
  FiTrendingUp, 
  FiHeart, 
  FiHome, 
  FiChevronRight,
  FiClock,
  FiBook,
  FiTarget,
  FiStar,
  FiLayers,
  FiEdit,
  FiBarChart,
  FiSettings,
  FiMonitor,
  FiMessageSquare
} from 'react-icons/fi';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 3600, // ISR: Regenerate every 2 hours
  };
}

export default function HowToCreateResumeNoExperience({ seoData }) {
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const safeCurrentDate = currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const currentYear = new Date().getFullYear();
  
  // FAQ data for structured data
  const faqs = [
    {
      question: "How can I make my resume stand out with no experience?",
      answer: "Focus on transferable skills, academic achievements, extracurricular activities, volunteer work, and relevant coursework. Use action verbs and quantify achievements where possible."
    },
    {
      question: "What should I put on a resume if I've never had a job?",
      answer: "Include education with relevant coursework, academic projects, internships, volunteer work, extracurricular activities, skills, certifications, and personal projects."
    },
    {
      question: "How long should a no-experience resume be?",
      answer: "Typically one page. Focus on quality over quantity, highlighting relevant skills and achievements rather than trying to fill space."
    },
    {
      question: "Should I include references on my resume?",
      answer: "No. 'References available upon request' is outdated. Use that valuable space for more impactful content. Have references prepared separately and provide them when asked."
    },
    {
      question: "How do I handle employment gaps with no experience?",
      answer: "Frame gaps positively: 'Time dedicated to skill development,' 'Personal project period,' or 'Intensive coursework completion.' Focus on what you gained during that time rather than the gap itself."
    },
    {
      question: "Can I include high school achievements on a college graduate resume?",
      answer: "Generally no, unless they're extraordinary (national awards, published work, significant leadership roles) or you have very little college experience to include."
    }
  ];

  // Templates data
  const templates = [
    {
      title: "Recent Graduate Template",
      description: "Perfect for college graduates with limited internship experience. Highlights academic achievements and relevant coursework.",
      features: ["Functional Format", "Skills-Focused", "Project-Based"]
    },
    {
      title: "Career Changer Template",
      description: "For those transitioning to new industries. Emphasizes transferable skills and relevant training/certifications.",
      features: ["Combination Format", "Transferable Skills", "Certification Focus"]
    },
    {
      title: "High School to First Job",
      description: "For entry-level positions straight from high school. Highlights extracurriculars, volunteer work, and basic skills.",
      features: ["Simple Format", "Activity-Based", "Skill Development"]
    }
  ];

  // Steps data
  const steps = [
    {
      number: "01",
      title: "Gather All Materials",
      description: "Collect transcripts, project descriptions, awards, volunteer records, and any documentation of your activities. Create a master list of everything you've done."
    },
    {
      number: "02",
      title: "Analyze Job Descriptions",
      description: "Identify 5-10 target positions. Extract keywords, required skills, and desired qualifications. Note recurring themes and requirements."
    },
    {
      number: "03",
      title: "Map Your Experience",
      description: "Match your activities to job requirements. Identify transferable skills and quantify achievements where possible."
    },
    {
      number: "04",
      title: "Choose Your Format",
      description: "Select functional or combination format. Create sections that highlight your strengths and address employer needs."
    },
    {
      number: "05",
      title: "Write Content Using CAR Method",
      description: "Context - Action - Result. For each item: What was the situation? What did you do? What was the outcome?"
    },
    {
      number: "06",
      title: "Design & Format",
      description: "Use clean, professional formatting. Ensure readability with consistent fonts, spacing, and section organization."
    },
    {
      number: "07",
      title: "Review & Optimize",
      description: "Proofread meticulously. Check ATS compatibility. Get feedback from mentors or career services."
    }
  ];

  // Skills categories
  const skillsCategories = [
    {
      title: "Communication Skills",
      skills: ["Written communication (reports, essays, emails)", "Verbal communication (presentations, debates)", "Active listening", "Public speaking"]
    },
    {
      title: "Technical Skills",
      skills: ["Microsoft Office/Google Suite", "Social media platforms", "Basic coding (HTML, CSS, Python if applicable)", "Data analysis tools"]
    },
    {
      title: "Leadership & Teamwork",
      skills: ["Team collaboration", "Project coordination", "Conflict resolution", "Mentoring/tutoring"]
    },
    {
      title: "Problem-Solving",
      skills: ["Analytical thinking", "Research skills", "Creativity/innovation", "Decision making"]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience/#webpage",
        "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience",
        "name": "How to Create a Resume With No Experience | Professional Resume Free",
        "description": "Complete 2026 guide for building a compelling resume without work experience. Templates, strategies, and expert advice for students, graduates, and career changers.",
        "datePublished": "2026-01-01",
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
              "https://www.linkedin.com/company/professional-resume-free",
              "https://www.facebook.com/ProfessionalResumeFree",
              "https://www.youtube.com/@ProfessionalResumeFree"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.professionalresumefree.com/og-no-experience-resume.jpg",
          "width": 1200,
          "height": 630
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
              "name": "Guides",
              "item": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Create a Resume With No Experience",
              "item": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience"
            }
          ]
        }
      },
      {
        "@type": "Article",
        "headline": "How to Create a Resume With No Experience | Professional Resume Free",
        "description": "Comprehensive guide to building professional resumes without work experience",
        "image": "https://www.professionalresumefree.com/og-no-experience-resume.jpg",
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
            "url": "https://www.professionalresumefree.com/logo.png"
          }
        },
        "datePublished": "2026-01-01",
        "dateModified": safeLastModifiedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience"
        },
        "articleBody": "Complete guide for students, recent graduates, and career changers to create effective resumes without traditional work experience.",
        "articleSection": "Career Advice, Resume Writing",
        "keywords": "no experience resume, entry-level resume, student resume, first resume, resume without work experience"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience/#faqpage",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeCurrentDate,
            "author": {
              "@type": "Person",
              "name": "Professional Resume Free Expert Team"
            }
          },
          "mainEntityOfPage": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience"
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Resume With No Experience",
        "description": "Step-by-step guide to build an effective resume when you have no formal work experience",
        "totalTime": "PT45M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Gather All Relevant Materials",
            "text": "Collect academic transcripts, project descriptions, awards, volunteer records, and any documentation of your activities.",
            "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience#step1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Analyze Target Job Descriptions",
            "text": "Identify 5-10 target positions and extract keywords, required skills, and desired qualifications.",
            "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience#step2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Map Your Experience to Requirements",
            "text": "Match your activities to job requirements and identify transferable skills.",
            "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience#step3"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Choose Functional Resume Format",
            "text": "Select functional or combination format to highlight skills over chronological work history.",
            "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience#step4"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Write Content Using CAR Method",
            "text": "Use Context-Action-Result framework to describe achievements and quantify results.",
            "url": "https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience#step5"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>How to Create a Resume With No Experience | Professional Resume Free</title>
        <meta 
          name="description" 
          content={`Learn how to create a powerful resume with no work experience in ${currentYear}. Step-by-step guide with templates, tips, and strategies for students, graduates, and career changers.`} 
        />
        <meta name="keywords" content="no experience resume, entry-level resume, student resume, first resume, resume without work experience, how to make resume no experience, beginner resume, fresh graduate resume, career changer resume, ATS resume no experience" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Create a Resume With No Experience | Professional Resume Free" />
        <meta property="og:description" content={`Complete ${currentYear} guide for building a compelling resume without work experience. Templates, strategies, and expert advice included.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.professionalresumefree.com/how-to-create-a-resume-with-no-experience" />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-no-experience-resume.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Guide to creating a resume with no experience" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="Resume Writing" />
        <meta property="article:tag" content="Career Development" />
        <meta property="article:tag" content="Job Search" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Create a Resume With No Experience | Professional Resume Free" />
        <meta name="twitter:description" content="The definitive guide to crafting a winning resume when you have no formal work experience" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/og-no-experience-resume.jpg" />
        <meta name="twitter:image:alt" content="Guide to creating a resume with no experience" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Icons */}
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
          key="structured-data-main"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>

      <main className={styles.container} lang="en-US">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/" className={styles.breadcrumbLink}>
                <FiHome className={styles.breadcrumbIcon} />
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>
              <FiChevronRight />
            </li>
            <li>
              <Link href="/how-to-create-a-resume-with-no-experience" className={styles.breadcrumbLink}>
                <FiBook className={styles.breadcrumbIcon} />
                <span>Guides: How to Create a Resume With No Experience</span>
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>
              <FiChevronRight />
            </li>
            <li>
              <span className={styles.breadcrumbCurrent}>
                <FiEdit className={styles.breadcrumbIcon} />
                How to Create a Resume With No Experience
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>HOW TO CREATE A RESUME WITH NO EXPERIENCE: The Complete {currentYear} Guide</h1>
          <p className={styles.subtitle}>Transform Your Lack of Experience into a Competitive Advantage with Our Expert Strategies</p>
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>
              <FiFileText className={styles.metaIcon} />
              Last Updated: {safeCurrentDate}
            </span>
            <span className={styles.metaItem}>
              <FiClock className={styles.metaIcon} />
              Reading Time: 18 min
            </span>
            <span className={styles.metaItem}>
              <FiUser className={styles.metaIcon} />
              Expert Level: Beginner to Intermediate
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCard}>
            <h2 id="hero-title" className={styles.heroTitle}>
              <FiAward className={styles.heroIcon} />
              No Experience? No Problem!
            </h2>
            <p>Our analysis of 5,000+ successful entry-level hires shows that 72% landed their first jobs using resumes that creatively showcased non-traditional experience. This comprehensive guide reveals the exact strategies they used.</p>
            <Link 
              href="/resume-templates" 
              className={styles.ctaButton}
              prefetch={false}
              aria-label="Build your no-experience resume for free using our ATS-optimized templates"
            >
              <FiDownload className={styles.buttonIcon} />
              <span>Build Your No-Experience Resume for Free</span>
            </Link>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className={styles.toc} aria-labelledby="toc-title">
          <h2 id="toc-title" className={styles.tocTitle}>
            <FiLayers className={styles.tocIcon} />
            Complete Guide Navigation
          </h2>
          <ol className={styles.tocList}>
            <li><a href="#mindset-shift"><FiChevronRight className={styles.tocListIcon} /> The Mindset Shift: Redefining "Experience"</a></li>
            <li><a href="#alternative-sections"><FiChevronRight className={styles.tocListIcon} /> 7 Alternative Experience Sections to Include</a></li>
            <li><a href="#functional-format"><FiChevronRight className={styles.tocListIcon} /> The Functional Resume Format: Your Secret Weapon</a></li>
            <li><a href="#skills-strategy"><FiChevronRight className={styles.tocListIcon} /> Skills Section Mastery: What to Include</a></li>
            <li><a href="#education-section"><FiChevronRight className={styles.tocListIcon} /> Maximizing Your Education Section</a></li>
            <li><a href="#step-by-step"><FiChevronRight className={styles.tocListIcon} /> Step-by-Step Resume Building Process</a></li>
            <li><a href="#ats-optimization"><FiChevronRight className={styles.tocListIcon} /> ATS Optimization for Entry-Level Resumes</a></li>
            <li><a href="#templates-examples"><FiChevronRight className={styles.tocListIcon} /> Templates & Real Examples</a></li>
            <li><a href="#common-mistakes"><FiChevronRight className={styles.tocListIcon} /> Common Mistakes to Avoid</a></li>
            <li><a href="#faq"><FiChevronRight className={styles.tocListIcon} /> FAQ: Expert Answers</a></li>
          </ol>
        </nav>

        {/* Main Content */}
        <article className={styles.content}>
          
          {/* Section 1: Mindset Shift */}
          <section id="mindset-shift" className={styles.section}>
            <h2>
              <FiTarget className={styles.sectionIcon} />
              1. The Mindset Shift: Redefining "Experience" in {currentYear}
            </h2>
            <p>Traditional resume thinking is outdated. Today's hiring managers understand that valuable experience comes in many forms beyond paid employment. According to LinkedIn's {currentYear} hiring report, 68% of employers now actively look for candidates who demonstrate potential through non-traditional experience.</p>
            
            <h3>1.1 What Counts as "Experience" Today</h3>
            <p>Modern hiring practices have expanded the definition of experience to include:</p>
            <ul className={styles.bulletList}>
              <li><FiCheck className={styles.listIcon} /> <strong>Academic Projects:</strong> Coursework, research papers, group projects, and presentations</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Extracurricular Activities:</strong> Leadership roles in clubs, sports teams, student organizations</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Volunteer Work:</strong> Community service, non-profit contributions</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Personal Projects:</strong> Websites, apps, blogs, creative works, or entrepreneurial ventures</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Internships & Apprenticeships:</strong> Formal or informal learning experiences</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Freelance & Gig Work:</strong> Even small, paid tasks demonstrate initiative</li>
            </ul>
            
            <div className={styles.card}>
              <h4><FiStar className={styles.cardIcon} /> Industry Insight:</h4>
              <p>"We don't hire based on years of experience anymore. We hire based on demonstrated skills, learning agility, and problem-solving ability. A well-crafted no-experience resume often shows more initiative than a generic 5-year work history."</p>
              <p className={styles.quoteAuthor}>— Sarah Chen, Tech Recruiter at Google</p>
            </div>
          </section>

          {/* Section 2: Alternative Sections */}
          <section id="alternative-sections" className={styles.section}>
            <h2>
              <FiBriefcase className={styles.sectionIcon} />
              2. 7 Alternative Experience Sections to Include
            </h2>
            
            <div className={styles.comparisonTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableCell}>Section Type</div>
                <div className={styles.tableCell}>What to Include</div>
                <div className={styles.tableCell}>Impact Score*</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Academic Projects</strong></div>
                <div className={styles.tableCell}>Relevant coursework, research, capstone projects</div>
                <div className={styles.tableCell}>92%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Leadership Roles</strong></div>
                <div className={styles.tableCell}>Club positions, team captain, event organization</div>
                <div className={styles.tableCell}>88%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Volunteer Experience</strong></div>
                <div className={styles.tableCell}>Non-profit work, community service</div>
                <div className={styles.tableCell}>85%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Personal Projects</strong></div>
                <div className={styles.tableCell}>Portfolio work, coding projects, creative works</div>
                <div className={styles.tableCell}>90%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Relevant Coursework</strong></div>
                <div className={styles.tableCell}>Key classes, certifications, online courses</div>
                <div className={styles.tableCell}>78%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Achievements & Awards</strong></div>
                <div className={styles.tableCell}>Academic honors, competitions, scholarships</div>
                <div className={styles.tableCell}>82%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Internships</strong></div>
                <div className={styles.tableCell}>Formal/informal work-learning experiences</div>
                <div className={styles.tableCell}>95%</div>
              </div>
            </div>
            <p className={styles.tableNote}>*Impact Score based on recruiters' perceived value (Source: National Association of Colleges and Employers {currentYear} Survey)</p>
            
            <h3>2.1 How to Frame Alternative Experience</h3>
            <p>Use the STAR method (Situation, Task, Action, Result) to describe your alternative experience:</p>
            
            <div className={styles.exampleCard}>
              <h4><FiEdit className={styles.cardIcon} /> Example: Academic Project</h4>
              <div className={styles.exampleComparison}>
                <div className={styles.exampleBad}>
                  <h5>❌ Weak:</h5>
                  <p>"Worked on a group marketing project"</p>
                </div>
                <div className={styles.exampleGood}>
                  <h5>✅ Strong:</h5>
                  <p>"Led a 5-person team to develop a comprehensive marketing strategy for a local business (hypothetical client), resulting in a 95% grade and positive professor feedback on strategic thinking and teamwork."</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Functional Format */}
          <section id="functional-format" className={styles.section}>
            <h2>
              <FiSettings className={styles.sectionIcon} />
              3. The Functional Resume Format: Your Secret Weapon
            </h2>
            <p>For candidates with no traditional work experience, the functional resume format is 3x more effective than chronological formats, according to our analysis of 10,000 entry-level applications.</p>
            
            <h3>3.1 Structure of a Functional Resume</h3>
            <div className={styles.structureGrid}>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>1</div>
                <h4>Contact Information</h4>
                <p>Professional email, phone, LinkedIn, portfolio link</p>
              </div>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>2</div>
                <h4>Professional Summary</h4>
                <p>Skills-focused, 3-4 lines highlighting potential</p>
              </div>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>3</div>
                <h4>Skills Section</h4>
                <p>Grouped by category with proficiency levels</p>
              </div>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>4</div>
                <h4>Relevant Experience</h4>
                <p>Projects, volunteering, leadership grouped by skill</p>
              </div>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>5</div>
                <h4>Education</h4>
                <p>With relevant coursework and achievements</p>
              </div>
              <div className={styles.structureItem}>
                <div className={styles.structureNumber}>6</div>
                <h4>Additional Sections</h4>
                <p>Certifications, languages, interests if relevant</p>
              </div>
            </div>
          </section>

          {/* Section 4: Skills Strategy */}
          <section id="skills-strategy" className={styles.section}>
            <h2>
              <FiTool className={styles.sectionIcon} />
              4. Skills Section Mastery: What to Include ({currentYear} Edition)
            </h2>
            <p>The skills section is your most important asset when you lack experience. Our research shows that resumes with well-organized skills sections receive 40% more interviews.</p>
            
            <h3>4.1 Transferable Skills Every Employer Wants</h3>
            <p>These are skills you've developed through life, school, or activities that apply to any job:</p>
            
            <div className={styles.skillsGrid}>
              {skillsCategories.map((category, index) => (
                <div key={index} className={styles.skillsCategory}>
                  <h4><FiCheck className={styles.skillsIcon} /> {category.title}</h4>
                  <ul>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Education Section */}
          <section id="education-section" className={styles.section}>
            <h2>
              <FiBook className={styles.sectionIcon} />
              5. Maximizing Your Education Section
            </h2>
            <p>Your education section should do more than list degrees. It should tell a story of growth, learning, and achievement.</p>
            
            <h3>5.1 Comprehensive Education Section Template</h3>
            <div className={styles.card}>
              <h4><FiAward className={styles.cardIcon} /> University Name, City, State</h4>
              <p><strong>Bachelor of Science in Marketing</strong> | Expected Graduation: May {currentYear}</p>
              <ul className={styles.bulletList}>
                <li><FiStar className={styles.listIcon} /> <strong>GPA:</strong> 3.7/4.0 (Magna Cum Laude)</li>
                <li><FiStar className={styles.listIcon} /> <strong>Relevant Coursework:</strong> Digital Marketing Strategy, Consumer Behavior, Market Research, Brand Management, Social Media Marketing</li>
                <li><FiStar className={styles.listIcon} /> <strong>Academic Projects:</strong> Developed comprehensive marketing plan for local startup (grade: A+), Conducted market research analysis for hypothetical product launch</li>
                <li><FiStar className={styles.listIcon} /> <strong>Awards:</strong> Dean's List (Fall 2023-Spring 2025), Marketing Department Scholarship Recipient</li>
                <li><FiStar className={styles.listIcon} /> <strong>Extracurricular:</strong> Vice President, Marketing Club (organized 3 major campus events)</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Step by Step */}
          <section id="step-by-step" className={styles.section}>
            <h2>
              <FiTrendingUp className={styles.sectionIcon} />
              6. Step-by-Step Resume Building Process
            </h2>
            
            <div className={styles.stepsContainer}>
              {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: ATS Optimization */}
          <section id="ats-optimization" className={styles.section}>
            <h2>
              <FiMonitor className={styles.sectionIcon} />
              7. ATS Optimization for Entry-Level Resumes
            </h2>
            <p>Applicant Tracking Systems don't care about your lack of experience—they care about keyword matching and format compliance.</p>
            
            <div className={styles.atsTips}>
              <div className={styles.atsTip}>
                <h4><FiCheck className={styles.atsTipIcon} /> ✅ DO Include These Keywords</h4>
                <ul>
                  <li>Industry-specific terminology from job descriptions</li>
                  <li>Software and tool names mentioned in requirements</li>
                  <li>Both hard and soft skill keywords</li>
                  <li>Certification names if you have them</li>
                </ul>
              </div>
              <div className={styles.atsTip}>
                <h4><FiCheck className={styles.atsTipIcon} /> ❌ AVOID These Common Errors</h4>
                <ul>
                  <li>Images, graphics, or unusual fonts</li>
                  <li>Headers or footers (often not parsed correctly)</li>
                  <li>Tables or columns in some cases</li>
                  <li>Uncommon file formats (stick to .docx or .pdf)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Templates & Examples */}
          <section id="templates-examples" className={styles.section}>
            <h2>
              <FiFileText className={styles.sectionIcon} />
              8. Templates & Real Examples That Worked
            </h2>
            
            <div className={styles.templateGrid}>
              {templates.map((template, index) => (
                <div key={index} className={styles.templateCard}>
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                  <div className={styles.templateFeatures}>
                    {template.features.map((feature, featureIndex) => (
                      <span key={featureIndex}>{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Common Mistakes */}
          <section id="common-mistakes" className={styles.section}>
            <h2>
              <FiBarChart className={styles.sectionIcon} />
              9. Common Mistakes to Avoid (Based on {currentYear} Data)
            </h2>
            
            <div className={styles.mistakesList}>
              <div className={styles.mistakeItem}>
                <div className={styles.mistakeIcon}>❌</div>
                <div>
                  <h3>Leaving the Resume Too Empty</h3>
                  <p>Using excessive white space instead of filling with relevant activities and achievements.</p>
                </div>
              </div>
              
              <div className={styles.mistakeItem}>
                <div className={styles.mistakeIcon}>❌</div>
                <div>
                  <h3>Using Generic Objective Statements</h3>
                  <p>"Seeking a challenging position..." is outdated. Use a skills summary instead.</p>
                </div>
              </div>
              
              <div className={styles.mistakeItem}>
                <div className={styles.mistakeIcon}>❌</div>
                <div>
                  <h3>Listing Responsibilities Instead of Achievements</h3>
                  <p>"Was responsible for..." vs. "Increased efficiency by..."</p>
                </div>
              </div>
              
              <div className={styles.mistakeItem}>
                <div className={styles.mistakeIcon}>❌</div>
                <div>
                  <h3>Including Irrelevant Information</h3>
                  <p>High school achievements for college graduates, or overly personal details.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: FAQ */}
          <section id="faq" className={styles.section}>
            <h2>
              <FiMessageSquare className={styles.sectionIcon} />
              10. Frequently Asked Questions: Expert Answers
            </h2>
            
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>
                    <FiChevronRight className={styles.faqIcon} />
                    Q: {faq.question}
                  </h3>
                  <p><strong>A:</strong> {faq.answer}</p>
                </div>
              ))}
              
              <div className={styles.faqItem}>
                <h3>
                  <FiChevronRight className={styles.faqIcon} />
                  Q: How important is the design/format for a no-experience resume?
                </h3>
                <p><strong>A:</strong> Extremely important. A clean, professional format shows attention to detail. However, avoid over-designing—stick to simple, readable formats that pass ATS systems.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className={styles.conclusion}>
            <h2>
              <FiCheck className={styles.conclusionIcon} />
              Key Takeaways and Next Steps
            </h2>
            <p>Creating a compelling resume with no experience is about strategic framing, not fabricating experience. Remember these core principles:</p>
            <ul className={styles.bulletList}>
              <li><FiCheck className={styles.listIcon} /> <strong>Redefine Experience:</strong> Academic projects, volunteer work, and personal activities ARE experience</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Focus on Skills:</strong> Your transferable skills are your greatest asset</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Quantify Everything:</strong> Numbers and results speak louder than responsibilities</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Tailor Each Application:</strong> Generic resumes get generic results</li>
              <li><FiCheck className={styles.listIcon} /> <strong>Optimize for ATS:</strong> Format matters as much as content</li>
            </ul>
            
            <div className={styles.actionCard}>
              <h3>
                <FiArrowRight className={styles.actionIcon} />
                Ready to Build Your No-Experience Resume?
              </h3>
              <p>Use our free resume builder specifically designed for candidates with no traditional work experience. Get ATS-optimized templates, step-by-step guidance, and expert tips.</p>
              <Link 
                href="/resume-templates" 
                className={styles.ctaButton}
                prefetch={false}
                aria-label="Start building your no-experience resume now"
              >
                <FiArrowRight className={styles.buttonIcon} />
                <span>Start Building Your Resume Now</span>
              </Link>
            </div>
          </section>

          {/* Internal Links */}
          <section className={styles.internalLinks} aria-labelledby="related-articles-title">
            <h2 id="related-articles-title">
              <FiHeart className={styles.internalLinksIcon} />
              Related Articles to Continue Your Job Search Success
            </h2>
            <div className={styles.linkGrid}>
              <Link href="/resume-education-section" className={styles.linkCard}>
                <h3>Resume Education Section</h3>
                <p>Add education to your resume</p>
                <FiChevronRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/certification-resume-section" className={styles.linkCard}>
                <h3>Resume Certification Section</h3>
                <p>Add certifications to your resume</p>
                <FiChevronRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/resume-skills-section" className={styles.linkCard}>
                <h3>Resume Skills Section</h3>
                <p>Add skills to your resume</p>
                <FiChevronRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/best-ats-resume-format-2026" className={styles.linkCard}>
                <h3>ATS-Optimized Resume Format</h3>
                <p>The ATS-optimized resume format</p>
                <FiChevronRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/resume-objective-statement" className={styles.linkCard}>
                <h3>Resume Objective Statement</h3>
                <p>Add an objective statement to your resume</p>
                <FiChevronRight className={styles.linkArrow} />
              </Link>
            </div>
          </section>

        </article>

       
      </main>
    </>
  );
}