'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiUser, 
  FiTarget,
  FiBook,
  FiAward,
  FiCheck,
  FiArrowRight,
  FiSearch,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiTrendingUp,
  FiUsers,
  FiGlobe
} from 'react-icons/fi';
import styles from './JobsSearchTips.module.css';

const JobSearchTips = () => {
  const [activeStep, setActiveStep] = useState(0);

  const onlineTips = [
    {
      title: "Optimize Your LinkedIn Profile",
      content: "Ensure your profile is complete with a professional photo, detailed work history, and relevant skills. Engage with industry content to increase visibility.",
      icon: "👔"
    },
    {
      title: "Use Job Search Engines Effectively",
      content: "Set up alerts on platforms like Indeed, Glassdoor, and LinkedIn. Use Boolean search terms to refine results.",
      icon: "🔍"
    },
    {
      title: "Leverage Company Websites",
      content: "Apply directly through company career pages. Smaller companies often don't post on job boards, so check their sites regularly.",
      icon: "🏢"
    },
    {
      title: "Network Virtually",
      content: "Join industry-specific groups on LinkedIn and Facebook. Participate in webinars and virtual networking events.",
      icon: "🌐"
    },
    {
      title: "Tailor Your Application",
      content: "Customize your resume and cover letter for each position using keywords from the job description to pass ATS screening.",
      icon: "✂️"
    },
    {
      title: "Follow Up Strategically",
      content: "Send a polite follow-up email 7-10 days after applying. Reference specific details about why you're excited about the role.",
      icon: "↩️"
    }
  ];

  const offlineTips = [
    {
      title: "Attend Industry Events",
      content: "Conferences, seminars, and meetups are excellent for making personal connections that can lead to job opportunities.",
      icon: "🎤"
    },
    {
      title: "Informational Interviews",
      content: "Request short meetings with professionals in your field to learn about their career paths and get advice.",
      icon: "💬"
    },
    {
      title: "Local Business Networking",
      content: "Join your local chamber of commerce or business networking groups to connect with employers in your area.",
      icon: "🤝"
    },
    {
      title: "Volunteer Work",
      content: "Gain experience and make connections by volunteering for organizations in your industry.",
      icon: "❤️"
    },
    {
      title: "Direct Outreach",
      content: "Identify companies you'd like to work for and send a personalized letter of interest with your resume.",
      icon: "📨"
    },
    {
      title: "Temp or Contract Work",
      content: "Many temp positions convert to full-time roles. It's a great way to get your foot in the door.",
      icon: "⏱️"
    }
  ];

  const stats = [
    {
      value: "80%",
      label: "Jobs are found through networking",
      icon: <FiUser className={styles.statIcon} />
    },
    {
      value: "75%",
      label: "Applicants don't tailor their resumes",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "3x",
      label: "More interviews with optimized profiles",
      icon: <FiBook className={styles.statIcon} />
    }
  ];

  const motivationalQuotes = [
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Your career is a garden. What you plant now, you will harvest later.",
      author: "Unknown"
    }
  ];

  const successTips = [
    "Celebrate small wins along the way - each application sent is progress",
    "Rejection is redirection, not reflection of your worth",
    "The perfect job is searching for you as hard as you're searching for it",
    "Your unique combination of skills and experiences is valuable",
    "Job searching is a skill that improves with practice",
    "Networking is about building relationships, not just asking for jobs"
  ];

  return (
    <div className={styles.jobSearchTips}>
      {/* Enhanced SEO Meta Tags with Competitive Keywords */}
      <Head>
        {/* Primary Meta Tags - Optimized for Job Search Keywords */}
        <title>Job Search Tips 2026: Ultimate Guide to Land Your Dream Job Faster</title>
        <meta name="title" content="Job Search Tips 2026: Ultimate Guide to Land Your Dream Job Faster" />
        <meta name="description" content="Master job search strategies for 2026 with 50+ proven tips. Learn LinkedIn optimization, networking techniques, ATS resume tips, and interview preparation to get hired fast." />
        
        {/* Comprehensive Keyword Strategy */}
        <meta name="keywords" content="
          job search tips,
          how to find a job 2026,
          job hunting strategies,
          online job search,
          offline job search,
          networking tips,
          linkedin optimization,
          ATS resume tips,
          interview preparation,
          career advice 2026,
          job search techniques,
          professional networking,
          resume writing tips,
          cover letter advice,
          job application strategies,
          career development,
          employment search,
          job market 2026,
          remote job search,
          hybrid work opportunities,
          career transition tips,
          job search motivation,
          salary negotiation tips,
          interview questions preparation,
          job search success stories,
          career coaching tips,
          professional development,
          job search guide,
          employment opportunities,
          career growth strategies
        " />
        
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/job-search-tips" />

        {/* Open Graph / Social Media - Enhanced */}
        <meta property="og:title" content="Job Search Tips 2026: Ultimate Guide to Land Your Dream Job Faster" />
        <meta property="og:description" content="50+ proven job search strategies for 2026. Master LinkedIn optimization, networking, ATS resumes, and interview techniques to accelerate your career." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/job-search-tips-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/job-search-tips" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content="2026-01-15T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-05-01T00:00:00+00:00" />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Advice" />
        <meta property="article:tag" content="job search, career advice, networking, resume tips" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Search Tips 2026: Ultimate Guide to Land Your Dream Job" />
        <meta name="twitter:description" content="50+ proven job search strategies for 2026. Master LinkedIn optimization, networking, ATS resumes, and interview techniques." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/job-search-tips-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content="15 minutes" />
        <meta name="twitter:label2" content="Tips included" />
        <meta name="twitter:data2" content="50+" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Job Search Tips 2026: Ultimate Guide to Land Your Dream Job Faster",
              "description": "A comprehensive guide to effective job search techniques for 2026, including digital tools, networking strategies, ATS optimization, and mindset techniques to accelerate your career growth.",
              "image": "https://www.professionalresumefree.com/images/job-search-tips-preview.jpg",
              "author": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "url": "https://www.professionalresumefree.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ProfessionalResumeFree",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.professionalresumefree.com/images/logo.png"
                }
              },
              "datePublished": "2026-01-15",
              "dateModified": "2026-05-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/job-search-tips"
              },
              "articleSection": "Career Advice",
              "keywords": "job search tips, career advice, networking strategies, resume optimization, interview preparation, LinkedIn tips, ATS resume, job hunting techniques",
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content"
                ]
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
                  "name": "What are the most effective job search strategies for 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most effective job search strategies for 2026 include LinkedIn optimization, targeted networking, ATS-friendly resume customization, direct company outreach, and leveraging both online platforms and offline connections for comprehensive coverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I optimize my LinkedIn profile for job search in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Optimize your LinkedIn profile by using a professional photo, crafting a compelling headline, writing a detailed summary with keywords, showcasing achievements with metrics, gathering recommendations, and actively engaging with industry content to increase visibility."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What percentage of jobs are found through networking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Approximately 80% of jobs are found through networking, making it the most effective job search strategy. Building professional relationships and leveraging connections significantly increases your chances of finding hidden opportunities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I tailor my resume for ATS systems in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tailor your resume for ATS systems by using relevant keywords from job descriptions, maintaining a clean format without graphics, using standard section headings, including both acronyms and full terms for skills, and ensuring your resume is easily scannable by automated systems."
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
                  "name": "Career Resources",
                  "item": "https://www.professionalresumefree.com/career-resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Job Search Tips 2026",
                  "item": "https://www.professionalresumefree.com/job-search-tips"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Enhanced Hero Section with SEO-rich Content */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiAward className={styles.tagIcon} />
              Ultimate Career Success Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              Professional <span className={styles.gradientText}>Job Search Strategies</span> for 2026
            </h1>
            <p className={styles.heroSubtitle}>
              Master <strong>50+ proven job search techniques</strong> to land your dream job faster in the competitive 2026 market. 
              Learn LinkedIn optimization, networking secrets, ATS resume tips, and interview strategies that deliver results.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Create ATS-Optimized Resume
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#strategies" className={styles.secondaryButton}>
                Explore 50+ Job Search Tips
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>✓ LinkedIn Optimization</span>
              <span className={styles.featureBadge}>✓ Networking Strategies</span>
              <span className={styles.featureBadge}>✓ ATS Resume Tips</span>
              <span className={styles.featureBadge}>✓ Interview Preparation</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Job Search Strategies Section */}
      <section id="strategies" className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Job Search Strategies for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Maximize your opportunities with these <strong>proven online and offline techniques</strong> designed for today's competitive job market
            </p>
          </div>
          
          <div className={styles.strategiesGrid}>
            <div className={styles.strategyColumn}>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>💻</span>
                <div className={styles.columnTitle}>
                  <h3>Digital Job Search Mastery</h3>
                  <p>Online strategies for the modern job seeker</p>
                </div>
              </div>
              <div className={styles.tipsGrid}>
                {onlineTips.map((tip, index) => (
                  <div key={index} className={styles.tipCard}>
                    <div className={styles.tipIcon}>{tip.icon}</div>
                    <div className={styles.tipContent}>
                      <h4 className={styles.tipTitle}>{tip.title}</h4>
                      <p className={styles.tipDescription}>{tip.content}</p>
                    </div>
                    <div className={styles.tipNumber}>{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.strategyColumn}>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>🤲</span>
                <div className={styles.columnTitle}>
                  <h3>Traditional Networking Excellence</h3>
                  <p>Offline techniques that build real connections</p>
                </div>
              </div>
              <div className={styles.tipsGrid}>
                {offlineTips.map((tip, index) => (
                  <div key={index} className={styles.tipCard}>
                    <div className={styles.tipIcon}>{tip.icon}</div>
                    <div className={styles.tipContent}>
                      <h4 className={styles.tipTitle}>{tip.title}</h4>
                      <p className={styles.tipDescription}>{tip.content}</p>
                    </div>
                    <div className={styles.tipNumber}>{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Enhanced Motivation Section */}
      <section className={styles.motivationSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Stay Motivated on Your 2026 Job Search Journey</h2>
            <p className={styles.sectionSubtitle}>
              The right opportunity is worth the effort. Maintain momentum with these proven mindset strategies.
            </p>
          </div>
          
          <div className={styles.motivationContent}>
            <div className={styles.quotesSection}>
              <h3 className={styles.motivationSubtitle}>
                <FiAward className={styles.motivationIcon} />
                Career Inspiration for 2026
              </h3>
              <div className={styles.quotesGrid}>
                {motivationalQuotes.map((item, index) => (
                  <div key={index} className={styles.quoteCard}>
                    <blockquote className={styles.quote}>"{item.quote}"</blockquote>
                    <cite className={styles.author}>- {item.author}</cite>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.tipsSection}>
              <h3 className={styles.motivationSubtitle}>
                <FiCheck className={styles.motivationIcon} />
                Success Mindset for 2026 Job Search
              </h3>
              <ul className={styles.successTipsList}>
                {successTips.map((tip, index) => (
                  <li key={index} className={styles.successTip}>
                    <FiCheck className={styles.tipIcon} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.progressReminder}>
            <div className={styles.progressIcon}>📈</div>
            <div className={styles.progressText}>
              <h3>Track Your 2026 Job Search Progress</h3>
              <p>Every application, interview, and networking connection moves you forward. Use our free tools to monitor your achievements and stay motivated throughout your career journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your 2026 Job Search?</h2>
            <p className={styles.ctaSubtitle}>
              Create a <strong>professional, ATS-optimized resume</strong> that gets you noticed by top employers. 
              Combine these job search strategies with a standout resume to accelerate your career growth.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Build Your Free Resume Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <FiTarget className={styles.featureIcon} />
                <span>ATS-Friendly Templates</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiTrendingUp className={styles.featureIcon} />
                <span>Interview-Winning Designs</span>
              </div>
              <div className={styles.ctaFeature}>
                <FiGlobe className={styles.featureIcon} />
                <span>Global Resume Formats</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSearchTips;