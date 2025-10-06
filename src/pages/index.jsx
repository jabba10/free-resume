import Head from 'next/head';
import Link from 'next/link';
import { 
  FiDownload, 
  FiPrinter, 
  FiCheck, 
  FiAward, 
  FiUser, 
  FiFileText, 
  FiSettings, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiTwitter,
  FiStar,
  FiArrowRight
} from 'react-icons/fi';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* Enhanced SEO Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Free ATS-Friendly Resume Builder Online | Professional Resume Templates</title>
        <meta name="title" content="Free ATS-Friendly Resume Builder Online | Professional Resume Templates" />
        <meta name="description" content="Create a job-winning, ATS-optimized resume in minutes. Our free resume builder helps you land interviews 3x faster. Used by over 4 million job seekers worldwide." />
        <meta name="keywords" content="ATS friendly resume builder, free resume builder, professional resume template, online resume maker, get hired faster, resume builder free, ATS resume template, job application resume" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Free ATS-Friendly Resume Builder Online | Professional Resume Templates" />
        <meta property="og:description" content="Create a job-winning, ATS-optimized resume in minutes. Our free resume builder helps you land interviews 3x faster." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-builder-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ATS-Friendly Resume Builder Online | Professional Resume Templates" />
        <meta name="twitter:description" content="Create a job-winning, ATS-optimized resume in minutes. Our free resume builder helps you land interviews 3x faster." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-resume-builder-preview.jpg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />

        {/* Additional SEO Meta */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (JSON-LD) - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Professional Resume Free Builder",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "4365",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster.",
              "url": "https://www.professionalresumefree.com",
              "featureList": [
                "ATS-Optimized Templates",
                "Professional Content Suggestions",
                "One-Click PDF Download",
                "Real-Time ATS Analysis",
                "Mobile-Friendly Editor",
                "Professional Resume Templates"
              ],
              "publisher": {
                "@type": "Organization",
                "name": "Professional Resume Free",
                "url": "https://www.professionalresumefree.com"
              }
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
                  "name": "Is this resume builder really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our resume builder is completely free with no hidden costs. You can create, edit, and download your resume without any payment required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does ATS-friendly mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ATS-friendly means our resume templates are optimized to pass through Applicant Tracking Systems used by employers to screen job applications, increasing your chances of getting noticed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I download my resume as PDF?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can download your resume in multiple formats including PDF, Word document, and plain text, all for free."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Enhanced Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span>Rated 4.9/5 by 4,365+ Users</span>
            </div>
            <h1 className={styles.heroTitle}>
              Free Professional Resume Builder <span className={styles.gradientText}>Loved by 4M+ Job Seekers</span>
            </h1>
            <p className={styles.heroSubtitle}> 
            Create a <strong>professional, ATS-optimized resume for free.</strong> Our tool ensures your resume is formatted to pass automated employer tracking systems and get you noticed.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                <span>Start for Free</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
            </div>
            
            {/* Enhanced Stats */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4M+</span>
                <span className={styles.statLabel}>Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>94%</span>
                <span className={styles.statLabel}>Interview Success</span>
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

            {/* Press Features */}
            <div className={styles.pressLogos}>
              <p>Professional Resumes. Zero Cost.</p>
              <div className={styles.logoGrid}>
                <span className={styles.logoItem}>ATS-Optimized</span>
                <span className={styles.logoItem}>Easy to Edit</span>
                <span className={styles.logoItem}>Download in PDF</span>
                <span className={styles.logoItem}>Always Free</span>
              </div>
            </div>

            {/* Industry Badges */}
            <div className={styles.industryBadges}>
              {industries.map((industry, index) => (
                <span key={index} className={styles.industryBadge}>{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our ATS-Friendly Resume Builder</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create a resume that stands out and gets results
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Templates Section */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Professional Templates for Every Career</h2>
            <p className={styles.sectionSubtitle}>
              Choose from 500+ resume examples and templates tailored to your industry
            </p>
          </div>
          <div className={styles.industriesGrid}>
            {industryTemplates.map((industry, index) => (
              <div key={index} className={styles.industryItem}>
                <h3>{industry.title}</h3>
                <p>{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Free Resume Builder?</h2>
            <p className={styles.sectionSubtitle}>
              See how we compare against other resume builders
            </p>
          </div>
          <div className={styles.comparisonTable}>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ProfessionalResumeFree.com</th>
                  <th>Other Free Builders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ATS-Friendly Templates</td>
                  <td>✓ ATS Professional Templates</td>
                  <td>Limited Options</td>
                </tr>
                <tr>
                  <td>Smart Content Suggestions</td>
                  <td>✓ Included for Free</td>
                  <td>✗ Not Available</td>
                </tr>
                <tr>
                  <td>PDF Download</td>
                  <td>✓ Free, No Watermark</td>
                  <td>Watermarked or Paid</td>
                </tr>
                <tr>
                  <td>No Account Required</td>
                  <td>✓ Start Immediately</td>
                  <td>✗ Often Required</td>
                </tr>
                <tr>
                  <td>Mobile-Friendly</td>
                  <td>✓ Full Mobile Support</td>
                  <td>Limited Mobile Experience</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Build a Resume That Gets Results</h2>
            <p className={styles.sectionSubtitle}>
              Our tools are designed to give your application a competitive edge
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our free resume builder
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 4 million+ job seekers who landed their dream jobs with our free ATS-friendly resume builder
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Create Your Free Resume Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span>No credit card required • Free forever • Download in minutes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Card Components
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote, avatar, company, metric }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteMark}>"</div>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.testimonialMetric}>
        <FiCheck className={styles.metricIcon} />
        <span>{metric}</span>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>{avatar}</div>
        <div className={styles.userDetails}>
          <h4 className={styles.userName}>{name}</h4>
          <p className={styles.userRole}>{role}</p>
          <p className={styles.userCompany}>{company}</p>
        </div>
      </div>
    </div>
  );
};

// Data Arrays
const industries = [
  "Software Development", "Healthcare & Nursing", "Project Management", 
  "Digital Marketing", "Sales & Business", "Customer Service", 
  "Engineering", "Education & Teaching", "Finance & Accounting",
  "Design & Creative", "Recent Graduates", "Career Changers",
  "IT & Cybersecurity", "Human Resources", "Operations"
];

const features = [
  {
    icon: <FiUser className={styles.featureIcon} />,
    title: "Build a Better Resume For Free",
    description: "Start Building Now—No Sign-Up Needed. Use our ATS-optimized templates, enter your info with full control, and export a professional PDF in minutes. "
  },
  {
    icon: <FiFileText className={styles.featureIcon} />,
    title: "ATS-Friendly Templates",
    description: "Professional templates designed to pass Applicant Tracking Systems (ATS) used by 99% of Fortune 500 companies."
  },
  {
    icon: <FiCheck className={styles.featureIcon} />,
    title: "Stop Guessing Start Passing",
    description: "Forget complex analysis. Our templates are built from the ground up to be ATS-friendly, giving you a resume that's optimized to pass automated screens and reach a human recruiter."
  },
  {
    icon: <FiDownload className={styles.featureIcon} />,
    title: "One-Click Export",
    description: "Download your resume as a PDF, Word doc, or plain text. Perfect for any online application portal."
  },
  {
    icon: <FiAward className={styles.featureIcon} />,
    title: "Proven Results",
    description: "Users get 36% more interviews and report landing jobs 3x faster with our optimized resumes."
  },
  {
    icon: <FiSettings className={styles.featureIcon} />,
    title: "Mobile-Friendly Builder",
    description: "Create, edit, and download your resume from any device. Your progress saves automatically."
  }
];

const industryTemplates = [
  { title: "Software Engineering", count: "", slug: "" },
  { title: "Nursing & Healthcare", count: "", slug: "" },
  { title: "Sales & Marketing", count: "", slug: "" },
  { title: "Recent Graduates", count: "", slug: "" },
  { title: "Project Management", count: "", slug: "" },
  { title: "Customer Service", count: "", slug: "" },
];

const testimonials = [
  {
    quote: "Build, edit, and download your ATS-optimized resume without any hidden fees or watermarks.",
    metric: "No Surprises, Truly Free",
    avatar: "1"
  
  },
  {
   
    quote: "Full manual control to enter your details, paired with templates designed to pass ATS scans.",
    metric: "You Write, We Format",
    avatar: "2"
   
  },
  {
    
    quote: "Our templates use clean layouts and standard headings to ensure your resume gets seen.",
    metric: "Built for ATS Success",
    avatar: "3"
  },
  {
    quote: "Be part of a new community dedicated to creating professional, effective resumes.",
    metric: "Join Thousands Building Better Resumes",
    avatar: "4"
  },
  {
    quote: "Stop guessing and start passing. Our templates are built from the ground up to be ATS-friendly.",
    metric: "ATS-Friendly Resume Templates",
    avatar: "5"
  },
  {
    quote: "Download your resume as a PDF. Perfect for any online application portal.",
    metric: "One-Click Export",
    avatar: "6"
  }
];

const faqs = [
  {
    question: "Is this resume builder really free?",
    answer: "Yes, our resume builder is completely free with no hidden costs. You can create, edit, and download your resume in multiple formats without any payment required."
  },
  {
    question: "What does ATS-friendly mean?",
    answer: "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by 99% of employers to screen job applications, significantly increasing your chances of getting noticed by recruiters."
  },
  {
    question: "Can I download my resume as PDF?",
    answer: "Absolutely! You can download your resume in multiple formats including PDF, Word document, and plain text - all completely free and without any watermarks."
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is required to start building your resume. You can begin immediately and create your professional resume in minutes without any sign-up process."
  }
];

export default LandingPage;