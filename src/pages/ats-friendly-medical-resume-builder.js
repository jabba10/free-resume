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
  FiHeart,
  FiBook,
  FiActivity,
  FiShield,
  FiGlobe,
  // ❌ Removed unused: FiUsers
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import styles from './Resume.module.css';

const Resume = () => {
  // --- Default item factories ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
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
    program: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultSpecialty = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultLicense = () => ({
    name: '',
    issuingAuthority: '',
    licenseNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultAffiliation = () => ({
    organization: '',
    role: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultProcedure = () => ({
    name: '',
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

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    specialties: [],
    licenses: [],
    affiliations: [],
    procedures: [],
    languages: [],
    socialLinks: []
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentLicense, setCurrentLicense] = useState(defaultLicense());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentProcedure, setCurrentProcedure] = useState(defaultProcedure());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

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
      doximity: <FiHeart />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />
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
      pageData.specialties.length > 0 ||
      pageData.licenses.length > 0 ||
      pageData.affiliations.length > 0 ||
      pageData.procedures.length > 0 ||
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

  // --- Page Management ---
  const addNewPage = () => totalPages < 5 && setTotalPages(p => p + 1);

  const removeLastPage = () => {
    if (totalPages <= 1) return;
    setTotalPages(p => {
      const newTotal = p - 1;
      const shiftPage = (items) => items.map(i => i.page === p ? { ...i, page: newTotal } : i);
      setFormData(f => ({
        ...f,
        experience: shiftPage(f.experience),
        education: shiftPage(f.education),
        specialties: shiftPage(f.specialties),
        licenses: shiftPage(f.licenses),
        affiliations: shiftPage(f.affiliations),
        procedures: shiftPage(f.procedures),
        languages: shiftPage(f.languages)
      }));
      if (currentPage > newTotal) setCurrentPage(newTotal);
      return newTotal;
    });
  };

  // --- Item CRUD Functions ---
  const createAddFunction = (key, current, setter, isValid) => () => {
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

  const createEditFunction = (key, setter) => (index) => {
    const item = formData[key][index];
    setter({ ...item, isEditing: true, editIndex: index });
    setCurrentPage(item.page);
  };

  const createDeleteFunction = (key) => (index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSpecialty = createAddFunction('specialties', currentSpecialty, setCurrentSpecialty, () => currentSpecialty.name.trim());
  const editSpecialty = createEditFunction('specialties', setCurrentSpecialty);
  const deleteSpecialty = createDeleteFunction('specialties');

  const addLicense = createAddFunction('licenses', currentLicense, setCurrentLicense, () => currentLicense.name.trim());
  const editLicense = createEditFunction('licenses', setCurrentLicense);
  const deleteLicense = createDeleteFunction('licenses');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, () => currentAffiliation.organization.trim());
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addProcedure = createAddFunction('procedures', currentProcedure, setCurrentProcedure, () => currentProcedure.name.trim());
  const editProcedure = createEditFunction('procedures', setCurrentProcedure);
  const deleteProcedure = createDeleteFunction('procedures');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, () => currentLanguage.name.trim());
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

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
    specialties: formData.specialties.filter(s => s.page === page),
    licenses: formData.licenses.filter(l => l.page === page),
    affiliations: formData.affiliations.filter(a => a.page === page),
    procedures: formData.procedures.filter(p => p.page === page),
    languages: formData.languages.filter(l => l.page === page)
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

      const originalStates = [];
      for (let i = 0; i < pagesWithContent.length; i++) {
        const pageNum = pagesWithContent[i];
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
                n.style.fontFamily = "'Helvetica Neue', 'Arial', sans-serif";
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

      pdf.save(`${formData.fullName || 'healthcare_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const HealthcareTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasSpecialties = pageData.specialties.length > 0;
    const hasLicenses = pageData.licenses.length > 0;
    const hasAffiliations = pageData.affiliations.length > 0;
    const hasProcedures = pageData.procedures.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.healthcareTemplate}>
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
            <h2 className={styles.sectionTitle}>CLINICAL & PROFESSIONAL EXPERIENCE</h2>
            {pageData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3>{exp.position}</h3>
                  <p className={styles.company}>{exp.employer}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION & TRAINING</h2>
            {pageData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3>{edu.degree}{edu.program && ` – ${edu.program}`}</h3>
                <p className={styles.institution}>{edu.institution} | {edu.startDate} – {edu.endDate || 'Present'}</p>
              </div>
            ))}
          </section>
        )}

        {hasSpecialties && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>AREAS OF SPECIALTY</h2>
            <ul className={styles.skillsList}>
              {pageData.specialties.map((s, i) => <li key={i}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasLicenses && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LICENSES & CERTIFICATIONS</h2>
            {pageData.licenses.map((l, i) => (
              <div key={i} className={styles.licenseItem}>
                <strong>{l.name}</strong>
                {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                {l.licenseNumber && ` (License #: ${l.licenseNumber})`}
                {l.expiryDate && ` – Expires: ${l.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasProcedures && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROCEDURES & TECHNICAL SKILLS</h2>
            <ul className={styles.bulletList}>
              {pageData.procedures.map((p, i) => <li key={i}>{p.name}</li>)}
            </ul>
          </section>
        )}

        {hasAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL AFFILIATIONS</h2>
            {pageData.affiliations.map((a, i) => (
              <div key={i} className={styles.affiliationItem}>
                <strong>{a.organization}</strong>
                {a.role && ` – ${a.role}`}
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <ul className={styles.bulletList}>
              {pageData.languages.map((l, i) => (
                <li key={i}>
                  {l.name}{l.proficiency && ` (${l.proficiency})`}
                </li>
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
    return <HealthcareTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const actualPagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Healthcare Resume Builder | Medical & Clinical Professionals</title>
        <meta name="description" content="Create a professional, ATS-friendly healthcare resume for nurses, physicians, therapists, and medical staff. Download as PDF instantly." />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Your <span className={styles.gradientText}>Healthcare Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Tailored for nurses, doctors, therapists, lab techs, and all medical professionals.
              Highlight licenses, clinical experience, and patient care expertise.
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
              { id: 'experience', label: 'Clinical Experience', icon: <FiHeart /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'specialties', label: 'Specialties', icon: <FiActivity /> },
              { id: 'licenses', label: 'Licenses', icon: <FiShield /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, RN" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane@healthcare.com" required className={styles.formInput} />
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
                    Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate Registered Nurse with 5+ years in ICU and ER settings..."
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
                      <option value="Doximity">Doximity</option>
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

            {/* Clinical Experience */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiHeart /> Clinical Experience – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position*
                      <input value={currentExperience.position} onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} placeholder="Registered Nurse" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Employer*
                      <input value={currentExperience.employer} onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} placeholder="City General Hospital" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Department / Unit
                    <input value={currentExperience.department} onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} placeholder="Emergency Department" className={styles.formInput} />
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
                    Key Responsibilities & Achievements*
                    <textarea value={currentExperience.description} onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} placeholder="• Managed 6+ ICU patients daily..." required className={styles.formTextarea} rows="4" />
                  </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addExperience} className={styles.addButton} disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}>
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
                                <strong>{exp.position}</strong>
                                <span>at {exp.employer}</span>
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

            {/* Education */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input value={currentEducation.institution} onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} placeholder="Johns Hopkins University" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input value={currentEducation.degree} onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} placeholder="BSN – Bachelor of Science in Nursing" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Program / Specialization
                    <input value={currentEducation.program} onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} placeholder="Critical Care Nursing" className={styles.formInput} />
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
                                {edu.program && <span> – {edu.program}</span>}
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

            {/* Specialties, Licenses, etc. */}
            {activeSection === 'specialties' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiActivity /> Areas of Specialty – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.skillsInput}>
                    <input value={currentSpecialty.name} onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} placeholder="Pediatric Care" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSpecialty} className={styles.addButton} disabled={!currentSpecialty.name.trim()}>
                        <FiPlus /> {currentSpecialty.isEditing ? 'Update' : 'Add Specialty'}
                      </button>
                      {currentSpecialty.isEditing && <button type="button" onClick={() => setCurrentSpecialty(defaultSpecialty())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).specialties.map((s, i) => {
                      const globalIdx = formData.specialties.findIndex(x => x === s);
                      return (
                        <div key={i} className={styles.listItem}>
                          <span>{s.name}</span>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSpecialty(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteSpecialty(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                    {getDataByPage(currentPage).specialties.length === 0 && <p className={styles.emptyMessage}>No specialties added</p>}
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4><FiShield /> Licenses & Certifications – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentLicense.name} onChange={(e) => setCurrentLicense({ ...currentLicense, name: e.target.value })} placeholder="RN License – State of California" className={styles.formInput} />
                    <input value={currentLicense.issuingAuthority} onChange={(e) => setCurrentLicense({ ...currentLicense, issuingAuthority: e.target.value })} placeholder="CA BRN" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <input value={currentLicense.licenseNumber} onChange={(e) => setCurrentLicense({ ...currentLicense, licenseNumber: e.target.value })} placeholder="License #" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <input value={currentLicense.expiryDate} onChange={(e) => setCurrentLicense({ ...currentLicense, expiryDate: e.target.value })} placeholder="Expiry (MM/YYYY)" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addLicense} className={styles.addButton} disabled={!currentLicense.name.trim()}>
                        <FiPlus /> {currentLicense.isEditing ? 'Update' : 'Add License'}
                      </button>
                      {currentLicense.isEditing && <button type="button" onClick={() => setCurrentLicense(defaultLicense())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).licenses.map((l, i) => {
                      const globalIdx = formData.licenses.findIndex(x => x === l);
                      return (
                        <div key={i} className={styles.listItem}>
                          <div>
                            <strong>{l.name}</strong>
                            {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                            {l.licenseNumber && ` (#${l.licenseNumber})`}
                            {l.expiryDate && ` – Expires: ${l.expiryDate}`}
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editLicense(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteLicense(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                    {getDataByPage(currentPage).licenses.length === 0 && <p className={styles.emptyMessage}>No licenses added</p>}
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Procedures & Technical Skills – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentProcedure.name} onChange={(e) => setCurrentProcedure({ ...currentProcedure, name: e.target.value })} placeholder="IV Insertion, Phlebotomy, ECG" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addProcedure} className={styles.addButton} disabled={!currentProcedure.name.trim()}>
                        <FiPlus /> {currentProcedure.isEditing ? 'Update' : 'Add Skill'}
                      </button>
                      {currentProcedure.isEditing && <button type="button" onClick={() => setCurrentProcedure(defaultProcedure())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).procedures.map((p, i) => {
                      const globalIdx = formData.procedures.findIndex(x => x === p);
                      return (
                        <div key={i} className={styles.listItem}>
                          <span>{p.name}</span>
                          <div className={styles.itemActions}>
                            <button onClick={() => editProcedure(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteProcedure(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                    {getDataByPage(currentPage).procedures.length === 0 && <p className={styles.emptyMessage}>No procedures added</p>}
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Professional Affiliations – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentAffiliation.organization} onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} placeholder="American Nurses Association" className={styles.formInput} />
                    <input value={currentAffiliation.role} onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, role: e.target.value })} placeholder="Member" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addAffiliation} className={styles.addButton} disabled={!currentAffiliation.organization.trim()}>
                        <FiPlus /> {currentAffiliation.isEditing ? 'Update' : 'Add Affiliation'}
                      </button>
                      {currentAffiliation.isEditing && <button type="button" onClick={() => setCurrentAffiliation(defaultAffiliation())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).affiliations.map((a, i) => {
                      const globalIdx = formData.affiliations.findIndex(x => x === a);
                      return (
                        <div key={i} className={styles.listItem}>
                          <div>
                            <strong>{a.organization}</strong>
                            {a.role && ` – ${a.role}`}
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editAffiliation(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteAffiliation(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                    {getDataByPage(currentPage).affiliations.length === 0 && <p className={styles.emptyMessage}>No affiliations added</p>}
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Languages – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentLanguage.name} onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} placeholder="Spanish" className={styles.formInput} />
                    <input value={currentLanguage.proficiency} onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} placeholder="Fluent, Medical Terminology" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
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
                          <div>
                            {l.name}{l.proficiency && ` (${l.proficiency})`}
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editLanguage(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      );
                    })}
                    {getDataByPage(currentPage).languages.length === 0 && <p className={styles.emptyMessage}>No languages added</p>}
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
              <h3>Full Healthcare Resume Preview</h3>
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