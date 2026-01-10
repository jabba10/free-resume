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
  FiBriefcase,
  FiBook,
  FiAward,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiFileText
} from 'react-icons/fi';
import styles from './GovernmentResume.module.css';

const Resume = () => {
  // --- Default item factories ---
  const defaultExperience = () => ({
    organization: '',
    role: '',
    department: '',
    startDate: '',
    endDate: '',
    description: '',
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
  const defaultCertification = () => ({
    name: '',
    issuingBody: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultLanguage = () => ({
    name: '',
    proficiency: '',
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
  const defaultProject = () => ({
    name: '',
    role: '',
    outcome: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: [],
    socialLinks: [],
    projects: []
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [currentProject, setCurrentProject] = useState(defaultProject());

  const [activeSection, setActiveSection] = useState('personal');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ FIXED: useRef must be called statically at top level
  const resumeRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      personal: <FiGlobe />
    };
    return icons[platform.toLowerCase()] || <FiGlobe />;
  };

  const formatSocialUrl = (url) => {
    if (!url) return '';
    return url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const pageHasContent = (pageNumber) => {
    if (pageNumber === 1) {
      if (formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0) {
        return true;
      }
    }
    const pageData = getDataByPage(pageNumber);
    return (
      pageData.experience.length > 0 ||
      pageData.education.length > 0 ||
      pageData.skills.length > 0 ||
      pageData.certifications.length > 0 ||
      pageData.languages.length > 0 ||
      pageData.projects.length > 0
    );
  };

  const getPagesWithContent = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (pageHasContent(i)) pages.push(i);
    }
    return pages;
  };

  // --- Page Management ---
  const addNewPage = () => totalPages < 5 && setTotalPages(p => p + 1);

  const removeLastPage = () => {
    if (totalPages <= 1) return;
    setTotalPages(p => {
      const newTotal = p - 1;
      const shift = (items) => items.map(i => i.page === p ? { ...i, page: newTotal } : i);
      setFormData(f => ({
        ...f,
        experience: shift(f.experience),
        education: shift(f.education),
        skills: shift(f.skills),
        certifications: shift(f.certifications),
        languages: shift(f.languages),
        projects: shift(f.projects)
      }));
      if (currentPage > newTotal) setCurrentPage(newTotal);
      return newTotal;
    });
  };

  // --- Reusable CRUD ---
  const createAdd = (key, current, setter, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current, page: currentPage };
    if (item.isEditing) {
      const updated = [...formData[key]];
      updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
      setFormData({ ...formData, [key]: updated });
    } else {
      setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] });
    }
    setter(defaultExperience());
  };

  const createEdit = (key, setter) => (index) => {
    const item = formData[key][index];
    setter({ ...item, isEditing: true, editIndex: index });
    setCurrentPage(item.page);
  };

  const createDelete = (key) => (index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const addExperience = createAdd('experience', currentExperience, setCurrentExperience, () => currentExperience.organization && currentExperience.role && currentExperience.startDate);
  const editExperience = createEdit('experience', setCurrentExperience);
  const deleteExperience = createDelete('experience');

  const addEducation = createAdd('education', currentEducation, setCurrentEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEdit('education', setCurrentEducation);
  const deleteEducation = createDelete('education');

  const addSkill = createAdd('skills', currentSkill, setCurrentSkill, () => currentSkill.name.trim());
  const editSkill = createEdit('skills', setCurrentSkill);
  const deleteSkill = createDelete('skills');

  const addCertification = createAdd('certifications', currentCertification, setCurrentCertification, () => currentCertification.name.trim());
  const editCertification = createEdit('certifications', setCurrentCertification);
  const deleteCertification = createDelete('certifications');

  const addLanguage = createAdd('languages', currentLanguage, setCurrentLanguage, () => currentLanguage.name.trim());
  const editLanguage = createEdit('languages', setCurrentLanguage);
  const deleteLanguage = createDelete('languages');

  const addProject = createAdd('projects', currentProject, setCurrentProject, () => currentProject.name && currentProject.role);
  const editProject = createEdit('projects', setCurrentProject);
  const deleteProject = createDelete('projects');

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
    experience: formData.experience.filter(e => e.page === page),
    education: formData.education.filter(e => e.page === page),
    skills: formData.skills.filter(s => s.page === page),
    certifications: formData.certifications.filter(c => c.page === page),
    languages: formData.languages.filter(l => l.page === page),
    projects: formData.projects.filter(p => p.page === page)
  });

  // --- PDF Generation ---
  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pagesWithContent = getPagesWithContent();
      if (pagesWithContent.length === 0) {
        alert("Please add content before generating PDF.");
        return;
      }

      // ❌ REMOVED: originalStates (was unused)

      for (let i = 0; i < pagesWithContent.length; i++) {
        const pageNum = pagesWithContent[i];
        const el = resumeRefs[pageNum - 1]?.current;
        if (!el) continue;

        // Apply temporary styles for screenshot
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

        // Restore original inline styles
        Object.assign(el.style, {
          display: '',
          position: '',
          width: '',
          height: '',
          transform: '',
          zIndex: '',
          visibility: '',
          opacity: '',
          background: '',
          color: ''
        });
      }

      pdf.save(`${formData.fullName || 'public_service_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Public Service Template ---
  const PublicServiceTemplate = ({ formData, pageData, pageNumber }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasProjects = pageData.projects.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasCertifications = pageData.certifications.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.publicServiceTemplate}>
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
                  {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
                </div>
              ))}
            </div>
          </header>
        )}

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.summaryText}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
            {pageData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3>{exp.role}</h3>
                  <p className={styles.company}>{exp.organization}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(l => l.trim()).map((line, j) => <li key={j}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>KEY INITIATIVES & PROGRAMS</h2>
            {pageData.projects.map((proj, i) => (
              <div key={i} className={styles.projectItem}>
                <h3>{proj.name} – {proj.role}</h3>
                <ul className={styles.bulletList}>
                  {proj.outcome.split('\n').filter(l => l.trim()).map((line, j) => <li key={j}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
            {pageData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                <p className={styles.institution}>{edu.institution} | {edu.startDate} – {edu.endDate || 'Present'}</p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CERTIFICATIONS & TRAINING</h2>
            <ul className={styles.bulletList}>
              {pageData.certifications.map((cert, i) => (
                <li key={i}>{cert.name}{cert.issuingBody && ` – ${cert.issuingBody}`}</li>
              ))}
            </ul>
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CORE COMPETENCIES</h2>
            <ul className={styles.skillsList}>
              {pageData.skills.map((s, i) => <li key={i}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <ul className={styles.bulletList}>
              {pageData.languages.map((l, i) => (
                <li key={i}>{l.name}{l.proficiency && ` (${l.proficiency})`}</li>
              ))}
            </ul>
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
    return <PublicServiceTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} />;
  };

  const actualPagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Public Service Resume Builder | Government, Education & Non-Profit</title>
        <meta name="description" content="Create a professional resume for government, education, and non-profit roles. Highlight public service, policy, teaching, and community impact." />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Your <span className={styles.gradientText}>Public Service Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Designed for government workers, educators, and non-profit professionals.
              Showcase policy work, teaching experience, grants, and community programs.
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
                disabled={isGeneratingPDF || actualPagesWithContent === 0}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating...' : `Download PDF (${actualPagesWithContent} page${actualPagesWithContent !== 1 ? 's' : ''})`}
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
              <FiChevronLeft /> Previous
            </button>
            <div className={styles.previewPageInfo}>
              Page {currentPage} of {totalPages}
              {actualPagesWithContent > 0 && <span className={styles.contentPagesInfo}>({actualPagesWithContent} with content)</span>}
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={styles.previewNavButton}
            >
              Next <FiChevronRight />
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
                {actualPagesWithContent > 0 && <span className={styles.contentPagesInfo}>({actualPagesWithContent} with content)</span>}
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
              { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
              { id: 'projects', label: 'Initiatives', icon: <FiFileText /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Skills', icon: <FiAward /> },
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
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Maria Lopez" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="maria@publicservice.org" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Washington, DC" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Dedicated public servant with 8+ years in education policy and community program development..."
                      required
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Professional Links</h4>
                  <div className={styles.socialInput}>
                    <select value={currentSocialLink.platform} onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} className={styles.formSelect}>
                      <option value="">Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Website">Website</option>
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
                            <span>{formatSocialUrl(link.url)}</span>
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

            {/* Experience */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Work Experience – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Role*
                      <input value={currentExperience.role} onChange={(e) => setCurrentExperience({ ...currentExperience, role: e.target.value })} placeholder="Program Manager" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Organization*
                      <input value={currentExperience.organization} onChange={(e) => setCurrentExperience({ ...currentExperience, organization: e.target.value })} placeholder="Department of Education" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                      Department / Division
                      <input value={currentExperience.department} onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} placeholder="Office of Community Engagement" className={styles.formInput} />
                    </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input type="text" placeholder="MM/YYYY" value={currentExperience.startDate} onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input type="text" placeholder="MM/YYYY or Present" value={currentExperience.endDate} onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                      Key Responsibilities*
                      <textarea value={currentExperience.description} onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} placeholder="• Led $2M grant program for after-school initiatives..." required className={styles.formTextarea} rows="4" />
                    </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addExperience} className={styles.addButton} disabled={!currentExperience.role || !currentExperience.organization || !currentExperience.startDate}>
                      <FiPlus /> {currentExperience.isEditing ? 'Update' : 'Add Experience'}
                    </button>
                    {currentExperience.isEditing && <button type="button" onClick={() => setCurrentExperience(defaultExperience())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4>Your Experience on Page {currentPage}</h4>
                  {getDataByPage(currentPage).experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No experience added</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).experience.map((exp, i) => {
                        const globalIdx = formData.experience.findIndex(e => e === exp);
                        return (
                          <div key={i} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong>{exp.role}</strong>
                                <span>at {exp.organization}</span>
                              </div>
                              <div className={styles.itemMeta}>
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                <span className={styles.pageBadge}>Page {exp.page}</span>
                              </div>
                              <div className={styles.itemDescription}>
                                {exp.description.split('\n').filter(l => l.trim()).map((line, j) => <p key={j} className={styles.bulletPoint}>• {line}</p>)}
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editExperience(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Projects (Initiatives) */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiFileText /> Key Initiatives – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Initiative Name*
                      <input value={currentProject.name} onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} placeholder="Youth Mentorship Program" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Your Role*
                      <input value={currentProject.role} onChange={(e) => setCurrentProject({ ...currentProject, role: e.target.value })} placeholder="Lead Coordinator" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                      Outcomes & Impact*
                      <textarea value={currentProject.outcome} onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })} placeholder="• Served 500+ students; improved graduation rates by 15%..." required className={styles.formTextarea} rows="4" />
                    </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addProject} className={styles.addButton} disabled={!currentProject.name || !currentProject.role}>
                      <FiPlus /> {currentProject.isEditing ? 'Update' : 'Add Initiative'}
                    </button>
                    {currentProject.isEditing && <button type="button" onClick={() => setCurrentProject(defaultProject())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4>Your Initiatives on Page {currentPage}</h4>
                  {getDataByPage(currentPage).projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No initiatives added</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).projects.map((proj, i) => {
                        const globalIdx = formData.projects.findIndex(p => p === proj);
                        return (
                          <div key={i} className={styles.listItem}>
                            <div className={styles.itemHeader}>
                              <strong>{proj.name}</strong> – <em>{proj.role}</em>
                            </div>
                            <div className={styles.itemDescription}>
                              {proj.outcome.split('\n').filter(l => l.trim()).map((line, j) => <p key={j} className={styles.bulletPoint}>• {line}</p>)}
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editProject(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                              <button onClick={() => deleteProject(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Education & Skills */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input value={currentEducation.institution} onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} placeholder="Harvard University" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input value={currentEducation.degree} onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} placeholder="MPA – Master of Public Administration" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                      Field of Study
                      <input value={currentEducation.field} onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} placeholder="Public Policy" className={styles.formInput} />
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
                  <div className={styles.formActions}>
                    <button type="button" onClick={addEducation} className={styles.addButton} disabled={!currentEducation.institution || !currentEducation.degree}>
                      <FiPlus /> {currentEducation.isEditing ? 'Update' : 'Add Education'}
                    </button>
                    {currentEducation.isEditing && <button type="button" onClick={() => setCurrentEducation(defaultEducation())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4>Your Education on Page {currentPage}</h4>
                  {getDataByPage(currentPage).education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).education.map((edu, i) => {
                        const globalIdx = formData.education.findIndex(e => e === edu);
                        return (
                          <div key={i} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong>{edu.degree}</strong>
                                {edu.field && <span> in {edu.field}</span>}
                              </div>
                              <div className={styles.itemMeta}>
                                <span>{edu.institution}</span>
                                <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                                <span className={styles.pageBadge}>Page {edu.page}</span>
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editEducation(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                              <button onClick={() => deleteEducation(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Core Competencies – Page {currentPage}</h3>

                {/* Skills */}
                <div className={styles.formCard}>
                  <div className={styles.skillsInput}>
                    <input value={currentSkill.name} onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} placeholder="Stakeholder Engagement" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSkill} className={styles.addButton} disabled={!currentSkill.name.trim()}>
                        <FiPlus /> {currentSkill.isEditing ? 'Update' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && <button type="button" onClick={() => setCurrentSkill(defaultSkill())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4>Certifications – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentCertification.name} onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} placeholder="Certified Public Manager (CPM)" className={styles.formInput} />
                    <input value={currentCertification.issuingBody} onChange={(e) => setCurrentCertification({ ...currentCertification, issuingBody: e.target.value })} placeholder="National CPM Consortium" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addCertification} className={styles.addButton} disabled={!currentCertification.name.trim()}>
                        <FiPlus /> {currentCertification.isEditing ? 'Update' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && <button type="button" onClick={() => setCurrentCertification(defaultCertification())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).certifications.map((cert, i) => {
                      const globalIdx = formData.certifications.findIndex(c => c === cert);
                      return (
                        <div key={i} className={styles.listItem}>
                          <div>{cert.name}{cert.issuingBody && ` – ${cert.issuingBody}`}</div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editCertification(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteCertification(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4>Languages – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentLanguage.name} onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} placeholder="Spanish" className={styles.formInput} />
                    <input value={currentLanguage.proficiency} onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} placeholder="Fluent" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addLanguage} className={styles.addButton} disabled={!currentLanguage.name.trim()}>
                        <FiPlus /> {currentLanguage.isEditing ? 'Update' : 'Add Language'}
                      </button>
                      {currentLanguage.isEditing && <button type="button" onClick={() => setCurrentLanguage(defaultLanguage())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).languages.map((l, i) => {
                      const globalIdx = formData.languages.findIndex(x => x === l);
                      return (
                        <div key={i} className={styles.listItem}>
                          <div>{l.name}{l.proficiency && ` (${l.proficiency})`}</div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editLanguage(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills List */}
                <div className={styles.formCard}>
                  <h4>Your Skills on Page {currentPage}</h4>
                  {getDataByPage(currentPage).skills.length === 0 ? (
                    <p className={styles.emptyMessage}>No skills added</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).skills.map((s, i) => {
                        const globalIdx = formData.skills.findIndex(x => x === s);
                        return (
                          <div key={i} className={styles.listItem}>
                            <span>{s.name}</span>
                            <div className={styles.itemActions}>
                              <button onClick={() => editSkill(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                              <button onClick={() => deleteSkill(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
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
              <h3>Full Public Service Resume Preview</h3>
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

export default Resume;