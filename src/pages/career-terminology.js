// pages/career-terminology.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

// ============================================================================
// CRITICAL CSS - MATCHES MAIN DIRECTORY STYLING
// ============================================================================
const criticalCSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary: #000000;
  --secondary: #333333;
  --background: #ffffff;
  --card-bg: #f9fafb;
  --border: #e5e7eb;
  --text-light: #4b5563;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
.container { max-width: 1024px; margin: 0 auto; padding: 0 16px; width: 100%; }
@media (min-width: 640px) { .container { padding: 0 24px; } }
.hero { background: var(--background); padding: 40px 0 60px; border-bottom: 1px solid var(--border); text-align: center; }
.hero h1 { font-size: clamp(1.5rem, 5vw, 2.5rem); margin-bottom: 16px; color: #000000; }
.hero p { font-size: 1.1rem; color: #4b5563; max-width: 700px; margin: 0 auto; }
.search-container { margin: 30px auto; max-width: 600px; position: relative; }
.search-input {
  width: 100%; padding: 16px 20px; font-size: 1rem; border: 2px solid var(--border);
  border-radius: 8px; outline: none; transition: border-color 0.2s;
}
.search-input:focus { border-color: var(--primary); }
.glossary-grid { display: grid; gap: 24px; margin: 40px 0; }
.term-card {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px;
  padding: 24px; transition: transform 0.2s; scroll-margin-top: 100px;
}
.term-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.term-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 10px; }
.term-title { font-size: 1.25rem; font-weight: 700; color: #000000; margin: 0; }
.term-anchor { font-size: 0.9rem; color: var(--text-light); text-decoration: none; opacity: 0; transition: opacity 0.2s; }
.term-card:hover .term-anchor, .term-anchor:focus { opacity: 1; }
.term-definition { color: #374151; font-size: 1rem; line-height: 1.6; }
.term-meta { margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); font-size: 0.85rem; color: var(--text-light); display: flex; gap: 16px; flex-wrap: wrap; }
.badge { background: #e5e7eb; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.75rem; }
.alpha-nav { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 30px 0; padding: 16px; background: #f3f4f6; border-radius: 8px; }
.alpha-link {
  text-decoration: none; color: #000000; padding: 6px 12px; border-radius: 4px;
  font-weight: 500; font-size: 0.9rem; border: 1px solid transparent;
}
.alpha-link:hover { background: #e5e7eb; }
.alpha-link.active { background: #000000; color: #ffffff; }
.breadcrumb { padding: 16px 0; background: var(--card-bg); border-bottom: 1px solid var(--border); text-align: center; }
.breadcrumb ol { display: flex; list-style: none; gap: 8px; justify-content: center; font-size: 0.9rem; flex-wrap: wrap; }
.breadcrumb a { color: #000000; text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.no-results { text-align: center; padding: 40px; color: var(--text-light); }
.btn-back { display: inline-block; margin-top: 20px; color: #000000; text-decoration: none; font-weight: 500; border-bottom: 2px solid transparent; }
.btn-back:hover { border-bottom-color: #000000; }
`;

// ============================================================================
// DATA: COMPREHENSIVE CAREER & RESUME GLOSSARY
// ============================================================================
const glossaryData = [
  {
    term: "ATS (Applicant Tracking System)",
    definition: "Software used by employers to filter, rank, and manage job applications automatically. Over 98% of Fortune 500 companies use ATS to screen resumes before a human ever sees them. Optimizing for ATS involves using standard headings, simple formatting, and relevant keywords.",
    category: "Technology",
    related: ["Keyword Optimization", "Resume Parsing"]
  },
  {
    term: "KSA Statements",
    definition: "Knowledge, Skills, and Abilities narratives required specifically for USA federal government resumes (USAJOBS). Unlike private sector resumes, federal resumes often require detailed essays demonstrating how your specific experience matches each KSA criterion listed in the job announcement.",
    category: "Federal Hiring",
    related: ["USAJOBS", "Federal Resume"]
  },
  {
    term: "Prompt Engineering",
    definition: "The skill of crafting precise inputs (prompts) for AI models like ChatGPT to generate high-quality, specific output. In resume writing, this involves telling the AI exactly what role, tone, and metrics to include to avoid generic 'robot-sounding' bullet points.",
    category: "AI & Future of Work",
    related: ["ChatGPT", "AI Optimization"]
  },
  {
    term: "Skills-First Resume",
    definition: "A modern resume format that prioritizes a detailed skills section at the top, followed by work history. This format is increasingly preferred in 2026 as it helps both AI scanners and human recruiters immediately identify candidate fit, especially for career changers.",
    category: "Formats",
    related: ["Hybrid Resume", "Functional Resume"]
  },
  {
    term: "Quantifiable Achievements",
    definition: "Bullet points that include specific numbers, percentages, or dollar amounts to prove impact (e.g., 'Increased sales by 20%' vs. 'Responsible for sales'). AI algorithms and recruiters prioritize resumes with quantified data as it signals measurable success.",
    category: "Content Strategy",
    related: ["STAR Method", "Metrics"]
  },
  {
    term: "USAJOBS",
    definition: "The official job site of the US Federal Government. Resumes submitted here must follow strict formatting guidelines, often requiring 3-5 pages, including salary history, hours worked per week, and specific KSA statements.",
    category: "Federal Hiring",
    related: ["KSA Statements", "Federal Resume"]
  },
  {
    term: "Keyword Stuffing",
    definition: "The negative practice of overloading a resume with keywords in an attempt to trick ATS systems. Modern AI-driven ATS can detect this and may automatically reject the application. Keywords must be integrated naturally into context.",
    category: "ATS Optimization",
    related: ["Keyword Density", "ATS"]
  },
  {
    term: "STAR Method",
    definition: "A structured approach to writing bullet points: Situation, Task, Action, Result. This framework ensures every point tells a complete story of a challenge faced and the measurable outcome achieved.",
    category: "Content Strategy",
    related: ["Quantifiable Achievements", "Bullet Points"]
  },
  {
    term: "Hard Skills",
    definition: "Teachable, measurable abilities such as coding languages (Python, Java), software proficiency (Excel, Salesforce), or certifications (CPA, PMP). These are easily scanned by ATS.",
    category: "Skills",
    related: ["Soft Skills", "Technical Skills"]
  },
  {
    term: "Soft Skills",
    definition: "Interpersonal attributes like communication, leadership, adaptability, and problem-solving. While harder for ATS to parse initially, they are critical for human review and cultural fit assessments.",
    category: "Skills",
    related: ["Hard Skills", "Leadership"]
  },
  {
    term: "Chronological Resume",
    definition: "The traditional resume format listing work history in reverse chronological order. Best for candidates with a linear career path and no employment gaps.",
    category: "Formats",
    related: ["Skills-First Resume", "Hybrid Resume"]
  },
  {
    term: "Hybrid Resume",
    definition: "A combination format that features a robust skills summary at the top followed by a reverse-chronological work history. Often considered the most effective format for 2026 as it satisfies both AI keyword scanning and human narrative preferences.",
    category: "Formats",
    related: ["Skills-First Resume", "ATS"]
  },
  {
    term: "Resume Parsing",
    definition: "The process by which ATS software extracts information (contact info, skills, dates) from a resume file and converts it into a structured digital profile. Complex layouts, graphics, or columns can confuse parsers.",
    category: "Technology",
    related: ["ATS", "Formatting"]
  },
  {
    term: "Transferable Skills",
    definition: "Skills acquired in one job or industry that are applicable to a different role or industry (e.g., project management, communication, data analysis). Crucial for career changers.",
    category: "Career Transition",
    related: ["Career Changer", "Soft Skills"]
  },
  {
    term: "Executive Summary",
    definition: "A 3-4 line professional statement at the top of a resume replacing the outdated 'Objective'. It summarizes years of experience, key achievements, and value proposition tailored to the specific role.",
    category: "Content Strategy",
    related: ["Professional Summary", "Objective Statement"]
  }
];

// Generate Alphabet List
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function CareerTerminology({ lastModified }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState(null);

  const canonicalUrl = `https://www.professionalresumefree.com/career-terminology`;

  // Filter Logic
  const filteredTerms = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter = activeLetter ? item.term.toUpperCase().startsWith(activeLetter) : true;
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, activeLetter]);

  // Group by Letter for Schema (Optional advanced structuring)
  const groupedTerms = useMemo(() => {
    const groups = {};
    filteredTerms.forEach(term => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Generate Schema.org Graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": "Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms",
        "description": "Definitive glossary of resume, hiring, and career terms including ATS, KSA, Prompt Engineering, and USAJOBS definitions for 2026 job seekers.",
        "dateModified": lastModified,
        "isPartOf": { "@id": "https://www.professionalresumefree.com/#website" },
        "breadcrumb": { "@id": "https://www.professionalresumefree.com/#breadcrumb-glossary" }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://www.professionalresumefree.com/career-terminology#set",
        "name": "Professional Resume Free Career Glossary",
        "description": "Authoritative definitions for modern job search, ATS optimization, and federal hiring terminology.",
        "url": canonicalUrl,
        "hasDefinedTerm": glossaryData.map(term => ({
          "@type": "DefinedTerm",
          "name": term.term,
          "description": term.definition,
          "inDefinedTermSet": canonicalUrl,
          "category": term.category
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.professionalresumefree.com/#breadcrumb-glossary",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.professionalresumefree.com" },
          { "@type": "ListItem", "position": 2, "name": "Career Terminology", "item": canonicalUrl }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <title>Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms (2026)</title>
        <meta name="description" content="Definitive glossary of resume, hiring, and career terms. Definitions for ATS, KSA, Prompt Engineering, USAJOBS, and more. Updated for 2026 job market." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms" />
        <meta property="og:description" content="Master the language of hiring. Definitions for ATS, KSA, Prompt Engineering, and more." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li aria-current="page">Career Terminology</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>Career Terminology Glossary</h1>
            <p>
              Master the language of modern hiring. From <strong>ATS algorithms</strong> to <strong>Federal KSA statements</strong>, 
              get authoritative definitions for every term you need to land a job in 2026.
            </p>
            
            {/* Search Bar */}
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search terms (e.g., 'ATS', 'KSA', 'Prompt Engineering')..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveLetter(null); // Reset letter filter on search
                }}
                aria-label="Search glossary terms"
              />
            </div>

            {/* Alphabet Nav */}
            {!searchTerm && (
              <nav className="alpha-nav" aria-label="Alphabetical index">
                <button 
                  className={`alpha-link ${activeLetter === null ? 'active' : ''}`}
                  onClick={() => setActiveLetter(null)}
                >
                  All
                </button>
                {alphabet.map(letter => {
                  // Check if any term starts with this letter
                  const hasTerm = glossaryData.some(t => t.term.startsWith(letter));
                  if (!hasTerm) return null;
                  return (
                    <button
                      key={letter}
                      className={`alpha-link ${activeLetter === letter ? 'active' : ''}`}
                      onClick={() => setActiveLetter(letter)}
                      aria-label={`Filter by letter ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>
        </section>

        {/* Results Grid */}
        <section className="container">
          {filteredTerms.length > 0 ? (
            <div className="glossary-grid">
              {Object.entries(groupedTerms).map(([letter, terms]) => (
                <div key={letter} id={`letter-${letter}`} style={{ scrollMarginTop: '100px' }}>
                  {!searchTerm && (
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', borderBottom: '2px solid #000', display: 'inline-block' }}>
                      {letter}
                    </h2>
                  )}
                  {terms.map((item, idx) => (
                    <article key={idx} className="term-card" id={item.term.replace(/\s+/g, '-').toLowerCase()}>
                      <div className="term-header">
                        <h3 className="term-title">{item.term}</h3>
                        <a href={`#${item.term.replace(/\s+/g, '-').toLowerCase()}`} className="term-anchor" aria-label="Link to this definition">#</a>
                      </div>
                      <p className="term-definition">{item.definition}</p>
                      <div className="term-meta">
                        <span className="badge">{item.category}</span>
                        {item.related && item.related.length > 0 && (
                          <span>Related: {item.related.join(", ")}</span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No terms found</h3>
              <p>Try adjusting your search or browse all terms.</p>
              <button onClick={() => { setSearchTerm(""); setActiveLetter(null); }} className="btn-back">Clear Filters</button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '60px' }}>
            <Link href="/usa-jobs-resume-directory" className="btn-back">
              ← Back to USA Jobs Resume Directory
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lastModified: new Date().toISOString()
    }
  };
}