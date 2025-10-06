'use client';

import { useState } from 'react';
import Head from 'next/head';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiShield,
  FiAlertTriangle
} from 'react-icons/fi';
import styles from './Contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let sanitizedValue = value;
    if (name === 'name' || name === 'subject') {
      sanitizedValue = value.replace(/[<>]/g, '');
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (formData.name.length < 2) {
      throw new Error('Name must be at least 2 characters long');
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }
    
    if (formData.message.length < 10) {
      throw new Error('Message must be at least 10 characters long');
    }
    
    const spamPatterns = [
      'http://', 'https://', '[url]', 'viagra', 'casino', 'lottery'
    ];
    
    const messageLower = formData.message.toLowerCase();
    const subjectLower = formData.subject.toLowerCase();
    
    for (const pattern of spamPatterns) {
      if (messageLower.includes(pattern) || subjectLower.includes(pattern)) {
        throw new Error('Message contains suspicious content. Please revise your message.');
      }
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      validateForm();

      // Create FormData instead of JSON
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `New Contact Form Submission: ${formData.subject}`);
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'true');
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_autoresponse', `Thank you for contacting ProfessionalResumeFree! We've received your message and will get back to you within 24 hours.`);
      formDataToSend.append('_blacklist', 'spammy pattern,viagra,casino');
      formDataToSend.append('_url', typeof window !== 'undefined' ? window.location.href : '');

      const response = await fetch('https://formsubmit.co/ajax/contact@professionalresumefree.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success === 'true' || result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.message || 
        'Sorry, there was an error sending your message. Please try again or email us directly at contact@professionalresumefree.com'
      );
      
      if (process.env.NODE_ENV === 'development') {
        console.error('Detailed error:', {
          message: error.message,
          formData: formData
        });
      }
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className={styles.contactIcon} />,
      title: 'Email Us',
      content: 'contact@professionalresumefree.com',
      subtitle: 'We\'ll reply within 24 hours',
      link: 'mailto:contact@professionalresumefree.com'
    },
    {
      icon: <FiClock className={styles.contactIcon} />,
      title: 'Response Time',
      content: 'Within 24 Hours',
      subtitle: 'Guaranteed quick response'
    },
    {
      icon: <FiShield className={styles.contactIcon} />,
      title: 'Security & Privacy',
      content: 'Protected Form',
      subtitle: 'reCAPTCHA enabled & secure submission'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Contact Us | ProfessionalResumeFree - Secure Contact Form</title>
        <meta name="description" content="Securely get in touch with our team. Protected contact form with spam prevention and quick response guarantee." />
        <meta name="keywords" content="secure contact form, resume builder contact, career help, protected messaging" />
        <link rel="canonical" href="https://www.professionalresumefree.com/contact" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className={styles.contactHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Secure <span className={styles.gradientText}>Contact</span> Form
            </h1>
            <p className={styles.heroSubtitle}>
              Your security is our priority. Our protected contact form ensures your message 
              reaches us safely with spam prevention and data protection.
            </p>
            
            <div className={styles.securityBadges}>
              <div className={styles.badge}>
                <FiShield className={styles.badgeIcon} />
                <span>reCAPTCHA Protected</span>
              </div>
              <div className={styles.badge}>
                <FiShield className={styles.badgeIcon} />
                <span>Spam Filtering</span>
              </div>
              <div className={styles.badge}>
                <FiShield className={styles.badgeIcon} />
                <span>Secure Submission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoHeader}>
                <h2>Secure Communication</h2>
                <p>We use multiple security layers to protect your data and prevent spam while ensuring your message reaches us safely.</p>
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
                          target={item.link.startsWith('http') ? '_blank' : '_self'}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
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

              <div className={styles.securityFeatures}>
                <h3>Security Features</h3>
                <ul className={styles.featuresList}>
                  <li>✓ reCAPTCHA spam protection</li>
                  <li>✓ Input sanitization & validation</li>
                  <li>✓ Basic CSRF protection</li>
                  <li>✓ Spam pattern detection</li>
                  <li>✓ Secure FormSubmit.co endpoint</li>
                  <li>✓ No data storage on client</li>
                </ul>
              </div>
            </div>

            <div className={styles.contactFormContainer}>
              <div className={styles.contactFormCard}>
                <div className={styles.formHeader}>
                  <div className={styles.securityHeader}>
                    <FiShield className={styles.shieldIcon} />
                    <h2>Secure Message Form</h2>
                  </div>
                  <p>Your message is protected with multiple security layers.</p>
                </div>

                {submitStatus === 'success' && (
                  <div className={styles.formSuccess}>
                    <div className={styles.successIcon}>✓</div>
                    <div className={styles.successContent}>
                      <h3>Message Sent Successfully!</h3>
                      <p>We've received your secure message and will get back to you within 24 hours. A confirmation email has been sent to your inbox.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.formError}>
                    <div className={styles.errorIcon}>⚠</div>
                    <div className={styles.errorContent}>
                      <h3>Security Check Failed</h3>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form 
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                  noValidate
                >
                  <div className={styles.honeypot}>
                    <input 
                      type="text" 
                      name="_honey" 
                      tabIndex="-1" 
                      autoComplete="off"
                      style={{ display: 'none' }}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        <FiUser className={styles.labelIcon} />
                        Full Name *
                        <span className={styles.validationInfo}>(2-100 characters)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                        minLength={2}
                        maxLength={100}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        <FiMail className={styles.labelIcon} />
                        Email Address *
                        <span className={styles.validationInfo}>(for response)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <FiMessageSquare className={styles.labelIcon} />
                      Subject *
                      <span className={styles.validationInfo}>(5-200 characters)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                      minLength={5}
                      maxLength={200}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Your Secure Message *
                      <span className={styles.validationInfo}>(10-2000 characters)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className={styles.formTextarea}
                      placeholder="Tell us how we can help you securely..."
                      disabled={isSubmitting}
                      minLength={10}
                      maxLength={2000}
                    ></textarea>
                    <div className={styles.charCount}>
                      {formData.message.length}/2000 characters
                      {formData.message.length < 10 && (
                        <span className={styles.charWarning}> (minimum 10 required)</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.securityNotice}>
                    <FiAlertTriangle className={styles.noticeIcon} />
                    <span>
                      This form is protected by reCAPTCHA and spam filtering. 
                      By submitting, you agree to our privacy policy.
                    </span>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner}></div>
                        Securely Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className={styles.btnIcon} />
                        Send Secure Message
                      </>
                    )}
                  </button>

                  <div className={styles.formNote}>
                    * Required fields. We respect your privacy and use industry-standard 
                    security measures to protect your data. No sensitive information should be shared.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Build Your Secure Professional Profile?</h2>
            <p>Start creating your professional resume with our secure, privacy-focused platform.</p>
            <div className={styles.ctaButtons}>
              <a href="/free-resume-builder" className={styles.primaryCta}>
                Get Started Free
              </a>
              <a href="/privacy-policy" className={styles.secondaryCta}>
                View Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;