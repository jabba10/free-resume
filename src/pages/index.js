import Head from 'next/head';
import Link from 'next/link';
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
  FiLayers
} from 'react-icons/fi';
import styles from './LandingPage.module.css';

const LandingPage = ({ 
  seoData,
  buildTimestamp
}) => {
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
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const testimonials = [
    {
      quote: "Built my ATS-optimized resume in 10 minutes and landed interviews the same week. The free resume builder is incredible!",
      metric: "Found Job in 2 Weeks",
      name: "Sarah M.",
      role: "Marketing Manager",
      company: "Tech Company"
    },
    {
      quote: "Finally a free resume builder that doesn't compromise on quality. The ATS templates helped me pass automated screenings.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Software Developer",
      company: "Startup"
    },
    {
      quote: "As a recent graduate, the entry-level resume templates were perfect. Landed my first job using this free resume maker.",
      metric: "First Job After College",
      name: "Alex P.",
      role: "Junior Analyst",
      company: "Finance Firm"
    },
    {
      quote: "The mobile resume builder saved me - could update my CV on the go. Professional results without the cost.",
      metric: "Career Change Success",
      name: "Maria L.",
      role: "Project Coordinator",
      company: "Construction"
    },
    {
      quote: "ATS-friendly templates actually work! Got callbacks from companies that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Sales Executive",
      company: "Tech Sales"
    },
    {
      quote: "Free PDF download with no watermark? Unbeatable value. Best free resume builder I've found online.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "HR Specialist",
      company: "Healthcare"
    }
  ];

  const faqs = [
    {
      question: "Is this resume builder really free with no hidden costs?",
      answer: "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed ever."
    },
    {
      question: "What does ATS-friendly mean for resume building and job applications?",
      answer: "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by 99% of employers to screen job applications. This includes proper formatting, keyword optimization, clean structure, and standard sections that automated systems can read easily, significantly increasing your chances of getting noticed by recruiters."
    },
    {
      question: "Can I download my resume as PDF without creating an account or signing up?",
      answer: "Absolutely! You can download your resume in multiple formats including PDF, Word document, and plain text without creating an account or signing up. Everything is completely free and accessible immediately. Start building your professional resume right now."
    },
    {
      question: "How many resume templates are available for free and which industries do they cover?",
      answer: "We offer professionally designed ATS-friendly resume templates across all major industries including software development, healthcare, marketing, finance, engineering, education, recent graduates, and more. All templates are completely free to use and optimized for job search success in 2026."
    },
    {
      question: "How does your ATS resume builder work?",
      answer: "Our builder uses ATS-optimized templates with proper formatting that automated systems can read. We guide you to include the right keywords and structure that hiring systems look for, ensuring your resume passes through automated screenings."
    },
    {
      question: "Can I edit my resume after downloading it?",
      answer: "Yes, you can always come back and edit your resume. Your work is saved automatically, and you can make changes anytime. Download updated versions as many times as needed—completely free."
    }
  ];

  return (
    <div className={styles.landingPage} lang="en-US">
      <Head>
        <title>Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker</title>
        <meta name="title" content="Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker" />
        <meta name="description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster with our resume builder. ATS-optimized templates, instant PDF download. Trusted by 4M+ job seekers worldwide." />
        <meta name="keywords" content="free resume builder, ATS friendly resume, professional resume maker, resume templates 2026, online resume creator, download resume PDF, no sign up, ATS optimized resume, best free resume builder, resume builder for students" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="x-default" />
        <meta property="og:title" content="Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker" />
        <meta property="og:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. ATS-optimized templates, instant PDF download. Trusted by 4M+ job seekers." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Builder - Create Professional Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Builder Online - ATS Friendly Templates 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. ATS-optimized templates, instant PDF download." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/#webpage",
                  "url": "https://www.professionalresumefree.com",
                  "name": "Free Resume Builder Online - ATS Friendly Templates 2026",
                  "description": "Create professional ATS-optimized resumes for free. Land interviews 3x faster with our resume builder.",
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
                        "https://www.facebook.com/ProfessionalResumeFree",
                        "https://www.youtube.com/@ProfessionalResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-resume-builder-preview.jpg",
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
                        "name": "Free Resume Builder",
                        "item": "https://www.professionalresumefree.com/resume-templates"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Professional Resume Free Builder - ATS Optimized Resume Maker",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Any",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": 4.9,
                      "ratingCount": 50365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster.",
                    "featureList": [
                      "ATS-Optimized Templates",
                      "Professional Content Suggestions",
                      "One-Click PDF Download",
                      "Real-Time ATS Analysis",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-resume-builder.jpg",
                    "applicationSuite": "Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized resume for free",
                  "totalTime": "PT15M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose a Professional Template",
                      "text": "Select from our ATS-optimized resume templates designed for your industry.",
                      "url": "https://www.professionalresumefree.com#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Fill in Your Information",
                      "text": "Enter your work experience, education, skills, and contact details using our guided forms.",
                      "url": "https://www.professionalresumefree.com#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-fill.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our smart suggestions to improve keywords and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Resume",
                      "text": "Export your professional resume as PDF, Word, or plain text - completely free, no watermarks.",
                      "url": "https://www.professionalresumefree.com#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-1234",
                      "contactType": "Customer Support",
                      "availableLanguage": "en"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Global"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Professional Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly resume builder for job seekers worldwide",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SpeakableSpecification",
                  "cssSelector": [".heroTitle", ".heroSubtitle", ".faqItem h3"]
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
                      "datePublished": safeReviewDates[index] || safeCurrentDate,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Professional Resume Free Builder - ATS Optimized Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster.",
                        "url": "https://www.professionalresumefree.com"
                      }
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

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              <FiHome className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbText}>No Sign Up Required Free Forever</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRight />
          </li>
          <li>
            <Link href="/resume-templates" className={styles.breadcrumbLink}>
              <span className={styles.breadcrumbText}>Free Resume Builder</span>
            </Link>
          </li>
        </ol>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Rated 4.9/5 by 50365+ Users | Best Free Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Professional Resume Builder <span className={styles.gradientText}>Loved by 4M+ Job Seekers</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized resume for free in minutes.</strong> Our resume builder ensures your resume passes automated employer tracking systems and gets you noticed.
            </p>

            <div className={styles.ctaButtons}>
              <Link
                href="/resume-templates"
                className={styles.primaryButton}
                aria-label="Start building your free resume now—no sign-up required"
                prefetch={false}
              >
                <span className={styles.buttonText}>Start Building Your Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
              
              <Link
                href="/free-resume-tools"
                className={styles.secondaryButton}
                aria-label="Explore free resume tools including resume score checker, ATS checker, and more"
                prefetch={false}
              >
                <FiTool className={styles.buttonIcon} />
                <span className={styles.buttonText}>Free Resume Tools</span>
              </Link>
              
              <Link
                href="/complete-resume-resource-library"
                className={styles.secondaryButton}
                aria-label="Browse resume clusters and categories"
                prefetch={false}
              >
                <FiLayers className={styles.buttonIcon} />
                <span className={styles.buttonText}>Resume Clusters</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4M+</span>
                <span className={styles.statLabel}>Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>94%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>36%</span>
                <span className={styles.statLabel}>Faster Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>

            <div className={styles.pressLogos}>
              <p className={styles.pressLogosTitle}>Professional Resumes. Zero Cost. ATS Optimized.</p>
              <div className={styles.logoGrid}>
                <span className={styles.logoItem}>ATS Templates</span>
                <span className={styles.logoItem}>Easy Builder</span>
                <span className={styles.logoItem}>Free PDF</span>
                <span className={styles.logoItem}>No Sign Up</span>
              </div>
            </div>

            <div className={styles.industryBadges}>
              {industries.slice(0, 8).map((industry, index) => (
                <Link
                  key={index}
                  href="/resume-templates"
                  className={styles.industryBadge}
                  aria-label={`${industry.title} Resume Templates`}
                  rel="nofollow"
                >
                  <span className={styles.industryBadgeText}>{industry.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="features-title">Why Choose Our ATS-Friendly Resume Builder</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create a standout resume that gets results—completely free.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Link
                key={index}
                href="/resume-templates"
                className={styles.featureCard}
              >
                <div className={styles.iconContainer} aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </Link>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/resume-templates" className={styles.sectionButton}>
              <span>Explore All Features</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.industriesSection} aria-labelledby="templates-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="templates-title">Professional Resume Templates for Every Career Path</h2>
            <p className={styles.sectionSubtitle}>
              Choose from our ATS-optimized templates tailored to your industry and experience level.
            </p>
          </div>
          <div className={styles.industriesGrid}>
            {industryTemplates.map((industry, index) => (
              <Link
                key={index}
                href="/resume-templates"
                className={styles.industryItem}
                aria-label={`Browse ${industry.title} Templates`}
                rel="nofollow"
                prefetch={false}
              >
                <div className={styles.templateCard}>
                  <div className={styles.templateImageContainer}>
                    <div className={styles.templateIconContainer}>
                      {getTemplateIcon(industry.slug)}
                    </div>
                    <div className={styles.templatePreview}>
                      <div className={styles.templatePreviewLines}>
                        <div className={styles.previewLine}></div>
                        <div className={styles.previewLine}></div>
                        <div className={styles.previewLine}></div>
                        <div className={styles.previewLine}></div>
                      </div>
                    </div>
                    <div className={styles.templateOverlay}>
                      <span className={styles.overlayText}>View Template</span>
                    </div>
                  </div>
                  <div className={styles.templateContent}>
                    <h3 className={styles.templateTitle}>{industry.title}</h3>
                    <p className={styles.templateDescription}>{industry.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/resume-templates" className={styles.sectionButton}>
              <span>Browse All Templates</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.comparisonSection} aria-labelledby="comparison-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="comparison-title">Why Choose Our Free Resume Builder Over Others?</h2>
            <p className={styles.sectionSubtitle}>
              See how we compare—get the best free resume maker experience.
            </p>
          </div>
          <div className={styles.comparisonContainer}>
            <div className={styles.comparisonTable}>
              <table>
                <thead>
                  <tr>
                    <th scope="col" className={styles.tableHeader}>Feature</th>
                    <th scope="col" className={styles.tableHeader}>ProfessionalResumeFree.com</th>
                    <th scope="col" className={styles.tableHeader}>Other Free Builders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>ATS-Friendly Templates</th>
                    <td className={styles.tablePro}>✓ Free ATS Professional Templates</td>
                    <td className={styles.tableCon}>Limited Basic Options</td>
                  </tr>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>Smart Content Suggestions</th>
                    <td className={styles.tablePro}>✓ Included for Free</td>
                    <td className={styles.tableCon}>✗ Premium Feature</td>
                  </tr>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>PDF Download</th>
                    <td className={styles.tablePro}>✓ Free, No Watermark</td>
                    <td className={styles.tableCon}>Watermarked or Paid</td>
                  </tr>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>No Account Required</th>
                    <td className={styles.tablePro}>✓ Start Immediately</td>
                    <td className={styles.tableCon}>✗ Often Required</td>
                  </tr>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>Mobile-Friendly</th>
                    <td className={styles.tablePro}>✓ Full Mobile Support</td>
                    <td className={styles.tableCon}>Limited Experience</td>
                  </tr>
                  <tr>
                    <th scope="row" className={styles.tableFeature}>Free Forever</th>
                    <td className={styles.tablePro}>✓ Completely Free</td>
                    <td className={styles.tableCon}>Limited Free Tier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.sectionCta}>
            <Link href="/resume-templates" className={styles.sectionButton}>
              <span>Start Building Now</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="testimonials-title">Build a Resume That Gets Results</h2>
            <p className={styles.sectionSubtitle}>
              Join thousands who found jobs faster with our free resume builder tools.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteMark} aria-hidden="true">"</div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialMetric}>
                  <FiCheck className={styles.metricIcon} />
                  <span className={styles.metricText}>{testimonial.metric}</span>
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userDetails}>
                    <h4 className={styles.userName}>{testimonial.name}</h4>
                    <p className={styles.userRole}>{testimonial.role}</p>
                    <p className={styles.userCompany}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/resume-templates" className={styles.sectionButton}>
              <span>Join Successful Job Seekers</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about creating professional resumes with our tool.
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
          
          <div className={styles.additionalFaqs}>
            <h3 className={styles.additionalTitle}>More Questions About Resume Building</h3>
            <ul className={styles.additionalList}>
              <li><Link href="/2026-resume-writing-guide-with-modern-tips" className={styles.additionalLink}>How to Write a Modern Resume in 2026?</Link></li>
              <li><Link href="/what-should-a-resume-look-like" className={styles.additionalLink}>What Should a Resume Look Like?</Link></li>
              <li><Link href="/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" className={styles.additionalLink}>How to Write a Professional Summary That Hooks Recruiters in 6 Seconds?</Link></li>
              <li><Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" className={styles.additionalLink}>How to Beat the ATS Optimization Tips for Modern Hiring Software?</Link></li>
              <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className={styles.additionalLink}>How to Use Artificial Intelligence to Write Your Best Resume?</Link></li>
              <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2025" className={styles.additionalLink}>How to Use ChatGPT to Improve Your Resume Bullets: Prompt Engineering Guide 2026?</Link></li>
              <li><Link href="/best-resume-templates-to-past-applicant-tracking-system" className={styles.additionalLink}>Best Resume Templates to Past Applicant Tracking System?</Link></li>
            </ul>
          </div>
          <div className={styles.sectionCta}>
            <Link href="/resume-templates" className={styles.sectionButton}>
              <span>Start Building Now</span>
              <FiArrowRight className={styles.sectionButtonIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Transform Your Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 4 million+ job seekers who landed their dream jobs with our free ATS-friendly resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                href="/resume-templates"
                className={styles.ctaButton}
                aria-label="Create your free resume now—no sign-up required"
                prefetch={false}
              >
                <span className={styles.ctaButtonText}>Create Your Free Resume Now - No Sign Up</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </Link>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized</span>
            </div>
            <div className={styles.ctaFeatures}>
              <Link href="/resume-templates" className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>500+ ATS-Friendly Resume Templates</span>
              </Link>
              <Link href="/resume-templates" className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>Instant PDF Download</span>
              </Link>
              <Link href="/resume-templates" className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>Mobile-Friendly Resume Builder</span>
              </Link>
              <Link href="/resume-templates" className={styles.featureItem}>
                <FiCheck className={styles.featureCheck} />
                <span>No Watermarks or Hidden Costs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const getTemplateIcon = (slug) => {
  switch(slug) {
    case 'software-engineer-resume':
      return <FiTool className={styles.templateIcon} />;
    case 'healthcare-resume':
      return <FiHeart className={styles.templateIcon} />;
    case 'sales-marketing-resume':
      return <FiTrendingUp className={styles.templateIcon} />;
    case 'graduate-resume':
      return <FiAward className={styles.templateIcon} />;
    case 'project-management-resume':
      return <FiBriefcase className={styles.templateIcon} />;
    case 'customer-service-resume':
      return <FiUser className={styles.templateIcon} />;
    default:
      return <FiFileText className={styles.templateIcon} />;
  }
};

const industries = [
  { title: "Software Development", slug: "software-development" },
  { title: "Healthcare & Nursing", slug: "healthcare-nursing" },
  { title: "Project Management", slug: "project-management" },
  { title: "Digital Marketing", slug: "digital-marketing" },
  { title: "Sales & Business", slug: "sales-business" },
  { title: "Customer Service", slug: "customer-service" },
  { title: "Engineering", slug: "engineering" },
  { title: "Education & Teaching", slug: "education-teaching" },
  { title: "Finance & Accounting", slug: "finance-accounting" },
  { title: "Design & Creative", slug: "design-creative" },
  { title: "Recent Graduates", slug: "recent-graduates" },
  { title: "Career Changers", slug: "career-changers" },
  { title: "IT & Cybersecurity", slug: "it-cybersecurity" },
  { title: "Human Resources", slug: "human-resources" },
  { title: "Operations Management", slug: "operations-management" }
];

const features = [
  {
    icon: <FiUser className={styles.featureIcon} />,
    title: "Build a Better Resume For Free",
    description: "Start building now—no sign-up needed. Use our ATS-optimized templates, enter your info, and export a professional PDF in minutes."
  },
  {
    icon: <FiFileText className={styles.featureIcon} />,
    title: "ATS-Friendly Resume Templates",
    description: "Templates designed to pass Applicant Tracking Systems used by 99% of Fortune 500 companies."
  },
  {
    icon: <FiCheck className={styles.featureIcon} />,
    title: "Stop Guessing, Start Passing",
    description: "Our templates are built from the ground up to be ATS-friendly, so your resume reaches human recruiters."
  },
  {
    icon: <FiDownload className={styles.featureIcon} />,
    title: "One-Click Export",
    description: "Download as PDF, Word, or plain text—no watermarks, completely free."
  },
  {
    icon: <FiAward className={styles.featureIcon} />,
    title: "Proven Results",
    description: "Users get 36% more interviews and land jobs 3x faster with our optimized resumes."
  },
  {
    icon: <FiSettings className={styles.featureIcon} />,
    title: "Mobile-Friendly Builder",
    description: "Create and edit your resume from any device. Your progress saves automatically."
  }
];

const industryTemplates = [
  { title: "Software Engineering Resume", count: "ATS Professional Template", slug: "software-engineer-resume" },
  { title: "Nursing & Healthcare CV", count: "Professional Healthcare Design", slug: "healthcare-resume" },
  { title: "Sales & Marketing Resume", count: "Conversion Focused Template", slug: "sales-marketing-resume" },
  { title: "Recent Graduates Resume", count: "Entry-Level Professional Design", slug: "graduate-resume" },
  { title: "Project Management Resume", count: "Leadership & Results Template", slug: "project-management-resume" },
  { title: "Customer Service Resume", count: "Client-Focused Professional Design", slug: "customer-service-resume" },
];

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default LandingPage;