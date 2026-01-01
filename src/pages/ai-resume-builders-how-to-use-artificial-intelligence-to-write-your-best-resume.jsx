'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './AIResumeGuide.module.css';

// Instead of importing from react-icons, we'll use simple text/icons
// You can replace these with actual icon components later

const AIResumeGuide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const aiSections = [
    {
      title: "Understanding AI Resume Builder Technology",
      content: "Learn how artificial intelligence algorithms analyze, generate, and optimize resume content for maximum impact.",
      tips: [
        "AI uses natural language processing to analyze job descriptions",
        "Machine learning algorithms match your skills to industry requirements",
        "AI optimizes for ATS compatibility automatically",
        "Generative AI creates content variations based on your input",
        "AI suggests industry-specific keywords and phrases"
      ],
      example: `Traditional Resume:
• Managed team projects
• Improved processes
• Handled customer service

AI-Optimized Resume:
• Directed cross-functional project teams of 8+ members, achieving 25% faster delivery times
• Streamlined operational workflows, reducing processing time by 40%
• Enhanced customer satisfaction scores by 35% through improved service protocols`
    },
    {
      title: "Balancing AI Efficiency with a Human Touch",
      content: "Strategies for leveraging AI's power while maintaining your authentic voice and personal brand.",
      tips: [
        "Use AI for structure and optimization, not complete content creation",
        "Always review and personalize AI-generated content",
        "Inject personal achievements and unique experiences manually",
        "Maintain consistent tone and voice throughout the resume",
        "Add industry-specific insights that AI might miss"
      ],
      example: `AI-Generated:
"Implemented strategic initiatives resulting in improved operational efficiency."

Human-Enhanced:
"Spearheaded a digital transformation initiative that reduced operational costs by $150K annually while improving team productivity by 30%—this achievement was recognized with the 2024 Innovation Excellence Award."`
    },
    {
      title: "Step-by-Step AI Resume Creation Process",
      content: "A systematic approach to building your resume with AI assistance for optimal results.",
      tips: [
        "Start with raw data input: education, experience, skills",
        "Use AI to structure and format for maximum impact",
        "Leverage AI keyword optimization for your target industry",
        "Review and customize AI suggestions personally",
        "Test multiple AI-generated variations for different roles"
      ],
      example: `AI Resume Creation Workflow:
1. Input: Basic job history and skills
2. AI Processing: Structure optimization + keyword analysis
3. First Draft: AI-generated resume template
4. Human Review: Personal achievement injection
5. Final Polish: ATS compatibility check
6. Result: Professional, optimized resume`
    },
    {
      title: "Advanced AI Customization Techniques",
      content: "Pro-level strategies for fine-tuning AI-generated resumes to match specific job requirements.",
      tips: [
        "Input specific job descriptions for targeted optimization",
        "Use AI to analyze competitor resumes in your field",
        "Leverage AI for industry-specific language patterns",
        "Create multiple resume versions for different career paths",
        "Use AI to quantify achievements with industry benchmarks"
      ],
      example: `For Tech Roles:
AI adds: "Agile methodology, CI/CD pipelines, cloud architecture"

For Marketing Roles:
AI adds: "ROI optimization, campaign analytics, conversion rates"

For Leadership Roles:
AI adds: "Strategic planning, team development, stakeholder management"`
    },
    {
      title: "Quality Assurance & Final Review Process",
      content: "Essential steps to ensure your AI-assisted resume maintains quality and authenticity.",
      tips: [
        "Always fact-check AI-generated content",
        "Verify dates, titles, and specific achievements",
        "Ensure consistency across all resume sections",
        "Test resume through ATS simulators",
        "Get human feedback from industry professionals"
      ],
      example: `Before AI Review:
• Led successful projects
• Improved team performance

After AI + Human Review:
• Directed 12+ enterprise-level projects with budgets up to $2M, delivering 95% on-time completion rate
• Mentored and developed a team of 15 professionals, resulting in 40% promotion rate within 2 years`
    }
  ];

  const aiTools = [
    {
      title: "AI Content Generators",
      description: "Create compelling achievement statements and summaries",
      useCase: "Overcoming writer's block and generating initial content",
      tips: ["Input specific achievements", "Request multiple variations", "Use industry-specific prompts"]
    },
    {
      title: "ATS Optimization AI",
      description: "Optimize resumes for Applicant Tracking Systems",
      useCase: "Ensuring resume passes automated screening",
      tips: ["Scan job descriptions", "Identify keyword gaps", "Optimize formatting"]
    },
    {
      title: "Design & Formatting AI",
      description: "Create visually appealing, professional layouts",
      useCase: "Non-designers creating professional resumes",
      tips: ["Choose industry-appropriate templates", "Maintain readability", "Ensure ATS compatibility"]
    },
    {
      title: "Personal Branding AI",
      description: "Develop consistent personal branding across documents",
      useCase: "Creating cohesive career documents",
      tips: ["Maintain consistent tone", "Align with LinkedIn profile", "Match industry expectations"]
    }
  ];

  const stats = [
    {
      value: "3x",
      label: "Faster resume creation with AI assistance"
    },
    {
      value: "85%",
      label: "Higher ATS compatibility with AI optimization"
    },
    {
      value: "40%",
      label: "More interviews with AI-optimized resumes"
    }
  ];

  const commonMistakes = [
    "Over-relying on AI without personal customization",
    "Using generic AI templates without industry adaptation",
    "Neglecting to verify AI-generated facts and dates",
    "Failing to maintain personal voice and authenticity",
    "Using AI for complete creation without human review",
    "Ignoring industry-specific nuances in AI suggestions"
  ];

  const balanceStrategies = [
    {
      strategy: "AI for Structure, Human for Content",
      description: "Use AI to organize and format, but write achievement statements personally",
      example: "AI sets up sections → You write specific accomplishments"
    },
    {
      strategy: "AI as Editor, Not Author",
      description: "Write first draft yourself, then use AI to optimize and enhance",
      example: "Your initial content → AI optimization → Your final review"
    },
    {
      strategy: "Multi-AI Comparison",
      description: "Use different AI tools and combine the best suggestions",
      example: "Compare outputs from 2-3 AI tools → Select best elements"
    },
    {
      strategy: "Industry-Specific Fine-Tuning",
      description: "Train AI with your industry's specific terminology and requirements",
      example: "Provide industry examples → AI learns patterns → Generates relevant content"
    }
  ];

  // Simple icons using emoji/text instead of react-icons
  const icons = {
    cpu: "🤖",
    target: "🎯",
    trendingUp: "📈",
    fileText: "📄",
    user: "👤",
    check: "✅",
    book: "📚",
    award: "🏆",
    userCheck: "✓",
    copy: "📋",
    download: "⬇️",
    shield: "🛡️",
    zap: "⚡",
    code: "💻",
    brain: "🧠",
    edit: "✏️",
    arrowRight: "→"
  };

  return (
    <div className={styles.aiResumeGuide}>
      {/* Metadata */}
      <head>
        <title>AI Resume Builders 2026: How to Use Artificial Intelligence to Write Your Best Resume</title>
        <meta name="description" content="Master AI resume building for 2025. Learn to balance AI efficiency with human touch, create ATS-optimized resumes, and land 40% more interviews." />
      </head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <span className={styles.tagIcon}>{icons.cpu}</span>
              AI Career Technology Guide 2026
            </div>
            <h1 className={styles.heroTitle}>
              AI Resume Builders: How to Use <span className={styles.gradientText}>Artificial Intelligence</span> to Write Your Best Resume
            </h1>
            <p className={styles.heroSubtitle}>
              Master the art of <strong>AI-powered resume creation for 2026</strong>. Learn to balance artificial 
              intelligence efficiency with human authenticity to create resumes that get <strong>40% more interviews</strong> 
              and stand out in the competitive job market.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/resume-templates" className={styles.primaryButton}>
                Create Your Resume Now
                <div className={styles.buttonPulse}></div>
              </Link>
              <a href="#balance" className={styles.secondaryButton}>
                Explore AI-Human Balance Strategies
              </a>
            </div>
            <div className={styles.heroFeatures}>
              <span className={styles.featureBadge}>{icons.check} AI Optimization Techniques</span>
              <span className={styles.featureBadge}>{icons.check} Human-AI Collaboration</span>
              <span className={styles.featureBadge}>{icons.check} 2026 Best Practices</span>
              <span className={styles.featureBadge}>{icons.check} Industry-Specific Templates</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIconContainer}>
                  {index === 0 ? icons.zap : index === 1 ? icons.shield : icons.trendingUp}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.leadText}>
              In the <strong>rapidly evolving job market of 2026</strong>, artificial intelligence has revolutionized 
              resume creation. This comprehensive guide shows you how to leverage <strong>AI resume builders</strong> 
              effectively while maintaining your unique voice and authenticity. Learn to create resumes that combine 
              <strong> AI optimization with human insight</strong> for results that outperform traditional methods by 
              <strong> up to 40%</strong> in interview rates.
            </p>
            <div className={styles.introHighlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.brain}</span>
                <span>AI Optimization Strategies</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.user}</span>
                <span>Human Touch Integration</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.code}</span>
                <span>Technology Best Practices</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>{icons.award}</span>
                <span>40% More Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.typesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>AI Resume Builder Types for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Understanding different AI tools helps you <strong>choose the right technology</strong> for your needs
            </p>
          </div>
          <div className={styles.typesGrid}>
            {aiTools.map((tool, index) => (
              <div key={index} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{tool.title}</h3>
                <p className={styles.typeDescription}>{tool.description}</p>
                <div className={styles.typeUseCase}>
                  <strong>Best for:</strong> {tool.useCase}
                </div>
                <div className={styles.typeTips}>
                  <h4>Pro Tips:</h4>
                  <ul>
                    {tool.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>
                        <span className={styles.tipIcon}>{icons.check}</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className={styles.guideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Complete AI Resume Creation Guide for 2026</h2>
            <p className={styles.sectionSubtitle}>
              Follow this <strong>proven 5-step framework</strong> to create AI-optimized resumes that stand out
            </p>
          </div>

          <div className={styles.guideNavigation}>
            {aiSections.map((section, index) => (
              <button
                key={index}
                className={`${styles.guideTab} ${index === activeSection ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <div className={styles.tabNumber}>{index + 1}</div>
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.guideContent}>
            <div className={styles.contentHeader}>
              <h3 className={styles.contentTitle}>
                {aiSections[activeSection].title}
              </h3>
              <p className={styles.contentDescription}>
                {aiSections[activeSection].content}
              </p>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.tipsColumn}>
                <h4 className={styles.tipsTitle}>
                  <span className={styles.tipsIcon}>{icons.check}</span>
                  Key Strategies for 2026
                </h4>
                <ul className={styles.tipsList}>
                  {aiSections[activeSection].tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.exampleColumn}>
                <h4 className={styles.exampleTitle}>
                  <span className={styles.exampleIcon}>{icons.fileText}</span>
                  Practical Example
                </h4>
                <div className={styles.exampleBox}>
                  <pre className={styles.exampleText}>
                    {aiSections[activeSection].example}
                  </pre>
                  <button className={styles.copyButton}>
                    <span className={styles.copyIcon}>{icons.copy}</span>
                    Copy Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="balance" className={styles.balanceSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Balancing AI Efficiency with a Human Touch</h2>
            <p className={styles.sectionSubtitle}>
              Master the art of <strong>combining AI power with personal authenticity</strong> for maximum impact
            </p>
          </div>

          <div className={styles.balanceGrid}>
            {balanceStrategies.map((strategy, index) => (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.strategyHeader}>
                  <div className={styles.strategyNumber}>{index + 1}</div>
                  <h3 className={styles.strategyTitle}>{strategy.strategy}</h3>
                </div>
                <p className={styles.strategyDescription}>{strategy.description}</p>
                <div className={styles.strategyExample}>
                  <strong>Example Workflow:</strong>
                  <p>{strategy.example}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.collaborationGuide}>
            <div className={styles.collaborationCard}>
              <h3>Where AI Excels</h3>
              <ul>
                <li>Structure and formatting optimization</li>
                <li>ATS keyword analysis and integration</li>
                <li>Grammar and spelling perfection</li>
                <li>Industry terminology suggestions</li>
                <li>Template design and layout</li>
              </ul>
            </div>
            <div className={styles.collaborationCard}>
              <h3>Where Human Touch is Essential</h3>
              <ul>
                <li>Personal achievement storytelling</li>
                <li>Unique value proposition development</li>
                <li>Industry-specific insight integration</li>
                <li>Cultural fit and personality expression</li>
                <li>Authentic voice and tone maintenance</li>
              </ul>
            </div>
            <div className={styles.collaborationCard}>
              <h3>Optimal Collaboration Workflow</h3>
              <ul>
                <li>AI: Initial structure and keyword research</li>
                <li>Human: Personal achievement writing</li>
                <li>AI: Optimization and formatting</li>
                <li>Human: Final review and customization</li>
                <li>AI: ATS compatibility testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mistakesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common AI Resume Mistakes to Avoid in 2026</h2>
            <p className={styles.sectionSubtitle}>
              These errors can <strong>undermine your AI-optimized resume</strong> and reduce its effectiveness
            </p>
          </div>
          <div className={styles.mistakesGrid}>
            {commonMistakes.map((mistake, index) => (
              <div key={index} className={styles.mistakeCard}>
                <div className={styles.mistakeNumber}>{index + 1}</div>
                <p className={styles.mistakeText}>{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Your AI-Optimized Resume?</h2>
            <p className={styles.ctaSubtitle}>
              Combine the <strong>power of artificial intelligence</strong> with your <strong>unique human experience</strong> 
              to create a resume that stands out in 2026. Get <strong>40% more interviews</strong> with our proven 
              AI-human collaboration framework.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/resume-templates" className={styles.ctaButton}>
                <span className={styles.buttonIcon}>{icons.cpu}</span>
                Create Your Resume Now
              </Link>
              
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>AI-Human Collaboration Framework</span>
              </div>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>Industry-Specific AI Optimization</span>
              </div>
              <div className={styles.ctaFeature}>
                <span className={styles.featureIcon}>{icons.check}</span>
                <span>ATS Compatibility Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIResumeGuide;