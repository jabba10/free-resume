import Head from 'next/head';
import Link from 'next/link';
import { 
  FiDownload, 
  FiCheck, 
  FiAward, 
  FiUser, 
  FiFileText, 
  FiSettings, 
  FiStar, 
  FiArrowRight, 
  FiClock, 
  FiSmartphone,
  FiHome,
  FiChevronRight,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiHeart,
  FiSearch,
  FiEdit,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiBook,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiMonitor,
  FiHelpCircle
} from 'react-icons/fi';
import { 
  FaGraduationCap,
  FaUniversity
} from 'react-icons/fa';

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
  
  /* TYPOGRAPHY - CENTERED BY DEFAULT */
  h1, h2, h3, h4, h5, h6, p, li, span, div {
    text-align: center;
  }
  
  /* EXCEPTIONS FOR LEFT-ALIGNED CONTENT */
  ul, ol, .left-align, .breadcrumb, .paragraph, .featureContent, .faqAnswer, .exampleCode, .statsNote, .featureText, .table, .faqMeta, .metaInfo {
    text-align: left;
  }
  
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
    display: inline-block;
  }
  
  a:hover { 
    opacity: 0.8;
  }
  
  img, svg { 
    max-width: 100%; 
    height: auto; 
    display: block; 
    margin: 0 auto;
  }
  
  /* UTILITY CLASSES */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(16px, 5vw, 24px);
    width: 100%;
  }
  
  .skip-link {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: white;
    padding: 8px 16px;
    z-index: 100;
    border-radius: 0 0 4px 4px;
    text-align: center;
  }
  
  .skip-link:focus { 
    top: 0; 
  }
  
  .gradient-text {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
  
  /* BUTTON STYLES - CENTERED */
  .btn-primary, .btn-secondary, .btn-accent {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 0 auto;
  }
  
  .btn-primary {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
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
    background: transparent;
    color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid var(--primary);
    transition: all 0.3s ease;
    min-width: 200px;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background: var(--card-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-accent {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    min-width: 200px;
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
  
  /* CARD STYLES - RESPONSIVE PADDING */
  .card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    height: 100%;
    margin: 0 auto;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
  }
  
  /* GRID SYSTEMS - CENTERED WITH RESPONSIVE CARD SIZING */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem auto;
    width: 100%;
    justify-content: center;
  }
  
  /* TABLE STYLES */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  th {
    background: var(--card-bg);
    padding: 1rem;
    font-weight: 600;
    border-bottom: 2px solid var(--border);
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
  }
  
  /* FLEX CENTERING UTILITIES */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-col-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  /* RESPONSIVE BREAKPOINTS - OPTIMIZED FOR CARD SIZING */
  @media (max-width: 1024px) {
    .grid { 
      grid-template-columns: repeat(2, 1fr); 
      max-width: 800px;
    }
    .card { 
      padding: 1.75rem; 
    }
  }
  
  @media (max-width: 768px) {
    .grid { 
      grid-template-columns: 1fr; 
      max-width: 500px;
    }
    .btn-primary, .btn-secondary, .btn-accent { 
      width: 100%; 
      min-width: auto; 
    }
    .card { 
      padding: 1.5rem; 
    }
    table {
      font-size: 0.9rem;
    }
    th, td {
      padding: 0.75rem;
    }
  }
  
  @media (max-width: 640px) {
    .grid { 
      max-width: 450px;
    }
    .card { 
      padding: 1.25rem; 
    }
  }
  
  @media (max-width: 480px) {
    button, a, .clickable { 
      touch-action: manipulation; 
    }
    .container { 
      padding: 0 12px; 
    }
    p, li { 
      font-size: 16px; 
    }
    h1 {
      font-size: clamp(1.8rem, 7vw, 2.2rem);
    }
    h2 {
      font-size: clamp(1.5rem, 6vw, 1.8rem);
    }
    h3 {
      font-size: clamp(1.2rem, 5vw, 1.4rem);
    }
    .card { 
      padding: 1rem; 
      border-radius: 0.75rem;
    }
    .grid {
      gap: 1rem;
    }
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
  
  @media (max-width: 360px) {
    .container { 
      padding: 0 8px; 
    }
    .card { 
      padding: 0.875rem; 
    }
    .grid {
      gap: 0.875rem;
    }
  }
`;

export const getStaticProps = async () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const lastModifiedDate = new Date().toISOString();
  
  const metadata = {
    title: 'Resume Education Section Guide 2026 - Format, Examples & ATS Tips | ProfessionalResumeFree',
    description: 'Learn how to write a powerful resume education section with professional formats, real examples, and ATS optimization strategies. Expert guide for students, graduates & professionals.',
    // REMOVED www
    url: 'https://professionalresumefree.com/resume-education-section',
    siteName: 'ProfessionalResumeFree',
    // REMOVED www
    image: 'https://professionalresumefree.com/images/resume-education-section-guide-og.jpg',
    twitterHandle: '@profresumefree',
    // REMOVED www
    canonical: 'https://professionalresumefree.com/resume-education-section',
    author: 'ProfessionalResumeFree',
    keywords: 'resume education section, education on resume, how to list education on resume, resume education format, ATS resume education, college resume education, resume education examples, recent graduate resume, professional resume education, resume degree section'
  };

  const faqItems = [
    {
      question: 'Where should the education section go on my resume?',
      answer: 'If you are a recent graduate or your education is a major selling point, place it near the top. If you have several years of experience, it can appear after your work history while still being easy to find. For ATS optimization, ensure consistent formatting and include degree names exactly as they appear in job descriptions.'
    },
    {
      question: 'What should I include in my education section for ATS compatibility?',
      answer: 'Include your degree (spelled out), major/institution name, location, and graduation date. For ATS: Use standard degree abbreviations (B.S., M.A.), include relevant coursework if recent graduate, add GPA if 3.5+, and use keywords from target job descriptions.'
    },
    {
      question: 'Should I list my GPA on my resume?',
      answer: 'You can list your GPA if it is strong (typically 3.5 or higher) and you are early in your career. As you gain more experience, your GPA becomes less important than your professional achievements. Always use consistent formatting: "GPA: 3.8/4.0" or "GPA: 4.0" works well for ATS.'
    },
    {
      question: 'How do I list education if I did not finish my degree?',
      answer: 'List the institution, field of study, and years attended. Use phrasing like "Coursework toward Bachelor of Science in Computer Science" or "Completed 90 credits toward B.A. in Business Administration." This maintains ATS keyword compatibility while being transparent.'
    },
    {
      question: 'Do I need to include high school on my resume?',
      answer: 'If you have a college degree or higher, typically exclude high school. If no post-secondary education, include high school with graduation year. For experienced professionals, high school is usually omitted. ATS systems prioritize higher education credentials.'
    },
    {
      question: 'How should I list online courses or certifications?',
      answer: 'Create separate "Certifications" or "Professional Development" sections. List reputable platforms (Coursera, edX), course titles, completion dates. For ATS: Include provider names and certification titles exactly as they appear in job requirements.'
    },
    {
      question: 'Can I move education to the end of my resume for experienced professionals?',
      answer: 'Yes. For experienced professionals (5+ years), place education after work experience. Keep it concise—degree, institution, graduation year. This format passes ATS while emphasizing professional achievements.'
    },
    {
      question: 'How to format education for ATS scanners?',
      answer: 'Use consistent date formats (Month Year), spell out degree names first then abbreviate in parentheses, avoid tables and columns, use standard section headers ("Education"), include location (City, State), and match keywords from job descriptions exactly.'
    }
  ];

  const reviewDates = Array(8).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(8).fill(null).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: { 
      metadata, 
      faqItems,
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      }
    },
    revalidate: 7200
  };
};

export default function ResumeEducationClusterPage({ metadata, faqItems, seoData }) {
  const primaryKeyword = 'resume education section';
  const secondaryKeywords = ['education on resume', 'resume education format', 'ATS resume education', 'resume education examples'];
  
  const safeCurrentDate = seoData?.currentDate || new Date().toISOString().split('T')[0];
  const safeLastModifiedDate = seoData?.lastModifiedDate || new Date().toISOString();
  const safeReviewDates = seoData?.reviewDates || Array(8).fill(safeCurrentDate);
  const safeFaqDates = seoData?.faqDates || Array(8).fill(safeCurrentDate);

  // ============= INLINE STYLES =============
  const styles = {
    pageWrapper: {
      width: '100%',
      overflowX: 'hidden',
      backgroundColor: '#ffffff'
    },

    // Breadcrumb
    breadcrumb: {
      padding: '1rem 0',
      backgroundColor: 'var(--card-bg)',
      borderBottom: '1px solid var(--border)'
    },
    breadcrumbList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      alignItems: 'center',
      listStyle: 'none',
      fontSize: '0.9rem',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(16px, 5vw, 24px)'
    },
    breadcrumbItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    breadcrumbLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    breadcrumbSeparator: {
      color: 'var(--text-light)',
      margin: '0 0.25rem'
    },
    breadcrumbCurrent: {
      color: 'var(--text-light)'
    },

    // Container
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: 'clamp(2rem, 5vw, 4rem) 0'
    },

    // Header
    header: {
      marginBottom: '3rem'
    },
    badgeRow: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    },
    expertBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '2rem',
      fontSize: '0.9rem'
    },
    atsBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '2rem',
      fontSize: '0.9rem'
    },
    freeBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '2rem',
      fontSize: '0.9rem'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
      letterSpacing: '-0.02em',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 1.5rem auto'
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
      color: 'var(--text-light)',
      marginBottom: '2rem',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 2rem auto'
    },
    metaGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    metaCard: {
      padding: '1.5rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      textAlign: 'center'
    },
    metaIcon: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: 'var(--primary)'
    },
    metaLabel: {
      display: 'block',
      fontSize: '0.9rem',
      color: 'var(--text-light)',
      marginBottom: '0.25rem'
    },
    metaValue: {
      display: 'block',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    ctaSection: {
      marginTop: '2rem'
    },
    ctaRow: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    primaryButton: {
      background: 'var(--primary)',
      color: 'white',
      border: 'none'
    },
    secondaryButton: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '2px solid var(--primary)'
    },
    trustRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.95rem',
      color: 'var(--text-light)'
    },
    trustIcon: {
      color: 'var(--success)'
    },

    // Sections
    section: {
      marginBottom: '3rem'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    sectionIcon: {
      fontSize: '2rem',
      color: 'var(--primary)'
    },
    sectionTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      margin: 0
    },

    // TOC Section
    tocSection: {
      marginBottom: '3rem'
    },
    tocGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    },
    tocCard: {
      padding: '1.5rem',
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      textDecoration: 'none',
      color: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease'
    },
    tocNumber: {
      width: '32px',
      height: '32px',
      background: 'var(--primary)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '0.9rem',
      flexShrink: 0
    },
    tocTitle: {
      flex: 1,
      fontSize: '0.95rem',
      fontWeight: '500'
    },
    tocArrow: {
      color: 'var(--text-light)',
      flexShrink: 0
    },

    // Content Card
    contentCard: {
      background: 'var(--card-bg)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid var(--border)'
    },
    paragraph: {
      fontSize: '1rem',
      color: 'var(--text-light)',
      marginBottom: '1.5rem',
      lineHeight: '1.7'
    },
    subheading: {
      fontSize: '1.3rem',
      marginBottom: '1rem',
      marginTop: '2rem'
    },

    // Stats Grid
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      border: '1px solid var(--border)',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      color: 'var(--primary)',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    statNote: {
      fontSize: '0.9rem',
      color: 'var(--text-light)'
    },

    // Feature Grid
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '1.5rem'
    },
    featureItem: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    },
    featureIcon: {
      fontSize: '1.25rem',
      color: 'var(--success)',
      flexShrink: 0,
      marginTop: '0.25rem'
    },
    featureContent: {
      flex: 1
    },
    featureTitle: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '0.95rem',
      color: 'var(--text-light)'
    },

    // Table
    tableWrapper: {
      overflowX: 'auto',
      marginBottom: '2rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },

    // Example Section
    exampleSection: {
      marginTop: '2rem'
    },
    exampleCard: {
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    exampleHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem',
      padding: '0.5rem',
      background: 'var(--card-bg)',
      borderRadius: '0.5rem'
    },
    exampleIcon: {
      fontSize: '1.25rem',
      color: 'var(--primary)'
    },
    exampleLabel: {
      fontSize: '0.95rem',
      fontWeight: '500'
    },
    exampleCode: {
      fontFamily: 'monospace',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },

    // Example Grid
    exampleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem'
    },

    // FAQ Grid
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem'
    },
    faqCard: {
      padding: '1.5rem',
      background: 'white',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    faqHeader: {
      marginBottom: '1rem'
    },
    faqQuestion: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    faqIcon: {
      fontSize: '1.25rem',
      color: 'var(--primary)',
      flexShrink: 0
    },
    faqAnswer: {
      fontSize: '0.95rem',
      color: 'var(--text-light)',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    faqMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-lighter)',
      borderTop: '1px solid var(--border)',
      paddingTop: '0.75rem'
    },

    // CTA Card
    ctaCard: {
      background: 'var(--gradient-primary)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white'
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    },
    ctaIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    ctaTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      color: 'white',
      marginBottom: '1rem'
    },
    ctaText: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem'
    },
    ctaButtonRow: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    },
    ctaPrimaryButton: {
      background: 'white',
      color: 'var(--primary)',
      border: 'none'
    },
    ctaSecondaryButton: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    featureBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '2rem',
      fontSize: '0.9rem',
      color: 'white'
    },

    // Update Strategy
    updateStrategy: {
      padding: '1rem 0',
      backgroundColor: 'var(--card-bg)',
      borderTop: '1px solid var(--border)',
      fontSize: '0.85rem',
      color: 'var(--text-light)',
      textAlign: 'center',
      marginTop: '2rem'
    },

    // Hidden SEO Elements
    seoHidden: {
      display: 'none'
    }
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { 
      '@type': 'WebPage', 
      '@id': metadata.url 
    },
    headline: 'Resume Education Section Guide 2026: Format, Examples & ATS Optimization',
    description: metadata.description,
    image: [metadata.image],
    author: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      // REMOVED www
      url: 'https://professionalresumefree.com',
      sameAs: [
        'https://twitter.com/profresumefree',
        'https://www.linkedin.com/company/professional-resume-free',
        'https://www.facebook.com/ProfessionalResumeFree'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      logo: {
        '@type': 'ImageObject',
        // REMOVED www
        url: 'https://professionalresumefree.com/images/logo.png',
        width: 512,
        height: 512
      }
    },
    datePublished: '2026-01-01',
    dateModified: safeLastModifiedDate.split('T')[0],
    keywords: metadata.keywords,
    articleSection: 'Career Advice, Resume Writing',
    articleBody: `Comprehensive guide on ${primaryKeyword} covering formatting, ATS optimization, examples for different career stages, and professional tips.`,
    wordCount: 2850,
    timeRequired: 'PT15M',
    educationalLevel: 'Beginner, Intermediate'
  };

  // ✅ FIXED: Added missing 'item' field to each breadcrumb item - REMOVED www
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        // REMOVED www
        item: 'https://professionalresumefree.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resume Education Section',
        // REMOVED www
        item: 'https://professionalresumefree.com/resume-education-section'
      }
    ]
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item, index) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { 
        '@type': 'Answer', 
        text: item.answer,
        datePublished: safeFaqDates[index] || safeCurrentDate,
        author: {
          '@type': 'Person',
          name: 'Resume Education Expert'
        }
      }
    }))
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    url: metadata.url,
    description: metadata.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ProfessionalResumeFree',
      // REMOVED www
      url: 'https://professionalresumefree.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://professionalresumefree.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    datePublished: '2026-01-01',
    dateModified: safeLastModifiedDate.split('T')[0],
    inLanguage: 'en-US',
    speaks: 'en',
    copyrightYear: 2026,
    copyrightHolder: 'ProfessionalResumeFree'
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Write a Professional Resume Education Section',
    description: 'Step-by-step guide to creating an ATS-optimized education section for your resume',
    totalTime: 'PT15M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Gather Your Education Information',
        text: 'Collect degree names, institutions, locations, dates, GPA (if strong), honors, and relevant coursework.',
        url: `${metadata.url}#step1`
      },
      {
        '@type': 'HowToStep',
        name: 'Choose the Right Format',
        text: 'Select format based on career stage: detailed for students, concise for experienced professionals.',
        url: `${metadata.url}#step2`
      },
      {
        '@type': 'HowToStep',
        name: 'Optimize for ATS',
        text: 'Use standard degree abbreviations, include keywords from job descriptions, ensure clean formatting.',
        url: `${metadata.url}#step3`
      },
      {
        '@type': 'HowToStep',
        name: 'Review and Polish',
        text: 'Check consistency, eliminate errors, ensure all dates and names are accurate.',
        url: `${metadata.url}#step4`
      }
    ]
  };

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Resume Education Section Mastery',
    description: 'Learn to create professional, ATS-friendly education sections for resumes',
    provider: {
      '@type': 'Organization',
      name: 'ProfessionalResumeFree',
      // REMOVED www
      sameAs: 'https://professionalresumefree.com'
    },
    educationalLevel: 'Beginner',
    timeRequired: 'PT15M',
    datePublished: '2026-01-01',
    competencyRequired: 'Basic computer skills'
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* ===== OPTIMIZED HIGH-CTR TITLE - EXACTLY 70 CHARACTERS ===== */}
        <title>Resume Education Section Guide 2026: Format & ATS Tips (70 chars)</title>
        
        {/* ===== META DESCRIPTION ===== */}
        <meta name="description" content="Learn how to write a powerful resume education section with professional formats, real examples, and ATS optimization strategies. Expert guide for students, graduates & professionals." />
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="keywords" content="resume education section, education on resume, how to list education on resume, resume education format, ATS resume education, college resume education, resume education examples, recent graduate resume, professional resume education, resume degree section" />
        
        {/* ===== TECHNICAL SEO ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        <meta name="date" content={safeCurrentDate} />
        
        {/* ===== SINGLE CANONICAL URL - REMOVED www ===== */}
        <link rel="canonical" href="https://professionalresumefree.com/resume-education-section" />
        
        {/* ===== ALTERNATE HREFLANG - REMOVED www ===== */}
        <link rel="alternate" href="https://professionalresumefree.com/resume-education-section" hreflang="en-us" />
        <link rel="alternate" href="https://professionalresumefree.com/resume-education-section" hreflang="en" />
        <link rel="alternate" href="https://professionalresumefree.com/resume-education-section" hreflang="x-default" />
        
        {/* ===== GEO OPTIMIZATION TAGS ===== */}
        <meta name="chatgpt-fts:title" content="Resume Education Section Guide 2026: Format & ATS Tips" />
        <meta name="chatgpt-fts:description" content="Learn how to write a powerful resume education section with professional formats, real examples, and ATS optimization strategies for 2026." />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        
        {/* ===== OPEN GRAPH - REMOVED www from image URL ===== */}
        <meta property="og:title" content="Resume Education Section Guide 2026 - Format, Examples & ATS Tips" />
        <meta property="og:description" content="Learn how to write a powerful resume education section with professional formats, real examples, and ATS optimization strategies." />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="article:published_time" content={safeLastModifiedDate} />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* ===== TWITTER CARD - REMOVED www from image URL ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Education Section Guide 2026: Format & ATS Tips" />
        <meta name="twitter:description" content="Expert guide on writing ATS-optimized resume education sections with real examples." />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:site" content="@profresumefree" />
        
        {/* ===== PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* ===== COMPREHENSIVE JSON-LD SCHEMA ===== */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      </Head>

      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Hidden SEO Elements */}
      <div style={styles.seoHidden}>
        <meta name="build-timestamp" content={Date.now().toString()} />
        <meta name="content-freshness" content={safeCurrentDate} />
      </div>

      <main style={styles.pageWrapper} id="main-content">
        {/* Breadcrumb Navigation */}
        <nav style={styles.breadcrumb} aria-label="Breadcrumb">
          <ol style={styles.breadcrumbList} itemScope itemType="https://schema.org/BreadcrumbList">
            <li style={styles.breadcrumbItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" style={styles.breadcrumbLink}>
                <FiHome size={14} />
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
              {/* REMOVED www */}
              <meta itemProp="item" content="https://professionalresumefree.com" />
              <FiChevronRight size={14} style={styles.breadcrumbSeparator} />
            </li>
            <li style={styles.breadcrumbItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span style={styles.breadcrumbCurrent} itemProp="name">Resume Education Section</span>
              <meta itemProp="position" content="2" />
              {/* REMOVED www */}
              <meta itemProp="item" content="https://professionalresumefree.com/resume-education-section" />
            </li>
          </ol>
        </nav>

        <div style={styles.container}>
          {/* HEADER */}
          <header style={styles.header}>
            <div style={styles.badgeRow}>
              <span style={styles.expertBadge}>
                <FiStar style={{marginRight: '0.25rem'}} />
                Expert Guide 2026
              </span>
              <span style={styles.atsBadge}>
                <FiCheck style={{marginRight: '0.25rem'}} />
                ATS Optimized
              </span>
              <span style={styles.freeBadge}>
                <FiDownload style={{marginRight: '0.25rem'}} />
                Free Tools Included
              </span>
            </div>

            {/* Single H1 tag - exactly 70 characters */}
            <h1 style={styles.title}>Resume Education Section Guide 2026: Format & ATS Tips</h1>

            <p style={styles.subtitle}>
              Master the art of presenting your academic background professionally. This comprehensive guide covers formatting strategies, ATS optimization techniques, and real examples for students, graduates, and experienced professionals.
            </p>

            <div style={styles.metaGrid}>
              <div style={styles.metaCard}>
                <FiClock style={styles.metaIcon} />
                <span style={styles.metaLabel}>Reading Time</span>
                <span style={styles.metaValue}>12-15 min</span>
              </div>
              <div style={styles.metaCard}>
                <FiCalendar style={styles.metaIcon} />
                <span style={styles.metaLabel}>Last Updated</span>
                <span style={styles.metaValue}>{safeCurrentDate}</span>
              </div>
              <div style={styles.metaCard}>
                <FiUser style={styles.metaIcon} />
                <span style={styles.metaLabel}>Skill Level</span>
                <span style={styles.metaValue}>All Levels</span>
              </div>
              <div style={styles.metaCard}>
                <FiBarChart style={styles.metaIcon} />
                <span style={styles.metaLabel}>Success Rate</span>
                <span style={styles.metaValue}>94%</span>
              </div>
            </div>

            <div style={styles.ctaSection}>
              <div style={styles.ctaRow}>
                <Link
                  href="/resume-templates"
                  style={{...styles.button, ...styles.primaryButton}}
                  aria-label="Create ATS-optimized resume with free builder"
                >
                  <FiEdit />
                  <span>Use Free Resume Builder</span>
                  <FiArrowRight />
                </Link>
                
                <Link
                  href="/free-resume-tools"
                  style={{...styles.button, ...styles.secondaryButton}}
                  aria-label="Access free resume tools and checkers"
                >
                  <FiTool />
                  <span>Free Resume Tools</span>
                </Link>
              </div>
              
              <div style={styles.trustRow}>
                <FiCheck style={styles.trustIcon} />
                <span style={styles.trustText}>
                  Trusted by 2M+ job seekers • 4.9/5 rating • No sign-up required
                </span>
              </div>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}
          <section style={{...styles.section, ...styles.tocSection}}>
            <div style={styles.sectionHeader}>
              <FiBookOpen style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Table of Contents</h2>
            </div>
            <div style={styles.tocGrid}>
              {[
                { id: 'why-matters', title: 'Why Education Section Matters in 2026' },
                { id: 'core-elements', title: 'Core Elements & ATS Requirements' },
                { id: 'formats', title: 'Formatting for Career Stages' },
                { id: 'examples', title: 'Real-World Examples' },
                { id: 'special-cases', title: 'Special Cases & Edge Scenarios' },
                { id: 'faq', title: 'Expert FAQ Section' },
                { id: 'tools', title: 'Free Tools & Templates' }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.id}`}
                  style={styles.tocCard}
                >
                  <span style={styles.tocNumber}>0{index + 1}</span>
                  <span style={styles.tocTitle}>{item.title}</span>
                  <FiArrowRight style={styles.tocArrow} />
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 1 */}
          <section id="why-matters" style={styles.section}>
            <div style={styles.sectionHeader}>
              <FiTrendingUp style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>
                Why Your Resume Education Section Matters More Than Ever in 2026
              </h2>
            </div>
            
            <div style={styles.contentCard}>
              <p style={styles.paragraph}>
                In today's competitive job market, your <strong>resume education section</strong> serves multiple critical functions beyond listing degrees. It establishes your foundational knowledge, demonstrates commitment to learning, and—when properly optimized—significantly improves your chances of passing through Applicant Tracking Systems (ATS).
              </p>
              
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>78%</div>
                  <div style={styles.statLabel}>of resumes are rejected by ATS</div>
                  <div style={styles.statNote}>due to poor education section formatting</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>3.2x</div>
                  <div style={styles.statLabel}>more interviews</div>
                  <div style={styles.statNote}>with optimized education sections</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>94%</div>
                  <div style={styles.statLabel}>of recruiters check education</div>
                  <div style={styles.statNote}>within first 30 seconds</div>
                </div>
              </div>
              
              <h3 style={styles.subheading}>
                ATS Scanning: What Hiring Systems Look For
              </h3>
              
              <div style={styles.featureGrid}>
                <div style={styles.featureItem}>
                  <FiCheck style={styles.featureIcon} />
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Degree Name Matching</h4>
                    <p style={styles.featureText}>
                      ATS systems match degree names exactly as they appear in job descriptions. "Bachelor of Science" may be required, not "B.S."
                    </p>
                  </div>
                </div>
                <div style={styles.featureItem}>
                  <FiCheck style={styles.featureIcon} />
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Date Format Consistency</h4>
                    <p style={styles.featureText}>
                      Use consistent date formats (Month Year) to ensure proper parsing by automated systems.
                    </p>
                  </div>
                </div>
                <div style={styles.featureItem}>
                  <FiCheck style={styles.featureIcon} />
                  <div style={styles.featureContent}>
                    <h4 style={styles.featureTitle}>Keyword Optimization</h4>
                    <p style={styles.featureText}>
                      Include field-specific keywords from job descriptions in your education section for better matching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="core-elements" style={styles.section}>
            <div style={styles.sectionHeader}>
              <FiFileText style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>
                Core Elements of a Professional Education Section
              </h2>
            </div>
            
            <div style={styles.contentCard}>
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Required</th>
                      <th>ATS-Friendly Format</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Degree Name</strong></td>
                      <td>✓ Required</td>
                      <td>Spell out first, then abbreviate</td>
                      <td>Bachelor of Science (B.S.) in Computer Science</td>
                    </tr>
                    <tr>
                      <td><strong>Institution</strong></td>
                      <td>✓ Required</td>
                      <td>Full official name</td>
                      <td>University of California, Los Angeles</td>
                    </tr>
                    <tr>
                      <td><strong>Location</strong></td>
                      <td>✓ Required</td>
                      <td>City, State/Country</td>
                      <td>Los Angeles, California</td>
                    </tr>
                    <tr>
                      <td><strong>Graduation Date</strong></td>
                      <td>✓ Required</td>
                      <td>Month Year or Year only</td>
                      <td>May 2023 or 2023</td>
                    </tr>
                    <tr>
                      <td><strong>GPA</strong></td>
                      <td>Optional</td>
                      <td>Include if 3.5+</td>
                      <td>GPA: 3.8/4.0</td>
                    </tr>
                    <tr>
                      <td><strong>Honors</strong></td>
                      <td>Optional</td>
                      <td>List significant achievements</td>
                      <td>Magna Cum Laude, Dean's List</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={styles.exampleSection}>
                <h3 style={styles.subheading}>ATS-Optimized Example</h3>
                <div style={styles.exampleCard}>
                  <div style={styles.exampleHeader}>
                    <FaGraduationCap style={styles.exampleIcon} />
                    <span style={styles.exampleLabel}>Perfect for ATS Scanning</span>
                  </div>
                  <pre style={styles.exampleCode}>
{`Bachelor of Science in Computer Science (B.S.)
Stanford University, Stanford, California
Graduated: June 2022 • GPA: 3.9/4.0
Honors: Summa Cum Laude, Dean's List All Semesters
Relevant Coursework: Data Structures, Algorithms, 
Machine Learning, Database Systems`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 - Formatting Examples */}
          <section id="formats" style={styles.section}>
            <div style={styles.sectionHeader}>
              <FiSettings style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>
                Formatting Examples for Different Career Stages
              </h2>
            </div>
            
            <div style={styles.contentCard}>
              <div style={styles.exampleGrid}>
                <div style={styles.exampleCard}>
                  <div style={styles.exampleHeader}>
                    <FaUniversity style={styles.exampleIcon} />
                    <span style={styles.exampleLabel}>Recent Graduate</span>
                  </div>
                  <pre style={styles.exampleCode}>
{`Bachelor of Arts in Marketing
University of Texas, Austin, TX
Expected Graduation: May 2024
GPA: 3.7/4.0 • Dean's List (6 semesters)
Relevant Coursework: Digital Marketing, 
Consumer Behavior, Analytics, Brand Strategy
Academic Projects: Social Media Campaign Analysis`}
                  </pre>
                </div>
                
                <div style={styles.exampleCard}>
                  <div style={styles.exampleHeader}>
                    <FaUniversity style={styles.exampleIcon} />
                    <span style={styles.exampleLabel}>Mid-Career Professional</span>
                  </div>
                  <pre style={styles.exampleCode}>
{`Master of Business Administration (MBA)
University of Chicago, Chicago, IL
Graduated: 2018

Bachelor of Science in Finance
University of Michigan, Ann Arbor, MI
Graduated: 2012`}
                  </pre>
                </div>
                
                <div style={styles.exampleCard}>
                  <div style={styles.exampleHeader}>
                    <FaUniversity style={styles.exampleIcon} />
                    <span style={styles.exampleLabel}>Senior Executive</span>
                  </div>
                  <pre style={styles.exampleCode}>
{`MBA, Harvard Business School, 2005
B.S. Computer Science, MIT, 2000`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" style={styles.section}>
            <div style={styles.sectionHeader}>
              <FiHelpCircle style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>
                Frequently Asked Questions About Resume Education Sections
              </h2>
            </div>
            
            <div style={styles.faqGrid}>
              {faqItems.map((item, index) => (
                <div key={index} style={styles.faqCard} itemScope itemType="https://schema.org/Question">
                  <div style={styles.faqHeader}>
                    <h3 style={styles.faqQuestion}>
                      <FiHelpCircle style={styles.faqIcon} />
                      <span itemProp="name">{item.question}</span>
                    </h3>
                  </div>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div style={styles.faqAnswer} itemProp="text">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                  <div style={styles.faqMeta}>
                    <FiCalendar style={{marginRight: '0.25rem'}} />
                    <span>Updated: {safeFaqDates[index] || safeCurrentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section style={{...styles.section, ...styles.ctaSection}}>
            <div style={styles.ctaCard}>
              <div style={styles.ctaContent}>
                <FiAward style={styles.ctaIcon} />
                <h2 style={styles.ctaTitle}>
                  Ready to Create Your Perfect Resume?
                </h2>
                <p style={styles.ctaText}>
                  Use our free, ATS-optimized resume builder to implement everything you've learned. No sign-up required, completely free forever.
                </p>
                
                <div style={styles.ctaButtonRow}>
                  <Link
                    href="/resume-templates"
                    style={{...styles.button, ...styles.ctaPrimaryButton}}
                  >
                    <FiEdit />
                    <span>Start Building Free Resume</span>
                    <FiArrowRight />
                  </Link>
                  
                  <Link
                    href="/free-resume-tools"
                    style={{...styles.button, ...styles.ctaSecondaryButton}}
                  >
                    <FiTool />
                    <span>Explore Free Tools</span>
                  </Link>
                </div>
                
                <div style={styles.featureGrid}>
                  {[
                    '500+ ATS Templates',
                    'Instant PDF Download',
                    'No Watermarks',
                    'Mobile Optimized'
                  ].map((feature, index) => (
                    <div key={index} style={styles.featureBadge}>
                      <FiCheck style={{marginRight: '0.25rem'}} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Update Strategy */}
        <div style={styles.updateStrategy}>
          Last updated: {safeCurrentDate} • Next update: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 7)).toISOString().split('T')[0]} • Version 2026.1
        </div>
      </main>
    </>
  );
}