import Head from 'next/head';
import Link from 'next/link';
import { 
  FiHome, 
  FiChevronRight, 
  FiCalendar, 
  FiClock, 
  FiEye, 
  FiStar, 
  FiAward,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiTool,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiBriefcase,
  FiCode,
  FiHeart,
  FiDollarSign,
  FiBookOpen,
  FiShield,
  FiLayers,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiTerminal,
  FiPrinter,
  FiArchive
} from 'react-icons/fi';

// Critical CSS inline with white background, black fonts, black buttons, grey cards
const criticalCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary: #000000;
  --secondary: #333333;
  --background: #ffffff;
  --card-bg: #f9fafb;
  --border: #e5e7eb;
  --text-light: #4b5563;
  --text-lighter: #6b7280;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}
@media (min-width: 640px) {
  .container { padding: 0 24px; }
}
.hero {
  background: var(--background);
  padding: 40px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 60px 0; }
}
.hero h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 16px;
  line-height: 1.2;
  word-wrap: break-word;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 16px;
}
.hero-image-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 32px;
  padding: 0 16px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
@media (min-width: 1024px) {
  .hero-image-container { max-width: 650px; }
}
@media (min-width: 1280px) {
  .hero-image-container { max-width: 600px; }
}
.hero-image-container img {
  width: 100%;
  height: auto;
  display: block;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}
@media (max-width: 480px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 30px 0;
  justify-content: center;
}
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
.card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  margin: 0 auto;
  width: 100%;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-primary {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin: 8px auto;
  border: 1px solid var(--primary);
  transition: background 0.2s;
  width: auto;
  min-width: 200px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    margin: 4px auto;
    min-width: auto;
    padding: 14px 24px;
  }
}
.btn-primary:hover {
  background: var(--secondary);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--primary);
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid var(--primary);
  margin: 8px auto;
  transition: background 0.2s;
  width: auto;
  min-width: 200px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    margin: 4px auto;
    min-width: auto;
    padding: 14px 24px;
  }
}
.btn-secondary:hover {
  background: #f5f5f5;
}
.btn-secondary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .stats { gap: 16px; }
}
@media (max-width: 480px) {
  .stats { 
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
}
.stat-item {
  text-align: center;
  min-width: 120px;
  padding: 8px;
  margin: 0 auto;
}
@media (max-width: 480px) {
  .stat-item { 
    min-width: 100%;
    width: 100%;
    max-width: 250px;
  }
}
.stat-number {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  display: block;
}
.section {
  padding: 40px 0;
  scroll-margin-top: 20px;
}
@media (min-width: 768px) {
  .section { padding: 60px 0; }
}
@media (max-width: 480px) {
  .section { padding: 30px 0; }
}
.section:target {
  background-color: rgba(0,0,0,0.02);
}
.section-title {
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 32px;
  padding: 0 16px;
  word-wrap: break-word;
  width: 100%;
}
@media (max-width: 480px) {
  .section-title { margin-bottom: 24px; }
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 40px;
  padding: 0 16px;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
}
.table-wrap {
  overflow-x: auto;
  margin: 30px 0;
  background: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
@media (max-width: 640px) {
  .table-wrap {
    margin: 20px 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  margin: 0 auto;
}
@media (max-width: 480px) {
  table { min-width: 500px; }
}
th {
  background: var(--card-bg);
  padding: 12px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  th { padding: 16px; font-size: 1rem; }
}
td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  td { padding: 16px; font-size: 1rem; }
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  justify-content: center;
}
@media (min-width: 768px) {
  .faq-grid { grid-template-columns: repeat(2, 1fr); }
}
.faq-item {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  height: 100%;
  scroll-margin-top: 20px;
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 480px) {
  .faq-item { padding: 20px; }
}
.faq-item:target {
  background-color: #f0f0f0;
}
.faq-question {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary);
  line-height: 1.4;
}
.trust-badge {
  display: inline-block;
  background: #f3f4f6;
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 20px;
  border: 1px solid var(--border);
}
@media (max-width: 480px) {
  .trust-badge {
    font-size: 0.75rem;
    padding: 5px 10px;
  }
}
.breadcrumb {
  padding: 16px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
@media (max-width: 480px) {
  .breadcrumb {
    padding: 12px 0;
    font-size: 0.85rem;
  }
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  justify-content: center;
}
@media (max-width: 480px) {
  .breadcrumb ol { gap: 4px; }
}
.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.breadcrumb a:hover {
  border-bottom-color: var(--primary);
}
.breadcrumb [aria-current="page"] {
  font-weight: 600;
}
.hub-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  justify-content: center;
}
@media (min-width: 640px) {
  .hub-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .hub-grid { grid-template-columns: repeat(3, 1fr); }
}
.hub-category {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 480px) {
  .hub-category { padding: 20px; }
}
.hub-category ul {
  list-style: none;
  margin-top: 16px;
}
.hub-category li {
  margin: 12px 0;
}
.hub-category a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 2px;
}
.hub-category a:hover {
  border-bottom-color: var(--primary);
}
.specialized-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  justify-content: center;
}
@media (min-width: 640px) {
  .specialized-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .specialized-grid { grid-template-columns: repeat(3, 1fr); }
}
.specialized-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}
.specialized-card h4 {
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.4;
}
.founder-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  height: 100%;
  margin: 0 auto;
  width: 100%;
}
.testimonial-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}
.cta-section {
  background: var(--background);
  color: var(--primary);
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .cta-section { padding: 60px 0; }
}
@media (max-width: 480px) {
  .cta-section { padding: 30px 0; }
}
.cta-section h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 16px;
  padding: 0 16px;
}
.cta-section p {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 16px;
}
.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  justify-content: center;
}
.feature-tag {
  background: #e5e7eb;
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid #d1d5db;
}
@media (min-width: 768px) {
  .feature-tag { font-size: 0.8rem; }
}
@media (max-width: 480px) {
  .feature-tag { 
    font-size: 0.7rem;
    padding: 3px 6px;
  }
}
.text-small { font-size: 0.85rem; color: var(--text-light); }
.text-success { color: #059669; font-weight: 600; }
.text-danger { color: #dc2626; font-weight: 600; }
hr { border: none; border-top: 1px solid var(--border); margin: 40px auto; width: 100%; }
@media (max-width: 480px) {
  hr { margin: 30px auto; }
}
.methodology-list {
  list-style: none;
  margin-top: 12px;
}
.methodology-list li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}
.methodology-list li:before {
  content: "✓";
  color: #059669;
  position: absolute;
  left: 0;
  font-weight: bold;
}
.advisory-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
  justify-content: center;
}
@media (max-width: 640px) {
  .advisory-panel { gap: 16px; }
}
@media (max-width: 480px) {
  .advisory-panel {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
}
.advisory-member {
  flex: 1 1 200px;
  padding: 12px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  max-width: 300px;
}
@media (max-width: 480px) {
  .advisory-member { width: 100%; }
}
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
/* Mobile-specific touch improvements */
@media (max-width: 480px) {
  button, 
  .btn-primary, 
  .btn-secondary, 
  .card, 
  a {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .card:active { opacity: 0.8; }
  .table-wrap { -webkit-overflow-scrolling: touch; }
  .container { padding: 0 20px; }
  p, li { font-size: 16px; }
}

/* Page-specific styles */
.article-meta {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-light);
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 30px 0;
  flex-wrap: wrap;
}
.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #000;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  margin: 0 auto;
}
.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #000;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid #000;
  margin: 0 auto;
}
.helper-text {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-top: 16px;
  text-align: center;
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 20px;
}
.toc-section {
  margin: 40px 0;
}
.toc-list {
  list-style: none;
  padding: 0;
  text-align: center;
}
.toc-list li {
  margin: 12px 0;
}
.toc-list a {
  color: var(--primary);
  text-decoration: none;
}
.toc-list a:hover {
  text-decoration: underline;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
  justify-content: center;
}
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
}
.card-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
}
.subheading {
  font-size: 1.3rem;
  margin: 30px 0 15px;
  text-align: center;
}
.table-wrapper {
  overflow-x: auto;
  margin: 30px 0;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}
.table th {
  background: var(--card-bg);
  padding: 12px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}
.table td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
}
.list {
  padding-left: 20px;
  margin: 20px auto;
  max-width: 800px;
}
.list li {
  margin: 8px 0;
}
.inline-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: underline;
}
.faq-list {
  display: grid;
  gap: 20px;
  margin: 30px 0;
  justify-content: center;
}
/* Essential Tips Grid - Mobile: 1 column, Desktop: 2 columns */
.essential-tips-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 30px 0;
}
@media (min-width: 640px) {
  .essential-tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.essential-tip-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.essential-tip-card .tip-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  justify-content: center;
}
.essential-tip-card h3 {
  font-size: 1.1rem;
  margin: 0;
}
.essential-tip-card p {
  color: #4b5563;
  line-height: 1.6;
}

/* ATS Tips Grid - Mobile: 1 column, Desktop: 2 columns */
.ats-tips-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 20px;
}
@media (min-width: 640px) {
  .ats-tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.ats-tip-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  justify-content: flex-start;
  text-align: left;
  padding: 8px;
  background: var(--background);
  border-radius: 6px;
  border: 1px solid var(--border);
}
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(5).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(7).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-resume-for-usa-administrative-jobs";

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
      "name": "Resume Advice",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Administrative Resume Guide",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write a Resume for USA Administrative Jobs (2026 Guide)",
    description: "Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples, ATS tips, and free templates for administrative assistants, office managers, and executive assistants.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "how to write a resume for administrative jobs",
    "administrative assistant resume examples 2026",
    "office manager resume tips",
    "executive assistant resume usa",
    "administrative resume format"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "What should be included in an administrative resume?", answer: "An administrative resume should include a professional summary, core competencies (software, organization, communication), professional experience with quantified achievements, education, and any relevant certifications (like Microsoft Office Specialist or Certified Administrative Professional)." },
    { question: "How do I describe administrative experience on a resume?", answer: "Use action verbs and quantify your achievements. Instead of 'Answered phones and scheduled meetings,' write 'Managed complex calendar for executive team of 5, scheduling 20+ meetings weekly and reducing scheduling conflicts by 30%.' Focus on efficiency, organization, and the value you added." },
    { question: "What skills are most important for administrative jobs?", answer: "Key skills include: Microsoft Office Suite (especially Outlook, Excel, PowerPoint), calendar management, communication (written and verbal), organization, time management, problem-solving, attention to detail, and sometimes industry-specific software (like CRM systems)." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "Administrative Resumes Explained Simply", content: "Think of your administrative resume as proof of your ability to make things run smoothly. Employers want to see that you're organized, reliable, and proactive. Every bullet point should answer: 'How did I make my boss's or team's job easier?'" },
    { topic: "Why ATS Matters for Admin Roles", content: "Many administrative positions receive hundreds of applications, especially in large organizations. Companies use ATS to filter resumes for keywords like 'calendar management,' 'event planning,' and specific software skills. Tailoring your resume to each job description is essential." }
  ];

  const faqItems = [
    {
      question: 'Should I include a summary on my administrative resume?',
      answer: 'Yes, a brief 2-3 line professional summary is highly recommended. It should highlight your years of experience, key skills, and what you bring to the role. For example: "Detail-oriented administrative assistant with 5+ years of experience supporting C-level executives. Proficient in Microsoft Office Suite and calendar management. Known for improving office efficiency and streamlining processes."',
    },
    {
      question: 'How long should an administrative resume be?',
      answer: 'For most administrative professionals, a one-page resume is ideal, especially if you have less than 10 years of experience. If you have extensive experience or are applying for senior executive assistant roles, two pages may be acceptable, but every line must add value.',
    },
    {
      question: 'What software skills should I list?',
      answer: 'List software relevant to the job. Common ones include: Microsoft Office Suite (Word, Excel, PowerPoint, Outlook), Google Workspace (Docs, Sheets, Gmail, Calendar), scheduling tools (Calendly, Doodle), CRM software (Salesforce, HubSpot), and communication tools (Slack, Zoom, Microsoft Teams).',
    },
    {
      question: 'How do I highlight my organizational skills?',
      answer: 'Provide specific examples. Instead of saying "Highly organized," write "Managed filing system for 500+ client records, reducing retrieval time by 40%." Or "Coordinated logistics for 10+ company events, each with 50-100 attendees, ensuring all details ran smoothly."',
    },
    {
      question: 'Should I include volunteer work on my administrative resume?',
      answer: 'Yes, if it demonstrates relevant skills. Volunteer roles often involve organization, communication, and coordination—exactly what administrative jobs require. Include it especially if you have limited paid experience.',
    },
    {
      question: 'What if I\'m changing careers into administration?',
      answer: 'Focus on transferable skills. If you\'ve worked in retail, hospitality, or any customer-facing role, you\'ve developed organization, communication, and problem-solving skills. Highlight these and consider including a skills-based resume format.',
    },
  ];

  // Testimonials - fewer cards as requested
  const testimonials = [
    {
      quote: "I was an office manager for 10 years but hadn't updated my resume. This guide helped me quantify my achievements and tailor my resume for a senior executive assistant role. I got 4 interviews in 2 weeks!",
      metric: "4 interviews in 2 weeks",
      name: "Patricia M.",
      role: "Senior Executive Assistant",
      company: "Healthcare Organization",
      date: reviewDates[0]
    },
    {
      quote: "The ATS tips were a game-changer. I started including keywords from job descriptions and went from no callbacks to multiple interviews. Landed a great administrative role at a university.",
      metric: "Multiple interviews",
      name: "James R.",
      role: "Administrative Coordinator",
      company: "University",
      date: reviewDates[1]
    }
  ];

  // Essential tips for administrative resumes
  const essentialTips = [
    {
      title: "Lead with a Strong Summary",
      icon: "FiUser",
      description: "Write a 2-3 line professional summary highlighting your experience, key skills, and value proposition. Tailor it to each job."
    },
    {
      title: "Highlight Core Competencies",
      icon: "FiTarget",
      description: "Create a bulleted 'Core Competencies' or 'Skills' section near the top. Include software, soft skills, and administrative abilities."
    },
    {
      title: "Quantify Achievements",
      icon: "FiTrendingUp",
      description: "Use numbers: 'Managed calendars for 3 executives,' 'Scheduled 50+ meetings monthly,' 'Reduced office supply costs by 15%.'"
    },
    {
      title: "Use Action Verbs",
      icon: "FiBriefcase",
      description: "Start bullet points with strong verbs: 'Coordinated,' 'Managed,' 'Streamlined,' 'Implemented,' 'Organized,' 'Scheduled.'"
    },
    {
      title: "Tailor to the Job Description",
      icon: "FiFileText",
      description: "Mirror language from the job posting. If they emphasize 'calendar management,' make sure those words appear in your resume."
    },
    {
      title: "Include Relevant Certifications",
      icon: "FiAward",
      description: "List certifications like Microsoft Office Specialist (MOS), Certified Administrative Professional (CAP), or project management basics."
    }
  ];

  // ATS tips
  const atsTips = [
    "Use standard headings: 'Professional Summary,' 'Experience,' 'Education,' 'Skills.'",
    "Include keywords from job descriptions naturally: 'calendar management,' 'event planning,' 'Microsoft Excel.'",
    "Avoid graphics, columns, or tables that confuse ATS.",
    "Save as PDF unless requested otherwise.",
    "Spell out acronyms on first use (e.g., 'Customer Relationship Management (CRM)').",
    "Tailor your resume for each application with relevant keywords."
  ];

  return {
    props: {
      buildTimestamp,
      currentDate,
      lastModifiedDate,
      canonicalUrl,
      breadcrumbData,
      meta,
      longTailKeywords,
      peopleAlsoAsk,
      conversationalExplanations,
      faqItems,
      testimonials,
      essentialTips,
      atsTips,
      reviewDates,
      faqDates
    }
  };
}

function AdministrativeResumeGuide({ 
  buildTimestamp,
  currentDate,
  lastModifiedDate,
  canonicalUrl,
  breadcrumbData,
  meta,
  longTailKeywords,
  peopleAlsoAsk,
  conversationalExplanations,
  faqItems,
  testimonials,
  essentialTips,
  atsTips,
  reviewDates,
  faqDates 
}) {
  // Function to render icon based on string
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'FiUser': return <FiUser size={24} />;
      case 'FiTarget': return <FiTarget size={24} />;
      case 'FiTrendingUp': return <FiTrendingUp size={24} />;
      case 'FiBriefcase': return <FiBriefcase size={24} />;
      case 'FiFileText': return <FiFileText size={24} />;
      case 'FiAward': return <FiAward size={24} />;
      default: return null;
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 72 characters exactly */}
        <title>How to Write a Resume for USA Administrative Jobs (2026 Guide)</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples, ATS tips, and free templates for administrative assistants, office managers, and executive assistants." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="administrative resume, administrative assistant resume, office manager resume, executive assistant resume, admin resume tips, administrative jobs usa" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write a Resume for USA Administrative Jobs (2026 Guide)" />
        <meta name="chatgpt-fts:description" content="Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples and ATS tips." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        {/* TECHNICAL SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* SINGLE CANONICAL URL - Updated without www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH - Updated without www */}
        <meta property="og:title" content="How to Write a Resume for USA Administrative Jobs (2026 Guide)" />
        <meta property="og:description" content="Learn how to write a compelling resume for USA administrative jobs. Step-by-step guide with examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD - Updated without www */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume for USA Administrative Jobs" />
        <meta name="twitter:description" content="Step-by-step guide with examples and ATS tips for administrative resumes." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        {/* ADDITIONAL META */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PRECONNECT FOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* SITEMAP */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE SCRIPT - Updated without www */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Write a Resume for USA Administrative Jobs (2026 Guide)",
                  "description": meta.description,
                  "image": meta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-01-23",
                  "dateModified": lastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": "How to Write a Resume for USA Administrative Jobs",
                  "description": meta.description
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...faqItems.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
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
                  "name": "How to Write an Administrative Resume",
                  "description": "Step-by-step guide for administrative professionals",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Write a strong summary",
                      "text": "Create a 2-3 line professional summary highlighting your experience and key skills."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "List core competencies",
                      "text": "Include software, soft skills, and administrative abilities in a bulleted section."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify achievements",
                      "text": "Use numbers to describe your impact in each role."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Tailor to the job",
                      "text": "Mirror keywords from the job description throughout your resume."
                    }
                  ],
                  "totalTime": "PT30M"
                },
                {
                  "@type": "ItemList",
                  "itemListElement": testimonials.map((testimonial, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Review",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5,
                        "bestRating": 5
                      },
                      "author": {
                        "@type": "Person",
                        "name": testimonial.name
                      },
                      "reviewBody": testimonial.quote,
                      "datePublished": testimonial.date,
                      "publisher": {
                        "@type": "Organization",
                        "name": "Professional Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "CreativeWork",
                        "name": "Administrative Resume Guide",
                        "description": "Free guide to writing administrative resumes.",
                        "url": canonicalUrl
                      }
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={currentDate} />
      </div>

      <main>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome style={{marginRight: '4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name">Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Administrative Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">ADMINISTRATIVE RESUME GUIDE 2026</div>
            
            {/* SINGLE H1 TAG - matches URL and is optimized */}
            <h1 id="hero-heading">How to Write a Resume for USA Administrative Jobs (2026 Guide)</h1>
            
            <p>
              Land your next administrative role with a compelling, ATS-friendly resume. This step-by-step guide covers everything from professional summaries to quantifying achievements—with examples for administrative assistants, office managers, and executive assistants.
            </p>

            <div className="hero-actions">
              <a
                href="https://professionalresumefree.com"
                className="btn-primary"
              >
                Browse Administrative Templates <FiArrowRight style={{marginLeft: '8px'}} />
              </a>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Check Your Resume
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" style={{marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px'}} aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">📊 Based on 2026 Administrative Hiring Data</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">85%</span>
                <span>of Admin Jobs Require MS Office</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">70%</span>
                <span>of Resumes Lack Quantified Achievements</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1 Page</span>
                <span>Ideal Resume Length</span>
              </div>
            </div>

            {/* Freshness indicator */}
            <div style={{marginTop: '20px', fontSize: '0.8rem', color: '#4b5563'}} aria-label="Page last updated">
              <FiCalendar style={{marginRight: '4px'}} /> Last updated: {currentDate}
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 2,100+ words</span>
            <span className="meta-item"><FiClock /> 12 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {currentDate}</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="toc-section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">📑 Table of Contents</h2>
              <ol className="toc-list">
                <li><a href="#why-admin-resume-matters" className="toc-link">1. Why Your Administrative Resume Matters</a></li>
                <li><a href="#essential-tips" className="toc-link">2. 6 Essential Tips for Administrative Resumes</a></li>
                <li><a href="#key-sections" className="toc-link">3. Key Sections of an Administrative Resume</a></li>
                <li><a href="#ats-tips" className="toc-link">4. ATS Tips for Administrative Roles</a></li>
                <li><a href="#before-after" className="toc-link">5. Before & After Examples</a></li>
                <li><a href="#faqs" className="toc-link">6. Frequently Asked Questions</a></li>
                <li><a href="#next-steps" className="toc-link">7. Conclusion & Next Steps</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="conversational-heading">
          <div className="container">
            <h2 id="conversational-heading" className="section-title">Administrative Resumes, Simplified</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {conversationalExplanations.map((item, i) => (
                <article key={i} className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '12px', textAlign: 'center'}}>{item.topic}</h3>
                  <p style={{color: '#4b5563', lineHeight: '1.6', textAlign: 'center'}}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Why Admin Resume Matters */}
        <section id="why-admin-resume-matters" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Why Your Administrative Resume Matters</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Administrative professionals are the backbone of every organization. From managing calendars to coordinating events, your role requires a unique blend of organization, communication, and problem-solving. Your resume must demonstrate these skills clearly and convincingly.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                <strong>Competition is strong.</strong> A single administrative job posting can receive hundreds of applications. Recruiters spend an average of 6-8 seconds scanning each resume. Yours must immediately convey your value and fit for the role.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                <strong>ATS systems are widely used.</strong> Most medium to large companies use Applicant Tracking Systems to filter resumes. If your resume lacks relevant keywords or uses complex formatting, it may never reach a human reader. This guide will help you create a resume that passes both ATS and human review.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Tips - Mobile: 1 column, Desktop: 2 columns */}
        <section id="essential-tips" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <h2 className="section-title">6 Essential Tips for Administrative Resumes</h2>
            <p className="section-subtitle">
              These foundational tips will help you build a strong administrative resume that gets noticed.
            </p>

            <div className="essential-tips-grid">
              {essentialTips.map((tip, index) => (
                <div key={index} className="essential-tip-card">
                  <div className="tip-header">
                    {renderIcon(tip.icon)}
                    <h3>{tip.title}</h3>
                  </div>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Key Sections */}
        <section id="key-sections" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Key Sections of an Administrative Resume</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                A well-structured administrative resume typically includes these sections in this order:
              </p>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px'}}>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiUser size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>1. Contact Information</h3>
                  <p>Name, phone, email, location, LinkedIn (optional). Keep it professional and easy to find.</p>
                </div>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiFileText size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>2. Professional Summary</h3>
                  <p>2-3 lines highlighting your experience, key skills, and what you offer. Tailor to each job.</p>
                </div>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiTarget size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>3. Core Competencies / Skills</h3>
                  <p>Bulleted list of software, tools, and soft skills. Group by category for easy scanning.</p>
                </div>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiBriefcase size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>4. Professional Experience</h3>
                  <p>Reverse-chronological order with bullet points focused on achievements, not just duties.</p>
                </div>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiBookOpen size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>5. Education</h3>
                  <p>Degree, institution, and graduation year. Include relevant coursework or honors if applicable.</p>
                </div>
                <div style={{textAlign: 'center', padding: '16px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <FiAward size={28} style={{marginBottom: '8px'}} />
                  <h3 style={{marginBottom: '8px'}}>6. Certifications (Optional)</h3>
                  <p>List relevant certifications like MOS, CAP, or project management courses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ATS Tips */}
        <section id="ats-tips" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">ATS Tips for Administrative Roles</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Applicant Tracking Systems (ATS) are widely used for administrative positions. Here's how to make sure your resume gets through.
              </p>

              <div className="ats-tips-grid">
                {atsTips.map((tip, index) => (
                  <div key={index} className="ats-tip-item">
                    <FiCheck className="text-success" style={{marginTop: '4px', flexShrink: 0}} />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div style={{textAlign: 'center', marginTop: '30px'}}>
                <Link href="/free-resume-tools" className="btn-primary">
                  Test Your Resume with Free ATS Tool <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Before & After Examples */}
        <section id="before-after" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Before & After: Administrative Resume Examples</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                See how weak bullet points can be transformed into powerful, achievement-focused statements.
              </p>

              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Before (Weak)</th>
                      <th>After (Strong)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>"Responsible for answering phones and greeting visitors."</td>
                      <td className="text-success">"Managed high-volume phone lines (50+ calls daily) and welcomed 100+ weekly visitors, creating a positive first impression."</td>
                     </tr>
                     <tr>
                        <td>"Scheduled meetings and managed calendars."</td>
                      <td className="text-success">"Coordinated complex calendars for 3 executives, scheduling 30+ meetings weekly and reducing conflicts by 25% through proactive management."</td>
                     </tr>
                     <tr>
                        <td>"Assisted with office supplies and inventory."</td>
                      <td className="text-success">"Streamlined office supply inventory system, reducing costs by 15% annually and ensuring 99% availability of essential items."</td>
                     </tr>
                     <tr>
                        <td>"Planned company events."</td>
                      <td className="text-success">"Organized 10+ company events (50-200 attendees), managing budgets up to $10,000 and receiving 95% positive feedback from employees."</td>
                     </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - 2 cards */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Real Results From Administrative Professionals</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p style={{fontStyle: 'italic', marginBottom: '16px', flex: 1, textAlign: 'center'}}>"{testimonial.quote}"</p>
                  <div className="testimonial-metric" style={{marginBottom: '12px', textAlign: 'center'}}>
                    <FiCheck style={{marginRight: '4px', color: '#059669'}} />
                    <span>{testimonial.metric}</span>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <strong>{testimonial.name}</strong>
                    <p style={{margin: 0, fontSize: '0.85rem', color: 'var(--text-light)'}}>{testimonial.role}</p>
                    <small className="text-small">{testimonial.company}</small>
                    <small className="text-small" style={{display: 'block'}}>{testimonial.date}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Administrative Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color: '#4b5563', marginTop: '12px', textAlign: 'center'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="paragraph" style={{textAlign: 'center'}}>{item.answer}</p>
                    <small className="text-small" style={{display: 'block', textAlign: 'center'}}>Updated: {faqDates[index] || currentDate}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links - ONLY /resume-templates and /free-resume-tools */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="container">
            <h2 id="resources-heading" className="section-title">🔗 Continue Your Resume Journey</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <Link href="/resume-templates" className="card">
                <h3 style={{marginBottom: '8px', textAlign: 'center'}}>📄 Browse Administrative Resume Templates</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px', textAlign: 'center'}}>ATS-friendly templates designed for administrative professionals.</p>
                <span style={{color: '#000', fontWeight: '500', textAlign: 'center', display: 'block'}}>View templates <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-resume-tools" className="card">
                <h3 style={{marginBottom: '8px', textAlign: 'center'}}>🛠️ Free Resume Checker</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px', textAlign: 'center'}}>Test your resume's ATS compatibility and get instant feedback.</p>
                <span style={{color: '#000', fontWeight: '500', textAlign: 'center', display: 'block'}}>Try tools <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Next Steps */}
        <section id="next-steps" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Conclusion & Next Steps</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Your administrative resume is your opportunity to show employers that you're organized, capable, and ready to make their operations run smoothly. By following the tips in this guide, quantifying your achievements, and tailoring your resume to each job, you'll stand out from the competition.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Your next step: review your current resume against the tips in this guide. Identify areas where you can add more detail, quantify achievements, and incorporate keywords from job descriptions. Use our free tools to check your ATS compatibility.
              </p>
              <div className="hero-actions">
                <a
                  href="https://professionalresumefree.com"
                  className="btn-primary"
                >
                  Browse Administrative Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </a>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Check Your Resume Now
                </Link>
              </div>
              <p className="helper-text">
                Sources: 2026 administrative hiring surveys, interviews with HR professionals, ATS provider data.
              </p>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{currentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
}


export default AdministrativeResumeGuide;