// pages/api/feed.xml.js
// Dynamic RSS feed generator for Professional Resume Free (Next.js Pages Router)
// Public URL: /feed.xml  →  rewritten to /api/feed.xml
// Auto-regenerates on every request — always fresh for AI crawlers (ChatGPT, Perplexity, Claude)

const SITE_URL = 'https://professionalresumefree.com';
const SITE_TITLE = 'Professional Resume Free — ATS Resume Builder, Free Tools & Career Calculators';
const SITE_DESCRIPTION = 'Free ATS-optimized resume templates, 12+ career tools, and 15+ calculators. Download PDF instantly — no sign-up. Trusted by 125,000+ job seekers.';

// ═══════════════════════════════════════════════════════════════════════════
// FEED ITEMS — 25 high-priority pages (order = priority, newest first)
// To promote a page, move it to the top of this array.
// ═══════════════════════════════════════════════════════════════════════════
const FEED_ITEMS = [
  {
    title: 'Free Resume Builder — 46+ ATS-Friendly Templates, No Sign-Up',
    path: '/free-resume-builder',
    description: 'Create a professional ATS-ready resume in under 10 minutes. Choose from 46+ industry templates, download PDF instantly — no sign-up, no watermark, 100% free.',
    category: 'Resume Builder'
  },
  {
    title: 'Free ATS Resume Checker — Instant Compatibility Scan',
    path: '/free-ats-resume-checker',
    description: 'Test if your resume passes Applicant Tracking System screening. Get your ATS compatibility score, keyword gaps, and actionable fixes in seconds.',
    category: 'ATS Tools'
  },
  {
    title: 'Free Salary Calculator — Hourly to Annual with Tax Estimates',
    path: '/salary-calculator',
    description: 'Convert hourly to annual salary with tax estimates and industry benchmarks. Free, instant, no sign-up required.',
    category: 'Career Calculators'
  },
  {
    title: 'Resume Calculators — 15+ Free Tools to Optimize Your Resume',
    path: '/resume-calculators',
    description: '15+ free resume calculators: strength score, ATS compatibility, skill gap, market value, achievement scorer, and more. Instant results, no sign-up required.',
    category: 'Resume Calculators'
  },
  {
    title: 'How to Use ChatGPT to Improve Your Resume Bullets — 2026 Prompt Guide',
    path: '/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026',
    description: 'Master prompt engineering to rewrite resume bullets with ChatGPT. Includes 40+ copy-paste prompts for quantified achievements, action verbs, and impact statements.',
    category: 'AI Resume Guide'
  },
  {
    title: 'How to Pass the AI Resume Screen — 2026 ATS Algorithms Explained',
    path: '/how-to-pass-the-ai-resume-screen-2026-ats-algorithms-explained',
    description: 'Understand how modern AI resume screening works. Learn keyword weighting, semantic scoring, and formatting rules to beat Workday, Greenhouse, Lever, and Taleo.',
    category: 'ATS Guide'
  },
  {
    title: 'AI Resume Builders — How to Use AI to Write Your Best Resume',
    path: '/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume',
    description: 'Complete guide to AI resume builders. Learn when to use AI, when to avoid it, and how to combine AI tools with ATS optimization for interview-winning resumes.',
    category: 'AI Resume Guide'
  },
  {
    title: 'Resume Trends in the USA for 2026 — What Recruiters Want Now',
    path: '/resume-trends-in-the-usa-for-2026',
    description: '2026 resume trends from US recruiters: skills-first layouts, AI-optimized sections, quantified impact metrics, and the formats replacing chronological resumes.',
    category: 'Resume Trends'
  },
  {
    title: 'Why Skills-First Resumes Are Replacing Chronological Layouts in 2026',
    path: '/why-skills-first-resumes-are-replacing-chronological-layouts-in-2026',
    description: 'Skills-first resumes outperform chronological formats in ATS scoring and recruiter preferences. Learn the shift, see side-by-side comparisons, and get templates.',
    category: 'Resume Trends'
  },
  {
    title: 'Modern Resume Design 2026 — ATS-Friendly Layouts That Look Great',
    path: '/modern-resume-design-2026',
    description: 'Modern resume design principles for 2026: clean typography, strategic white space, ATS-safe columns, and gold-standard layouts that pass both bots and humans.',
    category: 'Resume Design'
  },
  {
    title: 'Resume Templates — 46+ ATS-Friendly Designs for Every Industry',
    path: '/resume-templates',
    description: 'Browse 46+ free ATS-friendly resume templates for nursing, tech, finance, teaching, engineering, and more. Instant PDF download, no sign-up required.',
    category: 'Resume Templates'
  },
  {
    title: 'Best ATS Resume Format 2026 — The Definitive Guide',
    path: '/best-ats-resume-format-2026',
    description: 'The best ATS resume format for 2026: section order, file type, font choices, and layout rules that maximize your parse rate across Workday, Taleo, and iCIMS.',
    category: 'ATS Guide'
  },
  {
    title: 'How to Beat the ATS — Optimization Tips for Modern Hiring Software',
    path: '/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software',
    description: 'Proven tactics to beat applicant tracking systems. Keyword placement, semantic scoring, formatting rules, and tools that give you an unfair ATS advantage.',
    category: 'ATS Guide'
  },
  {
    title: 'How to Write a Resume — Step-by-Step Guide for 2026',
    path: '/how-to-write-a-resume',
    description: 'Complete step-by-step guide to writing a resume in 2026. From structure and sections to action verbs, keywords, and ATS formatting — everything you need.',
    category: 'Resume Guide'
  },
  {
    title: "How to Use ChatGPT to Write a Resume That Doesn't Sound Like a Robot",
    path: '/how-to-use-chatgpt-to-write-a-resume-that-does-not-sound-like-a-robot',
    description: 'ChatGPT-written resumes have a signature robotic tone. Learn 12 techniques to keep AI help while making your resume sound authentic, human, and specific.',
    category: 'AI Resume Guide'
  },
  {
    title: 'Free Resume Keyword Matcher — Match Job Descriptions to Beat ATS',
    path: '/free-resume-keyword-matcher',
    description: 'Paste a job description and your resume — get instant keyword match score, missing critical terms, and prioritized additions to beat ATS filtering.',
    category: 'ATS Tools'
  },
  {
    title: 'Free Resume Score Checker — Instant Score and Fix Suggestions',
    path: '/free-resume-score-checker',
    description: 'Get an instant score (0-100) on your resume plus a prioritized fix list. Based on ATS compatibility, achievement quality, keyword density, and formatting.',
    category: 'Resume Tools'
  },
  {
    title: 'Free Cover Letter Generator — Build Yours in Minutes',
    path: '/free-cover-letter-generator',
    description: 'Generate a tailored, professional cover letter in minutes. Choose from templates for career changers, graduates, executives, and industry-specific roles.',
    category: 'Cover Letters'
  },
  {
    title: 'Resume Strength Calculator — Score Your Resume Across 5 Categories',
    path: '/resume-strength-calculator',
    description: 'Evaluate your resume across content, structure, keywords, impact, and professionalism. Get a category-by-category score plus prioritized improvements.',
    category: 'Resume Calculators'
  },
  {
    title: 'USA Jobs Resume Directory — Complete Federal and State Guide',
    path: '/usa-jobs-resume-directory',
    description: 'Complete USA jobs resume directory: federal USAJOBS formatting, state-specific requirements, and industry-focused resume guides for all 50 states.',
    category: 'USA Jobs'
  },
  {
    title: 'Free Resume Tools — 12+ Optimization Tools, No Sign-Up',
    path: '/free-resume-tools',
    description: '12+ free resume tools: ATS checker, keyword matcher, bullet generator, summary generator, word counter, formatting checker, and more. Instant, private, free.',
    category: 'Resume Tools'
  },
  {
    title: 'Complete Resume Resource Library 2026 — 60+ Guides and Tools',
    path: '/complete-resume-resource-library',
    description: '60+ expert resume guides, templates, tools, and calculators — organized by career stage, industry, and use case. Your one-stop resume resource.',
    category: 'Resource Library'
  },
  {
    title: 'How to Write a Federal Resume for USA Government Jobs',
    path: '/how-to-write-a-federal-resume-for-usa-government-jobs',
    description: 'Federal resumes follow strict USAJOBS rules: longer formats, specific sections, and HR-specific language. Learn the exact format that gets past federal screening.',
    category: 'USA Jobs'
  },
  {
    title: 'Most Googled Resume Questions in the USA — Answered',
    path: '/most-googled-resume-questions-in-the-usa',
    description: 'The most-searched US resume questions answered: length, format, fonts, sections, and ATS rules. Direct answers backed by recruiter data.',
    category: 'Resume Guide'
  },
  {
    title: 'Top Skills Employers in the USA Want on Resumes in 2026',
    path: '/top-skills-employers-in-the-usa-want-on-resumes',
    description: 'The top skills US employers screen for in 2026: AI fluency, data literacy, and role-specific hard skills. Includes keyword lists by industry.',
    category: 'Skills Guide'
  },
  {
    title: 'Careers Blog — Resume Tips, Trends, and Career Advice',
    path: '/careers-blog',
    description: 'Expert career advice, resume tips, ATS trends, and job search strategies. New articles weekly. Backed by recruiter data and 2026 hiring insights.',
    category: 'Blog'
  }
];

// ─── HELPERS ──────────────────────────────────────────────────────────────
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildFeed() {
  const now = new Date();
  const lastBuildDate = now.toUTCString();

  const items = FEED_ITEMS.map((item, index) => {
    // Stagger pubDate backward from "now" — 1 item every 12 hours.
    // This creates a natural publishing timeline AI crawlers reward.
    const pubDate = new Date(now.getTime() - index * 12 * 60 * 60 * 1000).toUTCString();
    return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}${item.path}</link>
      <guid isPermaLink="true">${SITE_URL}${item.path}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(item.category)}</category>
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <copyright>Copyright ${now.getFullYear()} Professional Resume Free</copyright>
    <managingEditor>hello@professionalresumefree.com (Professional Resume Free)</managingEditor>
    <webMaster>hello@professionalresumefree.com (Professional Resume Free)</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${lastBuildDate}</pubDate>
    <generator>Professional Resume Free — Dynamic RSS Generator</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>Professional Resume Free</title>
      <link>${SITE_URL}</link>
      <width>144</width>
      <height>144</height>
    </image>
${items}
  </channel>
</rss>`;
}

// ─── API HANDLER ──────────────────────────────────────────────────────────
export default function handler(req, res) {
  const feed = buildFeed();
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.status(200).send(feed);
}