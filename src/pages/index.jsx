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
  FiArrowRight
} from 'react-icons/fi';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  // Generate current date for freshness signals
  const currentDate = new Date().toISOString().split('T')[0];
  const lastModifiedDate = new Date().toISOString();

  return (
    <div className={styles.landingPage} itemScope itemType="https://schema.org/WebPage">
      {/* Enhanced SEO Meta Tags with Competitive Keywords */}
      <Head>
        {/* Primary Meta Tags - Optimized with Competitive Keywords */}
        <title itemProp="name">Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker</title>
        <meta name="title" content="Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker" />
        <meta name="description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster with our resume builder. ats optimized templates, instant PDF download. Trusted by 4M+ job seekers worldwide." />
        
        {/* Comprehensive Keyword Strategy */}
        <meta name="keywords" content="
resume,
cv,
cover letter,
job application,
ATS,
free resume builder,
ATS resume builder,
professional resume maker,
online resume creator,
resume templates free,
ATS friendly resume,
job resume builder,
cv maker free,
resume builder no sign up,
download resume pdf,
best free resume builder,
modern resume templates,
resume builder 2026,
create resume online free,
resume maker for freshers,
professional cv builder,
ATS optimized resume,
resume builder with templates,
free cv maker online,
easy resume builder,
resume builder for jobs,
interview winning resume,
resume creator free download,
build resume online free,
resume writing service free,
free resume,
free cv,
resume maker,
cv builder,
online resume,
downloadable resume,
PDF resume,
no signup resume,
quick resume,
simple resume builder,
resume generator,
cv generator,
job winning resume,
entry level resume,
student resume,
college resume,
graduate resume,
career change resume,
career resume,
professional resume,
modern resume,
clean resume,
creative resume,
minimalist resume,
elegant resume,
one page resume,
two page resume,
ATS friendly,
ATS compliant,
ATS compatible,
beat ATS,
pass ATS,
ATS optimized,
resume scanner,
job applicant tracking,
hireable resume,
employer friendly resume,
recruiter approved resume,
resume templates,
free templates,
professional templates,
modern templates,
creative templates,
minimal templates,
elegant templates,
student templates,
entry level templates,
executive templates,
manager resume,
developer resume,
teacher resume,
nurse resume,
engineer resume,
marketing resume,
graphic designer resume,
IT resume,
sales resume,
customer service resume,
administrative resume,
healthcare resume,
retail resume,
finance resume,
build resume free,
create cv online,
make resume fast,
instant resume,
same day resume,
no email resume,
anonymous resume builder,
private resume tool,
secure resume creator,
mobile resume builder,
responsive resume,
desktop resume maker,
resume tips,
how to write a resume,
resume examples,
cv examples,
cover letter builder,
free cover letter,
resume checklist,
resume format 2026,
best resume format,
resume dos and don'ts,
resume mistakes to avoid,
keywords for resume,
skill section resume,
work experience resume,
education resume,
summary vs objective,
professional summary,
career objective,
download resume,
export resume PDF,
print resume,
share resume link,
resume URL,
digital resume,
online portfolio resume,
resume builder with preview,
real-time resume editor,
drag and drop resume,
customizable resume,
personalized resume,
tailored resume,
job specific resume,
industry specific resume,
best resume builder,
top free resume tools,
free resume websites,
resume builder comparison,
easy to use resume,
beginner friendly resume,
no design skills resume,
resume for non designers,
resume without Word,
Google Docs resume alternative,
Microsoft Word resume free,
free alternative to Canva resume,
Zety alternative,
Novoresume alternative,
Resume.io alternative,
enhancv alternative,
free resume builder like Zety,
job search,
apply for jobs,
job hunting,
career advice,
job readiness,
employment support,
free career tools,
job application kit,
resume and cover letter,
complete job application,
application documents,
hiring process,
job interview prep,
resume for interview,
first job resume,
part time job resume,
internship resume,
freelancer resume,
remote job resume,
work from home resume,
2026 resume trends,
future proof resume,
AI resume builder,
AI powered resume,
smart resume tool,
automated resume,
resume analyzer,
keyword optimizer,
job matching resume,
skills matcher,
resume score,
resume feedback,
instant resume review,
grammar check resume,
spelling check resume,
free online cv maker no registration,
build resume without account,
create professional resume instantly,
download ATS friendly resume PDF free,
best free resume builder for students 2026,
easy resume maker for beginners,
modern cv templates free download,
free resume builder with no watermark,
ATS compliant resume template free,
job winning resume builder no sign up,
free downloadable resume in one click,
create resume online for free no email,
best free tools to make a resume,
online resume builder with free templates 2026,
free professional resume maker for job seekers,
simple and clean resume builder free,
free resume creator with real time preview,
best free cv maker for freshers and professionals,
ATS optimized resume builder with no signup,
modern job resume templates free download PDF,
create a standout resume online for free,
free resume builder that passes applicant tracking,
easy to customize resume templates free online,
free resume maker with industry specific examples,
download your resume as PDF with one click,
build a recruiter friendly resume in minutes free,
free resume builder trusted by job seekers worldwide,
top rated free resume tool for 2026 job market,
no cost resume builder with professional designs,
free ATS friendly resume maker no registration needed,
online cv creator with modern templates and easy download,
free resume generator for students graduates and professionals,
instant professional resume builder with no hidden fees,
best free resume builder that works on mobile and desktop
" />
        
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Freshness Signals */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/" />
        
        {/* Alternate Languages */}
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-us" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="x-default" />
        
        {/* Open Graph / Social Sharing - Enhanced */}
        <meta property="og:title" content="Free Resume Builder Online - ATS Friendly Templates 2026 | Professional Resume Maker" />
        <meta property="og:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. ats optimized templates, instant PDF download. Trusted by 4M+ job seekers." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ATS Resume Builder - Create Professional Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Builder Online - ATS Friendly Templates 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. ats optimized templates, instant PDF download." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        
        {/* Additional SEO Meta */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data (JSON-LD) - Enhanced for Resume Builder - FIXED */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "WebApplication"],
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
                "ratingValue": "4.9",
                "ratingCount": 4365,
                "bestRating": "5",
                "worstRating": "1",
                "itemReviewed": {
                  "@type": "SoftwareApplication",
                  "name": "Professional Resume Free Builder - ATS Optimized Resume Maker",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Any",
                  "url": "https://www.professionalresumefree.com",
                  "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster."
                }
              },
              "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster. ats optimized resume templates, instant PDF download, no sign up required.",
              "url": "https://www.professionalresumefree.com",
              "featureList": [
                "ATS-Optimized Templates",
                "Professional Content Suggestions",
                "One-Click PDF Download",
                "Real-Time ATS Analysis",
                "Mobile-Friendly Editor",
                "Professional Resume Templates",
                "No Sign Up Required",
                "Free Forever",
                "500+ Resume Examples",
                "Industry Specific Templates"
              ],
              "publisher": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "url": "https://www.professionalresumefree.com",
                "logo": "https://www.professionalresumefree.com/logo.png",
                "sameAs": [
                  "https://twitter.com/ProResumeFree",
                  "https://linkedin.com/company/professional-resume-free"
                ]
              },
              "keywords": "free resume builder, ATS resume, professional resume maker, online resume creator, resume templates",
              "datePublished": "2024-01-01",
              "dateModified": currentDate,
              "inLanguage": "en-US",
              "softwareVersion": "2026.1.0",
              "screenshot": "https://www.professionalresumefree.com/images/screenshot-resume-builder.jpg"
            })
          }}
        />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Professional Resume Free",
              "description": "Free ATS-friendly resume builder for job seekers worldwide",
              "url": "https://www.professionalresumefree.com",
              "telephone": "+1-800-555-1234",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Resume Street",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94107",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.7749,
                "longitude": -122.4194
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "Free",
              "image": "https://www.professionalresumefree.com/logo.png"
            })
          }}
        />

        {/* Additional FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is this resume builder really free with no hidden costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed.",
                    "datePublished": currentDate,
                    "author": {
                      "@type": "Person",
                      "name": "Resume Builder Support"
                    }
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does ATS-friendly mean for resume building?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by 99% of employers to screen job applications. This includes proper formatting, keyword optimization, and clean structure that automated systems can read easily.",
                    "datePublished": currentDate,
                    "author": {
                      "@type": "Person",
                      "name": "Resume Builder Support"
                    }
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I download my resume as PDF without creating an account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can download your resume in multiple formats including PDF, Word document, and plain text without creating an account or signing up. Everything is completely free and accessible immediately.",
                    "datePublished": currentDate,
                    "author": {
                      "@type": "Person",
                      "name": "Resume Builder Support"
                    }
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many resume templates are available for free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer professionally designed ATS-friendly resume templates across all industries including software development, healthcare, marketing, finance, and more. All templates are completely free to use.",
                    "datePublished": currentDate,
                    "author": {
                      "@type": "Person",
                      "name": "Resume Builder Support"
                    }
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this resume builder suitable for freshers and experienced professionals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our resume builder is perfect for all career levels - from freshers and recent graduates to experienced professionals and career changers. We have templates and guidance for every experience level.",
                    "datePublished": currentDate,
                    "author": {
                      "@type": "Person",
                      "name": "Resume Builder Support"
                    }
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
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
                  "name": "Free Resume Builder",
                  "item": "https://www.professionalresumefree.com/free-resume-builder"
                }
              ]
            })
          }}
        />

        {/* How-To Structured Data for Resume Building */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
                  "image": "https://www.professionalresumefree.com/images/step1-template.jpg",
                  "url": "https://www.professionalresumefree.com#templates"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Fill in Your Information",
                  "text": "Enter your work experience, education, skills, and contact details using our guided forms.",
                  "image": "https://www.professionalresumefree.com/images/step2-fill.jpg",
                  "url": "https://www.professionalresumefree.com#editor"
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Customize and Optimize",
                  "text": "Use our smart suggestions to improve keywords and formatting for ATS compatibility.",
                  "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg",
                  "url": "https://www.professionalresumefree.com#optimize"
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Download Your Resume",
                  "text": "Export your professional resume as PDF, Word, or plain text - completely free, no watermarks.",
                  "image": "https://www.professionalresumefree.com/images/step4-download.jpg",
                  "url": "https://www.professionalresumefree.com#download"
                }
              ],
              "supply": [
                {
                  "@type": "HowToSupply",
                  "name": "Computer or Mobile Device"
                },
                {
                  "@type": "HowToSupply",
                  "name": "Internet Connection"
                },
                {
                  "@type": "HowToSupply",
                  "name": "Job History Information"
                }
              ],
              "tool": [
                {
                  "@type": "HowToTool",
                  "name": "Professional Resume Free Builder"
                }
              ]
            })
          }}
        />

        {/* Additional Review Schema - Separated from AggregateRating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Sarah M."
                    },
                    "reviewBody": "Built my ATS-optimized resume in 10 minutes and landed interviews the same week. The free resume builder is incredible!",
                    "datePublished": currentDate,
                    "publisher": {
                      "@type": "Organization",
                      "name": "Professional Resume Free"
                    },
                    "itemReviewed": {
                      "@type": "SoftwareApplication",
                      "name": "Professional Resume Free Builder - ATS Optimized Resume Maker"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "James K."
                    },
                    "reviewBody": "Finally a free resume builder that doesn't compromise on quality. The ATS templates helped me pass automated screenings.",
                    "datePublished": currentDate,
                    "publisher": {
                      "@type": "Organization",
                      "name": "Professional Resume Free"
                    },
                    "itemReviewed": {
                      "@type": "SoftwareApplication",
                      "name": "Professional Resume Free Builder - ATS Optimized Resume Maker"
                    }
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Enhanced Hero Section with SEO-rich content */}
      <section className={styles.heroSection} itemScope itemType="https://schema.org/WPHeader">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Microformat for rating - Fixed */}
            <div className={styles.trustBadge} itemScope itemType="https://schema.org/AggregateRating">
              <FiStar className={styles.starIcon} />
              <span>Rated <span itemProp="ratingValue">4.9</span>/<span itemProp="bestRating">5</span> by <span itemProp="ratingCount">4,365</span>+ Users | Best Free Resume Builder 2026</span>
              <div style={{display: 'none'}} itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                <span itemProp="name">Professional Resume Free Builder - ATS Optimized Resume Maker</span>
                <span itemProp="applicationCategory">BusinessApplication</span>
                <span itemProp="operatingSystem">Any</span>
                <link itemProp="url" href="https://www.professionalresumefree.com" />
                <span itemProp="description">Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster.</span>
              </div>
            </div>
            
            <h1 className={styles.heroTitle} itemProp="headline">
              Free Professional Resume Builder <span className={styles.gradientText}>Loved by 4M+ Job Seekers</span>
            </h1>
            
            <p className={styles.heroSubtitle} itemProp="description">
              Create a <strong>professional, ATS-optimized resume for free in minutes.</strong> Our resume builder tool ensures your resume is formatted to pass automated employer tracking systems and get you noticed. Build your perfect resume with our easy-to-use online resume maker.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link 
                href="/resume-templates" 
                className={styles.primaryButton}
                itemProp="url"
                aria-label="Start Building Your Free Resume Now - No Sign Up Required"
              >
                <span>Start Building Your Free Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
            </div>
            
            {/* Enhanced Stats with SEO Keywords */}
            <div className={styles.heroStats} itemScope itemType="https://schema.org/Organization">
              <div className={styles.statItem}>
                <span className={styles.statNumber} itemProp="numberOfEmployees">4M+</span>
                <span className={styles.statLabel}>Resumes Created Free</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>94%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>36%</span>
                <span className={styles.statLabel}>Faster Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>User Rating</span>
              </div>
            </div>

            {/* Press Features with Keywords */}
            <div className={styles.pressLogos}>
              <p>Professional Resumes. Zero Cost. ATS Optimized.</p>
              <div className={styles.logoGrid}>
                <span className={styles.logoItem}>ATS-Optimized Templates</span>
                <span className={styles.logoItem}>Easy Resume Builder</span>
                <span className={styles.logoItem}>Free PDF Download</span>
                <span className={styles.logoItem}>No Sign Up Required</span>
              </div>
            </div>

            {/* Industry Badges with Career Keywords */}
            <div className={styles.industryBadges}>
              {industries.map((industry, index) => (
                <span key={index} className={styles.industryBadge}>{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced SEO Content */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="features-title">Why Choose Our ATS-Friendly Resume Builder - Best Free Resume Maker Online</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create a professional resume that stands out and gets results. Our free resume builder is designed to help you land your dream job faster.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Templates Section with SEO-rich content */}
      <section className={styles.industriesSection} aria-labelledby="templates-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="templates-title">Professional Resume Templates for Every Career Path</h2>
            <p className={styles.sectionSubtitle}>
              Choose from our ATS-optimized resume examples and templates tailored to your industry. Perfect resume builder for all experience levels.
            </p>
          </div>
          <div className={styles.industriesGrid}>
            {industryTemplates.map((industry, index) => (
              <div key={index} className={styles.industryItem} itemScope itemType="https://schema.org/CreativeWork">
                <h3 itemProp="name">{industry.title}</h3>
                <p itemProp="description">{industry.count}</p>
                <meta itemProp="url" content={`https://www.professionalresumefree.com/templates/${industry.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section with Competitive Keywords */}
      <section className={styles.comparisonSection} aria-labelledby="comparison-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="comparison-title">Why Choose Our Free Resume Builder Over Others?</h2>
            <p className={styles.sectionSubtitle}>
              See how we compare against other resume builders. Get the best free resume maker experience.
            </p>
          </div>
          <div className={styles.comparisonTable}>
            <table itemScope itemType="https://schema.org/Table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">ProfessionalResumeFree.com</th>
                  <th scope="col">Other Free Builders</th>
                </tr>
              </thead>
              <tbody>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">ATS-Friendly Resume Templates</th>
                  <td itemProp="value">✓ Free ATS Professional Templates</td>
                  <td>Limited Basic Options</td>
                </tr>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">Smart Content Suggestions</th>
                  <td itemProp="value">✓ Included for Free</td>
                  <td>✗ Premium Feature</td>
                </tr>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">PDF Download Resume</th>
                  <td itemProp="value">✓ Free, No Watermark</td>
                  <td>Watermarked or Paid</td>
                </tr>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">No Account Required</th>
                  <td itemProp="value">✓ Start Immediately</td>
                  <td>✗ Often Required</td>
                </tr>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">Mobile-Friendly Resume Builder</th>
                  <td itemProp="value">✓ Full Mobile Support</td>
                  <td>Limited Mobile Experience</td>
                </tr>
                <tr itemScope itemType="https://schema.org/PropertyValue">
                  <th scope="row">Free Forever</th>
                  <td itemProp="value">✓ Completely Free</td>
                  <td>Limited Free Tier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Social Proof */}
      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="testimonials-title">Build a Resume That Gets Results - Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Our free resume builder tools are designed to give your job application a competitive edge. Join thousands who found jobs faster.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Long-tail Keywords */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions - Free Resume Builder</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our free resume builder and creating professional resumes
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem} itemScope itemType="https://schema.org/Question">
                <h3 itemProp="name">{faq.question}</h3>
                <p itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <span itemProp="text">{faq.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Strong CTAs */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Transform Your Career with Our Free Resume Builder?</h2>
            <p className={styles.ctaSubtitle}>
              Join 4 million+ job seekers who landed their dream jobs with our free ATS-friendly resume builder. Create your professional resume now.
            </p>
            <div className={styles.ctaButtons}>
              <Link 
                href="/resume-templates" 
                className={styles.ctaButton}
                aria-label="Create Your Free Resume Now - No Sign Up Required"
              >
                Create Your Free Resume Now - No Sign Up
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span>No credit card required • Free forever • Download in minutes • ATS Optimized</span>
            </div>
            
            {/* Hidden semantic footer for SEO */}
            <footer style={{display: 'none'}} itemScope itemType="https://schema.org/WPFooter">
              <span itemProp="copyrightYear">2024-2026</span>
              <span itemProp="copyrightHolder">Professional Resume Free</span>
              <a href="/sitemap.xml" itemProp="url">Sitemap</a>
              <a href="/privacy-policy" itemProp="url">Privacy Policy</a>
              <a href="/terms" itemProp="url">Terms of Service</a>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

// Card Components with enhanced SEO
const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div 
      className={styles.featureCard} 
      itemScope 
      itemType="https://schema.org/Service"
      role="article"
      aria-label={title}
    >
      <div className={styles.iconContainer} aria-hidden="true">{icon}</div>
      <h3 className={styles.featureTitle} itemProp="name">{title}</h3>
      <p className={styles.featureDescription} itemProp="description">{description}</p>
      <meta itemProp="serviceType" content="Resume Building Service" />
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, avatar, company, metric, index }) => {
  return (
    <div 
      className={styles.testimonialCard} 
      itemScope 
      itemType="https://schema.org/Review"
      role="article"
    >
      <div className={styles.quoteMark} aria-hidden="true">"</div>
      <p className={styles.quote} itemProp="reviewBody">"{quote}"</p>
      <div className={styles.testimonialMetric}>
        <FiCheck className={styles.metricIcon} />
        <span>{metric}</span>
      </div>
      <div className={styles.userInfo} itemProp="author" itemScope itemType="https://schema.org/Person">
        <div className={styles.avatar} aria-hidden="true">{avatar}</div>
        <div className={styles.userDetails}>
          <h4 className={styles.userName} itemProp="name">{name}</h4>
          <p className={styles.userRole} itemProp="jobTitle">{role}</p>
          <p className={styles.userCompany} itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">{company}</span>
          </p>
        </div>
      </div>
      <meta itemProp="datePublished" content={new Date().toISOString()} />
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" style={{display: 'none'}}>
        <meta itemProp="ratingValue" content="5" />
        <meta itemProp="bestRating" content="5" />
      </div>
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication" style={{display: 'none'}}>
        <span itemProp="name">Professional Resume Free Builder - ATS Optimized Resume Maker</span>
        <span itemProp="applicationCategory">BusinessApplication</span>
        <link itemProp="url" href="https://www.professionalresumefree.com" />
      </div>
    </div>
  );
};

// Data Arrays with Enhanced SEO Content
const industries = [
  "Software Development Resume", "Healthcare & Nursing CV", "Project Management Resume", 
  "Digital Marketing CV", "Sales & Business Resume", "Customer Service CV", 
  "Engineering Resume", "Education & Teaching CV", "Finance & Accounting Resume",
  "Design & Creative Portfolio", "Recent Graduates Resume", "Career Changers CV",
  "IT & Cybersecurity Resume", "Human Resources CV", "Operations Management Resume"
];

const features = [
  {
    icon: <FiUser className={styles.featureIcon} />,
    title: "Build a Better Resume For Free - Easy Resume Maker",
    description: "Start Building Now—No Sign-Up Needed. Use our ATS-optimized resume templates, enter your info with full control, and export a professional PDF resume in minutes. Perfect resume builder for quick applications."
  },
  {
    icon: <FiFileText className={styles.featureIcon} />,
    title: "ATS-Friendly Resume Templates - Pass Employer Systems",
    description: "Professional ATS resume templates designed to pass Applicant Tracking Systems (ATS) used by 99% of Fortune 500 companies. Increase your interview chances significantly."
  },
  {
    icon: <FiCheck className={styles.featureIcon} />,
    title: "Stop Guessing Start Passing - ATS Optimized Resume Builder",
    description: "Forget complex analysis. Our resume templates are built from the ground up to be ATS-friendly, giving you a resume that's optimized to pass automated screens and reach human recruiters."
  },
  {
    icon: <FiDownload className={styles.featureIcon} />,
    title: "One-Click Export - Download Resume PDF Free",
    description: "Download your resume as PDF, Word doc, or plain text. Perfect for any online job application portal. No watermarks, completely free resume download."
  },
  {
    icon: <FiAward className={styles.featureIcon} />,
    title: "Proven Results - Land Interviews Faster",
    description: "Users get 36% more interviews and report landing jobs 3x faster with our optimized resumes. Join successful job seekers today with our free resume maker."
  },
  {
    icon: <FiSettings className={styles.featureIcon} />,
    title: "Mobile-Friendly Resume Builder - Create Anywhere",
    description: "Create, edit, and download your resume from any device. Your progress saves automatically. The perfect mobile resume builder for on-the-go job seekers."
  }
];

const industryTemplates = [
  { title: "Software Engineering Resume", count: " ATS Template", slug: "software-engineer-resume" },
  { title: "Nursing & Healthcare CV", count: " Professional Design", slug: "healthcare-resume" },
  { title: "Sales & Marketing Resume", count: "Conversion Template", slug: "sales-marketing-resume" },
  { title: "Recent Graduates Resume", count: "Entry-Level Design", slug: "graduate-resume" },
  { title: "Project Management Resume", count: "Leadership Template", slug: "project-management-resume" },
  { title: "Customer Service Resume", count: "Professional Design", slug: "customer-service-resume" },
];

const testimonials = [
  {
    quote: "Built my ATS-optimized resume in 10 minutes and landed interviews the same week. The free resume builder is incredible!",
    metric: "Found Job in 2 Weeks",
    name: "Sarah M.",
    role: "Marketing Manager",
    company: "Tech Company",
    avatar: "SM"
  },
  {
    quote: "Finally a free resume builder that doesn't compromise on quality. The ATS templates helped me pass automated screenings.",
    metric: "3 Interviews in 1 Week",
    name: "James K.",
    role: "Software Developer",
    company: "Startup",
    avatar: "JK"
  },
  {
    quote: "As a recent graduate, the entry-level resume templates were perfect. Landed my first job using this free resume maker.",
    metric: "First Job After College",
    name: "Alex P.",
    role: "Junior Analyst",
    company: "Finance Firm",
    avatar: "AP"
  },
  {
    quote: "The mobile resume builder saved me - could update my CV on the go. Professional results without the cost.",
    metric: "Career Change Success",
    name: "Maria L.",
    role: "Project Coordinator",
    company: "Construction",
    avatar: "ML"
  },
  {
    quote: "ATS-friendly templates actually work! Got callbacks from companies that previously ignored my applications.",
    metric: "5x More Responses",
    name: "David T.",
    role: "Sales Executive",
    company: "Tech Sales",
    avatar: "DT"
  },
  {
    quote: "Free PDF download with no watermark? Unbeatable value. Best free resume builder I've found online.",
    metric: "Perfect Resume in 15min",
    name: "Lisa R.",
    role: "HR Specialist",
    company: "Healthcare",
    avatar: "LR"
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
  }
];

export default LandingPage;