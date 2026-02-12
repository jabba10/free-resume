import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/resume-guide', label: 'Resume Guide' },
    { href: '/cover-letter-guides', label: 'Cover Letter Guides' },
    { href: '/jobs-boards', label: 'Job Boards' },
    { href: '/jobs-search-tips', label: 'Job Search Tips' },
    { href: '/careers-blog', label: 'Careers Blog' },
  ];

  const resourceLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/complete-resume-resource-library', label: 'Complete Resource Library' },
    { href: '/free-ats-resume-checker', label: 'Free ATS Resume Checker' },
    { href: '/free-resume-score-checker', label: 'Free Resume Score Checker' },
    { href: '/free-resume-keyword-matcher', label: 'Free Resume Keyword Matcher' },
    { href: '/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software', label: 'How to Beat the ATS' },
  ];

  // Organized Industry Specific Links by Categories
  const healthcareIndustry = [
    { href: '/ats-friendly-medical-resume-builder', label: 'Medical Resume Builder' },
    { href: '/ats-friendly-nurse-resume-builder', label: 'Nurse Resume Builder' },
    { href: '/ats-friendly-nurse-practitioner-resume-builder', label: 'Nurse Practitioner Resume Builder' },
    { href: '/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder', label: 'Veterinary Resume Builder' },
    { href: '/ats-friendly-care-assistant-resume-builder', label: 'Care Assistant Resume Builder' },
    { href: '/ats-friendly-support-worker-resume-builder', label: 'Support Worker Resume Builder' },
    { href: '/ats-friendly-healthcare-assistant-resume-builder', label: 'Healthcare Assistant Resume Builder' },
    { href: '/ats-friendly-aged-care-worker-resume-builder', label: 'Aged Care Worker Resume Builder' },
    { href: '/ats-friendly-medical-assistant-resume-builder', label: 'Medical Assistant Resume Builder' },
    { href: '/ats-friendly-registered-practical-nurse-resume-builder', label: 'Registered Practical Nurse Resume Builder' },
    { href: '/ats-friendly-disability-support-worker-resume-builder', label: 'Disability Support Worker Resume Builder' },
  ];

  const techIndustry = [
    { href: '/ats-friendly-tech-resume-builder', label: 'Tech Resume Builder' },
    { href: '/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder', label: 'Machine Learning Resume Builder' },
    { href: '/ats-friendly-data-and-cybersecurity-resume-builder', label: 'Data Science and Cybersecurity Resume Builder' },
    { href: '/ats-ai-adjacent-creative-technical-roles-resume-builder', label: 'AI Adjacent Resume Builder' },
    { href: '/ats-friendly-software-developer-and-software-engineer-resume-builder', label: 'Software Developer and Engineer Resume Builder' },
    { href: '/ats-friendly-data-analyst-resume-builder', label: 'Data Analyst Resume Builder' },
  ];

  const businessIndustry = [
    { href: '/ats-friendly-finance-resume-builder', label: 'Finance Resume Builder' },
    { href: '/ats-friendly-ceo-resume-builder', label: 'CEO Resume Builder' },
    { href: '/ats-friendly-project-manager-resume-builder', label: 'Project Manager Resume Builder' },
    { href: '/ats-friendly-accountant-resume-builder', label: 'Accountant Resume Builder' },
    { href: '/ats-friendly-sales-associate-resume-builder', label: 'Sales Associate Resume Builder' },
    { href: '/ats-friendly-marketing-executive-manager-resume-builder', label: 'Marketing Executive/Manager Resume Builder' },
    { href: '/ats-friendly-business-analyst-resume-builder', label: 'Business Analyst Resume Builder' },
    { href: '/ats-friendly-customer-service-resume-builder', label: 'Customer Service Resume Builder' },
    { href: '/ats-friendly-administrative-assistant-resume-builder', label: 'Administrative Assistant Resume Builder' },
    { href: '/ats-friendly-hr-assistant-coordinator-resume-builder', label: 'HR Assistant/Coordinator Resume Builder' },
  ];

  const engineeringManufacturing = [
    { href: '/ats-friendly-engineering-resume-builder', label: 'Engineering Resume Builder' },
    { href: '/ats-friendly-industrial-manufacturing-resume-builder', label: 'Industrial Resume Builder' },
    { href: '/ats-friendly-advanced-manufacturing-and-automation-resume-builder', label: 'Automation Resume Builder' },
    { href: '/ats-friendly-biotechnology-resume-builder', label: 'Biotechnology Resume Builder' },
    { href: '/ats-friendly-electrician-resume-builder', label: 'Electrician Resume Builder' },
    { href: '/ats-friendly-plumber-resume-builder', label: 'Plumber Resume Builder' },
    { href: '/ats-friendly-construction-worker-resume-builder', label: 'Construction Worker Resume Builder' },
  ];

  const specializedServices = [
    { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'Government/Non-Profit Resume Builder' },
    { href: '/ats-friendly-teacher-resume-builder', label: 'Teacher Resume Builder' },
    { href: '/ats-friendly-legal-resume-builder', label: 'Legal Worker Resume Builder' },
    { href: '/ats-friendly-security-guard-resume-builder', label: 'Security Guard Resume Builder' },
  ];

  const retailLogistics = [
    { href: '/ats-friendly-consumer-retail-resume-builder', label: 'Retail Resume Builder' },
    { href: '/ats-friendly-retail-associate-resume-builder', label: 'Retail Associate Resume Builder' },
    { href: '/ats-friendly-logistics-transportation-resume-builder', label: 'Logistics Resume Builder' },
    { href: '/ats-friendly-driver-resume-builder', label: 'Driver Resume Builder' },
    { href: '/ats-friendly-warehouse-worker-resume-builder', label: 'Warehouse Worker Resume Builder' },
    { href: '/ats-friendly-chef-cook-resume-builder', label: 'Chef/Cook Resume Builder' },
  ];

  const emergingIndustries = [
    { href: '/ats-friendly-sustainability-and-green-industries-resume-builder', label: 'Sustainability Resume Builder' },
    { href: '/free-resume-builder', label: 'Free Resume Builder' },
  ];

  const resumeTemplates = [
    { href: '/creative-resume-templates', label: 'Creative Templates' },
    { href: '/functional-resume-templates', label: 'Functional Templates' },
    { href: '/modern-resume-design-2026', label: 'Modern Design 2026' },
    { href: '/one-page-resume-template', label: 'One Page Template' },
    { href: '/simple-resume-template', label: 'Simple Template' },
    { href: '/resume-templates', label: 'All Templates' },
    { href: '/chronological-resume-example', label: 'Chronological Example' },
    { href: '/basic-resume-format', label: 'Basic Format' },
  ];

  const writingGuides = [
    { href: '/how-to-write-a-resume', label: 'How to Write a Resume' },
    { href: '/how-to-write-a-resume-for-a-job', label: 'How to Write for a Job' },
    { href: '/how-to-create-a-resume-with-no-experience', label: 'Resume with No Experience' },
    { href: '/how-to-describe-work-experience-on-resume', label: 'Describe Work Experience' },
    { href: '/resume-writing-for-beginners', label: 'For Beginners' },
    { href: '/what-to-put-on-a-resume', label: 'What to Put on a Resume' },
    { href: '/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume', label: 'AI Resume Builders' },
    { href: '/best-ats-resume-format-2026', label: 'Best ATS Format 2026' },
  ];

  const resumeSections = [
    { href: '/resume-education-section', label: 'Education Section' },
    { href: '/certification-resume-section', label: 'Certification Section' },
    { href: '/resume-skills-section', label: 'Skills Section' },
    { href: '/resume-objective-statement', label: 'Objective Statement' },
  ];

  const freeTools = [
    { href: '/free-cover-letter-generator', label: 'Cover Letter Generator' },
    { href: '/free-resume-summary-generator', label: 'Resume Summary Generator' },
    { href: '/free-resume-objective-generator', label: 'Resume Objective Generator' },
    { href: '/free-resume-bullet-point-generator', label: 'Bullet Point Generator' },
    { href: '/free-action-verb-recommender', label: 'Action Verb Recommender' },
    { href: '/free-resume-word-and-character-counter', label: 'Word & Character Counter' },
    { href: '/free-resume-readability-checker', label: 'Readability Checker' },
    { href: '/free-resume-formatting-checker', label: 'Formatting Checker' },
    { href: '/free-resume-keyword-density-analyzer-tool', label: 'Keyword Density Analyzer' },
    { href: '/resume-keywords-finder', label: 'Keywords Finder' },
    { href: '/keywords-for-resume', label: 'Keywords for Resume' },
  ];

  const advancedTips = [
    { href: '/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026', label: 'ChatGPT for Resume Bullets' },
    { href: '/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds', label: 'Professional Summary Tips' },
  ];

  // Function to render links section
  const renderLinksSection = (title, links) => (
    <div className={styles.footerCard}>
      <div className={styles.linksCard}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.footerLinks}>
          {links.map((link) => (
            <li key={link.href} className={styles.footerLinkItem}>
              <Link href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            
            {/* Company Info */}
            <div className={styles.footerCard}>
              <div className={styles.companyCard}>
                <h3 className={styles.footerLogo}>ProfessionalResumeFree</h3>
                <p className={styles.footerAbout}>
                  Build professional resumes in minutes with our free resume builder. 
                  Land your dream job with a resume that stands out.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            {renderLinksSection('Quick Links', quickLinks)}

            {/* Industry Specific - Healthcare */}
            {renderLinksSection('Healthcare', healthcareIndustry)}

            {/* Industry Specific - Tech */}
            {renderLinksSection('Technology', techIndustry)}

            {/* Industry Specific - Business */}
            {renderLinksSection('Business & Finance', businessIndustry)}

            {/* Resume Templates */}
            {renderLinksSection('Resume Templates', resumeTemplates)}

            {/* Writing Guides */}
            {renderLinksSection('Writing Guides', writingGuides)}

            {/* Engineering & Manufacturing */}
            {renderLinksSection('Engineering & Skilled Trades', engineeringManufacturing)}

            {/* Resume Sections */}
            {renderLinksSection('Resume Sections', resumeSections)}

            {/* Specialized Services */}
            {renderLinksSection('Education & Public Service', specializedServices)}

            {/* Free Tools */}
            {renderLinksSection('Free Tools', freeTools)}

            {/* Retail & Logistics */}
            {renderLinksSection('Retail, Logistics & Services', retailLogistics)}

            {/* Emerging Industries */}
            {renderLinksSection('Emerging Industries', emergingIndustries)}

            {/* Resources & Advanced Tips */}
            {renderLinksSection('Resources & Advanced Tips', resourceLinks.concat(advancedTips))}

          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} ProfessionalResumeFree. All rights reserved. 
              Made with <span className={styles.heartIcon}>❤️</span> by career enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;