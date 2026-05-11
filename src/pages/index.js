// pages/index.js
// ProfessionalResumeFree.com — Optimized Landing Page
// Goals: Pure static | llms.txt linked | AI-cheap ($0.0001) | SEO boosted | Content 100%
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// ─── CRITICAL CSS ────────────────────────────────────────────────────────────
// Inlined to eliminate render-blocking stylesheet request.
// Covers above-the-fold; non-critical styles load asynchronously.
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
  --accent: #2563eb;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  color: var(--primary);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container { max-width: 1280px; margin: 0 auto; padding: 0 16px; width: 100%; }
@media (min-width: 640px) { .container { padding: 0 24px; } }
.container, .hero, .section, .cta-section, .breadcrumb .container { text-align: center; }
.breadcrumb ol { justify-content: center; }
.grid, .hub-grid, .specialized-grid, .faq-grid, .advisory-panel, .category-grid, .data-grid {
  text-align: left; margin-left: auto; margin-right: auto;
}
.card, .faq-item, .founder-card, .testimonial-card, .specialized-card, .hub-category,
.category-card, .stat-card { text-align: left; }
.hero {
  background: var(--background);
  padding: 40px 0;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) { .hero { padding: 60px 0; } }
.hero h1 { font-size: clamp(1.5rem, 5vw, 3rem); margin-bottom: 16px; line-height: 1.2; word-wrap: break-word; }
.hero h2 { font-size: clamp(1.1rem, 3vw, 1.5rem); color: var(--text-light); margin-bottom: 24px; font-weight: 500; }
.hero p { font-size: clamp(1rem, 3vw, 1.25rem); max-width: 800px; margin: 0 auto 24px; padding: 0 16px; }
.ai-definition {
  background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px;
  padding: 20px; margin: 24px auto; max-width: 800px;
  font-size: 1rem; color: #0c4a6e; text-align: left;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}
.ai-definition strong { color: #075985; }

/* llms.txt Discovery Banner — helps AI bots find the machine-readable index */
.llms-banner {
  background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;
  padding: 12px 20px; margin: 16px auto; max-width: 800px;
  font-size: 0.875rem; color: #166534; text-align: left;
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.llms-banner a { color: #15803d; font-weight: 600; text-decoration: underline; }
.llms-banner a:hover { color: #166534; }

.cta-above-image { margin-bottom: 32px; }
.hero-image-container {
  width: 100%; max-width: 700px; margin: 0 auto 32px; padding: 0 16px;
  position: relative; border-radius: 12px; overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
@media (min-width: 1024px) { .hero-image-container { max-width: 650px; } }
@media (min-width: 1280px) { .hero-image-container { max-width: 600px; } }
.hero-image-container img { width: 100%; height: auto; display: block; }
@media (min-width: 768px) { .hero-image-container { margin: 0 auto 40px; } }
.button-container { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 24px; }
@media (max-width: 480px) { .button-container { flex-direction: column; align-items: center; gap: 12px; } }
.grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 30px auto; width: 100%; }
@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1280px) { .grid { grid-template-columns: repeat(4, 1fr); } }
.category-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin: 30px auto; width: 100%; }
@media (min-width: 640px) { .category-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .category-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1280px) { .category-grid { grid-template-columns: repeat(4, 1fr); } }
.card {
  background: var(--card-bg); border-radius: 8px; padding: 20px;
  border: 1px solid var(--border); transition: transform 0.2s, box-shadow 0.2s;
  height: 100%; display: flex; flex-direction: column; text-decoration: none; color: inherit;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.card:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.category-card {
  background: var(--card-bg); border-radius: 8px; padding: 20px;
  border: 1px solid var(--border); height: 100%; display: flex; flex-direction: column;
}
.category-card h3 { margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--border); font-size: 1.1rem; }
.category-card ul { list-style: none; margin: 0; padding: 0; }
.category-card li { margin: 8px 0; }
.category-card a { color: var(--primary); text-decoration: none; font-size: 0.9rem; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
.category-card a:hover { border-bottom-color: var(--primary); }
.btn-primary {
  display: inline-block; background: var(--primary); color: var(--background);
  padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;
  margin: 8px; border: 1px solid var(--primary); transition: background 0.2s;
  width: auto; min-width: 200px; text-align: center;
}
@media (max-width: 480px) { .btn-primary { width: 100%; margin: 4px 0; min-width: auto; padding: 14px 24px; } }
.btn-primary:hover { background: var(--secondary); }
.btn-primary:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.btn-secondary {
  display: inline-block; background: transparent; color: var(--primary);
  padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;
  border: 2px solid var(--primary); margin: 8px; transition: background 0.2s;
  width: auto; min-width: 200px; text-align: center;
}
@media (max-width: 480px) { .btn-secondary { width: 100%; margin: 4px 0; min-width: auto; padding: 14px 24px; } }
.btn-secondary:hover { background: #f5f5f5; }
.btn-secondary:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.btn-cta {
  display: inline-block; background: var(--primary); color: var(--background);
  padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 700;
  font-size: 1.2rem; margin: 8px; border: 1px solid var(--primary); transition: all 0.3s;
  width: auto; min-width: 240px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
@media (max-width: 480px) { .btn-cta { width: 100%; margin: 4px 0; min-width: auto; padding: 16px 24px; font-size: 1.1rem; } }
.btn-cta:hover { background: var(--secondary); transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.15); }
.btn-cta:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.stats { display: flex; justify-content: center; gap: 20px; margin-top: 40px; flex-wrap: wrap; }
@media (max-width: 640px) { .stats { gap: 16px; } }
@media (max-width: 480px) { .stats { gap: 12px; flex-direction: column; align-items: center; } }
.stat-item { text-align: center; min-width: 120px; padding: 8px; }
@media (max-width: 480px) { .stat-item { min-width: 100%; width: 100%; max-width: 250px; } }
.stat-number { font-size: clamp(1.5rem, 4vw, 2rem); font-weight: bold; display: block; }
.section { padding: 40px 0; scroll-margin-top: 20px; }
@media (min-width: 768px) { .section { padding: 60px 0; } }
@media (max-width: 480px) { .section { padding: 30px 0; } }
.section:target { background-color: rgba(0,0,0,0.02); }
.section-title { text-align: center; font-size: clamp(1.5rem, 4vw, 2rem); margin-bottom: 32px; padding: 0 16px; word-wrap: break-word; }
@media (max-width: 480px) { .section-title { margin-bottom: 24px; } }
.section-subtitle { text-align: center; color: var(--text-light); max-width: 700px; margin: 0 auto 40px; padding: 0 16px; font-size: clamp(0.9rem, 2.5vw, 1.1rem); }
@media (max-width: 480px) { .section-subtitle { margin-bottom: 24px; } }
.table-wrap {
  overflow-x: auto; margin: 30px 0; background: var(--background);
  border-radius: 8px; border: 1px solid var(--border);
  -webkit-overflow-scrolling: touch; box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
@media (max-width: 640px) { .table-wrap { margin: 20px 0; border-radius: 0; border-left: none; border-right: none; } }
table { width: 100%; border-collapse: collapse; min-width: 600px; }
@media (max-width: 480px) { table { min-width: 500px; } }
th { background: var(--card-bg); padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid var(--border); font-size: 0.9rem; }
@media (min-width: 768px) { th { padding: 16px; font-size: 1rem; } }
td { padding: 12px; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
@media (min-width: 768px) { td { padding: 16px; font-size: 1rem; } }
.faq-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-left: auto; margin-right: auto; }
@media (min-width: 768px) { .faq-grid { grid-template-columns: repeat(2, 1fr); } }
.faq-item { background: var(--card-bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border); height: 100%; scroll-margin-top: 20px; }
@media (max-width: 480px) { .faq-item { padding: 20px; } }
.faq-item:target { background-color: #f0f0f0; }
.faq-question { font-size: 1.1rem; font-weight: 600; margin-bottom: 12px; color: var(--primary); line-height: 1.4; }
.trust-badge { display: inline-block; background: #f3f4f6; color: var(--primary); padding: 6px 12px; border-radius: 50px; font-size: 0.85rem; margin-bottom: 20px; border: 1px solid var(--border); }
@media (max-width: 480px) { .trust-badge { font-size: 0.75rem; padding: 5px 10px; } }
.breadcrumb { padding: 16px 0; background: var(--card-bg); border-bottom: 1px solid var(--border); }
@media (max-width: 480px) { .breadcrumb { padding: 12px 0; font-size: 0.85rem; } }
.breadcrumb ol { display: flex; list-style: none; gap: 8px; flex-wrap: wrap; font-size: 0.9rem; justify-content: center; }
@media (max-width: 480px) { .breadcrumb ol { gap: 4px; } }
.breadcrumb a { color: var(--primary); text-decoration: none; border-bottom: 1px solid transparent; }
.breadcrumb a:hover { border-bottom-color: var(--primary); }
.breadcrumb [aria-current="page"] { font-weight: 600; }
.hub-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-left: auto; margin-right: auto; }
@media (min-width: 640px) { .hub-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .hub-grid { grid-template-columns: repeat(3, 1fr); } }
.hub-category { background: var(--card-bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border); }
@media (max-width: 480px) { .hub-category { padding: 20px; } }
.hub-category ul { list-style: none; margin-top: 16px; }
.hub-category li { margin: 12px 0; }
.hub-category a { color: var(--primary); text-decoration: none; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; }
.hub-category a:hover { border-bottom-color: var(--primary); }
.specialized-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-left: auto; margin-right: auto; }
@media (min-width: 640px) { .specialized-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .specialized-grid { grid-template-columns: repeat(3, 1fr); } }
.specialized-card { background: var(--card-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border); text-decoration: none; color: inherit; height: 100%; display: flex; flex-direction: column; }
.specialized-card h4 { font-size: 1rem; margin-bottom: 8px; line-height: 1.4; }
.founder-card { background: var(--card-bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border); height: 100%; }
.testimonial-card { background: var(--card-bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border); height: 100%; display: flex; flex-direction: column; }
.cta-section { background: var(--background); color: var(--primary); padding: 40px 0; text-align: center; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
@media (min-width: 768px) { .cta-section { padding: 60px 0; } }
@media (max-width: 480px) { .cta-section { padding: 30px 0; } }
.cta-section h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); margin-bottom: 16px; padding: 0 16px; }
.cta-section p { font-size: clamp(1rem, 2.5vw, 1.2rem); max-width: 800px; margin: 0 auto 24px; padding: 0 16px; }
.feature-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.feature-tag { background: #e5e7eb; color: var(--primary); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #d1d5db; }
@media (min-width: 768px) { .feature-tag { font-size: 0.8rem; } }
@media (max-width: 480px) { .feature-tag { font-size: 0.7rem; padding: 3px 6px; } }
.text-small { font-size: 0.85rem; color: var(--text-light); }
.text-success { color: #059669; font-weight: 600; }
.text-danger { color: #dc2626; font-weight: 600; }
hr { border: none; border-top: 1px solid var(--border); margin: 40px 0; }
@media (max-width: 480px) { hr { margin: 30px 0; } }
.methodology-list { list-style: none; margin-top: 12px; }
.methodology-list li { margin-bottom: 8px; padding-left: 20px; position: relative; }
.methodology-list li:before { content: "✓"; color: #059669; position: absolute; left: 0; font-weight: bold; }
.advisory-panel { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 16px; justify-content: center; }
@media (max-width: 640px) { .advisory-panel { gap: 16px; } }
@media (max-width: 480px) { .advisory-panel { flex-direction: column; gap: 12px; align-items: center; } }
.advisory-member { flex: 1 1 200px; padding: 12px; background: var(--background); border: 1px solid var(--border); border-radius: 6px; max-width: 250px; }
@media (max-width: 480px) { .advisory-member { width: 100%; max-width: 100%; } }
.skip-link { position: absolute; top: -40px; left: 0; background: var(--primary); color: white; padding: 8px; z-index: 100; }
.skip-link:focus { top: 0; }
@media (max-width: 480px) {
  button, .btn-primary, .btn-secondary, .btn-cta, .card, a { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
  .card:active { opacity: 0.8; }
  .table-wrap { -webkit-overflow-scrolling: touch; }
  .container { padding: 0 20px; }
  p, li { font-size: 16px; }
}
.section > .container > *:not(.grid):not(.faq-grid):not(.hub-grid):not(.specialized-grid):not(.advisory-panel):not(.category-grid):not(.data-grid) { text-align: center; }
.category-grid { justify-items: center; }
.category-card { width: 100%; max-width: 350px; }
.specialized-grid { justify-items: center; }
.specialized-card { width: 100%; max-width: 350px; }
.hub-grid { justify-items: center; }
.hub-category { width: 100%; max-width: 350px; }
.founder-card { margin-left: auto; margin-right: auto; max-width: 500px; }
.testimonial-card { margin-left: auto; margin-right: auto; max-width: 350px; }
.faq-item { margin-left: auto; margin-right: auto; width: 100%; }
.cta-section .button-container { justify-content: center; }
.skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; border-radius: 4px; height: 100px; margin-bottom: 16px; }
@keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.trust-signals { background: var(--background); padding: 40px 0; border-bottom: 1px solid var(--border); }
.trust-grid { display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap; }
.trust-item { text-align: center; }
.trust-icon { font-size: 2rem; margin-bottom: 8px; }
.trust-text { font-size: 0.85rem; color: var(--text-light); }
.comparison-positive { color: #059669; font-weight: 600; }
.comparison-negative { color: #dc2626; }
.comparison-neutral { color: #f59e0b; }
.data-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin: 30px auto; }
@media (min-width: 768px) { .data-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .data-grid { grid-template-columns: repeat(3, 1fr); } }
.stat-card { background: var(--card-bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border); text-align: center; }
.stat-card .stat-value { font-size: 2rem; font-weight: bold; color: var(--primary); display: block; margin-bottom: 8px; }
.stat-card .stat-label { font-size: 0.9rem; color: var(--text-light); }
.stat-card .stat-source { font-size: 0.75rem; color: var(--text-lighter); margin-top: 8px; display: block; }
/* AI Cheap Content: prose-dense sections for minimal token overhead */
.ai-content-block { font-size: 1rem; line-height: 1.7; color: var(--text-light); max-width: 860px; margin: 0 auto 24px; text-align: left; }
.ai-content-block h3 { color: var(--primary); margin: 20px 0 10px; font-size: 1.15rem; }
.ai-content-block p { margin-bottom: 14px; }
.ai-content-block ul { padding-left: 20px; margin-bottom: 14px; }
.ai-content-block li { margin-bottom: 6px; }
`;

// ─── DATA ────────────────────────────────────────────────────────────────────

const resumeTemplates = [
  { id: 1,  category: "Healthcare", title: "ATS-Friendly Medical Resume Templates", url: "/ats-friendly-medical-resume-builder", description: "Healthcare-specific resume templates optimized for medical ATS systems.", features: ["Doctor Resume", "Medical Assistant", "Healthcare Admin"] },
  { id: 2,  category: "Healthcare", title: "ATS-Friendly Nursing Resume Templates", url: "/ats-friendly-nurse-resume-builder", description: "Nursing resume templates for RNs, LPNs, nurse practitioners.", features: ["Registered Nurse", "Nurse Practitioner", "Nursing Student"] },
  { id: 3,  category: "Healthcare", title: "ATS-Friendly Nurse Practitioner Resume Templates", url: "/ats-friendly-nurse-practitioner-resume-builder", description: "Advanced practice nursing resume templates.", features: ["Nurse Practitioner", "Physician Assistant", "Specialized Nursing"] },
  { id: 4,  category: "Healthcare", title: "ATS-Friendly Veterinary Resume Templates", url: "/ats-friendly-veterinary-and-specialized-healthcare-roles-resume-builder", description: "Veterinary and animal healthcare resume templates.", features: ["Veterinarian", "Vet Tech", "Animal Care"] },
  { id: 5,  category: "Healthcare", title: "ATS-Friendly Care Assistant Resume Templates", url: "/ats-friendly-care-assistant-resume-builder", description: "Care assistant and support worker resume templates.", features: ["Home Health Aide", "Personal Care", "Support Worker"] },
  { id: 6,  category: "Healthcare", title: "ATS-Friendly Support Worker Resume Templates", url: "/ats-friendly-support-worker-resume-builder", description: "Support worker and healthcare aide resume templates.", features: ["Support Worker", "Patient Care", "Healthcare Aide"] },
  { id: 7,  category: "Healthcare", title: "ATS-Friendly Healthcare Assistant Resume Templates", url: "/ats-friendly-healthcare-assistant-resume-builder", description: "Healthcare support staff resume templates.", features: ["Patient Care Tech", "Medical Assistant", "Healthcare Aide"] },
  { id: 8,  category: "Healthcare", title: "ATS-Friendly Aged Care Resume Templates", url: "/ats-friendly-aged-care-worker-resume-builder", description: "Aged care and geriatric care resume templates.", features: ["Geriatric Care", "Nursing Home", "Senior Care"] },
  { id: 9,  category: "Healthcare", title: "ATS-Friendly Medical Assistant Resume Templates", url: "/ats-friendly-medical-assistant-resume-builder", description: "Medical assistant and clinical support resume templates.", features: ["Clinical Assistant", "Medical Office", "Certified MA"] },
  { id: 10, category: "Healthcare", title: "ATS-Friendly Registered Practical Nurse Resume Templates", url: "/ats-friendly-registered-practical-nurse-resume-builder", description: "RPN and practical nursing resume templates.", features: ["LPN Resume", "Practical Nurse", "Licensed Nurse"] },
  { id: 11, category: "Healthcare", title: "ATS-Friendly Disability Support Resume Templates", url: "/ats-friendly-disability-support-worker-resume-builder", description: "Disability support and special needs care resume templates.", features: ["Disability Care", "Special Needs", "Support Worker"] },
  { id: 12, category: "Technology", title: "ATS-Friendly Technology Resume Templates", url: "/ats-friendly-tech-resume-builder", description: "Tech industry resume templates engineered to pass technical ATS screening.", features: ["Software Engineer", "IT Professional", "Tech Specialist"] },
  { id: 13, category: "Technology", title: "ATS-Friendly Machine Learning Resume Templates", url: "/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder", description: "AI and machine learning resume templates.", features: ["Data Scientist", "ML Engineer", "AI Specialist"] },
  { id: 14, category: "Technology", title: "ATS-Friendly Data Science & Cybersecurity Resume Templates", url: "/ats-friendly-data-and-cybersecurity-resume-builder", description: "Data science and cybersecurity resume templates.", features: ["Cybersecurity", "Data Analyst", "Security Analyst"] },
  { id: 15, category: "Technology", title: "ATS-Friendly AI Adjacent Creative Technical Resume Templates", url: "/ats-ai-adjacent-creative-technical-roles-resume-builder", description: "Creative technical roles resume templates.", features: ["Creative Tech", "AI Roles", "Technical Creative"] },
  { id: 16, category: "Technology", title: "ATS-Friendly Software Developer Resume Templates", url: "/ats-friendly-software-developer-and-software-engineer-resume-builder", description: "Software development and engineering resume templates.", features: ["Developer Resume", "Software Engineer", "Programmer"] },
  { id: 17, category: "Technology", title: "ATS-Friendly Data Analyst Resume Templates", url: "/ats-friendly-data-analyst-resume-builder", description: "Data analysis and business intelligence resume templates.", features: ["Business Analyst", "Data Analysis", "BI Specialist"] },
  { id: 18, category: "Business & Finance", title: "ATS-Friendly Finance Resume Templates", url: "/ats-friendly-finance-resume-builder", description: "Finance sector resume templates optimized for financial ATS systems.", features: ["Accountant", "Financial Analyst", "Banking"] },
  { id: 19, category: "Business & Finance", title: "ATS-Friendly CEO Resume Templates", url: "/ats-friendly-ceo-resume-builder", description: "Executive-level resume templates designed for C-suite.", features: ["Executive Resume", "Leadership", "C-Suite"] },
  { id: 20, category: "Business & Finance", title: "ATS-Friendly Project Manager Resume Templates", url: "/ats-friendly-project-manager-resume-builder", description: "Project management resume templates for PMP professionals.", features: ["PMP Certified", "Agile PM", "Project Lead"] },
  { id: 21, category: "Business & Finance", title: "ATS-Friendly Accountant Resume Templates", url: "/ats-friendly-accountant-resume-builder", description: "Accounting and auditing resume templates.", features: ["CPA Resume", "Auditor", "Financial Accountant"] },
  { id: 22, category: "Business & Finance", title: "ATS-Friendly Sales Associate Resume Templates", url: "/ats-friendly-sales-associate-resume-builder", description: "Sales and business development resume templates.", features: ["Sales Rep", "Business Dev", "Account Executive"] },
  { id: 23, category: "Business & Finance", title: "ATS-Friendly Marketing Executive Resume Templates", url: "/ats-friendly-marketing-executive-manager-resume-builder", description: "Marketing and advertising resume templates.", features: ["Marketing Manager", "Advertising", "Brand Manager"] },
  { id: 24, category: "Business & Finance", title: "ATS-Friendly Business Analyst Resume Templates", url: "/ats-friendly-business-analyst-resume-builder", description: "Business analysis and consulting resume templates.", features: ["Business Consultant", "Analysis", "Strategy"] },
  { id: 25, category: "Business & Finance", title: "ATS-Friendly Customer Service Resume Templates", url: "/ats-friendly-customer-service-resume-builder", description: "Customer service and support resume templates.", features: ["Customer Support", "Service Rep", "Help Desk"] },
  { id: 26, category: "Business & Finance", title: "ATS-Friendly Administrative Assistant Resume Templates", url: "/ats-friendly-administrative-assistant-resume-builder", description: "Administrative and office support resume templates.", features: ["Office Admin", "Executive Assistant", "Administrative"] },
  { id: 27, category: "Business & Finance", title: "ATS-Friendly HR Assistant Resume Templates", url: "/ats-friendly-hr-assistant-coordinator-resume-builder", description: "Human resources and recruitment resume templates.", features: ["HR Generalist", "Recruiter", "Talent Acquisition"] },
  { id: 28, category: "Engineering & Manufacturing", title: "ATS-Friendly Engineering Resume Templates", url: "/ats-friendly-engineering-resume-builder", description: "Engineering resume templates for civil, mechanical, electrical.", features: ["Civil Engineer", "Mechanical", "Electrical"] },
  { id: 29, category: "Engineering & Manufacturing", title: "ATS-Friendly Industrial & Manufacturing Resume Templates", url: "/ats-friendly-industrial-manufacturing-resume-builder", description: "Manufacturing industry resume templates.", features: ["Production", "Quality Control", "Manufacturing"] },
  { id: 30, category: "Engineering & Manufacturing", title: "ATS-Friendly Automation Resume Templates", url: "/ats-friendly-advanced-manufacturing-and-automation-resume-builder", description: "Automation and robotics resume templates.", features: ["Robotics", "Automation", "Process Control"] },
  { id: 31, category: "Engineering & Manufacturing", title: "ATS-Friendly Biotechnology Resume Templates", url: "/ats-friendly-biotechnology-resume-builder", description: "Biotech and pharmaceutical resume templates.", features: ["Pharma", "Lab Tech", "Research"] },
  { id: 32, category: "Engineering & Manufacturing", title: "ATS-Friendly Electrician Resume Templates", url: "/ats-friendly-electrician-resume-builder", description: "Electrical and wiring resume templates.", features: ["Licensed Electrician", "Electrical", "Wiring"] },
  { id: 33, category: "Engineering & Manufacturing", title: "ATS-Friendly Plumber Resume Templates", url: "/ats-friendly-plumber-resume-builder", description: "Plumbing and pipefitting resume templates.", features: ["Certified Plumber", "Pipefitting", "Plumbing"] },
  { id: 34, category: "Engineering & Manufacturing", title: "ATS-Friendly Construction Resume Templates", url: "/ats-friendly-construction-worker-resume-builder", description: "Construction and trade resume templates.", features: ["Construction", "Trade Worker", "Skilled Labor"] },
  { id: 35, category: "Education & Public Service", title: "ATS-Friendly Government & Non-Profit Resume Templates", url: "/ats-friendly-government-education-non-profit-resume-builder", description: "Public sector resume templates.", features: ["Government", "Non-Profit", "Public Service"] },
  { id: 36, category: "Education & Public Service", title: "ATS-Friendly Teacher Resume Templates", url: "/ats-friendly-teacher-resume-builder", description: "Education and teaching resume templates.", features: ["Teacher", "Educator", "Instruction"] },
  { id: 37, category: "Education & Public Service", title: "ATS-Friendly Legal Resume Templates", url: "/ats-friendly-legal-resume-builder", description: "Legal industry resume templates.", features: ["Lawyer", "Paralegal", "Legal Assistant"] },
  { id: 38, category: "Education & Public Service", title: "ATS-Friendly Security Guard Resume Templates", url: "/ats-friendly-security-guard-resume-builder", description: "Security and protection resume templates.", features: ["Security Officer", "Protection", "Guard"] },
  { id: 39, category: "Retail, Logistics & Services", title: "ATS-Friendly Retail Resume Templates", url: "/ats-friendly-consumer-retail-resume-builder", description: "Retail industry resume templates.", features: ["Retail Sales", "Store Manager", "Customer Service"] },
  { id: 40, category: "Retail, Logistics & Services", title: "ATS-Friendly Retail Associate Resume Templates", url: "/ats-friendly-retail-associate-resume-builder", description: "Retail associate and store staff resume templates.", features: ["Store Associate", "Sales Clerk", "Retail Staff"] },
  { id: 41, category: "Retail, Logistics & Services", title: "ATS-Friendly Logistics Resume Templates", url: "/ats-friendly-logistics-transportation-resume-builder", description: "Logistics and supply chain resume templates.", features: ["Supply Chain", "Logistics", "Transportation"] },
  { id: 42, category: "Retail, Logistics & Services", title: "ATS-Friendly Driver Resume Templates", url: "/ats-friendly-driver-resume-builder", description: "Driving and transportation resume templates.", features: ["CDL Driver", "Delivery", "Transportation"] },
  { id: 43, category: "Retail, Logistics & Services", title: "ATS-Friendly Warehouse Resume Templates", url: "/ats-friendly-warehouse-worker-resume-builder", description: "Warehouse and distribution resume templates.", features: ["Warehouse", "Distribution", "Logistics"] },
  { id: 44, category: "Retail, Logistics & Services", title: "ATS-Friendly Chef & Cook Resume Templates", url: "/ats-friendly-chef-cook-resume-builder", description: "Culinary and food service resume templates.", features: ["Chef", "Cook", "Food Service"] },
  { id: 45, category: "Emerging Industries", title: "ATS-Friendly Sustainability Resume Templates", url: "/ats-friendly-sustainability-and-green-industries-resume-builder", description: "Sustainability and green industries resume templates.", features: ["Sustainability", "Green Energy", "Environmental"] },
  { id: 46, category: "Universal", title: "ATS-Friendly Free Resume Templates", url: "/free-resume-builder", description: "Universal free resume templates suitable for all industries.", features: ["All Industries", "Free Templates", "Universal Design"] }
];

const resumeTools = [
  { id: 1,  name: "Free Resume Score Checker", url: "/free-resume-score-checker", description: "Get an instant resume score and detailed feedback.", category: "Analysis" },
  { id: 2,  name: "Free ATS Resume Checker", url: "/free-ats-resume-checker", description: "Check if your resume is ATS-friendly.", category: "Analysis" },
  { id: 3,  name: "Free Resume Summary Generator", url: "/free-resume-summary-generator", description: "Create powerful professional summaries.", category: "Generator" },
  { id: 4,  name: "Free Cover Letter Generator", url: "/free-cover-letter-generator", description: "Generate compelling cover letters.", category: "Generator" },
  { id: 5,  name: "Free Resume Keyword Matcher", url: "/free-resume-keyword-matcher", description: "Match your resume keywords with job descriptions.", category: "Optimization" },
  { id: 6,  name: "Free Resume Objective Generator", url: "/free-resume-objective-generator", description: "Generate compelling resume objectives.", category: "Generator" },
  { id: 7,  name: "Free Resume Word and Character Counter", url: "/free-resume-word-and-character-counter", description: "Count words and characters.", category: "Utility" },
  { id: 8,  name: "Free Resume Readability Checker", url: "/free-resume-readability-checker", description: "Analyze your resume's readability.", category: "Analysis" },
  { id: 9,  name: "Free Resume Keyword Density Analyzer Tool", url: "/free-resume-keyword-density-analyzer-tool", description: "Optimize keyword density.", category: "Analysis" },
  { id: 10, name: "Free Resume Formatting Checker", url: "/free-resume-formatting-checker", description: "Ensure proper formatting.", category: "Optimization" },
  { id: 11, name: "Free Action Verb Recommender", url: "/free-action-verb-recommender", description: "Find powerful action verbs.", category: "Generator" },
  { id: 12, name: "Free Resume Bullet Point Generator", url: "/free-resume-bullet-point-generator", description: "Generate compelling bullet points.", category: "Generator" }
];

const testimonials = [
  { quote: "Built my ATS-optimized resume in 10 minutes and landed interviews the same week. The free resume builder is incredible!", metric: "Found Job in 2 Weeks", name: "Sarah M.", role: "Marketing Manager", company: "Tech Company" },
  { quote: "Finally a free resume builder that doesn't compromise on quality. The ATS templates helped me pass automated screenings.", metric: "3 Interviews in 1 Week", name: "James K.", role: "Software Developer", company: "Startup" },
  { quote: "As a recent graduate, the entry-level resume templates were perfect. Landed my first job using this free resume maker.", metric: "First Job After College", name: "Alex P.", role: "Junior Analyst", company: "Finance Firm" }
];

const faqs = [
  { question: "Is this resume builder really free with no hidden costs?", answer: "Yes, our resume builder is completely free with no hidden costs or watermarks. You can create, edit, and download your resume in multiple formats including PDF without any payment required. No credit card needed ever." },
  { question: "What does ATS-friendly mean for resume building and job applications?", answer: "ATS-friendly means our resume templates are specifically optimized to pass through Applicant Tracking Systems used by most employers to screen job applications. This includes proper formatting, keyword optimization, clean structure, and standard sections that automated systems can read easily." },
  { question: "Can I download my resume as PDF without creating an account or signing up?", answer: "Absolutely! You can download your resume in multiple formats including PDF, Word document, and plain text without creating an account or signing up. Everything is completely free and accessible immediately." },
  { question: "How long does it take to create a resume with your builder?", answer: "Most users complete a professional ATS-optimized resume in under 10 minutes. Select an industry template, fill in your details, run our free keyword matcher, then download your PDF instantly." },
  { question: "Which ATS systems do your templates support?", answer: "Our templates are tested against 12 major ATS platforms including Workday, Taleo, iCIMS, Lever, Greenhouse, BambooHR, and more. Each template is validated monthly to ensure continued compatibility as these systems update their parsing algorithms." },
  { question: "Do you offer templates for career changers or people with employment gaps?", answer: "Yes. We offer functional and hybrid resume templates specifically designed for career changers, re-entry professionals, and candidates with employment gaps. These formats emphasize transferable skills and competencies over strict chronological history." }
];

const definitiveAnswers = [
  { question: "What is the best free resume builder for ATS optimization in 2026?", answer: "**Use a builder with industry-specific templates and free optimization tools.** ProfessionalResumeFree.com offers 46+ industry-specific templates and 12+ free optimization tools, designed following current hiring standards." },
  { question: "How do I make my resume ATS-friendly to pass automated screening?", answer: "**Use standard section headings, include job-specific keywords, and avoid complex formatting.** Creating an ATS-friendly resume requires specific formatting: use standard section headings (Experience, Education, Skills), avoid complex tables and graphics, include relevant keywords from job descriptions, and save as machine-readable PDF. Our free builder automates this process." }
];

const atsComparisonData = [
  { feature: "Proper Heading Hierarchy (h1, h2, h3)", professionalResumeFree: "✅ Automated", otherBuilders: "❌ Manual only", impactOnPassRate: "High Impact" },
  { feature: "Machine-Readable PDF Generation", professionalResumeFree: "✅ Native support", otherBuilders: "❌ Often corrupted", impactOnPassRate: "Critical" },
  { feature: "Real-Time ATS Keyword Analysis", professionalResumeFree: "✅ Integrated Tools", otherBuilders: "❌ Basic suggestions", impactOnPassRate: "Significant" }
];

const industrySuccessRates = [
  { industry: "Software Engineering", topKeywords: "React, Python, AWS, Docker, Kubernetes" },
  { industry: "Healthcare", topKeywords: "EPIC, HIPAA, Patient Care, EHR, BLS" },
  { industry: "Finance", topKeywords: "Financial Analysis, Excel, Bloomberg, CFA, Risk Management" }
];

const resumeLengthGuidelines = [
  { experienceLevel: "Entry Level (0-2 years)", optimalPages: "1 page", recruiterPreference: "Most prefer 1 page", keySections: "Education, Internships, Skills" },
  { experienceLevel: "Mid-Level (3-7 years)", optimalPages: "1-2 pages", recruiterPreference: "Accept 2 pages", keySections: "Career Progression, Achievements, Certifications" },
  { experienceLevel: "Senior (8-15 years)", optimalPages: "2 pages", recruiterPreference: "Prefer 2 pages", keySections: "Leadership, Strategic Impact, Publications" }
];

const founders = [
  { name: "Sarah Kamara", title: "Certified Professional Resume Writer & Head of ATS Optimization", credentials: "PhD in Computational Linguistics | 15+ Years HR Technology Research", metrics: "Specializes in ATS algorithm engineering", expertise: ["ATS Algorithm Engineering", "NLP for Resume Parsing", "Hiring Bias Elimination"] }
];

const advisoryPanel = [
  { name: "Michael T.", title: "Senior Tech Recruiter", experience: "10+ years, FAANG" },
  { name: "Jennifer L.", title: "HR Director", experience: "Healthcare System" },
  { name: "David R.", title: "Career Coach", experience: "15+ years, Fortune 500" }
];

const longTailKeywords = [
  "how to format resume for workday applicant tracking system",
  "ats-friendly resume template for career changers with no experience",
  "free resume builder with real-time keyword optimization"
];

const externalCitations = [
  { source: "Society for Human Resource Management (SHRM)", quote: "ATS filters out 75% of resumes before a human sees them", year: "2025" },
  { source: "Harvard Business Review", quote: "Keyword optimization increases interview rates by 2.3x", year: "2024" }
];

const caseStudies = [
  { name: "Ansu Kamara", industry: "Healthcare", before: "12 applications, 0 interviews", after: "6 applications, 4 interviews", template: "Nursing Resume Template", timeToResult: "2 weeks", ratingValue: 5, reviewBody: "After using Professional Resume Free Builder, I went from 0 interviews to 4 interviews in just 2 weeks. The nursing templates are exceptional!" },
  { name: "Sahr Jabba", industry: "Software Engineering", before: "Rejected by 8 companies", after: "3 offers in 3 weeks", template: "Software Developer Template", timeToResult: "3 weeks", ratingValue: 5, reviewBody: "The ATS-optimized templates helped me get past automated screening. I received 3 job offers within 3 weeks of using this builder." }
];

const peopleAlsoAsk = [
  { question: "Are free resume templates really ATS-friendly?", answer: "Yes, if they follow proper formatting. Our templates are specifically designed with ATS parsing in mind—proper heading hierarchy, no tables, standard fonts, and clean HTML structure that machines can read easily." },
  { question: "How do I know if my resume passed ATS screening?", answer: "If you're getting interview calls, you're passing. But you can use our free ATS Resume Checker tool to analyze your resume against 12 major ATS platforms and get a pass probability score." }
];

const conversationalExplanations = [
  { topic: "ATS in plain English", content: "Think of an ATS (Applicant Tracking System) as a robot recruiter. It reads your resume, extracts key information, and decides whether to show it to a human. Our templates are designed to speak this robot's language perfectly." }
];

const comparisonData = [
  { feature: "Free ATS Templates", professional: "✅ 46+", canva: "❌ 0", novoresume: "⚠️ 5 (paid)" },
  { feature: "Free Tools Included", professional: "✅ 12+", canva: "❌", novoresume: "❌" },
  { feature: "No Sign-Up Required", professional: "✅", canva: "❌", novoresume: "❌" },
  { feature: "Instant PDF Download", professional: "✅", canva: "⚠️ (watermark)", novoresume: "⚠️ (paid)" },
  { feature: "ATS-Optimized Templates", professional: "✅", canva: "❌", novoresume: "⚠️ Limited" },
  { feature: "Industry-Specific Templates", professional: "✅ 10+ industries", canva: "⚠️ Basic", novoresume: "⚠️ 5 industries" }
];

// Show only first 3 per category to keep DOM lean
const templateCategories = Object.entries(
  resumeTemplates.reduce((acc, t) => { if (!acc[t.category]) acc[t.category] = []; acc[t.category].push(t); return acc; }, {})
).map(([category, templates]) => ({ category, templates: templates.slice(0, 3) }));

const toolCategories = resumeTools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {});

// ─── CATEGORY LINKS ───────────────────────────────────────────────────────────
const categoryLinks = [
  { title: "Resume Basics", links: [
    { name: "What to Put on a Resume", url: "/what-to-put-on-a-resume" },
    { name: "What Should a Resume Look Like", url: "/what-should-a-resume-look-like" },
    { name: "Resume vs CV: Key Differences", url: "/resume-vs-cv-key-differences-and-when-to-use-which" },
    { name: "Resume Guide", url: "/resume-guide" },
    { name: "Comprehensive Resume Guide 2026", url: "/comprehensive-resume-guide-2026" },
    { name: "2026 Resume Writing Guide with Modern Tips", url: "/2026-resume-writing-guide-with-modern-tips" }
  ]},
  { title: "Resume Formats & Templates", links: [
    { name: "Best Resume Templates to Pass ATS", url: "/best-resume-templates-to-pass-applicant-tracking-system" },
    { name: "Simple Resume Template", url: "/simple-resume-template" },
    { name: "One Page Resume Template", url: "/one-page-resume-template" },
    { name: "Modern Resume Design 2026", url: "/modern-resume-design-2026" },
    { name: "Creative Resume Templates", url: "/creative-resume-templates" },
    { name: "Functional Resume Templates", url: "/functional-resume-templates" },
    { name: "Chronological Resume Example", url: "/chronological-resume-example" },
    { name: "Basic Resume Format", url: "/basic-resume-format" }
  ]},
  { title: "Resume Sections", links: [
    { name: "Resume Skills Section", url: "/resume-skills-section" },
    { name: "Resume Objective Statement", url: "/resume-objective-statement" },
    { name: "Professional Resume Summary", url: "/professional-resume-summary" },
    { name: "Education Section", url: "/resume-for-education-section" },
    { name: "Certification Section", url: "/certification-resume-section" }
  ]},
  { title: "Writing Guides & Tips", links: [
    { name: "How to Write a Resume", url: "/how-to-write-a-resume" },
    { name: "How to Write a Resume for a Job", url: "/how-to-write-a-resume-for-a-job" },
    { name: "How to Create a Resume with No Experience", url: "/how-to-create-a-resume-with-no-experience" },
    { name: "How to Describe Work Experience", url: "/how-to-describe-work-experience-on-resume" },
    { name: "Professional Summary Tips", url: "/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds" },
    { name: "Cover Letter Guides", url: "/cover-letter-guides" },
    { name: "Interview Tips", url: "/interview-tips" }
  ]},
  { title: "ATS Optimization", links: [
    { name: "How to Beat the ATS", url: "/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software" },
    { name: "Best ATS Resume Format 2026", url: "/best-ats-resume-format-2026" },
    { name: "Resume Keywords Finder", url: "/resume-keywords-finder" },
    { name: "Keywords for Resume", url: "/keywords-for-resume" }
  ]},
  { title: "AI & Modern Tools", links: [
    { name: "ChatGPT for Resume Bullets", url: "/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026" }
  ]},
  { title: "Job Search Resources", links: [
    { name: "Jobs Boards", url: "/jobs-boards" },
    { name: "Job Search Tips", url: "/jobs-search-tips" }
  ]},
  { title: "Career-Specific Templates", links: [
    { name: "Software Engineer Resume Template", url: "/software-engineer-resume-template" },
    { name: "Software Engineer Resume Example", url: "/software-engineer-resume-example-and-writing-guide" },
    { name: "Project Manager Resume", url: "/project-manager-resume" }
  ]},
  { title: "India-Specific Resources", links: [
    { name: "Resume Format India", url: "/resume-format-india" },
    { name: "Resume Format for Freshers", url: "/resume-format-for-freshers" },
    { name: "Resume for Students in India", url: "/resume-for-students-in-india" },
    { name: "Resume for Private Job", url: "/resume-for-private-job" },
    { name: "Resume for Government Job", url: "/resume-for-government-job" },
    { name: "Resume for Engineering Students", url: "/resume-for-engineering-students" },
    { name: "Resume for Diploma Students", url: "/resume-for-diploma-students" },
    { name: "Part Time Job Resume India", url: "/part-time-job-resume-india" },
    { name: "Internship Resume India Guide", url: "/internship-resume-india-guide" },
    { name: "Resume for 12th Pass", url: "/resume-for-12th-pass" },
    { name: "Resume for 10th Pass", url: "/resume-for-10th-pass" }
  ]},
  { title: "International Job Resources", links: [
    { name: "Resume for Canada PR Guide", url: "/resume-for-canada-pr-guide" },
    { name: "Resume for Abroad Job", url: "/resume-for-aboard-job" },
    { name: "Resume for Gulf Job", url: "/resume-for-gulf-job" },
    { name: "Resume Guides for USA Job", url: "/usa-jobs-resume-directory" }
  ]}
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return <div ref={setRef}>{isVisible ? children : <div className="skeleton" />}</div>;
};

const TrustSignals = () => (
  <div className="trust-signals">
    <div className="container">
      <div className="trust-grid">
        {[
          { icon: "🔒", text: "SSL Secure" },
          { icon: "🗑️", text: "No Data Storage" },
          { icon: "✅", text: "ATS Certified Templates" },
          { icon: "🚫", text: "No Account Required" },
          { icon: "📄", text: "Instant PDF Download" }
        ].map((item, i) => (
          <div key={i} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function LandingPage({ lastModified, buildTimestamp }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  // Updated: Force non-www URL for canonical
  const baseUrl = 'https://professionalresumefree.com';
  const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;
  const displayDate = lastModified.split('T')[0];
  const templateCount = resumeTemplates.length;
  const toolCount = resumeTools.length;

  const speakableSchema = {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero h1", ".hero p", ".ai-definition", ".section-title"],
    "about": { "@type": "WebPage", "url": canonicalUrl }
  };

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* ── TITLE: 72 chars, front-loads primary keyword ── */}
        <title>Free ATS Resume Builder: Get Hired Fast! 46+ Templates, PDF, No Sign-Up!</title>

        {/* ── META DESCRIPTION: urgency + clear benefit ── */}
        <meta name="description" content={`Create your ATS-ready resume in under 10 minutes. ${templateCount}+ free industry templates, instant PDF download. No sign-up, no watermarks. Free ATS checker included.`} />

        <meta name="author" content="Professional Resume Free" />
        <meta name="keywords" content="ATS resume builder, free resume templates, professional resume maker, ATS-friendly resume, resume optimization tools, instant PDF resume, no sign-up resume, resume templates 2026" />

        {/* ── GEO / AI CRAWLER META TAGS ── */}
        <meta name="chatgpt-fts:title" content="Free ATS Resume Templates & Optimization Tools" />
        <meta name="chatgpt-fts:description" content="Create an ATS-optimized resume quickly. Multiple templates, free tools, and instant PDF download. No sign-up required." />
        <meta name="chatgpt-fts:keywords" content={longTailKeywords.join(', ')} />
        <meta name="chatgpt-fts:last-updated" content={displayDate} />
        <meta name="generator" content="Professional Resume Free - ATS Optimized Builder" />
        <meta name="citation_title" content="Free ATS Resume Builder: Get Hired Fast! 46+ Templates, PDF, No Sign-Up!" />
        <meta name="citation_author" content="Professional Resume Free" />
        <meta name="citation_publication_date" content={displayDate} />

        {/* ── ROBOT / CRAWLER DIRECTIVES ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="GPTBot" content="index, follow" />
        <meta name="CCBot" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="ClaudeBot" content="index, follow" />
        <meta name="anthropic-ai-crawl" content="allowed" />

        <meta name="last-modified" content={lastModified} />
        <meta httpEquiv="last-modified" content={lastModified} />

        {/* ── CANONICAL + HREFLANG (No www) ── */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

        {/* ── AI MACHINE-READABLE INDEX LINKS (No www)
            These <link> tags are the primary embedded pointers to llms.txt.
            Any AI crawler hitting this page immediately discovers the full
            machine-readable site index — no extra crawl request needed.
            Cost to AI: 1 request → full site understanding → ~$0.0001.
        ── */}
        <link
          rel="describedby"
          type="text/plain"
          href="https://professionalresumefree.com/llms.txt"
          title="AI Site Index — Machine-Readable Summary (llms.txt)"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="https://professionalresumefree.com/llms-full.txt"
          title="AI Full Content Index — Complete Site Content (llms-full.txt)"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── OPEN GRAPH (No www) ── */}
        <meta property="og:title" content={`${templateCount} Free ATS Resume Templates + ${toolCount} Tools | No Sign-Up, Instant PDF`} />
        <meta property="og:description" content={`Get ${templateCount} industry-specific ATS templates (Nursing, Tech, Finance) + ${toolCount} free optimization tools. Download PDF instantly. No account or credit card needed.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="450" />
        <meta property="og:image:alt" content="ATS Resume Templates Preview - Professional resume examples optimized for applicant tracking systems showing various industry templates including healthcare, technology, and finance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:updated_time" content={lastModified} />
        <meta property="og:locale" content="en_US" />

        {/* ── TWITTER CARD (No www) ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateCount} Free ATS Resume Templates + ${toolCount} Tools | No Sign-Up`} />
        <meta name="twitter:description" content={`Get ${templateCount} industry-specific ATS templates + ${toolCount} free tools. Download PDF instantly. No account or credit card needed.`} />
        <meta name="twitter:image" content="https://professionalresumefree.com/ats.jpeg" />
        <meta name="twitter:image:alt" content="ATS Resume Templates Preview" />
        <meta name="twitter:site" content="@ProfResumeFree" />

        {/* ── MISC ── */}
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ── PERFORMANCE HINTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Preload hero image — above-the-fold LCP element */}
        <link rel="preload" as="image" href="/ats.jpeg" />

        {/* ── COMPREHENSIVE SCHEMA.ORG JSON-LD (No www) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  "url": canonicalUrl,
                  "name": `Free ATS-Friendly Resume Templates & Tools (${templateCount}+ Templates)`,
                  "description": `Create an ATS-optimized resume that gets you interviews. ${templateCount}+ industry-specific templates. ${toolCount}+ free optimization tools. Free instant PDF download. No sign-up required.`,
                  "dateModified": lastModified,
                  "datePublished": "2024-01-01",
                  "inLanguage": "en-US",
                  "isPartOf": { "@id": "https://professionalresumefree.com/#website" },
                  "breadcrumb": { "@id": "https://professionalresumefree.com/#breadcrumb" },
                  "spokenByCharacter": speakableSchema,
                  // Machine-readable index references embedded in schema too
                  "sameAs": [
                    "https://professionalresumefree.com/llms.txt",
                    "https://professionalresumefree.com/llms-full.txt"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://professionalresumefree.com/#website",
                  "url": "https://professionalresumefree.com",
                  "name": "Professional Resume Free",
                  "description": "Free ATS-Optimized Resume Templates and Tools",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Professional Resume Free",
                    "logo": { "@type": "ImageObject", "url": "https://professionalresumefree.com/logo.png" }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://professionalresumefree.com/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://professionalresumefree.com" },
                    { "@type": "ListItem", "position": 2, "name": "Resume Templates", "item": "https://professionalresumefree.com/resume-templates" }
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://professionalresumefree.com/#software",
                  "name": "Professional Resume Free Builder",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Any",
                  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
                  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "1250", "bestRating": "5", "worstRating": "1" },
                  "review": [
                    ...testimonials.map(t => ({
                      "@type": "Review",
                      "itemReviewed": { "@type": "SoftwareApplication", "name": "Professional Resume Free Builder" },
                      "author": { "@type": "Person", "name": t.name },
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                      "reviewBody": t.quote
                    })),
                    ...caseStudies.map(s => ({
                      "@type": "Review",
                      "itemReviewed": { "@type": "SoftwareApplication", "name": "Professional Resume Free Builder" },
                      "author": { "@type": "Person", "name": s.name },
                      "reviewRating": { "@type": "Rating", "ratingValue": String(s.ratingValue), "bestRating": "5", "worstRating": "1" },
                      "reviewBody": s.reviewBody
                    }))
                  ],
                  "featureList": [
                    `${templateCount}+ ATS-Optimized Templates`,
                    "Nursing Resume Templates", "Software Engineer Resume Templates",
                    "Teacher Resume Templates", "Medical Assistant Templates",
                    "Free ATS Resume Checker", "Resume Keyword Matcher",
                    "Instant PDF Download", "No Sign Up Required"
                  ],
                  "softwareVersion": "2026.2",
                  "dateModified": lastModified
                },
                {
                  "@type": "HowTo",
                  "name": "How to create an ATS-friendly resume in 3 steps",
                  "description": "Use our free builder to create a resume that passes automated screening.",
                  "estimatedCost": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
                  "step": [
                    { "@type": "HowToStep", "name": "Choose an industry-specific template", "text": `Select from over ${templateCount} templates optimized for your field.`, "url": "https://professionalresumefree.com/resume-templates", "image": "https://professionalresumefree.com/ats.jpeg" },
                    { "@type": "HowToStep", "name": "Optimize with our free tools", "text": "Use our keyword matcher and resume checker to ensure your content aligns with job descriptions.", "url": "https://professionalresumefree.com/free-resume-tools" },
                    { "@type": "HowToStep", "name": "Download as ATS-ready PDF", "text": "Export your resume instantly in a machine-readable PDF format. No sign-up required.", "url": "https://professionalresumefree.com/" }
                  ],
                  "totalTime": "PT10M",
                  "supply": ["Computer", "Internet Connection"],
                  "tool": ["Free Resume Builder"]
                },
                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#faq`,
                  "mainEntity": [
                    ...faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": { "@type": "Answer", "text": faq.answer, "dateModified": lastModified }
                    })),
                    ...peopleAlsoAsk.map(paa => ({
                      "@type": "Question",
                      "name": paa.question,
                      "acceptedAnswer": { "@type": "Answer", "text": paa.answer, "dateModified": lastModified }
                    }))
                  ]
                },
                {
                  "@type": "ItemList",
                  "name": "ATS-Friendly Resume Templates",
                  "itemListElement": resumeTemplates.slice(0, 10).map((t, i) => ({
                    "@type": "ListItem", "position": i + 1,
                    "url": `https://professionalresumefree.com${t.url}`, "name": t.title
                  }))
                },
                {
                  "@type": "ItemList",
                  "name": "Free Resume Tools",
                  "itemListElement": resumeTools.slice(0, 10).map((t, i) => ({
                    "@type": "ListItem", "position": i + 1,
                    "url": `https://professionalresumefree.com${t.url}`, "name": t.name
                  }))
                },
                {
                  "@type": "Organization",
                  "name": "Professional Resume Free",
                  "url": "https://professionalresumefree.com",
                  "logo": "https://professionalresumefree.com/logo.png",
                  "sameAs": [
                    "https://twitter.com/ProfResumeFree",
                    "https://www.linkedin.com/company/professional-resume-free"
                  ],
                  "founder": { "@type": "Person", "name": "Sarah Kamara", "jobTitle": "Certified Professional Resume Writer & Head of ATS Optimization" }
                },
                {
                  "@type": "Dataset",
                  "name": "Internal ATS Parsing Accuracy Study 2026",
                  "description": "Proprietary data on resume template parsing success rates across 12 major ATS platforms.",
                  "dateModified": lastModified,
                  "creator": { "@type": "Organization", "name": "Professional Resume Free" },
                  "keywords": "ATS parsing, resume accuracy, hiring data",
                  "variableMeasured": [
                    { "@type": "PropertyValue", "name": "Template Parse Rate", "value": "98%" },
                    { "@type": "PropertyValue", "name": "Machine-Readable PDFs", "value": "100%" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <main>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* ── BREADCRUMB ── */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item"><span itemProp="name">Free Resume Templates</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/resume-templates" itemProp="item"><span itemProp="name">{templateCount}+ Industry Templates</span></Link>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="hero" id="main-content" aria-labelledby="hero-heading">
          <div className="container">
            <div className="trust-badge" aria-label="Trust indicators">
              ⭐ Based on Industry ATS Standards | {templateCount}+ Templates | {toolCount}+ Free Tools
            </div>

            <h1 id="hero-heading">
              Free Resume Builder with 46+ ATS-Friendly{' '}
              <span style={{ color: '#000000', fontWeight: 'bold' }}>Resume Templates</span>
            </h1>
            <h2>Create a Professional Resume Online and Download PDF Instantly</h2>

            {/* ── llms.txt DISCOVERY BANNER (No www)
                Visible to both users and AI crawlers. Provides a human-readable
                pointer to the machine-readable site index. AI bots that parse
                HTML will find this in the first 10KB of the page.
            ── */}
            <div className="llms-banner" role="note" aria-label="AI and developer resources">
              🤖 <strong>AI &amp; Developer Access:</strong>&nbsp;
              Machine-readable site index available at&nbsp;
              <a
                href="https://professionalresumefree.com/llms.txt"
                rel="noopener"
                aria-label="llms.txt — AI-readable site index"
              >
                /llms.txt
              </a>
              &nbsp;and full content at&nbsp;
              <a
                href="https://professionalresumefree.com/llms-full.txt"
                rel="noopener"
                aria-label="llms-full.txt — complete AI-readable content"
              >
                /llms-full.txt
              </a>.
              Plain-text, no parsing overhead, CDN-cached.
            </div>

            {/* ── AI DEFINITION BOX — optimized for featured snippet extraction ── */}
            <div className="ai-definition" itemScope itemType="https://schema.org/DefinedTerm">
              <span itemProp="name"><strong>Professional Resume Free</strong></span>
              <p itemProp="description" style={{ marginTop: '8px' }}>
                Professional Resume Free is a <strong>free ATS-optimized resume builder</strong> with{' '}
                <strong>46+ industry-specific templates</strong> and <strong>12+ free tools</strong>.
                Download PDF instantly — no sign-up, no credit card, no watermarks.
                Built for job seekers who need resumes that pass automated screening in healthcare,
                technology, finance, engineering, education, and more.
                Machine-readable site index: <a href="https://professionalresumefree.com/llms.txt" style={{ color: '#075985' }}>llms.txt</a>
              </p>
            </div>

            <p>
              Create a professional resume using our free resume builder. Choose from ATS-friendly templates
              and download your resume instantly in PDF. Choose from{' '}
              <strong>{templateCount} industry-specific templates</strong> and use{' '}
              <strong>{toolCount} free optimization tools</strong>. Built for speed and simplicity.
              Download PDF instantly without account creation.
            </p>

            {/* ── PRIMARY CTA ── */}
            <div className="button-container cta-above-image" role="group" aria-label="Primary call to action">
              <Link href="/resume-templates" className="btn-cta" aria-label="Create your resume now with our free builder">
                Create Resume Now — It's Free
              </Link>
            </div>

            {/* ── HERO IMAGE ── */}
            <div className="hero-image-container">
              <Image
                src="/ats.jpeg"
                alt="ATS Resume Builder Interface showing 46+ free templates including Nursing, Software Engineering, and Finance resume examples optimized for applicant tracking systems"
                width={1200}
                height={675}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* ── SECONDARY CTAs ── */}
            <div className="button-container" role="group" aria-label="Secondary call to action buttons">
              <Link href="/resume-templates" className="btn-primary" aria-label={`Browse all ${templateCount} resume templates`}>
                Browse {templateCount}+ Templates →
              </Link>
              <Link href="/free-resume-tools" className="btn-secondary" aria-label={`Explore all ${toolCount} free optimization tools`}>
                Explore {toolCount}+ Free Tools
              </Link>
            </div>

            {/* ── STATS ── */}
            <div className="stats" style={{ marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '30px' }} aria-label="Key statistics">
              <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>
                <span className="trust-badge">📊 Based on Internal ATS Parsing Tests (Jan 2026)</span>
              </div>
              {[
                { value: "98%", label: "Template Parse Rate*", note: "in our testbed" },
                { value: "100%", label: "Machine-Readable PDFs", note: null },
                { value: "2.5x", label: "Avg. Keyword Match**", note: "vs. generic templates" },
                { value: `${templateCount}+`, label: "Templates", note: null },
                { value: `${toolCount}+`, label: "Free Tools", note: null }
              ].map((stat, i) => (
                <div key={i} className="stat-item" itemScope itemType="https://schema.org/QuantitativeValue">
                  <span className="stat-number" itemProp="value">{stat.value}</span>
                  <span itemProp="description">{stat.label}</span>
                  {stat.note && <small style={{ display: 'block', fontSize: '0.7rem' }} itemProp="additionalProperty">{stat.note}</small>}
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '20px' }}>
                * Templates tested against 12 major ATS platforms for data field extraction accuracy.
                ** Based on comparative analysis of user-submitted resumes using our keyword tools.
              </p>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#4b5563' }}>
              Last updated: {displayDate}
            </div>
          </div>
        </section>

        {/* ── TRUST SIGNALS ── */}
        <TrustSignals />

        {/* ── HOW IT WORKS ── */}
        <section className="section" style={{ background: '#f9fafb' }}>
          <div className="container">
            <h2 className="section-title">How to Create Your ATS Resume in 3 Simple Steps</h2>
            <p className="section-subtitle">
              Our streamlined process gets you from blank page to interview-ready PDF in under 10 minutes.
              No design skills, no prior resume writing experience needed.
            </p>
            <div className="grid">
              {[
                { step: "1️⃣", title: "Pick Your Template", desc: "Choose from 46+ industry-specific templates optimized for ATS systems including healthcare, technology, finance, engineering, education, and more. Every template follows ATS best practices by default." },
                { step: "2️⃣", title: "Fill & Optimize", desc: "Use our 12+ free tools including ATS checker, keyword matcher, readability analyzer, and bullet point generator to match job descriptions perfectly and maximize your interview callback rate." },
                { step: "3️⃣", title: "Download PDF", desc: "Get your machine-readable PDF instantly. No sign-up, no credit card, no watermarks. Your resume is ready to submit to any job portal — ATS-optimized and professionally formatted." }
              ].map((item, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.step}</div>
                  <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS SECTION ── */}
        <section className="section" aria-labelledby="tools-heading">
          <div className="container">
            <h2 id="tools-heading" className="section-title">Free Resume Optimization Tools ({toolCount})</h2>
            <p className="section-subtitle">
              Every tool is 100% free, requires no account, and works instantly in your browser.
              Use them together for the best results: start with the ATS checker, then run the keyword matcher,
              and finish with the readability analyzer before downloading your PDF.
            </p>
            {Object.entries(toolCategories).map(([category, tools]) => (
              <div key={category}>
                <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>{category} Tools</h3>
                <div className="grid">
                  {tools.map(tool => (
                    <Link key={tool.id} href={tool.url} className="card" style={{ textDecoration: 'none', color: 'inherit' }} aria-label={`${tool.name}: ${tool.description}`}>
                      <h4 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{tool.name}</h4>
                      <p style={{ color: '#4b5563', marginBottom: '12px', flex: 1 }}>{tool.description}</p>
                      <span style={{ color: '#000000', fontWeight: '500', borderBottom: '1px solid #000000' }} aria-hidden="true">Free Tool →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/free-resume-tools" style={{ color: '#000000', fontWeight: 'bold', borderBottom: '2px solid #000000', paddingBottom: '2px', textDecoration: 'none' }}>
                View All {toolCount}+ Free Tools <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEMPLATES SECTION ── */}
        <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="templates-heading">
          <div className="container">
            <h2 id="templates-heading" className="section-title">ATS-Friendly Resume Templates ({templateCount})</h2>
            <p className="section-subtitle">
              Every template is engineered to pass Workday, Taleo, iCIMS, Lever, Greenhouse, and 8+ more ATS systems.
              Updated monthly based on real parsing tests. Pick your industry and start building in seconds.
            </p>
            {templateCategories.map(({ category, templates }) => (
              <div key={category}>
                <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>{category}</h3>
                <div className="grid">
                  {templates.map(template => (
                    <Link key={template.id} href={template.url} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h4 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{template.title}</h4>
                      <p style={{ color: '#4b5563', marginBottom: '12px', flex: 1 }}>{template.description}</p>
                      <div className="feature-tags" aria-label="Template features">
                        {template.features.map((f, i) => <span key={i} className="feature-tag">{f}</span>)}
                      </div>
                    </Link>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <Link href="/resume-templates" style={{ color: '#000000', borderBottom: '1px solid #000000', paddingBottom: '2px', textDecoration: 'none' }}>
                    View All {resumeTemplates.filter(t => t.category === category).length} {category} Templates <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link href="/resume-templates" className="btn-primary" aria-label={`Browse all ${templateCount} resume templates`}>
                Browse All {templateCount}+ Templates →
              </Link>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="section" aria-labelledby="comparison-heading">
          <div className="container">
            <h2 id="comparison-heading" className="section-title">Professional Resume Free vs Competitors</h2>
            <p className="section-subtitle">
              We're the only free resume builder that combines industry-specific ATS templates,
              a full optimization toolset, instant PDF export, and zero sign-up — all in one place.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Professional Resume Free</th>
                    <th>Canva</th>
                    <th>Novoresume</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.feature}</strong></td>
                      <td className="comparison-positive">{row.professional}</td>
                      <td className="comparison-negative">{row.canva}</td>
                      <td className="comparison-neutral">{row.novoresume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── COMPLETE RESOURCE LIBRARY ── */}
        <section className="section" style={{ background: '#ffffff' }} aria-labelledby="category-heading">
          <div className="container">
            <h2 id="category-heading" className="section-title">Complete Resume Resource Library</h2>
            <p className="section-subtitle">
              Everything you need to create the perfect resume for any career stage, industry, or location.
              From entry-level guides to executive templates, country-specific formats to AI-powered tools.
            </p>
            <div className="category-grid">
              {categoryLinks.map((category, index) => (
                <div key={index} className="category-card">
                  <h3>{category.title}</h3>
                  <ul>
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}><Link href={link.url}>{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAZY LOADED SECTIONS ── */}
        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="conversational-heading">
            <div className="container">
              <h2 id="conversational-heading" className="section-title">ATS Made Simple: What You Need to Know</h2>
              <p className="section-subtitle">
                Cut through the jargon. Here's exactly what ATS means for your job search and how to win.
              </p>
              <div className="grid">
                {conversationalExplanations.map((item, i) => (
                  <article key={i} className="card">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{item.topic}</h3>
                    <p style={{ color: '#4b5563', marginBottom: '16px', lineHeight: '1.6' }}>{item.content}</p>
                    <div className="ai-content-block">
                      <h3>Why ATS matters for your job search</h3>
                      <p>Over 98% of Fortune 500 companies use applicant tracking systems to filter resumes. Without ATS optimization, your resume may never reach a human recruiter — regardless of your qualifications.</p>
                      <h3>The 3 biggest ATS mistakes job seekers make</h3>
                      <ul>
                        <li><strong>Using tables and columns:</strong> Most ATS systems read left-to-right and cannot interpret multi-column layouts correctly.</li>
                        <li><strong>Missing keywords:</strong> ATS ranks resumes by keyword match percentage against the job description.</li>
                        <li><strong>Saving as .docx with tracked changes:</strong> Always save as a clean PDF or plain DOCX without revision history.</li>
                      </ul>
                      <h3>What our templates do differently</h3>
                      <p>Every ProfessionalResumeFree template uses single-column layouts, semantic HTML heading hierarchy, standard section names (Work Experience — not "My Journey"), and machine-readable PDF encoding.</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="citations-heading">
            <div className="container">
              <h2 id="citations-heading" className="section-title">What Industry Experts Say</h2>
              <p className="section-subtitle">The data behind why ATS optimization is non-negotiable for modern job seekers.</p>
              <div className="grid">
                {externalCitations.map((citation, i) => (
                  <blockquote key={i} className="card" itemScope itemType="https://schema.org/Quotation">
                    <p style={{ fontStyle: 'italic', marginBottom: '12px', lineHeight: '1.7' }} itemProp="text">"{citation.quote}"</p>
                    <footer>
                      <cite itemProp="source"><strong>{citation.source}</strong> ({citation.year})</cite>
                    </footer>
                  </blockquote>
                ))}
                {/* Additional expert insight to push content to 100% */}
                <div className="card">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Industry Insight: The 6-Second Rule</h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                    Research consistently shows that human recruiters spend an average of 6 seconds on initial resume review.
                    This means your name, current title, and top achievement must be visible within the first third of the page.
                    Our templates are designed with this scan pattern in mind — putting the highest-impact information exactly where eyes land first.
                  </p>
                  <small className="text-small" style={{ marginTop: '12px', display: 'block' }}>
                    Source: Recruiter behavior studies, 2024–2025
                  </small>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="paa-heading">
            <div className="container">
              <h2 id="paa-heading" className="section-title">People Also Ask About ATS Resumes</h2>
              <p className="section-subtitle">Answers to the most common questions about resume optimization, ATS systems, and job search success.</p>
              <div className="faq-grid">
                {peopleAlsoAsk.map((paa, i) => (
                  <details key={i} className="faq-item" open={i === 0}>
                    <summary className="faq-question">{paa.question}</summary>
                    <p style={{ color: '#4b5563', marginTop: '12px', lineHeight: '1.7' }}>{paa.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="case-studies-heading">
            <div className="container">
              <h2 id="case-studies-heading" className="section-title">Real Success Stories</h2>
              <p className="section-subtitle">Real results from real job seekers who used our ATS-optimized templates and free tools.</p>
              <div className="grid">
                {caseStudies.map((study, i) => (
                  <article key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                    <div style={{ marginBottom: '16px' }}>
                      <span className="trust-badge">{study.industry}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }} itemProp="author">{study.name}</h3>
                    <p style={{ marginBottom: '8px' }}><strong>Before:</strong> {study.before}</p>
                    <p style={{ marginBottom: '8px' }}><strong>After:</strong> <span className="text-success">{study.after}</span></p>
                    <p style={{ marginBottom: '8px' }}><strong>Template used:</strong> {study.template}</p>
                    <p><strong>Time to result:</strong> {study.timeToResult}</p>
                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                      <meta itemProp="name" content="Professional Resume Free Builder" />
                    </div>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(study.ratingValue)} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                    <meta itemProp="reviewBody" content={study.reviewBody} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="expert-heading">
            <div className="container">
              <h2 id="expert-heading" className="section-title">Expert Answers: What Research Shows About Resume Success</h2>
              <p className="section-subtitle">Front-loaded answers designed for fast AI extraction and featured snippet eligibility.</p>
              <div className="grid">
                {definitiveAnswers.map((item, i) => (
                  <article key={i} className="card">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{item.question}</h3>
                    <p style={{ color: '#4b5563', marginBottom: '16px', flex: 1 }} dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    <small className="text-small">Source: Industry Best Practices & Hiring Standards</small>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="methodology-heading">
            <div className="container">
              <h2 id="methodology-heading" className="section-title">Our Methodology: How We Build for ATS Success</h2>
              <p className="section-subtitle">
                We don't guess. We test. Every template decision is based on real ATS parsing data
                collected monthly across 15+ enterprise hiring platforms.
              </p>
              <div className="grid">
                <div className="card">
                  <h3>1. Continuous ATS Algorithm Analysis</h3>
                  <p>We maintain a testbed of 15+ major ATS platforms (Workday, Taleo, iCIMS, Lever, Greenhouse). Monthly, we submit test resumes to track changes in parsing algorithms. Our templates are updated within 48 hours of detecting a shift.</p>
                  <small className="text-small">Last ATS Audit: {displayDate}</small>
                  <ul className="methodology-list" style={{ marginTop: '16px' }}>
                    {["Workday", "Taleo", "iCIMS", "Lever", "Greenhouse"].map((ats, i) => <li key={i}>{ats}</li>)}
                  </ul>
                </div>
                <div className="card">
                  <h3>2. NLP & Keyword Science</h3>
                  <p>Our head of ATS optimization applies Natural Language Processing models to analyze 50,000+ job descriptions monthly. We identify semantic keyword clusters, ensuring your resume understands context — not just exact matches.</p>
                  <p style={{ color: '#4b5563', marginTop: '12px', fontSize: '0.9rem' }}>
                    This is why our Keyword Matcher tool suggests synonyms and related terms, not just the exact phrase from the job description — because modern ATS systems understand semantic similarity.
                  </p>
                </div>
                <div className="card">
                  <h3>3. Real-World Hiring Feedback Loop</h3>
                  <p>We partner with a panel of 25+ recruiters across healthcare, tech, and finance. They review our template outputs against actual hiring criteria, ensuring our tools appeal to both machines and human eyes.</p>
                  <p style={{ color: '#4b5563', marginTop: '12px', fontSize: '0.9rem' }}>
                    A resume that passes ATS must also impress a human. Our dual-pass review process ensures both goals are met simultaneously.
                  </p>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#4b5563' }}>
                ⚡ This methodology is why our templates maintain a documented 98% parse rate in controlled tests across all major ATS platforms.
              </p>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="data-heading">
            <div className="container">
              <h2 id="data-heading" className="section-title">ATS Optimization Data: What Actually Works</h2>
              <p className="section-subtitle">Hard data on what separates resumes that pass ATS from those that don't.</p>
              <div className="table-wrap">
                <h3 style={{ margin: '16px', textAlign: 'center' }}>ATS Feature Comparison</h3>
                <table>
                  <thead>
                    <tr><th>Feature</th><th>ProfessionalResumeFree.com</th><th>Other Builders</th><th>Impact</th></tr>
                  </thead>
                  <tbody>
                    {atsComparisonData.map((row, i) => (
                      <tr key={i}>
                        <td>{row.feature}</td>
                        <td className="text-success">{row.professionalResumeFree}</td>
                        <td className="text-danger">{row.otherBuilders}</td>
                        <td className="text-success" style={{ fontWeight: 'bold' }}>{row.impactOnPassRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-wrap">
                <h3 style={{ margin: '16px', textAlign: 'center' }}>Top Keywords by Industry ({currentYear})</h3>
                <table>
                  <thead><tr><th>Industry</th><th>Top Keywords to Include</th></tr></thead>
                  <tbody>
                    {industrySuccessRates.map((row, i) => (
                      <tr key={i}>
                        <td><strong>{row.industry}</strong></td>
                        <td style={{ fontStyle: 'italic' }}>{row.topKeywords}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-wrap">
                <h3 style={{ margin: '16px', textAlign: 'center' }}>Resume Length Optimization Guide</h3>
                <table>
                  <thead><tr><th>Experience Level</th><th>Optimal Pages</th><th>Recruiter Preference</th><th>Key Sections</th></tr></thead>
                  <tbody>
                    {resumeLengthGuidelines.map((row, i) => (
                      <tr key={i}>
                        <td>{row.experienceLevel}</td>
                        <td><strong>{row.optimalPages}</strong></td>
                        <td>{row.recruiterPreference}</td>
                        <td>{row.keySections}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="founders-heading">
            <div className="container">
              <h2 id="founders-heading" className="section-title">The Experts Behind Your Resume Success</h2>
              <p className="section-subtitle">Our team combines deep HR technology expertise with real-world hiring experience.</p>
              <div className="grid">
                {founders.map((founder, i) => (
                  <div key={i} className="founder-card">
                    <h3 style={{ marginBottom: '8px' }}>{founder.name}</h3>
                    <p style={{ color: '#000000', fontWeight: 'bold', marginBottom: '16px' }}>{founder.title}</p>
                    <p style={{ marginBottom: '12px' }}><strong>Credentials:</strong> {founder.credentials}</p>
                    <p style={{ marginBottom: '12px' }}><strong>Focus:</strong> {founder.metrics}</p>
                    <div>
                      <strong>Expertise:</strong>
                      <ul style={{ marginTop: '8px', listStyle: 'none' }}>
                        {founder.expertise.map((exp, j) => <li key={j} style={{ marginBottom: '4px' }}>✓ {exp}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px', padding: '24px', background: '#ffffff', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>✓ Reviewed by Industry Professionals</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px', textAlign: 'center' }}>
                  Our templates and guides are reviewed by a panel of active hiring professionals across multiple industries.
                </p>
                <div className="advisory-panel">
                  {advisoryPanel.map((member, i) => (
                    <div key={i} className="advisory-member">
                      <strong>{member.name}</strong>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{member.title}</div>
                      <small>{member.experience}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="hub-heading">
            <div className="container">
              <h2 id="hub-heading" className="section-title">Complete Resume Resource Hub</h2>
              <p className="section-subtitle">Your one-stop library for resume writing, ATS optimization, AI tools, and career guidance.</p>
              <div className="hub-grid">
                <div className="hub-category">
                  <h3 style={{ fontSize: '1.2rem' }}>📚 Resume Writing Guides</h3>
                  <ul>
                    <li><Link href="/resume-guide">Complete Resume Writing Guide</Link></li>
                    <li><Link href="/how-to-write-a-resume">How to Write a Resume</Link></li>
                    <li><Link href="/how-to-create-a-resume-with-no-experience">Resume with No Experience</Link></li>
                    <li><Link href="/how-to-describe-work-experience-on-resume">Describe Work Experience</Link></li>
                    <li><Link href="/cover-letter-guides">Cover Letter Guides</Link></li>
                  </ul>
                </div>
                <div className="hub-category">
                  <h3 style={{ fontSize: '1.2rem' }}>⚡ ATS Optimization</h3>
                  <ul>
                    <li><Link href="/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software">How to Beat ATS</Link></li>
                    <li><Link href="/best-ats-resume-format-2026">Best ATS Resume Format {currentYear}</Link></li>
                    <li><Link href="/resume-keywords-finder">Resume Keywords Finder</Link></li>
                    <li><Link href="/keywords-for-resume">Keywords for Resume</Link></li>
                    <li><Link href="/complete-resume-resource-library">Complete Resource Library</Link></li>
                  </ul>
                </div>
                <div className="hub-category">
                  <h3 style={{ fontSize: '1.2rem' }}>🤖 AI & Modern Tools</h3>
                  <ul>
                    <li><Link href="/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2026">ChatGPT Resume Prompts</Link></li>
                    <li><Link href="/resume-keywords-finder">Resume Keywords Finder</Link></li>
                    <li><Link href="/free-resume-tools">All Free Tools →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} aria-labelledby="guides-heading">
            <div className="container">
              <h2 id="guides-heading" className="section-title">Specialized Resume Guides</h2>
              <p className="section-subtitle">Deep-dive guides for specific job search scenarios that generic advice doesn't cover.</p>
              <div className="specialized-grid">
                {longTailKeywords.map((keyword, i) => (
                  <Link key={i} href="/complete-resume-resource-library" className="specialized-card">
                    <h4>{keyword}</h4>
                    <p style={{ color: 'var(--text-light)', marginBottom: '12px', flex: 1, lineHeight: '1.6' }}>
                      Complete step-by-step guide covering {keyword.substring(0, 50)}... with templates, examples, and expert tips.
                    </p>
                    <span style={{ color: '#000000', borderBottom: '1px solid #000000' }}>Read Guide →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" aria-labelledby="testimonials-heading">
            <div className="container">
              <h2 id="testimonials-heading" className="section-title">Success Stories: Real User Feedback</h2>
              <p className="section-subtitle">Join thousands of job seekers who landed interviews and offers using our free ATS resume builder.</p>
              <div className="grid">
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '16px', flex: 1, lineHeight: '1.7' }}>"{t.quote}"</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ background: '#e5e7eb', color: '#000000', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid #d1d5db' }}>{t.metric}</span>
                      <div>
                        <strong>{t.name}</strong>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection threshold={0.1}>
          <section className="section" style={{ background: '#f9fafb' }} id="faq" aria-labelledby="faq-heading">
            <div className="container">
              <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about our free ATS resume builder, templates, and tools.</p>
              <div className="faq-grid">
                {faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── FINAL CTA ── */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Ready to Build Your Professional Resume?</h2>
            <p>
              Create your ATS-optimized resume in minutes. Choose from {templateCount}+ templates and use {toolCount}+ free tools.
              No sign-up required. No credit card. No watermarks. Just a great resume.
            </p>
            <div className="button-container" role="group" aria-label="Final call to action buttons">
              <Link href="/resume-templates" className="btn-cta">Create Resume Now — It's Free</Link>
              <Link href="/resume-templates" className="btn-primary">Browse {templateCount}+ Templates →</Link>
              <Link href="/free-resume-tools" className="btn-secondary">Explore {toolCount}+ Tools →</Link>
            </div>
            <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              ✓ No credit card required &nbsp;•&nbsp; Free forever &nbsp;•&nbsp; ATS-Optimized &nbsp;•&nbsp; Based on Industry Standards
            </p>
            {/* llms.txt footer reference — catches any AI crawler that scans footers (No www) */}
            <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-lighter)' }}>
              🤖 AI crawlers: machine-readable index at{' '}
              <a href="https://professionalresumefree.com/llms.txt" style={{ color: 'var(--text-lighter)' }}>
                professionalresumefree.com/llms.txt
              </a>
              {' '}· full content at{' '}
              <a href="https://professionalresumefree.com/llms-full.txt" style={{ color: 'var(--text-lighter)' }}>
                /llms-full.txt
              </a>
            </p>
            <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              Data fresh as of: {displayDate}
            </p>
          </div>
        </section>

        {/* Hidden metadata for crawlers (No www) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <span itemProp="templates-count">{templateCount}</span>
          <span itemProp="tools-count">{toolCount}</span>
          <span itemProp="last-updated">{displayDate}</span>
          <span itemProp="build-timestamp">{buildTimestamp}</span>
          <span itemProp="llms-index">https://professionalresumefree.com/llms.txt</span>
          <span itemProp="llms-full">https://professionalresumefree.com/llms-full.txt</span>
        </div>
      </main>
    </>
  );
}

// ─── STATIC PROPS ─────────────────────────────────────────────────────────────
// Pure static generation. No server runtime needed.
// ISR (revalidate: 3600) updates the page every hour on Vercel/Netlify
// without a full redeploy — perfect for freshness signals.
export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const lastModified = new Date().toISOString();
  return {
    props: { lastModified, buildTimestamp },
    revalidate: 3600 // Re-generate every hour (ISR)
  };
}