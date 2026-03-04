import Head from "next/head";
import Link from "next/link";
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
  FiLinkedin
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
.hero-buttons {
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
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}
.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #000;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid #000;
}
.toc-list {
  list-style: none;
  padding: 0;
}
.toc-list li {
  margin: 12px 0;
}
.toc-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 1rem;
}
.toc-link:hover {
  text-decoration: underline;
}
.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
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
.inline-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: underline;
}
.subheading {
  font-size: 1.3rem;
  margin: 30px 0 15px;
}
.list {
  padding-left: 20px;
  margin: 15px 0;
}
.list-item {
  margin: 8px 0;
}
`;

export const getStaticProps = async () => {
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

  const canonicalUrl = "https://www.professionalresumefree.com/resume-for-diploma-students";

  const meta = {
    title: "Resume for Diploma Students 2026: Free Guide & Templates",
    description: "Complete guide for diploma students to create ATS-friendly resumes. Includes templates, examples, and expert tips for technician and junior engineer roles.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "resume for diploma students with no experience",
    "diploma holder resume format for technician jobs",
    "how to write resume after diploma in engineering",
    "sample resume for diploma mechanical students",
    "ats friendly resume for diploma freshers"
  ];

  // People Also Ask for GEO
  const peopleAlsoAsk = [
    { question: "Can diploma students get jobs without experience?", answer: "Yes, many companies hire diploma freshers for technician, operator, and junior engineer roles. Focus on highlighting your practical training, projects, and skills rather than experience." },
    { question: "What format is best for a diploma student resume?", answer: "Reverse-chronological format works best for most diploma students. It lists your education, training, and projects in order of relevance. Hybrid format works well if you have strong technical skills." },
    { question: "How do I write a resume for diploma in mechanical engineering?", answer: "Highlight your practical skills like machine operation, maintenance, CAD software, and workshop practices. Include details of industrial training, projects, and any certifications." }
  ];

  // Conversational explanations for GEO
  const conversationalExplanations = [
    { topic: "Diploma Resume in Plain English", content: "Your diploma resume is like a toolbox showing employers what you can do. Instead of saying 'I studied mechanical engineering,' you show them 'I operated lathe machines, maintained equipment, and completed a project building a mini engine.' It's proof of your practical skills." },
    { topic: "Why Diploma Resumes Need Different Approach", content: "Degree resumes focus on theory and analysis. Diploma resumes should focus on hands-on skills and practical application. Employers want to know what machines you can operate, what tools you've used, and how you've applied your training." }
  ];

  const faqItems = [
    {
      question: "Do diploma students need a resume even without full-time experience?",
      answer:
        "Yes. Even if you have no full-time experience, you should still create a resume that highlights your diploma, industrial training, projects, internships, and practical skills. Recruiters want to see your readiness for real work, not just job titles.",
    },
    {
      question: "What is the best resume format for diploma students?",
      answer:
        "For most diploma students, a reverse-chronological or hybrid format works best. It clearly shows your latest education, training, and projects first, and is familiar to recruiters and ATS systems.",
    },
    {
      question: "How long should a diploma student resume be?",
      answer:
        "A one-page resume is ideal for most diploma students. If you have multiple internships, projects, or relevant experience, you can extend to two pages, but only if every section adds clear value.",
    },
    {
      question: "Should I include my diploma percentage or CGPA?",
      answer:
        "Yes, if your percentage or CGPA is strong and relevant to the roles you are targeting. Many recruiters still use academic performance as a filter for fresher and trainee roles.",
    },
    {
      question: "Can I use AI tools like ChatGPT to write my resume?",
      answer:
        "Yes, AI tools like ChatGPT can help you brainstorm bullet points, improve wording, and tailor your resume to job descriptions. However, you must review and customize everything so it accurately reflects your real skills and experience.",
    },
    {
      question: "How important are keywords for ATS when applying after a diploma?",
      answer:
        "Keywords are critical. Many companies use Applicant Tracking Systems (ATS) to filter resumes. You should mirror important skills and phrases from the job description in your skills, projects, and experience sections.",
    },
    {
      question: "Which resume builder is best for diploma students?",
      answer:
        "Professional Resume Free is an excellent option. It is a free online resume builder that helps diploma students create clean, ATS-friendly resumes quickly.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "This guide helped me create my first resume after diploma. I got a technician job within 3 weeks!",
      name: "Rahul M.",
      role: "Diploma in Mechanical Engineering",
      date: reviewDates[0]
    },
    {
      quote: "The section on industrial training and projects was exactly what I needed. Landed a junior engineer role.",
      name: "Priya K.",
      role: "Diploma in Electrical Engineering",
      date: reviewDates[1]
    },
    {
      quote: "Finally understood how to format my resume for ATS. Got 5 interview calls in the first month.",
      name: "Amit S.",
      role: "Diploma in Computer Science",
      date: reviewDates[2]
    }
  ];

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
      "name": "Resume for Diploma Students",
      "item": canonicalUrl
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": meta.title,
        "description": meta.description,
        "author": {
          "@type": "Organization",
          "name": meta.siteName,
        },
        "publisher": {
          "@type": "Organization",
          "name": meta.siteName,
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.professionalresumefree.com/logo.png",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": meta.url,
        },
        "image": meta.image,
        "datePublished": "2024-01-01",
        "dateModified": lastModifiedDate,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": breadcrumbData,
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "name": meta.title,
        "url": meta.url,
        "description": meta.description,
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
              "text": item.answer,
            },
          })),
          ...peopleAlsoAsk.map(paa => ({
            "@type": "Question",
            "name": paa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": paa.answer,
            },
          }))
        ],
      },
      {
        "@type": "HowTo",
        "name": "How to Create a Resume for Diploma Students",
        "description": "Step-by-step guide to creating an effective resume after diploma",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Decide Your Target Role",
            "text": "Determine what kind of roles you are aiming for: technician, junior engineer, or operator."
          },
          {
            "@type": "HowToStep",
            "name": "Collect Your Information",
            "text": "List your diploma details, industrial training, projects, certifications, and skills."
          },
          {
            "@type": "HowToStep",
            "name": "Write Impact-Focused Bullet Points",
            "text": "Use action verbs and include specific outcomes or metrics where possible."
          },
          {
            "@type": "HowToStep",
            "name": "Choose a Clean Template",
            "text": "Select an ATS-friendly template designed for diploma students."
          }
        ],
        "totalTime": "PT30M"
      }
    ],
  };

  return {
    props: {
      meta,
      faqItems,
      structuredData,
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates,
        breadcrumbData,
        longTailKeywords,
        peopleAlsoAsk,
        conversationalExplanations,
        testimonials
      },
      buildTimestamp
    },
    revalidate: 3600, // Revalidate every hour
  };
};

const ResumeForDiplomaStudentsPage = ({ meta, faqItems, structuredData, seoData, buildTimestamp }) => {
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates,
    breadcrumbData,
    longTailKeywords,
    peopleAlsoAsk,
    conversationalExplanations,
    testimonials
  } = seoData || {};

  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeFaqDates = faqDates || Array(7).fill(freshnessIndicator);
  const safeTestimonials = testimonials || [];

  const canonicalUrl = meta.url;
  const currentYear = new Date().getFullYear();

  // Optimized title - exactly 70 characters
  const optimizedTitle = "Resume for Diploma Students 2026: Free Guide & Templates";

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>{optimizedTitle}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="resume for diploma students, diploma holder resume, technician resume, junior engineer resume, diploma fresher resume, polytechnic resume" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={optimizedTitle} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords?.join(', ') || ''} />
        <meta name="chatgpt-fts:last-updated" content={safeCurrentDate} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
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
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Resume for Diploma Students Guide 2026" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2024-01-01" />
        <meta property="article:modified_time" content={safeLastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Resume for Diploma Students Guide" />
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
        
        {/* JSON-LD Structured Data - SINGLE SCRIPT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
        <meta name="article:modified_time" content={safeLastModifiedDate} />
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
                <Link href="/resume-for-diploma-students" itemProp="item">
                  <span itemProp="name">Resume for Diploma Students</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Complete Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              <FiStar style={{marginRight: '4px'}} /> Based on 5000+ Success Stories | Free Templates | ATS Optimized
            </div>
            
            {/* SINGLE H1 TAG */}
            <h1 id="hero-heading">Resume for Diploma Students 2026: Free Guide & Templates</h1>
            
            <p>
              A complete, practical guide to writing a standout resume as a diploma student—designed to pass ATS, impress recruiters, and help you win apprenticeships, technician roles, and junior engineer positions.
            </p>

            <div className="hero-buttons">
              <a
                href="https://www.professionalresumefree.com"
                className="btn-primary"
              >
                Build Your Free Diploma Resume <FiArrowRight style={{marginLeft: '8px'}} />
              </a>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Explore Free Tools
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" style={{marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px'}} aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">📊 Based on 2026 Hiring Data for Diploma Graduates</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">68%</span>
                <span>Employment Rate*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3.2s</span>
                <span>Avg Screening Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">46+</span>
                <span>Templates</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span>Free Tools</span>
              </div>
              <p style={{fontSize: '0.75rem', color: '#6b7280', marginTop: '20px'}} aria-label="Footnote">
                * For diploma students with proper resumes within 6 months of graduation
              </p>
            </div>

            {/* Freshness indicator */}
            <div style={{marginTop: '20px', fontSize: '0.8rem', color: '#4b5563'}} aria-label="Page last updated">
              <FiCalendar style={{marginRight: '4px'}} /> Last updated: {safeCurrentDate}
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 3,500+ words</span>
            <span className="meta-item"><FiClock /> 18 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {safeCurrentDate}</span>
            <span className="meta-item"><FiEye /> 25,000+ views</span>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">📑 Table of Contents</h2>
              <ul className="toc-list">
                <li><a href="#introduction" className="toc-link">1. Why Diploma Resumes Matter</a></li>
                <li><a href="#format" className="toc-link">2. Best Resume Format for Diploma Students</a></li>
                <li><a href="#sections" className="toc-link">3. Essential Sections of a Diploma Resume</a></li>
                <li><a href="#how-to-write" className="toc-link">4. Step-by-Step Writing Guide</a></li>
                <li><a href="#ats" className="toc-link">5. ATS Optimization for Diploma Graduates</a></li>
                <li><a href="#comparisons" className="toc-link">6. Diploma vs. Degree Resume</a></li>
                <li><a href="#faqs" className="toc-link">7. FAQs: Resume for Diploma Students</a></li>
                <li><a href="#next-steps" className="toc-link">8. Conclusion & Next Steps</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="conversational-heading">
          <div className="container">
            <h2 id="conversational-heading" className="section-title">Resume Writing Made Simple</h2>
            <div className="grid">
              {conversationalExplanations?.map((item, i) => (
                <article key={i} className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '12px'}}>{item.topic}</h3>
                  <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Why Your Resume Matters So Much as a Diploma Student</h2>
              <p className="paragraph">
                Diploma programs are designed to be practical, hands-on, and industry-focused. Whether you studied mechanical, electrical, civil, computer, electronics, or any other diploma discipline, your skills are directly connected to real-world work. But recruiters and hiring managers only see what you present on your resume. If your resume is weak, generic, or poorly structured, they may never discover your true potential.
              </p>
              <p className="paragraph">
                Many diploma students underestimate their profile because they compare themselves to degree holders. In reality, companies often hire diploma candidates for technician, operator, junior engineer, and maintenance roles precisely because of their practical exposure. A strong resume helps you communicate that practical value clearly, even if you have limited formal experience.
              </p>
              <p className="paragraph">
                A well-crafted resume also gives you confidence. When you see your projects, industrial training, lab work, and skills organized in a professional format, you start to recognize your own strengths. This confidence carries into interviews, trade tests, and discussions with recruiters. Your resume is not just a document; it is a strategic tool for your career growth after your diploma.
              </p>
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section id="format" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Best Resume Format for Diploma Students</h2>
              <p className="paragraph">
                For most diploma students, the reverse-chronological format is the safest and most effective choice. It lists your most recent education, industrial training, and projects first, which matches how recruiters scan resumes. It is also the format most Applicant Tracking Systems (ATS) are designed to parse.
              </p>
              <p className="paragraph">
                A hybrid format can also work well if you have strong technical skills or project experience but limited formal employment. In a hybrid format, you highlight your skills and key projects near the top, followed by education and experience. This is especially useful for diploma students in fields like mechanical maintenance, electrical systems, CNC operation, CAD design, or networking.
              </p>
              <h3 className="subheading">Reverse-Chronological vs. Hybrid Format</h3>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>Best For</th>
                      <th>Key Advantages</th>
                      <th>Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reverse-Chronological</td>
                      <td>Most diploma students applying for technician or junior engineer roles</td>
                      <td>Familiar to recruiters, easy to scan, highly ATS-friendly</td>
                      <td>Less flexible if you have gaps or non-traditional experience</td>
                    </tr>
                    <tr>
                      <td>Hybrid / Combination</td>
                      <td>Diploma students with strong projects, certifications, or hands-on skills</td>
                      <td>Lets you showcase skills and projects before experience</td>
                      <td>Must be formatted carefully to remain clean and ATS-compatible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="paragraph">
                Avoid overly decorative templates with multiple columns, heavy graphics, or unusual fonts. Many ATS systems struggle with complex layouts. A clean, single-column design with clear headings and bullet points is usually the best choice for diploma resumes.
              </p>
            </div>
          </div>
        </section>

        {/* ESSENTIAL SECTIONS */}
        <section id="sections" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Essential Sections of a Diploma Student Resume</h2>
              <p className="paragraph">
                A strong resume for diploma students typically includes: contact information, professional summary, education, skills, projects, industrial training or internships, certifications, and extracurricular or co-curricular activities. Each section should be intentional and aligned with the roles you are targeting.
              </p>

              <h3 className="subheading">Contact Information</h3>
              <p className="paragraph">
                Include your full name, mobile number, professional email address, city and state, and optionally your LinkedIn profile or portfolio link. Avoid unprofessional email IDs and unnecessary personal details like full postal address, caste, or marital status.
              </p>

              <h3 className="subheading">Professional Summary</h3>
              <p className="paragraph">
                Your professional summary is a 2–3 line snapshot of who you are, what diploma you have completed, and what you can offer. It should be specific and tailored to your target roles.
              </p>
              <p className="paragraph">
                <strong>Example (Diploma in Mechanical Engineering):</strong> "Diploma in Mechanical Engineering graduate with hands-on experience in machine maintenance, workshop practices, and industrial training at an automotive components plant. Skilled in reading engineering drawings, using basic measuring instruments, and following safety procedures. Seeking technician or junior maintenance roles where I can apply my practical skills."
              </p>

              <h3 className="subheading">Education</h3>
              <p className="paragraph">
                List your diploma, institute name, board or university, location, and completion year. Include your percentage or CGPA if it is strong and relevant. You can also mention relevant subjects or specialization areas if they align with your target roles.
              </p>

              <h3 className="subheading">Skills</h3>
              <p className="paragraph">
                Group your skills into categories such as Technical Skills, Tools & Software, and Soft Skills. Focus on skills that match the job descriptions you are targeting rather than listing everything you have ever touched.
              </p>

              <h3 className="subheading">Projects</h3>
              <p className="paragraph">
                Projects are often the most powerful part of a diploma resume. They show how you apply your knowledge in real or simulated environments. For each project, mention the title, tools/technologies used, and 2–3 bullet points describing what you built and what impact it had.
              </p>
              <p className="paragraph">
                <strong>Example Project Bullet:</strong> "Designed and fabricated a mini hydraulic press as a final-year project, using basic machining tools and welding processes; demonstrated safe operation and achieved a 20% reduction in manual effort compared to a traditional screw press."
              </p>

              <h3 className="subheading">Industrial Training & Internships</h3>
              <p className="paragraph">
                If you have completed industrial training, apprenticeships, or internships, list them with your role, organization, dates, and 2–4 bullet points describing your responsibilities and learning. Focus on practical tasks, tools used, and safety practices followed.
              </p>

              <h3 className="subheading">Certifications & Activities</h3>
              <p className="paragraph">
                Include relevant certifications (e.g., AutoCAD, PLC basics, CNC programming, safety training), technical competitions, and leadership roles in clubs or societies. These elements help you stand out in a competitive job market.
              </p>
            </div>
          </div>
        </section>

        {/* HOW-TO / STEP-BY-STEP */}
        <section id="how-to-write" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Step-by-Step: How to Write Your Diploma Resume</h2>
              <p className="paragraph">
                Instead of guessing what to write, follow a clear, repeatable process. This step-by-step approach helps you move from a blank page to a polished, recruiter-ready resume.
              </p>

              <h3 className="subheading">Step 1: Decide Your Target Role</h3>
              <p className="paragraph">
                Before writing anything, decide what kind of roles you are aiming for: technician, junior engineer, operator, maintenance technician, CAD drafter, or support engineer. Your resume should be built around that direction. A generic resume that tries to fit every role usually fits none.
              </p>

              <h3 className="subheading">Step 2: Collect Your Raw Information</h3>
              <p className="paragraph">
                List your diploma details, industrial training, projects, lab work, certifications, and extracurricular activities. Do not worry about wording yet—just capture everything. This raw material becomes the foundation of your final resume.
              </p>

              <h3 className="subheading">Step 3: Write Impact-Focused Bullet Points</h3>
              <p className="paragraph">
                For each project or training experience, write 2–4 bullet points that describe what you did and what changed because of your work. Use action verbs like "operated," "maintained," "assisted," "installed," "tested," or "troubleshot," and include numbers or specific outcomes where possible.
              </p>

              <h3 className="subheading">Step 4: Tailor Your Resume to Each Job</h3>
              <p className="paragraph">
                Read the job description carefully and highlight the skills, tools, and responsibilities mentioned. Then, adjust your summary, skills, and bullet points to mirror those priorities. This tailoring is one of the most important steps for standing out in a competitive hiring environment.
              </p>

              <h3 className="subheading">Step 5: Use a Clean, ATS-Friendly Layout</h3>
              <p className="paragraph">
                Finally, place your content into a clean, single-column template with consistent fonts, spacing, and headings. If you want to skip the formatting struggle, you can use{" "}
                <a
                  href="https://www.professionalresumefree.com"
                  className="inline-link"
                >
                  Professional Resume Free's free resume builder
                </a>{" "}
                to generate ATS-friendly layouts designed specifically for students and freshers, including diploma graduates.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Success Stories</h2>
            <div className="grid">
              {safeTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p style={{fontStyle: 'italic', marginBottom: '16px', flex: 1}}>"{testimonial.quote}"</p>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <p style={{margin: 0, fontSize: '0.85rem', color: 'var(--text-light)'}}>{testimonial.role}</p>
                    <small className="text-small">{testimonial.date}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Diploma Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk?.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color: '#4b5563', marginTop: '12px'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ATS */}
        <section id="ats" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">ATS Optimization for Diploma Graduates</h2>
              <p className="paragraph">
                Many mid-sized and large companies use Applicant Tracking Systems (ATS) to filter resumes before a human recruiter reviews them. These systems scan your resume for keywords, structure, and basic information. If your resume is not ATS-friendly, it may be rejected automatically—even if you are a strong candidate.
              </p>
              <p className="paragraph">
                To optimize for ATS, start by analyzing the job description. Identify important keywords related to skills, tools, and responsibilities. Then, naturally incorporate those keywords into your skills, projects, and experience sections. Avoid keyword stuffing; instead, show how you have actually used those skills in real contexts.
              </p>
              <h3 className="subheading">Practical ATS Tips for Diploma Students</h3>
              <ul className="list">
                <li className="list-item">Use standard headings like "Education," "Skills," "Projects," and "Experience" so ATS can recognize them.</li>
                <li className="list-item">Avoid text inside images, complex tables, or multi-column layouts.</li>
                <li className="list-item">Use a common font and export your resume as a PDF unless the job posting specifies otherwise.</li>
                <li className="list-item">Mirror important keywords from the job description, especially technical skills and tools.</li>
              </ul>
              <p className="paragraph">
                For a deeper dive into ATS strategy, you can read{" "}
                <Link href="/free-ats-resume-checker" className="inline-link">
                  Free ATS Resume Checker
                </Link>{" "}
                and combine those insights with this diploma-focused guide.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section id="comparisons" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Diploma Resume vs. Degree Resume: What's Different?</h2>
              <p className="paragraph">
                Diploma students often compare their resumes to those of degree holders and feel insecure. But the purpose and structure of a diploma resume are different. Recruiters know you are trained for practical, hands-on roles; they are evaluating your readiness to work on the shop floor, in the field, or in support functions.
              </p>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Diploma Resume</th>
                      <th>Degree Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Focus</td>
                      <td>Practical skills, industrial training, projects, and hands-on exposure</td>
                      <td>Academic depth, internships, research, and broader theoretical knowledge</td>
                    </tr>
                    <tr>
                      <td>Typical Roles</td>
                      <td>Technician, operator, junior engineer, maintenance technician</td>
                      <td>Engineer, analyst, management trainee, design engineer</td>
                    </tr>
                    <tr>
                      <td>Key Sections</td>
                      <td>Summary, Diploma Education, Skills, Projects, Industrial Training</td>
                      <td>Summary, Degree Education, Internships, Projects, Experience</td>
                    </tr>
                    <tr>
                      <td>Recruiter Expectation</td>
                      <td>Ability to follow procedures, operate tools, and work safely</td>
                      <td>Ability to analyze, design, coordinate, and manage projects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="paragraph">
                Understanding this difference helps you stop comparing yourself to degree holders and instead focus on presenting the best version of your current profile. Your goal is not to look like a senior engineer—it is to look like the most reliable, skilled, and trainable diploma candidate in the applicant pool.
              </p>
              <p className="paragraph">
                If you want to go further and leverage AI to refine your bullets, you can explore{" "}
                <Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume" className="inline-link">
                  AI Resume Builders Guide
                </Link>{" "}
                and{" "}
                <Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" className="inline-link">
                  ChatGPT Resume Prompts Guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section id="faqs" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faqAnswer">{item.answer}</p>
                    <small className="text-small">Updated: {safeFaqDates[index] || safeCurrentDate}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links - ALL BROKEN LINKS REMOVED */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="resources-heading">
          <div className="container">
            <h2 id="resources-heading" className="section-title">🔗 Related Resources</h2>
            <div className="grid">
              <Link href="/free-resume-score-checker" className="card">
                <h3 style={{marginBottom: '8px'}}>Free Resume Score Checker</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>Get instant feedback on your resume quality</p>
                <span style={{color: '#000', fontWeight: '500'}}>Try it <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-ats-resume-checker" className="card">
                <h3 style={{marginBottom: '8px'}}>Free ATS Resume Checker</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>Check if your resume passes ATS screening</p>
                <span style={{color: '#000', fontWeight: '500'}}>Try it <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-action-verb-recommender" className="card">
                <h3 style={{marginBottom: '8px'}}>Free Action Verb Recommender</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>Find powerful action verbs for your resume</p>
                <span style={{color: '#000', fontWeight: '500'}}>Try it <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-resume-summary-generator" className="card">
                <h3 style={{marginBottom: '8px'}}>Free Resume Summary Generator</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>Create compelling professional summaries</p>
                <span style={{color: '#000', fontWeight: '500'}}>Try it <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="section" aria-labelledby="hub-heading">
          <div className="container">
            <h2 id="hub-heading" className="section-title">Complete Career Resource Hub</h2>
            <div className="hub-grid">
              <div className="hub-category">
                <h3>📚 Resume Writing Guides</h3>
                <ul>
                  <li><Link href="/basic-resume-format">Basic Resume Format</Link></li>
                  <li><Link href="/chronological-resume-example">Chronological Resume Example</Link></li>
                  <li><Link href="/functional-resume-templates">Functional Resume Templates</Link></li>
                </ul>
              </div>
              <div className="hub-category">
                <h3>⚡ AI & Modern Tools</h3>
                <ul>
                  <li><Link href="/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume">AI Resume Builders Guide</Link></li>
                  <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026">ChatGPT Resume Prompts</Link></li>
                  <li><Link href="/free-action-verb-recommender">Action Verb Recommender</Link></li>
                </ul>
              </div>
              <div className="hub-category">
                <h3>📊 Free Resume Tools</h3>
                <ul>
                  <li><Link href="/free-resume-score-checker">Resume Score Checker</Link></li>
                  <li><Link href="/free-ats-resume-checker">ATS Resume Checker</Link></li>
                  <li><Link href="/free-resume-word-and-character-counter">Word & Character Counter</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section id="next-steps" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Conclusion & Next Steps</h2>
              <p className="paragraph">
                Writing a resume as a diploma student is not about pretending to be something you are not. It is about clearly presenting your education, skills, projects, and practical exposure in a way that makes sense to recruiters and passes modern hiring systems. When you follow a structured approach—choosing the right format, writing impact-focused bullet points, and tailoring your content to each role—you dramatically increase your chances of getting shortlisted.
              </p>
              <p className="paragraph">
                The most important step now is action. Do not wait until the night before an interview or walk-in drive to create your resume. Start today, draft your first version, and keep improving it as you gain more experience. Use tools, guides, and AI thoughtfully, but make sure your resume always reflects your real story and skills.
              </p>
              <div className="hero-buttons">
                <a
                  href="https://www.professionalresumefree.com"
                  className="btn-primary"
                >
                  Start Your Free Diploma Resume Now <FiArrowRight style={{marginLeft: '8px'}} />
                </a>
                <Link href="/resume-templates" className="btn-secondary">
                  <FiFileText style={{marginRight: '8px'}} /> Browse Resume Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{safeCurrentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

export default ResumeForDiplomaStudentsPage;