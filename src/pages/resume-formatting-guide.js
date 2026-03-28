import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FiFileText,
  FiEdit,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
  FiBook,
  FiAward,
  FiUserCheck,
  FiMail,
  FiDownload,
  FiCopy,
  FiType,
  FiLayout,
  FiGrid,
  FiAlignLeft,
  FiEye
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
  --success: #059669;
  --warning: #d97706;
  --danger: #dc2626;
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
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 60px 0; }
}
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 32px;
  color: var(--text-light);
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
.button-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin: 32px 0 24px;
}
@media (max-width: 480px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--primary);
  color: var(--background);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid var(--primary);
  transition: all 0.2s;
  min-width: 220px;
  font-size: 1rem;
}
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-primary:hover {
  background: var(--secondary);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--primary);
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid var(--primary);
  transition: all 0.2s;
  min-width: 220px;
  font-size: 1rem;
}
@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    min-width: auto;
    padding: 16px 24px;
  }
}
.btn-secondary:hover {
  background: #f5f5f5;
  transform: translateY(-1px);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
.stat-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  text-align: center;
}
.stat-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--primary);
}
.stat-value {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 8px;
}
.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}
.section {
  padding: 50px 0;
  scroll-margin-top: 20px;
}
@media (min-width: 768px) {
  .section { padding: 70px 0; }
}
@media (max-width: 480px) {
  .section { padding: 40px 0; }
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
@media (max-width: 480px) {
  .grid {
    gap: 16px;
  }
}
.card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}
@media (max-width: 480px) {
  .card {
    padding: 20px;
  }
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.breadcrumb {
  padding: 16px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.9rem;
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
.table-wrap {
  overflow-x: auto;
  margin: 30px 0;
  background: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}
th {
  background: var(--card-bg);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}
td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.text-success { color: var(--success); font-weight: 600; }
.text-danger { color: var(--danger); font-weight: 600; }
.text-warning { color: var(--warning); font-weight: 600; }
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
.faq-item {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.faq-question {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
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
.guide-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 40px 0 24px;
  justify-content: center;
}
.guide-tab {
  padding: 10px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.guide-tab:hover {
  background: #e5e7eb;
}
.guide-tab.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}
.guide-tab.active .tab-number {
  background: white;
  color: var(--primary);
}
.tab-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}
.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin: 30px 0;
}
.type-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
}
.type-title {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.type-description {
  color: var(--text-light);
  margin-bottom: 16px;
}
.type-use-case {
  margin-bottom: 16px;
  padding: 12px;
  background: var(--background);
  border-radius: 6px;
  border: 1px solid var(--border);
  font-size: 0.9rem;
}
.type-visual {
  background: var(--background);
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 0.8rem;
  margin-bottom: 16px;
  overflow-x: auto;
}
.type-tips ul {
  list-style: none;
}
.type-tips li {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}
.tip-icon {
  color: var(--success);
}
.guide-section {
  background: #f9fafb;
}
.guide-content {
  background: var(--background);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--border);
}
.content-header {
  margin-bottom: 24px;
}
.content-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
}
.content-description {
  color: var(--text-light);
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
.tips-column, .example-column {
  padding: 20px;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border);
}
.tips-title, .example-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 1.1rem;
}
.tips-icon, .example-icon {
  color: var(--primary);
}
.tips-list {
  list-style: none;
}
.tip-item {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}
.tip-item:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary);
}
.example-box {
  background: var(--background);
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 0.8rem;
  overflow-x: auto;
}
.example-text {
  white-space: pre-wrap;
  margin-bottom: 16px;
}
.copy-button {
  width: 100%;
  padding: 8px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 0.9rem;
}
.copy-button:hover {
  background: var(--secondary);
}
.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.standard-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.standard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}
.importance-badge {
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
}
.importance-badge.critical {
  background: #fee2e2;
  color: #dc2626;
}
.importance-badge.high {
  background: #fff3e0;
  color: #d97706;
}
.importance-badge.medium {
  background: #e0f2e1;
  color: #059669;
}
.standard-title {
  font-size: 1rem;
}
.standard-value {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.standard-purpose {
  color: var(--text-light);
  font-size: 0.9rem;
}
.mistakes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 30px 0;
}
.mistake-card {
  background: #fee2e2;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #fecaca;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.mistake-number {
  width: 28px;
  height: 28px;
  background: #dc2626;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.mistake-text {
  color: #7f1d1d;
  font-size: 0.9rem;
}
.cta-section {
  background: var(--primary);
  color: white;
  padding: 60px 0;
}
.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}
.cta-title {
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: white;
}
.cta-subtitle {
  font-size: 1.1rem;
  margin-bottom: 32px;
  color: rgba(255,255,255,0.9);
}
.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.cta-features {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  color: rgba(255,255,255,0.9);
}
.cta-feature {
  display: flex;
  align-items: center;
  gap: 8px;
}
/* Mobile touch improvements */
@media (max-width: 480px) {
  button, 
  .btn-primary, 
  .btn-secondary, 
  .card, 
  a {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .container {
    padding: 0 20px;
  }
  p, li {
    font-size: 16px;
  }
  .guide-navigation {
    flex-direction: column;
    align-items: stretch;
  }
  .guide-tab {
    justify-content: center;
  }
  .types-grid {
    grid-template-columns: 1fr;
  }
  .content-grid {
    grid-template-columns: 1fr;
  }
  .cta-features {
    flex-direction: column;
    align-items: center;
  }
}
`;

const ResumeFormattingGuide = ({ seoData }) => {
  const [activeSection, setActiveSection] = useState(0);
  const { currentDate, lastModifiedDate, buildTimestamp } = seoData || {};
  const freshnessIndicator = buildTimestamp 
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];
  const currentYear = new Date().getFullYear();

  // Updated canonical URL
  const canonicalUrl = "https://www.professionalresumefree.com/resume-formatting-guide";

  const formattingSections = [
    {
      title: "Standard Margins and Page Layout",
      content: "Proper margins ensure your resume looks balanced and professional while maximizing space.",
      tips: [
        "Use 0.5-1 inch margins on all sides",
        "Left-align all text for easy reading",
        "Maintain consistent spacing throughout",
        "Use 1.15-1.5 line spacing for readability"
      ],
      example: `╔══════════════════════════════════════╗
║        0.5-1 inch margins         ║
║                                    ║
║  Your Name                        ║
║  Professional Title               ║
║  Contact Information              ║
║                                    ║
║  PROFESSIONAL SUMMARY             ║
║  Summary text here...             ║
║                                    ║
║  WORK EXPERIENCE                  ║
║  • Achievement 1                  ║
║  • Achievement 2                  ║
║                                    ║
║        0.5-1 inch margins         ║
╚══════════════════════════════════════╝`
    },
    {
      title: "Professional Font Selection and Sizes",
      content: "Choosing the right font and size affects readability and creates the right impression.",
      tips: [
        "Use professional fonts: Arial, Calibri, Times New Roman",
        "Name: 20-24 point font",
        "Section headings: 14-16 point font",
        "Body text: 11-12 point font"
      ],
      example: `NAME: 22pt Arial Bold
Professional Title: 14pt Arial Regular

SECTION HEADINGS: 14pt Arial Bold
• Experience, Education, Skills

BODY TEXT: 11pt Arial Regular
• Managed team of 12 developers...
• Increased revenue by 35%...
• Implemented new processes...

BULLET POINTS: 11pt Arial Regular
• Use consistent bullet style
• Align text properly
• Maintain spacing`
    },
    {
      title: "Header and Contact Information Formatting",
      content: "Your header should be clean, professional, and immediately communicate who you are.",
      tips: [
        "Center or left-align your name at top",
        "Include phone, email, LinkedIn, city/state",
        "Use professional email address only",
        "Keep it to 2-3 lines maximum"
      ],
      example: `JENNIFER PARKER
Senior Marketing Director | Digital Strategy
San Francisco, CA | (415) 555-0198
jennifer.parker@email.com | linkedin.com/in/jenniferparker

or

MICHAEL CHEN
Software Engineer | Full Stack Development
(408) 555-0123 | michael.chen@email.com
Seattle, WA | github.com/mchen | portfolio.mchen.dev`
    },
    {
      title: "Section Organization and Hierarchy",
      content: "Clear section hierarchy guides the reader's eye and emphasizes important information.",
      tips: [
        "Use consistent heading styles throughout",
        "Order sections by relevance to target job",
        "Use ALL CAPS or bold for section headings",
        "Include clear visual separation between sections"
      ],
      example: `PROFESSIONAL SUMMARY
[2-3 sentence summary here]

WORK EXPERIENCE
Senior Role | Company | Dates
• Achievement with metrics
• Responsibility with impact

EDUCATION
Degree | University | Dates
GPA, Honors, Relevant Coursework

SKILLS
Category: Skill 1, Skill 2, Skill 3

CERTIFICATIONS
Certification Name | Issuing Organization | Date`
    },
    {
      title: "Bullet Point Formatting and Achievement Writing",
      content: "Well-formatted bullet points make achievements easy to scan and understand.",
      tips: [
        "Start with action verbs (Led, Managed, Increased)",
        "Include quantifiable results and metrics",
        "Keep bullet points to 1-2 lines each",
        "Use parallel structure for consistency"
      ],
      example: `• Led cross-functional team of 15 to launch new product, resulting in $2.5M first-year revenue
• Managed $500K marketing budget, achieving 35% ROI and 15% cost reduction
• Increased customer retention by 25% through implementation of new loyalty program
• Developed and executed social media strategy that grew followers from 5K to 50K in 12 months`
    },
    {
      title: "White Space and Visual Balance",
      content: "Strategic use of white space improves readability and creates a professional appearance.",
      tips: [
        "Leave adequate space between sections",
        "Use consistent paragraph spacing",
        "Balance text density across the page",
        "Avoid overcrowding any single area"
      ],
      example: `NAME & CONTACT
[Ample space here]

SUMMARY
[2-3 lines with space above/below]

EXPERIENCE
[Space between each position]

[Space between bullet points]

EDUCATION
[Clean separation]

SKILLS
[Well-spaced categories]

[Final section with breathing room at bottom]`
    }
  ];

  const resumeLayouts = [
    {
      title: "Traditional Single Column",
      description: "Classic layout with everything in one column, perfect for ATS and conservative industries",
      bestFor: ["Finance", "Law", "Healthcare", "Government", "Corporate roles"],
      features: ["Easy to scan", "ATS-friendly", "Professional appearance", "Standard format"],
      visual: `┌─────────────────────────────┐
│        Your Name           │
│        Contact Info        │
│                            │
│  PROFESSIONAL SUMMARY      │
│  [Summary text]            │
│                            │
│  WORK EXPERIENCE           │
│  • Achievement 1           │
│  • Achievement 2           │
│                            │
│  EDUCATION                 │
│  • Degree details          │
│                            │
│  SKILLS                    │
│  • Skills list             │
└─────────────────────────────┘`
    },
    {
      title: "Modern Two Column",
      description: "Contemporary layout with sidebar for skills/contact, main column for experience",
      bestFor: ["Tech", "Creative", "Marketing", "Design", "Consulting"],
      features: ["Visual appeal", "Skills emphasis", "Modern look", "Good information hierarchy"],
      visual: `┌─────────────┬──────────────┐
│ YOUR NAME   │              │
│ Contact     │ PROFESSIONAL │
│ LinkedIn    │ SUMMARY      │
│ Location    │              │
│             │ WORK         │
│ SKILLS      │ EXPERIENCE   │
│ • Tech      │ • Achievement│
│ • Soft      │ • Results    │
│             │              │
│ EDUCATION   │ EDUCATION    │
│ • Degree    │ • Details    │
│ • Dates     │              │
└─────────────┴──────────────┘`
    },
    {
      title: "Hybrid Combination",
      description: "Blends traditional and modern elements for maximum flexibility and impact",
      bestFor: ["Most professionals", "Mid-career", "Leadership", "Project management"],
      features: ["Balanced design", "ATS-compatible", "Visual interest", "Professional yet modern"],
      visual: `┌─────────────────────────────┐
│        Your Name           │
│        Professional Title  │
│        Contact Info        │
│                            │
│  SUMMARY & SKILLS          │
│  [Combined section]        │
│                            │
│  PROFESSIONAL EXPERIENCE   │
│  • Detailed achievements   │
│  • Metrics and results     │
│                            │
│  EDUCATION & CERTIFICATIONS│
│  • Degree information      │
│  • Professional certs      │
└─────────────────────────────┘`
    },
    {
      title: "Academic/Research Focus",
      description: "Specialized layout emphasizing publications, research, and academic achievements",
      bestFor: ["Professors", "Researchers", "Scientists", "PhD candidates", "Academic roles"],
      features: ["Publications section", "Research focus", "Grants and awards", "Teaching experience"],
      visual: `┌─────────────────────────────┐
│        Your Name, PhD      │
│        Academic Title      │
│        Contact & Links     │
│                            │
│  RESEARCH INTERESTS        │
│  [Specializations]         │
│                            │
│  PUBLICATIONS              │
│  1. Journal Article 2024   │
│  2. Conference Paper 2023  │
│                            │
│  RESEARCH EXPERIENCE       │
│  • Lab work                │
│  • Methodologies           │
│                            │
│  TEACHING EXPERIENCE       │
│  • Courses taught          │
└─────────────────────────────┘`
    }
  ];

  const formattingStandards = [
    {
      category: "Margins",
      standard: "0.5-1 inch all sides",
      purpose: "Professional appearance and print compatibility",
      importance: "Critical"
    },
    {
      category: "Font Size - Name",
      standard: "20-24 point",
      purpose: "Clear identification and hierarchy",
      importance: "High"
    },
    {
      category: "Font Size - Headings",
      standard: "14-16 point",
      purpose: "Section differentiation",
      importance: "High"
    },
    {
      category: "Font Size - Body",
      standard: "11-12 point",
      purpose: "Readability and information density",
      importance: "Critical"
    },
    {
      category: "Line Spacing",
      standard: "1.15-1.5",
      purpose: "Readability and visual comfort",
      importance: "Medium"
    },
    {
      category: "Bullet Points",
      standard: "Standard round/circle bullets",
      purpose: "Consistency and professionalism",
      importance: "High"
    }
  ];

  const stats = [
    {
      value: "7.4 sec",
      label: "Average time spent on initial resume review",
      icon: <FiTarget />
    },
    {
      value: "43%",
      label: "Resumes rejected for poor formatting alone",
      icon: <FiTrendingUp />
    },
    {
      value: "3x",
      label: "More likely to get interview with proper formatting",
      icon: <FiAward />
    }
  ];

  const commonFormattingMistakes = [
    "Margins too small (looks crowded) or too large (wastes space)",
    "Using multiple font types and sizes inconsistently",
    "Inadequate white space between sections",
    "Inconsistent bullet point styles throughout",
    "Text too small (under 10pt) or too large (over 14pt for body)",
    "Poor alignment and inconsistent spacing"
  ];

  // FAQ data for structured data
  const faqs = [
    {
      question: "What are the standard margins for a professional resume?",
      answer: "Standard professional resume margins are 0.5 to 1 inch on all sides. One-inch margins are most common and ensure your resume looks balanced and professional while being compatible with all printing and scanning systems. Margins smaller than 0.5 inches look crowded, while larger margins waste valuable space."
    },
    {
      question: "What font size should I use on my resume?",
      answer: "Use these standard font sizes: Your name should be 20-24 point, section headings 14-16 point, and body text 11-12 point. These sizes ensure readability while maintaining a professional appearance. Never use font sizes below 10 point as they become difficult to read."
    },
    {
      question: "Should I use a one-column or two-column resume layout?",
      answer: "For most traditional industries (finance, law, healthcare, corporate), use a single-column layout as it's most ATS-friendly and professional. For creative fields (design, marketing, tech), a two-column layout can work well if designed properly. Always prioritize readability and ATS compatibility over design creativity."
    },
    {
      question: "How much white space should be on a resume?",
      answer: "A well-formatted resume should have approximately 30-40% white space. This includes margins, spacing between sections, line spacing, and space around headings. Adequate white space improves readability by 40% and makes your resume appear more professional and less cluttered."
    }
  ];

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Resume Formatting Guide 2026: What Should a Resume Look Like?",
        "description": "Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.professionalresumefree.com/#website"
        },
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": lastModifiedDate,
        "inLanguage": "en-US",
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Resume Formatting Guide",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Resume Formatting Guide 2026: What Should a Resume Look Like?",
        "description": "A comprehensive guide to professional resume formatting including standard margins, font sizes, professional layouts, and formatting best practices with visual examples for the 2026 job market.",
        "image": "https://www.professionalresumefree.com/images/resume-formatting-preview.jpg",
        "author": {
          "@type": "Organization",
          "name": "ProfessionalResumeFree",
          "url": "https://www.professionalresumefree.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ProfessionalResumeFree",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.professionalresumefree.com/logo.png"
          }
        },
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": lastModifiedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "articleSection": "Career Resources",
        "keywords": "resume formatting, career advice, job search, resume design, professional formatting"
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faqs.map(faq => ({
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
        "@type": "HowTo",
        "name": "How to Format a Professional Resume",
        "description": "Step-by-step guide to formatting a professional resume with proper margins, fonts, and layouts",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Set Proper Margins",
            "text": "Set document margins to 0.5-1 inch on all sides for professional appearance."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Choose Professional Fonts",
            "text": "Select Arial, Calibri, or Times New Roman with appropriate font sizes: name 20-24pt, headings 14-16pt, body 11-12pt."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Format Header Correctly",
            "text": "Place your name prominently at top with contact information in 2-3 lines."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Organize Sections",
            "text": "Use consistent heading styles and logical section ordering based on your target role."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Format Bullet Points",
            "text": "Start with action verbs, include metrics, and maintain parallel structure."
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* HTML Lang Attribute */}
        <html lang="en" />
        
        {/* Optimized Title - 70 characters */}
        <title>Resume Formatting Guide 2026: What Should a Resume Look Like?</title>
        
        {/* Meta Description */}
        <meta name="description" content="Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="what should a resume look like, resume formatting guide, standard resume margins, professional resume font sizes, resume layout examples, resume formatting 2026, how to format a resume, resume design guide, professional resume layout, resume margins and spacing, resume font size guide, resume formatting best practices, resume visual examples" />
        
        {/* Author */}
        <meta name="author" content="ProfessionalResumeFree" />
        <meta name="copyright" content={`${currentYear} Professional Resume Free`} />
        
        {/* GEO Optimization Tags */}
        <meta name="chatgpt-fts:title" content="Resume Formatting Guide 2026: What Should a Resume Look Like?" />
        <meta name="chatgpt-fts:description" content="Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        <meta name="chatgpt-fts:keywords" content="resume formatting guide, how to format a resume, professional resume layout, resume margins and font sizes" />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        <meta name="generator" content="Professional Resume Free - Resume Formatting Guide" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Content Freshness Signals */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta httpEquiv="last-modified" content={lastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-gb" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-ca" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-au" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Resume Formatting Guide 2026: What Should a Resume Look Like?" />
        <meta property="og:description" content="Learn proper resume formatting with visual examples. Guide to standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Resume Formatting Guide 2026 with Visual Examples" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ProfessionalResumeFree" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={`${currentDate}T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        <meta property="article:author" content="ProfessionalResumeFree" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="resume formatting" />
        <meta property="article:tag" content="career advice" />
        <meta property="article:tag" content="job search" />
        <meta property="article:tag" content="resume design" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume Formatting Guide 2026: What Should a Resume Look Like?" />
        <meta name="twitter:description" content="Learn proper resume formatting with visual examples. Standard margins, font sizes, professional layouts, and formatting best practices for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/resume-formatting-preview.jpg" />
        <meta name="twitter:image:alt" content="Resume Formatting Guide 2026" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        <meta name="twitter:creator" content="@ProfResumeFree" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data - Single combined script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <main>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Hidden freshness indicators */}
        <div style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation - Updated with valid links only */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Resume Formatting Guide</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              <FiLayout /> Professional Formatting Guide {currentYear} | Visual Examples
            </div>
            <h1 id="hero-heading">Resume Formatting Guide 2026: What Should a Resume Look Like?</h1>
            <p>
              <strong>Standard Margins, Font Sizes, and Professional Layouts.</strong> 
              Learn proper resume formatting with visual examples and step-by-step guidance 
              to create resumes that look professional and get results.
            </p>

            <div className="button-container" role="group" aria-label="Call to action buttons">
              <Link href="/resume-templates" className="btn-primary" aria-label="Create perfectly formatted resume">
                <FiDownload /> Create Perfectly Formatted Resume
              </Link>
              <a href="#sections" className="btn-secondary" aria-label="View formatting guide">
                <FiEye /> View Formatting Guide
              </a>
            </div>

            <div className="feature-tags" style={{ justifyContent: 'center', margin: '24px 0' }}>
              <span className="feature-tag">✓ Visual Examples Included</span>
              <span className="feature-tag">✓ Standard Formatting Rules</span>
              <span className="feature-tag">✓ Professional Layout Templates</span>
              <span className="feature-tag">✓ {currentYear} Best Practices</span>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Freshness indicator */}
            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }} aria-label="Page last updated">
              Last updated: {currentDate} | Based on 2026 formatting standards and recruiter feedback
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '900px' }}>
              In today's competitive job market, <strong>proper resume formatting can increase your interview chances by 300%</strong>. 
              This comprehensive guide shows you exactly what a professional resume should look like, with
              <strong> visual examples, standard measurements, and proven layouts</strong> that work for the {currentYear} job market.
            </p>
          </div>
        </section>

        {/* Layouts Section */}
        <section className="section" aria-labelledby="layouts-heading">
          <div className="container">
            <h2 id="layouts-heading" className="section-title">Professional Resume Layouts for {currentYear}</h2>
            <p className="section-subtitle">
              Choose the right layout for your industry and <strong>maximize visual impact</strong>
            </p>
            <div className="types-grid">
              {resumeLayouts.map((type, index) => (
                <div key={index} className="type-card">
                  <h3 className="type-title">{type.title}</h3>
                  <p className="type-description">{type.description}</p>
                  <div className="type-use-case">
                    <strong>Best for:</strong> {type.bestFor.join(", ")}
                  </div>
                  <div className="type-visual">
                    <pre>{type.visual}</pre>
                  </div>
                  <div className="type-tips">
                    <h4>Key Features:</h4>
                    <ul>
                      {type.features.map((feature, tipIndex) => (
                        <li key={tipIndex}>
                          <FiCheck className="tip-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="sections" className="section guide-section" aria-labelledby="guide-heading">
          <div className="container">
            <h2 id="guide-heading" className="section-title">Step-by-Step Resume Formatting Guide</h2>
            <p className="section-subtitle">
              Follow this <strong>proven formatting structure</strong> to create professional-looking resumes
            </p>

            {/* Guide Navigation */}
            <div className="guide-navigation">
              {formattingSections.map((section, index) => (
                <button
                  key={index}
                  className={`guide-tab ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                  aria-label={`View ${section.title}`}
                >
                  <span className="tab-number">{index + 1}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            {/* Active Section Content */}
            <div className="guide-content">
              <div className="content-header">
                <h3 className="content-title">
                  {formattingSections[activeSection].title}
                </h3>
                <p className="content-description">
                  {formattingSections[activeSection].content}
                </p>
              </div>

              <div className="content-grid">
                <div className="tips-column">
                  <h4 className="tips-title">
                    <FiCheck className="tips-icon" />
                    Formatting Guidelines
                  </h4>
                  <ul className="tips-list">
                    {formattingSections[activeSection].tips.map((tip, index) => (
                      <li key={index} className="tip-item">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="example-column">
                  <h4 className="example-title">
                    <FiFileText className="example-icon" />
                    Visual Example
                  </h4>
                  <div className="example-box">
                    <pre className="example-text">
                      {formattingSections[activeSection].example}
                    </pre>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(formattingSections[activeSection].example)}>
                      <FiCopy className="copy-icon" />
                      Copy Formatting Example
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="section" aria-labelledby="standards-heading">
          <div className="container">
            <h2 id="standards-heading" className="section-title">Standard Resume Formatting Specifications</h2>
            <p className="section-subtitle">
              Professional resumes follow these <strong>exact measurements and standards</strong>
            </p>
            <div className="standards-grid">
              {formattingStandards.map((standard, index) => (
                <div key={index} className="standard-card">
                  <div className="standard-header">
                    <div className={`importance-badge ${standard.importance.toLowerCase()}`}>
                      {standard.importance}
                    </div>
                    <h3 className="standard-title">{standard.category}</h3>
                  </div>
                  <div className="standard-value">{standard.standard}</div>
                  <p className="standard-purpose">{standard.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mistakes Section */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="mistakes-heading">
          <div className="container">
            <h2 id="mistakes-heading" className="section-title">Common Resume Formatting Mistakes to Avoid</h2>
            <p className="section-subtitle">
              Steer clear of these <strong>formatting errors</strong> that make resumes look unprofessional
            </p>
            <div className="mistakes-grid">
              {commonFormattingMistakes.map((mistake, index) => (
                <div key={index} className="mistake-card">
                  <div className="mistake-number">{index + 1}</div>
                  <p className="mistake-text">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-title">Frequently Asked Questions About Resume Formatting</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p style={{ color: '#4b5563' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading" className="cta-title">
                Create a Perfectly Formatted Resume
              </h2>
              <p className="cta-subtitle">
                Use our professionally designed templates with perfect formatting already built-in. 
                Get the right margins, font sizes, and layouts without any guesswork.
              </p>
              
              <div className="cta-buttons">
                <Link href="/resume-templates" className="btn-primary" style={{ background: '#ffffff', color: '#000000', borderColor: '#ffffff' }}>
                  <FiDownload /> Build Perfectly Formatted Resume
                </Link>
                <Link href="/resume-templates" className="btn-secondary" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                  <FiFileText /> Browse Formatting Templates
                </Link>
              </div>
              
              <div className="cta-features">
                <div className="cta-feature">
                  <FiCheck /> Perfect Margins & Spacing
                </div>
                <div className="cta-feature">
                  <FiCheck /> Professional Font Sizes
                </div>
                <div className="cta-feature">
                  <FiCheck /> ATS-Optimized Layouts
                </div>
                <div className="cta-feature">
                  <FiCheck /> Visual Balance Guaranteed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="last-updated">{currentDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
        </div>
      </main>
    </>
  );
};

// Static Generation with Incremental Static Regeneration
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const lastModifiedDate = now.toISOString();
  
  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        buildTimestamp
      }
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default ResumeFormattingGuide;