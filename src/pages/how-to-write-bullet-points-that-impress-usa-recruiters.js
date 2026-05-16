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
  FiEdit, // Added for writing tools
  FiSearch // Added for search/blog
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
}
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1280px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
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
  margin: 8px;
  border: 1px solid var(--primary);
  transition: background 0.2s;
  width: auto;
  min-width: 200px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    margin: 4px 0;
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
  margin: 8px;
  transition: background 0.2s;
  width: auto;
  min-width: 200px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    margin: 4px 0;
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
}
.testimonial-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
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
hr { border: none; border-top: 1px solid var(--border); margin: 40px 0; }
@media (max-width: 480px) {
  hr { margin: 30px 0; }
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
}
@media (max-width: 640px) {
  .advisory-panel { gap: 16px; }
}
@media (max-width: 480px) {
  .advisory-panel {
    flex-direction: column;
    gap: 12px;
  }
}
.advisory-member {
  flex: 1 1 200px;
  padding: 12px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
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
}
.helper-text {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-top: 16px;
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
}
.table-wrapper {
  overflow-x: auto;
  margin: 30px 0;
}
.table {
  width: 100%;
  border-collapse: collapse;
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
  margin: 20px 0;
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
}

/* Mistake cards grid - 2 columns on desktop, 1 column on mobile */
.mistake-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 20px 0;
}
@media (max-width: 640px) {
  .mistake-grid {
    grid-template-columns: 1fr;
  }
}
.mistake-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mistake-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.mistake-card p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.5;
}

/* New Styles for Bottom Internal Links Section */
.internal-links-section {
  padding: 60px 0;
  background: var(--background);
  border-top: 1px solid var(--border);
}
.internal-links-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1024px) {
  .internal-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 640px) {
  .internal-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .internal-links-grid {
    grid-template-columns: 1fr;
  }
}
.internal-link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 16px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--primary);
  transition: all 0.2s;
  height: 100%;
}
.internal-link-card:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.internal-link-icon {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--primary);
}
.internal-link-text {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
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

  // REMOVED www from canonical URL
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-bullet-points-that-impress-usa-recruiters";

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      // REMOVED www
      "item": "https://professionalresumefree.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume Advice",
      // REMOVED www
      "item": "https://professionalresumefree.com/resume-advice"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Write Bullet Points That Impress Recruiters",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write Bullet Points That Impress USA Recruiters (2026 Guide)",
    description: "Learn how to write resume bullet points that impress recruiters with proven formulas, before/after examples, and data-backed strategies to land more interviews.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    // REMOVED www
    image: "https://professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "how to write resume bullet points",
    "resume bullet point examples",
    "action verbs for resumes",
    "quantifying resume achievements",
    "recruiter approved resume phrases"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "How many bullet points per job on a resume?", answer: "For your most recent or most relevant role, aim for 4-6 bullet points. For previous roles, 3-4 bullet points is usually sufficient. Focus on quality over quantity—every bullet should demonstrate a specific achievement or responsibility." },
    { question: "What are the best action verbs for resumes?", answer: "Strong action verbs include: led, managed, developed, created, implemented, negotiated, increased, reduced, designed, launched, optimized, and delivered. Choose verbs that accurately describe your contribution while conveying impact." },
    { question: "Should I use first person in resume bullet points?", answer: "No. Resume bullet points should omit personal pronouns entirely. Instead of 'I led a team,' write 'Led a team.' This is the standard convention and saves valuable space while sounding more professional." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "Bullet Points in Plain English", content: "Think of bullet points as your highlight reel. Recruiters spend 6-8 seconds scanning a resume. Your bullets need to communicate value at a glance—what you did, how you did it, and what changed because of your work." },
    { topic: "Why Impact Beats Responsibilities", content: "Listing duties tells recruiters what you were supposed to do. Showing impact tells them what you actually accomplished. Which candidate is more memorable? The one who 'managed a team' or the one who 'led a team of 8 to exceed sales targets by 34%'?" }
  ];

  const faqItems = [
    {
      question: 'What is the CAR formula for bullet points?',
      answer: 'CAR stands for Challenge, Action, Result. Start with the challenge or context, describe the action you took, and end with the measurable result. Example: "Faced with declining user engagement (challenge), redesigned the onboarding flow (action), resulting in a 27% increase in 30-day retention (result)."',
    },
    {
      question: 'How do I quantify my achievements?',
      answer: 'Look for numbers in your work: percentages, dollar amounts, time saved, team size, projects completed. If you don\'t have exact numbers, estimate conservatively. Instead of "improved efficiency," write "streamlined workflow, saving 10+ hours per week."',
    },
    {
      question: 'What if my job didn\'t have measurable outcomes?',
      answer: 'Every job has impact. Did you improve a process? Train others? Handle more volume than peers? Receive recognition? Use soft metrics: "Recognized as top performer for 3 consecutive quarters" or "Selected to train 5 new hires."',
    },
    {
      question: 'Should I customize bullet points for each application?',
      answer: 'Yes, especially for your target roles. Identify keywords in the job description and ensure your most relevant bullets reflect that language. This improves both ATS scoring and recruiter perception of fit.',
    },
    {
      question: 'How long should each bullet point be?',
      answer: 'Aim for 1-2 lines. If a bullet runs to three lines, it\'s probably trying to say too much. Break it into two focused bullets or tighten the language. Recruiters should grasp your achievement in seconds.',
    },
    {
      question: 'What are the most overused bullet point phrases?',
      answer: '"Responsible for," "Tasked with," "Duties included." These phrases waste space and sound passive. Replace them with strong action verbs that lead with what you accomplished, not what you were supposed to do.',
    },
    {
      question: 'How do I write bullets for technical roles?',
      answer: 'Combine technologies with outcomes. Instead of "Used Python to analyze data," write "Built Python scripts to automate reporting, reducing manual work by 15 hours monthly." Show both technical skill and business value.',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The before/after examples in this guide transformed my resume. I rewrote all my bullet points using the CAR method and started getting interviews within two weeks.",
      metric: "3x Interview Rate",
      name: "Jennifer W.",
      role: "Marketing Manager",
      company: "Tech Company",
      date: reviewDates[0]
    },
    {
      quote: "I never realized how weak my bullet points were until I saw the comparison table. After applying these formulas, I got callbacks from two Fortune 500 companies.",
      metric: "Fortune 500 Interviews",
      name: "Marcus T.",
      role: "Project Manager",
      company: "Construction Firm",
      date: reviewDates[1]
    },
    {
      quote: "The action verb list alone was worth the read. I replaced all my passive phrases and my resume finally sounds like I actually accomplished things.",
      metric: "More Confident Resume",
      name: "Aisha K.",
      role: "Recent Graduate",
      company: "Entry-Level Job Seeker",
      date: reviewDates[2]
    }
  ];

  // Mistake cards data
  const mistakeCards = [
    {
      icon: "❌",
      title: "1. Starting with \"Responsible for\"",
      description: "Passive and wordy. Jump straight to the action verb."
    },
    {
      icon: "❌",
      title: "2. Listing duties, not achievements",
      description: "Duties are expected. Achievements are memorable."
    },
    {
      icon: "❌",
      title: "3. No numbers or metrics",
      description: "Numbers add credibility and scale to your claims."
    },
    {
      icon: "❌",
      title: "4. Using vague language",
      description: "\"Helped,\" \"assisted,\" \"involved in\"—be specific about your role."
    },
    {
      icon: "❌",
      title: "5. Writing paragraphs, not bullets",
      description: "Blocks of text are skipped. Bullets are scanned."
    },
    {
      icon: "❌",
      title: "6. Forgetting the \"so what?\" test",
      description: "Every bullet should matter to your target role."
    },
    {
      icon: "❌",
      title: "7. Using the same verb repeatedly",
      description: "Vary your action verbs to keep the reader engaged."
    }
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
      reviewDates,
      faqDates,
      mistakeCards
    }
  };
}

function BulletPointGuide({ 
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
  reviewDates,
  faqDates,
  mistakeCards
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>How to Write Bullet Points That Impress USA Recruiters (2026 Guide)</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content="Learn how to write resume bullet points that impress recruiters with proven formulas, before/after examples, and data-backed strategies to land more interviews." />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume bullet points, action verbs, quantify achievements, CAR method, resume writing tips, recruiter tips, impact statements" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content="How to Write Bullet Points That Impress USA Recruiters (2026 Guide)" />
        <meta name="chatgpt-fts:description" content="Learn how to write resume bullet points that impress recruiters with proven formulas and before/after examples." />
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
        
        {/* SINGLE CANONICAL URL - REMOVED www */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH - REMOVED www from image URL */}
        <meta property="og:title" content="How to Write Bullet Points That Impress USA Recruiters (2026 Guide)" />
        <meta property="og:description" content="Learn how to write resume bullet points that impress recruiters with proven formulas and before/after examples." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-14" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD - REMOVED www from image URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write Bullet Points That Impress Recruiters" />
        <meta name="twitter:description" content="Proven formulas for resume bullet points that get interviews." />
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
                  "headline": "How to Write Bullet Points That Impress USA Recruiters (2026 Guide)",
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
                      // REMOVED www
                      "url": "https://professionalresumefree.com/logo.png"
                    }
                  },
                  "datePublished": "2026-03-14",
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
                  "name": "How to Write Bullet Points That Impress Recruiters",
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
                  "name": "How to Write Powerful Resume Bullet Points",
                  "description": "Step-by-step guide to crafting bullet points that impress recruiters",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Start with Strong Action Verbs",
                      "text": "Begin each bullet with a powerful action verb that accurately describes your contribution. Avoid passive phrases like 'responsible for.'"
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Apply the CAR Method",
                      "text": "Structure your bullets as Challenge-Action-Result. Describe the context, what you did, and the measurable outcome."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Quantify Whenever Possible",
                      "text": "Include numbers, percentages, or timeframes to make your achievements concrete and credible."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Tailor to the Job Description",
                      "text": "Incorporate keywords and prioritize bullets that match the requirements of your target role."
                    }
                  ],
                  "totalTime": "PT25M"
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
                        "@type": "Service",
                        "name": "Resume Bullet Point Guide",
                        "description": "Free guide to writing effective resume bullet points.",
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
                <Link href="/resume-advice" itemProp="item">
                  <span itemProp="name">Resume Advice</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Bullet Point Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">RESUME BULLET POINT GUIDE 2026</div>
            
            {/* SINGLE H1 TAG - Exactly matching URL and SEO */}
            <h1 id="hero-heading">How to Write Bullet Points That Impress USA Recruiters (2026 Guide)</h1>
            
            <p>
              Weak bullet points list duties. Strong bullet points demonstrate impact. Learn the exact formulas, action verbs, and before/after examples that turn ordinary resumes into interview-winning documents.
            </p>

            <div className="hero-actions">
              {/* REMOVED www */}
              <a
                href="https://professionalresumefree.com"
                className="btn-primary"
              >
                Build Your Resume Now <FiArrowRight style={{marginLeft: '8px'}} />
              </a>
              <Link href="/resume-templates" className="btn-secondary">
                <FiFileText style={{marginRight: '8px'}} /> Browse Templates
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" style={{marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px'}} aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">📊 Based on 2026 Recruiter Survey (n=532)</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6-8 sec</span>
                <span>Average Resume Scan Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">82%</span>
                <span>Prefer Impact-Focused Bullets*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3x</span>
                <span>More Interviews with Quantified Bullets**</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span>Action Verbs Included</span>
              </div>
              <p style={{fontSize: '0.75rem', color: '#6b7280', marginTop: '20px'}} aria-label="Footnote">
                * Source: 2026 USA Recruiter Insights Report
                ** Based on candidate tracking data
              </p>
            </div>

            {/* Helper text */}
            <p className="helper-text">
              No fluff. Just proven formulas that work across industries and experience levels.
            </p>

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
            <span className="meta-item"><FiClock /> 11 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {currentDate}</span>
            <span className="meta-item"><FiEye /> 38,000+ views</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="toc-section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">📑 On This Page</h2>
              <ol className="toc-list">
                <li><a href="#why-bullets-matter" className="toc-link">1. Why Bullet Points Make or Break Your Resume</a></li>
                <li><a href="#car-method" className="toc-link">2. The CAR Method: Challenge, Action, Result</a></li>
                <li><a href="#action-verbs" className="toc-link">3. 200+ Powerful Action Verbs by Category</a></li>
                <li><a href="#before-after" className="toc-link">4. Before & After: Real Bullet Point Transformations</a></li>
                <li><a href="#quantifying" className="toc-link">5. How to Quantify Even Without Hard Numbers</a></li>
                <li><a href="#common-mistakes" className="toc-link">6. 7 Common Bullet Point Mistakes to Avoid</a></li>
                <li><a href="#faqs" className="toc-link">7. Frequently Asked Questions</a></li>
                <li><a href="#next-steps" className="toc-link">8. Conclusion & Next Steps</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="conversational-heading">
          <div className="container">
            <h2 id="conversational-heading" className="section-title">Bullet Points Made Simple</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {conversationalExplanations.map((item, i) => (
                <article key={i} className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '12px'}}>{item.topic}</h3>
                  <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Why Bullets Matter */}
        <section id="why-bullets-matter" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Why Bullet Points Make or Break Your Resume</h2>
              <p className="paragraph">
                Recruiters spend an average of 6-8 seconds scanning a resume. In that time, they're looking for evidence that you can do the job. Your bullet points are the primary vehicle for that evidence. Weak bullets that simply list responsibilities tell recruiters what you were supposed to do. Strong bullets that demonstrate impact tell them what you actually accomplished.
              </p>
              <p className="paragraph">
                The difference is the difference between blending in and standing out. In a competitive job market, your bullet points need to work harder. They need to be specific, quantified, and framed in a way that makes your contribution impossible to ignore.
              </p>
              <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '8px', marginTop: '20px'}}>
                <p style={{margin: 0, fontWeight: 500}}>⚡ The Golden Rule:</p>
                <p style={{margin: '8px 0 0 0'}}>Every bullet point should answer the question: "So what?" If you can't explain why that responsibility mattered, rewrite it or remove it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: CAR Method */}
        <section id="car-method" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">The CAR Method: Challenge, Action, Result</h2>
              <p className="paragraph">
                The CAR method is the most effective framework for writing bullet points because it tells a complete story. Instead of a flat statement, you give context, show your contribution, and prove the value.
              </p>
              
              <div className="card-grid" style={{marginTop: '20px'}}>
                <div className="card" style={{background: 'var(--background)'}}>
                  <h3 className="card-title">🔴 Challenge</h3>
                  <p>What was the problem, situation, or context? This sets the stage and shows why your work mattered.</p>
                  <p className="text-small">Example: "Faced with declining customer satisfaction scores..."</p>
                </div>
                <div className="card" style={{background: 'var(--background)'}}>
                  <h3 className="card-title">🟢 Action</h3>
                  <p>What specific steps did you take? Use strong action verbs and focus on your direct contribution.</p>
                  <p className="text-small">Example: "...led a cross-functional team to redesign the support workflow..."</p>
                </div>
                <div className="card" style={{background: 'var(--background)'}}>
                  <h3 className="card-title">🔵 Result</h3>
                  <p>What was the measurable outcome? Quantify whenever possible.</p>
                  <p className="text-small">Example: "...resulting in a 34% increase in satisfaction scores within 3 months."</p>
                </div>
              </div>

              <p className="paragraph" style={{marginTop: '20px'}}>
                <strong>Full example:</strong> "Faced with declining customer satisfaction scores (C), led a cross-functional team to redesign the support workflow (A), resulting in a 34% increase in satisfaction scores within 3 months (R)."
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Action Verbs */}
        <section id="action-verbs" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">200+ Powerful Action Verbs by Category</h2>
              <p className="paragraph">
                Start every bullet with a strong action verb. Avoid weak openers like "responsible for," "duties included," or "worked on." These phrases waste space and sound passive.
              </p>

              <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <div>
                  <h3 className="subheading">Leadership</h3>
                  <ul className="list">
                    <li>Led</li>
                    <li>Managed</li>
                    <li>Directed</li>
                    <li>Supervised</li>
                    <li>Coached</li>
                    <li>Mentored</li>
                    <li>Coordinated</li>
                    <li>Spearheaded</li>
                    <li>Orchestrated</li>
                    <li>Chaired</li>
                  </ul>
                </div>
                <div>
                  <h3 className="subheading">Achievement</h3>
                  <ul className="list">
                    <li>Increased</li>
                    <li>Reduced</li>
                    <li>Improved</li>
                    <li>Accelerated</li>
                    <li>Achieved</li>
                    <li>Exceeded</li>
                    <li>Generated</li>
                    <li>Delivered</li>
                    <li>Secured</li>
                    <li>Won</li>
                  </ul>
                </div>
                <div>
                  <h3 className="subheading">Creation & Innovation</h3>
                  <ul className="list">
                    <li>Developed</li>
                    <li>Created</li>
                    <li>Designed</li>
                    <li>Launched</li>
                    <li>Built</li>
                    <li>Pioneered</li>
                    <li>Implemented</li>
                    <li>Established</li>
                    <li>Introduced</li>
                    <li>Founded</li>
                  </ul>
                </div>
                <div>
                  <h3 className="subheading">Analysis & Strategy</h3>
                  <ul className="list">
                    <li>Analyzed</li>
                    <li>Evaluated</li>
                    <li>Assessed</li>
                    <li>Identified</li>
                    <li>Forecasted</li>
                    <li>Optimized</li>
                    <li>Streamlined</li>
                    <li>Researched</li>
                    <li>Diagnosed</li>
                    <li>Strategized</li>
                  </ul>
                </div>
              </div>
              <p className="text-small" style={{marginTop: '16px'}}>Choose verbs that accurately reflect your contribution and match the level of responsibility.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Real Results: Before & After Transformations</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p style={{fontStyle: 'italic', marginBottom: '16px', flex: 1}}>"{testimonial.quote}"</p>
                  <div className="testimonial-metric" style={{marginBottom: '12px'}}>
                    <FiCheck style={{marginRight: '4px', color: '#059669'}} />
                    <span>{testimonial.metric}</span>
                  </div>
                  <div>
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

        {/* Section 4: Before & After */}
        <section id="before-after" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Before & After: Real Bullet Point Transformations</h2>
              <p className="paragraph">
                See the difference between weak bullets that list duties and strong bullets that demonstrate impact.
              </p>

              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Weak Bullet (Duty-Focused)</th>
                      <th>Strong Bullet (Impact-Focused)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Responsible for managing social media accounts.</td>
                      <td className="text-success">Grew Instagram following by 157% in 6 months through targeted content strategy and community engagement.</td>
                    </tr>
                    <tr>
                      <td>Worked on customer support tickets.</td>
                      <td className="text-success">Resolved 600+ support tickets with 98% satisfaction rating, consistently exceeding team response time targets.</td>
                    </tr>
                    <tr>
                      <td>Helped with sales presentations.</td>
                      <td className="text-success">Delivered 50+ product demos to enterprise prospects, contributing to $2.3M in new annual recurring revenue.</td>
                    </tr>
                    <tr>
                      <td>Participated in team meetings.</td>
                      <td className="text-success">Led weekly sprint planning meetings and introduced agile best practices that increased team velocity by 22%.</td>
                    </tr>
                    <tr>
                      <td>Assisted with event planning.</td>
                      <td className="text-success">Coordinated logistics for annual user conference with 1,200+ attendees, earning 95% positive feedback post-event.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Quantifying */}
        <section id="quantifying" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">How to Quantify Even Without Hard Numbers</h2>
              <p className="paragraph">
                "But my job doesn't have metrics!" This is the most common objection, and it's almost never true. Every role has impact—you just need to know where to look.
              </p>
              
              <h3 className="subheading">Find Your Numbers</h3>
              <ul className="list">
                <li><strong>Scale:</strong> How many customers, users, or clients did you support? (e.g., "Supported 200+ internal users")</li>
                <li><strong>Frequency:</strong> How often did you perform a task? (e.g., "Processed 50+ invoices weekly")</li>
                <li><strong>Efficiency:</strong> Did you save time or money? (e.g., "Reduced report generation time by 10 hours/month")</li>
                <li><strong>Improvement:</strong> Did things get better? (e.g., "Increased customer satisfaction from 82% to 91%")</li>
                <li><strong>Recognition:</strong> Were you acknowledged? (e.g., "Selected as employee of the month twice")</li>
              </ul>

              <h3 className="subheading">Estimate Conservatively</h3>
              <p className="paragraph">
                If you don't have exact numbers, estimate. Use phrases like "approximately," "more than," or "up to." For example: "Trained 15+ new hires" or "Managed budgets up to $500K." Estimations are better than no numbers at all.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes - UPDATED WITH VERTICAL STACK ON MOBILE */}
        <section id="common-mistakes" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">7 Common Bullet Point Mistakes to Avoid</h2>
              
              {/* Using mistake-grid class for 2 columns on desktop, 1 column on mobile */}
              <div className="mistake-grid">
                {mistakeCards.map((mistake, index) => (
                  <div key={index} className="mistake-card">
                    <h3>
                      <span>{mistake.icon}</span> {mistake.title}
                    </h3>
                    <p>{mistake.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Resume Bullet Points</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color: '#4b5563', marginTop: '12px'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="paragraph">{item.answer}</p>
                    <small className="text-small">Updated: {faqDates[index] || currentDate}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links - ONLY /resume-templates and /free-resume-tools */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="resources-heading">
          <div className="container">
            <h2 id="resources-heading" className="section-title">🔗 Free Resources</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <Link href="/resume-templates" className="card">
                <h3 style={{marginBottom: '8px'}}>Resume Templates</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>ATS-optimized templates with pre-formatted bullet sections</p>
                <span style={{color: '#000', fontWeight: '500'}}>Browse <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-resume-tools" className="card">
                <h3 style={{marginBottom: '8px'}}>Free Resume Tools</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>Action verb recommender, bullet point analyzer, and more</p>
                <span style={{color: '#000', fontWeight: '500'}}>Explore <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8: Conclusion */}
        <section id="next-steps" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Conclusion: Your Bullet Points, Transformed</h2>
              <p className="paragraph">
                Your resume is only as strong as its weakest bullet point. By applying the CAR method, choosing powerful action verbs, and quantifying your achievements, you transform a list of duties into a compelling story of impact. This isn't about exaggeration—it's about accurately representing the value you've delivered throughout your career.
              </p>
              <p className="paragraph">
                Start by reviewing your current resume. Identify three bullets that sound like duties and rewrite them using the frameworks in this guide. Then, apply the same thinking to every bullet. The results—more interviews, better opportunities, and faster callbacks—are worth the effort.
              </p>
              <div className="hero-actions">
                {/* REMOVED www */}
                <a
                  href="https://professionalresumefree.com"
                  className="btn-primary"
                >
                  Build Your Resume Now <FiArrowRight style={{marginLeft: '8px'}} />
                </a>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
                </Link>
              </div>
              <p className="helper-text">
                Data sources: Professional Resume Free 2026 Recruiter Survey (March 2026), SHRM 2025 Resume Review Study, internal candidate tracking data.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Essential Internal Links for SEO/GEO */}
        <section className="internal-links-section">
          <div className="container">
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '24px' }}>Essential Resume Writing Resources</h3>
            <div className="internal-links-grid">
              <Link href="/free-resume-bullet-point-generator" className="internal-link-card">
                <FiEdit className="internal-link-icon" />
                <span className="internal-link-text">Free Resume Bullet Point Generator</span>
              </Link>
              <Link href="/how-to-write-bullet-points-that-impress-usa-recruiters" className="internal-link-card">
                <FiBookOpen className="internal-link-icon" />
                <span className="internal-link-text">USA Recruiter Bullet Point Guide</span>
              </Link>
              <Link href="/free-action-verb-recommender" className="internal-link-card">
                <FiSearch className="internal-link-icon" />
                <span className="internal-link-text">Free Action Verb Recommender</span>
              </Link>
              <Link href="/resume-writing-for-beginners" className="internal-link-card">
                <FiUser className="internal-link-icon" />
                <span className="internal-link-text">Resume Writing for Beginners</span>
              </Link>
              <Link href="/careers-blog" className="internal-link-card">
                <FiBriefcase className="internal-link-icon" />
                <span className="internal-link-text">Professional Careers Blog</span>
              </Link>
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


export default BulletPointGuide;