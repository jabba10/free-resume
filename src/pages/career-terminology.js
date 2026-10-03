// pages/career-terminology.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import {
  FiHome, FiChevronRight, FiFileText, FiArrowRight, FiSearch,
  FiBookOpen, FiTarget, FiTrendingUp, FiBriefcase, FiAward,
  FiCheckCircle, FiDatabase, FiUsers, FiGlobe, FiCpu, FiClock,
  FiAlertCircle, FiEdit, FiLayers, FiShield, FiStar
} from 'react-icons/fi';

// ============================================================================
// CAREERFLOW EXECUTIVE BRAND DESIGN TOKENS (matching main directory pages)
// ============================================================================
const executiveDesignTokens = `
  :root {
    --bg-page: #131315; --bg-surface-lowest: #0e0e10; --bg-surface-low: #1c1b1d;
    --bg-surface: #201f21; --bg-surface-high: #2a2a2c;
    --text-primary: #e5e1e4; --text-secondary: #c5bfc8; --text-muted: #9d95a0;
    --accent-primary: #f2ca50; --accent-primary-container: #d4af37;
    --accent-on-primary: #3c2f00; --accent-primary-hover: #f7d86e;
    --border-gold-filament: rgba(212,175,55,0.3); --border-gold-filament-strong: rgba(212,175,55,0.5);
    --border-glass: rgba(212,175,55,0.15); --error-color: #ffb4ab; --warning-color: #ffb74d;
    --success-color: #4caf50; --info-color: #64b5f6;
    --font-display: 'Playfair Display','Georgia',serif;
    --font-body: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    --font-size-display-lg: clamp(2.5rem,6vw,4rem); --font-size-display-md: clamp(2rem,5vw,3rem);
    --font-size-headline-lg: clamp(1.5rem,4vw,2rem); --font-size-headline-md: clamp(1.35rem,3.5vw,1.75rem);
    --font-size-title-md: clamp(1.1rem,2.5vw,1.25rem); --font-size-body-lg: clamp(1rem,2vw,1.125rem);
    --font-size-body-md: 1rem; --font-size-body-sm: 0.875rem; --font-size-label-sm: 0.6875rem;
    --line-height-display: 1.1; --line-height-headline: 1.2; --line-height-body: 1.6;
    --font-weight-semibold: 600; --font-weight-bold: 700; --font-weight-extrabold: 800;
    --letter-spacing-tight: -0.02em; --letter-spacing-caps: 0.08em;
    --section-gap-md: clamp(4rem,8vw,6rem); --section-gap-lg: clamp(5rem,10vw,8rem);
    --content-max-width: 1280px; --gutter-desktop: clamp(1.5rem,5vw,2.5rem); --gutter-mobile: clamp(1rem,4vw,1.5rem);
    --shadow-gold-glow-sm: 0 0 10px rgba(242,202,80,0.3);
    --shadow-card: 0 4px 12px rgba(0,0,0,0.3); --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(242,202,80,0.05);
    --transition-fast: 150ms; --transition-medium: 250ms; --easing-smooth: cubic-bezier(0.65,0,0.35,1);
    --glass-blur: 20px; --glass-padding: clamp(1.5rem,4vw,2.5rem);
    --btn-primary-bg: #f2ca50; --btn-primary-text: #3c2f00; --btn-primary-padding: 0.875rem 2rem;
    --btn-outline-border: rgba(212,175,55,0.5); --btn-outline-text: #f2ca50;
    --card-bg: rgba(28,27,29,0.6); --card-border: 0.5px solid rgba(212,175,55,0.15);
    --card-padding: clamp(1.5rem,4vw,2.5rem);
    --input-bg: #1c1b1d; --input-border: 1px solid rgba(229,225,228,0.15);
    --input-text: #e5e1e4; --input-placeholder: rgba(229,225,228,0.4);
    --input-radius: 0.375rem; --input-padding: 0.875rem 1.125rem;
  }
  * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
  body { background-color:var(--bg-page); color:var(--text-primary); font-family:var(--font-body); font-size:var(--font-size-body-md); line-height:var(--line-height-body); -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  h1,h2,h3 { font-family:var(--font-display); color:var(--text-primary); letter-spacing:var(--letter-spacing-tight); word-wrap:break-word; }
  h1 { font-size:var(--font-size-display-lg); line-height:var(--line-height-display); font-weight:var(--font-weight-bold); margin-bottom:1rem; }
  h2 { font-size:var(--font-size-display-md); line-height:var(--line-height-headline); font-weight:var(--font-weight-bold); }
  h3 { font-size:var(--font-size-headline-lg); line-height:var(--line-height-headline); font-weight:var(--font-weight-semibold); font-family:var(--font-body); }
  p { color:var(--text-secondary); font-size:var(--font-size-body-lg); line-height:var(--line-height-body); }
  strong { color:var(--text-primary); font-weight:var(--font-weight-semibold); }
  a { color:var(--accent-primary); transition:color var(--transition-fast); text-decoration:none; }
  a:hover { color:var(--accent-primary-hover); }
  .gradient-text { background:linear-gradient(135deg,#f2ca50 0%,#d4af37 50%,#ffe088 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .section-container { max-width:var(--content-max-width); margin:0 auto; padding:0 var(--gutter-desktop); width:100%; }
  @media (max-width:768px) { .section-container { padding:0 var(--gutter-mobile); } }
  .skip-link { position:absolute; top:-40px; left:50%; transform:translateX(-50%); background:var(--accent-primary); color:var(--accent-on-primary); padding:8px 16px; z-index:100; border-radius:0 0 0.25rem 0.25rem; font-weight:var(--font-weight-semibold); }
  .skip-link:focus { top:0; }
  .btn-primary { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:var(--btn-primary-bg); color:var(--btn-primary-text); border:none; border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.3); text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-primary:hover { background:var(--accent-primary-hover); transform:translateY(-2px); box-shadow:var(--shadow-gold-glow-sm); color:var(--btn-primary-text); }
  .btn-outline { display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:var(--btn-primary-padding); background:transparent; color:var(--btn-outline-text); border:0.5px solid var(--btn-outline-border); border-radius:0.25rem; font-size:0.875rem; font-weight:600; letter-spacing:0.02em; transition:all var(--transition-medium); cursor:pointer; text-decoration:none; min-width:200px; white-space:nowrap; }
  .btn-outline:hover { background:rgba(242,202,80,0.08); border-color:rgba(212,175,55,0.8); transform:translateY(-2px); color:var(--btn-outline-text); }
  .card-executive { background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); -webkit-backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; padding:var(--card-padding); transition:all var(--transition-medium) var(--easing-smooth); height:100%; display:flex; flex-direction:column; }
  .card-executive:hover { background:rgba(32,31,33,0.8); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); box-shadow:var(--shadow-card-hover); }
  .section { width:100%; padding:var(--section-gap-md) 0; }
  .section-alt { background:var(--bg-surface-lowest); }
  .section-header { text-align:center; margin-bottom:clamp(2rem,6vw,3rem); }
  .section-title { margin-bottom:1rem; max-width:900px; margin-left:auto; margin-right:auto; }
  .section-subtitle { font-size:var(--font-size-body-lg); color:var(--text-secondary); max-width:700px; margin:0 auto; }
  .breadcrumb-nav { padding:1rem 0; background:var(--bg-surface-lowest); border-bottom:0.5px solid var(--border-gold-filament); width:100%; }
  .breadcrumb-nav ol { list-style:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; flex-wrap:wrap; }
  .breadcrumb-nav a { color:var(--text-secondary); font-size:var(--font-size-body-sm); display:inline-flex; align-items:center; gap:0.25rem; }
  .breadcrumb-nav a:hover { color:var(--accent-primary); }
  .breadcrumb-nav [aria-current="page"] { color:var(--accent-primary); font-weight:var(--font-weight-semibold); }
  .badge { display:inline-block; background:rgba(242,202,80,0.1); color:var(--accent-primary); padding:0.5rem 1.25rem; border-radius:9999px; font-size:var(--font-size-body-sm); font-weight:500; letter-spacing:var(--letter-spacing-caps); text-transform:uppercase; margin-bottom:1.5rem; border:0.5px solid var(--border-gold-filament); }
  .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; margin:2rem auto; width:100%; }
  @media (min-width:640px) { .grid { grid-template-columns:repeat(2,1fr); } }
  @media (min-width:1024px) { .grid { grid-template-columns:repeat(3,1fr); } }
  .stat-card { text-align:center; padding:clamp(1rem,3vw,1.5rem); background:var(--card-bg); backdrop-filter:blur(var(--glass-blur)); border:var(--card-border); border-radius:0.5rem; min-width:0; }
  .stat-number { font-size:clamp(1.2rem,3vw,1.8rem); font-weight:var(--font-weight-bold); color:var(--accent-primary); display:block; font-family:var(--font-display); word-break:break-word; overflow-wrap:break-word; }
  .stat-label { color:var(--text-secondary); font-size:var(--font-size-label-sm); word-break:break-word; }
  .feature-badge { display:inline-flex; align-items:center; gap:0.25rem; background:rgba(242,202,80,0.1); padding:0.25rem 0.75rem; border-radius:9999px; font-size:var(--font-size-body-sm); color:var(--accent-primary); border:0.5px solid var(--border-gold-filament); }
  .text-small { font-size:var(--font-size-body-sm); color:var(--text-muted); }
  .text-success { color:var(--success-color); font-weight:var(--font-weight-semibold); }
  .text-danger { color:var(--error-color); font-weight:var(--font-weight-semibold); }
  .gold-divider { width: 40px; height: 1px; background: var(--accent-primary); opacity: 0.6; margin: 1.5rem auto; }
  .input-group { margin-bottom: 1.5rem; }
  .input-label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 500; font-size: var(--font-size-body-sm); }
  .input-field { width: 100%; padding: var(--input-padding); background: var(--input-bg); border: var(--input-border); border-radius: var(--input-radius); color: var(--input-text); font-size: 1rem; font-family: var(--font-body); transition: border-color var(--transition-fast); }
  .input-field:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(242,202,80,0.1); }
  .input-field::placeholder { color: var(--input-placeholder); }
  .search-container { margin: 2rem auto 1rem; max-width: 600px; position: relative; width: 100%; }
  .search-input { width: 100%; padding: 1rem 1.25rem 1rem 3rem; font-size: 1rem; background: var(--input-bg); border: var(--input-border); border-radius: var(--input-radius); color: var(--input-text); transition: border-color var(--transition-fast); font-family: var(--font-body); }
  .search-input:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(242,202,80,0.1); }
  .search-input::placeholder { color: var(--input-placeholder); }
  .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--accent-primary); pointer-events: none; }
  .alpha-nav { display: flex; flex-wrap: wrap; gap: 0.375rem; justify-content: center; margin: 1.5rem auto; padding: 1rem; background: var(--card-bg); border-radius: 0.5rem; border: var(--card-border); max-width: 800px; }
  .alpha-link { text-decoration: none; color: var(--text-secondary); padding: 0.375rem 0.75rem; border-radius: 0.25rem; font-weight: 500; font-size: 0.875rem; border: 0.5px solid transparent; background: transparent; cursor: pointer; transition: all var(--transition-fast); font-family: var(--font-body); }
  .alpha-link:hover { background: rgba(242,202,80,0.08); color: var(--accent-primary); }
  .alpha-link.active { background: var(--accent-primary); color: var(--accent-on-primary); border-color: var(--accent-primary); }
  .faq-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; max-width: 900px; margin: 0 auto; }
  @media (min-width:768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
  .faq-item { background: var(--card-bg); backdrop-filter: blur(var(--glass-blur)); border: var(--card-border); border-radius: 0.75rem; padding: 1.5rem; height: 100%; }
  .faq-question { font-size: var(--font-size-title-md); font-weight: var(--font-weight-semibold); color: var(--text-primary); margin-bottom: 0.75rem; }
  .geo-link-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
  .geo-link-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.25rem 1rem; background: var(--card-bg); backdrop-filter: blur(var(--glass-blur)); border: var(--card-border); border-radius: 0.5rem; text-decoration: none; color: inherit; transition: all var(--transition-medium) var(--easing-smooth); min-height: 100px; text-align: center; }
  .geo-link-card:hover { border-color: var(--accent-primary-container); transform: translateY(-3px); box-shadow: var(--shadow-card-hover); color: inherit; }

  /* ================================================
     GLOSSARY GRID - 3 COLUMNS ON LARGE SCREENS
     1 COLUMN ON SMALL SCREENS - CENTERED CARDS
     ================================================ */
  .glossary-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 2rem auto;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .glossary-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    .glossary-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
  }

  /* Term Card - fills its grid cell, centered */
  .term-card {
    background: var(--card-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--card-border);
    border-radius: 0.5rem;
    padding: clamp(1.25rem, 3vw, 1.75rem);
    transition: all var(--transition-medium) var(--easing-smooth);
    scroll-margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
  }
  .term-card:hover {
    background: rgba(32,31,33,0.8);
    border-color: rgba(212,175,55,0.3);
    transform: translateY(-2px);
    box-shadow: var(--shadow-card-hover);
  }
  .term-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.875rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .term-title {
    font-size: var(--font-size-title-md);
    font-weight: var(--font-weight-bold);
    color: var(--text-primary);
    margin: 0;
    font-family: var(--font-display);
  }
  .term-anchor {
    font-size: 0.875rem;
    color: var(--text-muted);
    text-decoration: none;
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  .term-card:hover .term-anchor,
  .term-anchor:focus {
    opacity: 1;
    color: var(--accent-primary);
  }
  .term-definition {
    color: var(--text-secondary);
    font-size: var(--font-size-body-sm);
    line-height: 1.7;
  }
  .term-meta {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 0.5px solid var(--border-gold-filament);
    font-size: 0.8125rem;
    color: var(--text-muted);
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
  }
  .term-category-badge {
    background: rgba(242,202,80,0.1);
    color: var(--accent-primary);
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.6875rem;
    border: 0.5px solid var(--border-gold-filament);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .no-results {
    text-align: center;
    padding: 3rem 1.5rem;
    color: var(--text-muted);
    background: var(--card-bg);
    border-radius: 0.75rem;
    border: var(--card-border);
    max-width: 600px;
    margin: 0 auto;
  }
  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: 0.5px solid var(--border-gold-filament);
    border-radius: 0.375rem;
    transition: all var(--transition-fast);
    background: transparent;
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.875rem;
  }
  .btn-back:hover {
    background: rgba(242,202,80,0.08);
    border-color: var(--accent-primary);
    transform: translateY(-1px);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width:640px) {
    .btn-primary, .btn-outline { width: 100%; min-width: auto; }
    .alpha-nav { padding: 0.75rem 0.5rem; }
    .alpha-link { padding: 0.25rem 0.5rem; font-size: 0.8125rem; }
    .glossary-grid { max-width: 100%; gap: 1rem; }
  }

  /* ========== INTERNAL LINKS STYLES (beneath guarantee text) ========== */
  .cf-internal-links-inline {
    margin-top: 48px;
    padding-top: 48px;
    border-top: 0.5px solid rgba(153, 144, 124, 0.15);
    text-align: left;
  }
  .cf-internal-links-inline-header {
    margin-bottom: 28px;
    text-align: center;
  }
  .cf-internal-links-inline-title {
    font-family: var(--font-display);
    font-size: 24px;
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin: 0 0 8px;
  }
  .cf-internal-links-inline-subtitle {
    font-family: var(--font-body);
    font-size: 15px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
  }
  .cf-internal-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  .cf-internal-link-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 22px;
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 0.5px solid var(--border-gold-filament);
    border-radius: 4px;
    text-decoration: none;
    transition: all 250ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  .cf-internal-link-card:hover {
    border-color: rgba(212, 175, 55, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .cf-internal-link-title {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    transition: color 150ms ease;
  }
  .cf-internal-link-card:hover .cf-internal-link-title {
    color: var(--accent-primary);
  }
  .cf-internal-link-arrow {
    color: var(--accent-primary);
    font-size: 18px;
    transition: all 250ms ease;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .cf-internal-link-card:hover .cf-internal-link-arrow {
    color: var(--accent-primary-hover);
    transform: translateX(4px);
  }
  @media (max-width: 640px) {
    .cf-internal-links-inline { margin-top: 28px; padding-top: 28px; }
    .cf-internal-links-inline-title { font-size: 18px; }
    .cf-internal-links-inline-subtitle { font-size: 13px; }
    .cf-internal-link-card { padding: 14px 16px; }
    .cf-internal-link-title { font-size: 14px; }
    .cf-internal-links-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .cf-internal-links-inline { margin-top: 36px; padding-top: 36px; }
    .cf-internal-links-inline-title { font-size: 20px; }
  }
`;

// ============================================================================
// DATA: COMPREHENSIVE CAREER & RESUME GLOSSARY
// ============================================================================
const glossaryData = [
  { term: "ATS (Applicant Tracking System)", definition: "Software used by employers to filter, rank, and manage job applications automatically. Over 98% of Fortune 500 companies use ATS to screen resumes before a human ever sees them. Optimizing for ATS involves using standard headings, simple formatting, and relevant keywords.", category: "Technology", related: ["Keyword Optimization", "Resume Parsing"] },
  { term: "KSA Statements", definition: "Knowledge, Skills, and Abilities narratives required specifically for USA federal government resumes (USAJOBS). Unlike private sector resumes, federal resumes often require detailed essays demonstrating how your specific experience matches each KSA criterion listed in the job announcement.", category: "Federal Hiring", related: ["USAJOBS", "Federal Resume"] },
  { term: "Prompt Engineering", definition: "The skill of crafting precise inputs (prompts) for AI models like ChatGPT to generate high-quality, specific output. In resume writing, this involves telling the AI exactly what role, tone, and metrics to include to avoid generic 'robot-sounding' bullet points.", category: "AI & Future of Work", related: ["ChatGPT", "AI Optimization"] },
  { term: "Skills-First Resume", definition: "A modern resume format that prioritizes a detailed skills section at the top, followed by work history. This format is increasingly preferred in 2026 as it helps both AI scanners and human recruiters immediately identify candidate fit, especially for career changers.", category: "Formats", related: ["Hybrid Resume", "Functional Resume"] },
  { term: "Quantifiable Achievements", definition: "Bullet points that include specific numbers, percentages, or dollar amounts to prove impact (e.g., 'Increased sales by 20%' vs. 'Responsible for sales'). AI algorithms and recruiters prioritize resumes with quantified data as it signals measurable success.", category: "Content Strategy", related: ["STAR Method", "Metrics"] },
  { term: "USAJOBS", definition: "The official job site of the US Federal Government. Resumes submitted here must follow strict formatting guidelines, often requiring 3-5 pages, including salary history, hours worked per week, and specific KSA statements.", category: "Federal Hiring", related: ["KSA Statements", "Federal Resume"] },
  { term: "Keyword Stuffing", definition: "The negative practice of overloading a resume with keywords in an attempt to trick ATS systems. Modern AI-driven ATS can detect this and may automatically reject the application. Keywords must be integrated naturally into context.", category: "ATS Optimization", related: ["Keyword Density", "ATS"] },
  { term: "STAR Method", definition: "A structured approach to writing bullet points: Situation, Task, Action, Result. This framework ensures every point tells a complete story of a challenge faced and the measurable outcome achieved.", category: "Content Strategy", related: ["Quantifiable Achievements", "Bullet Points"] },
  { term: "Hard Skills", definition: "Teachable, measurable abilities such as coding languages (Python, Java), software proficiency (Excel, Salesforce), or certifications (CPA, PMP). These are easily scanned by ATS.", category: "Skills", related: ["Soft Skills", "Technical Skills"] },
  { term: "Soft Skills", definition: "Interpersonal attributes like communication, leadership, adaptability, and problem-solving. While harder for ATS to parse initially, they are critical for human review and cultural fit assessments.", category: "Skills", related: ["Hard Skills", "Leadership"] },
  { term: "Chronological Resume", definition: "The traditional resume format listing work history in reverse chronological order. Best for candidates with a linear career path and no employment gaps.", category: "Formats", related: ["Skills-First Resume", "Hybrid Resume"] },
  { term: "Hybrid Resume", definition: "A combination format that features a robust skills summary at the top followed by a reverse-chronological work history. Often considered the most effective format for 2026 as it satisfies both AI keyword scanning and human narrative preferences.", category: "Formats", related: ["Skills-First Resume", "ATS"] },
  { term: "Resume Parsing", definition: "The process by which ATS software extracts information (contact info, skills, dates) from a resume file and converts it into a structured digital profile. Complex layouts, graphics, or columns can confuse parsers.", category: "Technology", related: ["ATS", "Formatting"] },
  { term: "Transferable Skills", definition: "Skills acquired in one job or industry that are applicable to a different role or industry (e.g., project management, communication, data analysis). Crucial for career changers.", category: "Career Transition", related: ["Career Changer", "Soft Skills"] },
  { term: "Executive Summary", definition: "A 3-4 line professional statement at the top of a resume replacing the outdated 'Objective'. It summarizes years of experience, key achievements, and value proposition tailored to the specific role.", category: "Content Strategy", related: ["Professional Summary", "Objective Statement"] },
  { term: "Boolean Search", definition: "A search methodology using operators like AND, OR, NOT to combine keywords. Recruiters and ATS systems use Boolean logic to find candidates with specific skill combinations. Understanding Boolean helps job seekers optimize their resume keywords.", category: "Technology", related: ["Keyword Optimization", "ATS"] },
  { term: "Career Pivot", definition: "A strategic move from one career field to another, often leveraging transferable skills. Unlike a full career change, a pivot builds on existing expertise and typically requires less retraining.", category: "Career Transition", related: ["Transferable Skills", "Career Changer"] },
  { term: "Cover Letter", definition: "A one-page document accompanying a resume that explains your interest in a specific role and how your background matches the requirements. Modern ATS also parse cover letters, so keyword optimization applies here too.", category: "Job Search", related: ["Resume", "Application"] },
  { term: "Curriculum Vitae (CV)", definition: "A comprehensive document detailing academic and professional history, typically used for academic, medical, or research positions. Longer than a resume (often 3+ pages) and includes publications, presentations, and grants.", category: "Formats", related: ["Resume", "Academic CV"] },
  { term: "Diversity Statement", definition: "A short essay increasingly requested in academic and executive job applications that describes your commitment to diversity, equity, and inclusion. Often required in addition to a resume and cover letter.", category: "Application Materials", related: ["Cover Letter", "Teaching Statement"] },
  { term: "Employment Gap", definition: "A period without formal employment in a candidate's work history. Modern recruiters are more understanding of gaps (e.g., caregiving, health, education), but resume strategies should address them proactively when relevant.", category: "Career Transition", related: ["Functional Resume", "Skills-First Resume"] },
  { term: "Functional Resume", definition: "A format that emphasizes skills and experience over chronological work history. Effective for candidates with employment gaps or career changers, though less ATS-friendly than chronological or hybrid formats.", category: "Formats", related: ["Skills-First Resume", "Chronological Resume"] },
  { term: "Greenhouse", definition: "A popular ATS and recruiting software platform used by many tech companies. Known for its structured hiring approach and integrations with job boards. Optimizing for Greenhouse involves using clean formatting and relevant keywords.", category: "Technology", related: ["ATS", "Lever"] },
  { term: "Lever", definition: "An ATS and CRM platform used widely in tech and startup hiring. Known for its collaborative features and integration with LinkedIn. Similar to Greenhouse, it parses standard resume formats effectively.", category: "Technology", related: ["ATS", "Greenhouse"] },
  { term: "Workday", definition: "An enterprise HR and ATS platform used by many large corporations. Known for its robust screening features and detailed application forms. Workday often requires complete work history with specific date formats.", category: "Technology", related: ["ATS", "Taleo"] },
  { term: "Taleo", definition: "An older but still widely used ATS platform, particularly in enterprise and government hiring. Taleo is known for its strict parsing rules and preference for simple .docx or .pdf formats.", category: "Technology", related: ["ATS", "Workday"] },
  { term: "LinkedIn Optimization", definition: "The process of enhancing your LinkedIn profile for visibility to recruiters and ATS systems. Includes keyword-rich headlines, detailed skills sections, and consistent formatting that matches your resume.", category: "Job Search", related: ["Personal Branding", "Networking"] },
  { term: "Personal Branding", definition: "The practice of marketing yourself as a professional with a distinct value proposition. In resumes and LinkedIn profiles, personal branding involves consistent messaging across your summary, skills, and achievements.", category: "Job Search", related: ["Executive Summary", "LinkedIn Optimization"] },
  { term: "Niche Keywords", definition: "Industry-specific terms that are highly relevant to a particular role or field. Including niche keywords (e.g., 'Kubernetes' for DevOps roles) signals expertise and helps your resume rank higher in ATS and recruiter searches.", category: "ATS Optimization", related: ["Keyword Optimization", "Hard Skills"] },
  { term: "Reference List", definition: "A separate document listing professional contacts who can vouch for your work. Unlike the outdated practice of including references on the resume, modern applications request references only when needed.", category: "Application Materials", related: ["Resume", "Cover Letter"] },
  { term: "Resume Gap Explanation", definition: "A brief, positive framing of an employment gap in a cover letter or interview. Modern employers value transparency; the explanation should focus on what you learned or accomplished during the gap period.", category: "Career Transition", related: ["Employment Gap", "Cover Letter"] },
  { term: "Skill Gap Analysis", definition: "The process of comparing your current skills against those required for a target role. Identifying skill gaps is the first step to a strategic upskilling plan, whether through courses, certifications, or hands-on projects.", category: "Career Development", related: ["Transferable Skills", "Hard Skills"] },
  { term: "Upskilling", definition: "The practice of learning new skills to remain competitive in your current field or to prepare for a career pivot. Upskilling through certifications, online courses, or projects is increasingly valued by employers.", category: "Career Development", related: ["Skill Gap Analysis", "Certifications"] },
  { term: "Reskilling", definition: "Learning entirely new skills to transition into a different role or industry. Common in tech (e.g., moving from marketing to UX design) and often requires formal training or bootcamps.", category: "Career Development", related: ["Career Pivot", "Upskilling"] },
  { term: "Employer Branding", definition: "How a company presents itself as an employer to attract talent. Job seekers can use employer branding insights (e.g., company values, culture) to tailor resumes and cover letters for better fit.", category: "Job Search", related: ["Personal Branding", "Cover Letter"] },
  { term: "Networking", definition: "The ongoing process of building professional relationships that can lead to job opportunities. Effective networking involves informational interviews, LinkedIn engagement, and industry events—not just asking for jobs.", category: "Job Search", related: ["LinkedIn Optimization", "Personal Branding"] },
  { term: "Informational Interview", definition: "A conversation with a professional in your target field to learn about their role, company, or industry. Informational interviews are a powerful networking tool and can lead to referrals or mentorship.", category: "Job Search", related: ["Networking", "Career Development"] },
  { term: "Behavioral Interview", definition: "A job interview format where candidates are asked to describe past experiences demonstrating specific competencies (e.g., 'Tell me about a time you led a team'). The STAR method is the recommended framework for answering.", category: "Job Search", related: ["STAR Method", "Interview Tips"] },
  { term: "Technical Interview", definition: "An interview focused on assessing role-specific technical skills, such as coding, data analysis, or design challenges. Common in tech, engineering, and finance roles. Preparation often involves mock interviews and portfolio review.", category: "Job Search", related: ["Portfolio", "Interview Tips"] },
  { term: "Portfolio", definition: "A curated collection of work samples that demonstrates your skills and accomplishments. Increasingly required for creative, tech, and UX roles. Portfolio links should be included on the resume and LinkedIn profile.", category: "Application Materials", related: ["Personal Branding", "Resume"] },
  { term: "Salary Negotiation", definition: "The process of discussing compensation (base salary, bonuses, benefits) with a potential employer. Data-driven negotiation, using industry benchmarks and your value proposition, often results in higher offers.", category: "Job Search", related: ["Compensation", "Offer Letter"] },
  { term: "Total Compensation", definition: "The full value of a job offer, including base salary, bonuses, equity, retirement contributions, health insurance, and other benefits. Understanding total compensation is essential for fair negotiation.", category: "Job Search", related: ["Salary Negotiation", "Compensation"] },
  { term: "Equity Compensation", definition: "Non-cash compensation in the form of company stock or stock options. Common in startups and tech companies. Equity can significantly increase total compensation but carries risk depending on company performance.", category: "Compensation", related: ["Total Compensation", "Salary Negotiation"] },
  { term: "Remote Work Readiness", definition: "The skills, tools, and mindset required to be effective in a remote or hybrid work environment. Resume keywords like 'async communication', 'Slack', 'Zoom', and 'remote collaboration' signal readiness.", category: "Career Development", related: ["Soft Skills", "Skills-First Resume"] },
  { term: "Onboarding", definition: "The process of integrating a new employee into an organization, including training, introductions, and setup. Candidates can prepare for onboarding by asking about expectations and team structure during the offer stage.", category: "Job Search", related: ["Offer Letter", "Interview Tips"] }
];

// Generate Alphabet List
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// FAQ Data for SEO
const faqData = [
  { question: "What is an ATS and why does it matter?", answer: "An Applicant Tracking System (ATS) is software that automatically screens and ranks job applications. Over 98% of Fortune 500 companies use ATS, so optimizing your resume for these systems is essential to get past the initial screening and reach human recruiters." },
  { question: "What is the difference between a resume and a CV?", answer: "A resume is a concise 1-2 page summary of work experience and skills, used primarily in the private sector. A CV (Curriculum Vitae) is a longer, comprehensive document used for academic, medical, or research positions that details publications, presentations, and grants." },
  { question: "What are KSA statements and when do I need them?", answer: "KSA (Knowledge, Skills, and Abilities) statements are detailed essays required for many USA federal government jobs. They demonstrate how your specific experience matches each criterion listed in the job announcement. Federal resumes submitted via USAJOBS often require KSAs." },
  { question: "How do I use AI (like ChatGPT) to write my resume?", answer: "Use prompt engineering to provide specific context: role, industry, metrics, and tone. AI can help draft bullet points and summaries, but you should always review and personalize the output to avoid generic 'robot-sounding' content." },
  { question: "What is the best resume format for 2026?", answer: "The hybrid resume—a combination of a skills summary at the top and reverse-chronological work history—is widely considered the most effective format for 2026. It satisfies both ATS keyword scanning and human recruiters' preference for clear career narratives." },
  { question: "What are transferable skills and why do they matter?", answer: "Transferable skills are abilities you've developed in one role or industry that apply to another (e.g., project management, communication, data analysis). They are crucial for career changers and pivoting professionals, as they demonstrate value regardless of industry context." }
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function CareerTerminology({ lastModified }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState(null);
  const currentYear = new Date().getFullYear();
  const canonicalUrl = `https://professionalresumefree.com/career-terminology`;

  // NEW INTERNAL LINKS
  const newInternalLinks = [
    { target: "/comprehensive-resume-guide-2026", title: "Comprehensive Resume Guide 2026" },
    { target: "/complete-resume-resource-library", title: "Complete Resume Resource Library" },
    { target: "/careers-blog", title: "Careers Blog Articles" },
    { target: "/how-to-write-a-resume", title: "How to Write a Resume" },
    { target: "/interview-tips", title: "Job Interview Tips" }
  ];

  // Filter Logic
  const filteredTerms = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter = activeLetter ? item.term.toUpperCase().startsWith(activeLetter) : true;
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, activeLetter]);

  // Long-tail keywords
  const longTailKeywords = [
    `career terminology glossary ${currentYear}`,
    "ATS definition and meaning",
    "KSA statements federal resume guide",
    "resume terminology dictionary",
    "job search glossary for professionals",
    "prompt engineering for resumes",
    "USAJOBS federal resume glossary"
  ];

  // Comprehensive Schema.org Graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": canonicalUrl, "url": canonicalUrl, "name": `Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms (${currentYear})`, "description": `Definitive glossary of resume, hiring, and career terms including ATS, KSA, Prompt Engineering, and USAJOBS definitions for ${currentYear} job seekers.`, "dateModified": lastModified, "datePublished": `${currentYear}-01-15`, "inLanguage": "en-US", "isPartOf": { "@id": "https://professionalresumefree.com/#website" }, "breadcrumb": { "@id": `${canonicalUrl}#breadcrumb` } },
      { "@type": "WebSite", "@id": "https://professionalresumefree.com/#website", "url": "https://professionalresumefree.com", "name": "Professional Resume Free", "description": "Free ATS-Optimized Resume Templates and Career Resources", "publisher": { "@type": "Organization", "name": "Professional Resume Free", "logo": { "@type": "ImageObject", "url": "https://professionalresumefree.com/logo.png" } } },
      { "@type": "DefinedTermSet", "@id": `${canonicalUrl}#set`, "name": "Professional Resume Free Career Glossary", "description": `Authoritative definitions for modern job search, ATS optimization, and federal hiring terminology. Updated ${currentYear}.`, "url": canonicalUrl, "hasDefinedTerm": glossaryData.map(term => ({ "@type": "DefinedTerm", "name": term.term, "description": term.definition, "inDefinedTermSet": `${canonicalUrl}#set`, "category": term.category })) },
      { "@type": "BreadcrumbList", "@id": `${canonicalUrl}#breadcrumb`, "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" }, { "@type": "ListItem", "position": 2, "name": "Career Terminology", "item": canonicalUrl } ] },
      { "@type": "FAQPage", "@id": `${canonicalUrl}#faq`, "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
    ]
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: executiveDesignTokens }} />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet" />
        
        <html lang="en-US" />
        
        <title>{`Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms (${currentYear})`}</title>
        <meta name="description" content={`Definitive glossary of resume, hiring, and career terms. Definitions for ATS, KSA, Prompt Engineering, USAJOBS, and 40+ more terms. Updated for ${currentYear} job market. Free, no sign-up.`} />
        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content={`career terminology, resume glossary, ATS definition, KSA statements, USAJOBS glossary, prompt engineering resume, resume terms, job search dictionary, hiring terminology ${currentYear}, career jargon explained`} />
        
        <meta name="chatgpt-fts:title" content={`Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms (${currentYear})`} />
        <meta name="chatgpt-fts:description" content={`Authoritative definitions for 40+ career, resume, and hiring terms. From ATS to KSA statements to prompt engineering. Updated for ${currentYear}.`} />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={lastModified.split('T')[0]} />
        <meta name="generator" content="Professional Resume Free - Career Resources" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="last-modified" content={lastModified} />
        <meta httpEquiv="last-modified" content={lastModified} />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={`Career Terminology Glossary: ATS, Federal Hiring & AI Resume Terms (${currentYear})`} />
        <meta property="og:description" content={`Master the language of hiring. 40+ definitions for ATS, KSA, Prompt Engineering, and more. Updated for ${currentYear}.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="Career Terminology Glossary - Definitions for Modern Job Seekers" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModified} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Career Terminology Glossary (${currentYear})`} />
        <meta name="twitter:description" content="40+ definitions for ATS, KSA, Prompt Engineering, and more. Free career glossary." />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:site" content="@ProfResumeFree" />
        
        <meta name="twitter:label1" content="Terms Defined" />
        <meta name="twitter:data1" content="40+" />
        <meta name="twitter:label2" content="Categories" />
        <meta name="twitter:data2" content="12" />
        
        <meta name="theme-color" content="#131315" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        <meta property="article:published_time" content={`${currentYear}-01-15T00:00:00+00:00`} />
        <meta property="article:modified_time" content={lastModified} />
        <meta property="article:author" content="Professional Resume Free" />
        <meta property="article:section" content="Career Resources" />
        <meta property="article:tag" content="career terminology, resume glossary, ATS, KSA, job search dictionary" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      {/* Hidden freshness indicators */}
      <div style={{ display: 'none' }}>
        <meta name="build-timestamp" content={lastModified} />
        <meta name="content-freshness" content={lastModified.split('T')[0]} />
      </div>

      <main style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <div className="section-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name"><FiHome size={14} /> Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true"><FiChevronRight size={14} /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page"><FiBookOpen size={14} /> Career Terminology</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section" id="main-content" aria-labelledby="hero-heading">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge">✦ {glossaryData.length}+ Terms • 12 Categories • {currentYear} Edition</div>
              
              <h1 id="hero-heading" style={{ fontSize: 'var(--font-size-display-lg)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-extrabold)', lineHeight: 'var(--line-height-display)', marginBottom: '1.25rem' }}>
                Career Terminology{' '}
                <span className="gradient-text">Glossary</span>
              </h1>
              
              <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Master the language of modern hiring. From <strong>ATS algorithms</strong> to <strong>Federal KSA statements</strong> to <strong>Prompt Engineering</strong>, get authoritative definitions for {glossaryData.length}+ terms that matter in the {currentYear} job market.
              </p>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', maxWidth: '800px' }} aria-label="Glossary statistics">
                <div className="stat-card">
                  <div className="stat-number">{glossaryData.length}+</div>
                  <div className="stat-label">Terms Defined</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Categories</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{currentYear}</div>
                  <div className="stat-label">Latest Update</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Free & Private</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="section section-alt" aria-labelledby="search-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="search-heading" className="section-title">Find Your Term</h2>
              <p className="section-subtitle">Search definitions, categories, or browse by letter</p>
            </div>

            <div className="search-container">
              <FiSearch className="search-icon" size={20} aria-hidden="true" />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search terms (e.g., 'ATS', 'KSA', 'Prompt Engineering')..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveLetter(null);
                }}
                aria-label="Search glossary terms"
              />
            </div>

            {!searchTerm && (
              <nav className="alpha-nav" aria-label="Alphabetical index">
                <button 
                  className={`alpha-link ${activeLetter === null ? 'active' : ''}`}
                  onClick={() => setActiveLetter(null)}
                  aria-label="Show all terms"
                >
                  All
                </button>
                {alphabet.map(letter => {
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

        {/* Glossary Results Section - 3 COLUMNS ON DESKTOP, 1 ON MOBILE */}
        <section className="section" aria-labelledby="glossary-heading">
          <div className="section-container">
            <h2 id="glossary-heading" className="section-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>
              {searchTerm ? `Search Results: "${searchTerm}"` : activeLetter ? `Terms Starting with "${activeLetter}"` : 'All Career Terms'}
            </h2>

            {filteredTerms.length > 0 ? (
              <div className="glossary-grid">
                {filteredTerms.map((item, idx) => (
                  <article key={idx} className="term-card" id={item.term.replace(/\s+/g, '-').toLowerCase()}>
                    <div className="term-header">
                      <h3 className="term-title">{item.term}</h3>
                      <a href={`#${item.term.replace(/\s+/g, '-').toLowerCase()}`} className="term-anchor" aria-label={`Link to ${item.term}`}>#</a>
                    </div>
                    <p className="term-definition">{item.definition}</p>
                    <div className="term-meta">
                      <span className="term-category-badge">{item.category}</span>
                      {item.related && item.related.length > 0 && (
                        <span>Related: {item.related.join(", ")}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>No terms found</h3>
                <p style={{ marginBottom: '1.5rem' }}>Try adjusting your search or browse all terms.</p>
                <button onClick={() => { setSearchTerm(""); setActiveLetter(null); }} className="btn-back">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-alt" aria-labelledby="faq-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Common questions about career terminology and modern hiring</p>
            </div>
            <div className="faq-grid">
              {faqData.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-body-sm)' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Understanding Terminology Matters */}
        <section className="section" aria-labelledby="why-heading">
          <div className="section-container">
            <div className="section-header">
              <h2 id="why-heading" className="section-title">Why Understanding Career Terminology Matters</h2>
              <p className="section-subtitle">Language shapes your job search success in the {currentYear} market</p>
            </div>
            <div className="grid">
              {[
                { icon: <FiDatabase size={28} />, title: "ATS Keyword Matching", desc: "Understanding terms like 'ATS' and 'keyword optimization' helps you write resumes that pass automated screening and reach human recruiters.", badge: "Critical" },
                { icon: <FiTarget size={28} />, title: "Federal Job Applications", desc: "Terms like 'KSA', 'USAJOBS', and 'Federal Resume' are unique to government hiring. Misunderstanding them can disqualify your application.", badge: "Specialized" },
                { icon: <FiCpu size={28} />, title: "AI & Prompt Engineering", desc: "As AI tools reshape hiring, knowing how to use 'Prompt Engineering' and 'AI optimization' gives you a competitive edge in writing resumes.", badge: "Emerging" },
                { icon: <FiTrendingUp size={28} />, title: "Career Growth Strategy", desc: "Terms like 'upskilling', 'reskilling', and 'skill gap analysis' help you plan a strategic career trajectory with measurable outcomes.", badge: "Strategic" },
                { icon: <FiShield size={28} />, title: "Avoiding Common Pitfalls", desc: "Knowing terms like 'keyword stuffing' and 'resume parsing' helps you avoid mistakes that can get your resume automatically rejected.", badge: "Protective" },
                { icon: <FiStar size={28} />, title: "Personal Branding", desc: "Understanding 'personal branding', 'LinkedIn optimization', and 'informational interviews' helps you build a stronger professional presence.", badge: "Advantage" }
              ].map((item, i) => (
                <div key={i} className="card-executive" style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <h3 style={{ fontSize: 'var(--font-size-title-md)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--text-secondary)', flex: 1 }}>{item.desc}</p>
                  <span className="feature-badge" style={{ marginTop: '1rem', alignSelf: 'center' }}>{item.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section aria-labelledby="cta-heading" style={{ padding: 'var(--section-gap-lg) 0', background: 'linear-gradient(135deg, #1c1b1d 0%, #2a2a2c 100%)', textAlign: 'center', borderTop: '0.5px solid var(--border-gold-filament)', borderBottom: '0.5px solid var(--border-gold-filament)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontSize: 'var(--font-size-display-md)', fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(242,202,80,0.3)' }}>
              Ready to Apply Your Knowledge?
            </h2>
            <p style={{ fontSize: 'var(--font-size-body-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Now that you understand the terminology, put your knowledge into action. Build an ATS-optimized resume, explore job search strategies, and land your next role.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }} role="group" aria-label="Call to action">
              <Link href="/free-resume-builder" className="btn-primary" style={{ boxShadow: 'var(--shadow-gold-glow-sm)' }} aria-label="Build Your Resume">
                <FiFileText /> Build Your Resume
              </Link>
              <Link href="/resume-templates" className="btn-outline" aria-label="Browse Templates">
                <FiLayers /> Browse Templates
              </Link>
            </div>
            <p className="text-small" style={{ color: 'var(--text-muted)' }}>
              ✓ No credit card required • Free forever • ATS-Optimized • Based on Industry Standards
            </p>
            <p className="text-small" style={{ marginTop: '0.5rem', color: 'var(--text-disabled)' }}>
              Data fresh as of: {lastModified.split('T')[0]}
            </p>

            {/* NEW INTERNAL LINKS BENEATH GUARANTEE */}
            <div className="cf-internal-links-inline">
              <div className="cf-internal-links-inline-header">
                <h3 className="cf-internal-links-inline-title">Explore Other Career Resources</h3>
                <p className="cf-internal-links-inline-subtitle">Find the perfect guide or tool for your specific job search needs.</p>
              </div>
              <div className="cf-internal-links-grid">
                {newInternalLinks.map((link, index) => (
                  <Link key={index} href={link.target} className="cf-internal-link-card">
                    <span className="cf-internal-link-title">{link.title}</span>
                    <FiArrowRight className="cf-internal-link-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="section-container" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '3rem' }}>
          <Link href="/usa-jobs-resume-directory" className="btn-back">
            ← Back to USA Jobs Resume Directory
          </Link>
        </div>

        {/* Hidden metadata for crawlers */}
        <div style={{ display: 'none' }}>
          <span itemProp="terms-count">{glossaryData.length}</span>
          <span itemProp="last-updated">{lastModified.split('T')[0]}</span>
          <span itemProp="build-timestamp">{lastModified}</span>
        </div>
      </main>
    </>
  );
}

// ============================================================================
// SEO-ENHANCED getStaticProps (with ISR)
// ============================================================================
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const now = new Date();
  const currentDate = now.toISOString();
  
  return {
    props: {
      lastModified: currentDate
    },
    revalidate: 3600 // ISR: Revalidate every hour
  };
}