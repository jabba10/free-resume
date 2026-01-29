import Head from 'next/head';
import Link from 'next/link';
import {
  FiCheck,
  FiFileText,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiStar,
  FiHome,
  FiChevronRight,
  FiArrowRight
} from 'react-icons/fi';
import styles from './resume-tools.module.css';

// Main Page Component
const ResumeToolsPage = ({ 
  seoData,
  buildTimestamp
}) => {
  const {
    currentDate,
    lastModifiedDate,
    breadcrumbData
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();

  // Resume tools data
  const resumeTools = [
    { 
      href: '/free-resume-score-checker', 
      label: 'Free Resume Score Checker',
      description: 'Get an instant resume score and detailed feedback on how to improve your resume.',
      icon: <FiStar className={styles.toolIcon} />
    },
    { 
      href: '/free-ats-resume-checker', 
      label: 'Free ATS Resume Checker',
      description: 'Check if your resume is ATS-friendly and optimized for automated screening systems.',
      icon: <FiCheck className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-summary-generator', 
      label: 'Free Resume Summary Generator',
      description: 'Create powerful professional summaries that grab recruiters attention.',
      icon: <FiEdit className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-keyword-matcher', 
      label: 'Free Resume Keyword Matcher',
      description: 'Match your resume keywords with job descriptions for better ATS compatibility.',
      icon: <FiTarget className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-objective-generator', 
      label: 'Free Resume Objective Generator',
      description: 'Generate compelling resume objectives tailored to your career goals.',
      icon: <FiTrendingUp className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-word-and-character-counter', 
      label: 'Free Resume Word and Character Counter',
      description: 'Count words and characters to ensure your resume meets length requirements.',
      icon: <FiBarChart className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-readability-checker', 
      label: 'Free Resume Readability Checker',
      description: 'Analyze your resumes readability and improve clarity for recruiters.',
      icon: <FiFileText className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-keyword-density-analyzer-tool', 
      label: 'Free Resume Keyword Density Analyzer Tool',
      description: 'Optimize keyword density for better ATS performance and ranking.',
      icon: <FiSearch className={styles.toolIcon} />
    },
    { 
      href: '/free-resume-formatting-checker', 
      label: 'Free Resume Formatting Checker',
      description: 'Ensure proper formatting and structure that passes ATS systems.',
      icon: <FiTool className={styles.toolIcon} />
    },
    { 
      href: '/free-action-verb-recommender', 
      label: 'Free Action Verb Recommender',
      description: 'Find powerful action verbs to make your bullet points more impactful.',
      icon: <FiEdit className={styles.toolIcon} />
    },
  ];

  return (
    <div 
      className={styles.toolsPage} 
      itemScope 
      itemType="https://schema.org/WebPage"
      lang="en-US"
    >
      <Head>
        <title itemProp="name">Free Resume Tools & Resources - Professional Resume Analyzers 2026</title>
        <meta name="title" content="Free Resume Tools & Resources - Professional Resume Analyzers 2026" />
        <meta name="description" content="Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more. All tools are completely free." />
        
        <meta name="keywords" content="free resume tools, ATS resume checker, resume score analyzer, resume keyword matcher, resume summary generator, resume formatting checker, resume optimization tools, professional resume tools" />
        
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-tools" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/free-resume-tools" hreflang="x-default" />

        <meta property="og:title" content="Free Resume Tools & Resources - Professional Resume Analyzers 2026" />
        <meta property="og:description" content="Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-tools-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Resume Tools Collection - Optimize Your Resume" />
        <meta property="og:url" content="https://www.professionalresumefree.com/free-resume-tools" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Tools & Resources - Professional Resume Analyzers 2026" />
        <meta name="twitter:description" content="Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-tools-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Resume Tools Collection" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />

        <meta name="theme-color" content="#4a5568" />
        <meta name="msapplication-TileColor" content="#4a5568" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/resume-tools/#webpage",
                  "url": "https://www.professionalresumefree.com/free-resume-tools",
                  "name": "Free Resume Tools & Resources - Professional Resume Analyzers 2026",
                  "description": "Access our complete suite of free resume tools. Check your resume score, optimize for ATS, generate summaries, match keywords, and more.",
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
                        "https://www.linkedin.com/company/professional-resume-free",
                        "https://www.facebook.com/ProfessionalResumeFree"
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
                        "name": "Resume Tools",
                        "item": "https://www.professionalresumefree.com/free-resume-tools"
                      }
                    ]
                  }
                },
                {
                  "@type": "ItemList",
                  "itemListElement": resumeTools.map((tool, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "WebApplication",
                      "name": tool.label,
                      "url": `https://www.professionalresumefree.com${tool.href}`,
                      "applicationCategory": "BusinessApplication",
                      "description": tool.description,
                      "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                      }
                    }
                  }))
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".pageTitle", ".pageSubtitle", ".toolCard h3"]
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
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className={styles.breadcrumbLink}>
              <FiHome className={styles.breadcrumbIcon} />
              <span itemProp="name" className={styles.breadcrumbText}>Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRight />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className={styles.breadcrumbText}>Resume Tools</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection} itemScope itemType="https://schema.org/WPHeader">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Trust Badge */}
            <div className={styles.trustBadge} itemScope itemType="https://schema.org/AggregateRating">
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                All Tools Are <span itemProp="ratingValue">100% Free</span> Trusted by <span itemProp="ratingCount">500K+</span> Users
              </span>
            </div>
            
            {/* Page Title */}
            <h1 className={styles.pageTitle} itemProp="headline">
              Free Resume Tools & Resources
            </h1>
            
            {/* Page Subtitle */}
            <p className={styles.pageSubtitle} itemProp="description">
              Optimize your resume with our complete suite of <strong className={styles.highlight}>free professional tools</strong>. 
              Check your resume score, analyze ATS compatibility, generate powerful content, and improve your chances of landing interviews.
            </p>

            {/* Stats */}
            
             
              
              
      
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className={styles.toolsSection} aria-labelledby="tools-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="tools-title">Complete Resume Toolkit</h2>
            <p className={styles.sectionSubtitle}>
              Click on any tool below to start optimizing your resume for better job search results.
            </p>
          </div>
          
          <div className={styles.toolsGrid}>
            {resumeTools.map((tool, index) => (
              <div key={index} className={styles.toolCard}>
                <div className={styles.toolCardContent}>
                  <div className={styles.toolIconContainer}>
                    {tool.icon}
                  </div>
                  <h3 className={styles.toolTitle}>{tool.label}</h3>
                  <p className={styles.toolDescription}>{tool.description}</p>
                  <Link 
                    href={tool.href} 
                    className={styles.toolButton}
                    aria-label={`Use ${tool.label} - ${tool.description}`}
                    prefetch={false}
                  >
                    <span className={styles.buttonText}>Use Tool</span>
                    <FiArrowRight className={styles.buttonIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className={styles.resourcesSection}>
            <h3 className={styles.resourcesTitle}>More Resume Resources</h3>
            <div className={styles.resourcesGrid}>
              <Link href="/resume-templates" className={styles.resourceLink}>
                <span>ATS-Friendly Resume Templates</span>
                <FiChevronRight className={styles.resourceIcon} />
              </Link>
              <Link href="/software-engineer-resume-example-and-writing-guide" className={styles.resourceLink}>
                <span>Software Engineer Resume Guide</span>
                <FiChevronRight className={styles.resourceIcon} />
              </Link>
              <Link href="/careers-blog" className={styles.resourceLink}>
                <span>Career Change & Development Guide 2026</span>
                <FiChevronRight className={styles.resourceIcon} />
              </Link>
              <Link href="/jobs-search-tips" className={styles.resourceLink}>
                <span>Jobs Search Tips</span>
                <FiChevronRight className={styles.resourceIcon} />
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Common questions about our free resume tools and how they can help your job search.
            </p>
          </div>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Are these resume tools really free to use?</h3>
              <p className={styles.faqAnswer}>
                Yes, all our resume tools are completely free with no hidden costs or watermarks. 
                You can use every tool without creating an account or providing payment information.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do I need to sign up or create an account?</h3>
              <p className={styles.faqAnswer}>
                No sign-up required! All tools are accessible immediately without any registration. 
                Simply click on any tool and start using it right away.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How accurate are the resume analysis tools?</h3>
              <p className={styles.faqAnswer}>
                Our tools use industry-standard algorithms and best practices for resume optimization. 
                They're regularly updated to reflect current hiring trends and ATS requirements.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I use these tools on mobile devices?</h3>
              <p className={styles.faqAnswer}>
                Absolutely! All our tools are fully responsive and work perfectly on smartphones, 
                tablets, and desktop computers.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is my resume data secure when using these tools?</h3>
              <p className={styles.faqAnswer}>
                Yes, we prioritize your privacy. Resume content is processed securely and 
                not stored permanently unless you choose to save it for later use.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How often are the tools updated?</h3>
              <p className={styles.faqAnswer}>
                Our tools are regularly updated to reflect the latest ATS requirements, 
                hiring trends, and resume best practices for 2026 and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Optimize Your Resume?</h2>
            <p className={styles.ctaSubtitle}>
              Start using our free tools today and create a resume that stands out to employers and ATS systems.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                href="#tools-title"
                className={styles.ctaButton}
                aria-label="Browse all free resume tools"
              >
                <span className={styles.ctaButtonText}>Browse All Tools</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </Link>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>
                No credit card required • Free forever • Instant results • Privacy focused
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ISR enabled for better SEO freshness
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate
      },
      buildTimestamp
    },
    // Enable ISR for better SEO freshness
    revalidate: 21600 // 6 hours
  };
}

export default ResumeToolsPage;