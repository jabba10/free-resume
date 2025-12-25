import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/resume-guide', label: 'Resume Guide' },
    { href: '/cover-letter-guides', label: 'Cover Letter Guides' },
    { href: '/careers-blog', label: 'Blog' },
    { href: '/jobs-search-tips', label: 'Jobs Search Tips' },
    { href: '/jobs-boards', label: 'Jobs Boards' },
    { href: '/ats-friendly-medical-resume-builder', label: 'ATS-Friendly Medical Resumes' },
    { href: '/ats-friendly-finance-resume-builder', label: 'ATS-Friendly Finance Resume' },
    { href: '/ats-friendly-government-education-non-profit-resume-builder', label: 'ATS-Friendly Government, Education, Non-Profit Resume' },
    { href: '/ats-friendly-industrial-manufacturing-resume-builder', label: 'ATS-Friendly Industrial, Manufacturing Resume' },
    { href: '/ats-friendly-consumer-retail-resume-builder', label: 'ATS-Friendly Consumer, Retail Resume' },
    { href: '/ats-friendly-logistics-transportation-resume-builder', label: 'ATS-Friendly Transportation, Logistics Resume' },
    { href: '/ats-friendly-ceo-resume-builder', label: 'ATS-Friendly CEO Resume' },
    { href: '/resume-templates', label: 'Resume Templates' },
    { href: '/free-resume-builda', label: 'Free Resume Builder' },

    
    
    
    
    
    

  ];

  const resourceLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    
  ];

  

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            
            {/* Company Info Card */}
            <div className={styles.footerCard}>
              <div className={styles.companyCard}>
                <h3 className={styles.footerLogo}>ProfessionalResumeFree</h3>
                <p className={styles.footerAbout}>
                  Build professional resumes in minutes with our free resume builder. 
                  Land your dream job with a resume that stands out.
                </p>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className={styles.footerCard}>
              <div className={styles.linksCard}>
                <h3 className={styles.cardTitle}>Quick Links</h3>
                <ul className={styles.footerLinks}>
                  {quickLinks.map((link) => (
                    <li key={link.href} className={styles.footerLinkItem}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources Card */}
            <div className={styles.footerCard}>
              <div className={styles.linksCard}>
                <h3 className={styles.cardTitle}>Resources</h3>
                <ul className={styles.footerLinks}>
                  {resourceLinks.map((link) => (
                    <li key={link.href} className={styles.footerLinkItem}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            

          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} ProfessionalResumeFree. All rights reserved. 
              Made with <FaHeart className={styles.heartIcon} /> by career enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;