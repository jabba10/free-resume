import Head from 'next/head';
import Link from 'next/link';
import { 
  FiShield, 
  FiLock, 
  FiEye, 
  FiUserCheck,
  FiFileText,
  FiCheck,
  FiX
} from 'react-icons/fi';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const privacyPrinciples = [
    {
      icon: <FiLock className={styles.principleIcon} />,
      title: 'No Data Storage',
      description: 'We do not store any of your personal information, resume content, or credentials on our servers.'
    },
    {
      icon: <FiShield className={styles.principleIcon} />,
      title: 'Client-Side Processing',
      description: 'All resume creation happens in your browser. Your data never leaves your device unless you choose to download or export it.'
    },
    {
      icon: <FiEye className={styles.principleIcon} />,
      title: 'Secure by Design',
      description: 'No accounts, no databases, no tracking. Your privacy is built into the core of our platform.'
    },
    {
      icon: <FiUserCheck className={styles.principleIcon} />,
      title: 'Transparent Policy',
      description: 'We believe in clear, simple privacy—no hidden clauses or complex legalese.'
    }
  ];

  const privacyStats = [
    {
      icon: <FiX className={styles.statIcon} />,
      title: 'No personal data stored',
      description: 'Your information stays on your device'
    },
    {
      icon: <FiX className={styles.statIcon} />,
      title: 'No user accounts required',
      description: 'Start building immediately, no sign-up'
    },
    {
      icon: <FiX className={styles.statIcon} />,
      title: 'No third-party tracking',
      description: 'We respect your browsing privacy'
    },
    {
      icon: <FiCheck className={styles.statIcon} />,
      title: 'Your resume, your control',
      description: 'Complete ownership of your data'
    }
  ];

  const policyDetails = [
    {
      title: 'Information We Collect',
      content: 'We do not collect, store, or process any personal information. Your resume data exists only in your browser during your session and is never transmitted to our servers.'
    },
    {
      title: 'How We Use Your Information',
      content: 'Since we do not collect any personal data, there is no usage of your information. All resume processing happens locally on your device.'
    },
    {
      title: 'Data Storage & Retention',
      content: 'Zero data retention policy. When you close your browser, all resume data is automatically cleared. We do not maintain databases or store any user information.'
    },
    {
      title: 'Third-Party Services',
      content: 'We use minimal, privacy-focused third-party services for website analytics. These services are configured to respect Do Not Track signals and minimize data collection.'
    },
    {
      title: 'Your Rights',
      content: 'You have complete control over your data. Since we do not store any information, you can be confident that your privacy is fully protected.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about our privacy practices, please contact us through our contact page. We are committed to being transparent about our privacy-first approach.'
    }
  ];

  return (
    <div className={styles.privacyPolicy}>
      {/* SEO Meta Tags */}
      <Head>
        <title>Privacy Policy | Your Data, Your Control | ResumeCraft</title>
        <meta name="description" content="We don't store your resume or personal data. Learn how our resume builder protects your privacy with zero data retention and client-side processing." />
        <meta name="keywords" content="privacy policy, resume builder privacy, no data storage, secure resume, GDPR compliant, data protection, resume privacy" />
        <meta name="author" content="ResumeCraft" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/privacy-policy" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Privacy Policy | Your Data, Your Control | ProfessionalResumeFree" />
        <meta property="og:description" content="We never store your resume or personal information. Built for privacy from the ground up." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/privacy-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Your Data, Your Control | ProfessionalResumeFree" />
        <meta name="twitter:description" content="We never store your resume or personal information. Built for privacy from the ground up." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/privacy-preview.jpg" />
        <meta name="twitter:site" content="@professionalresumefree" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy - ResumeCraft",
              "description": "Our commitment to your privacy: we do not store any personal data or resume content.",
              "url": "https://www.professionalresumefree.com/privacy-policy",
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
                    "name": "Privacy Policy",
                    "item": "https://www.professionalresumefree.com/privacy-policy"
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
                Your Privacy Is Our <span className={styles.gradientText}>Priority</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We believe you should own your data. That's why we don't store your resume, 
                personal information, or any content you create on our platform.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/free-resume-builder" className={styles.primaryButton}>
                  Build Your Resume Safely
                  <div className={styles.buttonPulse}></div>
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>🔒</div>
                <h4>Private</h4>
                <p>No data stored</p>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>🛡️</div>
                <h4>Secure</h4>
                <p>Encrypted in browser</p>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>🚀</div>
                <h4>Simple</h4>
                <p>No accounts needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Privacy Principles</h2>
            <p className={styles.sectionSubtitle}>
              We're committed to a resume builder that respects your data and your trust
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className={styles.principleCard}>
                <div className={styles.principleIconContainer}>
                  {principle.icon}
                </div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {privacyStats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <h3 className={styles.statTitle}>{stat.title}</h3>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Section */}
      <section className={styles.policySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Privacy Policy Details</h2>
            <p className={styles.sectionSubtitle}>
              Clear, transparent information about how we protect your privacy
            </p>
          </div>
          <div className={styles.policyGrid}>
            {policyDetails.map((policy, index) => (
              <div key={index} className={styles.policyCard}>
                <h3 className={styles.policyTitle}>{policy.title}</h3>
                <p className={styles.policyContent}>{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className={styles.complianceSection}>
        <div className={styles.container}>
          <div className={styles.complianceContent}>
            <div className={styles.complianceText}>
              <h2>GDPR & Privacy Compliance</h2>
              <p>
                Our privacy-first approach naturally aligns with major privacy regulations including 
                GDPR, CCPA, and other data protection laws. Since we don't collect or process personal data, 
                you can use our service with confidence knowing your privacy is protected by design.
              </p>
              <ul className={styles.complianceList}>
                <li>✅ No personal data collection</li>
                <li>✅ No data processing agreements needed</li>
                <li>✅ No data subject access requests</li>
                <li>✅ No data breach risks</li>
                <li>✅ Built-in privacy by design</li>
              </ul>
            </div>
            <div className={styles.complianceVisual}>
              <div className={styles.complianceBadge}>
                <FiShield className={styles.badgeIcon} />
                <span>Privacy First</span>
              </div>
              <div className={styles.complianceBadge}>
                <FiLock className={styles.badgeIcon} />
                <span>GDPR Ready</span>
              </div>
              <div className={styles.complianceBadge}>
                <FiUserCheck className={styles.badgeIcon} />
                <span>User Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Without Compromise?</h2>
            <p className={styles.ctaSubtitle}>
              Create a powerful, ATS-friendly resume—without giving up your privacy or personal data
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Create Your Resume Now
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;