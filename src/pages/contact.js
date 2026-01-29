'use client';
import Head from 'next/head';
import { 
  FiMail, 
  FiClock,
  FiUser,
  FiCopy
} from 'react-icons/fi';
import styles from './Contact.module.css';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FiMail className={styles.contactIcon} />,
      title: 'Email Address',
      content: 'contact@professionalresumefree.com',
      subtitle: 'Send us an email anytime',
      link: 'mailto:contact@professionalresumefree.com'
    },
    {
      icon: <FiClock className={styles.contactIcon} />,
      title: 'Response Time',
      content: 'Within 24 Hours',
      subtitle: 'We reply quickly to all emails'
    },
    {
      icon: <FiUser className={styles.contactIcon} />,
      title: 'Support Type',
      content: 'Resume Builder Help',
      subtitle: 'Technical and general assistance'
    }
  ];

  const contactTips = [
    'Use a clear subject line',
    'Include relevant details',
    'Mention if technical or general',
    'We respond within 24 hours'
  ];

  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Contact Us | ProfessionalResumeFree - Email Contact</title>
        <meta name="description" content="Reach out to us via email for resume builder assistance and support." />
        <meta name="keywords" content="resume builder contact, email support, career help" />
        <link rel="canonical" href="https://www.professionalresumefree.com/contact/" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className={styles.contactHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Contact <span className={styles.gradientText}>Us</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Reach out to our team via email. We're here to help with your resume building needs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoHeader}>
                <h2>Get in Touch</h2>
                <p>Email us directly for assistance with our resume builder tool.</p>
              </div>

              <div className={styles.contactMethods}>
                {contactInfo.map((item, index) => (
                  <div key={index} className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      {item.icon}
                    </div>
                    <div className={styles.methodContent}>
                      <h3>{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className={styles.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className={styles.methodMain}>{item.content}</p>
                      )}
                      <p className={styles.methodSub}>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.contactTips}>
                <h3>Email Tips</h3>
                <ul className={styles.tipsList}>
                  {contactTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.contactFormContainer}>
              <div className={styles.contactFormCard}>
                <div className={styles.formHeader}>
                  <div className={styles.emailHeader}>
                    <FiMail className={styles.emailIcon} />
                    <h2>Email Us</h2>
                  </div>
                  <p>Send your message to our email address</p>
                </div>

                <div className={styles.emailSection}>
                  <div className={styles.emailBox}>
                    <div className={styles.emailAddress}>
                      <span className={styles.emailLabel}>Our Email:</span>
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className={styles.emailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        contact@professionalresumefree.com
                      </a>
                      <button 
                        className={styles.copyButton}
                        onClick={() => {
                          navigator.clipboard.writeText('contact@professionalresumefree.com');
                          alert('Email address copied to clipboard!');
                        }}
                      >
                        <FiCopy className={styles.copyIcon} />
                        Copy
                      </button>
                    </div>
                    
                    <div className={styles.emailAction}>
                      <a 
                        href="mailto:contact@professionalresumefree.com"
                        className={styles.emailButton}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiMail className={styles.btnIcon} />
                        Open Email App
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.responseInfo}>
                  <p>
                    We aim to respond to all emails within 24 hours. 
                    For the fastest response, please include relevant details about your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Build Your Professional Resume?</h2>
            <p>Start creating your resume with our free, easy-to-use platform.</p>
            <div className={styles.ctaButtons}>
              <a href="/resume-templates" className={styles.primaryCta}>
                Get Started Free
              </a>
              <a href="/faq" className={styles.secondaryCta}>
                Visit FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;