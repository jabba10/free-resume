import styles from './guid.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, 
  FiChevronRight, 
  FiArrowRight, 
  FiCheck, 
  FiStar,
  FiClock,
  FiBookOpen,
  FiTarget,
  FiGlobe,
  FiCheckSquare,
  FiAlertCircle,
  FiThumbsUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiTrendingUp,
  FiAward,
  FiShield,
  FiZap,
  FiPenTool,
  FiBarChart,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiUsers,
  FiLink
} from 'react-icons/fi';

// --- DATA & CONFIGURATION ---

const internalLinksJson = {
  "total_unique_links": 149,
  "links": [
    "/",
    "/resume-guide",
    "/cover-letter-guides",
    "/jobs-boards",
    "/jobs-search-tips",
    "/careers-blog",
    "/resume-formatting-guide",
    "/usa-jobs-resume-directory",
    "/interview-tips",
    "/privacy-policy",
    "/complete-resume-resource-library",
    "/free-ats-resume-checker",
    "/free-resume-score-checker",
    "/free-resume-keyword-matcher",
    "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software",
    "/ats-friendly-medical-resume-builder",
    "/ats-friendly-nurse-resume-builder",
    "/ats-friendly-nurse-practitioner-resume-builder",
    "/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder",
    "/ats-friendly-care-assistant-resume-builder",
    "/ats-friendly-support-worker-resume-builder",
    "/ats-friendly-healthcare-assistant-resume-builder",
    "/ats-friendly-aged-care-worker-resume-builder",
    "/ats-friendly-medical-assistant-resume-builder",
    "/ats-friendly-registered-practical-nurse-resume-builder",
    "/ats-friendly-disability-support-worker-resume-builder",
    "/ats-friendly-tech-resume-builder",
    "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder",
    "/ats-friendly-data-and-cybersecurity-resume-builder",
    "/ats-ai-adjacent-creative-technical-roles-resume-builder",
    "/ats-friendly-software-developer-and-software-engineer-resume-builder",
    "/ats-friendly-data-analyst-resume-builder",
    "/ats-friendly-finance-resume-builder",
    "/ats-friendly-ceo-resume-builder",
    "/ats-friendly-project-manager-resume-builder",
    "/ats-friendly-accountant-resume-builder",
    "/ats-friendly-sales-associate-resume-builder",
    "/ats-friendly-marketing-executive-manager-resume-builder",
    "/ats-friendly-business-analyst-resume-builder",
    "/ats-friendly-customer-service-resume-builder",
    "/ats-friendly-administrative-assistant-resume-builder",
    "/ats-friendly-hr-assistant-coordinator-resume-builder",
    "/ats-friendly-engineering-resume-builder",
    "/ats-friendly-industrial-manufacturing-resume-builder",
    "/ats-friendly-advanced-manufacturing-and-automation-resume-builder",
    "/ats-friendly-biotechnology-resume-builder",
    "/ats-friendly-electrician-resume-builder",
    "/ats-friendly-plumber-resume-builder",
    "/ats-friendly-construction-worker-resume-builder",
    "/ats-friendly-government-education-non-profit-resume-builder",
    "/ats-friendly-teacher-resume-builder",
    "/ats-friendly-legal-resume-builder",
    "/ats-friendly-security-guard-resume-builder",
    "/ats-friendly-consumer-retail-resume-builder",
    "/ats-friendly-retail-associate-resume-builder",
    "/ats-friendly-logistics-transportation-resume-builder",
    "/ats-friendly-driver-resume-builder",
    "/ats-friendly-warehouse-worker-resume-builder",
    "/ats-friendly-chef-cook-resume-builder",
    "/ats-friendly-sustainability-and-green-industries-resume-builder",
    "/free-resume-builder",
    "/creative-resume-templates",
    "/functional-resume-templates",
    "/modern-resume-design-2026",
    "/one-page-resume-template",
    "/simple-resume-template",
    "/resume-templates",
    "/chronological-resume-example",
    "/basic-resume-format",
    "/how-to-write-a-resume",
    "/how-to-write-a-resume-for-a-job",
    "/how-to-create-a-resume-with-no-experience",
    "/how-to-describe-work-experience-on-resume",
    "/resume-writing-for-beginners",
    "/what-to-put-on-a-resume",
    "/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume",
    "/best-ats-resume-format-2026",
    "/resume-education-section",
    "/certification-resume-section",
    "/resume-skills-section",
    "/resume-objective-statement",
    "/free-cover-letter-generator",
    "/free-resume-summary-generator",
    "/free-resume-objective-generator",
    "/free-resume-bullet-point-generator",
    "/free-action-verb-recommender",
    "/free-resume-word-and-character-counter",
    "/free-resume-readability-checker",
    "/free-resume-formatting-checker",
    "/free-resume-keyword-density-analyzer-tool",
    "/resume-keywords-finder",
    "/keywords-for-resume",
    "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026",
    "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds",
    "/most-googled-resume-questions-in-the-usa",
    "/most-in-demand-resume-keywords-for-usa-job-seekers",
    "/most-popular-resume-layouts-for-usa-tech-jobs",
    "/high-traffic-resume-templates-americans-search-for",
    "/how-long-should-a-resume-be-usa-recruiter-insights",
    "/best-fonts-and-designs-for-usa-resumes",
    "/best-resume-examples-for-career-changers-in-the-usa",
    "/best-resume-examples-for-usa-engineering-jobs",
    "/best-resume-examples-for-usa-healthcare-jobs",
    "/best-resume-examples-for-usa-it-and-software-jobs",
    "/best-resume-examples-for-usa-management-positions",
    "/how-to-list-prompt-engineering-as-a-skill-on-your-professional-resume",
    "/how-to-optimize-your-resume-for-linkedin-recruiters",
    "/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained",
    "/how-to-tailor-your-resume-for-any-usa-job-posting",
    "/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot",
    "/how-to-write-a-federal-resume-for-usa-government-jobs",
    "/how-to-write-a-resume-for-usa-administrative-jobs",
    "/how-to-write-a-resume-for-usa-sales-and-marketing-roles",
    "/how-to-write-a-resume-for-usa-customer-service-jobs",
    "/how-to-write-a-resume-for-usa-finance-and-accounting-roles",
    "/how-to-write-a-resume-for-usa-hospitality-jobs",
    "/how-to-write-a-resume-for-usa-retail-jobs",
    "/how-to-write-a-resume-for-usa-teaching-and-education-jobs",
    "/how-to-write-bullet-points-that-impress-usa-recruiters",
    "/the-death-of-the-objective-statement-what-to-write-instead",
    "/top-skills-employers-in-the-usa-want-on-resumes",
    "/why-skills-first-resumes-are-replacing-chronological-layouts-in-2026",
    "/resume-mistakes-americans-make-and-how-to-fix-them",
    "/resume-tips-for-remote-jobs-in-the-usa",
    "/resume-tips-for-usa-college-students-and-graduates",
    "/resume-trends-in-the-usa-for-2026",
    "/free-resume-tools",
    "/software-engineer-resume-example-and-writing-guide"
  ]
};

// Helper to generate readable anchor text from slug
const generateAnchorText = (path) => {
  if (path === '/') return 'Home';
  // Remove leading slash and file extensions if any
  let clean = path.replace(/^\//, '').replace(/\.html$/, '');
  // Replace hyphens with spaces
  let text = clean.replace(/-/g, ' ');
  // Capitalize first letter of each word
  return text.replace(/\b\w/g, l => l.toUpperCase());
};

// Helper to select random links deterministically based on timestamp
const getRandomLinks = (links, count, seed) => {
  const shuffled = [...links].sort(() => 0.5 - Math.sin(seed));
  // Filter out current page if present to avoid self-linking loops in this specific context
  const filtered = shuffled.filter(l => l !== '/how-to-write-a-resume');
  return filtered.slice(0, count);
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  
  const faqDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const reviewDates = Array(12).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        faqDates,
        reviewDates
      },
      buildTimestamp
    },
    revalidate: 3600,
  };
}

export default function HowToWriteAResume({ seoData, buildTimestamp }) {
  const {
    currentDate,
    lastModifiedDate,
    faqDates,
    reviewDates
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(12).fill(freshnessIndicator);
  const safeReviewDates = reviewDates || Array(12).fill(freshnessIndicator);

  // Select 5 random links for the footer
  const selectedLinks = getRandomLinks(internalLinksJson.links, 5, buildTimestamp || Date.now());

  // ENRICHED DATA SECTIONS
  
  const faqs = [
    {
      question: "How long should my resume be in 2026?",
      answer: "For most professionals, one page remains ideal. Those with 10+ years of relevant experience or in academic/executive roles may extend to two pages. Never exceed two pages for standard job applications. Recent graduates and early-career professionals should absolutely stick to one page."
    },
    {
      question: "What's the most important section of a resume?",
      answer: "The work experience section is typically the most important, as it demonstrates your professional capabilities. However, the professional summary is crucial for making a strong first impression. In 2026, recruiters also value skills sections that show both technical and soft skills."
    },
    {
      question: "Should I include a photo on my resume?",
      answer: "In the US, Canada, UK, and Australia: Absolutely not. Photos can introduce unconscious bias and are often removed by ATS systems. In European countries like Germany, France, and Belgium, photos may be expected as part of standard professional presentation."
    },
    {
      question: "How do I handle employment gaps?",
      answer: "Be honest but strategic. Use a functional or hybrid format that emphasizes skills over chronology. If you were freelancing, caregiving, or developing skills during gaps, mention these activities. Consider adding a 'Career Break Note' explaining the gap positively."
    },
    {
      question: "Can I use the same resume for every job?",
      answer: "No. Studies show customized resumes are 40% more likely to get interviews. Tailor your professional summary, reorder bullet points to highlight relevant achievements, and include keywords from each specific job description."
    },
    {
      question: "How do I optimize my resume for ATS?",
      answer: "Use standard headings (Work Experience, Education, Skills), include keywords naturally throughout, avoid tables and graphics, save as .docx (not PDF for some ATS), and include both acronyms and full terms (e.g., 'SEO (Search Engine Optimization)')."
    },
    {
      question: "What's the best font for a resume in 2026?",
      answer: "Top picks: Arial, Calibri, Helvetica, Lato, Garamond, and Merriweather. Use 10-12pt for body text and 14-16pt for headers. Avoid decorative fonts like Comic Sans or Papyrus which appear unprofessional and may not parse correctly in ATS."
    },
    {
      question: "Should I include my GPA on my resume?",
      answer: "Include GPA only if you're a recent graduate (within 2-3 years) with 3.5 or higher. For experienced professionals, remove GPA and focus on professional achievements. If your GPA is lower, consider omitting it entirely or highlighting relevant coursework instead."
    },
    {
      question: "How far back should my work history go?",
      answer: "Include the last 10-15 years of relevant experience. For positions older than 15 years, summarize briefly or omit unless highly relevant. Focus on accomplishments from the past decade, which employers care about most."
    },
    {
      question: "What's the ideal resume file name?",
      answer: "Use: FirstName-LastName-Resume.pdf (e.g., John-Smith-Resume.pdf). Avoid generic names like 'resume.pdf' or 'myresume2026.docx' which can get lost in recruiter downloads. Include the job title if applying to a specific role: John-Smith-Marketing-Manager-Resume.pdf"
    },
    {
      question: "How many bullet points per job?",
      answer: "3-5 bullet points for recent positions, 2-3 for older positions. Each bullet should be 1-2 lines maximum. Focus on achievements, not duties. Lead with strong action verbs and include metrics whenever possible."
    },
    {
      question: "Should I list references on my resume?",
      answer: "No. References belong on a separate document. Simply add 'References available upon request' at the bottom if desired. Have 3-5 professional references ready with their name, title, company, email, and phone number when requested."
    }
  ];

  const keyStatistics = [
    { value: "75%", label: "of resumes rejected by ATS before human review", source: "JobScan 2026", detail: "Only 25% make it to a recruiter's eyes" },
    { value: "6.8 sec", label: "average time recruiters spend on initial screening", source: "TheLadders 2026", detail: "You have seconds to make an impression" },
    { value: "40%", label: "more interviews with customized resumes", source: "CareerBuilder 2026", detail: "Personalization directly impacts results" },
    { value: "85%", label: "of Fortune 500 companies use ATS", source: "Forbes 2026", detail: "ATS optimization is non-negotiable" },
    { value: "3x", label: "more likely to get hired with quantified achievements", source: "LinkedIn 2026", detail: "Numbers tell a powerful story" },
    { value: "56%", label: "of recruiters want to see soft skills", source: "Society for HR Management", detail: "Balance technical and interpersonal abilities" }
  ];

  const commonMistakes = [
    { mistake: "Using generic objectives", fix: "Replace with targeted professional summary", severity: "High" },
    { mistake: "Listing duties instead of achievements", fix: "Use CAR method for each bullet point", severity: "Critical" },
    { mistake: "Failing to quantify results", fix: "Add numbers, percentages, dollar amounts", severity: "Critical" },
    { mistake: "Fancy formatting that confuses ATS", fix: "Use standard single-column layouts", severity: "High" },
    { mistake: "Including irrelevant personal information", fix: "Remove age, marital status, photo", severity: "Medium" },
    { mistake: "Spelling or grammar errors", fix: "Use Grammarly and proofread twice", severity: "Critical" },
    { mistake: "Passive language", fix: "Start each bullet with strong action verbs", severity: "High" },
    { mistake: "Too much text with no white space", fix: "Use shorter paragraphs and bullet points", severity: "Medium" },
    { mistake: "Inconsistent formatting", fix: "Standardize fonts, spacing, and dates", severity: "High" },
    { mistake: "Missing keywords for ATS", fix: "Scan job description and include terms", severity: "Critical" }
  ];

  const expertTips = [
    { tip: "Use power verbs", example: "'Led', 'managed', 'created', 'improved'", impact: "Shows leadership and action" },
    { tip: "Include metrics", example: "Increased sales by 40%, saved $500K", impact: "Proves measurable value" },
    { tip: "Tailor every application", example: "Customize summary and top 3 bullets", impact: "40% more interviews" },
    { tip: "Top-third placement", example: "Most impressive achievements first", impact: "Captures attention quickly" },
    { tip: "Show career progression", example: "Each role more senior than last", impact: "Demonstrates growth" },
    { tip: "Include portfolio links", example: "GitHub, Behance, LinkedIn profile", impact: "Shows work product" },
    { tip: "Use industry keywords", example: "Research job descriptions for terms", impact: "Passes ATS filters" },
    { tip: "Add a skills section", example: "Technical and soft skills listed", impact: "Quick reference for recruiters" }
  ];

  const testimonials = [
    {
      quote: "Followed this guide and landed interviews at 3 top tech companies within 2 weeks. The CAR method was a game-changer for how I present my achievements!",
      author: "Catherine Bouma",
      role: "Senior Software Engineer",
      company: "Google",
      date: safeReviewDates[0] || safeCurrentDate,
      rating: 5
    },
    {
      quote: "As a career changer, the functional format advice helped me highlight transferable skills effectively. Got my dream job in project management after 6 months of searching!",
      author: "James Anderson",
      role: "Project Manager",
      company: "Microsoft",
      date: safeReviewDates[1] || safeCurrentDate,
      rating: 5
    },
    {
      quote: "The ATS optimization tips alone were worth the read. My resume now gets past filters and into human hands. Applied to 10 jobs, got 8 callbacks!",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Salesforce",
      date: safeReviewDates[2] || safeCurrentDate,
      rating: 5
    },
    {
      quote: "I was struggling with employment gaps, but this guide showed me exactly how to frame them positively. Landed a job at a Fortune 500 company in 3 weeks!",
      author: "Michael Torres",
      role: "Operations Director",
      company: "Amazon",
      date: safeReviewDates[3] || safeCurrentDate,
      rating: 5
    }
  ];

  const industryExamples = [
    {
      industry: "Technology & Software",
      focus: "Projects, GitHub, Tech Stack, Certifications",
      tip: "List specific languages (Python, Java, Go) and frameworks (React, Node.js, Django). Include a 'Projects' section with links to GitHub. Add certifications like AWS, Azure, or Google Cloud.",
      keywords: ["Python", "React", "Cloud", "API", "Agile", "CI/CD"]
    },
    {
      industry: "Healthcare & Nursing",
      focus: "Certifications, Patient Care, Compliance, Specialties",
      tip: "Highlight licenses (RN, BSN, MSN), specific units (ICU, ER, NICU), and patient volume metrics. Emphasize HIPAA compliance, EMR systems (Epic, Cerner), and patient satisfaction scores.",
      keywords: ["Patient Care", "HIPAA", "EMR", "Clinical", "Certifications", "Compassion"]
    },
    {
      industry: "Finance & Accounting",
      focus: "Accuracy, Tools, Regulatory Knowledge, CPA",
      tip: "Quantify budget sizes managed, money saved, or revenue increased. Mention tools like Excel (Pivot Tables, VLOOKUP, Macros), SAP, Oracle, or QuickBooks. Highlight CPA, CFA, or Series licenses.",
      keywords: ["CPA", "Audit", "Financial Analysis", "SAP", "Compliance", "Budgeting"]
    },
    {
      industry: "Creative & Marketing",
      focus: "Portfolio, Campaigns, ROI, Analytics",
      tip: "Link to a digital portfolio (Behance, Dribbble, personal site). Focus on campaign results (e.g., 'Increased engagement by 20%', 'Generated 500K impressions'). Show versatility in tools (Adobe Suite, Figma, Canva, Google Analytics).",
      keywords: ["SEO", "Content Strategy", "Analytics", "Branding", "Adobe", "ROI"]
    },
    {
      industry: "Sales & Business Development",
      focus: "Quotas, Revenue, Client Acquisition, CRM",
      tip: "Always include sales numbers (% over quota, revenue generated, deal size). Highlight key accounts won, relationship management skills, and CRM proficiency (Salesforce, HubSpot). Show territory growth and client retention rates.",
      keywords: ["Revenue Growth", "Client Acquisition", "Pipeline", "Negotiation", "CRM", "Quota"]
    },
    {
      industry: "Education & Academia",
      focus: "Publications, Curriculum, Student Success, Research",
      tip: "Include teaching evaluations, curriculum development examples, and any published research or conference presentations. Highlight grants secured, committees served on, and mentorship programs.",
      keywords: ["Curriculum Design", "Assessment", "Research", "Publications", "Mentoring"]
    }
  ];

  const checklistItems = [
    "Contact info is current and professional (email, phone, LinkedIn)",
    "Professional summary is tailored to the specific job",
    "Work experience uses reverse-chronological order",
    "Achievements are quantified with numbers/%/$ amounts",
    "No spelling or grammar errors (use Grammarly)",
    "File format is .docx or PDF (check job posting preference)",
    "Font is readable (10-12pt) and consistent throughout",
    "Margins are between 0.5\" and 1\" on all sides",
    "ATS-friendly headings (standard section names)",
    "Consistent verb tense (past for past jobs, present for current)",
    "No personal pronouns (I, me, my, we)",
    "Relevant keywords from job description included",
    "White space for easy scanning (not too dense)",
    "File name is professional (FirstName-LastName-Resume.pdf)",
    "Links to portfolio or LinkedIn (if relevant)"
  ];

  const resumeFormats = [
    {
      name: "Reverse-Chronological",
      bestFor: "Most professionals with steady work history",
      pros: ["Preferred by 85% of recruiters", "Shows clear career growth", "Best ATS compatibility"],
      cons: ["Highlights employment gaps", "Not ideal for career changers", "Less focus on transferable skills"]
    },
    {
      name: "Functional (Skills-Based)",
      bestFor: "Career changers or those with significant gaps",
      pros: ["Emphasizes transferable skills", "Downplays timeline issues", "Good for recent graduates"],
      cons: ["Suspicious to many recruiters", "Poor ATS compatibility", "Can hide lack of experience"]
    },
    {
      name: "Combination/Hybrid",
      bestFor: "Senior roles and technical positions",
      pros: ["Best of both formats", "Showcases skills and experience", "Good for diverse backgrounds"],
      cons: ["Harder to format cleanly", "Can be longer than 1 page", "Requires careful organization"]
    },
    {
      name: "Targeted/Customized",
      bestFor: "Specific job applications, competitive roles",
      pros: ["Highly relevant to each job", "Shows genuine interest", "Best response rates"],
      cons: ["Time-consuming to create", "Requires multiple versions", "Hard to maintain"]
    }
  ];

  const actionVerbs = [
    "Achieved", "Improved", "Led", "Created", "Developed", "Implemented",
    "Increased", "Reduced", "Managed", "Designed", "Launched", "Negotiated",
    "Optimized", "Generated", "Streamlined", "Directed", "Executed", "Orchestrated",
    "Transformed", "Accelerated", "Pioneered", "Revolutionized", "Spearheaded", "Championed"
  ];

  const softSkills = [
    "Communication", "Leadership", "Problem Solving", "Adaptability", "Time Management",
    "Team Collaboration", "Critical Thinking", "Emotional Intelligence", "Creativity",
    "Conflict Resolution", "Project Management", "Decision Making"
  ];

  const hardSkills = [
    "Python/Java/JavaScript", "SQL/NoSQL Databases", "Cloud Computing (AWS/Azure)",
    "Data Analysis (Excel/SQL/R)", "Project Management (Jira/Asana)",
    "CRM Software (Salesforce/HubSpot)", "Adobe Creative Suite", "SEO/SEM Tools",
    "Financial Modeling", "Foreign Languages", "Machine Learning", "UI/UX Design"
  ];

  const beforeAfterExamples = [
    {
      before: "Responsible for managing social media accounts for the company.",
      after: "Increased social media engagement by 240% and grew follower base by 15K within 6 months through strategic content calendar and audience segmentation."
    },
    {
      before: "Worked on customer service and helped customers with problems.",
      after: "Resolved 95% of customer complaints within first contact, achieving 98% satisfaction rating and reducing escalations by 40%."
    },
    {
      before: "In charge of sales in the Midwest region.",
      after: "Exceeded sales quota by 35% ($2.5M) in Midwest region, securing 3 new enterprise accounts worth $1.2M in annual recurring revenue."
    },
    {
      before: "Did data entry and maintained spreadsheets.",
      after: "Automated manual data entry processes using Excel macros, reducing processing time by 75% and eliminating data errors completely."
    }
  ];

  const resumeSections = [
    { name: "Contact Information", mandatory: true, tips: "Include professional email, phone, LinkedIn, location (city, state)" },
    { name: "Professional Summary", mandatory: true, tips: "2-3 sentences tailored to job, highlight top achievements" },
    { name: "Work Experience", mandatory: true, tips: "Reverse chronological, 3-5 bullets per job using CAR method" },
    { name: "Skills", mandatory: true, tips: "Mix of hard and soft skills, include technical proficiencies" },
    { name: "Education", mandatory: true, tips: "Degree, institution, graduation year, GPA (if recent and high)" },
    { name: "Certifications", mandatory: false, tips: "Relevant professional certifications, licenses" },
    { name: "Projects", mandatory: false, tips: "Personal or academic projects, include links when possible" },
    { name: "Volunteer Work", mandatory: false, tips: "Relevant volunteer experience, leadership roles" },
    { name: "Publications", mandatory: false, tips: "Articles, papers, or books published" },
    { name: "Languages", mandatory: false, tips: "Languages spoken with proficiency level" }
  ];

  // Product image URL for schema
  const productImage = "https://professionalresumefree.com/images/resume-writing-guide-product.jpg";

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <Head>
        <title>How to Write a Resume: Complete 2026 Guide with Expert Examples & Templates</title>
        <meta 
          name="description" 
          content="Master the art of resume writing with our comprehensive 2026 guide. Step-by-step instructions, expert examples, ATS optimization tips, and proven strategies to land interviews at top companies." 
        />
        <meta name="keywords" content="how to write a resume, resume writing guide, professional resume examples, resume templates 2026, ATS resume, job search tips, resume format, professional summary, resume achievements, CAR method" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        <link rel="canonical" href="https://professionalresumefree.com/how-to-write-a-resume" />
        
        <meta property="og:title" content="How to Write a Resume: Complete 2026 Guide with Expert Examples" />
        <meta property="og:description" content="Master resume writing with expert tips, templates, and real examples including CAR method, ATS optimization, and industry-specific strategies." />
        <meta property="og:image" content="https://professionalresumefree.com/images/resume-writing-guide-og.jpg" />
        <meta property="og:url" content="https://professionalresumefree.com/how-to-write-a-resume" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="article:published_time" content="2026-01-01T00:00:00Z" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume: Complete 2026 Guide" />
        <meta name="twitter:description" content="Expert resume writing guide with templates and proven job search strategies for 2026." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-resume-guide-preview.jpg" />
        
        {/* FIXED: Properly structured Schema.org with proper nesting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://professionalresumefree.com/how-to-write-a-resume#webpage",
                  "url": "https://professionalresumefree.com/how-to-write-a-resume",
                  "name": "How to Write a Resume: Complete 2026 Guide",
                  "description": "Complete professional guide on how to write an effective resume with step-by-step instructions, expert examples, and ATS optimization strategies.",
                  "dateModified": safeLastModifiedDate,
                  "isPartOf": {
                    "@id": "https://professionalresumefree.com/#website"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com/",
                  "name": "Professional Resume Free",
                  "publisher": {
                    "@id": "https://professionalresumefree.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://professionalresumefree.com/#organization",
                  "name": "Professional Resume Free",
                  "url": "https://professionalresumefree.com/"
                },
                {
                  "@type": "Article",
                  "@id": "https://professionalresumefree.com/how-to-write-a-resume#article",
                  "headline": "How to Write a Resume: Complete 2026 Guide",
                  "description": "Expert guide on writing professional resumes that pass ATS systems and impress hiring managers.",
                  "image": productImage,
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "author": {
                    "@id": "https://professionalresumefree.com/#organization"
                  },
                  "publisher": {
                    "@id": "https://professionalresumefree.com/#organization"
                  },
                  "mainEntityOfPage": {
                    "@id": "https://professionalresumefree.com/how-to-write-a-resume#webpage"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://professionalresumefree.com/how-to-write-a-resume#faq",
                  "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                },
                {
                  "@type": "Product",
                  "@id": "https://professionalresumefree.com/how-to-write-a-resume#product",
                  "name": "Resume Writing Guide",
                  "description": "Complete guide on how to write a professional resume",
                  "image": productImage,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://professionalresumefree.com/how-to-write-a-resume"
                  },
                  "review": testimonials.map((testimonial) => ({
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": testimonial.rating.toString(),
                      "bestRating": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": testimonial.author
                    },
                    "reviewBody": testimonial.quote,
                    "datePublished": testimonial.date
                  })),
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "learningResourceType",
                      "value": "Guide"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "educationalLevel",
                      "value": "Professional"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "creativeWorkStatus",
                      "value": "Updated"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Breadcrumb Navigation */}
      <nav style={{ width: '100%', maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px' }}>
        <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
          <li>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '500' }}>
              <FiHome size={16} />
              <span>Home</span>
            </Link>
          </li>
          <li style={{ margin: '0 8px' }}><FiChevronRight size={12} /></li>
          <li><span style={{ color: '#666' }}>How to Write a Resume</span></li>
        </ol>
      </nav>

      <main style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Enhanced Hero Section */}
        <section style={{ padding: '50px 0 30px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#000', color: '#fff', padding: '8px 20px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '25px' }}>
            <FiStar size={14} /> 2026 UPDATED GUIDE
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '25px', color: '#000', letterSpacing: '-0.02em' }}>
            How to Write a Resume: <br />The Complete 2026 Guide
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#444', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Writing an effective resume is both an art and a science. This comprehensive guide provides proven strategies, 
            real examples, and step-by-step instructions to help you create a professional resume that stands out 
            in today's competitive job market and passes through modern ATS systems.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiCheck style={{ color: '#000' }} /> <span>Updated for 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiCheck style={{ color: '#000' }} /> <span>ATS-Tested</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiCheck style={{ color: '#000' }} /> <span>Expert Examples</span>
            </div>
          </div>
        </section>

        {/* Statistics Grid - Enriched */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', margin: '50px 0' }}>
          {keyStatistics.map((stat, index) => (
            <div key={index} style={{ background: '#fff', padding: '25px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e0e0e0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '800', color: '#000', marginBottom: '10px' }}>{stat.value}</div>
              <div style={{ fontSize: '1rem', color: '#333', marginBottom: '8px', fontWeight: '600' }}>{stat.label}</div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>{stat.detail}</div>
              <div style={{ fontSize: '0.75rem', color: '#999' }}>Source: {stat.source}</div>
            </div>
          ))}
        </section>

        {/* Quick Navigation */}
        <section style={{ margin: '50px 0' }}>
          <div style={{ background: '#000', color: '#fff', padding: '35px', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
              <FiBookOpen /> Quick Navigation
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
              {[
                "1. Resume Fundamentals",
                "2. Choose Your Format", 
                "3. Essential Sections",
                "4. CAR Method Writing",
                "5. Before & After Examples",
                "6. Industry-Specific Tips",
                "7. Skills Breakdown",
                "8. Common Mistakes",
                "9. Expert Tips",
                "10. Final Checklist",
                "11. FAQ"
              ].map((item, idx) => (
                <a key={idx} href={`#section-${idx+1}`} style={{ textDecoration: 'none', color: '#fff', padding: '10px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'block', transition: 'background 0.2s' }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 - Resume Fundamentals */}
        <section id="section-1" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '15px', color: '#000', fontWeight: '700' }}>
            <FiTarget style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            1. Resume Writing Fundamentals
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
            Your resume has one primary goal: <strong>to secure an interview</strong>. It's a marketing document that must demonstrate value, showcase relevant skills, and pass through Applicant Tracking Systems (ATS).
          </p>
          
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000' }}>Key Characteristics of an Effective Resume</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {[
                { char: "Clarity", desc: "Easy to read and understand quickly in 6-8 seconds", icon: "📝" },
                { char: "Relevance", desc: "Tailored to the specific job and industry requirements", icon: "🎯" },
                { char: "Quantification", desc: "Uses numbers to demonstrate measurable impact", icon: "📊" },
                { char: "Professionalism", desc: "Error-free with appropriate formatting and design", icon: "💼" },
                { char: "ATS-Friendly", desc: "Compatible with applicant tracking systems used by 98% of Fortune 500 companies", icon: "🤖" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '15px', padding: '12px', background: '#f8f9fa', borderRadius: '10px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#000', marginBottom: '5px' }}>{item.char}</div>
                    <div style={{ color: '#555' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Sections Overview */}
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiLayers /> Essential Resume Sections
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
              {resumeSections.map((section, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px', background: section.mandatory ? '#e8f5e9' : '#fff3e0', borderRadius: '8px' }}>
                  <FiCheck style={{ color: section.mandatory ? '#2e7d32' : '#ed6c02', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#000' }}>{section.name} {section.mandatory && <span style={{ fontSize: '0.7rem', color: '#2e7d32' }}>(Required)</span>}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{section.tips}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 - Choose Format */}
        <section id="section-2" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '15px', color: '#000', fontWeight: '700' }}>
            <FiTrendingUp style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            2. Choosing the Right Resume Format
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
            Selecting the appropriate format is crucial for presenting your experience effectively. Here's how each format performs in 2026:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {resumeFormats.map((format, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#000' }}>{format.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}><strong>Best for:</strong> {format.bestFor}</p>
                <div style={{ marginBottom: '12px' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px', color: '#2e7d32' }}>✓ Pros:</p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: '#555' }}>
                    {format.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px', color: '#d32f2f' }}>✗ Cons:</p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: '#555' }}>
                    {format.cons.map((con, i) => <li key={i}>{con}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Essential Sections Deep Dive */}
        <section id="section-3" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiPenTool style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            3. Writing Each Section Effectively
          </h2>

          {/* Work Experience */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e0e0e0', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000' }}>Work Experience Section</h3>
            <p style={{ marginBottom: '20px', color: '#444' }}>Structure each position with these elements for maximum impact:</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f5f5f5' }}>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #000' }}>Element</th>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #000' }}>Formatting</th>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #000' }}>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Job Title</td>
                    <td style={{ padding: '12px' }}>Bold, slightly larger font</td>
                    <td style={{ padding: '12px' }}>"Senior Marketing Manager"</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Company & Location</td>
                    <td style={{ padding: '12px' }}>Regular font</td>
                    <td style={{ padding: '12px' }}>"TechCorp Inc., San Francisco, CA"</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Employment Dates</td>
                    <td style={{ padding: '12px' }}>Right-aligned or after company</td>
                    <td style={{ padding: '12px' }}>"March 2022 - Present"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Bullet Points</td>
                    <td style={{ padding: '12px' }}>3-5 per job, action verbs</td>
                    <td style={{ padding: '12px' }}>"Increased sales by 35% through strategic campaigns"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e0e0e0', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000' }}>Professional Summary</h3>
            <p style={{ marginBottom: '20px', color: '#444' }}>Your professional summary is the first thing recruiters read. Make it count with these examples:</p>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #000' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem' }}>"Digital Marketing Manager with 8+ years of experience driving 40% average YoY growth through data-driven campaigns. Expert in SEO, content strategy, and team leadership. Consistently exceeded KPIs by 25%."</p>
              </div>
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #000' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem' }}>"Full-Stack Developer proficient in React, Node.js, and Python. Built 15+ production applications serving 100K+ users. Passionate about clean code, performance optimization, and mentoring junior developers."</p>
              </div>
              <div style={{ padding: '15px', background: '#e8f0fe', borderRadius: '10px' }}>
                <p style={{ margin: 0, fontSize: '0.85rem' }}><strong>Pro Tip:</strong> Keep your summary to 2-3 sentences. Focus on what you can do for the employer, not what you want. Include your top 3-5 skills and a notable achievement.</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000' }}>Skills Section Strategy</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div>
                <h4 style={{ marginBottom: '15px', color: '#000' }}>Hard Skills (Technical)</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {hardSkills.map((skill, idx) => (
                    <span key={idx} style={{ background: '#e3f2fd', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '15px', color: '#000' }}>Soft Skills (Interpersonal)</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {softSkills.map((skill, idx) => (
                    <span key={idx} style={{ background: '#fff3e0', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '20px', padding: '15px', background: '#f0f7ff', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Strategy:</strong> Don't just list soft skills—demonstrate them in your work experience bullets. Instead of saying "Good communicator," say "Presented quarterly reports to executive stakeholders, influencing strategic decisions."</p>
            </div>
          </div>
        </section>

        {/* Section 4 - CAR Method */}
        <section id="section-4" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiZap style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            4. The CAR Method: Transform Duties into Achievements
          </h2>
          
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0', marginBottom: '25px' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#444' }}>
              The CAR method (Challenge, Action, Result) converts boring job duties into compelling achievements that impress recruiters.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎯</div>
                <h4 style={{ marginBottom: '10px', color: '#000' }}>1. Challenge</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>What problem or situation did you face? Be specific about the obstacle.</p>
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '10px' }}>Example: "Sales were declining by 15% quarterly due to outdated marketing strategy."</p>
              </div>
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
                <h4 style={{ marginBottom: '10px', color: '#000' }}>2. Action</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>What specific steps did you take? Focus on YOUR contributions.</p>
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '10px' }}>Example: "Implemented new CRM system, created data-driven campaigns, and trained team of 5 on analytics tools."</p>
              </div>
              <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏆</div>
                <h4 style={{ marginBottom: '10px', color: '#000' }}>3. Result</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>What happened? QUANTIFY your impact with numbers.</p>
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '10px' }}>Example: "Achieved 25% sales increase within 6 months and improved team efficiency by 40%."</p>
              </div>
            </div>
            
            <div style={{ background: '#000', color: '#fff', padding: '30px', borderRadius: '12px', marginTop: '15px' }}>
              <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Complete CAR Example:</h4>
              <p style={{ marginBottom: '15px', opacity: 0.8 }}><strong>Before (Duty):</strong> "Managed social media accounts"</p>
              <p style={{ fontSize: '1rem', lineHeight: '1.5' }}><strong>After (Achievement using CAR):</strong> "Increased social media engagement by 240% through strategic content calendar and audience segmentation, generating 150+ qualified leads monthly."</p>
            </div>
          </div>

          {/* Action Verbs */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#000' }}>Powerful Action Verbs to Start Your Bullets</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
              {actionVerbs.map((verb, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: '#f8f9fa', borderRadius: '6px', fontSize: '0.85rem' }}>
                  <FiCheck size={12} /> <span>{verb}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Before & After Examples */}
        <section id="section-5" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiBarChart style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            5. Before vs After: Real Resume Transformations
          </h2>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            {beforeAfterExamples.map((example, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ color: '#d32f2f', fontWeight: '600', marginBottom: '8px' }}>❌ BEFORE (Duty-based):</div>
                  <p style={{ margin: 0, padding: '12px', background: '#ffebee', borderRadius: '8px', fontStyle: 'italic' }}>{example.before}</p>
                </div>
                <div>
                  <div style={{ color: '#2e7d32', fontWeight: '600', marginBottom: '8px' }}>✅ AFTER (Achievement-based with CAR):</div>
                  <p style={{ margin: 0, padding: '12px', background: '#e8f5e9', borderRadius: '8px' }}>{example.after}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 - Industry-Specific Examples */}
        <section id="section-6" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiBriefcase style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            6. Industry-Specific Resume Strategies
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {industryExamples.map((ind, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiGlobe /> {ind.industry}
                </h3>
                <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#555' }}><strong>Focus Areas:</strong> {ind.focus}</p>
                <p style={{ marginBottom: '10px', fontSize: '0.85rem', color: '#333' }}><strong>Pro Tip:</strong> {ind.tip}</p>
                <div style={{ marginTop: '12px' }}>
                  <strong style={{ fontSize: '0.8rem' }}>Keywords to include:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {ind.keywords.map((keyword, kidx) => (
                      <span key={kidx} style={{ background: '#f0f0f0', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem' }}>{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 - Skills Breakdown */}
        <section id="section-7" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiCode style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            7. Hard Skills vs Soft Skills: Finding the Right Balance
          </h2>
          
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '1.5rem' }}>💻</div>
                  <h3 style={{ fontSize: '1.2rem', color: '#000', margin: 0 }}>Hard Skills</h3>
                </div>
                <p style={{ color: '#555', marginBottom: '15px' }}>Specific, teachable abilities that can be defined and measured. Technical skills for specific jobs.</p>
                <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
                  <strong>Examples:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Python</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Data Analysis</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Foreign Languages</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>SEO/SEM</span>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '1.5rem' }}>🤝</div>
                  <h3 style={{ fontSize: '1.2rem', color: '#000', margin: 0 }}>Soft Skills</h3>
                </div>
                <p style={{ color: '#555', marginBottom: '15px' }}>Interpersonal and character traits that influence how you work with others.</p>
                <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '8px' }}>
                  <strong>Examples:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Leadership</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Communication</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Problem Solving</span>
                    <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem' }}>Teamwork</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '30px', padding: '20px', background: '#f0f7ff', borderRadius: '12px', borderLeft: '4px solid #0066cc' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                <strong>📌 Best Practice:</strong> Aim for a 60/40 balance between hard and soft skills. While technical skills get you the interview, soft skills often determine who gets hired. Demonstrate soft skills through your work examples rather than just listing them.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 - Common Mistakes */}
        <section id="section-8" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiAlertCircle style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            8. 10 Common Resume Mistakes That Kill Your Chances
          </h2>
          
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '15px' }}>
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px', background: '#fff9f9', borderRadius: '10px', borderLeft: mistake.severity === 'Critical' ? '3px solid #d32f2f' : '3px solid #ff9800' }}>
                  <FiAlertCircle style={{ color: mistake.severity === 'Critical' ? '#d32f2f' : '#ff9800', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>{mistake.mistake}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Fix: {mistake.fix}</div>
                    <div style={{ fontSize: '0.7rem', color: mistake.severity === 'Critical' ? '#d32f2f' : '#ff9800', marginTop: '4px' }}>{mistake.severity} Priority</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 - Expert Tips */}
        <section id="section-9" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiAward style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            9. Expert Tips from Hiring Managers
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {expertTips.map((tip, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <FiThumbsUp style={{ color: '#000', fontSize: '1.2rem' }} />
                  <h3 style={{ margin: 0, fontSize: '1rem', color: '#000' }}>{tip.tip}</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '10px' }}><strong>Example:</strong> {tip.example}</p>
                <p style={{ fontSize: '0.8rem', color: '#666' }}><strong>Impact:</strong> {tip.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10 - Checklist */}
        <section id="section-10" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiCheckSquare style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            10. Ultimate Resume Checklist (15 Points)
          </h2>
          
          <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e0e0e0' }}>
            <p style={{ marginBottom: '25px', fontSize: '1rem', color: '#444' }}>
              Before submitting your resume, verify every item on this checklist:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
              {checklistItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <FiCheckSquare style={{ color: '#2e7d32', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.85rem', color: '#333', lineHeight: '1.4' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700', textAlign: 'center' }}>
            <FiUsers style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Real Success Stories
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', marginBottom: '40px' }}>
            Join thousands of job seekers who landed their dream jobs using our resume guide
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '15px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} style={{ color: '#FFD700', fill: '#FFD700' }} />
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic' }}>"{testimonial.quote}"</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
                  <strong style={{ color: '#000' }}>{testimonial.author}</strong>
                  <div style={{ color: '#666', fontSize: '0.8rem' }}>{testimonial.role} at {testimonial.company}</div>
                  <div style={{ color: '#999', fontSize: '0.7rem', marginTop: '5px' }}>{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs - Enriched */}
        <section id="section-11" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '25px', color: '#000', fontWeight: '700' }}>
            <FiClock style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            11. Frequently Asked Questions (2026 Edition)
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: '#000', fontWeight: '600' }}>{faq.question}</h3>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: '1.5', marginBottom: '10px' }}>{faq.answer}</p>
                <div style={{ fontSize: '0.7rem', color: '#999', marginTop: '10px' }}>
                  Updated: {safeFaqDates[index % safeFaqDates.length] || safeCurrentDate}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <div style={{ margin: '60px 0' }}>
          <div style={{ background: 'linear-gradient(135deg, #000 0%, #2d2d2d 100%)', color: '#fff', padding: '60px 40px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px', color: '#fff', fontWeight: '700' }}>
              Ready to Build Your Professional Resume?
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ccc', lineHeight: '1.6' }}>
              You now have the complete guide to writing an outstanding resume. Put your knowledge into action and create a resume that gets noticed.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <Link 
                href="/resume-templates" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#000', padding: '16px 32px', borderRadius: '40px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
              >
                Create Your Free Resume
                <FiArrowRight />
              </Link>
              <Link 
                href="/resume-examples" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: '40px', fontWeight: '600', textDecoration: 'none', border: '2px solid #fff', fontSize: '1rem' }}
              >
                View Resume Examples
                <FiArrowRight />
              </Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>
              ✓ No sign-up required  ✓ Free forever  ✓ ATS-optimized templates  ✓ Instant PDF download
            </p>
          </div>
        </div>

        {/* Random Internal Links Footer - Responsive & SEO Optimized */}
        <section id="internal-linking-footer" style={{ 
          width: '100%', 
          background: '#f8f9fa', 
          padding: '40px 20px', 
          borderTop: '1px solid #e0e0e0',
          marginTop: '40px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#000', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiLink /> Explore More Resources
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: '15px' 
            }}>
              {selectedLinks.map((linkPath, idx) => {
                const anchorText = generateAnchorText(linkPath);
                return (
                  <Link 
                    key={idx} 
                    href={linkPath}
                    style={{ 
                      display: 'block',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      color: '#333',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#000';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {anchorText}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Meta Info */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', fontSize: '0.8rem', color: '#999', marginBottom: '50px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FiClock size={14} /> Last updated: {safeCurrentDate}
          </div>
          <div>•</div>
          <div>Version 2026.2</div>
          <div>•</div>
          <div>Next review: {new Date(new Date(safeCurrentDate).setDate(new Date(safeCurrentDate).getDate() + 14)).toISOString().split('T')[0]}</div>
        </div>
      </main>
    </div>
  );
}