'use client';
import { useState, useRef } from 'react';
import Head from 'next/head';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiTrendingUp,
  FiBarChart2,
  FiUsers,
  FiGlobe as FiWorld
} from 'react-icons/fi';
import styles from './Ceoresume.module.css';

const Ceoresume = () => {
  // --- CEO-Specific Default Items ---
  const defaultLeadershipRole = () => ({
    company: '',
    title: '',
    industry: '',
    startDate: '',
    endDate: '',
    achievements: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    honors: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultBoardRole = () => ({
    organization: '',
    role: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultStrategicInitiative = () => ({
    title: '',
    description: '',
    impact: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultLanguage = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultSocialLink = () => ({
    platform: '',
    url: '',
    isEditing: false,
    editIndex: null
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    leadershipRoles: [],
    education: [],
    boardRoles: [],
    strategicInitiatives: [],
    skills: [],
    languages: [],
    socialLinks: []
  });

  const [currentLeadershipRole, setCurrentLeadershipRole] = useState(defaultLeadershipRole());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentBoardRole, setCurrentBoardRole] = useState(defaultBoardRole());
  const [currentStrategicInitiative, setCurrentStrategicInitiative] = useState(defaultStrategicInitiative());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resumeRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      twitter: <FiGlobe />,
      portfolio: <FiWorld />,
      website: <FiGlobe />
    };
    return icons[platform.toLowerCase()] || <FiGlobe />;
  };

  const formatUrl = (url) => url?.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') || '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const pageHasContent = (pageNumber) => {
    if (pageNumber === 1) {
      return !!(formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0);
    }
    const pageData = getDataByPage(pageNumber);
    return (
      pageData.leadershipRoles.length > 0 ||
      pageData.education.length > 0 ||
      pageData.boardRoles.length > 0 ||
      pageData.strategicInitiatives.length > 0 ||
      pageData.skills.length > 0 ||
      pageData.languages.length > 0
    );
  };

  const getPagesWithContent = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (pageHasContent(i)) pages.push(i);
    }
    return pages;
  };

  const addNewPage = () => totalPages < 5 && setTotalPages(p => p + 1);
  const removeLastPage = () => {
    if (totalPages <= 1) return;
    const newTotal = totalPages - 1;
    const shift = (items) => items.map(i => i.page === totalPages ? { ...i, page: newTotal } : i);
    setFormData(f => ({
      ...f,
      leadershipRoles: shift(f.leadershipRoles),
      education: shift(f.education),
      boardRoles: shift(f.boardRoles),
      strategicInitiatives: shift(f.strategicInitiatives),
      skills: shift(f.skills),
      languages: shift(f.languages)
    }));
    setTotalPages(newTotal);
    if (currentPage > newTotal) setCurrentPage(newTotal);
  };

  // --- Add Functions Only (Used in UI) ---
  const addLeadershipRole = () => {
    if (!currentLeadershipRole.title || !currentLeadershipRole.company || !currentLeadershipRole.startDate) return;
    const item = { ...currentLeadershipRole, page: currentPage, isEditing: false, editIndex: null };
    if (currentLeadershipRole.isEditing) {
      const updated = [...formData.leadershipRoles];
      updated[currentLeadershipRole.editIndex] = item;
      setFormData({ ...formData, leadershipRoles: updated });
    } else {
      setFormData({ ...formData, leadershipRoles: [...formData.leadershipRoles, item] });
    }
    setCurrentLeadershipRole(defaultLeadershipRole());
  };

  const addEducation = () => {
    if (!currentEducation.institution || !currentEducation.degree) return;
    const item = { ...currentEducation, page: currentPage, isEditing: false, editIndex: null };
    if (currentEducation.isEditing) {
      const updated = [...formData.education];
      updated[currentEducation.editIndex] = item;
      setFormData({ ...formData, education: updated });
    } else {
      setFormData({ ...formData, education: [...formData.education, item] });
    }
    setCurrentEducation(defaultEducation());
  };

  const addBoardRole = () => {
    if (!currentBoardRole.organization || !currentBoardRole.role) return;
    const item = { ...currentBoardRole, page: currentPage, isEditing: false, editIndex: null };
    if (currentBoardRole.isEditing) {
      const updated = [...formData.boardRoles];
      updated[currentBoardRole.editIndex] = item;
      setFormData({ ...formData, boardRoles: updated });
    } else {
      setFormData({ ...formData, boardRoles: [...formData.boardRoles, item] });
    }
    setCurrentBoardRole(defaultBoardRole());
  };

  const addStrategicInitiative = () => {
    if (!currentStrategicInitiative.title || !currentStrategicInitiative.description) return;
    const item = { ...currentStrategicInitiative, page: currentPage, isEditing: false, editIndex: null };
    if (currentStrategicInitiative.isEditing) {
      const updated = [...formData.strategicInitiatives];
      updated[currentStrategicInitiative.editIndex] = item;
      setFormData({ ...formData, strategicInitiatives: updated });
    } else {
      setFormData({ ...formData, strategicInitiatives: [...formData.strategicInitiatives, item] });
    }
    setCurrentStrategicInitiative(defaultStrategicInitiative());
  };

  const addSkill = () => {
    if (!currentSkill.name.trim()) return;
    const item = { ...currentSkill, page: currentPage, isEditing: false, editIndex: null };
    if (currentSkill.isEditing) {
      const updated = [...formData.skills];
      updated[currentSkill.editIndex] = item;
      setFormData({ ...formData, skills: updated });
    } else {
      setFormData({ ...formData, skills: [...formData.skills, item] });
    }
    setCurrentSkill(defaultSkill());
  };

  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!url.match(/^https?:\/\//)) url = `https://${url}`;
    if (currentSocialLink.isEditing) {
      const updated = [...formData.socialLinks];
      updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url };
      setFormData({ ...formData, socialLinks: updated });
    } else {
      setFormData({ ...formData, socialLinks: [...formData.socialLinks, { platform: currentSocialLink.platform, url }] });
    }
    setCurrentSocialLink(defaultSocialLink());
  };

  const editSocialLink = (index) => {
    const link = formData.socialLinks[index];
    setCurrentSocialLink({
      platform: link.platform,
      url: link.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      isEditing: true,
      editIndex: index
    });
  };

  const deleteSocialLink = (index) => {
    const updated = [...formData.socialLinks];
    updated.splice(index, 1);
    setFormData({ ...formData, socialLinks: updated });
  };

  const getDataByPage = (page) => ({
    leadershipRoles: formData.leadershipRoles.filter(r => r.page === page),
    education: formData.education.filter(e => e.page === page),
    boardRoles: formData.boardRoles.filter(b => b.page === page),
    strategicInitiatives: formData.strategicInitiatives.filter(s => s.page === page),
    skills: formData.skills.filter(s => s.page === page),
    languages: formData.languages.filter(l => l.page === page)
  });

  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pages = getPagesWithContent();
      if (pages.length === 0) {
        alert('Add content before generating PDF.');
        return;
      }
      const originalStates = [];
      for (let i = 0; i < pages.length; i++) {
        const pageNum = pages[i];
        const el = resumeRefs[pageNum - 1]?.current;
        if (!el) continue;
        originalStates[pageNum - 1] = {
          display: el.style.display,
          position: el.style.position,
          width: el.style.width,
          height: el.style.height
        };
        Object.assign(el.style, {
          display: 'block',
          position: 'fixed',
          left: '0',
          top: '0',
          width: '210mm',
          height: '297mm',
          transform: 'none',
          zIndex: '9999',
          visibility: 'visible',
          opacity: '1',
          background: '#ffffff',
          color: '#000000'
        });
        await new Promise(r => setTimeout(r, 300));
        const canvas = await html2canvas(el, {
          scale: 3,
          useCORS: true,
          backgroundColor: '#ffffff',
          width: 210 * 3.7795275591,
          height: 297 * 3.7795275591,
          onclone: (doc) => {
            const clone = doc.querySelector(`.${styles.resumePreview}`);
            if (clone) {
              clone.style.display = 'block';
              clone.style.visibility = 'visible';
              clone.style.opacity = '1';
              clone.style.width = '210mm';
              clone.style.height = '297mm';
              clone.style.background = '#ffffff';
              clone.style.color = '#000000';
              clone.querySelectorAll('*').forEach(n => {
                n.style.color = '#000000';
                n.style.fontFamily = "'Helvetica', 'Arial', sans-serif";
              });
            }
          }
        });
        const imgData = canvas.toDataURL('image/png', 1.0);
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      }
      for (let i = 0; i < totalPages; i++) {
        const el = resumeRefs[i]?.current;
        const state = originalStates[i];
        if (el && state) Object.assign(el.style, state);
      }
      pdf.save(`${formData.fullName || 'ceo_resume'}_resume.pdf`);
    } catch (err) {
      console.error('PDF Error:', err);
      alert('Failed to generate PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✅ CEO RESUME TEMPLATE
  const CeoTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasLeadership = pageData.leadershipRoles.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasBoard = pageData.boardRoles.length > 0;
    const hasInitiatives = pageData.strategicInitiatives.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasLanguages = pageData.languages.length > 0;
    return (
      <div className={styles.ceoTemplate}>
        {pageNumber === 1 && (
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>{formData.fullName || 'Your Name'}</h1>
            <div className={styles.contactInfoRow}>
              {formData.email && <div className={styles.contactInfoItem}><FiMail /> {formData.email}</div>}
              {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
              {formData.phone && <div className={styles.contactInfoItem}><FiPhone /> {formData.phone}</div>}
              {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
              {formData.address && <div className={styles.contactInfoItem}><FiMapPin /> {formData.address}</div>}
              {formData.socialLinks.map((link, i) => (
                <div key={i} className={styles.contactInfoItem}>
                  {getSocialIcon(link.platform)} {formatUrl(link.url)}
                </div>
              ))}
            </div>
          </header>
        )}
        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EXECUTIVE SUMMARY</h2>
            <div className={styles.sectionContent}>
              <p className={styles.summaryText}>{formData.summary}</p>
            </div>
          </section>
        )}
        {hasLeadership && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EXECUTIVE LEADERSHIP</h2>
            <div className={styles.sectionContent}>
              {pageData.leadershipRoles.map((role, i) => (
                <div key={i} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <h3>{role.title}</h3>
                    <p className={styles.company}>{role.company}{role.industry && ` – ${role.industry}`} | {role.startDate} – {role.endDate || 'Present'}</p>
                  </div>
                  <ul className={styles.bulletList}>
                    {role.achievements.split('\n').map((line, j) => line.trim() ? <li key={j}>{line}</li> : null)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
        {hasInitiatives && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>STRATEGIC INITIATIVES</h2>
            <div className={styles.sectionContent}>
              {pageData.strategicInitiatives.map((init, i) => (
                <div key={i} className={styles.projectItem}>
                  <h3>{init.title}</h3>
                  <ul className={styles.bulletList}>
                    {init.description.split('\n').map((line, j) => line.trim() ? <li key={j}>{line}</li> : null)}
                  </ul>
                  {init.impact && <p className={styles.outcomes}><strong>Impact:</strong> {init.impact}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        {hasBoard && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>BOARD & ADVISORY ROLES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.boardRoles.map((b, i) => (
                  <li key={i}>
                    {b.role} at {b.organization} | {b.startDate} – {b.endDate || 'Present'}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
            <div className={styles.sectionContent}>
              {pageData.education.map((edu, i) => (
                <div key={i} className={styles.educationItem}>
                  <h3>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                  <p className={styles.institution}>{edu.institution} | {edu.startDate} – {edu.endDate || 'Present'}</p>
                  {edu.honors && <p className={styles.honors}>{edu.honors}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CORE EXECUTIVE COMPETENCIES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.skills.map((s, i) => <li key={i}>{s.name}</li>)}
              </ul>
            </div>
          </section>
        )}
        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.languages.map((l, i) => <li key={i}>{l.name}</li>)}
              </ul>
            </div>
          </section>
        )}
        {getPagesWithContent().length > 1 && (
          <div className={styles.pageIndicator}>
            Page {getPagesWithContent().indexOf(pageNumber) + 1} of {getPagesWithContent().length}
          </div>
        )}
      </div>
    );
  };

  const renderTemplate = (pageNumber) => {
    const pageData = getDataByPage(pageNumber);
    return <CeoTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const actualPages = getPagesWithContent().length;
  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>CEO Resume Builder | Executive Leadership Across Industries</title>
        <meta name="description" content="Build a powerful executive resume for CEOs, founders, and C-suite leaders. Highlight P&L, strategy, board experience, and transformational impact." />
      </Head>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Your <span className={styles.gradientText}>CEO Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              For CEOs, founders, and C-suite executives across all industries.
              Showcase your strategic vision, P&L leadership, and transformational impact.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.singleColumnLayout}>
        {/* Preview */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton}>
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                className={styles.downloadButton}
                disabled={isGeneratingPDF || actualPages === 0}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating...' : `Download PDF (${actualPages} page${actualPages !== 1 ? 's' : ''})`}
              </button>
            </div>
          </div>
          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i + 1}
                    className={`${styles.resumePreview} ${currentPage === i + 1 ? styles.activePreview : styles.inactivePreview}`}
                    ref={resumeRefs[i]}
                  >
                    {renderTemplate(i + 1)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.previewNavigation}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={styles.previewNavButton}
            >
              <FiChevronLeft /> Previous Page
            </button>
            <div className={styles.previewPageInfo}>
              Page {currentPage} of {totalPages}
              {actualPages > 0 && <span className={styles.contentPagesInfo}>({actualPages} with content)</span>}
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={styles.previewNavButton}
            >
              Next Page <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formSection}>
          <div className={styles.pageManagement}>
            <div className={styles.pageControls}>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={styles.pageButton}>
                <FiChevronLeft /> Previous
              </button>
              <div className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
                {actualPages > 0 && <span className={styles.contentPagesInfo}>({actualPages} with content)</span>}
              </div>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={styles.pageButton}>
                Next <FiChevronRight />
              </button>
            </div>
            <div className={styles.pageActions}>
              {totalPages < 5 && <button onClick={addNewPage} className={styles.addPageButton}><FiPlus /> Add Page</button>}
              {totalPages > 1 && <button onClick={removeLastPage} className={styles.removePageButton}><FiX /> Remove Last Page</button>}
            </div>
          </div>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'leadership', label: 'Executive Roles', icon: <FiBarChart2 /> },
              { id: 'strategy', label: 'Strategy & Impact', icon: <FiTrendingUp /> },
              { id: 'governance', label: 'Board & Education', icon: <FiUsers /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className={styles.formContent}>
            {/* Personal */}
            {activeSection === 'personal' && currentPage === 1 && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiUser /> Executive Profile</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Alexandra Morgan" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="alex@globalcorp.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="New York, NY" className={styles.formInput} />
                    </label>
                  </div>
                </div>
                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Executive Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Visionary CEO with 15+ years leading Fortune 500 and high-growth startups..."
                      required
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Executive Presence</h4>
                  <div className={styles.socialInput}>
                    <select value={currentSocialLink.platform} onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} className={styles.formSelect}>
                      <option value="">Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter">Twitter/X</option>
                      <option value="Portfolio">Executive Portfolio</option>
                    </select>
                    <input type="url" placeholder="URL" value={currentSocialLink.url} onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSocialLink} className={styles.addButton} disabled={!currentSocialLink.platform || !currentSocialLink.url}>
                        <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add'}
                      </button>
                      {currentSocialLink.isEditing && (
                        <button type="button" onClick={() => setCurrentSocialLink(defaultSocialLink())} className={styles.cancelButton}>
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.socialLinks.length === 0 ? (
                      <p className={styles.emptyMessage}>No links added</p>
                    ) : (
                      formData.socialLinks.map((link, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span>{link.platform}</span>
                            <span>{formatUrl(link.url)}</span>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSocialLink(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteSocialLink(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Executive Roles */}
            {activeSection === 'leadership' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBarChart2 /> Executive Leadership – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Title*
                      <input value={currentLeadershipRole.title} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, title: e.target.value })} placeholder="Chief Executive Officer" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input value={currentLeadershipRole.company} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, company: e.target.value })} placeholder="Global Innovations Inc." required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Industry / Sector
                    <input value={currentLeadershipRole.industry} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, industry: e.target.value })} placeholder="Technology" className={styles.formInput} />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input type="text" placeholder="MM/YYYY" value={currentLeadershipRole.startDate} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, startDate: e.target.value })} required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input type="text" placeholder="MM/YYYY or Present" value={currentLeadershipRole.endDate} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, endDate: e.target.value })} className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Key Achievements*
                    <textarea value={currentLeadershipRole.achievements} onChange={(e) => setCurrentLeadershipRole({ ...currentLeadershipRole, achievements: e.target.value })} placeholder="• Grew revenue from $50M to $300M in 4 years..." required className={styles.formTextarea} rows="4" />
                  </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addLeadershipRole} className={styles.addButton} disabled={!currentLeadershipRole.title || !currentLeadershipRole.company || !currentLeadershipRole.startDate}>
                      <FiPlus /> Add Role
                    </button>
                    {currentLeadershipRole.isEditing && <button type="button" onClick={() => setCurrentLeadershipRole(defaultLeadershipRole())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
              </div>
            )}

            {/* Strategy & Impact */}
            {activeSection === 'strategy' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTrendingUp /> Strategic Initiatives – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Initiative Title*
                      <input value={currentStrategicInitiative.title} onChange={(e) => setCurrentStrategicInitiative({ ...currentStrategicInitiative, title: e.target.value })} placeholder="Digital Transformation Program" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Impact Metric
                      <input value={currentStrategicInitiative.impact} onChange={(e) => setCurrentStrategicInitiative({ ...currentStrategicInitiative, impact: e.target.value })} placeholder="Increased EBITDA by 35%" className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Description*
                    <textarea value={currentStrategicInitiative.description} onChange={(e) => setCurrentStrategicInitiative({ ...currentStrategicInitiative, description: e.target.value })} placeholder="Led enterprise-wide digital overhaul..." required className={styles.formTextarea} rows="3" />
                  </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addStrategicInitiative} className={styles.addButton} disabled={!currentStrategicInitiative.title || !currentStrategicInitiative.description}>
                      <FiPlus /> Add Initiative
                    </button>
                    {currentStrategicInitiative.isEditing && <button type="button" onClick={() => setCurrentStrategicInitiative(defaultStrategicInitiative())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4>Core Competencies</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentSkill.name} onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} placeholder="P&L Management, M&A, Investor Relations" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSkill} className={styles.addButton} disabled={!currentSkill.name.trim()}>
                        <FiPlus /> Add Skill
                      </button>
                      {currentSkill.isEditing && <button type="button" onClick={() => setCurrentSkill(defaultSkill())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Board & Education */}
            {activeSection === 'governance' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiUsers /> Board & Governance – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.skillsInput}>
                    <input value={currentBoardRole.organization} onChange={(e) => setCurrentBoardRole({ ...currentBoardRole, organization: e.target.value })} placeholder="TechFuture Foundation" className={styles.formInput} />
                    <input value={currentBoardRole.role} onChange={(e) => setCurrentBoardRole({ ...currentBoardRole, role: e.target.value })} placeholder="Board Member" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formGroup} style={{ marginTop: '0.5rem' }}>
                      <input type="text" placeholder="Start (MM/YYYY)" value={currentBoardRole.startDate} onChange={(e) => setCurrentBoardRole({ ...currentBoardRole, startDate: e.target.value })} className={styles.formInput} />
                      <input type="text" placeholder="End (MM/YYYY or Present)" value={currentBoardRole.endDate} onChange={(e) => setCurrentBoardRole({ ...currentBoardRole, endDate: e.target.value })} className={styles.formInput} />
                    </div>
                    <div className={styles.formActions}>
                      <button type="button" onClick={addBoardRole} className={styles.addButton} disabled={!currentBoardRole.organization || !currentBoardRole.role}>
                        <FiPlus /> Add Role
                      </button>
                      {currentBoardRole.isEditing && <button type="button" onClick={() => setCurrentBoardRole(defaultBoardRole())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4>Education</h4>
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Institution*
                        <input value={currentEducation.institution} onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} placeholder="Harvard Business School" required className={styles.formInput} />
                      </label>
                      <label className={styles.formLabel}>
                        Degree*
                        <input value={currentEducation.degree} onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} placeholder="Master of Business Administration (MBA)" required className={styles.formInput} />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Field / Focus
                      <input value={currentEducation.field} onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} placeholder="Finance & Strategy" className={styles.formInput} />
                    </label>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Start Date
                        <input type="text" placeholder="MM/YYYY" value={currentEducation.startDate} onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} className={styles.formInput} />
                      </label>
                      <label className={styles.formLabel}>
                        End Date
                        <input type="text" placeholder="MM/YYYY or Expected" value={currentEducation.endDate} onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} className={styles.formInput} />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Honors / Distinctions
                      <input value={currentEducation.honors} onChange={(e) => setCurrentEducation({ ...currentEducation, honors: e.target.value })} placeholder="Baker Scholar, Dean's List" className={styles.formInput} />
                    </label>
                    <div className={styles.formActions}>
                      <button type="button" onClick={addEducation} className={styles.addButton} disabled={!currentEducation.institution || !currentEducation.degree}>
                        <FiPlus /> Add Education
                      </button>
                      {currentEducation.isEditing && <button type="button" onClick={() => setCurrentEducation(defaultEducation())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full CEO Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              {Array.from({ length: totalPages }, (_, i) => (
                <div key={i + 1} className={styles.fullPreviewPage}>
                  {renderTemplate(i + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ceoresume;