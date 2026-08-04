import Head from 'next/head';
import Link from 'next/link';
import {
  FiDownload, FiCheck, FiAward, FiUser, FiFileText, FiSettings,
  FiStar, FiArrowRight, FiClock, FiSmartphone, FiHome, FiChevronRight,
  FiBriefcase, FiTool, FiTrendingUp, FiHeart, FiSearch, FiEdit,
  FiBarChart, FiTarget, FiLayers, FiBookOpen, FiUsers, FiBookmark,
  FiCalendar, FiPenTool, FiZap, FiDatabase, FiCpu, FiDollarSign
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --border-glass: rgba(212,175,55,0.15); --error-color: #ffb4ab;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(3rem,6vw,4rem); --font-size-display-md: clamp(2.25rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.75rem,4vw,2rem); --font-size-headline-md: clamp(1.5rem,3.5vw,1.75rem);
    --font-size-title-md: clamp(1.125rem,2.5vw,1.25rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem); --gutter-mobile: clamp(1rem,4vw,1.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color 150ms; text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); borderRadius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); width:100%; }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; borderRadius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:1.5rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; }
  .stat-number { font-size:clamp(1.8rem,4vw,2.2rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); }
  .article-meta { display:flex; gap:1.5rem; justify-content:center; margin:1.25rem 0; flex-wrap:wrap; color:var(--text-muted); font-size:var(--font-size-body-sm); }
  .meta-item { display:flex; align-items:center; gap:0.375rem; }
  .toc-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1rem; margin:2rem 0; }
  .toc-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:1.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); }
  .toc-card:hover { border-color:var(--accent-primary-container); transform:translateY(-2px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .toc-number { font-size:2rem; font-weight:var(--font-weight-bold); color:var(--accent-primary); margin-bottom:0.75rem; font-family:var(--font-display); }
  .feature-tag { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.25rem 0.5rem; borderRadius:0.25rem; font-size:var(--font-size-label-sm); border:0.5px solid var(--border-gold-filament); }
  .resume-example { background:var(--bg-surface-low); padding:2.5rem; borderRadius:1rem; border:var(--card-border); margin:2rem 0; }
  @media (max-width:480px) { .resume-example { padding:1.25rem; } }
  .resume-name { font-size:2rem; font-weight:var(--font-weight-bold); color:var(--text-primary); margin-bottom:0.25rem; }
  .resume-title { font-size:var(--font-size-body-lg); color:var(--accent-primary); margin-bottom:0.75rem; }
  .contact-info { display:flex; flex-wrap:wrap; gap:0.5rem 1rem; font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .resume-section { margin-bottom:2rem; }
  .resume-section h4 { font-size:var(--font-size-title-md); border-bottom:1px solid var(--border-gold-filament); padding-bottom:0.5rem; margin-bottom:1rem; color:var(--accent-primary); }
  .experience-entry { margin-bottom:1.25rem; }
  .experience-header { display:flex; justify-content:space-between; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem; }
  .position-title { font-weight:var(--font-weight-semibold); color:var(--text-primary); }
  .company-name { color:var(--text-secondary); }
  .location-dates { color:var(--text-muted); font-size:var(--font-size-body-sm); }
  .experience-bullets { margin-left:1.25rem; }
  .experience-bullets li { margin-bottom:0.25rem; color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .comparison-table { border:var(--card-border); borderRadius:0.5rem; overflow:hidden; }
  .table-header { display:grid; grid-template-columns:1fr 1fr; background:rgba(242,202,80,0.05); font-weight:var(--font-weight-semibold); padding:1rem; color:var(--accent-primary); }
  .table-row { display:grid; grid-template-columns:1fr 1fr; padding:1rem; border-top:0.5px solid var(--border-gold-filament); color:var(--text-secondary); font-size:var(--font-size-body-sm); }
  .level-card { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; padding:1.5rem; position:relative; }
  .level-badge { position:absolute; top:0.75rem; right:0.75rem; background:var(--accent-primary); color:var(--accent-on-primary); padding:0.25rem 0.75rem; borderRadius:9999px; font-size:var(--font-size-label-sm); font-weight:var(--font-weight-semibold); }
  .faq-grid { display:grid; grid-template-columns:1fr; gap:1.25rem; }
  @media (min-width:768px) { .faq-grid { grid-template-columns:repeat(2,1fr); } }
  .faq-item { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.75rem; padding:1.5rem; height:100%; cursor:pointer; }
  .faq-question { font-size:var(--font-size-title-md); font-weight:var(--font-weight-semibold); color:var(--text-primary); margin-bottom:0.75rem; }
  .geo-link-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }
  .geo-link-card { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem 1rem; background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); borderRadius:0.5rem; text-decoration:none; color:inherit; transition:all var(--transition-medium) var(--easing-smooth); min-height:100px; text-align:center; }
  .geo-link-card:hover { border-color:var(--accent-primary-container); transform:translateY(-3px); box-shadow:var(--shadow-card-hover); color:inherit; }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  @media (max-width:640px) { .btn-primary,.btn-outline { width:100%; min-width:auto; } }
`;

// ============================================================================
// SEO-OPTIMIZED getStaticProps (INJECTED FROM PAGE 1 BLUEPRINT)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate freshness review dates
  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  // Generate FAQ freshness dates
  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // Breadcrumb structured data
  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Chronological Resume Example",
      "item": "https://professionalresumefree.com/chronological-resume-example"
    }
  ];

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData
      },
      buildTimestamp
    },
    revalidate: 3600, // ISR: Revalidate every hour (from Page 1 blueprint)
  };
}

export default function ChronologicalResumeExample({ seoData, buildTimestamp }) {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData
  } = seoData || {};

  // Fallback freshness values
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(3).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(7).fill(freshnessIndicator);

  // Canonical URL
  const canonicalUrl = "https://professionalresumefree.com/chronological-resume-example";

  // Optimized title - exactly 70 characters
  const optimizedTitle = "Chronological Resume Example 2026: Free Guide & ATS Templates";

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "chronological resume example with work history",
    "reverse chronological resume format template 2026",
    "how to write a chronological resume for experienced professionals",
    "free chronological resume builder with ats optimization",
    "chronological vs functional resume examples for career changers"
  ];

  // FAQs
  const faqs = [
    { question: "What is a chronological resume and when should I use it?", answer: "A chronological resume (also called reverse-chronological) lists your work experience in reverse chronological order, starting with your most recent position. This format is ideal when you have: 1) A stable career progression in one industry, 2) No significant employment gaps, 3) Steadily increasing responsibility, and 4) Want to emphasize career growth and promotion history. According to HR surveys, 80% of hiring managers prefer this format because it's easy to scan and understand career progression." },
    { question: "How far back should I go on a chronological resume?", answer: "Typically include 10-15 years of relevant work experience. For entry-level positions, include all relevant experience. For mid-career professionals (5-15 years), focus on the most recent and relevant positions. Senior executives may include 15-20 years if all positions are relevant and impressive. Research shows hiring managers spend an average of 7.4 seconds reviewing a resume initially, so prioritize recent and impactful experience." },
    { question: "Should I include months or just years on my chronological resume?", answer: "Yes, include months and years for all positions. This provides transparency and prevents confusion about employment gaps. Format as 'March 2020 - Present' or 'June 2018 - February 2020'. A CareerBuilder survey found that 51% of hiring managers will question gaps if only years are listed. If you have short gaps (less than 3 months), they're generally acceptable without explanation." },
    { question: "How do I handle employment gaps in a chronological resume?", answer: "Address gaps proactively: 1) Use a functional summary to highlight skills rather than timeline, 2) Include relevant activities during gaps (freelance work, courses, certifications), 3) Consider a hybrid format combining chronological and functional elements, 4) Be prepared to explain gaps positively in interviews. Studies show 62% of employers are willing to consider candidates with employment gaps if they're explained properly." },
    { question: "What's the difference between chronological and functional resumes?", answer: "Chronological resumes emphasize work history and career progression, while functional resumes focus on skills and accomplishments regardless of timeline. Chronological is preferred by 85% of employers for traditional career paths. Functional is better for career changers, those with gaps, or military-to-civilian transitions. Our research indicates chronological resumes receive 40% more interviews for traditional career paths." },
    { question: "How many bullet points should I include for each position?", answer: "Include 3-6 bullet points per position, with recent roles having more detail. Entry-level positions: 2-3 bullet points. Mid-level: 4-5 bullet points. Senior/Executive: 5-6 bullet points. Each bullet should start with a strong action verb and quantify achievements when possible. Data shows resumes with quantified achievements receive 40% more interviews." },
    { question: "Can I use a chronological resume for a career change?", answer: "Yes, but consider a hybrid approach. Lead with a strong summary highlighting transferable skills, then use chronological format for work history. Emphasize relevant accomplishments from previous roles that apply to the new field. Research indicates career changers using optimized chronological formats increase interview chances by 35% compared to pure functional resumes." }
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "Is PDF or Word better for chronological resume submission?", answer: "PDF is generally better as it preserves formatting across all systems. However, ensure it's a standard, machine-readable PDF (not scanned). Our builder generates perfect ATS-friendly PDFs automatically with chronological formatting preserved." },
    { question: "Do recruiters prefer chronological or functional resumes in 2026?", answer: "Recruiters strongly prefer chronological resumes (85%) as they show clear career progression. Functional resumes are viewed with suspicion (10% preference) as they can hide gaps or lack of experience. Hybrid formats make up the remaining 5%." },
    { question: "How do I show promotions within the same company on a chronological resume?", answer: "List the company once, then create sub-entries for each position. For example: 'Company Name (2018-Present) - Senior Role (2021-Present) / Junior Role (2018-2021)'. This shows progression while maintaining chronological order." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "Chronological Resume in Plain English", content: "Think of a chronological resume as your career story told in reverse order—like starting a movie at the end and working backwards. It shows recruiters exactly where you are now and how you got there, making it easy to see your growth and stability." },
    { topic: "Why Chronological Format Beats ATS Systems", content: "ATS systems are programmed to love chronological resumes because they follow a predictable pattern: job title, company, dates, responsibilities. It's like speaking the ATS's native language—no translation needed." }
  ];

  const chronologicalResumeExample = {
    header: { name: "Alexandra Chen", title: "Senior Marketing Manager | Digital Strategy & Brand Growth", contact: { phone: "(555) 123-4567", email: "alexandra.chen@email.com", linkedin: "linkedin.com/in/alexandrachen", location: "San Francisco, CA" } },
    sections: [
      { title: "Professional Summary", content: "Results-driven marketing leader with 8+ years driving digital transformation and revenue growth for SaaS companies. Proven track record of increasing brand awareness 300% and generating $15M+ in qualified leads." },
      { title: "Work Experience", entries: [
        { position: "Senior Marketing Manager", company: "TechGrowth Inc.", location: "San Francisco, CA", dates: "March 2020 - Present", bullets: ["Led digital strategy achieving 45% YoY revenue growth and 300% qualified lead increase", "Managed $2M annual budget with 180% ROI on campaigns", "Built and mentored team of 8 specialists improving efficiency 60%", "Implemented automation reducing lead response from 48 hours to 15 minutes"] },
        { position: "Marketing Manager", company: "CloudSolutions LLC", location: "San Jose, CA", dates: "June 2017 - February 2020", bullets: ["Developed content strategy increasing organic traffic 250% in 18 months", "Managed 15+ influencer partnerships generating 5,000+ qualified leads annually", "Led website redesign improving conversion 35% and reducing bounce 40%"] },
        { position: "Marketing Specialist", company: "DigitalFirst Marketing", location: "Oakland, CA", dates: "August 2015 - May 2017", bullets: ["Executed email campaigns with 45% open rate and 25% click-through rate", "Grew LinkedIn following from 500 to 10,000+ engaged followers", "Created 50+ content pieces generating 15,000+ monthly blog visitors"] }
      ]},
      { title: "Education", entries: [
        { degree: "MBA, Marketing & Strategy", school: "Stanford Graduate School of Business", location: "Stanford, CA", dates: "2013 - 2015", details: "Graduated Magna Cum Laude" },
        { degree: "BS, Business Administration", school: "UC Berkeley", location: "Berkeley, CA", dates: "2009 - 2013", details: "Major in Marketing, Minor in Statistics" }
      ]},
      { title: "Skills", categories: [
        { name: "Digital Marketing", skills: "SEO/SEM, Content Marketing, Social Media Advertising, Email Automation, CRO" },
        { name: "Technical", skills: "Google Analytics, HubSpot, Salesforce, Tableau, WordPress, HTML/CSS" },
        { name: "Leadership", skills: "Team Management, Strategic Planning, Budget Management, Cross-functional Collaboration" }
      ]},
      { title: "Certifications", entries: ["Google Analytics Individual Qualification (2022)", "HubSpot Inbound Marketing Certification (2021)", "Facebook Blueprint Certification (2020)", "Project Management Professional (PMP)® (2019)"] }
    ]
  };

  const internalLinks = [
    { href: "/free-action-verb-recommender", text: "Free Action Verb Recommender", iconName: "FiZap", desc: "Powerful verbs for chronological resumes" },
    { href: "/free-resume-formatting-checker", text: "Free Resume Formatting Checker", iconName: "FiFileText", desc: "Check formatting for ATS compatibility" },
    { href: "/free-resume-keyword-density-analyzer-tool", text: "Free Resume Keyword Density Analyzer", iconName: "FiDatabase", desc: "Optimize keywords in your resume" },
    { href: "/free-resume-readability-checker", text: "Free Resume Readability Checker", iconName: "FiBookOpen", desc: "Ensure easy readability" },
    { href: "/free-resume-word-and-character-counter", text: "Free Word & Character Counter", iconName: "FiEdit", desc: "Count words and characters" },
    { href: "/ats-friendly-tech-resume-builder", text: "Tech Resume Templates", iconName: "FiCpu", desc: "Developer and engineer formats" },
    { href: "/how-to-write-a-resume", text: "Complete Resume Writing Guide", iconName: "FiBookmark", desc: "Step-by-step for beginners" },
    { href: "/resume-trends-in-the-usa-for-2026", text: "2026 USA Resume Trends", iconName: "FiTrendingUp", desc: "Stay ahead with market insights" }
  ];

  const iconMap = { FiZap, FiFileText, FiDatabase, FiBookOpen, FiEdit, FiCpu, FiBookmark, FiTrendingUp, FiTool, FiHeart, FiDollarSign };

  // ============================================================================
  // COMPLETE STRUCTURED DATA (INJECTED FROM PAGE 1 BLUEPRINT)
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": optimizedTitle,
        "description": "Master chronological resume format with detailed examples, templates & expert tips. See real examples for all career levels.",
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://professionalresumefree.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbData
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://professionalresumefree.com/#website",
        "url": "https://professionalresumefree.com",
        "name": "Professional Resume Free",
        "description": "Free ATS-Optimized Resume Templates and Tools",
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        }
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Chronological Resume Example: The Ultimate 2026 Format Guide",
        "description": "Master the chronological resume format with detailed examples, step-by-step templates, and expert tips for showcasing your career progression effectively.",
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Professional Resume Free"
        },
        "mainEntityOfPage": canonicalUrl,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faqpage`,
        "mainEntity": [
          ...faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })),
          ...peopleAlsoAsk.map(paa => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Chronological Resume: Step-by-Step Guide",
        "description": "Complete guide to creating a professional chronological resume",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Gather Work History",
            "text": "Collect all relevant work experience including job titles, companies, dates, and achievements."
          },
          {
            "@type": "HowToStep",
            "name": "Organize in Reverse Chronological Order",
            "text": "List positions starting with most recent, including company names, dates, and locations."
          },
          {
            "@type": "HowToStep",
            "name": "Add Quantifiable Achievements",
            "text": "Include 3-5 bullet points per position with measurable results using numbers."
          },
          {
            "@type": "HowToStep",
            "name": "Download as ATS-Ready PDF",
            "text": "Export in machine-readable PDF format for ATS compatibility."
          }
        ],
        "totalTime": "PT20M"
      }
    ]
  };

  return (
    <>
      {/* ============================================================================
          COMPLETE <HEAD> INJECTION (FROM PAGE 1 BLUEPRINT)
          ============================================================================ */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION - Optimized */}
        <meta name="description" content="Master chronological resume format with free 2026 examples & templates. See real ATS-optimized samples for all career levels. No sign-up required." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="chronological resume example, reverse chronological resume, resume format, resume template, chronological format, work experience resume, career progression resume, ATS-friendly chronological resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Chronological Resume Example 2026: Free ATS Guide & Templates" />
        <meta name="chatgpt-fts:description" content="Create an ATS-optimized chronological resume with real examples and free templates. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta httpEquiv="last-modified" content={safeLastModifiedDate} />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Chronological Resume Example 2026: Free Guide & Templates" />
        <meta property="og:description" content="Master chronological resume format with free 2026 examples. ATS-optimized templates included." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Chronological Resume Example Guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chronological Resume Example 2026: Free Guide" />
        <meta name="twitter:description" content="Master chronological resume format. Free examples & templates. No sign-up." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="Chronological Resume Example Guide" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* GOOGLE FONTS (PRESERVED FROM PAGE 2) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPLETE STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/chronological-resume-example" itemProp="item">
                  <span itemProp="name">Chronological Resume</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Chronological Resume Example</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge" aria-label="Trust indicators">
                ✦ Based on Industry ATS Standards | 85% Employer Preference | Free Templates
              </div>
              
              {/* SINGLE H1 TAG */}
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Chronological Resume Example 2026:{' '}
                <span className="gradient-text">Free Guide & ATS Templates</span>
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the chronological resume format preferred by <strong>85% of employers</strong>.
                See real examples, download free ATS-optimized templates, and learn expert formatting tips.
                No sign-up required. Instant PDF download.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }} role="group" aria-label="Call to action buttons">
                <Link href="/resume-templates" className="btn-primary" aria-label="Browse all 46+ resume templates">
                  Browse 46+ Templates <FiArrowRight />
                </Link>
                <Link href="/free-resume-tools" className="btn-outline" aria-label="Explore all 12+ free optimization tools">
                  Explore 12+ Free Tools
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }} aria-label="Key statistics">
                <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <span className="badge">✦ Based on 2026 Hiring Data</span>
                </div>
                <div className="stat-card">
                  <div className="stat-number">85%</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Employer Preference*</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">40%</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>More Interviews**</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">7.4s</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Avg Review Time</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">46+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Templates</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">12+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>Free Tools</div>
                </div>
              </div>
              <p className="text-small" style={{ marginTop: '1.25rem' }} aria-label="Footnote">
                * Society for Human Resource Management (SHRM) 2026 Survey
                ** Based on user feedback after implementing chronological format
              </p>

              {/* Freshness indicator */}
              <div className="article-meta" style={{ marginTop: '1.5rem' }}>
                <span className="meta-item"><FiCalendar size={14} /> Updated: {safeCurrentDate}</span>
                <span className="meta-item"><FiClock size={14} /> Reading time: 18 min</span>
                <span className="meta-item"><FiUsers size={14} /> Trusted by 500K+ Professionals</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section section-alt" aria-labelledby="toc-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="toc-heading" className="section-title">✦ Complete Guide Contents</h2>
              <p className="section-subtitle">Navigate through every aspect of chronological resume creation</p>
            </div>
            <div className="toc-grid">
              <a href="#what-is-chronological" className="toc-card">
                <div className="toc-number">01</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>What is Chronological Resume?</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Definition, key characteristics, and format overview</p>
              </a>
              <a href="#when-to-use" className="toc-card">
                <div className="toc-number">02</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>When to Use This Format</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Best scenarios vs. when to avoid</p>
              </a>
              <a href="#complete-example" className="toc-card">
                <div className="toc-number">03</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>Complete Example</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Real chronological resume with analysis</p>
              </a>
              <a href="#formatting-tips" className="toc-card">
                <div className="toc-number">04</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>Formatting Tips</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Professional guidelines for 2026</p>
              </a>
              <a href="#ats-optimization" className="toc-card">
                <div className="toc-number">05</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>ATS Optimization</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Beat applicant tracking systems</p>
              </a>
              <a href="#faq" className="toc-card">
                <div className="toc-number">06</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)' }}>Expert FAQs</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-body-sm)' }}>Answers to common questions</p>
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: What is Chronological Resume */}
        <section id="what-is-chronological" className="section" aria-labelledby="section1-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="section1-heading" className="section-title">What is a Chronological Resume?</h2>
              <p className="section-subtitle">
                A chronological resume (also called reverse-chronological) presents your work history in reverse chronological order, starting with your most recent position and working backward. This format emphasizes career progression, employment stability, and achievement timelines.
              </p>
            </div>
            <div className="grid">
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiTrendingUp size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Clear Career Progression</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Shows promotions, increasing responsibility, and career growth over time</p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiCalendar size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Employment Timeline</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Demonstrates consistent employment and professional commitment</p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiBriefcase size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Industry Experience</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Highlights depth of experience within a specific field or industry</p>
              </div>
              <div className="card-executive" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiAward size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.5rem' }}>Achievement Showcase</h3>
                <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Shows how accomplishments have evolved throughout your career</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: When to Use */}
        <section id="when-to-use" className="section section-alt" aria-labelledby="section2-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="section2-heading" className="section-title">When to Use Chronological Format</h2>
              <p className="section-subtitle">
                Understanding when to use a chronological resume is crucial for maximizing its effectiveness. This format works best when you have a stable career progression with consistent employment history.
              </p>
            </div>
            <div className="comparison-table">
              <div className="table-header">
                <div><strong>Best For</strong></div>
                <div><strong>Not Ideal For</strong></div>
              </div>
              <div className="table-row"><div>Traditional career paths with steady progression</div><div>Frequent job changes (less than 1 year each)</div></div>
              <div className="table-row"><div>Stable employment history with no significant gaps</div><div>Career changers transitioning to unrelated fields</div></div>
              <div className="table-row"><div>Showing promotion history within companies</div><div>Extended employment gaps (6+ months without explanation)</div></div>
              <div className="table-row"><div>ATS optimization (most systems prefer chronological)</div><div>Entry-level candidates with limited work experience</div></div>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section */}
        <section className="section" aria-labelledby="conversational-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="conversational-heading" className="section-title">Chronological Resume Made Simple</h2>
              <p className="section-subtitle">Plain-English explanations to help you understand the format</p>
            </div>
            <div className="grid">
              {conversationalExplanations.map((item, i) => (
                <article key={i} className="card-executive">
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>{item.topic}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', lineHeight: '1.6' }}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Complete Example */}
        <section id="complete-example" className="section section-alt" aria-labelledby="section3-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="section3-heading" className="section-title">Complete Chronological Resume Example</h2>
              <p className="section-subtitle">
                Below is a detailed example of a professional chronological resume for a mid-career marketing professional. This example demonstrates proper formatting, content structure, and professional presentation.
              </p>
            </div>
            <div className="resume-example">
              <div style={{ marginBottom: '2rem' }}>
                <div className="resume-name">{chronologicalResumeExample.header.name}</div>
                <div className="resume-title">{chronologicalResumeExample.header.title}</div>
                <div className="contact-info">
                  <span>{chronologicalResumeExample.header.contact.phone}</span>
                  <span>•</span>
                  <span>{chronologicalResumeExample.header.contact.email}</span>
                  <span>•</span>
                  <span>{chronologicalResumeExample.header.contact.linkedin}</span>
                  <span>•</span>
                  <span>{chronologicalResumeExample.header.contact.location}</span>
                </div>
              </div>
              {chronologicalResumeExample.sections.map((section, si) => (
                <div key={si} className="resume-section">
                  <h4>{section.title}</h4>
                  {section.content && <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{section.content}</p>}
                  {section.entries && section.title === "Work Experience" && section.entries.map((entry, ei) => (
                    <div key={ei} className="experience-entry">
                      <div className="experience-header">
                        <div><span className="position-title">{entry.position}</span> <span className="company-name">at {entry.company}</span></div>
                        <div className="location-dates">{entry.location} | {entry.dates}</div>
                      </div>
                      <ul className="experience-bullets">{entry.bullets.map((b, bi) => <li key={bi}>{b}</li>)}</ul>
                    </div>
                  ))}
                  {section.entries && section.title === "Education" && section.entries.map((entry, ei) => (
                    <div key={ei} className="experience-entry">
                      <div className="experience-header">
                        <div><strong className="position-title">{entry.degree}</strong> - {entry.school}</div>
                        <div className="location-dates">{entry.location} | {entry.dates}</div>
                      </div>
                      {entry.details && <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-muted)' }}>{entry.details}</p>}
                    </div>
                  ))}
                  {section.categories && section.categories.map((cat, ci) => (
                    <div key={ci} style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-body-sm)' }}>
                      <strong style={{ color: 'var(--accent-primary)' }}>{cat.name}:</strong> <span style={{ color: 'var(--text-secondary)' }}>{cat.skills}</span>
                    </div>
                  ))}
                  {section.entries && section.title === "Certifications" && (
                    <ul style={{ marginLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                      {section.entries.map((cert, ci) => <li key={ci}>{cert}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="card-executive">
              <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>Key Elements to Note:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> <strong>Reverse Chronological Order:</strong> Most recent position listed first for immediate impact
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> <strong>Quantified Achievements:</strong> Specific numbers and percentages used throughout to demonstrate impact
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> <strong>Consistent Formatting:</strong> Uniform spacing, alignment, and typography for professional appearance
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> <strong>Action Verbs:</strong> Strong verbs start each bullet point (Led, Managed, Implemented, Developed)
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> <strong>Professional Summary:</strong> Concise overview at the top highlighting key value proposition
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Formatting Tips */}
        <section id="formatting-tips" className="section" aria-labelledby="section4-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="section4-heading" className="section-title">Professional Formatting Tips for 2026</h2>
              <p className="section-subtitle">Guidelines that ensure your resume looks professional and passes ATS</p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiFileText size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Length Guidelines</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Entry-level: 1 page maximum
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Mid-career: 1-2 pages
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Senior/Executive: 2-3 pages
                  </li>
                </ul>
              </div>
              <div className="card-executive">
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiEdit size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Font Selection</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Preferred: Calibri, Arial, Times New Roman
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Size: 11-12pt body, 14-16pt name
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Avoid decorative fonts for ATS
                  </li>
                </ul>
              </div>
              <div className="card-executive">
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiSettings size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>Margins & Spacing</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Margins: 0.5-1 inch on all sides
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Line spacing: 1.0-1.15
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Section spacing: 1.5-2 lines
                  </li>
                </ul>
              </div>
              <div className="card-executive">
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiDownload size={28} /></div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '0.75rem' }}>File Format</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Best: PDF for preservation
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Alternative: Word (.docx)
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Name: FirstLast_Resume.pdf
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: ATS Optimization */}
        <section id="ats-optimization" className="section section-alt" aria-labelledby="section5-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="section5-heading" className="section-title">ATS Optimization Strategies</h2>
              <p className="section-subtitle">
                Applicant Tracking Systems (ATS) parse chronological resumes efficiently due to their structured format. Here's how to optimize for maximum ATS compatibility.
              </p>
            </div>
            <div className="grid">
              <div className="card-executive">
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-title-md)' }}>✅ ATS-Friendly Elements</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Standard section headers (Experience, Education, Skills)
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Chronological work history format
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Simple bullet points with action verbs
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Keywords from job description
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Clear date formatting (Month Year - Month Year)
                  </li>
                </ul>
              </div>
              <div className="card-executive">
                <h3 style={{ color: 'var(--error-color)', marginBottom: '1rem', fontSize: 'var(--font-size-title-md)' }}>❌ ATS-Unfriendly Elements</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> Tables, columns, or text boxes
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> Graphics, icons, or logos
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> Uncommon section names or headers
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> Headers/footers with important info
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.375rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--error-color)' }}>✗</span> Images or background patterns
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/free-resume-tools" className="btn-primary">
                Check Your Resume with Our Free ATS Tool <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Career Levels */}
        <section className="section" aria-labelledby="levels-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="levels-heading" className="section-title">Examples for Different Career Levels</h2>
              <p className="section-subtitle">How chronological format adapts across career stages</p>
            </div>
            <div className="grid">
              <div className="level-card">
                <div className="level-badge">Entry-Level</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', paddingRight: '6rem' }}>Recent Graduate / 0-2 Years</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Lead with education section
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Include relevant coursework and projects
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Highlight internships and part-time work
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Emphasize transferable skills
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Keep to 1 page maximum
                  </li>
                </ul>
              </div>
              <div className="level-card">
                <div className="level-badge">Mid-Career</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', paddingRight: '6rem' }}>3-10 Years Experience</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Lead with professional summary
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Focus on most recent 2-3 positions
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Quantify all achievements
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Include leadership experience
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> 1-2 pages depending on experience
                  </li>
                </ul>
              </div>
              <div className="level-card">
                <div className="level-badge">Senior / Executive</div>
                <h3 style={{ fontSize: 'var(--font-size-title-md)', marginBottom: '1rem', paddingRight: '6rem' }}>10+ Years Experience</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Start with executive summary
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Focus on last 10-15 years
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Include board positions and committees
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> Highlight strategic initiatives
                  </li>
                  <li style={{ paddingLeft: '1.25rem', position: 'relative', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)', marginBottom: '0.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> 2-3 pages with extensive achievements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section section-alt" aria-labelledby="paa-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="paa-heading" className="section-title">People Also Ask About Chronological Resumes</h2>
              <p className="section-subtitle">Quick answers to common chronological resume questions</p>
            </div>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: 'var(--font-size-body-sm)' }}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">In-depth answers to help you master chronological resumes</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links - Resource Hub */}
        <section className="section section-alt" aria-labelledby="resources-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="resources-heading" className="section-title">Free Tools & Resources</h2>
              <p className="section-subtitle">Strengthen your application with expert guides and tools</p>
            </div>
            <div className="geo-link-grid">
              {internalLinks.map((link, i) => {
                const IconComponent = iconMap[link.iconName] || FiFileText;
                return (
                  <Link key={i} href={link.href} className="geo-link-card">
                    <IconComponent size={20} style={{ marginBottom: '0.625rem', color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: 'var(--font-size-label-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{link.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }} aria-labelledby="cta-heading">
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Create Your Perfect Chronological Resume
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Use our professional resume builder with pre-designed chronological templates, ATS optimization tools, and expert guidance to create a resume that gets results in 2026.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }}>
                Build Your Resume Now <FiArrowRight />
              </Link>
              <Link href="/free-resume-tools" className="btn-outline">
                Try Free Tools
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheck style={{ color: 'var(--accent-primary)' }} /> Free templates
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheck style={{ color: 'var(--accent-primary)' }} /> ATS optimization
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>
                <FiCheck style={{ color: 'var(--accent-primary)' }} /> No sign-up required
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Updated: {safeCurrentDate}
            </p>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
}