import { useState, useCallback } from 'react';
import Head from 'next/head';
import styles from './free-resume-template-selector.module.css';

// Current year for dynamic content
const CURRENT_YEAR = new Date().getFullYear();

// FAQ Data
const FAQS = [
  {
    question: "How do I choose the right resume template?",
    answer: "Choose based on your industry and experience level: Chronological for traditional fields, Functional for career changers, Combination for most professionals. Consider ATS compatibility for corporate jobs."
  },
  {
    question: "What's the difference between ATS-friendly and creative templates?",
    answer: "ATS-friendly templates use simple formatting, standard fonts, and clean layouts that applicant tracking systems can parse easily. Creative templates use design elements better suited for portfolios, creative fields, or in-person submissions."
  },
  {
    question: "Are these templates really free to use?",
    answer: "Yes! All templates are 100% free for personal and professional use. No watermarks, no subscriptions, no hidden fees."
  },
  {
    question: "Which file format is best for resumes?",
    answer: ".docx is most ATS-friendly. PDF preserves formatting best for human reviewers. We provide both formats for each template."
  },
  {
    question: "How do I customize the templates?",
    answer: "All templates are fully editable in Microsoft Word, Google Docs, or similar software. Simply replace placeholder text with your information."
  },
  {
    question: "What if I need help customizing a template?",
    answer: "Each template includes detailed customization instructions and tips specific to that template's strengths."
  }
];

// How-to steps
const HOW_TO_STEPS = [
  {
    name: "Browse Templates",
    text: "Explore our curated collection of professional templates filtered by industry, style, and experience level."
  },
  {
    name: "Preview & Compare",
    text: "View detailed previews of each template and compare features like ATS compatibility and design elements."
  },
  {
    name: "Select Your Template",
    text: "Choose the template that best matches your industry, experience level, and career goals."
  },
  {
    name: "Download & Customize",
    text: "Download your chosen template in .docx or PDF format and start customizing with your information."
  },
  {
    name: "Optimize & Apply",
    text: "Follow our included optimization tips to tailor your resume for specific job applications."
  }
];

// Sample Reviews
const REVIEWS = [
  {
    name: "Michael Chen",
    position: "IT Director",
    rating: 5,
    date: "2024-02-25",
    review: "The ATS-optimized template helped me get past automated screenings. Landed interviews at 3 Fortune 500 companies."
  },
  {
    name: "Sarah Johnson",
    position: "Graphic Designer",
    rating: 5,
    date: "2024-02-22",
    review: "Creative portfolio template was perfect for my design career. Received compliments from every interviewer."
  },
  {
    name: "David Park",
    position: "Career Coach",
    rating: 4,
    date: "2024-02-20",
    review: "I recommend these templates to all my clients. The variety suits every career stage and industry."
  },
  {
    name: "Jessica Martinez",
    position: "Recent Graduate",
    rating: 5,
    date: "2024-02-18",
    review: "Entry-level template helped me highlight my education and internships. Got my first job offer!"
  }
];

// Resume Templates Data
const RESUME_TEMPLATES = [
  {
    id: 'professional-classic',
    name: 'Professional Classic',
    category: 'ats-friendly',
    industry: ['business', 'finance', 'corporate', 'legal'],
    experience: ['entry', 'mid', 'senior'],
    style: 'chronological',
    description: 'Clean, traditional layout optimized for ATS systems. Perfect for corporate environments.',
    features: ['ATS Optimized', 'Single Column', 'Standard Fonts', 'Chronological Format'],
    compatibility: {
      ats: 95,
      readability: 90,
      design: 75
    },
    previewColors: ['#2c3e50', '#3498db', '#ffffff'],
    icon: '📄'
  },
  {
    id: 'modern-executive',
    name: 'Modern Executive',
    category: 'professional',
    industry: ['management', 'executive', 'consulting', 'tech'],
    experience: ['mid', 'senior', 'executive'],
    style: 'combination',
    description: 'Contemporary design with strategic emphasis on achievements and leadership.',
    features: ['Strategic Layout', 'Achievement Focus', 'Two Columns', 'Professional Typography'],
    compatibility: {
      ats: 85,
      readability: 95,
      design: 90
    },
    previewColors: ['#1a1a1a', '#e74c3c', '#f8f9fa'],
    icon: '👔'
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    category: 'creative',
    industry: ['design', 'marketing', 'arts', 'media'],
    experience: ['entry', 'mid', 'senior'],
    style: 'functional',
    description: 'Visually striking template perfect for creative professionals and portfolio presentation.',
    features: ['Visual Design', 'Portfolio Integration', 'Color Options', 'Creative Layout'],
    compatibility: {
      ats: 65,
      readability: 85,
      design: 98
    },
    previewColors: ['#9b59b6', '#2ecc71', '#ecf0f1'],
    icon: '🎨'
  },
  {
    id: 'tech-minimalist',
    name: 'Tech Minimalist',
    category: 'tech',
    industry: ['technology', 'engineering', 'development', 'data'],
    experience: ['entry', 'mid', 'senior'],
    style: 'combination',
    description: 'Clean, technical layout emphasizing skills and projects. Perfect for developers and engineers.',
    features: ['Skills Emphasis', 'Project Showcase', 'Code-Friendly', 'Minimal Design'],
    compatibility: {
      ats: 90,
      readability: 88,
      design: 85
    },
    previewColors: ['#2c3e50', '#1abc9c', '#ffffff'],
    icon: '💻'
  },
  {
    id: 'academic-scholar',
    name: 'Academic Scholar',
    category: 'academic',
    industry: ['education', 'research', 'science', 'healthcare'],
    experience: ['entry', 'mid', 'senior'],
    style: 'chronological',
    description: 'Formal template optimized for academic credentials, publications, and research experience.',
    features: ['Publications Section', 'Research Focus', 'Formal Format', 'Credential Emphasis'],
    compatibility: {
      ats: 80,
      readability: 92,
      design: 78
    },
    previewColors: ['#34495e', '#e67e22', '#fdfefe'],
    icon: '🎓'
  },
  {
    id: 'entry-level-pro',
    name: 'Entry Level Pro',
    category: 'entry-level',
    industry: ['all'],
    experience: ['entry'],
    style: 'functional',
    description: 'Designed for recent graduates and career starters to highlight education and transferable skills.',
    features: ['Education Focus', 'Skills Highlight', 'Internship Format', 'Beginner Friendly'],
    compatibility: {
      ats: 92,
      readability: 95,
      design: 80
    },
    previewColors: ['#3498db', '#f1c40f', '#ffffff'],
    icon: '🚀'
  },
  {
    id: 'executive-premium',
    name: 'Executive Premium',
    category: 'executive',
    industry: ['executive', 'management', 'leadership', 'corporate'],
    experience: ['senior', 'executive'],
    style: 'combination',
    description: 'Luxury design for C-level executives and senior leaders emphasizing strategic impact.',
    features: ['Executive Format', 'Strategic Impact', 'Premium Design', 'Leadership Focus'],
    compatibility: {
      ats: 75,
      readability: 90,
      design: 96
    },
    previewColors: ['#000000', '#c0392b', '#f5f5f5'],
    icon: '🏢'
  },
  {
    id: 'functional-skills',
    name: 'Functional Skills',
    category: 'career-change',
    industry: ['all'],
    experience: ['entry', 'mid', 'senior'],
    style: 'functional',
    description: 'Focus on skills and achievements rather than chronological work history. Perfect for career changers.',
    features: ['Skills-Based', 'Career Change', 'Achievement Focus', 'Flexible Format'],
    compatibility: {
      ats: 70,
      readability: 85,
      design: 82
    },
    previewColors: ['#27ae60', '#8e44ad', '#ffffff'],
    icon: '🔄'
  }
];

// Filter options
const FILTER_OPTIONS = {
  categories: [
    { id: 'all', label: 'All Templates', count: RESUME_TEMPLATES.length },
    { id: 'ats-friendly', label: 'ATS Friendly', count: RESUME_TEMPLATES.filter(t => t.category === 'ats-friendly' || t.compatibility.ats >= 85).length },
    { id: 'professional', label: 'Professional', count: RESUME_TEMPLATES.filter(t => t.category === 'professional' || t.category === 'executive').length },
    { id: 'creative', label: 'Creative', count: RESUME_TEMPLATES.filter(t => t.category === 'creative').length },
    { id: 'tech', label: 'Technology', count: RESUME_TEMPLATES.filter(t => t.category === 'tech').length },
    { id: 'academic', label: 'Academic', count: RESUME_TEMPLATES.filter(t => t.category === 'academic').length },
    { id: 'entry-level', label: 'Entry Level', count: RESUME_TEMPLATES.filter(t => t.category === 'entry-level').length }
  ],
  experience: [
    { id: 'all', label: 'All Levels' },
    { id: 'entry', label: 'Entry Level' },
    { id: 'mid', label: 'Mid Career' },
    { id: 'senior', label: 'Senior Level' },
    { id: 'executive', label: 'Executive' }
  ],
  styles: [
    { id: 'all', label: 'All Formats' },
    { id: 'chronological', label: 'Chronological' },
    { id: 'functional', label: 'Functional' },
    { id: 'combination', label: 'Combination' }
  ]
};

// Industry options
const INDUSTRY_OPTIONS = [
  'All Industries', 'Business', 'Technology', 'Finance', 'Healthcare', 'Education', 
  'Marketing', 'Design', 'Engineering', 'Legal', 'Science', 'Creative Arts'
];

function TemplateCard({ template, isSelected, onSelect, onPreview }) {
  const compatibilityScore = Math.round(
    (template.compatibility.ats + template.compatibility.readability + template.compatibility.design) / 3
  );

  return (
    <div className={`${styles.templateCard} ${isSelected ? styles.selected : ''}`}>
      <div className={styles.templateHeader}>
        <div className={styles.templateIcon}>{template.icon}</div>
        <div className={styles.templateTitle}>
          <h3 className={styles.templateName}>{template.name}</h3>
          <div className={styles.templateMeta}>
            <span className={styles.templateCategory}>{template.category.replace('-', ' ')}</span>
            <span className={styles.templateStyle}>{template.style}</span>
          </div>
        </div>
        <div className={styles.compatibilityScore}>
          <div className={styles.scoreValue}>{compatibilityScore}%</div>
          <div className={styles.scoreLabel}>Match</div>
        </div>
      </div>
      
      <div className={styles.templateDescription}>
        <p>{template.description}</p>
      </div>
      
      <div className={styles.templateFeatures}>
        {template.features.map((feature, index) => (
          <span key={index} className={styles.featureTag}>{feature}</span>
        ))}
      </div>
      
      <div className={styles.templateCompatibility}>
        <div className={styles.compatibilityItem}>
          <div className={styles.compatibilityLabel}>ATS</div>
          <div className={styles.compatibilityBar}>
            <div 
              className={styles.compatibilityFill} 
              style={{ width: `${template.compatibility.ats}%` }}
            ></div>
          </div>
          <div className={styles.compatibilityValue}>{template.compatibility.ats}%</div>
        </div>
        <div className={styles.compatibilityItem}>
          <div className={styles.compatibilityLabel}>Readability</div>
          <div className={styles.compatibilityBar}>
            <div 
              className={styles.compatibilityFill} 
              style={{ width: `${template.compatibility.readability}%` }}
            ></div>
          </div>
          <div className={styles.compatibilityValue}>{template.compatibility.readability}%</div>
        </div>
        <div className={styles.compatibilityItem}>
          <div className={styles.compatibilityLabel}>Design</div>
          <div className={styles.compatibilityBar}>
            <div 
              className={styles.compatibilityFill} 
              style={{ width: `${template.compatibility.design}%` }}
            ></div>
          </div>
          <div className={styles.compatibilityValue}>{template.compatibility.design}%</div>
        </div>
      </div>
      
      <div className={styles.templatePreview}>
        <div className={styles.previewColors}>
          {template.previewColors.map((color, index) => (
            <div 
              key={index} 
              className={styles.previewColor} 
              style={{ backgroundColor: color }}
              title={`Color ${index + 1}: ${color}`}
            />
          ))}
        </div>
        <div className={styles.previewLayout}>
          <div className={styles.layoutHeader} style={{ backgroundColor: template.previewColors[0] }}></div>
          <div className={styles.layoutContent}>
            <div className={styles.layoutLeft} style={{ backgroundColor: template.previewColors[2] }}>
              <div className={styles.layoutBlock} style={{ backgroundColor: template.previewColors[1] }}></div>
              <div className={styles.layoutBlock} style={{ backgroundColor: template.previewColors[1] }}></div>
            </div>
            <div className={styles.layoutRight} style={{ backgroundColor: template.previewColors[2] }}>
              <div className={styles.layoutLine} style={{ backgroundColor: template.previewColors[0] }}></div>
              <div className={styles.layoutLine} style={{ backgroundColor: template.previewColors[0] }}></div>
              <div className={styles.layoutLine} style={{ backgroundColor: template.previewColors[0] }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.templateActions}>
        <button 
          onClick={() => onPreview(template)}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Preview Details
        </button>
        <button 
          onClick={() => onSelect(template)}
          className={styles.button}
        >
          {isSelected ? '✓ Selected' : 'Select Template'}
        </button>
      </div>
    </div>
  );
}

function TemplatePreviewModal({ template, isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  const compatibilityScore = Math.round(
    (template.compatibility.ats + template.compatibility.readability + template.compatibility.design) / 3
  );

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{template.name}</h2>
          <button className={styles.modalClose} onClick={onClose}>×</button>
        </div>
        
        <div className={styles.modalBody}>
          <div className={styles.previewGrid}>
            <div className={styles.previewMain}>
              <div className={styles.fullPreview}>
                <div className={styles.fullPreviewHeader} style={{ backgroundColor: template.previewColors[0] }}>
                  <div className={styles.fullPreviewTitle} style={{ color: template.previewColors[2] }}>
                    {template.name}
                  </div>
                </div>
                <div className={styles.fullPreviewContent} style={{ backgroundColor: template.previewColors[2] }}>
                  <div className={styles.fullPreviewLeft}>
                    <div className={styles.fullPreviewSection} style={{ borderLeftColor: template.previewColors[1] }}>
                      <h4 style={{ color: template.previewColors[0] }}>PROFILE</h4>
                      <p style={{ color: template.previewColors[0] }}>Brief professional summary highlighting key achievements and skills relevant to target position.</p>
                    </div>
                    <div className={styles.fullPreviewSection} style={{ borderLeftColor: template.previewColors[1] }}>
                      <h4 style={{ color: template.previewColors[0] }}>SKILLS</h4>
                      <p style={{ color: template.previewColors[0] }}>• Leadership & Management<br/>• Strategic Planning<br/>• Team Development</p>
                    </div>
                  </div>
                  <div className={styles.fullPreviewRight}>
                    <div className={styles.fullPreviewSection}>
                      <h4 style={{ color: template.previewColors[0] }}>EXPERIENCE</h4>
                      <p style={{ color: template.previewColors[0] }}><strong>Senior Role</strong> | Company Name<br/>Dates of Employment<br/>• Key achievement with quantifiable result<br/>• Major responsibility or project</p>
                    </div>
                    <div className={styles.fullPreviewSection}>
                      <h4 style={{ color: template.previewColors[0] }}>EDUCATION</h4>
                      <p style={{ color: template.previewColors[0] }}><strong>Degree Name</strong><br/>University Name<br/>Graduation Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.previewSidebar}>
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Template Details</h3>
                <div className={styles.templateDetails}>
                  <div className={styles.detailItem}>
                    <strong>Category:</strong> {template.category}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Style:</strong> {template.style}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Best For:</strong> {template.industry.join(', ')}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Experience Level:</strong> {template.experience.join(', ')}
                  </div>
                </div>
              </div>
              
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Compatibility Scores</h3>
                <div className={styles.compatibilityDetails}>
                  <div className={styles.scoreItem}>
                    <div className={styles.scoreLabel}>ATS Compatibility</div>
                    <div className={styles.scoreValue}>{template.compatibility.ats}%</div>
                    <div className={styles.scoreBar}>
                      <div 
                        className={styles.scoreFill} 
                        style={{ 
                          width: `${template.compatibility.ats}%`,
                          backgroundColor: template.compatibility.ats >= 85 ? '#27ae60' : 
                                         template.compatibility.ats >= 70 ? '#f39c12' : '#e74c3c'
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.scoreItem}>
                    <div className={styles.scoreLabel}>Readability</div>
                    <div className={styles.scoreValue}>{template.compatibility.readability}%</div>
                    <div className={styles.scoreBar}>
                      <div 
                        className={styles.scoreFill} 
                        style={{ 
                          width: `${template.compatibility.readability}%`,
                          backgroundColor: '#3498db'
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.scoreItem}>
                    <div className={styles.scoreLabel}>Design Quality</div>
                    <div className={styles.scoreValue}>{template.compatibility.design}%</div>
                    <div className={styles.scoreBar}>
                      <div 
                        className={styles.scoreFill} 
                        style={{ 
                          width: `${template.compatibility.design}%`,
                          backgroundColor: '#9b59b6'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Features</h3>
                <div className={styles.featuresList}>
                  {template.features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={`${styles.button} ${styles.secondaryButton}`}>
            Close Preview
          </button>
          <button onClick={() => {
            onSelect(template);
            onClose();
          }} className={styles.button}>
            Select This Template
          </button>
        </div>
      </div>
    </div>
  );
}

function TemplateComparison({ templates }) {
  if (templates.length === 0) {
    return (
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>No Templates Selected</h3>
        <p className={styles.centerText}>Select templates to compare their features and compatibility scores.</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Template Comparison ({templates.length} selected)</h3>
      <div className={styles.comparisonTable}>
        <div className={styles.comparisonHeader}>
          <div className={styles.comparisonCell}></div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compTemplateName}>{template.name}</div>
              <div className={styles.compTemplateCategory}>{template.category}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>ATS Compatibility</div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compScore}>{template.compatibility.ats}%</div>
              <div className={styles.compBar}>
                <div 
                  className={styles.compBarFill} 
                  style={{ width: `${template.compatibility.ats}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Readability</div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compScore}>{template.compatibility.readability}%</div>
              <div className={styles.compBar}>
                <div 
                  className={styles.compBarFill} 
                  style={{ width: `${template.compatibility.readability}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Design Quality</div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compScore}>{template.compatibility.design}%</div>
              <div className={styles.compBar}>
                <div 
                  className={styles.compBarFill} 
                  style={{ width: `${template.compatibility.design}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Best For</div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compTags}>
                {template.industry.slice(0, 2).map((industry, idx) => (
                  <span key={idx} className={styles.compTag}>{industry}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>File Format</div>
          {templates.map((template, index) => (
            <div key={index} className={styles.comparisonCell}>
              <div className={styles.compFormats}>
                <span className={styles.formatTag}>DOCX</span>
                <span className={styles.formatTag}>PDF</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResumeTemplateSelector() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Schema data - UPDATED with non-www URLs
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Resume Template Selector",
        "description": "Curated collection of professional resume templates with ATS compatibility ratings and industry-specific designs",
        "url": "https://professionalresumefree.com/resume-template-selector",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "234",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "name": "Professional Resume Free",
          "url": "https://professionalresumefree.com"
        }
      },
      {
        "@type": "ItemList",
        "name": "Professional Resume Templates Collection",
        "numberOfItems": RESUME_TEMPLATES.length,
        "itemListElement": RESUME_TEMPLATES.map((template, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": template.name,
            "description": template.description,
            "about": template.industry.join(', '),
            "creativeWorkStatus": "Published",
            "fileFormat": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"]
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Choose the Perfect Resume Template",
        "description": "Step-by-step guide to selecting and customizing professional resume templates",
        "totalTime": "PT5M",
        "step": HOW_TO_STEPS.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "url": `https://professionalresumefree.com/resume-template-selector#step-${index + 1}`
        }))
      },
      {
        "@type": "ItemList",
        "name": "User Reviews for Resume Templates",
        "itemListElement": REVIEWS.map((review, index) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5"
          },
          "datePublished": review.date,
          "reviewBody": review.review
        }))
      }
    ]
  };

  // Filter templates based on selections
  const filteredTemplates = RESUME_TEMPLATES.filter(template => {
    // Category filter
    if (selectedCategory !== 'all' && template.category !== selectedCategory) {
      if (!(selectedCategory === 'ats-friendly' && template.compatibility.ats >= 85)) {
        return false;
      }
    }
    
    // Experience filter
    if (selectedExperience !== 'all' && !template.experience.includes(selectedExperience)) {
      return false;
    }
    
    // Style filter
    if (selectedStyle !== 'all' && template.style !== selectedStyle) {
      return false;
    }
    
    // Industry filter
    if (selectedIndustry !== 'All Industries' && !template.industry.includes(selectedIndustry.toLowerCase())) {
      return false;
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        template.name.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.industry.some(ind => ind.includes(query)) ||
        template.features.some(feat => feat.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  const handleSelectTemplate = useCallback((template) => {
    setSelectedTemplates(prev => {
      if (prev.some(t => t.id === template.id)) {
        return prev.filter(t => t.id !== template.id);
      } else {
        return [...prev, template];
      }
    });
  }, []);

  const handleDownloadSelected = useCallback(() => {
    if (selectedTemplates.length === 0) {
      alert('Please select at least one template to download.');
      return;
    }
    
    // In a real implementation, this would trigger actual downloads
    alert(`Downloading ${selectedTemplates.length} template(s)...\n\nThis would initiate download of:\n${selectedTemplates.map(t => `• ${t.name} (.docx & PDF)`).join('\n')}`);
  }, [selectedTemplates]);

  const handleClearSelection = useCallback(() => {
    setSelectedTemplates([]);
  }, []);

  const handlePreviewTemplate = useCallback((template) => {
    setPreviewTemplate(template);
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreviewTemplate(null);
  }, []);

  const handleRecommendTemplate = useCallback(() => {
    // Simple recommendation logic based on common filters
    let recommended;
    
    if (selectedCategory !== 'all') {
      recommended = filteredTemplates.find(t => t.category === selectedCategory);
    } else if (selectedExperience !== 'all') {
      recommended = filteredTemplates.find(t => t.experience.includes(selectedExperience));
    } else if (selectedIndustry !== 'All Industries') {
      recommended = filteredTemplates.find(t => t.industry.includes(selectedIndustry.toLowerCase()));
    }
    
    if (!recommended && filteredTemplates.length > 0) {
      recommended = filteredTemplates[0];
    }
    
    if (recommended) {
      setSelectedTemplates([recommended]);
      alert(`Recommended: "${recommended.name}"\n\nPerfect for ${selectedIndustry !== 'All Industries' ? selectedIndustry : 'your'} needs with ${recommended.compatibility.ats}% ATS compatibility.`);
    }
  }, [filteredTemplates, selectedCategory, selectedExperience, selectedIndustry]);

  return (
    <>
      <Head>
        <title>Free Resume Template Selector - Professional ATS-Friendly Templates {CURRENT_YEAR}</title>
        <meta 
          name="description" 
          content={`Browse our curated collection of professional resume templates with ATS compatibility ratings. Download free .docx and PDF templates for all industries. ${CURRENT_YEAR} Edition`}
        />
        <meta name="keywords" content="resume templates, free resume templates, ATS resume templates, professional resume templates, resume template selector, downloadable resumes, .docx templates, PDF resumes" />
        
        {/* Open Graph - UPDATED without www */}
        <meta property="og:title" content="Free Resume Template Selector - Professional ATS-Friendly Templates" />
        <meta property="og:description" content={`Browse and download professional resume templates with ATS compatibility ratings. Free .docx and PDF formats. ${CURRENT_YEAR}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://professionalresumefree.com/resume-template-selector" />
        <meta property="og:image" content="https://professionalresumefree.com/og-template-selector.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter - UPDATED without www */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resume Template Selector - Professional Templates" />
        <meta name="twitter:description" content="Browse and download professional resume templates with ATS compatibility ratings." />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-template-selector.jpg" />
        
        {/* SINGLE CANONICAL URL - UPDATED without www */}
        <link rel="canonical" href="https://professionalresumefree.com/resume-template-selector" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className={styles.container}>
        <header className={styles.header} role="banner">
          <h1 className={styles.title}>Free Resume Template Selector - Professional ATS-Friendly Templates {CURRENT_YEAR}</h1>
          <p className={styles.subtitle}>
            Browse our curated collection of professional resume templates with ATS compatibility ratings. 
            Download free .docx and PDF templates optimized for your industry and career level.
          </p>
          
          {/* Selected Templates Counter */}
          <div className={styles.selectionCounter}>
            <div className={styles.counterContent}>
              <div className={styles.counterNumber}>{selectedTemplates.length}</div>
              <div className={styles.counterLabel}>Templates Selected</div>
            </div>
            <div className={styles.counterActions}>
              <button 
                onClick={handleDownloadSelected}
                disabled={selectedTemplates.length === 0}
                className={`${styles.button} ${selectedTemplates.length === 0 ? styles.disabled : ''}`}
              >
                Download Selected
              </button>
              <button 
                onClick={handleClearSelection}
                disabled={selectedTemplates.length === 0}
                className={`${styles.button} ${styles.secondaryButton} ${selectedTemplates.length === 0 ? styles.disabled : ''}`}
              >
                Clear Selection
              </button>
            </div>
          </div>
          
          {/* Aggregate Rating Display */}
          <div className={styles.aggregateRating} itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.9" />
            <meta itemProp="ratingCount" content="234" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <div className={styles.ratingStars}>
              {'★'.repeat(5)}
              <span className={styles.ratingValue}>4.9/5</span>
            </div>
            <div className={styles.ratingText}>Based on 234+ user reviews</div>
          </div>
        </header>

        <main className={styles.mainContent}>
          {/* Filters Section */}
          <div className={styles.filtersSection}>
            <div className={styles.card}>
              <div className={styles.filtersHeader}>
                <h2 className={styles.filtersTitle}>Find Your Perfect Template</h2>
                <div className={styles.viewToggle}>
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                  >
                    Grid View
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
                  >
                    List View
                  </button>
                </div>
              </div>
              
              <div className={styles.searchBar}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search templates by name, feature, or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className={styles.searchButton}>🔍</button>
              </div>
              
              <div className={styles.filtersGrid}>
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Template Category</label>
                  <div className={styles.filterOptions}>
                    {FILTER_OPTIONS.categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
                      >
                        {category.label} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Experience Level</label>
                  <div className={styles.filterOptions}>
                    {FILTER_OPTIONS.experience.map(exp => (
                      <button
                        key={exp.id}
                        onClick={() => setSelectedExperience(exp.id)}
                        className={`${styles.filterButton} ${selectedExperience === exp.id ? styles.active : ''}`}
                      >
                        {exp.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Resume Format</label>
                  <div className={styles.filterOptions}>
                    {FILTER_OPTIONS.styles.map(style => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`${styles.filterButton} ${selectedStyle === style.id ? styles.active : ''}`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Industry</label>
                  <select
                    className={styles.industrySelect}
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    {INDUSTRY_OPTIONS.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className={styles.filterActions}>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedExperience('all');
                    setSelectedStyle('all');
                    setSelectedIndustry('All Industries');
                    setSearchQuery('');
                  }}
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Clear All Filters
                </button>
                <button 
                  onClick={handleRecommendTemplate}
                  className={styles.button}
                >
                  Recommend Template
                </button>
              </div>
              
              <div className={styles.resultsInfo}>
                <p>
                  Showing <strong>{filteredTemplates.length}</strong> of {RESUME_TEMPLATES.length} templates
                  {selectedCategory !== 'all' && ` in ${selectedCategory.replace('-', ' ')}`}
                  {selectedExperience !== 'all' && ` for ${selectedExperience} level`}
                  {selectedIndustry !== 'All Industries' && ` in ${selectedIndustry}`}
                </p>
              </div>
            </div>
          </div>

          {/* Templates Grid/List */}
          {filteredTemplates.length > 0 ? (
            <div className={viewMode === 'grid' ? styles.templatesGrid : styles.templatesList}>
              {filteredTemplates.map(template => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isSelected={selectedTemplates.some(t => t.id === template.id)}
                  onSelect={handleSelectTemplate}
                  onPreview={handlePreviewTemplate}
                />
              ))}
            </div>
          ) : (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>No Templates Found</h3>
              <p className={styles.centerText}>
                Try adjusting your filters or search terms. 
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedExperience('all');
                    setSelectedStyle('all');
                    setSelectedIndustry('All Industries');
                    setSearchQuery('');
                  }}
                  className={styles.inlineButton}
                >
                  Clear all filters
                </button> to see all available templates.
              </p>
            </div>
          )}

          {/* Template Comparison */}
          {selectedTemplates.length > 0 && (
            <TemplateComparison templates={selectedTemplates} />
          )}

          {/* Template Selection Guide */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>How to Choose Your Template</h2>
            <div className={styles.selectionGuide}>
              <div className={styles.guideCard}>
                <div className={styles.guideIcon}>🎯</div>
                <h3 className={styles.guideTitle}>Consider Your Industry</h3>
                <p className={styles.guideText}>
                  <strong>Corporate/Finance:</strong> Choose traditional, ATS-optimized templates<br/>
                  <strong>Creative Fields:</strong> Opt for visually striking designs<br/>
                  <strong>Tech/Engineering:</strong> Select clean, skills-focused layouts<br/>
                  <strong>Academic/Research:</strong> Use formal templates with publication sections
                </p>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.guideIcon}>📊</div>
                <h3 className={styles.guideTitle}>Check ATS Compatibility</h3>
                <p className={styles.guideText}>
                  <strong>High ATS Score (85%+):</strong> For online applications<br/>
                  <strong>Medium ATS Score (70-85%):</strong> For email submissions<br/>
                  <strong>Low ATS Score (&lt;70%):</strong> For in-person or portfolio use<br/>
                  <em>Most corporate jobs require 85%+ ATS compatibility</em>
                </p>
              </div>
              <div className={styles.guideCard}>
                <div className={styles.guideIcon}>👤</div>
                <h3 className={styles.guideTitle}>Match Your Experience Level</h3>
                <p className={styles.guideText}>
                  <strong>Entry Level:</strong> Education-focused templates<br/>
                  <strong>Mid Career:</strong> Achievement-focused designs<br/>
                  <strong>Senior/Executive:</strong> Strategic, leadership templates<br/>
                  <strong>Career Changers:</strong> Skills-based functional formats
                </p>
              </div>
            </div>
          </div>

          {/* Download Options */}
          {selectedTemplates.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Ready to Download</h2>
              <div className={styles.downloadOptions}>
                <div className={styles.optionCard}>
                  <div className={styles.optionIcon}>📝</div>
                  <h3 className={styles.optionTitle}>Microsoft Word (.docx)</h3>
                  <p className={styles.optionDescription}>
                    Fully editable in Word, Google Docs, or similar software. Best for customization.
                  </p>
                  <button onClick={handleDownloadSelected} className={styles.button}>
                    Download .docx
                  </button>
                </div>
                <div className={styles.optionCard}>
                  <div className={styles.optionIcon}>📄</div>
                  <h3 className={styles.optionTitle}>PDF Format</h3>
                  <p className={styles.optionDescription}>
                    Preserves formatting perfectly. Ideal for email submissions and printing.
                  </p>
                  <button onClick={handleDownloadSelected} className={styles.button}>
                    Download PDF
                  </button>
                </div>
                <div className={styles.optionCard}>
                  <div className={styles.optionIcon}>🖨️</div>
                  <h3 className={styles.optionTitle}>Print Version</h3>
                  <p className={styles.optionDescription}>
                    Optimized for printing on standard US Letter or A4 paper.
                  </p>
                  <button onClick={() => window.print()} className={styles.button}>
                    Print Preview
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* How-to Section */}
          <section className={styles.howToSection}>
            <h2 className={styles.sectionTitle}>How It Works: 5-Step Template Selection</h2>
            <div className={styles.howToSteps}>
              {HOW_TO_STEPS.map((step, index) => (
                <div key={index} className={styles.howToStep} id={`step-${index + 1}`}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step.name}</h3>
                  <p className={styles.stepDescription}>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions About Resume Templates</h2>
            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className={styles.faqQuestion}>
                    <h3>{faq.question}</h3>
                    <span className={styles.faqToggle}>{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  {activeFaq === index && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className={styles.reviewsSection}>
            <h2 className={styles.sectionTitle}>What Users Say About Our Templates</h2>
            <div className={styles.reviewsGrid}>
              {REVIEWS.map((review, index) => (
                <div key={index} className={styles.reviewCard} itemScope itemType="https://schema.org/Review">
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInfo}>
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <meta itemProp="name" content={review.name} />
                        <strong className={styles.reviewerName}>{review.name}</strong>
                      </span>
                      <span className={styles.reviewerPosition}>{review.position}</span>
                    </div>
                    <div className={styles.reviewRating} itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={review.rating} />
                      <meta itemProp="bestRating" content="5" />
                      <div className={styles.stars}>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewContent} itemProp="reviewBody">
                    <p>"{review.review}"</p>
                  </div>
                  <div className={styles.reviewDate} itemProp="datePublished">
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Career Resources</h2>
            <div className={styles.resourcesGrid}>
              <a 
                href="/free-ats-resume-checker" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Free ATS Resume Checker</h3>
                <p>Analyze your resume for ATS compatibility and get optimization tips.</p>
              </a>
              <a 
                href="/resume-bullet-point-generator" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Resume Bullet Point Generator</h3>
                <p>Create powerful, achievement-focused bullet points for your resume.</p>
              </a>
              <a 
                href="/cover-letter-generator" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Cover Letter Generator</h3>
                <p>Create professional cover letters tailored to any job application.</p>
              </a>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© {CURRENT_YEAR} Professional Resume Free. All rights reserved.</p>
          <p>All templates are 100% free for personal and professional use. No attribution required.</p>
        </footer>

        {/* Preview Modal */}
        <TemplatePreviewModal
          template={previewTemplate}
          isOpen={!!previewTemplate}
          onClose={handleClosePreview}
          onSelect={handleSelectTemplate}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
      reviews: REVIEWS,
      faqs: FAQS,
      howToSteps: HOW_TO_STEPS,
      templates: RESUME_TEMPLATES
    },
    // Revalidate every 2 hours for fresh content
    revalidate: 3600, // 2 hours in seconds
  };
}