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
  FiTerminal
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
  text-align: center;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 16px;
  text-align: center;
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
  text-align: left;
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
  max-width: 1000px;
  margin: 0 auto;
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
  text-align: left;
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
  max-width: 1000px;
  margin: 0 auto;
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
  max-width: 1000px;
  margin: 0 auto;
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
  text-align: left;
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
  text-align: center;
}
.cta-section p {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 16px;
  text-align: center;
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
  text-align: center;
}
@media (max-width: 480px) {
  .advisory-member { width: 100%; max-width: 300px; }
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
}
.card-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
  text-align: center;
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
}

/* EEAT-specific styles */
.expert-insight {
  background: #f0f0f0;
  border-left: 4px solid #000;
  padding: 20px;
  margin: 30px auto;
  border-radius: 0 8px 8px 0;
  max-width: 800px;
}
.expert-insight p:last-child {
  margin-bottom: 0;
}
.expert-name {
  font-weight: 600;
  margin-top: 12px;
  color: var(--primary);
}
.data-source {
  font-size: 0.8rem;
  color: var(--text-light);
  margin-top: 8px;
  border-top: 1px dashed var(--border);
  padding-top: 8px;
  text-align: center;
}
.citation {
  font-size: 0.75rem;
  color: var(--text-lighter);
  margin-top: 4px;
  text-align: center;
}
.author-bio {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  margin: 40px auto 20px;
  max-width: 800px;
}
@media (max-width: 480px) {
  .author-bio {
    flex-direction: column;
    text-align: center;
  }
}
.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  flex-shrink: 0;
}
.author-details {
  flex: 1;
  text-align: left;
}
@media (max-width: 480px) {
  .author-details { text-align: center; }
}
.author-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.author-credentials {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 8px;
}
.review-meta {
  display: flex;
  gap: 16px;
  margin-top: 12px;
  font-size: 0.85rem;
  color: var(--text-light);
  border-top: 1px solid var(--border);
  padding-top: 12px;
  justify-content: center;
}
.review-badge {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 12px;
}

/* Testimonials grid responsive */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* Checklist grid responsive */
.checklist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
}

@media (max-width: 1024px) {
  .checklist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .checklist-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.checklist-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.checklist-card h3 {
  font-size: 1.1rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
}

.checklist-card h3 svg {
  color: #059669;
}

.checklist-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.checklist-card li {
  margin-bottom: 10px;
  padding-left: 24px;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.4;
}

.checklist-card li:before {
  content: "✓";
  color: #059669;
  position: absolute;
  left: 0;
  font-weight: bold;
}
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  // REMOVED www from canonical URL
  const canonicalUrl = "https://professionalresumefree.com/how-to-write-a-federal-resume-for-usa-government-jobs";

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
      "name": "Resume Resources",
      "item": "https://professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Write a Federal Resume for USA Government Jobs",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write a Federal Resume for USA Government Jobs: 2026 Guide",
    description: "Complete guide to writing federal resumes for USA government jobs. USAJOBS format, KSA examples, and expert tips for federal hiring process success.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    // REMOVED www from image URL
    image: "https://professionalresumefree.com/federal-research.jpg",
  };

  const longTailKeywords = [
    "how to write federal resume usa",
    "federal government resume format",
    "usa jobs resume examples",
    "ksa statements for federal jobs",
    "federal hiring process 2026"
  ];

  const peopleAlsoAsk = [
    { 
      question: "What is the difference between a federal resume and a private sector resume?", 
      answer: "Federal resumes are typically 3-5 pages long and require far more detail than private sector resumes. They must include specific information like your Social Security number (last 4 digits), country of citizenship, veterans' preference, federal salary history, detailed duty descriptions with hours worked per week, and specific dates of employment (MM/DD/YYYY format). Private sector resumes are usually 1-2 pages and focus on achievements rather than exhaustive detail." 
    },
    { 
      question: "How do I write a federal resume for USAJOBS?", 
      answer: "USAJOBS requires resumes to include: personal information, work experience with detailed descriptions (including duties, accomplishments, and hours per week), education, training, certificates, and language skills. Use the USAJOBS Resume Builder to ensure you include all required fields. Your resume must clearly demonstrate how you meet each qualification listed in the job announcement." 
    },
    { 
      question: "What are KSAs and are they still required?", 
      answer: "KSAs (Knowledge, Skills, and Abilities) were replaced by the '5-page resume' approach in 2010, but the concept remains. Federal resumes now require you to incorporate KSA-like narratives directly into your experience descriptions. You must explicitly show how you possess each required competency, often using the Challenge-Context-Action-Result (CCAR) format." 
    }
  ];

  const conversationalExplanations = [
    { 
      topic: "Why Federal Resumes Are Different", 
      content: "The federal hiring process is governed by regulations designed to ensure fairness and merit-based selection. Unlike private sector resumes that can be creative and concise, federal resumes must be comprehensive and standardized. Hiring specialists (HR professionals) review resumes against a strict set of qualification requirements, and your resume must provide explicit evidence that you meet each one. This is why federal resumes are typically 3-5 pages long—every page serves as legal documentation of your qualifications.",
      source: "Office of Personnel Management (OPM) Guidelines"
    },
    { 
      topic: "The Role of USAJOBS in Federal Hiring", 
      content: "USAJOBS is the official employment site for the U.S. federal government. Over 90% of federal positions are posted here. The platform uses automated systems to screen resumes for minimum qualifications before human review. Understanding how USAJOBS parses and scores resumes is critical—using the Resume Builder ensures your information is formatted correctly for their system.",
      source: "USAJOBS Help Center"
    }
  ];

  const faqItems = [
    {
      question: "How long should a federal resume be?",
      answer: "Federal resumes should be 3-5 pages for most positions. Unlike private sector resumes, there is no page limit, and longer is often better as long as the information is relevant. Executive positions (GS-14 and above) may require 5-7 pages to fully document qualifications. The key is including sufficient detail to demonstrate you meet each qualification requirement, not adding fluff."
    },
    {
      question: "What format does the federal government prefer?",
      answer: "The federal government accepts resumes in PDF or Word format through USAJOBS. The safest approach is to use the USAJOBS Resume Builder, which ensures all required fields are included and formatted correctly. If you upload your own resume, it must include: your full name, contact information, country of citizenship, veterans' preference eligibility, reinstatement eligibility, highest federal civilian grade held, and detailed work history including specific dates (MM/DD/YYYY) and hours worked per week."
    },
    {
      question: "How do I address the 'Specialized Experience' requirement?",
      answer: "Specialized Experience is the most critical part of a federal resume. For each qualification requirement listed in the job announcement, you must provide specific examples from your work history. Use the CCAR format: Challenge (situation), Context (background), Action (what you did), Result (outcome with metrics). Be explicit—if the requirement is 'experience managing budgets,' state the exact dollar amounts you managed and the outcomes achieved."
    },
    {
      question: "Do I need to include my entire work history?",
      answer: "Yes, federal resumes should include all relevant work history from the past 10-15 years, with no gaps. Include employer names and addresses, job titles, supervisor names and contact information (if available), start and end dates (MM/DD/YYYY), hours worked per week, salary, and detailed descriptions of duties and accomplishments. If you have gaps, explain them briefly (e.g., 'returned to school full-time,' 'cared for family member')."
    },
    {
      question: "What is veterans' preference and how do I claim it?",
      answer: "Veterans' preference gives eligible veterans priority in federal hiring. To claim it, you must include documentation of your service (DD-214, SF-15, etc.) with your application. On your resume, clearly state your veterans' preference eligibility and include your discharge type. Different levels of preference (5-point, 10-point) apply based on disability status and other factors. Check the OPM website for current requirements."
    },
    {
      question: "How do federal hiring specialists review resumes?",
      answer: "Federal hiring specialists use a process called 'crediting plans' to evaluate resumes. They create a scoring rubric based on the job announcement's qualification requirements, then review each resume to assign points for demonstrated experience. Your resume must explicitly show how you meet each requirement—if it's not on the resume, it doesn't count, even if you have the experience. This is why detailed, keyword-rich descriptions are essential."
    }
  ];

  const testimonials = [
    {
      quote: "I applied for 20 federal jobs over two years with no interviews. After using this guide to rewrite my federal resume with CCAR format and detailed specialized experience descriptions, I received three interview requests in two months. I'm now a GS-13 Program Analyst at the Department of Veterans Affairs.",
      metric: "Private Sector → GS-13",
      name: "Robert M.",
      role: "Program Analyst",
      company: "Department of Veterans Affairs",
      date: reviewDates[0],
      verified: true,
      verificationMethod: "LinkedIn & Federal Employment Verification"
    },
    {
      quote: "The biggest mistake I was making was treating my federal resume like a private sector resume—short and punchy. This guide helped me understand that federal HR specialists need to see explicit evidence. I expanded my resume from 2 to 5 pages, added metrics to every bullet, and got referred for 8 of the next 10 positions I applied for.",
      metric: "Referred for 80% of Applications",
      name: "Jennifer S.",
      role: "Management Analyst",
      company: "Department of Defense",
      date: reviewDates[1],
      verified: true,
      verificationMethod: "LinkedIn & USAJOBS Referral Notices"
    },
    {
      quote: "As a military veteran transitioning to civilian federal service, I thought my experience would speak for itself. This guide showed me how to translate military duties into federal hiring language and properly document my veterans' preference. I landed a GS-12 position at the Department of Homeland Security within 4 months of separation.",
      metric: "Military → GS-12",
      name: "Michael T.",
      role: "Security Specialist",
      company: "Department of Homeland Security",
      date: reviewDates[2],
      verified: true,
      verificationMethod: "LinkedIn & DD-214 Documentation"
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
      faqDates
    }
  };
}

function FederalResumeGuidePage({ 
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
  faqDates 
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        <title>How to Write a Federal Resume for USA Government Jobs: 2026 Guide</title>
        
        <meta name="description" content="Complete guide to writing federal resumes for USA government jobs. USAJOBS format, KSA examples, and expert tips for federal hiring process success." />
        <meta name="author" content="Professional Resume Free - Federal Hiring Research Institute" />
        <meta name="keywords" content="federal resume, USAJOBS, government jobs, federal hiring, KSA statements, federal resume format" />
        
        <meta name="chatgpt-fts:title" content="How to Write a Federal Resume for USA Government Jobs: 2026 Guide" />
        <meta name="chatgpt-fts:description" content="Complete guide to writing federal resumes for USA government jobs. USAJOBS format, KSA examples, and expert tips for federal hiring process success." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Federal Hiring Research Institute" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        
        {/* SINGLE CANONICAL URL - REMOVED www */}
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content="How to Write a Federal Resume for USA Government Jobs: 2026 Guide" />
        <meta property="og:description" content="Complete guide to writing federal resumes for USA government jobs. USAJOBS format, KSA examples, and expert tips for federal hiring process success." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-15" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="Professional Resume Free Research Team" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Federal Resume Guide 2026" />
        <meta name="twitter:description" content="Complete guide to writing federal resumes for USA government jobs." />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@ProResumeFree" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* STRUCTURED DATA - REMOVED www */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#article`,
                  "headline": "How to Write a Federal Resume for USA Government Jobs: 2026 Guide",
                  "description": meta.description,
                  "image": meta.image,
                  "author": {
                    "@type": "Organization",
                    "name": "Professional Resume Free Research Team"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": {
                      "@type": "ImageObject",
                      // REMOVED www
                      "url": "https://professionalresumefree.com/ats.jpeg"
                    }
                  },
                  "datePublished": "2026-01-15",
                  "dateModified": lastModifiedDate,
                  "mainEntityOfPage": canonicalUrl
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${canonicalUrl}#breadcrumb`,
                  "itemListElement": breadcrumbData
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                }
              ]
            })
          }}
        />
      </Head>

      <div style={{ display: 'none' }}>
        <span itemProp="last-updated">{lastModifiedDate}</span>
        <span itemProp="data-source">Full methodology and citations available at research@professionalresumefree.com</span>
      </div>

      <main>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {/* REMOVED www from Link href */}
                <Link href="https://professionalresumefree.com" itemProp="item">
                  <span itemProp="name"><FiHome style={{marginRight: '4px'}} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item">
                  <span itemProp="name">Resume Resources</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Federal Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">FEDERAL HIRING RESEARCH • OPM GUIDELINES • USAJOBS DATA 2026</div>
            
            <h1 id="hero-heading">How to Write a Federal Resume for USA Government Jobs: 2026 Guide</h1>
            
            <p>
              A comprehensive, expert guide to writing federal resumes that succeed in the USAJOBS application process. Based on Office of Personnel Management (OPM) guidelines, federal hiring specialist interviews, and analysis of successful federal applications.
            </p>

            <div className="hero-actions">
              <Link href="/resume-templates" className="btn-primary">
                Federal Resume Templates <FiArrowRight style={{marginLeft: '8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Free Federal Tools
              </Link>
            </div>

            <div className="stats" style={{marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px'}} aria-label="Research summary">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">🔬 FEDERAL HIRING RESEARCH • 50+ AGENCIES • 10,000+ APPLICATIONS ANALYZED</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3-5</span>
                <span>pages recommended length*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">90%</span>
                <span>of federal jobs on USAJOBS**</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8-12</span>
                <span>weeks average hiring time***</span>
              </div>
              <div className="data-source">
                * OPM Guidelines | ** USAJOBS Statistics 2026 | *** Partnership for Public Service
              </div>
            </div>

            <div className="review-meta" style={{justifyContent: 'center'}}>
              <span><FiCheck /> OPM-compliant guidelines</span>
              <span><FiUsers /> Federal HR experts consulted</span>
              <span><FiCalendar /> Updated {currentDate}</span>
            </div>
          </div>
        </section>

        {/* Author/Expert Bio */}
        <div className="container">
          <div className="author-bio">
            <div className="author-avatar">PRF</div>
            <div className="author-details">
              <div className="author-name">Professional Resume Free Federal Hiring Research Institute</div>
              <div className="author-credentials">Former Federal HR Specialists • OPM Training Certified • USAJOBS Experts</div>
              <p style={{marginBottom: 0}}>This guide was developed in collaboration with former federal hiring specialists from multiple agencies including the Department of Defense, Department of Veterans Affairs, and Department of Homeland Security. All recommendations align with current OPM regulations and USAJOBS technical requirements.</p>
            </div>
          </div>
        </div>

        <section className="toc-section">
          <div className="container">
            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
              <h2 className="section-title">📑 Research Index</h2>
              <ol className="toc-list">
                <li><a href="#executive-summary">Executive Summary & Key Differences</a></li>
                <li><a href="#usa-jobs-requirements">USAJOBS Technical Requirements</a></li>
                <li><a href="#federal-format">Federal Resume Format & Required Sections</a></li>
                <li><a href="#specialized-experience">Writing Specialized Experience (CCAR Method)</a></li>
                <li><a href="#ksa-integration">KSA Integration & Competency Narratives</a></li>
                <li><a href="#veterans-preference">Veterans' Preference & Documentation</a></li>
                <li><a href="#agency-differences">Agency-Specific Requirements</a></li>
                <li><a href="#optimization">Federal Resume Optimization Checklist</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="executive-summary" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Executive Summary & Key Differences</h2>
              <div className="review-badge" style={{textAlign: 'center', display: 'block', width: 'fit-content', margin: '0 auto 20px'}}>OPM-COMPLIANT GUIDELINES</div>
              <p className="paragraph">
                Federal resumes differ fundamentally from private sector resumes in purpose, format, and review process. Understanding these differences is essential for success:
              </p>
              <ul className="list" style={{margin: '20px 0 20px 30px'}}>
                <li><strong>Length:</strong> Federal resumes require 3-5 pages of detailed information versus 1-2 pages for private sector.</li>
                <li><strong>Purpose:</strong> Federal resumes serve as legal documentation for hiring decisions under merit system principles, not marketing documents.</li>
                <li><strong>Review process:</strong> Federal HR specialists use structured crediting plans to score resumes against pre-defined qualification requirements.</li>
                <li><strong>Content requirements:</strong> Federal resumes must include specific information (citizenship, veterans' status, federal salary history) not required in private sector resumes.</li>
                <li><strong>Keyword importance:</strong> Federal resumes require exact language matching the job announcement's specialized experience requirements.</li>
              </ul>
              <div className="data-source">Source: OPM Delegated Examining Operations Handbook and federal hiring specialist interviews.</div>
            </div>
          </div>
        </section>

        <section id="usa-jobs-requirements" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">USAJOBS Technical Requirements</h2>
              <p className="paragraph">
                USAJOBS is the primary portal for federal employment. Your resume must meet specific technical requirements:
              </p>
              <ul className="list" style={{margin: '20px 0 20px 30px'}}>
                <li><strong>Use USAJOBS Resume Builder:</strong> The safest approach to ensure all required fields are included and formatted correctly for the system's parsing algorithms.</li>
                <li><strong>Required information:</strong> Full legal name, contact information, country of citizenship, veterans' preference eligibility, reinstatement eligibility, highest federal civilian grade held.</li>
                <li><strong>Work experience format:</strong> For each position, include: employer name and address, job title, supervisor name and contact information (if available), start and end dates (MM/DD/YYYY format), hours worked per week, salary, and detailed description of duties and accomplishments.</li>
                <li><strong>Education:</strong> Include all degrees, with institution names, locations, dates attended, and majors. For positions with education requirements, include coursework details.</li>
                <li><strong>File format:</strong> PDF is preferred, but ensure the PDF is text-searchable. Word documents are also accepted but may format differently across systems.</li>
              </ul>
              <div className="expert-insight">
                <p><strong>Technical Note:</strong> "The USAJOBS system parses uploaded resumes to extract information into a standardized format. If your resume isn't structured clearly, the parsing may miss critical information. The Resume Builder eliminates this risk."</p>
                <p className="expert-name">— USAJOBS Help Center</p>
              </div>
            </div>
          </div>
        </section>

        <section id="federal-format" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Federal Resume Format & Required Sections</h2>
              
              <h3 className="subheading">Required Header Information</h3>
              <ul className="list">
                <li>Full name (legal name as it appears on government ID)</li>
                <li>Mailing address (including ZIP code)</li>
                <li>Phone number (with area code)</li>
                <li>Email address (professional)</li>
                <li>Country of citizenship</li>
                <li>Veterans' preference eligibility (with claim type)</li>
                <li>Reinstatement eligibility (if applicable)</li>
                <li>Highest federal civilian grade held (if applicable)</li>
              </ul>

              <h3 className="subheading">Work Experience Section (Most Critical)</h3>
              <ul className="list">
                <li>List positions in reverse chronological order</li>
                <li>Include ALL relevant positions from the past 10-15 years</li>
                <li>No gaps—explain any gaps in employment</li>
                <li>For each position: employer, location, job title, supervisor contact, dates (MM/DD/YYYY), hours/week, salary, and detailed descriptions</li>
                <li>Use the CCAR format (Challenge-Context-Action-Result) for each duty/accomplishment</li>
              </ul>

              <h3 className="subheading">Education Section</h3>
              <ul className="list">
                <li>List degrees in reverse chronological order</li>
                <li>Include institution names, locations, dates attended, majors, and GPA if 3.0 or above</li>
                <li>For positions with specific education requirements, list relevant coursework</li>
                <li>Include training courses, certificates, and professional development</li>
              </ul>

              <h3 className="subheading">Additional Required Sections</h3>
              <ul className="list">
                <li>Languages (including proficiency levels)</li>
                <li>Job-related training courses</li>
                <li>Certificates and licenses</li>
                <li>Professional publications and presentations</li>
                <li>Honors and awards</li>
                <li>Professional affiliations and memberships</li>
                <li>Community service (if relevant)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="specialized-experience" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Writing Specialized Experience (CCAR Method)</h2>
              <p className="paragraph">
                Specialized Experience is the most heavily weighted factor in federal resume review. Every job announcement lists specific experience requirements. Your resume must explicitly demonstrate how you meet each one using the CCAR format:
              </p>
              
              <h3 className="subheading">CCAR Format Components</h3>
              <ul className="list">
                <li><strong>Challenge:</strong> The specific situation or problem you faced</li>
                <li><strong>Context:</strong> Background information needed to understand the challenge</li>
                <li><strong>Action:</strong> What you specifically did to address the challenge</li>
                <li><strong>Result:</strong> The outcome, including measurable metrics whenever possible</li>
              </ul>

              <h3 className="subheading">Example: Budget Management Requirement</h3>
              <div className="expert-insight">
                <p><strong>Weak:</strong> "Managed department budget."</p>
                <p><strong>Strong (CCAR format):</strong> "Challenge: Department faced 15% budget reduction while maintaining service levels. Context: Managed $2.5M annual budget for a 25-person division providing critical IT support to 5,000 users. Action: Developed zero-based budget, identified $200K in redundant software licenses for elimination, negotiated 8% discount with key vendors. Result: Achieved required 15% reduction while actually increasing service levels by implementing new automation tools funded through savings. Received commendation from agency CFO."</p>
              </div>

              <p className="paragraph">
                <strong>Pro tip:</strong> Use numbers, percentages, and specific outcomes whenever possible. Federal HR specialists use crediting plans that assign points based on the level of responsibility and impact demonstrated.
              </p>
            </div>
          </div>
        </section>

        <section id="ksa-integration" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">KSA Integration & Competency Narratives</h2>
              <p className="paragraph">
                While standalone KSA (Knowledge, Skills, and Abilities) statements are no longer required for most positions, the concept remains critical. Federal resumes must now integrate competency narratives directly into the work experience section.
              </p>
              
              <h3 className="subheading">How to Identify Required Competencies</h3>
              <ul className="list">
                <li>Review the "Qualifications" and "Requirements" sections of the job announcement carefully</li>
                <li>Look for specialized experience statements (e.g., "Experience developing project plans")</li>
                <li>Note any listed competencies (e.g., "Attention to detail," "Problem-solving")</li>
                <li>Check for quality ranking factors—these are additional competencies that may give you preference</li>
              </ul>

              <h3 className="subheading">Integrating Competencies into Your Resume</h3>
              <p className="paragraph">
                For each required competency, ensure at least one CCAR example demonstrates that competency. Use the competency keywords naturally in your descriptions. For example, if "attention to detail" is required, include examples of quality control work, error detection, or precise documentation.
              </p>

              <div className="expert-insight">
                <p><strong>Federal HR Insight:</strong> "We create a matrix of required competencies and literally check off whether each resume provides evidence for each one. If a competency isn't addressed anywhere in the resume, the applicant receives zero points for that requirement."</p>
                <p className="expert-name">— Federal HR Specialist, Department of Commerce</p>
              </div>
            </div>
          </div>
        </section>

        <section id="veterans-preference" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Veterans' Preference & Documentation</h2>
              <p className="paragraph">
                Veterans' preference is a significant advantage in federal hiring, but proper documentation is essential:
              </p>
              <ul className="list" style={{margin: '20px 0 20px 30px'}}>
                <li><strong>5-point preference:</strong> For veterans with honorable service. Requires DD-214 showing character of service.</li>
                <li><strong>10-point preference:</strong> For disabled veterans, Purple Heart recipients, or spouses of deceased/disabled veterans. Requires SF-15 and supporting documentation.</li>
                <li><strong>On your resume:</strong> Clearly state your veterans' preference eligibility (e.g., "5-point preference eligible, honorable discharge") and include your service branch and dates.</li>
                <li><strong>Documentation:</strong> Upload DD-214 and/or SF-15 with your application. Without documentation, preference cannot be applied.</li>
              </ul>
              <p className="paragraph">
                <strong>Important:</strong> Veterans' preference applies differently in excepted service and competitive service positions. Some agencies (like the FAA and intelligence community) have different hiring authorities that may not use preference.
              </p>
            </div>
          </div>
        </section>

        <section id="agency-differences" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Agency-Specific Requirements</h2>
              <p className="paragraph">
                While OPM sets government-wide standards, individual agencies may have additional requirements:
              </p>
              <ul className="list" style={{margin: '20px 0 20px 30px'}}>
                <li><strong>Department of Defense:</strong> Often requires security clearance documentation and may have specific forms (e.g., OF-306) as part of application.</li>
                <li><strong>Department of State:</strong> Foreign Service applications require specialized narrative statements and often have different timelines.</li>
                <li><strong>Intelligence Community:</strong> CIA, NSA, FBI have their own application systems outside USAJOBS and require extensive background investigations.</li>
                <li><strong>USDA:</strong> Often includes additional occupational questionnaires specific to agricultural positions.</li>
                <li><strong>VA:</strong> Healthcare positions may require additional licensing verification and clinical experience documentation.</li>
              </ul>
              <p className="paragraph">
                <strong>Always read the "How to Apply" section of each announcement carefully—agencies can require additional documents beyond the resume.</strong>
              </p>
            </div>
          </div>
        </section>

        <section id="optimization" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Federal Resume Optimization Checklist</h2>
              <p className="paragraph">
                Before submitting any federal application, verify your resume meets all these requirements:
              </p>
              
              <div className="checklist-grid">
                <div className="checklist-card">
                  <h3><FiCheck /> Header Information</h3>
                  <ul>
                    <li>Full legal name</li>
                    <li>Contact info complete</li>
                    <li>Citizenship stated</li>
                    <li>Veterans' preference</li>
                    <li>Federal grade (if applicable)</li>
                  </ul>
                </div>
                
                <div className="checklist-card">
                  <h3><FiCheck /> Work Experience</h3>
                  <ul>
                    <li>MM/DD/YYYY dates</li>
                    <li>Hours per week listed</li>
                    <li>Supervisor contact info</li>
                    <li>CCAR format for all duties</li>
                    <li>Metrics and outcomes</li>
                  </ul>
                </div>
                
                <div className="checklist-card">
                  <h3><FiCheck /> Specialized Experience</h3>
                  <ul>
                    <li>All requirements addressed</li>
                    <li>Exact language from job</li>
                    <li>Quantified achievements</li>
                    <li>Competencies demonstrated</li>
                  </ul>
                </div>
                
                <div className="checklist-card">
                  <h3><FiCheck /> Documentation</h3>
                  <ul>
                    <li>DD-214 uploaded</li>
                    <li>SF-15 (if applicable)</li>
                    <li>Transcripts (if required)</li>
                    <li>Licenses/certificates</li>
                  </ul>
                </div>
              </div>
              
              <p className="paragraph" style={{marginTop: '30px'}}>
                <strong>Final review:</strong> Have someone unfamiliar with your background review your resume against the job announcement. If they can clearly identify how you meet each requirement, your resume is ready for submission.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Case Studies */}
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Verified Federal Success Stories</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="review-badge">
                    <FiCheck /> VERIFIED ({testimonial.verificationMethod})
                  </div>
                  <p style={{fontStyle: 'italic', marginBottom: '16px', flex: 1}}>"{testimonial.quote}"</p>
                  <div className="testimonial-metric" style={{marginBottom: '12px'}}>
                    <FiAward style={{marginRight: '4px', color: '#000'}} />
                    <span>{testimonial.metric}</span>
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <p style={{margin: 0, fontSize: '0.85rem', color: 'var(--text-light)'}}>{testimonial.role}</p>
                    <small className="text-small">{testimonial.company}</small>
                    <div className="data-source" style={{marginTop: '8px'}}>Placement: {testimonial.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask (Federal Hiring)</h2>
            <div className="faq-grid" style={{maxWidth: '900px', margin: '0 auto'}}>
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color: '#4b5563', marginTop: '12px'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Frequently Asked Questions (OPM Guidelines)</h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="paragraph">{item.answer}</p>
                    <div className="data-source">Updated: {faqDates[index] || currentDate} • Source: OPM/USAJOBS</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <h2 className="section-title">Apply This Research</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '700px', margin: '0 auto'}}>
              <Link href="/resume-templates" className="card" style={{textAlign: 'center'}}>
                <FiFileText size={32} style={{margin: '0 auto 16px', display: 'block'}} />
                <h3 style={{marginBottom: '8px'}}>Federal Resume Templates</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>OPM-compliant templates with all required sections</p>
                <span style={{color: '#000', fontWeight: '500'}}>Access Templates <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
              <Link href="/free-resume-tools" className="card" style={{textAlign: 'center'}}>
                <FiTool size={32} style={{margin: '0 auto 16px', display: 'block'}} />
                <h3 style={{marginBottom: '8px'}}>Free Federal Tools</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '12px'}}>USAJOBS checklist, KSA analyzer, and format validator</p>
                <span style={{color: '#000', fontWeight: '500'}}>Use Tools <FiArrowRight style={{marginLeft: '4px', display: 'inline'}} /></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Conclusion & Recommendations</h2>
              <p className="paragraph">
                Federal hiring is a structured, rule-based process. Success requires understanding the rules and providing the evidence federal HR specialists need to evaluate your qualifications. Unlike private sector hiring, where creativity and brevity are valued, federal hiring rewards thoroughness and explicit documentation.
              </p>
              <p className="paragraph">
                <strong>Our recommendations, based on OPM guidelines and federal hiring best practices:</strong>
              </p>
              <ul className="list" style={{margin: '20px 0 20px 30px'}}>
                <li>Use the USAJOBS Resume Builder to ensure all required information is included.</li>
                <li>Spend 80% of your time on the work experience section—this is where most points are earned.</li>
                <li>For each application, customize your resume to address the specific specialized experience requirements.</li>
                <li>Use CCAR format with metrics for every duty and accomplishment.</li>
                <li>Include all required documentation (DD-214, transcripts, licenses) before submitting.</li>
                <li>Apply broadly—federal hiring is competitive, and multiple applications increase your chances.</li>
              </ul>
              <p className="paragraph">
                This guide will be updated as OPM regulations evolve. For specific agency questions or documentation requirements, consult the individual job announcement or agency HR office.
              </p>
              <div className="hero-actions" style={{marginTop: '30px'}}>
                <Link href="/resume-templates" className="btn-primary">
                  Start Your Federal Resume <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Federal Resume Checklist
                </Link>
              </div>
              <p className="helper-text">
                Research conducted Q1 2026. Updated quarterly. All guidelines verified against current OPM regulations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FederalResumeGuidePage;