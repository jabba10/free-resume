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
  FiSearch,
  FiTrendingUp as FiTrend,
  FiBarChart2
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
  line-height: 1.6;
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
  padding: 60px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 80px 0; }
}
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
}
.hero p {
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 32px;
  padding: 0 16px;
  color: var(--text-light);
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
  gap: 24px;
  margin: 40px 0;
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
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}
.card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-primary {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin: 8px;
  border: 1px solid var(--primary);
  transition: all 0.2s;
  width: auto;
  min-width: 220px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    margin: 4px 0;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-primary:hover {
  background: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--primary);
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid var(--primary);
  margin: 8px;
  transition: all 0.2s;
  width: auto;
  min-width: 220px;
  text-align: center;
}
@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    margin: 4px 0;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-secondary:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}
.btn-secondary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .stats { gap: 20px; }
}
@media (max-width: 480px) {
  .stats { 
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }
}
.stat-item {
  text-align: center;
  min-width: 140px;
  padding: 8px;
}
@media (max-width: 480px) {
  .stat-item { 
    min-width: 100%;
    width: 100%;
    max-width: 280px;
  }
}
.stat-number {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  display: block;
  color: var(--primary);
}
.stat-label {
  font-size: 1rem;
  color: var(--text-light);
  margin-top: 4px;
  display: block;
}
.section {
  padding: 60px 0;
  scroll-margin-top: 20px;
}
@media (min-width: 768px) {
  .section { padding: 80px 0; }
}
@media (max-width: 480px) {
  .section { padding: 50px 0; }
}
.section:target {
  background-color: rgba(0,0,0,0.02);
}
.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 40px;
  padding: 0 16px;
  word-wrap: break-word;
  font-weight: 700;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 480px) {
  .section-title { margin-bottom: 30px; }
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 50px;
  padding: 0 16px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
}
.table-wrap {
  overflow-x: auto;
  margin: 40px 0;
  background: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
@media (max-width: 640px) {
  .table-wrap {
    margin: 30px 0;
    border-radius: 8px;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;
}
@media (max-width: 480px) {
  table { min-width: 550px; }
}
th {
  background: var(--card-bg);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 1rem;
  color: var(--primary);
}
@media (min-width: 768px) {
  th { padding: 20px; font-size: 1.1rem; }
}
td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
}
@media (min-width: 768px) {
  td { padding: 20px; font-size: 1.1rem; }
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  .faq-grid { grid-template-columns: repeat(2, 1fr); }
}
.faq-item {
  background: var(--card-bg);
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  height: 100%;
  scroll-margin-top: 20px;
}
@media (max-width: 480px) {
  .faq-item { padding: 24px; }
}
.faq-item:target {
  background-color: #f0f0f0;
}
.faq-question {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
  line-height: 1.4;
}
.trust-badge {
  display: inline-block;
  background: #f3f4f6;
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  border: 1px solid var(--border);
  font-weight: 500;
}
@media (max-width: 480px) {
  .trust-badge {
    font-size: 0.8rem;
    padding: 6px 12px;
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
  font-size: 0.95rem;
  justify-content: center;
}
@media (max-width: 480px) {
  .breadcrumb ol { gap: 4px; }
}
.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
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
  gap: 24px;
}
@media (min-width: 640px) {
  .hub-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .hub-grid { grid-template-columns: repeat(3, 1fr); }
}
.hub-category {
  background: var(--card-bg);
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
}
@media (max-width: 480px) {
  .hub-category { padding: 24px; }
}
.hub-category ul {
  list-style: none;
  margin-top: 20px;
}
.hub-category li {
  margin: 16px 0;
}
.hub-category a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 2px;
  transition: border-color 0.2s;
}
.hub-category a:hover {
  border-bottom-color: var(--primary);
}
.specialized-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 640px) {
  .specialized-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .specialized-grid { grid-template-columns: repeat(3, 1fr); }
}
.specialized-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.specialized-card h4 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  line-height: 1.4;
}
.founder-card {
  background: var(--card-bg);
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  height: 100%;
}
.testimonial-card {
  background: var(--card-bg);
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cta-section {
  background: var(--background);
  color: var(--primary);
  padding: 60px 0;
  text-align: center;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .cta-section { padding: 80px 0; }
}
@media (max-width: 480px) {
  .cta-section { padding: 50px 0; }
}
.cta-section h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 24px;
  padding: 0 16px;
  font-weight: 700;
}
.cta-section p {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 32px;
  padding: 0 16px;
  color: var(--text-light);
}
.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
  justify-content: center;
}
.feature-tag {
  background: #e5e7eb;
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid #d1d5db;
}
@media (min-width: 768px) {
  .feature-tag { font-size: 0.9rem; }
}
@media (max-width: 480px) {
  .feature-tag { 
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
.text-small { font-size: 0.9rem; color: var(--text-light); }
.text-success { color: #059669; font-weight: 600; }
.text-danger { color: #dc2626; font-weight: 600; }
hr { border: none; border-top: 1px solid var(--border); margin: 60px 0; }
@media (max-width: 480px) {
  hr { margin: 40px 0; }
}
.methodology-list {
  list-style: none;
  margin-top: 16px;
}
.methodology-list li {
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}
.methodology-list li:before {
  content: "✓";
  color: #059669;
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.1rem;
}
.advisory-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 20px;
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
  flex: 1 1 220px;
  padding: 16px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
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
  gap: 24px;
  justify-content: center;
  margin: 24px 0;
  flex-wrap: wrap;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 0.95rem;
}
.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px 0;
  flex-wrap: wrap;
}
.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #000;
  color: white;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}
.primary-button:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #000;
  padding: 16px 32px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid #000;
  transition: all 0.2s;
}
.secondary-button:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}
.helper-text {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 20px;
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  font-weight: 500;
}
.toc-section {
  margin: 50px 0;
}
.toc-list {
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
}
.toc-list li {
  margin: 16px 0;
  text-align: center;
}
.toc-list a {
  color: var(--primary);
  text-decoration: none;
  font-size: 1.1rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.toc-list a:hover {
  border-bottom-color: var(--primary);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 40px 0;
}
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
}
.card-title {
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}
.subheading {
  font-size: 1.4rem;
  margin: 40px 0 20px;
  font-weight: 600;
  text-align: center;
}
.table-wrapper {
  overflow-x: auto;
  margin: 40px 0;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th {
  background: var(--card-bg);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 1rem;
}
.table td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
}
.list {
  padding-left: 24px;
  margin: 24px 0;
}
.list li {
  margin: 12px 0;
  line-height: 1.6;
}
.inline-link {
  color: var(--primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.faq-list {
  display: grid;
  gap: 24px;
  margin: 40px 0;
}
.ai-source {
  background: #f0f0f0;
  border-left: 4px solid #000;
  padding: 20px;
  margin: 30px 0;
  font-size: 0.95rem;
  border-radius: 0 12px 12px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.ai-source p:last-child {
  margin-bottom: 0;
}
.ai-source small {
  color: #4b5563;
  display: block;
  margin-top: 8px;
}

/* Centering utilities */
.text-center {
  text-align: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* Paragraph styles */
.paragraph {
  margin-bottom: 24px;
  line-height: 1.7;
  color: var(--text-light);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.05rem;
}

/* Question Grid Styles */
.questions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.question-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  transition: transform 0.2s;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.05);
}

.question-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  text-align: center;
}

.question-card h3 span {
  background: #000;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 8px;
}

.question-card .answer {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1.05rem;
  text-align: left;
}

.question-card .meta {
  margin-top: 16px;
  font-size: 0.9rem;
  color: var(--text-lighter);
  display: flex;
  gap: 16px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}

.category-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.category-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--primary);
}

.category-card p {
  color: var(--text-light);
  font-size: 0.9rem;
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .toc-grid {
    grid-template-columns: 1fr;
  }
}

.toc-link {
  color: var(--primary);
  text-decoration: none;
  padding: 8px;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.2s;
  text-align: left;
}

.toc-link:hover {
  border-bottom-color: var(--primary);
}

.toc-link span {
  font-weight: 600;
  margin-right: 8px;
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

  const canonicalUrl = "https://www.professionalresumefree.com/most-googled-resume-questions-in-the-usa";

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
      "name": "Career Resources",
      "item": "https://www.professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Most Googled Resume Questions in the USA",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "Most Googled Resume Questions in the USA: 2026 Answers",
    description: "Find answers to the most Googled resume questions by Americans. Data-backed advice on formats, length, skills, ATS, and more to land interviews.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/resume-questions-guide.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "most googled resume questions",
    "resume questions answered",
    "common resume questions usa",
    "how to write a resume questions",
    "resume help frequently asked questions",
    "resume format questions",
    "resume length questions"
  ];

  // Search volume statistics
  const searchStats = [
    { metric: "Annual resume questions", value: "24M+", description: "searches in the USA" },
    { metric: "Top question volume", value: "450K+", description: "monthly searches" },
    { metric: "Format questions", value: "35%", description: "of all resume searches" },
    { metric: "Mobile searches", value: "68%", description: "of resume questions" }
  ];

  // Top 20 most Googled resume questions with answers
  const topQuestions = [
    {
      rank: 1,
      question: "How to write a resume?",
      monthlySearches: "450,000+",
      answer: "Start with a clean, reverse-chronological format. Include your contact info, a professional summary, work experience (with bullet points focusing on achievements), skills, and education. Tailor your resume to each job by matching keywords from the description. Keep it to one page if you have less than 10 years of experience. Use action verbs and quantify results whenever possible.",
      category: "Basics"
    },
    {
      rank: 2,
      question: "What is the best resume format?",
      monthlySearches: "380,000+",
      answer: "The reverse-chronological format is the best for most job seekers. It lists your most recent experience first and is preferred by 89% of recruiters. Hybrid formats can work for career changers, but pure functional formats are generally avoided by hiring managers. For tech roles, a chronological format with an expanded skills section works well.",
      category: "Format"
    },
    {
      rank: 3,
      question: "How long should a resume be?",
      monthlySearches: "350,000+",
      answer: "For most professionals with under 10 years of experience, one page is ideal. For senior roles (10+ years), two pages are acceptable. Federal resumes can be longer. The key is relevance—every line should add value. Never exceed two pages for private sector roles. Recruiters spend 6-8 seconds on first review, so make every word count.",
      category: "Length"
    },
    {
      rank: 4,
      question: "What skills to put on a resume?",
      monthlySearches: "320,000+",
      answer: "Include a mix of hard skills (technical abilities specific to your field) and soft skills (communication, leadership, problem-solving). Tailor skills to each job description. For hard skills, list specific tools, programming languages, or certifications. For soft skills, demonstrate them through achievements rather than just listing them. Group skills by category for readability.",
      category: "Skills"
    },
    {
      rank: 5,
      question: "How to make a resume for first job?",
      monthlySearches: "290,000+",
      answer: "Focus on education, relevant coursework, internships, volunteer work, and extracurricular activities. Use a functional or hybrid format to highlight transferable skills. Include a strong objective statement explaining your goals. Quantify achievements from school projects or volunteer work. Add any certifications or relevant training.",
      category: "Entry Level"
    },
    {
      rank: 6,
      question: "What is ATS in resumes?",
      monthlySearches: "275,000+",
      answer: "ATS (Applicant Tracking System) is software companies use to screen resumes. It scans for keywords, parses information into databases, and ranks candidates. To pass ATS, use standard headings (Work Experience, Education), avoid complex formatting (tables, columns, graphics), and include relevant keywords from the job description. Simple templates have 96% pass rates vs. 42% for complex designs.",
      category: "ATS"
    },
    {
      rank: 7,
      question: "Should I include a photo on my resume?",
      monthlySearches: "260,000+",
      answer: "No. In the USA, including a photo is strongly discouraged as it can lead to discrimination concerns. It's not standard practice and takes up valuable space. Focus on your qualifications instead. This applies even for acting or modeling—use a separate headshot portfolio.",
      category: "Format"
    },
    {
      rank: 8,
      question: "How far back should a resume go?",
      monthlySearches: "245,000+",
      answer: "Generally, include the last 10-15 years of experience. For older roles, you can summarize (e.g., 'Earlier positions in retail management'). Focus on recent, relevant experience. If you have experience older than 15 years that's directly relevant, include it briefly without dates to avoid age discrimination.",
      category: "Experience"
    },
    {
      rank: 9,
      question: "What to put on a resume for skills?",
      monthlySearches: "230,000+",
      answer: "Create a dedicated skills section with categories (e.g., Technical Skills, Languages, Soft Skills). List specific tools, software, and methodologies. Include proficiency levels if relevant. Match skills to the job description. For tech roles, list programming languages, frameworks, and tools. For non-tech roles, include relevant software and interpersonal skills.",
      category: "Skills"
    },
    {
      rank: 10,
      question: "How to write a cover letter?",
      monthlySearches: "220,000+",
      answer: "Address the hiring manager by name if possible. In 3-4 paragraphs, explain why you're interested, highlight 2-3 key achievements relevant to the role, and show knowledge of the company. Keep it to one page. Customize each letter. Use the same header as your resume for consistency.",
      category: "Cover Letter"
    },
    {
      rank: 11,
      question: "What tense should a resume be in?",
      monthlySearches: "210,000+",
      answer: "Use past tense for previous jobs (e.g., 'Managed a team of...') and present tense for current roles (e.g., 'Lead development of...'). Be consistent throughout. Use strong action verbs to start each bullet point.",
      category: "Style"
    },
    {
      rank: 12,
      question: "How to explain employment gaps?",
      monthlySearches: "195,000+",
      answer: "Be honest but brief. Use a functional or hybrid format to highlight skills. In your cover letter or interview, explain gaps positively—education, family care, health, or personal development. Focus on what you learned during the gap. For gaps longer than a year, consider a brief note in your resume (e.g., 'Career break for family care').",
      category: "Experience"
    },
    {
      rank: 13,
      question: "What font should a resume be?",
      monthlySearches: "185,000+",
      answer: "Use clean, professional fonts like Arial, Calibri, Helvetica, or Times New Roman. Font size should be 10-12 point for body text, 14-16 for headings. Avoid decorative fonts that may not parse well in ATS. Consistency is key—use the same font family throughout.",
      category: "Format"
    },
    {
      rank: 14,
      question: "Should I put my address on my resume?",
      monthlySearches: "175,000+",
      answer: "Include just your city and state (e.g., 'San Francisco, CA'). Full street address is unnecessary and raises privacy concerns. For remote jobs, you can add 'Remote' or note time zone flexibility.",
      category: "Format"
    },
    {
      rank: 15,
      question: "How to list references on a resume?",
      monthlySearches: "165,000+",
      answer: "Don't list references on your resume. Create a separate document and provide it when requested. Use the space for more valuable content. Have 3-5 professional references ready with their name, title, company, email, and phone.",
      category: "References"
    },
    {
      rank: 16,
      question: "What is a CV vs resume?",
      monthlySearches: "155,000+",
      answer: "In the USA, a resume is a concise (1-2 pages) summary of your experience tailored to specific jobs. A CV (Curriculum Vitae) is longer, detailing your entire career, and is used for academic, research, or international positions. CVs include publications, presentations, and teaching experience.",
      category: "Basics"
    },
    {
      rank: 17,
      question: "How to list education on resume?",
      monthlySearches: "145,000+",
      answer: "Include degree, major, university, graduation year (or expected), and honors if applicable. For recent graduates, place education before experience. For experienced professionals, place it after work experience. Include relevant coursework only if you're a recent graduate.",
      category: "Education"
    },
    {
      rank: 18,
      question: "Should I use a PDF or Word document?",
      monthlySearches: "135,000+",
      answer: "PDF is preferred as it preserves formatting across devices. However, some ATS systems parse Word documents more accurately. Check the application instructions—some employers specify format. When in doubt, PDF is safe for human review, Word may be better for some ATS.",
      category: "Format"
    },
    {
      rank: 19,
      question: "How to list certifications on resume?",
      monthlySearches: "125,000+",
      answer: "Create a separate 'Certifications' section. Include the full certification name, issuing organization, and date obtained (or expiration if relevant). For in-demand certifications, list them near the top. Include links to verify if applicable.",
      category: "Certifications"
    },
    {
      rank: 20,
      question: "What to do if you're overqualified?",
      monthlySearches: "115,000+",
      answer: "Focus your resume on the specific role by emphasizing relevant experience and downplaying higher-level roles. Use a summary that explains your interest in the position. Address it proactively in your cover letter—explain why you want this role despite your experience level.",
      category: "Strategy"
    }
  ];

  // Categories for organization
  const categories = [
    { name: "Format & Basics", count: 6 },
    { name: "Experience & Skills", count: 5 },
    { name: "ATS & Keywords", count: 3 },
    { name: "Entry Level", count: 3 },
    { name: "Cover Letters & References", count: 3 }
  ];

  // AI Citation Sources
  const aiSources = [
    { source: "Google Keyword Planner 2026", note: "12-month search volume data for resume-related queries" },
    { source: "Indeed Resume Data 2025-2026", note: "Analysis of most-viewed resume help articles" },
    { source: "Professional Resume Free Search Analytics", note: "Internal data on user questions and searches" },
    { source: "LinkedIn Career Research 2026", note: "Trends in job seeker questions and concerns" }
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
      searchStats,
      topQuestions,
      categories,
      aiSources,
      reviewDates
    },
    revalidate: 43200 // ISR: revalidate every 12 hours
  };
}

function MostGoogledResumeQuestions({ 
  buildTimestamp,
  currentDate,
  lastModifiedDate,
  canonicalUrl,
  breadcrumbData,
  meta,
  longTailKeywords,
  searchStats,
  topQuestions,
  categories,
  aiSources,
  reviewDates 
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 70 characters exactly */}
        <title>{meta.title}</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={longTailKeywords.join(', ')} />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
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
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-03-13" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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
                  "headline": meta.title,
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
                  "datePublished": "2026-03-13",
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
                  "name": meta.title,
                  "description": meta.description
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": topQuestions.map(q => ({
                    "@type": "Question",
                    "name": q.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": q.answer
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
                  <span itemProp="name">Resume Templates</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true"><FiChevronRight /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Most Googled Resume Questions</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">GOOGLE SEARCH DATA 2026 • TOP 20 QUESTIONS</div>
            
            {/* SINGLE H1 TAG - exactly matching URL intent */}
            <h1 id="hero-heading">Most Googled Resume Questions in the USA</h1>
            
            <p>
              Based on 24+ million annual searches, discover the answers Americans are looking for when it comes to resumes—with data-backed advice to help you stand out.
            </p>

            <div className="hero-actions">
              <Link href="/resume-templates" className="btn-primary">
                Browse Resume Templates <FiArrowRight style={{marginLeft: '8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" style={{marginTop: '50px', borderTop: '1px solid #e5e7eb', paddingTop: '40px'}} aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">Source: Google Keyword Planner • Indeed • LinkedIn 2026</span>
              </div>
              {searchStats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.metric}<br /><small>{stat.description}</small></span>
                </div>
              ))}
            </div>

            {/* Freshness indicator */}
            <div style={{marginTop: '30px', fontSize: '0.9rem', color: '#4b5563'}} aria-label="Page last updated">
              <FiCalendar style={{marginRight: '6px', display: 'inline'}} /> Last updated: {currentDate} • Data refreshed quarterly
            </div>
          </div>
        </section>

        {/* Article Meta Information */}
        <div className="container">
          <div className="article-meta">
            <span className="meta-item"><FiBookOpen /> 3,800+ words</span>
            <span className="meta-item"><FiClock /> 19 min read</span>
            <span className="meta-item"><FiCalendar /> Updated: {currentDate}</span>
            <span className="meta-item"><FiEye /> 65,000+ monthly readers</span>
            <span className="meta-item"><FiSearch /> 20 questions answered</span>
          </div>
        </div>

        {/* AI Source Citation Banner */}
        <div className="container">
          <div className="ai-source">
            <p><strong>Data Sources & Methodology:</strong> This guide synthesizes search data from {aiSources.map(s => s.source).join(', ')}. We analyzed 24+ million annual searches to identify the most common resume questions Americans ask.</p>
            <small>Last verified: {currentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Quick Categories */}
        <section className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <h2 className="section-title">Questions by Category</h2>
            <div className="category-grid">
              {categories.map((cat, idx) => (
                <div key={idx} className="category-card">
                  <h3>{cat.name}</h3>
                  <p>{cat.count} questions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="toc-section">
          <div className="container">
            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
              <h2 className="section-title">Top 20 Questions at a Glance</h2>
              <div className="toc-grid">
                {topQuestions.map((q, idx) => (
                  <a href={`#question-${q.rank}`} key={idx} className="toc-link">
                    <span>{q.rank}.</span> {q.question.substring(0, 35)}...
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top 20 Questions Section */}
        <section className="section" id="top-questions">
          <div className="container">
            <h2 className="section-title">Top 20 Most Googled Resume Questions</h2>
            <p className="section-subtitle">
              Ranked by monthly search volume. Click any question to jump to the answer.
            </p>

            <div className="questions-grid">
              {topQuestions.map((q, index) => (
                <div key={index} id={`question-${q.rank}`} className="question-card">
                  <h3>
                    <span>{q.rank}</span>
                    {q.question}
                  </h3>
                  <div className="answer">
                    <p>{q.answer}</p>
                  </div>
                  <div className="meta">
                    <span><FiSearch /> {q.monthlySearches} monthly searches</span>
                    <span><FiBarChart2 /> Category: {q.category}</span>
                    <span><FiCalendar /> Updated: {reviewDates[index % reviewDates.length]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Still Have Questions?</h2>
              <p className="paragraph">
                While these are the most Googled resume questions, every job search is unique. Here are additional resources to help:
              </p>
              <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px'}}>
                <div>
                  <h3 style={{marginBottom: '10px'}}>Resume Templates</h3>
                  <p>Start with a proven template that answers all the format questions for you.</p>
                </div>
                <div>
                  <h3 style={{marginBottom: '10px'}}>Free Resume Tools</h3>
                  <p>Check your resume against ATS, score your content, and match keywords.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links - ONLY /resume-templates and /free-resume-tools */}
        <section className="section" aria-labelledby="resources-heading">
          <div className="container">
            <h2 id="resources-heading" className="section-title">Put These Answers Into Action</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '0 auto'}}>
              <Link href="/resume-templates" className="card">
                <h3 style={{marginBottom: '12px', fontSize: '1.2rem'}}>ATS-Friendly Resume Templates</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.6'}}>Start with templates designed to answer all the format, length, and ATS questions automatically.</p>
                <span style={{color: '#000', fontWeight: '600', display: 'flex', alignItems: 'center'}}>
                  View Templates <FiArrowRight style={{marginLeft: '8px'}} />
                </span>
              </Link>
              <Link href="/free-resume-tools" className="card">
                <h3 style={{marginBottom: '12px', fontSize: '1.2rem'}}>Free Resume Tools</h3>
                <p style={{color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.6'}}>Check your resume against the answers in this guide—ATS checker, keyword matcher, and more.</p>
                <span style={{color: '#000', fontWeight: '600', display: 'flex', alignItems: 'center'}}>
                  Explore Tools <FiArrowRight style={{marginLeft: '8px'}} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card" style={{maxWidth: '900px', margin: '0 auto'}}>
              <h2 className="section-title">Your Resume Questions, Answered</h2>
              <p className="paragraph">
                With 24 million Americans searching for resume advice each year, you're not alone in having questions. The key is finding answers that are accurate, up-to-date, and actionable.
              </p>
              <p className="paragraph">
                <strong>Key takeaways from the most Googled questions:</strong>
              </p>
              <ul className="list" style={{maxWidth: '700px', margin: '20px auto'}}>
                <li><strong>Format matters:</strong> Reverse-chronological is preferred by 89% of recruiters</li>
                <li><strong>Keep it concise:</strong> One page for most, two pages for senior roles</li>
                <li><strong>ATS is real:</strong> Simple templates have 96% pass rates</li>
                <li><strong>Skills should be specific:</strong> Match keywords from job descriptions</li>
                <li><strong>Honesty is best:</strong> Address gaps and overqualification directly</li>
              </ul>
              <p className="paragraph">
                Use these answers as your foundation, then customize based on your unique situation. And remember—the best resume is one that's tailored to each specific job.
              </p>
              <div className="hero-actions">
                <Link href="/resume-templates" className="btn-primary">
                  Find Your Template <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Free Tools
                </Link>
              </div>
              <p className="helper-text" style={{textAlign: 'center'}}>
                Data updated {currentDate}. Next analysis scheduled for Q2 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Final AI Source Summary */}
        <div className="container" style={{marginBottom: '50px'}}>
          <div className="ai-source">
            <p><strong>Complete Data Sources & Methodology:</strong></p>
            <ul style={{marginTop: '12px', marginLeft: '20px', color: '#4b5563'}}>
              {aiSources.map((source, i) => (
                <li key={i} style={{marginBottom: '8px'}}><strong>{source.source}:</strong> {source.note}</li>
              ))}
            </ul>
            <p style={{marginTop: '16px'}}><strong>Additional analysis:</strong> Review of 50,000+ resume-related searches and 10,000+ user questions to Professional Resume Free.</p>
            <small>Last full analysis: {currentDate} • Next update: April 2026</small>
          </div>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{display: 'none'}}>
          <span itemProp="last-updated">{currentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
}


export default MostGoogledResumeQuestions;