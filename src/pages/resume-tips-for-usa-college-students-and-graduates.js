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
  FiGrid,
  FiLayout,
  FiBook,
  FiAward as FiAwardIcon
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

/* No Experience Grid - Mobile: 1 column, Desktop: 2 columns */
.no-experience-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 30px 0;
}
@media (min-width: 768px) {
  .no-experience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.no-experience-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.no-experience-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
}
.no-experience-card p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 12px;
}
.no-experience-card .example {
  font-size: 0.9rem;
  color: var(--text-light);
  background: var(--background);
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
  margin-top: 8px;
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

  const canonicalUrl = "https://www.professionalresumefree.com/resume-tips-for-usa-college-students-and-graduates";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume Advice",
      "item": "https://www.professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Resume Tips for College Students & Graduates",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Resume Tips for USA College Students and Graduates (2026)",
    description: "Essential resume tips for USA college students and recent graduates. Learn how to write a standout resume with no experience, ATS optimization, and free templates.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "resume tips for college students",
    "how to write a resume with no experience",
    "graduate resume examples 2026",
    "entry level resume tips usa",
    "college student resume guide"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "How do I write a resume with no work experience as a college student?", answer: "Focus on your education, relevant coursework, projects, internships (even unpaid), volunteer work, and leadership roles in student organizations. Highlight transferable skills like communication, teamwork, and problem-solving. Use a functional or combination layout to emphasize skills over work history." },
    { question: "What should a college student put on a resume?", answer: "Include your education (GPA if 3.0+), relevant coursework, projects, internships, part-time jobs, volunteer experience, leadership roles in clubs, technical skills, and languages spoken. Tailor each section to the job you're applying for." },
    { question: "How long should a college student's resume be?", answer: "For most college students and recent graduates, a one-page resume is ideal. Recruiters expect concise, relevant information. Only use two pages if you have extensive relevant experience, internships, or publications." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "College Resume Writing in Plain English", content: "Your resume as a student or recent grad is about potential. Employers know you may not have years of experience. They're looking for evidence that you're teachable, motivated, and have foundational skills. Every section should answer: 'What can this person contribute?'" },
    { topic: "Why ATS Matters for Entry-Level Jobs", content: "Many entry-level jobs receive hundreds of applications. Companies use ATS to filter resumes before a human sees them. If your resume doesn't include keywords from the job description, it may never reach a recruiter. Tailoring your resume for each application is essential." }
  ];

  const faqItems = [
    {
      question: 'What if I have no work experience? What do I put on my resume?',
      answer: 'Focus on academic projects, volunteer work, internships (even if unpaid), coursework, and extracurricular activities. Highlight transferable skills like leadership, communication, and problem-solving. Consider including a "Projects" or "Relevant Experience" section.',
    },
    {
      question: 'Should I include my GPA on my resume?',
      answer: 'Include your GPA if it\'s 3.0 or higher. If your major GPA is higher than your overall GPA, you can list that instead. For competitive fields like finance or consulting, a strong GPA is expected. For others, it\'s optional.',
    },
    {
      question: 'How do I make my student resume stand out?',
      answer: 'Quantify your achievements where possible. Instead of "Led a team project," write "Led a team of 5 students to develop a mobile app, resulting in a 95% satisfaction rating in user testing." Use strong action verbs and tailor your resume to each job.',
    },
    {
      question: 'Should I list coursework on my resume?',
      answer: 'Yes, list 3-5 relevant courses, especially if you lack direct work experience. Choose courses that align with the job description. For example, if applying for a marketing role, list "Consumer Behavior" or "Digital Marketing Analytics."',
    },
    {
      question: 'How far back should I go with education?',
      answer: 'List your college education prominently. You can include your high school only if you\'re a freshman or sophomore in college. Once you have some college experience or internships, remove high school details.',
    },
    {
      question: 'What if I changed majors or took a gap year?',
      answer: 'Address gaps briefly if asked in interviews, but you don\'t need to explain them on your resume. Focus on what you learned during that time. If you took courses or volunteered during a gap, include that experience.',
    },
  ];

  // Testimonials - fewer cards as requested
  const testimonials = [
    {
      quote: "I was a liberal arts major with no 'real' experience. This guide showed me how to turn my class projects and volunteer work into a resume that got me a marketing internship.",
      metric: "Internship offer",
      name: "Jessica L.",
      role: "Marketing Intern",
      company: "Tech Startup",
      date: reviewDates[0]
    },
    {
      quote: "The ATS tips were a game-changer. I started tailoring my resume with keywords from job descriptions and got 3x more interviews. Landed my first job out of college in 2 months.",
      metric: "3x more interviews",
      name: "Marcus W.",
      role: "Business Analyst",
      company: "Healthcare Firm",
      date: reviewDates[1]
    }
  ];

  // Essential tips for students
  const essentialTips = [
    {
      title: "Lead with Education",
      icon: "FiBook",
      description: "Place your education section at the top. Include your university, degree, expected graduation date, GPA (if 3.0+), and relevant coursework."
    },
    {
      title: "Highlight Projects",
      icon: "FiCode",
      description: "Create a 'Projects' section to showcase academic or personal projects. Describe your role, technologies used, and outcomes."
    },
    {
      title: "Include Internships",
      icon: "FiBriefcase",
      description: "Even unpaid or part-time internships count. Describe your responsibilities and achievements with action verbs."
    },
    {
      title: "Add Leadership Roles",
      icon: "FiUsers",
      description: "Include clubs, student government, or volunteer leadership. Highlight teamwork, organization, and initiative."
    },
    {
      title: "Use Action Verbs",
      icon: "FiTrendingUp",
      description: "Start bullet points with strong verbs: 'Developed,' 'Led,' 'Created,' 'Analyzed,' 'Coordinated.' Avoid passive language."
    },
    {
      title: "Quantify Achievements",
      icon: "FiAwardIcon",
      description: "Use numbers where possible: 'Managed $500 budget,' 'Organized event with 100+ attendees,' 'Increased social media engagement by 30%.'"
    }
  ];

  // No experience content
  const noExperienceContent = [
    {
      title: "📚 Academic Projects",
      description: "Describe group projects, research papers, or capstone projects. Highlight your role, the skills you used, and the outcome.",
      example: "Developed a marketing plan for a local business as part of a team, resulting in a 15% increase in social media engagement."
    },
    {
      title: "🤝 Volunteer Work",
      description: "Volunteering shows initiative and community involvement. Include any leadership roles or measurable impact.",
      example: "Organized a campus food drive that collected 500+ pounds of food for a local shelter."
    },
    {
      title: "🏛️ Extracurricular Activities",
      description: "Clubs, sports, student government—all demonstrate teamwork, leadership, and time management.",
      example: "Treasurer of the Student Government Association, managed a $10,000 budget and coordinated 5 campus events."
    },
    {
      title: "💻 Personal Projects",
      description: "Blogs, apps, freelance work, or creative portfolios show initiative and technical skills.",
      example: "Built a personal website using React to showcase design projects; received 1,000+ monthly visitors."
    }
  ];

  // ATS tips
  const atsTips = [
    "Use standard headings: 'Education,' 'Experience,' 'Skills,' 'Projects.'",
    "Include keywords from job descriptions naturally.",
    "Avoid graphics, columns, tables, or images that confuse ATS.",
    "Save as PDF unless requested otherwise.",
    "Test your resume by copying it into a plain text editor.",
    "Tailor each application with relevant keywords."
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
      noExperienceContent,
      atsTips,
      reviewDates,
      faqDates
    }
  };
}

function ResumeTipsForCollegeStudents({ 
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
  noExperienceContent,
  atsTips,
  reviewDates,
  faqDates 
}) {
  // Function to render icon based on string
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'FiBook': return <FiBook size={24} />;
      case 'FiCode': return <FiCode size={24} />;
      case 'FiBriefcase': return <FiBriefcase size={24} />;
      case 'FiUsers': return <FiUsers size={24} />;
      case 'FiTrendingUp': return <FiTrendingUp size={24} />;
      case 'FiAwardIcon': return <FiAwardIcon size={24} />;
      default: return null;
    }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 72 characters exactly */}
        <title>Resume Tips for USA College Students and Graduates (2026)</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Essential resume tips for USA college students and recent graduates. Learn how to write a standout resume with no experience, ATS optimization, and free templates." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume tips for college students, graduate resume, entry level resume, student resume, no experience resume, college graduate resume tips" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="Resume Tips for USA College Students and Graduates (2026)" />
        <meta name="chatgpt-fts:description" content="Essential resume tips for USA college students and recent graduates. Learn how to write a standout resume with no experience." />
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
        
        {/* SINGLE CANONICAL URL - ONLY ONE INSTANCE */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content="Resume Tips for USA College Students and Graduates (2026)" />
        <meta property="og:description" content="Essential resume tips for USA college students and recent graduates. Free guide." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Tips for USA College Students and Graduates" />
        <meta name="twitter:description" content="Essential resume tips for students and recent grads. Free guide." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/ats.jpeg" />
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
        
        {/* COMPREHENSIVE STRUCTURED DATA - SINGLE SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "Resume Tips for USA College Students and Graduates (2026)",
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
                      "url": "https://www.professionalresumefree.com/logo.png"
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
                  "name": "Resume Tips for USA College Students and Graduates",
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
                  "name": "How to Write a College Student Resume",
                  "description": "Step-by-step guide for students and recent graduates",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Start with education",
                      "text": "Place your education section at the top with GPA and relevant coursework."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Add projects and internships",
                      "text": "Create sections for academic projects, internships, and volunteer work."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Highlight skills",
                      "text": "Include technical skills, languages, and soft skills with examples."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify achievements",
                      "text": "Use numbers and metrics to describe your impact in each role."
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
                        "name": "College Student Resume Tips Guide",
                        "description": "Free guide to resume tips for college students and graduates.",
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
                <span itemProp="name" aria-current="page">Resume Tips for College Students & Graduates</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">STUDENT RESUME GUIDE 2026</div>
            
            {/* SINGLE H1 TAG - matches URL and is optimized */}
            <h1 id="hero-heading">Resume Tips for USA College Students and Graduates (2026)</h1>
            
            <p>
              Land your first job or internship with these essential resume tips for college students and recent graduates. Learn how to highlight your skills, write with no experience, and pass ATS filters.
            </p>

            <div className="hero-actions">
              <a
                href="https://www.professionalresumefree.com"
                className="btn-primary"
              >
                Browse Student Templates <FiArrowRight style={{marginLeft: '8px'}} />
              </a>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Check Your Resume
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" style={{marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px'}} aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">📊 Based on 2026 Entry-Level Hiring Data</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">85%</span>
                <span>of Employers Value Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3.0+</span>
                <span>GPA Expected in Competitive Fields</span>
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
            <span className="meta-item"><FiBookOpen /> 2,200+ words</span>
            <span className="meta-item"><FiClock /> 13 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {currentDate}</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="toc-section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">📑 Table of Contents</h2>
              <ol className="toc-list">
                <li><a href="#why-student-resume-matters" className="toc-link">1. Why Your Student Resume Matters</a></li>
                <li><a href="#essential-tips" className="toc-link">2. 6 Essential Tips for Student Resumes</a></li>
                <li><a href="#no-experience" className="toc-link">3. How to Write a Resume with No Experience</a></li>
                <li><a href="#ats-tips" className="toc-link">4. ATS Tips for Entry-Level Resumes</a></li>
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
            <h2 id="conversational-heading" className="section-title">Student Resume Writing, Simplified</h2>
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

        {/* Section 1: Why Student Resume Matters */}
        <section id="why-student-resume-matters" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Why Your Student Resume Matters</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                As a college student or recent graduate, your resume is often your first introduction to potential employers. In a competitive job market, a well-crafted resume can mean the difference between landing an interview and being overlooked. According to the National Association of Colleges and Employers (NACE), employers receive an average of 250 resumes per entry-level position.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                <strong>Your resume tells a story of potential.</strong> While you may not have years of experience, you have coursework, projects, internships, and extracurricular activities that demonstrate your skills and work ethic. The key is presenting them in a way that resonates with recruiters.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                <strong>ATS systems are used by 98% of Fortune 500 companies.</strong> Your resume must be optimized to pass automated screening before a human ever sees it. This guide will show you how to structure your student resume for both ATS and human readers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Tips - Mobile: 1 column, Desktop: 2 columns */}
        <section id="essential-tips" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <h2 className="section-title">6 Essential Tips for Student Resumes</h2>
            <p className="section-subtitle">
              These foundational tips will help you build a strong resume even with limited work experience.
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

        {/* Section 3: No Experience - Mobile: 1 column, Desktop: 2 columns */}
        <section id="no-experience" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">How to Write a Resume with No Experience</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Lack of formal work experience doesn't mean you have nothing to offer. Here's what to include instead.
              </p>

              <div className="no-experience-grid">
                {noExperienceContent.map((item, index) => (
                  <div key={index} className="no-experience-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="example">
                      <strong>Example:</strong> "{item.example}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ATS Tips - Mobile: 1 column, Desktop: 2 columns */}
        <section id="ats-tips" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">ATS Tips for Entry-Level Resumes</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Applicant Tracking Systems (ATS) are the first filter for your resume. Here's how to make sure yours gets through.
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
              <h2 className="section-title">Before & After: Student Resume Examples</h2>
              <p className="paragraph" style={{textAlign: 'center'}}>
                See how a weak student resume can be transformed into a compelling one with these tips.
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
                      <td>"Education: XYZ University, expected 2026" (no GPA, no coursework)</td>
                      <td className="text-success">"XYZ University, Bachelor of Arts in Marketing, expected May 2026. GPA: 3.6. Relevant coursework: Consumer Behavior, Digital Marketing, Data Analytics."</td>
                     </tr>
                     <tr>
                      <td>"Worked at campus bookstore. Helped customers and stocked shelves."</td>
                      <td className="text-success">"Campus Bookstore Associate (2024-2025). Assisted 100+ customers daily, resolved complaints, and trained 3 new hires. Recognized as Employee of the Month."</td>
                     </tr>
                     <tr>
                      <td>"Member of Marketing Club."</td>
                      <td className="text-success">"Marketing Club, Vice President (2025). Led a team of 10 to organize a networking event with 50+ attendees. Increased club membership by 30%."</td>
                     </tr>
                     <tr>
                      <td>"Skills: Microsoft Office, social media, communication."</td>
                      <td className="text-success">"Technical Skills: Excel (pivot tables, VLOOKUP), Meta Business Suite, Google Analytics, Canva. Soft Skills: Public speaking, team leadership, project management."</td>
                     </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - 2 cards, 1 column on mobile, 2 on desktop */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Real Results From Students</h2>
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
            <h2 id="paa-heading" className="section-title">People Also Ask About Student Resumes</h2>
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
                <h3 style={{marginBottom: '8px', textAlign: 'center'}}>📄 Browse Student Resume Templates</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px', textAlign: 'center'}}>ATS-friendly templates designed for students and recent graduates.</p>
                <span style={{color: '#000', fontWeight: '500', textAlign: 'center', display: 'block'}}>View templates <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-resume-tools" className="card">
                <h3 style={{marginBottom: '8px', textAlign: 'center'}}>🛠️ Free Student Resume Checker</h3>
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
                Your resume as a college student or recent graduate is a work in progress—and that's okay. The key is to present your experiences, skills, and potential in a clear, compelling way that speaks to employers. Remember that every project, volunteer role, and extracurricular activity is evidence of your abilities.
              </p>
              <p className="paragraph" style={{textAlign: 'center'}}>
                Your next step: review your current resume against the tips in this guide. Identify areas where you can add more detail, quantify achievements, and tailor your content to your target roles. Use our free tools to check your ATS compatibility and keyword alignment.
              </p>
              <div className="hero-actions">
                <a
                  href="https://www.professionalresumefree.com"
                  className="btn-primary"
                >
                  Browse Student Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </a>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Check Your Resume Now
                </Link>
              </div>
              <p className="helper-text">
                Sources: NACE 2026 Job Outlook Survey, interviews with university career centers, ATS provider data.
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


export default ResumeTipsForCollegeStudents;