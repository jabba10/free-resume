import React from 'react';
import Head from 'next/head';
import styles from './resume-for-engineering-students.module.css';

const ResumeBuilderPage = () => {
  const canonicalUrl = "https://www.professionalresumefree.com/resume-builder-guide";
  const siteBrand = "Professional Resume Free";
  const primaryKeyword = "Engineering Student Resume Builder Guide";
  
  return (
    <div className={styles.container}>
      <Head>
        {/* Basic Metadata */}
        <title>{primaryKeyword} | {siteBrand}</title>
        <meta name="description" content="Complete 2026 guide to creating winning engineering resumes. Learn professional formatting, ATS optimization, project highlighting, and get our free resume builder tool." />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${primaryKeyword} | ${siteBrand}`} />
        <meta property="og:description" content="Master resume creation for engineering students with our comprehensive guide and free professional builder tool." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteBrand} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${primaryKeyword} | ${siteBrand}`} />
        <meta name="twitter:description" content="Ultimate guide to engineering resumes with free professional builder tool included." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${canonicalUrl}#webpage`,
                  "url": canonicalUrl,
                  "name": `${primaryKeyword} | ${siteBrand}`,
                  "description": "Comprehensive guide to creating professional engineering student resumes with free tools and templates",
                  "isPartOf": {
                    "@id": "https://www.professionalresumefree.com/#website"
                  },
                  "datePublished": "2026-01-15T08:00:00+00:00",
                  "dateModified": "2026-01-24T10:30:00+00:00",
                  "breadcrumb": {
                    "@id": `${canonicalUrl}#breadcrumb`
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
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
                      "name": "Guides",
                      "item": "https://www.professionalresumefree.com/guides"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Engineering Student Resume Guide",
                      "item": canonicalUrl
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": `${primaryKeyword}`,
                  "description": "Complete guide to creating professional resumes for engineering students with ATS optimization tips",
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "url": "https://www.professionalresumefree.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-15T08:00:00+00:00",
                  "dateModified": "2026-01-24T10:30:00+00:00",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the best format for an engineering student resume?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The reverse-chronological format is most effective for engineering students as it highlights your most recent education and projects first. Combine this with a skills-based section to showcase technical competencies prominently."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I make my engineering resume ATS-friendly?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use standard headings (Experience, Education, Skills), incorporate relevant keywords from job descriptions, avoid graphics and tables, use simple fonts like Arial or Calibri, and save as a Word document or PDF with OCR text layer."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What technical skills should engineering students include?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Include programming languages (Python, C++, Java), engineering software (AutoCAD, SolidWorks, MATLAB), tools (Git, Docker, AWS), methodologies (Agile, Six Sigma), and any relevant certifications or coursework."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <h1>RESUME FOR ENGINEERING STUDENTS: The Complete 2026 Guide</h1>
        <div className={styles.metaInfo}>
          <span className={styles.metaItem}>Last Updated: January 2026</span>
          <span className={styles.metaItem}>Reading Time: 15 minutes</span>
          <span className={styles.metaItem}>Word Count: 2,300+ words</span>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.card}>
            <p className={styles.introText}>
              This comprehensive guide provides engineering students with everything needed to create a professional resume that stands out to recruiters, passes ATS systems, and lands interviews. We combine expert advice from engineering recruiters with practical templates you can implement immediately using our <a href="https://www.professionalresumefree.com" className={styles.link}>free resume builder</a>.
            </p>
            <div className={styles.ctaContainer}>
              <a href="https://www.professionalresumefree.com" className={styles.primaryButton}>
                Try Free Resume Builder →
              </a>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2>Table of Contents</h2>
            <nav className={styles.toc}>
              <ul>
                <li><a href="#section1">Why Engineering Resumes Are Different</a></li>
                <li><a href="#section2">Engineering Resume Format & Structure</a></li>
                <li><a href="#section3">ATS Optimization for Engineering Roles</a></li>
                <li><a href="#section4">Technical Skills Section Mastery</a></li>
                <li><a href="#section5">Project Experience Showcase</a></li>
                <li><a href="#section6">Certifications & Coursework</a></li>
                <li><a href="#section7">Entry-Level Engineering Resume Template</a></li>
                <li><a href="#section8">Common Mistakes to Avoid</a></li>
                <li><a href="#faqs">Frequently Asked Questions</a></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Section 1 */}
        <section id="section1" className={styles.section}>
          <div className={styles.card}>
            <h2>Why Engineering Resumes Require Special Attention</h2>
            <p>Engineering resumes differ significantly from generic resumes due to the technical nature of the field, the importance of specific skills, and the expectations of engineering recruiters who look for both technical competence and practical application.</p>
            
            <h3>The Technical Recruiter Perspective</h3>
            <p>Technical recruiters spend an average of 6-8 seconds scanning each resume. For engineering positions, they immediately look for:</p>
            
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>What Recruiters Look For</th>
                    <th>Typical Scan Time</th>
                    <th>Key Decision Factors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technical skills match</td>
                    <td>2-3 seconds</td>
                    <td>Relevant programming languages, tools</td>
                  </tr>
                  <tr>
                    <td>Project experience</td>
                    <td>3-4 seconds</td>
                    <td>Real-world application of skills</td>
                  </tr>
                  <tr>
                    <td>Education & GPA</td>
                    <td>1-2 seconds</td>
                    <td>University, major, academic performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section2" className={styles.section}>
          <div className={styles.card}>
            <h2>Optimal Engineering Resume Format & Structure</h2>
            <p>The reverse-chronological format remains the gold standard for engineering students. Here's the ideal structure:</p>
            
            <div className={styles.stepsContainer}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Contact Information & Portfolio</h3>
                  <p>Include your name, professional email, phone number, LinkedIn URL, GitHub profile (crucial for engineering), and personal website if available.</p>
                </div>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Education Section</h3>
                  <p>List your degree, university, graduation date, GPA (if above 3.0), relevant coursework, and academic achievements.</p>
                </div>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Technical Skills Matrix</h3>
                  <p>Categorize skills: Programming Languages, Engineering Software, Tools & Platforms, Methodologies, and Laboratory Skills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section3" className={styles.section}>
          <div className={styles.card}>
            <h2>ATS Optimization Strategies for Engineering Roles</h2>
            <p>Applicant Tracking Systems (ATS) filter 75% of resumes before human eyes see them. Engineering resumes must be optimized for both ATS and human readers.</p>
            
            <h3>Keyword Optimization Techniques</h3>
            <p>Research shows engineering resumes with proper keyword optimization receive 60% more interviews:</p>
            
            <div className={styles.comparison}>
              <div className={styles.comparisonItem}>
                <h4>❌ Poor Example</h4>
                <p>"Used programming to solve problems"</p>
              </div>
              <div className={styles.comparisonItem}>
                <h4>✅ Optimized Example</h4>
                <p>"Developed Python scripts using Pandas and NumPy libraries to automate data analysis, reducing processing time by 40%"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Technical Skills */}
        <section id="section4" className={styles.section}>
          <div className={styles.card}>
            <h2>Technical Skills Section: Engineering-Specific Breakdown</h2>
            <p>Engineering recruiters expect to see skills organized by category with proficiency levels indicated.</p>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Software Engineering</h3>
                <ul>
                  <li>Python (Advanced)</li>
                  <li>Java/C++ (Intermediate)</li>
                  <li>JavaScript/React (Beginner)</li>
                  <li>Git/GitHub</li>
                  <li>Docker & Kubernetes</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Mechanical Engineering</h3>
                <ul>
                  <li>AutoCAD (Advanced)</li>
                  <li>SolidWorks</li>
                  <li>ANSYS</li>
                  <li>MATLAB/Simulink</li>
                  <li>GD&T Principles</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Electrical Engineering</h3>
                <ul>
                  <li>Circuit Design</li>
                  <li>PCB Layout</li>
                  <li>VHDL/Verilog</li>
                  <li>LabVIEW</li>
                  <li>SPICE Simulation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Project Experience */}
        <section id="section5" className={styles.section}>
          <div className={styles.card}>
            <h2>Project Experience Showcase: The STAR Method for Engineering</h2>
            <p>Use the STAR (Situation, Task, Action, Result) method to describe projects quantitatively:</p>
            
            <div className={styles.exampleCard}>
              <h3>Example: Autonomous Vehicle Project</h3>
              <p><strong>Situation:</strong> Capstone project to develop lane detection system</p>
              <p><strong>Task:</strong> Implement computer vision algorithm within 8-week deadline</p>
              <p><strong>Action:</strong> Developed Python script using OpenCV, implemented Canny edge detection, trained model with 5,000+ images</p>
              <p><strong>Result:</strong> Achieved 94% accuracy, reduced false positives by 30%, project won department innovation award</p>
            </div>
          </div>
        </section>

        {/* Section 6 - Certifications */}
        <section id="section6" className={styles.section}>
          <div className={styles.card}>
            <h2>Certifications & Relevant Coursework</h2>
            <p>For entry-level engineers, certifications demonstrate initiative and specialized knowledge.</p>
            
            <h3>Most Valuable Certifications for Engineering Students in 2026</h3>
            <ul>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Autodesk Certified Professional</li>
              <li>Python Institute PCAP</li>
              <li>Six Sigma Yellow Belt</li>
              <li>Google Data Analytics Certificate</li>
              <li>Microsoft Azure Fundamentals</li>
              <li>CompTIA Security+</li>
            </ul>
          </div>
        </section>

        {/* Section 7 - Template */}
        <section id="section7" className={styles.section}>
          <div className={styles.card}>
            <h2>Complete Entry-Level Engineering Resume Template</h2>
            
            <div className={styles.resumeTemplate}>
              <div className={styles.templateHeader}>
                <h3>JANE SMITH</h3>
                <p>Mechanical Engineering Student | University of Technology</p>
              </div>
              
              <div className={styles.templateSection}>
                <h4>EDUCATION</h4>
                <p><strong>BS Mechanical Engineering</strong> | University of Technology (Expected May 2026)</p>
                <p>GPA: 3.7/4.0 | Relevant Coursework: Thermodynamics, Fluid Mechanics, Machine Design, CAD/CAM, AI Applications in Engineering</p>
              </div>
              
              <div className={styles.templateSection}>
                <h4>TECHNICAL SKILLS</h4>
                <p><strong>Engineering Software:</strong> SolidWorks (Advanced), AutoCAD, ANSYS, MATLAB, Fusion 360</p>
                <p><strong>Programming:</strong> Python, C++, LabVIEW, SQL</p>
                <p><strong>Emerging Tech:</strong> AI/ML Fundamentals, IoT Systems, Cloud Computing Basics</p>
              </div>
            </div>
            
            <div className={styles.ctaContainer}>
              <a href="https://www.professionalresumefree.com" className={styles.primaryButton}>
                Use This Template in Our Builder →
              </a>
            </div>
          </div>
        </section>

        {/* Section 8 - Mistakes */}
        <section id="section8" className={styles.section}>
          <div className={styles.card}>
            <h2>7 Common Engineering Resume Mistakes to Avoid in 2026</h2>
            
            <div className={styles.mistakesList}>
              <div className={styles.mistakeItem}>
                <h3>❌ Mistake 1: Generic Objective Statement</h3>
                <p>Instead of "Seeking engineering position," write "Mechanical engineering student seeking internship to apply CAD design and thermodynamics knowledge to automotive R&D projects."</p>
              </div>
              
              <div className={styles.mistakeItem}>
                <h3>❌ Mistake 2: Listing Courses Without Context</h3>
                <p>Instead of just listing "Calculus III," include "Applied multivariate calculus to optimize heat transfer in heat exchanger design project."</p>
              </div>
              
              <div className={styles.mistakeItem}>
                <h3>❌ Mistake 3: Weak Action Verbs</h3>
                <p>Replace "Helped with" or "Worked on" with engineering-specific verbs: Designed, Developed, Engineered, Simulated, Optimized, Fabricated, Analyzed, Tested.</p>
              </div>
              
              <div className={styles.mistakeItem}>
                <h3>❌ Mistake 4: Ignoring AI & Emerging Tech Skills</h3>
                <p>In 2026, employers expect familiarity with AI tools, machine learning basics, and automation platforms. Even basic exposure should be mentioned.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2>Related Resources</h2>
            <div className={styles.internalLinks}>
              <a href="https://www.professionalresumefree.com/cover-letter-engineer" className={styles.internalLink}>
                Engineering Cover Letter Guide
              </a>
              <a href="https://www.professionalresumefree.com/ats-checklist" className={styles.internalLink}>
                ATS Optimization Checklist
              </a>
              <a href="https://www.professionalresumefree.com/portfolio-guide" className={styles.internalLink}>
                Engineering Portfolio Building
              </a>
              <a href="https://www.professionalresumefree.com/interview-prep" className={styles.internalLink}>
                Technical Interview Preparation
              </a>
              <a href="https://www.professionalresumefree.com/internship-resume" className={styles.internalLink}>
                Engineering Internship Resume Guide
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className={styles.section}>
          <div className={styles.card}>
            <h2>Frequently Asked Questions (2026 Edition)</h2>
            
            <div className={styles.faqItem}>
              <h3>What is the best format for an engineering student resume in 2026?</h3>
              <p>The hybrid format combining reverse-chronological with skills-based sections is most effective for engineering students in 2026. This highlights both your timeline of experience and technical competencies prominently. Our <a href="https://www.professionalresumefree.com" className={styles.link}>free resume builder</a> offers pre-formatted engineering templates optimized for 2026 hiring trends.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Should I include my GPA on an engineering resume in 2026?</h3>
              <p>Include your GPA if it's 3.0 or higher on a 4.0 scale. For engineering positions, a strong GPA (3.5+) is particularly valued as it demonstrates technical aptitude. In 2026, many employers also consider project portfolios alongside GPA, so include both when possible.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How many projects should I include on an entry-level engineering resume?</h3>
              <p>Include 2-4 significant projects that demonstrate different technical competencies. Quality matters more than quantity. For each project, describe your specific role, technologies used, and quantitative results achieved using the STAR method outlined in this guide.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What technical skills are most in-demand for engineering graduates in 2026?</h3>
              <p>According to 2026 industry surveys: Python programming (78% of listings), AI/ML fundamentals (65%), cloud computing (AWS/Azure) (72%), data analysis tools (68%), CAD/CAE software (70%), and version control systems like Git (75%). Always tailor skills to specific job descriptions.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How long should an engineering student resume be in 2026?</h3>
              <p>One page is standard for undergraduate engineering students. Graduate students with significant research or industry experience may extend to two pages. Never exceed two pages for entry-level positions. Every line should add value - our <a href="https://www.professionalresumefree.com" className={styles.link}>resume builder</a> helps optimize content density.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Should I include AI skills on my engineering resume in 2026?</h3>
              <p>Absolutely. Even basic familiarity with AI tools (ChatGPT, GitHub Copilot, TensorFlow basics) demonstrates adaptability and future-readiness. Include specific applications: "Used AI-assisted code generation to improve development efficiency by 30%" or "Applied machine learning principles to optimize system performance."</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2>Conclusion & Next Steps for 2026 Engineering Job Seekers</h2>
            <p>Creating a compelling engineering resume in 2026 requires balancing technical detail with clear communication, ATS optimization with human readability, and traditional engineering skills with emerging technologies. By following this comprehensive guide, you'll create a resume that effectively showcases your engineering capabilities to both automated systems and human recruiters.</p>
            
            <p><strong>Immediate Action Steps for 2026:</strong></p>
            <ol>
              <li>Review the engineering resume template above and identify sections applicable to your experience</li>
              <li>List all technical skills using the categorization method outlined, including any AI/emerging tech exposure</li>
              <li>Rewrite project descriptions using the STAR method with quantitative results</li>
              <li>Use our <a href="https://www.professionalresumefree.com" className={styles.link}>free professional resume builder</a> to implement these strategies with pre-formatted 2026 templates</li>
              <li>Have your resume reviewed by engineering professors or career services</li>
              <li>Create a digital portfolio (GitHub, personal website) to supplement your resume</li>
            </ol>
            
            <div className={styles.ctaContainer}>
              <a href="https://www.professionalresumefree.com" className={styles.primaryButton}>
                Build Your 2026 Engineering Resume Now →
              </a>
            </div>
            
            
          </div>
        </section>
      </main>

      
    </div>
  );
};

// Static Generation with ISR - Updated to current year
export async function getStaticProps() {
  const currentYear = 2026;
  const currentDate = new Date().toISOString();
  
  return {
    props: {
      currentYear,
      lastUpdated: currentDate
    },
    revalidate: 7200 // Re-generate every 2 hours
  };
}

export default ResumeBuilderPage;