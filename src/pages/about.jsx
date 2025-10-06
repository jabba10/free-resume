import Head from 'next/head';
import Link from 'next/link';
import { 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiClock,
  FiTrendingUp,
  FiCheckCircle
} from 'react-icons/fi';
import styles from './AboutUs.module.css';

const AboutPage = () => {
  const features = [
    {
      icon: <FiAward className={styles.featureIcon} />,
      title: 'Beautiful Designs',
      description: 'Professionally crafted templates that impress recruiters and stand out from the crowd.'
    },
    {
      icon: <FiTrendingUp className={styles.featureIcon} />,
      title: 'Lightning Fast',
      description: 'Create a polished resume in minutes with our intuitive drag-and-drop editor.'
    },
    {
      icon: <FiCheckCircle className={styles.featureIcon} />,
      title: 'ATS Optimized',
      description: 'All templates are designed to pass through applicant tracking systems with ease.'
    },
    {
      icon: <FiGlobe className={styles.featureIcon} />,
      title: 'Global Reach',
      description: 'Used by job seekers in over 100 countries with region-specific formatting options.'
    }
  ];

  const stats = [
    {
      number: "500K+",
      label: "Resumes Created",
      icon: <FiUsers className={styles.statIcon} />
    },
    {
      number: "95%",
      label: "Interview Callback Rate",
      icon: <FiTrendingUp className={styles.statIcon} />
    },
    {
      number: "50+",
      label: "Template Designs",
      icon: <FiAward className={styles.statIcon} />
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <FiClock className={styles.statIcon} />
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* SEO Meta Tags with Next.js Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>About Us | How Our Resume Builder Helps You Land Better Jobs</title>
        <meta name="description" content="Learn how our resume builder combines beautiful design and ATS optimization to help job seekers in 100+ countries land interviews faster and get hired." />
        <meta name="keywords" content="about us, resume builder company, ATS resume, job search tools, career success, professional resume service, resume design, job seeker tools" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/about" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="About Us | How Our Resume Builder Helps You Land Better Jobs" />
        <meta property="og:description" content="We help job seekers create professional, ATS-friendly resumes that get noticed. Learn about our mission, impact, and user success stories." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/about-us-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | How Our Resume Builder Helps You Land Better Jobs" />
        <meta name="twitter:description" content="We help job seekers create professional, ATS-friendly resumes that get noticed. Learn about our mission, impact, and user success stories." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/about-us-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProfessionalResumeFree",
              "url": "https://www.professionalresumefree.com",
              "logo": "https://www.professionalresumefree.com/images/logo.png",
              "description": "A modern resume builder designed to help job seekers create ATS-friendly, professional resumes in minutes.",
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Alex Turner"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Career Lane",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94107",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@professionalresumefree.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/professionalresumefree",
                "https://twitter.com/ProfResumeFree",
                "https://www.facebook.com/professionalresumefree"
              ]
            })
          }}
        />

        {/* Structured Data: WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "About Us - ProfessionalResumeFree",
              "description": "Learn about our mission to help job seekers succeed with professionally designed, ATS-optimized resumes.",
              "url": "https://www.professionalresumefree.com/about",
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
                    "name": "About Us",
                    "item": "https://www.professionalresumefree.com/about"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                We Believe in Your <span className={styles.gradientText}>Potential</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Our mission is to help you present your best self and unlock career opportunities
                through beautifully designed, effective resumes that get you noticed.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/free-resume-builder" className={styles.primaryButton}>
                  Start Building Now
                  <div className={styles.buttonPulse}></div>
                </Link>
                
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>✨</div>
                <h4>Modern</h4>
                <p>Clean, contemporary designs</p>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>🚀</div>
                <h4>Effective</h4>
                <p>Proven results</p>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>💫</div>
                <h4>Simple</h4>
                <p>Easy to use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                We founded ProfessionalResumeFree with a simple belief: everyone deserves the opportunity 
                to present their skills and experience in the best possible light. In today's 
                competitive job market, your resume is your first impression - we make sure it's 
                a great one.
              </p>
              <p>
                Our platform combines cutting-edge design with ATS optimization to ensure 
                your resume not only looks beautiful but also gets past automated screening 
                systems and into the hands of hiring managers.
              </p>
            </div>
            <div className={styles.missionStats}>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>3x</span>
                <span className={styles.statLabel}>Faster Interviews</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose ProfessionalResumeFree</h2>
            <p className={styles.sectionSubtitle}>
              We combine beautiful design with powerful functionality to help you stand out
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Dream Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join thousands who've landed better jobs with professionally designed resumes
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Create Your Resume Now
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;