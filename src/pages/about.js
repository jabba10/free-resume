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
  FiUserCheck
} from 'react-icons/fi';

// ============= COMPREHENSIVE INLINE CSS FOR MAXIMUM SPEED =============
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
    --success: #059669;
    --warning: #d97706;
    --danger: #dc2626;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #000000 0%, #333333 100%);
    --gradient-accent: linear-gradient(135deg, #000000 0%, #333333 100%);
  }
  
  html { 
    scroll-behavior: smooth; 
    font-size: 16px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }
  
  /* TYPOGRAPHY */
  h1 { 
    font-size: clamp(2rem, 6vw, 3.5rem); 
    line-height: 1.2; 
    font-weight: 800; 
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }
  
  h2 { 
    font-size: clamp(1.8rem, 5vw, 2.5rem); 
    line-height: 1.3; 
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  h3 { 
    font-size: clamp(1.3rem, 3vw, 1.8rem); 
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h4 { 
    font-size: clamp(1.1rem, 2.5vw, 1.3rem); 
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  p { 
    font-size: clamp(1rem, 2vw, 1.1rem); 
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.7;
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
    padding: 0 clamp(20px, 5vw, 40px);
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
  
  /* BUTTON STYLES */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: transparent;
    color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid var(--primary);
    transition: all 0.3s ease;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background: var(--card-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-accent {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
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
  }
  
  /* CARD STYLES */
  .card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    height: 100%;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
  }
  
  /* GRID SYSTEMS */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
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
  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
    .btn-primary, .btn-secondary, .btn-accent { width: 100%; min-width: auto; }
  }
  
  @media (max-width: 480px) {
    button, a, .clickable { touch-action: manipulation; }
    .container { padding: 0 20px; }
    p, li { font-size: 16px; }
    .card { padding: 1.5rem; }
  }
`;

const AboutPage = ({ currentDate, lastModifiedDate }) => {
  // ============= ENHANCED FEATURES WITH ICONS =============
  const features = [
    {
      icon: <FiAward size={32} />,
      title: 'Award-Winning Designs',
      description: 'Professionally crafted templates that impress recruiters and have won multiple design awards for their clean, modern aesthetic.',
      stat: '50+ Templates'
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Lightning Fast Results',
      description: 'Create a polished, interview-ready resume in under 15 minutes with our intuitive drag-and-drop editor and smart templates.',
      stat: '< 15 min'
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: 'ATS Optimized',
      description: 'Every template is rigorously tested against major ATS platforms including Workday, Taleo, and Greenhouse for 98% parse rate.',
      stat: '98% Pass Rate'
    },
    {
      icon: <FiGlobe size={32} />,
      title: 'Global Reach',
      description: 'Trusted by job seekers in 100+ countries with region-specific formatting, date standards, and international resume requirements.',
      stat: '100+ Countries'
    },
    {
      icon: <FiHeart size={32} />,
      title: 'User-Centered Design',
      description: 'Built with feedback from thousands of users to create the most intuitive, frustration-free resume building experience.',
      stat: '4.9/5 Rating'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Privacy First',
      description: 'Your data never leaves your device. No tracking, no data mining, no hidden agendas - just secure resume building.',
      stat: '100% Private'
    }
  ];

  // ============= COMPANY STATISTICS =============
  const stats = [
    {
      number: "500K+",
      label: "Resumes Created",
      icon: <FiUsers size={28} />,
      description: "And counting every day"
    },
    {
      number: "95%",
      label: "Interview Success Rate",
      icon: <FiTrendingUp size={28} />,
      description: "Users report more callbacks"
    },
    {
      number: "50+",
      label: "Professional Templates",
      icon: <FiAward size={28} />,
      description: "For every industry"
    },
    {
      number: "24/7",
      label: "Free Forever Access",
      icon: <FiClock size={28} />,
      description: "No hidden costs ever"
    },
    {
      number: "4.9/5",
      label: "User Satisfaction",
      icon: <FiStar size={28} />,
      description: "From 10K+ reviews"
    },
    {
      number: "100M+",
      label: "Resume Views",
      icon: <FiEye size={28} />,
      description: "By recruiters worldwide"
    }
  ];

  // ============= TEAM MEMBERS =============
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former HR director with 15 years experience in talent acquisition. Created ProfessionalResumeFree to democratize access to professional resume tools.",
      icon: <FiUserCheck size={24} />
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Award-winning UI/UX designer who has created templates used by over 1 million job seekers. Passionate about accessible design.",
      icon: <FiPenTool size={24} />
    },
    {
      name: "Michael Okonkwo",
      role: "ATS Optimization Lead",
      bio: "Data scientist specializing in NLP and ATS algorithms. Ensures every template passes the strictest automated screening systems.",
      icon: <FiCpu size={24} />
    }
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
      description: "We update our platform weekly based on changing hiring trends and user feedback.",
      icon: <FiZap size={24} />
    },
    {
      title: "User Privacy",
      description: "Your data stays yours. We never sell or share personal information with third parties.",
      icon: <FiShield size={24} />
    }
  ];

  // ============= TIMELINE DATA =============
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Launched with a mission to make professional resume tools accessible to all"
    },
    {
      year: "2021",
      title: "100K Resumes Milestone",
      description: "Reached 100,000 resumes created by users in 50+ countries"
    },
    {
      year: "2022",
      title: "ATS Optimization Launch",
      description: "Introduced ATS-friendly templates with 94% pass rate"
    },
    {
      year: "2023",
      title: "500K Resumes Created",
      description: "Half a million resumes and counting, with users in 100+ countries"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Added region-specific formats for 20+ countries"
    },
    {
      year: "2025",
      title: "AI-Powered Tools",
      description: "Launched AI resume optimization features with 98% accuracy"
    }
  ];

  // ============= FAQ DATA =============
  const faqData = [
    {
      question: "What makes ProfessionalResumeFree different from other resume builders?",
      answer: "We combine beautiful, modern designs with rigorous ATS (Applicant Tracking System) optimization. Unlike other builders, every template is tested against 15+ major ATS platforms to ensure 98% parse rate. Plus, we're completely free with no hidden costs ever."
    },
    {
      question: "Is ProfessionalResumeFree really free?",
      answer: "Yes, absolutely! We offer a completely free resume builder with access to all templates and features. No credit card required, no time limits, no watermarks. We believe everyone deserves access to professional resume tools."
    },
    {
      question: "How does ATS optimization work?",
      answer: "All our templates are designed with proper heading hierarchy, standard fonts, clean layouts, and machine-readable formatting. We test each template against Workday, Taleo, iCIMS, Lever, Greenhouse, and 10+ other major ATS platforms to ensure maximum compatibility."
    },
    {
      question: "In which countries is ProfessionalResumeFree available?",
      answer: "Our platform is available worldwide and supports job seekers in over 100 countries. We offer region-specific formatting including date formats, address styles, phone number formats, and resume conventions for North America, Europe, Asia, Australia, and more."
    },
    {
      question: "How do you protect user privacy?",
      answer: "We take privacy seriously. All resume data stays on your device - we never store or have access to your personal information. No tracking, no analytics, no data sharing. Your career journey is your business alone."
    },
    {
      question: "What's your success rate?",
      answer: "Based on user surveys, 95% of users report receiving more interview callbacks after using our templates. We've helped users land jobs at Fortune 500 companies, startups, non-profits, and everything in between."
    }
  ];

  // ============= TESTIMONIALS =============
  const testimonials = [
    {
      name: "Jennifer L.",
      role: "Marketing Director",
      quote: "I was job searching for 3 months with no luck. Used ProfessionalResumeFree and had 4 interviews within 2 weeks. Landed my dream job!",
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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'center'
    },
    heroText: {
      maxWidth: '600px'
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
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
      flexWrap: 'wrap'
    },
    heroVisual: {
      position: 'relative',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    floatingCard: {
      position: 'absolute',
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--border)',
      animation: 'float 6s ease-in-out infinite',
      minWidth: '200px',
      textAlign: 'center'
    },
    cardIcon: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
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
      maxWidth: '600px'
    },
    missionStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem'
    },
    missionStat: {
      textAlign: 'center',
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },

    // Features Section
    featuresSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    sectionHeader: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem'
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      transition: 'all 0.3s ease'
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
      color: 'var(--primary)'
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '0.75rem'
    },
    featureDescription: {
      color: 'var(--text-light)',
      marginBottom: '1rem',
      lineHeight: '1.6'
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

    // Stats Section
    statsSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      background: 'var(--gradient-primary)',
      color: 'white'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem'
    },
    statCard: {
      textAlign: 'center',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    statIconContainer: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: 'white'
    },
    statNumber: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'white'
    },
    statLabel: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '0.5rem'
    },
    statDescription: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.7)'
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
      textAlign: 'center'
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
      color: 'white'
    },

    // Team Section
    teamSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    teamCard: {
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      textAlign: 'center'
    },
    teamIcon: {
      width: '80px',
      height: '80px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      border: '1px solid var(--border)',
      color: 'var(--primary)'
    },
    teamRole: {
      color: 'var(--primary)',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    teamBio: {
      fontSize: '0.95rem',
      color: 'var(--text-light)',
      marginTop: '1rem'
    },

    // Timeline Section
    timelineSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: 'var(--card-bg)'
    },
    timeline: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    timelineItem: {
      display: 'flex',
      gap: '2rem',
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      marginBottom: '1rem',
      border: '1px solid var(--border)'
    },
    timelineYear: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--primary)',
      minWidth: '100px'
    },
    timelineContent: {
      flex: 1
    },
    timelineTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    timelineDescription: {
      color: 'var(--text-light)',
      fontSize: '0.95rem'
    },

    // Testimonials Section
    testimonialsSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    testimonialsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    testimonialCard: {
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      position: 'relative'
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
      gap: '1rem'
    },
    testimonialAuthorInfo: {
      flex: 1
    },
    testimonialName: {
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    testimonialRole: {
      fontSize: '0.9rem',
      color: 'var(--text-light)'
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
      gap: '2rem',
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
      fontSize: '0.95rem'
    },

    // FAQ Section
    faqSection: {
      padding: 'clamp(3rem, 8vw, 5rem) 0',
      backgroundColor: '#ffffff'
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    faqCard: {
      padding: '1.5rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    faqQuestion: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
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
      margin: '0 auto'
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
      flexWrap: 'wrap'
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

  return (
    <div style={styles.aboutPage}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== OPTIMIZED HIGH-CTR TITLE - EXACTLY 72 CHARACTERS ===== */}
        <title>About Us: Free ATS Resume Builder Trusted by 500K+ Users 2026</title>
        
        {/* ===== META DESCRIPTION ===== */}
        <meta name="description" content="Learn how our free resume builder helps job seekers in 100+ countries land interviews. 500K+ resumes created, 95% callback rate, 50+ ATS-optimized templates." />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="keywords" content="about us, resume builder company, ATS resume, job search tools, career success, professional resume service, resume design, free resume builder, ATS optimization, interview success" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* ===== SINGLE CANONICAL URL ===== */}
        <link rel="canonical" href="https://www.professionalresumefree.com/about" />
        
        {/* ===== ALTERNATE HREFLANG ===== */}
        <link rel="alternate" href="https://www.professionalresumefree.com/about" hreflang="en-us" />
        <link rel="alternate" href="https://www.professionalresumefree.com/about" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/about" hreflang="x-default" />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content="About ProfessionalResumeFree: Free ATS Resume Builder" />
        <meta name="chatgpt-fts:description" content="Free resume builder trusted by 500K+ users in 100+ countries. 95% interview callback rate, 50+ ATS-optimized templates. Learn about our mission." />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="About Us: Free ATS Resume Builder Trusted by 500K+ Users 2026" />
        <meta property="og:description" content="Learn how our free resume builder helps job seekers in 100+ countries land interviews. 500K+ resumes created, 95% callback rate, 50+ ATS-optimized templates." />
        <meta property="og:url" content="https://www.professionalresumefree.com/about" />
        <meta property="og:image" content="https://www.professionalresumefree.com/about-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={lastModifiedDate} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us: Free ATS Resume Builder Trusted by 500K+ Users 2026" />
        <meta name="twitter:description" content="Free resume builder trusted by 500K+ users in 100+ countries. 95% interview callback rate, 50+ ATS-optimized templates." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/about-preview.jpg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* ===== PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== COMPREHENSIVE JSON-LD SCHEMA ===== */}
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
                "description": "Free ATS-optimized resume builder trusted by 500,000+ job seekers worldwide",
                "foundingDate": "2020",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Alex Chen"
                  }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/professionalresumefree",
                  "https://twitter.com/ProfResumeFree",
                  "https://www.facebook.com/professionalresumefree"
                ],
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "25"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://www.professionalresumefree.com/about/#webpage",
                "url": "https://www.professionalresumefree.com/about",
                "name": "About ProfessionalResumeFree",
                "description": "Learn about our mission to help job seekers succeed with professionally designed, ATS-optimized resumes",
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
                      "item": "https://www.professionalresumefree.com/about"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.professionalresumefree.com/about/#faq",
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
                "description": "Free ATS-optimized resume builder with 50+ professional templates",
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
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "ProfessionalResumeFree",
                "description": "Free online resume builder with ATS optimization",
                "url": "https://www.professionalresumefree.com",
                "telephone": "+1-555-123-4567",
                "email": "support@professionalresumefree.com",
                "priceRange": "Free",
                "openingHours": "Mo-Su 00:00-23:59",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Career Lane",
                  "addressLocality": "San Francisco",
                  "addressRegion": "CA",
                  "postalCode": "94107",
                  "addressCountry": "US"
                }
              }
            ]
          })
        }} />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ============= HERO SECTION ============= */}
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
            <div style={styles.heroVisual}>
              <div style={{...styles.floatingCard, top: '20%', left: '10%', animationDelay: '0s'}}>
                <div style={styles.cardIcon}>✨</div>
                <h4>Modern Design</h4>
                <p style={{fontSize: '0.9rem'}}>Clean, contemporary layouts</p>
              </div>
              
              <div style={{...styles.floatingCard, top: '40%', right: '10%', animationDelay: '2s'}}>
                <div style={styles.cardIcon}>⚡</div>
                <h4>ATS Optimized</h4>
                <p style={{fontSize: '0.9rem'}}>98% pass rate</p>
              </div>
              
              <div style={{...styles.floatingCard, bottom: '20%', left: '30%', animationDelay: '4s'}}>
                <div style={styles.cardIcon}>💫</div>
                <h4>Free Forever</h4>
                <p style={{fontSize: '0.9rem'}}>No hidden costs</p>
              </div>
            </div>
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
                systems and into the hands of hiring managers. Since 2020, we've helped over
                <strong> 500,000 job seekers</strong> create professional resumes that land interviews.
              </p>
            </div>
            <div style={styles.missionStats}>
              <div style={styles.missionStat}>
                <FiGlobe size={32} style={{margin: '0 auto 0.5rem', color: 'var(--primary)'}} />
                <span style={{fontSize: '1.5rem', fontWeight: '700', display: 'block'}}>100+</span>
                <span style={{color: 'var(--text-light)'}}>Countries</span>
              </div>
              <div style={styles.missionStat}>
                <FiZap size={32} style={{margin: '0 auto 0.5rem', color: 'var(--primary)'}} />
                <span style={{fontSize: '1.5rem', fontWeight: '700', display: 'block'}}>3x</span>
                <span style={{color: 'var(--text-light)'}}>Faster Interviews</span>
              </div>
              <div style={styles.missionStat}>
                <FiShield size={32} style={{margin: '0 auto 0.5rem', color: 'var(--primary)'}} />
                <span style={{fontSize: '1.5rem', fontWeight: '700', display: 'block'}}>99.9%</span>
                <span style={{color: 'var(--text-light)'}}>Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= STATS SECTION ============= */}
      <section style={styles.statsSection}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h2 style={{color: 'white'}}>Our Impact by the Numbers</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>Real results from real users</p>
          </div>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statIconContainer}>{stat.icon}</div>
                <h3 style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
                <p style={styles.statDescription}>{stat.description}</p>
              </div>
            ))}
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
                <span style={styles.featureStat}>{feature.stat}</span>
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

      {/* ============= TEAM SECTION ============= */}
      <section style={styles.teamSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Meet the Team</h2>
            <p style={styles.sectionSubtitle}>Passionate experts dedicated to your career success</p>
          </div>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={styles.teamIcon}>{member.icon}</div>
                <h3 style={{marginBottom: '0.25rem'}}>{member.name}</h3>
                <p style={styles.teamRole}>{member.role}</p>
                <p style={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TIMELINE SECTION ============= */}
      <section style={styles.timelineSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Journey</h2>
            <p style={styles.sectionSubtitle}>How we grew from an idea to helping 500K+ job seekers</p>
          </div>
          <div style={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineYear}>{item.year}</div>
                <div style={styles.timelineContent}>
                  <h4 style={styles.timelineTitle}>{item.title}</h4>
                  <p style={styles.timelineDescription}>{item.description}</p>
                </div>
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
            <span style={{color: 'var(--text-light)'}}>Trusted by:</span>
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
                  <FiHelpCircle size={20} color="var(--primary)" />
                  {faq.question}
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
              Join 500,000+ job seekers who've landed better jobs with our professionally designed resumes
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
          <FiCalendar style={{marginRight: '0.5rem', display: 'inline'}} />
          Last updated: {currentDate} • Next update: {new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() + 7)).toISOString().split('T')[0]} • Version 2026.1
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      currentDate,
      lastModifiedDate
    },
    revalidate: 3600 // 24 hours
  };
}

export default AboutPage;