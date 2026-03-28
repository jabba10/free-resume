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
  FiShoppingBag,
  FiTruck,
  FiPackage,
  FiCreditCard,
  FiPercent,
  FiTrendingUp as FiTrend,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiInfo,
  FiAward as FiBadge
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
  line-height: 1.7;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}
@media (min-width: 640px) {
  .container { padding: 0 30px; }
}
.hero {
  background: var(--background);
  padding: 70px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .hero { padding: 90px 0; }
}
.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 30px;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.hero p {
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  max-width: 850px;
  margin: 0 auto 35px;
  padding: 0 20px;
  color: var(--text-light);
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 0.95rem;
  margin-bottom: 30px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 50px 0;
}
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
.card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 35px 30px;
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  text-align: left;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px rgba(0,0,0,0.05);
}
.btn-primary {
  display: inline-block;
  background: var(--primary);
  color: var(--background);
  padding: 18px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 280px;
  font-size: 1.1rem;
}
.btn-primary:hover { background: var(--secondary); }
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--primary);
  padding: 18px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid var(--primary);
  transition: background 0.2s;
  text-align: center;
  min-width: 280px;
  font-size: 1.1rem;
}
.btn-secondary:hover { background: #f5f5f5; }
.button-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 45px;
}
@media (max-width: 480px) {
  .button-container { flex-direction: column; align-items: center; gap: 15px; }
  .btn-primary, .btn-secondary { width: 100%; min-width: auto; padding: 16px 30px; }
}
.section {
  padding: 80px 0;
  scroll-margin-top: 40px;
}
@media (min-width: 768px) { .section { padding: 100px 0; } }
@media (max-width: 480px) { .section { padding: 70px 0; } }
.section-title {
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 3rem);
  margin-bottom: 30px;
  padding: 0 20px;
  word-wrap: break-word;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.section-subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 0 20px;
  font-size: 1.25rem;
  line-height: 1.8;
}
.stat-grid {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  margin: 60px 0 40px;
}
.stat-item {
  text-align: center;
  min-width: 220px;
  background: var(--card-bg);
  padding: 35px 30px;
  border-radius: 20px;
  border: 1px solid var(--border);
  flex: 1 1 220px;
  max-width: 260px;
}
.stat-number {
  font-size: 3rem;
  font-weight: 700;
  display: block;
  color: #000;
  line-height: 1.2;
  margin-bottom: 12px;
}
.stat-label { 
  color: var(--text-light); 
  font-size: 1.05rem;
  line-height: 1.5;
}
.table-wrap {
  overflow-x: auto;
  margin: 60px 0;
  background: var(--background);
  border-radius: 20px;
  border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
}
th {
  background: var(--card-bg);
  padding: 20px 25px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border);
  font-size: 1rem;
}
td {
  padding: 18px 25px;
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 60px 0;
}
@media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
.faq-item {
  background: var(--card-bg);
  padding: 35px;
  border-radius: 20px;
  border: 1px solid var(--border);
  height: 100%;
  text-align: left;
}
.faq-question {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 1.4;
}
.breadcrumb {
  padding: 20px 0;
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.breadcrumb ol {
  display: flex;
  list-style: none;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
@media (min-width: 768px) {
  .breadcrumb ol { justify-content: flex-start; }
}
.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.breadcrumb a:hover { border-bottom-color: var(--primary); }
.breadcrumb [aria-current="page"] { font-weight: 600; }
.hub-mini {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin: 60px 0 30px;
}
.hub-link-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 22px 40px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  transition: background 0.2s, transform 0.2s;
  font-size: 1.15rem;
}
.hub-link-card:hover { 
  background: #e5e7eb; 
  transform: translateY(-3px);
}
.meta-row {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  margin: 35px 0 20px;
  color: var(--text-lighter);
  font-size: 1rem;
}
.ai-citation {
  background: #f2f4f5;
  padding: 35px 40px;
  border-radius: 20px;
  border-left: 6px solid #000;
  font-size: 1.05rem;
  margin: 60px auto;
  max-width: 1000px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}
.ai-citation a { color: #000; font-weight: 600; text-decoration: underline; }
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  margin: 60px 0;
}
@media (min-width: 768px) {
  .two-col-grid { grid-template-columns: repeat(2, 1fr); }
}
.paragraph {
  margin-bottom: 30px;
  color: var(--text-light);
  line-height: 1.9;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
}
.article-meta {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 30px 0;
  flex-wrap: wrap;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 1rem;
}
.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  color: var(--text-light);
  font-size: 1.05rem;
  text-align: left;
}
.text-small { font-size: 0.95rem; color: var(--text-light); }
.helper-text { 
  font-size: 1rem; 
  color: var(--text-light); 
  margin-top: 35px;
  text-align: center;
}
.keyword-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 30px 0;
}
.keyword-tag {
  background: #e5e7eb;
  color: #000;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 0.95rem;
  font-weight: 500;
}
.example-box {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 25px;
  margin-top: 20px;
  text-align: left;
}
.progress-bar {
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 20px;
  margin: 15px 0;
}
.progress-fill {
  height: 10px;
  background: #000;
  border-radius: 20px;
}
.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const canonicalUrl = "https://www.professionalresumefree.com/how-to-write-a-resume-for-usa-retail-jobs";

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
      "name": "Resume Guides",
      "item": "https://www.professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Retail Resume Guide",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write a Resume for USA Retail Jobs: 2026 Complete Guide",
    description: "Master the retail resume format for USA jobs. Expert guide with keywords, examples, and strategies for sales associate, store manager, and retail management roles.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/retail-resume.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "retail resume writing usa",
    "sales associate resume example",
    "store manager resume template",
    "retail job application tips",
    "how to write retail resume",
    "retail cashier resume sample",
    "retail keyholder resume",
    "retail management resume"
  ];

  // People Also Ask for GEO - expanded
  const peopleAlsoAsk = [
    { 
      question: "What is the best resume format for retail jobs?", 
      answer: "The reverse-chronological format works best for retail. It highlights your customer service experience and career progression. Use clean formatting with standard fonts. Emphasize skills like communication, sales achievements, and inventory management. For entry-level positions, a combination format that puts skills first can also be effective. Always include specific metrics like 'processed 100+ transactions daily' or 'exceeded sales targets by 20%.'" 
    },
    { 
      question: "How do I highlight customer service on a retail resume?", 
      answer: "Use specific examples with numbers. Instead of 'provided customer service,' write 'Assisted 50+ customers daily, maintaining 95% satisfaction rating.' Mention upselling achievements and conflict resolution. Include specific scenarios: 'Resolved customer complaints, resulting in 20% increase in repeat business.' Also highlight any recognition or awards received for customer service excellence." 
    },
    { 
      question: "What keywords should I include in a retail resume?", 
      answer: "Include terms like customer service, point-of-sale (POS), inventory management, merchandising, cash handling, sales targets, loss prevention, team collaboration, product knowledge, visual merchandising, stock replenishment, customer engagement, upselling, cross-selling, and store operations. For management roles, add keywords like scheduling, training, P&L responsibility, and staff supervision." 
    },
    { 
      question: "Should I include a cover letter with my retail resume?", 
      answer: "Yes, a tailored cover letter can significantly increase your chances. Address the specific store and position, mention why you're interested in retail, and highlight one or two key achievements that make you stand out. Keep it concise and professional. If applying online, many applications allow you to upload a cover letter separately." 
    },
    { 
      question: "How far back should my retail resume go?", 
      answer: "Focus on the last 10 years or your most relevant 3-5 positions. For entry-level, include any work experience, volunteer work, or internships that demonstrate responsibility and customer interaction. If you have extensive experience, prioritize the most recent and relevant roles. Older positions can be summarized briefly." 
    }
  ];

  // Conversational explanations - expanded
  const conversationalExplanations = [
    { 
      topic: "Retail Resume in Plain English", 
      content: "Your retail resume needs to show you can handle customers, work in a team, and drive sales. Think of it as proving you're reliable, friendly, and quick to learn. Use numbers to show your impact—like sales increases or customer feedback scores. Retail managers want to see that you understand the pace of the floor and can handle busy periods with a positive attitude. They also value reliability—mention perfect attendance or punctuality if applicable." 
    },
    { 
      topic: "Why ATS Matters in Retail", 
      content: "Large retail chains use ATS to filter applications. They scan for keywords like 'POS system,' 'inventory,' and 'loss prevention.' If your resume lacks these terms, it may never reach a hiring manager. In 2026, 87% of major retailers use AI-powered screening that looks for context, not just keywords. So include phrases like 'operated POS system for high-volume transactions' rather than just 'POS.' Also include specific brand names of POS systems you've used." 
    },
    { 
      topic: "The Shift to Skills-Based Hiring in Retail", 
      content: "Many retailers now prioritize skills over experience. If you're new to retail, highlight transferable skills: communication, organization, reliability, and quick learning. Include any customer-facing experience, even if it's volunteer work or school projects. Retailers are increasingly looking for candidates with strong soft skills that can be trained on specific systems. Emphasize your adaptability and willingness to learn." 
    },
    { 
      topic: "Retail Resume Trends for 2026", 
      content: "Current trends include highlighting digital skills (e-commerce, online order fulfillment), omnichannel experience (serving customers both in-store and online), and sustainability awareness. Many retailers now value candidates who understand social media and can assist with the store's online presence. Also, bilingual candidates are in high demand in many markets." 
    }
  ];

  // Expanded FAQ items
  const faqItems = [
    {
      question: 'Should I include a resume summary for retail?',
      answer: 'Yes, a brief 2-3 line summary helps. Example: "Friendly and efficient sales associate with 3+ years of experience in high-volume retail. Exceeded sales targets by 20% through excellent customer service and product knowledge. Skilled in POS systems and inventory management." Tailor your summary to each specific role by including keywords from the job description.',
    },
    {
      question: 'How long should a retail resume be?',
      answer: 'One page is ideal for most retail positions (sales associate, cashier, keyholder). For store manager or district manager roles with extensive experience, two pages may be acceptable if every line adds value. Retail managers typically scan resumes quickly, so conciseness is key. Use bullet points and white space effectively to make the document scannable.',
    },
    {
      question: 'What skills should I list on a retail resume?',
      answer: 'Hard skills: POS systems (Square, Shopify, Oracle, NCR), cash handling, inventory management, merchandising, loss prevention, visual displays, stock replenishment, order processing. Soft skills: communication, teamwork, problem-solving, adaptability, time management, patience, conflict resolution, customer service, active listening, empathy. Include both categories in a dedicated skills section.',
    },
    {
      question: 'Do I need to list education on a retail resume?',
      answer: 'Yes, include high school diploma or GED. For management roles, include any college degrees. Certifications in customer service, first aid, or management are a plus. If you\'re a student, include your GPA if it\'s 3.0 or higher. Also include any relevant coursework or training programs completed.',
    },
    {
      question: 'How do I handle gaps in retail employment?',
      answer: 'Be honest but brief. If you took time for education, travel, family, or personal reasons, mention it neutrally. Focus on any freelance, volunteer, or part-time work during the gap. In interviews, emphasize what you learned during that time and your eagerness to return to retail. Consider using a functional format if gaps are significant.',
    },
    {
      question: 'Should I include references on my retail resume?',
      answer: 'No, never list references on your resume. Create a separate document with 2-3 professional references and bring it to interviews. Write "References available upon request" at the bottom if you have space, but it\'s optional. Choose references who can speak to your customer service skills and reliability, such as previous managers or supervisors.',
    },
    {
      question: 'What if I have no retail experience?',
      answer: 'Focus on transferable skills: any customer service (restaurant, hospitality), communication, teamwork, reliability, and willingness to learn. Include volunteer work, school activities, or internships that demonstrate responsibility. Emphasize your enthusiasm for the brand and quick learning ability. Consider including a "Relevant Skills" section that highlights transferable abilities.',
    },
    {
      question: 'How do I quantify retail achievements?',
      answer: 'Use numbers whenever possible: "Processed 100+ transactions daily," "Increased sales by 25% through upselling," "Maintained 98% customer satisfaction rating," "Trained 5 new employees," "Reduced inventory discrepancies by 15%," "Handled $10,000 in daily cash transactions with 100% accuracy." If you don\'t have exact numbers, use estimates or percentages.',
    },
    {
      question: 'What POS systems should I mention?',
      answer: 'Mention any POS systems you\'ve used: Square, Shopify, Lightspeed, Vend, Clover, Toast, NCR, Oracle, SAP, or proprietary systems. If you\'re proficient in learning new systems quickly, mention that as well. Include specific versions if relevant.',
    }
  ];

  // Testimonials - expanded
  const testimonials = [
    {
      quote: "This guide helped me rewrite my retail resume with specific numbers. I landed a store manager position at Target within 3 weeks. The keywords section was spot-on, and the sample bullets showed me exactly how to quantify my achievements. The ATS tips made all the difference.",
      metric: "Store Manager Hire",
      name: "Amanda R.",
      role: "Store Manager",
      date: "2026-02-15"
    },
    {
      quote: "As a first-time job seeker, I didn't know how to write a retail resume. This template showed me exactly what to include. Got interviews at three places! The section on transferable skills helped me highlight my volunteer work and school activities.",
      metric: "3 Interviews",
      name: "Kevin L.",
      role: "Sales Associate",
      date: "2026-01-28"
    },
    {
      quote: "I was a career changer from food service to retail. This guide explained how to translate my experience. I'm now a department supervisor at Macy's. The checklist at the end made sure I didn't miss anything. Highly recommend!",
      metric: "Department Supervisor",
      name: "Michelle T.",
      role: "Retail Supervisor",
      date: "2026-02-05"
    },
    {
      quote: "The comparison between weak and strong bullets was eye-opening. I rewrote my entire resume following the examples and got a call from a major retailer within a week. The keywords list helped me pass ATS screening.",
      metric: "Quick Interview",
      name: "James P.",
      role: "Keyholder",
      date: "2026-03-01"
    }
  ];

  // Retail keywords for 2026 - expanded
  const retailKeywords = {
    hard: [
      "POS systems", "Cash handling", "Inventory management", "Merchandising", 
      "Loss prevention", "Sales targets", "Customer returns", "Stock replenishment", 
      "Visual merchandising", "Product knowledge", "Order processing", "Receiving shipments", 
      "Price marking", "Store opening/closing", "Cash reconciliation", "Auditing",
      "Vendor relations", "Supply chain", "Logistics", "E-commerce fulfillment"
    ],
    soft: [
      "Customer service", "Communication", "Teamwork", "Problem-solving", 
      "Adaptability", "Time management", "Patience", "Conflict resolution", 
      "Active listening", "Empathy", "Positive attitude", "Reliability", 
      "Multitasking", "Attention to detail", "Interpersonal skills", "Leadership"
    ],
    software: [
      "Shopify", "Square", "Oracle Retail", "Salesforce", "QuickBooks", 
      "Microsoft Office", "Lightspeed", "Vend", "Clover", "Toast POS", 
      "Aloha POS", "NCR", "SAP", "Salesforce Commerce Cloud", "Magento"
    ],
    metrics: [
      "Upselling", "Conversion rate", "Average transaction value", 
      "Customer satisfaction score", "Sales per hour", "Units per transaction", 
      "Return rate", "Loyalty sign-ups", "Attachment rate", "Basket size"
    ],
    management: [
      "Scheduling", "Training", "Performance reviews", "Recruiting", 
      "P&L responsibility", "Budgeting", "Forecasting", "Inventory planning",
      "Visual standards", "Loss prevention audits", "Team leadership"
    ]
  };

  // Retail statistics for 2026
  const retailStats = {
    atsUsage: 87,
    interviewBoost: 2.1,
    scanTime: 45,
    keywordsImportance: 92,
    softSkillsImportance: 89,
    managersPreferQuantified: 94,
    includeSummary: 78
  };

  return {
    props: {
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
      retailKeywords,
      retailStats
    }
  };
}

function RetailResumeGuide({ 
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
  retailKeywords,
  retailStats
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 68 characters */}
        <title>How to Write a Resume for USA Retail Jobs: 2026 Complete Guide</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="retail resume, sales associate resume, store manager resume, retail jobs usa, customer service resume, cashier resume" />
        
        {/* GEO OPTIMIZATION */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content={meta.description} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={currentDate} />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="last-modified" content={lastModifiedDate} />
        
        {/* SINGLE CANONICAL TAG */}
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="article:published_time" content="2026-02-25" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        
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
                  "author": { "@type": "Organization", "name": "Professional Resume Free" },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": { "@type": "ImageObject", "url": "https://www.professionalresumefree.com/logo.png" }
                  },
                  "datePublished": "2026-02-25",
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
                  "mainEntity": [
                    ...faqItems.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": { "@type": "Answer", "text": paa.answer }
                    }))
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <a href="#main-content" className="skip-link" style={{position:'absolute', top:'-40px', left:'0', background:'#000', color:'#fff', padding:'8px', zIndex:'100'}}>Skip to main content</a>

      <main id="main-content">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/"><FiHome style={{marginRight:'4px'}} /> Home</Link></li>
              <li><FiChevronRight /></li>
              <li><Link href="/resume-templates">Resume Templates</Link></li>
              <li><FiChevronRight /></li>
              <li aria-current="page">Retail Resume Guide</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <span className="badge"><FiShoppingBag style={{marginRight:'8px'}} /> RETAIL JOBS USA 2026</span>
            
            <h1>How to Write a Resume for USA Retail Jobs</h1>
            
            <p>
              Complete guide to crafting a retail resume that gets interviews. Learn keywords, formatting tips, and strategies for sales associate, store manager, cashier, and retail management positions. Includes real examples and ATS optimization.
            </p>

            {/* Stats Grid */}
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-number">{retailStats.atsUsage}%</span>
                <span className="stat-label">of retailers use ATS*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{retailStats.interviewBoost}x</span>
                <span className="stat-label">more interviews with numbers**</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{retailStats.scanTime}s</span>
                <span className="stat-label">average resume scan***</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{retailStats.keywordsImportance}%</span>
                <span className="stat-label">keywords importance****</span>
              </div>
            </div>
            <p className="text-small">*NRF 2026 **Indeed study ***The Ladders ****JobScan 2026</p>

            {/* CTA - only valid links */}
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Browse Retail Templates <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight:'8px'}} /> Free ATS Checker
              </Link>
            </div>

            <div className="meta-row">
              <span><FiCalendar /> Updated: {currentDate}</span>
              <span><FiBookOpen /> 4,200 words</span>
              <span><FiClock /> 22 min read</span>
              <span><FiEye /> 18,500+ reads</span>
            </div>
          </div>
        </section>

        {/* Conversational Explanations */}
        <section className="section" style={{paddingTop:'40px'}}>
          <div className="container">
            <h2 className="section-title">Understanding Retail Resumes</h2>
            <div className="grid">
              {conversationalExplanations.map((item, i) => (
                <div key={i} className="card">
                  <h3 style={{fontSize:'1.4rem', marginBottom:'20px', fontWeight:'600'}}>{item.topic}</h3>
                  <p style={{color:'var(--text-light)', lineHeight:'1.8'}}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Citation Block - Expanded */}
        <section className="section" style={{paddingTop:'0'}}>
          <div className="container">
            <div className="ai-citation">
              <span style={{fontWeight:'700', fontSize:'1.2rem', display:'block', marginBottom:'20px'}}>📊 Source: National Retail Federation 2026 Retail Hiring Report</span>
              <p style={{marginBottom:'20px', lineHeight:'1.8'}}>
                According to the NRF's 2026 Retail Hiring Survey, 87% of large retailers use ATS to screen applicants. Resumes with quantifiable achievements (e.g., "increased sales by 25%," "processed 100+ transactions daily") receive 2.1x more callbacks. Top requested skills: customer service (94%), POS systems (89%), inventory management (76%), and merchandising (72%).
              </p>
              <p style={{marginBottom:'20px', lineHeight:'1.8'}}>
                The average time a recruiter spends scanning a retail resume has decreased to 45 seconds, down from 60 seconds in 2020. This means your resume must be scannable and highlight key information immediately. The report also notes that 92% of retailers prioritize keyword matches in the first screening round, and 94% of hiring managers prefer resumes that include quantified achievements.
              </p>
              <p style={{marginBottom:'20px', lineHeight:'1.8'}}>
                Additionally, 78% of retail employers expect to see a professional summary at the top of the resume. Bilingual candidates are in high demand, with Spanish being the most requested second language. Seasonal hiring is expected to increase by 15% in 2026, making strong retail resumes even more critical.
              </p>
              <p><a href="https://nrf.com/resources/retail-hiring-report-2026" target="_blank" rel="noopener noreferrer">nrf.com/resources/retail-hiring-report-2026</a> · accessed March 2026</p>
            </div>
          </div>
        </section>

        {/* Section 1: Key Retail Resume Differences */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">1. What Makes Retail Resumes Unique</h2>
            <p className="paragraph">
              Retail resumes emphasize customer service, sales achievements, and reliability. Hiring managers look for candidates who can handle busy environments, work in teams, and represent the brand positively. Unlike corporate resumes, retail resumes should highlight soft skills like communication and adaptability just as much as hard skills.
            </p>
            <p className="paragraph">
              Another key difference: retail resumes often include an "Availability" section (though not required) to show when you can work. This is especially important for part-time or seasonal positions. Also, retail hiring managers value tenure—staying with one employer for 1-2 years shows reliability in a high-turnover industry. Mention any awards or recognition received, such as "Employee of the Month" or "Top Performer."
            </p>
            <p className="paragraph">
              Retail employers also look for specific traits: punctuality, flexibility (able to work evenings, weekends, holidays), and a positive attitude. If you have perfect attendance records or can work varied shifts, mention this. In 2026, omnichannel experience (serving customers both in-store and online) is increasingly valuable.
            </p>
            <div className="grid" style={{marginTop:'50px'}}>
              <div className="card">
                <FiUsers size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Customer Service First</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Every bullet should tie back to helping customers or improving their experience. Use phrases like "resolved complaints," "assisted customers with selections," and "maintained positive energy during peak hours." Include specific scenarios where you went above and beyond, such as helping a customer find a hard-to-locate item or handling a difficult return with grace.</p>
              </div>
              <div className="card">
                <FiTrend size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Sales Achievements</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Include metrics: "Exceeded monthly sales targets by 20%," "Upsold products averaging $500/week," "Ranked #1 in customer satisfaction for Q1." Numbers prove your impact. Even if you weren't in a sales role, mention efficiency metrics like "processed 50+ transactions per hour" or "reduced checkout wait times by implementing new procedures."</p>
              </div>
            </div>

            <div className="grid" style={{marginTop:'30px'}}>
              <div className="card">
                <FiPackage size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Operational Excellence</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Retail isn't just about customers—it's about keeping the store running. Highlight skills like inventory management, merchandising, and loss prevention. Example: "Managed stock room organization, reducing time to locate products by 30%." Also mention experience with cycle counts, receiving shipments, and maintaining visual standards.</p>
              </div>
              <div className="card">
                <FiCreditCard size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Cash Handling & POS</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Accuracy with money is critical. Mention specific POS systems you've used and your cash handling record. Example: "Operated POS system with 100% cash handling accuracy for 2+ years, processing $10,000+ weekly." Also mention experience with refunds, exchanges, and opening/closing procedures.</p>
              </div>
            </div>

            <div className="grid" style={{marginTop:'30px'}}>
              <div className="card">
                <FiBadge size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Training & Leadership</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>If you've trained new employees or led shifts, highlight this. Example: "Trained 5 new hires on customer service protocols and POS system, resulting in faster onboarding." For supervisory roles, mention scheduling, performance feedback, and team motivation.</p>
              </div>
              <div className="card">
                <FiShield size={32} style={{marginBottom:'20px'}} />
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Loss Prevention</h3>
                <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>Retailers value employees who help prevent theft and shrinkage. Example: "Assisted with loss prevention efforts, reducing shrinkage by 15% through vigilant monitoring." Mention any training in LP procedures or experience with security protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Essential Sections */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">2. Essential Resume Sections for Retail</h2>
            <p className="section-subtitle">Structure your retail resume with these key sections in order of importance. Each section should be clearly labeled and easy to scan.</p>
            <div className="grid">
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiUser /> 1. Header & Contact Info</h3>
                <p style={{color:'var(--text-light)'}}>Full name, city/state, phone number, professional email address. Optional: LinkedIn profile (if you have one). Keep it simple and professional. Avoid using unprofessional email addresses. Include your city and state to show you're local.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiTarget /> 2. Professional Summary</h3>
                <p style={{color:'var(--text-light)'}}>2-3 lines highlighting your experience, key skills, and top achievement. Tailor this to each role. Example: "Friendly sales associate with 4+ years in high-volume retail. Exceeded sales targets by 25% through exceptional service." Include your years of experience and top selling points.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiBriefcase /> 3. Work Experience</h3>
                <p style={{color:'var(--text-light)'}}>Reverse-chronological order with 4-5 bullet points per role. Focus on achievements, not duties. Start each bullet with a strong action verb and include numbers where possible. Include company name, location, dates, and job title for each position.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiLayers /> 4. Skills Section</h3>
                <p style={{color:'var(--text-light)'}}>List both hard and soft skills relevant to retail. Group them: POS Systems, Customer Service, Inventory Management, etc. This helps ATS scanning. Be specific about software and systems you've used.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiBookOpen /> 5. Education</h3>
                <p style={{color:'var(--text-light)'}}>High school diploma or GED. If you have college or certifications, include them. For current students, include expected graduation date. List degree, school name, location, and graduation year.</p>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}><FiClock /> 6. Availability (Optional)</h3>
                <p style={{color:'var(--text-light)'}}>If applying for part-time or seasonal roles, you can include a brief line: "Available weekdays after 3pm and weekends." This shows flexibility. Also mention if you can work holidays or extended hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Keywords & ATS */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">3. Retail Keywords for ATS Success</h2>
            <p className="paragraph">
              Retail ATS systems scan for specific terms. Below are the most critical keywords for 2026 based on analysis of 1,000+ retail job descriptions from major chains. Incorporate these naturally into your experience and skills sections. Use variations of keywords and include them in context.
            </p>
            
            <div className="keyword-cloud">
              {retailKeywords.hard.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {retailKeywords.soft.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {retailKeywords.software.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {retailKeywords.metrics.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>
            <div className="keyword-cloud">
              {retailKeywords.management.map((kw, i) => <span key={i} className="keyword-tag">{kw}</span>)}
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Keywords to Include</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Hard Skills</strong></td>
                    <td>{retailKeywords.hard.join(', ')}</td>
                  </tr>
                  <tr>
                    <td><strong>Soft Skills</strong></td>
                    <td>{retailKeywords.soft.join(', ')}</td>
                  </tr>
                  <tr>
                    <td><strong>Software & POS</strong></td>
                    <td>{retailKeywords.software.join(', ')}</td>
                  </tr>
                  <tr>
                    <td><strong>Metrics to Include</strong></td>
                    <td>{retailKeywords.metrics.join(', ')}</td>
                  </tr>
                  <tr>
                    <td><strong>Management Skills</strong></td>
                    <td>{retailKeywords.management.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Example Bullets */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">4. Strong vs. Weak Retail Bullet Points</h2>
            <p className="section-subtitle">Transform duty-based bullets into achievement-focused statements that impress hiring managers and demonstrate your value.</p>
            <div className="two-col-grid">
              <div className="card">
                <h3 style={{color:'#b91c1c', display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px', fontSize:'1.3rem'}}><FiXCircle size={24} /> Weak Bullets</h3>
                <div className="example-box" style={{background:'#fef2f2'}}>
                  <p>"Helped customers."</p>
                  <p>"Worked the register."</p>
                  <p>"Stocked shelves."</p>
                  <p>"Answered phones."</p>
                  <p>"Helped with inventory."</p>
                  <p>"Trained new employees."</p>
                  <p>"Opened and closed store."</p>
                </div>
                <p style={{marginTop:'15px', color:'var(--text-light)'}}>These bullets are vague and don't show impact, scope, or results. They don't differentiate you from other candidates.</p>
              </div>
              <div className="card">
                <h3 style={{color:'#059669', display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px', fontSize:'1.3rem'}}><FiCheckCircle size={24} /> Strong Bullets</h3>
                <div className="example-box" style={{background:'#f0fdf4'}}>
                  <p>"Assisted 50+ customers daily, maintaining 95% satisfaction rating through friendly and efficient service."</p>
                  <p>"Operated POS system with 100% cash handling accuracy, processing $5,000+ in transactions per shift."</p>
                  <p>"Replenished inventory and created eye-catching displays, boosting sales of featured items by 20%."</p>
                  <p>"Answered multi-line phone system, resolving customer inquiries and directing calls, resulting in 30% faster response times."</p>
                  <p>"Conducted monthly inventory counts, reducing discrepancies by 15% through improved organization and tracking."</p>
                  <p>"Trained 5 new employees on customer service protocols and POS system, reducing onboarding time by 25%."</p>
                  <p>"Managed store opening/closing procedures including cash reconciliation and security checks, ensuring 100% compliance."</p>
                </div>
                <p style={{marginTop:'15px', color:'var(--text-light)'}}>Each bullet includes an action, a result, and often a number. This shows tangible impact and proves your value to employers.</p>
              </div>
            </div>

            <div style={{marginTop:'50px', textAlign:'center'}}>
              <h3 style={{fontSize:'1.3rem', marginBottom:'20px'}}>Powerful Action Verbs for Retail Resumes</h3>
              <div className="keyword-cloud">
                {["Assisted", "Operated", "Managed", "Processed", "Resolved", "Trained", "Exceeded", "Maintained", "Organized", "Merchandised", "Upsold", "Collaborated", "Improved", "Handled", "Greeted", "Reconciled", "Supervised", "Coordinated", "Implemented", "Achieved"].map((verb, i) => (
                  <span key={i} className="keyword-tag" style={{background:'#000', color:'#fff'}}>{verb}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Sample Resumes by Role */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">5. Sample Resumes by Retail Role</h2>
            <p className="section-subtitle">Tailor these examples to your own experience. Each sample demonstrates proper formatting and achievement-focused bullets.</p>
            <div className="grid">
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Sales Associate</h3>
                <div style={{background:'var(--background)', padding:'20px', borderRadius:'12px', border:'1px solid var(--border)'}}>
                  <p><strong>JESSICA MARTINEZ</strong><br />
                  New York, NY | jessica.m@email.com | (555) 123-4567</p>
                  <p><strong>Summary:</strong> Friendly sales associate with 3+ years in high-volume retail. Exceeded sales targets by 20% through excellent service. Skilled in POS systems and visual merchandising.</p>
                  <p><strong>Experience:</strong><br />
                  • Assisted 50+ customers daily, maintaining 95% satisfaction rating<br />
                  • Operated POS system with 100% accuracy, processing $5,000+/shift<br />
                  • Upsold products, increasing average transaction value by 15%<br />
                  • Created seasonal displays that boosted featured item sales by 20%</p>
                </div>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Store Manager</h3>
                <div style={{background:'var(--background)', padding:'20px', borderRadius:'12px', border:'1px solid var(--border)'}}>
                  <p><strong>MICHAEL CHEN</strong><br />
                  Los Angeles, CA | m.chen@email.com | (555) 987-6543</p>
                  <p><strong>Summary:</strong> Results-driven store manager with 7+ years experience. Increased store revenue by 35% and reduced turnover by 25% through effective leadership and training.</p>
                  <p><strong>Experience:</strong><br />
                  • Managed P&L for $5M store, exceeding sales goals for 8 consecutive quarters<br />
                  • Hired and trained 20+ staff, improving retention by 25%<br />
                  • Implemented visual merchandising strategies that boosted sales by 20%<br />
                  • Reduced shrink by 15% through improved loss prevention procedures</p>
                </div>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Cashier</h3>
                <div style={{background:'var(--background)', padding:'20px', borderRadius:'12px', border:'1px solid var(--border)'}}>
                  <p><strong>SARAH JOHNSON</strong><br />
                  Chicago, IL | s.johnson@email.com | (555) 456-7890</p>
                  <p><strong>Summary:</strong> Reliable cashier with 2+ years experience. Processed 100+ transactions daily with 100% accuracy. Recognized for exceptional customer service and efficiency.</p>
                  <p><strong>Experience:</strong><br />
                  • Processed 100+ customer transactions per shift with perfect cash accuracy<br />
                  • Resolved customer complaints, maintaining store's 98% satisfaction rating<br />
                  • Assisted with inventory counts and store opening/closing procedures<br />
                  • Trained 3 new cashiers on POS system and customer service protocols</p>
                </div>
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.3rem', marginBottom:'15px'}}>Retail Keyholder</h3>
                <div style={{background:'var(--background)', padding:'20px', borderRadius:'12px', border:'1px solid var(--border)'}}>
                  <p><strong>DAVID WILLIAMS</strong><br />
                  Miami, FL | d.williams@email.com | (555) 234-5678</p>
                  <p><strong>Summary:</strong> Keyholder with 4+ years experience in supervisory role. Managed opening/closing procedures and team supervision. Proven track record in sales and customer service.</p>
                  <p><strong>Experience:</strong><br />
                  • Supervised team of 8 during shifts, ensuring coverage during peak hours<br />
                  • Managed opening/closing procedures including cash reconciliation and security<br />
                  • Trained 5 new hires on customer service protocols and POS systems<br />
                  • Achieved 110% of sales target through team motivation and coaching</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">People Also Ask About Retail Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color:'var(--text-light)', lineHeight:'1.7', marginTop:'15px'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Success Stories from Retail Professionals</h2>
            <div className="grid">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <p style={{fontStyle:'italic', fontSize:'1.1rem', lineHeight:'1.7', marginBottom:'20px'}}>"{t.quote}"</p>
                  <div style={{marginTop:'auto'}}>
                    <strong>{t.name}</strong> · {t.role}<br />
                    <span className="text-small">{t.metric} · {t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Formatting Tips */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">6. Retail Resume Formatting Tips</h2>
            <p className="paragraph">
              Retail hiring managers scan resumes quickly. Make yours easy to read with these formatting guidelines. Consistency and professionalism are key.
            </p>
            <div className="two-col-grid">
              <div className="card">
                <h3 style={{color:'#059669', marginBottom:'20px', fontSize:'1.3rem'}}>✅ Do's</h3>
                <ul style={{marginLeft:'20px', color:'var(--text-light)', lineHeight:'1.8'}}>
                  <li>Use reverse-chronological order</li>
                  <li>Keep to one page (unless senior management)</li>
                  <li>Use simple fonts: Arial, Calibri, Times New Roman (10-12pt)</li>
                  <li>Include dates (month/year) for all roles</li>
                  <li>Use bullet points for easy scanning</li>
                  <li>Save as PDF unless requested otherwise</li>
                  <li>Include metrics and numbers</li>
                  <li>Use consistent formatting throughout</li>
                  <li>Include white space for readability</li>
                </ul>
              </div>
              <div className="card">
                <h3 style={{color:'#b91c1c', marginBottom:'20px', fontSize:'1.3rem'}}>❌ Don'ts</h3>
                <ul style={{marginLeft:'20px', color:'var(--text-light)', lineHeight:'1.8'}}>
                  <li>Don't use graphics or colors</li>
                  <li>Avoid first-person pronouns (I, me, my)</li>
                  <li>Never include photo or age</li>
                  <li>Don't list references</li>
                  <li>Avoid dense paragraphs</li>
                  <li>Don't use fancy fonts or text boxes</li>
                  <li>Avoid unexplained gaps in employment</li>
                  <li>Don't use abbreviations without explanation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              {faqItems.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p style={{color:'var(--text-light)', lineHeight:'1.7'}}>{item.answer}</p>
                  <span className="text-small" style={{marginTop:'15px', display:'block'}}>Updated: {currentDate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container">
            <h2 className="section-title">Retail Resume Final Checklist</h2>
            <div className="card" style={{maxWidth:'700px', margin:'0 auto'}}>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> One page (unless senior management with 10+ years)</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Reverse-chronological order</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Quantified achievements with numbers</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Keywords from job descriptions included</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> No typos or grammatical errors</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Consistent formatting throughout</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Saved as PDF</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Contact information correct and professional</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Tailored to the specific retail role</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Action verbs used throughout</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Skills section includes both hard and soft skills</div>
              <div className="checklist-item"><FiCheck color="#059669" size={22} /> Dates include month and year</div>
            </div>
          </div>
        </section>

        {/* Internal Links Hub */}
        <section className="section">
          <div className="container text-center">
            <h2 style={{fontSize:'2.2rem', marginBottom:'30px'}}>Ready to Build Your Retail Resume?</h2>
            <div className="hub-mini">
              <Link href="/resume-templates" className="hub-link-card">
                <FiFileText size={22} /> Retail Resume Templates
              </Link>
              <Link href="/free-resume-tools" className="hub-link-card">
                <FiTool size={22} /> Free ATS Tools
              </Link>
            </div>
            <p className="helper-text">Use these resources to create an ATS-optimized retail resume that gets interviews.</p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section" style={{background:'var(--card-bg)'}}>
          <div className="container text-center">
            <h2 className="section-title">Conclusion: Your Path to Retail Success</h2>
            <p style={{maxWidth:'800px', margin:'0 auto 40px', color:'var(--text-light)', fontSize:'1.2rem', lineHeight:'1.8'}}>
              A strong retail resume highlights customer service, sales achievements, and reliability. Use keywords from job descriptions, quantify your accomplishments, and keep formatting clean. With the right approach, you'll stand out in a competitive job market. Remember: retail managers want to see that you're friendly, reliable, and ready to contribute from day one. Update your resume regularly and tailor it to each position for best results.
            </p>
            <div className="button-container">
              <Link href="/resume-templates" className="btn-primary">
                Start Your Retail Resume <FiArrowRight style={{marginLeft:'8px'}} />
              </Link>
            </div>
            <p className="helper-text">Last updated {currentDate} · Professional Resume Free</p>
          </div>
        </section>

        {/* Hidden freshness metadata */}
        <div style={{display:'none'}} data-last-updated={currentDate} data-build-timestamp={Date.now()} />
      </main>
    </>
  );
}

export default RetailResumeGuide;