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
  FiArrowRight
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
      {/* SEO Meta Tags */}
      <Head>
        <title>Job Search Tips 2024: Online & Offline Strategies to Land Your Dream Job</title>
        <meta name="description" content="Discover proven job search tips for 2024 — from LinkedIn optimization to networking and follow-up strategies. Get hired faster with our expert guide." />
        <meta name="keywords" content="job search tips, how to find a job, online job search, offline job search, networking tips, job hunting strategies" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/job-search-tips" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Job Search Tips 2024: Online & Offline Strategies to Land Your Dream Job" />
        <meta property="og:description" content="Step-by-step guide to finding your next job using proven online and offline techniques. Includes motivation, networking, and ATS tips." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/job-search-tips-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/job-search-tips" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Search Tips 2024: Online & Offline Strategies to Land Your Dream Job" />
        <meta name="twitter:description" content="Step-by-step guide to finding your next job using proven online and offline techniques. Includes motivation, networking, and ATS tips." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/job-search-tips-preview.jpg" />
        <meta name="twitter:site" content="@ProfessionalResumeFree" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Job Search Tips 2024: Online & Offline Strategies to Land Your Dream Job",
              "description": "A comprehensive guide to effective job search techniques, including digital tools, networking, and mindset strategies.",
              "image": "https://www.professionalresumefree.com/images/job-search-tips-preview.jpg",
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
              "datePublished": "2024-01-15",
              "dateModified": "2024-05-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/job-search-tips"
              },
              "articleSection": "Career Advice"
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <FiAward className={styles.tagIcon} />
              Career Success Guide
            </div>
            <h1 className={styles.heroTitle}>
              Professional <span className={styles.gradientText}>Job Search</span> Guide
            </h1>
            <p className={styles.heroSubtitle}>
              Master proven strategies to land your dream job faster with our expert tips and techniques
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Create Your Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#strategies" className={styles.secondaryButton}>
                Explore Strategies
              </a>
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

      {/* Job Search Strategies Section */}
      <section id="strategies" className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Job Search Strategies</h2>
            <p className={styles.sectionSubtitle}>
              Maximize your opportunities with these proven online and offline techniques
            </p>
          </div>
          
          <div className={styles.strategiesGrid}>
            <div className={styles.strategyColumn}>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>💻</span>
                <h3>Online Job Search Tips</h3>
              </div>
              <div className={styles.tipsGrid}>
                {onlineTips.map((tip, index) => (
                  <div key={index} className={styles.tipCard}>
                    <div className={styles.tipIcon}>{tip.icon}</div>
                    <h4 className={styles.tipTitle}>{tip.title}</h4>
                    <p className={styles.tipContent}>{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.strategyColumn}>
              <div className={styles.columnHeader}>
                <span className={styles.columnIcon}>🤲</span>
                <h3>Offline Job Search Tips</h3>
              </div>
              <div className={styles.tipsGrid}>
                {offlineTips.map((tip, index) => (
                  <div key={index} className={styles.tipCard}>
                    <div className={styles.tipIcon}>{tip.icon}</div>
                    <h4 className={styles.tipTitle}>{tip.title}</h4>
                    <p className={styles.tipContent}>{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className={styles.motivationSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Stay Motivated on Your Journey</h2>
            <p className={styles.sectionSubtitle}>
              The right opportunity is worth the effort
            </p>
          </div>
          
          <div className={styles.motivationContent}>
            <div className={styles.quotesSection}>
              <h3 className={styles.motivationSubtitle}>
                <FiAward className={styles.motivationIcon} />
                Words of Inspiration
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
                Mindset Tips for Success
              </h3>
              <ul className={styles.successTipsList}>
                {successTips.map((tip, index) => (
                  <li key={index} className={styles.successTip}>
                    <FiCheck className={styles.tipIcon} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.progressReminder}>
            <div className={styles.progressIcon}>📈</div>
            <div className={styles.progressText}>
              <h3>Remember Your Progress</h3>
              <p>Every application, interview, and networking connection is moving you forward. Track your activities to see how far you've come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Elevate Your Job Search?</h2>
            <p className={styles.ctaSubtitle}>
              Create a standout resume that gets you noticed by employers and hiring managers.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-resume-builder" className={styles.ctaButton}>
                Build Your Resume Now
                <FiArrowRight className={styles.buttonIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSearchTips;