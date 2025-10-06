'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiAward,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiSearch,
  FiRefreshCw,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';
import styles from './Careerblog.module.css';

const CareerBlog = () => {
  const [activeStep, setActiveStep] = useState(0);

  const careerDevelopmentStrategies = [
    {
      title: "Continuous Learning",
      content: "Stay relevant by acquiring new skills through courses, certifications, and workshops in your field.",
      icon: <FiTrendingUp className={styles.cardIcon} />,
      tips: [
        "Online learning platforms (Coursera, Udemy, LinkedIn Learning)",
        "Industry conferences and webinars",
        "Professional certification programs"
      ]
    },
    {
      title: "Networking",
      content: "Build and maintain professional relationships that can lead to new opportunities.",
      icon: <FiUsers className={styles.cardIcon} />,
      tips: [
        "Attend industry events and meetups",
        "Engage on professional platforms like LinkedIn",
        "Seek mentorship opportunities"
      ]
    },
    {
      title: "Goal Setting",
      content: "Create a clear career roadmap with measurable objectives and timelines.",
      icon: <FiTarget className={styles.cardIcon} />,
      tips: [
        "Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)",
        "Break large goals into smaller milestones",
        "Regularly review and adjust your goals"
      ]
    }
  ];

  const careerChangeStrategies = [
    {
      title: "Self-Assessment",
      content: "Evaluate your skills, interests, and values to identify suitable new career paths.",
      icon: <FiSearch className={styles.cardIcon} />,
      tips: [
        "Take career aptitude tests",
        "Identify transferable skills",
        "Consider work environment preferences"
      ]
    },
    {
      title: "Skill Transition",
      content: "Bridge the gap between your current skills and those needed in your target industry.",
      icon: <FiRefreshCw className={styles.cardIcon} />,
      tips: [
        "Identify skill gaps through job postings",
        "Take relevant courses or bootcamps",
        "Gain experience through volunteering or freelancing"
      ]
    },
    {
      title: "Strategic Job Search",
      content: "Tailor your approach when applying for positions in a new field.",
      icon: <FiUsers className={styles.cardIcon} />,
      tips: [
        "Adapt your resume to highlight transferable skills",
        "Leverage your network for introductions",
        "Consider entry-level positions to get your foot in the door"
      ]
    }
  ];

  const stats = [
    {
      value: "65%",
      label: "Workers considering career changes in 2024",
      icon: <FiTrendingUp className={styles.statIcon} />
    },
    {
      value: "3-6 mo",
      label: "Average transition time for successful career changes",
      icon: <FiTarget className={styles.statIcon} />
    },
    {
      value: "85%",
      label: "Success rate with structured career development plans",
      icon: <FiAward className={styles.statIcon} />
    }
  ];

  const testimonials = [
    {
      quote: "I successfully transitioned from marketing to UX design by identifying my transferable skills, completing a specialized course, and building a portfolio through freelance projects. It took planning and persistence, but was absolutely worth it.",
      author: "Sarah J., Career Changer",
      role: "Marketing to UX Design"
    }
  ];

  return (
    <div className={styles.careerBlog}>
      {/* SEO Meta Tags */}
      <Head>
        <title>How to Change Careers & Advance in 2024: A Step-by-Step Guide</title>
        <meta name="description" content="Learn proven career development and career change strategies. From skill assessment to networking and resume tips, this guide helps you transition successfully." />
        <meta name="keywords" content="career change, career development, how to change careers, career transition, career growth, professional development" />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/blog/career-development-guide" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="How to Change Careers & Advance in 2024: A Step-by-Step Guide" />
        <meta property="og:description" content="Actionable strategies for career development and successful career transitions. Learn how to assess skills, network, and land your dream role." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/career-blog-preview.jpg" />
        <meta property="og:url" content="https://www.professionalresumefree.com/blog/career-development-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Change Careers & Advance in 2024: A Step-by-Step Guide" />
        <meta name="twitter:description" content="Actionable strategies for career development and successful career transitions. Learn how to assess skills, network, and land your dream role." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/career-blog-preview.jpg" />
        <meta name="twitter:site" content="@ProfessionalResumeFree" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Change Careers & Advance in 2024: A Step-by-Step Guide",
              "description": "A comprehensive guide to career development and successful career transitions, including skill assessment, networking, and goal setting.",
              "image": "https://www.professionalresumefree.com/images/career-blog-preview.jpg",
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
              "datePublished": "2024-01-20",
              "dateModified": "2024-05-06",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/blog/career-development-guide"
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
              Career Development & <span className={styles.gradientText}>Transition</span> Guide
            </h1>
            <p className={styles.heroSubtitle}>
              Your roadmap to professional growth and successful career changes in 2024
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-resume-builder" className={styles.primaryButton}>
                Build Your Resume
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

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              Whether you're looking to advance in your current field or make a complete career change, 
              this guide provides actionable steps to help you achieve your professional goals.
            </p>
          </div>
        </div>
      </section>

      {/* Career Development Strategies */}
      <section id="strategies" className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Career Development Strategies</h2>
            <p className={styles.sectionSubtitle}>
              Proven approaches to advance and grow in your current career path
            </p>
          </div>
          
          <div className={styles.cardsGrid}>
            {careerDevelopmentStrategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconContainer}>
                    {strategy.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{strategy.title}</h3>
                </div>
                <p className={styles.cardContent}>{strategy.content}</p>
                <ul className={styles.tipsList}>
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className={styles.tipItem}>
                      <FiCheck className={styles.tipIcon} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Change Strategies */}
      <section className={styles.strategiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Changing Careers Successfully</h2>
            <p className={styles.sectionSubtitle}>
              Strategic steps to transition into a new field or industry
            </p>
          </div>
          
          <div className={styles.cardsGrid}>
            {careerChangeStrategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconContainer}>
                    {strategy.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{strategy.title}</h3>
                </div>
                <p className={styles.cardContent}>{strategy.content}</p>
                <ul className={styles.tipsList}>
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className={styles.tipItem}>
                      <FiCheck className={styles.tipIcon} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Advance Your Career?</h2>
            <p className={styles.ctaSubtitle}>
              Create a professional resume that showcases your skills and experiences effectively.
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

export default CareerBlog;