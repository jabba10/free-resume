import Head from 'next/head';
import styles from './resume-skills-section.module.css';

export const getStaticProps = async () => {
  const metadata = {
    title: 'Resume Skills Section Guide | ProfessionalResumeFree',
    description:
      'Master the resume skills section with expert strategies, examples, and formatting tips to impress employers and pass ATS systems.',
    url: 'https://www.professionalresumefree.com/resume-skills-section',
    siteName: 'ProfessionalResumeFree',
    image: 'https://www.professionalresumefree.com/images/resume-skills-section-guide-og.jpg',
    twitterHandle: '@profresumefree',
  };

  const faqItems = [
    {
      question: 'What is a resume skills section?',
      answer:
        'It is a dedicated part of your resume where you highlight your most relevant hard and soft skills for a specific job.',
    },
    {
      question: 'How many skills should I list?',
      answer:
        'Most resumes perform best with 8–15 targeted skills that match the job description.',
    },
    {
      question: 'Should I separate hard and soft skills?',
      answer:
        'Yes. Grouping skills improves readability and helps recruiters quickly identify your strengths.',
    },
    {
      question: 'Where should the skills section go?',
      answer:
        'Place it near the top if your skills are a major selling point. Otherwise, place it after your summary.',
    },
    {
      question: 'How do I tailor my skills?',
      answer:
        'Mirror the employer’s language from the job description while staying honest about your experience.',
    },
    {
      question: 'Can I include proficiency levels?',
      answer:
        'Yes, but only if you can back them up with real examples during interviews.',
    },
    {
      question: 'Is a skills-based resume format good?',
      answer:
        'It works well for career changers or those with gaps, but most recruiters still expect a clear work history.',
    },
  ];

  return {
    props: { metadata, faqItems },
    revalidate: 7200, // ISR: Regenerate every 2 hours
  };
};

export default function ResumeSkillsClusterPage({ metadata, faqItems }) {
  const primaryKeyword = 'resume skills section';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': metadata.url },
    headline: 'How to Write a High-Impact Resume Skills Section',
    description: metadata.description,
    image: [metadata.image],
    author: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      url: 'https://www.professionalresumefree.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.professionalresumefree.com/images/logo.png',
      },
    },
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.professionalresumefree.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resume Guides',
        item: 'https://www.professionalresumefree.com/resume-skills-section',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Resume Skills Section Guide',
        item: metadata.url,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resume Skills Section Guide',
    url: metadata.url,
    description: metadata.description,
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.url} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:site" content={metadata.twitterHandle} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
      </Head>

      <main className={styles.pageWrapper}>
        <div className={styles.container}>
          {/* HEADER */}
          <header className={styles.header}>
            

            <h1 className={styles.title}>
              RESUME SKILLS SECTION: Build a High-Impact Skills Hub That Gets
              You Hired
            </h1>

            <p className={styles.subtitle}>
              A complete, experience-backed guide to crafting a resume skills
              section that passes ATS filters, impresses hiring managers, and
              strengthens your entire resume strategy.
            </p>

            <div className={styles.metaRow}>
              <span className={styles.metaItem}>Experience Level: All</span>
              <span className={styles.metaItem}>Reading Time: 12–15 minutes</span>
              <span className={styles.metaItem}>Updated: January 29, 2026</span>
            </div>

            <div className={styles.buttonRow}>
              <a
                href="/resume-templates"
                className={styles.primaryButton}
              >
                Resume Templates
              </a>
              <a
                href="/free-resume-tools"
                className={styles.secondaryButton}
              >
                Free Resume Tools
              </a>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Table of Contents</h2>
            <ul className={styles.tocList}>
              <li>
                <a href="#why-skills-matter" className={styles.tocLink}>
                  Why Your Skills Section Matters
                </a>
              </li>
              <li>
                <a href="#types-of-skills" className={styles.tocLink}>
                  Hard Skills vs. Soft Skills vs. Transferable Skills
                </a>
              </li>
              <li>
                <a href="#formatting" className={styles.tocLink}>
                  Formatting Strategies
                </a>
              </li>
              <li>
                <a href="#tailoring" className={styles.tocLink}>
                  Tailoring Your Skills to Each Job
                </a>
              </li>
              <li>
                <a href="#examples" className={styles.tocLink}>
                  Skills Section Examples by Role
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.tocLink}>
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </section>

          {/* SECTION 1 */}
          <section id="why-skills-matter" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Why Your {primaryKeyword} Matters More Than You Think
            </h2>

            <p className={styles.paragraph}>
              Recruiters scan resumes in seconds. They’re not reading—they’re
              searching for proof that you can do the job. Your skills section
              is one of the fastest ways to communicate that proof. It acts as a
              high-level snapshot of your capabilities aligned with the role.
            </p>

            <p className={styles.paragraph}>
              Modern hiring relies heavily on Applicant Tracking Systems (ATS).
              These systems scan resumes for specific keywords. If your skills
              section is vague or generic, your resume may never reach a human
              reviewer. A well-structured skills section dramatically increases
              your chances of passing ATS filters.
            </p>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Key Hiring Insights (2026)</h3>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Hiring Insight</th>
                      <th>What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Recruiters scan resumes in <strong>under 7 seconds</strong></td>
                      <td>Skills must be instantly visible and relevant.</td>
                    </tr>
                    <tr>
                      <td>98% of Fortune 500 companies use ATS</td>
                      <td>Precise keyword matching is non-negotiable in 2026.</td>
                    </tr>
                    <tr>
                      <td>Skills validate your experience</td>
                      <td>
                        Every listed skill must be demonstrable in your work history.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="types-of-skills" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Hard Skills vs. Soft Skills vs. Transferable Skills
            </h2>

            <p className={styles.paragraph}>
              A strong resume includes a balanced mix of hard, soft, and
              transferable skills. Hard skills are technical and measurable.
              Soft skills describe how you work with others. Transferable skills
              apply across roles and industries.
            </p>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Skill Type Comparison (2026)</h3>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Skill Type</th>
                      <th>Examples</th>
                      <th>Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hard Skills</td>
                      <td>Python, Excel, SEO, SQL, AI Prompt Engineering</td>
                      <td>Highlight in skills section and experience bullets.</td>
                    </tr>
                    <tr>
                      <td>Soft Skills</td>
                      <td>Adaptability, Cross-functional Collaboration, Emotional Intelligence</td>
                      <td>Demonstrate through quantifiable achievements.</td>
                    </tr>
                    <tr>
                      <td>Transferable Skills</td>
                      <td>Project Management, Strategic Planning, Budget Oversight</td>
                      <td>Critical for career changers and leadership roles.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="formatting" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Formatting Strategies for a High-Impact Skills Section
            </h2>

            <p className={styles.paragraph}>
              Formatting affects how quickly recruiters understand your value.
              Use clear headings, short lists, and grouped categories to improve
              readability and ATS parsing.
            </p>

            <h3 className={styles.subheading}>Step-by-Step Formatting (2026 Best Practices)</h3>

            <ol className={styles.orderedList}>
              <li className={styles.listItem}>
                Use a clear heading: "Skills", "Core Competencies", or "Technical Proficiencies"
              </li>
              <li className={styles.listItem}>
                Group related skills with subheadings (e.g., "Programming Languages", "Analytics Tools")
              </li>
              <li className={styles.listItem}>
                Prioritize relevance: Place job-specific skills first
              </li>
              <li className={styles.listItem}>
                Include 8-12 targeted skills maximum to avoid dilution
              </li>
              <li className={styles.listItem}>
                Verify every skill appears in your experience section with proof points
              </li>
            </ol>
          </section>

          {/* SECTION 4 */}
          <section id="tailoring" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              How to Tailor Your Skills to Each Job Description (2026 Method)
            </h2>

            <p className={styles.paragraph}>
              Tailoring your skills is the #1 most effective way to improve interview rates in today's competitive market. Start by extracting keywords from the job description and aligning them with your verified experience.
            </p>

            <h3 className={styles.subheading}>Practical Workflow</h3>

            <ul className={styles.unorderedList}>
              <li className={styles.listItem}>
                Identify repeated keywords and required competencies in the job posting
              </li>
              <li className={styles.listItem}>
                Map each keyword to specific projects or achievements in your background
              </li>
              <li className={styles.listItem}>
                Prioritize skills mentioned in the top third of the job description
              </li>
              <li className={styles.listItem}>
                Mirror employer language precisely (e.g., "Google Analytics 4" not just "Analytics")
              </li>
              <li className={styles.listItem}>
                Remove outdated or irrelevant skills to maintain focus
              </li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section id="examples" className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Resume Skills Section Examples by Role (2026)
            </h2>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Software Engineer</h3>
              <p className={styles.paragraph}>
                <strong>Programming:</strong> Python, TypeScript, Rust, SQL • 
                <strong>Frameworks:</strong> React, Node.js, Django • 
                <strong>Tools:</strong> Git, Docker, AWS, Kubernetes • 
                <strong>Practices:</strong> CI/CD, TDD, Agile/Scrum
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Marketing Specialist</h3>
              <p className={styles.paragraph}>
                <strong>Digital:</strong> SEO/SEM, Google Analytics 4, Meta Ads • 
                <strong>Content:</strong> Copywriting, A/B Testing, Email Marketing • 
                <strong>Tools:</strong> HubSpot, Canva, Mailchimp, Asana • 
                <strong>Analytics:</strong> ROI Tracking, Conversion Optimization
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>Project Manager</h3>
              <p className={styles.paragraph}>
                <strong>Methodologies:</strong> Agile, Scrum, Waterfall • 
                <strong>Tools:</strong> Jira, Trello, MS Project, Smartsheet • 
                <strong>Skills:</strong> Budget Management ($500K+), Stakeholder Communication, Risk Mitigation, Cross-functional Leadership
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className={styles.section}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions (Updated 2026)</h2>

            <div className={styles.faqWrapper}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Next Steps: Build a Resume That Gets Results in 2026
            </h2>

            <p className={styles.paragraph}>
              Now that you understand how to build a powerful {primaryKeyword},
              it’s time to put your knowledge into action. Use the free, ATS-optimized tools at{' '}
              <a
                href="https://www.professionalresumefree.com"
                className={styles.inlineLink}
              >
                ProfessionalResumeFree.com
              </a>{' '}
              to create a polished, modern resume in minutes—no signup required.
            </p>

            <div className={styles.ctaRow}>
              <a
                href="/resume-templates"
                className={styles.primaryButton}
              >
                Start Building Your Resume (Free)
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}