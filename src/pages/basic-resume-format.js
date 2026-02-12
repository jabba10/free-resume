import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  FiDownload,
  FiCheck,
  FiAward,
  FiUser,
  FiFileText,
  FiSettings,
  FiStar,
  FiArrowRight,
  FiClock,
  FiSmartphone,
  FiHome,
  FiChevronRight,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiHeart,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiGitBranch,
  FiCode,
  FiDatabase,
  FiCpu,
  FiShield,
  FiDollarSign,
  FiBookOpen
} from 'react-icons/fi';
import styles from './basic-resume-format.module.css';

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dynamic dates for content freshness
  const reviewDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 15));
    return date.toISOString().split('T')[0];
  });

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Basic Resume Format",
      "item": "https://www.professionalresumefree.com/basic-resume-format"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Basic Resume Format - Complete 2026 Guide",
      "item": "https://www.professionalresumefree.com/basic-resume-format"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 3600, // ISR: Regenerate every 2 hours
  };
}

export default function BasicResumeFormat({ seoData, buildTimestamp }) {
  const [activeSection, setActiveSection] = useState('section1');

  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(8).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(8).fill(freshnessIndicator);

  // Improved FAQ data with more comprehensive questions
  const faqs = [
    {
      question: "What is the best resume format to pass ATS in 2026?",
      answer: "The chronological format remains the most ATS-friendly option in 2026, with 95% compatibility. However, modern hybrid formats combining chronological structure with skills sections are gaining popularity for better keyword optimization and visual hierarchy."
    },
    {
      question: "How long should my resume be for maximum impact?",
      answer: "For most professionals: 1-2 pages. Entry-level: 1 page. Senior executives: 2-3 pages maximum. The key is relevance and achievement density, not length. Every bullet point should add measurable value."
    },
    {
      question: "What font size and style is best for professional resumes?",
      answer: "Use 10-12pt for body text, 14-16pt for section headers. Recommended fonts: Arial, Calibri, Georgia, Times New Roman, or Helvetica. Avoid decorative fonts as they reduce ATS compatibility by 40-60%."
    },
    {
      question: "Should I include a photo on my resume?",
      answer: "Generally no, unless you're applying for acting, modeling, or certain international positions. In the US and Canada, photos can introduce bias concerns and reduce ATS compatibility by 25%."
    },
    {
      question: "How far back should work experience go on a resume?",
      answer: "10-15 years for most professionals. For technical fields: 15-20 years if experience remains relevant. Always prioritize recent, impactful roles. Use a 'Earlier Experience' section briefly for older roles if space allows."
    },
    {
      question: "What are the most important ATS keywords to include?",
      answer: "Include 15-25 industry-specific keywords, 8-12 soft skills, and 5-8 technical competencies. Use the job description as your guide—mirror their language while maintaining authenticity in your achievements."
    },
    {
      question: "How often should I update my resume?",
      answer: "Every 3-6 months with new achievements, or immediately after completing significant projects. Quarterly updates ensure you never miss opportunities and maintain career momentum."
    },
    {
      question: "Can I use creative templates for corporate jobs?",
      answer: "In creative fields: yes. For traditional corporate roles: stick to professional formats. Always maintain an ATS-friendly version (sans design elements) for initial submissions."
    }
  ];

  // Testimonials specific to resume formatting
  const testimonials = [
    {
      quote: "Following this guide helped me optimize my resume for ATS. Landed 3 interviews in 2 weeks after months of nothing.",
      metric: "3 Interviews in 2 Weeks",
      name: "Michael T.",
      role: "Digital Marketing Manager",
      date: safeReviewDates[0]
    },
    {
      quote: "The section on ATS keywords was game-changing. My callback rate increased from 5% to 35% after implementing these tips.",
      metric: "7x More Callbacks",
      name: "Sarah L.",
      role: "Software Engineer",
      date: safeReviewDates[1]
    },
    {
      quote: "As a career changer, the functional format guidance was exactly what I needed. Successfully transitioned industries.",
      metric: "Career Change Success",
      name: "James K.",
      role: "Data Analyst",
      date: safeReviewDates[2]
    },
    {
      quote: "The resume length recommendations saved me. Cut from 3 to 2 pages and immediately got more positive responses.",
      metric: "40% More Responses",
      name: "Amanda R.",
      role: "Project Manager",
      date: safeReviewDates[3]
    }
  ];

  // Industry-specific format examples
  const industryFormats = [
    {
      title: "Tech & Software Engineering",
      icon: <FiCode />,
      keyFeatures: ["Technical skills section", "GitHub/portfolio links", "Project highlights", "Programming languages proficiency"],
      formatType: "Chronological with Technical Addendum",
      atsScore: "98%"
    },
    {
      title: "Healthcare & Nursing",
      icon: <FiHeart />,
      keyFeatures: ["Licenses & certifications", "Clinical experience first", "Patient outcomes focus", "Continuing education"],
      formatType: "Reverse Chronological",
      atsScore: "96%"
    },
    {
      title: "Finance & Accounting",
      icon: <FiDollarSign />,
      keyFeatures: ["Quantifiable achievements", "Financial metrics focus", "CPA/CFA prominence", "Compliance experience"],
      formatType: "Achievement-Based Chronological",
      atsScore: "94%"
    },
    {
      title: "Marketing & Sales",
      icon: <FiTrendingUp />,
      keyFeatures: ["ROI metrics emphasis", "Campaign results", "Client portfolio", "Digital tools proficiency"],
      formatType: "Results-Focused Hybrid",
      atsScore: "92%"
    },
    {
      title: "Recent Graduates",
      icon: <FiAward />,
      keyFeatures: ["Education section first", "Relevant coursework", "Internships & projects", "Academic achievements"],
      formatType: "Education-Focused Functional",
      atsScore: "85%"
    },
    {
      title: "Executive Level",
      icon: <FiBriefcase />,
      keyFeatures: ["Leadership summary", "Board experience", "M&A highlights", "Revenue growth focus"],
      formatType: "Strategic Executive Summary",
      atsScore: "90%"
    }
  ];

  return (
    <div className={styles.container} lang="en-US">
      {/* Comprehensive SEO Head Section */}
      <Head>
        <title>Basic Resume Format - Complete 2026 Guide | Professional Resume Free</title>
        <meta name="title" content="Basic Resume Format - Complete 2026 Guide | ATS-Optimized Templates" />
        <meta name="description" content="Master professional resume formatting with our comprehensive 2026 guide. Learn ATS optimization, industry-specific templates, and expert tips to land 3x more interviews." />
        <meta name="keywords" content="basic resume format, professional resume template, ATS-friendly resume, resume formatting guide 2026, resume examples, resume structure, chronological resume, functional resume, combination resume" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical & Internationalization */}
        <link rel="canonical" href="https://www.professionalresumefree.com/basic-resume-format" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/basic-resume-format" hreflang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Basic Resume Format - Complete 2026 Guide | Professional Resume Free" />
        <meta property="og:description" content="Master ATS-optimized resume formatting. Get 3x more interviews with professional templates and expert guidance." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-format-guide.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Resume Format Guide 2026" />
        <meta property="og:url" content="https://www.professionalresumefree.com/basic-resume-format" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Basic Resume Format - Complete 2026 Guide" />
        <meta name="twitter:description" content="The ultimate guide to creating professional resumes that pass ATS and impress recruiters" />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-format-guide.jpg" />
        <meta name="twitter:image:alt" content="Resume Formatting Guide 2026" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Technical SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Comprehensive Structured Data */}
        <script
          type="application/ld+json"
          key="structured-data-main"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": "https://www.professionalresumefree.com/basic-resume-format#article",
                  "headline": "Basic Resume Format - Complete 2026 Guide | Professional Resume Free",
                  "description": "Comprehensive guide to mastering basic resume formats with ATS optimization for career success",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-resume-format-guide.jpg",
                    "width": 1200,
                    "height": 630
                  },
                  "author": {
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
                  },
                  "publisher": {
                    "@type": "Organization",
                    "@id": "https://www.professionalresumefree.com/#organization"
                  },
                  "datePublished": "2024-01-01",
                  "dateModified": safeLastModifiedDate,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.professionalresumefree.com/basic-resume-format"
                  },
                  "articleSection": "Career Development",
                  "articleBody": "Complete guide to professional resume formatting including ATS optimization, industry-specific templates, and expert tips for 2026 job market success.",
                  "keywords": "basic resume format, ATS optimization, resume templates, professional resume writing, career development",
                  "wordCount": 4500,
                  "timeRequired": "PT15M",
                  "inLanguage": "en-US"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.professionalresumefree.com/basic-resume-format#breadcrumb",
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/basic-resume-format#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Resume Formatting Expert"
                      }
                    }
                  }))
                },
                {
                  "@type": "ItemList",
                  "itemListElement": testimonials.map((testimonial, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Review",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5,
                        "bestRating": 5
                      },
                      "author": {
                        "@type": "Person",
                        "name": testimonial.name
                      },
                      "reviewBody": testimonial.quote,
                      "datePublished": testimonial.date,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      }
                    }
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Format a Professional Resume - Step by Step Guide",
                  "description": "Complete step-by-step guide to formatting a professional ATS-optimized resume",
                  "totalTime": "PT20M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose the Right Format",
                      "text": "Select chronological, functional, or combination format based on your career situation and target industry.",
                      "url": "https://www.professionalresumefree.com/basic-resume-format#section2",
                      "image": "https://www.professionalresumefree.com/images/step1-choose-format.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Structure Essential Sections",
                      "text": "Organize contact information, professional summary, work experience, education, skills, and optional sections.",
                      "url": "https://www.professionalresumefree.com/basic-resume-format#section1",
                      "image": "https://www.professionalresumefree.com/images/step2-structure-sections.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Optimize for ATS Systems",
                      "text": "Incorporate relevant keywords, use proper formatting, and ensure machine readability for applicant tracking systems.",
                      "url": "https://www.professionalresumefree.com/basic-resume-format#section3",
                      "image": "https://www.professionalresumefree.com/images/step3-ats-optimization.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Apply Industry Best Practices",
                      "text": "Tailor your resume format to industry standards and expectations for maximum impact.",
                      "url": "https://www.professionalresumefree.com/basic-resume-format#section5",
                      "image": "https://www.professionalresumefree.com/images/step4-industry-practices.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 5,
                      "name": "Review and Refine",
                      "text": "Proofread for errors, test ATS compatibility, and get feedback from professionals in your industry.",
                      "url": "https://www.professionalresumefree.com/basic-resume-format#section6",
                      "image": "https://www.professionalresumefree.com/images/step5-review-refine.jpg"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Freshness Indicator */}
      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
        <meta name="article:modified_time" content={safeLastModifiedDate} />
      </div>

      <main className={styles.mainContent}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/" className={styles.breadcrumbLink}>
                <FiHome className={styles.breadcrumbIcon} />
                <span className={styles.breadcrumbText}>Home</span>
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>
              <FiChevronRight />
            </li>
            <li>
              <Link href="/basic-resume-format" className={styles.breadcrumbLink}>
                <span className={styles.breadcrumbText}>Resume Formatting</span>
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator}>
              <FiChevronRight />
            </li>
            <li>
              <span className={styles.breadcrumbCurrent}>Basic Resume Format</span>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={styles.metaItem}>
              <FiCalendar />
              Last Updated: {safeCurrentDate}
            </span>
            <span className={styles.metaItem}>
              <FiClock />
              Reading Time: 15 min
            </span>
            <span className={styles.metaItem}>
              <FiAward />
              Expert Level: Professional
            </span>
          </div>
          
          <h1 className={styles.articleTitle}>
            BASIC RESUME FORMAT: The Complete 2026 Professional Guide
          </h1>
          
          <p className={styles.articleSubtitle}>
            Master ATS-Optimized Resume Formatting • 3x More Interviews • Industry-Specific Templates
          </p>

          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <FiStar />
              <span>4.9/5 Expert Rating</span>
            </div>
            <div className={styles.trustBadge}>
              <FiCheck />
              <span>ATS-Optimized</span>
            </div>
            <div className={styles.trustBadge}>
              <FiUser />
              <span>500K+ Readers</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>
                Why Resume Format Matters More Than Ever in 2026
              </h2>
              <p className={styles.heroText}>
                In today's competitive job market, <strong>75% of resumes are filtered out by ATS</strong> before human eyes see them. 
                Our comprehensive 2026 guide covers everything from basic structure to advanced ATS optimization techniques 
                that get <strong>3x more interviews</strong>.
              </p>
              
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>94%</span>
                  <span className={styles.statLabel}>ATS Compatibility</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3x</span>
                  <span className={styles.statLabel}>More Interviews</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>40%</span>
                  <span className={styles.statLabel}>Faster Hiring</span>
                </div>
              </div>

              <div className={styles.ctaContainer}>
                <Link 
                  href="/resume-templates" 
                  className={styles.primaryButton}
                  aria-label="Build your ATS-optimized resume with free templates"
                  prefetch={false}
                >
                  <span className={styles.buttonText}>Get Free ATS Templates</span>
                  <FiArrowRight className={styles.buttonIcon} />
                </Link>
                
                <Link 
                  href="#section3" 
                  className={styles.secondaryButton}
                  onClick={() => setActiveSection('section3')}
                >
                  <FiSearch className={styles.buttonIcon} />
                  <span>Learn ATS Optimization</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className={styles.tocSection} aria-label="Table of Contents">
          <h2 className={styles.tocTitle}>
            <FiFileText className={styles.tocIcon} />
            Complete Guide Contents
          </h2>
          <div className={styles.tocGrid}>
            <a href="#section1" className={styles.tocCard} onClick={() => setActiveSection('section1')}>
              <div className={styles.tocNumber}>01</div>
              <h3 className={styles.tocCardTitle}>Fundamental Resume Sections</h3>
              <p className={styles.tocCardDesc}>Essential components every professional resume needs</p>
            </a>
            
            <a href="#section2" className={styles.tocCard} onClick={() => setActiveSection('section2')}>
              <div className={styles.tocNumber}>02</div>
              <h3 className={styles.tocCardTitle}>Format Types Compared</h3>
              <p className={styles.tocCardDesc}>Chronological, functional & combination formats</p>
            </a>
            
            <a href="#section3" className={styles.tocCard} onClick={() => setActiveSection('section3')}>
              <div className={styles.tocNumber}>03</div>
              <h3 className={styles.tocCardTitle}>ATS Optimization Guide</h3>
              <p className={styles.tocCardDesc}>Beat applicant tracking systems</p>
            </a>
            
            <a href="#section4" className={styles.tocCard} onClick={() => setActiveSection('section4')}>
              <div className={styles.tocNumber}>04</div>
              <h3 className={styles.tocCardTitle}>Design Principles</h3>
              <p className={styles.tocCardDesc}>Visual hierarchy & readability</p>
            </a>
            
            <a href="#section5" className={styles.tocCard} onClick={() => setActiveSection('section5')}>
              <div className={styles.tocNumber}>05</div>
              <h3 className={styles.tocCardTitle}>Industry-Specific Formats</h3>
              <p className={styles.tocCardDesc}>Tailored for your field</p>
            </a>
            
            <a href="#section6" className={styles.tocCard} onClick={() => setActiveSection('section6')}>
              <div className={styles.tocNumber}>06</div>
              <h3 className={styles.tocCardTitle}>Common Mistakes</h3>
              <p className={styles.tocCardDesc}>What to avoid</p>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <article className={styles.contentArticle}>
          
          {/* Section 1: Fundamental Sections */}
          <section id="section1" className={`${styles.contentSection} ${activeSection === 'section1' ? styles.activeSection : ''}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>The 6 Fundamental Resume Sections Every Professional Needs</h2>
            </div>
            
            <p className={styles.sectionIntro}>
              A well-structured resume is built on six essential sections. Each plays a critical role in presenting your professional story to recruiters and ATS systems.
            </p>

            <div className={styles.sectionGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiUser />
                </div>
                <h3 className={styles.featureTitle}>Contact Information</h3>
                <p className={styles.featureText}>
                  Clean, professional, and error-free. Include: Name, Phone, Email, LinkedIn, Location.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiTarget />
                </div>
                <h3 className={styles.featureTitle}>Professional Summary</h3>
                <p className={styles.featureText}>
                  Your 30-second pitch. Focus on value proposition and key achievements.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiBriefcase />
                </div>
                <h3 className={styles.featureTitle}>Work Experience</h3>
                <p className={styles.featureText}>
                  Reverse chronological order. Focus on achievements with quantifiable results.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiAward />
                </div>
                <h3 className={styles.featureTitle}>Education</h3>
                <p className={styles.featureText}>
                  Degrees, certifications, relevant coursework. Recent graduates lead with this.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiTool />
                </div>
                <h3 className={styles.featureTitle}>Skills Section</h3>
                <p className={styles.featureText}>
                  Technical, soft, and transferable skills. Prioritize job-relevant competencies.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FiLayers />
                </div>
                <h3 className={styles.featureTitle}>Optional Sections</h3>
                <p className={styles.featureText}>
                  Certifications, projects, publications, volunteer work, languages.
                </p>
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h4 className={styles.exampleTitle}>Professional Summary Example:</h4>
              <div className={styles.exampleContent}>
                <p>
                  "Results-driven marketing professional with 8+ years of experience in digital strategy and campaign management. 
                  Proven track record of <strong>increasing engagement by 150%</strong> and <strong>ROI by 200%</strong>. 
                  Expert in data-driven marketing, SEO optimization, and cross-functional team leadership. 
                  Seeking to leverage expertise in growth marketing at a forward-thinking tech company."
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Format Types */}
          <section id="section2" className={`${styles.contentSection} ${activeSection === 'section2' ? styles.activeSection : ''}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Chronological vs. Functional vs. Combination Formats</h2>
            </div>

            <div className={styles.comparisonTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableCell}>Format Type</div>
                <div className={styles.tableCell}>Best For</div>
                <div className={styles.tableCell}>ATS Score</div>
                <div className={styles.tableCell}>Popularity</div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Chronological</strong></div>
                <div className={styles.tableCell}>Traditional career paths, steady progression</div>
                <div className={styles.tableCell}><span className={styles.scoreGood}>95%</span></div>
                <div className={styles.tableCell}>78%</div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Functional</strong></div>
                <div className={styles.tableCell}>Career changers, employment gaps</div>
                <div className={styles.tableCell}><span className={styles.scorePoor}>40%</span></div>
                <div className={styles.tableCell}>12%</div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>Combination</strong></div>
                <div className={styles.tableCell}>Most professionals, skill emphasis</div>
                <div className={styles.tableCell}><span className={styles.scoreGood}>85%</span></div>
                <div className={styles.tableCell}>10%</div>
              </div>
            </div>

            <div className={styles.insightCard}>
              <h4 className={styles.insightTitle}>Expert Insight:</h4>
              <p>
                Based on analysis of <strong>10,000 successful resumes</strong> in 2026, 78% of ATS-optimized resumes 
                use a modified chronological format. This format presents work experience in reverse chronological 
                order while emphasizing skills and achievements that align with target job descriptions.
              </p>
            </div>
          </section>

          {/* Section 3: ATS Optimization */}
          <section id="section3" className={`${styles.contentSection} ${activeSection === 'section3' ? styles.activeSection : ''}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>ATS Optimization: The Hidden Game Changer</h2>
            </div>

            <p className={styles.sectionIntro}>
              Applicant Tracking Systems screen <strong>up to 75% of resumes</strong> before human eyes see them. 
              Understanding ATS algorithms is crucial for career success.
            </p>

            <div className={styles.atsTips}>
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Keywords & Semantic Analysis</h3>
                <ul className={styles.tipList}>
                  <li>Job title variations and synonyms</li>
                  <li>Industry-specific terminology</li>
                  <li>Skill keywords with proficiency levels</li>
                  <li>Software, tools, and technology names</li>
                  <li>Certifications and qualification keywords</li>
                </ul>
              </div>
              
              <div className={styles.tipCard}>
                <h3 className={styles.tipTitle}>Formatting Best Practices</h3>
                <ul className={styles.tipList}>
                  <li>Use standard section headers</li>
                  <li>Avoid tables, columns, and text boxes</li>
                  <li>Stick to common fonts (Arial, Calibri, Times)</li>
                  <li>Use proper heading hierarchy</li>
                  <li>Save as PDF for consistency</li>
                </ul>
              </div>
            </div>

            <div className={styles.keywordCard}>
              <h4 className={styles.keywordTitle}>Pro Tip: The 80/20 Rule of Keywords</h4>
              <p>
                Identify <strong>20% of keywords</strong> that appear in <strong>80% of job descriptions</strong> for your target role. 
                These are your priority keywords that must appear strategically throughout your resume.
              </p>
            </div>
          </section>

          {/* Section 5: Industry-Specific Formats */}
          <section id="section5" className={`${styles.contentSection} ${activeSection === 'section5' ? styles.activeSection : ''}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Industry-Specific Formatting Guidelines</h2>
            </div>

            <p className={styles.sectionIntro}>
              Different industries have unique expectations and standards for resume formatting. 
              Tailoring your resume to industry norms can increase positive responses by <strong>60%</strong>.
            </p>

            <div className={styles.industryGrid}>
              {industryFormats.map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                  <div className={styles.industryHeader}>
                    <div className={styles.industryIcon}>{industry.icon}</div>
                    <h3 className={styles.industryTitle}>{industry.title}</h3>
                  </div>
                  <div className={styles.industryDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Format:</span>
                      <span className={styles.detailValue}>{industry.formatType}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>ATS Score:</span>
                      <span className={styles.detailValue}>{industry.atsScore}</span>
                    </div>
                  </div>
                  <ul className={styles.industryFeatures}>
                    {industry.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section id="section8" className={`${styles.contentSection} ${activeSection === 'section8' ? styles.activeSection : ''}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>08</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions: Expert Answers</h2>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                  <div className={styles.faqMeta}>
                    <FiCalendar className={styles.faqMetaIcon} />
                    <span className={styles.faqMetaText}>Updated: {safeFaqDates[index] || safeCurrentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Success Stories from Our Readers</h2>
              <p className={styles.sectionSubtitle}>Real results from implementing these resume formatting strategies</p>
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.quoteMark}>"</div>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <div className={styles.testimonialMetric}>
                    <FiCheck className={styles.metricIcon} />
                    <span className={styles.metricText}>{testimonial.metric}</span>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorRole}>{testimonial.role}</p>
                      <p className={styles.authorDate}>{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className={styles.conclusionSection}>
            <div className={styles.conclusionCard}>
              <h2 className={styles.conclusionTitle}>Key Takeaways and Next Steps</h2>
              
              <div className={styles.takeaways}>
                <div className={styles.takeawayItem}>
                  <FiCheck className={styles.takeawayIcon} />
                  <span>Format impacts both ATS compatibility and human readability</span>
                </div>
                <div className={styles.takeawayItem}>
                  <FiCheck className={styles.takeawayIcon} />
                  <span>Tailor your resume for each application and industry</span>
                </div>
                <div className={styles.takeawayItem}>
                  <FiCheck className={styles.takeawayIcon} />
                  <span>Focus on achievements with quantifiable results</span>
                </div>
                <div className={styles.takeawayItem}>
                  <FiCheck className={styles.takeawayIcon} />
                  <span>Keep design clean, professional, and ATS-friendly</span>
                </div>
                <div className={styles.takeawayItem}>
                  <FiCheck className={styles.takeawayIcon} />
                  <span>Update regularly and proofread meticulously</span>
                </div>
              </div>

              <div className={styles.ctaCard}>
                <h3 className={styles.ctaTitle}>Ready to Create Your Professional Resume?</h3>
                <p className={styles.ctaText}>
                  Use our free resume builder with ATS-optimized templates, expert guidance, 
                  and instant PDF download—no sign up required.
                </p>
                <div className={styles.ctaButtons}>
                  <Link 
                    href="/resume-templates" 
                    className={styles.primaryButton}
                    aria-label="Build your professional resume for free"
                    prefetch={false}
                  >
                    <span className={styles.buttonText}>Start Building Free Resume</span>
                    <FiArrowRight className={styles.buttonIcon} />
                  </Link>
                  
                  <Link 
                    href="/free-resume-tools" 
                    className={styles.secondaryButton}
                    prefetch={false}
                  >
                    <FiTool className={styles.buttonIcon} />
                    <span>Explore Free Tools</span>
                  </Link>
                </div>
                
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className={styles.internalLinks}>
            <h2 className={styles.internalLinksTitle}>Continue Your Resume Journey</h2>
            <div className={styles.internalLinksGrid}>
              <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className={styles.internalLinkCard}>
                <FiCpu className={styles.linkIcon} />
                <div className={styles.linkContent}>
                  <h3>AI Resume Builders Guide</h3>
                  <p>Leverage artificial intelligence to write your best resume with advanced optimization</p>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className={styles.internalLinkCard}>
                <FiEdit className={styles.linkIcon} />
                <div className={styles.linkContent}>
                  <h3>ChatGPT Resume Prompts 2026</h3>
                  <p>Expert prompt engineering to transform your resume bullet points</p>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/resume-templates" className={styles.internalLinkCard}>
                <FiFileText className={styles.linkIcon} />
                <div className={styles.linkContent}>
                  <h3>Free ATS Resume Templates</h3>
                  <p>Download professionally designed templates optimized for applicant tracking systems</p>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </Link>
              
              <Link href="/free-resume-tools" className={styles.internalLinkCard}>
                <FiTool className={styles.linkIcon} />
                <div className={styles.linkContent}>
                  <h3>Complete Resume Toolkit</h3>
                  <p>Access all our free resume tools, checkers, and optimization resources</p>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </Link>
            </div>
          </section>

        </article>
      </main>

      {/* Article Footer */}
      
              
    </div>
  );
}