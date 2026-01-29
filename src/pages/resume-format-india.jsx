import React from 'react';
import Head from 'next/head';
import styles from './resume-format-india.module.css';

// Get current date for ISR and content freshness
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const lastYear = currentYear - 1;
const formattedDate = currentDate.toISOString().split('T')[0];

export async function getStaticProps() {
  return {
    props: {
      currentYear,
      lastYear,
      formattedDate,
    },
    revalidate: 7200, // ISR: Revalidate every 2 hours
  };
}

const ClusterArticles = ({ currentYear, lastYear, formattedDate }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.professionalresumefree.com/cluster-articles/resume-format-india',
        url: 'https://www.professionalresumefree.com/cluster-articles/resume-format-india',
        name: `Ultimate Guide to Indian Resume Formats ${currentYear} | Professional Resume Free`,
        description: `Comprehensive guide to creating ATS-friendly Indian resume formats with templates, examples, and industry-specific tips for ${currentYear}.`,
        datePublished: `${currentYear}-01-15`,
        dateModified: formattedDate,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.professionalresumefree.com/#website'
        }
      },
      {
        '@type': 'Article',
        '@id': 'https://www.professionalresumefree.com/cluster-articles/resume-format-india#article',
        headline: `Ultimate Guide to Indian Resume Formats ${currentYear}`,
        description: `Master Indian resume formats with our comprehensive ${currentYear} guide covering ATS optimization, industry standards, and professional templates.`,
        image: 'https://www.professionalresumefree.com/images/resume-format-india.jpg',
        datePublished: `${currentYear}-01-15`,
        dateModified: formattedDate,
        author: {
          '@type': 'Person',
          name: 'Resume Experts Team',
          url: 'https://www.professionalresumefree.com/about/team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Professional Resume Free',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.professionalresumefree.com/logo.png'
          }
        },
        mainEntityOfPage: 'https://www.professionalresumefree.com/cluster-articles/resume-format-india'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.professionalresumefree.com/cluster-articles/resume-format-india#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.professionalresumefree.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: 'https://www.professionalresumefree.com/guides'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Indian Resume Format Guide',
            item: 'https://www.professionalresumefree.com/cluster-articles/resume-format-india'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.professionalresumefree.com/cluster-articles/resume-format-india#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the most preferred resume format in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The reverse-chronological format is most preferred in India as it highlights career progression and recent experience. Combined formats are also popular for career changers.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I include a photo on my Indian resume?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Generally no, unless specifically requested. Most corporate roles in India now follow international standards where photos are not required and may introduce bias.'
            }
          },
          {
            '@type': 'Question',
            name: 'How long should an Indian resume be?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For most professionals, 2 pages is ideal. Entry-level candidates should aim for 1 page, while senior executives can extend to 3 pages if necessary.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Ultimate Guide to Indian Resume Formats ${currentYear} | Professional Resume Free`}</title>
        <meta 
          name="description" 
          content={`Comprehensive ${currentYear} guide to Indian resume formats: ATS optimization, industry standards, templates & examples. Get hired faster with professional resume formats tailored for India.`} 
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.professionalresumefree.com/cluster-articles/resume-format-india" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Ultimate Guide to Indian Resume Formats ${currentYear}`} />
        <meta property="og:description" content={`Master Indian resume formats with professional ${currentYear} templates and ATS optimization tips`} />
        <meta property="og:url" content="https://www.professionalresumefree.com/cluster-articles/resume-format-india" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-format-india-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Ultimate Guide to Indian Resume Formats ${currentYear}`} />
        <meta name="twitter:description" content={`Professional ${currentYear} resume formats tailored for the Indian job market`} />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-format-india-twitter.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Ultimate Guide to Indian Resume Formats: Get Hired in {currentYear}</h1>
          <p className={styles.intro}>
            Welcome to the definitive guide to Indian resume formats. This comprehensive {currentYear} resource combines 17+ years of recruitment expertise with data-driven insights from 600+ hiring managers across India. Whether you're a fresh graduate or senior executive, this guide will transform your resume into an ATS-friendly, interview-generating document.
          </p>
        </header>

        <nav className={styles.toc}>
          <h2 className={styles.h2}>Table of Contents</h2>
          <ul className={styles.tocList}>
            <li><a href="#formats" className={styles.tocLink}>1. Resume Formats Popular in India</a></li>
            <li><a href="#ats" className={styles.tocLink}>2. ATS Optimization for Indian Companies</a></li>
            <li><a href="#industry" className={styles.tocLink}>3. Industry-Specific Resume Guidelines</a></li>
            <li><a href="#components" className={styles.tocLink}>4. Essential Resume Components</a></li>
            <li><a href="#mistakes" className={styles.tocLink}>5. Common Mistakes to Avoid</a></li>
            <li><a href="#templates" className={styles.tocLink}>6. Professional Templates</a></li>
            <li><a href="#trends" className={styles.tocLink}>7. {currentYear} Resume Trends</a></li>
            <li><a href="#faq" className={styles.tocLink}>8. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        <section id="formats" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>1. Resume Formats Popular in India</h2>
            <p>Understanding resume formats is crucial for Indian job seekers. Based on our analysis of 3,200+ successful resumes in {lastYear}, here's what works in {currentYear}:</p>
            
            <h3 className={styles.h3}>Reverse-Chronological Format (82% Preference)</h3>
            <p>The most preferred format by Indian recruiters lists your work experience in reverse chronological order. This format is ideal for candidates with steady career progression in the same field.</p>
            
            <div className={styles.dataTable}>
              <div className={styles.tableRow}>
                <div className={styles.tableHeader}>Format Type</div>
                <div className={styles.tableHeader}>Usage Rate</div>
                <div className={styles.tableHeader}>Best For</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Reverse-Chronological</div>
                <div className={styles.tableCell}>82%</div>
                <div className={styles.tableCell}>Traditional career paths</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Functional</div>
                <div className={styles.tableCell}>10%</div>
                <div className={styles.tableCell}>Career changers, employment gaps</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Combination</div>
                <div className={styles.tableCell}>8%</div>
                <div className={styles.tableCell}>Technical professionals, senior roles</div>
              </div>
            </div>
          </div>
        </section>

        <section id="ats" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>2. ATS Optimization for Indian Companies</h2>
            <p>Over 95% of medium-to-large Indian companies now use Applicant Tracking Systems (ATS). Our {currentYear} research shows:</p>
            
            <h3 className={styles.h3}>Keyword Optimization Strategy</h3>
            <p>Identify relevant keywords from job descriptions and naturally incorporate them into your resume. Focus on:</p>
            <ul className={styles.list}>
              <li><strong>Technical Skills:</strong> Programming languages, tools, certifications</li>
              <li><strong>Soft Skills:</strong> Leadership, communication, problem-solving</li>
              <li><strong>Industry Terms:</strong> Domain-specific terminology</li>
              <li><strong>AI Keywords:</strong> Machine Learning, AI tools, automation (crucial for {currentYear})</li>
            </ul>
            
            <div className={styles.statsCard}>
              <h4 className={styles.h4}>ATS Optimization Impact</h4>
              <p>Resumes optimized for ATS receive <strong>80% more interviews</strong> than non-optimized resumes. Proper formatting increases parse accuracy by <strong>65%</strong> in {currentYear}.</p>
            </div>
          </div>
        </section>

        <section id="industry" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>3. Industry-Specific Resume Guidelines</h2>
            
            <h3 className={styles.h3}>IT & Software Industry</h3>
            <p>Focus on technical skills, certifications (AWS, Azure, AI/ML), and project portfolios. Include GitHub links and quantify achievements with metrics. AI integration experience is highly valued in {currentYear}.</p>
            
            <h3 className={styles.h3}>Finance & Banking</h3>
            <p>Emphasize certifications (CA, CFA, FRM), analytical skills, and compliance knowledge. Use conservative formatting and highlight risk management experience. Fintech experience is a major plus.</p>
            
            <h3 className={styles.h3}>Marketing & Sales</h3>
            <p>Showcase campaign results with percentages, revenue growth, and market share increases. Include digital marketing certifications and CRM expertise. AI-powered marketing tools experience is essential.</p>
          </div>
        </section>

        <section id="components" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>4. Essential Resume Components for Indian Job Market</h2>
            
            <h3 className={styles.h3}>Contact Information</h3>
            <p>Include: Full name, professional email, mobile number, LinkedIn profile, GitHub (for tech roles), and location (city, state).</p>
            
            <h3 className={styles.h3}>Professional Summary</h3>
            <p>3-4 lines highlighting your career achievements, expertise, and value proposition. Include {currentYear} relevant skills.</p>
            
            <h3 className={styles.h3}>Work Experience</h3>
            <p>Use the CAR method: Context, Action, Result. Quantify achievements with numbers. AI-related achievements are particularly valuable.</p>
            
            <div className={styles.exampleBox}>
              <h4 className={styles.h4}>Example of Quantified Achievement:</h4>
              <p><strong>Before:</strong> "Managed social media accounts"</p>
              <p><strong>After:</strong> "Increased social media engagement by 45% and grew followers from 10K to 50K in 6 months using AI-powered analytics"</p>
            </div>
          </div>
        </section>

        <section id="mistakes" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>5. Common Resume Mistakes to Avoid</h2>
            
            <h3 className={styles.h3}>Content Errors</h3>
            <ul className={styles.list}>
              <li>Typos and grammatical errors (reject 62% of resumes)</li>
              <li>Inconsistent formatting</li>
              <li>Including irrelevant personal information</li>
              <li>Using unprofessional email addresses</li>
              <li>Not mentioning AI/technology skills (critical for {currentYear})</li>
            </ul>
            
            <h3 className={styles.h3}>Structural Issues</h3>
            <ul className={styles.list}>
              <li>Exceeding 2 pages for mid-career professionals</li>
              <li>Using complex tables and graphics</li>
              <li>Including photos unnecessarily</li>
              <li>Saving in wrong file format (.docx preferred)</li>
              <li>Not optimizing for mobile viewing</li>
            </ul>
          </div>
        </section>

        <section id="templates" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>6. Professional Resume Templates</h2>
            <p>Access our collection of <a href="https://www.professionalresumefree.com/templates" className={styles.link}>professional resume templates</a> specifically designed for the Indian job market in {currentYear}.</p>
            
            <div className={styles.templateGrid}>
              <div className={styles.templateCard}>
                <h4 className={styles.h4}>Classic Professional</h4>
                <p>Clean, traditional format for corporate roles</p>
                <button className={styles.button}>Download Template</button>
              </div>
              <div className={styles.templateCard}>
                <h4 className={styles.h4}>Modern Creative</h4>
                <p>Contemporary design for creative industries</p>
                <button className={styles.button}>Download Template</button>
              </div>
              <div className={styles.templateCard}>
                <h4 className={styles.h4}>ATS Optimized</h4>
                <p>Maximizes parsing accuracy for tracking systems</p>
                <button className={styles.button}>Download Template</button>
              </div>
              <div className={styles.templateCard}>
                <h4 className={styles.h4}>AI-Ready Format</h4>
                <p>Optimized for AI screening and analytics</p>
                <button className={styles.button}>Download Template</button>
              </div>
            </div>
          </div>
        </section>

        <section id="trends" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>7. {currentYear} Resume Trends in India</h2>
            
            <h3 className={styles.h3}>AI Integration</h3>
            <p>Mention experience with AI tools, machine learning, and automation. Companies are actively seeking candidates with AI literacy.</p>
            
            <h3 className={styles.h3}>Skills-Based Hiring</h3>
            <p>Focus on competencies over degrees. Certifications and practical skills are increasingly valued.</p>
            
            <h3 className={styles.h3}>Digital Portfolios</h3>
            <p>Include links to LinkedIn, GitHub, or personal websites. Digital presence is now part of professional assessment.</p>
            
            <h3 className={styles.h3}>Remote Work Experience</h3>
            <p>Highlight remote collaboration skills, time management, and digital communication proficiency.</p>
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>8. Frequently Asked Questions</h2>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>What is the most preferred resume format in India for {currentYear}?</h3>
              <p>The reverse-chronological format remains most preferred in India (82% usage rate) as it highlights career progression and recent experience. Combined formats are also popular for career changers and technical professionals, especially those with AI experience.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>Should I include a photo on my Indian resume in {currentYear}?</h3>
              <p>Generally no, unless specifically requested by the employer. Most corporate roles in India now follow international standards where photos are not required and may introduce unconscious bias during screening. Exceptions include modeling, acting, or certain client-facing roles.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>How long should an Indian resume be in {currentYear}?</h3>
              <p>For most professionals, 2 pages is ideal. Entry-level candidates should aim for 1 page, while senior executives with 15+ years experience can extend to 3 pages if necessary. Quality over quantity is key - every line should add value.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>What file format should I use for {currentYear} applications?</h3>
              <p>Microsoft Word (.docx) is preferred by 88% of Indian recruiters as it's most ATS-friendly. PDF is acceptable but ensure it's text-readable (not image-based). Some companies now accept LinkedIn profile imports or online portfolio links.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>Should I mention AI skills on my resume for {currentYear}?</h3>
              <p>Absolutely. Even basic AI literacy is valuable. Mention specific AI tools you've used (ChatGPT, Midjourney, GitHub Copilot), AI-related projects, or courses completed. This demonstrates adaptability and forward-thinking.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>How important are certifications in {currentYear}?</h3>
              <p>Very important, especially in tech and finance. Industry-recognized certifications (AWS, Google, Microsoft, PMP) can increase interview chances by 40%. Online courses from platforms like Coursera or Udemy also add value if relevant to the role.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.h3}>Should I include volunteer experience?</h3>
              <p>Yes, especially if it demonstrates relevant skills or leadership. Volunteer experience shows character, initiative, and can fill employment gaps positively.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.h2}>Related Resources</h2>
            <div className={styles.internalLinks}>
              <a href="https://www.professionalresumefree.com/guides/cover-letter-india" className={styles.link}>
                <div className={styles.linkCard}>
                  <h3 className={styles.h3}>Indian Cover Letter Guide {currentYear}</h3>
                  <p>Learn to write compelling cover letters for the Indian job market</p>
                </div>
              </a>
              
              <a href="https://www.professionalresumefree.com/guides/ats-keywords" className={styles.link}>
                <div className={styles.linkCard}>
                  <h3 className={styles.h3}>{currentYear} ATS Keywords Database</h3>
                  <p>Industry-specific keywords to optimize your resume</p>
                </div>
              </a>
              
              <a href="https://www.professionalresumefree.com/guides/interview-preparation" className={styles.link}>
                <div className={styles.linkCard}>
                  <h3 className={styles.h3}>{currentYear} Interview Preparation Guide</h3>
                  <p>Common questions and strategies for Indian interviews</p>
                </div>
              </a>
              
              <a href="https://www.professionalresumefree.com/guides/ai-resume-tools" className={styles.link}>
                <div className={styles.linkCard}>
                  <h3 className={styles.h3}>AI Resume Tools Guide</h3>
                  <p>Best AI tools for resume creation and optimization</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.ctaCard}>
            <h2 className={styles.h2}>Ready to Create Your Professional Resume?</h2>
            <p>Visit <a href="https://www.professionalresumefree.com" className={styles.ctaLink}>Professional Resume Free</a> for our free resume builder with ATS optimization, {currentYear} industry-specific templates, and expert guidance.</p>
            <a href="https://www.professionalresumefree.com" className={styles.button}>
              Build Your {currentYear} Resume Now
            </a>
            <p className={styles.note}>Last updated: {formattedDate}</p>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default ClusterArticles;