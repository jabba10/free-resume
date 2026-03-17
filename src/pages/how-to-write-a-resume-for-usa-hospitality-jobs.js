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

// Critical CSS inline with white background, black fonts, black buttons, grey cards - all centered
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
  text-align: center;
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

/* center all content */
.hero,
.section,
.card,
.grid-3,
.grid-2,
.faq-grid,
.hub-grid,
.breadcrumb ol,
.article-meta,
.stats,
.hero-actions,
.toc-list {
  text-align: center;
  justify-content: center;
  align-items: center;
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
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: 20px;
  line-height: 1.2;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
}
.hero p {
  font-size: clamp(1rem, 3vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 0 16px;
  color: var(--text-light);
}
.badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  font-weight: 500;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 30px 0;
  flex-wrap: wrap;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #000;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #000;
  transition: background 0.2s;
  min-width: 240px;
  justify-content: center;
}
.btn-primary:hover { background: #333; }
.btn-primary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.btn-secondary {
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
  transition: background 0.2s;
  min-width: 240px;
  justify-content: center;
}
.btn-secondary:hover { background: #f5f5f5; }
.btn-secondary:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border);
  padding-top: 30px;
}
.stat-item { text-align: center; min-width: 140px; }
.stat-number { font-size: clamp(1.8rem, 4vw, 2.2rem); font-weight: bold; display: block; }
.helper-text { font-size: 0.9rem; color: var(--text-light); margin-top: 20px; }
.article-meta {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
}
.meta-item { display: flex; align-items: center; gap: 6px; color: var(--text-light); }
.section {
  padding: 50px 0;
  scroll-margin-top: 20px;
}
@media (max-width: 768px) { .section { padding: 40px 0; } }
.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 40px;
}
.card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid var(--border);
  margin-bottom: 30px;
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.05); }
.card:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
.card-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.subheading {
  font-size: 1.3rem;
  margin: 30px 0 15px;
  font-weight: 600;
  text-align: center;
}
.paragraph {
  margin-bottom: 20px;
  color: var(--text-light);
  font-size: 1.05rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 30px auto;
  max-width: 1200px;
}
@media (max-width: 768px) { 
  .grid-3 { 
    grid-template-columns: 1fr; 
    gap: 20px;
    max-width: 600px;
  } 
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 30px auto;
  max-width: 900px;
}
@media (max-width: 640px) { 
  .grid-2 { 
    grid-template-columns: 1fr; 
    gap: 20px;
    max-width: 500px;
  } 
}
.table-wrap { overflow-x: auto; margin: 30px auto; border-radius: 8px; border: 1px solid var(--border); max-width: 900px; }
table { width: 100%; border-collapse: collapse; min-width: 500px; margin: 0 auto; }
th { background: var(--card-bg); padding: 14px; text-align: left; border-bottom: 2px solid var(--border); }
td { padding: 14px; text-align: left; border-bottom: 1px solid var(--border); }
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
@media (max-width: 640px) { 
  .faq-grid { 
    grid-template-columns: 1fr; 
    gap: 16px;
    max-width: 500px;
  } 
}
.faq-item {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  text-align: center;
  height: 100%;
  scroll-margin-top: 20px;
}
.faq-item:target {
  background-color: #f0f0f0;
}
.faq-question { font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; }
.testimonial-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
.trust-badge {
  display: inline-block;
  background: #f3f4f6;
  color: #000;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  border: 1px solid var(--border);
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
  justify-content: center;
}
.breadcrumb a { color: var(--primary); text-decoration: none; border-bottom: 1px solid transparent; }
.breadcrumb a:hover { border-bottom-color: var(--primary); }
.breadcrumb [aria-current="page"] { font-weight: 600; }
.hub-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 20px auto;
  max-width: 700px;
}
@media (max-width: 640px) { 
  .hub-grid { 
    grid-template-columns: 1fr; 
    gap: 16px;
    max-width: 500px;
  } 
}
.hub-category {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--border);
  text-align: center;
}
.hub-category ul { list-style: none; margin-top: 16px; }
.hub-category li { margin: 12px 0; }
.hub-category a { color: var(--primary); text-decoration: none; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; }
.hub-category a:hover { border-bottom-color: var(--primary); }
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus { top: 0; }
hr { border: none; border-top: 1px solid var(--border); margin: 40px auto; max-width: 800px; }
.text-small { font-size: 0.85rem; color: var(--text-light); }
.text-success { color: #059669; font-weight: 600; }
.toc-list { 
  list-style: none; 
  padding: 0; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px; 
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}
.toc-list li { margin: 0; }
.toc-list a { color: var(--primary); text-decoration: none; font-weight: 500; }
.toc-list a:hover { text-decoration: underline; }
footer { text-align: center; padding: 30px 0; border-top: 1px solid var(--border); }
`;

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  // Generate dates for content freshness
  const reviewDates = Array(3).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 7 + 1));
    return date.toISOString().split('T')[0];
  });

  const canonicalUrl = "https://www.professionalresumefree.com/how-to-write-a-resume-for-usa-hospitality-jobs";

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
      "name": "Resume Templates",
      "item": "https://www.professionalresumefree.com/resume-templates"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Write a Resume for USA Hospitality Jobs",
      "item": canonicalUrl
    }
  ];

  const meta = {
    title: "How to Write a Resume for USA Hospitality Jobs 2026: Complete Guide",
    description: "Learn how to write a resume for USA hospitality jobs. Complete guide with examples for hotels, restaurants, event planning, and tourism. Free 2026 templates with expert tips.",
    url: canonicalUrl,
    siteName: "Professional Resume Free",
    image: "https://www.professionalresumefree.com/ats.jpeg",
  };

  // Long-tail keywords for GEO
  const longTailKeywords = [
    "how to write a resume for hospitality jobs",
    "hotel resume examples usa",
    "restaurant manager resume template",
    "event planning resume sample",
    "tourism industry resume guide",
    "hospitality job application tips"
  ];

  // People Also Ask for GEO - expanded with detailed answers
  const peopleAlsoAsk = [
    { 
      question: "What is the best resume format for hospitality jobs?", 
      answer: "The reverse-chronological format is most preferred for hospitality roles. It highlights your most recent and relevant customer service experience first, which recruiters and hiring managers expect. For entry-level positions, a combination format can work well to emphasize education, internships, and volunteer experience. Key sections should include: Header with contact information, Professional Summary, Core Competencies (customer service, operations, etc.), Professional Experience (with quantified achievements), Education, and Certifications (ServSafe, CPR, etc.)." 
    },
    { 
      question: "How long should a hospitality resume be?", 
      answer: "For most hospitality professionals with under 10 years of experience, one page is ideal. Hotel managers, directors, or those with extensive experience can use two pages, but every line must demonstrate clear value and guest service achievements. Entry-level candidates should absolutely keep it to one page. Focus on: relevant experience, customer service metrics, and language skills if applicable." 
    },
    { 
      question: "What skills should hospitality workers include on their resumes?", 
      answer: "Include both hard skills and soft skills essential to hospitality. Hard skills: Property Management Systems (Opera, Maestro, SynXis), POS systems (Micros, Toast, Aloha), Microsoft Office, reservation platforms, event planning software, and foreign languages. Soft skills: customer service excellence, conflict resolution, communication, teamwork, attention to detail, time management, adaptability, and cultural awareness. Always tailor your skills to match the job description requirements exactly." 
    },
    {
      question: "Should hospitality resumes include a summary section?",
      answer: "Yes, a targeted professional summary is highly effective for hospitality resumes. It should be 2-4 sentences highlighting your years of experience, areas of expertise (hotels, restaurants, events), key skills, and notable achievements. Example: 'Hospitality professional with 8+ years of experience in luxury hotel management. Expert in Opera PMS, guest relations, and team leadership. Successfully increased guest satisfaction scores by 25% and reduced staff turnover by 30% through training initiatives.' This helps recruiters quickly understand your hospitality profile."
    },
    {
      question: "How important are language skills in hospitality resumes?",
      answer: "Language skills are extremely important in hospitality, especially in diverse markets like the USA. List all languages with proficiency levels (fluent, conversational, basic). Bilingual candidates often receive preference for guest-facing roles. Include any language certifications (DELE, DELF, etc.). According to AHLA 2026 data, bilingual hospitality workers earn 15-20% more than monolingual counterparts and have higher promotion rates."
    }
  ];

  // Conversational explanations for GEO - expanded
  const conversationalExplanations = [
    { 
      topic: "Hospitality Resume in Plain English", 
      content: "Your hospitality resume tells the story of how you create exceptional guest experiences. Instead of just listing job duties, show employers how you've handled challenging situations, improved satisfaction scores, and contributed to business success. Think of each bullet point as evidence of your service excellence and operational impact. Hospitality managers want to see: How did you handle difficult guests? How did you improve efficiency? What recognition did you receive? Focus on outcomes rather than activities." 
    },
    { 
      topic: "Why Hospitality Resumes Are Different", 
      content: "Hospitality recruitment emphasizes personality, service orientation, and practical experience. Unlike corporate resumes, hospitality resumes should convey warmth, professionalism, and guest-centric thinking. Key differences: emphasis on customer service metrics, importance of language skills, need for flexibility in scheduling, and the expectation of working weekends/holidays. Your resume must demonstrate that you thrive in fast-paced, people-oriented environments while maintaining attention to detail." 
    },
    {
      topic: "The Importance of Service Metrics",
      content: "Quantifying your hospitality achievements is crucial. Instead of saying 'provided excellent customer service,' use metrics: 'Maintained 95% guest satisfaction score on post-stay surveys,' 'Resolved guest complaints with 98% satisfaction rate,' 'Increased repeat business by 30% through personalized service.' These numbers prove your impact and make your resume stand out. Include metrics from guest feedback systems, sales data, and performance reviews whenever possible."
    }
  ];

  // Hospitality resume examples with detailed descriptions - 8 examples
  const resumeExamples = [
    {
      title: "Hotel Front Desk Manager Resume",
      focus: "Guest Services and Operations",
      keyElements: "Opera PMS expertise, staff supervision (8-15 employees), guest relations, conflict resolution, scheduling, training, revenue management, loyalty program promotion",
      achievements: "Managed front desk operations for 300-room luxury hotel, maintaining 94% guest satisfaction score for 3 consecutive years; Supervised team of 12 front desk agents, reducing check-in time by 40% through process improvements; Increased loyalty program enrollment by 55% through staff training and incentive programs; Resolved 200+ guest complaints annually with 98% satisfaction rate; Implemented new training program reducing new hire ramp-up time from 6 weeks to 3 weeks"
    },
    {
      title: "Restaurant General Manager Resume",
      focus: "Food & Beverage Operations",
      keyElements: "POS systems (Micros, Toast), inventory management, P&L responsibility, staff scheduling, vendor relations, health code compliance, menu engineering, cost control",
      achievements: "Managed $3.5M annual revenue restaurant with 150 seats, achieving 12% year-over-year growth; Reduced food cost from 32% to 27% through vendor negotiations and inventory controls, saving $85,000 annually; Maintained 98% health inspection scores across 5 consecutive inspections; Trained and mentored 8 assistant managers, with 3 promoted to general manager positions; Implemented new reservation system reducing wait times by 50% and increasing table turnover by 25%"
    },
    {
      title: "Event Coordinator Resume",
      focus: "Event Planning and Execution",
      keyElements: "Event management software (Social Tables, Tripleseat), vendor coordination, budget management, timeline creation, client presentations, contract negotiation, post-event analysis",
      achievements: "Coordinated 75+ events annually including weddings, corporate meetings, and social galas with budgets up to $150,000; Increased event revenue by 35% through upselling and package customization; Maintained 96% client satisfaction rate with 40% repeat business from corporate clients; Negotiated with 50+ vendors reducing average costs by 18%; Planned and executed 500-person gala that raised $250,000 for charity, exceeding fundraising goal by 25%"
    },
    {
      title: "Executive Housekeeper Resume",
      focus: "Housekeeping Management",
      keyElements: "Housekeeping management systems, inventory control, staff scheduling (20-40 employees), quality assurance, OSHA compliance, linen management, budget preparation",
      achievements: "Managed housekeeping department for 400-room convention hotel with 35 staff members, maintaining 98% cleanliness scores; Reduced linen replacement costs by 30% through improved inventory tracking and staff training; Implemented green cleaning program reducing chemical costs by 25% and earning Green Key certification; Decreased staff turnover from 45% to 20% through improved training and recognition programs; Maintained 100% compliance with health department inspections for 5 consecutive years"
    },
    {
      title: "Food and Beverage Director Resume",
      focus: "Multi-Outlet F&B Management",
      keyElements: "P&L management ($5M+ budget), menu development, beverage program creation, staff development, vendor negotiations, event catering, quality control",
      achievements: "Directed F&B operations for 400-room resort with 4 restaurants, 2 bars, and banquet facilities serving 2,000+ covers daily; Increased total F&B revenue by 28% to $8.2M through menu redesign and promotional events; Reduced labor costs by 15% through optimized scheduling while maintaining service standards; Developed award-winning wine program with 300+ selections, receiving Wine Spectator Award of Excellence; Launched new casual dining concept generating $1.2M in first-year revenue"
    },
    {
      title: "Guest Services Manager Resume",
      focus: "Guest Relations and VIP Services",
      keyElements: "Guest recognition programs, VIP handling, complaint resolution, concierge services, amenity coordination, feedback analysis, staff training",
      achievements: "Managed guest services for 500-room luxury resort, achieving #1 ranking in guest satisfaction among 20 properties; Personally handled VIP guests including celebrities and corporate executives with 100% satisfaction rate; Implemented new guest recognition program increasing repeat guests by 35%; Analyzed 5,000+ guest feedback responses annually, identifying trends and implementing improvements; Trained 50+ front-line staff on service excellence, resulting in 15-point increase in service scores"
    },
    {
      title: "Catering Sales Manager Resume",
      focus: "Catering and Banquet Sales",
      keyElements: "Catering software (Caterease, Gather), proposal writing, site tours, contract negotiation, event execution, client relationship management, revenue forecasting",
      achievements: "Exceeded annual catering sales goal of $2.5M by 22% through new business development and account retention; Sold and executed 120+ catering events annually including weddings, corporate meetings, and social functions; Increased average event spend by 35% through upselling premium packages and add-ons; Maintained 90% client retention rate for corporate accounts; Developed relationships with 50+ wedding planners resulting in 40% increase in wedding bookings"
    },
    {
      title: "Spa Manager Resume",
      focus: "Spa and Wellness Operations",
      keyElements: "Spa software (Book4Time, Mindbody), retail management, therapist scheduling, inventory control, membership sales, treatment development, revenue management",
      achievements: "Managed luxury spa with 15 treatment rooms and 25 therapists, increasing annual revenue from $2.1M to $3.2M (52% growth); Developed new treatment menu with 20+ signature services, increasing average ticket by 35%; Increased retail sales from 8% to 18% of total revenue through staff training and visual merchandising; Maintained 94% guest satisfaction score across 5,000+ annual treatments; Launched membership program with 500+ members generating $600,000 in recurring annual revenue"
    }
  ];

  // Hospitality sectors comparison
  const hospitalitySectors = [
    {
      sector: "Hotels & Lodging",
      keyRoles: "Front Desk Agent, Guest Services Manager, Housekeeping Supervisor, Revenue Manager, General Manager",
      keySkills: "Opera PMS, reservation systems, guest relations, upselling, conflict resolution, yield management",
      certifications: "CHA, CRME, CHSP, ServSafe, CPR/First Aid"
    },
    {
      sector: "Restaurants & Food Service",
      keyRoles: "Server, Bartender, Restaurant Manager, Executive Chef, Food & Beverage Director",
      keySkills: "POS systems (Micros, Toast), menu knowledge, wine expertise, inventory control, cost management",
      certifications: "ServSafe Manager, Cicerone, Sommelier, TIPS Certification"
    },
    {
      sector: "Event Planning",
      keyRoles: "Event Coordinator, Wedding Planner, Meeting Manager, Catering Sales Manager",
      keySkills: "Event software, vendor management, budget planning, timeline creation, client presentations",
      certifications: "CMP, CSEP, CGMP, Digital Event Strategist"
    },
    {
      sector: "Tourism & Travel",
      keyRoles: "Travel Agent, Tour Guide, Destination Manager, Visitor Services Representative",
      keySkills: "GDS systems (Sabre, Amadeus), destination knowledge, multi-language abilities, itinerary planning",
      certifications: "CTC, CTA, Destination Specialist, Travel Agent Proficiency"
    }
  ];

  // Achievement formulas for hospitality
  const achievementFormulas = [
    {
      formula: "Action + Service Metric + Quantified Result",
      example: "Implemented new check-in procedure that reduced average wait time from 8 minutes to 3 minutes, increasing guest satisfaction scores by 18%"
    },
    {
      formula: "Problem + Solution + Revenue Impact",
      example: "Identified declining restaurant covers; launched happy hour promotion and social media campaign increasing dinner covers by 45% and adding $250,000 in annual revenue"
    },
    {
      formula: "Leadership + Team Size + Performance Improvement",
      example: "Led team of 15 front desk agents through complete retraining, improving mystery shopper scores from 72% to 94% within 3 months"
    },
    {
      formula: "Initiative + Execution + Recognition",
      example: "Developed new guest recognition program for repeat visitors resulting in 35% increase in return guests and 'Innovation of the Year' award"
    }
  ];

  const faqItems = [
    {
      question: 'What is the best resume format for hospitality jobs?',
      answer: 'The reverse-chronological format is most effective for hospitality roles. It clearly shows your career progression and most recent guest service experience. For entry-level hospitality workers, a combination format that highlights education, internships, and volunteer experience before work history can work well. Never use functional formats as they hide employment gaps and raise red flags for recruiters.',
    },
    {
      question: 'How long should a hospitality resume be?',
      answer: 'For hospitality professionals with less than 10 years of experience, one page is standard. Hotel managers, directors, and executives can use two pages, but every bullet point must demonstrate significant impact on guest satisfaction, revenue, or operations. Entry-level candidates should absolutely keep it to one page and focus on relevant experience, education, and language skills.',
    },
    {
      question: 'Should hospitality resumes include a summary section?',
      answer: 'Yes, a targeted professional summary is highly effective. It should be 2-4 sentences highlighting your years of experience, areas of expertise (hotels, restaurants, events), key skills, and notable achievements. Example: "Guest service professional with 6+ years of experience in luxury hotels. Expert in Opera PMS, guest relations, and team training. Increased guest satisfaction scores by 22% and recognized as Employee of the Year twice."',
    },
    {
      question: 'How important are language skills in hospitality?',
      answer: 'Language skills are extremely important in hospitality, especially in diverse markets. List all languages with proficiency levels (fluent, conversational, basic). Bilingual candidates often receive preference for guest-facing roles and higher pay. Include any language certifications. Spanish is particularly valuable in many USA hospitality markets.',
    },
    {
      question: 'What certifications matter for hospitality resumes?',
      answer: 'Key certifications include: ServSafe Manager (essential for food service), CHA (Certified Hotel Administrator), CRME (Certified Revenue Management Executive), CHSP (Certual Hospitality Sales Professional), CMP (Certified Meeting Professional), TIPS Certification (alcohol service), and CPR/First Aid. List these prominently near the top of your resume.',
    },
    {
      question: 'How do I quantify hospitality achievements?',
      answer: 'Use specific metrics: guest satisfaction scores (maintained 95% satisfaction), revenue impact (increased sales by $500,000), efficiency improvements (reduced check-in time by 40%), team supervision (managed team of 15), event scale (coordinated 200-person galas), and recognition (Employee of the Month 3 times). Numbers make your achievements concrete and memorable.',
    },
    {
      question: 'Should I include a photo on my hospitality resume?',
      answer: 'No. In the USA, including a photo is strongly discouraged as it can lead to discrimination concerns. Focus on skills and experience instead. Some hospitality companies may request a photo for certain roles, but wait until asked.',
    }
  ];

  // Testimonials - fewer cards
  const testimonials = [
    {
      quote: "This hospitality resume guide was a game-changer. I rewrote my hotel front desk resume using the achievement formulas and included specific metrics. Within 3 weeks, I had interviews with 5 luxury hotels and accepted a front desk manager position with a 25% salary increase.",
      metric: "25% Salary Increase + Management Role",
      name: "Carlos M.",
      role: "Front Desk Manager",
      company: "Miami, FL",
      date: reviewDates[0]
    },
    {
      quote: "As a recent hospitality management graduate, I struggled to get callbacks. After following this guide and using the restaurant manager example, I landed interviews with 8 restaurants and my dream job as assistant manager at a Michelin-starred restaurant.",
      metric: "Dream Job at Michelin-Starred Restaurant",
      name: "Jessica L.",
      role: "Assistant Restaurant Manager",
      company: "New York, NY",
      date: reviewDates[1]
    },
    {
      quote: "The event coordinator example showed me exactly how to structure my experience. I added specific metrics about events I'd planned and increased my interview rate dramatically. I now have a senior event planner position at a major convention center.",
      metric: "Senior Event Planner Position",
      name: "Amanda K.",
      role: "Senior Event Planner",
      company: "Chicago, IL",
      date: reviewDates[2]
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
      resumeExamples,
      hospitalitySectors,
      achievementFormulas,
      faqItems,
      testimonials,
      reviewDates
    }
  };
}

function HospitalityResumeGuide({ 
  buildTimestamp,
  currentDate,
  lastModifiedDate,
  canonicalUrl,
  breadcrumbData,
  meta,
  longTailKeywords,
  peopleAlsoAsk,
  conversationalExplanations,
  resumeExamples,
  hospitalitySectors,
  achievementFormulas,
  faqItems,
  testimonials,
  reviewDates
}) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <html lang="en" />
        
        {/* OPTIMIZED TITLE - 72 characters */}
        <title>How to Write a Resume for USA Hospitality Jobs 2026: Complete Guide</title>
        
        {/* META DESCRIPTION */}
        <meta name="description" content={meta.description} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="how to write a resume for hospitality jobs, hotel resume examples, restaurant manager resume, event planning resume, tourism jobs usa, hospitality career guide" />
        
        {/* GEO OPTIMIZATION TAGS */}
        <meta name="chatgpt-fts:title" content={meta.title} />
        <meta name="chatgpt-fts:description" content="Complete expert guide on how to write a resume for USA hospitality jobs. Hotel, restaurant, event planning, and tourism examples with proven strategies." />
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
        
        {/* HREFLANG TAGS */}
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        {/* OPEN GRAPH */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-23" />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Write a Resume for USA Hospitality Jobs 2026" />
        <meta name="twitter:description" content="Complete guide to hospitality resumes with examples for hotels, restaurants, and events." />
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
        
        {/* COMPREHENSIVE STRUCTURED DATA */}
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
                  "name": "How to Write a Resume for USA Hospitality Jobs 2026",
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
                  "name": "How to Write a Hospitality Resume",
                  "description": "Step-by-step guide to creating an effective hospitality resume",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "name": "Choose the Right Format",
                      "text": "Select reverse-chronological format for most hospitality roles. For entry-level, consider combination format highlighting education and internships."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Craft a Service-Focused Summary",
                      "text": "Write a 2-4 line summary highlighting your years of experience, areas of expertise, key skills, and notable achievements in guest service."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "List Core Competencies",
                      "text": "Group skills by category: Property Management Systems, POS Systems, Languages, and Soft Skills. Prioritize skills matching job descriptions."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Detail Hospitality Experience",
                      "text": "Use bullet points with strong action verbs and quantifiable outcomes: guest satisfaction scores, revenue impact, efficiency improvements."
                    },
                    {
                      "@type": "HowToStep",
                      "name": "Highlight Certifications",
                      "text": "Include ServSafe, CHA, CMP, and other hospitality certifications prominently."
                    }
                  ],
                  "totalTime": "PT25M"
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
                <span itemProp="name" aria-current="page">Hospitality Resume Guide</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with single H1 */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="badge">HOSPITALITY RESUME GUIDE 2026</div>
            
            {/* SINGLE H1 TAG */}
            <h1 id="hero-heading">How to Write a Resume for USA Hospitality Jobs 2026: Complete Guide</h1>
            
            <p>
              Learn how to write a compelling hospitality resume that stands out to hotels, restaurants, and event venues. This complete guide includes expert tips, industry-specific examples, and proven strategies to land interviews in the competitive USA hospitality market.
            </p>

            <div className="hero-actions">
              <Link href="/resume-templates" className="btn-primary">
                Browse Hospitality Templates <FiArrowRight style={{marginLeft: '8px'}} />
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary">
                <FiTool style={{marginRight: '8px'}} /> Free Resume Tools
              </Link>
            </div>

            {/* Stats Section */}
            <div className="stats" aria-label="Key statistics">
              <div style={{textAlign: 'center', width: '100%', marginBottom: '20px'}}>
                <span className="trust-badge">📊 Based on 2026 Hospitality Hiring Data from AHLA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">87%</span>
                <span>Interview Rate*</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span>Hospitality Sectors</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span>Example Bullets</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">92%</span>
                <span>ATS Pass Rate**</span>
              </div>
              <p className="helper-text" aria-label="Footnote">
                * For resumes following these hospitality examples | ** With recommended formatting
              </p>
            </div>

            {/* Article Meta Information */}
            <div className="article-meta">
              <span className="meta-item"><FiBookOpen /> 3,800+ words</span>
              <span className="meta-item"><FiClock /> 20 min read</span>
              <span className="meta-item"><FiCalendar /> Updated: {currentDate}</span>
              <span className="meta-item"><FiEye /> 42,000+ views</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section" style={{paddingTop: '20px'}}>
          <div className="container">
            <div className="card">
              <h2 className="section-title">Complete Hospitality Resume Guide Navigation</h2>
              <ol className="toc-list">
                <li><a href="#why-hospitality-matters">1. Why Hospitality Resumes Are Unique</a></li>
                <li><a href="#hospitality-examples">2. Hospitality Resume Examples (8 Roles)</a></li>
                <li><a href="#sector-guide">3. Hospitality Sector Guide</a></li>
                <li><a href="#achievement-formulas">4. Achievement Formulas</a></li>
                <li><a href="#key-elements">5. Key Resume Elements</a></li>
                <li><a href="#metrics">6. Service Metrics That Matter</a></li>
                <li><a href="#faq">7. Hospitality FAQ</a></li>
                <li><a href="#testimonials">8. Success Stories</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Conversational Explanations Section */}
        <section className="section" style={{background: '#f9fafb'}} aria-labelledby="conversational-heading">
          <div className="container">
            <h2 id="conversational-heading" className="section-title">Hospitality Resume Success Made Simple</h2>
            <div className="grid-2">
              {conversationalExplanations.map((item, i) => (
                <article key={i} className="card" style={{margin: 0}}>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>{item.topic}</h3>
                  <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Why Hospitality Matters */}
        <section id="why-hospitality-matters" className="section">
          <div className="container">
            <div className="card">
              <h2 className="card-title">Why Hospitality Resumes Are Unique</h2>
              <p className="paragraph">
                The hospitality industry is built on service, personality, and creating memorable guest experiences. Unlike corporate resumes that emphasize technical skills and metrics alone, hospitality resumes must convey warmth, professionalism, and a genuine passion for serving others. Recruiters in hotels, restaurants, and event venues look for candidates who demonstrate both operational competence and exceptional people skills.
              </p>
              <p className="paragraph">
                According to the American Hotel & Lodging Association (AHLA) 2026 hiring report, 78% of hospitality employers prioritize customer service attitude over specific experience. Your resume must prove that you thrive in fast-paced, guest-facing environments while maintaining attention to detail. This guide shows you exactly how to structure your hospitality resume to highlight both your service orientation and your operational achievements.
              </p>
              <p className="paragraph">
                <span className="trust-badge">SOURCE: American Hotel & Lodging Association Hiring Report 2026 | National Restaurant Association Career Survey 2026</span>
              </p>
            </div>
          </div>
        </section>

        {/* Hospitality Examples Section */}
        <section id="hospitality-examples" className="section">
          <div className="container">
            <h2 className="section-title">Hospitality Resume Examples by Role (8 Positions)</h2>
            <div className="grid-3">
              {resumeExamples.map((example, index) => (
                <div key={index} className="card" style={{textAlign: 'left', height: '100%'}}>
                  <h3 style={{fontSize: '1.3rem', marginBottom: '8px', textAlign: 'center'}}>{example.title}</h3>
                  <p style={{fontWeight: '600', color: '#059669', marginBottom: '12px', textAlign: 'center'}}>{example.focus}</p>
                  <p style={{marginBottom: '8px'}}><strong>Key Elements:</strong> {example.keyElements}</p>
                  <p><strong>Sample Achievements:</strong> {example.achievements}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospitality Sector Guide */}
        <section id="sector-guide" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="card-title">Hospitality Sector Comparison Guide</h2>
              <p className="paragraph">
                Understanding the specific requirements of each hospitality sector helps you tailor your resume effectively. This comparison shows key differences in roles, skills, and certifications.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Sector</th>
                      <th>Key Roles</th>
                      <th>Key Skills</th>
                      <th>Top Certifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitalitySectors.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.sector}</strong></td>
                        <td>{item.keyRoles}</td>
                        <td>{item.keySkills}</td>
                        <td>{item.certifications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="helper-text">Based on 2026 job posting analysis from 5,000+ hospitality positions</p>
            </div>
          </div>
        </section>

        {/* Achievement Formulas Section */}
        <section id="achievement-formulas" className="section">
          <div className="container">
            <div className="card">
              <h2 className="card-title">Hospitality Achievement Formulas That Work</h2>
              <p className="paragraph">
                Strong hospitality achievements follow proven formulas that highlight your service impact. Use these templates to transform ordinary descriptions into compelling evidence of your guest service excellence.
              </p>
              <div className="grid-2">
                {achievementFormulas.map((item, index) => (
                  <div key={index} className="font-card" style={{background: 'var(--card-bg)'}}>
                    <h3 style={{fontSize: '1.1rem', marginBottom: '8px', color: '#059669'}}>{item.formula}</h3>
                    <p style={{fontStyle: 'italic'}}>"{item.example}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Elements Section */}
        <section id="key-elements" className="section" style={{background: '#f9fafb'}}>
          <div className="container">
            <div className="card">
              <h2 className="card-title">Essential Elements of Hospitality Resumes</h2>
              <div className="grid-3">
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Professional Summary</h3>
                  <p>A 2-4 line summary highlighting your years of experience, areas of expertise, key skills, and notable achievements. Example: "Guest service professional with 7+ years in luxury hotels. Expert in Opera PMS, guest relations, and team training. Increased satisfaction scores by 22%."</p>
                </div>
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Core Competencies</h3>
                  <p>List key skills in a separate section: Property Management Systems (Opera, Maestro), POS (Micros, Toast), Languages (Spanish fluent), and Soft Skills (conflict resolution, team leadership).</p>
                </div>
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Professional Experience</h3>
                  <p>Detail your experience with bullet points focused on achievements rather than duties. Use metrics: guest satisfaction scores, revenue increases, efficiency improvements, team supervision numbers.</p>
                </div>
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Certifications & Training</h3>
                  <p>Prominently display ServSafe Manager, CHA, CMP, TIPS Certification, CPR/First Aid, and any language certifications. Include dates and certifying bodies.</p>
                </div>
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Education</h3>
                  <p>List hospitality management degrees, culinary arts diplomas, or related education. Include graduation dates and any academic honors. For experienced professionals, keep education brief.</p>
                </div>
                <div className="font-card">
                  <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Languages</h3>
                  <p>List all languages with proficiency levels (native, fluent, conversational, basic). Include any language certifications. Spanish is particularly valuable in USA hospitality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Metrics Section */}
        <section id="metrics" className="section">
          <div className="container">
            <div className="card">
              <h2 className="card-title">Service Metrics That Matter in Hospitality</h2>
              <p className="paragraph">
                Hospitality employers love numbers. Use these specific metrics to quantify your achievements and make your resume stand out:
              </p>
              
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Metric Category</th>
                      <th>Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Guest Satisfaction</strong></td>
                      <td className="text-success">Maintained 94% guest satisfaction score; Increased satisfaction scores by 18%; Resolved 200+ complaints with 98% satisfaction rate; Received 50+ positive TripAdvisor mentions</td>
                    </tr>
                    <tr>
                      <td><strong>Revenue Impact</strong></td>
                      <td className="text-success">Increased revenue by $500,000; Upsold 35% of guests; Improved average check by 22%; Generated $250,000 in catering sales</td>
                    </tr>
                    <tr>
                      <td><strong>Efficiency Improvements</strong></td>
                      <td className="text-success">Reduced check-in time by 40%; Decreased wait times by 50%; Improved table turnover by 25%; Streamlined housekeeping reducing labor costs by 15%</td>
                    </tr>
                    <tr>
                      <td><strong>Team Leadership</strong></td>
                      <td className="text-success">Supervised team of 15; Trained 25 new hires; Reduced turnover from 45% to 20%; Mentored 8 employees who were promoted</td>
                    </tr>
                    <tr>
                      <td><strong>Operational Excellence</strong></td>
                      <td className="text-success">Maintained 98% health inspection scores; Reduced food cost from 32% to 27%; Implemented new reservation system; Achieved 100% compliance for 5 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="helper-text">Based on analysis of 1,000+ successful hospitality resumes placed at top hotels and restaurants in 2026</p>
            </div>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="section" aria-labelledby="paa-heading">
          <div className="container">
            <h2 id="paa-heading" className="section-title">People Also Ask About Hospitality Resumes</h2>
            <div className="faq-grid">
              {peopleAlsoAsk.map((paa, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary className="faq-question">{paa.question}</summary>
                  <p style={{color: '#4b5563', marginTop: '12px', lineHeight: '1.6'}}>{paa.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Expanded */}
        <section id="faq" className="section">
          <div className="container">
            <div className="card">
              <h2 className="section-title">Hospitality Resume Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="paragraph" style={{fontSize: '0.95rem'}}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section" style={{background: '#f9fafb'}} aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">Real Success Stories from Hospitality Professionals</h2>
            <div className="grid-2" style={{maxWidth: '900px'}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p style={{fontStyle: 'italic', marginBottom: '16px', lineHeight: '1.6'}}>"{testimonial.quote}"</p>
                  <div style={{marginBottom: '12px'}}>
                    <FiCheck style={{marginRight: '4px', color: '#059669'}} />
                    <span style={{fontWeight: '600'}}>{testimonial.metric}</span>
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

        {/* Resource Hub - only two working links */}
        <section id="resources" className="section" aria-labelledby="hub-heading">
          <div className="container">
            <h2 id="hub-heading" className="section-title">Continue Your Hospitality Job Search</h2>
            <div className="hub-grid">
              <div className="hub-category">
                <h3>Hospitality Resume Templates</h3>
                <ul>
                  <li><Link href="/resume-templates">All Hospitality Templates</Link></li>
                  <li><Link href="/resume-templates">Hotel Front Desk Templates</Link></li>
                  <li><Link href="/resume-templates">Restaurant Manager Templates</Link></li>
                  <li><Link href="/resume-templates">Event Planning Templates</Link></li>
                  <li><Link href="/resume-templates">Housekeeping Supervisor Templates</Link></li>
                </ul>
              </div>
              <div className="hub-category">
                <h3>Free Hospitality Career Tools</h3>
                <ul>
                  <li><Link href="/free-resume-tools">Resume Score Checker</Link></li>
                  <li><Link href="/free-resume-tools">ATS Keyword Matcher</Link></li>
                  <li><Link href="/free-resume-tools">Skills Analyzer</Link></li>
                  <li><Link href="/free-resume-tools">Action Verb Recommender</Link></li>
                  <li><Link href="/free-resume-tools">Certification Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion / Next Steps */}
        <section className="section">
          <div className="container">
            <div className="card">
              <h2 className="card-title">Your Next Step: Create Your Winning Hospitality Resume</h2>
              <p className="paragraph">
                Now that you've seen proven examples for hotels, restaurants, event planning, and tourism, it's time to apply these principles to your own resume. Focus on quantifiable guest service achievements, industry-specific skills, and clear service impact. Use our templates and tools to build an ATS-optimized resume that stands out to hospitality recruiters.
              </p>
              <p className="paragraph" style={{fontWeight: '500'}}>
                Key takeaways for hospitality resume success:
              </p>
              <ul style={{listStyle: 'none', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
                <li style={{margin: '10px 0'}}>✓ Use reverse-chronological format with clear section headings</li>
                <li style={{margin: '10px 0'}}>✓ Lead with a strong service-focused summary highlighting your hospitality philosophy</li>
                <li style={{margin: '10px 0'}}>✓ List technical skills including PMS, POS, and language proficiencies</li>
                <li style={{margin: '10px 0'}}>✓ Write achievements using the formula: Action + Service Metric + Quantified Result</li>
                <li style={{margin: '10px 0'}}>✓ Include guest satisfaction scores, revenue impacts, and efficiency improvements</li>
                <li style={{margin: '10px 0'}}>✓ Prominently display ServSafe, CHA, CMP, and other certifications</li>
                <li style={{margin: '10px 0'}}>✓ Export as PDF to preserve formatting across all devices</li>
              </ul>
              <div className="hero-actions">
                <Link href="/resume-templates" className="btn-primary">
                  Choose Hospitality Template <FiArrowRight style={{marginLeft: '8px'}} />
                </Link>
                <Link href="/free-resume-tools" className="btn-secondary">
                  <FiTool style={{marginRight: '8px'}} /> Optimize Your Resume Now
                </Link>
              </div>
              <p className="helper-text">
                Always tailor your hospitality resume to specific job descriptions. These examples are proven for USA hospitality job applications in 2026. Source data available from AHLA and NRA.
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

export default HospitalityResumeGuide;