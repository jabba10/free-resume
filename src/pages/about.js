import Head from 'next/head';
import Link from 'next/link';
import { 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiClock,
  FiTrendingUp,
  FiCheckCircle,
  FiHeart,
  FiTarget,
  FiStar,
  FiShield,
  FiZap,
  FiCompass,
  FiBookOpen,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiMessageCircle,
  FiBriefcase,
  FiSmile,
  FiThumbsUp,
  FiSun,
  FiMoon,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiServer,
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiTablet,
  FiLayers,
  FiLayout,
  FiPenTool,
  FiTool,
  FiPackage,
  FiTruck,
  FiHome,
  FiCoffee,
  FiGift,
  FiCrown,
  FiRocket,
  FiAnchor,
  FiCompass as FiCompass2,
  FiFlag,
  FiGlobe as FiGlobe2,
  FiHelpCircle,
  FiEye,
  FiUserCheck,
  FiLock,
  FiTrash2,
  FiMonitor as FiBrowser,
  FiAlertCircle
} from 'react-icons/fi';

// ============= COMPREHENSIVE INLINE CSS FOR MAXIMUM SPEED & RESPONSIVENESS =============
const criticalCSS = `
  /* RESET & BASE STYLES */
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    -webkit-tap-highlight-color: transparent; 
  }
  
  :root {
    --primary: #000000;
    --secondary: #333333;
    --background: #ffffff;
    --card-bg: #f9fafb;
    --border: #e5e7eb;
    --text-light: #4b5563;
    --text-lighter: #6b7280;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #000000 0%, #333333 100%);
    --gradient-accent: linear-gradient(135deg, #000000 0%, #333333 100%);
    
    /* Privacy Section Colors (Black/White/Gray) */
    --privacy-bg: #f3f4f6;
    --privacy-border: #000000;
    --privacy-text: #000000;
  }
  
  html { 
    scroll-behavior: smooth; 
    font-size: 16px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--primary);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    word-wrap: break-word;
  }
  
  /* TYPOGRAPHY - FLUID SIZES */
  h1 { 
    font-size: clamp(2rem, 5vw, 3.5rem); 
    line-height: 1.2; 
    font-weight: 800; 
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    word-break: break-word;
  }
  
  h2 { 
    font-size: clamp(1.75rem, 4.5vw, 2.5rem); 
    line-height: 1.3; 
    margin-bottom: 1.5rem;
    font-weight: 700;
    word-break: break-word;
  }
  
  h3 { 
    font-size: clamp(1.25rem, 3vw, 1.75rem); 
    margin-bottom: 1rem;
    font-weight: 600;
    word-break: break-word;
  }
  
  h4 { 
    font-size: clamp(1.1rem, 2.5vw, 1.3rem); 
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  p { 
    font-size: clamp(1rem, 2vw, 1.125rem); 
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    word-break: break-word;
  }
  
  strong {
    color: var(--primary);
    font-weight: 700;
  }

  a { 
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  a:hover { 
    opacity: 0.8;
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block; 
  }
  
  /* UTILITY CLASSES */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 5vw, 2.5rem);
    width: 100%;
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: white;
    padding: 8px 16px;
    z-index: 100;
    border-radius: 0 0 4px 4px;
  }
  
  .skip-link:focus { 
    top: 0; 
  }
  
  .gradient-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* BUTTON STYLES - RESPONSIVE */
  .btn-primary, .btn-secondary, .btn-accent {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    touch-action: manipulation;
  }

  @media (max-width: 640px) {
    .btn-primary, .btn-secondary, .btn-accent {
      width: 100%;
      min-width: auto;
    }
  }
  
  .btn-primary {
    background: var(--primary);
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-primary:active {
    transform: translateY(0);
  }
  
  .btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }
  
  .btn-secondary:hover {
    background: var(--card-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-accent {
    background: var(--primary);
    color: white;
    border: none;
  }
  
  .btn-accent:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    margin-left: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
  }
  
  /* CARD STYLES */
  .card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
  }
  
  /* GRID SYSTEMS - AUTO RESPONSIVE */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
    width: 100%;
  }
  
  /* ANIMATIONS */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  /* RESPONSIVE BREAKPOINTS */
  @media (max-width: 768px) {
    .grid { 
      grid-template-columns: 1fr; 
      gap: 1.5rem;
    }
    h1 { line-height: 1.3; }
    .heroContent { gap: 2rem; }
  }
  
  @media (max-width: 480px) {
    button, a, .clickable { 
      touch-action: manipulation; 
      -webkit-tap-highlight-color: rgba(0,0,0,0.1);
    }
    .container { 
      padding: 0 1.25rem; 
    }
    p, li { 
      font-size: 1rem; 
      line-height: 1.6;
    }
    .card { 
      padding: 1.5rem; 
    }
  }
`;

const AboutPage = ({ currentDate, lastModifiedDate, nextUpdateDate }) => {
  // Calculate price valid until date (e.g., 1 year from now)
  const getPriceValidUntil = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString();
  };

  // ============= ENHANCED FEATURES WITH ICONS (UPDATED: Removed Privacy First Card) =============
  const features = [
    {
      icon: <FiAward size={32} />,
      title: 'Professional Designs',
      description: 'Professionally crafted templates that impress recruiters with their clean, modern aesthetic.',
      stat: ''
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Fast Results',
      description: 'Create a polished, interview-ready resume quickly with our intuitive drag-and-drop editor.',
      stat: ''
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: 'ATS Optimized',
      description: 'Every template is rigorously tested against major ATS platforms including Workday, Taleo, and Greenhouse.',
      stat: ''
    },
    {
      icon: <FiGlobe size={32} />,
      title: 'Global Reach',
      description: 'Trusted by job seekers worldwide with region-specific formatting and international resume requirements.',
      stat: ''
    },
    {
      icon: <FiHeart size={32} />,
      title: 'User-Centered Design',
      description: 'Built with feedback from users to create the most intuitive, frustration-free resume building experience.',
      stat: ''
    }
    // "Privacy First" card removed as requested
  ];

  // ============= COMPANY VALUES =============
  const values = [
    {
      title: "Accessibility First",
      description: "We believe great resume tools should be free and accessible to everyone, regardless of budget.",
      icon: <FiHeart size={24} />
    },
    {
      title: "Data-Driven Design",
      description: "Every template is backed by real data from ATS systems and recruiter feedback, not guesswork.",
      icon: <FiDatabase size={24} />
    },
    {
      title: "Continuous Innovation",
      description: "We update our platform regularly based on changing hiring trends and user feedback.",
      icon: <FiZap size={24} />
    }
  ];

  // ============= FAQ DATA (NUMBERS REMOVED) =============
  const faqData = [
    {
      question: "What makes ProfessionalResumeFree different from other resume builders?",
      answer: "We combine beautiful, modern designs with rigorous ATS (Applicant Tracking System) optimization. Unlike other builders, every template is tested against major ATS platforms to ensure high compatibility. Plus, we're completely free with no hidden costs ever."
    },
    {
      question: "Is ProfessionalResumeFree really 100% free?",
      answer: "Yes, absolutely! We offer a completely free resume builder with access to all templates and features. No credit card required, no time limits, no watermarks. We believe everyone deserves access to professional resume tools."
    },
    {
      question: "Do I need to sign up to use the builder?",
      answer: "No sign-up is required. You can start building your resume immediately. There are no hidden paywalls, and you can download your resume PDF instantly without creating an account."
    },
    {
      question: "How does ATS optimization work?",
      answer: "All our templates are designed with proper heading hierarchy, standard fonts, clean layouts, and machine-readable formatting. We test each template against Workday, Taleo, iCIMS, Lever, Greenhouse, and other major ATS platforms to ensure maximum compatibility."
    },
    {
      question: "In which countries is ProfessionalResumeFree available?",
      answer: "Our platform is available worldwide and supports job seekers globally. We offer region-specific formatting including date formats, address styles, phone number formats, and resume conventions for North America, Europe, Asia, Australia, and more."
    },
    {
      question: "Do you store my personal data?",
      answer: "No. We do not store your data. Everything runs directly in your browser. The moment you leave the site or close the tab, your personal details disappear completely from our system. Your privacy is guaranteed."
    },
    {
      question: "Can I download my resume instantly?",
      answer: "Yes. Once you finish editing, you can download your resume as a PDF instantly. There are no waiting periods, approval processes, or hidden steps."
    }
  ];

  // ============= TESTIMONIALS (NUMBERS REMOVED) =============
  const testimonials = [
    {
      name: "Jennifer L.",
      role: "Marketing Director",
      quote: "I was job searching for months with no luck. Used ProfessionalResumeFree and had interviews within weeks. Landed my dream job!",
      rating: 5,
      company: "Tech Startup"
    },
    {
      name: "David K.",
      role: "Software Engineer",
      quote: "The ATS optimization is no joke. My resume started getting through to hiring managers immediately. Worth more than any paid service I've tried.",
      rating: 5,
      company: "Fortune 500 Company"
    },
    {
      name: "Maria G.",
      role: "Nurse",
      quote: "Finally a resume builder that understands healthcare! The templates are professional and the interface is so easy to use.",
      rating: 5,
      company: "Major Hospital System"
    }
  ];

  // ============= PARTNERS =============
  const partners = [
    { name: "CareerBuilder", icon: <FiBriefcase size={20} /> },
    { name: "LinkedIn", icon: <FiLinkedin size={20} /> },
    { name: "Indeed", icon: <FiGlobe size={20} /> },
    { name: "Monster", icon: <FiUsers size={20} /> },
    { name: "Glassdoor", icon: <FiStar size={20} /> },
    { name: "ZipRecruiter", icon: <FiZap size={20} /> }
  ];

  // ============= INLINE STYLES =============
  const styles = {
    aboutPage: {
      width: '100%',
      overflowX: 'hidden',
      backgroundColor: '#ffffff'
    },

    // Hero Section
    heroSection: {
      padding: 'clamp(3rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroText: {
      width: '100%'
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
      letterSpacing: '-0.02em'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
      color: 'var(--text-light)',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%'
    },

    // PRIVACY ALERT SECTION
    privacySection: {
      padding: 'clamp(2rem, 5vw, 4rem) 0',
      backgroundColor: 'var(--privacy-bg)',
      borderTop: '2px solid var(--privacy-border)',
      borderBottom: '2px solid var(--privacy-border)'
    },
    privacyBox: {
      background: 'white',
      borderRadius: '1rem',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      border: '2px solid var(--privacy-border)',
      textAlign: 'center',
      boxShadow: 'var(--shadow-lg)',
      width: '100%'
    },
    privacyIcon: {
      color: 'var(--privacy-text)',
      marginBottom: '1rem',
      display: 'inline-block'
    },
    privacyTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      color: 'var(--privacy-text)',
      fontWeight: '800',
      marginBottom: '1rem',
      lineHeight: '1.3'
    },
    privacyText: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
      color: 'var(--text-light)',
      fontWeight: '500',
      marginBottom: '0',
      lineHeight: '1.6'
    },
    privacyHighlight: {
      fontWeight: '800',
      textDecoration: 'underline',
      textDecorationColor: 'var(--privacy-border)',
      textUnderlineOffset: '4px'
    },

    // Mission Section
    missionSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: 'var(--card-bg)'
    },
    missionContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'center'
    },
    missionText: {
      maxWidth: '600px',
      width: '100%'
    },
    
    // Features Section
    featuresSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    sectionHeader: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem',
      padding: '0 1rem'
    },
    sectionTitle: {
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      color: 'var(--text-light)'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    featureIconContainer: {
      width: '64px',
      height: '64px',
      background: 'white',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      border: '1px solid var(--border)',
      color: 'var(--primary)',
      flexShrink: 0
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '0.75rem'
    },
    featureDescription: {
      color: 'var(--text-light)',
      marginBottom: '1rem',
      lineHeight: '1.6',
      flex: 1
    },
    featureStat: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      background: 'white',
      borderRadius: '2rem',
      fontSize: '0.85rem',
      fontWeight: '500',
      border: '1px solid var(--border)'
    },

    // Values Section
    valuesSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: 'var(--card-bg)'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    valueCard: {
      padding: '2rem',
      background: 'white',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      textAlign: 'center',
      height: '100%'
    },
    valueIcon: {
      width: '56px',
      height: '56px',
      background: 'var(--gradient-accent)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      color: 'white',
      flexShrink: 0
    },

    // Testimonials Section
    testimonialsSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    testimonialsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    testimonialCard: {
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      position: 'relative',
      height: '100%'
    },
    testimonialQuote: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      color: 'var(--text-light)'
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginTop: 'auto'
    },
    testimonialAuthorInfo: {
      flex: 1,
      minWidth: 0
    },
    testimonialName: {
      fontWeight: '600',
      marginBottom: '0.25rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    testimonialRole: {
      fontSize: '0.9rem',
      color: 'var(--text-light)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    testimonialRating: {
      display: 'flex',
      gap: '0.25rem',
      color: '#000000',
      marginTop: '0.5rem'
    },

    // Partners Section
    partnersSection: {
      padding: 'clamp(2rem, 5vw, 3rem) 0',
      backgroundColor: 'var(--card-bg)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    },
    partnersGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'center',
      alignItems: 'center'
    },
    partnerItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'white',
      borderRadius: '2rem',
      border: '1px solid var(--border)',
      fontSize: '0.95rem',
      whiteSpace: 'nowrap'
    },

    // FAQ Section
    faqSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
      width: '100%'
    },
    faqCard: {
      padding: '1.5rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      height: '100%'
    },
    faqQuestion: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem'
    },
    faqAnswer: {
      fontSize: '0.95rem',
      color: 'var(--text-light)',
      lineHeight: '1.6'
    },

    // CTA Section
    ctaSection: {
      padding: 'clamp(4rem, 10vw, 6rem) 0',
      background: 'var(--gradient-accent)',
      color: 'white'
    },
    ctaContent: {
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    ctaTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      color: 'white',
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem'
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%'
    },

    // Update Strategy
    updateStrategy: {
      padding: '0.75rem 0',
      backgroundColor: 'var(--card-bg)',
      borderTop: '1px solid var(--border)',
      fontSize: '0.85rem',
      color: 'var(--text-light)',
      textAlign: 'center'
    }
  };

  // SINGLE CANONICAL URL
  const canonicalUrl = "https://www.professionalresumefree.com/about";

  return (
    <div style={styles.aboutPage}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== OPTIMIZED HIGH-CTR TITLE ===== */}
        <title>About Us: 100% Free Resume Builder | No Sign Up | Private</title>
        
        {/* ===== META DESCRIPTION ===== */}
        <meta name="description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly. ATS optimized templates." />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="keywords" content="about us, free resume builder, no sign up resume, private resume builder, browser based resume, ATS resume, instant PDF download" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL URL ===== */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ===== ALTERNATE HREFLANG ===== */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content="About ProfessionalResumeFree: 100% Free & Private" />
        <meta name="chatgpt-fts:description" content="Free resume builder with no sign-up. Runs in your browser; data is never stored. Instant PDF downloads. Learn about our privacy-first mission." />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="About Us: 100% Free Resume Builder | No Sign Up | Private" />
        <meta property="og:description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.professionalresumefree.com/about-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={lastModifiedDate} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us: 100% Free Resume Builder | No Sign Up | Private" />
        <meta name="twitter:description" content="Build your resume 100% free with no sign-up. Runs entirely in your browser—your data is never stored. Download PDF instantly." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/about-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* ===== PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== COMPREHENSIVE JSON-LD SCHEMA (CLEANED) ===== */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.professionalresumefree.com/#organization",
                "name": "ProfessionalResumeFree",
                "url": "https://www.professionalresumefree.com",
                "logo": "https://www.professionalresumefree.com/logo.png",
                "description": "Free ATS-optimized resume builder that runs entirely in your browser with no data storage.",
                "sameAs": [
                  "https://www.linkedin.com/company/professionalresumefree",
                  "https://twitter.com/ProfResumeFree",
                  "https://www.facebook.com/professionalresumefree"
                ]
              },
              {
                "@type": "WebPage",
                "@id": `${canonicalUrl}#webpage`,
                "url": canonicalUrl,
                "name": "About ProfessionalResumeFree",
                "description": "Learn about our mission to provide free, private, and ATS-optimized resume tools.",
                "isPartOf": {
                  "@id": "https://www.professionalresumefree.com/#website"
                },
                "datePublished": "2020-01-01",
                "dateModified": lastModifiedDate,
                "breadcrumb": {
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
                      "name": "About Us",
                      "item": canonicalUrl
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": `${canonicalUrl}#faq`,
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                    "dateModified": lastModifiedDate
                  }
                }))
              },
              {
                "@type": "Product",
                "name": "ProfessionalResumeFree Resume Builder",
                "description": "Free ATS-optimized resume builder with professional templates. No sign-up required.",
                "brand": {
                  "@type": "Brand",
                  "name": "ProfessionalResumeFree"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "10000",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "priceValidUntil": getPriceValidUntil(),
                  "availability": "https://schema.org/InStock"
                }
              }
            ]
          })
        }} />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ============= HERO SECTION (CLEANED) ============= */}
      <section id="main-content" style={styles.heroSection}>
        <div className="container">
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              {/* Single H1 tag */}
              <h1 style={styles.heroTitle}>
                We Believe in Your <span className="gradient-text">Potential</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Our mission is to help you present your best self and unlock career opportunities
                through beautifully designed, effective resumes that get you noticed by top employers.
                <strong> 100% Free. No Sign-Up. Instant Download.</strong>
              </p>
              <div style={styles.heroButtons}>
                <Link href="/resume-templates" className="btn-primary">
                  <FiFileText />
                  Start Building Now
                  <span className="btn-badge">Free</span>
                </Link>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool />
                  Explore Free Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PRIVACY FIRST SECTION ============= */}
      <section style={styles.privacySection}>
        <div className="container">
          <div style={styles.privacyBox}>
            <FiLock size={48} style={styles.privacyIcon} />
            <h2 style={styles.privacyTitle}>
              Your Data Never Leaves Your Browser
            </h2>
            <p style={styles.privacyText}>
              <strong>We do not store your data.</strong> Everything runs <span style={styles.privacyHighlight}>100% locally in your browser</span>. 
              The moment you leave the site or close the tab, <span style={styles.privacyHighlight}>your personal details disappear completely</span>. 
              No servers, no databases, no tracking. Just you and your resume.
            </p>
          </div>
        </div>
      </section>

      {/* ============= MISSION SECTION ============= */}
      <section style={styles.missionSection}>
        <div className="container">
          <div style={styles.missionContent}>
            <div style={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                We founded ProfessionalResumeFree with a simple belief: <strong>everyone deserves the opportunity</strong> 
                to present their skills and experience in the best possible light. In today's 
                competitive job market, your resume is your first impression - we make sure it's 
                a great one.
              </p>
              <p>
                Our platform combines <strong>cutting-edge design with rigorous ATS optimization</strong> to ensure 
                your resume not only looks beautiful but also gets past automated screening 
                systems and into the hands of hiring managers. We help job seekers globally 
                create professional resumes that land interviews, <strong>completely free of charge</strong>.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', width: '100%'}}>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)'}}>
                <FiGlobe size={32} style={{margin: '0 auto 0.5rem', color: 'var(--primary)'}} />
                <span style={{fontSize: '1.5rem', fontWeight: '700', display: 'block'}}>Global</span>
                <span style={{color: 'var(--text-light)'}}>Reach</span>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)'}}>
                <FiZap size={32} style={{margin: '0 auto 0.5rem', color: 'var(--primary)'}} />
                <span style={{fontSize: '1.5rem', fontWeight: '700', display: 'block'}}>Fast</span>
                <span style={{color: 'var(--text-light)'}}>Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FEATURES SECTION ============= */}
      <section style={styles.featuresSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Why Choose ProfessionalResumeFree</h2>
            <p style={styles.sectionSubtitle}>
              We combine beautiful design with powerful functionality to help you stand out
            </p>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIconContainer}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
                {feature.stat && <span style={styles.featureStat}>{feature.stat}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= VALUES SECTION ============= */}
      <section style={styles.valuesSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Core Values</h2>
            <p style={styles.sectionSubtitle}>The principles that guide everything we do</p>
          </div>
          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} style={styles.valueCard}>
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={{marginBottom: '0.5rem'}}>{value.title}</h3>
                <p style={{color: 'var(--text-light)'}}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS SECTION ============= */}
      <section style={styles.testimonialsSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Success Stories</h2>
            <p style={styles.sectionSubtitle}>Real feedback from users who landed their dream jobs</p>
          </div>
          <div style={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <p style={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div style={styles.testimonialAuthor}>
                  <div style={styles.testimonialAuthorInfo}>
                    <div style={styles.testimonialName}>{testimonial.name}</div>
                    <div style={styles.testimonialRole}>{testimonial.role} • {testimonial.company}</div>
                    <div style={styles.testimonialRating}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= PARTNERS SECTION ============= */}
      <section style={styles.partnersSection}>
        <div className="container">
          <div style={styles.partnersGrid}>
            <span style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>Trusted by users of:</span>
            {partners.map((partner, index) => (
              <div key={index} style={styles.partnerItem}>
                {partner.icon}
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FAQ SECTION ============= */}
      <section style={styles.faqSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p style={styles.sectionSubtitle}>Everything you need to know about our platform</p>
          </div>
          <div style={styles.faqGrid}>
            {faqData.map((faq, index) => (
              <div key={index} style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>
                  <FiHelpCircle size={20} color="var(--primary)" style={{marginTop: '0.2rem', flexShrink: 0}} />
                  <span>{faq.question}</span>
                </h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section style={styles.ctaSection}>
        <div className="container">
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Build Your Dream Career?</h2>
            <p style={styles.ctaSubtitle}>
              Join thousands of job seekers who've landed better jobs with our professionally designed resumes. 
              <br/>
              <strong style={{ color: 'white', fontWeight: '700' }}>
                100% Free. No Sign-Up. No Paywalls. Instant PDF Download.
              </strong>
            </p>
            <div style={styles.ctaButtons}>
              <Link href="/resume-templates" className="btn-primary" style={{background: 'white', color: 'var(--primary)'}}>
                <FiDownload />
                Create Your Resume Now
                <span className="btn-badge" style={{background: 'var(--primary)', color: 'white'}}>Free</span>
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary" style={{borderColor: 'white', color: 'white'}}>
                <FiTool />
                Explore Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Update Strategy */}
      <div style={styles.updateStrategy}>
        <div className="container">
          <FiCalendar style={{marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle'}} />
          <span>Last updated: {currentDate} • Next update: {nextUpdateDate}</span>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  // Calculate next update date safely here where 'now' is a valid Date object
  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + 7);
  const nextUpdateDate = nextDate.toISOString().split('T')[0];
  
  return {
    props: {
      currentDate,
      lastModifiedDate,
      nextUpdateDate
    },
    revalidate: 3600 // 24 hours
  };
}

export default AboutPage;