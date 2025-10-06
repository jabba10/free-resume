import Head from 'next/head';
import Link from 'next/link';
import { 
  FiSearch, 
  FiMessageCircle, 
  FiUser, 
  FiClock,
  FiSmile,
  FiHelpCircle,
  FiStar,
  FiMail,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiFileText,
  FiEdit,
  FiDownload,
  FiEye
} from 'react-icons/fi';
import styles from './Interviewstips.module.css';

const InterviewTips = () => {
  const tips = [
    {
      id: 1,
      title: "Tailor Your Resume for the Role",
      content: "Carefully read the job description and mirror its keywords in your resume. This makes your application more relevant and helps it pass through Applicant Tracking Systems (ATS).",
      icon: <FiEdit className={styles.tipIcon} />
    },
    {
      id: 2,
      title: "Quantify Your Achievements",
      content: "Use numbers and metrics to demonstrate your impact. Instead of 'Responsible for sales,' write 'Increased sales by 25% over six months by implementing a new strategy.'",
      icon: <FiTrendingUp className={styles.tipIcon} />
    },
    {
      id: 3,
      title: "Use a Clean, Professional Format",
      content: "Choose an ATS-friendly resume template with a clear font and logical sections. Avoid graphics and columns that can confuse automated systems.",
      icon: <FiFileText className={styles.tipIcon} />
    },
    {
      id: 4,
      title: "Optimize Your Professional Summary",
      content: "Write a powerful summary at the top of your resume that highlights your key skills and experiences relevant to the job you want.",
      icon: <FiUser className={styles.tipIcon} />
    },
    {
      id: 5,
      title: "Incorporate Relevant Keywords",
      content: "Research common industry terms and skills for your target role. Sprinkling these keywords naturally throughout your resume improves its visibility.",
      icon: <FiSearch className={styles.tipIcon} />
    },
    {
      id: 6,
      title: "Highlight Transferable Skills",
      content: "Even if you're changing careers, focus on skills that are valuable across industries, like communication, project management, and problem-solving.",
      icon: <FiAward className={styles.tipIcon} />
    },
    {
      id: 7,
      title: "Proofread Meticulously",
      content: "Typos and grammatical errors can get your resume rejected. Read it aloud, use spell check, and ask a friend to review it for you.",
      icon: <FiCheckCircle className={styles.tipIcon} />
    },
    {
      id: 8,
      title: "Save and Send in the Right Format",
      content: "For most online applications, a PDF is best as it preserves your formatting. Ensure the file name is professional, like 'YourName_Resume.pdf'.",
      icon: <FiDownload className={styles.tipIcon} />
    }
  ];

  const advancedTips = [
    {
      id: 9,
      title: "Leverage Action Verbs",
      content: "Start bullet points with powerful verbs like 'Orchestrated,' 'Engineered,' 'Launched,' or 'Analyzed' to make your experience sound more dynamic and results-oriented.",
      icon: <FiEdit className={styles.advancedIcon} />
    },
    {
      id: 10,
      title: "Prepare for Resume-Based Questions",
      content: "Be ready to discuss every single point on your resume in detail. Interviewers will use it as a roadmap for their questions.",
      icon: <FiMessageCircle className={styles.advancedIcon} />
    },
    {
      id: 11,
      title: "Align Resume and Online Profile",
      content: "Ensure the experience and dates on your resume match your LinkedIn profile. Inconsistencies can raise red flags for employers.",
      icon: <FiEye className={styles.advancedIcon} />
    },
    {
      id: 12,
      title: "Keep it Concise and Relevant",
      content: "Aim for a one-page resume if you have under 10 years of experience. Prioritize recent and relevant roles, and trim older or unrelated positions.",
      icon: <FiFileText className={styles.advancedIcon} />
    }
  ];

  const stats = [
    {
      number: "36%",
      label: "Faster Hiring Rate",
      description: "Candidates with ATS-optimized resumes get hired faster"
    },
    {
      number: "75%",
      label: "Pass ATS Scans",
      description: "Properly formatted resumes pass through employer tracking systems"
    },
    {
      number: "100%",
      label: "Free to Use",
      description: "Create and download your resume without any cost"
    },
    {
      number: "5min",
      label: "Resume Ready",
      description: "Build a professional resume in just minutes"
    }
  ];

  return (
    <div className={styles.interviewTips}>
      {/* SEO Meta Tags with Next.js Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Free Resume Builder & Interview Tips - ProfessionalResumeFree.com</title>
        <meta name="title" content="Free Resume Builder & Interview Tips - ProfessionalResumeFree.com" />
        <meta name="description" content="Create an ATS-optimized, professional resume for free in minutes. Get hired 36% faster with our easy-to-use resume builder and expert interview preparation tips." />
        <meta name="keywords" content="free resume builder, ATS resume, professional resume, resume templates, interview tips, job search, resume examples, cv maker" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/resume-tips-and-interview-guide" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Free Resume Builder & Interview Tips - ProfessionalResumeFree.com" />
        <meta property="og:description" content="Create an ATS-optimized, professional resume for free in minutes. Get hired 36% faster with our easy-to-use resume builder and expert interview tips." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-tips-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/resume-tips-and-interview-guide" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Builder & Interview Tips - ProfessionalResumeFree.com" />
        <meta name="twitter:description" content="Create an ATS-optimized, professional resume for free in minutes. Get hired 36% faster with our easy-to-use resume builder." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-tips-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />

        {/* Structured Data (JSON-LD) - HowTo Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Create an ATS-Optimized Resume and Prepare for Interviews",
              "description": "A step-by-step guide to building a professional resume that passes applicant tracking systems and preparing for job interviews.",
              "image": "https://www.professionalresumefree.com/images/resume-tips-preview.jpg",
              "author": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/images/logo.png"
                }
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-04-05",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/resume-tips-and-interview-guide"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Tailor Your Resume for the Role",
                  "text": "Carefully read the job description and mirror its keywords in your resume to pass ATS systems.",
                  "url": "https://www.professionalresumefree.com/resume-tips-and-interview-guide#main-tips"
                },
                {
                  "@type": "HowToStep",
                  "name": "Quantify Your Achievements",
                  "text": "Use numbers and metrics to demonstrate your impact and make your resume stand out.",
                  "url": "https://www.professionalresumefree.com/resume-tips-and-interview-guide#main-tips"
                }
              ],
              "totalTime": "PT15M"
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build a Resume That <span className={styles.gradientText}>Gets You Hired</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Create an ATS-optimized, professional resume in minutes with our free tool. Get hired 36% faster with resumes designed to pass employer tracking systems and impress hiring managers.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Create My Free Resume
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#main-tips" className={styles.secondaryButton}>
                Get Resume Tips
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statContent}>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>Craft a Resume That Opens Doors</h2>
              <p>
                In today's competitive job market, a standard resume isn't enough. Most companies use Applicant Tracking Systems (ATS) to filter candidates before a human ever sees your application. Our free resume builder is specifically designed to create resumes that pass these systems and get you noticed.
              </p>
              <p>
                Combine your powerful resume with effective interview techniques to create a complete job search strategy that delivers results. We'll guide you through both processes with expert tips and proven strategies.
              </p>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>🤖</div>
                <h4>ATS Optimized</h4>
                <p>Built to pass tracking systems</p>
              </div>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>💼</div>
                <h4>Professional Design</h4>
                <p>Impress hiring managers</p>
              </div>
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>🎯</div>
                <h4>Get Hired Faster</h4>
                <p>36% higher hiring rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tips Section */}
      <section id="main-tips" className={styles.tipsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Essential Resume Writing Tips</h2>
            <p className={styles.sectionSubtitle}>
              Master these fundamental strategies to create a resume that gets you interviews
            </p>
          </div>
          <div className={styles.tipsGrid}>
            {tips.map(tip => (
              <div key={tip.id} className={styles.tipCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconContainer}>
                    {tip.icon}
                  </div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                </div>
                <p className={styles.tipContent}>{tip.content}</p>
                <div className={styles.cardNumber}>{tip.id.toString().padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className={styles.advancedSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Advanced Resume Strategies</h2>
            <p className={styles.sectionSubtitle}>
              Take your resume to the next level with these expert techniques
            </p>
          </div>
          <div className={styles.advancedGrid}>
            {advancedTips.map(tip => (
              <div key={tip.id} className={styles.advancedCard}>
                <div className={styles.advancedHeader}>
                  {tip.icon}
                  <h3 className={styles.advancedTitle}>{tip.title}</h3>
                </div>
                <p className={styles.advancedContent}>{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Your Free Resume?</h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of job seekers who landed their dream jobs with our ATS-optimized, professional resume builder. No credit card required.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Build Your Free Resume Now
              </Link>
              
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheckCircle className={styles.guaranteeIcon} />
              <span>100% Free • No Sign-Up Required • Professional Results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewTips;