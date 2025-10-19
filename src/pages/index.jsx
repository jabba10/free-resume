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
      {/* Enhanced SEO Meta Tags with Competitive Keywords */}
      <Head>
        {/* Primary Meta Tags - Optimized with Competitive Keywords */}
        <title>Free Resume Builder Online - ATS Friendly Templates 2024 | Professional Resume Maker</title>
        <meta name="title" content="Free Resume Builder Online - ATS Friendly Templates 2024 | Professional Resume Maker" />
        <meta name="description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster with our resume builder. 500+ templates, instant PDF download. Trusted by 4M+ job seekers worldwide." />
        
        {/* Comprehensive Keyword Strategy */}
        <meta name="keywords" content="
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
          resume builder 2024, 
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
          free resume builder,
free online resume builder,
no cost resume maker,
free resume creator no hidden fees,
totally free resume builder,
build my resume free,
100% free resume builder,
ATS resume builder,
ATS friendly resume,
ATS optimized resume,
professional resume maker,
online resume creator,
create resume online free,
build resume online free,
resume templates free,
free resume templates download,
modern resume templates,
stylish resume templates free,
simple resume templates free,
creative resume templates,
executive resume templates,
one-page resume templates,
two-page resume templates,
minimalist resume templates,
resume builder with templates,
job resume builder,
resume builder for jobs,
cv maker free,
free cv maker online,
professional cv builder,
free CV builder online,
professional CV maker,
create CV free,
download CV template free,
resume builder no sign up,
download resume pdf free,
export resume to PDF free,
resume download word format,
best free resume builder,
easy resume builder,
easy CV creation,
quick resume builder,
fast resume maker,
instant resume builder,
step-by-step resume guide,
user-friendly resume builder,
resume builder 2026,
resume maker for freshers,
resume maker for experienced professionals,
resume builder for students,
career change resume builder,
graduate resume template free,
interview winning resume,
resume creator free download,
resume writing service free,
resume builder with cover letter,
AI resume builder free,
resume checker free,
mobile-friendly resume builder,
how to make a resume for free,
where can I build a free resume,
best place to make a resume online,
DIY resume builder
        " />
        
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/" />

        {/* Open Graph / Social Sharing - Enhanced */}
        <meta property="og:title" content="Free Resume Builder Online - ATS Friendly Templates 2024 | Professional Resume Maker" />
        <meta property="og:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. 500+ templates, instant PDF download. Trusted by 4M+ job seekers." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-resume-builder-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Builder Online - ATS Friendly Templates 2024" />
        <meta name="twitter:description" content="Create professional ATS-optimized resumes for free. Land interviews 3x faster. 500+ templates, instant PDF download." />
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

        {/* Structured Data (JSON-LD) - Enhanced for Resume Builder */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Professional Resume Free Builder - ATS Optimized Resume Maker",
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
              "description": "Free online ATS-friendly resume builder that helps job seekers create professional resumes and land interviews faster. 500+ resume templates, instant PDF download, no sign up required.",
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
                "url": "https://www.professionalresumefree.com"
              },
              "keywords": "free resume builder, ATS resume, professional resume maker, online resume creator, resume templates"
            })
          }}
        />

        {/* Additional FAQ Structured Data - Enhanced */}
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
                    "text": "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does ATS-friendly mean for resume building?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by 99% of employers to screen job applications. This includes proper formatting, keyword optimization, and clean structure that automated systems can read easily."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I download my resume as PDF without creating an account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can download your resume in multiple formats including PDF, Word document, and plain text without creating an account or signing up. Everything is completely free and accessible immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many resume templates are available for free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer 500+ professionally designed ATS-friendly resume templates across all industries including software development, healthcare, marketing, finance, and more. All templates are completely free to use."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this resume builder suitable for freshers and experienced professionals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our resume builder is perfect for all career levels - from freshers and recent graduates to experienced professionals and career changers. We have templates and guidance for every experience level."
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
      </Head>

      {/* Enhanced Hero Section with SEO-rich content */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span>Rated 4.9/5 by 4,365+ Users | Best Free Resume Builder 2026</span>
            </div>
            <h1 className={styles.heroTitle}>
              Free Professional Resume Builder <span className={styles.gradientText}>Loved by 4M+ Job Seekers</span>
            </h1>
            <p className={styles.heroSubtitle}> 
            Create a <strong>professional, ATS-optimized resume for free in minutes.</strong> Our resume builder tool ensures your resume is formatted to pass automated employer tracking systems and get you noticed. Build your perfect resume with our easy-to-use online resume maker.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                <span>Start Building Your Free Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </Link>
            </div>
            
            {/* Enhanced Stats with SEO Keywords */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4M+</span>
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
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our ATS-Friendly Resume Builder - Best Free Resume Maker Online</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create a professional resume that stands out and gets results. Our free resume builder is designed to help you land your dream job faster.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Templates Section with SEO-rich content */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Professional Resume Templates for Every Career Path</h2>
            <p className={styles.sectionSubtitle}>
              Choose from 500+ ATS-optimized resume examples and templates tailored to your industry. Perfect resume builder for all experience levels.
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

      {/* Comparison Section with Competitive Keywords */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Free Resume Builder Over Others?</h2>
            <p className={styles.sectionSubtitle}>
              See how we compare against other resume builders. Get the best free resume maker experience.
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
                  <td>ATS-Friendly Resume Templates</td>
                  <td>✓ 500+ ATS Professional Templates</td>
                  <td>Limited Basic Options</td>
                </tr>
                <tr>
                  <td>Smart Content Suggestions</td>
                  <td>✓ Included for Free</td>
                  <td>✗ Premium Feature</td>
                </tr>
                <tr>
                  <td>PDF Download Resume</td>
                  <td>✓ Free, No Watermark</td>
                  <td>Watermarked or Paid</td>
                </tr>
                <tr>
                  <td>No Account Required</td>
                  <td>✓ Start Immediately</td>
                  <td>✗ Often Required</td>
                </tr>
                <tr>
                  <td>Mobile-Friendly Resume Builder</td>
                  <td>✓ Full Mobile Support</td>
                  <td>Limited Mobile Experience</td>
                </tr>
                <tr>
                  <td>Free Forever</td>
                  <td>✓ Completely Free</td>
                  <td>Limited Free Tier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Social Proof */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Build a Resume That Gets Results - Success Stories</h2>
            <p className={styles.sectionSubtitle}>
              Our free resume builder tools are designed to give your job application a competitive edge. Join thousands who found jobs faster.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Long-tail Keywords */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions - Free Resume Builder</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our free resume builder and creating professional resumes
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

      {/* Final CTA Section with Strong CTAs */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Career with Our Free Resume Builder?</h2>
            <p className={styles.ctaSubtitle}>
              Join 4 million+ job seekers who landed their dream jobs with our free ATS-friendly resume builder. Create your professional resume now.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Create Your Free Resume Now - No Sign Up
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span>No credit card required • Free forever • Download in minutes • ATS Optimized</span>
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
  { title: "Software Engineering Resume", count: "50+ ATS Templates", slug: "software-engineer-resume" },
  { title: "Nursing & Healthcare CV", count: "45+ Professional Designs", slug: "healthcare-resume" },
  { title: "Sales & Marketing Resume", count: "60+ Conversion Templates", slug: "sales-marketing-resume" },
  { title: "Recent Graduates Resume", count: "35+ Entry-Level Designs", slug: "graduate-resume" },
  { title: "Project Management Resume", count: "40+ Leadership Templates", slug: "project-management-resume" },
  { title: "Customer Service Resume", count: "30+ Professional Designs", slug: "customer-service-resume" },
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
    answer: "We offer 500+ professionally designed ATS-friendly resume templates across all major industries including software development, healthcare, marketing, finance, engineering, education, recent graduates, and more. All templates are completely free to use and optimized for job search success in 2024."
  }
];

export default LandingPage;